import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import User from "../models/User.js";
import { authRequired } from "../middleware/auth.js";
import { signToken } from "../utils/token.js";

const router = Router();
const OTP_TTL_MS = 5 * 60 * 1000;
const OTP_COOLDOWN_MS = 60 * 1000;
const MAX_OTP_ATTEMPTS = 5;

function safeUser(user){return {id:user._id,name:user.name,email:user.email,role:user.role};}
function normalizeEmail(value){return String(value||"").trim().toLowerCase();}
function makeOtp(){return String(crypto.randomInt(100000,1000000));}
async function sendOtpEmail(email,otp){
  if(process.env.RESEND_API_KEY && process.env.MAIL_FROM){
    const response=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:`Bearer ${process.env.RESEND_API_KEY}`,"Content-Type":"application/json"},body:JSON.stringify({from:process.env.MAIL_FROM,to:[email],subject:"Your CodeFusion password reset code",html:`<div style="font-family:Arial,sans-serif;max-width:520px;margin:auto"><h2>CodeFusion password reset</h2><p>Your verification code is:</p><div style="font-size:32px;font-weight:700;letter-spacing:8px">${otp}</div><p>This code expires in 5 minutes.</p><p>If you did not request a password reset, you can ignore this email.</p></div>`})});
    if(!response.ok){const text=await response.text();throw new Error(`Email provider failed: ${text}`);}
    return;
  }
  console.log(`[CodeFusion OTP] ${email}: ${otp}`);
}

router.post("/register",async(req,res,next)=>{try{const{name,email,password}=req.body;const normalized=normalizeEmail(email);if(!name||!normalized||!password||password.length<8)return res.status(400).json({message:"Name, email and an 8+ character password are required."});if(await User.findOne({email:normalized}))return res.status(409).json({message:"An account with this email already exists."});const passwordHash=await bcrypt.hash(password,12);const user=await User.create({name:name.trim(),email:normalized,passwordHash});res.status(201).json({token:signToken(user),user:safeUser(user)});}catch(e){next(e)}});

async function login(req,res,next,adminOnly=false){try{const{email,password}=req.body;const user=await User.findOne({email:normalizeEmail(email)});if(!user||!(await bcrypt.compare(password||"",user.passwordHash)))return res.status(401).json({message:"Invalid email or password."});if(adminOnly&&user.role!=="admin")return res.status(403).json({message:"Administrator account required."});res.json({token:signToken(user),user:safeUser(user)});}catch(e){next(e)}}
router.post("/login",(req,res,next)=>login(req,res,next,false));
router.post("/admin-login",(req,res,next)=>login(req,res,next,true));

router.post("/forgot-password",async(req,res,next)=>{try{const email=normalizeEmail(req.body.email);if(!email)return res.status(400).json({message:"Email is required."});const user=await User.findOne({email});const response={message:"If an account exists for that email, a verification code has been sent."};if(!user)return res.json(response);if(user.resetOtpSentAt&&Date.now()-user.resetOtpSentAt.getTime()<OTP_COOLDOWN_MS)return res.json(response);const otp=makeOtp();user.resetOtpHash=await bcrypt.hash(otp,10);user.resetOtpExpires=new Date(Date.now()+OTP_TTL_MS);user.resetOtpAttempts=0;user.resetOtpSentAt=new Date();await user.save();await sendOtpEmail(email,otp);if(process.env.NODE_ENV!=="production"&&process.env.DEV_OTP==="true")response.devOtp=otp;res.json(response);}catch(e){next(e)}});

