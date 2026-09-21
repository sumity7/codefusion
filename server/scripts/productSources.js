export const productSources = {

  "magnetic-cta-button": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Magnetic CTA Button</title><style>
@property --angle{syntax:"<angle>";inherits:true;initial-value:0deg}
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;overflow:hidden}
.stage{position:relative;display:grid;gap:22px;place-items:center;padding:70px}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.halo{position:absolute;top:50%;left:50%;width:220px;height:220px;margin:-110px 0 0 -110px;border-radius:50%;background:radial-gradient(circle,rgba(196,181,253,.35),transparent 70%);filter:blur(10px);opacity:0;transition:opacity .3s;pointer-events:none}
.magnetic-wrap{position:relative}
.magnetic-wrap::before{content:"";position:absolute;inset:-2px;border-radius:999px;background:conic-gradient(from var(--angle),#9b8aff,#4c3f80,#d7d0ff,#4c3f80,#9b8aff);opacity:0;transition:opacity .3s;animation:spin 4s linear infinite;z-index:0}
.magnetic-wrap:hover::before{opacity:1}
.magnetic{position:relative;z-index:1;padding:18px 34px;border:1px solid var(--line);border-radius:999px;font-size:12px;font-weight:700;color:#eee9f8;cursor:pointer;background:#111017;transition:transform .15s ease-out,background .25s,color .25s}
.magnetic-wrap:hover .magnetic{background:#17131f;color:#fff}
@keyframes spin{to{--angle:360deg}}
</style></head>
<body data-cf-keep-dark><div class="stage"><span class="kicker">MOVE YOUR CURSOR NEAR IT</span>
<div class="halo" id="halo"></div>
<div class="magnetic-wrap" id="wrap"><button class="magnetic" id="btn">Join the waitlist</button></div>
</div>
<script>
const wrap=document.getElementById("wrap"),btn=document.getElementById("btn"),halo=document.getElementById("halo");
document.addEventListener("pointermove",function(e){
  const r=btn.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,dx=e.clientX-cx,dy=e.clientY-cy,dist=Math.hypot(dx,dy);
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
</body></html>`,

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
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.stage{display:grid;gap:18px;place-items:center;padding:40px}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.ripple-btn{position:relative;overflow:hidden;padding:16px 34px;border:0;border-radius:14px;font-size:12px;font-weight:800;color:#0a090f;cursor:pointer;background:linear-gradient(135deg,#d7d0ff,#9b8aff);box-shadow:0 8px 30px -8px rgba(155,138,255,.55);transition:transform .15s cubic-bezier(.34,1.56,.64,1),box-shadow .25s}
.ripple-btn:active{transform:scale(.94);box-shadow:0 4px 16px -6px rgba(155,138,255,.5)}
.ripple{position:absolute;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,.85),rgba(255,255,255,0) 70%);transform:scale(0);animation:ripple .7s ease-out;pointer-events:none;mix-blend-mode:overlay}
@keyframes ripple{to{transform:scale(3.2);opacity:0}}
</style></head>
<body data-cf-keep-dark><div class="stage"><span class="kicker">CLICK ANYWHERE ON THE BUTTON</span><button class="ripple-btn" id="btn">Click me</button></div>
<script>
document.getElementById("btn").addEventListener("click",function(e){
  const r=this.getBoundingClientRect();const d=Math.max(r.width,r.height)*1.4;
  const span=document.createElement("span");span.className="ripple";
  span.style.width=span.style.height=d+"px";
  span.style.left=(e.clientX-r.left-d/2)+"px";span.style.top=(e.clientY-r.top-d/2)+"px";
  this.appendChild(span);setTimeout(function(){span.remove()},700);
});
</script>
</body></html>`,

  "flip-card-3d": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>3D Flip Card</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.kicker{display:block;margin-bottom:16px;color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700;text-align:center}
.scene{position:relative;width:260px;height:340px;perspective:1200px}
.scene::after{content:"";position:absolute;left:10%;right:10%;bottom:-24px;height:30px;border-radius:50%;background:radial-gradient(closest-side,rgba(155,138,255,.35),transparent 75%);filter:blur(6px);opacity:.5;transition:opacity .4s}
.scene:hover::after{opacity:.9}
.card{position:relative;width:100%;height:100%;transition:transform .7s cubic-bezier(.2,.8,.2,1);transform-style:preserve-3d;cursor:pointer}
.scene:hover .card{transform:rotateY(180deg)}
.face{position:absolute;inset:0;backface-visibility:hidden;border-radius:20px;padding:24px;display:flex;flex-direction:column;justify-content:flex-end;border:1px solid #2e2a3a;overflow:hidden;box-shadow:0 20px 50px -20px rgba(0,0,0,.6)}
.face::before{content:"";position:absolute;top:0;left:0;right:0;height:50%;background:linear-gradient(180deg,rgba(255,255,255,.06),transparent)}
.front{background:radial-gradient(circle at 30% 20%,rgba(155,138,255,.3),transparent 55%),#111018}
.back{background:radial-gradient(circle at 70% 80%,rgba(155,138,255,.25),transparent 55%),#161221;transform:rotateY(180deg);justify-content:center;text-align:center}
.face h3{margin:0 0 6px;font:700 20px "Space Grotesk",sans-serif;color:#f7f5fb}
.face p{margin:0;color:#a49dbc;font-size:10px}
.badge{position:absolute;top:20px;left:20px;width:26px;height:26px;border-radius:8px;background:linear-gradient(135deg,#d7d0ff,#9b8aff)}
</style></head>
<body data-cf-keep-dark><span class="kicker">HOVER THE CARD</span>
<div class="scene"><div class="card"><div class="face front"><div class="badge"></div><h3>Front side</h3><p>Hover to flip.</p></div><div class="face back"><h3>Back side</h3><p>A full 3D rotation, pure CSS.</p></div></div></div>
</body></html>`,

  "toggle-pricing-switch": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Toggle Pricing Switch</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif;display:grid;place-items:center;padding:30px}
.kicker{display:block;margin-bottom:16px;color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.switcher{display:flex;align-items:center;gap:10px;margin-bottom:24px;font-size:10px;color:#847e8f}
.track{width:44px;height:24px;border-radius:999px;background:#242130;position:relative;cursor:pointer;border:1px solid #363243;transition:box-shadow .3s}
.track.on{box-shadow:0 0 0 3px rgba(196,181,253,.15)}
.thumb{position:absolute;top:2px;left:2px;width:18px;height:18px;border-radius:50%;background:linear-gradient(135deg,#d7d0ff,#9b8aff);box-shadow:0 2px 6px rgba(0,0,0,.4);transition:transform .3s cubic-bezier(.34,1.56,.64,1)}
.track.on .thumb{transform:translateX(20px)}
.plans{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.plan{padding:20px;border:1px solid var(--line);border-radius:14px;background:#0d0d12;min-width:160px;box-shadow:0 16px 40px -22px rgba(0,0,0,.7)}
.plan strong{display:block;font:700 30px "Space Grotesk",sans-serif;margin:8px 0;background:linear-gradient(135deg,#f7f5fb,#c4b5fd);-webkit-background-clip:text;background-clip:text;color:transparent}
.plan small{color:#77737f;font-size:8px}
</style></head>
<body data-cf-keep-dark><span class="kicker">TOGGLE BILLING</span>
<div class="switcher">Monthly<div class="track" id="track"><div class="thumb"></div></div>Yearly (save 20%)</div>
<div class="plans"><div class="plan"><small>STARTER</small><strong id="p1">$12</strong><small>per month</small></div><div class="plan"><small>PRO</small><strong id="p2">$29</strong><small>per month</small></div></div>
<script>
const track=document.getElementById("track"),p1=document.getElementById("p1"),p2=document.getElementById("p2");
track.addEventListener("click",function(){const on=track.classList.toggle("on");p1.textContent=on?"$115":"$12";p2.textContent=on?"$278":"$29"});
</script>
</body></html>`,

  "typewriter-hero": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Typewriter Hero</title><style>
:root{--bg:#050507;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif;text-align:center}
.kicker{display:block;margin-bottom:16px;color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
h1{font:700 clamp(30px,5.5vw,58px) "Space Grotesk",sans-serif;letter-spacing:-.04em}
h1 span{color:var(--lav);text-shadow:0 0 24px rgba(196,181,253,.35)}
#cursor{display:inline-block;width:3px;background:var(--lav);margin-left:2px;box-shadow:0 0 8px rgba(196,181,253,.6);animation:blink 1s step-end infinite}
@keyframes blink{50%{opacity:0}}
p{color:#847e8f;font-size:11px;margin-top:14px}
</style></head>
<body data-cf-keep-dark><div><span class="kicker">BUILD FOR</span><h1>We design for <span id="word">founders</span><i id="cursor">&nbsp;</i></h1><p>A rotating word hero for landing pages.</p></div>
<script>
const words=["founders","designers","engineers","teams"];const el=document.getElementById("word");let wi=0,ci=0,deleting=false;
function tick(){const word=words[wi];el.textContent=word.slice(0,ci);if(!deleting&&ci<word.length){ci++;setTimeout(tick,80)}else if(!deleting&&ci===word.length){deleting=true;setTimeout(tick,1100)}else if(deleting&&ci>0){ci--;setTimeout(tick,40)}else{deleting=false;wi=(wi+1)%words.length;setTimeout(tick,300)}}
tick();
</script>
</body></html>`,

  "marquee-testimonials": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Marquee Testimonials</title><style>
:root{--bg:#050507;--line:#272632}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif;overflow:hidden}
.kicker{display:block;margin-bottom:16px;color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.marquee{width:100%;overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent);mask-image:linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent)}
.track{display:flex;gap:14px;width:max-content;animation:scroll 18s linear infinite}
.track:hover{animation-play-state:paused}
.card{width:220px;padding:16px;border:1px solid var(--line);border-radius:13px;background:#0d0d12;font-size:9px;color:#a49dae;box-shadow:0 16px 40px -22px rgba(0,0,0,.7);transition:border-color .2s}
.card:hover{border-color:#544c67}
.card b{display:block;margin-top:8px;color:#eee9f8;font-size:9px}
@keyframes scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
</style></head>
<body data-cf-keep-dark><span class="kicker">AUTO-SCROLLING</span>
<div class="marquee"><div class="track" id="track"></div></div>
<script>
const quotes=["Shipped in a day, not a sprint.","The polish is on another level.","Our best-performing landing page yet.","Support that actually replies.","Exactly what our team needed."];
const track=document.getElementById("track");
[...quotes,...quotes].forEach(function(q,i){const d=document.createElement("div");d.className="card";d.innerHTML=q+"<b>— Builder "+(i%quotes.length+1)+"</b>";track.appendChild(d)});
</script>
</body></html>`,

  "mega-menu-navbar": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Mega Menu Navbar</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif}
nav{display:flex;align-items:center;justify-content:space-between;padding:18px 24px;border-bottom:1px solid var(--line)}
nav b{font:700 14px "Space Grotesk",sans-serif}
.item{position:relative}
.item>span{font-size:10px;color:#c1bccb;cursor:pointer;padding:8px 0;transition:color .2s}
.item:hover>span{color:#fff}
.mega{position:absolute;top:100%;left:0;width:420px;opacity:0;pointer-events:none;transform:translateY(-6px);display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:18px;border:1px solid var(--line);border-radius:14px;background:#0d0d12;box-shadow:0 30px 70px -14px rgba(0,0,0,.6),0 0 0 1px rgba(196,181,253,.06);transition:opacity .25s,transform .25s}
.item:hover .mega{opacity:1;pointer-events:auto;transform:none}
.mega a{display:block;color:#a49dae;font-size:9px;padding:6px 0;transition:color .2s}
.mega a:hover{color:var(--lav)}
.mega b{display:block;color:#eee9f8;font-size:10px;margin-bottom:4px}
.content{padding:50px 24px;color:#77737f;font-size:10px}
</style></head>
<body data-cf-keep-dark><nav><b>STUDIO.</b><div class="item"><span>Products ▾</span><div class="mega"><div><b>Design</b><a href="#">Templates</a><a href="#">Components</a></div><div><b>Engineering</b><a href="#">API</a><a href="#">CLI</a></div></div></div><span style="font-size:10px;color:#77737f">Pricing</span></nav>
<p class="content">Hover "Products ▾" to open the mega menu.</p>
</body></html>`,

  "multi-step-form": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Multi-Step Form</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif}
.stage{display:grid;gap:16px;place-items:center;padding:40px}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.wrap{position:relative;width:min(320px,90vw);border:1px solid var(--line);border-radius:18px;background:#0d0d12;padding:26px;box-shadow:0 20px 50px -20px rgba(0,0,0,.6)}
.dots{display:flex;gap:6px;margin-bottom:20px}
.dots i{flex:1;height:4px;border-radius:2px;background:#242130;overflow:hidden;position:relative}
.dots i::after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,#d7d0ff,#9b8aff);transform:scaleX(0);transform-origin:left;transition:transform .4s cubic-bezier(.2,.8,.2,1)}
.dots i.active::after{transform:scaleX(1)}
.step{display:none}
.step.active{display:block;animation:stepIn .4s cubic-bezier(.2,.8,.2,1)}
@keyframes stepIn{from{opacity:0;transform:translateX(14px)}to{opacity:1;transform:none}}
h3{margin:0 0 12px;font:700 18px "Space Grotesk",sans-serif;color:#f7f5fb}
input{width:100%;padding:12px;margin-bottom:10px;border:1px solid var(--line);border-radius:9px;background:#111017;color:#fff;outline:0;font-size:12px;transition:border-color .25s,box-shadow .25s}
input:focus{border-color:#6d5f93;box-shadow:0 0 0 3px rgba(196,181,253,.25)}
.actions{display:flex;justify-content:space-between;margin-top:8px}
button{border:0;border-radius:10px;padding:11px 18px;font-size:10px;font-weight:800;cursor:pointer;background:linear-gradient(135deg,#d7d0ff,#9b8aff);color:#0a090f;transition:transform .15s cubic-bezier(.34,1.56,.64,1)}
button:active{transform:scale(.92)}
button.ghost{background:transparent;color:#847e8f;box-shadow:none}
</style></head>
<body data-cf-keep-dark><div class="stage"><span class="kicker">STEP THROUGH THE FLOW</span>
<div class="wrap">
<div class="dots"><i class="active"></i><i></i><i></i></div>
<div class="step active" data-step="1"><h3>Your details</h3><input placeholder="Full name"><div class="actions"><span></span><button onclick="go(2)">Next</button></div></div>
<div class="step" data-step="2"><h3>Company</h3><input placeholder="Company name"><div class="actions"><button class="ghost" onclick="go(1)">Back</button><button onclick="go(3)">Next</button></div></div>
<div class="step" data-step="3"><h3>All set ✓</h3><p style="color:#847e8f;font-size:10px">Your account is ready to go.</p><div class="actions"><button class="ghost" onclick="go(2)">Back</button><span></span></div></div>
</div></div>
<script>
function go(n){document.querySelectorAll(".step").forEach(function(s){s.classList.toggle("active",s.dataset.step==n)});document.querySelectorAll(".dots i").forEach(function(d,i){d.classList.toggle("active",i<n)})}
</script>
</body></html>`,

  "masonry-portfolio-grid": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Masonry Portfolio Grid</title><style>
:root{--bg:#050507}
*{box-sizing:border-box}body{margin:0;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.kicker{display:block;color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700;padding:18px 20px 0}
.masonry{columns:3 160px;column-gap:10px;padding:14px 20px 24px}
.tile{break-inside:avoid;margin-bottom:10px;border-radius:12px;position:relative;overflow:hidden;color:#fff}
.tile{transition:transform .3s cubic-bezier(.2,.8,.2,1),box-shadow .3s}
.tile:hover{transform:translateY(-5px);box-shadow:0 20px 40px -18px rgba(155,138,255,.35)}
.tile span{position:absolute;left:10px;bottom:10px;font:700 10px "Space Grotesk",sans-serif;opacity:0;transition:opacity .25s}
.tile:hover span{opacity:1}
.tile:hover:before{opacity:1}
.tile:before{content:"";position:absolute;inset:0;background:linear-gradient(0deg,rgba(0,0,0,.7),transparent 55%);opacity:0;transition:opacity .25s}
.tile:nth-child(1){height:180px;background:radial-gradient(circle at 30% 20%,rgba(155,138,255,.3),transparent 60%),#141018}
.tile:nth-child(2){height:120px;background:radial-gradient(circle at 60% 40%,rgba(120,170,255,.3),transparent 60%),#101219}
.tile:nth-child(3){height:150px;background:radial-gradient(circle at 50% 60%,rgba(220,150,255,.28),transparent 60%),#181022}
.tile:nth-child(4){height:100px;background:radial-gradient(circle at 40% 40%,rgba(155,220,200,.25),transparent 60%),#0f1614}
.tile:nth-child(5){height:160px;background:radial-gradient(circle at 60% 60%,rgba(255,180,150,.25),transparent 60%),#181210}
.tile:nth-child(6){height:130px;background:radial-gradient(circle at 50% 50%,rgba(180,190,255,.25),transparent 60%),#111319}
</style></head>
<body data-cf-keep-dark><span class="kicker">MASONRY LAYOUT</span>
<div class="masonry">
<div class="tile"><span>Project Alpha</span></div><div class="tile"><span>Project Beta</span></div><div class="tile"><span>Project Gamma</span></div><div class="tile"><span>Project Delta</span></div><div class="tile"><span>Project Epsilon</span></div><div class="tile"><span>Project Zeta</span></div>
</div>
</body></html>`,

  "tabbed-features": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Tabbed Features</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif}
.stage{display:grid;gap:16px;padding:40px;width:min(520px,90%)}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.tabs{display:flex;gap:6px}
.tabs button{position:relative;padding:9px 15px;border:1px solid var(--line);border-radius:999px;background:#0d0d12;color:#847e8f;font-size:9px;font-weight:700;cursor:pointer;transition:color .3s,border-color .3s,transform .3s cubic-bezier(.34,1.56,.64,1)}
.tabs button.active{color:#0a090f;border-color:transparent;background:linear-gradient(135deg,#d7d0ff,#9b8aff);transform:translateY(-2px);box-shadow:0 10px 24px -10px rgba(155,138,255,.55)}
.panel-wrap{position:relative}
.panel-wrap::before{content:"";position:absolute;inset:-16px;border-radius:26px;background:radial-gradient(circle,rgba(196,181,253,.22),transparent 70%);filter:blur(18px);opacity:.7;pointer-events:none}
.panel{position:relative;display:none;padding:26px;border:1px solid var(--line);border-radius:16px;background:#0d0d12;min-height:150px;box-shadow:0 20px 50px -20px rgba(0,0,0,.6);animation:fade .35s cubic-bezier(.2,.8,.2,1)}
.panel.active{display:block}
.panel h3{margin:0 0 8px;font:700 18px "Space Grotesk",sans-serif;background:linear-gradient(90deg,#f7f5fb,#c4b5fd);-webkit-background-clip:text;background-clip:text;color:transparent}
.panel p{margin:0;color:#a49dbc;font-size:10px;line-height:1.7}
@keyframes fade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
</style></head>
<body data-cf-keep-dark><div class="stage"><span class="kicker">CLICK A TAB</span>
<div class="tabs"><button class="active" data-tab="1">Speed</button><button data-tab="2">Security</button><button data-tab="3">Scale</button></div>
<div class="panel-wrap"><div class="panel active" data-panel="1"><h3>Built for speed</h3><p>Every interaction responds in under 100ms.</p></div>
<div class="panel" data-panel="2"><h3>Secure by default</h3><p>Encrypted at rest and in transit, always.</p></div>
<div class="panel" data-panel="3"><h3>Scales with you</h3><p>From one user to one million, no re-architecture.</p></div></div>
</div>
<script>
document.querySelectorAll(".tabs button").forEach(btn=>btn.addEventListener("click",function(){document.querySelectorAll(".tabs button").forEach(b=>b.classList.remove("active"));document.querySelectorAll(".panel").forEach(p=>p.classList.remove("active"));btn.classList.add("active");document.querySelector('[data-panel="'+btn.dataset.tab+'"]').classList.add("active")}));
</script>
</body></html>`,

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
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif;perspective:1000px}
.tilt{position:relative;width:260px;padding:26px;border:1px solid var(--line);border-radius:18px;background:radial-gradient(circle at 30% 15%,rgba(155,138,255,.22),transparent 60%),#0e0d14;box-shadow:0 24px 60px rgba(0,0,0,.45);transition:transform .15s ease-out,box-shadow .3s;overflow:hidden}
.tilt::before{content:"";position:absolute;width:220px;height:220px;left:var(--gx,50%);top:var(--gy,50%);transform:translate(-50%,-50%);background:radial-gradient(circle,rgba(255,255,255,.16),transparent 70%);opacity:0;transition:opacity .3s;pointer-events:none}
.tilt:hover::before{opacity:1}
.tilt:hover{box-shadow:0 34px 80px rgba(0,0,0,.55),0 0 60px rgba(155,138,255,.18)}
.tilt span{position:relative;font-size:9px;letter-spacing:2px;color:#9d94b0;font-weight:700}
.tilt h3{position:relative;margin:12px 0 6px;font:700 20px "Space Grotesk",sans-serif}
.tilt p{position:relative;margin:0;color:#847e8f;font-size:10px;line-height:1.7}
</style></head>
<body data-cf-keep-dark><article class="tilt" id="card"><span>INTERACTIVE</span><h3>Tilt on hover</h3><p>The card tracks your pointer and tilts in 3D with a soft glare.</p></article>
<script>
const card=document.getElementById("card");
card.addEventListener("pointermove",function(e){
  const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
  card.style.transform="rotateY("+(x*14)+"deg) rotateX("+(y*-14)+"deg) translateY(-4px)";
  card.style.setProperty("--gx",(e.clientX-r.left)+"px");
  card.style.setProperty("--gy",(e.clientY-r.top)+"px");
});
card.addEventListener("pointerleave",function(){card.style.transform=""});
</script>
</body></html>`,

  "glass-stat-card": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Glass Stat Card</title><style>
:root{--bg:#050507;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:radial-gradient(circle at 30% 20%,rgba(155,138,255,.25),transparent 45%),radial-gradient(circle at 75% 70%,rgba(90,160,255,.2),transparent 45%),var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif}
.glass{display:flex;gap:12px}
.stat{position:relative;width:120px;padding:18px;border:1px solid rgba(255,255,255,.14);border-radius:16px;background:rgba(255,255,255,.06);backdrop-filter:blur(14px);overflow:hidden;transition:transform .3s cubic-bezier(.2,.8,.2,1),background .3s,box-shadow .3s}
.stat::before{content:"";position:absolute;top:0;left:-60%;width:40%;height:100%;background:linear-gradient(115deg,transparent,rgba(255,255,255,.35),transparent);transform:skewX(-20deg);transition:left .6s ease}
.stat:hover::before{left:130%}
.stat:hover{transform:translateY(-7px);background:rgba(255,255,255,.11);box-shadow:0 20px 40px -18px rgba(155,138,255,.4)}
.stat small{position:relative;display:block;font-size:7px;letter-spacing:1.5px;color:#c3bdd0}
.stat strong{position:relative;display:block;margin-top:8px;font:700 26px "Space Grotesk",sans-serif}
.stat em{position:relative;font-style:normal;font-size:8px;color:#a9e6b4}
</style></head>
<body data-cf-keep-dark><div class="glass"><div class="stat"><small>REVENUE</small><strong>$48K</strong><em>+12.4%</em></div><div class="stat"><small>USERS</small><strong>3.2K</strong><em>+8.1%</em></div><div class="stat"><small>UPTIME</small><strong>99.9%</strong><em>stable</em></div></div>
</body></html>`,

  "live-chart-card": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Live Chart Card</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif}
.card{position:relative;width:min(420px,90vw);padding:22px;border:1px solid var(--line);border-radius:16px;background:#0d0d12;overflow:hidden;box-shadow:0 20px 50px -20px rgba(0,0,0,.6)}
.card::before{content:"";position:absolute;top:-50%;right:-20%;width:220px;height:220px;background:radial-gradient(circle,rgba(155,138,255,.18),transparent 70%)}
.card header{position:relative;display:flex;justify-content:space-between;align-items:baseline}
.card small{font-size:8px;letter-spacing:1.5px;color:#77737f}
.card strong{font:700 28px "Space Grotesk",sans-serif}
#tick{display:flex;align-items:center;gap:5px}
#tick::before{content:"";width:6px;height:6px;border-radius:50%;background:#5fd4a1;box-shadow:0 0 8px #5fd4a1;animation:pulse 1.6s ease-in-out infinite}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}
.bars{position:relative;display:flex;align-items:end;gap:5px;height:120px;margin-top:18px}
.bars i{flex:1;border-radius:4px 4px 0 0;background:linear-gradient(180deg,#e7e2ff,#9b8aff 60%,#6d5cc4);box-shadow:0 -6px 14px -8px rgba(155,138,255,.6);transition:height .6s cubic-bezier(.2,.8,.2,1)}
</style></head>
<body data-cf-keep-dark><div class="card"><header><div><small>WEEKLY REVENUE</small><strong id="val">$12.4K</strong></div><small id="tick">live</small></header><div class="bars" id="bars"></div></div>
<script>
const bars=document.getElementById("bars");
for(let i=0;i<12;i++){const b=document.createElement("i");b.style.height=(20+Math.random()*70)+"%";bars.appendChild(b)}
setInterval(function(){[...bars.children].forEach(function(b){b.style.height=(20+Math.random()*70)+"%"});document.getElementById("val").textContent="$"+(9+Math.random()*6).toFixed(1)+"K"},1600);
</script>
</body></html>`,

  "activity-feed-panel": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Activity Feed Panel</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif}
.panel{width:min(360px,90vw);padding:20px;border:1px solid var(--line);border-radius:16px;background:#0d0d12;box-shadow:0 20px 50px -20px rgba(0,0,0,.6)}
.panel h3{margin:0 0 14px;font:700 14px "Space Grotesk",sans-serif}
.row{display:flex;gap:10px;align-items:center;padding:10px 6px;margin:0 -6px;border-radius:10px;border-bottom:1px solid #191821;animation:slideIn .5s cubic-bezier(.2,.8,.2,1) both;transition:background .2s}
.row:hover{background:#141119}
.row:last-child{border:0}
.dot{position:relative;width:8px;height:8px;border-radius:50%;background:var(--lav);box-shadow:0 0 10px var(--lav);flex:0 0 auto}
.dot::after{content:"";position:absolute;inset:-4px;border-radius:50%;border:1px solid rgba(196,181,253,.4);animation:ring 2s ease-out infinite}
.row p{margin:0;font-size:9px;color:#b4aec0}
.row span{margin-left:auto;font-size:8px;color:#66626f}
@keyframes slideIn{from{opacity:0;transform:translateX(-10px)}to{opacity:1;transform:none}}
@keyframes ring{0%{transform:scale(.6);opacity:.8}100%{transform:scale(1.8);opacity:0}}
</style></head>
<body data-cf-keep-dark><div class="panel"><h3>Recent activity</h3><div id="feed"></div></div>
<script>
const items=[["Payment received","2m"],["New workspace created","14m"],["Report exported","1h"],["Team member invited","3h"],["Plan upgraded","1d"]];
const feed=document.getElementById("feed");
items.forEach(function(it,i){const d=document.createElement("div");d.className="row";d.style.animationDelay=(i*.09)+"s";d.innerHTML='<span class="dot"></span><p>'+it[0]+'</p><span>'+it[1]+'</span>';feed.appendChild(d)});
</script>
</body></html>`,

  "icon-feature-grid": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Icon Feature Grid</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:24px}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;max-width:520px}
.f{position:relative;padding:18px;border:1px solid var(--line);border-radius:14px;background:#0d0d12;overflow:hidden;box-shadow:0 16px 40px -22px rgba(0,0,0,.7);transition:transform .3s cubic-bezier(.2,.8,.2,1),border-color .3s,box-shadow .3s}
.f::before{content:"";position:absolute;inset:-40% -40% auto auto;width:120px;height:120px;background:radial-gradient(circle,rgba(196,181,253,.28),transparent 70%);opacity:0;transition:opacity .3s}
.f:hover{transform:translateY(-6px);border-color:#544c67;box-shadow:0 24px 50px -20px rgba(155,138,255,.25)}
.f:hover::before{opacity:1}
.ico{position:relative;width:34px;height:34px;display:grid;place-items:center;border-radius:10px;background:linear-gradient(135deg,#221d33,#181425);color:var(--lav);font-size:15px;box-shadow:inset 0 0 0 1px rgba(196,181,253,.15);transition:transform .3s cubic-bezier(.34,1.56,.64,1),background .3s,color .3s}
.f:hover .ico{transform:rotate(-8deg) scale(1.1);background:linear-gradient(135deg,#d7d0ff,#9b8aff);color:#0a090f}
.f h4{position:relative;margin:12px 0 4px;font:700 12px "Space Grotesk",sans-serif}
.f p{position:relative;margin:0;font-size:8px;color:#847e8f;line-height:1.6}
@media(max-width:520px){.grid{grid-template-columns:1fr 1fr}}
</style></head>
<body data-cf-keep-dark><div class="grid">
<div class="f"><div class="ico">⚡</div><h4>Fast</h4><p>Instant response on every action.</p></div>
<div class="f"><div class="ico">🔒</div><h4>Secure</h4><p>Encrypted end to end by default.</p></div>
<div class="f"><div class="ico">◇</div><h4>Composable</h4><p>Drop into any existing stack.</p></div>
<div class="f"><div class="ico">↗</div><h4>Scalable</h4><p>From one seat to ten thousand.</p></div>
<div class="f"><div class="ico">◎</div><h4>Precise</h4><p>Pixel-accurate on every screen.</p></div>
<div class="f"><div class="ico">✦</div><h4>Polished</h4><p>Every state considered.</p></div>
</div>
</body></html>`,

  "accordion-features": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Accordion Features</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:24px}
.acc{width:min(420px,92vw)}
.item{border:1px solid var(--line);border-radius:12px;margin-bottom:8px;overflow:hidden;background:#0d0d12;transition:border-color .3s,box-shadow .3s}
.item.open{border-color:#544c67;box-shadow:0 16px 40px -20px rgba(155,138,255,.35)}
.head{display:flex;justify-content:space-between;align-items:center;padding:14px 16px;cursor:pointer;font:700 12px "Space Grotesk",sans-serif}
.head i{font-style:normal;width:20px;height:20px;border-radius:50%;background:#181425;color:var(--lav);display:grid;place-items:center;font-size:11px;transition:transform .35s cubic-bezier(.34,1.56,.64,1),background .3s,color .3s}
.item.open .head i{transform:rotate(45deg);background:linear-gradient(135deg,#d7d0ff,#9b8aff);color:#0a090f}
.body{max-height:0;overflow:hidden;transition:max-height .4s cubic-bezier(.2,.8,.2,1)}
.item.open .body{max-height:120px}
.body p{margin:0;padding:0 16px 14px;font-size:9px;color:#847e8f;line-height:1.7}
</style></head>
<body data-cf-keep-dark><div class="acc" id="acc">
<div class="item open"><div class="head">Built for speed <i>+</i></div><div class="body"><p>Every interaction resolves in under 100ms, even on mid-range devices.</p></div></div>
<div class="item"><div class="head">Secure by default <i>+</i></div><div class="body"><p>Encrypted at rest and in transit, with audited access controls.</p></div></div>
<div class="item"><div class="head">Scales with you <i>+</i></div><div class="body"><p>From a single workspace to enterprise fleets, no re-architecture.</p></div></div>
</div>
<script>
document.querySelectorAll(".head").forEach(function(h){h.addEventListener("click",function(){h.parentElement.classList.toggle("open")})});
</script>
</body></html>`,

  "floating-label-form": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Floating Label Form</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif}
.stage{display:grid;gap:16px;place-items:center;padding:40px}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
form{width:min(300px,90vw);display:grid;gap:16px;border:1px solid var(--line);border-radius:18px;background:#0d0d12;padding:26px;box-shadow:0 20px 50px -20px rgba(0,0,0,.6)}
.field{position:relative}
.field input{width:100%;padding:16px 12px 8px;border:1px solid var(--line);border-radius:10px;background:#111017;color:#fff;outline:0;font-size:12px;transition:border-color .25s,box-shadow .25s}
.field input:focus{border-color:#6d5f93;box-shadow:0 0 0 3px rgba(196,181,253,.25)}
.field label{position:absolute;left:12px;top:14px;font-size:11px;color:#77737f;pointer-events:none;transition:transform .2s cubic-bezier(.2,.8,.2,1),font-size .2s ease,color .2s}
.field input:focus+label,.field input:not(:placeholder-shown)+label{transform:translateY(-9px);font-size:8px;color:var(--lav)}
.btn-wrap{position:relative}
.btn-wrap::after{content:"";position:absolute;inset:-10px;border-radius:18px;background:radial-gradient(circle,rgba(196,181,253,.35),transparent 70%);filter:blur(12px);opacity:0;transition:opacity .3s}
.btn-wrap:hover::after{opacity:1}
button{position:relative;width:100%;border:0;border-radius:10px;padding:13px;background:linear-gradient(135deg,#d7d0ff,#9b8aff);color:#0a090f;font-weight:800;font-size:11px;cursor:pointer;transition:transform .15s cubic-bezier(.34,1.56,.64,1)}
button:active{transform:scale(.96)}
</style></head>
<body data-cf-keep-dark><div class="stage"><span class="kicker">TYPE TO SEE LABELS FLOAT</span>
<form id="f"><div class="field"><input id="n" placeholder=" "><label for="n">Full name</label></div><div class="field"><input id="e" type="email" placeholder=" "><label for="e">Email address</label></div><div class="btn-wrap"><button>Create account</button></div></form></div>
<script>document.getElementById("f").addEventListener("submit",function(e){e.preventDefault();e.target.innerHTML='<p style="margin:0;color:#a9e6b4;font-size:11px">Account created ✓</p>'});</script>
</body></html>`,

  "inline-validation-form": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Inline Validation Form</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd;--ok:#9fd6ad;--bad:#efb8c2}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif}
.stage{display:grid;gap:16px;place-items:center;padding:40px}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
form{width:min(300px,90vw);display:grid;gap:14px;border:1px solid var(--line);border-radius:18px;background:#0d0d12;padding:26px;box-shadow:0 20px 50px -20px rgba(0,0,0,.6)}
label{display:grid;gap:8px;font-size:9px;color:#85818d;letter-spacing:.5px}
input{padding:12px;border:1px solid var(--line);border-radius:9px;background:#111017;color:#fff;outline:0;font-size:12px;transition:border-color .25s,box-shadow .25s}
input:focus{border-color:#6d5f93;box-shadow:0 0 0 3px rgba(196,181,253,.25)}
input.ok{border-color:#3d6b48;box-shadow:0 0 0 3px rgba(159,214,173,.18)}
input.bad{border-color:#6b3d47;box-shadow:0 0 0 3px rgba(239,184,194,.18)}
.msg{font-size:9px;min-height:12px;transition:opacity .2s,color .2s;color:#77737f}
.msg.ok{color:var(--ok)}.msg.bad{color:var(--bad)}
</style></head>
<body data-cf-keep-dark><div class="stage"><span class="kicker">TYPE TO SEE VALIDATION</span>
<form><label>Email<input id="e" type="email" placeholder="you@company.com"><span class="msg" id="m">Type to validate live</span></label></form></div>
<script>
const e=document.getElementById("e"),m=document.getElementById("m");
e.addEventListener("input",function(){const v=e.value;const good=/^[^@\\s]+@[^@\\s]+\\.[a-z]{2,}$/i.test(v);e.className=v?(good?"ok":"bad"):"";m.className="msg "+(v?(good?"ok":"bad"):"");m.textContent=!v?"Type to validate live":good?"Looks good ✓":"That doesn't look like an email yet"});
</script>
</body></html>`,

  "split-image-hero": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Split Image Hero</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:24px}
.split{display:grid;grid-template-columns:1fr 1fr;gap:26px;align-items:center;max-width:640px}
.copy small{font-size:9px;letter-spacing:2px;color:#9d94b0;font-weight:700}
.copy h1{margin:10px 0;font:700 clamp(24px,4.4vw,38px) "Space Grotesk",sans-serif;letter-spacing:-.04em;line-height:1.05}
.copy p{margin:0 0 16px;color:#847e8f;font-size:10px;line-height:1.7}
.copy button{border:0;border-radius:10px;padding:11px 18px;background:linear-gradient(135deg,#d7d0ff,#9b8aff);color:#0a090f;font-weight:800;font-size:10px;cursor:pointer;box-shadow:0 10px 24px -10px rgba(155,138,255,.6);transition:transform .15s cubic-bezier(.34,1.56,.64,1)}
.copy button:active{transform:scale(.96)}
.art{aspect-ratio:1;border-radius:20px;border:1px solid var(--line);background:radial-gradient(circle at 40% 30%,rgba(155,138,255,.34),transparent 60%),#0e0d14;display:grid;place-items:center;overflow:hidden;box-shadow:0 30px 70px -24px rgba(0,0,0,.7)}
.art i{width:60%;aspect-ratio:1;border-radius:50%;border:1px solid rgba(196,181,253,.35);box-shadow:0 0 30px -6px rgba(196,181,253,.3);animation:pulse 3.4s ease-in-out infinite}
@keyframes pulse{50%{transform:scale(.86);border-color:rgba(196,181,253,.7)}}
@media(max-width:560px){.split{grid-template-columns:1fr}}
</style></head>
<body data-cf-keep-dark><div class="split"><div class="copy"><small>NEW RELEASE</small><h1>Design once. Ship everywhere.</h1><p>A split hero that keeps the message and the visual in balance.</p><button>See the system</button></div><div class="art"><i></i></div></div>
</body></html>`,

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
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:flex;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif}
aside{width:170px;padding:18px 12px;border-right:1px solid var(--line);background:#0b0b10;transition:width .35s cubic-bezier(.2,.8,.2,1);overflow:hidden}
aside.collapsed{width:58px}
aside b{display:block;font:700 13px "Space Grotesk",sans-serif;margin-bottom:16px;white-space:nowrap}
aside a{display:flex;align-items:center;gap:10px;padding:9px 8px;border-radius:8px;color:#847e8f;text-decoration:none;font-size:10px;white-space:nowrap;transition:background .25s,color .25s}
aside a:hover{background:#171420;color:#e6e1f2}
aside a.active{background:linear-gradient(135deg,#221d33,#181425);color:#e6e1f2;box-shadow:inset 0 0 0 1px rgba(196,181,253,.15)}
aside i{font-style:normal;color:var(--lav);flex:0 0 16px;text-align:center}
aside.collapsed span{opacity:0}
aside span{transition:opacity .2s}
main{flex:1;padding:22px}
main button{border:1px solid var(--line);border-radius:9px;background:#0d0d12;color:#c1bccb;padding:9px 13px;font-size:10px;cursor:pointer;box-shadow:0 12px 30px -18px rgba(0,0,0,.6);transition:border-color .2s,color .2s}
main button:hover{border-color:#544c67;color:#eee9f8}
</style></head>
<body data-cf-keep-dark><aside id="side"><b>CF</b><a class="active"><i>◧</i><span>Overview</span></a><a><i>◈</i><span>Projects</span></a><a><i>◎</i><span>Team</span></a><a><i>⚙</i><span>Settings</span></a></aside><main><button id="t">Toggle sidebar</button></main>
<script>document.getElementById("t").addEventListener("click",function(){document.getElementById("side").classList.toggle("collapsed")});</script>
</body></html>`,

  "hover-zoom-gallery": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Hover Zoom Gallery</title><style>
:root{--bg:#050507;--line:#272632}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);color:#fff;font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:24px}
.gal{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;max-width:520px}
.cell{position:relative;aspect-ratio:1;border-radius:14px;overflow:hidden;border:1px solid var(--line)}
.cell i{position:absolute;inset:0;transition:transform .5s cubic-bezier(.2,.8,.2,1)}
.cell:hover i{transform:scale(1.14)}
.cell b{position:absolute;left:10px;bottom:8px;font:700 10px "Space Grotesk",sans-serif;opacity:0;transform:translateY(6px);transition:.3s;z-index:2}
.cell:hover b{opacity:1;transform:none}
.cell:after{content:"";position:absolute;inset:0;background:linear-gradient(0deg,rgba(0,0,0,.75),transparent 55%);opacity:0;transition:opacity .3s}
.cell:hover:after{opacity:1}
.c1 i{background:radial-gradient(circle at 35% 25%,rgba(155,138,255,.4),transparent 60%),#141018}
.c2 i{background:radial-gradient(circle at 60% 40%,rgba(110,170,255,.4),transparent 60%),#101219}
.c3 i{background:radial-gradient(circle at 50% 60%,rgba(225,150,255,.36),transparent 60%),#181022}
.c4 i{background:radial-gradient(circle at 40% 40%,rgba(150,225,200,.32),transparent 60%),#0f1614}
.c5 i{background:radial-gradient(circle at 60% 60%,rgba(255,180,150,.32),transparent 60%),#181210}
.c6 i{background:radial-gradient(circle at 45% 35%,rgba(180,190,255,.34),transparent 60%),#111319}
@media(max-width:520px){.gal{grid-template-columns:1fr 1fr}}
</style></head>
<body data-cf-keep-dark><div class="gal">
<div class="cell c1"><i></i><b>Alpha</b></div><div class="cell c2"><i></i><b>Beta</b></div><div class="cell c3"><i></i><b>Gamma</b></div>
<div class="cell c4"><i></i><b>Delta</b></div><div class="cell c5"><i></i><b>Epsilon</b></div><div class="cell c6"><i></i><b>Zeta</b></div>
</div>
</body></html>`,

  "project-list-hover": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Project List Hover</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:24px}
.list{width:min(440px,92vw)}
.row{position:relative;display:flex;justify-content:space-between;align-items:center;padding:16px 4px;border-bottom:1px solid var(--line);cursor:pointer;overflow:hidden}
.row h3{margin:0;font:700 17px "Space Grotesk",sans-serif;letter-spacing:-.03em;transition:transform .35s cubic-bezier(.2,.8,.2,1),color .3s}
.row small{color:#66626f;font-size:8px;transition:transform .35s}
.row:hover h3{transform:translateX(10px);color:var(--lav)}
.row:hover small{transform:translateX(-6px)}
.row:before{content:"";position:absolute;left:0;bottom:-1px;height:1px;width:100%;background:var(--lav);transform:scaleX(0);transform-origin:left;transition:transform .4s cubic-bezier(.2,.8,.2,1)}
.row:hover:before{transform:scaleX(1)}
</style></head>
<body data-cf-keep-dark><div class="list">
<div class="row"><h3>Northstar</h3><small>2026 · BRAND</small></div>
<div class="row"><h3>Atelier</h3><small>2025 · WEB</small></div>
<div class="row"><h3>Halo</h3><small>2025 · PRODUCT</small></div>
<div class="row"><h3>Orbit</h3><small>2024 · IDENTITY</small></div>
</div>
</body></html>`,

  "single-plan-card": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Single Plan Card</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd;--ok:#9fd6ad}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:24px}
.plan{width:min(280px,92vw);padding:26px;border:1px solid #4b4166;border-radius:20px;background:radial-gradient(circle at 50% 0,rgba(155,138,255,.2),transparent 55%),#0e0d14;box-shadow:0 30px 70px rgba(0,0,0,.5);transition:transform .35s cubic-bezier(.2,.8,.2,1)}
.plan:hover{transform:translateY(-6px)}
.plan small{font-size:8px;letter-spacing:2px;color:#a49dae;font-weight:700}
.plan strong{display:block;margin:10px 0;font:700 44px "Space Grotesk",sans-serif;letter-spacing:-.04em}
.plan strong em{font-style:normal;font-size:12px;color:#847e8f}
.plan li{list-style:none;display:flex;gap:8px;align-items:center;padding:5px 0;font-size:9px;color:#b4aec0}
.plan li:before{content:"✓";color:var(--ok)}
.plan ul{padding:0;margin:14px 0 18px}
.plan button{width:100%;border:0;border-radius:11px;padding:13px;background:linear-gradient(135deg,#d7d0ff,#9b8aff);color:#0a090f;font-weight:800;font-size:11px;cursor:pointer;transition:filter .25s}
.plan button:hover{filter:brightness(1.06)}
</style></head>
<body data-cf-keep-dark><div class="plan"><small>CODEFUSION PRO</small><strong>₹499<em>/mo</em></strong><ul><li>Every component unlocked</li><li>Copy code and prompts</li><li>New drops every week</li><li>Cancel anytime</li></ul><button>Get Pro</button></div>
</body></html>`,

  "avatar-stack-proof": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Avatar Stack Social Proof</title><style>
:root{--bg:#050507;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:24px;text-align:center}
.stack{display:flex;justify-content:center}
.stack div{width:40px;height:40px;border-radius:50%;display:grid;place-items:center;font-size:11px;font-weight:800;color:#0a090f;margin-left:-12px;border:2px solid #050507;transition:transform .3s cubic-bezier(.2,.8,.2,1)}
.stack div:first-child{margin-left:0}
.stack:hover div{margin-left:2px}
.stack div:hover{transform:translateY(-6px) scale(1.08)}
.a{background:linear-gradient(135deg,#d7d0ff,#9b8aff)}
.b{background:linear-gradient(135deg,#ffd7e8,#ff9bc4)}
.c{background:linear-gradient(135deg,#d0f0ff,#8ac6ff)}
.d{background:linear-gradient(135deg,#d9ffd0,#8ade9b)}
.e{background:#1b1823;color:#c4b5fd;font-size:9px}
p{margin:14px 0 0;font-size:10px;color:#847e8f}
p b{color:#e6e1f2}
</style></head>
<body data-cf-keep-dark><div><div class="stack"><div class="a">SC</div><div class="b">JM</div><div class="c">AR</div><div class="d">TK</div><div class="e">+9k</div></div><p>Trusted by <b>9,000+</b> builders shipping this week</p></div>
</body></html>`,

  /* ===================== BOILERPLATES ===================== */

  "nova-saas": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Nova SaaS</title><style>
:root{--bg:#07060f;--panel:rgba(255,255,255,.045);--stroke:rgba(255,255,255,.1);--ink:#eef0ff;--dim:#8b8aa8;--v1:#7c5cff;--v2:#22d3ee}
*{box-sizing:border-box}body{margin:0;background:radial-gradient(900px 500px at 82% -10%,rgba(124,92,255,.3),transparent 60%),radial-gradient(700px 400px at 8% 15%,rgba(34,211,238,.16),transparent 60%),var(--bg);color:var(--ink);font-family:Inter,ui-sans-serif,system-ui,sans-serif}
.shell{display:grid;grid-template-columns:212px 1fr;min-height:100vh}
aside{border-right:1px solid var(--stroke);padding:20px 14px;backdrop-filter:blur(16px)}
.brand{display:flex;align-items:center;gap:9px;font-weight:800;letter-spacing:-.02em;margin-bottom:22px}
.brand i{width:26px;height:26px;border-radius:8px;background:linear-gradient(135deg,var(--v1),var(--v2));display:grid;place-items:center;font-style:normal;font-size:13px;color:#08060f}
nav a{display:flex;align-items:center;gap:10px;padding:9px 10px;border-radius:9px;color:var(--dim);font-size:12px;text-decoration:none;transition:.2s}
nav a.on,nav a:hover{background:var(--panel);color:var(--ink)}
nav small{display:block;margin:16px 0 6px;color:#55536e;font-size:9px;letter-spacing:.14em}
main{padding:24px 26px}
.top{display:flex;justify-content:space-between;align-items:center;gap:14px;flex-wrap:wrap}
h1{margin:0;font-size:23px;letter-spacing:-.03em}
.top p{margin:4px 0 0;color:var(--dim);font-size:12px}
.cta{border:0;border-radius:11px;padding:11px 16px;background:linear-gradient(135deg,var(--v1),#a78bfa);color:#fff;font-weight:700;font-size:12px;cursor:pointer;box-shadow:0 12px 30px rgba(124,92,255,.35)}
.kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin:22px 0}
.kpi{padding:16px;border:1px solid var(--stroke);border-radius:15px;background:var(--panel);backdrop-filter:blur(12px)}
.kpi small{color:var(--dim);font-size:10px;letter-spacing:.08em}
.kpi b{display:block;margin-top:9px;font-size:25px;letter-spacing:-.03em}
.kpi em{font-style:normal;font-size:11px;color:#5eead4}
.split{display:grid;grid-template-columns:1.55fr 1fr;gap:12px}
.card{padding:18px;border:1px solid var(--stroke);border-radius:16px;background:var(--panel);backdrop-filter:blur(12px)}
.card h3{margin:0 0 14px;font-size:13px;letter-spacing:-.01em}
.bars{display:flex;align-items:flex-end;gap:7px;height:150px}
.bars i{flex:1;border-radius:6px 6px 3px 3px;background:linear-gradient(180deg,var(--v2),var(--v1));opacity:.85;transition:height .7s cubic-bezier(.2,.9,.2,1)}
.row{display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid rgba(255,255,255,.05);font-size:12px}
.row:last-child{border:0}
.av{width:26px;height:26px;border-radius:8px;background:linear-gradient(135deg,#a78bfa,#22d3ee);display:grid;place-items:center;font-size:10px;font-weight:800;color:#0b0918}
.row span{margin-left:auto;color:var(--dim);font-size:11px}
.plans{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:12px}
.plan{padding:18px;border:1px solid var(--stroke);border-radius:15px;background:var(--panel)}
.plan.hot{border-color:rgba(124,92,255,.55);background:linear-gradient(180deg,rgba(124,92,255,.16),transparent)}
.plan b{font-size:22px;letter-spacing:-.03em}
.plan small{display:block;color:var(--dim);font-size:11px;margin-top:4px}
.plan button{width:100%;margin-top:12px;border:1px solid var(--stroke);border-radius:10px;background:transparent;color:var(--ink);padding:9px;font-size:11px;cursor:pointer;transition:.2s}
.plan.hot button{background:var(--v1);border-color:var(--v1)}
.plan button:hover{transform:translateY(-1px)}
@media(max-width:900px){.shell{grid-template-columns:1fr}aside{display:none}.kpis{grid-template-columns:repeat(2,1fr)}.split,.plans{grid-template-columns:1fr}}
</style></head>
<body><div class="shell">
<aside><div class="brand"><i>N</i>Nova</div><nav><small>WORKSPACE</small><a class="on">◧ Overview</a><a>◈ Analytics</a><a>◎ Customers</a><a>▤ Billing</a><small>SETTINGS</small><a>⚙ Preferences</a><a>⇄ Integrations</a></nav></aside>
<main>
<div class="top"><div><h1>Good morning, Sarah</h1><p>Here's what moved in the last 7 days.</p></div><button class="cta">+ New report</button></div>
<div class="kpis"><div class="kpi"><small>MRR</small><b>$48.2K</b><em>▲ 12.4%</em></div><div class="kpi"><small>ACTIVE USERS</small><b>3,204</b><em>▲ 8.1%</em></div><div class="kpi"><small>CHURN</small><b>1.2%</b><em>▼ 0.3%</em></div><div class="kpi"><small>NPS</small><b>62</b><em>▲ 4</em></div></div>
<div class="split">
<div class="card"><h3>Revenue — last 12 weeks</h3><div class="bars" id="bars"></div></div>
<div class="card"><h3>Recent signups</h3><div class="row"><span class="av">SC</span>Sarah Chen<span>2m</span></div><div class="row"><span class="av">JM</span>Jamie Ortiz<span>18m</span></div><div class="row"><span class="av">AR</span>Ana Ruiz<span>1h</span></div><div class="row"><span class="av">TK</span>Tom Kade<span>3h</span></div></div>
</div>
<div class="plans"><div class="plan"><b>$19</b><small>Starter · 3 projects</small><button>Choose</button></div><div class="plan hot"><b>$49</b><small>Scale · unlimited</small><button>Choose Scale</button></div><div class="plan"><b>$99</b><small>Studio · teams</small><button>Choose</button></div></div>
</main></div>
<script>
const bars=document.getElementById("bars");
for(let i=0;i<12;i++){const b=document.createElement("i");b.style.height=(28+Math.random()*66)+"%";bars.appendChild(b)}
setInterval(()=>[...bars.children].forEach(b=>b.style.height=(28+Math.random()*66)+"%"),2200);
</script>
</body></html>`,

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
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.stage{display:grid;gap:22px;place-items:center;padding:40px}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.morph-btn{position:relative;width:190px;height:50px;border:0;border-radius:25px;font-size:13px;font-weight:800;color:#0a090f;cursor:pointer;background:linear-gradient(135deg,#d7d0ff,#9b8aff);box-shadow:0 10px 30px -10px rgba(155,138,255,.6);transition:width .35s cubic-bezier(.2,.8,.2,1),border-radius .35s,background .35s,box-shadow .35s}
.morph-btn.loading{width:50px;border-radius:50%;background:#17131f;box-shadow:0 0 0 6px rgba(196,181,253,.15)}
.morph-btn.done{width:190px;border-radius:25px;background:linear-gradient(135deg,#7fe0ac,#41b878);box-shadow:0 10px 30px -10px rgba(65,184,120,.6)}
.morph-btn .row{position:relative;z-index:1;display:flex;align-items:center;gap:8px;justify-content:center;height:100%}
.spinner{display:none;width:16px;height:16px;border:2px solid #3a3546;border-top-color:#c4b5fd;border-radius:50%;animation:spin .7s linear infinite}
.check{display:none;width:16px;height:16px}
.check path{stroke:#0a090f;stroke-width:3;fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:20;stroke-dashoffset:20;animation:draw .4s ease forwards}
.morph-btn.loading .label{display:none}.morph-btn.loading .spinner{display:block}
.morph-btn.done .check{display:block}
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes draw{to{stroke-dashoffset:0}}
</style></head>
<body data-cf-keep-dark><div class="stage"><span class="kicker">CLICK TO SUBMIT</span>
<button class="morph-btn" id="btn"><span class="row"><span class="spinner"></span><svg class="check" viewBox="0 0 24 24"><path d="M4 12l6 6L20 6"/></svg><span class="label">Create account</span></span></button></div>
<script>
const btn=document.getElementById("btn"),label=btn.querySelector(".label");
btn.addEventListener("click",function(){
  if(btn.classList.contains("loading")||btn.classList.contains("done"))return;
  btn.classList.add("loading");
  setTimeout(function(){btn.classList.remove("loading");btn.classList.add("done");label.textContent="Account created ✓"},1400);
  setTimeout(function(){btn.classList.remove("done");label.textContent="Create account"},3200);
});
</script>
</body></html>`,

  "command-trigger-button": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Command Trigger Button</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.stage{display:grid;gap:22px;place-items:center;padding:40px;position:relative}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.cmd-btn{display:flex;align-items:center;gap:10px;padding:13px 18px;border:1px solid var(--line);border-radius:12px;background:#0d0d12;color:#c9c4d6;font-size:12px;cursor:pointer;box-shadow:0 8px 24px -14px rgba(0,0,0,.7);transition:border-color .25s,box-shadow .25s}
.cmd-btn:hover{border-color:#544c67;box-shadow:0 10px 30px -12px rgba(155,138,255,.35)}
.cmd-btn kbd{padding:2px 6px;border:1px solid #3a3546;border-radius:5px;background:#1a1723;font-size:10px;color:#9d94b0;transition:color .25s,border-color .25s}
.cmd-btn:hover kbd{color:var(--lav);border-color:#5a4f78}
.cmd-menu{position:absolute;top:78px;width:270px;border:1px solid var(--line);border-radius:14px;background:#0d0d12;box-shadow:0 20px 60px rgba(0,0,0,.55);opacity:0;pointer-events:none;transform:translateY(-8px) scale(.98);transition:opacity .2s,transform .2s;overflow:hidden}
.cmd-menu.open{opacity:1;pointer-events:auto;transform:none}
.cmd-item{display:flex;align-items:center;gap:10px;padding:11px 14px;font-size:12px;color:#eee9f8;border-bottom:1px solid var(--line);cursor:pointer;opacity:0;transform:translateY(4px)}
.cmd-menu.open .cmd-item{animation:fadeIn .3s ease forwards}
.cmd-item:nth-child(1){animation-delay:.03s}.cmd-item:nth-child(2){animation-delay:.08s}.cmd-item:nth-child(3){animation-delay:.13s}.cmd-item:nth-child(4){animation-delay:.18s}
.cmd-item:last-child{border-bottom:0}.cmd-item:hover{background:#17131f;color:var(--lav)}
.cmd-item i{opacity:.6;font-style:normal}
@keyframes fadeIn{to{opacity:1;transform:none}}
</style></head>
<body data-cf-keep-dark><div class="stage"><span class="kicker">CLICK OR PRESS ⌘K</span>
<button class="cmd-btn" id="btn">Search actions… <kbd>⌘K</kbd></button>
<div class="cmd-menu" id="menu">
<div class="cmd-item"><i>+</i>New project</div>
<div class="cmd-item"><i>@</i>Invite teammate</div>
<div class="cmd-item"><i>#</i>Open settings</div>
<div class="cmd-item"><i>*</i>View documentation</div>
</div></div>
<script>
const btn=document.getElementById("btn"),menu=document.getElementById("menu");
function toggle(){menu.classList.toggle("open")}
btn.addEventListener("click",toggle);
document.addEventListener("keydown",function(e){if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="k"){e.preventDefault();toggle()}});
document.addEventListener("click",function(e){if(!menu.contains(e.target)&&e.target!==btn)menu.classList.remove("open")});
</script>
</body></html>`,

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
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.stage{display:grid;gap:16px;padding:40px;width:min(360px,86vw)}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.exp-card{position:relative;border:1px solid var(--line);border-radius:16px;background:#0d0d12;overflow:hidden;cursor:pointer;transition:border-color .3s,box-shadow .3s}
.exp-card.open{border-color:#544c67;box-shadow:0 20px 50px -20px rgba(155,138,255,.35)}
.exp-head{display:flex;justify-content:space-between;align-items:center;padding:18px 20px}
.exp-head b{color:#f7f5fb;font-size:13px}
.chev{width:22px;height:22px;border-radius:50%;background:#17131f;display:grid;place-items:center;color:var(--lav);transition:transform .35s cubic-bezier(.34,1.56,.64,1),background .3s}
.exp-card.open .chev{transform:rotate(180deg);background:linear-gradient(135deg,#d7d0ff,#9b8aff);color:#0a090f}
.exp-body{max-height:0;overflow:hidden;transition:max-height .4s cubic-bezier(.2,.8,.2,1)}
.exp-card.open .exp-body{max-height:140px}
.exp-body p{margin:0;padding:0 20px 20px;color:#a49dbc;font-size:12px;line-height:1.6;opacity:0;transform:translateY(6px);transition:opacity .3s .1s,transform .3s .1s}
.exp-card.open .exp-body p{opacity:1;transform:none}
</style></head>
<body data-cf-keep-dark><div class="stage"><span class="kicker">CLICK TO EXPAND</span>
<div class="exp-card" id="card"><div class="exp-head"><b>What's included in Pro?</b><span class="chev">⌄</span></div>
<div class="exp-body"><p>Unlimited projects, priority support, advanced analytics and early access to every new component we ship.</p></div></div></div>
<script>document.getElementById("card").addEventListener("click",function(e){e.currentTarget.classList.toggle("open")});</script>
</body></html>`,

  "before-after-compare-card": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Before/After Compare Card</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.stage{display:grid;gap:16px;place-items:center;padding:40px}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.compare{position:relative;width:320px;height:200px;border:1px solid var(--line);border-radius:14px;overflow:hidden;user-select:none;box-shadow:0 20px 50px -20px rgba(0,0,0,.6)}
.pane{position:absolute;inset:0;display:grid;place-items:center;font-size:12px;font-weight:800}
.before{background:linear-gradient(135deg,#1a1723,#0d0d12);color:#817d8a}
.after{background:linear-gradient(135deg,#d7d0ff,#9b8aff);color:#0a090f}
.after-wrap{position:absolute;inset:0;width:50%;overflow:hidden}
.handle{position:absolute;top:0;bottom:0;left:50%;width:2px;background:linear-gradient(180deg,transparent,#f7f5fb,transparent);cursor:ew-resize}
.handle::after{content:"↔";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:34px;height:34px;border-radius:50%;background:#f7f5fb;color:#0a090f;display:grid;place-items:center;font-size:13px;box-shadow:0 0 0 6px rgba(196,181,253,.18),0 8px 20px -6px rgba(0,0,0,.5)}
</style></head>
<body data-cf-keep-dark><div class="stage"><span class="kicker">DRAG THE HANDLE</span>
<div class="compare" id="compare"><div class="pane before">BEFORE</div><div class="after-wrap" id="afterWrap"><div class="pane after" style="width:320px">AFTER</div></div><div class="handle" id="handle"></div></div></div>
<script>
const compare=document.getElementById("compare"),afterWrap=document.getElementById("afterWrap"),handle=document.getElementById("handle");
let dragging=false;
handle.addEventListener("pointerdown",function(){dragging=true});
window.addEventListener("pointerup",function(){dragging=false});
window.addEventListener("pointermove",function(e){
  if(!dragging)return;
  const r=compare.getBoundingClientRect();
  let pct=Math.max(0,Math.min(100,((e.clientX-r.left)/r.width)*100));
  afterWrap.style.width=pct+"%";handle.style.left=pct+"%";
});
</script>
</body></html>`,

  "usage-slider-pricing": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Usage-Based Pricing Slider</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.stage{display:grid;gap:18px;padding:40px;width:min(340px,86vw)}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.calc{position:relative;border:1px solid var(--line);border-radius:16px;background:#0d0d12;padding:24px;overflow:hidden;box-shadow:0 20px 50px -22px rgba(0,0,0,.6)}
.calc::before{content:"";position:absolute;top:-50%;right:-20%;width:200px;height:200px;background:radial-gradient(circle,rgba(155,138,255,.16),transparent 70%)}
.calc b{position:relative;color:#817d8a;font-size:11px;display:block;margin-bottom:6px}
.calc .price{position:relative;font-size:34px;font-weight:800;color:#f7f5fb}
.calc .price span{font-size:13px;color:#817d8a;font-weight:600}
input[type=range]{width:100%;margin:18px 0 8px;accent-color:#c4b5fd;position:relative}
.rowlabel{position:relative;display:flex;justify-content:space-between;color:#a49dbc;font-size:11px}
#cost{background:linear-gradient(135deg,#f7f5fb,#c4b5fd);-webkit-background-clip:text;background-clip:text;color:transparent}
#cost span{color:#817d8a;background:none;-webkit-text-fill-color:#817d8a}
</style></head>
<body data-cf-keep-dark><div class="stage"><span class="kicker">DRAG TO ESTIMATE YOUR PLAN</span>
<div class="calc"><b>Monthly active users</b><div class="price"><span id="users">2,500</span></div>
<input type="range" id="slider" min="500" max="50000" step="500" value="2500">
<div class="rowlabel"><span>500</span><span>50,000+</span></div>
<div class="price" style="margin-top:18px" id="cost">$29<span>/mo</span></div></div></div>
<script>
const slider=document.getElementById("slider"),users=document.getElementById("users"),cost=document.getElementById("cost");
slider.addEventListener("input",function(){
  const v=Number(slider.value);
  users.textContent=v.toLocaleString();
  const price=v<=2500?29:v<=10000?79:v<=25000?199:399;
  cost.innerHTML="$"+price+"<span>/mo</span>";
});
</script>
</body></html>`,

  "highlighted-tier-cards": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Highlighted Tier Cards</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.stage{display:grid;gap:16px;padding:40px}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.tiers{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.tier{border:1px solid var(--line);border-radius:14px;background:#0d0d12;padding:18px 16px;text-align:center;box-shadow:0 16px 40px -22px rgba(0,0,0,.7);transition:border-color .3s,transform .3s cubic-bezier(.2,.8,.2,1),box-shadow .3s}
.tier b{display:block;color:#817d8a;font-size:10px;letter-spacing:1px}
.tier strong{display:block;font-size:22px;color:#f7f5fb;margin:10px 0}
.tier:hover{border-color:#544c67;transform:translateY(-6px);box-shadow:0 24px 50px -18px rgba(155,138,255,.3)}
.tier:hover strong{background:linear-gradient(135deg,#f7f5fb,#c4b5fd);-webkit-background-clip:text;background-clip:text;color:transparent}
</style></head>
<body data-cf-keep-dark><div class="stage"><span class="kicker">HOVER A PLAN</span>
<div class="tiers"><div class="tier"><b>STARTER</b><strong>$9</strong><span style="color:#817d8a;font-size:10px">For solo builders</span></div>
<div class="tier"><b>GROWTH</b><strong>$29</strong><span style="color:#817d8a;font-size:10px">For small teams</span></div>
<div class="tier"><b>SCALE</b><strong>$79</strong><span style="color:#817d8a;font-size:10px">For fast movers</span></div></div></div>
</body></html>`,

  "kanban-board-preview": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Kanban Board Preview</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;display:grid;place-items:center}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700;display:block;text-align:center;margin-bottom:14px}
.board{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;padding:20px;width:min(560px,90vw)}
.col{border:1px solid var(--line);border-radius:12px;background:#0d0d12;padding:12px;box-shadow:0 20px 50px -24px rgba(0,0,0,.6)}
.col h4{margin:0 0 10px;font-size:10px;letter-spacing:1px;color:#817d8a;display:flex;align-items:center;gap:6px}
.col h4::before{content:"";width:6px;height:6px;border-radius:50%;background:#4a4657}
.col.progress h4::before{background:#e8b563;box-shadow:0 0 8px #e8b563}
.col.done h4::before{background:#5fd4a1;box-shadow:0 0 8px #5fd4a1}
.task{padding:10px;border-radius:8px;background:#141119;border:1px solid var(--line);font-size:11px;color:#eee9f8;margin-bottom:8px;cursor:grab;transition:transform .2s cubic-bezier(.2,.8,.2,1),border-color .2s,box-shadow .2s}
.task:hover{transform:translateY(-3px);border-color:#544c67;box-shadow:0 10px 24px -14px rgba(155,138,255,.4)}
.task:last-child{margin-bottom:0}
.task small{display:block;color:#817d8a;margin-top:4px;font-size:9px}
.col.done .task{background:linear-gradient(135deg,#132318,#0f1a12)}
</style></head>
<body data-cf-keep-dark><div><span class="kicker">TASKS AT A GLANCE</span>
<div class="board"><div class="col"><h4>TO DO</h4><div class="task">Design onboarding flow<small>UX</small></div><div class="task">Write API docs<small>Docs</small></div></div>
<div class="col progress"><h4>IN PROGRESS</h4><div class="task">Build checkout widget<small>Frontend</small></div></div>
<div class="col done"><h4>DONE</h4><div class="task">Fix login redirect<small>Bug</small></div><div class="task">Ship dark mode<small>Feature</small></div></div></div></div>
</body></html>`,

  "notification-center-panel": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Notification Center Panel</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.stage{display:grid;gap:16px;padding:40px}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.panel{position:relative;width:280px;border:1px solid var(--line);border-radius:14px;background:#0d0d12;overflow:hidden;box-shadow:0 20px 50px -20px rgba(0,0,0,.6)}
.panel h4{margin:0;padding:14px 16px;font-size:11px;color:#817d8a;border-bottom:1px solid var(--line);display:flex;justify-content:space-between}
.panel h4 b{color:var(--lav);font-weight:800}
.notif{display:flex;gap:10px;padding:12px 16px;border-bottom:1px solid var(--line);cursor:pointer;transition:background .2s}
.notif:hover{background:#141119}
.notif:last-child{border-bottom:0}
.notif.unread{background:#141020}
.notif i{position:relative;width:8px;height:8px;border-radius:50%;background:linear-gradient(135deg,#d7d0ff,#9b8aff);box-shadow:0 0 8px rgba(196,181,253,.6);margin-top:5px;flex:none;font-style:normal;transition:background .3s,box-shadow .3s}
.notif.read i{background:transparent;box-shadow:none}
.notif div b{display:block;font-size:11px;color:#eee9f8}
.notif div span{font-size:10px;color:#817d8a}
</style></head>
<body data-cf-keep-dark><div class="stage"><span class="kicker">CLICK A NOTIFICATION TO MARK READ</span>
<div class="panel"><h4>NOTIFICATIONS <b id="count">2</b></h4>
<div class="notif unread"><i></i><div><b>New comment on your PR</b><span>2 min ago</span></div></div>
<div class="notif unread"><i></i><div><b>Deploy succeeded</b><span>1 hour ago</span></div></div>
<div class="notif read"><i></i><div><b>Weekly summary ready</b><span>Yesterday</span></div></div></div></div>
<script>
const count=document.getElementById("count");
document.querySelectorAll(".notif").forEach(function(n){n.addEventListener("click",function(){if(n.classList.contains("unread")){n.classList.remove("unread");n.classList.add("read");count.textContent=Math.max(0,Number(count.textContent)-1)}})});
</script>
</body></html>`,

  "animated-gradient-hero": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Animated Gradient Hero</title><style>
:root{--bg:#050507}
*{box-sizing:border-box}body{margin:0;min-height:100vh;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;position:relative;overflow:hidden;display:grid;place-items:center}
.aurora{position:absolute;inset:-20%;background:conic-gradient(from 0deg,#9b8aff,#5fd4a1,#f4b0c8,#9b8aff);filter:blur(90px);opacity:.35;animation:spin 14s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
.hero{position:relative;text-align:center;padding:60px 30px;max-width:480px}
.kicker{color:#c4b5fd;font-size:10px;letter-spacing:2px;font-weight:700}
h1{color:#f7f5fb;font-size:32px;margin:14px 0;line-height:1.15}
p{color:#a49dbc;font-size:13px;margin:0 0 20px}
button{padding:13px 26px;border:0;border-radius:12px;background:#f7f5fb;color:#0a090f;font-weight:800;font-size:12px;cursor:pointer;box-shadow:0 16px 34px -10px rgba(0,0,0,.5);transition:transform .15s cubic-bezier(.34,1.56,.64,1)}
button:active{transform:scale(.96)}
</style></head>
<body data-cf-keep-dark><div class="aurora"></div><div class="hero"><span class="kicker">INTRODUCING V2</span><h1>Design systems that move with you.</h1><p>An adaptive component library built for teams shipping fast, polished products.</p><button>Start building →</button></div>
</body></html>`,

  "particle-field-hero": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Particle Field Hero</title><style>
:root{--bg:#050507}
*{box-sizing:border-box}body{margin:0;min-height:100vh;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;position:relative;overflow:hidden}
canvas{position:absolute;inset:0}
.hero{position:relative;display:grid;place-items:center;min-height:100vh;text-align:center;padding:40px}
.kicker{color:#9d94b0;font-size:10px;letter-spacing:2px;font-weight:700}
h1{color:#f7f5fb;font-size:30px;margin:14px 0;max-width:420px}
</style></head>
<body data-cf-keep-dark><canvas id="c"></canvas><div class="hero"><div><span class="kicker">MOVE YOUR CURSOR</span><h1>Interfaces with a pulse.</h1></div></div>
<script>
const c=document.getElementById("c"),ctx=c.getContext("2d");let w,h,mx=-999,my=-999;
function resize(){w=c.width=innerWidth;h=c.height=innerHeight}resize();addEventListener("resize",resize);
addEventListener("pointermove",e=>{mx=e.clientX;my=e.clientY});
const dots=Array.from({length:90},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3}));
function tick(){
  ctx.clearRect(0,0,w,h);
  dots.forEach(d=>{
    d.x+=d.vx;d.y+=d.vy;
    if(d.x<0||d.x>w)d.vx*=-1;if(d.y<0||d.y>h)d.vy*=-1;
    const dist=Math.hypot(d.x-mx,d.y-my);
    const r=dist<120?2.4:1.3;
    ctx.beginPath();ctx.arc(d.x,d.y,r,0,Math.PI*2);ctx.fillStyle=dist<120?"#c4b5fd":"#3a3546";ctx.fill();
  });
  requestAnimationFrame(tick);
}
tick();
</script>
</body></html>`,

  "carousel-dot-testimonials": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Testimonial Carousel</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.stage{display:grid;gap:16px;place-items:center;padding:40px;width:min(360px,86vw)}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.card{border:1px solid var(--line);border-radius:16px;background:#0d0d12;padding:24px;text-align:center;min-height:120px;box-shadow:0 20px 50px -22px rgba(0,0,0,.6);animation:fade .3s cubic-bezier(.2,.8,.2,1)}
.card p{color:#eee9f8;font-size:13px;line-height:1.6;margin:0 0 12px}
.card b{color:var(--lav);font-size:11px}
.dots{display:flex;gap:6px}
.dots span{width:7px;height:7px;border-radius:50%;background:#3a3546;cursor:pointer;transition:background .3s,transform .3s cubic-bezier(.34,1.56,.64,1),box-shadow .3s}
.dots span.active{background:linear-gradient(135deg,#d7d0ff,#9b8aff);transform:scale(1.3);box-shadow:0 0 8px rgba(196,181,253,.5)}
@keyframes fade{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}
</style></head>
<body data-cf-keep-dark><div class="stage"><span class="kicker">TAP A DOT</span>
<div class="card" id="card"><p>"CodeFusion cut our build time in half — every component just works."</p><b>Maya Torres · Frontend Lead</b></div>
<div class="dots" id="dots"><span class="active"></span><span></span><span></span></div></div>
<script>
const quotes=[{q:"CodeFusion cut our build time in half — every component just works.",a:"Maya Torres · Frontend Lead"},
{q:"The polish here rivals a custom design agency, at a fraction of the cost.",a:"Dev Patel · Founder"},
{q:"We shipped our MVP in a weekend using nothing but this library.",a:"Ines Laurent · Product Designer"}];
const card=document.getElementById("card"),dots=[...document.querySelectorAll("#dots span")];
dots.forEach(function(d,i){d.addEventListener("click",function(){
  dots.forEach(function(x){x.classList.remove("active")});d.classList.add("active");
  card.style.animation="none";void card.offsetWidth;card.style.animation="";
  card.innerHTML='<p>"'+quotes[i].q+'"</p><b>'+quotes[i].a+"</b>";
})});
</script>
</body></html>`,

  "pull-quote-testimonial": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Pull Quote Testimonial</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;position:relative;overflow:hidden}
body::before{content:"";position:absolute;inset:-20%;background:radial-gradient(circle at 50% 30%,rgba(155,138,255,.1),transparent 60%);pointer-events:none}
.wrap{position:relative;max-width:420px;padding:40px;text-align:center}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.mark{font-size:40px;background:linear-gradient(135deg,#9b8aff,#3a3546);-webkit-background-clip:text;background-clip:text;color:transparent;font-family:Georgia,serif;line-height:1}
blockquote{margin:10px 0 20px;font-size:19px;color:#f7f5fb;line-height:1.4;font-weight:600}
.who{color:#a49dbc;font-size:12px}
.logos{display:flex;gap:18px;justify-content:center;margin-top:22px;opacity:.6}
.logos span{color:#817d8a;font-size:11px;font-weight:800;letter-spacing:1px}
</style></head>
<body data-cf-keep-dark><div class="wrap"><span class="kicker">TRUSTED BY BUILDERS</span><div class="mark">"</div>
<blockquote>It feels like our whole product got a design upgrade overnight.</blockquote>
<div class="who">Renée Fischer — Head of Design, Northstar</div>
<div class="logos"><span>NORTHSTAR</span><span>ORBIT</span><span>FLUENT</span></div></div>
</body></html>`,

  "command-palette-nav": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Command Palette Nav</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
header{display:flex;justify-content:space-between;align-items:center;padding:16px 24px;border-bottom:1px solid var(--line)}
header b{color:#f7f5fb;font-size:13px}
.search{display:flex;align-items:center;gap:8px;padding:9px 14px;border:1px solid var(--line);border-radius:9px;background:#111017;color:#817d8a;font-size:11px;cursor:pointer;transition:border-color .2s}
.search:hover{border-color:#544c67}
.overlay{position:fixed;inset:0;background:rgba(5,5,7,.7);backdrop-filter:blur(2px);display:none;place-items:start center;padding-top:100px}
.overlay.open{display:grid}
.palette{width:min(420px,88vw);border:1px solid var(--line);border-radius:14px;background:#0d0d12;overflow:hidden;box-shadow:0 40px 90px -20px rgba(0,0,0,.7),0 0 0 1px rgba(196,181,253,.1);animation:pop .2s cubic-bezier(.2,.8,.2,1)}
@keyframes pop{from{opacity:0;transform:translateY(-8px) scale(.98)}to{opacity:1;transform:none}}
.palette input{width:100%;padding:14px 16px;border:0;border-bottom:1px solid var(--line);background:transparent;color:#f7f5fb;font-size:13px;outline:0}
.palette div{padding:11px 16px;font-size:12px;color:#c9c4d6;cursor:pointer;transition:background .15s,color .15s}
.palette div:hover{background:#17131f;color:var(--lav)}
</style></head>
<body data-cf-keep-dark><header><b>CodeFusion</b><div class="search" id="open">Search… ⌘K</div></header>
<div class="overlay" id="overlay"><div class="palette"><input placeholder="Type a command…">
<div>Go to Dashboard</div><div>Create new component</div><div>Toggle theme</div><div>View documentation</div></div></div>
<script>
const open=document.getElementById("open"),overlay=document.getElementById("overlay");
open.addEventListener("click",function(){overlay.classList.add("open")});
overlay.addEventListener("click",function(e){if(e.target===overlay)overlay.classList.remove("open")});
document.addEventListener("keydown",function(e){if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="k"){e.preventDefault();overlay.classList.add("open")}if(e.key==="Escape")overlay.classList.remove("open")});
</script>
</body></html>`,

  "sliding-underline-tabs": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Sliding Underline Tabs</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.stage{display:grid;gap:20px;padding:40px}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.tabs{position:relative;display:flex;gap:26px;border-bottom:1px solid var(--line);padding-bottom:0}
.tabs button{background:none;border:0;color:#817d8a;font-size:12px;font-weight:700;padding:10px 2px;cursor:pointer;transition:color .25s}
.tabs button.active{color:#f7f5fb}
.underline{position:absolute;bottom:-1px;height:2px;background:linear-gradient(90deg,#9b8aff,#d7d0ff);box-shadow:0 0 8px rgba(196,181,253,.6);transition:left .3s cubic-bezier(.2,.8,.2,1),width .3s cubic-bezier(.2,.8,.2,1)}
</style></head>
<body data-cf-keep-dark><div class="stage"><span class="kicker">CLICK A TAB</span>
<div class="tabs" id="tabs"><button class="active">Overview</button><button>Analytics</button><button>Settings</button><button>Billing</button><div class="underline" id="u"></div></div></div>
<script>
const tabs=document.getElementById("tabs"),buttons=[...tabs.querySelectorAll("button")],u=document.getElementById("u");
function place(btn){u.style.width=btn.offsetWidth+"px";u.style.left=btn.offsetLeft+"px"}
buttons.forEach(function(b){b.addEventListener("click",function(){buttons.forEach(function(x){x.classList.remove("active")});b.classList.add("active");place(b)})});
place(buttons[0]);
</script>
</body></html>`,

  "drag-drop-upload-form": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Drag & Drop Upload</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.stage{display:grid;gap:14px;padding:40px;width:min(340px,86vw)}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.drop{position:relative;border:2px dashed var(--line);border-radius:14px;padding:34px 18px;text-align:center;color:#817d8a;font-size:12px;overflow:hidden;transition:border-color .25s,background .25s,box-shadow .25s}
.drop::before{content:"";position:absolute;inset:-40%;background:radial-gradient(circle,rgba(196,181,253,.25),transparent 70%);opacity:0;transition:opacity .3s}
.drop.over{border-color:var(--lav);background:#141020;color:#c9c4d6;box-shadow:0 0 0 4px rgba(196,181,253,.12)}
.drop.over::before{opacity:1}
.drop b{position:relative;display:block;color:#eee9f8;font-size:13px;margin-bottom:6px}
.drop>*{position:relative}
.bar{height:6px;border-radius:4px;background:#1c1a24;margin-top:14px;overflow:hidden;display:none}
.bar.show{display:block}
.bar i{display:block;height:100%;width:0;background:linear-gradient(90deg,#9b8aff,#c4b5fd);box-shadow:0 0 8px rgba(196,181,253,.6);transition:width .25s;font-style:normal}
</style></head>
<body data-cf-keep-dark><div class="stage"><span class="kicker">DROP A FILE OR CLICK TO SIMULATE</span>
<div class="drop" id="drop"><b>Drag & drop your file here</b>or click to browse<div class="bar" id="bar"><i id="fill"></i></div></div></div>
<script>
const drop=document.getElementById("drop"),bar=document.getElementById("bar"),fill=document.getElementById("fill");
function simulate(){bar.classList.add("show");fill.style.width="0%";let p=0;const t=setInterval(function(){p+=Math.random()*20;fill.style.width=Math.min(100,p)+"%";if(p>=100)clearInterval(t)},180)}
drop.addEventListener("click",simulate);
["dragover","dragenter"].forEach(function(ev){drop.addEventListener(ev,function(e){e.preventDefault();drop.classList.add("over")})});
["dragleave","drop"].forEach(function(ev){drop.addEventListener(ev,function(e){e.preventDefault();drop.classList.remove("over");if(ev==="drop")simulate()})});
</script>
</body></html>`,

  "otp-input-form": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>OTP Input Form</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.stage{display:grid;gap:16px;place-items:center;padding:40px}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.otp{display:flex;gap:9px}
.otp input{width:42px;height:52px;text-align:center;font-size:19px;font-weight:800;color:#f7f5fb;background:#111017;border:1px solid var(--line);border-radius:10px;outline:0;box-shadow:0 10px 24px -16px rgba(0,0,0,.6);transition:border-color .2s,box-shadow .2s,transform .2s cubic-bezier(.34,1.56,.64,1)}
.otp input:focus{border-color:var(--lav);box-shadow:0 0 0 3px rgba(196,181,253,.25);transform:translateY(-2px)}
.otp.done input{border-color:#3f6e52;color:#bdf0d1}
.status{font-size:11px;color:#5fd4a1;height:14px;text-shadow:0 0 8px rgba(95,212,161,.4)}
</style></head>
<body data-cf-keep-dark><div class="stage"><span class="kicker">ENTER THE 6-DIGIT CODE</span>
<div class="otp" id="otp"><input maxlength="1" inputmode="numeric"><input maxlength="1" inputmode="numeric"><input maxlength="1" inputmode="numeric"><input maxlength="1" inputmode="numeric"><input maxlength="1" inputmode="numeric"><input maxlength="1" inputmode="numeric"></div>
<div class="status" id="status"></div></div>
<script>
const otp=document.getElementById("otp"),inputs=[...document.querySelectorAll("#otp input")],status=document.getElementById("status");
inputs.forEach(function(inp,i){
  inp.addEventListener("input",function(){
    inp.value=inp.value.replace(/[^0-9]/g,"");
    if(inp.value&&inputs[i+1])inputs[i+1].focus();
    if(inputs.every(function(x){return x.value})){status.textContent="Code verified ✓";otp.classList.add("done")}
  });
  inp.addEventListener("keydown",function(e){if(e.key==="Backspace"&&!inp.value&&inputs[i-1])inputs[i-1].focus()});
});
</script>
</body></html>`,

  "filter-chip-project-grid": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Filterable Project Grid</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;display:grid;place-items:center}
.stage{display:grid;gap:16px;padding:30px;width:min(420px,90vw)}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.chips{display:flex;gap:8px;flex-wrap:wrap}
.chips span{padding:7px 13px;border:1px solid var(--line);border-radius:999px;font-size:11px;color:#a49dbc;cursor:pointer;transition:background .25s,color .25s,border-color .25s}
.chips span.active{background:linear-gradient(135deg,#d7d0ff,#9b8aff);color:#0a090f;border-color:transparent;box-shadow:0 8px 20px -10px rgba(155,138,255,.6)}
.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}
.grid div{padding:22px 14px;border:1px solid var(--line);border-radius:12px;background:#0d0d12;color:#c9c4d6;font-size:11px;text-align:center;box-shadow:0 14px 34px -22px rgba(0,0,0,.7);transition:opacity .3s cubic-bezier(.2,.8,.2,1),transform .3s cubic-bezier(.2,.8,.2,1)}
.grid div.hide{opacity:0;transform:scale(.9);position:absolute;pointer-events:none}
</style></head>
<body data-cf-keep-dark><div class="stage"><span class="kicker">FILTER BY CATEGORY</span>
<div class="chips" id="chips"><span class="active" data-f="all">All</span><span data-f="web">Web</span><span data-f="brand">Brand</span><span data-f="app">App</span></div>
<div class="grid" id="grid">
<div data-c="web">Nova Website</div><div data-c="brand">Atlas Rebrand</div><div data-c="app">Finora App</div>
<div data-c="web">Travelora Landing</div><div data-c="app">LearnFlow Mobile</div><div data-c="brand">Socially Identity</div>
</div></div>
<script>
const chips=[...document.querySelectorAll("#chips span")],items=[...document.querySelectorAll("#grid div")];
chips.forEach(function(c){c.addEventListener("click",function(){
  chips.forEach(function(x){x.classList.remove("active")});c.classList.add("active");
  const f=c.dataset.f;
  items.forEach(function(i){i.classList.toggle("hide",f!=="all"&&i.dataset.c!==f)});
})});
</script>
</body></html>`,

  "drag-scroll-project-strip": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Drag Scroll Project Strip</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;display:grid;place-items:center}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700;display:block;text-align:center;margin-bottom:14px}
.strip{display:flex;gap:12px;overflow-x:auto;padding:20px;width:min(480px,92vw);cursor:grab;scrollbar-width:none}
.strip::-webkit-scrollbar{display:none}
.strip.grabbing{cursor:grabbing}
.strip div{flex:none;width:150px;height:100px;border:1px solid var(--line);border-radius:12px;background:linear-gradient(135deg,#191527,#1c1a24);display:grid;place-items:center;color:#c9c4d6;font-size:11px;user-select:none;box-shadow:0 16px 40px -20px rgba(0,0,0,.7);transition:border-color .2s,box-shadow .2s}
.strip div:hover{border-color:#544c67;box-shadow:0 20px 44px -16px rgba(155,138,255,.3)}
</style></head>
<body data-cf-keep-dark><div><span class="kicker">DRAG TO SCROLL</span>
<div class="strip" id="strip"><div>Nova SaaS</div><div>Atlas Agency</div><div>CommerceX</div><div>Finora</div><div>Medora</div><div>Travelora</div></div></div>
<script>
const strip=document.getElementById("strip");let down=false,startX,scrollLeft;
strip.addEventListener("pointerdown",function(e){down=true;strip.classList.add("grabbing");startX=e.pageX;scrollLeft=strip.scrollLeft});
window.addEventListener("pointerup",function(){down=false;strip.classList.remove("grabbing")});
strip.addEventListener("pointermove",function(e){if(!down)return;strip.scrollLeft=scrollLeft-(e.pageX-startX)});
</script>
</body></html>`,

  "before-after-feature-toggle": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Before/After Feature Toggle</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.stage{display:grid;gap:16px;place-items:center;padding:40px;width:min(340px,86vw)}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.switch{position:relative;display:flex;border:1px solid var(--line);border-radius:999px;padding:3px;width:fit-content;background:#0d0d12}
.pill{position:absolute;top:3px;bottom:3px;left:3px;width:calc(50% - 3px);border-radius:999px;background:linear-gradient(135deg,#d7d0ff,#9b8aff);transition:transform .35s cubic-bezier(.2,.8,.2,1)}
.switch.on .pill{transform:translateX(100%)}
.switch button{position:relative;z-index:1;border:0;background:none;padding:7px 16px;border-radius:999px;font-size:11px;font-weight:700;color:#817d8a;cursor:pointer;transition:color .3s}
.switch button.active{color:#0a090f}
.panel{border:1px solid var(--line);border-radius:14px;background:#0d0d12;padding:20px;width:100%;color:#eee9f8;font-size:12px;line-height:1.6;box-shadow:0 20px 50px -22px rgba(0,0,0,.6);transition:box-shadow .3s,opacity .15s}
.panel b{display:block;color:#f7f5fb;margin-bottom:6px;font-size:13px}
</style></head>
<body data-cf-keep-dark><div class="stage"><span class="kicker">TOGGLE TO COMPARE</span>
<div class="switch" id="switch"><div class="pill"></div><button class="active" data-v="before">Without CodeFusion</button><button data-v="after">With CodeFusion</button></div>
<div class="panel" id="panel"><b>Manual, from-scratch builds</b>Weeks spent wiring up components, chasing pixel-perfect states and re-solving problems already solved elsewhere.</div></div>
<script>
const switchEl=document.getElementById("switch"),buttons=[...switchEl.querySelectorAll("button")],panel=document.getElementById("panel");
const content={before:"<b>Manual, from-scratch builds</b>Weeks spent wiring up components, chasing pixel-perfect states and re-solving problems already solved elsewhere.",
after:"<b>Production-ready in hours</b>Copy a fully polished, interactive component and ship — every state, every breakpoint, already handled."};
buttons.forEach(function(b){b.addEventListener("click",function(){buttons.forEach(function(x){x.classList.remove("active")});b.classList.add("active");switchEl.classList.toggle("on",b.dataset.v==="after");panel.style.opacity="0";setTimeout(function(){panel.innerHTML=content[b.dataset.v];panel.style.opacity="1"},150)})});
</script>
</body></html>`,

  "scrollspy-feature-list": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Scrollspy Feature List</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;display:flex}
.nav{position:sticky;top:0;align-self:flex-start;padding:40px 18px;display:grid;gap:12px;min-width:130px}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700;margin-bottom:6px}
.nav a{position:relative;color:#817d8a;font-size:11px;text-decoration:none;padding-left:12px;border-left:2px solid var(--line);transition:color .3s,border-color .3s}
.nav a.active{color:#f7f5fb;border-left-color:var(--lav)}
.nav a.active::before{content:"";position:absolute;left:-2px;top:0;bottom:0;width:2px;background:var(--lav);box-shadow:0 0 8px var(--lav)}
.content{padding:40px 24px;display:grid;gap:200px;flex:1}
section{scroll-margin-top:20px}
section h3{color:#f7f5fb;font-size:16px;margin:0 0 8px}
section p{color:#a49dbc;font-size:12px;max-width:260px;line-height:1.6}
</style></head>
<body data-cf-keep-dark><nav class="nav"><span class="kicker">FEATURES</span><a href="#speed" class="active">Speed</a><a href="#security">Security</a><a href="#scale">Scale</a></nav>
<div class="content">
<section id="speed"><h3>Built for speed</h3><p>Every component ships pre-optimized, no extra tuning required.</p></section>
<section id="security"><h3>Security first</h3><p>Sanitized, dependency-light source you can audit in minutes.</p></section>
<section id="scale"><h3>Scales with you</h3><p>From a weekend project to a production platform, unchanged.</p></section>
</div>
<script>
const links=[...document.querySelectorAll(".nav a")],sections=[...document.querySelectorAll("section")];
const io=new IntersectionObserver(function(entries){
  entries.forEach(function(en){if(en.isIntersecting){links.forEach(function(l){l.classList.remove("active")});const match=links.find(function(l){return l.getAttribute("href")==="#"+en.target.id});if(match)match.classList.add("active")}});
},{rootMargin:"-40% 0px -50% 0px"});
sections.forEach(function(s){io.observe(s)});
</script>
</body></html>`,

  "waitlist-capture-section": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Waitlist Capture Section</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.wrap{position:relative;max-width:380px;padding:40px;text-align:center}
.wrap::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,rgba(155,138,255,.14),transparent 60%);pointer-events:none}
.kicker{position:relative;color:#c4b5fd;font-size:10px;letter-spacing:2px;font-weight:700}
h2{position:relative;color:#f7f5fb;font-size:24px;margin:12px 0 6px}
p{position:relative;color:#a49dbc;font-size:12px;margin:0 0 20px}
form{position:relative;display:flex;gap:8px}
input{flex:1;padding:12px 14px;border:1px solid var(--line);border-radius:10px;background:#111017;color:#f7f5fb;font-size:12px;outline:0;transition:border-color .25s,box-shadow .25s}
input:focus{border-color:#6d5f93;box-shadow:0 0 0 3px rgba(196,181,253,.2)}
button{padding:12px 18px;border:0;border-radius:10px;background:linear-gradient(135deg,#d7d0ff,#9b8aff);color:#0a090f;font-weight:800;font-size:12px;cursor:pointer;white-space:nowrap;box-shadow:0 10px 24px -10px rgba(155,138,255,.6);transition:transform .15s cubic-bezier(.34,1.56,.64,1)}
button:active{transform:scale(.95)}
.success{position:relative;display:none;color:#5fd4a1;font-size:12px;margin-top:12px;animation:fade .3s ease}
@keyframes fade{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:none}}
</style></head>
<body data-cf-keep-dark><div class="wrap"><span class="kicker">JOIN 4,200+ ON THE WAITLIST</span><h2>Be first to try v3.</h2><p>Early access, launch pricing and priority onboarding.</p>
<form id="form"><input type="email" placeholder="you@company.com" required><button>Notify me</button></form>
<div class="success" id="success">You're on the list ✓ — check your inbox soon.</div></div>
<script>
document.getElementById("form").addEventListener("submit",function(e){e.preventDefault();e.target.style.display="none";document.getElementById("success").style.display="block"});
</script>
</body></html>`,

  "animated-stats-band": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Animated Stats Band</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.band{position:relative;display:flex;gap:0;border:1px solid var(--line);border-radius:16px;overflow:hidden;box-shadow:0 20px 50px -22px rgba(0,0,0,.6)}
.band::before{content:"";position:absolute;top:-60%;left:35%;width:200px;height:200px;background:radial-gradient(circle,rgba(155,138,255,.16),transparent 70%)}
.stat{position:relative;padding:26px 32px;text-align:center;border-right:1px solid var(--line);transition:background .25s}
.stat:hover{background:#0f0d16}
.stat:last-child{border-right:0}
.stat b{display:block;font-size:26px;background:linear-gradient(135deg,#f7f5fb,#c4b5fd);-webkit-background-clip:text;background-clip:text;color:transparent}
.stat span{font-size:10px;color:#817d8a;letter-spacing:.5px}
</style></head>
<body data-cf-keep-dark><div class="band" id="band">
<div class="stat"><b data-t="12400">0</b><span>ACTIVE TEAMS</span></div>
<div class="stat"><b data-t="98">0</b><span>UPTIME %</span></div>
<div class="stat"><b data-t="340">0</b><span>COMPONENTS SHIPPED</span></div>
</div>
<script>
document.querySelectorAll("#band b").forEach(function(el){
  const target=Number(el.dataset.t);let v=0;
  const t=setInterval(function(){v+=Math.ceil(target/40);if(v>=target){v=target;clearInterval(t)}el.textContent=v.toLocaleString();},30);
});
</script>
</body></html>`,

  "elastic-press-button": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Elastic Press Button</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.stage{display:grid;gap:22px;place-items:center;padding:40px}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.elastic-wrap{position:relative}
.elastic-wrap::after{content:"";position:absolute;inset:-14px;border-radius:26px;background:radial-gradient(circle,rgba(196,181,253,.35),transparent 70%);filter:blur(14px);opacity:0;transition:opacity .3s}
.elastic-wrap:hover::after{opacity:1}
.elastic-btn{position:relative;overflow:hidden;padding:16px 32px;border:0;border-radius:14px;font-size:13px;font-weight:800;color:#0a090f;cursor:pointer;background:linear-gradient(135deg,#d7d0ff,#9b8aff);transition:transform .12s cubic-bezier(.34,1.56,.64,1)}
.elastic-btn::before{content:"";position:absolute;top:0;left:-60%;width:40%;height:100%;background:linear-gradient(115deg,transparent,rgba(255,255,255,.6),transparent);transform:skewX(-20deg);transition:left .5s ease}
.elastic-wrap:hover .elastic-btn::before{left:130%}
.elastic-btn:active{transform:scale(.88)}
.elastic-btn.pop{animation:pop .45s cubic-bezier(.34,1.56,.64,1)}
@keyframes pop{0%{transform:scale(.88)}60%{transform:scale(1.08)}100%{transform:scale(1)}}
</style></head>
<body data-cf-keep-dark><div class="stage"><span class="kicker">PRESS AND RELEASE</span>
<div class="elastic-wrap"><button class="elastic-btn" id="btn">Add to cart</button></div></div>
<script>
const btn=document.getElementById("btn");
btn.addEventListener("pointerup",function(){btn.classList.remove("pop");void btn.offsetWidth;btn.classList.add("pop")});
</script>
</body></html>`,

  "split-hover-button": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Split Hover Button</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.stage{display:grid;gap:22px;place-items:center;padding:40px}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.split-btn{position:relative;width:200px;height:54px;border:1px solid var(--line);border-radius:14px;overflow:hidden;cursor:pointer;background:#0d0d12;box-shadow:0 10px 30px -12px rgba(0,0,0,.6);transition:box-shadow .3s}
.split-btn:hover{box-shadow:0 14px 40px -10px rgba(155,138,255,.35)}
.split-half{position:absolute;top:0;bottom:0;width:50%;display:grid;place-items:center;font-size:12px;font-weight:800;color:#eee9f8;transition:transform .35s cubic-bezier(.2,.8,.2,1),background .35s}
.split-left{left:0;background:linear-gradient(135deg,#1c1726,#141019);transform-origin:left}
.split-right{right:0;background:linear-gradient(135deg,#191424,#1f1a2c);transform-origin:right}
.split-btn:hover .split-left{transform:skewX(-10deg) translateX(-10px);background:linear-gradient(135deg,#221b30,#171220)}
.split-btn:hover .split-right{transform:skewX(-10deg) translateX(10px);background:linear-gradient(135deg,#241d33,#1b1626)}
.split-icon{position:absolute;inset:0;display:grid;place-items:center;color:var(--lav);font-size:18px;opacity:0;transform:translateY(6px) scale(.7);transition:opacity .3s,transform .35s cubic-bezier(.34,1.56,.64,1)}
.split-btn:hover .split-icon{opacity:1;transform:translateY(0) scale(1)}
</style></head>
<body data-cf-keep-dark><div class="stage"><span class="kicker">HOVER TO PEEL</span>
<div class="split-btn"><div class="split-half split-left">Down</div><div class="split-half split-right">load</div><div class="split-icon">↓</div></div></div>
</body></html>`,

  "long-press-confirm-button": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Long Press Confirm Button</title><style>
:root{--bg:#050507;--line:#272632}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.stage{display:grid;gap:22px;place-items:center;padding:40px}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.hold-wrap{position:relative}
.hold-wrap::before{content:"";position:absolute;inset:-12px;border-radius:22px;background:radial-gradient(circle,rgba(214,68,92,.35),transparent 70%);filter:blur(12px);opacity:0;transition:opacity .3s}
.hold-wrap.active::before{opacity:1;animation:pulse 1s ease-in-out infinite}
.hold-btn{position:relative;width:190px;height:50px;border:1px solid #5e3540;border-radius:14px;overflow:hidden;background:#180f12;color:#efb8c2;font-size:12px;font-weight:800;cursor:pointer;box-shadow:0 8px 24px -10px rgba(0,0,0,.6)}
.hold-fill{position:absolute;left:0;top:0;bottom:0;width:0;background:linear-gradient(90deg,#7a2f3d,#c04b60)}
.hold-label{position:relative;z-index:2;display:grid;place-items:center;height:100%;gap:2px}
.hold-btn.done{border-color:#3f6e52;color:#bdf0d1}
@keyframes pulse{0%,100%{opacity:.4}50%{opacity:.9}}
@keyframes shake{0%,100%{transform:translateX(0)}20%{transform:translateX(-4px)}40%{transform:translateX(4px)}60%{transform:translateX(-3px)}80%{transform:translateX(3px)}}
.hold-btn.done{animation:shake .4s ease}
</style></head>
<body data-cf-keep-dark><div class="stage"><span class="kicker">PRESS AND HOLD TO DELETE</span>
<div class="hold-wrap" id="wrap"><button class="hold-btn" id="btn"><div class="hold-fill" id="fill"></div><span class="hold-label" id="label">Hold to delete</span></button></div></div>
<script>
const wrap=document.getElementById("wrap"),btn=document.getElementById("btn"),fill=document.getElementById("fill"),label=document.getElementById("label");
let raf,start;
function step(ts){
  if(!start)start=ts;const p=Math.min(1,(ts-start)/900);fill.style.width=(p*100)+"%";
  if(p>=1){label.textContent="Deleted ✓";btn.classList.add("done");wrap.classList.remove("active");cancelAnimationFrame(raf);return}
  raf=requestAnimationFrame(step);
}
function begin(){if(btn.classList.contains("done"))return;start=null;wrap.classList.add("active");raf=requestAnimationFrame(step)}
function cancel(){cancelAnimationFrame(raf);wrap.classList.remove("active");fill.style.width="0%";if(!btn.classList.contains("done"))label.textContent="Hold to delete"}
btn.addEventListener("pointerdown",begin);
btn.addEventListener("pointerup",cancel);
btn.addEventListener("pointerleave",cancel);
</script>
</body></html>`,

  "cursor-follow-glow-button": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Cursor Follow Glow Button</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.stage{display:grid;gap:22px;place-items:center;padding:40px}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.glow-cursor-btn{position:relative;padding:17px 36px;border:1px solid var(--line);border-radius:14px;font-size:12px;font-weight:800;color:#eee9f8;cursor:pointer;background:#0d0d12;overflow:hidden;box-shadow:0 8px 24px -12px rgba(0,0,0,.7)}
.glow-cursor-btn::before{content:"";position:absolute;width:180px;height:180px;left:var(--x,50%);top:var(--y,50%);transform:translate(-50%,-50%);background:radial-gradient(circle,rgba(196,181,253,.35),transparent 70%);opacity:0;transition:opacity .3s}
.glow-cursor-btn::after{content:"";position:absolute;width:60px;height:60px;left:var(--x,50%);top:var(--y,50%);transform:translate(-50%,-50%);background:radial-gradient(circle,rgba(255,255,255,.5),transparent 70%);opacity:0;transition:opacity .2s;mix-blend-mode:overlay}
.glow-cursor-btn:hover::before,.glow-cursor-btn:hover::after{opacity:1}
.glow-cursor-btn span{position:relative;z-index:1;background:linear-gradient(90deg,#eee9f8,#c4b5fd,#eee9f8);background-size:200% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;transition:background-position .6s}
.glow-cursor-btn:hover span{background-position:100% 0}
</style></head>
<body data-cf-keep-dark><div class="stage"><span class="kicker">MOVE OVER THE BUTTON</span>
<button class="glow-cursor-btn" id="btn"><span>Explore plans</span></button></div>
<script>
const btn=document.getElementById("btn");
btn.addEventListener("pointermove",function(e){const r=btn.getBoundingClientRect();btn.style.setProperty("--x",(e.clientX-r.left)+"px");btn.style.setProperty("--y",(e.clientY-r.top)+"px")});
</script>
</body></html>`,

  "toggle-icon-morph-button": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Toggle Icon Morph Button</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.stage{display:grid;gap:22px;place-items:center;padding:40px}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.morph-wrap{position:relative}
.morph-wrap::before{content:"";position:absolute;inset:-10px;border-radius:50%;background:radial-gradient(circle,rgba(196,181,253,.4),transparent 70%);filter:blur(10px);opacity:0;transition:opacity .3s}
.morph-wrap:hover::before{opacity:1}
.morph-icon-btn{position:relative;width:56px;height:56px;border:1px solid var(--line);border-radius:50%;background:#111017;cursor:pointer;display:grid;place-items:center;color:var(--lav);transition:background .3s,transform .3s cubic-bezier(.34,1.56,.64,1)}
.morph-icon-btn:active{transform:scale(.9)}
.morph-icon-btn.on{background:linear-gradient(135deg,#d7d0ff,#9b8aff);color:#0a090f}
.morph-icon-btn svg{width:20px;height:20px}
.bar{transform-origin:center;transition:transform .35s cubic-bezier(.34,1.56,.64,1),opacity .2s}
.morph-icon-btn.on .bar1{transform:rotate(45deg) translateY(0)}
.morph-icon-btn.on .bar2{opacity:0}
.morph-icon-btn.on .bar3{transform:rotate(-45deg) translateY(0)}
</style></head>
<body data-cf-keep-dark><div class="stage"><span class="kicker">CLICK TO MORPH MENU → CLOSE</span>
<div class="morph-wrap"><button class="morph-icon-btn" id="btn">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
<line class="bar bar1" x1="4" y1="7" x2="20" y2="7"/>
<line class="bar bar2" x1="4" y1="12" x2="20" y2="12"/>
<line class="bar bar3" x1="4" y1="17" x2="20" y2="17"/>
</svg>
</button></div></div>
<script>document.getElementById("btn").addEventListener("click",function(e){e.currentTarget.classList.toggle("on")});</script>
</body></html>`,

  "stacked-3d-button": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Stacked 3D Button</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.stage{display:grid;gap:22px;place-items:center;padding:60px}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.key-btn{position:relative;padding:0;border:0;background:none;cursor:pointer;filter:drop-shadow(0 14px 24px rgba(0,0,0,.5))}
.key-face{position:relative;display:block;padding:16px 32px;border-radius:14px;background:linear-gradient(160deg,#e7e2ff,#9b8aff 60%,#7a67d9);color:#0a090f;font-size:12px;font-weight:800;transform:translateY(-7px);transition:transform .12s;overflow:hidden}
.key-face::before{content:"";position:absolute;top:0;left:0;right:0;height:45%;background:linear-gradient(180deg,rgba(255,255,255,.55),rgba(255,255,255,0));border-radius:14px 14px 40% 40%/14px 14px 100% 100%}
.key-side{position:absolute;left:2px;right:2px;bottom:0;height:7px;border-radius:0 0 12px 12px;background:linear-gradient(180deg,#6c5cc4,#4c3f8f)}
.key-btn:active .key-face{transform:translateY(-1px)}
.key-btn:hover .key-face{transform:translateY(-8px)}
.key-btn:hover:active .key-face{transform:translateY(-1px)}
</style></head>
<body data-cf-keep-dark><div class="stage"><span class="kicker">PRESS THE KEY</span>
<button class="key-btn"><span class="key-face">Confirm order</span><span class="key-side"></span></button></div>
</body></html>`,

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
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.deck{position:relative;width:220px;height:150px}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700;display:block;text-align:center;margin-bottom:16px}
.card{position:absolute;inset:0;border:1px solid var(--line);border-radius:16px;background:linear-gradient(135deg,#1c1930,#0d0d12);display:grid;place-items:center;color:#eee9f8;font-size:12px;font-weight:700;cursor:grab;box-shadow:0 20px 40px -16px rgba(0,0,0,.6);transition:transform .3s ease,opacity .3s ease}
.card:last-child{background:linear-gradient(135deg,#221f38,#141019);box-shadow:0 24px 50px -14px rgba(155,138,255,.3)}
</style></head>
<body data-cf-keep-dark><div><span class="kicker">DRAG THE TOP CARD AWAY</span><div class="deck" id="deck">
<div class="card" style="transform:translateY(10px) scale(.95)">Card 3</div>
<div class="card" style="transform:translateY(5px) scale(.98)">Card 2</div>
<div class="card" id="top">Card 1 — drag me</div>
</div></div>
<script>
const deck=document.getElementById("deck");
function attach(){
  const top=deck.querySelector(".card:last-child");
  let down=false,sx=0,dx=0;
  top.addEventListener("pointerdown",function(e){down=true;sx=e.clientX;top.style.transition="none"});
  window.addEventListener("pointermove",function(e){if(!down)return;dx=e.clientX-sx;top.style.transform="translateX("+dx+"px) rotate("+(dx/12)+"deg)"});
  window.addEventListener("pointerup",function(){
    if(!down)return;down=false;top.style.transition="transform .3s ease, opacity .3s ease";
    if(Math.abs(dx)>90){top.style.transform="translateX("+(dx*4)+"px) rotate("+(dx/6)+"deg)";top.style.opacity="0";setTimeout(function(){top.remove();if(deck.children.length)attach()},280)}
    else{top.style.transform="translateX(0) rotate(0)"}
  });
}
attach();
</script>
</body></html>`,

  "notification-toast-card": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Notification Toast Card</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.toast{position:relative;width:300px;padding:14px 16px;border:1px solid var(--line);border-radius:14px;background:#111017;overflow:hidden;box-shadow:0 20px 50px -20px rgba(0,0,0,.6);display:flex;gap:12px;align-items:flex-start;animation:slideIn .4s cubic-bezier(.2,.8,.2,1)}
.toast-icon{width:28px;height:28px;border-radius:9px;background:linear-gradient(135deg,#d7d0ff,#9b8aff);display:grid;place-items:center;color:#0a090f;font-weight:800;font-size:13px;flex:none}
.toast-body{flex:1;min-width:0}
.toast-row{display:flex;justify-content:space-between;align-items:center;gap:10px}
.toast-row b{color:#f7f5fb;font-size:12px}
.toast-row button{border:0;background:none;color:var(--lav);font-size:11px;font-weight:700;cursor:pointer}
.toast p{margin:4px 0 10px;color:#a49dbc;font-size:11px}
.toast-bar-track{height:3px;border-radius:3px;background:#1e1c27;overflow:hidden}
.toast-bar{height:100%;background:linear-gradient(90deg,#d7d0ff,#9b8aff);width:100%;animation:drain 4s linear forwards}
@keyframes drain{to{width:0%}}
@keyframes slideIn{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:none}}
</style></head>
<body data-cf-keep-dark><div class="toast"><div class="toast-icon">✕</div><div class="toast-body"><div class="toast-row"><b>File deleted</b><button id="undo">Undo</button></div><p>project-plan.pdf was moved to trash.</p><div class="toast-bar-track"><div class="toast-bar" id="bar"></div></div></div></div>
<script>document.getElementById("undo").addEventListener("click",function(){const bar=document.getElementById("bar");bar.style.animation="none";bar.style.width="100%"});</script>
</body></html>`,

  "pinned-metric-card": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Pinned Metric Card</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.card{position:relative;width:230px;padding:20px;border:1px solid var(--line);border-radius:16px;background:#0d0d12;overflow:hidden;box-shadow:0 20px 50px -20px rgba(0,0,0,.6)}
.card::before{content:"";position:absolute;top:-40%;right:-30%;width:200px;height:200px;background:radial-gradient(circle,rgba(155,138,255,.18),transparent 70%)}
.card b{position:relative;display:block;color:#817d8a;font-size:10px;letter-spacing:1px}
.card strong{position:relative;display:block;font-size:30px;color:#f7f5fb;margin:8px 0}
svg{position:relative;display:block}
polyline{fill:none;stroke:#c4b5fd;stroke-width:2;stroke-dasharray:220;stroke-dashoffset:220;animation:draw 1.4s ease .2s forwards}
@keyframes draw{to{stroke-dashoffset:0}}
</style></head>
<body data-cf-keep-dark><div class="card"><b>WEEKLY ACTIVE USERS</b><strong id="num">0</strong>
<svg width="190" height="40" viewBox="0 0 190 40"><defs><linearGradient id="area" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#c4b5fd" stop-opacity=".35"/><stop offset="100%" stop-color="#c4b5fd" stop-opacity="0"/></linearGradient></defs>
<polygon points="0,30 25,24 50,28 75,14 100,18 125,8 150,12 175,3 175,40 0,40" fill="url(#area)"/>
<polyline points="0,30 25,24 50,28 75,14 100,18 125,8 150,12 175,3"/></svg></div>
<script>
let v=0;const num=document.getElementById("num");
const t=setInterval(function(){v+=310;num.textContent=v.toLocaleString();if(v>=18400){v=18400;num.textContent=v.toLocaleString();clearInterval(t)}},25);
</script>
</body></html>`,

  "credit-card-3d": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Credit Card 3D</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:"Space Grotesk",Inter,sans-serif;perspective:900px}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700;display:block;text-align:center;margin-bottom:16px}
.card3d{position:relative;width:280px;height:175px;cursor:pointer;transform-style:preserve-3d;transition:transform .6s cubic-bezier(.2,.8,.2,1);filter:drop-shadow(0 20px 40px rgba(0,0,0,.5))}
.card3d.flip{transform:rotateY(180deg)}
.face{position:absolute;inset:0;border-radius:16px;backface-visibility:hidden;padding:20px;color:#fff;overflow:hidden}
.face::before{content:"";position:absolute;top:-60%;left:-20%;width:140%;height:140%;background:linear-gradient(115deg,transparent 40%,rgba(255,255,255,.16) 50%,transparent 60%);transform:rotate(8deg)}
.front{background:linear-gradient(135deg,#4a3f80,#171325);display:flex;flex-direction:column;justify-content:space-between}
.chip{width:34px;height:24px;border-radius:5px;background:linear-gradient(135deg,#e7d9a8,#b89a4f)}
.front b{font-size:15px;letter-spacing:2px}
.front span{font-size:9px;color:#a49dbc}
.back{background:linear-gradient(135deg,#171325,#4a3f80);transform:rotateY(180deg)}
.stripe{height:34px;background:#0a090f;margin-top:16px}
.cvv{margin:16px;padding:8px 10px;background:#fff;color:#111;font-size:11px;border-radius:4px;text-align:right}
</style></head>
<body data-cf-keep-dark><div><span class="kicker">CLICK THE CARD TO FLIP</span>
<div class="card3d" id="card"><div class="face front"><div class="chip"></div><div><b>•••• •••• •••• 4821</b><br><span>VALID THRU 09/28</span></div></div><div class="face back"><div class="stripe"></div><div class="cvv">CVV 042</div></div></div></div>
<script>document.getElementById("card").addEventListener("click",function(e){e.currentTarget.classList.toggle("flip")});</script>
</body></html>`,

  "timeline-milestone-card": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Timeline Milestone Card</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.card{width:260px;padding:20px;border:1px solid var(--line);border-radius:16px;background:#0d0d12;box-shadow:0 20px 50px -20px rgba(0,0,0,.6)}
.card b{display:block;color:#f7f5fb;font-size:13px;margin-bottom:14px}
.step{display:flex;gap:10px;align-items:flex-start;position:relative;padding-bottom:16px}
.step:last-child{padding-bottom:0}
.step::before{content:"";position:absolute;left:8px;top:20px;bottom:-4px;width:1px;background:var(--line)}
.step.done::before{background:linear-gradient(180deg,#5fd4a1,var(--line))}
.step:last-child::before{display:none}
.dot{width:17px;height:17px;border-radius:50%;border:1px solid var(--line);display:grid;place-items:center;flex:none;font-size:9px;color:#050507;background:#1c1a24;transition:background .3s}
.step.done .dot{background:linear-gradient(135deg,#7fe0ac,#41b878);color:#0a090f}
.step.active .dot{background:linear-gradient(135deg,#d7d0ff,#9b8aff);color:#0a090f;box-shadow:0 0 0 5px rgba(196,181,253,.2);animation:pulse 1.6s ease-in-out infinite}
.step span{font-size:11px;color:#c9c4d6;padding-top:1px}
@keyframes pulse{0%,100%{box-shadow:0 0 0 5px rgba(196,181,253,.2)}50%{box-shadow:0 0 0 9px rgba(196,181,253,.08)}}
</style></head>
<body data-cf-keep-dark><div class="card"><b>Onboarding progress</b>
<div class="step done"><div class="dot">✓</div><span>Account created</span></div>
<div class="step done"><div class="dot">✓</div><span>Workspace connected</span></div>
<div class="step active"><div class="dot">3</div><span>Invite your team</span></div>
</div>
</body></html>`,

  "sliding-price-ladder": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Sliding Price Ladder</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.stage{width:280px}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700;display:block;margin-bottom:14px}
.ladder{position:relative;border:1px solid var(--line);border-radius:16px;background:#0d0d12;padding:22px;text-align:center;overflow:hidden;box-shadow:0 20px 50px -22px rgba(0,0,0,.6);transition:box-shadow .3s}
.ladder::before{content:"";position:absolute;top:-40%;left:50%;transform:translateX(-50%);width:200px;height:200px;background:radial-gradient(circle,rgba(155,138,255,.16),transparent 70%)}
.ladder strong{position:relative;display:block;font-size:32px;background:linear-gradient(135deg,#f7f5fb,#c4b5fd);-webkit-background-clip:text;background-clip:text;color:transparent;transition:transform .2s}
.ladder b{position:relative;display:block;color:#817d8a;font-size:11px;margin-top:4px}
input[type=range]{width:100%;margin-top:18px;accent-color:#c4b5fd;position:relative}
.steps{position:relative;display:flex;justify-content:space-between;color:#5f5c68;font-size:9px;margin-top:6px}
</style></head>
<body data-cf-keep-dark><div class="stage"><span class="kicker">DRAG BETWEEN TIERS</span>
<div class="ladder"><strong id="price">$19</strong><b id="tier">STARTER</b>
<input type="range" id="slider" min="0" max="2" step="1" value="0">
<div class="steps"><span>Starter</span><span>Growth</span><span>Scale</span></div></div></div>
<script>
const tiers=[{p:"$19",t:"STARTER"},{p:"$49",t:"GROWTH"},{p:"$99",t:"SCALE"}];
const slider=document.getElementById("slider"),price=document.getElementById("price"),tier=document.getElementById("tier");
slider.addEventListener("input",function(){const x=tiers[Number(slider.value)];price.textContent=x.p;tier.textContent=x.t;price.style.transform="scale(1.1)";setTimeout(function(){price.style.transform="scale(1)"},150)});
</script>
</body></html>`,

  "feature-checklist-pricing-card": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Feature Checklist Pricing Card</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.card{width:250px;padding:22px;border:1px solid var(--line);border-radius:16px;background:#0d0d12;box-shadow:0 20px 50px -22px rgba(0,0,0,.6)}
.card b{display:block;font-size:11px;color:#817d8a}
.card strong{display:block;font-size:28px;color:#f7f5fb;margin:6px 0 14px}
.feat{display:flex;align-items:center;gap:8px;padding:7px 0;color:#c9c4d6;font-size:11px;position:relative;transition:color .2s}
.feat:hover{color:#eee9f8}
.feat i{width:15px;height:15px;border-radius:50%;background:linear-gradient(135deg,#173523,#0f1a12);border:1px solid #2b5a3c;display:grid;place-items:center;font-size:8px;color:#5fd4a1;flex:none;font-style:normal}
.tip{display:none;position:absolute;left:24px;top:26px;padding:6px 8px;border:1px solid var(--line);border-radius:7px;background:#17131f;color:#a49dbc;font-size:9px;z-index:2;width:170px;box-shadow:0 12px 30px -14px rgba(0,0,0,.6)}
.feat:hover .tip{display:block}
</style></head>
<body data-cf-keep-dark><div class="card"><b>PRO PLAN</b><strong>$29/mo</strong>
<div class="feat"><i>✓</i>Unlimited projects<div class="tip">No cap on active or archived projects.</div></div>
<div class="feat"><i>✓</i>Priority support<div class="tip">Average first response under 2 hours.</div></div>
<div class="feat"><i>✓</i>Advanced analytics<div class="tip">Cohort, funnel and retention reports included.</div></div>
</div>
</body></html>`,

  "team-seats-pricing-calculator": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Team Seats Pricing Calculator</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.card{width:250px;padding:22px;border:1px solid var(--line);border-radius:16px;background:#0d0d12;text-align:center;box-shadow:0 20px 50px -22px rgba(0,0,0,.6)}
.card b{display:block;color:#817d8a;font-size:11px;margin-bottom:10px}
.stepper{display:flex;align-items:center;justify-content:center;gap:14px}
.stepper button{width:32px;height:32px;border:1px solid var(--line);border-radius:8px;background:#111017;color:#eee9f8;font-size:16px;cursor:pointer;transition:transform .15s cubic-bezier(.34,1.56,.64,1),border-color .2s}
.stepper button:hover{border-color:#544c67}
.stepper button:active{transform:scale(.9)}
.stepper strong{font-size:20px;color:#f7f5fb;min-width:30px}
.total{margin-top:16px;font-size:26px;font-weight:800;background:linear-gradient(135deg,#f7f5fb,#c4b5fd);-webkit-background-clip:text;background-clip:text;color:transparent;transition:transform .15s}
.per{color:#5f5c68;font-size:10px}
</style></head>
<body data-cf-keep-dark><div class="card"><b>TEAM SEATS</b>
<div class="stepper"><button id="dec">−</button><strong id="seats">5</strong><button id="inc">+</button></div>
<div class="total" id="total">$60</div><div class="per">$12 / seat / month</div></div>
<script>
let n=5;const seats=document.getElementById("seats"),total=document.getElementById("total");
function render(){seats.textContent=n;total.textContent="$"+(n*12);total.style.transform="scale(1.08)";setTimeout(function(){total.style.transform="scale(1)"},120)}
document.getElementById("inc").addEventListener("click",function(){n=Math.min(50,n+1);render()});
document.getElementById("dec").addEventListener("click",function(){n=Math.max(1,n-1);render()});
</script>
</body></html>`,

  "limited-time-pricing-card": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Limited Time Pricing Card</title><style>
:root{--bg:#050507}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.card{position:relative;width:250px;padding:22px;border:1px solid #4c3f2a;border-radius:16px;background:#181307;overflow:hidden;box-shadow:0 20px 50px -20px rgba(240,198,116,.2)}
.card::before{content:"";position:absolute;top:-50%;right:-20%;width:180px;height:180px;background:radial-gradient(circle,rgba(240,198,116,.16),transparent 70%)}
.badge{position:relative;display:inline-block;padding:4px 9px;border-radius:999px;background:linear-gradient(135deg,#4a3812,#3a2c10);color:#f0c674;font-size:9px;font-weight:700;box-shadow:0 0 12px rgba(240,198,116,.2)}
.card strong{position:relative;display:block;font-size:30px;color:#fff;margin:10px 0 4px}
.card s{color:#7a7466;font-size:12px}
.urgency-track{position:relative;height:4px;border-radius:3px;background:#2a2313;margin-top:16px;overflow:hidden}
.urgency-fill{height:100%;width:70%;background:linear-gradient(90deg,#f0c674,#f7db9c);box-shadow:0 0 10px rgba(240,198,116,.6);animation:shrink 25s linear forwards}
@keyframes shrink{to{width:0%}}
.card small{position:relative;display:block;margin-top:8px;color:#9c9482;font-size:9px}
</style></head>
<body data-cf-keep-dark><div class="card"><span class="badge">LAUNCH WEEK OFFER</span><strong>$39<s style="margin-left:8px">$79</s></strong>
<div class="urgency-track"><div class="urgency-fill"></div></div><small>Offer window closing</small></div>
</body></html>`,

  "enterprise-contact-pricing-card": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Enterprise Contact Pricing Card</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.card{width:270px;padding:22px;border:1px solid var(--line);border-radius:16px;background:#0d0d12;box-shadow:0 20px 50px -22px rgba(0,0,0,.6)}
.card b{display:block;color:#817d8a;font-size:11px}
.card strong{display:block;font-size:22px;color:#f7f5fb;margin:8px 0 14px}
.card button{width:100%;padding:11px;border:0;border-radius:10px;background:linear-gradient(135deg,#d7d0ff,#9b8aff);color:#0a090f;font-weight:800;font-size:11px;cursor:pointer;box-shadow:0 10px 24px -10px rgba(155,138,255,.6);transition:transform .15s cubic-bezier(.34,1.56,.64,1)}
.card button:active{transform:scale(.97)}
.quote-form{max-height:0;overflow:hidden;transition:max-height .35s cubic-bezier(.2,.8,.2,1)}
.quote-form.open{max-height:120px;margin-top:12px}
.quote-form input{width:100%;padding:9px;margin-top:8px;border:1px solid var(--line);border-radius:8px;background:#111017;color:#fff;font-size:11px;outline:0;transition:border-color .25s,box-shadow .25s}
.quote-form input:focus{border-color:#6d5f93;box-shadow:0 0 0 3px rgba(196,181,253,.2)}
</style></head>
<body data-cf-keep-dark><div class="card"><b>ENTERPRISE</b><strong>Custom pricing</strong>
<button id="toggle">Request a quote</button>
<div class="quote-form" id="form"><input placeholder="Work email"><input placeholder="Team size"></div></div>
<script>document.getElementById("toggle").addEventListener("click",function(){document.getElementById("form").classList.toggle("open")});</script>
</body></html>`,

  "addon-bundle-pricing-card": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Add-on Bundle Pricing Card</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.card{width:260px;padding:22px;border:1px solid var(--line);border-radius:16px;background:#0d0d12;box-shadow:0 20px 50px -22px rgba(0,0,0,.6)}
.card b{display:block;color:#817d8a;font-size:11px;margin-bottom:8px}
.addon{display:flex;justify-content:space-between;align-items:center;padding:9px 0;border-top:1px solid var(--line);color:#c9c4d6;font-size:11px;transition:color .2s}
.addon:first-of-type{border-top:0}
.addon:hover{color:#eee9f8}
.addon input{accent-color:#c4b5fd;width:15px;height:15px}
.total{display:flex;justify-content:space-between;margin-top:14px;padding-top:14px;border-top:1px solid var(--line);font-size:16px;font-weight:800;background:linear-gradient(135deg,#f7f5fb,#c4b5fd);-webkit-background-clip:text;background-clip:text;color:transparent}
</style></head>
<body data-cf-keep-dark><div class="card"><b>BASE PLAN — $19/mo</b>
<label class="addon"><span>+ Extra storage ($5)</span><input type="checkbox" data-p="5"></label>
<label class="addon"><span>+ Advanced API access ($9)</span><input type="checkbox" data-p="9"></label>
<label class="addon"><span>+ Priority support ($7)</span><input type="checkbox" data-p="7"></label>
<div class="total"><span>Total</span><span id="total">$19</span></div></div>
<script>
const boxes=[...document.querySelectorAll(".addon input")],total=document.getElementById("total");
boxes.forEach(function(b){b.addEventListener("change",function(){const sum=19+boxes.filter(function(x){return x.checked}).reduce(function(s,x){return s+Number(x.dataset.p)},0);total.textContent="$"+sum})});
</script>
</body></html>`,

  "drag-reorder-widgets": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Drag Reorder Widgets</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;display:grid;place-items:center}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700;display:block;text-align:center;margin-bottom:14px}
.widgets{display:grid;gap:10px;width:240px}
.w{padding:14px;border:1px solid var(--line);border-radius:12px;background:#111017;color:#eee9f8;font-size:11px;display:flex;justify-content:space-between;align-items:center;cursor:grab;box-shadow:0 12px 30px -18px rgba(0,0,0,.6);transition:transform .2s cubic-bezier(.2,.8,.2,1),box-shadow .2s,border-color .2s}
.w:hover{border-color:#544c67;box-shadow:0 16px 34px -16px rgba(155,138,255,.3)}
.w.drag{opacity:.4;transform:scale(.98)}
.w b{background:linear-gradient(90deg,#eee9f8,#c4b5fd);-webkit-background-clip:text;background-clip:text;color:transparent}
.grip{color:#4a4657;font-size:10px;letter-spacing:2px;margin-right:8px}
</style></head>
<body data-cf-keep-dark><div><span class="kicker">DRAG A ROW TO REORDER</span>
<div class="widgets" id="list">
<div class="w" draggable="true"><span><i class="grip">⠿</i>Revenue</span><b>$48.4K</b></div>
<div class="w" draggable="true"><span><i class="grip">⠿</i>Conversion</span><b>8.7%</b></div>
<div class="w" draggable="true"><span><i class="grip">⠿</i>Active users</span><b>12.8K</b></div>
</div></div>
<script>
const list=document.getElementById("list");let dragged;
list.addEventListener("dragstart",function(e){dragged=e.target;e.target.classList.add("drag")});
list.addEventListener("dragend",function(e){e.target.classList.remove("drag")});
list.addEventListener("dragover",function(e){
  e.preventDefault();
  const after=[...list.children].find(function(el){return el!==dragged&&e.clientY<el.getBoundingClientRect().top+el.offsetHeight/2});
  list.insertBefore(dragged, after||null);
});
</script>
</body></html>`,

  "team-members-status-panel": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Team Members Status Panel</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.stage{display:grid;gap:22px;place-items:center;padding:40px}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.panel-wrap{position:relative}
.panel-wrap::before{content:"";position:absolute;inset:-16px;border-radius:26px;background:radial-gradient(circle,rgba(196,181,253,.25),transparent 70%);filter:blur(16px)}
.panel{position:relative;width:250px;border:1px solid var(--line);border-radius:16px;background:#0d0d12;overflow:hidden;box-shadow:0 20px 50px -20px rgba(0,0,0,.65)}
.panel h4{margin:0;padding:12px 14px;font-size:10px;color:#817d8a;letter-spacing:1px;border-bottom:1px solid var(--line)}
.member{display:flex;align-items:center;gap:10px;padding:11px 14px;border-bottom:1px solid var(--line);transition:background .2s}
.member:hover{background:#12101a}
.member:last-child{border-bottom:0}
.avatar{position:relative;width:30px;height:30px;border-radius:50%;background:linear-gradient(135deg,#302650,#1a1526);display:grid;place-items:center;color:#c4b5fd;font-size:10px;font-weight:800;flex:none;box-shadow:inset 0 0 0 1px rgba(196,181,253,.2)}
.dot{position:absolute;right:-1px;bottom:-1px;width:9px;height:9px;border-radius:50%;border:2px solid #0d0d12}
.dot.online{background:#5fd4a1;box-shadow:0 0 8px #5fd4a1;animation:pulse 2s ease-in-out infinite}
.dot.away{background:#e8b563}.dot.offline{background:#4a4657}
.member div b{display:block;font-size:11px;color:#eee9f8}
.member div span{font-size:9px;color:#6f6c77}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.5}}
</style></head>
<body data-cf-keep-dark><div class="stage"><span class="kicker">LIVE TEAM STATUS</span>
<div class="panel-wrap"><div class="panel"><h4>TEAM</h4>
<div class="member"><div class="avatar">AK<span class="dot online"></span></div><div><b>Aria Kim</b><span>Active now</span></div></div>
<div class="member"><div class="avatar">TR<span class="dot away"></span></div><div><b>Theo Reyes</b><span>Away · 12m</span></div></div>
<div class="member"><div class="avatar">NS<span class="dot offline"></span></div><div><b>Nia Santos</b><span>Offline</span></div></div>
</div></div></div>
</body></html>`,

  "goal-progress-tracker": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Goal Progress Tracker</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.stage{display:grid;gap:22px;place-items:center;padding:40px}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.card-wrap{position:relative}
.card-wrap::before{content:"";position:absolute;inset:-16px;border-radius:26px;background:radial-gradient(circle,rgba(196,181,253,.28),transparent 70%);filter:blur(16px)}
.card{position:relative;width:250px;padding:20px;border:1px solid var(--line);border-radius:16px;background:#0d0d12;box-shadow:0 20px 50px -20px rgba(0,0,0,.65)}
.card h4{margin:0 0 16px;font-size:11px;color:#817d8a;letter-spacing:.5px}
.goal{margin-bottom:14px}
.goal:last-child{margin-bottom:0}
.goal-row{display:flex;justify-content:space-between;font-size:10px;color:#c9c4d6;margin-bottom:6px}
.goal-row b{color:#eee9f8}
.track{height:6px;border-radius:4px;background:#1c1a24;overflow:hidden;box-shadow:inset 0 1px 2px rgba(0,0,0,.5)}
.fill{position:relative;height:100%;border-radius:4px;background:linear-gradient(90deg,#9b8aff,#d7d0ff);width:0;transition:width 1.1s cubic-bezier(.2,.8,.2,1);box-shadow:0 0 10px rgba(155,138,255,.6)}
</style></head>
<body data-cf-keep-dark><div class="stage"><span class="kicker">TRACKING THIS QUARTER</span>
<div class="card-wrap"><div class="card"><h4>QUARTERLY GOALS</h4>
<div class="goal"><div class="goal-row"><span>New signups</span><b>82%</b></div><div class="track"><div class="fill" data-w="82"></div></div></div>
<div class="goal"><div class="goal-row"><span>Revenue target</span><b>61%</b></div><div class="track"><div class="fill" data-w="61"></div></div></div>
<div class="goal"><div class="goal-row"><span>Churn reduction</span><b>45%</b></div><div class="track"><div class="fill" data-w="45"></div></div></div>
</div></div></div>
<script>requestAnimationFrame(()=>document.querySelectorAll(".fill").forEach(f=>f.style.width=f.dataset.w+"%"));</script>
</body></html>`,

  "calendar-heatmap-widget": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Calendar Heatmap Widget</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.stage{display:grid;gap:22px;place-items:center;padding:40px}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.card-wrap{position:relative}
.card-wrap::before{content:"";position:absolute;inset:-16px;border-radius:24px;background:radial-gradient(circle,rgba(196,181,253,.28),transparent 70%);filter:blur(16px)}
.card{position:relative;padding:20px;border:1px solid var(--line);border-radius:16px;background:#0d0d12;box-shadow:0 20px 50px -20px rgba(0,0,0,.65)}
.card h4{margin:0 0 12px;font-size:11px;color:#817d8a}
.grid{display:grid;grid-template-columns:repeat(13,10px);gap:3px;position:relative}
.cell{width:10px;height:10px;border-radius:2px;background:#17131f;transition:transform .2s cubic-bezier(.34,1.56,.64,1)}
.cell:hover{transform:scale(1.35)}
.cell[data-l="1"]{background:#2c2440}
.cell[data-l="2"]{background:#463584}
.cell[data-l="3"]{background:#6d55c9}
.cell[data-l="4"]{background:linear-gradient(135deg,#d7d0ff,#9b8aff);box-shadow:0 0 8px rgba(155,138,255,.7)}
.tip{position:absolute;display:none;padding:5px 8px;border-radius:7px;background:#17131f;border:1px solid var(--line);color:#eee9f8;font-size:9px;transform:translate(-50%,-130%);white-space:nowrap;box-shadow:0 10px 24px -10px rgba(0,0,0,.7)}
</style></head>
<body data-cf-keep-dark><div class="stage"><span class="kicker">HOVER A DAY FOR DETAIL</span>
<div class="card-wrap"><div class="card"><h4>CONTRIBUTION ACTIVITY</h4><div class="grid" id="grid"></div><div class="tip" id="tip"></div></div></div></div>
<script>
const grid=document.getElementById("grid"),tip=document.getElementById("tip");
for(let i=0;i<65;i++){
  const cell=document.createElement("div");cell.className="cell";
  const level=Math.floor(Math.random()*5);cell.dataset.l=level;
  cell.addEventListener("pointerenter",e=>{tip.style.display="block";tip.style.left=(cell.offsetLeft+5)+"px";tip.style.top=cell.offsetTop+"px";tip.textContent=level+" commits"});
  cell.addEventListener("pointerleave",()=>tip.style.display="none");
  grid.appendChild(cell);
}
</script>
</body></html>`,

  "revenue-comparison-widget": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Revenue Comparison Widget</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.card{position:relative;width:250px;padding:20px;border:1px solid var(--line);border-radius:16px;background:#0d0d12;overflow:hidden;box-shadow:0 20px 50px -20px rgba(0,0,0,.6)}
.card::before{content:"";position:absolute;top:-40%;left:-20%;width:180px;height:180px;background:radial-gradient(circle,rgba(155,138,255,.16),transparent 70%)}
.head{position:relative;display:flex;justify-content:space-between;align-items:center;margin-bottom:14px}
.head b{color:#817d8a;font-size:11px}
.delta{padding:3px 8px;border-radius:999px;background:linear-gradient(135deg,#173523,#0f1a12);border:1px solid #2b5a3c;color:#a9e6b4;font-size:9px;font-weight:700}
.bars{position:relative;display:flex;align-items:end;gap:24px;height:80px;padding:0 10px}
.bar-col{display:grid;gap:6px;justify-items:center}
.bar-col i{width:34px;border-radius:6px 6px 0 0;display:block;height:0;transition:height 1s cubic-bezier(.2,.8,.2,1)}
.bar-col .last{background:#2c2440}
.bar-col .this{background:linear-gradient(180deg,#e7e2ff,#9b8aff 60%,#6d5cc4);box-shadow:0 -8px 16px -10px rgba(155,138,255,.6)}
.bar-col span{font-size:9px;color:#6f6c77}
</style></head>
<body data-cf-keep-dark><div class="card"><div class="head"><b>REVENUE, MONTH OVER MONTH</b><span class="delta">+24%</span></div>
<div class="bars">
<div class="bar-col"><i class="last" id="b1"></i><span>Aug</span></div>
<div class="bar-col"><i class="this" id="b2"></i><span>Sep</span></div>
</div></div>
<script>
requestAnimationFrame(function(){document.getElementById("b1").style.height="46px";document.getElementById("b2").style.height="70px"});
</script>
</body></html>`,

  "quick-actions-command-bar": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Quick Actions Command Bar</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.stage{display:grid;gap:22px;place-items:center;padding:40px}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.bar-wrap{position:relative}
.bar-wrap::before{content:"";position:absolute;inset:-16px;border-radius:24px;background:radial-gradient(circle,rgba(196,181,253,.3),transparent 70%);filter:blur(16px);opacity:0;transition:opacity .4s}
.bar-wrap.active::before{opacity:1}
.bar{position:relative;display:flex;align-items:center;gap:6px;padding:8px;border:1px solid var(--line);border-radius:14px;background:#0d0d12;box-shadow:0 20px 50px -20px rgba(0,0,0,.6);transition:border-color .3s}
.bar-wrap.active .bar{border-color:#544c67}
.bar button{width:34px;height:34px;display:grid;place-items:center;border:0;border-radius:9px;background:#111017;color:#9d94b0;font-size:14px;cursor:pointer;transition:transform .15s cubic-bezier(.34,1.56,.64,1),color .2s,background .2s}
.bar button:hover{color:#0a090f;background:linear-gradient(135deg,#d7d0ff,#9b8aff);transform:translateY(-1px)}
.bar input{border:0;background:transparent;color:#fff;font-size:11px;outline:0;padding:0 6px;width:130px}
.bar input::placeholder{color:#6f6c77}
.results{position:absolute;top:52px;left:0;right:0;border:1px solid var(--line);border-radius:12px;background:#0d0d12;box-shadow:0 20px 50px -20px rgba(0,0,0,.7);overflow:hidden;opacity:0;transform:translateY(-6px) scale(.98);pointer-events:none;transition:opacity .25s cubic-bezier(.2,.8,.2,1),transform .25s cubic-bezier(.2,.8,.2,1)}
.bar-wrap.active .results{opacity:1;transform:none;pointer-events:auto}
.results div{padding:10px 12px;font-size:11px;color:#c9c4d6;transition:background .15s,color .15s,padding-left .15s}
.results div:hover{background:#17131f;color:var(--lav);padding-left:16px}
</style></head>
<body data-cf-keep-dark><div class="stage"><span class="kicker">FOCUS TO SEARCH ACTIONS</span>
<div class="bar-wrap" id="wrap"><div class="bar" id="bar"><button title="New">+</button><button title="Filter">⚲</button><input id="q" placeholder="Quick action…">
<div class="results"><div>Create report</div><div>Invite teammate</div><div>Export CSV</div></div></div></div></div>
<script>
const wrap=document.getElementById("wrap"),q=document.getElementById("q");
q.addEventListener("focus",()=>wrap.classList.add("active"));
q.addEventListener("blur",()=>setTimeout(()=>wrap.classList.remove("active"),150));
</script>
</body></html>`,

  "parallax-tilt-hero": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Parallax Tilt Hero</title><style>
:root{--bg:#050507}
*{box-sizing:border-box}body{margin:0;min-height:100vh;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;display:grid;place-items:center;perspective:1000px}
.hero{width:min(420px,90vw);padding:40px;text-align:center;transform-style:preserve-3d;transition:transform .1s ease-out}
.kicker{color:#9d94b0;font-size:10px;letter-spacing:2px;font-weight:700;transform:translateZ(30px)}
h1{color:#f7f5fb;font-size:30px;margin:14px 0;transform:translateZ(50px)}
.card{margin-top:20px;padding:22px;border:1px solid #272632;border-radius:16px;background:linear-gradient(135deg,#171325,#0d0d12);transform:translateZ(70px);box-shadow:0 30px 60px rgba(0,0,0,.4)}
.card span{color:#c4b5fd;font-size:11px}
</style></head>
<body data-cf-keep-dark><div class="hero" id="hero"><span class="kicker">TILT-REACTIVE INTERFACE</span><h1>Depth that responds to you.</h1><div class="card"><span>Move your cursor to feel the layers shift.</span></div></div>
<script>
const hero=document.getElementById("hero");
document.addEventListener("pointermove",e=>{
  const rx=(e.clientY/innerHeight-.5)*-10,ry=(e.clientX/innerWidth-.5)*10;
  hero.style.transform=\`rotateX(\${rx}deg) rotateY(\${ry}deg)\`;
});
</script>
</body></html>`,

  "scroll-driven-hero": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Scroll Driven Hero</title><style>
:root{--bg:#050507}
*{box-sizing:border-box}body{margin:0;background:var(--bg);font-family:"Space Grotesk",Inter,sans-serif}
.spacer{height:60vh}
.hero{min-height:100vh;display:grid;place-items:center;text-align:center;position:sticky;top:0}
.word{display:inline-block;color:#f7f5fb;font-size:38px;font-weight:800;transition:transform .1s linear,opacity .1s linear;text-shadow:0 0 30px rgba(196,181,253,.2)}
</style></head>
<body data-cf-keep-dark><div class="hero"><div id="line">
<span class="word">Design.</span> <span class="word">Ship.</span> <span class="word">Repeat.</span>
</div></div><div class="spacer"></div>
<script>
const words=[...document.querySelectorAll(".word")];
addEventListener("scroll",()=>{
  const p=Math.min(1,scrollY/300);
  words.forEach((w,i)=>{const d=Math.max(0,p-i*.15);w.style.transform=\`translateY(\${-d*40}px)\`;w.style.opacity=1-d});
});
</script>
</body></html>`,

  "video-frame-hero": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Video Frame Hero</title><style>
:root{--bg:#050507;--line:#272632}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:30px}
.frame{width:min(460px,100%);border:1px solid var(--line);border-radius:18px;overflow:hidden;background:linear-gradient(135deg,#191527,#0a0a0f);box-shadow:0 30px 70px -24px rgba(0,0,0,.7)}
.screen{height:230px;position:relative;display:grid;place-items:center;background:radial-gradient(circle at 50% 40%,rgba(155,138,255,.14),transparent 60%)}
.play{width:56px;height:56px;border-radius:50%;background:rgba(255,255,255,.92);display:grid;place-items:center;cursor:pointer;color:#0a090f;font-size:16px;box-shadow:0 10px 30px -8px rgba(0,0,0,.5);transition:transform .2s cubic-bezier(.34,1.56,.64,1)}
.play:hover{transform:scale(1.08)}
.controls{display:flex;align-items:center;gap:10px;padding:12px 16px;border-top:1px solid var(--line)}
.scrub{flex:1;height:3px;border-radius:2px;background:#252230;overflow:hidden}
.scrub i{display:block;width:34%;height:100%;background:linear-gradient(90deg,#9b8aff,#d7d0ff);box-shadow:0 0 8px rgba(196,181,253,.5);border-radius:2px}
.time{color:#77737f;font-size:9px}
</style></head>
<body data-cf-keep-dark><div class="frame"><div class="screen"><span class="play">▶</span></div><div class="controls"><div class="scrub"><i></i></div><span class="time">1:12 / 3:20</span></div></div>
</body></html>`,

  "3d-cube-rotator-hero": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>3D Cube Rotator Hero</title><style>
:root{--bg:#050507}
*{box-sizing:border-box}body{margin:0;min-height:100vh;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;display:grid;place-items:center;perspective:800px}
.cube-wrap{width:140px;height:140px;position:relative;transform-style:preserve-3d;animation:spin 9s linear infinite}
.cube-wrap:hover{animation-play-state:paused}
.face{position:absolute;inset:0;border:1px solid rgba(196,181,253,.3);border-radius:10px;background:linear-gradient(135deg,#171325,#0d0d12);display:grid;place-items:center;color:#c4b5fd;font-size:11px;font-weight:700}
.f1{transform:rotateY(0deg) translateZ(70px)}
.f2{transform:rotateY(90deg) translateZ(70px)}
.f3{transform:rotateY(180deg) translateZ(70px)}
.f4{transform:rotateY(-90deg) translateZ(70px)}
@keyframes spin{to{transform:rotateY(360deg)}}
.kicker{position:absolute;top:40px;color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
</style></head>
<body data-cf-keep-dark><span class="kicker">HOVER TO PAUSE</span>
<div class="cube-wrap"><div class="face f1">Design</div><div class="face f2">Build</div><div class="face f3">Test</div><div class="face f4">Ship</div></div>
</body></html>`,

  "chat-bubble-hero": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Chat Bubble Hero</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;display:grid;place-items:center;padding:30px;position:relative;overflow:hidden}
body::before{content:"";position:absolute;inset:-20%;background:radial-gradient(circle at 70% 30%,rgba(155,138,255,.14),transparent 55%);pointer-events:none}
.thread{position:relative;width:min(360px,100%);display:grid;gap:10px}
.bubble{max-width:80%;padding:11px 14px;border-radius:16px;font-size:12px;line-height:1.5;opacity:0;transform:translateY(8px) scale(.96);animation:in .4s cubic-bezier(.2,.8,.2,1) forwards;box-shadow:0 12px 30px -16px rgba(0,0,0,.6)}
.them{background:#17131f;color:#eee9f8;border-bottom-left-radius:4px;justify-self:start}
.me{background:linear-gradient(135deg,#d7d0ff,#9b8aff);color:#0a090f;border-bottom-right-radius:4px;justify-self:end;box-shadow:0 12px 30px -14px rgba(155,138,255,.5)}
.typing{display:flex;gap:4px;padding:12px 14px;border-radius:16px;border-bottom-left-radius:4px;background:#17131f;justify-self:start;width:fit-content}
.typing i{width:5px;height:5px;border-radius:50%;background:#847e8f;animation:bounce 1s ease-in-out infinite}
.typing i:nth-child(2){animation-delay:.15s}.typing i:nth-child(3){animation-delay:.3s}
@keyframes bounce{0%,60%,100%{transform:translateY(0);opacity:.5}30%{transform:translateY(-4px);opacity:1}}
@keyframes in{to{opacity:1;transform:none}}
</style></head>
<body data-cf-keep-dark><div class="thread" id="thread"></div>
<script>
const msgs=[{t:"them",m:"Hey — can this actually ship by Friday?"},{t:"me",m:"Already in staging."},{t:"them",m:"That's the fastest launch we've had."}];
const thread=document.getElementById("thread");
let delay=0;
msgs.forEach(function(x){
  setTimeout(function(){
    const typing=document.createElement("div");typing.className="typing";typing.innerHTML="<i></i><i></i><i></i>";thread.appendChild(typing);
    setTimeout(function(){
      typing.remove();
      const d=document.createElement("div");d.className="bubble "+x.t;d.textContent=x.m;thread.appendChild(d);
    },500);
  },delay);
  delay+=900;
});
</script>
</body></html>`,

  "map-pin-hero": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Map Pin Hero</title><style>
:root{--bg:#050507}
*{box-sizing:border-box}body{margin:0;min-height:100vh;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;display:grid;place-items:center;overflow:hidden;position:relative}
body::before{content:"";position:absolute;inset:-20%;background:radial-gradient(circle at 40% 40%,rgba(155,138,255,.1),transparent 55%);pointer-events:none}
.map{position:relative;width:320px;height:220px}
.pin{position:absolute;width:12px;height:12px;border-radius:50%;background:linear-gradient(135deg,#d7d0ff,#9b8aff);box-shadow:0 0 0 0 rgba(196,181,253,.5),0 0 10px rgba(196,181,253,.6);animation:pulse 2s infinite}
.pin::after{content:"";position:absolute;inset:-4px;border-radius:50%;border:1px solid rgba(196,181,253,.4)}
@keyframes pulse{0%{box-shadow:0 0 0 0 rgba(196,181,253,.5),0 0 10px rgba(196,181,253,.6)}70%{box-shadow:0 0 0 14px rgba(196,181,253,0),0 0 10px rgba(196,181,253,.6)}100%{box-shadow:0 0 0 0 rgba(196,181,253,0),0 0 10px rgba(196,181,253,.6)}}
.route{position:absolute;stroke:#6d5f93;stroke-width:1.5;stroke-dasharray:340;stroke-dashoffset:340;fill:none;filter:drop-shadow(0 0 4px rgba(196,181,253,.3));animation:draw 2.4s ease forwards}
@keyframes draw{to{stroke-dashoffset:0}}
.kicker{position:absolute;top:-30px;left:0;color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
</style></head>
<body data-cf-keep-dark><div class="map"><span class="kicker">3 DESTINATIONS PLOTTED</span>
<svg class="route" width="320" height="220"><path d="M30,180 Q120,40 180,90 T290,40"/></svg>
<div class="pin" style="left:26px;top:176px"></div><div class="pin" style="left:176px;top:86px;animation-delay:.6s"></div><div class="pin" style="left:286px;top:36px;animation-delay:1.2s"></div>
</div>
</body></html>`,

  "social-proof-wall": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Social Proof Wall</title><style>
:root{--bg:#050507;--line:#272632}
*{box-sizing:border-box}body{margin:0;height:100vh;overflow:hidden;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;display:grid;place-items:center}
.wall{display:flex;gap:14px;width:340px;height:260px;overflow:hidden;mask-image:linear-gradient(to bottom,transparent,#000 15%,#000 85%,transparent)}
.col{display:grid;gap:10px;animation:scroll 14s linear infinite}
.col.down{animation-direction:reverse}
.note{padding:10px 12px;border:1px solid var(--line);border-radius:10px;background:#111017;color:#c9c4d6;font-size:10px;line-height:1.5;box-shadow:0 12px 30px -18px rgba(0,0,0,.6);transition:border-color .2s}
.note:hover{border-color:#544c67}
@keyframes scroll{from{transform:translateY(0)}to{transform:translateY(-50%)}}
</style></head>
<body data-cf-keep-dark><div class="wall">
<div class="col">
<div class="note">"Shipped our redesign in a week."</div><div class="note">"Feels like a $50k design system."</div><div class="note">"Support answered in minutes."</div>
<div class="note">"Shipped our redesign in a week."</div><div class="note">"Feels like a $50k design system."</div><div class="note">"Support answered in minutes."</div>
</div>
<div class="col down">
<div class="note">"Our best onboarding metric yet."</div><div class="note">"Zero regressions after launch."</div><div class="note">"Worth every token."</div>
<div class="note">"Our best onboarding metric yet."</div><div class="note">"Zero regressions after launch."</div><div class="note">"Worth every token."</div>
</div>
</div>
</body></html>`,

  "expandable-review-card": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Expandable Review Card</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.card{width:280px;padding:18px;border:1px solid var(--line);border-radius:14px;background:#0d0d12;box-shadow:0 20px 50px -22px rgba(0,0,0,.6)}
.card b{color:#f7f5fb;font-size:12px}
.card p{color:#a49dbc;font-size:11px;line-height:1.7;margin:8px 0;overflow:hidden;max-height:38px;transition:max-height .35s cubic-bezier(.2,.8,.2,1)}
.card p.open{max-height:200px}
.more{border:0;background:none;color:var(--lav);font-size:10px;cursor:pointer;padding:0;font-weight:700}
.votes{display:flex;gap:10px;margin-top:12px}
.votes button{border:1px solid var(--line);border-radius:7px;background:#111017;color:#817d8a;font-size:10px;padding:6px 9px;cursor:pointer;transition:border-color .2s,color .2s,transform .15s cubic-bezier(.34,1.56,.64,1)}
.votes button:hover{border-color:#544c67;color:#eee9f8}
.votes button:active{transform:scale(.94)}
</style></head>
<body data-cf-keep-dark><div class="card"><b>Priya M. ★★★★★</b>
<p id="text">The onboarding alone saved us two weeks of internal debate. Every component slots into our existing design tokens without a fight, and the copy-prompt feature meant our junior devs could extend things confidently on day one.</p>
<button class="more" id="more">Read more</button>
<div class="votes"><button id="up">👍 12</button><button id="down">👎 0</button></div></div>
<script>
const text=document.getElementById("text"),more=document.getElementById("more");
more.addEventListener("click",function(){text.classList.toggle("open");more.textContent=text.classList.contains("open")?"Show less":"Read more"});
document.getElementById("up").addEventListener("click",function(e){e.target.textContent="👍 13"});
</script>
</body></html>`,

  "before-after-results-testimonial": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Before/After Results Testimonial</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.card{position:relative;width:290px;padding:20px;border:1px solid var(--line);border-radius:16px;background:#0d0d12;overflow:hidden;box-shadow:0 20px 50px -22px rgba(0,0,0,.6)}
.card::before{content:"";position:absolute;top:-50%;right:-20%;width:180px;height:180px;background:radial-gradient(circle,rgba(95,212,161,.14),transparent 70%)}
.result{position:relative;display:flex;align-items:center;justify-content:center;gap:14px;margin-bottom:14px}
.result b{font-size:26px;color:#5f5c68}
.result b.after{background:linear-gradient(135deg,#7fe0ac,#41b878);-webkit-background-clip:text;background-clip:text;color:transparent}
.result span{color:#5f5c68;font-size:16px}
.card p{position:relative;color:#c9c4d6;font-size:12px;line-height:1.7;margin:0}
.card small{position:relative;display:block;margin-top:10px;color:#817d8a;font-size:10px}
</style></head>
<body data-cf-keep-dark><div class="card"><div class="result"><b>41%</b><span>→</span><b class="after">89%</b></div>
<p>"Our checkout conversion nearly doubled after we swapped in the pricing and form components — no other changes."</p>
<small>— Marcus Lee, Growth Lead at Fluent</small></div>
</body></html>`,

  "video-call-style-testimonial": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Video Call Style Testimonial</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.wrap{width:290px}
.tiles{display:grid;grid-template-columns:repeat(2,1fr);gap:8px}
.tile{position:relative;height:80px;border-radius:10px;background:linear-gradient(135deg,#191527,#141119);display:grid;place-items:center;color:#eee9f8;font-size:11px;font-weight:700;box-shadow:0 12px 30px -18px rgba(0,0,0,.6);transition:box-shadow .3s}
.tile.speaking{box-shadow:0 0 0 2px #5fd4a1,0 0 20px -4px rgba(95,212,161,.5);animation:pulse 1.8s ease-in-out infinite}
@keyframes pulse{0%,100%{box-shadow:0 0 0 2px #5fd4a1,0 0 20px -4px rgba(95,212,161,.5)}50%{box-shadow:0 0 0 2px #5fd4a1,0 0 28px -2px rgba(95,212,161,.7)}}
.tile span{position:absolute;bottom:6px;left:8px;font-size:8px;color:#817d8a;font-weight:400}
.quote{margin-top:14px;padding:14px;border:1px solid var(--line);border-radius:12px;background:#0d0d12;color:#c9c4d6;font-size:11px;line-height:1.6;box-shadow:0 16px 40px -22px rgba(0,0,0,.7)}
</style></head>
<body data-cf-keep-dark><div class="wrap"><div class="tiles">
<div class="tile speaking">JR<span>Jordan</span></div><div class="tile">SC<span>Sam</span></div>
<div class="tile">LP<span>Lena</span></div><div class="tile">DK<span>Devon</span></div>
</div><div class="quote">"We onboarded the whole team on this library live, on a call — nobody got stuck once."</div></div>
</body></html>`,

  "star-breakdown-reviews": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Star Breakdown Reviews</title><style>
:root{--bg:#050507;--line:#272632}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.card{width:270px;padding:20px;border:1px solid var(--line);border-radius:16px;background:#0d0d12;box-shadow:0 20px 50px -22px rgba(0,0,0,.6)}
.top{display:flex;align-items:center;gap:14px;margin-bottom:14px}
.top strong{font-size:34px;color:#f7f5fb}
.top div span{display:block;color:#e8b563;font-size:12px;text-shadow:0 0 10px rgba(232,181,99,.4)}
.top div small{color:#6f6c77;font-size:9px}
.row{display:flex;align-items:center;gap:8px;margin-bottom:5px}
.row span{width:12px;font-size:9px;color:#817d8a}
.track{flex:1;height:5px;border-radius:3px;background:#1c1a24;overflow:hidden}
.fill{height:100%;background:linear-gradient(90deg,#c98f3a,#e8b563);box-shadow:0 0 8px rgba(232,181,99,.4);width:0;transition:width 1s cubic-bezier(.2,.8,.2,1)}
</style></head>
<body data-cf-keep-dark><div class="card"><div class="top"><strong>4.9</strong><div><span>★★★★★</span><small>Based on 1,204 reviews</small></div></div>
<div class="row"><span>5</span><div class="track"><div class="fill" data-w="88"></div></div></div>
<div class="row"><span>4</span><div class="track"><div class="fill" data-w="9"></div></div></div>
<div class="row"><span>3</span><div class="track"><div class="fill" data-w="2"></div></div></div>
<div class="row"><span>2</span><div class="track"><div class="fill" data-w="1"></div></div></div>
<div class="row"><span>1</span><div class="track"><div class="fill" data-w="0"></div></div></div>
</div>
<script>
requestAnimationFrame(function(){document.querySelectorAll(".fill").forEach(function(f){f.style.width=f.dataset.w+"%"})});
</script>
</body></html>`,

  "case-study-highlight-card": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Case Study Highlight Card</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.card{width:290px;border:1px solid var(--line);border-radius:16px;background:#0d0d12;overflow:hidden;box-shadow:0 20px 50px -22px rgba(0,0,0,.6)}
.tag{padding:14px 18px 0;color:#817d8a;font-size:9px;letter-spacing:1px;display:flex;justify-content:space-between}
.tag b{color:var(--lav);font-weight:700}
.card p{padding:12px 18px;margin:0;color:#eee9f8;font-size:13px;line-height:1.6;font-weight:600}
.stat{display:flex;justify-content:space-between;align-items:center;padding:14px 18px;border-top:1px solid var(--line);background:linear-gradient(135deg,#132318,#111017)}
.stat strong{background:linear-gradient(135deg,#7fe0ac,#41b878);-webkit-background-clip:text;background-clip:text;color:transparent;font-size:18px}
.stat span{color:#6f6c77;font-size:9px}
</style></head>
<body data-cf-keep-dark><div class="card"><div class="tag"><span>CLIENT: ORBIT LABS</span><b>SaaS</b></div>
<p>"We replaced three vendor tools with CodeFusion's dashboard kit and cut our build timeline in half."</p>
<div class="stat"><strong>+52%</strong><span>faster shipping</span></div></div>
</body></html>`,

  "progress-breadcrumb-nav": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Progress Breadcrumb Nav</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.trail{display:flex;align-items:center}
.step{display:flex;align-items:center;gap:8px;color:#5f5c68;font-size:11px}
.step b{width:22px;height:22px;border-radius:50%;border:1px solid var(--line);display:grid;place-items:center;font-size:10px;color:#817d8a;transition:box-shadow .3s}
.step.done b{background:linear-gradient(135deg,#7fe0ac,#41b878);border-color:transparent;color:#0a090f}
.step.active{color:#f7f5fb}
.step.active b{background:linear-gradient(135deg,#d7d0ff,#9b8aff);border-color:transparent;color:#0a090f;box-shadow:0 0 0 5px rgba(196,181,253,.18)}
.line{width:36px;height:1px;background:var(--line);margin:0 6px}
.line.done{background:linear-gradient(90deg,#41b878,#7fe0ac)}
</style></head>
<body data-cf-keep-dark><div class="trail">
<div class="step done"><b>✓</b>Cart</div><div class="line done"></div>
<div class="step active"><b>2</b>Shipping</div><div class="line"></div>
<div class="step"><b>3</b>Payment</div>
</div>
</body></html>`,

  "bottom-tab-bar-nav": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Bottom Tab Bar Nav</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:end center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding-bottom:40px}
.tabbar{position:relative;display:flex;width:260px;padding:5px;border:1px solid var(--line);border-radius:16px;background:#0d0d12;box-shadow:0 20px 50px -22px rgba(0,0,0,.6)}
.tabbar button{flex:1;position:relative;z-index:1;border:0;background:none;padding:10px 0;color:#77737f;font-size:9px;cursor:pointer;transition:color .25s}
.tabbar button.active{color:#0a090f}
.pill{position:absolute;top:5px;bottom:5px;width:calc(33.33% - 4px);border-radius:11px;background:linear-gradient(135deg,#d7d0ff,#9b8aff);box-shadow:0 8px 20px -8px rgba(155,138,255,.6);transition:left .35s cubic-bezier(.34,1.56,.64,1)}
</style></head>
<body data-cf-keep-dark><div class="tabbar" id="bar"><div class="pill" id="pill"></div>
<button class="active">Home</button><button>Search</button><button>Profile</button></div>
<script>
const bar=document.getElementById("bar"),pill=document.getElementById("pill"),buttons=[...bar.querySelectorAll("button")];
buttons.forEach(function(b,i){b.addEventListener("click",function(){buttons.forEach(function(x){x.classList.remove("active")});b.classList.add("active");pill.style.left=(5+i*(250/3))+"px"})});
</script>
</body></html>`,

  "vertical-dot-nav": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Vertical Dot Nav</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;height:100vh;display:flex;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.dotnav{display:grid;gap:16px;align-self:center;padding-left:30px}
.dotnav button{width:9px;height:9px;border-radius:50%;border:1px solid #4a4657;background:transparent;cursor:pointer;position:relative;transition:background .3s,border-color .3s,box-shadow .3s,transform .3s cubic-bezier(.34,1.56,.64,1)}
.dotnav button.active{background:var(--lav);border-color:var(--lav);box-shadow:0 0 0 4px rgba(196,181,253,.18);transform:scale(1.2)}
.dotnav button.active::after{content:attr(data-l);position:absolute;left:18px;top:-4px;color:#eee9f8;font-size:10px;white-space:nowrap}
.sections{flex:1;display:grid}
section{height:100vh;display:grid;place-items:center;color:#4a4657;font-size:40px;font-weight:800;scroll-snap-align:start;background:radial-gradient(circle at 30% 30%,rgba(155,138,255,.06),transparent 60%)}
.sections{scroll-snap-type:y mandatory;overflow-y:auto}
</style></head>
<body data-cf-keep-dark><div class="dotnav" id="dots">
<button class="active" data-l="Intro"></button><button data-l="Features"></button><button data-l="Pricing"></button>
</div>
<div class="sections" id="sections"><section>01</section><section>02</section><section>03</section></div>
<script>
const dots=[...document.querySelectorAll("#dots button")],sections=[...document.querySelectorAll("section")];
dots.forEach(function(d,i){d.addEventListener("click",function(){dots.forEach(function(x){x.classList.remove("active")});d.classList.add("active");sections[i].scrollIntoView({behavior:"smooth"})})});
</script>
</body></html>`,

  "search-expand-nav": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Search Expand Nav</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
header{display:flex;justify-content:space-between;align-items:center;padding:16px 22px;border-bottom:1px solid var(--line)}
header b{color:#f7f5fb;font-size:13px}
nav{display:flex;gap:18px;color:#817d8a;font-size:11px;align-items:center}
.search-btn{width:34px;height:34px;border:1px solid var(--line);border-radius:9px;background:#111017;color:#9d94b0;cursor:pointer;transition:width .3s ease,border-color .2s}
.search-btn:hover{border-color:#544c67}
.search-wrap{position:relative;display:flex;align-items:center}
.search-wrap input{position:absolute;right:0;width:0;opacity:0;padding:0;border:1px solid var(--line);border-radius:9px;background:#111017;color:#fff;font-size:11px;height:34px;transition:width .35s cubic-bezier(.2,.8,.2,1),opacity .2s ease,padding .3s ease,box-shadow .2s}
.search-wrap.open input{width:180px;opacity:1;padding:0 12px;right:0;box-shadow:0 0 0 3px rgba(196,181,253,.15)}
.search-wrap.open .search-btn{opacity:0;pointer-events:none}
</style></head>
<body data-cf-keep-dark><header><b>CodeFusion</b><nav><span>Products</span><span>Docs</span>
<div class="search-wrap" id="wrap"><input id="input" placeholder="Search…"><button class="search-btn" id="btn">⚲</button></div>
</nav></header>
<script>
const wrap=document.getElementById("wrap"),btn=document.getElementById("btn"),input=document.getElementById("input");
btn.addEventListener("click",function(){wrap.classList.add("open");input.focus()});
input.addEventListener("blur",function(){if(!input.value)wrap.classList.remove("open")});
</script>
</body></html>`,

  "icon-rail-nav": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Icon Rail Nav</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;height:100vh;display:flex;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.rail{width:56px;border-right:1px solid var(--line);display:grid;align-content:start;gap:4px;padding:14px 8px;transition:width .3s cubic-bezier(.2,.8,.2,1);overflow:hidden}
.rail:hover{width:150px}
.rail a{display:flex;align-items:center;gap:12px;padding:10px;border-radius:9px;color:#817d8a;font-size:11px;white-space:nowrap;text-decoration:none;transition:background .2s,color .2s}
.rail a:hover{background:#111017;color:#eee9f8}
.rail a i{width:18px;height:18px;flex:none;border-radius:5px;background:#1c1a24;display:grid;place-items:center;font-style:normal;color:var(--lav);font-size:10px;transition:background .2s,color .2s}
.rail a.active{color:#e6e1f2;background:linear-gradient(135deg,#221d33,#181425)}
.rail a.active i{background:linear-gradient(135deg,#d7d0ff,#9b8aff);color:#0a090f}
</style></head>
<body data-cf-keep-dark><div class="rail"><a class="active"><i>◧</i>Dashboard</a><a><i>◨</i>Projects</a><a><i>◩</i>Reports</a><a><i>◪</i>Settings</a></div>
</body></html>`,

  "pagination-nav": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Pagination Nav</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.pager{position:relative;display:flex;gap:4px;padding:4px;border:1px solid var(--line);border-radius:12px;background:#0d0d12;box-shadow:0 16px 40px -22px rgba(0,0,0,.7)}
.pager button{position:relative;z-index:1;width:32px;height:32px;border:0;background:none;color:#817d8a;font-size:11px;cursor:pointer;border-radius:8px;transition:color .25s}
.pager button:hover{color:#eee9f8}
.pager button.active{color:#0a090f}
.pill{position:absolute;top:4px;left:4px;width:32px;height:32px;border-radius:8px;background:linear-gradient(135deg,#d7d0ff,#9b8aff);box-shadow:0 6px 16px -6px rgba(155,138,255,.6);transition:left .3s cubic-bezier(.34,1.56,.64,1)}
</style></head>
<body data-cf-keep-dark><div class="pager" id="pager"><div class="pill" id="pill"></div>
<button>‹</button><button class="active">1</button><button>2</button><button>3</button><button>4</button><button>›</button></div>
<script>
const pager=document.getElementById("pager"),pill=document.getElementById("pill"),buttons=[...pager.querySelectorAll("button")].slice(1,5);
buttons.forEach(function(b){b.addEventListener("click",function(){buttons.forEach(function(x){x.classList.remove("active")});b.classList.add("active");pill.style.left=b.offsetLeft+"px"})});
</script>
</body></html>`,

  "rating-feedback-form": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Rating Feedback Form</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.card{width:280px;padding:20px;border:1px solid var(--line);border-radius:16px;background:#0d0d12;box-shadow:0 20px 50px -22px rgba(0,0,0,.6)}
.card b{display:block;color:#eee9f8;font-size:13px;margin-bottom:12px}
.stars{display:flex;gap:6px;font-size:24px}
.stars span{color:#2a2833;cursor:pointer;transition:transform .2s cubic-bezier(.34,1.56,.64,1),color .2s}
.stars span.on{color:#e8b563;text-shadow:0 0 10px rgba(232,181,99,.5)}
.stars span:hover{transform:scale(1.2)}
.note{max-height:0;overflow:hidden;transition:max-height .35s cubic-bezier(.2,.8,.2,1)}
.note.open{max-height:100px;margin-top:12px}
.note textarea{width:100%;padding:9px;border:1px solid var(--line);border-radius:8px;background:#111017;color:#fff;font-size:11px;resize:none;height:60px;outline:0;transition:border-color .25s,box-shadow .25s}
.note textarea:focus{border-color:#6d5f93;box-shadow:0 0 0 3px rgba(196,181,253,.2)}
</style></head>
<body data-cf-keep-dark><div class="card"><b>How was your experience?</b>
<div class="stars" id="stars"><span data-v="1">★</span><span data-v="2">★</span><span data-v="3">★</span><span data-v="4">★</span><span data-v="5">★</span></div>
<div class="note" id="note"><textarea placeholder="Tell us more (optional)"></textarea></div></div>
<script>
const stars=[...document.querySelectorAll("#stars span")],note=document.getElementById("note");
stars.forEach(function(s){s.addEventListener("click",function(){const v=Number(s.dataset.v);stars.forEach(function(x){x.classList.toggle("on",Number(x.dataset.v)<=v)});note.classList.add("open")})});
</script>
</body></html>`,

  "range-slider-form": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Range Slider Form</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.card{width:270px;padding:20px;border:1px solid var(--line);border-radius:16px;background:#0d0d12;box-shadow:0 20px 50px -22px rgba(0,0,0,.6)}
.card b{display:block;color:#817d8a;font-size:11px;margin-bottom:14px}
.range-wrap{position:relative;height:4px;background:#1c1a24;border-radius:2px;margin:20px 6px}
.range-fill{position:absolute;height:100%;background:linear-gradient(90deg,#9b8aff,#d7d0ff);border-radius:2px;box-shadow:0 0 10px rgba(196,181,253,.5)}
input[type=range]{position:absolute;top:-8px;width:100%;background:transparent;pointer-events:none;-webkit-appearance:none;margin:0}
input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;pointer-events:auto;width:16px;height:16px;border-radius:50%;background:#f7f5fb;cursor:pointer;box-shadow:0 0 0 4px rgba(196,181,253,.2),0 4px 10px rgba(0,0,0,.4);transition:box-shadow .2s}
input[type=range]:active::-webkit-slider-thumb{box-shadow:0 0 0 7px rgba(196,181,253,.3),0 4px 10px rgba(0,0,0,.4)}
.values{display:flex;justify-content:space-between;color:#eee9f8;font-size:12px;font-weight:700}
</style></head>
<body data-cf-keep-dark><div class="card"><b>MONTHLY BUDGET RANGE</b>
<div class="values"><span id="minv">$20</span><span id="maxv">$80</span></div>
<div class="range-wrap"><div class="range-fill" id="fill"></div><input type="range" id="min" min="0" max="100" value="20"><input type="range" id="max" min="0" max="100" value="80"></div></div>
<script>
const min=document.getElementById("min"),max=document.getElementById("max"),fill=document.getElementById("fill"),minv=document.getElementById("minv"),maxv=document.getElementById("maxv");
function render(){let a=Number(min.value),b=Number(max.value);if(a>b){const t=a;a=b;b=t}fill.style.left=a+"%";fill.style.width=(b-a)+"%";minv.textContent="$"+a;maxv.textContent="$"+b}
min.addEventListener("input",render);max.addEventListener("input",render);render();
</script>
</body></html>`,

  "tag-input-form": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Tag Input Form</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.field{width:270px}
.field b{display:block;color:#85818d;font-size:9px;margin-bottom:6px}
.tag-box{display:flex;flex-wrap:wrap;gap:6px;padding:9px;border:1px solid var(--line);border-radius:10px;background:#111017;min-height:44px;box-shadow:0 16px 40px -22px rgba(0,0,0,.6);transition:border-color .25s,box-shadow .25s}
.tag-box:focus-within{border-color:#6d5f93;box-shadow:0 0 0 3px rgba(196,181,253,.2)}
.tag{display:flex;align-items:center;gap:6px;padding:5px 9px;border-radius:999px;background:linear-gradient(135deg,#241c3d,#1c1730);color:#c4b5fd;font-size:10px;animation:pop .25s cubic-bezier(.34,1.56,.64,1);box-shadow:inset 0 0 0 1px rgba(196,181,253,.15)}
.tag button{border:0;background:none;color:#8f7fc9;cursor:pointer;font-size:10px;transition:color .2s}
.tag button:hover{color:#fff}
.tag-box input{flex:1;min-width:80px;border:0;background:transparent;color:#fff;font-size:11px;outline:0}
@keyframes pop{from{transform:scale(.6);opacity:0}to{transform:scale(1);opacity:1}}
</style></head>
<body data-cf-keep-dark><div class="field"><b>SKILLS (PRESS ENTER)</b>
<div class="tag-box" id="box"><span class="tag">React<button data-t="React">×</button></span><span class="tag">Node<button data-t="Node">×</button></span><input id="input" placeholder="Add a skill…"></div></div>
<script>
const box=document.getElementById("box"),input=document.getElementById("input");
function addTag(t){if(!t.trim())return;const tag=document.createElement("span");tag.className="tag";tag.innerHTML=t+'<button data-t="'+t+'">×</button>';box.insertBefore(tag,input)}
input.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===","){e.preventDefault();addTag(input.value);input.value=""}});
box.addEventListener("click",function(e){if(e.target.tagName==="BUTTON")e.target.parentElement.remove()});
</script>
</body></html>`,

  "signature-pad-form": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Signature Pad Form</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.field{width:280px}
.field b{display:block;color:#85818d;font-size:9px;margin-bottom:6px}
.pad-wrap{position:relative;border-radius:12px;box-shadow:0 20px 50px -22px rgba(0,0,0,.6)}
canvas{display:block;width:100%;height:130px;border:1px dashed var(--line);border-radius:12px;background:#111017;touch-action:none;transition:border-color .25s}
.pad-wrap:focus-within canvas{border-color:#6d5f93}
.actions{display:flex;justify-content:flex-end;gap:8px;margin-top:8px}
.actions button{padding:7px 11px;border:1px solid var(--line);border-radius:8px;background:#0d0d12;color:#817d8a;font-size:10px;cursor:pointer;transition:border-color .2s,color .2s}
.actions button:hover{border-color:#544c67;color:#eee9f8}
</style></head>
<body data-cf-keep-dark><div class="field"><b>SIGN BELOW</b><div class="pad-wrap"><canvas id="pad" width="280" height="130"></canvas></div>
<div class="actions"><button id="clear">Clear</button></div></div>
<script>
const pad=document.getElementById("pad"),ctx=pad.getContext("2d");ctx.strokeStyle="#c4b5fd";ctx.lineWidth=2.4;ctx.lineCap="round";ctx.shadowColor="rgba(196,181,253,.6)";ctx.shadowBlur=4;
let drawing=false;
function pos(e){const r=pad.getBoundingClientRect();const t=e.touches?e.touches[0]:e;return{x:(t.clientX-r.left)*(pad.width/r.width),y:(t.clientY-r.top)*(pad.height/r.height)}}
function start(e){drawing=true;const p=pos(e);ctx.beginPath();ctx.moveTo(p.x,p.y)}
function move(e){if(!drawing)return;const p=pos(e);ctx.lineTo(p.x,p.y);ctx.stroke()}
function end(){drawing=false}
pad.addEventListener("pointerdown",start);pad.addEventListener("pointermove",move);pad.addEventListener("pointerup",end);pad.addEventListener("pointerleave",end);
document.getElementById("clear").addEventListener("click",function(){ctx.clearRect(0,0,pad.width,pad.height)});
</script>
</body></html>`,

  "conditional-fields-form": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Conditional Fields Form</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.card{width:270px;padding:20px;border:1px solid var(--line);border-radius:16px;background:#0d0d12;box-shadow:0 20px 50px -22px rgba(0,0,0,.6)}
.switch{position:relative;display:flex;border:1px solid var(--line);border-radius:999px;padding:3px;margin-bottom:14px;background:#0d0d12}
.pill{position:absolute;top:3px;bottom:3px;left:3px;width:calc(50% - 3px);border-radius:999px;background:linear-gradient(135deg,#d7d0ff,#9b8aff);transition:transform .35s cubic-bezier(.2,.8,.2,1)}
.switch.on .pill{transform:translateX(100%)}
.switch button{position:relative;z-index:1;flex:1;border:0;background:none;padding:8px 0;border-radius:999px;font-size:11px;color:#817d8a;cursor:pointer;transition:color .3s}
.switch button.active{color:#0a090f}
.extra{max-height:0;overflow:hidden;transition:max-height .35s cubic-bezier(.2,.8,.2,1)}
.extra.open{max-height:120px}
input{width:100%;padding:10px;margin-top:8px;border:1px solid var(--line);border-radius:8px;background:#111017;color:#fff;font-size:11px;outline:0;transition:border-color .25s,box-shadow .25s}
input:focus{border-color:#6d5f93;box-shadow:0 0 0 3px rgba(196,181,253,.2)}
</style></head>
<body data-cf-keep-dark><div class="card"><div class="switch" id="switch"><div class="pill"></div><button class="active" data-v="personal">Personal</button><button data-v="business">Business</button></div>
<input placeholder="Full name">
<div class="extra" id="extra"><input placeholder="Company name"><input placeholder="Tax ID"></div></div>
<script>
const switchEl=document.getElementById("switch"),buttons=[...switchEl.querySelectorAll("button")],extra=document.getElementById("extra");
buttons.forEach(function(b){b.addEventListener("click",function(){buttons.forEach(function(x){x.classList.remove("active")});b.classList.add("active");switchEl.classList.toggle("on",b.dataset.v==="business");extra.classList.toggle("open",b.dataset.v==="business")})});
</script>
</body></html>`,

  "case-study-scroll-reveal": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Case Study Scroll Reveal</title><style>
:root{--bg:#050507;--line:#272632}
*{box-sizing:border-box}body{margin:0;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.list{padding:30px 24px;display:grid;gap:60px}
.item{opacity:0;transform:translateY(30px);transition:opacity .7s cubic-bezier(.2,.8,.2,1),transform .7s cubic-bezier(.2,.8,.2,1)}
.item.visible{opacity:1;transform:none}
.cover{position:relative;height:140px;border-radius:14px;background:radial-gradient(circle at 30% 20%,rgba(155,138,255,.25),transparent 60%),linear-gradient(135deg,#191527,#0d0d12);border:1px solid var(--line);box-shadow:0 20px 50px -22px rgba(0,0,0,.7)}
.item h3{color:#f7f5fb;font-size:15px;margin:12px 0 4px}
.item span{color:#817d8a;font-size:10px}
</style></head>
<body data-cf-keep-dark><div class="list" id="list">
<div class="item"><div class="cover"></div><h3>Nova SaaS redesign</h3><span>Product · 2026</span></div>
<div class="item"><div class="cover"></div><h3>Finora onboarding</h3><span>Fintech · 2026</span></div>
<div class="item"><div class="cover"></div><h3>Travelora campaign</h3><span>Travel · 2025</span></div>
</div>
<script>
const io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)e.target.classList.add("visible")})},{threshold:.2});
document.querySelectorAll(".item").forEach(function(i){io.observe(i)});
</script>
</body></html>`,

  "cursor-preview-portfolio-list": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Cursor Preview Portfolio List</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:30px}
.row{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--line);color:#eee9f8;font-size:16px;font-weight:700;cursor:pointer;transition:color .2s}
.row:hover{color:var(--lav)}
.row span{color:#5f5c68;font-size:11px;font-weight:400}
.preview{position:fixed;width:130px;height:90px;border-radius:10px;background:radial-gradient(circle at 30% 20%,rgba(155,138,255,.3),transparent 60%),linear-gradient(135deg,#191527,#0d0d12);border:1px solid var(--line);box-shadow:0 30px 60px -20px rgba(0,0,0,.7);pointer-events:none;opacity:0;transform:translate(-50%,-50%) scale(.9) rotate(-3deg);transition:opacity .25s,transform .25s;z-index:9}
.preview.show{opacity:1;transform:translate(-50%,-50%) scale(1) rotate(0)}
</style></head>
<body data-cf-keep-dark>
<div class="row">Atlas Agency <span>Branding</span></div>
<div class="row">CommerceX <span>Ecommerce</span></div>
<div class="row">DevDock <span>Docs</span></div>
<div class="preview" id="prev"></div>
<script>
const prev=document.getElementById("prev");
document.querySelectorAll(".row").forEach(function(r){
  r.addEventListener("pointerenter",function(){prev.classList.add("show")});
  r.addEventListener("pointerleave",function(){prev.classList.remove("show")});
  r.addEventListener("pointermove",function(e){prev.style.left=e.clientX+"px";prev.style.top=e.clientY-70+"px"});
});
</script>
</body></html>`,

  "split-screen-portfolio": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Split Screen Portfolio</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;height:100vh;display:flex;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.list{width:180px;border-right:1px solid var(--line);padding:20px 0;display:grid;align-content:start}
.list div{padding:12px 20px;color:#817d8a;font-size:12px;cursor:pointer;border-left:2px solid transparent;transition:color .25s,background .25s,border-color .25s}
.list div.active{color:#f7f5fb;background:linear-gradient(90deg,#141020,transparent);border-left-color:var(--lav)}
.preview{flex:1;display:grid;place-items:center;background:radial-gradient(circle at 50% 40%,rgba(155,138,255,.14),transparent 45%)}
.preview div{width:200px;height:130px;border-radius:14px;background:radial-gradient(circle at 30% 20%,rgba(155,138,255,.28),transparent 60%),linear-gradient(135deg,#191527,#0d0d12);border:1px solid var(--line);box-shadow:0 30px 70px -24px rgba(0,0,0,.7);transition:transform .3s cubic-bezier(.2,.8,.2,1)}
</style></head>
<body data-cf-keep-dark><div class="list" id="list"><div class="active">Medora</div><div>LearnFlow</div><div>Socially</div></div>
<div class="preview"><div></div></div>
<script>
document.querySelectorAll("#list div").forEach(function(d){d.addEventListener("click",function(){document.querySelectorAll("#list div").forEach(function(x){x.classList.remove("active")});d.classList.add("active")})});
</script>
</body></html>`,

  "client-logo-showcase-grid": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Client Logo Showcase Grid</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;width:320px}
.logo{padding:20px 10px;border:1px solid var(--line);border-radius:12px;display:grid;place-items:center;color:#3a3546;font-weight:800;font-size:12px;letter-spacing:1px;transition:color .25s,border-color .25s,background .25s,transform .25s cubic-bezier(.2,.8,.2,1),box-shadow .25s;position:relative}
.logo:hover{color:#eee9f8;border-color:#544c67;background:#111017;transform:translateY(-4px);box-shadow:0 16px 34px -18px rgba(155,138,255,.35)}
.logo small{position:absolute;bottom:-16px;color:var(--lav);font-size:8px;opacity:0;transition:opacity .25s}
.logo:hover small{opacity:1}
</style></head>
<body data-cf-keep-dark><div class="grid">
<div class="logo">ORBIT<small>Since 2023</small></div><div class="logo">NORTHSTAR<small>Since 2022</small></div><div class="logo">FLUENT<small>Since 2024</small></div>
<div class="logo">ATLAS<small>Since 2021</small></div><div class="logo">MEDORA<small>Since 2023</small></div><div class="logo">FINORA<small>Since 2022</small></div>
</div>
</body></html>`,

  "resume-timeline-portfolio": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Resume Timeline Portfolio</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:30px}
.timeline{position:relative;max-width:320px;margin:auto;padding-left:20px}
.timeline::before{content:"";position:absolute;left:4px;top:4px;bottom:4px;width:1px;background:linear-gradient(180deg,#9b8aff,var(--line))}
.entry{position:relative;padding-bottom:26px}
.entry:last-child{padding-bottom:0}
.entry::before{content:"";position:absolute;left:-20px;top:3px;width:9px;height:9px;border-radius:50%;background:linear-gradient(135deg,#d7d0ff,#9b8aff);box-shadow:0 0 10px rgba(196,181,253,.5)}
.entry:first-child::before{box-shadow:0 0 0 4px rgba(196,181,253,.2),0 0 10px rgba(196,181,253,.5)}
.entry b{display:block;color:#f7f5fb;font-size:12px}
.entry span{display:block;color:#5f5c68;font-size:9px;margin:2px 0 4px}
.entry p{margin:0;color:#a49dbc;font-size:10px;line-height:1.6}
</style></head>
<body data-cf-keep-dark><div class="timeline">
<div class="entry"><b>Senior Product Designer</b><span>Orbit Labs · 2024—Now</span><p>Led the design system rebuild across 4 product lines.</p></div>
<div class="entry"><b>Product Designer</b><span>Northstar · 2021—2024</span><p>Shipped the mobile onboarding redesign.</p></div>
<div class="entry"><b>UI Designer</b><span>Freelance · 2019—2021</span><p>Worked with early-stage startups on launch identities.</p></div>
</div>
</body></html>`,

  "hover-reveal-feature-cards": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Hover Reveal Feature Cards</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;width:340px}
.card{position:relative;height:110px;border:1px solid var(--line);border-radius:12px;background:#0d0d12;overflow:hidden;padding:14px;box-shadow:0 16px 40px -22px rgba(0,0,0,.7);transition:border-color .3s,box-shadow .3s}
.card:hover{border-color:#544c67;box-shadow:0 20px 44px -16px rgba(155,138,255,.3)}
.card b{color:#eee9f8;font-size:11px}
.reveal{position:absolute;left:0;right:0;bottom:0;padding:10px 14px;background:linear-gradient(180deg,#1b1628,#141020);color:#c9c4d6;font-size:9px;line-height:1.5;transform:translateY(100%);transition:transform .35s cubic-bezier(.2,.8,.2,1)}
.card:hover .reveal{transform:translateY(0)}
</style></head>
<body data-cf-keep-dark><div class="grid">
<div class="card"><b>Speed</b><div class="reveal">Sub-100ms interaction latency by default.</div></div>
<div class="card"><b>Security</b><div class="reveal">Sanitized, dependency-light source code.</div></div>
<div class="card"><b>Scale</b><div class="reveal">From prototype to production, unchanged.</div></div>
</div>
</body></html>`,

  "numbered-process-steps": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Numbered Process Steps</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.steps{display:flex;align-items:flex-start;width:360px}
.step{flex:1;text-align:center;position:relative}
.step b{display:flex;align-items:center;justify-content:center;width:30px;height:30px;margin:0 auto 10px;border-radius:50%;border:1px solid var(--lav);color:var(--lav);font-size:12px;background:#0d0d12;position:relative;z-index:1;box-shadow:0 0 0 4px rgba(196,181,253,.1);transition:transform .3s cubic-bezier(.34,1.56,.64,1)}
.step:hover b{transform:scale(1.12);background:linear-gradient(135deg,#d7d0ff,#9b8aff);color:#0a090f}
.step.done b{background:linear-gradient(135deg,#d7d0ff,#9b8aff);color:#0a090f;border-color:transparent}
.step span{color:#c9c4d6;font-size:10px}
.connector{position:absolute;top:15px;left:50%;right:-50%;height:1px;background:var(--line);z-index:0;overflow:hidden}
.connector::after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,#9b8aff,transparent);transform:scaleX(0);transform-origin:left;transition:transform .5s ease}
.step.done .connector::after{transform:scaleX(1)}
.step:last-child .connector{display:none}
</style></head>
<body data-cf-keep-dark><div class="steps">
<div class="step done"><b>1</b><span>Pick a component</span><div class="connector"></div></div>
<div class="step done"><b>2</b><span>Copy the code</span><div class="connector"></div></div>
<div class="step"><b>3</b><span>Ship it</span></div>
</div>
</body></html>`,

  "code-snippet-feature-card": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Code Snippet Feature Card</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.card{position:relative;width:300px;border:1px solid var(--line);border-radius:14px;background:#0d0d12;overflow:hidden;box-shadow:0 24px 60px -24px rgba(0,0,0,.7)}
.card::before{content:"";position:absolute;top:-40%;right:-20%;width:180px;height:180px;background:radial-gradient(circle,rgba(155,138,255,.14),transparent 70%)}
.bar{position:relative;display:flex;gap:5px;padding:10px 12px;border-bottom:1px solid var(--line)}
.bar i{width:7px;height:7px;border-radius:50%;background:#2f2d3a}
.bar i:nth-child(1){background:#c0525f}.bar i:nth-child(2){background:#c79a3f}.bar i:nth-child(3){background:#3f9f5f}
pre{position:relative;margin:0;padding:16px;font:11px/1.7 ui-monospace,Menlo,monospace;color:#a9e6b4;white-space:pre-wrap}
.k{color:#c4b5fd}.s{color:#e8b563}
.cursor{display:inline-block;width:6px;height:12px;background:var(--lav);box-shadow:0 0 6px var(--lav);margin-left:1px;animation:blink 1s step-end infinite;vertical-align:-2px}
@keyframes blink{50%{opacity:0}}
</style></head>
<body data-cf-keep-dark><div class="card"><div class="bar"><i></i><i></i><i></i></div><pre id="pre"></pre></div>
<script>
const code='<span class="k">import</span> { Button } <span class="k">from</span> <span class="s">"codefusion"</span>;\\n\\n<span class="k">export default function</span> App(){\\n  <span class="k">return</span> <Button>Ship it</Button>;\\n}';
const pre=document.getElementById("pre");let i=0;
function type(){if(i<=code.length){pre.innerHTML=code.slice(0,i)+'<span class="cursor"></span>';i+=3;setTimeout(type,20)}}
type();
</script>
</body></html>`,

  "comparison-checklist-features": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Comparison Checklist Features</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.table{width:300px;border:1px solid var(--line);border-radius:14px;overflow:hidden;box-shadow:0 20px 50px -22px rgba(0,0,0,.6)}
.row{position:relative;display:grid;grid-template-columns:1fr 60px 60px;align-items:center;padding:11px 14px;border-bottom:1px solid var(--line);font-size:10px;color:#c9c4d6;transition:background .2s}
.row:not(:first-child):hover{background:#111017}
.row:first-child{background:linear-gradient(135deg,#181425,#111017);color:#817d8a;font-weight:700}
.row:last-child{border-bottom:0}
.row span{text-align:center}
.row::after{content:"";position:absolute;top:0;bottom:0;left:calc(100% - 120px);width:60px;background:linear-gradient(180deg,rgba(196,181,253,.06),transparent);pointer-events:none}
.yes{color:#5fd4a1;text-shadow:0 0 8px rgba(95,212,161,.5)}.no{color:#e88ba0}
</style></head>
<body data-cf-keep-dark><div class="table">
<div class="row"><span></span><span>Us</span><span>Them</span></div>
<div class="row">Live interactive preview<span class="yes">✓</span><span class="no">✕</span></div>
<div class="row">Copyable source<span class="yes">✓</span><span class="yes">✓</span></div>
<div class="row">AI-ready prompts<span class="yes">✓</span><span class="no">✕</span></div>
</div>
</body></html>`,

  "interactive-toggle-feature-demo": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Interactive Toggle Feature Demo</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.card{width:280px;padding:20px;border:1px solid var(--line);border-radius:16px;background:#0d0d12;text-align:center;box-shadow:0 20px 50px -22px rgba(0,0,0,.6)}
.card b{display:block;color:#817d8a;font-size:11px;margin-bottom:14px}
.swatch{height:70px;border-radius:12px;background:#f4f3fa;transition:background .4s ease,color .4s ease,box-shadow .4s;display:grid;place-items:center;color:#15131c;font-size:11px;font-weight:700;box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}
.swatch.dark{background:#111017;color:#eee9f8;box-shadow:inset 0 0 0 1px rgba(196,181,253,.15),0 0 30px -10px rgba(155,138,255,.4)}
.toggle-row{position:relative;display:flex;justify-content:center;gap:8px;margin-top:14px}
.toggle-row button{padding:7px 12px;border:1px solid var(--line);border-radius:8px;background:#111017;color:#817d8a;font-size:10px;cursor:pointer;transition:color .3s,border-color .3s,transform .2s cubic-bezier(.34,1.56,.64,1)}
.toggle-row button:active{transform:scale(.94)}
.toggle-row button.active{color:#0a090f;border-color:transparent;background:linear-gradient(135deg,#d7d0ff,#9b8aff)}
</style></head>
<body data-cf-keep-dark><div class="card"><b>LIVE THEME PREVIEW</b><div class="swatch" id="swatch">Aa Preview text</div>
<div class="toggle-row"><button class="active" data-t="light">Light</button><button data-t="dark">Dark</button></div></div>
<script>
const buttons=[...document.querySelectorAll(".toggle-row button")],swatch=document.getElementById("swatch");
buttons.forEach(function(b){b.addEventListener("click",function(){buttons.forEach(function(x){x.classList.remove("active")});b.classList.add("active");swatch.classList.toggle("dark",b.dataset.t==="dark")})});
</script>
</body></html>`,

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
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Trust Badges Security Band</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.band{display:flex;gap:12px;padding:18px 22px;border:1px solid var(--line);border-radius:14px;background:#0d0d12;box-shadow:0 20px 50px -22px rgba(0,0,0,.6)}
.badge{display:grid;place-items:center;gap:6px;padding:10px 14px;border-radius:10px;transition:transform .25s cubic-bezier(.2,.8,.2,1),background .25s}
.badge:hover{transform:translateY(-4px);background:#12101a}
.badge i{width:26px;height:26px;border-radius:50%;background:#141020;display:grid;place-items:center;color:var(--lav);font-size:12px;font-style:normal;transition:box-shadow .3s,background .3s}
.badge:hover i{box-shadow:0 0 0 5px rgba(196,181,253,.15);background:linear-gradient(135deg,#d7d0ff,#9b8aff);color:#0a090f}
.badge span{color:#6f6c77;font-size:8px;letter-spacing:.5px}
</style></head>
<body data-cf-keep-dark><div class="band">
<div class="badge"><i>✓</i><span>SOC 2</span></div><div class="badge"><i>⚿</i><span>GDPR</span></div><div class="badge"><i>◈</i><span>ISO 27001</span></div>
</div>
</body></html>`,

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
