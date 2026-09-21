export const productSources = {

  "magnetic-cta-button": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Magnetic CTA Button</title><style>
:root{--bg:#0a0a10;--line:#24242e;--blue:#4f5bff}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.stage{position:relative;display:grid;gap:22px;place-items:center;padding:70px}
.kicker{color:#7a7d96;font-size:10px;letter-spacing:2px;font-weight:700}
.halo{position:absolute;top:50%;left:50%;width:220px;height:220px;margin:-110px 0 0 -110px;border-radius:50%;background:radial-gradient(circle,rgba(79,91,255,.35),transparent 70%);filter:blur(10px);opacity:0;transition:opacity .3s;pointer-events:none}
.wrap{position:relative}
.btn{position:relative;padding:18px 34px;border:0;border-radius:999px;font-size:13px;font-weight:700;color:#fff;cursor:pointer;background:linear-gradient(135deg,#4f5bff,#2f37c9);transition:transform .15s ease-out,box-shadow .25s}
.wrap:hover .btn{box-shadow:0 14px 34px -10px rgba(79,91,255,.6)}
</style></head>
<body data-cf-keep-dark><div class="stage"><span class="kicker">MOVE YOUR CURSOR NEAR IT</span>
<div class="halo" id="halo"></div>
<div class="wrap" id="wrap"><button class="btn" id="btn">Join the waitlist</button></div>
</div>
<script>
var wrap=document.getElementById("wrap"),btn=document.getElementById("btn"),halo=document.getElementById("halo");
document.addEventListener("pointermove",function(e){
  var r=btn.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,dx=e.clientX-cx,dy=e.clientY-cy,dist=Math.hypot(dx,dy);
  if(dist<160){
    btn.style.transform="translate("+(dx*.25)+"px, "+(dy*.25)+"px)";
    halo.style.opacity="1";
    halo.style.transform="translate("+(dx*.4)+"px, "+(dy*.4)+"px)";
  }else{
    btn.style.transform="translate(0,0)";
    halo.style.opacity="0";
  }
});
</script>
</body></html>
`,

  "reveal-on-scroll": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Reveal On Scroll</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.stack{display:grid;gap:14px;padding:40px 30px}
.reveal-card{opacity:0;transform:translateY(24px);transition:opacity .7s cubic-bezier(.2,.8,.2,1),transform .7s cubic-bezier(.2,.8,.2,1);padding:22px;border:1px solid var(--line);border-radius:14px;background:#0d0d12;box-shadow:0 20px 50px -24px rgba(0,0,0,.7)}
.reveal-card.visible{opacity:1;transform:none}
.reveal-card h3{margin:0 0 6px;font:700 16px "Space Grotesk",sans-serif}
.reveal-card p{margin:0;color:#847e8f;font-size:10px}
</style></head>
<body data-cf-keep-dark><div class="stack"><span class="kicker">SCROLL DOWN INSIDE THIS PREVIEW</span>
<div class="reveal-card"><h3>Step one</h3><p>Cards fade and slide in as they enter the viewport.</p></div>
<div class="reveal-card"><h3>Step two</h3><p>Powered by IntersectionObserver, no scroll-jank.</p></div>
<div class="reveal-card"><h3>Step three</h3><p>Drop it into any section that needs a reveal.</p></div>
<div class="reveal-card"><h3>Step four</h3><p>Respects prefers-reduced-motion automatically.</p></div>
</div>
<script>
const cards=document.querySelectorAll(".reveal-card");
const io=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting)entry.target.classList.add("visible")})},{threshold:.2});
cards.forEach(function(c){io.observe(c)});
</script>
</body></html>`,

  "parallax-scroll-panels": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Parallax Scroll Panels</title><style>
:root{--bg:#050507;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif;overflow-x:hidden}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700;padding:16px 24px 0;display:block}
.px-wrap{height:340px;position:relative;overflow:hidden;border-radius:16px;margin:16px;box-shadow:0 30px 70px -24px rgba(0,0,0,.7)}
.px-layer{position:absolute;inset:0;display:grid;place-items:center;will-change:transform}
.px-back{background:radial-gradient(circle at 50% 40%,rgba(155,138,255,.22),transparent 55%),#0a0a0f}
.px-mid span{font:700 clamp(40px,9vw,90px) "Space Grotesk",sans-serif;color:#1c1a24}
.px-front{color:#eee9f8;text-align:center}
.px-front h2{margin:0 0 6px;font:700 20px "Space Grotesk",sans-serif}
.px-front p{margin:0;color:#a49dae;font-size:10px}
</style></head>
<body data-cf-keep-dark><span class="kicker">SCROLL THE PREVIEW</span>
<div class="px-wrap" id="wrap"><div class="px-layer px-back" data-speed="0.2"></div><div class="px-layer px-mid" data-speed="0.5"><span>DEPTH</span></div><div class="px-layer px-front" data-speed="0.8"><div><h2>Layered scroll motion</h2><p>Each layer moves at its own speed.</p></div></div></div>
<div style="height:900px"></div>
<script>
const wrap=document.getElementById("wrap");
function onScroll(){const r=wrap.getBoundingClientRect(),progress=(window.innerHeight-r.top);wrap.querySelectorAll(".px-layer").forEach(layer=>{const speed=parseFloat(layer.dataset.speed);layer.style.transform=\`translateY(\${progress*speed*-0.06}px)\`})}
document.addEventListener("scroll",onScroll,{passive:true});onScroll();
</script>
</body></html>`,

  "orbit-loader": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Orbit Loader</title><style>
@property --angle{syntax:"<angle>";inherits:true;initial-value:0deg}
:root{--bg:#050507;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.stage{display:flex;gap:46px;align-items:center;padding:40px}
.kicker{display:block;margin-bottom:16px;color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.loader{position:relative;width:56px;height:56px}
.loader.ring{background:conic-gradient(from var(--angle),transparent,#d7d0ff,#9b8aff);-webkit-mask:radial-gradient(farthest-side,transparent calc(100% - 4px),#000 calc(100% - 4px));mask:radial-gradient(farthest-side,transparent calc(100% - 4px),#000 calc(100% - 4px));border-radius:50%;animation:spin .9s linear infinite;filter:drop-shadow(0 0 8px rgba(196,181,253,.4))}
.loader.dots{display:flex;gap:6px;align-items:center;width:auto;height:auto}
.loader.dots i{width:10px;height:10px;border-radius:50%;background:linear-gradient(135deg,#d7d0ff,#9b8aff);box-shadow:0 0 8px rgba(196,181,253,.5);animation:bounce 1s ease-in-out infinite}
.loader.dots i:nth-child(2){animation-delay:.15s}
.loader.dots i:nth-child(3){animation-delay:.3s}
.loader.orbit{border:1px solid #2c2a35;border-radius:50%}
.loader.orbit i{position:absolute;width:8px;height:8px;border-radius:50%;background:var(--lav);top:-4px;left:50%;margin-left:-4px;box-shadow:0 0 12px var(--lav);animation:orbit 1.2s linear infinite}
@keyframes spin{to{--angle:360deg}}
@keyframes bounce{0%,80%,100%{transform:translateY(0);opacity:.5}40%{transform:translateY(-9px);opacity:1}}
@keyframes orbit{from{transform:rotate(0)}to{transform:rotate(360deg)}}
</style></head>
<body data-cf-keep-dark><span class="kicker">THREE LOADER STYLES</span><div class="stage"><div class="loader ring"></div><div class="loader dots"><i></i><i></i><i></i></div><div class="loader orbit"><i></i></div></div>
</body></html>`,

  "cursor-trail-effect": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Custom Cursor Trail</title><style>
:root{--bg:#050507;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;cursor:none;overflow:hidden}
.kicker{display:block;margin-bottom:16px;color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.msg{color:#847e8f;font-size:11px}
.dot{position:fixed;top:0;left:0;width:8px;height:8px;border-radius:50%;background:linear-gradient(135deg,#d7d0ff,#9b8aff);box-shadow:0 0 10px rgba(196,181,253,.7);pointer-events:none;transform:translate(-50%,-50%)}
.ring{position:fixed;top:0;left:0;width:34px;height:34px;border:1px solid rgba(196,181,253,.4);border-radius:50%;pointer-events:none;transform:translate(-50%,-50%);transition:transform .08s linear;box-shadow:0 0 20px rgba(196,181,253,.15)}
</style></head>
<body data-cf-keep-dark><span class="kicker">MOVE YOUR CURSOR</span><p class="msg">A trailing dot follows the pointer with easing.</p>
<div class="dot" id="dot"></div><div class="ring" id="ring"></div>
<script>
const dot=document.getElementById("dot"),ring=document.getElementById("ring");
let rx=0,ry=0;
document.addEventListener("pointermove",function(e){dot.style.left=e.clientX+"px";dot.style.top=e.clientY+"px";rx=e.clientX;ry=e.clientY});
function loop(){const cur=ring.getBoundingClientRect();const cx=cur.left+cur.width/2,cy=cur.top+cur.height/2;const nx=cx+(rx-cx)*.18,ny=cy+(ry-cy)*.18;ring.style.left=nx+"px";ring.style.top=ny+"px";requestAnimationFrame(loop)}
loop();
</script>
</body></html>`,

  "sticky-scroll-stack": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Sticky Scroll Stack</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif}
.kicker{display:block;color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700;padding:16px 24px 0}
.stack{padding:10px 24px 40px;display:grid;gap:0}
.stack-card{position:sticky;top:16px;padding:26px;border:1px solid var(--line);border-radius:16px;margin-bottom:16px;box-shadow:0 20px 45px rgba(0,0,0,.35)}
.stack-card h3{margin:0 0 6px;font:700 18px "Space Grotesk",sans-serif}
.stack-card p{margin:0;color:#847e8f;font-size:10px}
.stack-card:nth-child(1){background:#12101c}
.stack-card:nth-child(2){background:#15111f}
.stack-card:nth-child(3){background:#181322}
.stack-card:nth-child(4){background:#1b1425}
.spacer{height:260px}
</style></head>
<body data-cf-keep-dark><span class="kicker">SCROLL TO STACK</span>
<div class="stack">
<div class="stack-card"><h3>01 — Discover</h3><p>Cards pin in place as the next one slides over it.</p></div>
<div class="stack-card"><h3>02 — Design</h3><p>Built with position:sticky, no scroll libraries needed.</p></div>
<div class="stack-card"><h3>03 — Build</h3><p>Each card offsets slightly to keep the stack visible.</p></div>
<div class="stack-card"><h3>04 — Ship</h3><p>Works on any section length.</p></div>
</div>
<div class="spacer"></div>
</body></html>`,

  "horizontal-scroll-gallery": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Horizontal Scroll Gallery</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif}
.kicker{display:block;color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700;padding:20px 24px 12px}
.track{display:flex;gap:14px;overflow-x:auto;padding:0 24px 30px;scroll-snap-type:x mandatory}
.track::-webkit-scrollbar{height:6px}
.track::-webkit-scrollbar-thumb{background:#2c2a35;border-radius:3px}
.tile{flex:0 0 220px;height:260px;border-radius:16px;scroll-snap-align:start;display:flex;align-items:end;padding:16px;border:1px solid var(--line);font:700 14px "Space Grotesk",sans-serif;box-shadow:0 24px 50px -24px rgba(0,0,0,.7);transition:transform .3s cubic-bezier(.2,.8,.2,1)}
.tile:hover{transform:translateY(-6px)}
.tile:nth-child(1){background:radial-gradient(circle at 30% 20%,rgba(155,138,255,.3),transparent 60%),#121018}
.tile:nth-child(2){background:radial-gradient(circle at 70% 30%,rgba(120,170,255,.28),transparent 60%),#101219}
.tile:nth-child(3){background:radial-gradient(circle at 50% 70%,rgba(200,150,255,.25),transparent 60%),#141018}
.tile:nth-child(4){background:radial-gradient(circle at 40% 40%,rgba(155,220,200,.22),transparent 60%),#0f1614}
.tile:nth-child(5){background:radial-gradient(circle at 60% 60%,rgba(255,180,150,.22),transparent 60%),#181210}
</style></head>
<body data-cf-keep-dark><span class="kicker">DRAG OR SCROLL SIDEWAYS</span>
<div class="track">
<div class="tile">Frame 01</div><div class="tile">Frame 02</div><div class="tile">Frame 03</div><div class="tile">Frame 04</div><div class="tile">Frame 05</div>
</div>
</body></html>`,

  "text-scramble-reveal": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Text Scramble Reveal</title><style>
:root{--bg:#050507;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.kicker{display:block;margin-bottom:16px;color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
h1{font:700 clamp(28px,5vw,48px) "Space Grotesk",sans-serif;color:#eee9f8;letter-spacing:-.03em;text-shadow:0 0 30px rgba(196,181,253,.2)}
button{margin-top:20px;border:1px solid #363243;border-radius:9px;padding:10px 16px;background:#121019;color:#d8d2df;font-size:10px;cursor:pointer;transition:border-color .2s,transform .15s cubic-bezier(.34,1.56,.64,1)}
button:hover{border-color:#544c67}
button:active{transform:scale(.95)}
</style></head>
<body data-cf-keep-dark><span class="kicker">CLICK TO SCRAMBLE</span>
<div style="text-align:center"><h1 id="txt">DECODE THIS</h1><button id="run">Scramble again</button></div>
<script>
const el=document.getElementById("txt"),final="DECODE THIS",chars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function scramble(){let frame=0;const total=18;const timer=setInterval(()=>{el.textContent=final.split("").map((c,i)=>{if(c===" ")return " ";if(i<frame/1.6)return final[i];return chars[Math.floor(Math.random()*chars.length)]}).join("");frame++;if(frame>total*1.6){clearInterval(timer);el.textContent=final}},35)}
document.getElementById("run").addEventListener("click",scramble);
scramble();
</script>
</body></html>`,

  "scroll-progress-bar": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Scroll Progress Bar</title><style>
:root{--bg:#050507;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif}
.kicker{display:block;color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700;padding:20px 24px}
#bar{position:sticky;top:0;height:4px;width:0%;background:linear-gradient(90deg,#9b8aff,#c4b5fd);box-shadow:0 0 10px rgba(196,181,253,.6);z-index:5}
.content{padding:10px 24px 40px;display:grid;gap:14px}
.content p{color:#847e8f;font-size:11px;line-height:1.8;max-width:520px;margin:0}
.block{height:220px;border-radius:14px;border:1px solid #272632;background:radial-gradient(circle at 30% 20%,rgba(155,138,255,.1),transparent 60%),#0d0d12;box-shadow:0 20px 50px -24px rgba(0,0,0,.7)}
</style></head>
<body data-cf-keep-dark><div id="bar"></div><span class="kicker">SCROLL DOWN</span>
<div class="content"><p>The bar at the top fills based on how far you've scrolled through this preview.</p><div class="block"></div><p>Great for long-form articles, docs and case studies.</p><div class="block"></div><div class="block"></div></div>
<script>
function update(){const h=document.documentElement,pct=(h.scrollTop)/(h.scrollHeight-h.clientHeight)*100;document.getElementById("bar").style.width=pct+"%"}
document.addEventListener("scroll",update,{passive:true});update();
</script>
</body></html>`,

  "fade-slide-carousel": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Fade Slide Carousel</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.kicker{display:block;margin-bottom:16px;color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.carousel{width:min(560px,90%);height:280px;position:relative;border-radius:18px;overflow:hidden;border:1px solid var(--line);box-shadow:0 30px 70px -24px rgba(0,0,0,.7)}
.slide{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font:700 22px "Space Grotesk",sans-serif;opacity:0;transition:opacity .6s cubic-bezier(.2,.8,.2,1);color:#eee9f8}
.slide.active{opacity:1}
.slide:nth-child(1){background:radial-gradient(circle at 40% 30%,rgba(155,138,255,.28),transparent 55%),#111018}
.slide:nth-child(2){background:radial-gradient(circle at 60% 60%,rgba(120,170,255,.25),transparent 55%),#101219}
.slide:nth-child(3){background:radial-gradient(circle at 50% 50%,rgba(220,150,255,.25),transparent 55%),#141018}
.dots{position:absolute;bottom:14px;left:0;right:0;display:flex;justify-content:center;gap:6px}
.dots i{width:7px;height:7px;border-radius:50%;background:#34303e;transition:background .3s,box-shadow .3s,transform .3s cubic-bezier(.34,1.56,.64,1)}
.dots i.active{background:var(--lav);box-shadow:0 0 8px rgba(196,181,253,.6);transform:scale(1.2)}
</style></head>
<body data-cf-keep-dark><span class="kicker">AUTO-ADVANCING EVERY 2.5S</span>
<div class="carousel" id="car">
<div class="slide active">Slide one</div><div class="slide">Slide two</div><div class="slide">Slide three</div>
<div class="dots"><i class="active"></i><i></i><i></i></div>
</div>
<script>
const slides=document.querySelectorAll(".slide"),dots=document.querySelectorAll(".dots i");let i=0;
setInterval(function(){slides[i].classList.remove("active");dots[i].classList.remove("active");i=(i+1)%slides.length;slides[i].classList.add("active");dots[i].classList.add("active")},2500);
</script>
</body></html>`,

  "counter-on-scroll": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Counter On Scroll</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif}
.kicker{display:block;color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700;padding:20px 24px}
.spacer{height:200px}
.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;padding:0 24px 40px}
.stats div{padding:20px;border:1px solid var(--line);border-radius:14px;background:#0d0d12;text-align:center;box-shadow:0 20px 50px -24px rgba(0,0,0,.7);transition:transform .3s cubic-bezier(.2,.8,.2,1)}
.stats div:hover{transform:translateY(-4px)}
.stats strong{display:block;font:700 34px "Space Grotesk",sans-serif;background:linear-gradient(135deg,#f7f5fb,#c4b5fd);-webkit-background-clip:text;background-clip:text;color:transparent}
.stats small{color:#77737f;font-size:8px}
</style></head>
<body data-cf-keep-dark><span class="kicker">SCROLL DOWN TO TRIGGER</span><div class="spacer"></div>
<div class="stats"><div><strong data-to="240">0</strong><small>PROJECTS SHIPPED</small></div><div><strong data-to="98">0</strong><small>SATISFACTION %</small></div><div><strong data-to="12">0</strong><small>YEARS ACTIVE</small></div></div>
<script>
const nums=document.querySelectorAll(".stats strong");
const io=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(!entry.isIntersecting)return;const el=entry.target,to=parseInt(el.dataset.to,10);let cur=0;const step=Math.max(1,Math.round(to/40));const timer=setInterval(function(){cur=Math.min(to,cur+step);el.textContent=cur;if(cur>=to)clearInterval(timer)},25);io.unobserve(el)})},{threshold:.6});
nums.forEach(function(n){io.observe(n)});
</script>
</body></html>`,

  "sticky-shrink-navbar": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Sticky Shrink Navbar</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif}
nav{position:sticky;top:0;z-index:5;display:flex;align-items:center;justify-content:space-between;padding:22px 24px;background:#0a0a0f;border-bottom:1px solid transparent;box-shadow:0 0 0 rgba(0,0,0,0);transition:padding .3s cubic-bezier(.2,.8,.2,1),background .3s ease,border-color .3s ease,box-shadow .3s ease}
nav.shrink{padding:12px 24px;background:#08080dee;backdrop-filter:blur(10px);border-color:var(--line);box-shadow:0 12px 30px -18px rgba(0,0,0,.6)}
nav b{font:700 14px "Space Grotesk",sans-serif}
nav span{color:#77737f;font-size:9px}
.content{padding:20px 24px 400px;color:#847e8f;font-size:11px;line-height:1.9;max-width:500px}
</style></head>
<body data-cf-keep-dark>
<nav id="nav"><b>STUDIO.</b><span>Scroll down to shrink the bar</span></nav>
<div class="content"><p>This navbar reduces its padding and gains a background once you scroll past it — a common pattern for marketing sites.</p></div>
<script>
const nav=document.getElementById("nav");
document.addEventListener("scroll",function(){nav.classList.toggle("shrink",window.scrollY>40)},{passive:true});
</script>
</body></html>`,

  "scroll-timeline": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Scroll Timeline</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif}
.kicker{display:block;color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700;padding:20px 24px}
.timeline{position:relative;padding:10px 24px 40px 44px}
.timeline:before{content:"";position:absolute;left:29px;top:10px;bottom:40px;width:1px;background:var(--line)}
.item{position:relative;opacity:0;transform:translateX(-14px);transition:opacity .5s ease,transform .5s ease;margin-bottom:26px}
.item.visible{opacity:1;transform:none}
.item:before{content:"";position:absolute;left:-24px;top:4px;width:9px;height:9px;border-radius:50%;background:linear-gradient(135deg,#d7d0ff,#9b8aff);box-shadow:0 0 12px rgba(196,181,253,.6)}
.item h3{margin:0 0 4px;font:700 14px "Space Grotesk",sans-serif}
.item p{margin:0;color:#847e8f;font-size:10px}
</style></head>
<body data-cf-keep-dark><span class="kicker">SCROLL TO REVEAL</span>
<div class="timeline">
<div class="item"><h3>2023 — Founded</h3><p>Started as a small internal tool.</p></div>
<div class="item"><h3>2024 — Public launch</h3><p>Opened up to the first cohort of builders.</p></div>
<div class="item"><h3>2025 — Scale</h3><p>Crossed ten thousand active workspaces.</p></div>
<div class="item"><h3>2026 — Today</h3><p>Continuing to refine the core experience.</p></div>
</div>
<script>
const items=document.querySelectorAll(".item");
const io=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting)e.target.classList.add("visible")})},{threshold:.3});
items.forEach(function(i){io.observe(i)});
</script>
</body></html>`,

  "ripple-click-button": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Ripple Click Button</title><style>
:root{--bg:#0a0a10;--line:#24242e;--blue:#4f5bff}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.kicker{color:#7a7d96;font-size:10px;letter-spacing:2px;font-weight:700;text-align:center;margin-bottom:22px}
.btn{position:relative;overflow:hidden;padding:16px 32px;border:0;border-radius:12px;font-size:13px;font-weight:700;color:#fff;cursor:pointer;background:#14141d;border:1px solid var(--line)}
.btn:hover{border-color:var(--blue)}
.ripple{position:absolute;border-radius:50%;background:rgba(79,91,255,.5);transform:scale(0);animation:ripple .6s ease-out forwards;pointer-events:none}
@keyframes ripple{to{transform:scale(1);opacity:0}}
</style></head>
<body data-cf-keep-dark>
<div><div class="kicker">CLICK ANYWHERE ON THE BUTTON</div><button class="btn" id="btn">Add to cart</button></div>
<script>
var btn=document.getElementById("btn");
btn.addEventListener("click",function(e){
  var r=btn.getBoundingClientRect();
  var size=Math.max(r.width,r.height)*2;
  var rip=document.createElement("span");
  rip.className="ripple";
  rip.style.width=rip.style.height=size+"px";
  rip.style.left=(e.clientX-r.left-size/2)+"px";
  rip.style.top=(e.clientY-r.top-size/2)+"px";
  btn.appendChild(rip);
  setTimeout(function(){ rip.remove(); },600);
});
</script>
</body></html>
`,

  "flip-card-3d": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>3D Flip Card</title><style>
:root{--bg:#eef1f8;--ink:#161a2b;--mut:#666f8a;--cobalt:#3b5bdb;--line:#dfe3ef}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.kicker{color:var(--mut);font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;text-align:center;margin-bottom:14px;display:block}
.scene{width:260px;height:340px;perspective:1400px}
.card3d{position:relative;width:100%;height:100%;transform-style:preserve-3d;transition:transform .7s cubic-bezier(.2,.8,.2,1);cursor:pointer}
.scene:hover .card3d{transform:rotateY(180deg)}
.face{position:absolute;inset:0;backface-visibility:hidden;border-radius:20px;overflow:hidden;box-shadow:0 24px 50px -20px rgba(20,25,50,.25)}
.front{background:linear-gradient(155deg,#4f6bef,#3b5bdb);display:flex;flex-direction:column;justify-content:flex-end;padding:24px;color:#fff}
.front .glow{position:absolute;top:-40px;right:-40px;width:180px;height:180px;border-radius:50%;background:rgba(255,255,255,.15);filter:blur(10px)}
.front h3{margin:0 0 6px;font-size:20px;font-weight:700}
.front p{margin:0;font-size:12.5px;color:rgba(255,255,255,.75)}
.back{background:#fff;border:1px solid var(--line);transform:rotateY(180deg);padding:24px;display:flex;flex-direction:column}
.back h4{margin:0 0 12px;font-size:14px;color:var(--ink)}
.back ul{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:10px;flex:1}
.back li{font-size:12.5px;color:var(--mut);display:flex;gap:8px;align-items:center}
.back li svg{width:14px;height:14px;color:var(--cobalt);flex:none}
.back button{margin-top:auto;background:var(--cobalt);color:#fff;border:0;padding:11px;border-radius:10px;font-size:12.5px;font-weight:600;cursor:pointer}
</style></head>
<body>
<div><span class="kicker">Hover to flip</span>
<div class="scene"><div class="card3d">
  <div class="face front"><div class="glow"></div><h3>Pro Plan</h3><p>Everything you need to scale, in one workspace.</p></div>
  <div class="face back"><h4>What's included</h4><ul>
    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M20 6 9 17l-5-5"/></svg>Unlimited projects</li>
    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M20 6 9 17l-5-5"/></svg>Priority support</li>
    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M20 6 9 17l-5-5"/></svg>Team collaboration</li>
  </ul><button>Choose plan</button></div>
</div></div>
</div>
</body></html>
`,

  "toggle-pricing-switch": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Toggle Pricing Switch</title><style>
:root{--bg:#0a1512;--panel:#101d19;--line:rgba(255,255,255,.08);--ink:#eef4f1;--mut:#7c8c87;--em:#10b981;--gold:#f2c14e}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.stage{display:flex;flex-direction:column;align-items:center;gap:24px}
.switch-row{display:flex;align-items:center;gap:12px}
.switch-row span{font-size:13px;color:var(--mut);font-weight:600}
.switch-row span.on{color:#fff}
.sw{width:46px;height:26px;background:var(--panel);border:1px solid var(--line);border-radius:20px;position:relative;cursor:pointer}
.sw .knob{position:absolute;top:2px;left:2px;width:20px;height:20px;border-radius:50%;background:var(--em);transition:transform .3s cubic-bezier(.34,1.56,.64,1)}
.sw.on .knob{transform:translateX(20px)}
.save{font-size:10.5px;background:rgba(242,193,78,.15);color:var(--gold);padding:3px 9px;border-radius:20px;font-weight:700}
.cards{display:flex;gap:16px}
.card{width:180px;background:var(--panel);border:1px solid var(--line);border-radius:16px;padding:22px}
.card.feat{border-color:var(--em);box-shadow:0 0 0 1px var(--em),0 30px 60px -24px rgba(16,185,129,.3)}
.tier{font-size:12px;color:var(--mut);text-transform:uppercase;letter-spacing:.05em}
.price{font-size:30px;font-weight:800;color:#fff;margin:10px 0 4px}
.price span{font-size:13px;color:var(--mut);font-weight:500}
.card ul{list-style:none;padding:0;margin:16px 0;display:flex;flex-direction:column;gap:8px}
.card li{font-size:11.5px;color:var(--ink);display:flex;gap:7px}
.card li:before{content:"✓";color:var(--em)}
.card button{width:100%;padding:10px;border-radius:9px;border:0;font-size:12px;font-weight:600;cursor:pointer;background:var(--panel);color:var(--ink);border:1px solid var(--line)}
.card.feat button{background:var(--em);color:#04221a}
</style></head>
<body data-cf-keep-dark>
<div class="stage">
  <div class="switch-row"><span class="on" id="mLabel">Monthly</span><div class="sw" id="sw"><div class="knob"></div></div><span id="yLabel">Yearly</span><span class="save">Save 20%</span></div>
  <div class="cards">
    <div class="card"><div class="tier">Starter</div><div class="price" data-m="9" data-y="86">$<span id="p0">9</span><span>/mo</span></div><ul><li>3 projects</li><li>Community support</li></ul><button>Choose</button></div>
    <div class="card feat"><div class="tier">Pro</div><div class="price" data-m="29" data-y="278">$<span id="p1">29</span><span>/mo</span></div><ul><li>Unlimited projects</li><li>Priority support</li><li>Advanced analytics</li></ul><button>Choose</button></div>
  </div>
</div>
<script>
var sw=document.getElementById("sw"), mLabel=document.getElementById("mLabel"), yLabel=document.getElementById("yLabel");
var on=false;
sw.addEventListener("click",function(){
  on=!on; sw.classList.toggle("on",on);
  mLabel.classList.toggle("on",!on); yLabel.classList.toggle("on",on);
  document.querySelectorAll(".price").forEach(function(p,i){
    var el=document.getElementById("p"+i);
    el.textContent = on ? Math.round(+p.dataset.y/12) : p.dataset.m;
  });
});
</script>
</body></html>
`,

  "typewriter-hero": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Typewriter Hero</title><style>
:root{--bg:#faf9f6;--ink:#0a0a0a;--mut:#6b665c;--coral:#ff4d3d}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:var(--bg);font-family:"Space Grotesk",Inter,ui-sans-serif,Arial,sans-serif;padding:50px}
.hero{max-width:560px;text-align:center}
.eb{display:inline-flex;align-items:center;gap:8px;font-size:11.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--coral);margin-bottom:18px}
.eb:before{content:"";width:20px;height:1.5px;background:var(--coral)}
h1{margin:0;font-size:clamp(32px,5vw,52px);font-weight:700;letter-spacing:-.03em;color:var(--ink);line-height:1.1;min-height:2.4em}
.cursor{display:inline-block;width:3px;height:.9em;background:var(--coral);vertical-align:-.1em;animation:blink 1s step-end infinite}
@keyframes blink{50%{opacity:0}}
p{margin:20px 0 0;font-size:15.5px;color:var(--mut);opacity:0;transition:opacity .6s}
p.show{opacity:1}
.cta{margin-top:28px;display:inline-flex;align-items:center;gap:9px;background:var(--ink);color:#fff;padding:14px 26px;border-radius:999px;font-size:13.5px;font-weight:700;cursor:pointer;opacity:0;transform:translateY(10px);transition:opacity .5s,transform .5s}
.cta.show{opacity:1;transform:translateY(0)}
.cta svg{width:14px;height:14px;transition:transform .3s}
.cta:hover svg{transform:translateX(4px)}
</style></head>
<body>
<div class="hero">
  <span class="eb">The all-in-one workspace</span>
  <h1 id="type"><span class="cursor"></span></h1>
  <p id="lead">Plan, write and ship — without switching tabs seventeen times a day.</p>
  <div class="cta" id="cta" data-cf-keep-dark>Start for free <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M7 17 17 7M7 7h10v10"/></svg></div>
</div>
<script>
var text="Where great ideas get finished.";
var el=document.getElementById("type"), cursor=el.querySelector(".cursor");
var i=0;
function type(){
  if(i<=text.length){
    el.innerHTML=text.slice(0,i)+'<span class="cursor"></span>';
    i++;
    setTimeout(type,45);
  } else {
    document.getElementById("lead").classList.add("show");
    document.getElementById("cta").classList.add("show");
  }
}
setTimeout(type,400);
</script>
</body></html>
`,

  "marquee-testimonials": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Marquee Testimonials</title><style>
:root{--bg:#fdf6f3;--ink:#2b211d;--mut:#8a7a72;--rose:#c9576b;--card:#fff;--line:#f0e2dc}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:50px 0;overflow:hidden}
h2{font-family:Georgia,serif;font-style:italic;font-weight:400;font-size:24px;color:var(--ink);margin:0 0 30px}
.marquee-wrap{width:100%;overflow:hidden;mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)}
.track{display:flex;gap:18px;width:max-content;animation:scroll 28s linear infinite}
.track:hover{animation-play-state:paused}
@keyframes scroll{to{transform:translateX(-50%)}}
.card{width:260px;flex:none;background:var(--card);border:1px solid var(--line);border-radius:16px;padding:20px}
.card .stars{color:#e8ab3d;font-size:13px;margin-bottom:10px}
.card p{margin:0;font-size:13px;color:var(--ink);line-height:1.6}
.card .who{display:flex;align-items:center;gap:9px;margin-top:14px}
.card .who span{width:28px;height:28px;border-radius:50%}
.card .who b{font-size:12px;color:var(--ink);display:block}
.card .who i{font-size:10.5px;color:var(--mut);font-style:normal}
</style></head>
<body>
<h2>"Genuinely changed how we work."</h2>
<div class="marquee-wrap">
  <div class="track" id="track">
    <div class="card"><div class="stars">★★★★★</div><p>The onboarding alone saved us two weeks of setup time.</p><div class="who"><span style="background:#c9576b"></span><div><b>Maya K.</b><i>Product Lead</i></div></div></div>
    <div class="card"><div class="stars">★★★★★</div><p>Support responded in four minutes. Four. I timed it.</p><div class="who"><span style="background:#e8ab3d"></span><div><b>Daniel R.</b><i>Founder</i></div></div></div>
    <div class="card"><div class="stars">★★★★★</div><p>We moved off three separate tools onto just this one.</p><div class="who"><span style="background:#7a9b76"></span><div><b>Priya N.</b><i>Ops Manager</i></div></div></div>
    <div class="card"><div class="stars">★★★★★</div><p>My whole team actually enjoys using it. Rare thing.</p><div class="who"><span style="background:#6b7fc9"></span><div><b>Jo T.</b><i>Design Director</i></div></div></div>
  </div>
</div>
<script>
var track=document.getElementById("track");
track.innerHTML+=track.innerHTML;
</script>
</body></html>
`,

  "mega-menu-navbar": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Mega Menu Navbar</title><style>
:root{--bg:#fff;--ink:#14161f;--mut:#6b7080;--sky:#0ea5e9;--line:#e7e9f0}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;background:#f7f8fb;font-family:Inter,ui-sans-serif,Arial,sans-serif}
nav{background:var(--bg);border-bottom:1px solid var(--line);padding:16px 32px;display:flex;align-items:center;gap:30px;position:relative;z-index:5}
.brand{font-weight:800;font-size:17px;color:var(--ink)}
.brand span{color:var(--sky)}
.links{display:flex;gap:24px;font-size:13.5px;color:var(--mut);font-weight:600}
.links > div{cursor:pointer;padding:6px 0;display:flex;align-items:center;gap:5px}
.links > div:hover{color:var(--ink)}
.links svg{width:12px;height:12px;transition:transform .25s}
.links > div:hover svg{transform:rotate(180deg)}
.mega{position:absolute;top:100%;left:0;right:0;background:#fff;border-bottom:1px solid var(--line);box-shadow:0 30px 60px -30px rgba(20,22,31,.25);padding:26px 32px;display:grid;grid-template-columns:1fr 1fr 1fr 1.2fr;gap:24px;opacity:0;pointer-events:none;transform:translateY(-6px);transition:opacity .25s,transform .25s}
.links > div:hover .mega{opacity:1;pointer-events:auto;transform:translateY(0)}
.col h5{font-size:10.5px;color:var(--mut);text-transform:uppercase;letter-spacing:.05em;margin:0 0 10px}
.col a{display:block;font-size:12.5px;color:var(--ink);text-decoration:none;padding:5px 0;font-weight:500}
.col a:hover{color:var(--sky)}
.feat{background:linear-gradient(150deg,#e6f6fe,#f7fbff);border-radius:12px;padding:16px}
.feat b{display:block;font-size:12.5px;color:var(--ink);margin-bottom:4px}
.feat span{display:block;font-size:11px;color:var(--mut);line-height:1.5}
.feat button{display:block;margin-top:12px;background:var(--sky);color:#fff;border:0;padding:7px 13px;border-radius:7px;font-size:11px;font-weight:700;cursor:pointer}
.right{margin-left:auto;display:flex;gap:14px;align-items:center}
.cta{background:var(--ink);color:#fff;padding:9px 16px;border-radius:9px;font-size:12.5px;font-weight:600;cursor:pointer}
.stage{padding:60px;text-align:center;color:var(--mut);font-size:13px}
</style></head>
<body>
<nav>
  <div class="brand">Core<span>Kit</span></div>
  <div class="links">
    <div>Product <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m6 9 6 6 6-6"/></svg>
      <div class="mega">
        <div class="col"><h5>Platform</h5><a>Analytics</a><a>Automations</a><a>Integrations</a></div>
        <div class="col"><h5>Use cases</h5><a>For startups</a><a>For agencies</a><a>For enterprise</a></div>
        <div class="col"><h5>Resources</h5><a>Docs</a><a>API reference</a><a>Changelog</a></div>
        <div class="feat"><b>New: Workflow Builder</b><span>Automate approvals visually, no code required.</span><button>Explore →</button></div>
      </div>
    </div>
    <div>Pricing</div>
    <div>Customers</div>
    <div>Docs</div>
  </div>
  <div class="right"><span>Log in</span><div class="cta" data-cf-keep-dark>Get started</div></div>
</nav>
<div class="stage">Hover "Product" to open the mega menu</div>
</body></html>
`,

  "multi-step-form": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Multi-Step Form</title><style>
:root{--bg:#f5f6fb;--ink:#191b29;--mut:#6b7086;--indigo:#4338ca;--line:#e2e4f0;--card:#fff;--green:#16a34a}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.card{width:340px;background:var(--card);border:1px solid var(--line);border-radius:18px;padding:26px;box-shadow:0 24px 50px -24px rgba(25,27,41,.18)}
.steps{display:flex;align-items:center;margin-bottom:22px}
.step{width:26px;height:26px;border-radius:50%;background:var(--line);color:var(--mut);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;transition:background .3s,color .3s}
.step.on{background:var(--indigo);color:#fff}
.step.done{background:var(--green);color:#fff}
.step-line{flex:1;height:2px;background:var(--line);margin:0 6px;position:relative}
.step-line i{position:absolute;inset:0;background:var(--green);width:0;transition:width .4s}
.panel{display:none}
.panel.on{display:block}
label{display:block;font-size:11.5px;color:var(--mut);margin-bottom:6px;font-weight:600}
input,select{width:100%;padding:11px 13px;border-radius:10px;border:1.5px solid var(--line);font-size:13px;font-family:inherit;margin-bottom:14px;outline:none;transition:border-color .2s;color:var(--ink)}
input:focus,select:focus{border-color:var(--indigo)}
.row{display:flex;gap:14px;margin-top:18px}
button{flex:1;padding:12px;border-radius:10px;border:0;font-size:13px;font-weight:700;cursor:pointer}
.next{background:var(--indigo);color:#fff}
.back{background:var(--bg);color:var(--ink);border:1px solid var(--line)!important}
.done-panel{text-align:center;padding:20px 0}
.done-panel svg{width:44px;height:44px;color:var(--green);margin-bottom:10px}
</style></head>
<body>
<div class="card">
  <div class="steps" id="steps"></div>
  <form id="form">
    <div class="panel on" data-step="0"><label>Full name</label><input type="text" placeholder="Asha Kessler"><label>Email</label><input type="email" placeholder="asha@company.com"><div class="row"><button type="button" class="next" id="n0">Continue</button></div></div>
    <div class="panel" data-step="1"><label>Company</label><input type="text" placeholder="Acme Inc."><label>Team size</label><select><option>1–10</option><option>11–50</option><option>50+</option></select><div class="row"><button type="button" class="back" id="b1">Back</button><button type="button" class="next" id="n1">Continue</button></div></div>
    <div class="panel" data-step="2"><label>Plan</label><select><option>Starter</option><option>Pro</option><option>Enterprise</option></select><div class="row"><button type="button" class="back" id="b2">Back</button><button type="submit" class="next">Finish setup</button></div></div>
    <div class="panel done-panel" data-step="3"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg><div style="font-weight:700;color:var(--ink)">You're all set!</div><div style="font-size:12.5px;color:var(--mut);margin-top:4px">Welcome aboard.</div></div>
  </form>
</div>
<script>
var cur=0, total=3;
var stepsEl=document.getElementById("steps");
function buildSteps(){
  stepsEl.innerHTML="";
  for(var i=0;i<total;i++){
    var s=document.createElement("div"); s.className="step"+(i===cur?" on":i<cur?" done":""); s.textContent=i+1;
    stepsEl.appendChild(s);
    if(i<total-1){ var line=document.createElement("div"); line.className="step-line"; line.innerHTML='<i style="width:'+(i<cur?"100%":"0")+'"></i>'; stepsEl.appendChild(line); }
  }
}
function goTo(step){
  document.querySelectorAll(".panel").forEach(function(p){ p.classList.toggle("on", +p.dataset.step===step); });
  cur=step; if(step<total) buildSteps();
}
document.getElementById("n0").addEventListener("click",function(){ goTo(1); });
document.getElementById("n1").addEventListener("click",function(){ goTo(2); });
document.getElementById("b1").addEventListener("click",function(){ goTo(0); });
document.getElementById("b2").addEventListener("click",function(){ goTo(1); });
document.getElementById("form").addEventListener("submit",function(e){ e.preventDefault(); goTo(3); });
buildSteps();
</script>
</body></html>
`,

  "masonry-portfolio-grid": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Masonry Portfolio Grid</title><style>
:root{--bg:#0e0e10;--ink:#f2f2f0;--mut:#8a8a86;--lime:#d4ff3f}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;background:var(--bg);font-family:"Space Grotesk",Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.head{max-width:640px;margin:0 auto 26px}
.eb{display:inline-flex;gap:8px;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--lime);margin-bottom:10px}
h2{margin:0;font-size:24px;color:var(--ink);font-weight:700}
.grid{max-width:640px;margin:0 auto;columns:3 160px;column-gap:12px}
.item{break-inside:avoid;margin-bottom:12px;border-radius:12px;overflow:hidden;position:relative;cursor:pointer;opacity:0;transform:translateY(14px)}
.item img{display:block;width:100%;height:auto}
.item .ph{width:100%;transition:transform .5s cubic-bezier(.2,.8,.2,1)}
.item:hover .ph{transform:scale(1.06)}
.item .overlay{position:absolute;inset:0;background:linear-gradient(0deg,rgba(0,0,0,.75),transparent 50%);opacity:0;transition:opacity .3s;display:flex;align-items:flex-end;padding:12px}
.item:hover .overlay{opacity:1}
.item .overlay b{color:#fff;font-size:12px;font-weight:600}
</style></head>
<body data-cf-keep-dark>
<div class="head"><span class="eb">Selected work</span><h2>A grid built to hold odd-sized things.</h2></div>
<div class="grid" id="grid">
  <div class="item" style="height:190px"><div class="ph" style="height:190px;background:linear-gradient(155deg,#d4ff3f,#7a9e1f)"></div><div class="overlay"><b>Aperture — Brand identity</b></div></div>
  <div class="item" style="height:130px"><div class="ph" style="height:130px;background:linear-gradient(155deg,#f2f2f0,#8a8a86)"></div><div class="overlay"><b>Northwind — Web design</b></div></div>
  <div class="item" style="height:150px"><div class="ph" style="height:150px;background:linear-gradient(155deg,#8a8a86,#2a2a28)"></div><div class="overlay"><b>Vellum — Packaging</b></div></div>
  <div class="item" style="height:210px"><div class="ph" style="height:210px;background:linear-gradient(155deg,#d4ff3f,#3a4a10)"></div><div class="overlay"><b>Cascade — Art direction</b></div></div>
  <div class="item" style="height:160px"><div class="ph" style="height:160px;background:linear-gradient(155deg,#f2f2f0,#4a4a48)"></div><div class="overlay"><b>Ampersand — Motion</b></div></div>
  <div class="item" style="height:130px"><div class="ph" style="height:130px;background:linear-gradient(155deg,#7a9e1f,#1a1a18)"></div><div class="overlay"><b>Origin Co — Identity</b></div></div>
</div>
<script>
document.querySelectorAll(".item").forEach(function(el,i){
  setTimeout(function(){ el.style.transition="opacity .5s ease,transform .5s cubic-bezier(.2,.8,.2,1)"; el.style.opacity=1; el.style.transform="translateY(0)"; }, 100+i*90);
});
</script>
</body></html>
`,

  "tabbed-features": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Tabbed Features</title><style>
:root{--bg:#f4faf9;--ink:#0f2622;--mut:#5b7570;--teal:#0d9488;--line:#dcece8;--card:#fff}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.card{width:380px;background:var(--card);border:1px solid var(--line);border-radius:18px;padding:22px;box-shadow:0 24px 50px -24px rgba(15,38,34,.15)}
.tabs{display:flex;gap:6px;margin-bottom:18px;background:var(--bg);border-radius:11px;padding:4px}
.tabs button{flex:1;background:none;border:0;padding:9px;border-radius:8px;font-size:12px;font-weight:600;color:var(--mut);cursor:pointer;font-family:inherit}
.tabs button.on{background:#fff;color:var(--teal);box-shadow:0 4px 10px -4px rgba(15,38,34,.2)}
.panel{display:none}
.panel.on{display:block;animation:fade .3s ease}
@keyframes fade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
.vis{height:130px;border-radius:12px;margin-bottom:14px}
.panel h4{margin:0 0 6px;font-size:14.5px;color:var(--ink)}
.panel p{margin:0;font-size:12.5px;color:var(--mut);line-height:1.6}
</style></head>
<body>
<div class="card">
  <div class="tabs" id="tabs">
    <button class="on" data-i="0">Automate</button>
    <button data-i="1">Analyze</button>
    <button data-i="2">Collaborate</button>
  </div>
  <div class="panel on" data-i="0"><div class="vis" style="background:linear-gradient(155deg,#ccf1ea,#0d9488)"></div><h4>Automate the busywork</h4><p>Rules-based workflows that run themselves once you set them up.</p></div>
  <div class="panel" data-i="1"><div class="vis" style="background:linear-gradient(155deg,#a7e8dc,#0f766e)"></div><h4>See what's actually working</h4><p>Real-time dashboards, not weekly exports nobody reads.</p></div>
  <div class="panel" data-i="2"><div class="vis" style="background:linear-gradient(155deg,#ddf2ee,#5bab9e)"></div><h4>Built for teams, not solo users</h4><p>Comments, mentions and shared views, right where the work happens.</p></div>
</div>
<script>
var tabs=document.querySelectorAll(".tabs button"), panels=document.querySelectorAll(".panel");
tabs.forEach(function(t){
  t.addEventListener("click",function(){
    tabs.forEach(function(x){x.classList.remove("on")}); t.classList.add("on");
    panels.forEach(function(p){ p.classList.toggle("on", p.dataset.i===t.dataset.i); });
  });
});
</script>
</body></html>
`,

  "sticky-cta-banner": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>FlowState Landing Page</title><style>
:root{--ink:#211d1a;--mut:#847c72;--paper:#faf6ef;--card:#fff;--line:#e8e0d3;--coral:#ff5a36;--coral-d:#e8451f;--forest:#2d5a3d;--gold:#d4a53d}
*{box-sizing:border-box}
body{margin:0;background:var(--paper);color:var(--ink);font-family:"Plus Jakarta Sans",Inter,ui-sans-serif,system-ui,sans-serif;-webkit-font-smoothing:antialiased;overflow-x:hidden}
h1,h2,h3{font-family:"Sora","Plus Jakarta Sans",sans-serif;margin:0;font-weight:600;letter-spacing:-.03em;color:var(--ink)}
p{margin:0;color:var(--mut)}
button{font-family:inherit;cursor:pointer;border:0}
.mono{font-family:"JetBrains Mono",ui-monospace,monospace}
.wrap{max-width:1180px;margin:0 auto;padding:0 32px}
.rv{opacity:0;transform:translateY(30px)}
.eb{display:inline-flex;align-items:center;gap:8px;font-size:12.5px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--coral);margin-bottom:16px}
.eb:before{content:"";width:7px;height:7px;border-radius:50%;background:var(--coral)}

/* ---------- buttons ---------- */
.btn{position:relative;display:inline-flex;align-items:center;gap:9px;border-radius:14px;padding:15px 26px;font-size:15px;font-weight:700;transition:transform .3s cubic-bezier(.2,.8,.2,1),box-shadow .3s}
.btn svg{width:16px;height:16px;flex:none;transition:transform .3s cubic-bezier(.34,1.56,.64,1)}
.btn:hover svg{transform:translate(3px,-3px)}
.btn-coral{background:var(--coral);color:#fff;box-shadow:0 10px 26px rgba(255,90,54,.32)}
.btn-coral:hover{transform:translateY(-3px);box-shadow:0 18px 38px rgba(255,90,54,.42);background:var(--coral-d)}
.btn-line{background:transparent;color:var(--ink);border:1.5px solid var(--line)}
.btn-line:hover{transform:translateY(-3px);border-color:var(--ink)}
.magnetic{will-change:transform}

/* ---------- nav ---------- */
.nav{position:sticky;top:0;z-index:60;transition:background .4s,box-shadow .4s,backdrop-filter .4s}
.nav-in{max-width:1180px;margin:0 auto;padding:22px 32px;display:flex;align-items:center;gap:34px;transition:padding .4s}
.nav.on{background:rgba(250,246,239,.86);backdrop-filter:blur(18px) saturate(1.5);box-shadow:0 1px 0 rgba(33,29,26,.06),0 10px 30px rgba(33,29,26,.05)}
.nav.on .nav-in{padding:13px 32px}
.brand{display:flex;align-items:center;gap:10px;font-family:"Sora",sans-serif;font-size:20px;font-weight:700;letter-spacing:-.03em}
.brand .dot{width:11px;height:11px;border-radius:4px;background:var(--coral);transition:transform .5s cubic-bezier(.2,.8,.2,1),border-radius .5s}
.brand:hover .dot{transform:rotate(135deg);border-radius:50%}
.nav-links{display:flex;gap:30px;margin:0 auto;font-size:14.5px;color:var(--mut)}
.nav-links a{position:relative;cursor:pointer;padding-bottom:4px;transition:color .25s}
.nav-links a:after{content:"";position:absolute;left:0;bottom:0;width:100%;height:2px;border-radius:2px;background:var(--coral);transform:scaleX(0);transform-origin:right;transition:transform .35s cubic-bezier(.2,.8,.2,1)}
.nav-links a:hover{color:var(--ink)}
.nav-links a:hover:after{transform:scaleX(1);transform-origin:left}
.nav-right{display:flex;align-items:center;gap:18px}
.nav-right .lg{font-size:14.5px;color:var(--mut);cursor:pointer}
.nav-right .lg:hover{color:var(--ink)}
.nav-right .btn{padding:11px 20px;font-size:13.5px;border-radius:11px}

/* ---------- hero ---------- */
.hero{position:relative;padding:88px 0 40px;overflow:hidden}
.hero-grid{display:grid;grid-template-columns:1fr .92fr;gap:50px;align-items:center}
.hero-blob{position:absolute;top:-180px;right:-220px;width:640px;height:640px;border-radius:50%;background:radial-gradient(circle at 35% 35%,rgba(255,90,54,.22),transparent 68%);filter:blur(10px);z-index:0}
.hero h1{font-size:clamp(40px,4.6vw,68px);line-height:1.04}
.hero h1 em{font-style:normal;color:var(--coral);position:relative}
.hero p.lead{margin-top:22px;font-size:18px;line-height:1.6;max-width:480px}
.hero .cta{display:flex;gap:14px;margin-top:34px;flex-wrap:wrap}
.trust-mini{display:flex;align-items:center;gap:12px;margin-top:34px}
.trust-mini .avs{display:flex}
.trust-mini .avs span{width:32px;height:32px;border-radius:50%;border:2.5px solid var(--paper);margin-left:-9px;display:block;background-size:cover}
.trust-mini .avs span:first-child{margin-left:0}
.trust-mini small{font-size:13px;color:var(--mut)}

/* kanban mockup */
.board{position:relative;z-index:1;background:var(--card);border-radius:22px;border:1px solid var(--line);box-shadow:0 30px 70px rgba(33,29,26,.14);padding:20px;transform:rotate(1.2deg)}
.board-bar{display:flex;align-items:center;gap:8px;margin-bottom:16px}
.board-bar i{width:10px;height:10px;border-radius:50%;background:var(--line)}
.board-bar span{margin-left:8px;font-size:12.5px;color:var(--mut)}
.board-cols{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.col h5{font-size:11.5px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--mut);margin-bottom:10px;display:flex;align-items:center;gap:6px}
.col h5 b{background:var(--line);color:var(--ink);border-radius:6px;padding:1px 6px;font-size:10.5px}
.tcard{background:var(--paper);border:1px solid var(--line);border-radius:11px;padding:11px 12px;margin-bottom:10px;cursor:grab}
.tcard .tag{display:inline-block;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;padding:2px 7px;border-radius:5px;margin-bottom:7px}
.tag.design{background:#e9ddff;color:#6c3fd8}
.tag.dev{background:#d7f0e6;color:var(--forest)}
.tag.copy{background:#ffe6cf;color:var(--coral-d)}
.tcard p{font-size:12.5px;color:var(--ink);line-height:1.35}
.tcard .foot{display:flex;align-items:center;justify-content:space-between;margin-top:9px}
.tcard .foot span{width:20px;height:20px;border-radius:50%;background:var(--gold)}
.tcard .foot i{font-size:10.5px;color:var(--mut);font-style:normal}
.tcard.done p{text-decoration:line-through;color:var(--mut)}
.tcard.done{opacity:.75}

/* ---------- logo cloud ---------- */
.logos{padding:44px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.logos .lbl{text-align:center;font-size:12.5px;letter-spacing:.08em;text-transform:uppercase;color:var(--mut);margin-bottom:26px}
.logo-row{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:30px;opacity:.55;filter:grayscale(1)}
.logo-row div{font-family:"Sora",sans-serif;font-weight:700;font-size:20px;letter-spacing:-.02em;transition:opacity .3s,filter .3s}
.logo-row div:hover{opacity:1;filter:grayscale(0)}

/* ---------- feature story ---------- */
.story{padding:130px 0}
.story-row{display:grid;grid-template-columns:1fr 1fr;gap:70px;align-items:center}
.story-row.rev .txt{order:2}
.story-row.rev .vis{order:1}
.story h2{font-size:clamp(28px,3vw,40px);margin:14px 0 18px}
.story p.body{font-size:16.5px;line-height:1.7;max-width:440px}
.story ul{list-style:none;margin:22px 0 0;padding:0;display:flex;flex-direction:column;gap:12px}
.story li{display:flex;align-items:center;gap:10px;font-size:14.5px;color:var(--ink)}
.story li svg{width:18px;height:18px;color:var(--forest);flex:none}
.vis{position:relative}
.vcard{background:var(--card);border:1px solid var(--line);border-radius:20px;box-shadow:0 26px 60px rgba(33,29,26,.1);padding:26px;position:relative}
.timeline{display:flex;flex-direction:column;gap:16px}
.tl-row{display:flex;align-items:center;gap:14px}
.tl-dot{width:30px;height:30px;border-radius:50%;background:var(--paper);border:2px solid var(--line);display:flex;align-items:center;justify-content:center;flex:none}
.tl-dot.on{background:var(--forest);border-color:var(--forest)}
.tl-dot svg{width:14px;height:14px;color:#fff}
.tl-bar{flex:1;height:8px;background:var(--paper);border-radius:5px;overflow:hidden}
.tl-bar i{display:block;height:100%;background:linear-gradient(90deg,var(--coral),var(--gold));border-radius:5px;width:0}
.chart-vis{display:flex;align-items:end;gap:8px;height:150px;padding:10px 6px}
.chart-vis .bar{flex:1;background:linear-gradient(180deg,var(--coral),var(--gold));border-radius:8px 8px 3px 3px;height:0}
.focus-ring{position:absolute;inset:-16px;border:1.5px dashed var(--line);border-radius:30px;pointer-events:none}

/* ---------- pinned workflow ---------- */
.flow-sec{padding:60px 0 0;background:var(--ink);color:#fff;position:relative}
.flow-head{text-align:center;padding-top:60px;max-width:620px;margin:0 auto}
.flow-head .eb{color:var(--gold)}
.flow-head .eb:before{background:var(--gold)}
.flow-head h2{color:#fff;font-size:clamp(28px,3.4vw,42px)}
.flow-head p{color:rgba(255,255,255,.55);margin-top:14px;font-size:16px}
.flow-pin{height:100vh;display:flex;align-items:center;justify-content:center;position:relative}
.flow-board{width:min(920px,90vw);background:#2a2521;border:1px solid rgba(255,255,255,.09);border-radius:22px;padding:24px;box-shadow:0 40px 90px rgba(0,0,0,.5)}
.flow-cols{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.flow-col{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:14px;padding:14px;min-height:260px}
.flow-col h5{font-size:12px;text-transform:uppercase;letter-spacing:.06em;color:rgba(255,255,255,.4);margin-bottom:12px}
.fcard{background:#332c26;border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:10px 12px;margin-bottom:10px;font-size:12.5px;color:#f1ece4;position:relative}
.fcard .tag{display:inline-block;font-size:9.5px;font-weight:700;text-transform:uppercase;padding:2px 6px;border-radius:4px;margin-bottom:6px;background:rgba(255,90,54,.2);color:#ff9979}
.flow-progress{display:flex;justify-content:center;gap:10px;margin-top:26px}
.flow-progress span{width:8px;height:8px;border-radius:50%;background:rgba(255,255,255,.2);transition:background .3s,transform .3s}
.flow-progress span.on{background:var(--coral);transform:scale(1.3)}

/* ---------- stats ---------- */
.stats{padding:110px 0;text-align:center}
.stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
.stat b{display:block;font-family:"Sora",sans-serif;font-size:clamp(34px,4vw,52px);font-weight:700;letter-spacing:-.03em;color:var(--ink)}
.stat span{display:block;margin-top:8px;font-size:13.5px;color:var(--mut)}

/* ---------- testimonials ---------- */
.testi{padding:60px 0 130px}
.testi-track{display:flex;gap:22px;overflow:hidden}
.tcard2{flex:0 0 auto;width:380px;background:var(--card);border:1px solid var(--line);border-radius:20px;padding:30px;transition:transform .4s cubic-bezier(.2,.8,.2,1),box-shadow .4s}
.tcard2:hover{transform:translateY(-8px) rotate(-.6deg);box-shadow:0 24px 50px rgba(33,29,26,.14)}
.tcard2 .stars{color:var(--gold);font-size:14px;margin-bottom:14px;letter-spacing:2px}
.tcard2 p{color:var(--ink);font-size:15.5px;line-height:1.6}
.tcard2 .who{display:flex;align-items:center;gap:10px;margin-top:20px}
.tcard2 .who span{width:38px;height:38px;border-radius:50%;background:var(--line)}
.tcard2 .who b{display:block;font-size:14px;color:var(--ink)}
.tcard2 .who i{font-style:normal;font-size:12.5px;color:var(--mut)}

/* ---------- pricing ---------- */
.pricing{padding:0 0 130px}
.price-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
.pcard{background:var(--card);border:1px solid var(--line);border-radius:22px;padding:34px 28px;transition:transform .35s cubic-bezier(.2,.8,.2,1),box-shadow .35s,border-color .35s}
.pcard:hover{transform:translateY(-8px);box-shadow:0 26px 54px rgba(33,29,26,.12);border-color:#e0d4c0}
.pcard.feat{background:var(--ink);color:#fff;position:relative;overflow:hidden}
.pcard.feat:before{content:"";position:absolute;top:-40%;right:-30%;width:220px;height:220px;background:radial-gradient(circle,rgba(255,90,54,.35),transparent 70%)}
.pcard.feat .tier,.pcard.feat p{color:rgba(255,255,255,.6)}
.pcard.feat li{color:#fff}
.pcard .tier{font-size:13px;text-transform:uppercase;letter-spacing:.06em;color:var(--mut);font-weight:700}
.pcard .amt{font-family:"Sora",sans-serif;font-size:40px;font-weight:700;margin:14px 0;letter-spacing:-.03em}
.pcard .amt span{font-size:14px;color:var(--mut);font-weight:500}
.pcard ul{list-style:none;padding:0;margin:22px 0;display:flex;flex-direction:column;gap:11px}
.pcard li{display:flex;gap:9px;align-items:center;font-size:14px;color:var(--ink)}
.pcard li svg{width:15px;height:15px;color:var(--forest);flex:none}
.pcard .btn{width:100%;justify-content:center;margin-top:8px}
.badge-pop{position:absolute;top:20px;right:20px;background:var(--coral);color:#fff;font-size:11px;font-weight:700;padding:4px 10px;border-radius:20px;text-transform:uppercase;letter-spacing:.04em}

/* ---------- final cta ---------- */
.final{padding:0 0 120px}
.final-box{position:relative;background:var(--ink);border-radius:32px;padding:90px 40px;text-align:center;overflow:hidden}
.final-glow{position:absolute;width:520px;height:520px;border-radius:50%;background:radial-gradient(circle,rgba(255,90,54,.4),transparent 68%);left:50%;top:50%;transform:translate(-50%,-50%);filter:blur(20px)}
.final-box h2{position:relative;color:#fff;font-size:clamp(30px,4.4vw,52px);max-width:640px;margin:0 auto}
.final-box p{position:relative;color:rgba(255,255,255,.55);margin:18px auto 0;max-width:460px;font-size:16px}
.final-box .cta{position:relative;justify-content:center;margin-top:34px}

/* ---------- footer ---------- */
footer{border-top:1px solid var(--line);padding:60px 0 30px}
.foot-top{display:flex;justify-content:space-between;gap:40px;flex-wrap:wrap;padding-bottom:40px;border-bottom:1px solid var(--line)}
.foot-brand p{max-width:280px;margin-top:14px;font-size:14px;line-height:1.6}
.foot-cols{display:flex;gap:60px}
.foot-col h6{font-size:12.5px;text-transform:uppercase;letter-spacing:.06em;color:var(--mut);margin-bottom:16px}
.foot-col a{display:block;font-size:14px;color:var(--ink);margin-bottom:10px;text-decoration:none;opacity:.8;transition:opacity .2s}
.foot-col a:hover{opacity:1}
.foot-bottom{display:flex;justify-content:space-between;padding-top:26px;font-size:13px;color:var(--mut)}

@media(max-width:900px){
  .hero-grid{grid-template-columns:1fr}
  .board{transform:none;margin-top:20px}
  .story-row{grid-template-columns:1fr}
  .story-row.rev .txt{order:1}
  .story-row.rev .vis{order:2}
  .stats-grid{grid-template-columns:repeat(2,1fr);gap:30px}
  .price-grid{grid-template-columns:1fr}
  .nav-links{display:none}
}
@media(max-width:600px){
  .board-cols{grid-template-columns:1fr}
  .logo-row{justify-content:center}
  .foot-top{flex-direction:column;gap:30px}
  .foot-cols{gap:34px;flex-wrap:wrap}
  /* The pinned workflow board must fit inside one mobile viewport with room
     to spare — a three-column grid stacked to 1fr would run taller than the
     pin itself, stranding the "Done" column and dots below the fold with no
     way to scroll to them while pinned. Keep all three columns side by side
     (narrow) and shrink the card/board chrome instead of stacking. */
  .flow-board{padding:14px}
  .flow-cols{gap:8px}
  .flow-col{min-height:150px;padding:10px 8px}
  .flow-col h5{font-size:10px;margin-bottom:8px}
  .fcard{font-size:10.5px;padding:8px 9px}
  .fcard .tag{font-size:8px}
  .flow-head{padding-top:40px}
}
@media(prefers-reduced-motion:reduce){
  .rv{opacity:1!important;transform:none!important}
}
</style></head>
<body data-cf-keep-dark>

<nav class="nav" id="nav">
  <div class="nav-in">
    <div class="brand"><span class="dot"></span>FlowState</div>
    <div class="nav-links">
      <a>Product</a><a>Workflows</a><a>Pricing</a><a>Customers</a>
    </div>
    <div class="nav-right">
      <span class="lg">Sign in</span>
      <button class="btn btn-coral magnetic">Start free <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M7 17 17 7M7 7h10v10"/></svg></button>
    </div>
  </div>
</nav>

<section class="hero">
  <div class="hero-blob"></div>
  <div class="wrap hero-grid">
    <div>
      <span class="eb rv">Project management, reimagined</span>
      <h1 class="rv">Work moves <em>fast</em> when everyone's in flow.</h1>
      <p class="lead rv">FlowState turns scattered tasks into a single living board — plan, assign and ship without the status-meeting overhead.</p>
      <div class="cta rv">
        <button class="btn btn-coral magnetic">Start for free <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M7 17 17 7M7 7h10v10"/></svg></button>
        <button class="btn btn-line">Watch demo</button>
      </div>
      <div class="trust-mini rv">
        <div class="avs">
          <span style="background:linear-gradient(135deg,#ff9979,#ff5a36)"></span>
          <span style="background:linear-gradient(135deg,#8fd6b4,#2d5a3d)"></span>
          <span style="background:linear-gradient(135deg,#f2cf7e,#d4a53d)"></span>
          <span style="background:linear-gradient(135deg,#b6a4f0,#6c3fd8)"></span>
        </div>
        <small>Trusted by 12,000+ product teams</small>
      </div>
    </div>
    <div class="board rv" id="heroBoard">
      <div class="board-bar"><i></i><i></i><i></i><span>Sprint 24 — Launch week</span></div>
      <div class="board-cols">
        <div class="col"><h5>To do <b>3</b></h5>
          <div class="tcard" data-fly="1"><span class="tag design">Design</span><p>Redesign onboarding empty states</p><div class="foot"><span></span><i>Due Fri</i></div></div>
          <div class="tcard" data-fly="2"><span class="tag copy">Copy</span><p>Write launch email sequence</p><div class="foot"><span></span><i>Due Mon</i></div></div>
        </div>
        <div class="col"><h5>In progress <b>2</b></h5>
          <div class="tcard" data-fly="3"><span class="tag dev">Dev</span><p>Ship real-time board sync</p><div class="foot"><span></span><i>Today</i></div></div>
        </div>
        <div class="col"><h5>Done <b>4</b></h5>
          <div class="tcard done" data-fly="4"><span class="tag dev">Dev</span><p>Migrate auth to SSO</p><div class="foot"><span></span><i>Yesterday</i></div></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="logos">
  <div class="wrap">
    <div class="lbl">Powering teams at</div>
    <div class="logo-row">
      <div>Northwind</div><div>Vellum</div><div>Cascade Labs</div><div>Ampersand</div><div>Origin&nbsp;Co.</div><div>Haven</div>
    </div>
  </div>
</section>

<section class="story">
  <div class="wrap story-row">
    <div class="txt">
      <span class="eb rv">Plan</span>
      <h2 class="rv">See the whole sprint before you commit to it.</h2>
      <p class="body rv">Drag tasks across a timeline that recalculates capacity in real time, so nobody's sprint quietly overflows.</p>
      <ul class="rv">
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M20 6 9 17l-5-5"/></svg>Auto-balances workload across the team</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M20 6 9 17l-5-5"/></svg>Flags conflicts before they happen</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M20 6 9 17l-5-5"/></svg>Syncs with the board, no double-entry</li>
      </ul>
    </div>
    <div class="vis rv">
      <div class="focus-ring"></div>
      <div class="vcard">
        <div class="timeline" id="tl">
          <div class="tl-row"><div class="tl-dot on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg></div><div class="tl-bar"><i style="width:100%"></i></div></div>
          <div class="tl-row"><div class="tl-dot on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg></div><div class="tl-bar"><i data-w="72"></i></div></div>
          <div class="tl-row"><div class="tl-dot"></div><div class="tl-bar"><i data-w="38"></i></div></div>
          <div class="tl-row"><div class="tl-dot"></div><div class="tl-bar"><i data-w="15"></i></div></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="story">
  <div class="wrap story-row rev">
    <div class="txt">
      <span class="eb rv">Measure</span>
      <h2 class="rv">Velocity you can actually trust.</h2>
      <p class="body rv">Every board update rolls straight into a live burnup chart — no exports, no spreadsheet gymnastics.</p>
      <ul class="rv">
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M20 6 9 17l-5-5"/></svg>Live throughput and cycle-time charts</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M20 6 9 17l-5-5"/></svg>Shareable reports for stakeholders</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M20 6 9 17l-5-5"/></svg>Historical trends, not just snapshots</li>
      </ul>
    </div>
    <div class="vis rv">
      <div class="focus-ring"></div>
      <div class="vcard">
        <div class="chart-vis" id="chart">
          <div class="bar" data-h="38"></div><div class="bar" data-h="62"></div><div class="bar" data-h="48"></div>
          <div class="bar" data-h="80"></div><div class="bar" data-h="66"></div><div class="bar" data-h="94"></div><div class="bar" data-h="74"></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="flow-sec">
  <div class="flow-head">
    <span class="eb rv">Live workflow</span>
    <h2 class="rv">Watch a task travel the whole board.</h2>
    <p class="rv">One card, three states — scroll to follow it from idea to shipped.</p>
  </div>
  <div class="flow-pin" id="flowPin">
    <div class="flow-board">
      <div class="flow-cols">
        <div class="flow-col" id="fcTodo"><h5>To do</h5></div>
        <div class="flow-col" id="fcProg"><h5>In progress</h5></div>
        <div class="flow-col" id="fcDone"><h5>Done</h5></div>
      </div>
      <div class="flow-progress"><span class="on"></span><span></span><span></span></div>
    </div>
  </div>
</section>

<section class="stats">
  <div class="wrap stats-grid">
    <div class="stat"><b data-count="12400">0</b><span>Teams on FlowState</span></div>
    <div class="stat"><b data-count="41" data-suffix="%">0</b><span>Faster sprint planning</span></div>
    <div class="stat"><b data-count="2100000" data-suffix="+">0</b><span>Tasks shipped this year</span></div>
    <div class="stat"><b data-count="99" data-suffix=".9%">0</b><span>Uptime SLA</span></div>
  </div>
</section>

<section class="testi">
  <div class="wrap">
    <span class="eb rv">Customers</span>
    <h2 class="rv" style="margin-bottom:30px">Teams that stopped drowning in status updates.</h2>
  </div>
  <div class="wrap">
    <div class="testi-track rv">
      <div class="tcard2"><div class="stars">★★★★★</div><p>"We cut our planning meetings in half. The workload view alone paid for itself in the first sprint."</p><div class="who"><span></span><div><b>Maya Ortiz</b><i>Head of Product, Cascade Labs</i></div></div></div>
      <div class="tcard2"><div class="stars">★★★★★</div><p>"FlowState is the first tool the whole team actually opens every day, engineers included."</p><div class="who"><span></span><div><b>Daniel Reyes</b><i>Eng Lead, Northwind</i></div></div></div>
      <div class="tcard2"><div class="stars">★★★★★</div><p>"The live burnup chart replaced three spreadsheets and a very tired ops person."</p><div class="who"><span></span><div><b>Priya Nair</b><i>COO, Ampersand</i></div></div></div>
    </div>
  </div>
</section>

<section class="pricing">
  <div class="wrap">
    <div style="text-align:center;margin-bottom:50px">
      <span class="eb rv" style="justify-content:center">Pricing</span>
      <h2 class="rv">Start free. Scale when it's earned.</h2>
    </div>
    <div class="price-grid">
      <div class="pcard">
        <div class="tier">Starter</div>
        <div class="amt">$0<span>/mo</span></div>
        <p>For small teams getting their first board off the ground.</p>
        <ul>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M20 6 9 17l-5-5"/></svg>Up to 5 members</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M20 6 9 17l-5-5"/></svg>3 active boards</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M20 6 9 17l-5-5"/></svg>Basic reporting</li>
        </ul>
        <button class="btn btn-line">Get started</button>
      </div>
      <div class="pcard feat">
        <span class="badge-pop">Most popular</span>
        <div class="tier">Team</div>
        <div class="amt">$18<span>/user/mo</span></div>
        <p>For teams that live and breathe their sprint board.</p>
        <ul>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M20 6 9 17l-5-5"/></svg>Unlimited members</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M20 6 9 17l-5-5"/></svg>Unlimited boards</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M20 6 9 17l-5-5"/></svg>Live velocity charts</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M20 6 9 17l-5-5"/></svg>Priority support</li>
        </ul>
        <button class="btn btn-coral">Start free trial</button>
      </div>
      <div class="pcard">
        <div class="tier">Enterprise</div>
        <div class="amt">Custom</div>
        <p>For orgs that need SSO, audit logs and a dedicated CSM.</p>
        <ul>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M20 6 9 17l-5-5"/></svg>SSO &amp; SCIM</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M20 6 9 17l-5-5"/></svg>Audit logs</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M20 6 9 17l-5-5"/></svg>Dedicated CSM</li>
        </ul>
        <button class="btn btn-line">Talk to sales</button>
      </div>
    </div>
  </div>
</section>

<section class="final">
  <div class="wrap">
    <div class="final-box rv">
      <div class="final-glow"></div>
      <h2>Stop chasing updates. Start seeing them.</h2>
      <p>Free forever for small teams — no credit card, no setup call.</p>
      <div class="cta"><button class="btn btn-coral magnetic">Start for free <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M7 17 17 7M7 7h10v10"/></svg></button></div>
    </div>
  </div>
</section>

<footer>
  <div class="wrap">
    <div class="foot-top">
      <div class="foot-brand">
        <div class="brand"><span class="dot"></span>FlowState</div>
        <p>The living board for teams who'd rather build than report status.</p>
      </div>
      <div class="foot-cols">
        <div class="foot-col"><h6>Product</h6><a>Boards</a><a>Timeline</a><a>Reporting</a></div>
        <div class="foot-col"><h6>Company</h6><a>About</a><a>Careers</a><a>Blog</a></div>
        <div class="foot-col"><h6>Resources</h6><a>Docs</a><a>API</a><a>Status</a></div>
      </div>
    </div>
    <div class="foot-bottom"><span>© 2026 FlowState Inc.</span><span>Privacy · Terms</span></div>
  </div>
</footer>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script>
(function(){
  var nav = document.getElementById("nav");
  document.addEventListener("scroll", function(){
    nav.classList.toggle("on", window.scrollY > 14);
  }, { passive: true });

  // count-up stat numbers, formatted once fully counted
  function fmt(n, suffix){
    var v = Math.round(n);
    var s = v >= 1000000 ? (v/1000000).toFixed(1).replace(/\.0$/,"") + "M" :
            v >= 1000 ? (v/1000).toFixed(1).replace(/\.0$/,"") + "K" : String(v);
    return s + (suffix || "");
  }
  document.querySelectorAll(".stat b").forEach(function(el){
    el.textContent = fmt(0, el.dataset.suffix);
  });

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!window.gsap || !window.ScrollTrigger || reduced) {
    document.querySelectorAll(".rv").forEach(function(el){ el.style.opacity = 1; el.style.transform = "none"; });
    document.querySelectorAll(".tl-bar i[data-w]").forEach(function(el){ el.style.width = el.dataset.w + "%"; });
    document.querySelectorAll(".chart-vis .bar").forEach(function(el){ el.style.height = el.dataset.h + "%"; });
    document.querySelectorAll(".stat b[data-count]").forEach(function(el){ el.textContent = fmt(+el.dataset.count, el.dataset.suffix); });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // Hero entrance choreography: copy rises in, board mockup settles from a
  // slight scale/rotate offset so it reads as "dropping into place."
  var tl = gsap.timeline({ defaults: { ease: "power3.out" } });
  tl.to(".hero .rv", { opacity: 1, y: 0, duration: .8, stagger: .08 })
    .fromTo("#heroBoard", { opacity: 0, y: 40, rotate: 5, scale: .96 },
      { opacity: 1, y: 0, rotate: 1.2, scale: 1, duration: 1 }, "-=.6")
    .from("#heroBoard .tcard", { opacity: 0, y: 16, stagger: .07, duration: .5 }, "-=.5");

  // Gentle idle float on the hero board so the page feels alive even at rest.
  gsap.to("#heroBoard", { y: -8, duration: 3.2, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1.6 });

  // Generic reveal for every other .rv block as it enters the viewport.
  document.querySelectorAll(".rv").forEach(function(el){
    if (el.closest(".hero")) return;
    gsap.to(el, {
      opacity: 1, y: 0, duration: .85, ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 85%" }
    });
  });

  // Logo cloud: subtle stagger-in for each mark.
  gsap.from(".logo-row div", {
    opacity: 0, y: 12, stagger: .06, duration: .6,
    scrollTrigger: { trigger: ".logo-row", start: "top 88%" }
  });

  // Timeline bars fill in as the "Plan" story section scrolls into view.
  ScrollTrigger.create({
    trigger: "#tl", start: "top 75%", once: true,
    onEnter: function(){
      document.querySelectorAll("#tl .tl-bar i[data-w]").forEach(function(el, i){
        gsap.to(el, { width: el.dataset.w + "%", duration: 1.1, delay: i * .12, ease: "power2.out" });
      });
    }
  });

  // Bar chart grows up from the baseline as the "Measure" story enters.
  ScrollTrigger.create({
    trigger: "#chart", start: "top 75%", once: true,
    onEnter: function(){
      gsap.to("#chart .bar", { height: function(i, t){ return t.dataset.h + "%"; }, duration: 1, stagger: .06, ease: "power2.out" });
    }
  });

  // Story visuals: soft parallax drift as their section scrolls past.
  document.querySelectorAll(".story .vis").forEach(function(vis){
    gsap.to(vis, {
      y: -30, ease: "none",
      scrollTrigger: { trigger: vis.closest(".story"), start: "top bottom", end: "bottom top", scrub: true }
    });
  });

  // Pinned workflow: a single task card travels To do -> In progress -> Done
  // as the section is pinned, driven purely by scroll progress (scrub).
  var card = document.createElement("div");
  card.className = "fcard";
  card.innerHTML = '<span class="tag">Feature</span>Ship real-time board sync';
  document.getElementById("fcTodo").appendChild(card);
  var dots = document.querySelectorAll(".flow-progress span");
  var cols = [document.getElementById("fcTodo"), document.getElementById("fcProg"), document.getElementById("fcDone")];

  ScrollTrigger.create({
    trigger: "#flowPin", start: "top top", end: "+=160%", pin: true, scrub: .4,
    onUpdate: function(self){
      var stage = Math.min(2, Math.floor(self.progress * 3));
      var target = cols[stage];
      if (card.parentElement !== target) {
        target.appendChild(card);
        gsap.fromTo(card, { opacity: 0, scale: .9 }, { opacity: 1, scale: 1, duration: .35 });
        dots.forEach(function(d, i){ d.classList.toggle("on", i === stage); });
      }
    }
  });

  // Stat counters animate once, on first entry into view.
  ScrollTrigger.create({
    trigger: ".stats", start: "top 75%", once: true,
    onEnter: function(){
      document.querySelectorAll(".stat b[data-count]").forEach(function(el){
        var target = +el.dataset.count, suffix = el.dataset.suffix || "";
        var obj = { v: 0 };
        gsap.to(obj, { v: target, duration: 1.8, ease: "power2.out", onUpdate: function(){ el.textContent = fmt(obj.v, suffix); } });
      });
    }
  });

  // Pricing cards: staggered rise, featured card given a touch more lift.
  gsap.from(".pcard", {
    opacity: 0, y: 36, stagger: .1, duration: .8, ease: "power3.out",
    scrollTrigger: { trigger: ".price-grid", start: "top 82%" }
  });

  // Magnetic button pull toward the cursor within a small radius.
  document.querySelectorAll(".magnetic").forEach(function(btn){
    btn.addEventListener("mousemove", function(e){
      var r = btn.getBoundingClientRect();
      var x = e.clientX - r.left - r.width / 2, y = e.clientY - r.top - r.height / 2;
      gsap.to(btn, { x: x * .3, y: y * .35, duration: .3, ease: "power2.out" });
    });
    btn.addEventListener("mouseleave", function(){
      gsap.to(btn, { x: 0, y: 0, duration: .5, ease: "elastic.out(1,.4)" });
    });
  });

  window.addEventListener("load", function(){ ScrollTrigger.refresh(); });
})();
</script>
</body></html>
`,

  "card-hover-tilt": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Hover Tilt Card</title><style>
:root{--bg:#eef1f8;--ink:#161a2b;--mut:#666f8a;--cobalt:#3b5bdb;--line:#dfe3ef}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.kicker{color:var(--mut);font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;text-align:center;margin-bottom:14px;display:block}
.stage{perspective:1000px}
.card{width:280px;background:#fff;border:1px solid var(--line);border-radius:20px;padding:26px;box-shadow:0 24px 50px -22px rgba(20,25,50,.2);transition:transform .12s ease-out;position:relative;overflow:hidden}
.card .glare{position:absolute;inset:0;background:radial-gradient(circle at var(--gx,50%) var(--gy,50%),rgba(255,255,255,.55),transparent 55%);opacity:0;transition:opacity .2s;pointer-events:none}
.card:hover .glare{opacity:1}
.ic{width:44px;height:44px;border-radius:13px;background:linear-gradient(135deg,#4f6bef,#3b5bdb);display:flex;align-items:center;justify-content:center;margin-bottom:16px}
.ic svg{width:20px;height:20px;color:#fff}
.card h3{margin:0 0 8px;font-size:17px;color:var(--ink)}
.card p{margin:0;font-size:13px;color:var(--mut);line-height:1.6}
.tag{display:inline-flex;gap:6px;margin-top:16px;font-size:12px;color:var(--cobalt);font-weight:600}
</style></head>
<body>
<div><span class="kicker">Move your cursor over the card</span>
<div class="stage"><div class="card" id="card"><div class="glare" id="glare"></div>
  <div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2 3 14h8l-1 8 10-12h-8z"/></svg></div>
  <h3>Instant deploys</h3>
  <p>Push to main and watch it ship — zero-downtime, every time, with automatic rollback.</p>
  <span class="tag">Learn more →</span>
</div></div>
</div>
<script>
var card=document.getElementById("card");
card.addEventListener("mousemove",function(e){
  var r=card.getBoundingClientRect(), x=(e.clientX-r.left)/r.width, y=(e.clientY-r.top)/r.height;
  var rx=(y-.5)*-14, ry=(x-.5)*14;
  card.style.transform="rotateX("+rx+"deg) rotateY("+ry+"deg) scale(1.02)";
  card.style.setProperty("--gx",(x*100)+"%");
  card.style.setProperty("--gy",(y*100)+"%");
});
card.addEventListener("mouseleave",function(){ card.style.transform="rotateX(0) rotateY(0) scale(1)"; });
</script>
</body></html>
`,

  "glass-stat-card": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Glass Stat Cards</title><style>
:root{--ink:#161a2b;--mut:#5b6280;--cobalt:#3b5bdb}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:linear-gradient(155deg,#5a72f0,#2f3fb0 60%,#1e2a80);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.row{display:flex;gap:16px;flex-wrap:wrap;justify-content:center;max-width:600px}
.card{width:170px;background:rgba(255,255,255,.14);backdrop-filter:blur(16px) saturate(1.4);border:1px solid rgba(255,255,255,.25);border-radius:18px;padding:20px;opacity:0;transform:translateY(16px)}
.card span{font-size:11px;color:rgba(255,255,255,.7);text-transform:uppercase;letter-spacing:.05em}
.card b{display:block;font-size:26px;color:#fff;margin:8px 0 4px;font-weight:800}
.card i{font-style:normal;font-size:12px;color:#c8f7d4;display:flex;align-items:center;gap:4px}
.card i.down{color:#ffc9c9}
</style></head>
<body>
<div class="row" id="row">
  <div class="card"><span>Active users</span><b data-c="12480">0</b><i>▲ 8.2%</i></div>
  <div class="card"><span>Revenue</span><b data-c="84200" data-p="$">0</b><i>▲ 14.1%</i></div>
  <div class="card"><span>Churn</span><b data-c="2" data-s=".4%">0</b><i class="down">▼ 0.6%</i></div>
</div>
<script>
document.querySelectorAll(".card").forEach(function(c,i){
  setTimeout(function(){ c.style.transition="opacity .5s ease,transform .5s cubic-bezier(.2,.8,.2,1)"; c.style.opacity=1; c.style.transform="translateY(0)"; }, 120+i*110);
});
document.querySelectorAll(".card b").forEach(function(el){
  var target=+el.dataset.c, prefix=el.dataset.p||"", suffix=el.dataset.s||"";
  var start=null;
  function step(ts){ if(!start)start=ts; var p=Math.min(1,(ts-start)/1200); el.textContent=prefix+Math.round(target*p).toLocaleString("en-US")+suffix; if(p<1)requestAnimationFrame(step); }
  setTimeout(function(){ requestAnimationFrame(step); },300);
});
</script>
</body></html>
`,

  "live-chart-card": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Live Chart Card</title><style>
:root{--bg:#0d0f16;--panel:#141824;--panel2:#1a1f2e;--line:rgba(255,255,255,.08);--ink:#eef0f5;--mut:#8890a0;--violet:#7c6cf6;--amber:#f5b942;--green:#4ade80}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.card{width:min(380px,92vw);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:24px;box-shadow:0 30px 70px -30px rgba(0,0,0,.6)}
.top{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:4px}
.top span{font-size:11.5px;color:var(--mut);text-transform:uppercase;letter-spacing:.06em}
.top .badge{display:flex;align-items:center;gap:6px;font-size:11px;color:var(--green);background:rgba(74,222,128,.1);padding:4px 9px;border-radius:20px}
.top .badge i{width:6px;height:6px;border-radius:50%;background:var(--green);box-shadow:0 0 6px var(--green);animation:pulse 1.6s ease-in-out infinite}
@keyframes pulse{50%{opacity:.3}}
.amt{font-family:"Manrope",Inter,sans-serif;font-size:32px;font-weight:800;color:#fff;margin:6px 0 2px;letter-spacing:-.02em}
.delta{font-size:12.5px;color:var(--green);font-weight:600}
.chart{height:110px;margin-top:20px;position:relative}
.chart svg{width:100%;height:100%;overflow:visible}
.chart path.line{fill:none;stroke:var(--violet);stroke-width:2.2;stroke-linecap:round}
.chart path.area{fill:url(#g1);opacity:.35}
.legend{display:flex;justify-content:space-between;margin-top:12px;font-size:10.5px;color:var(--mut)}
</style></head>
<body data-cf-keep-dark>
<div class="card">
  <div class="top"><span>Monthly Recurring Revenue</span><div class="badge"><i></i>Live</div></div>
  <div class="amt" id="amt">$0</div>
  <div class="delta">▲ 12.4% vs last month</div>
  <div class="chart">
    <svg viewBox="0 0 320 110" preserveAspectRatio="none">
      <defs><linearGradient id="g1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#7c6cf6" stop-opacity=".6"/><stop offset="100%" stop-color="#7c6cf6" stop-opacity="0"/></linearGradient></defs>
      <path class="area" id="area" d="M0,100 L320,100 Z"/>
      <path class="line" id="line" d="M0,100 L320,100"/>
    </svg>
  </div>
  <div class="legend"><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span></div>
</div>
<script>
var pts=[95,88,90,72,78,55,60,38,44,20,28,8];
function build(pts,w){var step=w/(pts.length-1),d="M0,"+pts[0];for(var i=1;i<pts.length;i++)d+=" L"+(i*step)+","+pts[i];return d;}
var line=document.getElementById("line"),area=document.getElementById("area"),amt=document.getElementById("amt");
var flat=[100,100,100,100,100,100,100,100,100,100,100,100];
var t=0,dur=1400,start=null;
function frame(ts){
  if(!start)start=ts;
  var p=Math.min(1,(ts-start)/dur),e=1-Math.pow(1-p,3);
  var mix=pts.map(function(v,i){return flat[i]+(v-flat[i])*e;});
  var d=build(mix,320);
  line.setAttribute("d",d);
  area.setAttribute("d",d+" L320,110 L0,110 Z");
  amt.textContent="$"+Math.round(48200*e).toLocaleString("en-US");
  if(p<1)requestAnimationFrame(frame);
}
setTimeout(function(){requestAnimationFrame(frame);},250);
</script>
</body></html>
`,

  "activity-feed-panel": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Activity Feed Panel</title><style>
:root{--bg:#0d0f16;--panel:#141824;--panel2:#1a1f2e;--line:rgba(255,255,255,.08);--ink:#eef0f5;--mut:#8890a0;--violet:#7c6cf6;--amber:#f5b942;--green:#4ade80}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.card{width:min(380px,92vw);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:22px;box-shadow:0 30px 70px -30px rgba(0,0,0,.6)}
.top{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px}
.top h3{margin:0;font-family:"Manrope",sans-serif;font-size:15px;color:#fff;font-weight:700}
.tabs{display:flex;gap:4px;background:var(--panel2);border-radius:9px;padding:3px}
.tabs button{background:none;border:0;color:var(--mut);font-size:11px;padding:5px 10px;border-radius:7px;cursor:pointer;font-family:inherit;transition:background .2s,color .2s}
.tabs button.on{background:var(--violet);color:#fff}
.row{display:flex;gap:12px;padding:11px 0;border-bottom:1px solid var(--line);opacity:0;transform:translateX(-10px)}
.row:last-child{border-bottom:0}
.av{width:32px;height:32px;border-radius:50%;flex:none;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:#fff}
.row .txt{flex:1;min-width:0}
.row .txt p{margin:0;font-size:12.5px;color:var(--ink);line-height:1.4}
.row .txt p b{color:#fff}
.row .txt span{font-size:11px;color:var(--mut)}
.dot{width:6px;height:6px;border-radius:50%;background:var(--violet);margin-top:6px;flex:none}
</style></head>
<body data-cf-keep-dark>
<div class="card">
  <div class="top"><h3>Activity</h3><div class="tabs"><button class="on">All</button><button>Mentions</button></div></div>
  <div id="list">
    <div class="row"><div class="av" style="background:#7c6cf6">MK</div><div class="txt"><p><b>Maya K.</b> merged <b>#412 checkout-fix</b></p><span>2 min ago</span></div><div class="dot"></div></div>
    <div class="row"><div class="av" style="background:#f5b942">DR</div><div class="txt"><p><b>Daniel R.</b> commented on <b>Q3 roadmap</b></p><span>18 min ago</span></div></div>
    <div class="row"><div class="av" style="background:#4ade80">PN</div><div class="txt"><p><b>Priya N.</b> completed <b>onboarding flow</b></p><span>1 hr ago</span></div></div>
    <div class="row"><div class="av" style="background:#f87171">JT</div><div class="txt"><p><b>Jo T.</b> flagged <b>3 failed builds</b></p><span>3 hrs ago</span></div></div>
  </div>
</div>
<script>
document.querySelectorAll(".row").forEach(function(el,i){
  setTimeout(function(){ el.style.transition="opacity .5s ease,transform .5s cubic-bezier(.2,.8,.2,1)"; el.style.opacity=1; el.style.transform="translateX(0)"; }, 150+i*110);
});
var tabs=document.querySelectorAll(".tabs button");
tabs.forEach(function(t){ t.addEventListener("click",function(){ tabs.forEach(function(x){x.classList.remove("on")}); t.classList.add("on"); }); });
</script>
</body></html>
`,

  "icon-feature-grid": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Icon Feature Grid</title><style>
:root{--bg:#f4faf9;--ink:#0f2622;--mut:#5b7570;--teal:#0d9488;--line:#dcece8;--card:#fff}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;width:min(460px,92vw)}
.card{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:18px 16px;opacity:0;transform:translateY(14px);transition:transform .3s,box-shadow .3s}
.card:hover{transform:translateY(-4px);box-shadow:0 16px 30px -16px rgba(15,38,34,.25)}
.ic{width:38px;height:38px;border-radius:10px;background:#e5f6f2;display:flex;align-items:center;justify-content:center;margin-bottom:12px}
.ic svg{width:18px;height:18px;color:var(--teal)}
.card b{display:block;font-size:12.5px;color:var(--ink);margin-bottom:4px}
.card span{font-size:11px;color:var(--mut);line-height:1.5;display:block}
</style></head>
<body>
<div class="grid" id="grid">
  <div class="card"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2 3 14h8l-1 8 10-12h-8z"/></svg></div><b>Fast setup</b><span>Live in minutes</span></div>
  <div class="card"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2 3 6v6c0 5 4 8.5 9 10 5-1.5 9-5 9-10V6z"/></svg></div><b>Secure by default</b><span>SOC 2 Type II</span></div>
  <div class="card"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h4l3 8 4-16 3 8h4"/></svg></div><b>Real-time sync</b><span>No refresh needed</span></div>
  <div class="card"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21a8 8 0 1 0-16 0"/><circle cx="12" cy="7" r="4"/></svg></div><b>Team roles</b><span>Granular access</span></div>
  <div class="card"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/></svg></div><b>Custom dashboards</b><span>Build your own view</span></div>
  <div class="card"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 3h5v5M4 20 21 3M8 21H3v-5"/></svg></div><b>API-first</b><span>Full REST + webhooks</span></div>
</div>
<script>
document.querySelectorAll(".card").forEach(function(c,i){
  setTimeout(function(){ c.style.transition="opacity .45s ease,transform .45s cubic-bezier(.2,.8,.2,1)"; c.style.opacity=1; c.style.transform="translateY(0)"; }, 100+i*80);
});
</script>
</body></html>
`,

  "accordion-features": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Accordion Features</title><style>
:root{--bg:#f4faf9;--ink:#0f2622;--mut:#5b7570;--teal:#0d9488;--line:#dcece8;--card:#fff}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.card{width:360px;background:var(--card);border:1px solid var(--line);border-radius:16px;overflow:hidden}
.item{border-bottom:1px solid var(--line)}
.item:last-child{border-bottom:0}
.q{display:flex;align-items:center;justify-content:space-between;padding:16px 18px;cursor:pointer}
.q b{font-size:13.5px;color:var(--ink);font-weight:600}
.q .plus{width:20px;height:20px;position:relative;flex:none}
.q .plus:before,.q .plus:after{content:"";position:absolute;background:var(--teal);top:50%;left:50%;transform:translate(-50%,-50%)}
.q .plus:before{width:12px;height:2px}
.q .plus:after{width:2px;height:12px;transition:transform .3s}
.item.open .plus:after{transform:translate(-50%,-50%) rotate(90deg) scale(0)}
.a{max-height:0;overflow:hidden;transition:max-height .35s cubic-bezier(.2,.8,.2,1)}
.item.open .a{max-height:120px}
.a p{margin:0;padding:0 18px 18px;font-size:12.5px;color:var(--mut);line-height:1.65}
</style></head>
<body>
<div class="card" id="acc">
  <div class="item open"><div class="q"><b>Does it integrate with our existing stack?</b><span class="plus"></span></div><div class="a"><p>Yes — native integrations with Slack, Notion, GitHub and 40+ others, plus a full REST API.</p></div></div>
  <div class="item"><div class="q"><b>Can I import data from another tool?</b><span class="plus"></span></div><div class="a"><p>One-click import from CSV, plus dedicated migration tools for the five most common competitors.</p></div></div>
  <div class="item"><div class="q"><b>Is there a free plan?</b><span class="plus"></span></div><div class="a"><p>Yes, free forever for teams up to 5 people, no credit card required to start.</p></div></div>
  <div class="item"><div class="q"><b>What happens if I cancel?</b><span class="plus"></span></div><div class="a"><p>Your data stays exportable for 90 days after cancellation — nothing is deleted immediately.</p></div></div>
</div>
<script>
document.querySelectorAll(".q").forEach(function(q){
  q.addEventListener("click",function(){
    var item=q.parentElement, was=item.classList.contains("open");
    document.querySelectorAll(".item").forEach(function(i){i.classList.remove("open")});
    if(!was) item.classList.add("open");
  });
});
</script>
</body></html>
`,

  "floating-label-form": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Floating Label Form</title><style>
:root{--bg:#f5f6fb;--ink:#191b29;--mut:#6b7086;--indigo:#4338ca;--line:#e2e4f0;--card:#fff}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.card{width:320px;background:var(--card);border:1px solid var(--line);border-radius:18px;padding:28px;box-shadow:0 24px 50px -24px rgba(25,27,41,.18)}
.card h3{margin:0 0 20px;font-size:16px;color:var(--ink)}
.field{position:relative;margin-bottom:22px}
.field input{width:100%;padding:15px 14px 6px;border-radius:10px;border:1.5px solid var(--line);font-size:13.5px;font-family:inherit;outline:none;transition:border-color .2s;background:transparent;color:var(--ink)}
.field input:focus{border-color:var(--indigo)}
.field label{position:absolute;left:14px;top:14px;font-size:13.5px;color:var(--mut);pointer-events:none;transition:transform .2s cubic-bezier(.2,.8,.2,1),font-size .2s,top .2s,color .2s}
.field input:focus + label,.field input.filled + label{transform:translateY(-8px);font-size:10px;top:14px;color:var(--indigo);font-weight:600}
button{width:100%;padding:13px;border-radius:10px;border:0;background:var(--indigo);color:#fff;font-size:13.5px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px}
.spinner{width:15px;height:15px;border-radius:50%;border:2px solid rgba(255,255,255,.35);border-top-color:#fff;animation:spin .7s linear infinite;display:none}
button.loading .spinner{display:block}
button.loading .lbl{display:none}
@keyframes spin{to{transform:rotate(360deg)}}
</style></head>
<body>
<div class="card">
  <h3>Create your account</h3>
  <div class="field"><input type="text" id="i1"><label>Full name</label></div>
  <div class="field"><input type="email" id="i2"><label>Email address</label></div>
  <div class="field"><input type="password" id="i3"><label>Password</label></div>
  <button id="btn"><span class="lbl">Create account</span><span class="spinner"></span></button>
</div>
<script>
document.querySelectorAll(".field input").forEach(function(inp){
  inp.addEventListener("input",function(){ inp.classList.toggle("filled", inp.value.length>0); });
});
document.getElementById("btn").addEventListener("click",function(){
  var btn=this; btn.classList.add("loading");
  setTimeout(function(){ btn.classList.remove("loading"); btn.querySelector(".lbl").textContent="Account created ✓"; },1400);
});
</script>
</body></html>
`,

  "inline-validation-form": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Inline Validation Form</title><style>
:root{--bg:#f5f6fb;--ink:#191b29;--mut:#6b7086;--indigo:#4338ca;--line:#e2e4f0;--card:#fff;--green:#16a34a;--red:#dc2626}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.card{width:320px;background:var(--card);border:1px solid var(--line);border-radius:18px;padding:28px;box-shadow:0 24px 50px -24px rgba(25,27,41,.18)}
.card h3{margin:0 0 20px;font-size:16px;color:var(--ink)}
.field{margin-bottom:18px}
.field label{display:block;font-size:11.5px;color:var(--mut);margin-bottom:6px;font-weight:600}
.input-wrap{position:relative}
input{width:100%;padding:11px 36px 11px 13px;border-radius:10px;border:1.5px solid var(--line);font-size:13px;font-family:inherit;outline:none;transition:border-color .2s;color:var(--ink)}
input:focus{border-color:var(--indigo)}
.field.valid input{border-color:var(--green)}
.field.invalid input{border-color:var(--red)}
.status-ic{position:absolute;right:11px;top:50%;transform:translateY(-50%);width:16px;height:16px;opacity:0;transition:opacity .2s}
.field.valid .status-ic.ok,.field.invalid .status-ic.bad{opacity:1}
.status-ic svg{width:100%;height:100%}
.ok svg{color:var(--green)}
.bad svg{color:var(--red)}
.msg{font-size:11px;margin-top:5px;color:var(--red);min-height:14px}
.strength{display:flex;gap:4px;margin-top:6px}
.strength i{flex:1;height:4px;border-radius:3px;background:var(--line);transition:background .2s}
button{width:100%;padding:12px;border-radius:10px;border:0;background:var(--indigo);color:#fff;font-size:13px;font-weight:700;cursor:pointer;margin-top:6px;opacity:.5;pointer-events:none;transition:opacity .2s}
button.ready{opacity:1;pointer-events:auto}
</style></head>
<body>
<div class="card">
  <h3>Sign up</h3>
  <div class="field" id="emailField"><label>Email</label><div class="input-wrap"><input type="email" id="email" placeholder="you@company.com"><span class="status-ic ok"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg></span><span class="status-ic bad"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M18 6 6 18M6 6l12 12"/></svg></span></div><div class="msg" id="emailMsg"></div></div>
  <div class="field" id="pwField"><label>Password</label><div class="input-wrap"><input type="password" id="pw" placeholder="At least 8 characters"><span class="status-ic ok"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg></span></div><div class="strength" id="strength"><i></i><i></i><i></i></div></div>
  <button id="submit">Create account</button>
</div>
<script>
var email=document.getElementById("email"), emailField=document.getElementById("emailField"), emailMsg=document.getElementById("emailMsg");
var pw=document.getElementById("pw"), pwField=document.getElementById("pwField"), bars=document.querySelectorAll("#strength i");
var submit=document.getElementById("submit");
function checkEmail(){
  var v=email.value, ok=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  emailField.classList.toggle("valid", ok && v.length>0);
  emailField.classList.toggle("invalid", !ok && v.length>3);
  emailMsg.textContent = (!ok && v.length>3) ? "Enter a valid email address" : "";
  checkReady();
}
function checkPw(){
  var v=pw.value, score=0;
  if(v.length>=8) score++;
  if(/[A-Z]/.test(v)) score++;
  if(/[0-9]/.test(v)) score++;
  var colors=["#e2e4f0","#dc2626","#f59e0b","#16a34a"];
  bars.forEach(function(b,i){ b.style.background = i<score ? colors[score] : "#e2e4f0"; });
  pwField.classList.toggle("valid", score===3);
  checkReady();
}
function checkReady(){
  submit.classList.toggle("ready", /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value) && pw.value.length>=8);
}
email.addEventListener("input",checkEmail);
pw.addEventListener("input",checkPw);
</script>
</body></html>
`,

  "split-image-hero": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Split Image Hero</title><style>
:root{--bg:#faf9f6;--ink:#0a0a0a;--mut:#6b665c;--coral:#ff4d3d}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;background:var(--bg);font-family:"Space Grotesk",Inter,ui-sans-serif,Arial,sans-serif}
.hero{display:grid;grid-template-columns:1fr 1fr;min-height:100vh;align-items:center}
.txt{padding:60px}
.eb{display:inline-flex;align-items:center;gap:8px;font-size:11.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--coral);margin-bottom:16px;opacity:0;transform:translateY(10px)}
h1{margin:0;font-size:clamp(32px,4.2vw,50px);font-weight:700;letter-spacing:-.03em;color:var(--ink);line-height:1.06;opacity:0;transform:translateY(16px)}
h1 em{font-style:italic;color:var(--coral)}
p{margin:18px 0 0;font-size:15px;color:var(--mut);max-width:380px;opacity:0;transform:translateY(16px)}
.cta{margin-top:26px;display:flex;gap:12px;opacity:0;transform:translateY(16px)}
.cta button{padding:13px 24px;border-radius:999px;border:0;font-size:13px;font-weight:700;cursor:pointer}
.cta .p{background:var(--ink);color:#fff}
.cta .s{background:transparent;color:var(--ink);border:1.5px solid var(--ink)!important}
.vis{position:relative;height:100vh;overflow:hidden;background:linear-gradient(155deg,#ffe0da,#ff4d3d)}
.vis .card{position:absolute;background:#fff;border-radius:20px;box-shadow:0 30px 60px -20px rgba(0,0,0,.25);padding:20px}
.c1{top:18%;left:12%;width:180px;opacity:0;transform:translateY(20px) rotate(-4deg)}
.c2{bottom:16%;right:10%;width:160px;opacity:0;transform:translateY(20px) rotate(3deg)}
.c1 .av{width:34px;height:34px;border-radius:50%;background:linear-gradient(135deg,#ff4d3d,#ffb199);margin-bottom:10px}
.c1 b{display:block;font-size:12.5px;color:var(--ink)}
.c1 span{font-size:10.5px;color:var(--mut)}
.c2 b{display:block;font-size:22px;color:var(--ink)}
.c2 span{font-size:10.5px;color:var(--mut)}
@media(max-width:900px){ .hero{grid-template-columns:1fr} .vis{height:340px} }
</style></head>
<body>
<div class="hero">
  <div class="txt">
    <span class="eb" id="e1">For freelancers &amp; small teams</span>
    <h1 id="e2">Invoicing that gets you paid <em>faster</em>.</h1>
    <p id="e3">Send a polished invoice in under sixty seconds, and get notified the moment it's opened.</p>
    <div class="cta" id="e4"><button class="p" data-cf-keep-dark>Create your first invoice</button><button class="s">Watch demo</button></div>
  </div>
  <div class="vis">
    <div class="card c1" id="c1"><div class="av"></div><b>Invoice #0412 paid</b><span>2 minutes ago</span></div>
    <div class="card c2" id="c2"><b>$84,210</b><span>Collected this quarter</span></div>
  </div>
</div>
<script>
[["e1",0],["e2",120],["e3",240],["e4",360],["c1",500],["c2",620]].forEach(function(pair){
  setTimeout(function(){
    var el=document.getElementById(pair[0]);
    el.style.transition="opacity .6s cubic-bezier(.2,.8,.2,1),transform .6s cubic-bezier(.2,.8,.2,1)";
    el.style.opacity=1;
    el.style.transform=el.id==="c1"?"translateY(0) rotate(-4deg)":el.id==="c2"?"translateY(0) rotate(3deg)":"translateY(0)";
  },pair[1]);
});
</script>
</body></html>
`,

  "faq-accordion-section": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Vaultline Landing Page</title><style>
:root{--bg:#060b10;--panel:#0c141c;--panel2:#101b25;--line:rgba(255,255,255,.08);--ink:#eef3f6;--mut:#7c8b98;--green:#3df2a4;--green-d:#22c880;--blue:#4d8cff;--amber:#ffb04d}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--ink);font-family:Inter,ui-sans-serif,system-ui,sans-serif;-webkit-font-smoothing:antialiased;overflow-x:hidden}
h1,h2,h3{font-family:"Space Grotesk",Inter,sans-serif;margin:0;font-weight:600;letter-spacing:-.03em;color:#fff}
p{margin:0;color:var(--mut)}
button{font-family:inherit;cursor:pointer;border:0}
.mono{font-family:"JetBrains Mono",ui-monospace,monospace}
.wrap{max-width:1180px;margin:0 auto;padding:0 32px}
.rv{opacity:0;transform:translateY(28px)}
.eb{display:inline-flex;align-items:center;gap:9px;font-size:12.5px;font-weight:600;letter-spacing:.09em;text-transform:uppercase;color:var(--green);margin-bottom:16px;font-family:"JetBrains Mono",monospace}
.eb:before{content:"";width:16px;height:1px;background:var(--green)}

/* ---------- buttons ---------- */
.btn{position:relative;display:inline-flex;align-items:center;gap:9px;border-radius:10px;padding:14px 24px;font-size:14.5px;font-weight:600;transition:transform .3s cubic-bezier(.2,.8,.2,1),box-shadow .3s,border-color .3s}
.btn svg{width:15px;height:15px;flex:none;transition:transform .3s}
.btn:hover svg{transform:translateX(4px)}
.btn-green{background:var(--green);color:#04170e;box-shadow:0 0 0 rgba(61,242,164,.4)}
.btn-green:hover{transform:translateY(-2px);box-shadow:0 14px 34px rgba(61,242,164,.28);background:var(--green-d)}
.btn-line{background:transparent;color:var(--ink);border:1px solid var(--line)}
.btn-line:hover{transform:translateY(-2px);border-color:rgba(255,255,255,.3);background:rgba(255,255,255,.04)}

/* ---------- nav ---------- */
.nav{position:sticky;top:0;z-index:60;transition:background .4s,box-shadow .4s,backdrop-filter .4s;border-bottom:1px solid transparent}
.nav-in{max-width:1180px;margin:0 auto;padding:22px 32px;display:flex;align-items:center;gap:34px}
.nav.on{background:rgba(6,11,16,.82);backdrop-filter:blur(18px) saturate(1.4);border-bottom-color:var(--line)}
.brand{display:flex;align-items:center;gap:10px;font-family:"Space Grotesk",sans-serif;font-size:20px;font-weight:700;color:#fff}
.brand svg{width:22px;height:22px;color:var(--green)}
.nav-links{display:flex;gap:30px;margin:0 auto;font-size:14px;color:var(--mut)}
.nav-links a{position:relative;cursor:pointer;padding-bottom:4px}
.nav-links a:after{content:"";position:absolute;left:0;bottom:0;width:100%;height:1.5px;background:var(--green);transform:scaleX(0);transform-origin:right;transition:transform .3s cubic-bezier(.2,.8,.2,1)}
.nav-links a:hover{color:#fff}
.nav-links a:hover:after{transform:scaleX(1);transform-origin:left}
.nav-right{display:flex;align-items:center;gap:18px}
.nav-right .lg{font-size:14px;color:var(--mut);cursor:pointer}
.nav-right .btn{padding:10px 18px;font-size:13.5px}

/* ---------- hero ---------- */
.hero{position:relative;padding:100px 0 60px;overflow:hidden}
.hero:before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px);background-size:64px 64px;mask-image:radial-gradient(ellipse 60% 50% at 50% 20%,#000,transparent)}
.hero-glow{position:absolute;top:-260px;left:50%;transform:translateX(-50%);width:900px;height:600px;background:radial-gradient(ellipse,rgba(61,242,164,.16),transparent 68%);pointer-events:none}
.hero-in{position:relative;text-align:center;max-width:780px;margin:0 auto}
.hero h1{font-size:clamp(38px,5.2vw,66px);line-height:1.05}
.hero h1 .grad{background:linear-gradient(100deg,var(--green),var(--blue));-webkit-background-clip:text;background-clip:text;color:transparent}
.hero p.lead{margin-top:22px;font-size:17.5px;line-height:1.65;max-width:560px;margin-left:auto;margin-right:auto}
.hero .cta{display:flex;gap:14px;justify-content:center;margin-top:32px;flex-wrap:wrap}
.hero .fine{margin-top:18px;font-size:13px;color:var(--mut)}

/* dashboard mockup */
.dash-wrap{position:relative;margin-top:60px}
.dash{position:relative;z-index:1;background:var(--panel);border:1px solid var(--line);border-radius:20px;box-shadow:0 40px 100px rgba(0,0,0,.55);max-width:980px;margin:0 auto;overflow:hidden}
.dash-top{display:flex;align-items:center;justify-content:space-between;padding:18px 22px;border-bottom:1px solid var(--line)}
.dash-top .l{display:flex;gap:8px}
.dash-top .l i{width:9px;height:9px;border-radius:50%;background:rgba(255,255,255,.12)}
.dash-top .r{font-size:12px;color:var(--mut);font-family:"JetBrains Mono",monospace;display:flex;align-items:center;gap:7px}
.dash-top .r b{width:7px;height:7px;border-radius:50%;background:var(--green);display:inline-block;box-shadow:0 0 8px var(--green)}
.dash-body{display:grid;grid-template-columns:200px 1fr;min-height:340px}
.dash-side{border-right:1px solid var(--line);padding:18px 14px;display:flex;flex-direction:column;gap:4px}
.dash-side a{display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:9px;font-size:13px;color:var(--mut)}
.dash-side a.on{background:rgba(61,242,164,.1);color:var(--green)}
.dash-side a svg{width:15px;height:15px;flex:none}
.dash-main{padding:22px}
.bal-row{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:18px}
.bal-row .amt{font-family:"Space Grotesk",sans-serif;font-size:34px;font-weight:700;color:#fff}
.bal-row .amt span{font-size:15px;color:var(--green);margin-left:8px;font-weight:600}
.bal-row .pill{background:rgba(61,242,164,.1);color:var(--green);font-size:11.5px;font-weight:700;padding:5px 11px;border-radius:20px;font-family:"JetBrains Mono",monospace}
.chart-box{position:relative;height:140px;margin-bottom:20px}
.chart-box svg{width:100%;height:100%;overflow:visible}
.chart-box path.line{fill:none;stroke:var(--green);stroke-width:2.4;stroke-linecap:round}
.chart-box path.area{fill:url(#gradArea);opacity:.5}
.row-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.mini-card{background:var(--panel2);border:1px solid var(--line);border-radius:12px;padding:14px}
.mini-card span{font-size:11px;color:var(--mut);text-transform:uppercase;letter-spacing:.05em}
.mini-card b{display:block;margin-top:8px;font-family:"Space Grotesk",sans-serif;font-size:19px;color:#fff}
.mini-card .up{color:var(--green);font-size:11.5px;margin-top:4px;display:block}

/* ---------- logos ---------- */
.logos{padding:46px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.logos .lbl{text-align:center;font-size:12px;letter-spacing:.09em;text-transform:uppercase;color:var(--mut);margin-bottom:26px;font-family:"JetBrains Mono",monospace}
.logo-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:30px;opacity:.5}
.logo-row div{font-family:"Space Grotesk",sans-serif;font-weight:700;font-size:19px;color:#fff;transition:opacity .3s}
.logo-row div:hover{opacity:1}

/* ---------- feature grid ---------- */
.feats{padding:130px 0}
.feats-head{max-width:600px;margin:0 auto 60px;text-align:center}
.feats-head h2{font-size:clamp(28px,3.4vw,42px)}
.feat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
.fcard{background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:28px;transition:transform .35s cubic-bezier(.2,.8,.2,1),border-color .35s,box-shadow .35s}
.fcard:hover{transform:translateY(-6px);border-color:rgba(61,242,164,.35);box-shadow:0 20px 46px rgba(0,0,0,.4)}
.fcard .ic{width:44px;height:44px;border-radius:12px;background:rgba(61,242,164,.1);display:flex;align-items:center;justify-content:center;margin-bottom:18px;transition:transform .35s cubic-bezier(.34,1.56,.64,1),background .35s}
.fcard:hover .ic{transform:rotate(-8deg) scale(1.08);background:rgba(61,242,164,.18)}
.fcard .ic svg{width:22px;height:22px;color:var(--green)}
.fcard h3{font-size:18px;margin-bottom:10px}
.fcard p{font-size:14.5px;line-height:1.6}

/* ---------- horizontal ledger scroll ---------- */
.ledger-sec{padding:0 0 130px}
.ledger-head{max-width:640px;margin:0 auto 46px;text-align:center}
.ledger-track-wrap{overflow:hidden}
.ledger-track{display:flex;gap:18px;width:max-content;padding:4px 32px}
.txn{width:280px;flex:none;background:var(--panel);border:1px solid var(--line);border-radius:16px;padding:20px;transition:transform .3s,border-color .3s}
.txn:hover{transform:translateY(-4px);border-color:rgba(61,242,164,.35)}
.txn .top{display:flex;justify-content:space-between;align-items:center;margin-bottom:14px}
.txn .merc{display:flex;align-items:center;gap:10px}
.txn .merc span{width:34px;height:34px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:15px}
.txn .merc b{font-size:14px;color:#fff;display:block}
.txn .merc i{font-style:normal;font-size:11.5px;color:var(--mut)}
.txn .amt{font-family:"Space Grotesk",sans-serif;font-weight:700;font-size:15px}
.txn .amt.neg{color:#fff}
.txn .amt.pos{color:var(--green)}
.txn .bar{height:5px;background:var(--panel2);border-radius:4px;overflow:hidden}
.txn .bar i{display:block;height:100%;border-radius:4px;background:linear-gradient(90deg,var(--green),var(--blue))}

/* ---------- pinned security ---------- */
.sec-pin-sec{position:relative}
.sec-head{text-align:center;padding:120px 0 0;max-width:600px;margin:0 auto}
.sec-head h2{font-size:clamp(28px,3.4vw,42px)}
.sec-pin{height:100vh;display:flex;align-items:center;justify-content:center;position:relative}
.shield-vis{position:relative;width:300px;height:300px;display:flex;align-items:center;justify-content:center}
.shield-ring{position:absolute;inset:0;border-radius:50%;border:1px solid rgba(61,242,164,.18)}
.shield-ring.r2{inset:32px}
.shield-ring.r3{inset:64px}
.shield-core{width:150px;height:150px;border-radius:50%;background:radial-gradient(circle at 35% 30%,rgba(61,242,164,.28),rgba(12,20,28,.9) 70%);border:1px solid rgba(61,242,164,.35);display:flex;align-items:center;justify-content:center;box-shadow:0 0 80px rgba(61,242,164,.18)}
.shield-core svg{width:56px;height:56px;color:var(--green)}
.sec-labels{position:absolute;inset:0;pointer-events:none}
.sec-label{position:absolute;background:var(--panel);border:1px solid var(--line);border-radius:10px;padding:9px 13px;font-size:12px;font-family:"JetBrains Mono",monospace;color:var(--ink);opacity:0;white-space:nowrap}
.sec-label b{color:var(--green)}
.l1{top:6%;left:8%}.l2{top:14%;right:6%}.l3{bottom:18%;left:2%}.l4{bottom:6%;right:10%}

/* ---------- stats ---------- */
.stats{padding:0 0 120px;text-align:center}
.stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
.stat b{display:block;font-family:"Space Grotesk",sans-serif;font-size:clamp(32px,3.8vw,48px);font-weight:700;color:#fff}
.stat span{display:block;margin-top:8px;font-size:13px;color:var(--mut)}

/* ---------- testimonial ---------- */
.testi{padding:0 0 130px}
.testi-card{max-width:760px;margin:0 auto;text-align:center;background:var(--panel);border:1px solid var(--line);border-radius:22px;padding:56px 50px}
.testi-card p{font-size:22px;line-height:1.5;color:#fff;font-family:"Space Grotesk",sans-serif;font-weight:500}
.testi-card .who{margin-top:26px;font-size:14px;color:var(--mut)}
.testi-card .who b{color:#fff}

/* ---------- final cta ---------- */
.final{padding:0 0 120px}
.final-box{position:relative;background:linear-gradient(135deg,#0c1c16,#081018);border:1px solid rgba(61,242,164,.2);border-radius:28px;padding:90px 40px;text-align:center;overflow:hidden}
.final-box:before{content:"";position:absolute;width:600px;height:400px;border-radius:50%;background:radial-gradient(ellipse,rgba(61,242,164,.2),transparent 70%);top:-140px;left:50%;transform:translateX(-50%)}
.final-box h2{position:relative;font-size:clamp(30px,4.4vw,50px);max-width:640px;margin:0 auto}
.final-box p{position:relative;margin:18px auto 0;max-width:440px;font-size:16px}
.final-box .cta{position:relative;justify-content:center;margin-top:32px;display:flex;gap:14px}

/* ---------- footer ---------- */
footer{border-top:1px solid var(--line);padding:60px 0 30px}
.foot-top{display:flex;justify-content:space-between;gap:40px;flex-wrap:wrap;padding-bottom:40px;border-bottom:1px solid var(--line)}
.foot-brand p{max-width:280px;margin-top:14px;font-size:14px;line-height:1.6}
.foot-cols{display:flex;gap:60px}
.foot-col h6{font-size:12px;text-transform:uppercase;letter-spacing:.06em;color:var(--mut);margin-bottom:16px;font-family:"JetBrains Mono",monospace}
.foot-col a{display:block;font-size:14px;color:var(--ink);margin-bottom:10px;text-decoration:none;opacity:.75}
.foot-col a:hover{opacity:1;color:var(--green)}
.foot-bottom{display:flex;justify-content:space-between;padding-top:26px;font-size:13px;color:var(--mut)}

@media(max-width:900px){
  .dash-body{grid-template-columns:1fr}
  .dash-side{display:none}
  .feat-grid{grid-template-columns:1fr}
  .stats-grid{grid-template-columns:repeat(2,1fr);gap:30px}
  .nav-links{display:none}
  .sec-label{display:none}
}
@media(max-width:600px){
  .row-cards{grid-template-columns:1fr}
  .foot-top{flex-direction:column;gap:30px}
  .foot-cols{gap:34px;flex-wrap:wrap}
  .testi-card{padding:36px 24px}
  .testi-card p{font-size:18px}
}
@media(prefers-reduced-motion:reduce){
  .rv{opacity:1!important;transform:none!important}
}
</style></head>
<body data-cf-keep-dark>

<nav class="nav" id="nav">
  <div class="nav-in">
    <div class="brand"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2 3 6v6c0 5 4 8.5 9 10 5-1.5 9-5 9-10V6z"/></svg>Vaultline</div>
    <div class="nav-links"><a>Platform</a><a>Security</a><a>Pricing</a><a>Docs</a></div>
    <div class="nav-right"><span class="lg">Sign in</span><button class="btn btn-green">Open account <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M7 17 17 7M7 7h10v10"/></svg></button></div>
  </div>
</nav>

<section class="hero">
  <div class="hero-glow"></div>
  <div class="wrap hero-in">
    <span class="eb rv" style="justify-content:center">Banking infrastructure, unbundled</span>
    <h1 class="rv">Money management with <span class="grad">bank-grade</span> clarity.</h1>
    <p class="lead rv">Vaultline gives finance teams a single real-time ledger — accounts, cards and cash flow, reconciled to the second.</p>
    <div class="cta rv">
      <button class="btn btn-green">Open an account <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M7 17 17 7M7 7h10v10"/></svg></button>
      <button class="btn btn-line">See it live</button>
    </div>
    <div class="fine rv">FDIC-insured up to $2.5M through partner banks · SOC 2 Type II</div>
  </div>
  <div class="wrap dash-wrap">
    <div class="dash rv" id="heroDash">
      <div class="dash-top">
        <div class="l"><i></i><i></i><i></i></div>
        <div class="r"><b></b>LIVE LEDGER — SYNCED 0.2S AGO</div>
      </div>
      <div class="dash-body">
        <div class="dash-side">
          <a class="on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/></svg>Overview</a>
          <a><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="13" rx="2"/><path d="M2 10h20"/></svg>Cards</a>
          <a><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h4l3 8 4-16 3 8h4"/></svg>Cash flow</a>
          <a><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2 3 6v6c0 5 4 8.5 9 10 5-1.5 9-5 9-10V6z"/></svg>Security</a>
        </div>
        <div class="dash-main">
          <div class="bal-row">
            <div><span class="mono" style="font-size:12px;color:var(--mut)">TOTAL BALANCE</span><div class="amt" id="balAmt">$0<span id="balUp">+2.4%</span></div></div>
            <div class="pill">Reconciled</div>
          </div>
          <div class="chart-box">
            <svg viewBox="0 0 400 120" preserveAspectRatio="none">
              <defs><linearGradient id="gradArea" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#3df2a4" stop-opacity=".5"/><stop offset="100%" stop-color="#3df2a4" stop-opacity="0"/></linearGradient></defs>
              <path class="area" id="areaPath" d="M0,110 L400,110 Z"/>
              <path class="line" id="linePath" d="M0,110 L400,110"/>
            </svg>
          </div>
          <div class="row-cards">
            <div class="mini-card"><span>Inflow (30d)</span><b data-count="184200">$0</b><span class="up">↑ 12.4%</span></div>
            <div class="mini-card"><span>Outflow (30d)</span><b data-count="96500">$0</b><span class="up" style="color:var(--amber)">↑ 4.1%</span></div>
            <div class="mini-card"><span>Runway</span><b data-count="14" data-suffix=" mo">0</b><span class="up">Healthy</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="logos">
  <div class="wrap">
    <div class="lbl">// Powering finance teams at</div>
    <div class="logo-row"><div>Ledgerline</div><div>Northbeam</div><div>Fenwick</div><div>Turnkey&nbsp;Co.</div><div>Argus</div><div>Portside</div></div>
  </div>
</section>

<section class="feats">
  <div class="wrap">
    <div class="feats-head">
      <span class="eb rv" style="justify-content:center">Platform</span>
      <h2 class="rv">Everything finance touches, one ledger.</h2>
    </div>
    <div class="feat-grid">
      <div class="fcard"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h4l3 8 4-16 3 8h4"/></svg></div><h3>Real-time reconciliation</h3><p>Every transaction posts to the ledger the instant it clears — no end-of-day batch jobs.</p></div>
      <div class="fcard"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="13" rx="2"/><path d="M2 10h20"/></svg></div><h3>Instant virtual cards</h3><p>Spin up spend-limited cards per project or vendor in seconds, revoke just as fast.</p></div>
      <div class="fcard"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2 3 6v6c0 5 4 8.5 9 10 5-1.5 9-5 9-10V6z"/></svg></div><h3>SOC 2 Type II security</h3><p>Encrypted at rest and in transit, with role-based access down to the account level.</p></div>
    </div>
  </div>
</section>

<section class="ledger-sec">
  <div class="wrap ledger-head">
    <span class="eb rv" style="justify-content:center">Live ledger</span>
    <h2 class="rv">Every transaction, reconciled instantly.</h2>
  </div>
  <div class="ledger-track-wrap">
    <div class="ledger-track" id="ledgerTrack">
      <div class="txn"><div class="top"><div class="merc"><span style="background:#1c2d24;color:#3df2a4">◆</span><div><b>Stripe Payout</b><i>Today, 09:41</i></div></div><div class="amt pos">+$8,240</div></div><div class="bar"><i style="width:72%"></i></div></div>
      <div class="txn"><div class="top"><div class="merc"><span style="background:#22242e;color:#8fa0ff">▣</span><div><b>AWS Infrastructure</b><i>Today, 06:12</i></div></div><div class="amt neg">-$1,120</div></div><div class="bar"><i style="width:38%"></i></div></div>
      <div class="txn"><div class="top"><div class="merc"><span style="background:#2b241c;color:#ffb04d">●</span><div><b>Payroll — Eng</b><i>Yesterday</i></div></div><div class="amt neg">-$42,800</div></div><div class="bar"><i style="width:91%"></i></div></div>
      <div class="txn"><div class="top"><div class="merc"><span style="background:#1c2d24;color:#3df2a4">◆</span><div><b>Client Invoice #4471</b><i>Yesterday</i></div></div><div class="amt pos">+$15,000</div></div><div class="bar"><i style="width:64%"></i></div></div>
      <div class="txn"><div class="top"><div class="merc"><span style="background:#22242e;color:#8fa0ff">▣</span><div><b>Office Lease</b><i>2 days ago</i></div></div><div class="amt neg">-$6,400</div></div><div class="bar"><i style="width:45%"></i></div></div>
      <div class="txn"><div class="top"><div class="merc"><span style="background:#1c2d24;color:#3df2a4">◆</span><div><b>Stripe Payout</b><i>3 days ago</i></div></div><div class="amt pos">+$5,910</div></div><div class="bar"><i style="width:55%"></i></div></div>
    </div>
  </div>
</section>

<section class="sec-pin-sec">
  <div class="sec-head">
    <span class="eb rv" style="justify-content:center">Security</span>
    <h2 class="rv">Defense in depth, by default.</h2>
  </div>
  <div class="sec-pin" id="secPin">
    <div class="shield-vis">
      <div class="shield-ring"></div>
      <div class="shield-ring r2"></div>
      <div class="shield-ring r3"></div>
      <div class="shield-core"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2 3 6v6c0 5 4 8.5 9 10 5-1.5 9-5 9-10V6z"/></svg></div>
      <div class="sec-labels">
        <div class="sec-label l1"><b>256-bit</b> AES encryption</div>
        <div class="sec-label l2">SOC 2 <b>Type II</b></div>
        <div class="sec-label l3">Role-based <b>access control</b></div>
        <div class="sec-label l4"><b>24/7</b> fraud monitoring</div>
      </div>
    </div>
  </div>
</section>

<section class="stats">
  <div class="wrap stats-grid">
    <div class="stat"><b data-count="48000000" data-suffix="+">0</b><span>Reconciled monthly</span></div>
    <div class="stat"><b data-count="99" data-suffix=".99%">0</b><span>Ledger uptime</span></div>
    <div class="stat"><b data-count="3200">0</b><span>Finance teams onboard</span></div>
    <div class="stat"><b data-count="200" data-suffix="ms">0</b><span>Average settle time</span></div>
  </div>
</section>

<section class="testi">
  <div class="wrap">
    <div class="testi-card rv">
      <p>"We closed our books three days faster the first month on Vaultline. The ledger just... always matches now."</p>
      <div class="who"><b>Elena Cho</b> — VP Finance, Turnkey Co.</div>
    </div>
  </div>
</section>

<section class="final">
  <div class="wrap">
    <div class="final-box rv">
      <h2>Reconcile in real time. Sleep at month-end.</h2>
      <p>Onboard in a day — most teams are live before their next payroll run.</p>
      <div class="cta"><button class="btn btn-green">Open an account <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M7 17 17 7M7 7h10v10"/></svg></button><button class="btn btn-line">Talk to sales</button></div>
    </div>
  </div>
</section>

<footer>
  <div class="wrap">
    <div class="foot-top">
      <div class="foot-brand">
        <div class="brand"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2 3 6v6c0 5 4 8.5 9 10 5-1.5 9-5 9-10V6z"/></svg>Vaultline</div>
        <p>Real-time banking infrastructure for modern finance teams.</p>
      </div>
      <div class="foot-cols">
        <div class="foot-col"><h6>Product</h6><a>Ledger</a><a>Cards</a><a>Security</a></div>
        <div class="foot-col"><h6>Company</h6><a>About</a><a>Careers</a><a>Trust</a></div>
        <div class="foot-col"><h6>Resources</h6><a>Docs</a><a>API</a><a>Status</a></div>
      </div>
    </div>
    <div class="foot-bottom"><span>© 2026 Vaultline Financial Inc.</span><span>Privacy · Terms</span></div>
  </div>
</footer>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script>
(function(){
  var nav = document.getElementById("nav");
  document.addEventListener("scroll", function(){ nav.classList.toggle("on", window.scrollY > 14); }, { passive: true });

  document.getElementById("ledgerTrack").innerHTML += document.getElementById("ledgerTrack").innerHTML;

  function fmtMoney(n){ return "$" + Math.round(n).toLocaleString("en-US"); }
  function fmt(n, suffix){
    var v = Math.round(n);
    var s = v >= 1000000 ? (v/1000000).toFixed(1).replace(/\.0$/,"") + "M" : v >= 1000 ? (v/1000).toFixed(1).replace(/\.0$/,"") + "K" : String(v);
    return s + (suffix || "");
  }

  // Animated chart path: a believable up-trending line drawn as an SVG path.
  var pts = [110,96,101,84,90,70,76,58,64,40,46,22,28,10];
  function buildPath(pts, w){
    var step = w / (pts.length - 1);
    var d = "M0," + pts[0];
    for (var i = 1; i < pts.length; i++) d += " L" + (i*step) + "," + pts[i];
    return d;
  }
  var linePath = buildPath(pts, 400);
  var areaPath = linePath + " L400,120 L0,120 Z";

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!window.gsap || !window.ScrollTrigger || reduced) {
    document.querySelectorAll(".rv").forEach(function(el){ el.style.opacity = 1; el.style.transform = "none"; });
    document.getElementById("linePath").setAttribute("d", linePath);
    document.getElementById("areaPath").setAttribute("d", areaPath);
    document.getElementById("balAmt").innerHTML = fmtMoney(482300) + '<span>+2.4%</span>';
    document.querySelectorAll(".mini-card b[data-count]").forEach(function(el){ el.textContent = fmt(+el.dataset.count, el.dataset.suffix); });
    document.querySelectorAll(".stat b[data-count]").forEach(function(el){ el.textContent = fmt(+el.dataset.count, el.dataset.suffix); });
    document.querySelectorAll(".sec-label").forEach(function(el){ el.style.opacity = 1; });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  var tl = gsap.timeline({ defaults: { ease: "power3.out" } });
  tl.to(".hero-in .rv", { opacity: 1, y: 0, duration: .8, stagger: .08 })
    .fromTo("#heroDash", { opacity: 0, y: 46, scale: .97 }, { opacity: 1, y: 0, scale: 1, duration: 1 }, "-=.5");

  gsap.to("#heroDash", { y: -6, duration: 3.4, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1.4 });

  // Draw the balance chart line + fill area once the hero settles.
  var lineEl = document.getElementById("linePath"), areaEl = document.getElementById("areaPath");
  var flat = "M0,110 L400,110";
  lineEl.setAttribute("d", flat);
  gsap.delayedCall(1.1, function(){
    var obj = { t: 0 };
    gsap.to(obj, {
      t: 1, duration: 1.6, ease: "power2.out",
      onUpdate: function(){
        var mixed = pts.map(function(p, i){ return 110 + (p - 110) * obj.t; });
        lineEl.setAttribute("d", buildPath(mixed, 400));
        areaEl.setAttribute("d", buildPath(mixed, 400) + " L400,120 L0,120 Z");
      }
    });
    // Balance counts up alongside the chart draw.
    var balObj = { v: 0 };
    gsap.to(balObj, { v: 482300, duration: 1.6, ease: "power2.out", onUpdate: function(){
      document.getElementById("balAmt").innerHTML = fmtMoney(balObj.v) + '<span id="balUp">+2.4%</span>';
    }});
    document.querySelectorAll(".mini-card b[data-count]").forEach(function(el){
      var target = +el.dataset.count, suffix = el.dataset.suffix || "", o = { v: 0 };
      gsap.to(o, { v: target, duration: 1.5, ease: "power2.out", onUpdate: function(){ el.textContent = fmt(o.v, suffix); } });
    });
  });

  document.querySelectorAll(".rv").forEach(function(el){
    if (el.closest(".hero-in")) return;
    gsap.to(el, { opacity: 1, y: 0, duration: .85, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%" } });
  });

  gsap.from(".logo-row div", { opacity: 0, y: 12, stagger: .06, duration: .6, scrollTrigger: { trigger: ".logo-row", start: "top 88%" } });
  gsap.from(".fcard", { opacity: 0, y: 30, stagger: .12, duration: .7, scrollTrigger: { trigger: ".feat-grid", start: "top 82%" } });

  // Ledger strip: continuous marquee drift, pausing on hover.
  var track = document.getElementById("ledgerTrack");
  var marq = gsap.to(track, { x: -track.scrollWidth / 2, duration: 34, ease: "none", repeat: -1 });
  track.addEventListener("mouseenter", function(){ marq.pause(); });
  track.addEventListener("mouseleave", function(){ marq.resume(); });

  // Pinned security shield: rings scale in, labels appear one by one as the
  // section is pinned and scrubbed, then release back into normal flow.
  gsap.set(".shield-core", { scale: .7, opacity: 0 });
  gsap.set(".shield-ring", { scale: .5, opacity: 0 });
  gsap.set(".sec-label", { opacity: 0, y: 10 });
  var secTl = gsap.timeline({
    scrollTrigger: { trigger: "#secPin", start: "top top", end: "+=180%", pin: true, scrub: .5 }
  });
  secTl.to(".shield-core", { scale: 1, opacity: 1, duration: .3 })
    .to(".shield-ring", { scale: 1, opacity: 1, duration: .3, stagger: .1 }, "-=.15")
    .to(".shield-ring", { rotation: 40, duration: 1, ease: "none" }, "<")
    .to(".sec-label.l1", { opacity: 1, y: 0, duration: .2 }, "-=.5")
    .to(".sec-label.l2", { opacity: 1, y: 0, duration: .2 }, "-=.35")
    .to(".sec-label.l3", { opacity: 1, y: 0, duration: .2 }, "-=.35")
    .to(".sec-label.l4", { opacity: 1, y: 0, duration: .2 }, "-=.35");

  gsap.from(".stat", { opacity: 0, y: 24, stagger: .1, duration: .7, scrollTrigger: { trigger: ".stats-grid", start: "top 85%" } });
  ScrollTrigger.create({
    trigger: ".stats", start: "top 78%", once: true,
    onEnter: function(){
      document.querySelectorAll(".stat b[data-count]").forEach(function(el){
        var target = +el.dataset.count, suffix = el.dataset.suffix || "", o = { v: 0 };
        gsap.to(o, { v: target, duration: 1.8, ease: "power2.out", onUpdate: function(){ el.textContent = fmt(o.v, suffix); } });
      });
    }
  });

  window.addEventListener("load", function(){ ScrollTrigger.refresh(); });
})();
</script>
</body></html>
`,

  "logo-cloud-marquee": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Runtime Landing Page</title><style>
:root{--bg:#0a0a0c;--panel:#111114;--panel2:#17171b;--line:rgba(255,255,255,.09);--ink:#e7e7ea;--mut:#87878f;--amber:#ffb454;--cyan:#5ee6d0;--pink:#ff6b9d}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--ink);font-family:"JetBrains Mono",ui-monospace,"SF Mono",Menlo,monospace;-webkit-font-smoothing:antialiased;overflow-x:hidden}
h1,h2,h3{font-family:"JetBrains Mono",monospace;margin:0;font-weight:700;letter-spacing:-.02em;color:#fff}
p{margin:0;color:var(--mut);font-family:Inter,ui-sans-serif,sans-serif}
button{font-family:inherit;cursor:pointer;border:0}
.wrap{max-width:1160px;margin:0 auto;padding:0 32px}
.rv{opacity:0;transform:translateY(26px)}
.eb{display:inline-flex;align-items:center;gap:8px;font-size:12.5px;color:var(--amber);margin-bottom:16px}
.eb:before{content:"$";color:var(--mut)}

/* ---------- buttons ---------- */
.btn{position:relative;display:inline-flex;align-items:center;gap:9px;border-radius:8px;padding:13px 22px;font-size:14px;font-weight:600;transition:transform .25s,box-shadow .25s,border-color .25s,background .25s}
.btn svg{width:15px;height:15px;flex:none;transition:transform .3s}
.btn:hover svg{transform:translateX(3px)}
.btn-amber{background:var(--amber);color:#1a1206}
.btn-amber:hover{transform:translateY(-2px);box-shadow:0 14px 30px rgba(255,180,84,.3)}
.btn-line{background:transparent;color:var(--ink);border:1px solid var(--line)}
.btn-line:hover{transform:translateY(-2px);border-color:rgba(255,255,255,.28);background:rgba(255,255,255,.04)}

/* ---------- nav ---------- */
.nav{position:sticky;top:0;z-index:60;border-bottom:1px solid transparent;transition:background .4s,border-color .4s}
.nav-in{max-width:1160px;margin:0 auto;padding:20px 32px;display:flex;align-items:center;gap:34px}
.nav.on{background:rgba(10,10,12,.86);backdrop-filter:blur(16px);border-bottom-color:var(--line)}
.brand{display:flex;align-items:center;gap:9px;font-size:17px;font-weight:700;color:#fff}
.brand .car{color:var(--amber)}
.nav-links{display:flex;gap:28px;margin:0 auto;font-size:13.5px;color:var(--mut)}
.nav-links a{position:relative;cursor:pointer}
.nav-links a:after{content:"";position:absolute;left:0;bottom:-5px;width:100%;height:1px;background:var(--amber);transform:scaleX(0);transform-origin:right;transition:transform .3s}
.nav-links a:hover{color:#fff}
.nav-links a:hover:after{transform:scaleX(1);transform-origin:left}
.nav-right{display:flex;align-items:center;gap:16px}
.nav-right .lg{font-size:13.5px;color:var(--mut)}
.nav-right .btn{padding:9px 16px;font-size:13px}

/* ---------- hero ---------- */
.hero{position:relative;padding:90px 0 50px}
.hero-grid{display:grid;grid-template-columns:.95fr 1.05fr;gap:56px;align-items:center}
.hero h1{font-size:clamp(32px,3.6vw,48px);line-height:1.18}
.hero h1 .amb{color:var(--amber)}
.hero p.lead{margin-top:20px;font-size:16px;line-height:1.7;max-width:460px}
.hero .cta{display:flex;gap:12px;margin-top:30px;flex-wrap:wrap}
.install-row{margin-top:26px;display:inline-flex;align-items:center;gap:12px;background:var(--panel);border:1px solid var(--line);border-radius:9px;padding:11px 16px;font-size:13px}
.install-row button{background:none;color:var(--mut);display:flex}
.install-row button:hover{color:var(--amber)}
.install-row svg{width:14px;height:14px}

/* terminal mockup */
.term{position:relative;background:#0d0d10;border:1px solid var(--line);border-radius:14px;box-shadow:0 40px 90px rgba(0,0,0,.55);overflow:hidden}
.term-bar{display:flex;align-items:center;gap:8px;padding:13px 16px;border-bottom:1px solid var(--line);background:var(--panel)}
.term-bar i{width:11px;height:11px;border-radius:50%}
.term-bar i:nth-child(1){background:#ff5f56}
.term-bar i:nth-child(2){background:#ffbd2e}
.term-bar i:nth-child(3){background:#27c93f}
.term-bar span{margin-left:10px;font-size:12px;color:var(--mut)}
.term-body{padding:20px 22px;font-size:13.5px;line-height:1.9;min-height:280px}
.term-line{color:var(--mut)}
.term-line .prompt{color:var(--cyan)}
.term-line .out{color:var(--ink)}
.term-line .key{color:var(--pink)}
.term-line .str{color:var(--amber)}
.cursor-blink{display:inline-block;width:7px;height:15px;background:var(--amber);vertical-align:middle;margin-left:2px;animation:blink 1s step-end infinite}
@keyframes blink{50%{opacity:0}}

/* ---------- logos ---------- */
.logos{padding:44px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.logos .lbl{text-align:center;font-size:12px;color:var(--mut);margin-bottom:24px}
.logo-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:28px;opacity:.5}
.logo-row div{font-weight:700;font-size:17px;color:#fff}

/* ---------- features ---------- */
.feats{padding:120px 0}
.feats-head{max-width:600px;margin:0 auto 56px;text-align:center}
.feats-head h2{font-size:clamp(26px,3.2vw,38px)}
.feat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.fcard{background:var(--panel);border:1px solid var(--line);border-radius:14px;padding:26px;transition:transform .3s,border-color .3s}
.fcard:hover{transform:translateY(-5px);border-color:rgba(255,180,84,.35)}
.fcard .tag{display:inline-block;font-size:11px;color:var(--cyan);border:1px solid rgba(94,230,208,.3);border-radius:5px;padding:2px 7px;margin-bottom:14px}
.fcard h3{font-size:16.5px;margin-bottom:9px;font-family:Inter,sans-serif}
.fcard p{font-size:13.5px;line-height:1.65}
.fcard code{display:block;margin-top:14px;background:var(--bg);border:1px solid var(--line);border-radius:8px;padding:10px 12px;font-size:12px;color:var(--cyan)}

/* ---------- endpoint demo (pinned) ---------- */
.demo-sec{position:relative}
.demo-head{text-align:center;padding:120px 0 0;max-width:600px;margin:0 auto}
.demo-head h2{font-size:clamp(26px,3.2vw,38px)}
.demo-pin{height:100vh;display:flex;align-items:center;justify-content:center}
.demo-panels{width:min(920px,90vw);display:grid;grid-template-columns:1fr 1fr;gap:16px}
.demo-panel{background:#0d0d10;border:1px solid var(--line);border-radius:14px;overflow:hidden}
.demo-panel .bar{padding:11px 16px;border-bottom:1px solid var(--line);font-size:12px;color:var(--mut);display:flex;justify-content:space-between}
.demo-panel .body{padding:16px;font-size:12.5px;line-height:1.8;min-height:220px}
.method{display:inline-block;font-size:10.5px;font-weight:700;padding:2px 7px;border-radius:4px;background:rgba(94,230,208,.15);color:var(--cyan)}
.status-pill{font-size:11px;padding:2px 8px;border-radius:20px;background:rgba(39,201,63,.15);color:#4ade80}
.json-line{opacity:0}
.json-key{color:var(--pink)}
.json-str{color:var(--amber)}
.json-num{color:var(--cyan)}

/* ---------- stats ---------- */
.stats{padding:0 0 120px;text-align:center}
.stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
.stat b{display:block;font-size:clamp(30px,3.6vw,44px);color:#fff}
.stat span{display:block;margin-top:8px;font-size:12.5px;color:var(--mut);font-family:Inter,sans-serif}

/* ---------- testimonials ---------- */
.testi{padding:0 0 130px}
.testi-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.tcard{background:var(--panel);border:1px solid var(--line);border-radius:14px;padding:24px;transition:transform .3s,border-color .3s}
.tcard:hover{transform:translateY(-5px);border-color:rgba(255,180,84,.3)}
.tcard p{font-size:13.5px;line-height:1.7;color:var(--ink)}
.tcard .who{margin-top:16px;font-size:12px;color:var(--mut)}
.tcard .who b{color:#fff}

/* ---------- pricing ---------- */
.pricing{padding:0 0 130px}
.price-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.pcard{background:var(--panel);border:1px solid var(--line);border-radius:16px;padding:30px 26px;transition:transform .3s,border-color .3s}
.pcard:hover{transform:translateY(-6px);border-color:rgba(255,180,84,.3)}
.pcard.feat{background:linear-gradient(160deg,#1a1509,var(--panel) 60%);border-color:rgba(255,180,84,.35)}
.pcard .tier{font-size:12.5px;color:var(--mut);text-transform:uppercase;letter-spacing:.05em}
.pcard .amt{font-size:32px;color:#fff;margin:12px 0;font-weight:700}
.pcard .amt span{font-size:13px;color:var(--mut)}
.pcard p{font-size:13px;line-height:1.6}
.pcard ul{list-style:none;padding:0;margin:20px 0;display:flex;flex-direction:column;gap:10px}
.pcard li{font-size:13px;color:var(--ink);display:flex;gap:8px}
.pcard li:before{content:"›";color:var(--amber)}
.pcard .btn{width:100%;justify-content:center}

/* ---------- final cta ---------- */
.final{padding:0 0 120px}
.final-box{position:relative;background:var(--panel);border:1px solid var(--line);border-radius:20px;padding:80px 40px;text-align:center;overflow:hidden}
.final-box:before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(255,180,84,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,180,84,.04) 1px,transparent 1px);background-size:40px 40px;mask-image:radial-gradient(ellipse 60% 60% at 50% 50%,#000,transparent)}
.final-box h2{position:relative;font-size:clamp(28px,4vw,44px)}
.final-box p{position:relative;margin:16px auto 0;max-width:440px;font-size:14.5px}
.final-box .cta{position:relative;justify-content:center;margin-top:30px;display:flex;gap:12px}

/* ---------- footer ---------- */
footer{border-top:1px solid var(--line);padding:56px 0 28px}
.foot-top{display:flex;justify-content:space-between;gap:40px;flex-wrap:wrap;padding-bottom:36px;border-bottom:1px solid var(--line)}
.foot-brand p{max-width:280px;margin-top:12px;font-size:13px;line-height:1.6;font-family:Inter,sans-serif}
.foot-cols{display:flex;gap:56px}
.foot-col h6{font-size:11.5px;text-transform:uppercase;color:var(--mut);margin-bottom:14px}
.foot-col a{display:block;font-size:13px;color:var(--ink);margin-bottom:9px;text-decoration:none;opacity:.75}
.foot-col a:hover{opacity:1;color:var(--amber)}
.foot-bottom{display:flex;justify-content:space-between;padding-top:24px;font-size:12px;color:var(--mut)}

@media(max-width:900px){
  .hero-grid{grid-template-columns:1fr}
  .feat-grid{grid-template-columns:1fr}
  .demo-panels{grid-template-columns:1fr}
  .stats-grid{grid-template-columns:repeat(2,1fr);gap:26px}
  .testi-grid{grid-template-columns:1fr}
  .price-grid{grid-template-columns:1fr}
  .nav-links{display:none}
}
@media(max-width:600px){
  .foot-top{flex-direction:column;gap:28px}
  .foot-cols{gap:30px;flex-wrap:wrap}
}
@media(prefers-reduced-motion:reduce){
  .rv{opacity:1!important;transform:none!important}
}
</style></head>
<body data-cf-keep-dark>

<nav class="nav" id="nav">
  <div class="nav-in">
    <div class="brand"><span class="car">&gt;_</span>runtime</div>
    <div class="nav-links"><a>Docs</a><a>API</a><a>Pricing</a><a>Changelog</a></div>
    <div class="nav-right"><span class="lg">Sign in</span><button class="btn btn-amber">Get API key <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M7 17 17 7M7 7h10v10"/></svg></button></div>
  </div>
</nav>

<section class="hero">
  <div class="wrap hero-grid">
    <div>
      <span class="eb rv">shipping since 2019</span>
      <h1 class="rv">One API for every <span class="amb">background job</span> you'll ever run.</h1>
      <p class="lead rv">Queues, cron, webhooks and retries — Runtime handles the infrastructure so your endpoint just does the work.</p>
      <div class="cta rv">
        <button class="btn btn-amber">Get API key <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M7 17 17 7M7 7h10v10"/></svg></button>
        <button class="btn btn-line">Read the docs</button>
      </div>
      <div class="install-row rv"><span>npm install runtime-sdk</span><button aria-label="copy"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"/></svg></button></div>
    </div>
    <div class="term rv" id="term">
      <div class="term-bar"><i></i><i></i><i></i><span>zsh — runtime</span></div>
      <div class="term-body" id="termBody"></div>
    </div>
  </div>
</section>

<section class="logos">
  <div class="wrap">
    <div class="lbl">// integrated at</div>
    <div class="logo-row"><div>Basecamp&nbsp;Labs</div><div>Fenwick</div><div>Argus</div><div>Northbeam</div><div>Ledgerline</div></div>
  </div>
</section>

<section class="feats">
  <div class="wrap">
    <div class="feats-head">
      <span class="eb rv" style="justify-content:center">Platform</span>
      <h2 class="rv">Infrastructure you don't have to think about.</h2>
    </div>
    <div class="feat-grid">
      <div class="fcard rv2"><span class="tag">QUEUES</span><h3>Durable job queues</h3><p>At-least-once delivery with automatic backoff, dead-letter queues included.</p><code>runtime.enqueue("send-email", payload)</code></div>
      <div class="fcard rv2"><span class="tag">CRON</span><h3>Scheduled functions</h3><p>Define a cron expression once, Runtime handles timezone drift and missed runs.</p><code>runtime.schedule("0 9 * * 1", job)</code></div>
      <div class="fcard rv2"><span class="tag">WEBHOOKS</span><h3>Verified webhooks</h3><p>Signature verification and replay protection built into every inbound hook.</p><code>runtime.verify(req.headers, secret)</code></div>
    </div>
  </div>
</section>

<section class="demo-sec">
  <div class="demo-head">
    <span class="eb rv" style="justify-content:center">Live request</span>
    <h2 class="rv">Watch a request become a response.</h2>
  </div>
  <div class="demo-pin" id="demoPin">
    <div class="demo-panels">
      <div class="demo-panel">
        <div class="bar"><span><span class="method">POST</span> /v1/jobs</span><span>request</span></div>
        <div class="body" id="reqBody">
          <div class="json-line">{</div>
          <div class="json-line">&nbsp;&nbsp;<span class="json-key">"task"</span>: <span class="json-str">"send-email"</span>,</div>
          <div class="json-line">&nbsp;&nbsp;<span class="json-key">"payload"</span>: {</div>
          <div class="json-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="json-key">"to"</span>: <span class="json-str">"user@acme.dev"</span>,</div>
          <div class="json-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="json-key">"template"</span>: <span class="json-str">"welcome"</span></div>
          <div class="json-line">&nbsp;&nbsp;},</div>
          <div class="json-line">&nbsp;&nbsp;<span class="json-key">"retries"</span>: <span class="json-num">3</span></div>
          <div class="json-line">}</div>
        </div>
      </div>
      <div class="demo-panel">
        <div class="bar"><span class="status-pill">200 OK</span><span id="latencyLbl">— ms</span></div>
        <div class="body" id="resBody">
          <div class="json-line">{</div>
          <div class="json-line">&nbsp;&nbsp;<span class="json-key">"id"</span>: <span class="json-str">"job_8f2k91"</span>,</div>
          <div class="json-line">&nbsp;&nbsp;<span class="json-key">"status"</span>: <span class="json-str">"queued"</span>,</div>
          <div class="json-line">&nbsp;&nbsp;<span class="json-key">"attempt"</span>: <span class="json-num">1</span>,</div>
          <div class="json-line">&nbsp;&nbsp;<span class="json-key">"eta"</span>: <span class="json-str">"2026-09-21T09:00:03Z"</span></div>
          <div class="json-line">}</div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="stats">
  <div class="wrap stats-grid">
    <div class="stat"><b data-count="2400000000" data-suffix="+">0</b><span>Jobs processed monthly</span></div>
    <div class="stat"><b data-count="99" data-suffix=".98%">0</b><span>Queue uptime</span></div>
    <div class="stat"><b data-count="40" data-suffix="ms">0</b><span>P50 enqueue latency</span></div>
    <div class="stat"><b data-count="18000">0</b><span>Developers building</span></div>
  </div>
</section>

<section class="testi">
  <div class="wrap">
    <div class="feats-head" style="margin-bottom:44px">
      <span class="eb rv" style="justify-content:center">Developers</span>
      <h2 class="rv">Ship the endpoint, not the queue.</h2>
    </div>
    <div class="testi-grid">
      <div class="tcard rv2"><p>"We ripped out a hand-rolled Redis queue in an afternoon. Retries alone were worth it."</p><div class="who"><b>Kabir Malhotra</b> — Staff Eng, Argus</div></div>
      <div class="tcard rv2"><p>"The dead-letter queue caught a bug that would've silently dropped payments for a week."</p><div class="who"><b>Yuki Tanaka</b> — CTO, Fenwick</div></div>
      <div class="tcard rv2"><p>"Cron drift used to be a running joke on our team. Hasn't come up since we switched."</p><div class="who"><b>Ola Adeyemi</b> — Platform Lead, Ledgerline</div></div>
    </div>
  </div>
</section>

<section class="pricing">
  <div class="wrap">
    <div class="feats-head">
      <span class="eb rv" style="justify-content:center">Pricing</span>
      <h2 class="rv">Free to build. Pay for scale.</h2>
    </div>
    <div class="price-grid">
      <div class="pcard rv2">
        <div class="tier">Hobby</div>
        <div class="amt">$0<span>/mo</span></div>
        <p>100K jobs/month, community support.</p>
        <ul><li>1 queue</li><li>7-day retention</li><li>Community Discord</li></ul>
        <button class="btn btn-line">Start building</button>
      </div>
      <div class="pcard feat rv2">
        <div class="tier">Team</div>
        <div class="amt">$49<span>/mo</span></div>
        <p>10M jobs/month, priority routing.</p>
        <ul><li>Unlimited queues</li><li>30-day retention</li><li>Priority support</li></ul>
        <button class="btn btn-amber">Start free trial</button>
      </div>
      <div class="pcard rv2">
        <div class="tier">Enterprise</div>
        <div class="amt">Custom</div>
        <p>Dedicated infra, custom SLAs.</p>
        <ul><li>VPC peering</li><li>Custom retention</li><li>Dedicated Slack</li></ul>
        <button class="btn btn-line">Talk to us</button>
      </div>
    </div>
  </div>
</section>

<section class="final">
  <div class="wrap">
    <div class="final-box rv">
      <h2>runtime.enqueue(<span style="color:var(--amber)">"ship_it"</span>)</h2>
      <p>Free API key, no credit card. First 100K jobs are on us.</p>
      <div class="cta"><button class="btn btn-amber">Get API key <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M7 17 17 7M7 7h10v10"/></svg></button><button class="btn btn-line">Read the docs</button></div>
    </div>
  </div>
</section>

<footer>
  <div class="wrap">
    <div class="foot-top">
      <div class="foot-brand">
        <div class="brand"><span class="car">&gt;_</span>runtime</div>
        <p>Background jobs, cron and webhooks — one API, zero infrastructure.</p>
      </div>
      <div class="foot-cols">
        <div class="foot-col"><h6>Product</h6><a>Queues</a><a>Cron</a><a>Webhooks</a></div>
        <div class="foot-col"><h6>Developers</h6><a>Docs</a><a>API reference</a><a>Status</a></div>
        <div class="foot-col"><h6>Company</h6><a>About</a><a>Blog</a><a>Careers</a></div>
      </div>
    </div>
    <div class="foot-bottom"><span>© 2026 Runtime Inc.</span><span>Privacy · Terms</span></div>
  </div>
</footer>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script>
(function(){
  var nav = document.getElementById("nav");
  document.addEventListener("scroll", function(){ nav.classList.toggle("on", window.scrollY > 14); }, { passive: true });

  function fmt(n, suffix){
    var v = Math.round(n);
    var s = v >= 1000000000 ? (v/1000000000).toFixed(1).replace(/\.0$/,"") + "B" :
            v >= 1000000 ? (v/1000000).toFixed(1).replace(/\.0$/,"") + "M" :
            v >= 1000 ? (v/1000).toFixed(1).replace(/\.0$/,"") + "K" : String(v);
    return s + (suffix || "");
  }

  // Terminal type-on effect: a small scripted session, looping.
  var termLines = [
    { p: "$ ", c: "runtime deploy", cls: "prompt" },
    { p: "", c: "→ Building job graph...", cls: "out" },
    { p: "", c: "→ 3 queues, 1 cron, 2 webhooks detected", cls: "out" },
    { p: "", c: "→ Deployed to prod in 1.8s", cls: "out" },
    { p: "$ ", c: "runtime logs --follow", cls: "prompt" },
    { p: "", c: 'job_8f2k91 send-email  status=done  312ms', cls: "out" }
  ];
  var termBody = document.getElementById("termBody");

  function typeTerminal(){
    termBody.innerHTML = "";
    var li = 0;
    function nextLine(){
      if (li >= termLines.length) {
        gsap.delayedCall(1.6, typeTerminal);
        return;
      }
      var row = document.createElement("div");
      row.className = "term-line";
      var promptSpan = document.createElement("span");
      promptSpan.className = "prompt";
      promptSpan.textContent = termLines[li].p;
      row.appendChild(promptSpan);
      var textSpan = document.createElement("span");
      textSpan.className = termLines[li].cls;
      row.appendChild(textSpan);
      var cursor = document.createElement("span");
      cursor.className = "cursor-blink";
      row.appendChild(cursor);
      termBody.appendChild(row);
      var text = termLines[li].c, ci = 0;
      var iv = setInterval(function(){
        textSpan.textContent += text[ci];
        ci++;
        if (ci >= text.length) {
          clearInterval(iv);
          cursor.remove();
          li++;
          setTimeout(nextLine, 260);
        }
      }, 22);
    }
    nextLine();
  }

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!window.gsap || !window.ScrollTrigger || reduced) {
    document.querySelectorAll(".rv,.rv2").forEach(function(el){ el.style.opacity = 1; el.style.transform = "none"; });
    document.querySelectorAll(".stat b[data-count]").forEach(function(el){ el.textContent = fmt(+el.dataset.count, el.dataset.suffix); });
    document.querySelectorAll(".json-line").forEach(function(el){ el.style.opacity = 1; });
    document.getElementById("latencyLbl").textContent = "38ms";
    termBody.innerHTML = '<div class="term-line"><span class="prompt">$ </span><span class="out">runtime deploy — done</span></div>';
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  var tl = gsap.timeline({ defaults: { ease: "power3.out" } });
  tl.to(".hero .rv", { opacity: 1, y: 0, duration: .75, stagger: .08 })
    .fromTo("#term", { opacity: 0, y: 40, scale: .97 }, { opacity: 1, y: 0, scale: 1, duration: .9 }, "-=.5")
    .add(typeTerminal, "-=.2");

  document.querySelectorAll(".rv2").forEach(function(el){
    gsap.from(el, { opacity: 0, y: 26, duration: .7, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%" } });
  });

  gsap.from(".logo-row div", { opacity: 0, y: 10, stagger: .05, duration: .5, scrollTrigger: { trigger: ".logo-row", start: "top 90%" } });

  // Pinned request/response demo: JSON lines type in on the left, then the
  // response reveals with a latency counter, all scrubbed to scroll.
  gsap.set("#reqBody .json-line", { opacity: 0, x: -8 });
  gsap.set("#resBody .json-line", { opacity: 0, x: 8 });
  var demoTl = gsap.timeline({
    scrollTrigger: { trigger: "#demoPin", start: "top top", end: "+=160%", pin: true, scrub: .5 }
  });
  demoTl.to("#reqBody .json-line", { opacity: 1, x: 0, duration: .3, stagger: .15 })
    .to("#latencyLbl", { duration: .1, onStart: function(){ document.getElementById("latencyLbl").textContent = "38ms"; } }, "+=.1")
    .to("#resBody .json-line", { opacity: 1, x: 0, duration: .3, stagger: .15 }, "-=.1");

  ScrollTrigger.create({
    trigger: ".stats", start: "top 80%", once: true,
    onEnter: function(){
      document.querySelectorAll(".stat b[data-count]").forEach(function(el){
        var target = +el.dataset.count, suffix = el.dataset.suffix || "", o = { v: 0 };
        gsap.to(o, { v: target, duration: 1.8, ease: "power2.out", onUpdate: function(){ el.textContent = fmt(o.v, suffix); } });
      });
    }
  });

  window.addEventListener("load", function(){ ScrollTrigger.refresh(); });
})();
</script>
</body></html>
`,

  "sidebar-nav-collapse": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Collapsible Sidebar Nav</title><style>
:root{--bg:#fff;--ink:#14161f;--mut:#6b7080;--sky:#0ea5e9;--line:#e7e9f0;--panel:#f7f8fb}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;background:var(--panel);font-family:Inter,ui-sans-serif,Arial,sans-serif;display:flex}
aside{width:220px;background:var(--bg);border-right:1px solid var(--line);padding:16px 12px;transition:width .3s cubic-bezier(.2,.8,.2,1);display:flex;flex-direction:column}
aside.collapsed{width:68px}
.top{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;padding:0 6px}
.brand{font-weight:800;font-size:15px;color:var(--ink);white-space:nowrap;overflow:hidden}
.toggle{width:28px;height:28px;border-radius:8px;border:1px solid var(--line);background:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer;flex:none}
.toggle svg{width:14px;height:14px;color:var(--mut);transition:transform .3s}
aside.collapsed .toggle svg{transform:rotate(180deg)}
.item{display:flex;align-items:center;gap:12px;padding:10px 10px;border-radius:9px;cursor:pointer;color:var(--mut);font-size:13px;font-weight:600;white-space:nowrap;overflow:hidden}
.item:hover{background:var(--panel);color:var(--ink)}
.item.on{background:#e6f6fe;color:var(--sky)}
.item svg{width:17px;height:17px;flex:none}
.item span{transition:opacity .2s;opacity:1}
aside.collapsed .item span{opacity:0;width:0}
.stage{flex:1;padding:60px;color:var(--mut);font-size:13px}
</style></head>
<body>
<aside id="sidebar">
  <div class="top"><span class="brand" id="brandTxt">CoreKit</span><div class="toggle" id="toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="m15 6-6 6 6 6"/></svg></div></div>
  <div class="item on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/></svg><span>Overview</span></div>
  <div class="item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h4l3 8 4-16 3 8h4"/></svg><span>Analytics</span></div>
  <div class="item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/></svg><span>Calendar</span></div>
  <div class="item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21a8 8 0 1 0-16 0"/><circle cx="12" cy="7" r="4"/></svg><span>Team</span></div>
  <div class="item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg><span>Settings</span></div>
</aside>
<div class="stage">Click the arrow to collapse the sidebar</div>
<script>
var sidebar=document.getElementById("sidebar"), toggle=document.getElementById("toggle");
toggle.addEventListener("click",function(){ sidebar.classList.toggle("collapsed"); });
document.querySelectorAll(".item").forEach(function(it){
  it.addEventListener("click",function(){ document.querySelectorAll(".item").forEach(function(x){x.classList.remove("on")}); it.classList.add("on"); });
});
</script>
</body></html>
`,

  "hover-zoom-gallery": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Hover Zoom Gallery</title><style>
:root{--bg:#0e0e10;--ink:#f2f2f0;--mut:#8a8a86;--lime:#d4ff3f}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;background:var(--bg);font-family:"Space Grotesk",Inter,ui-sans-serif,Arial,sans-serif;padding:40px;display:grid;place-items:center}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;width:min(500px,90vw)}
.cell{position:relative;aspect-ratio:1;border-radius:10px;overflow:hidden;cursor:pointer}
.cell .ph{position:absolute;inset:0;transition:transform .55s cubic-bezier(.2,.8,.2,1),filter .55s}
.cell:hover .ph{transform:scale(1.15);filter:brightness(.7)}
.cell .lbl{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .3s}
.cell:hover .lbl{opacity:1}
.cell .lbl span{color:#fff;font-size:11px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;border:1px solid #fff;padding:6px 12px;border-radius:20px}
</style></head>
<body data-cf-keep-dark>
<div class="grid">
  <div class="cell"><div class="ph" style="background:linear-gradient(155deg,#d4ff3f,#4a5a10)"></div><div class="lbl"><span>Aperture</span></div></div>
  <div class="cell"><div class="ph" style="background:linear-gradient(155deg,#f2f2f0,#4a4a48)"></div><div class="lbl"><span>Northwind</span></div></div>
  <div class="cell"><div class="ph" style="background:linear-gradient(155deg,#8a8a86,#2a2a28)"></div><div class="lbl"><span>Vellum</span></div></div>
  <div class="cell"><div class="ph" style="background:linear-gradient(155deg,#d4ff3f,#7a9e1f)"></div><div class="lbl"><span>Cascade</span></div></div>
  <div class="cell"><div class="ph" style="background:linear-gradient(155deg,#4a4a48,#1a1a18)"></div><div class="lbl"><span>Ampersand</span></div></div>
  <div class="cell"><div class="ph" style="background:linear-gradient(155deg,#f2f2f0,#8a8a86)"></div><div class="lbl"><span>Origin Co</span></div></div>
</div>
</body></html>
`,

  "project-list-hover": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Project List Hover</title><style>
:root{--bg:#0e0e10;--ink:#f2f2f0;--mut:#8a8a86;--lime:#d4ff3f;--line:rgba(255,255,255,.1)}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;background:var(--bg);font-family:"Space Grotesk",Inter,ui-sans-serif,Arial,sans-serif;padding:50px;display:grid;place-items:center}
.list{width:min(420px,92vw)}
.row{display:flex;align-items:center;justify-content:space-between;padding:18px 4px;border-bottom:1px solid var(--line);cursor:pointer;transition:padding-left .3s cubic-bezier(.2,.8,.2,1)}
.row:first-child{border-top:1px solid var(--line)}
.row:hover{padding-left:14px}
.row .l{display:flex;flex-direction:column}
.row b{font-size:16px;color:var(--ink);font-weight:600;transition:color .3s}
.row:hover b{color:var(--lime)}
.row span{font-size:11.5px;color:var(--mut);margin-top:3px}
.row .num{font-size:11px;color:var(--mut);font-family:ui-monospace,monospace}
.row svg{width:16px;height:16px;color:var(--mut);opacity:0;transform:translateX(-6px);transition:opacity .3s,transform .3s}
.row:hover svg{opacity:1;transform:translateX(0);color:var(--lime)}
.r-right{display:flex;align-items:center;gap:10px}
</style></head>
<body data-cf-keep-dark>
<div class="list">
  <div class="row"><div class="l"><b>Aperture</b><span>Brand identity, 2025</span></div><div class="r-right"><span class="num">01</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M7 17 17 7M7 7h10v10"/></svg></div></div>
  <div class="row"><div class="l"><b>Northwind</b><span>Web design, 2025</span></div><div class="r-right"><span class="num">02</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M7 17 17 7M7 7h10v10"/></svg></div></div>
  <div class="row"><div class="l"><b>Vellum</b><span>Packaging, 2024</span></div><div class="r-right"><span class="num">03</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M7 17 17 7M7 7h10v10"/></svg></div></div>
  <div class="row"><div class="l"><b>Cascade</b><span>Art direction, 2024</span></div><div class="r-right"><span class="num">04</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M7 17 17 7M7 7h10v10"/></svg></div></div>
</div>
</body></html>
`,

  "single-plan-card": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Single Plan Card</title><style>
:root{--bg:#0a1512;--panel:#101d19;--line:rgba(255,255,255,.08);--ink:#eef4f1;--mut:#7c8c87;--em:#10b981;--gold:#f2c14e}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.card{width:300px;background:linear-gradient(165deg,#132720,var(--panel));border:1px solid var(--em);border-radius:20px;padding:30px;box-shadow:0 0 0 1px rgba(16,185,129,.2),0 40px 80px -30px rgba(16,185,129,.35);position:relative;overflow:hidden}
.card:before{content:"";position:absolute;top:-60px;right:-60px;width:180px;height:180px;border-radius:50%;background:radial-gradient(circle,rgba(16,185,129,.25),transparent 70%)}
.badge{position:relative;display:inline-block;font-size:10.5px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:var(--gold);background:rgba(242,193,78,.12);padding:5px 11px;border-radius:20px;margin-bottom:16px}
.tier{position:relative;font-size:16px;color:#fff;font-weight:700}
.price{position:relative;font-size:42px;font-weight:800;color:#fff;margin:8px 0 4px}
.price span{font-size:14px;color:var(--mut);font-weight:500}
.desc{position:relative;font-size:12.5px;color:var(--mut);margin-bottom:20px}
ul{position:relative;list-style:none;padding:0;margin:0 0 24px;display:flex;flex-direction:column;gap:10px}
li{font-size:13px;color:var(--ink);display:flex;gap:9px;align-items:center}
li svg{width:15px;height:15px;color:var(--em);flex:none}
button{position:relative;width:100%;padding:13px;border-radius:11px;border:0;background:var(--em);color:#04221a;font-size:13.5px;font-weight:700;cursor:pointer;transition:transform .2s,box-shadow .2s}
button:hover{transform:translateY(-2px);box-shadow:0 14px 30px -10px rgba(16,185,129,.5)}
</style></head>
<body data-cf-keep-dark>
<div class="card">
  <span class="badge">Most flexible</span>
  <div class="tier">Growth Plan</div>
  <div class="price">$49<span>/month</span></div>
  <div class="desc">Everything a growing team needs, billed simply.</div>
  <ul>
    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M20 6 9 17l-5-5"/></svg>Unlimited team members</li>
    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M20 6 9 17l-5-5"/></svg>Advanced permissions</li>
    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M20 6 9 17l-5-5"/></svg>API access &amp; webhooks</li>
    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M20 6 9 17l-5-5"/></svg>Priority support</li>
  </ul>
  <button>Start 14-day trial</button>
</div>
</body></html>
`,

  "avatar-stack-proof": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Avatar Stack Proof</title><style>
:root{--bg:#fdf6f3;--ink:#2b211d;--mut:#8a7a72;--rose:#c9576b}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.wrap{text-align:center}
.stack{display:flex;justify-content:center;margin-bottom:16px}
.av{width:44px;height:44px;border-radius:50%;border:3px solid var(--bg);margin-left:-12px;opacity:0;transform:scale(.6) translateY(8px);box-shadow:0 4px 10px rgba(43,33,29,.12)}
.av:first-child{margin-left:0}
.av.more{background:var(--ink);color:#fff;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700}
.stars{color:#e8ab3d;font-size:15px;letter-spacing:2px;margin-bottom:8px}
p{margin:0;font-size:14px;color:var(--ink);font-weight:600}
span{font-size:12px;color:var(--mut)}
</style></head>
<body>
<div class="wrap">
  <div class="stack" id="stack">
    <div class="av" style="background:#c9576b"></div>
    <div class="av" style="background:#e8ab3d"></div>
    <div class="av" style="background:#7a9b76"></div>
    <div class="av" style="background:#6b7fc9"></div>
    <div class="av more" data-cf-keep-dark>+2K</div>
  </div>
  <div class="stars">★★★★★</div>
  <p>Loved by 2,400+ teams</p>
  <span>Rated 4.9 out of 5 on average</span>
</div>
<script>
document.querySelectorAll(".av").forEach(function(av,i){
  setTimeout(function(){ av.style.transition="opacity .4s,transform .4s cubic-bezier(.34,1.56,.64,1)"; av.style.opacity=1; av.style.transform="scale(1) translateY(0)"; }, 100+i*90);
});
</script>
</body></html>
`,

  "atlas-agency": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Atlas Agency</title><style>
:root{--paper:#f4f1ea;--ink:#14120f;--dim:#6b6558;--rule:#ddd6c8;--accent:#b4451f}
*{box-sizing:border-box}body{margin:0;background:var(--paper);color:var(--ink);font-family:Georgia,"Times New Roman",serif}
.wrap{max-width:1080px;margin:0 auto;padding:0 30px}
header{display:flex;justify-content:space-between;align-items:baseline;padding:22px 0;border-bottom:1px solid var(--rule)}
header b{font-size:17px;letter-spacing:.16em;text-transform:uppercase}
header nav{display:flex;gap:24px;font-family:Inter,sans-serif;font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--dim)}
header nav a{text-decoration:none;color:inherit;position:relative}
header nav a:after{content:"";position:absolute;left:0;right:0;bottom:-4px;height:1px;background:var(--ink);transform:scaleX(0);transition:.35s}
header nav a:hover:after{transform:scaleX(1)}
.hero{padding:70px 0 50px;border-bottom:1px solid var(--rule)}
.hero p.k{font-family:Inter,sans-serif;font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:var(--accent);margin:0 0 18px}
.hero h1{margin:0;font-size:clamp(40px,7.5vw,86px);line-height:.94;letter-spacing:-.035em;font-weight:400}
.hero h1 em{font-style:italic;color:var(--accent)}
.hero .meta{display:grid;grid-template-columns:1.4fr 1fr;gap:40px;margin-top:34px;align-items:end}
.hero .meta p{margin:0;font-size:15px;line-height:1.7;color:var(--dim);max-width:44ch}
.hero .meta div{font-family:Inter,sans-serif;font-size:11px;letter-spacing:.08em;color:var(--dim);text-align:right}
.work{padding:50px 0}
.work h2{font-family:Inter,sans-serif;font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:var(--dim);margin:0 0 24px;font-weight:600}
.grid{display:grid;grid-template-columns:repeat(6,1fr);gap:18px}
.piece{position:relative;overflow:hidden;cursor:pointer}
.piece .img{aspect-ratio:4/3;transition:transform .7s cubic-bezier(.2,.8,.2,1);filter:saturate(.85)}
.piece:hover .img{transform:scale(1.05)}
.piece h3{margin:12px 0 2px;font-size:20px;letter-spacing:-.02em;font-weight:400}
.piece small{font-family:Inter,sans-serif;font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--dim)}
.a{grid-column:span 4}.b{grid-column:span 2}.c{grid-column:span 2}.d{grid-column:span 4}
.i1{background:linear-gradient(140deg,#2c2a26,#6b6558)}
.i2{background:linear-gradient(140deg,#b4451f,#e0a06f)}
.i3{background:linear-gradient(140deg,#3d4a3a,#8fa08a)}
.i4{background:linear-gradient(140deg,#1f2b3d,#7d94b0)}
.services{display:grid;grid-template-columns:repeat(3,1fr);gap:30px;padding:40px 0;border-top:1px solid var(--rule)}
.services h4{margin:0 0 8px;font-size:19px;font-weight:400;letter-spacing:-.01em}
.services p{margin:0;font-size:13px;line-height:1.75;color:var(--dim)}
.quote{padding:56px 0;border-top:1px solid var(--rule);text-align:center}
.quote blockquote{margin:0 auto;max-width:24ch;font-size:clamp(24px,4vw,40px);line-height:1.2;letter-spacing:-.03em;font-style:italic}
.quote cite{display:block;margin-top:18px;font-family:Inter,sans-serif;font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--dim);font-style:normal}
footer{border-top:1px solid var(--rule);padding:26px 0 40px;display:flex;justify-content:space-between;font-family:Inter,sans-serif;font-size:11px;color:var(--dim)}
@media(max-width:760px){.grid{grid-template-columns:1fr}.a,.b,.c,.d{grid-column:span 1}.hero .meta{grid-template-columns:1fr}.hero .meta div{text-align:left}.services{grid-template-columns:1fr}}
</style></head>
<body><div class="wrap">
<header><b>Atlas</b><nav><a>Work</a><a>Studio</a><a>Journal</a><a>Contact</a></nav></header>
<section class="hero"><p class="k">Independent design studio — est. 2014</p><h1>We build brands<br>that <em>hold their nerve.</em></h1><div class="meta"><p>Atlas is a small studio working with founders and cultural institutions on identity, digital products and the words in between.</p><div>Selected clients<br>Northstar · Kew · Vantage<br>Halo · Orbit Press</div></div></section>
<section class="work"><h2>Selected work</h2><div class="grid">
<article class="piece a"><div class="img i1"></div><h3>Northstar Identity</h3><small>Brand · 2026</small></article>
<article class="piece b"><div class="img i2"></div><h3>Kew Editorial</h3><small>Web · 2025</small></article>
<article class="piece c"><div class="img i3"></div><h3>Vantage</h3><small>Product · 2025</small></article>
<article class="piece d"><div class="img i4"></div><h3>Orbit Press</h3><small>Identity · 2024</small></article>
</div></section>
<section class="services"><div><h4>Identity</h4><p>Naming, marks, type systems and the guidelines that keep them intact.</p></div><div><h4>Digital</h4><p>Sites and products designed and built end to end, in-house.</p></div><div><h4>Editorial</h4><p>Art direction and print work for books, reports and exhibitions.</p></div></section>
<section class="quote"><blockquote>"They made us sound like ourselves."</blockquote><cite>— Rae Lindqvist, Northstar</cite></section>
<footer><span>Atlas Studio — London</span><span>hello@atlas.studio</span></footer>
</div></body></html>`,

  "commercex": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>CommerceX</title><style>
:root{--bg:#fff;--ink:#111827;--dim:#6b7280;--line:#e5e7eb;--soft:#f9fafb;--brand:#111827;--sale:#dc2626}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);font-family:Inter,ui-sans-serif,system-ui,sans-serif}
.bar{background:var(--brand);color:#fff;text-align:center;padding:8px;font-size:11px;letter-spacing:.03em}
header{position:sticky;top:0;z-index:20;background:rgba(255,255,255,.92);backdrop-filter:blur(10px);border-bottom:1px solid var(--line)}
.hin{max-width:1180px;margin:0 auto;padding:14px 24px;display:flex;align-items:center;gap:26px}
.logo{font-weight:800;letter-spacing:-.04em;font-size:19px}
header nav{display:flex;gap:20px;font-size:13px;color:var(--dim)}
header nav a{text-decoration:none;color:inherit;padding:4px 0;border-bottom:2px solid transparent;transition:.2s;cursor:pointer}
header nav a:hover{color:var(--ink);border-color:var(--ink)}
.acts{margin-left:auto;display:flex;align-items:center;gap:14px;font-size:13px}
.cartbtn{position:relative;border:1px solid var(--line);background:#fff;border-radius:9px;padding:8px 12px;cursor:pointer;font-size:13px}
.cartbtn b{display:inline-grid;place-items:center;min-width:17px;height:17px;margin-left:6px;border-radius:9px;background:var(--ink);color:#fff;font-size:10px}
.layout{max-width:1180px;margin:0 auto;padding:26px 24px 60px;display:grid;grid-template-columns:210px 1fr;gap:30px}
.filters h4{margin:0 0 10px;font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--dim)}
.filters label{display:flex;align-items:center;gap:9px;padding:6px 0;font-size:13px;color:#374151;cursor:pointer}
.filters+div{min-width:0}
.head{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:18px}
.head h1{margin:0;font-size:26px;letter-spacing:-.03em}
.head span{font-size:13px;color:var(--dim)}
.pg{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.p{border:1px solid var(--line);border-radius:14px;overflow:hidden;background:#fff;transition:box-shadow .3s,transform .3s;cursor:pointer}
.p:hover{transform:translateY(-4px);box-shadow:0 16px 40px rgba(17,24,39,.1)}
.p .th{aspect-ratio:1;position:relative;display:grid;place-items:center;font-size:34px}
.p .th span{position:absolute;top:10px;left:10px;background:var(--sale);color:#fff;font-size:10px;font-weight:700;padding:3px 7px;border-radius:5px}
.p .th button{position:absolute;top:8px;right:8px;width:30px;height:30px;border-radius:50%;border:1px solid var(--line);background:#fff;cursor:pointer;font-size:13px;transition:.2s}
.p .th button.on{background:#fee2e2;border-color:#fecaca}
.t1{background:#eef2ff}.t2{background:#f0fdf4}.t3{background:#fef3c7}.t4{background:#fae8ff}.t5{background:#ecfeff}.t6{background:#fff1f2}
.p .b{padding:13px}
.p .b small{color:var(--dim);font-size:11px}
.p .b h3{margin:3px 0 7px;font-size:14px;font-weight:600;letter-spacing:-.01em}
.p .b strong{font-size:15px}
.p .b del{color:var(--dim);font-weight:400;margin-left:6px;font-size:12px}
.p .b .add{width:100%;margin-top:11px;border:0;border-radius:9px;background:var(--ink);color:#fff;padding:9px;font-size:12px;font-weight:600;cursor:pointer;opacity:0;transform:translateY(4px);transition:.25s}
.p:hover .add{opacity:1;transform:none}
@media(max-width:980px){.layout{grid-template-columns:1fr}.filters{display:none}.pg{grid-template-columns:repeat(2,1fr)}}
@media(max-width:560px){.pg{grid-template-columns:1fr}header nav{display:none}}
</style></head>
<body>
<div class="bar">Free shipping over $75 — ends Sunday</div>
<header><div class="hin"><div class="logo">CommerceX</div><nav><a>New</a><a>Women</a><a>Men</a><a>Objects</a><a>Sale</a></nav><div class="acts"><span>Search</span><span>Account</span><button class="cartbtn" id="cart">Cart <b id="count">0</b></button></div></div></header>
<div class="layout">
<div class="filters"><h4>Category</h4><label><input type="checkbox" checked> Apparel</label><label><input type="checkbox"> Footwear</label><label><input type="checkbox"> Objects</label><h4 style="margin-top:20px">Price</h4><label><input type="checkbox"> Under $50</label><label><input type="checkbox" checked> $50 – $150</label><label><input type="checkbox"> $150+</label><h4 style="margin-top:20px">Size</h4><label><input type="checkbox"> S</label><label><input type="checkbox" checked> M</label><label><input type="checkbox"> L</label></div>
<div><div class="head"><h1>New arrivals</h1><span>24 products</span></div><div class="pg" id="pg"></div></div>
</div>
<script>
const items=[["Merino Crew","Knitwear",128,160,"t1","🧥",1],["Canvas Tote","Objects",64,0,"t2","👜",0],["Runner Low","Footwear",145,0,"t3","👟",0],["Linen Shirt","Apparel",98,120,"t4","👔",1],["Wool Scarf","Accessories",52,0,"t5","🧣",0],["Field Jacket","Outerwear",240,0,"t6","🧥",0]];
let count=0;
document.getElementById("pg").innerHTML=items.map(([n,c,p,was,t,e,sale])=>
'<article class="p"><div class="th '+t+'">'+(sale?'<span>SALE</span>':'')+'<button class="fav">♡</button>'+e+'</div><div class="b"><small>'+c+'</small><h3>'+n+'</h3><strong>$'+p+'</strong>'+(was?'<del>$'+was+'</del>':'')+'<button class="add">Add to cart</button></div></article>').join("");
document.querySelectorAll(".add").forEach(b=>b.addEventListener("click",e=>{e.stopPropagation();count++;document.getElementById("count").textContent=count;b.textContent="Added ✓";setTimeout(()=>b.textContent="Add to cart",1200)}));
document.querySelectorAll(".fav").forEach(b=>b.addEventListener("click",e=>{e.stopPropagation();b.classList.toggle("on");b.textContent=b.classList.contains("on")?"♥":"♡"}));
</script>
</body></html>`,

  "finora": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Finora</title><style>
:root{--bg:#f6f7fb;--card:#fff;--ink:#0f1b33;--dim:#66718c;--line:#e6e9f2;--navy:#12306b;--mint:#06b47f;--red:#e5484d}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);font-family:"Segoe UI",Inter,system-ui,sans-serif}
.app{display:grid;grid-template-columns:216px 1fr;min-height:100vh}
aside{background:var(--navy);color:#dbe4f5;padding:22px 16px}
aside .lg{display:flex;align-items:center;gap:9px;font-weight:700;font-size:16px;color:#fff;margin-bottom:26px}
aside .lg i{width:26px;height:26px;border-radius:7px;background:var(--mint);display:grid;place-items:center;font-style:normal;color:#04231a;font-size:13px}
aside a{display:block;padding:10px 12px;border-radius:8px;font-size:13px;color:#a9bada;text-decoration:none;transition:.2s}
aside a.on,aside a:hover{background:rgba(255,255,255,.09);color:#fff}
aside .promo{margin-top:26px;padding:14px;border-radius:12px;background:rgba(255,255,255,.07);font-size:11px;line-height:1.6;color:#c2cfe8}
main{padding:22px 26px}
.hd{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px}
.hd h1{margin:0;font-size:21px}
.hd .me{display:flex;align-items:center;gap:10px;font-size:13px}
.hd .me i{width:32px;height:32px;border-radius:50%;background:var(--navy);color:#fff;display:grid;place-items:center;font-style:normal;font-size:12px}
.bal{display:grid;grid-template-columns:1.25fr 1fr;gap:14px;margin:20px 0}
.acct{padding:20px;border-radius:16px;background:linear-gradient(125deg,var(--navy),#2a5bb8);color:#fff;position:relative;overflow:hidden}
.acct:after{content:"";position:absolute;right:-40px;top:-40px;width:180px;height:180px;border-radius:50%;background:rgba(255,255,255,.08)}
.acct small{opacity:.75;font-size:11px;letter-spacing:.06em}
.acct b{display:block;font-size:33px;letter-spacing:-.03em;margin:7px 0 14px}
.acct .no{font-family:ui-monospace,monospace;font-size:13px;letter-spacing:.16em;opacity:.9}
.acct .btns{display:flex;gap:8px;margin-top:16px}
.acct .btns button{flex:1;border:0;border-radius:9px;padding:9px;font-size:12px;font-weight:600;cursor:pointer;background:rgba(255,255,255,.16);color:#fff;transition:.2s}
.acct .btns button:hover{background:rgba(255,255,255,.26)}
.spend{padding:18px;border-radius:16px;background:var(--card);border:1px solid var(--line)}
.spend h3{margin:0 0 4px;font-size:13px}
.spend p{margin:0 0 14px;font-size:11px;color:var(--dim)}
.ring{display:flex;align-items:center;gap:16px}
.ring .c{width:96px;height:96px;border-radius:50%;background:conic-gradient(var(--navy) 0 46%,#5b8def 46% 72%,var(--mint) 72% 88%,#e6e9f2 88% 100%)}
.leg div{display:flex;align-items:center;gap:8px;font-size:12px;padding:3px 0;color:var(--dim)}
.leg i{width:9px;height:9px;border-radius:3px;display:inline-block}
.tx{background:var(--card);border:1px solid var(--line);border-radius:16px;overflow:hidden}
.tx h3{margin:0;padding:15px 18px;font-size:13px;border-bottom:1px solid var(--line)}
.t{display:grid;grid-template-columns:34px 1fr auto auto;gap:12px;align-items:center;padding:12px 18px;border-bottom:1px solid var(--line);font-size:13px}
.t:last-child{border:0}
.t i{width:34px;height:34px;border-radius:10px;display:grid;place-items:center;font-style:normal;font-size:14px;background:#eef2fa}
.t small{display:block;color:var(--dim);font-size:11px}
.t .amt{font-weight:600}
.t .up{color:var(--mint)}.t .dn{color:var(--red)}
.t .st{font-size:10px;padding:3px 8px;border-radius:20px;background:#eefaf5;color:var(--mint)}
@media(max-width:900px){.app{grid-template-columns:1fr}aside{display:none}.bal{grid-template-columns:1fr}}
</style></head>
<body><div class="app">
<aside><div class="lg"><i>F</i>Finora</div><a class="on">Overview</a><a>Accounts</a><a>Transfers</a><a>Cards</a><a>Investments</a><a>Statements</a><div class="promo"><b>Upgrade to Finora+</b><br>Zero-fee international transfers and 2.4% savings APY.</div></aside>
<main>
<div class="hd"><div><h1>Overview</h1></div><div class="me"><span>Sarah Chen</span><i>SC</i></div></div>
<div class="bal">
<div class="acct"><small>TOTAL BALANCE · CHECKING</small><b>$24,819.40</b><div class="no">•••• •••• •••• 4821</div><div class="btns"><button>Send</button><button>Request</button><button>Top up</button></div></div>
<div class="spend"><h3>Spending this month</h3><p>$3,412 of $5,000 budget</p><div class="ring"><div class="c"></div><div class="leg"><div><i style="background:#12306b"></i>Housing · $1,570</div><div><i style="background:#5b8def"></i>Food · $887</div><div><i style="background:#06b47f"></i>Transport · $546</div><div><i style="background:#e6e9f2"></i>Other · $409</div></div></div></div>
</div>
<div class="tx"><h3>Recent transactions</h3>
<div class="t"><i>🏠</i><div>Riverside Property<small>Rent · Mar 01</small></div><span class="amt dn">−$1,570.00</span><span class="st">Cleared</span></div>
<div class="t"><i>💼</i><div>Northstar Payroll<small>Salary · Feb 28</small></div><span class="amt up">+$6,240.00</span><span class="st">Cleared</span></div>
<div class="t"><i>☕</i><div>Kew Coffee<small>Food · Feb 27</small></div><span class="amt dn">−$18.40</span><span class="st">Cleared</span></div>
<div class="t"><i>🚆</i><div>Transit Authority<small>Transport · Feb 26</small></div><span class="amt dn">−$96.00</span><span class="st">Cleared</span></div>
</div>
</main></div>
<script>document.querySelectorAll(".acct .btns button").forEach(b=>b.addEventListener("click",()=>{const t=b.textContent;b.textContent="✓ "+t;setTimeout(()=>b.textContent=t,1100)}));</script>
</body></html>`,

  "medora": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Medora</title><style>
:root{--bg:#f2faf8;--card:#fff;--ink:#0d2b26;--dim:#5a7c76;--line:#dbeeea;--teal:#0f9b8e;--teal-d:#0a6f66;--sun:#ffb347}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);font-family:Inter,ui-sans-serif,system-ui,sans-serif}
header{background:var(--card);border-bottom:1px solid var(--line)}
.hi{max-width:1120px;margin:0 auto;padding:15px 24px;display:flex;align-items:center;gap:28px}
.lg{display:flex;align-items:center;gap:9px;font-weight:800;font-size:18px;letter-spacing:-.02em;color:var(--teal-d)}
.lg i{width:28px;height:28px;border-radius:9px;background:var(--teal);color:#fff;display:grid;place-items:center;font-style:normal;font-size:15px}
header nav{display:flex;gap:22px;font-size:13px;color:var(--dim)}
header nav a{text-decoration:none;color:inherit;cursor:pointer}
header nav a:hover{color:var(--teal-d)}
.book{margin-left:auto;border:0;border-radius:24px;background:var(--teal);color:#fff;padding:10px 18px;font-size:13px;font-weight:600;cursor:pointer;transition:.25s}
.book:hover{background:var(--teal-d);transform:translateY(-1px)}
.hero{max-width:1120px;margin:0 auto;padding:44px 24px;display:grid;grid-template-columns:1.1fr .9fr;gap:36px;align-items:center}
.hero h1{margin:0 0 14px;font-size:clamp(30px,4.6vw,46px);line-height:1.1;letter-spacing:-.035em}
.hero h1 span{color:var(--teal)}
.hero>div>p{margin:0 0 22px;color:var(--dim);font-size:15px;line-height:1.7;max-width:46ch}
.stats{display:flex;gap:28px}
.stats b{display:block;font-size:24px;letter-spacing:-.02em;color:var(--teal-d)}
.stats small{color:var(--dim);font-size:11px}
.bookcard{background:var(--card);border:1px solid var(--line);border-radius:22px;padding:22px;box-shadow:0 18px 44px rgba(15,155,142,.1)}
.bookcard h3{margin:0 0 4px;font-size:16px}
.bookcard p{margin:0 0 16px;font-size:12px;color:var(--dim)}
.bookcard label{display:block;font-size:11px;color:var(--dim);margin-bottom:5px}
.bookcard select,.bookcard input{width:100%;padding:11px;border:1px solid var(--line);border-radius:11px;background:#fbfffe;font-size:13px;margin-bottom:12px;color:var(--ink)}
.slots{display:grid;grid-template-columns:repeat(4,1fr);gap:7px;margin-bottom:14px}
.slots button{padding:8px 0;border:1px solid var(--line);border-radius:9px;background:#fff;font-size:11px;cursor:pointer;transition:.2s}
.slots button.on{background:var(--teal);color:#fff;border-color:var(--teal)}
.bookcard .go{width:100%;border:0;border-radius:12px;background:var(--teal-d);color:#fff;padding:12px;font-size:13px;font-weight:600;cursor:pointer}
.docs{max-width:1120px;margin:0 auto;padding:10px 24px 56px}
.docs h2{font-size:20px;letter-spacing:-.02em;margin:0 0 4px}
.docs>p{margin:0 0 20px;color:var(--dim);font-size:13px}
.dg{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
.d{background:var(--card);border:1px solid var(--line);border-radius:18px;padding:18px;text-align:center;transition:.3s}
.d:hover{transform:translateY(-5px);box-shadow:0 16px 36px rgba(13,43,38,.08)}
.d .av{width:58px;height:58px;border-radius:50%;margin:0 auto 11px;display:grid;place-items:center;font-size:24px;background:#e3f5f2}
.d h4{margin:0 0 2px;font-size:14px}
.d small{color:var(--dim);font-size:11px}
.d .rate{margin-top:9px;font-size:11px;color:var(--sun)}
.d button{margin-top:11px;width:100%;border:1px solid var(--teal);border-radius:10px;background:transparent;color:var(--teal-d);padding:8px;font-size:12px;font-weight:600;cursor:pointer;transition:.2s}
.d button:hover{background:var(--teal);color:#fff}
@media(max-width:900px){.hero{grid-template-columns:1fr}.dg{grid-template-columns:repeat(2,1fr)}}
@media(max-width:560px){.dg{grid-template-columns:1fr}header nav{display:none}}
</style></head>
<body>
<header><div class="hi"><div class="lg"><i>+</i>Medora</div><nav><a>Find care</a><a>Specialties</a><a>Doctors</a><a>Pharmacy</a></nav><button class="book">Book appointment</button></div></header>
<section class="hero"><div><h1>Care that fits<br><span>around your life.</span></h1><p>Book same-day appointments with verified specialists, manage prescriptions, and keep your records in one calm place.</p><div class="stats"><div><b>420+</b><small>Verified doctors</small></div><div><b>38</b><small>Specialties</small></div><div><b>4.9</b><small>Patient rating</small></div></div></div>
<div class="bookcard"><h3>Book an appointment</h3><p>Usually confirmed within 10 minutes.</p><label>Specialty</label><select><option>General medicine</option><option>Cardiology</option><option>Dermatology</option><option>Pediatrics</option></select><label>Preferred date</label><input type="date" value="2026-03-14"><label>Available times</label><div class="slots" id="slots"><button class="on">09:00</button><button>10:30</button><button>13:15</button><button>16:45</button></div><button class="go" id="go">Confirm booking</button></div></section>
<section class="docs"><h2>Top-rated specialists</h2><p>Available this week near you.</p><div class="dg">
<div class="d"><div class="av">👩‍⚕️</div><h4>Dr. Anita Rao</h4><small>Cardiology</small><div class="rate">★ 4.9 · 218 reviews</div><button>View profile</button></div>
<div class="d"><div class="av">👨‍⚕️</div><h4>Dr. Tom Keller</h4><small>Dermatology</small><div class="rate">★ 4.8 · 164 reviews</div><button>View profile</button></div>
<div class="d"><div class="av">👩‍⚕️</div><h4>Dr. Sofia Marín</h4><small>Pediatrics</small><div class="rate">★ 5.0 · 301 reviews</div><button>View profile</button></div>
<div class="d"><div class="av">👨‍⚕️</div><h4>Dr. Ravi Menon</h4><small>General medicine</small><div class="rate">★ 4.9 · 187 reviews</div><button>View profile</button></div>
</div></section>
<script>
const slots=document.querySelectorAll("#slots button");
slots.forEach(s=>s.addEventListener("click",()=>{slots.forEach(x=>x.classList.remove("on"));s.classList.add("on")}));
document.getElementById("go").addEventListener("click",e=>{e.target.textContent="Booked ✓ — confirmation sent";e.target.style.background="#0a6f66"});
</script>
</body></html>`,

  "morph-loading-button": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Morphing Loading Button</title><style>
:root{--bg:#0a0a10;--line:#24242e;--blue:#4f5bff;--green:#2fd47a}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.kicker{color:#7a7d96;font-size:10px;letter-spacing:2px;font-weight:700;text-align:center;margin-bottom:22px}
.btn{position:relative;width:150px;height:48px;border:0;border-radius:999px;font-size:13px;font-weight:700;color:#fff;cursor:pointer;background:var(--blue);transition:width .3s cubic-bezier(.2,.8,.2,1),background .3s;display:flex;align-items:center;justify-content:center}
.btn.loading{width:48px;background:#1c1c28}
.btn.done{width:48px;background:var(--green)}
.txt{transition:opacity .15s}
.btn.loading .txt,.btn.done .txt{opacity:0;position:absolute}
.spinner{width:18px;height:18px;border-radius:50%;border:2px solid rgba(255,255,255,.25);border-top-color:#fff;display:none;animation:spin .7s linear infinite}
.btn.loading .spinner{display:block}
@keyframes spin{to{transform:rotate(360deg)}}
.check{width:18px;height:18px;display:none}
.btn.done .check{display:block}
</style></head>
<body data-cf-keep-dark>
<div><div class="kicker">CLICK TO SUBMIT</div><button class="btn" id="btn"><span class="txt">Submit form</span><span class="spinner"></span><svg class="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg></button></div>
<script>
var btn=document.getElementById("btn");
btn.addEventListener("click",function(){
  if(btn.classList.contains("loading")||btn.classList.contains("done"))return;
  btn.classList.add("loading");
  setTimeout(function(){
    btn.classList.remove("loading"); btn.classList.add("done");
    setTimeout(function(){ btn.classList.remove("done"); },1800);
  },1400);
});
</script>
</body></html>
`,

  "command-trigger-button": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Command Trigger Button</title><style>
:root{--bg:#0a0a10;--line:#24242e;--blue:#4f5bff}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.kicker{color:#7a7d96;font-size:10px;letter-spacing:2px;font-weight:700;text-align:center;margin-bottom:22px}
.btn{position:relative;display:flex;align-items:center;gap:12px;padding:13px 16px;border:1px solid var(--line);border-radius:11px;font-size:13px;color:#9a9db0;cursor:pointer;background:#101018;transition:border-color .25s,color .25s}
.btn:hover{border-color:var(--blue);color:#fff}
.btn svg{width:15px;height:15px;flex:none}
.kbd{margin-left:auto;display:flex;gap:4px}
.kbd span{background:#1c1c28;border:1px solid var(--line);border-radius:5px;padding:2px 7px;font-size:10.5px;font-family:ui-monospace,monospace;color:#9a9db0;transition:border-color .25s,color .25s}
.btn:hover .kbd span{border-color:var(--blue);color:#fff}
.pulse{position:absolute;inset:0;border-radius:11px;border:1px solid var(--blue);opacity:0;pointer-events:none}
.btn:active .pulse{animation:pulse .5s ease-out}
@keyframes pulse{from{transform:scale(1);opacity:.8}to{transform:scale(1.06);opacity:0}}
.wrap{position:relative}
</style></head>
<body data-cf-keep-dark>
<div><div class="kicker">CLICK TO SEE THE PULSE</div>
<div class="wrap"><button class="btn" style="width:220px"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>Search commands<span class="kbd"><span>⌘</span><span>K</span></span><span class="pulse"></span></button></div>
</div>
</body></html>
`,

  "progress-ring-loader": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Progress Ring Loader</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.stage{display:grid;gap:18px;place-items:center;padding:40px}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.ring-wrap{position:relative;width:120px;height:120px;display:grid;place-items:center}
svg{transform:rotate(-90deg)}
circle{fill:none;stroke-width:8}
.track{stroke:#1c1a24}
.bar{stroke:url(#g);stroke-linecap:round;transition:stroke-dashoffset .3s linear}
.pct{position:absolute;font-size:20px;font-weight:800;color:#f7f5fb}
.bar{filter:drop-shadow(0 0 6px rgba(196,181,253,.6))}
</style></head>
<body data-cf-keep-dark><div class="stage"><span class="kicker">LOADING…</span>
<div class="ring-wrap">
<svg width="120" height="120"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#d7d0ff"/><stop offset="100%" stop-color="#9b8aff"/></linearGradient></defs>
<circle class="track" cx="60" cy="60" r="52"/><circle class="bar" id="bar" cx="60" cy="60" r="52" stroke-dasharray="327" stroke-dashoffset="327"/></svg>
<span class="pct" id="pct">0%</span></div></div>
<script>
const bar=document.getElementById("bar"),pct=document.getElementById("pct"),C=327;let v=0;
const t=setInterval(function(){v=Math.min(100,v+Math.random()*9);bar.style.strokeDashoffset=C-(C*v/100);pct.textContent=Math.round(v)+"%";if(v>=100)clearInterval(t)},220);
</script>
</body></html>`,

  "spotlight-cursor-grid": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Spotlight Cursor Grid</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;display:grid;place-items:center}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700;display:block;text-align:center;margin-bottom:16px}
.grid{position:relative;display:grid;grid-template-columns:repeat(3,1fr);gap:12px;padding:30px;max-width:480px}
.grid::before{content:"";position:absolute;inset:0;border-radius:18px;pointer-events:none;background:radial-gradient(220px circle at var(--x,50%) var(--y,50%),rgba(196,181,253,.2),transparent 70%)}
.tile{position:relative;padding:22px 16px;border:1px solid var(--line);border-radius:12px;background:#0d0d12;color:#c9c4d6;font-size:11px;text-align:center;box-shadow:0 16px 40px -24px rgba(0,0,0,.7);transition:border-color .3s}
.grid:hover .tile{border-color:#2c2837}
</style></head>
<body data-cf-keep-dark><div><span class="kicker">MOVE YOUR CURSOR OVER THE GRID</span>
<div class="grid" id="grid">
<div class="tile">Speed</div><div class="tile">Security</div><div class="tile">Scale</div>
<div class="tile">Uptime</div><div class="tile">Support</div><div class="tile">Insights</div>
</div></div>
<script>
const grid=document.getElementById("grid");
grid.addEventListener("pointermove",function(e){const r=grid.getBoundingClientRect();grid.style.setProperty("--x",(e.clientX-r.left)+"px");grid.style.setProperty("--y",(e.clientY-r.top)+"px")});
</script>
</body></html>`,

  "expandable-detail-card": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Expandable Detail Card</title><style>
:root{--bg:#eef1f8;--ink:#161a2b;--mut:#666f8a;--cobalt:#3b5bdb;--line:#dfe3ef}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.card{width:320px;background:#fff;border:1px solid var(--line);border-radius:18px;padding:20px;box-shadow:0 24px 50px -22px rgba(20,25,50,.2);cursor:pointer}
.top{display:flex;justify-content:space-between;align-items:center}
.top .l{display:flex;gap:12px;align-items:center}
.ic{width:38px;height:38px;border-radius:11px;background:linear-gradient(135deg,#4f6bef,#3b5bdb);display:flex;align-items:center;justify-content:center;flex:none}
.ic svg{width:18px;height:18px;color:#fff}
.top b{font-size:14px;color:var(--ink)}
.top span{font-size:11.5px;color:var(--mut);display:block}
.chev{color:var(--mut);transition:transform .3s cubic-bezier(.2,.8,.2,1)}
.chev svg{width:16px;height:16px}
.card.open .chev{transform:rotate(180deg)}
.detail{max-height:0;overflow:hidden;transition:max-height .35s cubic-bezier(.2,.8,.2,1)}
.card.open .detail{max-height:140px}
.detail-in{padding-top:16px;margin-top:14px;border-top:1px solid var(--line)}
.detail-in p{margin:0 0 12px;font-size:12.5px;color:var(--mut);line-height:1.6}
.bar{height:6px;background:#eef1f8;border-radius:4px;overflow:hidden}
.bar i{display:block;height:100%;width:0;background:var(--cobalt);border-radius:4px;transition:width .6s cubic-bezier(.2,.8,.2,1)}
.detail-foot{display:flex;justify-content:space-between;margin-top:8px;font-size:11px;color:var(--mut)}
</style></head>
<body>
<div class="card" id="card">
  <div class="top"><div class="l"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></div><div><b>Storage usage</b><span>128GB of 500GB used</span></div></div><div class="chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></div></div>
  <div class="detail"><div class="detail-in">
    <p>You're on the Pro plan. Upgrade to Business for 2TB of pooled storage across your team.</p>
    <div class="bar"><i id="bar"></i></div>
    <div class="detail-foot"><span>128GB used</span><span>500GB total</span></div>
  </div></div>
</div>
<script>
var card=document.getElementById("card"), bar=document.getElementById("bar");
card.addEventListener("click",function(){
  card.classList.toggle("open");
  if(card.classList.contains("open")) setTimeout(function(){ bar.style.width="26%"; },80);
  else bar.style.width="0";
});
</script>
</body></html>
`,

  "before-after-compare-card": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Before/After Compare Card</title><style>
:root{--bg:#eef1f8;--ink:#161a2b;--mut:#666f8a;--cobalt:#3b5bdb;--line:#dfe3ef}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.kicker{color:var(--mut);font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;text-align:center;margin-bottom:14px;display:block}
.card{width:320px;background:#fff;border:1px solid var(--line);border-radius:18px;padding:14px;box-shadow:0 24px 50px -22px rgba(20,25,50,.2)}
.comp{position:relative;height:220px;border-radius:12px;overflow:hidden;cursor:ew-resize}
.pane{position:absolute;inset:0;background:linear-gradient(155deg,#c7cff5,#3b5bdb)}
.pane.before{background:linear-gradient(155deg,#dfe3ef,#a7adc4)}
.pane.after{clip-path:inset(0 0 0 50%)}
.label{position:absolute;top:10px;font-size:10px;font-weight:700;color:#fff;background:rgba(0,0,0,.35);padding:3px 9px;border-radius:20px;letter-spacing:.04em;text-transform:uppercase}
.label.l{left:10px}
.label.r{right:10px}
.handle{position:absolute;top:0;bottom:0;left:50%;width:3px;background:#fff;transform:translateX(-50%);box-shadow:0 0 0 3px rgba(255,255,255,.4)}
.handle .grip{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:32px;height:32px;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 6px 16px rgba(0,0,0,.25)}
.grip svg{width:14px;height:14px;color:var(--cobalt)}
.caption{padding:12px 6px 4px;text-align:center;font-size:12px;color:var(--mut)}
</style></head>
<body>
<div><span class="kicker">Drag to compare</span>
<div class="card">
  <div class="comp" id="comp">
    <div class="pane before"></div>
    <div class="pane after" id="afterPane"></div>
    <span class="label l">Before</span><span class="label r">After</span>
    <div class="handle" id="handle"><div class="grip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="m9 6-6 6 6 6M15 6l6 6-6 6"/></svg></div></div>
  </div>
  <div class="caption">Redesigned dashboard — conversion up 34%</div>
</div>
</div>
<script>
var comp=document.getElementById("comp"), after=document.getElementById("afterPane"), handle=document.getElementById("handle"), dragging=false;
function setPos(x){
  var r=comp.getBoundingClientRect();
  var pct=Math.min(100,Math.max(0,((x-r.left)/r.width)*100));
  after.style.clipPath="inset(0 0 0 "+pct+"%)";
  handle.style.left=pct+"%";
}
comp.addEventListener("mousedown",function(e){ dragging=true; setPos(e.clientX); });
window.addEventListener("mousemove",function(e){ if(dragging) setPos(e.clientX); });
window.addEventListener("mouseup",function(){ dragging=false; });
comp.addEventListener("touchstart",function(e){ setPos(e.touches[0].clientX); });
comp.addEventListener("touchmove",function(e){ setPos(e.touches[0].clientX); });
</script>
</body></html>
`,

  "usage-slider-pricing": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Usage-Based Pricing Slider</title><style>
:root{--bg:#0a1512;--panel:#101d19;--line:rgba(255,255,255,.08);--ink:#eef4f1;--mut:#7c8c87;--em:#10b981}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.card{width:300px;background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:26px}
.tier{font-size:15px;color:#fff;font-weight:700;margin-bottom:2px}
.sub{font-size:12px;color:var(--mut);margin-bottom:20px}
.usage-row{display:flex;justify-content:space-between;font-size:12.5px;color:var(--ink);margin-bottom:8px}
.usage-row b{color:var(--em)}
input[type=range]{width:100%;appearance:none;height:5px;background:var(--line);border-radius:4px;outline:none;margin-bottom:20px}
input[type=range]::-webkit-slider-thumb{appearance:none;width:18px;height:18px;border-radius:50%;background:var(--em);cursor:pointer;box-shadow:0 4px 12px rgba(16,185,129,.5)}
.bar{height:8px;background:#0a1512;border-radius:6px;overflow:hidden;margin-bottom:20px}
.bar i{display:block;height:100%;background:linear-gradient(90deg,#10b981,#34d399);border-radius:6px;transition:width .2s}
.price{font-size:30px;font-weight:800;color:#fff}
.price span{font-size:13px;color:var(--mut);font-weight:500}
button{width:100%;margin-top:18px;padding:12px;border-radius:10px;border:0;background:var(--em);color:#04221a;font-size:13px;font-weight:700;cursor:pointer}
</style></head>
<body data-cf-keep-dark>
<div class="card">
  <div class="tier">API Requests</div>
  <div class="sub">Pay only for what you use</div>
  <div class="usage-row"><span>Monthly volume</span><b id="volLabel">500K calls</b></div>
  <input type="range" min="1" max="10" value="5" id="slider">
  <div class="bar"><i id="fill" style="width:50%"></i></div>
  <div class="price">$<span id="price">45</span><span>/month</span></div>
  <button>Set usage limit</button>
</div>
<script>
var slider=document.getElementById("slider"), volLabel=document.getElementById("volLabel"), price=document.getElementById("price"), fill=document.getElementById("fill");
function render(){
  var v=+slider.value, vol=v*100, cost=v*9;
  volLabel.textContent=(vol>=1000?(vol/1000)+"M":vol+"K")+" calls";
  price.textContent=cost;
  fill.style.width=(v/10*100)+"%";
}
slider.addEventListener("input",render);
render();
</script>
</body></html>
`,

  "highlighted-tier-cards": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Highlighted Tier Cards</title><style>
:root{--bg:#0a1512;--panel:#101d19;--line:rgba(255,255,255,.08);--ink:#eef4f1;--mut:#7c8c87;--em:#10b981}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.grid{display:flex;gap:14px;flex-wrap:wrap;justify-content:center;max-width:640px}
.card{width:190px;background:var(--panel);border:1px solid var(--line);border-radius:16px;padding:20px;transition:transform .3s cubic-bezier(.2,.8,.2,1);opacity:0;transform:translateY(16px)}
.card:hover{transform:translateY(-6px)!important}
.card.feat{border-color:var(--em);box-shadow:0 0 0 1px var(--em),0 30px 60px -24px rgba(16,185,129,.35);position:relative}
.pop{position:absolute;top:-11px;left:50%;transform:translateX(-50%);background:var(--em);color:#04221a;font-size:10px;font-weight:800;padding:4px 12px;border-radius:20px;letter-spacing:.03em}
.tier{font-size:12px;color:var(--mut);text-transform:uppercase}
.price{font-size:26px;font-weight:800;color:#fff;margin:8px 0 14px}
.price span{font-size:12px;color:var(--mut)}
ul{list-style:none;padding:0;margin:0 0 16px;display:flex;flex-direction:column;gap:8px}
li{font-size:11.5px;color:var(--ink)}
li:before{content:"✓ ";color:var(--em)}
button{width:100%;padding:10px;border-radius:9px;border:1px solid var(--line);background:var(--panel);color:#fff;font-size:12px;font-weight:600;cursor:pointer}
.card.feat button{background:var(--em);color:#04221a;border:0}
</style></head>
<body data-cf-keep-dark>
<div class="grid" id="grid">
  <div class="card"><div class="tier">Starter</div><div class="price">$9<span>/mo</span></div><ul><li>3 projects</li><li>1 seat</li><li>Community support</li></ul><button>Choose</button></div>
  <div class="card feat"><div class="pop">Most popular</div><div class="tier">Pro</div><div class="price">$29<span>/mo</span></div><ul><li>Unlimited projects</li><li>5 seats</li><li>Priority support</li><li>Advanced analytics</li></ul><button>Choose</button></div>
  <div class="card"><div class="tier">Enterprise</div><div class="price">Custom</div><ul><li>Unlimited seats</li><li>Dedicated CSM</li><li>Custom SLA</li></ul><button>Contact us</button></div>
</div>
<script>
document.querySelectorAll(".card").forEach(function(c,i){
  setTimeout(function(){ c.style.transition="opacity .5s ease,transform .5s cubic-bezier(.2,.8,.2,1)"; c.style.opacity=1; c.style.transform="translateY(0)"; }, 120+i*100);
});
</script>
</body></html>
`,

  "kanban-board-preview": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Kanban Board Preview</title><style>
:root{--bg:#0d0f16;--panel:#141824;--panel2:#1a1f2e;--line:rgba(255,255,255,.08);--ink:#eef0f5;--mut:#8890a0;--violet:#7c6cf6;--amber:#f5b942;--green:#4ade80}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.board{width:min(600px,94vw);display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.col{background:var(--panel);border:1px solid var(--line);border-radius:14px;padding:12px}
.col h4{margin:0 0 10px;font-size:10.5px;letter-spacing:.05em;color:var(--mut);display:flex;align-items:center;justify-content:space-between;text-transform:uppercase}
.col h4 b{background:var(--panel2);color:var(--ink);border-radius:6px;padding:1px 7px;font-size:10px}
.task{background:var(--panel2);border-radius:10px;padding:11px 12px;margin-bottom:8px;cursor:grab;opacity:0;transform:translateY(10px)}
.tag{display:inline-block;font-size:9px;font-weight:700;text-transform:uppercase;padding:2px 7px;border-radius:5px;margin-bottom:7px}
.tag.design{background:rgba(124,108,246,.18);color:#b3a6ff}
.tag.dev{background:rgba(74,222,128,.15);color:var(--green)}
.tag.copy{background:rgba(245,185,66,.15);color:var(--amber)}
.task p{margin:0;font-size:12px;color:var(--ink);line-height:1.4}
.task .foot{display:flex;align-items:center;justify-content:space-between;margin-top:9px}
.task .av{width:18px;height:18px;border-radius:50%}
.task .foot i{font-size:10px;color:var(--mut);font-style:normal}
.task.done p{text-decoration:line-through;color:var(--mut)}
</style></head>
<body data-cf-keep-dark>
<div class="board">
  <div class="col"><h4>To Do<b>3</b></h4>
    <div class="task"><span class="tag design">Design</span><p>Redesign onboarding empty states</p><div class="foot"><span class="av" style="background:#7c6cf6"></span><i>Due Fri</i></div></div>
    <div class="task"><span class="tag copy">Copy</span><p>Write launch email sequence</p><div class="foot"><span class="av" style="background:#f5b942"></span><i>Due Mon</i></div></div>
    <div class="task"><span class="tag dev">Dev</span><p>Add rate limiting to public API</p><div class="foot"><span class="av" style="background:#4ade80"></span><i>Due Wed</i></div></div>
  </div>
  <div class="col"><h4>In Progress<b>2</b></h4>
    <div class="task"><span class="tag dev">Dev</span><p>Ship real-time board sync</p><div class="foot"><span class="av" style="background:#f87171"></span><i>Today</i></div></div>
    <div class="task"><span class="tag design">Design</span><p>Polish mobile nav transitions</p><div class="foot"><span class="av" style="background:#7c6cf6"></span><i>Today</i></div></div>
  </div>
  <div class="col"><h4>Done<b>2</b></h4>
    <div class="task done"><span class="tag dev">Dev</span><p>Migrate auth to SSO</p><div class="foot"><span class="av" style="background:#4ade80"></span><i>Yesterday</i></div></div>
    <div class="task done"><span class="tag copy">Copy</span><p>Update pricing page copy</p><div class="foot"><span class="av" style="background:#f5b942"></span><i>Mon</i></div></div>
  </div>
</div>
<script>
document.querySelectorAll(".task").forEach(function(t,i){
  setTimeout(function(){ t.style.transition="opacity .4s ease,transform .4s cubic-bezier(.2,.8,.2,1)"; t.style.opacity=1; t.style.transform="translateY(0)"; }, 120+i*70);
  t.addEventListener("mouseenter",function(){ t.style.transform="translateY(-3px)"; t.style.boxShadow="0 12px 26px -14px rgba(124,108,246,.5)"; });
  t.addEventListener("mouseleave",function(){ t.style.transform="translateY(0)"; t.style.boxShadow="none"; });
});
</script>
</body></html>
`,

  "notification-center-panel": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Notification Center Panel</title><style>
:root{--bg:#0d0f16;--panel:#141824;--panel2:#1a1f2e;--line:rgba(255,255,255,.08);--ink:#eef0f5;--mut:#8890a0;--violet:#7c6cf6}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.card{width:min(360px,92vw);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:20px;box-shadow:0 30px 70px -30px rgba(0,0,0,.6)}
.top{display:flex;justify-content:space-between;align-items:center;margin-bottom:14px}
.top h3{margin:0;font-family:"Manrope",sans-serif;font-size:15px;color:#fff;font-weight:700;display:flex;align-items:center;gap:8px}
.top h3 b{background:var(--violet);color:#fff;font-size:10px;border-radius:20px;padding:1px 7px}
.top button{background:none;border:0;color:var(--mut);font-size:11.5px;cursor:pointer;font-family:inherit}
.top button:hover{color:#fff}
.n{display:flex;gap:11px;padding:10px 8px;border-radius:11px;transition:background .2s;opacity:0;transform:translateX(8px)}
.n:hover{background:var(--panel2)}
.n.unread{background:rgba(124,108,246,.06)}
.dot{width:7px;height:7px;border-radius:50%;background:var(--violet);flex:none;margin-top:6px;opacity:0}
.n.unread .dot{opacity:1}
.n .txt p{margin:0;font-size:12.5px;color:var(--ink);line-height:1.4}
.n .txt span{font-size:11px;color:var(--mut)}
</style></head>
<body data-cf-keep-dark>
<div class="card">
  <div class="top"><h3>Notifications <b id="count">3</b></h3><button id="markAll">Mark all read</button></div>
  <div id="list">
    <div class="n unread"><div class="dot"></div><div class="txt"><p>Your deployment to <b>production</b> succeeded</p><span>2 min ago</span></div></div>
    <div class="n unread"><div class="dot"></div><div class="txt"><p><b>Maya K.</b> requested access to Analytics</p><span>19 min ago</span></div></div>
    <div class="n unread"><div class="dot"></div><div class="txt"><p>Weekly usage report is ready to view</p><span>1 hr ago</span></div></div>
    <div class="n"><div class="dot"></div><div class="txt"><p>Billing invoice #4471 was paid</p><span>Yesterday</span></div></div>
  </div>
</div>
<script>
document.querySelectorAll(".n").forEach(function(el,i){
  setTimeout(function(){ el.style.transition="opacity .4s ease,transform .4s cubic-bezier(.2,.8,.2,1)"; el.style.opacity=1; el.style.transform="translateX(0)"; }, 130+i*90);
});
document.getElementById("markAll").addEventListener("click",function(){
  document.querySelectorAll(".n.unread").forEach(function(n){ n.classList.remove("unread"); });
  document.getElementById("count").textContent="0";
});
</script>
</body></html>
`,

  "animated-gradient-hero": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Animated Gradient Hero</title><style>
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;font-family:"Space Grotesk",Inter,ui-sans-serif,Arial,sans-serif;position:relative;overflow:hidden;background:#0a0a0a}
.gradient-bg{position:absolute;inset:-20%;background:linear-gradient(120deg,#ff4d3d,#ff8a75,#ffd6ae,#ff4d3d);background-size:300% 300%;animation:flow 12s ease infinite;filter:blur(60px);opacity:.75}
@keyframes flow{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
.hero{position:relative;text-align:center;max-width:600px;padding:50px}
.eb{display:inline-flex;gap:8px;font-size:11.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#fff;opacity:.8;margin-bottom:18px}
h1{margin:0;font-size:clamp(36px,6vw,64px);font-weight:800;letter-spacing:-.03em;color:#fff;line-height:1.05}
p{margin:18px auto 0;font-size:15.5px;color:rgba(255,255,255,.75);max-width:420px}
.cta{margin-top:28px;display:inline-flex;gap:9px;background:#fff;color:#0a0a0a;padding:14px 28px;border-radius:999px;font-size:13.5px;font-weight:700;cursor:pointer;transition:transform .25s}
.cta:hover{transform:translateY(-2px) scale(1.02)}
</style></head>
<body data-cf-keep-dark>
<div class="gradient-bg"></div>
<div class="hero">
  <span class="eb">Now in public beta</span>
  <h1>Motion that never sits still.</h1>
  <p>A living gradient background, warm and slow, that never quite repeats the same frame.</p>
  <div class="cta">Join the beta</div>
</div>
</body></html>
`,

  "particle-field-hero": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Particle Field Hero</title><style>
*{box-sizing:border-box}
body{margin:0;min-height:100vh;background:#0a0a0a;font-family:"Space Grotesk",Inter,ui-sans-serif,Arial,sans-serif;position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center}
canvas{position:absolute;inset:0}
.hero{position:relative;text-align:center;max-width:600px;padding:50px}
.eb{display:inline-flex;gap:8px;font-size:11.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#ff4d3d;margin-bottom:18px}
h1{margin:0;font-size:clamp(34px,5.6vw,58px);font-weight:800;letter-spacing:-.03em;color:#fff;line-height:1.08}
p{margin:18px auto 0;font-size:15px;color:rgba(255,255,255,.6);max-width:420px}
.cta{margin-top:28px;display:inline-flex;gap:9px;background:#ff4d3d;color:#fff;padding:14px 28px;border-radius:999px;font-size:13.5px;font-weight:700;cursor:pointer}
</style></head>
<body data-cf-keep-dark>
<canvas id="field"></canvas>
<div class="hero">
  <span class="eb">Infrastructure for the next decade</span>
  <h1>Built from a thousand moving parts.</h1>
  <p>A quiet particle field behind the headline — connections forming and dissolving, just like your network.</p>
  <div class="cta">Get started free</div>
</div>
<script>
var canvas=document.getElementById("field"), ctx=canvas.getContext("2d");
function resize(){ canvas.width=window.innerWidth; canvas.height=window.innerHeight; }
resize(); window.addEventListener("resize",resize);
var N=70, pts=[];
for(var i=0;i<N;i++) pts.push({ x:Math.random()*canvas.width, y:Math.random()*canvas.height, vx:(Math.random()-.5)*.3, vy:(Math.random()-.5)*.3 });
function tick(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  pts.forEach(function(p){
    p.x+=p.vx; p.y+=p.vy;
    if(p.x<0||p.x>canvas.width) p.vx*=-1;
    if(p.y<0||p.y>canvas.height) p.vy*=-1;
  });
  for(var i=0;i<N;i++){
    ctx.beginPath(); ctx.arc(pts[i].x,pts[i].y,1.6,0,Math.PI*2); ctx.fillStyle="rgba(255,77,61,.7)"; ctx.fill();
    for(var j=i+1;j<N;j++){
      var dx=pts[i].x-pts[j].x, dy=pts[i].y-pts[j].y, d=Math.sqrt(dx*dx+dy*dy);
      if(d<120){ ctx.beginPath(); ctx.moveTo(pts[i].x,pts[i].y); ctx.lineTo(pts[j].x,pts[j].y); ctx.strokeStyle="rgba(255,255,255,"+(0.08*(1-d/120))+")"; ctx.lineWidth=1; ctx.stroke(); }
    }
  }
  requestAnimationFrame(tick);
}
tick();
</script>
</body></html>
`,

  "carousel-dot-testimonials": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Testimonial Carousel</title><style>
:root{--bg:#fdf6f3;--ink:#2b211d;--mut:#8a7a72;--rose:#c9576b;--card:#fff;--line:#f0e2dc}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.card{width:360px;background:var(--card);border:1px solid var(--line);border-radius:18px;padding:30px;text-align:center;position:relative;overflow:hidden}
.slide{display:none;animation:fade .4s ease}
.slide.on{display:block}
@keyframes fade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
.quote-mark{font-family:Georgia,serif;font-size:44px;color:#f0d9dd;line-height:.5;margin-bottom:6px}
.slide p{margin:0;font-size:14.5px;color:var(--ink);line-height:1.7;font-style:italic;font-family:Georgia,serif}
.who{margin-top:18px}
.who b{display:block;font-size:12.5px;color:var(--ink)}
.who span{font-size:11px;color:var(--mut)}
.dots{display:flex;justify-content:center;gap:8px;margin-top:22px}
.dots button{width:8px;height:8px;border-radius:50%;border:0;background:var(--line);cursor:pointer;padding:0;transition:background .25s,transform .25s}
.dots button.on{background:var(--rose);transform:scale(1.3)}
</style></head>
<body>
<div class="card">
  <div class="slide on"><div class="quote-mark">"</div><p>The migration we dreaded took one afternoon, not the two weeks we'd budgeted.</p><div class="who"><b>Nadia Farouk</b><span>CTO, Portside</span></div></div>
  <div class="slide"><div class="quote-mark">"</div><p>Support answers like they actually use the product. Refreshing, honestly.</p><div class="who"><b>Tomas Berg</b><span>Founder, Haven</span></div></div>
  <div class="slide"><div class="quote-mark">"</div><p>We finally have one dashboard the whole company trusts.</p><div class="who"><b>Lena Wu</b><span>COO, Argus</span></div></div>
  <div class="dots" id="dots"><button class="on"></button><button></button><button></button></div>
</div>
<script>
var slides=document.querySelectorAll(".slide"), dots=document.querySelectorAll(".dots button"), cur=0;
function go(i){
  slides[cur].classList.remove("on"); dots[cur].classList.remove("on");
  cur=i; slides[cur].classList.add("on"); dots[cur].classList.add("on");
}
dots.forEach(function(d,i){ d.addEventListener("click",function(){ go(i); }); });
setInterval(function(){ go((cur+1)%slides.length); },3800);
</script>
</body></html>
`,

  "pull-quote-testimonial": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Pull Quote Testimonial</title><style>
:root{--bg:#fdf6f3;--ink:#2b211d;--mut:#8a7a72;--rose:#c9576b}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:60px}
.wrap{max-width:560px;text-align:center;position:relative}
.mark{position:absolute;top:-40px;left:50%;transform:translateX(-50%);font-family:Georgia,serif;font-size:90px;color:#f0d9dd;line-height:1;user-select:none}
blockquote{margin:0;font-family:Georgia,serif;font-size:clamp(22px,3vw,30px);font-style:italic;color:var(--ink);line-height:1.4;position:relative}
.rule{width:40px;height:2px;background:var(--rose);margin:26px auto}
.who b{display:block;font-size:13.5px;color:var(--ink)}
.who span{font-size:12px;color:var(--mut)}
.logo{margin-top:16px;font-family:Georgia,serif;font-weight:700;font-style:italic;font-size:15px;color:#c7b6b9}
</style></head>
<body>
<div class="wrap">
  <div class="mark">"</div>
  <blockquote>We didn't just save time switching to this platform — we changed how the whole company thinks about its own data.</blockquote>
  <div class="rule"></div>
  <div class="who"><b>Renata Silva</b><span>VP Operations</span></div>
  <div class="logo">Fenwick</div>
</div>
</body></html>
`,

  "command-palette-nav": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Command Palette Nav</title><style>
:root{--bg:#fff;--ink:#14161f;--mut:#6b7080;--sky:#0ea5e9;--line:#e7e9f0}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;background:#f7f8fb;font-family:Inter,ui-sans-serif,Arial,sans-serif}
nav{background:var(--bg);border-bottom:1px solid var(--line);padding:16px 32px;display:flex;align-items:center;gap:24px}
.brand{font-weight:800;font-size:16px;color:var(--ink)}
.kbtn{margin-left:auto;display:flex;align-items:center;gap:10px;background:#f7f8fb;border:1px solid var(--line);border-radius:9px;padding:9px 14px;font-size:12.5px;color:var(--mut);cursor:pointer}
.kbtn kbd{background:#fff;border:1px solid var(--line);border-radius:5px;padding:1px 6px;font-size:10.5px;font-family:ui-monospace,monospace}
.overlay{position:fixed;inset:0;background:rgba(20,22,31,.5);display:flex;align-items:flex-start;justify-content:center;padding-top:100px;opacity:0;pointer-events:none;transition:opacity .2s}
.overlay.open{opacity:1;pointer-events:auto}
.palette{width:440px;max-width:90vw;background:#fff;border-radius:16px;box-shadow:0 40px 80px -20px rgba(0,0,0,.4);overflow:hidden;transform:translateY(-10px);transition:transform .2s}
.overlay.open .palette{transform:translateY(0)}
.psearch{display:flex;align-items:center;gap:10px;padding:16px 18px;border-bottom:1px solid var(--line)}
.psearch svg{width:16px;height:16px;color:var(--mut)}
.psearch input{border:0;outline:none;font-size:14px;flex:1;font-family:inherit;color:var(--ink)}
.presults{padding:8px;max-height:280px;overflow-y:auto}
.pres{display:flex;align-items:center;gap:11px;padding:10px 10px;border-radius:9px;cursor:pointer}
.pres.active{background:#e6f6fe}
.pres .ic{width:28px;height:28px;border-radius:8px;background:#f7f8fb;display:flex;align-items:center;justify-content:center;flex:none}
.pres .ic svg{width:14px;height:14px;color:var(--sky)}
.pres b{font-size:12.5px;color:var(--ink);font-weight:600}
.pres span{font-size:11px;color:var(--mut);margin-left:auto}
.stage{padding:60px;text-align:center;color:var(--mut);font-size:13px}
</style></head>
<body>
<nav><div class="brand">CoreKit</div><div class="kbtn" id="open">Search... <kbd>⌘K</kbd></div></nav>
<div class="stage">Click the search button to open the command palette</div>
<div class="overlay" id="overlay">
  <div class="palette">
    <div class="psearch"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg><input type="text" placeholder="Jump to a page or action…" autofocus></div>
    <div class="presults">
      <div class="pres active"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/></svg></div><b>Go to Dashboard</b><span>G D</span></div>
      <div class="pres"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21a8 8 0 1 0-16 0"/><circle cx="12" cy="7" r="4"/></svg></div><b>Go to Team</b><span>G T</span></div>
      <div class="pres"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2 3 6v6c0 5 4 8.5 9 10 5-1.5 9-5 9-10V6z"/></svg></div><b>Open Settings</b><span>G S</span></div>
      <div class="pres"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M2 12h20"/></svg></div><b>Create new project</b><span>C</span></div>
    </div>
  </div>
</div>
<script>
var overlay=document.getElementById("overlay"), openBtn=document.getElementById("open");
openBtn.addEventListener("click",function(){ overlay.classList.add("open"); });
overlay.addEventListener("click",function(e){ if(e.target===overlay) overlay.classList.remove("open"); });
document.addEventListener("keydown",function(e){ if(e.key==="Escape") overlay.classList.remove("open"); });
document.querySelectorAll(".pres").forEach(function(p){
  p.addEventListener("mouseenter",function(){ document.querySelectorAll(".pres").forEach(function(x){x.classList.remove("active")}); p.classList.add("active"); });
});
</script>
</body></html>
`,

  "sliding-underline-tabs": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Sliding Underline Tabs</title><style>
:root{--bg:#fff;--ink:#14161f;--mut:#9aa0ae;--sky:#0ea5e9;--line:#e7e9f0}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:#f7f8fb;font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.card{width:360px;background:#fff;border:1px solid var(--line);border-radius:16px;padding:20px;box-shadow:0 24px 50px -24px rgba(20,22,31,.15)}
.tabs{display:flex;position:relative;border-bottom:1px solid var(--line);margin-bottom:18px}
.tab{padding:10px 16px;font-size:13px;font-weight:600;color:var(--mut);cursor:pointer;position:relative;z-index:1}
.tab.on{color:var(--sky)}
.underline{position:absolute;bottom:-1px;height:2.5px;background:var(--sky);border-radius:2px;transition:left .3s cubic-bezier(.2,.8,.2,1),width .3s cubic-bezier(.2,.8,.2,1)}
.panel{font-size:12.5px;color:var(--mut);line-height:1.7;min-height:60px}
.panel b{display:block;color:var(--ink);font-size:13px;margin-bottom:6px}
</style></head>
<body>
<div class="card">
  <div class="tabs" id="tabs">
    <div class="tab on" data-i="0">Overview</div>
    <div class="tab" data-i="1">Analytics</div>
    <div class="tab" data-i="2">Team</div>
    <div class="tab" data-i="3">Billing</div>
    <div class="underline" id="underline"></div>
  </div>
  <div class="panel" id="panel"><b>Overview</b>A quick summary of your workspace activity and recent changes.</div>
</div>
<script>
var tabs=document.querySelectorAll(".tab"), underline=document.getElementById("underline"), panel=document.getElementById("panel");
var copy=[["Overview","A quick summary of your workspace activity and recent changes."],["Analytics","Track usage, conversion and retention across your product."],["Team","Manage members, roles and pending invitations."],["Billing","View invoices, update your card, or change your plan."]];
function moveUnderline(tab){
  underline.style.left=tab.offsetLeft+"px";
  underline.style.width=tab.offsetWidth+"px";
}
tabs.forEach(function(t){
  t.addEventListener("click",function(){
    tabs.forEach(function(x){x.classList.remove("on")}); t.classList.add("on");
    moveUnderline(t);
    var c=copy[+t.dataset.i]; panel.innerHTML="<b>"+c[0]+"</b>"+c[1];
  });
});
moveUnderline(tabs[0]);
</script>
</body></html>
`,

  "drag-drop-upload-form": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Drag &amp; Drop Upload Form</title><style>
:root{--bg:#f5f6fb;--ink:#191b29;--mut:#6b7086;--indigo:#4338ca;--line:#e2e4f0;--card:#fff;--green:#16a34a}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.card{width:320px;background:var(--card);border:1px solid var(--line);border-radius:18px;padding:24px;box-shadow:0 24px 50px -24px rgba(25,27,41,.18)}
.card h3{margin:0 0 16px;font-size:16px;color:var(--ink)}
.dz{border:1.5px dashed var(--line);border-radius:14px;padding:30px 20px;text-align:center;transition:border-color .2s,background .2s;cursor:pointer}
.dz.over{border-color:var(--indigo);background:#f6f5fe}
.dz svg{width:30px;height:30px;color:var(--indigo);margin-bottom:10px}
.dz b{display:block;font-size:12.5px;color:var(--ink)}
.dz span{font-size:11px;color:var(--mut)}
.files{margin-top:16px;display:flex;flex-direction:column;gap:8px}
.file{display:flex;align-items:center;gap:10px;background:var(--bg);border-radius:10px;padding:9px 12px;opacity:0;transform:translateY(6px)}
.file .ic{width:28px;height:28px;border-radius:8px;background:#eeecfd;color:var(--indigo);display:flex;align-items:center;justify-content:center;flex:none}
.file .ic svg{width:14px;height:14px}
.file .info{flex:1;min-width:0}
.file b{display:block;font-size:11.5px;color:var(--ink);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.file .bar{height:3px;background:var(--line);border-radius:3px;margin-top:4px;overflow:hidden}
.file .bar i{display:block;height:100%;background:var(--green);width:0;transition:width 1s}
</style></head>
<body>
<div class="card">
  <h3>Upload files</h3>
  <div class="dz" id="dz"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v12M7 8l5-5 5 5"/><path d="M5 21h14"/></svg><b>Drop files or click to browse</b><span>PDF, PNG, JPG up to 10MB</span></div>
  <div class="files" id="files"></div>
</div>
<script>
var dz=document.getElementById("dz"), files=document.getElementById("files");
var demo=[["brand-guidelines.pdf","2.4 MB"],["hero-mockup.png","840 KB"]];
dz.addEventListener("dragover",function(e){ e.preventDefault(); dz.classList.add("over"); });
dz.addEventListener("dragleave",function(){ dz.classList.remove("over"); });
dz.addEventListener("drop",function(e){ e.preventDefault(); dz.classList.remove("over"); addFile(); });
dz.addEventListener("click",addFile);
function addFile(){
  if(!demo.length) return;
  var d=demo.shift();
  var el=document.createElement("div"); el.className="file";
  el.innerHTML='<div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/></svg></div><div class="info"><b>'+d[0]+'</b><div class="bar"><i></i></div></div>';
  files.appendChild(el);
  requestAnimationFrame(function(){ el.style.transition="opacity .3s,transform .3s"; el.style.opacity=1; el.style.transform="translateY(0)"; });
  setTimeout(function(){ el.querySelector(".bar i").style.width="100%"; },150);
}
</script>
</body></html>
`,

  "otp-input-form": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>OTP Input Form</title><style>
:root{--bg:#f5f6fb;--ink:#191b29;--mut:#6b7086;--indigo:#4338ca;--line:#e2e4f0;--card:#fff;--green:#16a34a}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.card{width:300px;background:var(--card);border:1px solid var(--line);border-radius:18px;padding:28px;box-shadow:0 24px 50px -24px rgba(25,27,41,.18);text-align:center}
.card h3{margin:0 0 4px;font-size:16px;color:var(--ink)}
.card p{margin:0 0 20px;font-size:12px;color:var(--mut)}
.otp{display:flex;gap:8px;justify-content:center;margin-bottom:18px}
.otp input{width:38px;height:46px;text-align:center;font-size:18px;font-weight:700;border-radius:10px;border:1.5px solid var(--line);outline:none;transition:border-color .2s,transform .15s;font-family:inherit;color:var(--ink)}
.otp input:focus{border-color:var(--indigo);transform:translateY(-2px)}
.otp input.filled{border-color:var(--indigo)}
button{width:100%;padding:12px;border-radius:10px;border:0;background:var(--indigo);color:#fff;font-size:13px;font-weight:700;cursor:pointer;opacity:.5;pointer-events:none;transition:opacity .2s,background .3s}
button.ready{opacity:1;pointer-events:auto}
button.verified{background:var(--green)}
.resend{margin-top:14px;font-size:11.5px;color:var(--mut)}
.resend b{color:var(--indigo);cursor:pointer}
</style></head>
<body>
<div class="card">
  <h3>Enter verification code</h3>
  <p>We sent a 6-digit code to your phone</p>
  <div class="otp" id="otp">
    <input maxlength="1" inputmode="numeric"><input maxlength="1" inputmode="numeric"><input maxlength="1" inputmode="numeric"><input maxlength="1" inputmode="numeric"><input maxlength="1" inputmode="numeric"><input maxlength="1" inputmode="numeric">
  </div>
  <button id="submit">Verify code</button>
  <div class="resend">Didn't get it? <b>Resend code</b></div>
</div>
<script>
var inputs=document.querySelectorAll(".otp input"), submit=document.getElementById("submit");
inputs.forEach(function(inp,i){
  inp.addEventListener("input",function(){
    inp.value=inp.value.replace(/[^0-9]/g,"");
    inp.classList.toggle("filled", inp.value.length>0);
    if(inp.value && inputs[i+1]) inputs[i+1].focus();
    checkReady();
  });
  inp.addEventListener("keydown",function(e){
    if(e.key==="Backspace" && !inp.value && inputs[i-1]) inputs[i-1].focus();
  });
});
function checkReady(){
  var all=[...inputs].every(function(i){return i.value.length===1});
  submit.classList.toggle("ready", all);
}
submit.addEventListener("click",function(){
  submit.classList.add("verified"); submit.textContent="Verified ✓";
});
</script>
</body></html>
`,

  "filter-chip-project-grid": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Filterable Project Grid</title><style>
:root{--bg:#0e0e10;--ink:#f2f2f0;--mut:#8a8a86;--lime:#d4ff3f;--line:rgba(255,255,255,.1)}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;background:var(--bg);font-family:"Space Grotesk",Inter,ui-sans-serif,Arial,sans-serif;padding:40px;display:grid;place-items:center}
.wrap{width:min(460px,92vw)}
.chips{display:flex;gap:8px;margin-bottom:20px;flex-wrap:wrap}
.chip{font-size:12px;color:var(--mut);border:1px solid var(--line);padding:7px 14px;border-radius:20px;cursor:pointer;transition:background .2s,color .2s,border-color .2s}
.chip.on{background:var(--lime);color:#0e0e10;border-color:var(--lime)}
.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.card{border-radius:12px;overflow:hidden;transition:opacity .3s,transform .3s}
.card.hide{display:none}
.card .ph{height:100px}
.card .meta{padding:10px 2px}
.card b{font-size:12.5px;color:var(--ink);display:block}
.card span{font-size:10.5px;color:var(--mut)}
</style></head>
<body data-cf-keep-dark>
<div class="wrap">
  <div class="chips" id="chips">
    <div class="chip on" data-f="all">All</div>
    <div class="chip" data-f="web">Web</div>
    <div class="chip" data-f="brand">Brand</div>
    <div class="chip" data-f="motion">Motion</div>
  </div>
  <div class="grid" id="grid">
    <div class="card" data-c="web"><div class="ph" style="background:linear-gradient(155deg,#d4ff3f,#4a5a10)"></div><div class="meta"><b>Northwind</b><span>Web</span></div></div>
    <div class="card" data-c="brand"><div class="ph" style="background:linear-gradient(155deg,#f2f2f0,#4a4a48)"></div><div class="meta"><b>Aperture</b><span>Brand</span></div></div>
    <div class="card" data-c="motion"><div class="ph" style="background:linear-gradient(155deg,#8a8a86,#2a2a28)"></div><div class="meta"><b>Ampersand</b><span>Motion</span></div></div>
    <div class="card" data-c="web"><div class="ph" style="background:linear-gradient(155deg,#d4ff3f,#7a9e1f)"></div><div class="meta"><b>Vellum</b><span>Web</span></div></div>
    <div class="card" data-c="brand"><div class="ph" style="background:linear-gradient(155deg,#4a4a48,#1a1a18)"></div><div class="meta"><b>Cascade</b><span>Brand</span></div></div>
    <div class="card" data-c="motion"><div class="ph" style="background:linear-gradient(155deg,#f2f2f0,#8a8a86)"></div><div class="meta"><b>Origin Co</b><span>Motion</span></div></div>
  </div>
</div>
<script>
var chips=document.querySelectorAll(".chip"), cards=document.querySelectorAll(".card");
chips.forEach(function(c){
  c.addEventListener("click",function(){
    chips.forEach(function(x){x.classList.remove("on")}); c.classList.add("on");
    var f=c.dataset.f;
    cards.forEach(function(card){ card.classList.toggle("hide", f!=="all" && card.dataset.c!==f); });
  });
});
</script>
</body></html>
`,

  "drag-scroll-project-strip": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Drag Scroll Project Strip</title><style>
:root{--bg:#0e0e10;--ink:#f2f2f0;--mut:#8a8a86;--lime:#d4ff3f}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;background:var(--bg);font-family:"Space Grotesk",Inter,ui-sans-serif,Arial,sans-serif;padding:40px 0;display:flex;flex-direction:column;justify-content:center}
.head{padding:0 40px;margin-bottom:20px}
.eb{font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--lime);margin-bottom:8px}
h2{margin:0;font-size:22px;color:var(--ink);font-weight:700}
.hint{font-size:11.5px;color:var(--mut);margin-top:6px}
.strip{display:flex;gap:16px;overflow-x:auto;padding:0 40px 10px;cursor:grab;scrollbar-width:none}
.strip::-webkit-scrollbar{display:none}
.strip.dragging{cursor:grabbing}
.card{flex:none;width:220px;border-radius:14px;overflow:hidden;user-select:none}
.card .ph{height:150px;pointer-events:none}
.card .meta{padding:12px 2px}
.card b{font-size:13px;color:var(--ink);display:block}
.card span{font-size:11px;color:var(--mut)}
</style></head>
<body data-cf-keep-dark>
<div class="head"><span class="eb">Archive</span><h2>Drag to browse the full archive.</h2><div class="hint">Click and drag horizontally →</div></div>
<div class="strip" id="strip">
  <div class="card"><div class="ph" style="background:linear-gradient(155deg,#d4ff3f,#4a5a10)"></div><div class="meta"><b>Aperture</b><span>2025</span></div></div>
  <div class="card"><div class="ph" style="background:linear-gradient(155deg,#f2f2f0,#4a4a48)"></div><div class="meta"><b>Northwind</b><span>2025</span></div></div>
  <div class="card"><div class="ph" style="background:linear-gradient(155deg,#8a8a86,#2a2a28)"></div><div class="meta"><b>Vellum</b><span>2024</span></div></div>
  <div class="card"><div class="ph" style="background:linear-gradient(155deg,#d4ff3f,#7a9e1f)"></div><div class="meta"><b>Cascade</b><span>2024</span></div></div>
  <div class="card"><div class="ph" style="background:linear-gradient(155deg,#4a4a48,#1a1a18)"></div><div class="meta"><b>Ampersand</b><span>2023</span></div></div>
</div>
<script>
var strip=document.getElementById("strip"), down=false, startX, scrollLeft;
strip.addEventListener("mousedown",function(e){ down=true; strip.classList.add("dragging"); startX=e.pageX-strip.offsetLeft; scrollLeft=strip.scrollLeft; });
window.addEventListener("mouseup",function(){ down=false; strip.classList.remove("dragging"); });
strip.addEventListener("mousemove",function(e){
  if(!down)return; e.preventDefault();
  var x=e.pageX-strip.offsetLeft, walk=(x-startX)*1.2;
  strip.scrollLeft=scrollLeft-walk;
});
</script>
</body></html>
`,

  "before-after-feature-toggle": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Before/After Feature Toggle</title><style>
:root{--bg:#f4faf9;--ink:#0f2622;--mut:#5b7570;--teal:#0d9488;--line:#dcece8;--card:#fff;--red:#dc6a5f}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.card{width:340px;background:var(--card);border:1px solid var(--line);border-radius:16px;padding:22px}
.switcher{display:flex;background:var(--bg);border-radius:11px;padding:4px;margin-bottom:18px}
.switcher button{flex:1;background:none;border:0;padding:9px;border-radius:8px;font-size:12px;font-weight:700;color:var(--mut);cursor:pointer;font-family:inherit}
.switcher button.on{background:#fff;box-shadow:0 4px 10px -4px rgba(15,38,34,.2)}
.switcher button.on.before{color:var(--red)}
.switcher button.on.after{color:var(--teal)}
.rows{display:flex;flex-direction:column;gap:10px}
.row{display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;background:var(--bg);font-size:12.5px;color:var(--ink)}
.view{display:none}
.view.on{display:flex;flex-direction:column;gap:10px;animation:fade .3s ease}
@keyframes fade{from{opacity:0}to{opacity:1}}
.row svg{width:15px;height:15px;flex:none}
.before-row svg{color:var(--red)}
.after-row svg{color:var(--teal)}
</style></head>
<body>
<div class="card">
  <div class="switcher"><button class="on before" id="btnBefore">Manual process</button><button class="after" id="btnAfter">With automation</button></div>
  <div class="view on" id="viewBefore">
    <div class="row before-row"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 3"/></svg>4 hours/week on manual data entry</div>
    <div class="row before-row"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M18 6 6 18M6 6l12 12"/></svg>Reports built by hand in spreadsheets</div>
    <div class="row before-row"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M18 6 6 18M6 6l12 12"/></svg>Errors caught days later, if at all</div>
  </div>
  <div class="view" id="viewAfter">
    <div class="row after-row"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6 9 17l-5-5"/></svg>Zero manual entry — synced automatically</div>
    <div class="row after-row"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6 9 17l-5-5"/></svg>Reports generate themselves, hourly</div>
    <div class="row after-row"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6 9 17l-5-5"/></svg>Anomalies flagged in real time</div>
  </div>
</div>
<script>
var btnBefore=document.getElementById("btnBefore"), btnAfter=document.getElementById("btnAfter");
var viewBefore=document.getElementById("viewBefore"), viewAfter=document.getElementById("viewAfter");
btnBefore.addEventListener("click",function(){
  btnBefore.classList.add("on"); btnAfter.classList.remove("on");
  viewBefore.classList.add("on"); viewAfter.classList.remove("on");
});
btnAfter.addEventListener("click",function(){
  btnAfter.classList.add("on"); btnBefore.classList.remove("on");
  viewAfter.classList.add("on"); viewBefore.classList.remove("on");
});
</script>
</body></html>
`,

  "scrollspy-feature-list": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Scrollspy Feature List</title><style>
:root{--bg:#f4faf9;--ink:#0f2622;--mut:#5b7570;--teal:#0d9488;--line:#dcece8;--card:#fff}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.layout{display:grid;grid-template-columns:200px 1fr;max-width:640px;margin:0 auto;padding:60px 20px}
.spy{position:sticky;top:60px;height:fit-content;display:flex;flex-direction:column;gap:4px}
.spy a{font-size:13px;color:var(--mut);padding:9px 14px;border-radius:9px;border-left:2px solid transparent;transition:color .25s,border-color .25s,background .25s}
.spy a.on{color:var(--teal);border-color:var(--teal);background:#e5f6f2;font-weight:600}
.content{display:flex;flex-direction:column;gap:0}
.sec{min-height:70vh;padding:20px;scroll-margin-top:60px}
.sec h3{margin:0 0 10px;font-size:20px;color:var(--ink)}
.sec p{margin:0;font-size:13.5px;color:var(--mut);line-height:1.7;max-width:340px}
.vis{margin-top:20px;height:120px;border-radius:12px}
</style></head>
<body>
<div class="layout">
  <div class="spy" id="spy">
    <a href="#s0" class="on" data-i="0">Automation</a>
    <a href="#s1" data-i="1">Analytics</a>
    <a href="#s2" data-i="2">Security</a>
  </div>
  <div class="content">
    <div class="sec" id="s0"><h3>Automation</h3><p>Rules-based workflows that fire the moment a condition is met, no polling required.</p><div class="vis" style="background:linear-gradient(155deg,#ccf1ea,#0d9488)"></div></div>
    <div class="sec" id="s1"><h3>Analytics</h3><p>Every metric your team actually checks, updated live, in one dashboard.</p><div class="vis" style="background:linear-gradient(155deg,#a7e8dc,#0f766e)"></div></div>
    <div class="sec" id="s2"><h3>Security</h3><p>SOC 2 Type II, encrypted at rest, with granular role-based access.</p><div class="vis" style="background:linear-gradient(155deg,#ddf2ee,#5bab9e)"></div></div>
  </div>
</div>
<script>
var links=document.querySelectorAll(".spy a"), secs=document.querySelectorAll(".sec");
links.forEach(function(l){
  l.addEventListener("click",function(e){
    e.preventDefault();
    document.getElementById(l.getAttribute("href").slice(1)).scrollIntoView({behavior:"smooth",block:"start"});
  });
});
function onScroll(){
  var mid=window.scrollY+150;
  var idx=0;
  secs.forEach(function(s,i){ if(s.offsetTop<=mid) idx=i; });
  links.forEach(function(l,i){ l.classList.toggle("on", i===idx); });
}
window.addEventListener("scroll",onScroll);
onScroll();
</script>
</body></html>
`,

  "waitlist-capture-section": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Marginalia Landing Page</title><style>
:root{--bg:#faf9f6;--ink:#1c1a17;--mut:#8a8478;--card:#fff;--line:#e9e5dc;--iris:#6a5cff;--iris-d:#5245e0;--rose:#ff8fb3}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--ink);font-family:"Newsreader","Georgia",serif;-webkit-font-smoothing:antialiased;overflow-x:hidden}
h1,h2,h3{font-family:"Newsreader",serif;margin:0;font-weight:500;letter-spacing:-.01em;color:var(--ink)}
p{margin:0;color:var(--mut);font-family:Inter,ui-sans-serif,sans-serif}
button{font-family:Inter,sans-serif;cursor:pointer;border:0}
.wrap{max-width:1120px;margin:0 auto;padding:0 32px}
.rv{opacity:0;transform:translateY(24px)}
.eb{display:inline-flex;align-items:center;gap:8px;font-size:12.5px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--iris);margin-bottom:14px;font-family:Inter,sans-serif}

/* ---------- buttons ---------- */
.btn{position:relative;display:inline-flex;align-items:center;gap:9px;border-radius:10px;padding:14px 24px;font-size:14.5px;font-weight:600;font-family:Inter,sans-serif;transition:transform .3s cubic-bezier(.2,.8,.2,1),box-shadow .3s}
.btn svg{width:15px;height:15px;flex:none;transition:transform .3s}
.btn:hover svg{transform:translateX(3px)}
.btn-iris{background:var(--iris);color:#fff;box-shadow:0 12px 28px rgba(106,92,255,.3)}
.btn-iris:hover{transform:translateY(-2px);box-shadow:0 18px 38px rgba(106,92,255,.4);background:var(--iris-d)}
.btn-line{background:transparent;color:var(--ink);border:1px solid var(--line)}
.btn-line:hover{transform:translateY(-2px);border-color:var(--ink)}

/* ---------- nav ---------- */
.nav{position:sticky;top:0;z-index:60;transition:background .4s,box-shadow .4s}
.nav-in{max-width:1120px;margin:0 auto;padding:22px 32px;display:flex;align-items:center;gap:34px}
.nav.on{background:rgba(250,249,246,.88);backdrop-filter:blur(16px);box-shadow:0 1px 0 var(--line)}
.brand{font-family:"Newsreader",serif;font-style:italic;font-size:22px;font-weight:600}
.nav-links{display:flex;gap:28px;margin:0 auto;font-size:14px;color:var(--mut);font-family:Inter,sans-serif}
.nav-links a{position:relative;cursor:pointer}
.nav-links a:after{content:"";position:absolute;left:0;bottom:-5px;width:100%;height:1.5px;background:var(--iris);transform:scaleX(0);transform-origin:right;transition:transform .3s}
.nav-links a:hover{color:var(--ink)}
.nav-links a:hover:after{transform:scaleX(1);transform-origin:left}
.nav-right{display:flex;align-items:center;gap:16px}
.nav-right .lg{font-size:14px;color:var(--mut);font-family:Inter,sans-serif}

/* ---------- hero ---------- */
.hero{position:relative;padding:80px 0 50px}
.hero-in{text-align:center;max-width:760px;margin:0 auto}
.hero .eb{justify-content:center}
.hero h1{font-size:clamp(36px,4.6vw,58px);line-height:1.15;font-style:italic}
.hero p.lead{margin-top:20px;font-size:17px;line-height:1.7;max-width:520px;margin-left:auto;margin-right:auto;font-family:Inter,sans-serif}
.hero .cta{display:flex;gap:14px;justify-content:center;margin-top:30px;flex-wrap:wrap}

/* editor mockup */
.editor-wrap{margin-top:56px}
.editor{position:relative;background:var(--card);border:1px solid var(--line);border-radius:18px;box-shadow:0 40px 90px rgba(28,26,23,.1);max-width:820px;margin:0 auto;overflow:hidden}
.editor-top{display:flex;align-items:center;justify-content:space-between;padding:16px 22px;border-bottom:1px solid var(--line);font-family:Inter,sans-serif}
.editor-top .l{display:flex;gap:8px}
.editor-top .l i{width:10px;height:10px;border-radius:50%;background:var(--line)}
.editor-top .r{font-size:12px;color:var(--mut);display:flex;align-items:center;gap:6px}
.editor-top .r b{width:6px;height:6px;border-radius:50%;background:var(--iris);display:inline-block}
.editor-body{padding:36px 40px;min-height:260px;font-size:18px;line-height:1.85}
.editor-body .cursor{display:inline-block;width:2px;height:22px;background:var(--iris);vertical-align:middle;margin-left:1px;animation:blink 1s step-end infinite}
@keyframes blink{50%{opacity:0}}
.suggest-chip{display:inline-flex;align-items:center;gap:6px;background:#f0ecff;color:var(--iris-d);border-radius:7px;padding:3px 9px;font-size:13px;font-family:Inter,sans-serif;font-weight:600;margin:0 2px;opacity:0}
.suggest-chip svg{width:12px;height:12px}

/* ---------- logos ---------- */
.press{padding:40px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.press .lbl{text-align:center;font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:var(--mut);margin-bottom:22px;font-family:Inter,sans-serif}
.press-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:26px;opacity:.55}
.press-row div{font-family:"Newsreader",serif;font-style:italic;font-weight:600;font-size:18px}

/* ---------- feature story ---------- */
.story{padding:120px 0}
.story-row{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center}
.story-row.rev .txt{order:2}
.story-row.rev .vis{order:1}
.story h2{font-size:clamp(28px,3.2vw,40px);font-style:italic}
.story p.body{font-size:16px;line-height:1.8;max-width:420px;margin-top:16px;font-family:Inter,sans-serif}
.vis{background:var(--card);border:1px solid var(--line);border-radius:20px;box-shadow:0 26px 56px rgba(28,26,23,.08);padding:28px}
.tone-row{display:flex;gap:8px;margin-bottom:18px;font-family:Inter,sans-serif}
.tone-chip{font-size:12px;padding:5px 12px;border-radius:16px;background:#f4f2ee;color:var(--mut)}
.tone-chip.on{background:var(--iris);color:#fff}
.sample-text{font-size:15px;line-height:1.75;color:var(--ink)}
.diff-old{text-decoration:line-through;color:#c8938f;background:#fdf0ef;padding:0 3px;border-radius:3px}
.diff-new{color:var(--iris-d);background:#f0ecff;padding:0 3px;border-radius:3px}

/* ---------- pinned rewrite ---------- */
.rewrite-sec{position:relative;background:var(--ink);color:#faf9f6}
.rewrite-head{text-align:center;padding:120px 0 0;max-width:560px;margin:0 auto}
.rewrite-head h2{color:#faf9f6;font-size:clamp(28px,3.4vw,42px);font-style:italic}
.rewrite-head p{color:rgba(250,249,246,.55);margin-top:12px;font-family:Inter,sans-serif}
.rewrite-pin{height:100vh;display:flex;align-items:center;justify-content:center}
.rewrite-card{width:min(680px,90vw);background:#252220;border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:36px 40px;font-size:18px;line-height:1.9}
.rewrite-badge{display:inline-flex;align-items:center;gap:6px;font-size:11.5px;font-family:Inter,sans-serif;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:var(--rose);margin-bottom:18px}
#rwTarget{transition:none;border-radius:4px}

/* ---------- stats ---------- */
.stats{padding:100px 0;text-align:center}
.stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
.stat b{display:block;font-family:"Newsreader",serif;font-size:clamp(30px,3.6vw,44px);font-weight:600;font-style:italic}
.stat span{display:block;margin-top:8px;font-size:13px;color:var(--mut);font-family:Inter,sans-serif}

/* ---------- testimonials ---------- */
.testi{padding:0 0 120px}
.testi-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.tcard{background:var(--card);border:1px solid var(--line);border-radius:18px;padding:26px;transition:transform .3s,box-shadow .3s}
.tcard:hover{transform:translateY(-6px);box-shadow:0 22px 46px rgba(28,26,23,.1)}
.tcard p{font-size:15.5px;line-height:1.7;color:var(--ink);font-style:italic}
.tcard .who{margin-top:16px;font-size:13px;color:var(--mut);font-family:Inter,sans-serif}

/* ---------- final cta ---------- */
.final{padding:0 0 120px}
.final-box{position:relative;background:linear-gradient(135deg,#efe9ff,#faf9f6);border:1px solid var(--line);border-radius:28px;padding:90px 40px;text-align:center}
.final-box h2{font-size:clamp(30px,4.2vw,48px);font-style:italic}
.final-box p{margin:16px auto 0;max-width:420px;font-size:16px;font-family:Inter,sans-serif}
.final-box .cta{justify-content:center;margin-top:30px;display:flex;gap:14px}

/* ---------- footer ---------- */
footer{border-top:1px solid var(--line);padding:56px 0 30px}
.foot-top{display:flex;justify-content:space-between;gap:40px;flex-wrap:wrap;padding-bottom:36px;border-bottom:1px solid var(--line)}
.foot-brand p{max-width:280px;margin-top:12px;font-size:14px;line-height:1.6;font-family:Inter,sans-serif}
.foot-cols{display:flex;gap:56px}
.foot-col h6{font-size:12px;text-transform:uppercase;letter-spacing:.05em;color:var(--mut);margin-bottom:15px;font-family:Inter,sans-serif}
.foot-col a{display:block;font-size:14px;color:var(--ink);margin-bottom:9px;text-decoration:none;opacity:.8;font-family:Inter,sans-serif}
.foot-col a:hover{opacity:1;color:var(--iris)}
.foot-bottom{display:flex;justify-content:space-between;padding-top:24px;font-size:12.5px;color:var(--mut);font-family:Inter,sans-serif}

@media(max-width:900px){
  .story-row{grid-template-columns:1fr}
  .story-row.rev .txt{order:1}
  .story-row.rev .vis{order:2}
  .stats-grid{grid-template-columns:repeat(2,1fr);gap:28px}
  .testi-grid{grid-template-columns:1fr}
  .nav-links{display:none}
}
@media(max-width:600px){
  .foot-top{flex-direction:column;gap:28px}
  .foot-cols{gap:30px;flex-wrap:wrap}
  .editor-body{padding:26px 22px;font-size:16px}
  .rewrite-card{padding:26px 24px;font-size:15.5px}
}
@media(prefers-reduced-motion:reduce){
  .rv{opacity:1!important;transform:none!important}
}
</style></head>
<body data-cf-keep-dark>

<nav class="nav" id="nav">
  <div class="nav-in">
    <div class="brand">Marginalia</div>
    <div class="nav-links"><a>Editor</a><a>Tone</a><a>Pricing</a><a>Blog</a></div>
    <div class="nav-right"><span class="lg">Log in</span><button class="btn btn-iris">Start writing</button></div>
  </div>
</nav>

<section class="hero">
  <div class="wrap hero-in">
    <span class="eb rv">Your next draft, already better</span>
    <h1 class="rv">Write like you, only with fewer second drafts.</h1>
    <p class="lead rv">Marginalia rewrites in your own voice, tightens what's loose, and never sounds like a robot pretending to be a person.</p>
    <div class="cta rv"><button class="btn btn-iris">Start writing free</button><button class="btn btn-line">Watch it edit</button></div>
  </div>
  <div class="wrap editor-wrap">
    <div class="editor rv" id="editorBox">
      <div class="editor-top"><div class="l"><i></i><i></i><i></i></div><div class="r"><b></b>Marginalia — draft.md</div></div>
      <div class="editor-body" id="editorBody"></div>
    </div>
  </div>
</section>

<section class="press">
  <div class="wrap">
    <div class="lbl">Trusted by writers at</div>
    <div class="press-row"><div>The Gentle Press</div><div>Kinfolk</div><div>Bon Appétit</div><div>Cherry Bombe</div><div>Well+Good</div></div>
  </div>
</section>

<section class="story">
  <div class="wrap story-row">
    <div class="txt">
      <span class="eb rv">Match your tone</span>
      <h2 class="rv">Formal for the board. Loose for the newsletter.</h2>
      <p class="body rv">One slider, five tones — Marginalia rewrites the same paragraph to fit wherever it's going.</p>
    </div>
    <div class="vis rv">
      <div class="tone-row"><span class="tone-chip">Playful</span><span class="tone-chip on">Confident</span><span class="tone-chip">Formal</span><span class="tone-chip">Warm</span></div>
      <p class="sample-text">Our Q3 numbers <span class="diff-old">were kind of okay, we think</span><span class="diff-new">exceeded projection by 14%</span>, driven mostly by the new onboarding flow.</p>
    </div>
  </div>
</section>

<section class="story">
  <div class="wrap story-row rev">
    <div class="txt">
      <span class="eb rv">Stay you</span>
      <h2 class="rv">It learns your sentences, not a template.</h2>
      <p class="body rv">Marginalia studies fifty pages of your own writing before it ever suggests a word — so suggestions sound like you on a good day.</p>
    </div>
    <div class="vis rv">
      <div class="tone-row"><span class="tone-chip on">Your voice</span><span class="tone-chip">Generic AI</span></div>
      <p class="sample-text">I've been circling this idea for weeks and <span class="diff-new">still can't quite pin down why it matters</span> — but I keep coming back to it anyway.</p>
    </div>
  </div>
</section>

<section class="rewrite-sec">
  <div class="rewrite-head">
    <span class="eb rv" style="color:var(--rose)">Live rewrite</span>
    <h2 class="rv">Watch one sentence get tightened.</h2>
    <p class="rv">Scroll to step through the edit.</p>
  </div>
  <div class="rewrite-pin" id="rewritePin">
    <div class="rewrite-card">
      <div class="rewrite-badge" id="rewriteBadge">● Analyzing</div>
      <span>I just wanted to reach out and let you know that we are, at this point in time, <span id="rwTarget">more or less ready to</span> proceed with the launch.</span>
    </div>
  </div>
</section>

<section class="stats">
  <div class="wrap stats-grid">
    <div class="stat"><b data-count="40" data-suffix="%">0</b><span>Fewer edit rounds</span></div>
    <div class="stat"><b data-count="2100000" data-suffix="+">0</b><span>Drafts rewritten</span></div>
    <div class="stat"><b data-count="5">0</b><span>Tone presets</span></div>
    <div class="stat"><b data-count="4" data-suffix=".8★">0</b><span>Average rating</span></div>
  </div>
</section>

<section class="testi">
  <div class="wrap">
    <div class="testi-grid">
      <div class="tcard rv2"><p>"The tone slider alone saved me from three awkward client emails this week."</p><div class="who">— Priya, freelance copywriter</div></div>
      <div class="tcard rv2"><p>"First AI writing tool that doesn't make everything sound like a LinkedIn post."</p><div class="who">— Marcus, newsletter writer</div></div>
      <div class="tcard rv2"><p>"It genuinely learned my voice. My editor stopped flagging 'AI-sounding' passages."</p><div class="who">— Dana, journalist</div></div>
    </div>
  </div>
</section>

<section class="final">
  <div class="wrap">
    <div class="final-box rv">
      <h2>Your next draft is one rewrite away.</h2>
      <p>Free for your first 20 rewrites, no card required.</p>
      <div class="cta"><button class="btn btn-iris">Start writing free</button></div>
    </div>
  </div>
</section>

<footer>
  <div class="wrap">
    <div class="foot-top">
      <div class="foot-brand">
        <div class="brand">Marginalia</div>
        <p>AI rewriting that stays in your own voice.</p>
      </div>
      <div class="foot-cols">
        <div class="foot-col"><h6>Product</h6><a>Editor</a><a>Tone presets</a><a>API</a></div>
        <div class="foot-col"><h6>Company</h6><a>About</a><a>Careers</a><a>Journal</a></div>
        <div class="foot-col"><h6>Support</h6><a>Help center</a><a>Contact</a><a>Status</a></div>
      </div>
    </div>
    <div class="foot-bottom"><span>© 2026 Marginalia Inc.</span><span>Privacy · Terms</span></div>
  </div>
</footer>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script>
(function(){
  var nav = document.getElementById("nav");
  document.addEventListener("scroll", function(){ nav.classList.toggle("on", window.scrollY > 14); }, { passive: true });

  function fmt(n, suffix){
    var v = Math.round(n);
    var s = v >= 1000000 ? (v/1000000).toFixed(1).replace(/\.0$/,"") + "M" : v >= 1000 ? (v/1000).toFixed(1).replace(/\.0$/,"") + "K" : String(v);
    return s + (suffix || "");
  }

  // Typewriter effect in the hero editor: types a sentence, then shows an
  // AI suggestion chip appearing beside it, looping.
  var script = [
    { text: "The onboarding flow still feels ", chip: null },
    { text: "clunky", chip: { label: "Try: “unwieldy”", icon: true } },
    { text: " in the second step.", chip: null }
  ];
  var editorBody = document.getElementById("editorBody");

  function typeEditor(){
    editorBody.innerHTML = "";
    var textNode = document.createElement("span");
    editorBody.appendChild(textNode);
    var cursor = document.createElement("span");
    cursor.className = "cursor";
    editorBody.appendChild(cursor);
    var si = 0;
    function nextSeg(){
      if (si >= script.length) {
        gsap.delayedCall(2.2, typeEditor);
        return;
      }
      var seg = script[si], ci = 0;
      var iv = setInterval(function(){
        textNode.textContent += seg.text[ci];
        ci++;
        if (ci >= seg.text.length) {
          clearInterval(iv);
          if (seg.chip) {
            var chip = document.createElement("span");
            chip.className = "suggest-chip";
            chip.textContent = seg.chip.label;
            editorBody.insertBefore(chip, cursor);
            if (window.gsap) gsap.to(chip, { opacity: 1, duration: .3 }); else chip.style.opacity = 1;
          }
          si++;
          setTimeout(nextSeg, seg.chip ? 500 : 120);
        }
      }, 28);
    }
    nextSeg();
  }

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!window.gsap || !window.ScrollTrigger || reduced) {
    document.querySelectorAll(".rv,.rv2").forEach(function(el){ el.style.opacity = 1; el.style.transform = "none"; });
    document.querySelectorAll(".stat b[data-count]").forEach(function(el){ el.textContent = fmt(+el.dataset.count, el.dataset.suffix); });
    editorBody.textContent = "The onboarding flow still feels unwieldy in the second step.";
    document.getElementById("rwTarget").textContent = "ready to";
    document.getElementById("rwTarget").style.color = "#c9c0ff";
    document.getElementById("rewriteBadge").textContent = "● Rewritten";
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  var tl = gsap.timeline({ defaults: { ease: "power3.out" } });
  tl.to(".hero-in .rv", { opacity: 1, y: 0, duration: .8, stagger: .08 })
    .fromTo("#editorBox", { opacity: 0, y: 40, scale: .97 }, { opacity: 1, y: 0, scale: 1, duration: .9 }, "-=.5")
    .call(typeEditor, null, "-=.2");

  document.querySelectorAll(".rv").forEach(function(el){
    if (el.closest(".hero")) return;
    gsap.to(el, { opacity: 1, y: 0, duration: .85, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%" } });
  });
  document.querySelectorAll(".rv2").forEach(function(el){
    gsap.from(el, { opacity: 0, y: 26, duration: .7, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%" } });
  });
  gsap.from(".press-row div", { opacity: 0, y: 10, stagger: .06, duration: .6, scrollTrigger: { trigger: ".press-row", start: "top 90%" } });

  // Pinned rewrite: the status badge shifts from "Analyzing" to "Rewriting"
  // to "Done", then the struck-through phrase swaps for the tightened one —
  // all scrubbed to scroll so the reader controls the pace of the edit.
  var badge = document.getElementById("rewriteBadge");
  var target = document.getElementById("rwTarget");
  var rewriteTl = gsap.timeline({
    scrollTrigger: { trigger: "#rewritePin", start: "top top", end: "+=190%", pin: true, scrub: .5 }
  });
  rewriteTl
    .to({}, { duration: .2, onStart: function(){ badge.textContent = "● Analyzing"; } })
    .to({}, { duration: .2, onStart: function(){ badge.textContent = "● Rewriting"; } })
    .to(target, { color: "#e8a5a5", duration: .2, onStart: function(){ target.style.textDecoration = "line-through"; } })
    .to(target, {
      duration: .01,
      onComplete: function(){
        target.textContent = "ready to";
        target.style.textDecoration = "none";
        badge.textContent = "● Done";
      }
    }, "+=.15")
    .fromTo(target, { color: "#e8a5a5" }, { color: "#c9c0ff", backgroundColor: "rgba(106,92,255,.18)", duration: .3 });

  ScrollTrigger.create({
    trigger: ".stats", start: "top 80%", once: true,
    onEnter: function(){
      document.querySelectorAll(".stat b[data-count]").forEach(function(el){
        var target = +el.dataset.count, suffix = el.dataset.suffix || "", o = { v: 0 };
        gsap.to(o, { v: target, duration: 1.8, ease: "power2.out", onUpdate: function(){ el.textContent = fmt(o.v, suffix); } });
      });
    }
  });

  window.addEventListener("load", function(){ ScrollTrigger.refresh(); });
})();
</script>
</body></html>
`,

  "animated-stats-band": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Lindwell Studio Landing Page</title><style>
:root{--stone:#efeae2;--ink:#211f1c;--mut:#7c766a;--clay:#b5663f;--clay-d:#9a5231;--line:#ddd5c6;--card:#fff}
*{box-sizing:border-box}
body{margin:0;background:var(--stone);color:var(--ink);font-family:Inter,ui-sans-serif,system-ui,sans-serif;-webkit-font-smoothing:antialiased;overflow-x:hidden}
h1,h2,h3{font-family:"Cormorant Garamond","Georgia",serif;margin:0;font-weight:500;letter-spacing:0;color:var(--ink)}
p{margin:0;color:var(--mut)}
button{font-family:inherit;cursor:pointer;border:0}
.wrap{max-width:1200px;margin:0 auto;padding:0 32px}
.rv{opacity:0;transform:translateY(30px)}
.eb{display:inline-flex;align-items:center;gap:10px;font-size:11.5px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--clay-d);margin-bottom:16px}
.eb:before{content:"";width:24px;height:1px;background:var(--clay-d)}

/* ---------- buttons ---------- */
.btn{position:relative;display:inline-flex;align-items:center;gap:10px;border-radius:2px;padding:15px 26px;font-size:13.5px;font-weight:600;letter-spacing:.03em;text-transform:uppercase;transition:transform .3s cubic-bezier(.2,.8,.2,1),background .3s,color .3s}
.btn svg{width:14px;height:14px;flex:none;transition:transform .3s}
.btn:hover svg{transform:translateX(4px)}
.btn-ink{background:var(--ink);color:var(--stone)}
.btn-ink:hover{background:var(--clay-d)}
.btn-line{background:transparent;color:var(--ink);border:1px solid var(--ink)}
.btn-line:hover{background:var(--ink);color:var(--stone)}

/* ---------- nav ---------- */
.nav{position:sticky;top:0;z-index:60;transition:background .4s,box-shadow .4s}
.nav-in{max-width:1200px;margin:0 auto;padding:26px 32px;display:flex;align-items:center;gap:34px}
.nav.on{background:rgba(239,234,226,.9);backdrop-filter:blur(14px);box-shadow:0 1px 0 var(--line)}
.brand{font-family:"Cormorant Garamond",serif;font-size:24px;letter-spacing:.06em;text-transform:uppercase}
.nav-links{display:flex;gap:32px;margin:0 auto;font-size:12.5px;letter-spacing:.05em;text-transform:uppercase;color:var(--mut)}
.nav-links a{position:relative;cursor:pointer}
.nav-links a:after{content:"";position:absolute;left:0;bottom:-6px;width:100%;height:1px;background:var(--clay-d);transform:scaleX(0);transform-origin:right;transition:transform .35s cubic-bezier(.2,.8,.2,1)}
.nav-links a:hover{color:var(--ink)}
.nav-links a:hover:after{transform:scaleX(1);transform-origin:left}
.nav-right .lg{font-size:12.5px;letter-spacing:.05em;text-transform:uppercase;color:var(--mut)}

/* ---------- hero ---------- */
.hero{position:relative;padding:60px 0 0}
.hero-top{text-align:center;max-width:760px;margin:0 auto;padding-bottom:44px}
.hero .eb{justify-content:center}
.hero h1{font-size:clamp(40px,5.6vw,74px);line-height:1.08}
.hero h1 em{font-style:italic;color:var(--clay)}
.hero-photo{position:relative;height:66vh;min-height:440px;overflow:hidden}
.hero-photo .img{position:absolute;inset:-6% -6%;background:linear-gradient(150deg,#d8cdb9,#9b8f76 45%,#6f6656);will-change:transform}
.hero-photo .img:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(33,31,28,0) 40%,rgba(33,31,28,.45));}
.hero-photo .cap{position:absolute;bottom:28px;left:32px;color:#fff;font-size:12.5px;letter-spacing:.05em;text-transform:uppercase;display:flex;align-items:center;gap:10px}
.hero-photo .cap b{font-weight:600}
.hero-meta{display:flex;justify-content:space-between;padding:26px 0 60px;border-bottom:1px solid var(--line);font-size:13px;color:var(--mut)}
.hero-meta div b{display:block;color:var(--ink);font-family:"Cormorant Garamond",serif;font-size:20px;font-weight:500;margin-bottom:4px}

/* ---------- horizontal gallery ---------- */
.gallery-sec{padding:120px 0}
.gallery-head{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:44px}
.gallery-head h2{font-size:clamp(30px,3.4vw,44px)}
.gallery-nav{display:flex;gap:10px}
.gnav-btn{width:44px;height:44px;border-radius:50%;border:1px solid var(--ink);display:flex;align-items:center;justify-content:center;transition:background .3s,color .3s}
.gnav-btn:hover{background:var(--ink);color:var(--stone)}
.gnav-btn svg{width:16px;height:16px}
.gtrack-wrap{overflow:hidden}
.gtrack{display:flex;gap:24px;width:max-content}
.gcard{width:380px;flex:none}
.gcard .img{height:480px;overflow:hidden;position:relative}
.gcard .img i{position:absolute;inset:0;display:block;transition:transform .6s cubic-bezier(.2,.8,.2,1)}
.gcard:hover .img i{transform:scale(1.08)}
.gcard .meta{padding-top:16px;display:flex;justify-content:space-between;align-items:baseline}
.gcard .meta h4{font-size:20px;font-weight:500}
.gcard .meta span{font-size:12px;color:var(--mut);letter-spacing:.04em;text-transform:uppercase}

/* ---------- philosophy story ---------- */
.story{padding:0 0 130px}
.story-row{display:grid;grid-template-columns:1fr 1fr;gap:70px;align-items:center}
.story h2{font-size:clamp(28px,3.2vw,42px);line-height:1.2}
.story p.body{font-size:16px;line-height:1.85;max-width:440px;margin-top:20px}
.num-row{display:flex;gap:40px;margin-top:34px}
.num-row div b{display:block;font-family:"Cormorant Garamond",serif;font-size:38px;font-weight:500;color:var(--clay-d)}
.num-row div span{font-size:12px;color:var(--mut);letter-spacing:.04em;text-transform:uppercase}
.story-vis{position:relative;height:520px;overflow:hidden}
.story-vis .img{position:absolute;inset:-8%;background:linear-gradient(155deg,#c9bda3,#84775e)}

/* ---------- pinned site-to-structure ---------- */
.morph-sec{position:relative;background:var(--ink);color:var(--stone)}
.morph-head{text-align:center;padding:120px 0 0;max-width:600px;margin:0 auto}
.morph-head .eb{color:#d8ab8c}
.morph-head .eb:before{background:#d8ab8c}
.morph-head h2{color:var(--stone);font-size:clamp(28px,3.4vw,42px)}
.morph-pin{height:100vh;display:flex;align-items:center;justify-content:center}
.morph-frame{position:relative;width:min(760px,88vw);height:min(52vw,460px);overflow:hidden}
.morph-layer{position:absolute;inset:0}
.morph-layer .img{position:absolute;inset:-8%}
.morph-label{position:absolute;bottom:20px;left:20px;color:#fff;font-size:12px;letter-spacing:.06em;text-transform:uppercase;background:rgba(0,0,0,.35);padding:7px 13px;backdrop-filter:blur(6px)}

/* ---------- stats ---------- */
.stats{padding:100px 0;border-top:1px solid rgba(239,234,226,.15);border-bottom:1px solid rgba(239,234,226,.15)}
.stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;text-align:center}
.stat b{display:block;font-family:"Cormorant Garamond",serif;font-size:clamp(34px,4vw,52px);font-weight:500;color:var(--stone)}
.stat span{display:block;margin-top:8px;font-size:12px;color:rgba(239,234,226,.55);letter-spacing:.04em;text-transform:uppercase}

/* ---------- testimonial ---------- */
.testi{padding:130px 0;background:var(--ink);color:var(--stone)}
.testi-card{max-width:760px;margin:0 auto;text-align:center}
.testi-card p{font-family:"Cormorant Garamond",serif;font-size:clamp(24px,2.8vw,34px);line-height:1.4;color:var(--stone);font-style:italic}
.testi-card .who{margin-top:26px;font-size:12.5px;color:rgba(239,234,226,.55);letter-spacing:.05em;text-transform:uppercase}

/* ---------- final cta ---------- */
.final{padding:130px 0;text-align:center}
.final h2{font-size:clamp(32px,4.6vw,56px);max-width:700px;margin:0 auto}
.final p{margin:20px auto 0;max-width:440px;font-size:15px}
.final .cta{margin-top:36px;display:flex;gap:14px;justify-content:center}

/* ---------- footer ---------- */
footer{border-top:1px solid var(--line);padding:60px 0 30px}
.foot-top{display:flex;justify-content:space-between;gap:40px;flex-wrap:wrap;padding-bottom:40px;border-bottom:1px solid var(--line)}
.foot-brand p{max-width:280px;margin-top:14px;font-size:14px;line-height:1.6}
.foot-cols{display:flex;gap:60px}
.foot-col h6{font-size:11.5px;text-transform:uppercase;letter-spacing:.06em;color:var(--mut);margin-bottom:16px}
.foot-col a{display:block;font-size:14px;color:var(--ink);margin-bottom:10px;text-decoration:none;opacity:.8}
.foot-col a:hover{opacity:1;color:var(--clay-d)}
.foot-bottom{display:flex;justify-content:space-between;padding-top:26px;font-size:12.5px;color:var(--mut)}

@media(max-width:900px){
  .story-row{grid-template-columns:1fr}
  .story-vis{height:360px}
  .stats-grid{grid-template-columns:repeat(2,1fr);gap:30px}
  .nav-links{display:none}
  .gallery-head{flex-direction:column;align-items:flex-start;gap:20px}
}
@media(max-width:600px){
  .foot-top{flex-direction:column;gap:30px}
  .foot-cols{gap:34px;flex-wrap:wrap}
  .num-row{gap:26px}
  .gcard{width:280px}
  .gcard .img{height:360px}
}
@media(prefers-reduced-motion:reduce){
  .rv{opacity:1!important;transform:none!important}
}
</style></head>
<body data-cf-keep-dark>

<nav class="nav" id="nav">
  <div class="nav-in">
    <div class="brand">Lindwell</div>
    <div class="nav-links"><a>Work</a><a>Studio</a><a>Journal</a><a>Contact</a></div>
    <div class="nav-right" style="margin-left:auto"><span class="lg">Enquire</span></div>
  </div>
</nav>

<section class="hero">
  <div class="wrap hero-top">
    <span class="eb rv">Architecture &amp; interiors, since 2011</span>
    <h1 class="rv">Spaces that hold <em>still</em>, long after the noise leaves.</h1>
  </div>
  <div class="hero-photo rv" id="heroPhoto">
    <div class="img" id="heroImg"></div>
    <div class="cap">Selected work <b>— Meridian House, 2025</b></div>
  </div>
  <div class="wrap hero-meta rv">
    <div><b>84</b>Projects completed</div>
    <div><b>13</b>Design awards</div>
    <div><b>19</b>Cities worked in</div>
    <div><b>2011</b>Studio founded</div>
  </div>
</section>

<section class="gallery-sec">
  <div class="wrap">
    <div class="gallery-head">
      <div><span class="eb rv">Selected work</span><h2 class="rv">A studio for quiet architecture.</h2></div>
      <div class="gallery-nav rv">
        <button class="gnav-btn" id="gPrev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M15 18l-6-6 6-6"/></svg></button>
        <button class="gnav-btn" id="gNext"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 18l6-6-6-6"/></svg></button>
      </div>
    </div>
  </div>
  <div class="gtrack-wrap wrap">
    <div class="gtrack rv" id="gTrack">
      <div class="gcard"><div class="img"><i style="background:linear-gradient(155deg,#d8cdb9,#8f8367)"></i></div><div class="meta"><h4>Meridian House</h4><span>Residential</span></div></div>
      <div class="gcard"><div class="img"><i style="background:linear-gradient(155deg,#cbb8a0,#6f6250)"></i></div><div class="meta"><h4>Cane &amp; Stone Studio</h4><span>Workspace</span></div></div>
      <div class="gcard"><div class="img"><i style="background:linear-gradient(155deg,#c2c7b9,#767a68)"></i></div><div class="meta"><h4>Willowmere Pavilion</h4><span>Cultural</span></div></div>
      <div class="gcard"><div class="img"><i style="background:linear-gradient(155deg,#d3c4ae,#8a7a5e)"></i></div><div class="meta"><h4>The Kiln House</h4><span>Residential</span></div></div>
      <div class="gcard"><div class="img"><i style="background:linear-gradient(155deg,#bfb6a4,#665d4e)"></i></div><div class="meta"><h4>North Ridge Retreat</h4><span>Hospitality</span></div></div>
    </div>
  </div>
</section>

<section class="story">
  <div class="wrap story-row">
    <div class="story-vis rv"><div class="img"></div></div>
    <div>
      <span class="eb rv">Our approach</span>
      <h2 class="rv">We design from the site inward, never the render outward.</h2>
      <p class="body rv">Every project begins with weeks on the land before a single line is drawn — light, wind, the way a room will sound at 7am.</p>
      <div class="num-row rv"><div><b>6</b><span>Months, avg. design phase</span></div><div><b>92%</b><span>Client referral rate</span></div></div>
    </div>
  </div>
</section>

<section class="morph-sec">
  <div class="morph-head">
    <span class="eb rv">From site to structure</span>
    <h2 class="rv">Watch a clearing become a home.</h2>
  </div>
  <div class="morph-pin" id="morphPin">
    <div class="morph-frame">
      <div class="morph-layer" id="ml0"><div class="img" style="background:linear-gradient(155deg,#8a9169,#4f5540)"></div></div>
      <div class="morph-layer" id="ml1"><div class="img" style="background:linear-gradient(155deg,#a99b7c,#6b5e46)"></div></div>
      <div class="morph-layer" id="ml2"><div class="img" style="background:linear-gradient(155deg,#d8cdb9,#8f8367)"></div></div>
      <div class="morph-label" id="morphLabel">Site survey — week 1</div>
    </div>
  </div>
</section>

<section class="stats">
  <div class="wrap stats-grid">
    <div class="stat"><b data-count="84">0</b><span>Projects completed</span></div>
    <div class="stat"><b data-count="13">0</b><span>Design awards</span></div>
    <div class="stat"><b data-count="19">0</b><span>Cities worked in</span></div>
    <div class="stat"><b data-count="14">0</b><span>Years in practice</span></div>
  </div>
</section>

<section class="testi">
  <div class="wrap">
    <div class="testi-card rv">
      <p>"They spent three weeks just watching how light moved through the site before drawing anything. The house still feels like it grew there."</p>
      <div class="who">— Naomi &amp; Theo Reyes, Meridian House</div>
    </div>
  </div>
</section>

<section class="final">
  <div class="wrap">
    <div class="rv">
      <span class="eb rv" style="justify-content:center">Start a project</span>
      <h2>Tell us about the site. We'll listen first.</h2>
      <p>We take on a small number of projects each year — enquire early.</p>
      <div class="cta"><button class="btn btn-ink">Enquire about a project <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M7 7h10v10"/></svg></button><button class="btn btn-line">View the full portfolio</button></div>
    </div>
  </div>
</section>

<footer>
  <div class="wrap">
    <div class="foot-top">
      <div class="foot-brand">
        <div class="brand">Lindwell</div>
        <p>An architecture and interiors studio designing from the site inward.</p>
      </div>
      <div class="foot-cols">
        <div class="foot-col"><h6>Studio</h6><a>Work</a><a>About</a><a>Journal</a></div>
        <div class="foot-col"><h6>Connect</h6><a>Enquire</a><a>Careers</a><a>Press</a></div>
        <div class="foot-col"><h6>Follow</h6><a>Instagram</a><a>Pinterest</a><a>LinkedIn</a></div>
      </div>
    </div>
    <div class="foot-bottom"><span>© 2026 Lindwell Studio.</span><span>Privacy · Terms</span></div>
  </div>
</footer>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script>
(function(){
  var nav = document.getElementById("nav");
  document.addEventListener("scroll", function(){ nav.classList.toggle("on", window.scrollY > 14); }, { passive: true });

  function fmt(n){ return String(Math.round(n)); }

  var track = document.getElementById("gTrack");
  function scrollGallery(dir){
    track.scrollBy ? null : null;
    var amount = 404;
    if (window.gsap) {
      gsap.to(track, { x: "-=" + (dir * amount), duration: .6, ease: "power2.out", modifiers: {
        x: function(x){
          var min = -(track.scrollWidth - track.parentElement.clientWidth);
          var n = parseFloat(x);
          if (n > 0) n = 0;
          if (n < min) n = min;
          return n + "px";
        }
      }});
    }
  }
  document.getElementById("gNext").addEventListener("click", function(){ scrollGallery(1); });
  document.getElementById("gPrev").addEventListener("click", function(){ scrollGallery(-1); });

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!window.gsap || !window.ScrollTrigger || reduced) {
    document.querySelectorAll(".rv").forEach(function(el){ el.style.opacity = 1; el.style.transform = "none"; });
    document.querySelectorAll(".stat b[data-count]").forEach(function(el){ el.textContent = fmt(+el.dataset.count); });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  var tl = gsap.timeline({ defaults: { ease: "power3.out" } });
  tl.to(".hero-top .rv", { opacity: 1, y: 0, duration: .85, stagger: .1 })
    .fromTo("#heroPhoto", { opacity: 0, scale: 1.04 }, { opacity: 1, scale: 1, duration: 1.1 }, "-=.5")
    .to(".hero-meta.rv", { opacity: 1, y: 0, duration: .7 }, "-=.4");

  // Hero photo: slow continuous zoom, classic editorial "Ken Burns" drift,
  // plus an extra parallax nudge tied to scroll.
  gsap.to("#heroImg", { scale: 1.12, duration: 14, ease: "sine.inOut", yoyo: true, repeat: -1 });
  gsap.to("#heroImg", { y: 40, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });

  document.querySelectorAll(".rv").forEach(function(el){
    if (el.closest(".hero")) return;
    gsap.to(el, { opacity: 1, y: 0, duration: .9, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%" } });
  });

  // Horizontal gallery: hover-tilted image zoom is pure CSS; add a subtle
  // scroll-linked parallax so the whole row drifts slightly as it enters.
  gsap.from("#gTrack .gcard", { opacity: 0, x: 40, stagger: .08, duration: .8, scrollTrigger: { trigger: "#gTrack", start: "top 85%" } });

  document.querySelectorAll(".story-vis").forEach(function(vis){
    gsap.to(vis.querySelector(".img"), { y: -30, ease: "none", scrollTrigger: { trigger: vis, start: "top bottom", end: "bottom top", scrub: true } });
  });

  // Pinned site-to-structure: three photo layers crossfade in sequence with
  // a slow zoom on each, captions updating in sync, all scrubbed to scroll.
  var labels = ["Site survey — week 1", "Framing — month 3", "Completed — month 11"];
  var labelEl = document.getElementById("morphLabel");
  gsap.set(["#ml1", "#ml2"], { opacity: 0 });
  gsap.set("#ml0 .img,#ml1 .img,#ml2 .img", { scale: 1.15 });
  var morphTl = gsap.timeline({
    scrollTrigger: { trigger: "#morphPin", start: "top top", end: "+=200%", pin: true, scrub: .6 }
  });
  morphTl
    .to("#ml0 .img", { scale: 1, duration: .33, ease: "none" })
    .to("#ml0", { opacity: 0, duration: .33, onStart: function(){ labelEl.textContent = labels[1]; } })
    .to("#ml1", { opacity: 1, duration: .33 }, "<")
    .to("#ml1 .img", { scale: 1, duration: .33, ease: "none" }, "<")
    .to("#ml1", { opacity: 0, duration: .33, onStart: function(){ labelEl.textContent = labels[2]; } }, "+=.05")
    .to("#ml2", { opacity: 1, duration: .33 }, "<")
    .to("#ml2 .img", { scale: 1, duration: .33, ease: "none" }, "<");

  ScrollTrigger.create({
    trigger: ".stats", start: "top 80%", once: true,
    onEnter: function(){
      document.querySelectorAll(".stat b[data-count]").forEach(function(el){
        var target = +el.dataset.count, o = { v: 0 };
        gsap.to(o, { v: target, duration: 1.6, ease: "power2.out", onUpdate: function(){ el.textContent = fmt(o.v); } });
      });
    }
  });

  window.addEventListener("load", function(){ ScrollTrigger.refresh(); });
})();
</script>
</body></html>
`,

  "elastic-press-button": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Elastic Press Button</title><style>
:root{--bg:#0a0a10;--line:#24242e;--blue:#4f5bff}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.kicker{color:#7a7d96;font-size:10px;letter-spacing:2px;font-weight:700;text-align:center;margin-bottom:22px}
.btn{padding:17px 36px;border:0;border-radius:999px;font-size:13.5px;font-weight:700;color:#fff;cursor:pointer;background:linear-gradient(135deg,#4f5bff,#2f37c9);transition:transform .12s}
.btn.press{transform:scale(.9)}
.btn.pop{animation:pop .5s cubic-bezier(.34,1.56,.64,1)}
@keyframes pop{0%{transform:scale(.9)}60%{transform:scale(1.08)}100%{transform:scale(1)}}
</style></head>
<body data-cf-keep-dark>
<div><div class="kicker">PRESS AND HOLD, THEN RELEASE</div><button class="btn" id="btn">Download now</button></div>
<script>
var btn=document.getElementById("btn");
btn.addEventListener("mousedown",function(){ btn.classList.remove("pop"); btn.classList.add("press"); });
function release(){
  if(btn.classList.contains("press")){ btn.classList.remove("press"); btn.classList.add("pop"); setTimeout(function(){ btn.classList.remove("pop"); },500); }
}
btn.addEventListener("mouseup",release);
btn.addEventListener("mouseleave",release);
</script>
</body></html>
`,

  "split-hover-button": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Split Hover Button</title><style>
:root{--bg:#0a0a10;--line:#24242e;--blue:#4f5bff}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.kicker{color:#7a7d96;font-size:10px;letter-spacing:2px;font-weight:700;text-align:center;margin-bottom:22px}
.btn{position:relative;padding:17px 40px;border:1px solid var(--line);border-radius:12px;font-size:13.5px;font-weight:700;color:#fff;cursor:pointer;background:#14141d;overflow:hidden}
.btn .txt{position:relative;z-index:1;transition:transform .3s cubic-bezier(.2,.8,.2,1)}
.btn:hover .txt{transform:translateX(-8px)}
.btn .ic{position:absolute;right:20px;top:50%;transform:translate(20px,-50%);width:15px;height:15px;opacity:0;transition:transform .3s cubic-bezier(.2,.8,.2,1),opacity .3s;z-index:1}
.btn:hover .ic{transform:translate(0,-50%);opacity:1}
.split{position:absolute;top:0;bottom:0;width:50%;background:var(--blue);transition:transform .35s cubic-bezier(.2,.8,.2,1)}
.split.l{left:0;transform:translateX(-100%)}
.split.r{right:0;transform:translateX(100%)}
.btn:hover .split{transform:translateX(0)}
</style></head>
<body data-cf-keep-dark>
<div><div class="kicker">HOVER TO REVEAL THE ARROW</div><button class="btn" id="btn"><span class="split l"></span><span class="split r"></span><span class="txt">Get started</span><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M7 17 17 7M7 7h10v10"/></svg></button></div>
</body></html>
`,

  "long-press-confirm-button": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Long Press Confirm Button</title><style>
:root{--bg:#0a0a10;--line:#24242e;--blue:#4f5bff;--red:#ff5a5a}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.kicker{color:#7a7d96;font-size:10px;letter-spacing:2px;font-weight:700;text-align:center;margin-bottom:22px}
.btn{position:relative;padding:16px 30px;border:1px solid var(--line);border-radius:12px;font-size:13px;font-weight:700;color:#fff;cursor:pointer;background:#14141d;overflow:hidden;user-select:none}
.fill{position:absolute;inset:0;background:var(--red);width:0;transition:none}
.fill.animating{transition:width 1.1s linear}
.txt{position:relative;z-index:1;display:flex;align-items:center;gap:8px}
.txt svg{width:14px;height:14px}
.done{color:#8fffa8}
</style></head>
<body data-cf-keep-dark>
<div><div class="kicker">PRESS AND HOLD TO DELETE</div><button class="btn" id="btn"><span class="fill" id="fill"></span><span class="txt" id="txt"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6"/></svg>Hold to delete</span></button></div>
<script>
var btn=document.getElementById("btn"), fill=document.getElementById("fill"), txt=document.getElementById("txt"), timer=null;
function start(){
  fill.classList.add("animating");
  fill.style.width="100%";
  timer=setTimeout(function(){
    txt.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg>Deleted';
    txt.classList.add("done");
  },1100);
}
function cancel(){
  clearTimeout(timer);
  fill.classList.remove("animating");
  fill.style.width="0";
}
btn.addEventListener("mousedown",start);
btn.addEventListener("mouseup",cancel);
btn.addEventListener("mouseleave",cancel);
</script>
</body></html>
`,

  "cursor-follow-glow-button": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Cursor Follow Glow Button</title><style>
:root{--bg:#0a0a10;--line:#24242e;--blue:#4f5bff}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.kicker{color:#7a7d96;font-size:10px;letter-spacing:2px;font-weight:700;text-align:center;margin-bottom:22px}
.btn{position:relative;padding:17px 36px;border:1px solid var(--line);border-radius:12px;font-size:13.5px;font-weight:700;color:#fff;cursor:pointer;background:#101018;overflow:hidden}
.glow{position:absolute;width:140px;height:140px;border-radius:50%;background:radial-gradient(circle,rgba(79,91,255,.5),transparent 70%);pointer-events:none;opacity:0;transition:opacity .25s;transform:translate(-50%,-50%)}
.btn:hover .glow{opacity:1}
.btn span{position:relative;z-index:1}
</style></head>
<body data-cf-keep-dark>
<div><div class="kicker">MOVE YOUR CURSOR WITHIN THE BUTTON</div><button class="btn" id="btn"><span class="glow" id="glow"></span><span>Explore features</span></button></div>
<script>
var btn=document.getElementById("btn"), glow=document.getElementById("glow");
btn.addEventListener("mousemove",function(e){
  var r=btn.getBoundingClientRect();
  glow.style.left=(e.clientX-r.left)+"px";
  glow.style.top=(e.clientY-r.top)+"px";
});
</script>
</body></html>
`,

  "toggle-icon-morph-button": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Toggle Icon Morph Button</title><style>
:root{--bg:#0a0a10;--line:#24242e;--red:#ff4d6d}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.kicker{color:#7a7d96;font-size:10px;letter-spacing:2px;font-weight:700;text-align:center;margin-bottom:22px}
.btn{display:flex;align-items:center;gap:9px;padding:14px 24px;border:1px solid var(--line);border-radius:999px;font-size:13px;font-weight:600;color:#fff;cursor:pointer;background:#14141d}
.ic{width:19px;height:19px;position:relative}
.ic svg{position:absolute;inset:0;transition:transform .35s cubic-bezier(.34,1.56,.64,1),opacity .3s}
.outline{color:#7a7d96}
.filled{color:var(--red);opacity:0;transform:scale(.5)}
.btn.on .outline{opacity:0;transform:scale(.5)}
.btn.on .filled{opacity:1;transform:scale(1)}
.label span{transition:opacity .2s}
</style></head>
<body data-cf-keep-dark>
<div><div class="kicker">CLICK TO LIKE</div><button class="btn" id="btn">
  <span class="ic"><svg class="outline" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg><svg class="filled" viewBox="0 0 24 24" fill="currentColor"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg></span>
  <span class="label" id="label">Like</span>
</button></div>
<script>
var btn=document.getElementById("btn"), label=document.getElementById("label"), on=false;
btn.addEventListener("click",function(){
  on=!on; btn.classList.toggle("on",on);
  label.textContent = on ? "Liked" : "Like";
});
</script>
</body></html>
`,

  "stacked-3d-button": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Stacked 3D Button</title><style>
:root{--bg:#0a0a10;--blue:#4f5bff;--blue-d:#2f37c9}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.kicker{color:#7a7d96;font-size:10px;letter-spacing:2px;font-weight:700;text-align:center;margin-bottom:22px}
.stage{position:relative;padding-bottom:8px}
.shadow-layer{position:absolute;inset:0;top:8px;background:var(--blue-d);border-radius:12px}
.btn{position:relative;padding:16px 32px;border:0;border-radius:12px;font-size:13px;font-weight:700;color:#fff;cursor:pointer;background:var(--blue);transform:translateY(0);transition:transform .12s}
.btn:active{transform:translateY(6px)}
</style></head>
<body data-cf-keep-dark>
<div><div class="kicker">PRESS DOWN</div>
<div class="stage"><div class="shadow-layer"></div><button class="btn">Buy now — $29</button></div>
</div>
</body></html>
`,

  "magnetic-cursor-dot": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Magnetic Cursor Dot</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;display:grid;place-items:center;cursor:none}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700;display:block;text-align:center;margin-bottom:16px}
.targets{display:flex;gap:14px}
.targets button{padding:16px 22px;border:1px solid var(--line);border-radius:12px;background:#111017;color:#eee9f8;font-size:12px;cursor:none;box-shadow:0 16px 40px -22px rgba(0,0,0,.7);transition:border-color .2s}
.dot{position:fixed;width:10px;height:10px;border-radius:50%;background:linear-gradient(135deg,#d7d0ff,#9b8aff);box-shadow:0 0 12px rgba(196,181,253,.6);pointer-events:none;transform:translate(-50%,-50%);transition:width .2s,height .2s,background .2s,border-radius .2s,box-shadow .2s;z-index:9}
.dot.snap{box-shadow:0 0 0 6px rgba(196,181,253,.12)}
</style></head>
<body data-cf-keep-dark><div><span class="kicker">MOVE OVER A BUTTON — THE DOT SNAPS</span>
<div class="targets" id="targets"><button>Pricing</button><button>Docs</button><button>Sign in</button></div></div>
<div class="dot" id="dot"></div>
<script>
const dot=document.getElementById("dot");let tx=0,ty=0,x=0,y=0,snap=false,sx=0,sy=0;
document.addEventListener("pointermove",function(e){tx=e.clientX;ty=e.clientY});
document.querySelectorAll(".targets button").forEach(function(b){
  b.addEventListener("pointerenter",function(){const r=b.getBoundingClientRect();sx=r.left+r.width/2;sy=r.top+r.height/2;snap=true;dot.style.width="64px";dot.style.height="36px";dot.style.borderRadius="10px";dot.style.background="rgba(196,181,253,.2)";dot.classList.add("snap")});
  b.addEventListener("pointerleave",function(){snap=false;dot.style.width="10px";dot.style.height="10px";dot.style.borderRadius="50%";dot.style.background="linear-gradient(135deg,#d7d0ff,#9b8aff)";dot.classList.remove("snap")});
});
function tick(){x+=((snap?sx:tx)-x)*.25;y+=((snap?sy:ty)-y)*.25;dot.style.left=x+"px";dot.style.top=y+"px";requestAnimationFrame(tick)}
tick();
</script>
</body></html>`,

  "typing-dots-loader": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Typing Dots Loader</title><style>
:root{--bg:#050507;--line:#272632}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.bubble{display:flex;gap:5px;padding:14px 18px;border:1px solid var(--line);border-radius:16px 16px 16px 4px;background:#111017;box-shadow:0 16px 40px -22px rgba(0,0,0,.7)}
.bubble i{width:7px;height:7px;border-radius:50%;background:linear-gradient(135deg,#d7d0ff,#9b8aff);animation:bounce 1.1s infinite ease-in-out}
.bubble i:nth-child(2){animation-delay:.15s}
.bubble i:nth-child(3){animation-delay:.3s}
@keyframes bounce{0%,60%,100%{transform:translateY(0);opacity:.5}30%{transform:translateY(-6px);opacity:1}}
</style></head>
<body data-cf-keep-dark><div class="bubble"><i></i><i></i><i></i></div>
</body></html>`,

  "gradient-bar-loader": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Gradient Bar Loader</title><style>
:root{--bg:#050507;--line:#272632}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.stage{display:grid;gap:14px;place-items:center;width:260px}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.bar-track{width:100%;height:5px;border-radius:4px;background:#1c1a24;overflow:hidden;box-shadow:inset 0 1px 3px rgba(0,0,0,.5)}
.bar-sweep{width:40%;height:100%;border-radius:4px;background:linear-gradient(90deg,transparent,#c4b5fd,#9b8aff,transparent);box-shadow:0 0 12px rgba(196,181,253,.5);animation:sweep 1.4s infinite ease-in-out}
@keyframes sweep{0%{transform:translateX(-100%)}100%{transform:translateX(350%)}}
</style></head>
<body data-cf-keep-dark><div class="stage"><span class="kicker">FETCHING RESULTS…</span><div class="bar-track"><div class="bar-sweep"></div></div></div>
</body></html>`,

  "crosshair-cursor": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Crosshair Cursor</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;background:var(--bg);font-family:ui-monospace,Menlo,monospace;cursor:none;overflow:hidden}
.h-line,.v-line{position:fixed;background:linear-gradient(90deg,transparent,rgba(196,181,253,.45),transparent);pointer-events:none;z-index:9}
.h-line{left:0;right:0;height:1px}
.v-line{top:0;bottom:0;width:1px;background:linear-gradient(180deg,transparent,rgba(196,181,253,.45),transparent)}
.coords{position:fixed;padding:4px 7px;border:1px solid var(--line);border-radius:6px;background:#111017;color:var(--lav);font-size:10px;pointer-events:none;z-index:10;transform:translate(12px,12px);box-shadow:0 8px 20px -10px rgba(0,0,0,.6),0 0 12px -4px rgba(196,181,253,.4)}
.kicker{position:absolute;top:20px;left:20px;color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
</style></head>
<body data-cf-keep-dark><span class="kicker">MOVE AROUND THE CANVAS</span>
<div class="h-line" id="h"></div><div class="v-line" id="v"></div><div class="coords" id="c">0, 0</div>
<script>
const h=document.getElementById("h"),v=document.getElementById("v"),c=document.getElementById("c");
document.addEventListener("pointermove",function(e){h.style.top=e.clientY+"px";v.style.left=e.clientX+"px";c.style.left=e.clientX+"px";c.style.top=e.clientY+"px";c.textContent=Math.round(e.clientX)+", "+Math.round(e.clientY)});
</script>
</body></html>`,

  "content-placeholder-loader": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Content Placeholder Loader</title><style>
:root{--bg:#050507;--line:#272632}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.card{width:280px;padding:18px;border:1px solid var(--line);border-radius:14px;background:#0d0d12;display:flex;gap:12px;box-shadow:0 20px 50px -22px rgba(0,0,0,.6)}
.shimmer{background:linear-gradient(90deg,#151319 25%,#241f34 50%,#151319 75%);background-size:200% 100%;animation:shimmer 1.4s infinite linear;border-radius:6px}
.avatar{width:38px;height:38px;border-radius:50%;flex:none}
.lines{flex:1;display:grid;gap:8px;align-content:center}
.line{height:8px}
.line.short{width:60%}
@keyframes shimmer{from{background-position:200% 0}to{background-position:-200% 0}}
</style></head>
<body data-cf-keep-dark><div class="card"><div class="shimmer avatar"></div><div class="lines"><div class="shimmer line"></div><div class="shimmer line short"></div></div></div>
</body></html>`,

  "loading-percentage-counter": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Loading Percentage Counter</title><style>
:root{--bg:#050507}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:"Space Grotesk",Inter,sans-serif;position:relative;overflow:hidden}
body::before{content:"";position:absolute;inset:-20%;background:radial-gradient(circle at 50% 50%,rgba(155,138,255,.14),transparent 60%);pointer-events:none}
.wrap{position:relative;text-align:center}
.pct{font-size:64px;font-weight:800;background:linear-gradient(135deg,#f7f5fb,#c4b5fd);-webkit-background-clip:text;background-clip:text;color:transparent;letter-spacing:-.03em}
.kicker{display:block;color:#817d8a;font-size:10px;letter-spacing:2px;margin-top:6px}
.line-track{width:220px;height:2px;margin:22px auto 0;background:#1c1a24;overflow:hidden;border-radius:2px}
.line-fill{height:100%;width:0;background:linear-gradient(90deg,#9b8aff,#d7d0ff);box-shadow:0 0 10px rgba(196,181,253,.6)}
</style></head>
<body data-cf-keep-dark><div class="wrap"><div class="pct" id="pct">0%</div><span class="kicker">LOADING EXPERIENCE</span><div class="line-track"><div class="line-fill" id="fill"></div></div></div>
<script>
let v=0;const pct=document.getElementById("pct"),fill=document.getElementById("fill");
const t=setInterval(function(){v=Math.min(100,v+Math.random()*7);pct.textContent=Math.round(v)+"%";fill.style.width=v+"%";if(v>=100)clearInterval(t)},130);
</script>
</body></html>`,

  "stacked-card-deck": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Stacked Card Deck</title><style>
:root{--bg:#eef1f8;--ink:#161a2b;--mut:#666f8a;--cobalt:#3b5bdb;--line:#dfe3ef}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.kicker{color:var(--mut);font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;text-align:center;margin-bottom:14px;display:block}
.deck{position:relative;width:240px;height:300px}
.card{position:absolute;inset:0;background:#fff;border:1px solid var(--line);border-radius:20px;padding:22px;box-shadow:0 24px 50px -22px rgba(20,25,50,.22);transition:transform .4s cubic-bezier(.2,.8,.2,1),opacity .4s;display:flex;flex-direction:column}
.card .av{width:40px;height:40px;border-radius:50%;margin-bottom:14px}
.card h4{margin:0 0 6px;font-size:15px;color:var(--ink)}
.card p{margin:0;font-size:12.5px;color:var(--mut);line-height:1.6;flex:1}
.card .actions{display:flex;gap:10px;margin-top:14px}
.card .actions button{flex:1;padding:10px;border-radius:10px;border:0;font-size:12px;font-weight:600;cursor:pointer}
.pass{background:#f3f0ff;color:#7c5cff}
.pass:hover{background:#e8e2ff}
.like{background:var(--cobalt);color:#fff}
</style></head>
<body>
<div><span class="kicker">Choose an action</span>
<div class="deck" id="deck"></div>
</div>
<script>
var data=[
  {av:"#4f6bef",name:"Maya Kessler",role:"Product Designer",bio:"Looking to collaborate on design-system work across early-stage startups."},
  {av:"#7c5cff",name:"Daniel Reyes",role:"Frontend Engineer",bio:"Five years building performant React apps, open to fractional roles."},
  {av:"#22c58b",name:"Priya Nair",role:"Growth Marketer",bio:"Helped three SaaS teams hit their first $1M ARR through content."}
];
var deck=document.getElementById("deck");
function render(){
  deck.innerHTML="";
  data.slice(0,3).forEach(function(d,i){
    var c=document.createElement("div"); c.className="card";
    c.style.transform="translateY("+(i*8)+"px) scale("+(1-i*.04)+")";
    c.style.zIndex=10-i; c.style.opacity=i===0?1:(1-i*.25);
    c.innerHTML='<div class="av" style="background:'+d.av+'"></div><h4>'+d.name+'</h4><p><b style="color:#3b5bdb">'+d.role+'</b><br>'+d.bio+'</p>'+(i===0?'<div class="actions"><button class="pass" id="passBtn">Pass</button><button class="like" id="likeBtn">Connect</button></div>':'');
    deck.appendChild(c);
  });
  var pass=document.getElementById("passBtn"), like=document.getElementById("likeBtn");
  if(pass) pass.addEventListener("click",function(){ advance(-1); });
  if(like) like.addEventListener("click",function(){ advance(1); });
}
function advance(dir){
  var top=deck.firstElementChild;
  top.style.transform="translate("+(dir*260)+"px,-20px) rotate("+(dir*14)+"deg)";
  top.style.opacity=0;
  data.push(data.shift());
  setTimeout(render,260);
}
render();
</script>
</body></html>
`,

  "notification-toast-card": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Notification Toast Card</title><style>
:root{--bg:#eef1f8;--ink:#161a2b;--mut:#666f8a;--cobalt:#3b5bdb;--line:#dfe3ef;--green:#22c58b;--red:#f0524a}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.stage{display:flex;flex-direction:column;gap:18px;align-items:center}
.kicker{color:var(--mut);font-size:10.5px;letter-spacing:.08em;text-transform:uppercase}
.buttons{display:flex;gap:10px}
.buttons button{border:1px solid var(--line);background:#fff;padding:9px 16px;border-radius:9px;font-size:12.5px;font-weight:600;cursor:pointer;color:var(--ink)}
.buttons button:hover{border-color:var(--cobalt);color:var(--cobalt)}
.toasts{position:fixed;bottom:28px;right:28px;display:flex;flex-direction:column;gap:10px;z-index:10}
.toast{width:290px;background:#fff;border:1px solid var(--line);border-radius:14px;padding:14px 16px;box-shadow:0 20px 44px -18px rgba(20,25,50,.3);display:flex;gap:11px;align-items:flex-start;transform:translateX(120%);opacity:0;position:relative;overflow:hidden}
.toast.show{transform:translateX(0);opacity:1;transition:transform .4s cubic-bezier(.2,.8,.2,1),opacity .4s}
.toast .ic{width:26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex:none}
.toast .ic svg{width:13px;height:13px;color:#fff}
.toast.success .ic{background:var(--green)}
.toast.error .ic{background:var(--red)}
.toast b{display:block;font-size:12.5px;color:var(--ink)}
.toast span{font-size:11.5px;color:var(--mut)}
.bar{position:absolute;bottom:0;left:0;height:2.5px;background:var(--cobalt);width:100%;transform-origin:left}
.toast.success .bar{background:var(--green)}
.toast.error .bar{background:var(--red)}
</style></head>
<body>
<div class="stage">
  <span class="kicker">Trigger a toast</span>
  <div class="buttons"><button id="okBtn">Success toast</button><button id="errBtn">Error toast</button></div>
</div>
<div class="toasts" id="toasts"></div>
<script>
function toast(type,title,msg){
  var wrap=document.getElementById("toasts");
  var t=document.createElement("div"); t.className="toast "+type;
  var icon=type==="success"?'<path d="M20 6 9 17l-5-5"/>':'<path d="M18 6 6 18M6 6l12 12"/>';
  t.innerHTML='<div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6">'+icon+'</svg></div><div><b>'+title+'</b><span>'+msg+'</span></div><div class="bar"></div>';
  wrap.appendChild(t);
  requestAnimationFrame(function(){ t.classList.add("show"); });
  var bar=t.querySelector(".bar");
  requestAnimationFrame(function(){ bar.style.transition="transform 3.2s linear"; bar.style.transform="scaleX(0)"; });
  setTimeout(function(){ t.style.transform="translateX(120%)"; t.style.opacity=0; setTimeout(function(){ t.remove(); },400); },3200);
}
document.getElementById("okBtn").addEventListener("click",function(){ toast("success","Changes saved","Your profile was updated successfully."); });
document.getElementById("errBtn").addEventListener("click",function(){ toast("error","Upload failed","File exceeds the 10MB size limit."); });
setTimeout(function(){ toast("success","Welcome back","You have 3 new notifications."); },500);
</script>
</body></html>
`,

  "pinned-metric-card": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Pinned Metric Card</title><style>
:root{--bg:#eef1f8;--ink:#161a2b;--mut:#666f8a;--cobalt:#3b5bdb;--line:#dfe3ef;--green:#22c58b}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.card{width:260px;background:#fff;border:1px solid var(--line);border-radius:18px;padding:20px;box-shadow:0 24px 50px -22px rgba(20,25,50,.2);position:relative}
.pin{position:absolute;top:16px;right:16px;color:var(--cobalt);cursor:pointer}
.pin svg{width:16px;height:16px;transition:transform .3s cubic-bezier(.34,1.56,.64,1)}
.pin.on svg{fill:var(--cobalt);transform:scale(1.15)}
.top span{font-size:11px;color:var(--mut);text-transform:uppercase;letter-spacing:.05em}
.amt{font-size:28px;font-weight:800;color:var(--ink);margin:8px 0 4px}
.delta{font-size:12px;color:var(--green);font-weight:600}
.spark{margin-top:16px;height:44px}
.spark svg{width:100%;height:100%}
.spark path{fill:none;stroke:var(--cobalt);stroke-width:2;stroke-linecap:round;stroke-dasharray:200;stroke-dashoffset:200;animation:draw 1.1s .3s cubic-bezier(.2,.8,.2,1) forwards}
@keyframes draw{to{stroke-dashoffset:0}}
</style></head>
<body>
<div class="card">
  <div class="pin" id="pin"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2 3 6v6c0 5 4 8.5 9 10 5-1.5 9-5 9-10V6z"/></svg></div>
  <div class="top"><span>Avg. Session Duration</span></div>
  <div class="amt">4m 32s</div>
  <div class="delta">▲ 18% this week</div>
  <div class="spark"><svg viewBox="0 0 200 44" preserveAspectRatio="none"><path d="M0,34 L20,30 L40,32 L60,20 L80,24 L100,12 L120,18 L140,8 L160,14 L180,4 L200,6"/></svg></div>
</div>
<script>
var pin=document.getElementById("pin");
pin.addEventListener("click",function(){ pin.classList.toggle("on"); });
</script>
</body></html>
`,

  "credit-card-3d": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Credit Card 3D</title><style>
:root{--bg:#eef1f8;--mut:#666f8a}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.kicker{color:var(--mut);font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;text-align:center;margin-bottom:14px;display:block}
.scene{width:300px;height:184px;perspective:1200px}
.card3d{position:relative;width:100%;height:100%;transform-style:preserve-3d;transition:transform .7s cubic-bezier(.2,.8,.2,1);cursor:pointer}
.scene:hover .card3d{transform:rotateY(180deg)}
.face{position:absolute;inset:0;backface-visibility:hidden;border-radius:18px;padding:22px;color:#fff;box-shadow:0 30px 60px -24px rgba(20,25,50,.35)}
.front{background:linear-gradient(135deg,#2c2f6b,#3b5bdb 55%,#5f7dff);display:flex;flex-direction:column;justify-content:space-between}
.chip{width:38px;height:28px;border-radius:6px;background:linear-gradient(135deg,#e8c76b,#c69a3a)}
.num{font-size:17px;letter-spacing:3px;font-family:ui-monospace,monospace}
.row{display:flex;justify-content:space-between;align-items:flex-end}
.row span{display:block;font-size:9px;color:rgba(255,255,255,.6);text-transform:uppercase;letter-spacing:.05em}
.row b{font-size:13px;font-weight:600}
.brand{font-style:italic;font-weight:800;font-size:16px;text-align:right}
.back{background:linear-gradient(135deg,#2c2f6b,#3b5bdb);transform:rotateY(180deg)}
.stripe{background:#0e1030;height:38px;margin:18px -22px 0}
.cvv-row{margin-top:24px;background:rgba(255,255,255,.9);border-radius:6px;padding:8px 12px;text-align:right;color:#161a2b;font-family:ui-monospace,monospace;font-size:13px}
</style></head>
<body>
<div><span class="kicker">Hover to flip</span>
<div class="scene"><div class="card3d">
  <div class="face front">
    <div class="row"><div class="chip"></div><div class="brand">Nova</div></div>
    <div class="num">4482&nbsp;&nbsp;1190&nbsp;&nbsp;7743&nbsp;&nbsp;0012</div>
    <div class="row"><div><span>Card holder</span><b>A. Kessler</b></div><div><span>Expires</span><b>09/29</b></div></div>
  </div>
  <div class="face back"><div class="stripe"></div><div class="cvv-row">CVV &nbsp;074</div></div>
</div></div>
</div>
</body></html>
`,

  "timeline-milestone-card": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Timeline Milestone Card</title><style>
:root{--bg:#eef1f8;--ink:#161a2b;--mut:#666f8a;--cobalt:#3b5bdb;--line:#dfe3ef;--green:#22c58b}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.card{width:320px;background:#fff;border:1px solid var(--line);border-radius:18px;padding:24px;box-shadow:0 24px 50px -22px rgba(20,25,50,.2)}
.card h3{margin:0 0 18px;font-size:15px;color:var(--ink)}
.tl{position:relative;padding-left:22px}
.tl:before{content:"";position:absolute;left:5px;top:6px;bottom:6px;width:1.5px;background:var(--line)}
.item{position:relative;padding-bottom:20px;opacity:0;transform:translateX(-6px)}
.item:last-child{padding-bottom:0}
.item .dot{position:absolute;left:-22px;top:2px;width:11px;height:11px;border-radius:50%;background:#fff;border:2px solid var(--line)}
.item.done .dot{background:var(--green);border-color:var(--green)}
.item.active .dot{background:var(--cobalt);border-color:var(--cobalt);box-shadow:0 0 0 4px rgba(59,91,219,.15)}
.item b{display:block;font-size:13px;color:var(--ink)}
.item span{font-size:11.5px;color:var(--mut)}
</style></head>
<body>
<div class="card">
  <h3>Project Milestones</h3>
  <div class="tl" id="tl">
    <div class="item done"><div class="dot"></div><b>Kickoff &amp; discovery</b><span>Completed Aug 3</span></div>
    <div class="item done"><div class="dot"></div><b>Design system finalized</b><span>Completed Aug 21</span></div>
    <div class="item active"><div class="dot"></div><b>Beta launch</b><span>In progress — 68% complete</span></div>
    <div class="item"><div class="dot"></div><b>Public release</b><span>Scheduled Oct 14</span></div>
  </div>
</div>
<script>
document.querySelectorAll(".item").forEach(function(el,i){
  setTimeout(function(){ el.style.transition="opacity .4s ease,transform .4s cubic-bezier(.2,.8,.2,1)"; el.style.opacity=1; el.style.transform="translateX(0)"; }, 120+i*110);
});
</script>
</body></html>
`,

  "sliding-price-ladder": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Sliding Price Ladder</title><style>
:root{--bg:#0a1512;--panel:#101d19;--line:rgba(255,255,255,.08);--ink:#eef4f1;--mut:#7c8c87;--em:#10b981}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.card{width:300px;background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:26px}
.top span{font-size:11px;color:var(--mut);text-transform:uppercase;letter-spacing:.05em}
.tier-name{font-size:16px;color:#fff;font-weight:700;margin-top:6px}
.price{font-size:34px;font-weight:800;color:#fff;margin:10px 0 18px}
.price span{font-size:13px;color:var(--mut)}
input[type=range]{width:100%;appearance:none;height:5px;background:var(--line);border-radius:4px;outline:none;margin:6px 0 4px}
input[type=range]::-webkit-slider-thumb{appearance:none;width:18px;height:18px;border-radius:50%;background:var(--em);cursor:pointer;box-shadow:0 4px 12px rgba(16,185,129,.5)}
.ladder-labels{display:flex;justify-content:space-between;font-size:10.5px;color:var(--mut);margin-bottom:20px}
ul{list-style:none;padding:0;margin:0 0 20px;display:flex;flex-direction:column;gap:9px}
li{font-size:12.5px;color:var(--ink);display:flex;gap:8px}
li:before{content:"✓";color:var(--em)}
button{width:100%;padding:12px;border-radius:10px;border:0;background:var(--em);color:#04221a;font-size:13px;font-weight:700;cursor:pointer}
</style></head>
<body data-cf-keep-dark>
<div class="card">
  <div class="top"><span>Choose your tier</span></div>
  <div class="tier-name" id="tierName">Starter</div>
  <div class="price">$<span id="price">9</span><span>/mo</span></div>
  <input type="range" min="0" max="3" step="1" value="0" id="slider">
  <div class="ladder-labels"><span>Starter</span><span>Team</span><span>Business</span><span>Enterprise</span></div>
  <ul id="feats"></ul>
  <button>Continue with <span id="btnTier">Starter</span></button>
</div>
<script>
var tiers=[
  {name:"Starter",price:9,feats:["3 projects","Community support"]},
  {name:"Team",price:29,feats:["Unlimited projects","Email support","Team roles"]},
  {name:"Business",price:79,feats:["Advanced analytics","Priority support","SSO"]},
  {name:"Enterprise",price:199,feats:["Dedicated CSM","Custom contracts","99.99% SLA"]}
];
var slider=document.getElementById("slider"), tierName=document.getElementById("tierName"), price=document.getElementById("price"), feats=document.getElementById("feats"), btnTier=document.getElementById("btnTier");
function render(){
  var t=tiers[+slider.value];
  tierName.textContent=t.name; price.textContent=t.price; btnTier.textContent=t.name;
  feats.innerHTML="";
  t.feats.forEach(function(f){ var li=document.createElement("li"); li.textContent=f; feats.appendChild(li); });
}
slider.addEventListener("input",render);
render();
</script>
</body></html>
`,

  "feature-checklist-pricing-card": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Feature Checklist Pricing Card</title><style>
:root{--bg:#0a1512;--panel:#101d19;--line:rgba(255,255,255,.08);--ink:#eef4f1;--mut:#7c8c87;--em:#10b981}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.card{width:300px;background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:26px}
.tier{font-size:15px;color:#fff;font-weight:700}
.price{font-size:32px;font-weight:800;color:#fff;margin:8px 0 18px}
.price span{font-size:13px;color:var(--mut)}
.feat{display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--line);opacity:0;transform:translateX(-8px)}
.feat:last-of-type{border-bottom:0}
.feat span{font-size:12.5px;color:var(--ink)}
.check{width:20px;height:20px;border-radius:50%;display:flex;align-items:center;justify-content:center}
.check.yes{background:rgba(16,185,129,.15);color:var(--em)}
.check.no{background:rgba(255,255,255,.05);color:var(--mut)}
.check svg{width:11px;height:11px}
button{width:100%;margin-top:20px;padding:12px;border-radius:10px;border:0;background:var(--em);color:#04221a;font-size:13px;font-weight:700;cursor:pointer}
</style></head>
<body data-cf-keep-dark>
<div class="card">
  <div class="tier">Business Plan</div>
  <div class="price">$79<span>/mo per seat</span></div>
  <div id="feats">
    <div class="feat"><span>Unlimited projects</span><div class="check yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg></div></div>
    <div class="feat"><span>Advanced permissions</span><div class="check yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg></div></div>
    <div class="feat"><span>SSO &amp; SCIM</span><div class="check yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg></div></div>
    <div class="feat"><span>Dedicated CSM</span><div class="check no"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M18 6 6 18M6 6l12 12"/></svg></div></div>
    <div class="feat"><span>Custom SLA</span><div class="check no"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M18 6 6 18M6 6l12 12"/></svg></div></div>
  </div>
  <button>Choose Business</button>
</div>
<script>
document.querySelectorAll(".feat").forEach(function(el,i){
  setTimeout(function(){ el.style.transition="opacity .35s ease,transform .35s cubic-bezier(.2,.8,.2,1)"; el.style.opacity=1; el.style.transform="translateX(0)"; }, 100+i*80);
});
</script>
</body></html>
`,

  "team-seats-pricing-calculator": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Team Seats Pricing Calculator</title><style>
:root{--bg:#0a1512;--panel:#101d19;--line:rgba(255,255,255,.08);--ink:#eef4f1;--mut:#7c8c87;--em:#10b981}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.card{width:300px;background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:26px}
.tier{font-size:15px;color:#fff;font-weight:700;margin-bottom:18px}
.stepper{display:flex;align-items:center;justify-content:space-between;background:#0a1512;border:1px solid var(--line);border-radius:12px;padding:14px 16px;margin-bottom:18px}
.stepper .lbl{font-size:12px;color:var(--mut)}
.stepper .count{font-size:20px;color:#fff;font-weight:700}
.stepper .btns{display:flex;gap:8px}
.stepper button{width:30px;height:30px;border-radius:8px;border:1px solid var(--line);background:var(--panel);color:#fff;font-size:15px;cursor:pointer}
.stepper button:hover{border-color:var(--em);color:var(--em)}
.calc-row{display:flex;justify-content:space-between;font-size:12.5px;color:var(--mut);padding:6px 0}
.total{display:flex;justify-content:space-between;align-items:baseline;padding-top:12px;margin-top:8px;border-top:1px solid var(--line)}
.total b{font-size:26px;color:#fff}
.total span{font-size:12px;color:var(--mut)}
button.cta{width:100%;margin-top:18px;padding:12px;border-radius:10px;border:0;background:var(--em);color:#04221a;font-size:13px;font-weight:700;cursor:pointer}
</style></head>
<body data-cf-keep-dark>
<div class="card">
  <div class="tier">Team Plan Calculator</div>
  <div class="stepper"><div><div class="lbl">Team seats</div><div class="count" id="count">5</div></div><div class="btns"><button id="dec">−</button><button id="inc">+</button></div></div>
  <div class="calc-row"><span>$12 × <span id="seatEcho">5</span> seats</span><span id="sub">$60</span></div>
  <div class="calc-row"><span>Annual discount (15%)</span><span id="disc">−$9</span></div>
  <div class="total"><b>$<span id="total">51</span></b><span>/month, billed annually</span></div>
  <button class="cta">Continue with <span id="seatEcho2">5</span> seats</button>
</div>
<script>
var n=5, count=document.getElementById("count"), sub=document.getElementById("sub"), disc=document.getElementById("disc"), total=document.getElementById("total");
function render(){
  count.textContent=n;
  document.getElementById("seatEcho").textContent=n;
  document.getElementById("seatEcho2").textContent=n;
  var s=n*12, d=Math.round(s*.15), t=s-d;
  sub.textContent="$"+s; disc.textContent="−$"+d; total.textContent=t;
}
document.getElementById("inc").addEventListener("click",function(){ n=Math.min(200,n+1); render(); });
document.getElementById("dec").addEventListener("click",function(){ n=Math.max(1,n-1); render(); });
render();
</script>
</body></html>
`,

  "limited-time-pricing-card": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Limited Time Pricing Card</title><style>
:root{--bg:#0a1512;--panel:#101d19;--line:rgba(255,255,255,.08);--ink:#eef4f1;--mut:#7c8c87;--em:#10b981;--gold:#f2c14e}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.card{width:300px;background:var(--panel);border:1px solid rgba(242,193,78,.3);border-radius:18px;padding:24px;position:relative;overflow:hidden}
.ribbon{position:absolute;top:16px;right:-34px;background:var(--gold);color:#3a2a00;font-size:10px;font-weight:800;padding:5px 40px;transform:rotate(40deg);letter-spacing:.04em}
.timer{display:flex;gap:8px;margin-bottom:18px}
.t{background:#0a1512;border:1px solid var(--line);border-radius:9px;padding:8px 10px;text-align:center;min-width:44px}
.t b{display:block;font-size:17px;color:var(--gold);font-family:ui-monospace,monospace}
.t span{font-size:9px;color:var(--mut);text-transform:uppercase}
.tier{font-size:15px;color:#fff;font-weight:700}
.price-row{display:flex;align-items:baseline;gap:10px;margin:8px 0 18px}
.price{font-size:32px;font-weight:800;color:#fff}
.was{font-size:15px;color:var(--mut);text-decoration:line-through}
ul{list-style:none;padding:0;margin:0 0 20px;display:flex;flex-direction:column;gap:8px}
li{font-size:12.5px;color:var(--ink)}
li:before{content:"✓ ";color:var(--em)}
button{width:100%;padding:12px;border-radius:10px;border:0;background:var(--gold);color:#3a2a00;font-size:13px;font-weight:700;cursor:pointer}
</style></head>
<body data-cf-keep-dark>
<div class="card">
  <div class="ribbon">-40%</div>
  <div class="timer" id="timer">
    <div class="t"><b id="h">00</b><span>Hrs</span></div>
    <div class="t"><b id="m">00</b><span>Min</span></div>
    <div class="t"><b id="s">00</b><span>Sec</span></div>
  </div>
  <div class="tier">Founder's Deal</div>
  <div class="price-row"><span class="price">$29</span><span class="was">$49</span></div>
  <ul><li>Locked-in for life</li><li>All Pro features</li><li>Early access to betas</li></ul>
  <button>Claim founder price</button>
</div>
<script>
var end=Date.now()+3*3600*1000+24*60*1000+8*1000;
function tick(){
  var d=Math.max(0,end-Date.now());
  var h=Math.floor(d/3600000), m=Math.floor(d%3600000/60000), s=Math.floor(d%60000/1000);
  document.getElementById("h").textContent=String(h).padStart(2,"0");
  document.getElementById("m").textContent=String(m).padStart(2,"0");
  document.getElementById("s").textContent=String(s).padStart(2,"0");
}
tick(); setInterval(tick,1000);
</script>
</body></html>
`,

  "enterprise-contact-pricing-card": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Enterprise Contact Pricing Card</title><style>
:root{--bg:#0a1512;--panel:#101d19;--line:rgba(255,255,255,.08);--ink:#eef4f1;--mut:#7c8c87;--em:#10b981}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.card{width:320px;background:linear-gradient(165deg,#111f1b,var(--panel));border:1px solid var(--line);border-radius:18px;padding:28px}
.tier{font-size:15px;color:#fff;font-weight:700;display:flex;align-items:center;gap:8px}
.tier svg{width:16px;height:16px;color:var(--em)}
.price{font-size:26px;font-weight:800;color:#fff;margin:10px 0 6px}
.desc{font-size:12.5px;color:var(--mut);margin-bottom:20px;line-height:1.6}
ul{list-style:none;padding:0;margin:0 0 22px;display:flex;flex-direction:column;gap:10px}
li{font-size:12.5px;color:var(--ink);display:flex;gap:9px}
li svg{width:14px;height:14px;color:var(--em);flex:none}
form{display:flex;flex-direction:column;gap:10px}
input{background:#0a1512;border:1px solid var(--line);border-radius:9px;padding:11px 13px;color:#fff;font-size:12.5px;font-family:inherit;outline:none;transition:border-color .2s}
input:focus{border-color:var(--em)}
button{padding:12px;border-radius:10px;border:0;background:var(--em);color:#04221a;font-size:13px;font-weight:700;cursor:pointer;margin-top:4px}
.sent{display:none;text-align:center;padding:20px 0;color:var(--em);font-size:13px;font-weight:600}
.sent svg{width:32px;height:32px;margin-bottom:10px}
</style></head>
<body data-cf-keep-dark>
<div class="card">
  <div class="tier"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2 3 6v6c0 5 4 8.5 9 10 5-1.5 9-5 9-10V6z"/></svg>Enterprise</div>
  <div class="price">Custom pricing</div>
  <div class="desc">Volume discounts, dedicated infrastructure and a named account team.</div>
  <ul>
    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M20 6 9 17l-5-5"/></svg>Custom SLA &amp; uptime guarantee</li>
    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M20 6 9 17l-5-5"/></svg>Dedicated infrastructure</li>
    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M20 6 9 17l-5-5"/></svg>Named CSM &amp; onboarding</li>
  </ul>
  <form id="form"><input type="email" placeholder="Work email" required><input type="text" placeholder="Company name" required><button type="submit">Request pricing</button></form>
  <div class="sent" id="sent"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>We'll be in touch within 24 hours.</div>
</div>
<script>
document.getElementById("form").addEventListener("submit",function(e){
  e.preventDefault();
  document.getElementById("form").style.display="none";
  document.getElementById("sent").style.display="block";
});
</script>
</body></html>
`,

  "addon-bundle-pricing-card": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Add-on Bundle Pricing Card</title><style>
:root{--bg:#0a1512;--panel:#101d19;--line:rgba(255,255,255,.08);--ink:#eef4f1;--mut:#7c8c87;--em:#10b981}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.card{width:300px;background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:24px}
.tier{font-size:15px;color:#fff;font-weight:700;margin-bottom:4px}
.base{font-size:12px;color:var(--mut);margin-bottom:18px}
.addon{display:flex;align-items:center;gap:11px;padding:11px 0;border-bottom:1px solid var(--line);cursor:pointer}
.addon:last-of-type{border-bottom:0}
.cb{width:19px;height:19px;border-radius:6px;border:1.5px solid var(--line);display:flex;align-items:center;justify-content:center;flex:none;transition:background .2s,border-color .2s}
.cb.on{background:var(--em);border-color:var(--em)}
.cb svg{width:11px;height:11px;color:#04221a;opacity:0;transition:opacity .15s}
.cb.on svg{opacity:1}
.addon .info{flex:1}
.addon b{display:block;font-size:12.5px;color:#fff}
.addon span{font-size:11px;color:var(--mut)}
.addon .amt{font-size:12.5px;color:var(--em);font-weight:600}
.total{display:flex;justify-content:space-between;align-items:baseline;margin-top:18px;padding-top:14px;border-top:1px solid var(--line)}
.total b{font-size:24px;color:#fff}
.total span{font-size:11.5px;color:var(--mut)}
button{width:100%;margin-top:16px;padding:12px;border-radius:10px;border:0;background:var(--em);color:#04221a;font-size:13px;font-weight:700;cursor:pointer}
</style></head>
<body data-cf-keep-dark>
<div class="card">
  <div class="tier">Build your plan</div>
  <div class="base">Base plan — $19/mo</div>
  <div id="addons">
    <div class="addon" data-p="12"><div class="cb"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg></div><div class="info"><b>Advanced analytics</b><span>Cohort &amp; funnel reports</span></div><div class="amt">+$12</div></div>
    <div class="addon" data-p="8"><div class="cb"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg></div><div class="info"><b>Priority support</b><span>2-hour response time</span></div><div class="amt">+$8</div></div>
    <div class="addon" data-p="15"><div class="cb"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg></div><div class="info"><b>White-labeling</b><span>Remove all branding</span></div><div class="amt">+$15</div></div>
  </div>
  <div class="total"><b>$<span id="total">19</span></b><span>/month</span></div>
  <button>Continue</button>
</div>
<script>
var base=19, total=base;
document.querySelectorAll(".addon").forEach(function(a){
  a.addEventListener("click",function(){
    var cb=a.querySelector(".cb"), p=+a.dataset.p, on=cb.classList.toggle("on");
    total += on ? p : -p;
    document.getElementById("total").textContent=total;
  });
});
</script>
</body></html>
`,

  "drag-reorder-widgets": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Drag Reorder Widgets</title><style>
:root{--bg:#0d0f16;--panel:#141824;--panel2:#1a1f2e;--line:rgba(255,255,255,.08);--ink:#eef0f5;--mut:#8890a0;--violet:#7c6cf6;--amber:#f5b942}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.stage{width:min(380px,92vw)}
.kicker{color:var(--mut);font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;margin-bottom:12px;display:block;text-align:center}
.list{display:flex;flex-direction:column;gap:10px}
.w{background:var(--panel);border:1px solid var(--line);border-radius:13px;padding:14px 16px;display:flex;align-items:center;gap:12px;cursor:grab;user-select:none;transition:box-shadow .2s,border-color .2s}
.w:active{cursor:grabbing}
.w.dragging{box-shadow:0 20px 40px -14px rgba(124,108,246,.4);border-color:var(--violet);z-index:5;position:relative}
.handle{color:var(--mut);flex:none;display:flex;gap:2px}
.handle svg{width:14px;height:14px}
.ic{width:34px;height:34px;border-radius:9px;display:flex;align-items:center;justify-content:center;flex:none}
.ic svg{width:16px;height:16px;color:#fff}
.w b{display:block;font-size:13px;color:#fff;font-weight:600}
.w span{font-size:11px;color:var(--mut)}
</style></head>
<body data-cf-keep-dark>
<div class="stage">
  <span class="kicker">Drag to reorder</span>
  <div class="list" id="list">
    <div class="w" draggable="true"><span class="handle"><svg viewBox="0 0 24 24" fill="currentColor"><circle cx="9" cy="6" r="1.3"/><circle cx="15" cy="6" r="1.3"/><circle cx="9" cy="12" r="1.3"/><circle cx="15" cy="12" r="1.3"/><circle cx="9" cy="18" r="1.3"/><circle cx="15" cy="18" r="1.3"/></svg></span><div class="ic" style="background:#7c6cf6"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h4l3 8 4-16 3 8h4"/></svg></div><div><b>Revenue Chart</b><span>Updated 2m ago</span></div></div>
    <div class="w" draggable="true"><span class="handle"><svg viewBox="0 0 24 24" fill="currentColor"><circle cx="9" cy="6" r="1.3"/><circle cx="15" cy="6" r="1.3"/><circle cx="9" cy="12" r="1.3"/><circle cx="15" cy="12" r="1.3"/><circle cx="9" cy="18" r="1.3"/><circle cx="15" cy="18" r="1.3"/></svg></span><div class="ic" style="background:#f5b942"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/></svg></div><div><b>Team Calendar</b><span>4 events today</span></div></div>
    <div class="w" draggable="true"><span class="handle"><svg viewBox="0 0 24 24" fill="currentColor"><circle cx="9" cy="6" r="1.3"/><circle cx="15" cy="6" r="1.3"/><circle cx="9" cy="12" r="1.3"/><circle cx="15" cy="12" r="1.3"/><circle cx="9" cy="18" r="1.3"/><circle cx="15" cy="18" r="1.3"/></svg></span><div class="ic" style="background:#4ade80"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg></div><div><b>Task Tracker</b><span>12 of 18 done</span></div></div>
    <div class="w" draggable="true"><span class="handle"><svg viewBox="0 0 24 24" fill="currentColor"><circle cx="9" cy="6" r="1.3"/><circle cx="15" cy="6" r="1.3"/><circle cx="9" cy="12" r="1.3"/><circle cx="15" cy="12" r="1.3"/><circle cx="9" cy="18" r="1.3"/><circle cx="15" cy="18" r="1.3"/></svg></span><div class="ic" style="background:#f87171"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg></div><div><b>Response Time</b><span>184ms average</span></div></div>
  </div>
</div>
<script>
var list=document.getElementById("list"),dragEl=null;
list.querySelectorAll(".w").forEach(function(w){
  w.addEventListener("dragstart",function(){ dragEl=w; setTimeout(function(){w.classList.add("dragging")},0); });
  w.addEventListener("dragend",function(){ w.classList.remove("dragging"); });
  w.addEventListener("dragover",function(e){
    e.preventDefault();
    if(w===dragEl)return;
    var r=w.getBoundingClientRect(), before=(e.clientY-r.top)<r.height/2;
    list.insertBefore(dragEl, before?w:w.nextSibling);
  });
});
</script>
</body></html>
`,

  "team-members-status-panel": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Team Members Status Panel</title><style>
:root{--bg:#0d0f16;--panel:#141824;--panel2:#1a1f2e;--line:rgba(255,255,255,.08);--ink:#eef0f5;--mut:#8890a0;--violet:#7c6cf6;--green:#4ade80;--amber:#f5b942}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.card{width:min(340px,92vw);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:22px;box-shadow:0 30px 70px -30px rgba(0,0,0,.6)}
.top{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px}
.top h3{margin:0;font-family:"Manrope",sans-serif;font-size:15px;color:#fff;font-weight:700}
.top span{font-size:11px;color:var(--mut)}
.row{display:flex;align-items:center;gap:12px;padding:9px 0;opacity:0;transform:translateY(8px)}
.av-wrap{position:relative;flex:none}
.av{width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:#fff}
.status{position:absolute;bottom:-1px;right:-1px;width:10px;height:10px;border-radius:50%;border:2px solid var(--panel)}
.status.online{background:var(--green)}
.status.away{background:var(--amber)}
.status.offline{background:#4a4f5c}
.info{flex:1;min-width:0}
.info b{display:block;font-size:13px;color:#fff}
.info span{font-size:11px;color:var(--mut)}
.badge{font-size:10px;padding:3px 9px;border-radius:20px;color:var(--mut);background:var(--panel2)}
.badge.online{color:var(--green);background:rgba(74,222,128,.1)}
</style></head>
<body data-cf-keep-dark>
<div class="card">
  <div class="top"><h3>Team</h3><span>3 online</span></div>
  <div id="list">
    <div class="row"><div class="av-wrap"><div class="av" style="background:#7c6cf6">MK</div><div class="status online"></div></div><div class="info"><b>Maya Kessler</b><span>Product Design</span></div><div class="badge online">Online</div></div>
    <div class="row"><div class="av-wrap"><div class="av" style="background:#f5b942">DR</div><div class="status online"></div></div><div class="info"><b>Daniel Reyes</b><span>Engineering</span></div><div class="badge online">Online</div></div>
    <div class="row"><div class="av-wrap"><div class="av" style="background:#4ade80">PN</div><div class="status away"></div></div><div class="info"><b>Priya Nair</b><span>Engineering</span></div><div class="badge">Away</div></div>
    <div class="row"><div class="av-wrap"><div class="av" style="background:#f87171">JT</div><div class="status offline"></div></div><div class="info"><b>Jo Tran</b><span>Marketing</span></div><div class="badge">Offline</div></div>
  </div>
</div>
<script>
document.querySelectorAll(".row").forEach(function(el,i){
  setTimeout(function(){ el.style.transition="opacity .45s ease,transform .45s cubic-bezier(.2,.8,.2,1)"; el.style.opacity=1; el.style.transform="translateY(0)"; }, 120+i*90);
});
</script>
</body></html>
`,

  "goal-progress-tracker": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Goal Progress Tracker</title><style>
:root{--bg:#0d0f16;--panel:#141824;--panel2:#1a1f2e;--line:rgba(255,255,255,.08);--ink:#eef0f5;--mut:#8890a0;--violet:#7c6cf6;--amber:#f5b942;--green:#4ade80}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.card{width:min(340px,92vw);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:24px;box-shadow:0 30px 70px -30px rgba(0,0,0,.6)}
.top h3{margin:0 0 18px;font-family:"Manrope",sans-serif;font-size:15px;color:#fff;font-weight:700}
.goal{display:flex;align-items:center;gap:14px;padding:10px 0}
.ring{position:relative;width:52px;height:52px;flex:none}
.ring svg{width:100%;height:100%;transform:rotate(-90deg)}
.ring circle{fill:none;stroke-width:5}
.ring .track{stroke:var(--panel2)}
.ring .fill{stroke-linecap:round;stroke-dasharray:141;stroke-dashoffset:141;transition:stroke-dashoffset 1.1s cubic-bezier(.2,.8,.2,1)}
.ring span{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#fff}
.g-info{flex:1}
.g-info b{display:block;font-size:13px;color:#fff}
.g-info span{font-size:11px;color:var(--mut)}
</style></head>
<body data-cf-keep-dark>
<div class="card">
  <div class="top"><h3>Quarterly Goals</h3></div>
  <div class="goal"><div class="ring"><svg viewBox="0 0 52 52"><circle class="track" cx="26" cy="26" r="22.5"/><circle class="fill" id="r0" cx="26" cy="26" r="22.5" stroke="#7c6cf6"/></svg><span id="s0">0%</span></div><div class="g-info"><b>New signups</b><span>3,120 of 4,000 target</span></div></div>
  <div class="goal"><div class="ring"><svg viewBox="0 0 52 52"><circle class="track" cx="26" cy="26" r="22.5"/><circle class="fill" id="r1" cx="26" cy="26" r="22.5" stroke="#f5b942"/></svg><span id="s1">0%</span></div><div class="g-info"><b>Feature adoption</b><span>41% of active users</span></div></div>
  <div class="goal"><div class="ring"><svg viewBox="0 0 52 52"><circle class="track" cx="26" cy="26" r="22.5"/><circle class="fill" id="r2" cx="26" cy="26" r="22.5" stroke="#4ade80"/></svg><span id="s2">0%</span></div><div class="g-info"><b>Churn reduction</b><span>92% of goal reached</span></div></div>
</div>
<script>
var vals=[78,41,92];
vals.forEach(function(v,i){
  setTimeout(function(){
    var circ=141, offset=circ-(v/100)*circ;
    document.getElementById("r"+i).style.strokeDashoffset=offset;
    var obj={v:0}, s=document.getElementById("s"+i);
    var start=null;
    function step(ts){ if(!start)start=ts; var p=Math.min(1,(ts-start)/1100); s.textContent=Math.round(v*p)+"%"; if(p<1)requestAnimationFrame(step); }
    requestAnimationFrame(step);
  }, 200+i*160);
});
</script>
</body></html>
`,

  "calendar-heatmap-widget": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Calendar Heatmap Widget</title><style>
:root{--bg:#0d0f16;--panel:#141824;--panel2:#1a1f2e;--line:rgba(255,255,255,.08);--ink:#eef0f5;--mut:#8890a0;--violet:#7c6cf6}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.card{width:min(400px,92vw);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:22px;box-shadow:0 30px 70px -30px rgba(0,0,0,.6)}
.top{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px}
.top h3{margin:0;font-family:"Manrope",sans-serif;font-size:15px;color:#fff;font-weight:700}
.top span{font-size:11px;color:var(--mut)}
.grid{display:grid;grid-template-columns:repeat(26,1fr);gap:3px}
.cell{aspect-ratio:1;border-radius:2.5px;background:var(--panel2);position:relative;transform:scale(0);transition:transform .25s cubic-bezier(.34,1.56,.64,1)}
.cell:hover{outline:1.5px solid rgba(255,255,255,.3)}
.legend{display:flex;align-items:center;justify-content:flex-end;gap:5px;margin-top:14px;font-size:10px;color:var(--mut)}
.legend .sw{width:9px;height:9px;border-radius:2px}
.tip{position:absolute;bottom:calc(100% + 6px);left:50%;transform:translateX(-50%);background:#000;color:#fff;font-size:10px;padding:4px 7px;border-radius:5px;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .15s}
.cell:hover .tip{opacity:1}
</style></head>
<body data-cf-keep-dark>
<div class="card">
  <div class="top"><h3>Contribution Activity</h3><span>Last 26 weeks</span></div>
  <div class="grid" id="grid"></div>
  <div class="legend">Less
    <span class="sw" style="background:#1a1f2e"></span>
    <span class="sw" style="background:#3d2f7a"></span>
    <span class="sw" style="background:#5a45b8"></span>
    <span class="sw" style="background:#7c6cf6"></span>
    <span class="sw" style="background:#a99bff"></span>
  More</div>
</div>
<script>
var grid=document.getElementById("grid");
var colors=["#161a26","#251f47","#3d2f7a","#5a45b8","#7c6cf6","#a99bff"];
var cells=[];
for(var i=0;i<26*7;i++){
  var level=Math.random()<.3?0:Math.floor(Math.random()*5)+1;
  var c=document.createElement("div");
  c.className="cell";
  c.style.background=colors[level];
  var tip=document.createElement("div"); tip.className="tip"; tip.textContent=level+" contributions"; c.appendChild(tip);
  grid.appendChild(c);
  cells.push(c);
}
cells.forEach(function(c,i){ setTimeout(function(){ c.style.transform="scale(1)"; }, i*3); });
</script>
</body></html>
`,

  "revenue-comparison-widget": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Revenue Comparison Widget</title><style>
:root{--bg:#0d0f16;--panel:#141824;--panel2:#1a1f2e;--line:rgba(255,255,255,.08);--ink:#eef0f5;--mut:#8890a0;--violet:#7c6cf6;--amber:#f5b942}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.card{width:min(380px,92vw);background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:22px;box-shadow:0 30px 70px -30px rgba(0,0,0,.6)}
.top{display:flex;justify-content:space-between;align-items:center;margin-bottom:18px}
.top h3{margin:0;font-family:"Manrope",sans-serif;font-size:15px;color:#fff;font-weight:700}
.toggle{display:flex;background:var(--panel2);border-radius:9px;padding:3px;gap:3px}
.toggle button{background:none;border:0;color:var(--mut);font-size:11px;padding:5px 10px;border-radius:7px;cursor:pointer;font-family:inherit}
.toggle button.on{background:var(--violet);color:#fff}
.bars{display:flex;align-items:flex-end;gap:10px;height:140px;padding:0 4px}
.bar-col{flex:1;display:flex;flex-direction:column;align-items:center;gap:8px;height:100%;justify-content:flex-end}
.bar-pair{display:flex;gap:3px;align-items:flex-end;height:100%}
.bar{width:9px;border-radius:4px 4px 0 0;height:0;transition:height .8s cubic-bezier(.2,.8,.2,1)}
.bar.prev{background:var(--panel2)}
.bar.cur{background:linear-gradient(180deg,#a99bff,var(--violet))}
.bar-col span{font-size:9.5px;color:var(--mut)}
.legend{display:flex;justify-content:center;gap:18px;margin-top:14px;font-size:11px;color:var(--mut)}
.legend div{display:flex;align-items:center;gap:6px}
.legend .sw{width:8px;height:8px;border-radius:2px}
</style></head>
<body data-cf-keep-dark>
<div class="card">
  <div class="top"><h3>Revenue by Week</h3><div class="toggle"><button class="on">MRR</button><button>Units</button></div></div>
  <div class="bars" id="bars"></div>
  <div class="legend"><div><span class="sw" style="background:#a99bff"></span>This month</div><div><span class="sw" style="background:#2a2f42"></span>Last month</div></div>
</div>
<script>
var data=[[40,52],[55,60],[48,70],[62,58],[58,80],[70,92],[65,88]];
var labels=["W1","W2","W3","W4","W5","W6","W7"];
var bars=document.getElementById("bars");
data.forEach(function(pair,i){
  var col=document.createElement("div"); col.className="bar-col";
  var pairEl=document.createElement("div"); pairEl.className="bar-pair";
  var prev=document.createElement("div"); prev.className="bar prev";
  var cur=document.createElement("div"); cur.className="bar cur";
  pairEl.appendChild(prev); pairEl.appendChild(cur); col.appendChild(pairEl);
  var lbl=document.createElement("span"); lbl.textContent=labels[i]; col.appendChild(lbl);
  bars.appendChild(col);
  setTimeout(function(){ prev.style.height=pair[0]+"%"; cur.style.height=pair[1]+"%"; }, 150+i*70);
});
</script>
</body></html>
`,

  "quick-actions-command-bar": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Quick Actions Command Bar</title><style>
:root{--bg:#0d0f16;--panel:#141824;--panel2:#1a1f2e;--line:rgba(255,255,255,.08);--ink:#eef0f5;--mut:#8890a0;--violet:#7c6cf6}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.stage{display:flex;flex-direction:column;align-items:center;gap:16px}
.kicker{color:var(--mut);font-size:10.5px;letter-spacing:.08em;text-transform:uppercase}
.cmd{width:min(400px,92vw);background:var(--panel);border:1px solid var(--line);border-radius:16px;box-shadow:0 40px 80px -30px rgba(0,0,0,.7);overflow:hidden}
.search{display:flex;align-items:center;gap:10px;padding:15px 18px;border-bottom:1px solid var(--line)}
.search svg{width:16px;height:16px;color:var(--mut);flex:none}
.search span{color:#fff;font-size:14px}
.search span:after{content:"";display:inline-block;width:1.5px;height:16px;background:var(--violet);margin-left:2px;vertical-align:middle;animation:blink 1s step-end infinite}
@keyframes blink{50%{opacity:0}}
.results{padding:8px}
.res{display:flex;align-items:center;gap:12px;padding:10px 10px;border-radius:9px;cursor:pointer;transition:background .15s}
.res.active{background:var(--panel2)}
.ic{width:28px;height:28px;border-radius:8px;background:var(--panel2);display:flex;align-items:center;justify-content:center;flex:none}
.ic svg{width:14px;height:14px;color:#fff}
.res b{font-size:13px;color:#fff;font-weight:500}
.res span{font-size:11px;color:var(--mut);margin-left:auto}
.kbd{font-size:10px;color:var(--mut);background:var(--panel2);border:1px solid var(--line);border-radius:5px;padding:2px 6px;font-family:ui-monospace,monospace}
</style></head>
<body data-cf-keep-dark>
<div class="stage">
  <span class="kicker">Press ⌘K to open</span>
  <div class="cmd">
    <div class="search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg><span id="typed"></span></div>
    <div class="results" id="results">
      <div class="res active"><div class="ic" style="background:#3d2f7a"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg></div><b>Create new project</b><span class="kbd">↵</span></div>
      <div class="res"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg></div><b>View recent activity</b><span class="kbd">⌘R</span></div>
      <div class="res"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21a8 8 0 1 0-16 0"/><circle cx="12" cy="7" r="4"/></svg></div><b>Invite team member</b><span class="kbd">⌘I</span></div>
    </div>
  </div>
</div>
<script>
var target="deploy to production", i=0, el=document.getElementById("typed");
function type(){ if(i<=target.length){ el.textContent=target.slice(0,i); i++; setTimeout(type,55);} }
setTimeout(type,400);
var results=document.querySelectorAll(".res");
results.forEach(function(r,idx){
  r.addEventListener("mouseenter",function(){ results.forEach(function(x){x.classList.remove("active")}); r.classList.add("active"); });
});
</script>
</body></html>
`,

  "parallax-tilt-hero": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Parallax Tilt Hero</title><style>
:root{--bg:#faf9f6;--ink:#0a0a0a;--mut:#6b665c;--coral:#ff4d3d}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:var(--bg);font-family:"Space Grotesk",Inter,ui-sans-serif,Arial,sans-serif;overflow:hidden;perspective:1000px}
.hero{position:relative;text-align:center;transform-style:preserve-3d}
.layer{position:absolute;border-radius:50%;filter:blur(2px)}
.l1{width:120px;height:120px;background:linear-gradient(135deg,#ff4d3d,#ffb199);top:-60px;left:-100px;transform:translateZ(40px)}
.l2{width:70px;height:70px;background:#0a0a0a;bottom:-30px;right:-90px;transform:translateZ(70px)}
.l3{width:36px;height:36px;border:3px solid #ff4d3d;background:none;top:30%;right:-130px;transform:translateZ(90px)}
.eb{display:inline-flex;gap:8px;font-size:11.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--coral);margin-bottom:16px;transform:translateZ(30px)}
h1{margin:0;font-size:clamp(34px,5vw,56px);font-weight:700;letter-spacing:-.03em;color:var(--ink);line-height:1.08;transform:translateZ(60px)}
p{margin:18px auto 0;font-size:15px;color:var(--mut);max-width:400px;transform:translateZ(20px)}
.cta{margin-top:26px;display:inline-flex;gap:9px;background:var(--ink);color:#fff;padding:14px 26px;border-radius:999px;font-size:13.5px;font-weight:700;cursor:pointer;transform:translateZ(80px)}
</style></head>
<body>
<div class="hero" id="hero">
  <div class="layer l1"></div><div class="layer l2" data-cf-keep-dark></div><div class="layer l3"></div>
  <span class="eb">Move your cursor</span>
  <h1>Depth that responds to you.</h1>
  <p>A subtle 3D tilt hero — every layer drifts at its own depth as you move.</p>
  <div class="cta" data-cf-keep-dark>Explore the effect</div>
</div>
<script>
var hero=document.getElementById("hero");
document.addEventListener("mousemove",function(e){
  var x=(e.clientX/window.innerWidth-.5), y=(e.clientY/window.innerHeight-.5);
  hero.style.transform="rotateY("+(x*10)+"deg) rotateX("+(-y*10)+"deg)";
});
document.addEventListener("mouseleave",function(){ hero.style.transform="rotateY(0) rotateX(0)"; });
</script>
</body></html>
`,

  "scroll-driven-hero": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Scroll Driven Hero</title><style>
:root{--bg:#faf9f6;--ink:#0a0a0a;--mut:#6b665c;--coral:#ff4d3d}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);font-family:"Space Grotesk",Inter,ui-sans-serif,Arial,sans-serif}
.hero{height:180vh;position:relative}
.pin{position:sticky;top:0;height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;overflow:hidden}
h1{margin:0;font-size:clamp(36px,7vw,90px);font-weight:800;letter-spacing:-.04em;color:var(--ink);text-align:center;will-change:transform,opacity}
.sub{margin-top:18px;font-size:15px;color:var(--mut);will-change:opacity}
.hint{position:absolute;bottom:30px;font-size:11px;color:var(--mut);letter-spacing:.08em;text-transform:uppercase;display:flex;align-items:center;gap:8px}
.hint svg{width:13px;height:13px;animation:bob 1.6s ease-in-out infinite}
@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(5px)}}
.after{padding:80px 40px;text-align:center;color:var(--mut);font-size:13px}
</style></head>
<body>
<section class="hero">
  <div class="pin">
    <h1 id="h1">Scroll to see it move.</h1>
    <p class="sub" id="sub">This headline scales and fades as the page scrolls past it.</p>
    <div class="hint"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>Scroll</div>
  </div>
</section>
<div class="after">You've reached the next section.</div>
<script>
var h1=document.getElementById("h1"), sub=document.getElementById("sub"), hero=document.querySelector(".hero");
function onScroll(){
  var r=hero.getBoundingClientRect();
  var total=hero.offsetHeight-window.innerHeight;
  var p=Math.min(1,Math.max(0,-r.top/total));
  var scale=1+p*.6, opacity=1-p*1.3;
  h1.style.transform="scale("+scale+")";
  h1.style.opacity=Math.max(0,opacity);
  sub.style.opacity=Math.max(0,1-p*2.2);
}
window.addEventListener("scroll",onScroll);
onScroll();
</script>
</body></html>
`,

  "video-frame-hero": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Video Frame Hero</title><style>
:root{--bg:#faf9f6;--ink:#0a0a0a;--mut:#6b665c;--coral:#ff4d3d}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:var(--bg);font-family:"Space Grotesk",Inter,ui-sans-serif,Arial,sans-serif;padding:50px}
.hero{text-align:center;max-width:640px}
.eb{display:inline-flex;gap:8px;font-size:11.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--coral);margin-bottom:16px}
h1{margin:0;font-size:clamp(30px,4.2vw,46px);font-weight:700;letter-spacing:-.03em;color:var(--ink)}
p{margin:16px auto 30px;font-size:15px;color:var(--mut);max-width:420px}
.frame{position:relative;border-radius:20px;overflow:hidden;box-shadow:0 40px 80px -24px rgba(0,0,0,.3);aspect-ratio:16/9;background:linear-gradient(155deg,#2a2622,#0a0a0a)}
.frame .grid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px);background-size:30px 30px}
.play{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:70px;height:70px;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:transform .3s cubic-bezier(.34,1.56,.64,1)}
.play:hover{transform:translate(-50%,-50%) scale(1.1)}
.play svg{width:22px;height:22px;color:var(--ink);margin-left:3px}
.ring{position:absolute;top:50%;left:50%;width:70px;height:70px;border-radius:50%;border:1.5px solid rgba(255,255,255,.4);transform:translate(-50%,-50%);animation:pulse-ring 2s ease-out infinite}
@keyframes pulse-ring{0%{transform:translate(-50%,-50%) scale(1);opacity:1}100%{transform:translate(-50%,-50%) scale(1.8);opacity:0}}
.dur{position:absolute;bottom:16px;right:18px;color:#fff;font-size:11.5px;background:rgba(0,0,0,.4);padding:4px 9px;border-radius:6px;font-family:ui-monospace,monospace}
</style></head>
<body>
<div class="hero">
  <span class="eb">Watch it in 90 seconds</span>
  <h1>See the product before you sign up.</h1>
  <p>No forms, no sales call — just a real walkthrough of what you'll actually use.</p>
  <div class="frame" data-cf-keep-dark><div class="grid"></div><div class="ring"></div><div class="play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div><span class="dur">1:32</span></div>
</div>
</body></html>
`,

  "3d-cube-rotator-hero": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>3D Cube Rotator Hero</title><style>
:root{--bg:#faf9f6;--ink:#0a0a0a;--mut:#6b665c;--coral:#ff4d3d}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:var(--bg);font-family:"Space Grotesk",Inter,ui-sans-serif,Arial,sans-serif;padding:50px;gap:60px;flex-wrap:wrap}
.txt{max-width:340px}
.eb{display:inline-flex;gap:8px;font-size:11.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--coral);margin-bottom:16px}
h1{margin:0;font-size:clamp(30px,3.6vw,44px);font-weight:700;letter-spacing:-.03em;color:var(--ink);line-height:1.1}
p{margin:16px 0 26px;font-size:14.5px;color:var(--mut)}
.cta{display:inline-flex;gap:9px;background:var(--ink);color:#fff;padding:13px 24px;border-radius:999px;font-size:13px;font-weight:700;cursor:pointer}
.stage{width:200px;height:200px;perspective:900px}
.cube{width:100%;height:100%;position:relative;transform-style:preserve-3d;animation:rotate 14s linear infinite}
.face{position:absolute;width:200px;height:200px;border:1px solid rgba(0,0,0,.08);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;color:#fff;backface-visibility:hidden}
.f1{background:linear-gradient(135deg,#ff4d3d,#ff8a75);transform:translateZ(100px)}
.f2{background:linear-gradient(135deg,#0a0a0a,#2a2622);transform:rotateY(90deg) translateZ(100px)}
.f3{background:linear-gradient(135deg,#ff8a75,#ff4d3d);transform:rotateY(180deg) translateZ(100px)}
.f4{background:linear-gradient(135deg,#2a2622,#0a0a0a);transform:rotateY(-90deg) translateZ(100px)}
.f5{background:linear-gradient(135deg,#ffb199,#ff4d3d);transform:rotateX(90deg) translateZ(100px)}
.f6{background:linear-gradient(135deg,#0a0a0a,#3a352e);transform:rotateX(-90deg) translateZ(100px)}
@keyframes rotate{from{transform:rotateX(0) rotateY(0)}to{transform:rotateX(360deg) rotateY(360deg)}}
</style></head>
<body>
<div class="txt">
  <span class="eb">Every angle, one platform</span>
  <h1>Built to handle your whole workflow.</h1>
  <p>Design, build and ship — one rotating set of tools instead of six disconnected ones.</p>
  <div class="cta" data-cf-keep-dark>See how it fits together</div>
</div>
<div class="stage"><div class="cube">
  <div class="face f1">Design</div><div class="face f2">Build</div><div class="face f3">Test</div>
  <div class="face f4">Ship</div><div class="face f5">Monitor</div><div class="face f6">Scale</div>
</div></div>
</body></html>
`,

  "chat-bubble-hero": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Chat Bubble Hero</title><style>
:root{--bg:#faf9f6;--ink:#0a0a0a;--mut:#6b665c;--coral:#ff4d3d}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;grid-template-columns:1fr 1fr;align-items:center;background:var(--bg);font-family:"Space Grotesk",Inter,ui-sans-serif,Arial,sans-serif;padding:0 50px}
.txt{max-width:400px}
.eb{display:inline-flex;gap:8px;font-size:11.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--coral);margin-bottom:16px}
h1{margin:0;font-size:clamp(30px,4vw,46px);font-weight:700;letter-spacing:-.03em;color:var(--ink);line-height:1.1}
p{margin:16px 0 26px;font-size:14.5px;color:var(--mut)}
.cta{display:inline-flex;gap:9px;background:var(--ink);color:#fff;padding:13px 24px;border-radius:999px;font-size:13px;font-weight:700;cursor:pointer}
.chat{max-width:320px;justify-self:center}
.bubble{max-width:78%;padding:11px 15px;border-radius:16px;font-size:13px;margin-bottom:10px;opacity:0;transform:translateY(10px)}
.them{background:#fff;color:var(--ink);border:1px solid #eee;border-bottom-left-radius:4px}
.me{background:var(--ink);color:#fff;margin-left:auto;border-bottom-right-radius:4px}
.typing{display:inline-flex;gap:4px;background:#fff;border:1px solid #eee;border-radius:16px;border-bottom-left-radius:4px;padding:12px 16px;opacity:0}
.typing span{width:6px;height:6px;border-radius:50%;background:#bbb;animation:bounce 1.2s ease-in-out infinite}
.typing span:nth-child(2){animation-delay:.15s}
.typing span:nth-child(3){animation-delay:.3s}
@keyframes bounce{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-4px)}}
</style></head>
<body>
<div class="txt">
  <span class="eb">Support that feels human</span>
  <h1>Answers in seconds, not tickets.</h1>
  <p>Live chat backed by your docs, your team, and a bot that actually knows when to hand off.</p>
  <div class="cta" data-cf-keep-dark>Try the widget free</div>
</div>
<div class="chat" id="chat">
  <div class="bubble them" id="b1">Hey! Does this integrate with Slack?</div>
  <div class="bubble me" id="b2" data-cf-keep-dark>Yep — two-click setup, no code needed 🎉</div>
  <div class="typing" id="typing"><span></span><span></span><span></span></div>
  <div class="bubble them" id="b3">That's exactly what I needed, thanks!</div>
</div>
<script>
var steps=[["b1",300],["b2",1000],["typing",1700],["b3",2900]];
steps.forEach(function(s){
  setTimeout(function(){
    var el=document.getElementById(s[0]);
    el.style.transition="opacity .4s,transform .4s cubic-bezier(.2,.8,.2,1)";
    el.style.opacity=1; el.style.transform="translateY(0)";
    if(s[0]==="typing") setTimeout(function(){ el.style.opacity=0; },1000);
  },s[1]);
});
</script>
</body></html>
`,

  "map-pin-hero": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Map Pin Hero</title><style>
:root{--bg:#faf9f6;--ink:#0a0a0a;--mut:#6b665c;--coral:#ff4d3d}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:var(--bg);font-family:"Space Grotesk",Inter,ui-sans-serif,Arial,sans-serif;padding:50px}
.hero{text-align:center;max-width:600px}
.eb{display:inline-flex;gap:8px;font-size:11.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--coral);margin-bottom:16px}
h1{margin:0;font-size:clamp(30px,4.2vw,46px);font-weight:700;letter-spacing:-.03em;color:var(--ink)}
p{margin:16px auto 30px;font-size:15px;color:var(--mut);max-width:420px}
.map{position:relative;height:260px;border-radius:20px;overflow:hidden;background:#eef0e8;box-shadow:0 30px 60px -20px rgba(0,0,0,.2)}
.map svg.roads{position:absolute;inset:0;width:100%;height:100%}
.map svg.roads path{stroke:#d8dbcc;stroke-width:3;fill:none}
.pin{position:absolute;top:44%;left:38%;transform:translate(-50%,-100%)}
.pin svg{width:34px;height:34px;color:var(--coral);filter:drop-shadow(0 6px 10px rgba(255,77,61,.4))}
.ripple{position:absolute;top:44%;left:38%;width:16px;height:16px;border-radius:50%;background:var(--coral);transform:translate(-50%,-50%);opacity:.5}
.ripple:after{content:"";position:absolute;inset:0;border-radius:50%;background:var(--coral);animation:ripple 2s ease-out infinite}
@keyframes ripple{0%{transform:scale(1);opacity:.6}100%{transform:scale(3.4);opacity:0}}
.pin2{position:absolute;top:64%;left:66%;width:9px;height:9px;border-radius:50%;background:#0a0a0a;opacity:.4}
.card{position:absolute;bottom:16px;left:16px;background:#fff;border-radius:12px;padding:11px 15px;box-shadow:0 10px 24px -10px rgba(0,0,0,.25);text-align:left}
.card b{display:block;font-size:12.5px;color:var(--ink)}
.card span{font-size:10.5px;color:var(--mut)}
</style></head>
<body>
<div class="hero">
  <span class="eb">Live in 40+ cities</span>
  <h1>Same-day delivery, tracked block by block.</h1>
  <p>Watch your order move in real time, from the kitchen to your front door.</p>
  <div class="map">
    <svg class="roads" viewBox="0 0 400 260"><path d="M0,120 C100,100 180,160 400,110"/><path d="M60,0 C100,80 140,180 180,260"/><path d="M250,0 C240,90 280,160 320,260"/></svg>
    <div class="ripple"></div>
    <div class="pin"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C7.6 2 4 5.6 4 10c0 6 8 12 8 12s8-6 8-12c0-4.4-3.6-8-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg></div>
    <div class="pin2" data-cf-keep-dark></div>
    <div class="card"><b>Order #4471</b><span>Arriving in 8 minutes</span></div>
  </div>
</div>
</body></html>
`,

  "social-proof-wall": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Social Proof Wall</title><style>
:root{--bg:#fdf6f3;--ink:#2b211d;--mut:#8a7a72;--rose:#c9576b;--card:#fff;--line:#f0e2dc}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px;display:flex;justify-content:center}
.grid{columns:3 220px;column-gap:16px;max-width:700px}
.card{break-inside:avoid;background:var(--card);border:1px solid var(--line);border-radius:14px;padding:16px;margin-bottom:16px;opacity:0;transform:translateY(14px)}
.card .stars{color:#e8ab3d;font-size:12px;margin-bottom:8px}
.card p{margin:0;font-size:12.5px;color:var(--ink);line-height:1.6}
.card .who{display:flex;align-items:center;gap:8px;margin-top:12px}
.card .who span{width:24px;height:24px;border-radius:50%;flex:none}
.card .who b{font-size:11.5px;color:var(--ink);display:block}
@media(max-width:600px){.grid{columns:2 140px}}
</style></head>
<body>
<div class="grid" id="grid">
  <div class="card"><div class="stars">★★★★★</div><p>Switched our whole agency over in a week. Zero regrets.</p><div class="who"><span style="background:#c9576b"></span><b>Nadia F.</b></div></div>
  <div class="card"><div class="stars">★★★★★</div><p>The reporting alone is worth the subscription.</p><div class="who"><span style="background:#e8ab3d"></span><b>Tomas B.</b></div></div>
  <div class="card"><div class="stars">★★★★★</div><p>Finally, a tool our clients actually understand too.</p><div class="who"><span style="background:#7a9b76"></span><b>Lena W.</b></div></div>
  <div class="card"><div class="stars">★★★★★</div><p>Setup took nine minutes. I know because I timed it.</p><div class="who"><span style="background:#6b7fc9"></span><b>Kabir M.</b></div></div>
  <div class="card"><div class="stars">★★★★★</div><p>Best onboarding experience of any SaaS we've tried.</p><div class="who"><span style="background:#c9576b"></span><b>Owen P.</b></div></div>
  <div class="card"><div class="stars">★★★★★</div><p>Our churn dropped 30% the quarter after we switched.</p><div class="who"><span style="background:#e8ab3d"></span><b>Sara L.</b></div></div>
</div>
<script>
document.querySelectorAll(".card").forEach(function(c,i){
  setTimeout(function(){ c.style.transition="opacity .5s ease,transform .5s cubic-bezier(.2,.8,.2,1)"; c.style.opacity=1; c.style.transform="translateY(0)"; }, 100+i*90);
});
</script>
</body></html>
`,

  "expandable-review-card": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Expandable Review Card</title><style>
:root{--bg:#fdf6f3;--ink:#2b211d;--mut:#8a7a72;--rose:#c9576b;--card:#fff;--line:#f0e2dc}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.card{width:340px;background:var(--card);border:1px solid var(--line);border-radius:18px;padding:24px}
.top{display:flex;align-items:center;gap:11px;margin-bottom:12px}
.av{width:38px;height:38px;border-radius:50%;background:linear-gradient(135deg,#c9576b,#e8ab3d)}
.top b{display:block;font-size:13px;color:var(--ink)}
.top span{font-size:11.5px;color:var(--mut)}
.stars{color:#e8ab3d;font-size:13px;margin-bottom:10px}
.text{font-size:13px;color:var(--ink);line-height:1.7;overflow:hidden;max-height:4.6em;position:relative;transition:max-height .4s cubic-bezier(.2,.8,.2,1)}
.text.open{max-height:300px}
.text:not(.open):after{content:"";position:absolute;bottom:0;left:0;right:0;height:1.6em;background:linear-gradient(transparent,var(--card))}
.more{margin-top:10px;background:none;border:0;color:var(--rose);font-size:12.5px;font-weight:700;cursor:pointer;padding:0;font-family:inherit}
</style></head>
<body>
<div class="card">
  <div class="top"><div class="av"></div><div><b>Renata Silva</b><span>Verified customer · 3 weeks ago</span></div></div>
  <div class="stars">★★★★★</div>
  <div class="text" id="text">We evaluated six platforms before landing here, and honestly it wasn't close. The onboarding flow alone saved our team two full weeks of setup — everything from data migration to custom fields just worked on the first try. Support has been fast and genuinely helpful every time we've reached out, which after years of ticket queues on other tools felt almost suspicious. Would recommend to anyone still on the fence.</div>
  <button class="more" id="moreBtn">Read more</button>
</div>
<script>
var text=document.getElementById("text"), btn=document.getElementById("moreBtn");
btn.addEventListener("click",function(){
  var open=text.classList.toggle("open");
  btn.textContent = open ? "Show less" : "Read more";
});
</script>
</body></html>
`,

  "before-after-results-testimonial": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Before/After Results Testimonial</title><style>
:root{--bg:#fdf6f3;--ink:#2b211d;--mut:#8a7a72;--rose:#c9576b;--card:#fff;--line:#f0e2dc;--green:#5d8a5b}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.card{width:360px;background:var(--card);border:1px solid var(--line);border-radius:18px;padding:26px}
.quote{font-family:Georgia,serif;font-style:italic;font-size:16px;color:var(--ink);line-height:1.5;margin-bottom:18px}
.who{display:flex;align-items:center;gap:10px;margin-bottom:20px}
.who span{width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,#c9576b,#e8ab3d)}
.who b{font-size:12.5px;color:var(--ink);display:block}
.who i{font-size:11px;color:var(--mut);font-style:normal}
.stats{display:flex;gap:12px}
.stat{flex:1;background:#fbf4f1;border-radius:12px;padding:14px;text-align:center}
.stat b{display:block;font-size:22px;color:var(--green);font-weight:800}
.stat span{font-size:10.5px;color:var(--mut)}
.arrow{display:flex;align-items:center;justify-content:center;color:var(--mut)}
.arrow svg{width:16px;height:16px}
</style></head>
<body>
<div class="card">
  <div class="quote">"We went from drowning in support tickets to actually getting ahead of them — in six weeks."</div>
  <div class="who"><span></span><div><b>Renata Silva</b><i>Head of Support, Fenwick</i></div></div>
  <div class="stats">
    <div class="stat"><b id="before">184</b><span>Tickets/week — before</span></div>
    <div class="arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
    <div class="stat"><b id="after">0</b><span>Tickets/week — after</span></div>
  </div>
</div>
<script>
var after=document.getElementById("after"), target=41, start=null;
function step(ts){ if(!start)start=ts; var p=Math.min(1,(ts-start)/1000); after.textContent=Math.round(target*p); if(p<1)requestAnimationFrame(step); }
setTimeout(function(){ requestAnimationFrame(step); },300);
</script>
</body></html>
`,

  "video-call-style-testimonial": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Video Call Style Testimonial</title><style>
:root{--bg:#fdf6f3;--ink:#2b211d;--mut:#8a7a72;--rose:#c9576b}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.frame{width:340px;border-radius:18px;overflow:hidden;box-shadow:0 30px 60px -20px rgba(43,33,29,.25)}
.video{position:relative;height:220px;background:linear-gradient(160deg,#8a6b6f,#463236);display:flex;align-items:center;justify-content:center}
.video .av{width:74px;height:74px;border-radius:50%;background:linear-gradient(135deg,#c9576b,#e8ab3d);border:3px solid rgba(255,255,255,.3)}
.rec{position:absolute;top:12px;left:12px;display:flex;align-items:center;gap:6px;background:rgba(0,0,0,.35);color:#fff;font-size:10.5px;padding:4px 9px;border-radius:20px;font-family:ui-monospace,monospace}
.rec i{width:6px;height:6px;border-radius:50%;background:#ff5252;animation:pulse 1.4s ease-in-out infinite}
@keyframes pulse{50%{opacity:.3}}
.name-tag{position:absolute;bottom:12px;left:12px;background:rgba(0,0,0,.4);color:#fff;font-size:11.5px;padding:5px 10px;border-radius:7px}
.mini{position:absolute;bottom:12px;right:12px;width:56px;height:40px;border-radius:8px;background:linear-gradient(160deg,#c9c0be,#8a807c);border:2px solid #fff}
.text{background:#fff;padding:18px 20px}
.text p{margin:0;font-size:12.5px;color:var(--ink);line-height:1.6;font-style:italic}
.text .who{margin-top:10px;font-size:11px;color:var(--mut)}
</style></head>
<body>
<div class="frame">
  <div class="video" data-cf-keep-dark><div class="rec"><i></i>REC 04:12</div><div class="av"></div><div class="name-tag">Renata Silva</div><div class="mini"></div></div>
  <div class="text"><p>"I wasn't expecting to leave a video review, but genuinely — this tool earned it."</p><div class="who">Recorded customer story · Fenwick Inc.</div></div>
</div>
</body></html>
`,

  "star-breakdown-reviews": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Star Breakdown Reviews</title><style>
:root{--bg:#fdf6f3;--ink:#2b211d;--mut:#8a7a72;--rose:#c9576b;--card:#fff;--line:#f0e2dc;--gold:#e8ab3d}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.card{width:340px;background:var(--card);border:1px solid var(--line);border-radius:18px;padding:26px}
.top{display:flex;gap:20px;align-items:center;margin-bottom:22px}
.big{font-size:44px;font-weight:800;color:var(--ink)}
.top-right .stars{color:var(--gold);font-size:15px}
.top-right span{font-size:11.5px;color:var(--mut);display:block;margin-top:4px}
.rows{display:flex;flex-direction:column;gap:8px}
.row{display:flex;align-items:center;gap:10px;font-size:11.5px;color:var(--mut)}
.row .bar{flex:1;height:7px;background:#f5ece8;border-radius:5px;overflow:hidden}
.row .bar i{display:block;height:100%;background:var(--gold);border-radius:5px;width:0;transition:width 1s cubic-bezier(.2,.8,.2,1)}
.row .pct{width:30px;text-align:right}
</style></head>
<body>
<div class="card">
  <div class="top"><div class="big">4.9</div><div class="top-right"><div class="stars">★★★★★</div><span>Based on 2,412 reviews</span></div></div>
  <div class="rows" id="rows">
    <div class="row"><span>5★</span><div class="bar"><i data-w="88"></i></div><span class="pct">88%</span></div>
    <div class="row"><span>4★</span><div class="bar"><i data-w="9"></i></div><span class="pct">9%</span></div>
    <div class="row"><span>3★</span><div class="bar"><i data-w="2"></i></div><span class="pct">2%</span></div>
    <div class="row"><span>2★</span><div class="bar"><i data-w="1"></i></div><span class="pct">1%</span></div>
    <div class="row"><span>1★</span><div class="bar"><i data-w="0"></i></div><span class="pct">0%</span></div>
  </div>
</div>
<script>
setTimeout(function(){
  document.querySelectorAll("#rows .bar i").forEach(function(el,i){
    setTimeout(function(){ el.style.width=el.dataset.w+"%"; },i*100);
  });
},300);
</script>
</body></html>
`,

  "case-study-highlight-card": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Case Study Highlight Card</title><style>
:root{--bg:#fdf6f3;--ink:#2b211d;--mut:#8a7a72;--rose:#c9576b;--card:#fff;--line:#f0e2dc}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.card{width:360px;background:var(--card);border:1px solid var(--line);border-radius:18px;overflow:hidden;transition:transform .3s cubic-bezier(.2,.8,.2,1),box-shadow .3s}
.card:hover{transform:translateY(-6px);box-shadow:0 26px 54px -20px rgba(43,33,29,.25)}
.top{background:linear-gradient(155deg,#f5ece8,#fbf4f1);padding:26px;display:flex;justify-content:space-between;align-items:flex-start}
.logo{font-family:Georgia,serif;font-weight:700;font-style:italic;font-size:19px;color:var(--ink)}
.tag{font-size:10.5px;background:#fff;color:var(--rose);padding:4px 10px;border-radius:20px;font-weight:700}
.metric{padding:22px 26px 0}
.metric b{font-size:38px;color:var(--rose);font-weight:800}
.metric span{display:block;font-size:12px;color:var(--mut);margin-top:2px}
.body{padding:16px 26px 26px}
.body p{margin:0;font-size:13px;color:var(--ink);line-height:1.65}
.link{margin-top:14px;display:inline-flex;align-items:center;gap:7px;font-size:12.5px;font-weight:700;color:var(--ink);cursor:pointer}
.link svg{width:13px;height:13px;transition:transform .25s}
.card:hover .link svg{transform:translateX(4px)}
</style></head>
<body>
<div class="card">
  <div class="top"><div class="logo">Fenwick</div><span class="tag">Case study</span></div>
  <div class="metric"><b>+142%</b><span>Growth in qualified pipeline</span></div>
  <div class="body">
    <p>How a 40-person sales team replaced four disconnected tools with a single source of truth — and closed Q3 with their best pipeline ever.</p>
    <div class="link">Read the full story <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M7 17 17 7M7 7h10v10"/></svg></div>
  </div>
</div>
</body></html>
`,

  "progress-breadcrumb-nav": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Progress Breadcrumb Nav</title><style>
:root{--bg:#fff;--ink:#14161f;--mut:#6b7080;--sky:#0ea5e9;--line:#e7e9f0;--green:#16a34a}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:#f7f8fb;font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.wrap{width:min(460px,92vw)}
.crumb{display:flex;align-items:center}
.step{display:flex;flex-direction:column;align-items:center;gap:8px;cursor:pointer}
.circ{width:32px;height:32px;border-radius:50%;background:#fff;border:2px solid var(--line);color:var(--mut);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;transition:all .3s cubic-bezier(.2,.8,.2,1)}
.step.done .circ{background:var(--green);border-color:var(--green);color:#fff}
.step.on .circ{border-color:var(--sky);color:var(--sky);box-shadow:0 0 0 4px rgba(14,165,233,.12)}
.step span{font-size:11px;color:var(--mut);font-weight:600;white-space:nowrap}
.step.on span{color:var(--ink)}
.line{flex:1;height:2px;background:var(--line);margin:0 -2px 24px;position:relative;top:-16px}
.line i{position:absolute;inset:0;background:var(--green);width:0;transition:width .5s cubic-bezier(.2,.8,.2,1)}
.line.done i{width:100%}
.card{margin-top:30px;background:#fff;border:1px solid var(--line);border-radius:14px;padding:20px;text-align:center;font-size:13px;color:var(--mut)}
.card b{color:var(--ink);display:block;margin-bottom:6px;font-size:14px}
</style></head>
<body>
<div class="wrap">
  <div class="crumb" id="crumb">
    <div class="step done" data-i="0"><div class="circ"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg></div><span>Cart</span></div>
    <div class="line done"><i></i></div>
    <div class="step on" data-i="1"><div class="circ">2</div><span>Shipping</span></div>
    <div class="line"><i></i></div>
    <div class="step" data-i="2"><div class="circ">3</div><span>Payment</span></div>
    <div class="line"><i></i></div>
    <div class="step" data-i="3"><div class="circ">4</div><span>Confirm</span></div>
  </div>
  <div class="card" id="cardTxt"><b>Shipping details</b>Enter your delivery address to continue.</div>
</div>
<script>
var steps=document.querySelectorAll(".step"), lines=document.querySelectorAll(".line");
var copy=["Review cart","Shipping details","Payment method","Order confirmed"];
var desc=["Double-check your items before continuing.","Enter your delivery address to continue.","Add a payment method to place your order.","Your order has been placed successfully."];
steps.forEach(function(s){
  s.addEventListener("click",function(){
    var idx=+s.dataset.i;
    steps.forEach(function(st,i){ st.classList.toggle("on", i===idx); st.classList.toggle("done", i<idx); });
    lines.forEach(function(l,i){ l.classList.toggle("done", i<idx); });
    document.getElementById("cardTxt").innerHTML="<b>"+copy[idx]+"</b>"+desc[idx];
  });
});
</script>
</body></html>
`,

  "bottom-tab-bar-nav": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Bottom Tab Bar Nav</title><style>
:root{--bg:#fff;--ink:#14161f;--mut:#9aa0ae;--sky:#0ea5e9;--line:#e7e9f0}
*{box-sizing:border-box}
body{margin:0;height:100vh;display:flex;align-items:flex-end;justify-content:center;background:#f7f8fb;font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.phone{width:280px;height:420px;background:#fff;border-radius:28px;border:8px solid #fff;box-shadow:0 30px 70px -24px rgba(20,22,31,.3);position:relative;overflow:hidden}
.content{padding:20px;color:var(--mut);font-size:12px}
.content b{display:block;color:var(--ink);font-size:15px;margin-bottom:6px}
.tabbar{position:absolute;bottom:0;left:0;right:0;background:#fff;border-top:1px solid var(--line);display:flex;padding:10px 6px 14px}
.tab{flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;cursor:pointer;position:relative}
.tab svg{width:21px;height:21px;color:var(--mut);transition:color .2s,transform .2s}
.tab span{font-size:9.5px;color:var(--mut);font-weight:600;transition:color .2s}
.tab.on svg{color:var(--sky);transform:translateY(-2px)}
.tab.on span{color:var(--sky)}
.indicator{position:absolute;top:-10px;left:50%;width:4px;height:4px;border-radius:50%;background:var(--sky);opacity:0;transition:opacity .2s}
.tab.on .indicator{opacity:1}
</style></head>
<body>
<div class="phone">
  <div class="content" id="content"><b>Home</b>Your personalized feed and recent activity.</div>
  <div class="tabbar" id="tabbar">
    <div class="tab on" data-t="Home"><div class="indicator"></div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg><span>Home</span></div>
    <div class="tab" data-t="Search"><div class="indicator"></div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg><span>Search</span></div>
    <div class="tab" data-t="Alerts"><div class="indicator"></div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/></svg><span>Alerts</span></div>
    <div class="tab" data-t="Profile"><div class="indicator"></div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21a8 8 0 1 0-16 0"/><circle cx="12" cy="7" r="4"/></svg><span>Profile</span></div>
  </div>
</div>
<script>
var descs={Home:"Your personalized feed and recent activity.",Search:"Find people, posts and topics.",Alerts:"Nothing new right now — check back later.",Profile:"View and edit your public profile."};
document.querySelectorAll(".tab").forEach(function(t){
  t.addEventListener("click",function(){
    document.querySelectorAll(".tab").forEach(function(x){x.classList.remove("on")}); t.classList.add("on");
    document.getElementById("content").innerHTML="<b>"+t.dataset.t+"</b>"+descs[t.dataset.t];
  });
});
</script>
</body></html>
`,

  "vertical-dot-nav": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Vertical Dot Nav</title><style>
:root{--bg:#fff;--ink:#14161f;--mut:#9aa0ae;--sky:#0ea5e9;--line:#e7e9f0}
*{box-sizing:border-box}
body{margin:0;height:100vh;overflow-y:scroll;font-family:Inter,ui-sans-serif,Arial,sans-serif;scroll-behavior:smooth}
section{height:100vh;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:700;color:#fff}
.s0{background:linear-gradient(150deg,#0ea5e9,#0369a1)}
.s1{background:linear-gradient(150deg,#14161f,#31354a)}
.s2{background:linear-gradient(150deg,#0ea5e9,#075985)}
.s3{background:linear-gradient(150deg,#1e2130,#0ea5e9)}
.dots{position:fixed;right:26px;top:50%;transform:translateY(-50%);display:flex;flex-direction:column;gap:16px;z-index:5}
.dot{width:9px;height:9px;border-radius:50%;background:rgba(20,22,31,.15);cursor:pointer;position:relative;transition:background .3s}
.dot .lbl{position:absolute;right:20px;top:50%;transform:translateY(-50%);background:#14161f;color:#fff;font-size:11px;padding:5px 9px;border-radius:6px;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .2s}
.dot:hover .lbl{opacity:1}
.dot.on{background:var(--sky);transform:scale(1.3)}
</style></head>
<body>
<div class="dots" id="dots" data-cf-keep-dark>
  <div class="dot on" data-i="0"><span class="lbl">Overview</span></div>
  <div class="dot" data-i="1"><span class="lbl">Features</span></div>
  <div class="dot" data-i="2"><span class="lbl">Pricing</span></div>
  <div class="dot" data-i="3"><span class="lbl">Contact</span></div>
</div>
<section class="s0" id="sec0">Overview</section>
<section class="s1" id="sec1">Features</section>
<section class="s2" id="sec2">Pricing</section>
<section class="s3" id="sec3">Contact</section>
<script>
var dots=document.querySelectorAll(".dot"), sections=[0,1,2,3].map(function(i){return document.getElementById("sec"+i)});
dots.forEach(function(d){
  d.addEventListener("click",function(){ sections[+d.dataset.i].scrollIntoView({behavior:"smooth"}); });
});
window.addEventListener("scroll",function(){
  var mid=window.scrollY+window.innerHeight/2, idx=0;
  sections.forEach(function(s,i){ if(s.offsetTop<=mid) idx=i; });
  dots.forEach(function(d,i){ d.classList.toggle("on", i===idx); });
});
</script>
</body></html>
`,

  "search-expand-nav": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Search Expand Nav</title><style>
:root{--bg:#fff;--ink:#14161f;--mut:#6b7080;--sky:#0ea5e9;--line:#e7e9f0}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;background:#f7f8fb;font-family:Inter,ui-sans-serif,Arial,sans-serif}
nav{background:var(--bg);border-bottom:1px solid var(--line);padding:16px 32px;display:flex;align-items:center;gap:24px}
.brand{font-weight:800;font-size:16px;color:var(--ink)}
.links{display:flex;gap:22px;font-size:13px;color:var(--mut);font-weight:600}
.right{margin-left:auto;display:flex;align-items:center;gap:14px}
.search-wrap{display:flex;align-items:center;background:#f7f8fb;border:1px solid var(--line);border-radius:20px;overflow:hidden;width:38px;height:38px;transition:width .35s cubic-bezier(.2,.8,.2,1)}
.search-wrap.open{width:220px}
.search-wrap button{width:38px;height:38px;border:0;background:none;display:flex;align-items:center;justify-content:center;cursor:pointer;flex:none;color:var(--mut)}
.search-wrap button svg{width:16px;height:16px}
.search-wrap input{border:0;background:none;outline:none;font-size:13px;font-family:inherit;width:100%;color:var(--ink);opacity:0;transition:opacity .25s}
.search-wrap.open input{opacity:1}
.avatar{width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,#0ea5e9,#0369a1)}
.stage{padding:60px;text-align:center;color:var(--mut);font-size:13px}
</style></head>
<body>
<nav>
  <div class="brand">CoreKit</div>
  <div class="links"><span>Product</span><span>Pricing</span><span>Docs</span></div>
  <div class="right">
    <div class="search-wrap" id="wrap"><button id="btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></button><input type="text" id="inp" placeholder="Search docs, projects…"></div>
    <div class="avatar"></div>
  </div>
</nav>
<div class="stage">Click the search icon to expand</div>
<script>
var wrap=document.getElementById("wrap"), btn=document.getElementById("btn"), inp=document.getElementById("inp");
btn.addEventListener("click",function(){
  wrap.classList.toggle("open");
  if(wrap.classList.contains("open")) setTimeout(function(){ inp.focus(); },300);
});
document.addEventListener("click",function(e){ if(!wrap.contains(e.target)) wrap.classList.remove("open"); });
</script>
</body></html>
`,

  "icon-rail-nav": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Icon Rail Nav</title><style>
:root{--bg:#14161f;--sky:#0ea5e9;--mut:#787e94}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:flex;background:#f7f8fb;font-family:Inter,ui-sans-serif,Arial,sans-serif}
.rail{width:64px;background:#14161f;display:flex;flex-direction:column;align-items:center;padding:18px 0;gap:6px}
.logo{width:32px;height:32px;border-radius:9px;background:var(--sky);margin-bottom:16px}
.ic{width:42px;height:42px;border-radius:11px;display:flex;align-items:center;justify-content:center;color:var(--mut);cursor:pointer;position:relative;transition:background .2s,color .2s}
.ic:hover{background:rgba(255,255,255,.06);color:#fff}
.ic.on{background:rgba(14,165,233,.15);color:var(--sky)}
.ic svg{width:19px;height:19px}
.tip{position:absolute;left:calc(100% + 10px);top:50%;transform:translateY(-50%);background:#14161f;color:#fff;font-size:11px;padding:6px 10px;border-radius:7px;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .2s;z-index:5}
.ic:hover .tip{opacity:1}
.stage{flex:1;padding:60px;color:#6b7080;font-size:13px}
</style></head>
<body>
<div class="rail" data-cf-keep-dark>
  <div class="logo"></div>
  <div class="ic on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/></svg><span class="tip">Dashboard</span></div>
  <div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h4l3 8 4-16 3 8h4"/></svg><span class="tip">Analytics</span></div>
  <div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21a8 8 0 1 0-16 0"/><circle cx="12" cy="7" r="4"/></svg><span class="tip">Team</span></div>
  <div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/></svg><span class="tip">Notifications</span></div>
  <div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82"/></svg><span class="tip">Settings</span></div>
</div>
<div class="stage">Hover an icon to see its tooltip</div>
<script>
document.querySelectorAll(".ic").forEach(function(ic){
  ic.addEventListener("click",function(){ document.querySelectorAll(".ic").forEach(function(x){x.classList.remove("on")}); ic.classList.add("on"); });
});
</script>
</body></html>
`,

  "pagination-nav": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Pagination Nav</title><style>
:root{--bg:#fff;--ink:#14161f;--mut:#9aa0ae;--sky:#0ea5e9;--line:#e7e9f0}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:#f7f8fb;font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.card{background:#fff;border:1px solid var(--line);border-radius:16px;padding:22px 26px}
.rows{display:flex;flex-direction:column;gap:10px;margin-bottom:18px}
.row{display:flex;justify-content:space-between;font-size:12.5px;color:var(--ink);padding:8px 0;border-bottom:1px solid #f2f3f7}
.row span{color:var(--mut)}
.pager{display:flex;align-items:center;justify-content:center;gap:6px}
.pg-btn{width:32px;height:32px;border-radius:9px;border:1px solid var(--line);background:#fff;color:var(--mut);font-size:12.5px;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center}
.pg-btn:hover{border-color:var(--sky);color:var(--sky)}
.pg-btn.on{background:var(--sky);color:#fff;border-color:var(--sky)}
.pg-btn svg{width:13px;height:13px}
.pg-btn:disabled{opacity:.35;pointer-events:none}
</style></head>
<body>
<div class="card">
  <div class="rows" id="rows"></div>
  <div class="pager" id="pager"></div>
</div>
<script>
var totalPages=6, cur=1;
var items=["Onboarding flow redesign","API rate limiting","Dark mode polish","Billing invoice export","Mobile nav refactor","Search relevance tuning","SSO rollout","Webhook retries","Team roles UI","Changelog automation","Slack integration","Audit log export"];
function renderRows(){
  var start=(cur-1)*2, end=start+2;
  var html="";
  for(var i=start;i<Math.min(end,items.length);i++) html+='<div class="row">'+items[i]+'<span>#'+(1000+i)+'</span></div>';
  document.getElementById("rows").innerHTML=html;
}
function renderPager(){
  var html='<button class="pg-btn" id="prev" '+(cur===1?"disabled":"")+'><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="m15 18-6-6 6-6"/></svg></button>';
  for(var p=1;p<=totalPages;p++) html+='<button class="pg-btn'+(p===cur?" on":"")+'" data-p="'+p+'">'+p+'</button>';
  html+='<button class="pg-btn" id="next" '+(cur===totalPages?"disabled":"")+'><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="m9 18 6-6-6-6"/></svg></button>';
  document.getElementById("pager").innerHTML=html;
  document.querySelectorAll(".pg-btn[data-p]").forEach(function(b){ b.addEventListener("click",function(){ cur=+b.dataset.p; render(); }); });
  var prev=document.getElementById("prev"), next=document.getElementById("next");
  if(prev) prev.addEventListener("click",function(){ cur--; render(); });
  if(next) next.addEventListener("click",function(){ cur++; render(); });
}
function render(){ renderRows(); renderPager(); }
render();
</script>
</body></html>
`,

  "rating-feedback-form": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Rating Feedback Form</title><style>
:root{--bg:#f5f6fb;--ink:#191b29;--mut:#6b7086;--indigo:#4338ca;--line:#e2e4f0;--card:#fff;--gold:#f5a524;--green:#16a34a}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.card{width:320px;background:var(--card);border:1px solid var(--line);border-radius:18px;padding:28px;box-shadow:0 24px 50px -24px rgba(25,27,41,.18);text-align:center}
.card h3{margin:0 0 4px;font-size:16px;color:var(--ink)}
.card p{margin:0 0 18px;font-size:12.5px;color:var(--mut)}
.stars{display:flex;justify-content:center;gap:6px;margin-bottom:18px}
.stars svg{width:32px;height:32px;color:var(--line);cursor:pointer;transition:transform .15s,color .15s}
.stars svg.on{color:var(--gold)}
.stars svg:hover{transform:scale(1.15)}
textarea{width:100%;min-height:72px;padding:12px;border-radius:10px;border:1.5px solid var(--line);font-family:inherit;font-size:12.5px;resize:none;outline:none;transition:border-color .2s;margin-bottom:14px;text-align:left}
textarea:focus{border-color:var(--indigo)}
button{width:100%;padding:12px;border-radius:10px;border:0;background:var(--indigo);color:#fff;font-size:13px;font-weight:700;cursor:pointer}
.thanks{display:none;padding:14px 0}
.thanks svg{width:40px;height:40px;color:var(--green);margin-bottom:8px}
.thanks b{display:block;color:var(--ink);font-size:14px}
</style></head>
<body>
<div class="card" id="card">
  <div id="form">
    <h3>How was your experience?</h3>
    <p>Your feedback helps us improve.</p>
    <div class="stars" id="stars">
      <svg viewBox="0 0 24 24" fill="currentColor" data-v="1"><path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8 5.8 21.1 7 14.2 2 9.3l6.9-1z"/></svg>
      <svg viewBox="0 0 24 24" fill="currentColor" data-v="2"><path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8 5.8 21.1 7 14.2 2 9.3l6.9-1z"/></svg>
      <svg viewBox="0 0 24 24" fill="currentColor" data-v="3"><path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8 5.8 21.1 7 14.2 2 9.3l6.9-1z"/></svg>
      <svg viewBox="0 0 24 24" fill="currentColor" data-v="4"><path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8 5.8 21.1 7 14.2 2 9.3l6.9-1z"/></svg>
      <svg viewBox="0 0 24 24" fill="currentColor" data-v="5"><path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8 5.8 21.1 7 14.2 2 9.3l6.9-1z"/></svg>
    </div>
    <textarea placeholder="Tell us more (optional)"></textarea>
    <button id="submit">Submit feedback</button>
  </div>
  <div class="thanks" id="thanks"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg><b>Thanks for the feedback!</b></div>
</div>
<script>
var stars=document.querySelectorAll(".stars svg"), val=0;
stars.forEach(function(s){
  s.addEventListener("mouseenter",function(){ paint(+s.dataset.v); });
  s.addEventListener("click",function(){ val=+s.dataset.v; paint(val); });
});
document.getElementById("stars").addEventListener("mouseleave",function(){ paint(val); });
function paint(n){ stars.forEach(function(s){ s.classList.toggle("on", +s.dataset.v<=n); }); }
document.getElementById("submit").addEventListener("click",function(){
  document.getElementById("form").style.display="none";
  document.getElementById("thanks").style.display="block";
});
</script>
</body></html>
`,

  "range-slider-form": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Range Slider Form</title><style>
:root{--bg:#f5f6fb;--ink:#191b29;--mut:#6b7086;--indigo:#4338ca;--line:#e2e4f0;--card:#fff}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.card{width:320px;background:var(--card);border:1px solid var(--line);border-radius:18px;padding:28px;box-shadow:0 24px 50px -24px rgba(25,27,41,.18)}
.card h3{margin:0 0 20px;font-size:16px;color:var(--ink)}
.field{margin-bottom:22px}
.field label{display:flex;justify-content:space-between;font-size:12.5px;color:var(--mut);margin-bottom:10px;font-weight:600}
.field label b{color:var(--indigo);font-size:14px}
input[type=range]{width:100%;appearance:none;height:5px;background:var(--line);border-radius:4px;outline:none}
input[type=range]::-webkit-slider-thumb{appearance:none;width:18px;height:18px;border-radius:50%;background:var(--indigo);cursor:pointer;box-shadow:0 0 0 5px rgba(67,56,202,.15)}
.ticks{display:flex;justify-content:space-between;font-size:10px;color:var(--mut);margin-top:6px}
button{width:100%;padding:12px;border-radius:10px;border:0;background:var(--indigo);color:#fff;font-size:13px;font-weight:700;cursor:pointer;margin-top:6px}
</style></head>
<body>
<div class="card">
  <h3>Project budget</h3>
  <div class="field"><label>Monthly budget <b id="v1">$5,000</b></label><input type="range" min="500" max="20000" step="500" value="5000" id="s1"><div class="ticks"><span>$500</span><span>$20,000</span></div></div>
  <div class="field"><label>Team experience <b id="v2">Mid-level</b></label><input type="range" min="0" max="2" step="1" value="1" id="s2"><div class="ticks"><span>Junior</span><span>Senior</span></div></div>
  <button>Get matched with a team</button>
</div>
<script>
var s1=document.getElementById("s1"), v1=document.getElementById("v1");
s1.addEventListener("input",function(){ v1.textContent="$"+(+s1.value).toLocaleString("en-US"); });
var s2=document.getElementById("s2"), v2=document.getElementById("v2"), labels=["Junior","Mid-level","Senior"];
s2.addEventListener("input",function(){ v2.textContent=labels[+s2.value]; });
</script>
</body></html>
`,

  "tag-input-form": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Tag Input Form</title><style>
:root{--bg:#f5f6fb;--ink:#191b29;--mut:#6b7086;--indigo:#4338ca;--line:#e2e4f0;--card:#fff}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.card{width:320px;background:var(--card);border:1px solid var(--line);border-radius:18px;padding:26px;box-shadow:0 24px 50px -24px rgba(25,27,41,.18)}
.card h3{margin:0 0 4px;font-size:16px;color:var(--ink)}
.card p{margin:0 0 16px;font-size:12px;color:var(--mut)}
.tagbox{display:flex;flex-wrap:wrap;gap:7px;padding:10px;border:1.5px solid var(--line);border-radius:10px;min-height:46px;transition:border-color .2s}
.tagbox.focus{border-color:var(--indigo)}
.tag{display:flex;align-items:center;gap:6px;background:#eeecfd;color:var(--indigo);font-size:12px;font-weight:600;padding:5px 6px 5px 10px;border-radius:8px;animation:pop .2s cubic-bezier(.34,1.56,.64,1)}
@keyframes pop{from{transform:scale(.8);opacity:0}to{transform:scale(1);opacity:1}}
.tag button{border:0;background:rgba(67,56,202,.15);color:var(--indigo);width:16px;height:16px;border-radius:50%;cursor:pointer;font-size:11px;line-height:1;display:flex;align-items:center;justify-content:center}
.tagbox input{border:0;outline:none;font-size:12.5px;font-family:inherit;flex:1;min-width:80px;padding:4px}
.hint{font-size:10.5px;color:var(--mut);margin-top:8px}
</style></head>
<body>
<div class="card">
  <h3>Skills</h3>
  <p>Type a skill and press Enter</p>
  <div class="tagbox" id="box"><span class="tag">React<button data-i="0">×</button></span><span class="tag">TypeScript<button data-i="1">×</button></span><input type="text" id="inp" placeholder="Add a skill…"></div>
  <div class="hint">Press Enter to add, Backspace to remove the last</div>
</div>
<script>
var box=document.getElementById("box"), inp=document.getElementById("inp"), tags=["React","TypeScript"];
inp.addEventListener("focus",function(){ box.classList.add("focus"); });
inp.addEventListener("blur",function(){ box.classList.remove("focus"); });
function render(){
  box.querySelectorAll(".tag").forEach(function(t){t.remove()});
  tags.forEach(function(t,i){
    var el=document.createElement("span"); el.className="tag";
    el.innerHTML=t+'<button data-i="'+i+'">×</button>';
    box.insertBefore(el, inp);
  });
  box.querySelectorAll(".tag button").forEach(function(b){
    b.addEventListener("click",function(){ tags.splice(+b.dataset.i,1); render(); });
  });
}
inp.addEventListener("keydown",function(e){
  if(e.key==="Enter" && inp.value.trim()){ tags.push(inp.value.trim()); inp.value=""; render(); e.preventDefault(); }
  else if(e.key==="Backspace" && !inp.value){ tags.pop(); render(); }
});
render();
</script>
</body></html>
`,

  "signature-pad-form": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Signature Pad Form</title><style>
:root{--bg:#f5f6fb;--ink:#191b29;--mut:#6b7086;--indigo:#4338ca;--line:#e2e4f0;--card:#fff}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.card{width:340px;background:var(--card);border:1px solid var(--line);border-radius:18px;padding:24px;box-shadow:0 24px 50px -24px rgba(25,27,41,.18)}
.card h3{margin:0 0 4px;font-size:16px;color:var(--ink)}
.card p{margin:0 0 14px;font-size:12px;color:var(--mut)}
.pad-wrap{border:1.5px dashed var(--line);border-radius:12px;position:relative;background:#fafafd}
canvas{display:block;width:100%;height:150px;cursor:crosshair;border-radius:12px}
.placeholder{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:var(--mut);font-size:12px;pointer-events:none}
.row{display:flex;gap:10px;margin-top:14px}
button{flex:1;padding:11px;border-radius:10px;border:0;font-size:12.5px;font-weight:700;cursor:pointer}
.clear{background:var(--bg);color:var(--ink);border:1px solid var(--line)!important}
.save{background:var(--indigo);color:#fff}
</style></head>
<body>
<div class="card">
  <h3>Sign to confirm</h3>
  <p>Draw your signature below</p>
  <div class="pad-wrap"><canvas id="pad" width="292" height="150"></canvas><div class="placeholder" id="ph">Sign here</div></div>
  <div class="row"><button class="clear" id="clear">Clear</button><button class="save" id="save">Confirm signature</button></div>
</div>
<script>
var canvas=document.getElementById("pad"), ctx=canvas.getContext("2d"), ph=document.getElementById("ph");
var drawing=false, hasDrawn=false;
ctx.strokeStyle="#4338ca"; ctx.lineWidth=2.4; ctx.lineCap="round"; ctx.lineJoin="round";
function pos(e){
  var r=canvas.getBoundingClientRect();
  var cx=(e.touches?e.touches[0].clientX:e.clientX)-r.left;
  var cy=(e.touches?e.touches[0].clientY:e.clientY)-r.top;
  return {x:cx*(canvas.width/r.width), y:cy*(canvas.height/r.height)};
}
function start(e){ drawing=true; hasDrawn=true; ph.style.display="none"; var p=pos(e); ctx.beginPath(); ctx.moveTo(p.x,p.y); e.preventDefault(); }
function move(e){ if(!drawing)return; var p=pos(e); ctx.lineTo(p.x,p.y); ctx.stroke(); e.preventDefault(); }
function end(){ drawing=false; }
canvas.addEventListener("mousedown",start); canvas.addEventListener("mousemove",move); window.addEventListener("mouseup",end);
canvas.addEventListener("touchstart",start); canvas.addEventListener("touchmove",move); canvas.addEventListener("touchend",end);
document.getElementById("clear").addEventListener("click",function(){ ctx.clearRect(0,0,canvas.width,canvas.height); ph.style.display="flex"; hasDrawn=false; });
document.getElementById("save").addEventListener("click",function(){ if(hasDrawn) this.textContent="Signature saved ✓"; });
</script>
</body></html>
`,

  "conditional-fields-form": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Conditional Fields Form</title><style>
:root{--bg:#f5f6fb;--ink:#191b29;--mut:#6b7086;--indigo:#4338ca;--line:#e2e4f0;--card:#fff}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.card{width:320px;background:var(--card);border:1px solid var(--line);border-radius:18px;padding:26px;box-shadow:0 24px 50px -24px rgba(25,27,41,.18)}
.card h3{margin:0 0 18px;font-size:16px;color:var(--ink)}
.opts{display:flex;flex-direction:column;gap:10px;margin-bottom:6px}
.opt{display:flex;align-items:center;gap:10px;padding:12px 14px;border:1.5px solid var(--line);border-radius:11px;cursor:pointer;transition:border-color .2s,background .2s}
.opt.on{border-color:var(--indigo);background:#f6f5fe}
.radio{width:17px;height:17px;border-radius:50%;border:1.5px solid var(--line);position:relative;flex:none}
.opt.on .radio{border-color:var(--indigo)}
.opt.on .radio:after{content:"";position:absolute;inset:3px;border-radius:50%;background:var(--indigo)}
.opt b{font-size:13px;color:var(--ink)}
.extra{max-height:0;overflow:hidden;transition:max-height .35s cubic-bezier(.2,.8,.2,1)}
.extra.open{max-height:180px;margin-top:14px}
.extra-in label{display:block;font-size:11px;color:var(--mut);margin-bottom:5px;font-weight:600}
.extra-in input{width:100%;padding:10px 12px;border:1.5px solid var(--line);border-radius:9px;font-size:12.5px;font-family:inherit;outline:none;margin-bottom:10px}
.extra-in input:focus{border-color:var(--indigo)}
button{width:100%;padding:12px;border-radius:10px;border:0;background:var(--indigo);color:#fff;font-size:13px;font-weight:700;cursor:pointer;margin-top:8px}
</style></head>
<body>
<div class="card">
  <h3>How will you use this?</h3>
  <div class="opts">
    <div class="opt on" data-v="personal"><div class="radio"></div><b>Personal project</b></div>
    <div class="opt" data-v="team"><div class="radio"></div><b>With my team</b></div>
  </div>
  <div class="extra" id="extraTeam"><div class="extra-in"><label>Team name</label><input type="text" placeholder="Design Team"><label>Invite emails</label><input type="text" placeholder="teammate@company.com"></div></div>
  <button>Continue</button>
</div>
<script>
var opts=document.querySelectorAll(".opt"), extra=document.getElementById("extraTeam");
opts.forEach(function(o){
  o.addEventListener("click",function(){
    opts.forEach(function(x){x.classList.remove("on")}); o.classList.add("on");
    extra.classList.toggle("open", o.dataset.v==="team");
  });
});
</script>
</body></html>
`,

  "case-study-scroll-reveal": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Case Study Scroll Reveal</title><style>
:root{--bg:#0e0e10;--ink:#f2f2f0;--mut:#8a8a86;--lime:#d4ff3f}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);font-family:"Space Grotesk",Inter,ui-sans-serif,Arial,sans-serif}
.sec{min-height:100vh;display:flex;align-items:center;padding:40px;gap:40px}
.sec .num{font-family:ui-monospace,monospace;font-size:13px;color:var(--lime);margin-bottom:14px;opacity:0;transform:translateY(16px)}
.sec h3{margin:0;font-size:clamp(26px,4vw,42px);color:var(--ink);font-weight:700;opacity:0;transform:translateY(16px)}
.sec p{margin:16px 0 0;font-size:14px;color:var(--mut);max-width:340px;opacity:0;transform:translateY(16px)}
.vis{flex:none;width:220px;height:220px;border-radius:16px;opacity:0;transform:translateY(16px) scale(.94)}
.hint{position:fixed;bottom:24px;left:50%;transform:translateX(-50%);font-size:10.5px;color:var(--mut);letter-spacing:.06em;text-transform:uppercase}
</style></head>
<body data-cf-keep-dark>
<section class="sec" data-i="0"><div><div class="num">01 / Aperture</div><h3>A brand system built for motion.</h3><p>Complete identity redesign for a camera-gear startup, from wordmark to packaging.</p></div><div class="vis" style="background:linear-gradient(155deg,#d4ff3f,#4a5a10)"></div></section>
<section class="sec" data-i="1"><div><div class="num">02 / Northwind</div><h3>An interface that gets out of the way.</h3><p>Full web redesign focused on speed — 40% faster time-to-first-booking.</p></div><div class="vis" style="background:linear-gradient(155deg,#f2f2f0,#4a4a48)"></div></section>
<section class="sec" data-i="2"><div><div class="num">03 / Vellum</div><h3>Packaging that survives the unboxing video.</h3><p>Structural and print design for a stationery brand's flagship line.</p></div><div class="vis" style="background:linear-gradient(155deg,#8a8a86,#2a2a28)"></div></section>
<div class="hint">Scroll to reveal each case study</div>
<script>
function onScroll(){
  document.querySelectorAll(".sec").forEach(function(sec){
    var r=sec.getBoundingClientRect();
    var visible = r.top < window.innerHeight*.7 && r.bottom > window.innerHeight*.3;
    sec.querySelectorAll(".num,h3,p,.vis").forEach(function(el,i){
      if(visible){
        el.style.transition="opacity .6s ease "+(i*.08)+"s,transform .6s cubic-bezier(.2,.8,.2,1) "+(i*.08)+"s";
        el.style.opacity=1;
        el.style.transform = el.classList.contains("vis") ? "translateY(0) scale(1)" : "translateY(0)";
      }
    });
  });
}
window.addEventListener("scroll",onScroll);
onScroll();
</script>
</body></html>
`,

  "cursor-preview-portfolio-list": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Cursor Preview Portfolio List</title><style>
:root{--bg:#0e0e10;--ink:#f2f2f0;--mut:#8a8a86;--lime:#d4ff3f;--line:rgba(255,255,255,.1)}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;background:var(--bg);font-family:"Space Grotesk",Inter,ui-sans-serif,Arial,sans-serif;padding:50px;display:grid;place-items:center;cursor:default}
.list{width:min(420px,92vw);position:relative}
.row{display:flex;align-items:center;justify-content:space-between;padding:20px 4px;border-bottom:1px solid var(--line)}
.row:first-child{border-top:1px solid var(--line)}
.row b{font-size:18px;color:var(--mut);font-weight:600;transition:color .25s}
.row.hot b{color:var(--ink)}
.row span{font-size:11px;color:var(--mut);font-family:ui-monospace,monospace}
.preview{position:fixed;top:0;left:0;width:160px;height:110px;border-radius:12px;overflow:hidden;pointer-events:none;opacity:0;transform:scale(.9);transition:opacity .25s,transform .25s;z-index:5}
.preview.show{opacity:1;transform:scale(1)}
.preview .ph{width:100%;height:100%}
</style></head>
<body data-cf-keep-dark>
<div class="list" id="list">
  <div class="row" data-c="linear-gradient(155deg,#d4ff3f,#4a5a10)"><b>Aperture</b><span>2025</span></div>
  <div class="row" data-c="linear-gradient(155deg,#f2f2f0,#4a4a48)"><b>Northwind</b><span>2025</span></div>
  <div class="row" data-c="linear-gradient(155deg,#8a8a86,#2a2a28)"><b>Vellum</b><span>2024</span></div>
  <div class="row" data-c="linear-gradient(155deg,#d4ff3f,#7a9e1f)"><b>Cascade</b><span>2024</span></div>
</div>
<div class="preview" id="preview"><div class="ph" id="previewPh"></div></div>
<script>
var rows=document.querySelectorAll(".row"), preview=document.getElementById("preview"), ph=document.getElementById("previewPh");
rows.forEach(function(r){
  r.addEventListener("mouseenter",function(){
    rows.forEach(function(x){x.classList.remove("hot")}); r.classList.add("hot");
    ph.style.background=r.dataset.c;
    preview.classList.add("show");
  });
  r.addEventListener("mouseleave",function(){ r.classList.remove("hot"); preview.classList.remove("show"); });
});
document.addEventListener("mousemove",function(e){
  preview.style.transform="translate("+(e.clientX+20)+"px,"+(e.clientY-55)+"px)"+(preview.classList.contains("show")?" scale(1)":" scale(.9)");
});
</script>
</body></html>
`,

  "split-screen-portfolio": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Split Screen Portfolio</title><style>
:root{--bg:#0e0e10;--ink:#f2f2f0;--mut:#8a8a86;--lime:#d4ff3f}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;grid-template-columns:1fr 1fr;background:var(--bg);font-family:"Space Grotesk",Inter,ui-sans-serif,Arial,sans-serif}
.txt{padding:60px;display:flex;flex-direction:column;justify-content:center}
.eb{font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--lime);margin-bottom:14px}
h2{margin:0;font-size:clamp(28px,3.4vw,42px);color:var(--ink);font-weight:700;line-height:1.1}
p{margin:16px 0 24px;font-size:14px;color:var(--mut);max-width:340px}
.tags{display:flex;gap:8px;flex-wrap:wrap}
.tag{font-size:11px;color:var(--ink);border:1px solid rgba(255,255,255,.15);padding:5px 12px;border-radius:20px}
.vis{position:relative;overflow:hidden}
.vis .ph{position:absolute;inset:0;background:linear-gradient(155deg,#d4ff3f,#4a5a10);transition:transform 8s ease}
.vis:hover .ph{transform:scale(1.1)}
@media(max-width:900px){body{grid-template-columns:1fr}.vis{height:320px}}
</style></head>
<body data-cf-keep-dark>
<div class="txt"><span class="eb">Featured project</span><h2>Aperture — a brand for people who notice light.</h2><p>Full identity system: wordmark, packaging, and a site that loads in under a second on 3G.</p><div class="tags"><span class="tag">Branding</span><span class="tag">Web</span><span class="tag">Packaging</span></div></div>
<div class="vis"><div class="ph"></div></div>
</body></html>
`,

  "client-logo-showcase-grid": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Client Logo Showcase Grid</title><style>
:root{--bg:#0e0e10;--ink:#f2f2f0;--mut:#8a8a86;--lime:#d4ff3f;--line:rgba(255,255,255,.1)}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;background:var(--bg);font-family:"Space Grotesk",Inter,ui-sans-serif,Arial,sans-serif;padding:40px;display:grid;place-items:center}
.wrap{width:min(460px,92vw)}
.eb{font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--lime);text-align:center;display:block;margin-bottom:18px}
.grid{display:grid;grid-template-columns:repeat(3,1fr);border:1px solid var(--line);border-radius:14px;overflow:hidden}
.cell{aspect-ratio:1.6;display:flex;align-items:center;justify-content:center;border-right:1px solid var(--line);border-bottom:1px solid var(--line);font-family:Georgia,serif;font-style:italic;font-weight:700;font-size:15px;color:var(--mut);cursor:pointer;transition:background .25s,color .25s}
.cell:nth-child(3n){border-right:0}
.cell:nth-last-child(-n+3){border-bottom:0}
.cell:hover{background:var(--lime);color:#0e0e10}
</style></head>
<body data-cf-keep-dark>
<div class="wrap">
  <span class="eb">Trusted by</span>
  <div class="grid">
    <div class="cell">Northwind</div><div class="cell">Vellum</div><div class="cell">Cascade</div>
    <div class="cell">Fenwick</div><div class="cell">Argus</div><div class="cell">Portside</div>
    <div class="cell">Origin Co.</div><div class="cell">Haven</div><div class="cell">Ledgerline</div>
  </div>
</div>
</body></html>
`,

  "resume-timeline-portfolio": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Resume Timeline Portfolio</title><style>
:root{--bg:#0e0e10;--ink:#f2f2f0;--mut:#8a8a86;--lime:#d4ff3f;--line:rgba(255,255,255,.12)}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;background:var(--bg);font-family:"Space Grotesk",Inter,ui-sans-serif,Arial,sans-serif;padding:50px;display:grid;place-items:center}
.tl{width:min(420px,92vw);position:relative;padding-left:26px}
.tl:before{content:"";position:absolute;left:5px;top:6px;bottom:6px;width:1.5px;background:var(--line)}
.item{position:relative;padding-bottom:30px}
.item:last-child{padding-bottom:0}
.item .dot{position:absolute;left:-26px;top:3px;width:11px;height:11px;border-radius:50%;background:var(--bg);border:2px solid var(--mut)}
.item.cur .dot{border-color:var(--lime);background:var(--lime);box-shadow:0 0 0 4px rgba(212,255,63,.15)}
.item .yr{font-size:11px;color:var(--mut);font-family:ui-monospace,monospace;margin-bottom:4px}
.item b{display:block;font-size:15px;color:var(--ink);font-weight:700}
.item span{font-size:12.5px;color:var(--mut)}
.item p{margin:8px 0 0;font-size:12.5px;color:var(--mut);line-height:1.6}
</style></head>
<body data-cf-keep-dark>
<div class="tl">
  <div class="item cur"><div class="dot"></div><div class="yr">2024 — Present</div><b>Senior Product Designer</b><span>Cascade Labs</span><p>Leading design for the core platform, from research through shipped feature.</p></div>
  <div class="item"><div class="dot"></div><div class="yr">2021 — 2024</div><b>Product Designer</b><span>Northwind</span><p>Owned the onboarding and billing surfaces across web and mobile.</p></div>
  <div class="item"><div class="dot"></div><div class="yr">2019 — 2021</div><b>UI Designer</b><span>Studio Vellum</span><p>Freelance brand and web work for early-stage startups.</p></div>
</div>
</body></html>
`,

  "hover-reveal-feature-cards": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Hover Reveal Feature Cards</title><style>
:root{--bg:#f4faf9;--ink:#0f2622;--mut:#5b7570;--teal:#0d9488;--line:#dcece8;--card:#fff}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.grid{display:flex;gap:14px}
.card{width:150px;height:220px;background:var(--card);border:1px solid var(--line);border-radius:16px;padding:18px;position:relative;overflow:hidden;transition:width .4s cubic-bezier(.2,.8,.2,1)}
.card:hover{width:230px}
.ic{width:36px;height:36px;border-radius:10px;background:#e5f6f2;display:flex;align-items:center;justify-content:center;margin-bottom:14px}
.ic svg{width:17px;height:17px;color:var(--teal)}
.card b{font-size:13px;color:var(--ink);display:block;white-space:nowrap}
.card p{font-size:11.5px;color:var(--mut);margin:8px 0 0;line-height:1.6;opacity:0;transition:opacity .3s;transition-delay:.15s}
.card:hover p{opacity:1}
</style></head>
<body>
<div class="grid">
  <div class="card"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2 3 14h8l-1 8 10-12h-8z"/></svg></div><b>Speed</b><p>Every action commits in under 100ms, even at scale.</p></div>
  <div class="card"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2 3 6v6c0 5 4 8.5 9 10 5-1.5 9-5 9-10V6z"/></svg></div><b>Security</b><p>Encrypted at rest and in transit, audited twice yearly.</p></div>
  <div class="card"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21a8 8 0 1 0-16 0"/><circle cx="12" cy="7" r="4"/></svg></div><b>Teams</b><p>Roles, permissions and shared views built in from day one.</p></div>
</div>
</body></html>
`,

  "numbered-process-steps": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Numbered Process Steps</title><style>
:root{--bg:#f4faf9;--ink:#0f2622;--mut:#5b7570;--teal:#0d9488;--line:#dcece8;--card:#fff}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.wrap{width:min(380px,92vw)}
.step{display:flex;gap:16px;position:relative;padding-bottom:30px}
.step:last-child{padding-bottom:0}
.step:not(:last-child):before{content:"";position:absolute;left:17px;top:38px;bottom:0;width:1.5px;background:var(--line)}
.num{width:36px;height:36px;border-radius:50%;background:var(--card);border:1.5px solid var(--teal);color:var(--teal);display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;flex:none}
.step.done .num{background:var(--teal);color:#fff}
.txt b{display:block;font-size:14px;color:var(--ink);margin-bottom:4px}
.txt p{margin:0;font-size:12.5px;color:var(--mut);line-height:1.6}
</style></head>
<body>
<div class="wrap">
  <div class="step done"><div class="num">✓</div><div class="txt"><b>Connect your data</b><p>Link your existing tools in a couple of clicks, no code required.</p></div></div>
  <div class="step done"><div class="num">✓</div><div class="txt"><b>Set your rules</b><p>Define the automations that matter to your workflow.</p></div></div>
  <div class="step"><div class="num">3</div><div class="txt"><b>Watch it run</b><p>Sit back — the system handles the rest automatically.</p></div></div>
</div>
</body></html>
`,

  "code-snippet-feature-card": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Code Snippet Feature Card</title><style>
:root{--bg:#f4faf9;--ink:#0f2622;--mut:#5b7570;--teal:#0d9488;--line:#dcece8;--card:#fff}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.card{width:340px;background:var(--card);border:1px solid var(--line);border-radius:16px;padding:24px}
.eb{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--teal);margin-bottom:10px}
h3{margin:0 0 8px;font-size:16px;color:var(--ink)}
p{margin:0 0 18px;font-size:12.5px;color:var(--mut);line-height:1.6}
.code{background:#0f2622;border-radius:12px;padding:16px 18px;font-family:ui-monospace,monospace;font-size:12px;line-height:1.8;color:#d6ede8;position:relative}
.code .k{color:#7dd8c9}
.code .s{color:#f5c97a}
.code .c{color:#5b8078}
.copy{position:absolute;top:12px;right:12px;background:rgba(255,255,255,.1);border:0;color:#d6ede8;width:26px;height:26px;border-radius:7px;cursor:pointer;display:flex;align-items:center;justify-content:center}
.copy svg{width:12px;height:12px}
</style></head>
<body>
<div class="card">
  <span class="eb">Developer-first</span>
  <h3>Three lines to your first webhook.</h3>
  <p>No dashboards to click through — just a client library that gets out of your way.</p>
  <div class="code" data-cf-keep-dark>
    <button class="copy" id="copyBtn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"/></svg></button>
    <span class="c">// register a webhook</span><br>
    <span class="k">const</span> hook = <span class="k">await</span> core.<span class="k">webhooks</span>.create({<br>
    &nbsp;&nbsp;url: <span class="s">"https://api.acme.dev/hook"</span><br>
    });
  </div>
</div>
<script>
document.getElementById("copyBtn").addEventListener("click",function(){
  this.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg>';
});
</script>
</body></html>
`,

  "comparison-checklist-features": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Comparison Checklist Features</title><style>
:root{--bg:#f4faf9;--ink:#0f2622;--mut:#5b7570;--teal:#0d9488;--line:#dcece8;--card:#fff;--red:#dc6a5f}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.card{width:360px;background:var(--card);border:1px solid var(--line);border-radius:16px;overflow:hidden}
.head{display:grid;grid-template-columns:1.4fr 1fr 1fr;padding:16px 18px;border-bottom:1px solid var(--line)}
.head span{font-size:11.5px;color:var(--mut);font-weight:700;text-align:center}
.head span:first-child{text-align:left}
.head .us{color:var(--teal)}
.row{display:grid;grid-template-columns:1.4fr 1fr 1fr;padding:12px 18px;border-bottom:1px solid var(--line);align-items:center;opacity:0;transform:translateX(-8px)}
.row:last-child{border-bottom:0}
.row span:first-child{font-size:12.5px;color:var(--ink)}
.row .c{display:flex;justify-content:center}
.check{width:18px;height:18px;color:var(--teal)}
.cross{width:14px;height:14px;color:var(--red)}
</style></head>
<body>
<div class="card">
  <div class="head"><span></span><span class="us">Us</span><span>Others</span></div>
  <div id="rows">
    <div class="row"><span>Real-time sync</span><div class="c"><svg class="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg></div><div class="c"><svg class="cross" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M18 6 6 18M6 6l12 12"/></svg></div></div>
    <div class="row"><span>Unlimited seats</span><div class="c"><svg class="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg></div><div class="c"><svg class="cross" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M18 6 6 18M6 6l12 12"/></svg></div></div>
    <div class="row"><span>SOC 2 compliant</span><div class="c"><svg class="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg></div><div class="c"><svg class="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg></div></div>
    <div class="row"><span>Free migration</span><div class="c"><svg class="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg></div><div class="c"><svg class="cross" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M18 6 6 18M6 6l12 12"/></svg></div></div>
  </div>
</div>
<script>
document.querySelectorAll("#rows .row").forEach(function(r,i){
  setTimeout(function(){ r.style.transition="opacity .4s ease,transform .4s cubic-bezier(.2,.8,.2,1)"; r.style.opacity=1; r.style.transform="translateX(0)"; }, 100+i*90);
});
</script>
</body></html>
`,

  "interactive-toggle-feature-demo": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Interactive Toggle Feature Demo</title><style>
:root{--bg:#f4faf9;--ink:#0f2622;--mut:#5b7570;--teal:#0d9488;--line:#dcece8;--card:#fff}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:40px}
.card{width:320px;background:var(--card);border:1px solid var(--line);border-radius:16px;padding:22px}
.top{display:flex;justify-content:space-between;align-items:center;margin-bottom:18px}
.top b{font-size:13.5px;color:var(--ink)}
.sw{width:42px;height:24px;background:var(--line);border-radius:20px;position:relative;cursor:pointer;transition:background .25s}
.sw.on{background:var(--teal)}
.sw .knob{position:absolute;top:2px;left:2px;width:20px;height:20px;border-radius:50%;background:#fff;transition:transform .25s cubic-bezier(.34,1.56,.64,1)}
.sw.on .knob{transform:translateX(18px)}
.demo{height:130px;border-radius:12px;background:#eef6f4;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
.demo .label{font-size:12px;color:var(--mut);transition:opacity .3s}
.dot{width:14px;height:14px;border-radius:50%;background:var(--teal);position:absolute;transition:left .5s cubic-bezier(.34,1.56,.64,1)}
</style></head>
<body>
<div class="card">
  <div class="top"><b>Dark mode</b><div class="sw" id="sw"><div class="knob"></div></div></div>
  <div class="demo"><span class="label" id="label">Toggle to preview</span><div class="dot" id="dot" style="left:20px;top:20px"></div></div>
</div>
<script>
var sw=document.getElementById("sw"), demo=document.querySelector(".demo"), label=document.getElementById("label"), dot=document.getElementById("dot");
var on=false;
sw.addEventListener("click",function(){
  on=!on; sw.classList.toggle("on",on);
  demo.style.background = on ? "#0f2622" : "#eef6f4";
  label.style.color = on ? "#8fc9bd" : "#5b7570";
  label.textContent = on ? "Dark mode preview" : "Light mode preview";
  dot.style.left = on ? "calc(100% - 34px)" : "20px";
});
</script>
</body></html>
`,

  "product-hunt-style-launch-banner": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Solstice Landing Page</title><style>
:root{--cream:#fff6ea;--ink:#231a12;--mut:#7a6a58;--sun:#ff6a3d;--sun-d:#e5502a;--berry:#c23a6b;--gold:#ffc857;--line:#ecd9c2}
*{box-sizing:border-box}
body{margin:0;background:var(--cream);color:var(--ink);font-family:Inter,ui-sans-serif,system-ui,sans-serif;-webkit-font-smoothing:antialiased;overflow-x:hidden}
h1,h2,h3{font-family:"Fraunces","Space Grotesk",serif;margin:0;font-weight:600;letter-spacing:-.02em;color:var(--ink)}
p{margin:0;color:var(--mut)}
button{font-family:inherit;cursor:pointer;border:0}
.wrap{max-width:1180px;margin:0 auto;padding:0 32px}
.rv{opacity:0;transform:translateY(28px)}
.eb{display:inline-flex;align-items:center;gap:8px;font-size:12.5px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--sun-d);margin-bottom:14px}

/* ---------- buttons ---------- */
.btn{position:relative;display:inline-flex;align-items:center;gap:9px;border-radius:999px;padding:16px 28px;font-size:15px;font-weight:700;overflow:hidden;transition:transform .3s cubic-bezier(.2,.8,.2,1),box-shadow .3s}
.btn svg{width:16px;height:16px;flex:none;transition:transform .3s cubic-bezier(.34,1.56,.64,1)}
.btn:hover svg{transform:translateX(4px) rotate(8deg)}
.btn-sun{background:var(--sun);color:#fff;box-shadow:0 14px 30px rgba(255,106,61,.35)}
.btn-sun:hover{transform:translateY(-3px) scale(1.02);box-shadow:0 20px 42px rgba(255,106,61,.45);background:var(--sun-d)}
.btn-ink{background:var(--ink);color:var(--cream)}
.btn-ink:hover{transform:translateY(-3px);box-shadow:0 16px 34px rgba(35,26,18,.3)}
.btn-line{background:transparent;color:var(--ink);border:1.5px solid var(--ink)}
.btn-line:hover{transform:translateY(-3px);background:var(--ink);color:var(--cream)}

/* ---------- nav ---------- */
.nav{position:sticky;top:0;z-index:60;transition:background .4s,box-shadow .4s}
.nav-in{max-width:1180px;margin:0 auto;padding:24px 32px;display:flex;align-items:center;gap:34px}
.nav.on{background:rgba(255,246,234,.88);backdrop-filter:blur(16px);box-shadow:0 1px 0 var(--line)}
.brand{font-family:"Fraunces",serif;font-size:23px;font-weight:700;letter-spacing:-.02em}
.nav-links{display:flex;gap:30px;margin:0 auto;font-size:14.5px;color:var(--mut);font-weight:600}
.nav-links a{position:relative;cursor:pointer}
.nav-links a:after{content:"";position:absolute;left:0;bottom:-5px;width:100%;height:2px;background:var(--sun);transform:scaleX(0);transform-origin:right;transition:transform .3s cubic-bezier(.2,.8,.2,1)}
.nav-links a:hover{color:var(--ink)}
.nav-links a:hover:after{transform:scaleX(1);transform-origin:left}
.nav-right{display:flex;align-items:center;gap:18px}
.nav-right .cart{display:flex;align-items:center;gap:8px;font-size:14px;font-weight:700;cursor:pointer}
.nav-right .cart svg{width:18px;height:18px}

/* ---------- hero ---------- */
.hero{position:relative;padding:70px 0 0;overflow:hidden}
.hero-in{position:relative;z-index:1;text-align:center;max-width:820px;margin:0 auto}
.hero .eb{justify-content:center}
.hero h1{font-size:clamp(46px,7vw,96px);line-height:.98}
.hero h1 .it{font-style:italic;color:var(--sun)}
.hero p.lead{margin-top:20px;font-size:18px;line-height:1.6;max-width:480px;margin-left:auto;margin-right:auto}
.hero .cta{display:flex;gap:14px;justify-content:center;margin-top:30px}
.blob{position:absolute;border-radius:50%;filter:blur(40px);opacity:.55;pointer-events:none}
.blob1{width:500px;height:500px;background:var(--gold);top:-120px;left:-140px}
.blob2{width:420px;height:420px;background:var(--berry);top:0;right:-160px;opacity:.35}

/* horizontal product strip */
.pstrip-wrap{margin-top:56px;overflow:hidden;padding-bottom:60px}
.pstrip{display:flex;gap:22px;width:max-content;padding:6px 32px}
.pcard{width:280px;flex:none;border-radius:26px;overflow:hidden;position:relative;transition:transform .4s cubic-bezier(.2,.8,.2,1)}
.pcard:hover{transform:translateY(-10px) rotate(-1deg)}
.pcard .art{height:320px;display:flex;align-items:center;justify-content:center;position:relative}
.pcard .art svg{width:60%;height:60%}
.pcard .info{background:#fff;padding:18px 20px;border-radius:0 0 26px 26px}
.pcard .info b{display:block;font-family:"Fraunces",serif;font-size:17px}
.pcard .info span{font-size:13.5px;color:var(--mut)}
.pcard .price{position:absolute;top:16px;right:16px;background:rgba(255,255,255,.92);border-radius:20px;padding:6px 13px;font-weight:800;font-size:13.5px}

/* ---------- logos ---------- */
.press{padding:36px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.press .lbl{text-align:center;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--mut);margin-bottom:22px}
.press-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:26px;opacity:.6}
.press-row div{font-family:"Fraunces",serif;font-weight:700;font-size:18px;font-style:italic}

/* ---------- feature story ---------- */
.story{padding:130px 0}
.story-row{display:grid;grid-template-columns:1fr 1fr;gap:70px;align-items:center}
.story-row.rev .txt{order:2}
.story-row.rev .vis{order:1}
.story h2{font-size:clamp(30px,3.4vw,44px)}
.story p.body{font-size:16.5px;line-height:1.7;max-width:440px;margin-top:16px}
.chip-row{display:flex;gap:10px;margin-top:24px;flex-wrap:wrap}
.chip{background:#fff;border:1px solid var(--line);border-radius:20px;padding:8px 15px;font-size:13px;font-weight:600}
.vis{position:relative;border-radius:28px;overflow:hidden;aspect-ratio:1/1;display:flex;align-items:center;justify-content:center}
.vis svg{width:56%;height:56%}
.swatch-strip{display:flex;gap:8px;position:absolute;bottom:20px;left:20px}
.swatch-strip span{width:26px;height:26px;border-radius:50%;border:2px solid #fff}

/* ---------- ingredient band ---------- */
.ing-band{background:var(--ink);color:var(--cream);padding:90px 0}
.ing-head{text-align:center;max-width:560px;margin:0 auto 50px}
.ing-head h2{color:var(--cream);font-size:clamp(28px,3.2vw,40px)}
.ing-head .eb{color:var(--gold)}
.ing-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
.ing-card{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:18px;padding:24px;text-align:center;transition:transform .3s,background .3s}
.ing-card:hover{transform:translateY(-6px);background:rgba(255,255,255,.09)}
.ing-card .ic{width:50px;height:50px;margin:0 auto 14px;border-radius:50%;background:var(--sun);display:flex;align-items:center;justify-content:center}
.ing-card .ic svg{width:24px;height:24px;color:#fff}
.ing-card h4{color:var(--cream);font-size:15.5px;margin-bottom:8px}
.ing-card p{color:rgba(255,246,234,.55);font-size:13px;line-height:1.55}

/* ---------- pinned unbox ---------- */
.unbox-sec{position:relative}
.unbox-head{text-align:center;padding:120px 0 0;max-width:560px;margin:0 auto}
.unbox-head h2{font-size:clamp(28px,3.4vw,42px)}
.unbox-pin{height:100vh;display:flex;align-items:center;justify-content:center}
.unbox-stage{position:relative;width:min(560px,88vw);height:440px;display:flex;align-items:center;justify-content:center}
.unbox-layer{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;border-radius:30px}
.unbox-layer svg{width:60%;height:60%}
.unbox-dots{position:absolute;bottom:-40px;left:50%;transform:translateX(-50%);display:flex;gap:8px}
.unbox-dots span{width:7px;height:7px;border-radius:50%;background:var(--line)}
.unbox-dots span.on{background:var(--sun)}

/* ---------- reviews ---------- */
.reviews{padding:0 0 130px}
.review-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.rcard{background:#fff;border:1px solid var(--line);border-radius:20px;padding:26px;transition:transform .3s,box-shadow .3s}
.rcard:hover{transform:translateY(-6px) rotate(.6deg);box-shadow:0 20px 44px rgba(35,26,18,.1)}
.rcard .stars{color:var(--gold);font-size:14px;margin-bottom:12px;letter-spacing:1px}
.rcard p{font-size:14.5px;line-height:1.6;color:var(--ink)}
.rcard .who{margin-top:16px;font-size:13px;font-weight:700}

/* ---------- final cta ---------- */
.final{padding:0 0 120px}
.final-box{position:relative;background:linear-gradient(120deg,var(--sun),var(--berry));border-radius:32px;padding:90px 40px;text-align:center;overflow:hidden}
.final-box h2{position:relative;color:#fff;font-size:clamp(32px,4.6vw,54px)}
.final-box p{position:relative;color:rgba(255,255,255,.85);margin:16px auto 0;max-width:440px;font-size:16px}
.final-box .cta{position:relative;justify-content:center;margin-top:30px;display:flex;gap:14px}

/* ---------- footer ---------- */
footer{border-top:1px solid var(--line);padding:60px 0 30px}
.foot-top{display:flex;justify-content:space-between;gap:40px;flex-wrap:wrap;padding-bottom:40px;border-bottom:1px solid var(--line)}
.foot-brand p{max-width:280px;margin-top:14px;font-size:14px;line-height:1.6}
.foot-cols{display:flex;gap:60px}
.foot-col h6{font-size:12.5px;text-transform:uppercase;letter-spacing:.06em;color:var(--mut);margin-bottom:16px}
.foot-col a{display:block;font-size:14px;color:var(--ink);margin-bottom:10px;text-decoration:none;opacity:.8}
.foot-col a:hover{opacity:1;color:var(--sun-d)}
.foot-bottom{display:flex;justify-content:space-between;padding-top:26px;font-size:13px;color:var(--mut)}

@media(max-width:900px){
  .story-row{grid-template-columns:1fr}
  .story-row.rev .txt{order:1}
  .story-row.rev .vis{order:2}
  .ing-grid{grid-template-columns:repeat(2,1fr)}
  .review-grid{grid-template-columns:1fr}
  .nav-links{display:none}
}
@media(max-width:600px){
  .foot-top{flex-direction:column;gap:30px}
  .foot-cols{gap:34px;flex-wrap:wrap}
  .pcard{width:230px}
  .pcard .art{height:260px}
}
@media(prefers-reduced-motion:reduce){
  .rv{opacity:1!important;transform:none!important}
}
</style></head>
<body data-cf-keep-dark>

<nav class="nav" id="nav">
  <div class="nav-in">
    <div class="brand">Solstice</div>
    <div class="nav-links"><a>Shop</a><a>Ingredients</a><a>Reviews</a><a>Journal</a></div>
    <div class="nav-right"><span class="cart"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>Cart (0)</span></div>
  </div>
</nav>

<section class="hero">
  <div class="blob blob1"></div>
  <div class="blob blob2"></div>
  <div class="wrap hero-in">
    <span class="eb rv">The summer drop</span>
    <h1 class="rv">Taste like <em class="it">golden</em> hour.</h1>
    <p class="lead rv">Small-batch sparkling tonics, brewed with real fruit and zero the guesswork. Six new flavors, dropping now.</p>
    <div class="cta rv"><button class="btn btn-sun">Shop the drop <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M7 17 17 7M7 7h10v10"/></svg></button><button class="btn btn-line">Find a store</button></div>
  </div>
  <div class="pstrip-wrap">
    <div class="pstrip rv" id="pstrip">
      <div class="pcard"><div class="art" style="background:linear-gradient(160deg,#ffb27a,#ff6a3d)"><svg viewBox="0 0 100 140" fill="none"><rect x="30" y="18" width="40" height="104" rx="18" fill="#fff" opacity=".92"/><rect x="40" y="4" width="20" height="22" rx="6" fill="#fff" opacity=".92"/></svg></div><div class="price">$6.50</div><div class="info"><b>Blood Orange</b><span>Sparkling tonic · 12oz</span></div></div>
      <div class="pcard"><div class="art" style="background:linear-gradient(160deg,#f2a6c9,#c23a6b)"><svg viewBox="0 0 100 140" fill="none"><rect x="30" y="18" width="40" height="104" rx="18" fill="#fff" opacity=".92"/><rect x="40" y="4" width="20" height="22" rx="6" fill="#fff" opacity=".92"/></svg></div><div class="price">$6.50</div><div class="info"><b>Wild Hibiscus</b><span>Sparkling tonic · 12oz</span></div></div>
      <div class="pcard"><div class="art" style="background:linear-gradient(160deg,#ffe08a,#ffc857)"><svg viewBox="0 0 100 140" fill="none"><rect x="30" y="18" width="40" height="104" rx="18" fill="#fff" opacity=".92"/><rect x="40" y="4" width="20" height="22" rx="6" fill="#fff" opacity=".92"/></svg></div><div class="price">$6.50</div><div class="info"><b>Golden Ginger</b><span>Sparkling tonic · 12oz</span></div></div>
      <div class="pcard"><div class="art" style="background:linear-gradient(160deg,#a8e0c4,#3f9e6f)"><svg viewBox="0 0 100 140" fill="none"><rect x="30" y="18" width="40" height="104" rx="18" fill="#fff" opacity=".92"/><rect x="40" y="4" width="20" height="22" rx="6" fill="#fff" opacity=".92"/></svg></div><div class="price">$6.50</div><div class="info"><b>Cucumber Mint</b><span>Sparkling tonic · 12oz</span></div></div>
      <div class="pcard"><div class="art" style="background:linear-gradient(160deg,#c7b6f2,#8a63d6)"><svg viewBox="0 0 100 140" fill="none"><rect x="30" y="18" width="40" height="104" rx="18" fill="#fff" opacity=".92"/><rect x="40" y="4" width="20" height="22" rx="6" fill="#fff" opacity=".92"/></svg></div><div class="price">$6.50</div><div class="info"><b>Lavender Peach</b><span>Sparkling tonic · 12oz</span></div></div>
    </div>
  </div>
</section>

<section class="press">
  <div class="wrap">
    <div class="lbl">As featured in</div>
    <div class="press-row"><div>Bon Appétit</div><div>Food52</div><div>Kinfolk</div><div>Well+Good</div><div>Cherry Bombe</div></div>
  </div>
</section>

<section class="story">
  <div class="wrap story-row">
    <div class="txt">
      <span class="eb rv">Small batch</span>
      <h2 class="rv">Brewed in 40-gallon batches, not tanker trucks.</h2>
      <p class="body rv">Real fruit, cold-pressed weekly. No concentrate, no artificial anything — just the two of us and a very patient co-packer.</p>
      <div class="chip-row rv"><span class="chip">Zero added sugar</span><span class="chip">Real fruit juice</span><span class="chip">Non-GMO</span></div>
    </div>
    <div class="vis rv" style="background:linear-gradient(160deg,#ffcf9c,#ff6a3d)">
      <svg viewBox="0 0 200 200" fill="none"><circle cx="100" cy="100" r="70" fill="#fff" opacity=".18"/><rect x="70" y="40" width="60" height="130" rx="26" fill="#fff" opacity=".92"/></svg>
      <div class="swatch-strip"><span style="background:#ff6a3d"></span><span style="background:#c23a6b"></span><span style="background:#ffc857"></span></div>
    </div>
  </div>
</section>

<section class="story">
  <div class="wrap story-row rev">
    <div class="txt">
      <span class="eb rv">Honest label</span>
      <h2 class="rv">Five ingredients. You can pronounce all of them.</h2>
      <p class="body rv">Filtered water, real fruit juice, a whisper of cane sugar, botanicals, and bubbles. That's the whole list.</p>
      <div class="chip-row rv"><span class="chip">42 calories</span><span class="chip">No preservatives</span></div>
    </div>
    <div class="vis rv" style="background:linear-gradient(160deg,#f2a6c9,#c23a6b)">
      <svg viewBox="0 0 200 200" fill="none"><circle cx="100" cy="100" r="70" fill="#fff" opacity=".18"/><rect x="70" y="40" width="60" height="130" rx="26" fill="#fff" opacity=".92"/></svg>
      <div class="swatch-strip"><span style="background:#c23a6b"></span><span style="background:#ffc857"></span><span style="background:#3f9e6f"></span></div>
    </div>
  </div>
</section>

<section class="ing-band">
  <div class="wrap">
    <div class="ing-head">
      <span class="eb rv" style="justify-content:center">What's inside</span>
      <h2 class="rv">Every can, accounted for.</h2>
    </div>
    <div class="ing-grid">
      <div class="ing-card rv2"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M2 12h20"/></svg></div><h4>Real fruit</h4><p>Cold-pressed weekly from whole fruit, never concentrate.</p></div>
      <div class="ing-card rv2"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2 3 6v6c0 5 4 8.5 9 10 5-1.5 9-5 9-10V6z"/></svg></div><h4>Non-GMO</h4><p>Every ingredient verified, no exceptions, no asterisks.</p></div>
      <div class="ing-card rv2"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg></div><h4>Low sugar</h4><p>Naturally sweetened, roughly a third the sugar of soda.</p></div>
      <div class="ing-card rv2"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg></div><h4>Independent</h4><p>Woman-owned, self-funded, brewed three miles from here.</p></div>
    </div>
  </div>
</section>

<section class="unbox-sec">
  <div class="unbox-head">
    <span class="eb rv" style="justify-content:center">Unboxing</span>
    <h2 class="rv">What lands on your doorstep.</h2>
  </div>
  <div class="unbox-pin" id="unboxPin">
    <div class="unbox-stage">
      <div class="unbox-layer" id="ul0" style="background:linear-gradient(160deg,#ffe4c2,#ffb27a)"><svg viewBox="0 0 200 160" fill="none"><rect x="20" y="20" width="160" height="120" rx="14" fill="#fff" opacity=".9"/><path d="M20 60h160M90 20v120" stroke="#ffb27a" stroke-width="3"/></svg></div>
      <div class="unbox-layer" id="ul1" style="background:linear-gradient(160deg,#ffcf9c,#ff6a3d)"><svg viewBox="0 0 100 140" fill="none"><rect x="20" y="14" width="60" height="118" rx="20" fill="#fff" opacity=".92"/></svg></div>
      <div class="unbox-layer" id="ul2" style="background:linear-gradient(160deg,#f2a6c9,#c23a6b)"><svg viewBox="0 0 160 100" fill="none"><rect x="15" y="20" width="50" height="60" rx="16" fill="#fff" opacity=".92"/><rect x="75" y="20" width="50" height="60" rx="16" fill="#fff" opacity=".7"/><rect x="105" y="20" width="50" height="60" rx="16" fill="#fff" opacity=".5"/></svg></div>
      <div class="unbox-dots"><span class="on"></span><span></span><span></span></div>
    </div>
  </div>
</section>

<section class="reviews">
  <div class="wrap">
    <div class="ing-head" style="margin-bottom:44px">
      <span class="eb rv" style="justify-content:center">Reviews</span>
      <h2 class="rv">6,000+ five-star sips and counting.</h2>
    </div>
    <div class="review-grid">
      <div class="rcard rv2"><div class="stars">★★★★★</div><p>"Cracked one open at a rooftop party and three people asked where to buy it. Obsessed."</p><div class="who">— Priya, Brooklyn</div></div>
      <div class="rcard rv2"><div class="stars">★★★★★</div><p>"Finally a 'healthy' soda that doesn't taste like a punishment. Hibiscus is unreal."</p><div class="who">— Marcus, Austin</div></div>
      <div class="rcard rv2"><div class="stars">★★★★★</div><p>"Ordered the variety pack, immediately reordered two more. My fridge is now 60% Solstice."</p><div class="who">— Dana, Portland</div></div>
    </div>
  </div>
</section>

<section class="final">
  <div class="wrap">
    <div class="final-box rv">
      <h2>Your fridge is missing something golden.</h2>
      <p>Free shipping on the variety 12-pack — today only.</p>
      <div class="cta"><button class="btn btn-ink">Shop the drop <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M7 17 17 7M7 7h10v10"/></svg></button></div>
    </div>
  </div>
</section>

<footer>
  <div class="wrap">
    <div class="foot-top">
      <div class="foot-brand">
        <div class="brand">Solstice</div>
        <p>Small-batch sparkling tonics, brewed with real fruit.</p>
      </div>
      <div class="foot-cols">
        <div class="foot-col"><h6>Shop</h6><a>All flavors</a><a>Variety pack</a><a>Subscribe &amp; save</a></div>
        <div class="foot-col"><h6>Company</h6><a>Our story</a><a>Ingredients</a><a>Stockists</a></div>
        <div class="foot-col"><h6>Help</h6><a>Shipping</a><a>FAQ</a><a>Contact</a></div>
      </div>
    </div>
    <div class="foot-bottom"><span>© 2026 Solstice Drinks Co.</span><span>Privacy · Terms</span></div>
  </div>
</footer>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script>
(function(){
  var nav = document.getElementById("nav");
  document.addEventListener("scroll", function(){ nav.classList.toggle("on", window.scrollY > 14); }, { passive: true });

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!window.gsap || !window.ScrollTrigger || reduced) {
    document.querySelectorAll(".rv,.rv2").forEach(function(el){ el.style.opacity = 1; el.style.transform = "none"; });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  var tl = gsap.timeline({ defaults: { ease: "power3.out" } });
  tl.to(".hero-in .rv", { opacity: 1, y: 0, duration: .8, stagger: .08 })
    .fromTo("#pstrip", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: .9 }, "-=.5")
    .from("#pstrip .pcard", { opacity: 0, y: 26, scale: .94, stagger: .08, duration: .6 }, "-=.6");

  // Product strip: draggable-feel horizontal auto-drift, pausing on hover,
  // plus a subtle scroll-linked parallax so the row shifts with page scroll.
  var strip = document.getElementById("pstrip");
  var drift = gsap.to(strip, { x: -(strip.scrollWidth - window.innerWidth + 64), duration: 26, ease: "none", repeat: -1, yoyo: true });
  strip.addEventListener("mouseenter", function(){ drift.pause(); });
  strip.addEventListener("mouseleave", function(){ drift.resume(); });

  document.querySelectorAll(".rv").forEach(function(el){
    if (el.closest(".hero")) return;
    gsap.to(el, { opacity: 1, y: 0, duration: .85, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%" } });
  });
  document.querySelectorAll(".rv2").forEach(function(el){
    gsap.from(el, { opacity: 0, y: 26, duration: .7, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%" } });
  });

  gsap.from(".press-row div", { opacity: 0, y: 10, stagger: .06, duration: .6, scrollTrigger: { trigger: ".press-row", start: "top 90%" } });

  // Parallax drift on each story visual as its section scrolls past.
  document.querySelectorAll(".story .vis").forEach(function(vis){
    gsap.to(vis, { y: -26, ease: "none", scrollTrigger: { trigger: vis.closest(".story"), start: "top bottom", end: "bottom top", scrub: true } });
  });

  // Pinned unboxing: three product layers crossfade in sequence with a
  // gentle scale-down, dot indicator tracking the active layer, scrubbed.
  var layers = ["#ul0", "#ul1", "#ul2"];
  gsap.set(layers.slice(1), { opacity: 0, scale: .92 });
  var dots = document.querySelectorAll(".unbox-dots span");
  var unboxTl = gsap.timeline({
    scrollTrigger: { trigger: "#unboxPin", start: "top top", end: "+=180%", pin: true, scrub: .5,
      onUpdate: function(self){
        var stage = Math.min(2, Math.floor(self.progress * 3));
        dots.forEach(function(d, i){ d.classList.toggle("on", i === stage); });
      }
    }
  });
  unboxTl.to("#ul0", { opacity: 0, scale: 1.06, duration: .33 })
    .to("#ul1", { opacity: 1, scale: 1, duration: .33 }, "<")
    .to("#ul1", { opacity: 0, scale: 1.06, duration: .33 }, "+=.15")
    .to("#ul2", { opacity: 1, scale: 1, duration: .33 }, "<");

  window.addEventListener("load", function(){ ScrollTrigger.refresh(); });
})();
</script>
</body></html>
`,

  "newsletter-signup-split-section": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Kindred Landing Page</title><style>
:root{--bg:#f4f1ec;--lav:#c9b8f0;--lav-d:#a68ce0;--peach:#ffd0b8;--sage:#b9d3bb;--ink:#2c2620;--mut:#8a8073;--card:#fffdf9;--line:#e6ddd0}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--ink);font-family:"General Sans",Inter,ui-sans-serif,system-ui,sans-serif;-webkit-font-smoothing:antialiased;overflow-x:hidden}
h1,h2,h3{font-family:"Fraunces",serif;margin:0;font-weight:500;letter-spacing:-.02em;color:var(--ink)}
p{margin:0;color:var(--mut)}
button{font-family:inherit;cursor:pointer;border:0}
.wrap{max-width:1140px;margin:0 auto;padding:0 32px}
.rv{opacity:0;transform:translateY(26px)}
.eb{display:inline-flex;align-items:center;gap:8px;font-size:13px;font-weight:600;letter-spacing:.03em;color:var(--lav-d);margin-bottom:14px}
.eb svg{width:15px;height:15px}

/* ---------- buttons ---------- */
.btn{position:relative;display:inline-flex;align-items:center;gap:9px;border-radius:999px;padding:16px 28px;font-size:15px;font-weight:600;transition:transform .4s cubic-bezier(.2,.8,.2,1),box-shadow .4s}
.btn-lav{background:var(--lav);color:#2c2044;box-shadow:0 14px 30px rgba(166,140,224,.35)}
.btn-lav:hover{transform:translateY(-3px);box-shadow:0 20px 42px rgba(166,140,224,.45);background:var(--lav-d)}
.btn-line{background:transparent;color:var(--ink);border:1.5px solid var(--line)}
.btn-line:hover{transform:translateY(-3px);border-color:var(--ink)}

/* ---------- nav ---------- */
.nav{position:sticky;top:0;z-index:60;transition:background .4s,box-shadow .4s}
.nav-in{max-width:1140px;margin:0 auto;padding:24px 32px;display:flex;align-items:center;gap:34px}
.nav.on{background:rgba(244,241,236,.88);backdrop-filter:blur(16px);box-shadow:0 1px 0 var(--line)}
.brand{font-family:"Fraunces",serif;font-size:22px;font-weight:500}
.nav-links{display:flex;gap:30px;margin:0 auto;font-size:14.5px;color:var(--mut)}
.nav-links a{position:relative;cursor:pointer}
.nav-links a:after{content:"";position:absolute;left:0;bottom:-5px;width:100%;height:1.5px;background:var(--lav-d);transform:scaleX(0);transform-origin:right;transition:transform .35s cubic-bezier(.2,.8,.2,1)}
.nav-links a:hover{color:var(--ink)}
.nav-links a:hover:after{transform:scaleX(1);transform-origin:left}
.nav-right .lg{font-size:14.5px;color:var(--mut);margin-right:18px}

/* ---------- hero ---------- */
.hero{position:relative;padding:70px 0 40px;overflow:hidden}
.hero-grid{display:grid;grid-template-columns:1fr .92fr;gap:56px;align-items:center}
.breathe-blob{position:absolute;border-radius:50%;filter:blur(50px);pointer-events:none}
.bb1{width:520px;height:520px;background:var(--peach);opacity:.55;top:-160px;right:-140px}
.bb2{width:380px;height:380px;background:var(--sage);opacity:.45;bottom:-140px;left:-100px}
.hero h1{font-size:clamp(38px,4.6vw,60px);line-height:1.08}
.hero p.lead{margin-top:20px;font-size:17px;line-height:1.7;max-width:440px}
.hero .cta{display:flex;gap:14px;margin-top:30px;flex-wrap:wrap}
.stars-row{display:flex;align-items:center;gap:10px;margin-top:28px;font-size:13.5px;color:var(--mut)}
.stars-row .st{color:#e8a53d}

/* phone mockup */
.phone-wrap{position:relative;display:flex;justify-content:center}
.phone{position:relative;z-index:1;width:280px;background:var(--card);border-radius:44px;border:8px solid #fff;box-shadow:0 40px 90px rgba(44,38,32,.18);overflow:hidden;aspect-ratio:9/18.5}
.phone-screen{position:relative;height:100%;background:linear-gradient(165deg,#efe6ff,#fff)}
.phone-top{padding:26px 22px 14px;text-align:center}
.phone-top span{font-size:11.5px;color:var(--mut)}
.phone-top h4{font-size:16px;margin-top:4px}
.breath-ring{position:relative;width:150px;height:150px;margin:20px auto;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff,var(--lav) 75%);display:flex;align-items:center;justify-content:center;box-shadow:0 0 0 10px rgba(201,184,240,.25)}
.breath-ring span{font-size:13px;color:#2c2044;font-weight:600}
.phone-cards{padding:0 18px;display:flex;flex-direction:column;gap:10px}
.phone-cards .pc{background:#fff;border-radius:14px;padding:11px 13px;display:flex;align-items:center;gap:10px;box-shadow:0 6px 16px rgba(44,38,32,.06)}
.phone-cards .pc i{width:30px;height:30px;border-radius:9px;flex:none}
.phone-cards .pc b{display:block;font-size:12.5px;color:var(--ink)}
.phone-cards .pc span{font-size:11px;color:var(--mut)}
.float-card{position:absolute;background:var(--card);border-radius:16px;padding:12px 15px;box-shadow:0 20px 44px rgba(44,38,32,.14);font-size:12.5px;display:flex;align-items:center;gap:9px;z-index:2}
.fc1{top:14%;left:-8%}
.fc2{bottom:18%;right:-10%}
.float-card i{width:26px;height:26px;border-radius:50%;flex:none}

/* ---------- logos ---------- */
.press{padding:40px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.press .lbl{text-align:center;font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:var(--mut);margin-bottom:22px}
.press-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:26px;opacity:.55}
.press-row div{font-family:"Fraunces",serif;font-weight:600;font-size:18px}

/* ---------- feature story ---------- */
.story{padding:120px 0}
.story-row{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center}
.story-row.rev .txt{order:2}
.story-row.rev .vis{order:1}
.story h2{font-size:clamp(28px,3.2vw,40px)}
.story p.body{font-size:16px;line-height:1.75;max-width:420px;margin-top:16px}
.mood-row{display:flex;gap:10px;margin-top:24px}
.mood{width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:18px;transition:transform .3s cubic-bezier(.34,1.56,.64,1)}
.mood:hover{transform:scale(1.18) translateY(-4px)}
.vis{position:relative;border-radius:32px;aspect-ratio:1/1;display:flex;align-items:center;justify-content:center;overflow:hidden}
.vis .ring{position:absolute;border-radius:50%;border:1px solid rgba(44,38,32,.1)}

/* ---------- pinned breathing ---------- */
.breath-sec{position:relative;background:var(--ink);color:#f4f1ec}
.breath-head{text-align:center;padding:120px 0 0;max-width:520px;margin:0 auto}
.breath-head h2{color:#f4f1ec;font-size:clamp(28px,3.4vw,40px)}
.breath-head p{color:rgba(244,241,236,.55);margin-top:12px}
.breath-pin{height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center}
.breath-circle{width:220px;height:220px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff,var(--lav) 70%);display:flex;align-items:center;justify-content:center;box-shadow:0 0 90px rgba(201,184,240,.3)}
.breath-circle span{font-family:"Fraunces",serif;font-size:19px;color:#2c2044;font-weight:500}
.breath-caption{margin-top:32px;font-size:14px;color:rgba(244,241,236,.5);letter-spacing:.04em;text-transform:uppercase}

/* ---------- stats ---------- */
.stats{padding:100px 0;text-align:center}
.stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
.stat b{display:block;font-family:"Fraunces",serif;font-size:clamp(30px,3.6vw,44px);font-weight:500}
.stat span{display:block;margin-top:8px;font-size:13px;color:var(--mut)}

/* ---------- testimonials ---------- */
.testi{padding:0 0 120px}
.testi-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.tcard{background:var(--card);border:1px solid var(--line);border-radius:22px;padding:26px;transition:transform .35s cubic-bezier(.2,.8,.2,1),box-shadow .35s}
.tcard:hover{transform:translateY(-7px);box-shadow:0 24px 48px rgba(44,38,32,.1)}
.tcard p{font-size:14.5px;line-height:1.65;color:var(--ink)}
.tcard .who{margin-top:16px;font-size:13px;color:var(--mut);display:flex;align-items:center;gap:9px}
.tcard .who i{width:30px;height:30px;border-radius:50%}

/* ---------- final cta ---------- */
.final{padding:0 0 120px}
.final-box{position:relative;background:linear-gradient(135deg,var(--lav),#f2c9de);border-radius:36px;padding:90px 40px;text-align:center;overflow:hidden}
.final-box h2{position:relative;font-size:clamp(30px,4.2vw,48px);color:#2c2044}
.final-box p{position:relative;margin:16px auto 0;max-width:420px;font-size:16px;color:rgba(44,32,68,.7)}
.final-box .cta{position:relative;justify-content:center;margin-top:30px;display:flex;gap:14px}

/* ---------- footer ---------- */
footer{border-top:1px solid var(--line);padding:56px 0 30px}
.foot-top{display:flex;justify-content:space-between;gap:40px;flex-wrap:wrap;padding-bottom:36px;border-bottom:1px solid var(--line)}
.foot-brand p{max-width:280px;margin-top:12px;font-size:14px;line-height:1.6}
.foot-cols{display:flex;gap:56px}
.foot-col h6{font-size:12px;text-transform:uppercase;letter-spacing:.05em;color:var(--mut);margin-bottom:15px}
.foot-col a{display:block;font-size:14px;color:var(--ink);margin-bottom:9px;text-decoration:none;opacity:.8}
.foot-col a:hover{opacity:1;color:var(--lav-d)}
.foot-bottom{display:flex;justify-content:space-between;padding-top:24px;font-size:12.5px;color:var(--mut)}

@media(max-width:900px){
  .hero-grid{grid-template-columns:1fr}
  .phone{margin-top:20px}
  .story-row{grid-template-columns:1fr}
  .story-row.rev .txt{order:1}
  .story-row.rev .vis{order:2}
  .stats-grid{grid-template-columns:repeat(2,1fr);gap:28px}
  .testi-grid{grid-template-columns:1fr}
  .nav-links{display:none}
  .float-card{display:none}
}
@media(max-width:600px){
  .foot-top{flex-direction:column;gap:28px}
  .foot-cols{gap:30px;flex-wrap:wrap}
}
@media(prefers-reduced-motion:reduce){
  .rv{opacity:1!important;transform:none!important}
}
</style></head>
<body data-cf-keep-dark>

<nav class="nav" id="nav">
  <div class="nav-in">
    <div class="brand">Kindred</div>
    <div class="nav-links"><a>Practices</a><a>Sleep</a><a>Community</a><a>Pricing</a></div>
    <div class="nav-right" style="margin-left:auto"><span class="lg">Log in</span><button class="btn btn-lav">Try free</button></div>
  </div>
</nav>

<section class="hero">
  <div class="breathe-blob bb1"></div>
  <div class="breathe-blob bb2"></div>
  <div class="wrap hero-grid">
    <div>
      <span class="eb rv"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-4-4 4 4 0 0 1-4-4 4 4 0 0 1-2-2"/></svg>A calmer way to begin the day</span>
      <h1 class="rv">Find your quiet, one breath at a time.</h1>
      <p class="lead rv">Kindred blends guided meditation, sleep stories and gentle mood tracking into five minutes you'll actually look forward to.</p>
      <div class="cta rv"><button class="btn btn-lav">Try free for 14 days</button><button class="btn btn-line">See how it works</button></div>
      <div class="stars-row rv"><span class="st">★★★★★</span>4.9 · 82,000+ mindful mornings</div>
    </div>
    <div class="phone-wrap rv">
      <div class="float-card fc1"><i style="background:var(--sage)"></i>Streak: 12 days</div>
      <div class="float-card fc2"><i style="background:var(--peach)"></i>Mood: calm</div>
      <div class="phone">
        <div class="phone-screen">
          <div class="phone-top"><span>Good morning, Asha</span><h4>Today's practice</h4></div>
          <div class="breath-ring"><span id="heroBreathLabel">Breathe in</span></div>
          <div class="phone-cards">
            <div class="pc"><i style="background:var(--sage)"></i><div><b>Morning Calm</b><span>7 min · guided</span></div></div>
            <div class="pc"><i style="background:var(--peach)"></i><div><b>Deep Sleep Story</b><span>18 min · narrated</span></div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="press">
  <div class="wrap">
    <div class="lbl">Recommended by</div>
    <div class="press-row"><div>Mindful Co.</div><div>Well+Good</div><div>Kinfolk</div><div>Headspace&nbsp;Health</div><div>The&nbsp;Gentle&nbsp;Press</div></div>
  </div>
</section>

<section class="story">
  <div class="wrap story-row">
    <div class="txt">
      <span class="eb rv">Track how you feel</span>
      <h2 class="rv">Notice the pattern before it notices you.</h2>
      <p class="body rv">A thirty-second mood check-in each day, quietly building a picture only you can see.</p>
      <div class="mood-row rv">
        <div class="mood" style="background:#ffe3cf">😊</div>
        <div class="mood" style="background:#e3ddfa">😌</div>
        <div class="mood" style="background:#d9ecd9">🙂</div>
        <div class="mood" style="background:#fbe0e6">😔</div>
      </div>
    </div>
    <div class="vis rv" style="background:linear-gradient(160deg,#efe6ff,#f9e9f2)">
      <div class="ring" style="width:70%;height:70%"></div>
      <div class="ring" style="width:46%;height:46%"></div>
      <svg viewBox="0 0 24 24" width="30%" height="30%" fill="none" stroke="#a68ce0" stroke-width="1.4"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
    </div>
  </div>
</section>

<section class="story">
  <div class="wrap story-row rev">
    <div class="txt">
      <span class="eb rv">Sleep, gently</span>
      <h2 class="rv">Stories that ease you out, not startle you awake.</h2>
      <p class="body rv">Fifty-plus narrated sleep stories, mixed with rain, waves or nothing at all — your choice, every night.</p>
    </div>
    <div class="vis rv" style="background:linear-gradient(160deg,#dfe9e0,#eef2df)">
      <div class="ring" style="width:70%;height:70%"></div>
      <div class="ring" style="width:46%;height:46%"></div>
      <svg viewBox="0 0 24 24" width="30%" height="30%" fill="none" stroke="#5f8a63" stroke-width="1.4"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
    </div>
  </div>
</section>

<section class="breath-sec">
  <div class="breath-head">
    <span class="eb rv" style="justify-content:center;color:var(--lav)">A minute, together</span>
    <h2 class="rv">Follow the circle. That's the whole exercise.</h2>
    <p class="rv">Scroll to move through one full breathing cycle.</p>
  </div>
  <div class="breath-pin" id="breathPin">
    <div class="breath-circle" id="breathCircle"><span id="breathLabel">Breathe in</span></div>
    <div class="breath-caption" id="breathCaption">4 seconds in</div>
  </div>
</section>

<section class="stats">
  <div class="wrap stats-grid">
    <div class="stat"><b data-count="82000" data-suffix="+">0</b><span>Mindful mornings logged</span></div>
    <div class="stat"><b data-count="94" data-suffix="%">0</b><span>Report calmer sleep</span></div>
    <div class="stat"><b data-count="50" data-suffix="+">0</b><span>Guided sleep stories</span></div>
    <div class="stat"><b data-count="4" data-suffix=".9★">0</b><span>Average rating</span></div>
  </div>
</section>

<section class="testi">
  <div class="wrap">
    <div class="testi-grid">
      <div class="tcard rv2"><p>"The breathing exercise before bed genuinely changed how fast I fall asleep. No exaggeration."</p><div class="who"><i style="background:#ffe3cf"></i>Noor, 34</div></div>
      <div class="tcard rv2"><p>"I've tried five meditation apps. This is the first one that doesn't feel like homework."</p><div class="who"><i style="background:#e3ddfa"></i>Leo, 27</div></div>
      <div class="tcard rv2"><p>"The mood tracking quietly showed me a pattern I'd been ignoring for months."</p><div class="who"><i style="background:#d9ecd9"></i>Sam, 41</div></div>
    </div>
  </div>
</section>

<section class="final">
  <div class="wrap">
    <div class="final-box rv">
      <h2>Your quietest five minutes could start now.</h2>
      <p>14 days free, cancel any time — no gentle guilt trip, promise.</p>
      <div class="cta"><button class="btn btn-lav" style="background:#2c2044;color:#fff">Try free for 14 days</button></div>
    </div>
  </div>
</section>

<footer>
  <div class="wrap">
    <div class="foot-top">
      <div class="foot-brand">
        <div class="brand">Kindred</div>
        <p>Guided meditation, sleep stories and mood tracking for quieter days.</p>
      </div>
      <div class="foot-cols">
        <div class="foot-col"><h6>App</h6><a>Practices</a><a>Sleep</a><a>Mood tracker</a></div>
        <div class="foot-col"><h6>Company</h6><a>About</a><a>Careers</a><a>Journal</a></div>
        <div class="foot-col"><h6>Support</h6><a>Help center</a><a>Community</a><a>Contact</a></div>
      </div>
    </div>
    <div class="foot-bottom"><span>© 2026 Kindred Wellness Inc.</span><span>Privacy · Terms</span></div>
  </div>
</footer>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script>
(function(){
  var nav = document.getElementById("nav");
  document.addEventListener("scroll", function(){ nav.classList.toggle("on", window.scrollY > 14); }, { passive: true });

  function fmt(n, suffix){
    var v = Math.round(n);
    var s = v >= 1000 ? (v/1000).toFixed(1).replace(/\.0$/,"") + "K" : String(v);
    return s + (suffix || "");
  }

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!window.gsap || !window.ScrollTrigger || reduced) {
    document.querySelectorAll(".rv,.rv2").forEach(function(el){ el.style.opacity = 1; el.style.transform = "none"; });
    document.querySelectorAll(".stat b[data-count]").forEach(function(el){ el.textContent = fmt(+el.dataset.count, el.dataset.suffix); });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  var tl = gsap.timeline({ defaults: { ease: "power3.out" } });
  tl.to(".hero .rv", { opacity: 1, y: 0, duration: .85, stagger: .09 })
    .fromTo(".phone-wrap", { opacity: 0, y: 40, scale: .96 }, { opacity: 1, y: 0, scale: 1, duration: 1 }, "-=.6");

  // Idle breathing loop on the hero phone's ring, echoing the app's own exercise.
  gsap.to(".phone .breath-ring", { scale: 1.08, duration: 2.4, ease: "sine.inOut", yoyo: true, repeat: -1 });
  gsap.to(".float-card", { y: -8, duration: 3, ease: "sine.inOut", yoyo: true, repeat: -1, stagger: .4 });

  document.querySelectorAll(".rv").forEach(function(el){
    if (el.closest(".hero")) return;
    gsap.to(el, { opacity: 1, y: 0, duration: .85, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%" } });
  });
  document.querySelectorAll(".rv2").forEach(function(el){
    gsap.from(el, { opacity: 0, y: 26, duration: .7, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%" } });
  });
  gsap.from(".press-row div", { opacity: 0, y: 10, stagger: .06, duration: .6, scrollTrigger: { trigger: ".press-row", start: "top 90%" } });

  document.querySelectorAll(".story .vis").forEach(function(vis){
    gsap.to(vis, { y: -24, ease: "none", scrollTrigger: { trigger: vis.closest(".story"), start: "top bottom", end: "bottom top", scrub: true } });
  });

  // Pinned breathing exercise: the circle scales through one guided cycle
  // (in / hold / out / hold) with the label and caption swapping in sync,
  // all driven by scroll scrub so the reader sets their own pace.
  var phases = [
    { label: "Breathe in", caption: "4 seconds in", scale: 1.35 },
    { label: "Hold", caption: "4 seconds hold", scale: 1.35 },
    { label: "Breathe out", caption: "4 seconds out", scale: .85 },
    { label: "Hold", caption: "4 seconds hold", scale: .85 }
  ];
  var breathTl = gsap.timeline({
    scrollTrigger: { trigger: "#breathPin", start: "top top", end: "+=220%", pin: true, scrub: .6 }
  });
  phases.forEach(function(phase, i){
    breathTl.to("#breathCircle", {
      scale: phase.scale, duration: 1, ease: "sine.inOut",
      onStart: function(){
        document.getElementById("breathLabel").textContent = phase.label;
        document.getElementById("breathCaption").textContent = phase.caption;
      }
    }, i === 0 ? 0 : ">");
  });

  ScrollTrigger.create({
    trigger: ".stats", start: "top 80%", once: true,
    onEnter: function(){
      document.querySelectorAll(".stat b[data-count]").forEach(function(el){
        var target = +el.dataset.count, suffix = el.dataset.suffix || "", o = { v: 0 };
        gsap.to(o, { v: target, duration: 1.8, ease: "power2.out", onUpdate: function(){ el.textContent = fmt(o.v, suffix); } });
      });
    }
  });

  window.addEventListener("load", function(){ ScrollTrigger.refresh(); });
})();
</script>
</body></html>
`,

  "social-share-cta-section": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Nexara Landing Page</title><style>
:root{--bg:#0b0518;--panel:rgba(255,255,255,.04);--panel-b:rgba(255,255,255,.09);--ink:#f1edfb;--mut:#9184b8;--mag:#ff4fd8;--cyan:#4de1ff;--violet:#8b5cf6}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--ink);font-family:"Space Grotesk",Inter,ui-sans-serif,system-ui,sans-serif;-webkit-font-smoothing:antialiased;overflow-x:hidden}
h1,h2,h3{font-family:"Space Grotesk",sans-serif;margin:0;font-weight:600;letter-spacing:-.03em;color:#fff}
p{margin:0;color:var(--mut);font-family:Inter,sans-serif}
button{font-family:inherit;cursor:pointer;border:0}
.wrap{max-width:1160px;margin:0 auto;padding:0 32px}
.rv{opacity:0;transform:translateY(28px)}
.eb{display:inline-flex;align-items:center;gap:9px;font-size:12.5px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;margin-bottom:16px}
.eb .grad-txt{background:linear-gradient(90deg,var(--mag),var(--cyan));-webkit-background-clip:text;background-clip:text;color:transparent}

/* ---------- buttons ---------- */
.btn{position:relative;display:inline-flex;align-items:center;gap:9px;border-radius:13px;padding:15px 26px;font-size:14.5px;font-weight:600;transition:transform .3s cubic-bezier(.2,.8,.2,1),box-shadow .3s}
.btn svg{width:15px;height:15px;flex:none;transition:transform .3s}
.btn:hover svg{transform:translateX(3px)}
.btn-grad{background:linear-gradient(100deg,var(--mag),var(--violet) 55%,var(--cyan));color:#fff;box-shadow:0 14px 34px rgba(139,92,246,.35)}
.btn-grad:hover{transform:translateY(-3px);box-shadow:0 20px 46px rgba(139,92,246,.5)}
.btn-glass{background:var(--panel);color:var(--ink);border:1px solid var(--panel-b);backdrop-filter:blur(10px)}
.btn-glass:hover{transform:translateY(-3px);background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.2)}

/* ---------- nav ---------- */
.nav{position:sticky;top:0;z-index:60;transition:background .4s,border-color .4s;border-bottom:1px solid transparent}
.nav-in{max-width:1160px;margin:0 auto;padding:22px 32px;display:flex;align-items:center;gap:34px}
.nav.on{background:rgba(11,5,24,.78);backdrop-filter:blur(20px);border-bottom-color:rgba(255,255,255,.08)}
.brand{display:flex;align-items:center;gap:9px;font-size:19px;font-weight:700;color:#fff}
.brand .mark{width:26px;height:26px;border-radius:8px;background:linear-gradient(135deg,var(--mag),var(--cyan))}
.nav-links{display:flex;gap:28px;margin:0 auto;font-size:14px;color:var(--mut)}
.nav-links a{position:relative;cursor:pointer}
.nav-links a:after{content:"";position:absolute;left:0;bottom:-5px;width:100%;height:1.5px;background:linear-gradient(90deg,var(--mag),var(--cyan));transform:scaleX(0);transform-origin:right;transition:transform .3s}
.nav-links a:hover{color:#fff}
.nav-links a:hover:after{transform:scaleX(1);transform-origin:left}
.nav-right{display:flex;align-items:center;gap:16px}
.nav-right .lg{font-size:14px;color:var(--mut)}
.nav-right .btn{padding:10px 18px;font-size:13.5px}

/* ---------- hero ---------- */
.hero{position:relative;padding:110px 0 80px;overflow:hidden}
.hero:before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.06) 1px,transparent 1px);background-size:26px 26px;mask-image:radial-gradient(ellipse 70% 55% at 50% 20%,#000,transparent)}
.hero-glow1{position:absolute;top:-200px;left:-140px;width:600px;height:600px;border-radius:50%;background:radial-gradient(circle,rgba(255,79,216,.22),transparent 68%);filter:blur(10px)}
.hero-glow2{position:absolute;top:-120px;right:-160px;width:560px;height:560px;border-radius:50%;background:radial-gradient(circle,rgba(77,225,255,.18),transparent 68%);filter:blur(10px)}
.hero-in{position:relative;text-align:center;max-width:820px;margin:0 auto}
.hero .eb{justify-content:center}
.hero h1{font-size:clamp(40px,5.6vw,72px);line-height:1.03}
.hero h1 .grad{background:linear-gradient(100deg,var(--mag),var(--violet) 55%,var(--cyan));-webkit-background-clip:text;background-clip:text;color:transparent}
.hero p.lead{margin-top:22px;font-size:17.5px;line-height:1.65;max-width:560px;margin-left:auto;margin-right:auto}
.hero .cta{display:flex;gap:14px;justify-content:center;margin-top:32px;flex-wrap:wrap}

/* orbit visual */
.orbit-wrap{position:relative;margin-top:80px;height:380px;display:flex;align-items:center;justify-content:center}
.orbit-ring{position:absolute;border:1px solid rgba(255,255,255,.09);border-radius:50%}
.or1{width:640px;height:640px}
.or2{width:460px;height:460px}
.or3{width:300px;height:300px}
.orbit-core{position:relative;z-index:2;width:150px;height:150px;border-radius:50%;background:linear-gradient(135deg,var(--mag),var(--violet) 60%,var(--cyan));display:flex;align-items:center;justify-content:center;box-shadow:0 0 100px rgba(139,92,246,.45)}
.orbit-core svg{width:60px;height:60px;color:#fff}
.orbit-token{position:absolute;width:56px;height:56px;border-radius:50%;background:var(--panel);border:1px solid var(--panel-b);backdrop-filter:blur(10px);display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:700;box-shadow:0 14px 30px rgba(0,0,0,.4)}

/* ---------- logos ---------- */
.logos{padding:44px 0;border-top:1px solid rgba(255,255,255,.08);border-bottom:1px solid rgba(255,255,255,.08)}
.logos .lbl{text-align:center;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--mut);margin-bottom:24px}
.logo-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:28px;opacity:.5}
.logo-row div{font-weight:700;font-size:18px;color:#fff}

/* ---------- feature grid ---------- */
.feats{padding:130px 0}
.feats-head{max-width:600px;margin:0 auto 56px;text-align:center}
.feats-head h2{font-size:clamp(28px,3.4vw,42px)}
.feat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.fcard{background:var(--panel);border:1px solid var(--panel-b);border-radius:20px;padding:28px;backdrop-filter:blur(10px);position:relative;overflow:hidden;transition:transform .35s cubic-bezier(.2,.8,.2,1),border-color .35s}
.fcard:before{content:"";position:absolute;inset:0;background:linear-gradient(140deg,rgba(255,79,216,.12),transparent 50%);opacity:0;transition:opacity .35s}
.fcard:hover{transform:translateY(-6px);border-color:rgba(255,255,255,.22)}
.fcard:hover:before{opacity:1}
.fcard .ic{width:46px;height:46px;border-radius:13px;background:linear-gradient(135deg,var(--mag),var(--cyan));display:flex;align-items:center;justify-content:center;margin-bottom:18px;position:relative}
.fcard .ic svg{width:22px;height:22px;color:#fff}
.fcard h3{font-size:17.5px;margin-bottom:10px;position:relative}
.fcard p{font-size:14px;line-height:1.65;position:relative}

/* ---------- pinned vault ---------- */
.vault-sec{position:relative}
.vault-head{text-align:center;padding:120px 0 0;max-width:580px;margin:0 auto}
.vault-head h2{font-size:clamp(28px,3.4vw,42px)}
.vault-pin{height:100vh;display:flex;align-items:center;justify-content:center}
.vault-card{width:min(480px,88vw);background:var(--panel);border:1px solid var(--panel-b);border-radius:26px;padding:32px;backdrop-filter:blur(16px);box-shadow:0 40px 90px rgba(0,0,0,.5)}
.vault-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:22px}
.vault-top span{font-size:12.5px;color:var(--mut);text-transform:uppercase;letter-spacing:.05em}
.vault-lock{width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,var(--mag),var(--cyan));display:flex;align-items:center;justify-content:center}
.vault-lock svg{width:18px;height:18px;color:#fff}
.vault-bal{font-size:38px;font-weight:700;color:#fff;margin-bottom:6px}
.vault-bal span{font-size:14px;color:var(--cyan);margin-left:8px}
.vault-rows{margin-top:24px;display:flex;flex-direction:column;gap:12px}
.vault-row{display:flex;align-items:center;justify-content:space-between;background:rgba(255,255,255,.03);border-radius:12px;padding:12px 15px;opacity:0}
.vault-row .l{display:flex;align-items:center;gap:10px;font-size:13.5px}
.vault-row .l i{width:26px;height:26px;border-radius:50%;flex:none}
.vault-row b{font-size:13.5px;color:#fff}

/* ---------- stats ---------- */
.stats{padding:0 0 120px;text-align:center}
.stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
.stat b{display:block;font-size:clamp(30px,3.6vw,46px);color:#fff}
.stat span{display:block;margin-top:8px;font-size:12.5px;color:var(--mut)}

/* ---------- testimonial ---------- */
.testi{padding:0 0 130px}
.testi-card{max-width:740px;margin:0 auto;text-align:center;background:var(--panel);border:1px solid var(--panel-b);border-radius:24px;padding:56px 48px;backdrop-filter:blur(10px)}
.testi-card p{font-size:21px;line-height:1.55;color:#fff;font-weight:500}
.testi-card .who{margin-top:24px;font-size:13.5px;color:var(--mut)}

/* ---------- final cta ---------- */
.final{padding:0 0 120px}
.final-box{position:relative;border-radius:32px;padding:90px 40px;text-align:center;overflow:hidden;background:linear-gradient(135deg,#1a0b33,#0b0518)}
.final-box:before{content:"";position:absolute;width:640px;height:400px;border-radius:50%;background:radial-gradient(ellipse,rgba(255,79,216,.28),transparent 70%);top:-160px;left:50%;transform:translateX(-50%)}
.final-box h2{position:relative;font-size:clamp(30px,4.4vw,50px);max-width:640px;margin:0 auto}
.final-box p{position:relative;margin:18px auto 0;max-width:440px;font-size:16px}
.final-box .cta{position:relative;justify-content:center;margin-top:32px;display:flex;gap:14px}

/* ---------- footer ---------- */
footer{border-top:1px solid rgba(255,255,255,.08);padding:60px 0 30px}
.foot-top{display:flex;justify-content:space-between;gap:40px;flex-wrap:wrap;padding-bottom:40px;border-bottom:1px solid rgba(255,255,255,.08)}
.foot-brand p{max-width:280px;margin-top:14px;font-size:14px;line-height:1.6}
.foot-cols{display:flex;gap:60px}
.foot-col h6{font-size:12px;text-transform:uppercase;letter-spacing:.06em;color:var(--mut);margin-bottom:16px}
.foot-col a{display:block;font-size:14px;color:var(--ink);margin-bottom:10px;text-decoration:none;opacity:.75}
.foot-col a:hover{opacity:1;color:var(--mag)}
.foot-bottom{display:flex;justify-content:space-between;padding-top:26px;font-size:13px;color:var(--mut)}

@media(max-width:900px){
  .feat-grid{grid-template-columns:1fr}
  .stats-grid{grid-template-columns:repeat(2,1fr);gap:26px}
  .nav-links{display:none}
  .orbit-wrap{height:300px}
  .or1{width:400px;height:400px}
  .or2{width:290px;height:290px}
  .or3{width:190px;height:190px}
}
@media(max-width:600px){
  .foot-top{flex-direction:column;gap:28px}
  .foot-cols{gap:30px;flex-wrap:wrap}
  .testi-card{padding:36px 26px}
  .testi-card p{font-size:18px}
}
@media(prefers-reduced-motion:reduce){
  .rv{opacity:1!important;transform:none!important}
}
</style></head>
<body data-cf-keep-dark>

<nav class="nav" id="nav">
  <div class="nav-in">
    <div class="brand"><span class="mark"></span>Nexara</div>
    <div class="nav-links"><a>Wallet</a><a>Swap</a><a>Stake</a><a>Docs</a></div>
    <div class="nav-right"><span class="lg">Docs</span><button class="btn btn-grad">Launch app <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M7 17 17 7M7 7h10v10"/></svg></button></div>
  </div>
</nav>

<section class="hero">
  <div class="hero-glow1"></div>
  <div class="hero-glow2"></div>
  <div class="wrap hero-in">
    <span class="eb rv"><span class="grad-txt">Self-custody, actually simple</span></span>
    <h1 class="rv">One wallet for every <span class="grad">chain</span> you touch.</h1>
    <p class="lead rv">Nexara unifies swaps, staking and NFTs across twelve chains behind a single key you actually control.</p>
    <div class="cta rv"><button class="btn btn-grad">Launch app <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M7 17 17 7M7 7h10v10"/></svg></button><button class="btn btn-glass">Read the docs</button></div>
  </div>
  <div class="orbit-wrap rv" id="orbitWrap">
    <div class="orbit-ring or1" id="or1"></div>
    <div class="orbit-ring or2" id="or2"></div>
    <div class="orbit-ring or3" id="or3"></div>
    <div class="orbit-core"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2 3 6v6c0 5 4 8.5 9 10 5-1.5 9-5 9-10V6z"/></svg></div>
    <div class="orbit-token" id="tok1" style="background:linear-gradient(135deg,#ff4fd8,#8b5cf6)">Ξ</div>
    <div class="orbit-token" id="tok2" style="background:linear-gradient(135deg,#4de1ff,#8b5cf6)">◎</div>
    <div class="orbit-token" id="tok3" style="background:linear-gradient(135deg,#8b5cf6,#ff4fd8)">₿</div>
  </div>
</section>

<section class="logos">
  <div class="wrap">
    <div class="lbl">// audited &amp; integrated with</div>
    <div class="logo-row"><div>ChainSafe</div><div>Aurora&nbsp;Labs</div><div>Prysm</div><div>Halborn</div><div>OpenZeppelin</div></div>
  </div>
</section>

<section class="feats">
  <div class="wrap">
    <div class="feats-head">
      <span class="eb rv" style="justify-content:center"><span class="grad-txt">Platform</span></span>
      <h2 class="rv">Everything a self-custody wallet should be.</h2>
    </div>
    <div class="feat-grid">
      <div class="fcard rv2"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg></div><h3>Non-custodial by design</h3><p>Your keys never touch our servers — full local encryption, always.</p></div>
      <div class="fcard rv2"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 3h5v5M4 20 21 3M8 21H3v-5"/></svg></div><h3>Cross-chain swaps</h3><p>Route the best price across twelve chains in a single signed transaction.</p></div>
      <div class="fcard rv2"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2 3 6v6c0 5 4 8.5 9 10 5-1.5 9-5 9-10V6z"/></svg></div><h3>Audited twice over</h3><p>Independently reviewed by Halborn and OpenZeppelin, reports public.</p></div>
    </div>
  </div>
</section>

<section class="vault-sec">
  <div class="vault-head">
    <span class="eb rv" style="justify-content:center"><span class="grad-txt">Live portfolio</span></span>
    <h2 class="rv">Watch your holdings settle in.</h2>
  </div>
  <div class="vault-pin" id="vaultPin">
    <div class="vault-card">
      <div class="vault-top"><span>Total balance</span><div class="vault-lock"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div></div>
      <div class="vault-bal" id="vaultBal">$0<span>+4.2%</span></div>
      <div class="vault-rows" id="vaultRows">
        <div class="vault-row"><div class="l"><i style="background:linear-gradient(135deg,#ff4fd8,#8b5cf6)"></i>Ethereum</div><b>$18,420</b></div>
        <div class="vault-row"><div class="l"><i style="background:linear-gradient(135deg,#4de1ff,#8b5cf6)"></i>Solana</div><b>$9,150</b></div>
        <div class="vault-row"><div class="l"><i style="background:linear-gradient(135deg,#8b5cf6,#ff4fd8)"></i>Bitcoin</div><b>$14,780</b></div>
      </div>
    </div>
  </div>
</section>

<section class="stats">
  <div class="wrap stats-grid">
    <div class="stat"><b data-count="2100000000" data-suffix="+">0</b><span>Total value secured</span></div>
    <div class="stat"><b data-count="12">0</b><span>Chains supported</span></div>
    <div class="stat"><b data-count="410000" data-suffix="+">0</b><span>Wallets created</span></div>
    <div class="stat"><b data-count="0">0</b><span>Custodial breaches, ever</span></div>
  </div>
</section>

<section class="testi">
  <div class="wrap">
    <div class="testi-card rv">
      <p>"Moved my whole portfolio off three separate wallets. Nexara is the first one that felt like it was actually mine."</p>
      <div class="who">— Reza Amiri, DeFi builder</div>
    </div>
  </div>
</section>

<section class="final">
  <div class="wrap">
    <div class="final-box rv">
      <h2>Your keys. Every chain. One wallet.</h2>
      <p>Free to create, no seed phrase emailed to anyone — ever.</p>
      <div class="cta"><button class="btn btn-grad">Launch app <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M7 17 17 7M7 7h10v10"/></svg></button><button class="btn btn-glass">Read the docs</button></div>
    </div>
  </div>
</section>

<footer>
  <div class="wrap">
    <div class="foot-top">
      <div class="foot-brand">
        <div class="brand"><span class="mark"></span>Nexara</div>
        <p>A self-custody wallet for every chain, behind one key.</p>
      </div>
      <div class="foot-cols">
        <div class="foot-col"><h6>Product</h6><a>Wallet</a><a>Swap</a><a>Stake</a></div>
        <div class="foot-col"><h6>Resources</h6><a>Docs</a><a>Audits</a><a>Status</a></div>
        <div class="foot-col"><h6>Company</h6><a>About</a><a>Blog</a><a>Careers</a></div>
      </div>
    </div>
    <div class="foot-bottom"><span>© 2026 Nexara Labs.</span><span>Privacy · Terms</span></div>
  </div>
</footer>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script>
(function(){
  var nav = document.getElementById("nav");
  document.addEventListener("scroll", function(){ nav.classList.toggle("on", window.scrollY > 14); }, { passive: true });

  function fmt(n, suffix){
    var v = Math.round(n);
    var s = v >= 1000000000 ? (v/1000000000).toFixed(1).replace(/\.0$/,"") + "B" :
            v >= 1000000 ? (v/1000000).toFixed(1).replace(/\.0$/,"") + "M" :
            v >= 1000 ? (v/1000).toFixed(1).replace(/\.0$/,"") + "K" : String(v);
    return "$" === suffix ? "$" + s : s + (suffix || "");
  }

  function positionTokens(){
    var wrap = document.getElementById("orbitWrap");
    var r2 = document.getElementById("or2").offsetWidth / 2;
    var r3 = document.getElementById("or3").offsetWidth / 2;
    var r1 = document.getElementById("or1").offsetWidth / 2;
    var cx = wrap.offsetWidth / 2, cy = wrap.offsetHeight / 2;
    place("tok1", cx, cy, r1, -20);
    place("tok2", cx, cy, r2, 140);
    place("tok3", cx, cy, r3, 260);
  }
  function place(id, cx, cy, r, deg){
    var rad = deg * Math.PI / 180;
    var el = document.getElementById(id);
    el.style.left = (cx + r * Math.cos(rad) - el.offsetWidth / 2) + "px";
    el.style.top = (cy + r * Math.sin(rad) - el.offsetHeight / 2) + "px";
    el.style.position = "absolute";
  }
  positionTokens();
  window.addEventListener("resize", positionTokens);

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!window.gsap || !window.ScrollTrigger || reduced) {
    document.querySelectorAll(".rv,.rv2").forEach(function(el){ el.style.opacity = 1; el.style.transform = "none"; });
    document.querySelectorAll(".stat b[data-count]").forEach(function(el){ el.textContent = fmt(+el.dataset.count, el.dataset.suffix); });
    document.getElementById("vaultBal").innerHTML = '$42,350<span>+4.2%</span>';
    document.querySelectorAll(".vault-row").forEach(function(el){ el.style.opacity = 1; });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  var tl = gsap.timeline({ defaults: { ease: "power3.out" } });
  tl.to(".hero-in .rv", { opacity: 1, y: 0, duration: .8, stagger: .08 })
    .fromTo("#orbitWrap", { opacity: 0, y: 30, scale: .92 }, { opacity: 1, y: 0, scale: 1, duration: 1 }, "-=.5");

  // Continuous orbit rotation for the ring system, each ring at a different
  // speed for a layered, believable orbital feel.
  gsap.to("#or1", { rotation: 360, duration: 60, ease: "none", repeat: -1, transformOrigin: "50% 50%" });
  gsap.to("#or2", { rotation: -360, duration: 42, ease: "none", repeat: -1, transformOrigin: "50% 50%" });
  gsap.to("#or3", { rotation: 360, duration: 26, ease: "none", repeat: -1, transformOrigin: "50% 50%" });
  gsap.to(".orbit-core", { scale: 1.06, duration: 2.4, ease: "sine.inOut", yoyo: true, repeat: -1 });

  document.querySelectorAll(".rv").forEach(function(el){
    if (el.closest(".hero")) return;
    gsap.to(el, { opacity: 1, y: 0, duration: .85, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%" } });
  });
  document.querySelectorAll(".rv2").forEach(function(el){
    gsap.from(el, { opacity: 0, y: 26, duration: .7, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%" } });
  });
  gsap.from(".logo-row div", { opacity: 0, y: 10, stagger: .06, duration: .6, scrollTrigger: { trigger: ".logo-row", start: "top 90%" } });

  // Pinned portfolio card: balance counts up and each holding row settles
  // in one at a time, driven by scroll scrub through the pinned section.
  var vaultTl = gsap.timeline({
    scrollTrigger: { trigger: "#vaultPin", start: "top top", end: "+=170%", pin: true, scrub: .5 }
  });
  var balObj = { v: 0 };
  vaultTl.to(balObj, { v: 42350, duration: .5, ease: "none", onUpdate: function(){
    document.getElementById("vaultBal").innerHTML = fmt(balObj.v, "$") + '<span>+4.2%</span>';
  }})
  .to("#vaultRows .vault-row", { opacity: 1, y: 0, duration: .18, stagger: .15 }, "-=.15");
  gsap.set("#vaultRows .vault-row", { y: 14 });

  ScrollTrigger.create({
    trigger: ".stats", start: "top 80%", once: true,
    onEnter: function(){
      document.querySelectorAll(".stat b[data-count]").forEach(function(el){
        var target = +el.dataset.count, suffix = el.dataset.suffix || "", o = { v: 0 };
        if (target === 0) { el.textContent = "0"; return; }
        gsap.to(o, { v: target, duration: 1.8, ease: "power2.out", onUpdate: function(){ el.textContent = fmt(o.v, suffix); } });
      });
    }
  });

  window.addEventListener("load", function(){ ScrollTrigger.refresh(); positionTokens(); });
})();
</script>
</body></html>
`,

  "trust-badges-security-band": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Sentrix Landing Page</title><style>
:root{--bg:#08090b;--panel:#0e1013;--panel2:#131619;--line:rgba(255,255,255,.08);--ink:#e8ebee;--mut:#767d86;--red:#ff3b3b;--cyan:#37e6d0;--amber:#ffab3d}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--ink);font-family:Inter,ui-sans-serif,system-ui,sans-serif;-webkit-font-smoothing:antialiased;overflow-x:hidden}
h1,h2,h3{font-family:"Space Grotesk",Inter,sans-serif;margin:0;font-weight:600;letter-spacing:-.03em;color:#fff}
p{margin:0;color:var(--mut)}
button{font-family:inherit;cursor:pointer;border:0}
.mono{font-family:"JetBrains Mono",ui-monospace,monospace}
.wrap{max-width:1160px;margin:0 auto;padding:0 32px}
.rv{opacity:0;transform:translateY(28px)}
.eb{display:inline-flex;align-items:center;gap:9px;font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--red);margin-bottom:16px;font-family:"JetBrains Mono",monospace}
.eb .dot{width:6px;height:6px;border-radius:50%;background:var(--red);box-shadow:0 0 8px var(--red);animation:pulse-dot 1.6s ease-in-out infinite}
@keyframes pulse-dot{50%{opacity:.3}}

/* ---------- buttons ---------- */
.btn{position:relative;display:inline-flex;align-items:center;gap:9px;border-radius:9px;padding:14px 24px;font-size:14.5px;font-weight:600;transition:transform .25s,box-shadow .25s,border-color .25s}
.btn svg{width:15px;height:15px;flex:none;transition:transform .25s}
.btn:hover svg{transform:translateX(3px)}
.btn-red{background:var(--red);color:#fff;box-shadow:0 0 0 rgba(255,59,59,.4)}
.btn-red:hover{transform:translateY(-2px);box-shadow:0 16px 34px rgba(255,59,59,.3)}
.btn-line{background:transparent;color:var(--ink);border:1px solid var(--line)}
.btn-line:hover{transform:translateY(-2px);border-color:rgba(255,255,255,.28);background:rgba(255,255,255,.04)}

/* ---------- nav ---------- */
.nav{position:sticky;top:0;z-index:60;border-bottom:1px solid transparent;transition:background .4s,border-color .4s}
.nav-in{max-width:1160px;margin:0 auto;padding:20px 32px;display:flex;align-items:center;gap:34px}
.nav.on{background:rgba(8,9,11,.85);backdrop-filter:blur(16px);border-bottom-color:var(--line)}
.brand{display:flex;align-items:center;gap:9px;font-size:18px;font-weight:700;color:#fff}
.brand svg{width:20px;height:20px;color:var(--red)}
.nav-links{display:flex;gap:28px;margin:0 auto;font-size:13.5px;color:var(--mut)}
.nav-links a{position:relative;cursor:pointer}
.nav-links a:after{content:"";position:absolute;left:0;bottom:-5px;width:100%;height:1px;background:var(--red);transform:scaleX(0);transform-origin:right;transition:transform .3s}
.nav-links a:hover{color:#fff}
.nav-links a:hover:after{transform:scaleX(1);transform-origin:left}
.nav-right{display:flex;align-items:center;gap:16px}
.nav-right .lg{font-size:13.5px;color:var(--mut)}
.nav-right .btn{padding:10px 18px;font-size:13px}

/* ---------- hero ---------- */
.hero{position:relative;padding:100px 0 60px;overflow:hidden}
.hero:before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px);background-size:48px 48px;mask-image:radial-gradient(ellipse 60% 55% at 50% 10%,#000,transparent)}
.hero-in{position:relative;text-align:center;max-width:800px;margin:0 auto}
.hero .eb{justify-content:center}
.hero h1{font-size:clamp(38px,5vw,64px);line-height:1.06}
.hero h1 .glitch{color:var(--red);position:relative;display:inline-block}
.hero p.lead{margin-top:22px;font-size:17px;line-height:1.65;max-width:560px;margin-left:auto;margin-right:auto}
.hero .cta{display:flex;gap:14px;justify-content:center;margin-top:32px;flex-wrap:wrap}

/* network monitor mockup */
.mon-wrap{position:relative;margin-top:56px}
.mon{position:relative;z-index:1;background:var(--panel);border:1px solid var(--line);border-radius:18px;box-shadow:0 40px 90px rgba(0,0,0,.55);max-width:960px;margin:0 auto;overflow:hidden}
.mon-top{display:flex;align-items:center;justify-content:space-between;padding:16px 20px;border-bottom:1px solid var(--line)}
.mon-top .l{display:flex;align-items:center;gap:8px;font-size:12.5px;color:var(--mut)}
.mon-top .l b{width:8px;height:8px;border-radius:50%;background:var(--cyan);display:inline-block;box-shadow:0 0 8px var(--cyan)}
.mon-top .r{font-size:11.5px;color:var(--mut);font-family:"JetBrains Mono",monospace}
.mon-body{display:grid;grid-template-columns:1fr 260px;min-height:300px}
.net-canvas{position:relative;padding:28px}
.net-canvas svg{width:100%;height:260px}
.net-node{fill:var(--panel2);stroke:rgba(255,255,255,.15)}
.net-node.alert{stroke:var(--red)}
.net-line{stroke:rgba(255,255,255,.1);stroke-width:1}
.net-line.alert{stroke:var(--red);stroke-width:1.4}
.mon-side{border-left:1px solid var(--line);padding:20px}
.mon-side h5{font-size:11.5px;text-transform:uppercase;letter-spacing:.05em;color:var(--mut);margin-bottom:14px}
.alert-row{display:flex;align-items:flex-start;gap:10px;padding:10px 0;border-bottom:1px solid var(--line)}
.alert-row:last-child{border-bottom:0}
.alert-row i{width:8px;height:8px;border-radius:50%;background:var(--red);margin-top:5px;flex:none;box-shadow:0 0 8px var(--red)}
.alert-row b{display:block;font-size:12.5px;color:#fff}
.alert-row span{font-size:11px;color:var(--mut);font-family:"JetBrains Mono",monospace}

/* ---------- logos ---------- */
.logos{padding:44px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.logos .lbl{text-align:center;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--mut);margin-bottom:24px;font-family:"JetBrains Mono",monospace}
.logo-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:28px;opacity:.5}
.logo-row div{font-family:"Space Grotesk",sans-serif;font-weight:700;font-size:18px;color:#fff}

/* ---------- feature grid ---------- */
.feats{padding:130px 0}
.feats-head{max-width:600px;margin:0 auto 56px;text-align:center}
.feats-head h2{font-size:clamp(28px,3.4vw,42px)}
.feat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.fcard{background:var(--panel);border:1px solid var(--line);border-radius:16px;padding:28px;transition:transform .3s,border-color .3s}
.fcard:hover{transform:translateY(-6px);border-color:rgba(255,59,59,.3)}
.fcard .ic{width:44px;height:44px;border-radius:11px;background:rgba(255,59,59,.1);display:flex;align-items:center;justify-content:center;margin-bottom:18px}
.fcard .ic svg{width:21px;height:21px;color:var(--red)}
.fcard h3{font-size:17px;margin-bottom:10px}
.fcard p{font-size:14px;line-height:1.65}

/* ---------- pinned threat sequence ---------- */
.threat-sec{position:relative}
.threat-head{text-align:center;padding:120px 0 0;max-width:600px;margin:0 auto}
.threat-head h2{font-size:clamp(28px,3.4vw,42px)}
.threat-pin{height:100vh;display:flex;align-items:center;justify-content:center}
.threat-card{width:min(640px,90vw);background:var(--panel);border:1px solid var(--line);border-radius:20px;padding:32px;box-shadow:0 40px 90px rgba(0,0,0,.5)}
.threat-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px}
.threat-badge{font-size:11px;font-weight:700;padding:5px 11px;border-radius:20px;text-transform:uppercase;letter-spacing:.04em;font-family:"JetBrains Mono",monospace}
.threat-badge.detect{background:rgba(255,171,61,.15);color:var(--amber)}
.threat-badge.block{background:rgba(255,59,59,.15);color:var(--red)}
.threat-badge.resolved{background:rgba(55,230,208,.15);color:var(--cyan)}
.threat-log{background:var(--bg);border:1px solid var(--line);border-radius:12px;padding:16px 18px;font-family:"JetBrains Mono",monospace;font-size:12.5px;color:var(--mut);min-height:120px;line-height:1.8}
.threat-log .ok{color:var(--cyan)}
.threat-log .warn{color:var(--amber)}
.threat-log .err{color:var(--red)}
.threat-line{opacity:0}
.threat-stages{display:flex;justify-content:center;gap:8px;margin-top:20px}
.threat-stages span{width:7px;height:7px;border-radius:50%;background:rgba(255,255,255,.15)}
.threat-stages span.on{background:var(--red)}

/* ---------- stats ---------- */
.stats{padding:0 0 120px;text-align:center}
.stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
.stat b{display:block;font-family:"Space Grotesk",sans-serif;font-size:clamp(30px,3.6vw,46px);font-weight:700;color:#fff}
.stat span{display:block;margin-top:8px;font-size:12.5px;color:var(--mut)}

/* ---------- testimonial ---------- */
.testi{padding:0 0 130px}
.testi-card{max-width:740px;margin:0 auto;text-align:center;background:var(--panel);border:1px solid var(--line);border-radius:22px;padding:56px 48px}
.testi-card p{font-size:21px;line-height:1.55;color:#fff;font-weight:500}
.testi-card .who{margin-top:24px;font-size:13.5px;color:var(--mut)}

/* ---------- final cta ---------- */
.final{padding:0 0 120px}
.final-box{position:relative;background:linear-gradient(135deg,#1a0808,#08090b);border:1px solid rgba(255,59,59,.2);border-radius:26px;padding:90px 40px;text-align:center;overflow:hidden}
.final-box:before{content:"";position:absolute;width:600px;height:400px;border-radius:50%;background:radial-gradient(ellipse,rgba(255,59,59,.2),transparent 70%);top:-140px;left:50%;transform:translateX(-50%)}
.final-box h2{position:relative;font-size:clamp(30px,4.4vw,50px);max-width:640px;margin:0 auto}
.final-box p{position:relative;margin:18px auto 0;max-width:440px;font-size:16px}
.final-box .cta{position:relative;justify-content:center;margin-top:32px;display:flex;gap:14px}

/* ---------- footer ---------- */
footer{border-top:1px solid var(--line);padding:60px 0 30px}
.foot-top{display:flex;justify-content:space-between;gap:40px;flex-wrap:wrap;padding-bottom:40px;border-bottom:1px solid var(--line)}
.foot-brand p{max-width:280px;margin-top:14px;font-size:14px;line-height:1.6}
.foot-cols{display:flex;gap:60px}
.foot-col h6{font-size:12px;text-transform:uppercase;letter-spacing:.06em;color:var(--mut);margin-bottom:16px;font-family:"JetBrains Mono",monospace}
.foot-col a{display:block;font-size:14px;color:var(--ink);margin-bottom:10px;text-decoration:none;opacity:.75}
.foot-col a:hover{opacity:1;color:var(--red)}
.foot-bottom{display:flex;justify-content:space-between;padding-top:26px;font-size:13px;color:var(--mut)}

@media(max-width:900px){
  .mon-body{grid-template-columns:1fr}
  .mon-side{border-left:0;border-top:1px solid var(--line)}
  .feat-grid{grid-template-columns:1fr}
  .stats-grid{grid-template-columns:repeat(2,1fr);gap:26px}
  .nav-links{display:none}
}
@media(max-width:600px){
  .foot-top{flex-direction:column;gap:28px}
  .foot-cols{gap:30px;flex-wrap:wrap}
  .testi-card{padding:36px 24px}
  .testi-card p{font-size:18px}
}
@media(prefers-reduced-motion:reduce){
  .rv{opacity:1!important;transform:none!important}
}
</style></head>
<body data-cf-keep-dark>

<nav class="nav" id="nav">
  <div class="nav-in">
    <div class="brand"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2 3 6v6c0 5 4 8.5 9 10 5-1.5 9-5 9-10V6z"/></svg>Sentrix</div>
    <div class="nav-links"><a>Platform</a><a>Threat intel</a><a>Pricing</a><a>Docs</a></div>
    <div class="nav-right"><span class="lg">Sign in</span><button class="btn btn-red">Request a demo <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M7 17 17 7M7 7h10v10"/></svg></button></div>
  </div>
</nav>

<section class="hero">
  <div class="wrap hero-in">
    <span class="eb rv"><span class="dot"></span>Real-time threat detection</span>
    <h1 class="rv">See the breach <span class="glitch" id="glitchWord">before</span> it happens.</h1>
    <p class="lead rv">Sentrix watches every endpoint, every packet, every login — and shuts down anomalies in milliseconds, not tickets.</p>
    <div class="cta rv"><button class="btn btn-red">Request a demo <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M7 17 17 7M7 7h10v10"/></svg></button><button class="btn btn-line">Read the whitepaper</button></div>
  </div>
  <div class="wrap mon-wrap">
    <div class="mon rv" id="heroMon">
      <div class="mon-top">
        <div class="l"><b></b>NETWORK MONITOR — 412 NODES</div>
        <div class="r" id="clockLbl">00:00:00 UTC</div>
      </div>
      <div class="mon-body">
        <div class="net-canvas">
          <svg viewBox="0 0 480 260" id="netSvg">
            <line class="net-line" x1="60" y1="60" x2="180" y2="120"/>
            <line class="net-line" x1="180" y1="120" x2="320" y2="70"/>
            <line class="net-line" x1="180" y1="120" x2="220" y2="210"/>
            <line class="net-line alert" x1="220" y1="210" x2="360" y2="190"/>
            <line class="net-line" x1="320" y1="70" x2="420" y2="130"/>
            <line class="net-line" x1="60" y1="60" x2="90" y2="180"/>
            <circle class="net-node" cx="60" cy="60" r="7"/>
            <circle class="net-node" cx="180" cy="120" r="9"/>
            <circle class="net-node" cx="320" cy="70" r="7"/>
            <circle class="net-node" cx="220" cy="210" r="7"/>
            <circle class="net-node alert" cx="360" cy="190" r="9" id="alertNode"/>
            <circle class="net-node" cx="420" cy="130" r="6"/>
            <circle class="net-node" cx="90" cy="180" r="6"/>
          </svg>
        </div>
        <div class="mon-side">
          <h5>Live alerts</h5>
          <div class="alert-row"><i></i><div><b>Unusual login pattern</b><span>node-360 · 2s ago</span></div></div>
          <div class="alert-row"><i style="background:var(--amber);box-shadow:0 0 8px var(--amber)"></i><div><b>Port scan detected</b><span>node-220 · 41s ago</span></div></div>
          <div class="alert-row"><i style="background:var(--cyan);box-shadow:0 0 8px var(--cyan)"></i><div><b>Threat auto-resolved</b><span>node-180 · 2m ago</span></div></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="logos">
  <div class="wrap">
    <div class="lbl">// trusted by security teams at</div>
    <div class="logo-row"><div>Halborn</div><div>Northbeam</div><div>Fenwick</div><div>Argus</div><div>Prysm</div></div>
  </div>
</section>

<section class="feats">
  <div class="wrap">
    <div class="feats-head">
      <span class="eb rv" style="justify-content:center">Platform</span>
      <h2 class="rv">Detection that doesn't wait for a ticket.</h2>
    </div>
    <div class="feat-grid">
      <div class="fcard rv2"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></div><h3>Anomaly detection</h3><p>Behavioral baselines per endpoint, flagging deviations in real time, not overnight batches.</p></div>
      <div class="fcard rv2"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2 3 14h8l-1 8 10-12h-8z"/></svg></div><h3>Automated response</h3><p>Isolate a compromised node in under 200ms, no human in the loop required.</p></div>
      <div class="fcard rv2"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2 3 6v6c0 5 4 8.5 9 10 5-1.5 9-5 9-10V6z"/></svg></div><h3>Compliance-ready</h3><p>SOC 2, ISO 27001 and HIPAA-mapped controls, audit trail included by default.</p></div>
    </div>
  </div>
</section>

<section class="threat-sec">
  <div class="threat-head">
    <span class="eb rv" style="justify-content:center">Anatomy of a block</span>
    <h2 class="rv">From detection to resolution, in seconds.</h2>
  </div>
  <div class="threat-pin" id="threatPin">
    <div class="threat-card">
      <div class="threat-top"><span class="mono" style="font-size:12px;color:var(--mut)">INCIDENT #4471</span><span class="threat-badge detect" id="threatBadge">Detecting</span></div>
      <div class="threat-log" id="threatLog">
        <div class="threat-line" id="tl0">&gt; scanning node-360 traffic pattern...</div>
        <div class="threat-line" id="tl1">&gt; <span class="warn">anomaly score 0.94 — flagged</span></div>
        <div class="threat-line" id="tl2">&gt; <span class="err">blocking outbound connection...</span></div>
        <div class="threat-line" id="tl3">&gt; <span class="ok">node-360 isolated. incident resolved in 184ms</span></div>
      </div>
      <div class="threat-stages" id="threatStages"><span class="on"></span><span></span><span></span></div>
    </div>
  </div>
</section>

<section class="stats">
  <div class="wrap stats-grid">
    <div class="stat"><b data-count="4200000000" data-suffix="+">0</b><span>Events analyzed daily</span></div>
    <div class="stat"><b data-count="184" data-suffix="ms">0</b><span>Median response time</span></div>
    <div class="stat"><b data-count="99" data-suffix=".99%">0</b><span>Platform uptime</span></div>
    <div class="stat"><b data-count="1800">0</b><span>Enterprises protected</span></div>
  </div>
</section>

<section class="testi">
  <div class="wrap">
    <div class="testi-card rv">
      <p>"Sentrix caught a lateral-movement attempt our old SIEM would've surfaced two days later, if at all."</p>
      <div class="who">— Grace Lin, CISO, Northbeam</div>
    </div>
  </div>
</section>

<section class="final">
  <div class="wrap">
    <div class="final-box rv">
      <h2>Stop reading alerts. Start blocking them.</h2>
      <p>See Sentrix live on your own network in a 30-minute demo.</p>
      <div class="cta"><button class="btn btn-red">Request a demo <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M7 17 17 7M7 7h10v10"/></svg></button><button class="btn btn-line">Talk to sales</button></div>
    </div>
  </div>
</section>

<footer>
  <div class="wrap">
    <div class="foot-top">
      <div class="foot-brand">
        <div class="brand"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2 3 6v6c0 5 4 8.5 9 10 5-1.5 9-5 9-10V6z"/></svg>Sentrix</div>
        <p>Real-time threat detection and automated response for the modern enterprise.</p>
      </div>
      <div class="foot-cols">
        <div class="foot-col"><h6>Product</h6><a>Detection</a><a>Response</a><a>Compliance</a></div>
        <div class="foot-col"><h6>Company</h6><a>About</a><a>Careers</a><a>Trust center</a></div>
        <div class="foot-col"><h6>Resources</h6><a>Docs</a><a>Threat intel</a><a>Status</a></div>
      </div>
    </div>
    <div class="foot-bottom"><span>© 2026 Sentrix Security Inc.</span><span>Privacy · Terms</span></div>
  </div>
</footer>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script>
(function(){
  var nav = document.getElementById("nav");
  document.addEventListener("scroll", function(){ nav.classList.toggle("on", window.scrollY > 14); }, { passive: true });

  function fmt(n, suffix){
    var v = Math.round(n);
    var s = v >= 1000000000 ? (v/1000000000).toFixed(1).replace(/\.0$/,"") + "B" :
            v >= 1000000 ? (v/1000000).toFixed(1).replace(/\.0$/,"") + "M" :
            v >= 1000 ? (v/1000).toFixed(1).replace(/\.0$/,"") + "K" : String(v);
    return s + (suffix || "");
  }

  // Live-feeling UTC clock in the monitor mockup header.
  function tickClock(){
    var d = new Date();
    var pad = function(n){ return String(n).padStart(2, "0"); };
    document.getElementById("clockLbl").textContent = pad(d.getUTCHours()) + ":" + pad(d.getUTCMinutes()) + ":" + pad(d.getUTCSeconds()) + " UTC";
  }
  tickClock();
  setInterval(tickClock, 1000);

  // Subtle text-glitch on the hero's accent word: brief character scramble.
  var glitchChars = "!<>-_\\/[]{}—=+*^?#";
  var glitchEl = document.getElementById("glitchWord");
  var original = glitchEl.textContent;
  function runGlitch(){
    var iterations = 0;
    var iv = setInterval(function(){
      glitchEl.textContent = original.split("").map(function(ch, i){
        if (i < iterations) return original[i];
        return glitchChars[Math.floor(Math.random() * glitchChars.length)];
      }).join("");
      iterations += 1;
      if (iterations > original.length) { clearInterval(iv); glitchEl.textContent = original; }
    }, 45);
  }

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!window.gsap || !window.ScrollTrigger || reduced) {
    document.querySelectorAll(".rv,.rv2").forEach(function(el){ el.style.opacity = 1; el.style.transform = "none"; });
    document.querySelectorAll(".stat b[data-count]").forEach(function(el){ el.textContent = fmt(+el.dataset.count, el.dataset.suffix); });
    document.querySelectorAll(".threat-line").forEach(function(el){ el.style.opacity = 1; });
    document.getElementById("threatBadge").textContent = "Resolved";
    document.getElementById("threatBadge").className = "threat-badge resolved";
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  var tl = gsap.timeline({ defaults: { ease: "power3.out" } });
  tl.to(".hero-in .rv", { opacity: 1, y: 0, duration: .8, stagger: .08 })
    .fromTo("#heroMon", { opacity: 0, y: 40, scale: .97 }, { opacity: 1, y: 0, scale: 1, duration: 1 }, "-=.5")
    .call(runGlitch, null, "-=.8");

  setInterval(runGlitch, 5000);

  // Alert node on the network graph pulses to draw the eye, echoing a live monitor.
  gsap.to("#alertNode", { r: 12, duration: .9, ease: "sine.inOut", yoyo: true, repeat: -1 });
  gsap.to(".mon-top .l b", { scale: 1.4, duration: 1, ease: "sine.inOut", yoyo: true, repeat: -1 });

  document.querySelectorAll(".rv").forEach(function(el){
    if (el.closest(".hero")) return;
    gsap.to(el, { opacity: 1, y: 0, duration: .85, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%" } });
  });
  document.querySelectorAll(".rv2").forEach(function(el){
    gsap.from(el, { opacity: 0, y: 26, duration: .7, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%" } });
  });
  gsap.from(".logo-row div", { opacity: 0, y: 10, stagger: .06, duration: .6, scrollTrigger: { trigger: ".logo-row", start: "top 90%" } });

  // Pinned incident timeline: log lines type into view, the status badge
  // progresses detecting -> blocking -> resolved, and stage dots track it —
  // all driven by scroll scrub through the pinned card.
  var badge = document.getElementById("threatBadge");
  var stages = document.querySelectorAll("#threatStages span");
  var threatTl = gsap.timeline({
    scrollTrigger: { trigger: "#threatPin", start: "top top", end: "+=200%", pin: true, scrub: .5 }
  });
  threatTl
    .to("#tl0", { opacity: 1, duration: .15 })
    .to("#tl1", { opacity: 1, duration: .15, onStart: function(){ badge.textContent = "Detecting"; badge.className = "threat-badge detect"; stages[0].classList.add("on"); } }, "+=.1")
    .to("#tl2", { opacity: 1, duration: .15, onStart: function(){ badge.textContent = "Blocking"; badge.className = "threat-badge block"; stages[1].classList.add("on"); } }, "+=.15")
    .to("#tl3", { opacity: 1, duration: .15, onStart: function(){ badge.textContent = "Resolved"; badge.className = "threat-badge resolved"; stages[2].classList.add("on"); } }, "+=.15");

  ScrollTrigger.create({
    trigger: ".stats", start: "top 80%", once: true,
    onEnter: function(){
      document.querySelectorAll(".stat b[data-count]").forEach(function(el){
        var target = +el.dataset.count, suffix = el.dataset.suffix || "", o = { v: 0 };
        gsap.to(o, { v: target, duration: 1.8, ease: "power2.out", onUpdate: function(){ el.textContent = fmt(o.v, suffix); } });
      });
    }
  });

  window.addEventListener("load", function(){ ScrollTrigger.refresh(); });
})();
</script>
</body></html>
`,

  "final-cta-gradient-section": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>AI Palette Generator Landing Page</title><style>
:root{--bg:#030303;--surf:#0a0a0a;--surf2:#1e1e1e;--red:#de3145;--line:rgba(255,255,255,.1);--muted:rgba(255,255,255,.5);--ink:#f2f2f2}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--ink);font-family:Inter,ui-sans-serif,system-ui,sans-serif;-webkit-font-smoothing:antialiased;overflow-x:hidden}
h1,h2,h3{margin:0;font-weight:650;letter-spacing:-.02em}
p{margin:0}
button{font-family:inherit;cursor:pointer;border:0;background:none;color:inherit}
.serif{font-family:Georgia,"Times New Roman",serif;font-style:italic;font-weight:400}
.mono{font-family:ui-monospace,"SF Mono",Menlo,monospace}
.wrap{max-width:1080px;margin:0 auto;padding:0 40px}
.rv{opacity:0;transform:translateY(28px)}

/* ---------- fixed overlay chrome: crosshairs + scroll pill ---------- */
.frame{position:fixed;inset:0;z-index:90;pointer-events:none}
.frame i{position:absolute;width:13px;height:13px;color:rgba(255,255,255,.3)}
.frame i:before,.frame i:after{content:"";position:absolute;background:currentColor}
.frame i:before{width:100%;height:1px;top:50%}
.frame i:after{width:1px;height:100%;left:50%}
.frame .tl{top:20px;left:20px}.frame .tr{top:20px;right:20px}.frame .bl{bottom:20px;left:20px}.frame .br{bottom:20px;right:20px}
.frame.on-light i{color:rgba(17,17,17,.35)}
.scrollpill{position:fixed;right:24px;bottom:24px;z-index:91;display:inline-flex;align-items:center;gap:8px;padding:10px 16px;border-radius:999px;background:rgba(255,255,255,.06);border:1px solid var(--line);color:rgba(255,255,255,.7);font-size:11px;letter-spacing:.08em;text-transform:uppercase;backdrop-filter:blur(6px)}
.scrollpill svg{width:11px;height:11px;animation:bob 1.8s ease-in-out infinite}
@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(3px)}}

/* ---------- shared section rhythm ---------- */
.sec{position:relative;padding:150px 0}
.head{text-align:center;max-width:640px;margin:0 auto 60px}
.eyebrow{display:block;margin-bottom:16px;font-size:17px;color:var(--muted)}
.head h2{font-size:clamp(26px,3.4vw,38px);line-height:1.25}
.head-lg{text-align:center}
.head-lg .eyebrow{font-size:12px;letter-spacing:.16em;text-transform:uppercase;font-style:normal;font-family:Inter,sans-serif;margin-bottom:14px}
.head-lg h2{font-size:clamp(34px,5vw,54px)}

/* ---------- hero ---------- */
.hero{min-height:100vh;display:flex;align-items:center;padding:0}
.hero-grid{display:grid;grid-template-columns:.85fr 1fr;gap:56px;align-items:center;width:100%}
.hero-art{width:100%;aspect-ratio:1;border-radius:22px;transform:rotate(-7deg);box-shadow:0 40px 90px -20px rgba(0,0,0,.7);background:
  radial-gradient(120% 120% at 15% 10%,#ff8a4c,transparent 45%),
  radial-gradient(110% 110% at 85% 15%,#c04cff,transparent 50%),
  radial-gradient(120% 120% at 20% 90%,#20d9d9,transparent 55%),
  linear-gradient(135deg,#5b2bd6,#1c1c8f 55%,#0c1030)}
.hero-copy .eyebrow{text-align:right}
.hero-copy h1{font-size:clamp(30px,3.6vw,40px);line-height:1.18;font-weight:600;letter-spacing:-.02em;margin-bottom:34px}
.dropzone{height:150px;border:1px dashed var(--line);border-radius:14px;background:rgba(255,255,255,.02)}

/* ---------- swatch cards (shared look, reused across 3 sections) ---------- */
.swatches{display:flex;justify-content:center;gap:26px;margin-top:20px;flex-wrap:wrap;min-height:200px}
.sw{width:120px;height:158px;border-radius:14px;padding:14px;display:flex;flex-direction:column;justify-content:flex-end;box-shadow:0 24px 46px -14px rgba(0,0,0,.55);transition:transform .5s cubic-bezier(.2,.8,.2,1)}
.sw b{font-size:9px;letter-spacing:.1em;text-transform:uppercase;opacity:.6;font-family:ui-monospace,monospace;font-weight:500}
.sw span{display:block;margin-top:3px;font-size:11px;font-family:ui-monospace,monospace;font-weight:600}
.scatter .sw:nth-child(1){transform:rotate(-8deg) translateY(6px)}
.scatter .sw:nth-child(2){transform:rotate(6deg) translateY(-10px)}
.scatter .sw:nth-child(3){transform:rotate(-3deg) translateY(18px)}
.scatter .sw:nth-child(4){transform:rotate(9deg) translateY(-4px)}
.scatter .sw:nth-child(5){transform:rotate(-6deg) translateY(10px)}
.aligned .sw{transform:none}
.sw.c-primary{background:#abc7fa;color:#0a0a0a}
.sw.c-secondary{background:#f1c6d4;color:#0a0a0a}
.sw.c-tertiary{background:#e2d3b6;color:#0a0a0a}
.sw.c-surface{background:#1e1e1e;color:#fff}
.sw.c-background{background:#0a0a0a;color:#fff;border:1px solid var(--line)}
/* light-mode variant palette used inside the sync section */
.light-variant .c-primary{background:#006fb8;color:#fff}
.light-variant .c-secondary{background:#7b2c82;color:#fff}
.light-variant .c-tertiary{background:#6c6e3f;color:#fff}
.light-variant .c-surface{background:#ffffff;color:#0a0a0a;border:1px solid #e2e2e2}
.light-variant .c-background{background:#f8f8f8;color:#0a0a0a;border:1px solid #e2e2e2}

/* ---------- code window ---------- */
.codewin{max-width:520px;margin:40px auto 0;border-radius:12px;overflow:hidden;background:var(--surf);border:1px solid var(--line)}
.codewin .bar{display:flex;gap:7px;padding:11px 14px;border-bottom:1px solid var(--line)}
.codewin .bar i{width:9px;height:9px;border-radius:50%;background:#333}
.codewin pre{margin:0;padding:18px 20px;font-size:12.5px;line-height:1.85;font-family:ui-monospace,Menlo,monospace;color:#d6d6d6}
.codewin .k{color:#c792ea}
.codewin .p{color:#7ec6ee}
.codewin .v{color:#f1c6d4}

/* ---------- light "sync" section ---------- */
/* The section clips its own box rather than fading in. Body is dark, so the area
   outside the growing circle shows that dark background straight through — matching
   the reference's expanding white-circle wipe without a second overlay element.
   Radius and anchor are viewport units, not percentages: a percentage resolves
   against this section's own (much taller than the viewport) box, which put the
   circle's true centre hundreds of pixels below anything on screen during the
   scrubbed transition and made its visible edge read as a flat band, not a circle. */
.sync{background:#f4f4f4;color:#111;clip-path:circle(0px at 50% 50vh);will-change:clip-path}
.sync .eyebrow{color:rgba(17,17,17,.5)}
.sync .codewin{background:#fff;border-color:#e2e2e2}
.sync .codewin .bar{border-color:#e2e2e2}
.sync .codewin pre{color:#333}
.sync .codewin .k{color:#8b3fc7}
.sync .codewin .p{color:#0b6fa8}
.sync .codewin .v{color:#a8447a}

/* ---------- dashboard morph ---------- */
.dash{max-width:560px;margin:40px auto 0;border-radius:14px;overflow:hidden;background:var(--surf);border:1px solid var(--line)}
.dash .bar{display:flex;gap:7px;padding:11px 14px;border-bottom:1px solid var(--line)}
.dash .bar i{width:9px;height:9px;border-radius:50%;background:#333}
.dash-body{display:grid;grid-template-columns:110px 1fr;min-height:220px}
.dash-side{border-right:1px solid var(--line);padding:16px 12px;display:flex;flex-direction:column;gap:9px}
.dash-side i{height:9px;border-radius:4px;background:var(--line);display:block}
.dash-main{padding:18px}
.dash-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px}
.dash-top i{height:11px;width:120px;border-radius:4px;background:var(--line);display:block}
.deploy{padding:9px 16px;border-radius:8px;background:#abc7fa;color:#0a0a0a;font-size:11px;font-weight:700}
.dash-cards{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.dash-card{border-radius:10px;padding:14px;display:flex;flex-direction:column;gap:8px}
.dash-card .av{width:24px;height:24px;border-radius:50%;background:rgba(0,0,0,.2)}
.dash-card u{height:7px;width:70%;border-radius:4px;background:rgba(0,0,0,.18);text-decoration:none;display:block}
.dash-card.a{background:#e2d3b6;color:#0a0a0a}
.dash-card.b{background:#f1c6d4;color:#0a0a0a}

/* ---------- comparison stack ---------- */
.cmp-stack{display:flex;flex-direction:column;gap:22px;max-width:900px;margin:0 auto}
.cmp-card{position:relative;display:grid;grid-template-columns:1fr 1fr;gap:36px;padding:34px 40px;border:1px solid var(--line);border-radius:2px;overflow:hidden}
.cmp-card:before,.cmp-card:after{content:"";position:absolute;width:11px;height:11px}
.cmp-num{display:block;margin-bottom:14px;font-size:11px;letter-spacing:.1em;color:var(--muted);font-family:ui-monospace,monospace}
/* Each row pairs a manual-tooling problem (red) against the matching automated
   solution (white) side by side, not a single stacked statement. */
.cmp-side h3{font-size:clamp(17px,2vw,21px);line-height:1.35;font-weight:400}
.cmp-side.problem h3{color:var(--red)}
.cmp-side.solution{border-left:1px solid var(--line);padding-left:36px}
.cmp-side.solution h3{color:#fff}
.sweep{position:absolute;top:0;bottom:0;left:0;width:2px;background:#fff;box-shadow:0 0 30px 6px rgba(255,255,255,.7);opacity:0}

/* ---------- architecture stacked deck ---------- */
.deck{position:relative;max-width:560px;height:300px;margin:20px auto 0}
.deck-card{position:absolute;inset:0;border-radius:12px;background:var(--surf);border:1px solid var(--line);padding:24px 26px;opacity:0;transform:translateY(14px) scale(.97);transition:opacity .45s,transform .45s}
.deck-card.on{opacity:1;transform:none;z-index:2}
.deck-num{font-size:11px;letter-spacing:.08em;color:#7ec6ee;font-family:ui-monospace,monospace}
.deck-card h4{margin:16px 0 8px;font-size:19px;font-weight:600}
.deck-card p{font-size:13.5px;line-height:1.6;color:var(--muted);max-width:70%}
.chart{position:absolute;top:24px;right:26px;width:160px}
.chart svg{width:100%;height:36px;display:block}
.chart-meta{display:flex;justify-content:space-between;font-size:9px;color:var(--muted);font-family:ui-monospace,monospace;margin-top:4px}
.pillrow{display:flex;gap:8px;margin-bottom:18px}
.pillrow span{padding:7px 13px;border-radius:6px;font-size:10.5px;font-family:ui-monospace,monospace;background:rgba(255,255,255,.04);border:1px solid var(--line);color:var(--muted)}
.pillrow span.on{background:#1a2c3a;color:#7ec6ee;border-color:#2c4256}
/* Card 05 is the one light-coloured card in the deck, echoing its own subject. */
.deck-card.light{background:#f4f4f4;color:#111;border-color:#e2e2e2}
.deck-card.light .deck-num{color:#0b6fa8}
.deck-card.light p{color:rgba(17,17,17,.6)}
.deck-dots{display:flex;justify-content:center;gap:7px;margin-top:22px}
.deck-dots button{width:6px;height:6px;border-radius:99px;background:var(--line);transition:width .3s,background .3s}
.deck-dots button.on{width:20px;background:#7ec6ee}

/* ---------- final cta ---------- */
.cta-box{position:relative;max-width:640px;margin:0 auto;text-align:center;padding:70px 40px;border:1px solid var(--line)}
.cta-box:before,.cta-box:after{content:"";position:absolute;width:11px;height:11px}
.cta-ring{position:absolute;inset:-140px;z-index:-1;pointer-events:none;background:
  radial-gradient(circle,transparent 0 22%,rgba(255,255,255,.02) 22% 23%,transparent 23% 34%,rgba(255,255,255,.02) 34% 35%,transparent 35% 100%)}
.cta-box h2{font-size:clamp(28px,4vw,40px);margin-bottom:34px}
.cta-actions{display:flex;justify-content:center;gap:14px;flex-wrap:wrap;margin-bottom:26px}
.btn{display:inline-flex;align-items:center;gap:9px;padding:14px 26px;font-size:13.5px;font-weight:600;border-radius:4px;transition:transform .25s,background .25s,border-color .25s}
.btn.solid{background:#fff;color:#0a0a0a}
.btn.solid:hover{transform:translateY(-2px);background:#e8e8e8}
.btn.line{border:1px solid var(--line);color:var(--ink)}
.btn.line:hover{transform:translateY(-2px);border-color:rgba(255,255,255,.3)}
.btn i{font-style:normal;transition:transform .25s}
.btn.solid:hover i{transform:translateX(3px)}
.cta-note{font-size:11px;letter-spacing:.08em;color:var(--muted);font-family:ui-monospace,monospace}

/* ---------- footer ---------- */
.ft{padding:90px 0 34px;border-top:1px solid var(--line)}
.ft-grid{display:grid;grid-template-columns:1.4fr .8fr .8fr;gap:40px}
.ft-brand b{font-size:26px;font-family:Georgia,serif;font-style:italic;font-weight:400}
.ft-tag{margin-top:10px;font-size:13px;color:var(--muted)}
.ft-desc{margin-top:14px;font-size:13px;line-height:1.7;color:var(--muted);max-width:38ch}
.status{display:inline-flex;align-items:center;gap:8px;margin-top:20px;padding:8px 14px;border:1px solid var(--line);border-radius:6px;font-size:10.5px;font-family:ui-monospace,monospace;color:var(--muted)}
.status s{width:6px;height:6px;border-radius:50%;background:#3ddc84;text-decoration:none;box-shadow:0 0 0 3px rgba(61,220,132,.18)}
.ft-col b{display:block;margin-bottom:16px;font-size:11px;letter-spacing:.08em;font-family:ui-monospace,monospace;color:var(--muted)}
.ft-col a{display:block;margin-bottom:12px;font-size:14px;color:rgba(255,255,255,.75);cursor:pointer;transition:color .25s,transform .25s}
.ft-col a:hover{color:#fff;transform:translateX(3px)}
.ft-bottom{display:flex;justify-content:space-between;margin-top:60px;padding-top:22px;border-top:1px solid var(--line);font-size:11px;color:var(--muted);font-family:ui-monospace,monospace}
.ft-bottom .links{display:flex;gap:22px}

/* ---------- responsive ---------- */
@media(max-width:900px){
  .hero-grid{grid-template-columns:1fr;gap:36px}
  .hero-copy .eyebrow{text-align:left}
  .ft-grid{grid-template-columns:1fr;gap:34px}
  .dash-body{grid-template-columns:1fr}
  .dash-side{display:none}
}
@media(max-width:620px){
  .wrap{padding:0 22px}
  .sec{padding:100px 0}
  .swatches{gap:14px}
  .sw{width:88px;height:118px;padding:10px}
  .cmp-card{padding:24px 22px;grid-template-columns:1fr;gap:16px}
  .cmp-side.solution{border-left:0;padding-left:0;border-top:1px solid var(--line);padding-top:16px}
  .frame{display:none}
  .scrollpill{right:14px;bottom:14px;font-size:10px;padding:8px 12px}
  .dash-cards{grid-template-columns:1fr}
  .ft-bottom{flex-direction:column;gap:10px}
}
@media(prefers-reduced-motion:reduce){
  .rv{opacity:1!important;transform:none!important}
  .scrollpill svg{animation:none}
  .sync{clip-path:none!important}
}
</style></head>
<body data-cf-keep-dark>
<noscript><style>.rv{opacity:1!important;transform:none!important}.sync{clip-path:none!important}</style></noscript>

<div class="frame"><i class="tl"></i><i class="tr"></i><i class="bl"></i><i class="br"></i></div>
<div class="scrollpill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>Auto Scroll Experience</div>

<header class="sec hero">
  <div class="wrap hero-grid">
    <div class="hero-art rv"></div>
    <div class="hero-copy">
      <span class="eyebrow serif rv">100% Client-Side Privacy</span>
      <h1 class="rv">Drag and drop your logo, brand asset, or photograph. It never leaves your browser.</h1>
      <div class="dropzone rv"></div>
    </div>
  </div>
</header>

<section class="sec">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow serif rv">Material Design 3 Engine</span>
      <h2 class="rv">Our algorithm identifies the dominant colors and builds an accessible, WCAG-compliant palette.</h2>
    </div>
    <div class="swatches scatter rv">
      <div class="sw c-primary"><b>Primary</b><span>#ABC7FA</span></div>
      <div class="sw c-secondary"><b>Secondary</b><span>#F1C6D4</span></div>
      <div class="sw c-background"><b>Background</b><span>#0A0A0A</span></div>
      <div class="sw c-surface"><b>Surface</b><span>#1E1E1E</span></div>
      <div class="sw c-tertiary"><b>Tertiary</b><span>#E2D3B6</span></div>
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow serif rv">Tailwind CSS v4 Ready</span>
      <h2 class="rv">Instantly generated <span class="mono" style="background:rgba(255,255,255,.08);padding:2px 8px;border-radius:5px;font-size:.7em">@theme</span> variables. Perfectly mapped for Shadcn UI components.</h2>
    </div>
    <div class="swatches aligned rv">
      <div class="sw c-primary"><b>Primary</b><span>#ABC7FA</span></div>
      <div class="sw c-secondary"><b>Secondary</b><span>#F1C6D4</span></div>
      <div class="sw c-background"><b>Background</b><span>#0A0A0A</span></div>
      <div class="sw c-surface"><b>Surface</b><span>#1E1E1E</span></div>
      <div class="sw c-tertiary"><b>Tertiary</b><span>#E2D3B6</span></div>
    </div>
    <div class="codewin rv">
      <div class="bar"><i></i><i></i><i></i></div>
      <pre><span class="k">@theme</span> {
  <span class="p">--color-primary</span>: <span class="v">#ABC7FA</span>;
  <span class="p">--color-secondary</span>: <span class="v">#F1C6D4</span>;
  <span class="p">--color-tertiary</span>: <span class="v">#E2D3B6</span>;
  <span class="p">--color-surface</span>: <span class="v">#1E1E1E</span>;
  <span class="p">--color-background</span>: <span class="v">#0A0A0A</span>;
}</pre>
    </div>
  </div>
</section>

<section class="sec sync">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow serif rv">Light &amp; Dark Mode Sync</span>
      <h2 class="rv">Automatic generation of both environments. One click to implement everywhere.</h2>
    </div>
    <div class="swatches aligned light-variant rv">
      <div class="sw c-primary"><b>Primary</b><span>#006FB8</span></div>
      <div class="sw c-secondary"><b>Secondary</b><span>#7B2C82</span></div>
      <div class="sw c-background"><b>Background</b><span>#F8F8F8</span></div>
      <div class="sw c-surface"><b>Surface</b><span>#FFFFFF</span></div>
      <div class="sw c-tertiary"><b>Tertiary</b><span>#6C6E3F</span></div>
    </div>
    <div class="codewin rv">
      <div class="bar"><i></i><i></i><i></i></div>
      <pre><span class="k">@theme</span> {
  <span class="p">--color-primary</span>: <span class="v">#006FB8</span>;
  <span class="p">--color-secondary</span>: <span class="v">#7B2C82</span>;
  <span class="p">--color-tertiary</span>: <span class="v">#6C6E3F</span>;
  <span class="p">--color-surface</span>: <span class="v">#FFFFFF</span>;
  <span class="p">--color-background</span>: <span class="v">#F8F8F8</span>;
}</pre>
    </div>
  </div>
</section>

<section class="sec mapping">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow serif rv">Component Mapping</span>
      <h2 class="rv">Your generated Material palette instantly brings your Shadcn UI to life.</h2>
    </div>
    <div class="dash rv">
      <div class="bar"><i></i><i></i><i></i></div>
      <div class="dash-body">
        <div class="dash-side"><i style="width:70%"></i><i style="width:50%"></i><i style="width:60%"></i></div>
        <div class="dash-main">
          <div class="dash-top"><i></i><button class="deploy">Deploy Theme</button></div>
          <div class="dash-cards">
            <div class="dash-card a"><span class="av"></span><u></u></div>
            <div class="dash-card b"><span class="av"></span><u></u></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="head-lg" style="margin-bottom:64px"><span class="eyebrow rv">No Comparison</span></div>
    <div class="cmp-stack">
      <div class="cmp-card rv">
        <span class="sweep"></span>
        <div class="cmp-side problem"><span class="cmp-num">01 // COLOR GENERATION</span><h3 class="serif">Generic hex color pickers and manual tweaking.</h3></div>
        <div class="cmp-side solution"><span class="cmp-num">01 // RESULT</span><h3 class="serif">Algorithmic Material Design 3 spec.</h3></div>
      </div>
      <div class="cmp-card rv">
        <span class="sweep"></span>
        <div class="cmp-side problem"><span class="cmp-num">02 // CSS INTEGRATION</span><h3 class="serif">Tedious manual mapping to framework utilities.</h3></div>
        <div class="cmp-side solution"><span class="cmp-num">02 // RESULT</span><h3 class="serif">Native Tailwind CSS v4 @theme variables.</h3></div>
      </div>
      <div class="cmp-card rv">
        <span class="sweep"></span>
        <div class="cmp-side problem"><span class="cmp-num">03 // ACCESSIBILITY</span><h3 class="serif">No built-in contrast or WCAG compliance checks.</h3></div>
        <div class="cmp-side solution"><span class="cmp-num">03 // RESULT</span><h3 class="serif">Guaranteed accessible WCAG contrast ratios.</h3></div>
      </div>
      <div class="cmp-card rv">
        <span class="sweep"></span>
        <div class="cmp-side problem"><span class="cmp-num">04 // SECURITY</span><h3 class="serif">Uploads proprietary brand assets to external servers.</h3></div>
        <div class="cmp-side solution"><span class="cmp-num">04 // RESULT</span><h3 class="serif">100% client-side WebAssembly processing.</h3></div>
      </div>
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="head-lg" style="margin-bottom:20px"><span class="eyebrow rv">Architecture</span><h2 class="serif rv">Modular by design.</h2></div>
    <div class="deck" id="deck">
      <div class="deck-card on" data-i="0">
        <div class="deck-num">04 // WASM COMPILE</div>
        <div class="chart"><svg viewBox="0 0 160 36" preserveAspectRatio="none"><polyline points="0,30 20,26 40,10 60,20 80,4 100,18 120,12 140,22 160,16" fill="none" stroke="#7ec6ee" stroke-width="1.5"/></svg><div class="chart-meta"><span>CPU 7-BUILT</span><span>5.4ms MAX</span></div></div>
        <h4>WebAssembly Acceleration</h4>
        <p>Quantization algorithms written in Rust compile down to bare-metal execution speeds.</p>
      </div>
      <div class="deck-card light" data-i="1">
        <div class="deck-num">05 // SYNC</div>
        <h4>Light &amp; Dark Sync</h4>
        <p>Generates accessible variants for both schemes from a single source palette.</p>
      </div>
      <div class="deck-card" data-i="2">
        <div class="deck-num">06 // BUILD</div>
        <div class="pillrow"><span>JSON</span><span>CSS</span><span class="on">TRW4</span></div>
        <h4>Pipeline Exports</h4>
        <p>Stream data as raw tokens, raw CSS, or straight to the clipboard to drop directly into Shadcn projects.</p>
      </div>
    </div>
    <div class="deck-dots" id="deckDots"><button class="on"></button><button></button><button></button></div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="cta-box rv">
      <div class="cta-ring"></div>
      <h2 class="serif">Start building.</h2>
      <div class="cta-actions">
        <button class="btn solid">Launch App <i>&rarr;</i></button>
        <button class="btn line">Open Studio <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:13px;height:13px"><rect x="5" y="11" width="14" height="9" rx="1"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg></button>
      </div>
      <span class="cta-note">100% FREE + PROPRIETARY API</span>
    </div>
  </div>
</section>

<footer class="ft">
  <div class="wrap">
    <div class="ft-grid">
      <div class="ft-brand">
        <b>px2m3.</b>
        <p class="ft-tag mono">The exactness of code.</p>
        <p class="ft-desc">Extract the mathematical essence of any visual source. Generate pure Material Design 3 and Tailwind v4 syntax instantly.</p>
        <span class="status"><s></s>CORE ENGINE ONLINE</span>
      </div>
      <div class="ft-col"><b>01 // DIRECTORY</b><a>Palette Generator</a><a>Theme Studio</a><a>Blog &amp; Guides</a></div>
      <div class="ft-col"><b>02 // NETWORK</b><a>GitHub</a><a>Twitter (X)</a></div>
    </div>
    <div class="ft-bottom">
      <span>&copy; 2026 PX2M3 // ALL RIGHTS RESERVED.</span>
      <span class="links"><a style="color:inherit;cursor:pointer">PRIVACY POLICY</a><a style="color:inherit;cursor:pointer">TERMS OF SERVICE</a></span>
    </div>
  </div>
</footer>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script>
(function(){
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // The corner crosshairs recolour once a light section (the sync section) fills the
  // viewport, so they stay visible against either background.
  var syncEl = document.querySelector(".sync");
  var frame = document.querySelector(".frame");
  function checkFrame(){
    var r = syncEl.getBoundingClientRect();
    var mid = window.innerHeight / 2;
    frame.classList.toggle("on-light", r.top < mid && r.bottom > mid);
  }
  document.addEventListener("scroll", checkFrame, { passive: true });
  checkFrame();

  // Architecture deck: click a dot to bring that card to the front.
  var cards = [].slice.call(document.querySelectorAll(".deck-card"));
  var dots = [].slice.call(document.querySelectorAll("#deckDots button"));
  function showCard(i){
    cards.forEach(function(c, ci){ c.classList.toggle("on", ci === i); });
    dots.forEach(function(d, di){ d.classList.toggle("on", di === i); });
  }
  dots.forEach(function(d, i){ d.addEventListener("click", function(){ showCard(i); }); });
  var deckIdx = 0, deckTimer;
  if (!reduced) {
    deckTimer = setInterval(function(){ deckIdx = (deckIdx + 1) % cards.length; showCard(deckIdx); }, 3200);
    document.getElementById("deck").addEventListener("mouseenter", function(){ clearInterval(deckTimer); });
  }

  if (!window.gsap || !window.ScrollTrigger || reduced) {
    document.querySelectorAll(".rv").forEach(function(el){ el.style.opacity = 1; el.style.transform = "none"; });
    // .sync starts clipped to a point specifically for the scrubbed wipe below; without
    // GSAP driving that animation it would stay clipped shut and the section would
    // never become visible at all.
    document.querySelector(".sync").style.clipPath = "none";
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".hero .rv", { opacity: 1, y: 0, duration: .9, stagger: .12, ease: "power3.out", delay: .1 });

  document.querySelectorAll("section .rv").forEach(function(el){
    gsap.to(el, { opacity: 1, y: 0, duration: .8, ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 85%", once: true } });
  });

  // Swatches settle from their scattered rotation into an aligned row as the reader
  // scrolls past the "Tailwind CSS v4 Ready" heading, echoing the reference's morph.
  gsap.to(".scatter .sw", {
    rotation: 0, y: 0, duration: 1, ease: "power3.out", stagger: .05,
    scrollTrigger: { trigger: ".scatter", start: "top 60%", once: true }
  });

  // The light section wipes open through an expanding circle rather than fading in.
  // clip-path coordinates are fixed to .sync's own box, not the viewport, so a static
  // "50% 50%"-style anchor drifts out of view as the section scrolls underneath it —
  // the anchor has to be recalculated every frame from the section's live position so
  // the circle's centre always sits at the viewport's true visual middle as it grows.
  (function(){
    var syncEl = document.querySelector(".sync");
    var maxR = Math.max(window.innerWidth, window.innerHeight) * 0.85;
    ScrollTrigger.create({
      trigger: syncEl, start: "top 90%", end: "top 20%", scrub: true,
      onUpdate: function(self){
        var top = syncEl.getBoundingClientRect().top;
        var anchorY = window.innerHeight / 2 - top;
        syncEl.style.clipPath = "circle(" + (self.progress * maxR) + "px at 50% " + anchorY + "px)";
      }
    });
  })();

  // Comparison cards: a bright vertical line sweeps across each card as it enters.
  document.querySelectorAll(".cmp-card").forEach(function(card){
    var sweep = card.querySelector(".sweep");
    gsap.timeline({ scrollTrigger: { trigger: card, start: "top 80%", once: true } })
      .fromTo(sweep, { left: "0%", opacity: 1 }, { left: "100%", opacity: 1, duration: .9, ease: "power2.inOut" })
      .to(sweep, { opacity: 0, duration: .3 });
  });

  window.addEventListener("load", function(){ ScrollTrigger.refresh(); });
})();
</script>
</body></html>
`,
};