router.post("/resend-otp",async(req,res,next)=>{try{const email=normalizeEmail(req.body.email);const user=await User.findOne({email});if(!user)return res.json({message:"If an account exists for that email, a new verification code has been sent."});if(user.resetOtpSentAt&&Date.now()-user.resetOtpSentAt.getTime()<OTP_COOLDOWN_MS)return res.status(429).json({message:"Please wait before requesting another code."});const otp=makeOtp();user.resetOtpHash=await bcrypt.hash(otp,10);user.resetOtpExpires=new Date(Date.now()+OTP_TTL_MS);user.resetOtpAttempts=0;user.resetOtpSentAt=new Date();await user.save();await sendOtpEmail(email,otp);const response={message:"A new verification code has been sent."};if(process.env.NODE_ENV!=="production"&&process.env.DEV_OTP==="true")response.devOtp=otp;res.json(response);}catch(e){next(e)}});

router.post("/verify-otp",async(req,res,next)=>{try{const{email,otp}=req.body;const user=await User.findOne({email:normalizeEmail(email)});if(!user||!user.resetOtpHash||!user.resetOtpExpires)return res.status(400).json({message:"Invalid or expired verification code."});if(user.resetOtpExpires.getTime()<Date.now())return res.status(400).json({message:"This verification code has expired."});if(user.resetOtpAttempts>=MAX_OTP_ATTEMPTS)return res.status(429).json({message:"Too many incorrect attempts. Request a new code."});const ok=await bcrypt.compare(String(otp||""),user.resetOtpHash);if(!ok){user.resetOtpAttempts+=1;await user.save();return res.status(400).json({message:"Incorrect verification code."});}const resetToken=jwt.sign({id:user._id.toString(),purpose:"password-reset"},process.env.JWT_SECRET,{expiresIn:"10m"});user.resetOtpHash="";user.resetOtpExpires=null;user.resetOtpAttempts=0;await user.save();res.json({message:"OTP verified.",resetToken});}catch(e){next(e)}});

router.post("/reset-password",async(req,res,next)=>{try{const{resetToken,password}=req.body;if(!resetToken||!password||password.length<8)return res.status(400).json({message:"A valid reset token and an 8+ character password are required."});let payload;try{payload=jwt.verify(resetToken,process.env.JWT_SECRET)}catch{return res.status(401).json({message:"Reset session expired. Start again."})}if(payload.purpose!=="password-reset")return res.status(401).json({message:"Invalid reset session."});const user=await User.findById(payload.id);if(!user)return res.status(404).json({message:"User not found."});user.passwordHash=await bcrypt.hash(password,12);await user.save();res.json({message:"Password changed successfully."});}catch(e){next(e)}});

router.get("/me",authRequired,async(req,res,next)=>{try{const user=await User.findById(req.user.id).select("-passwordHash -resetOtpHash -resetOtpExpires -resetOtpAttempts -resetOtpSentAt");if(!user)return res.status(404).json({message:"User not found."});res.json({user});}catch(e){next(e)}});
router.put("/me",authRequired,async(req,res,next)=>{try{const user=await User.findByIdAndUpdate(req.user.id,{name:req.body.name,avatarUrl:req.body.avatarUrl},{new:true}).select("-passwordHash");res.json({user});}catch(e){next(e)}});
// Signed-in password change. Requires the current password, so a borrowed
// session alone can't lock the owner out.
router.put("/password",authRequired,async(req,res,next)=>{try{const{currentPassword,newPassword}=req.body||{};if(typeof currentPassword!=="string"||!currentPassword)return res.status(400).json({message:"Enter your current password."});if(typeof newPassword!=="string"||newPassword.length<8)return res.status(400).json({message:"Your new password must be at least 8 characters."});if(newPassword===currentPassword)return res.status(400).json({message:"Choose a password different from your current one."});const user=await User.findById(req.user.id);if(!user)return res.status(404).json({message:"User not found."});if(!(await bcrypt.compare(currentPassword,user.passwordHash)))return res.status(401).json({code:"WRONG_PASSWORD",message:"Your current password is incorrect."});user.passwordHash=await bcrypt.hash(newPassword,12);await user.save();res.json({message:"Password updated."});}catch(e){next(e)}});
export default router;
