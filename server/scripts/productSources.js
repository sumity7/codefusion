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
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Sticky CTA Banner</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif}
.kicker{display:block;color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700;padding:20px 24px}
.content{padding:0 24px 100px;color:#847e8f;font-size:11px;line-height:1.9;max-width:500px}
.content h1{color:#f7f5fb;font:700 34px "Space Grotesk",sans-serif;letter-spacing:-.03em}
#banner{position:fixed;left:16px;right:16px;bottom:-80px;display:flex;align-items:center;justify-content:space-between;padding:14px 18px;border:1px solid var(--line);border-radius:14px;background:#0d0d12ee;backdrop-filter:blur(10px);box-shadow:0 25px 60px -10px rgba(0,0,0,.6),0 0 0 1px rgba(196,181,253,.08);transition:bottom .4s cubic-bezier(.2,.8,.2,1)}
#banner.show{bottom:16px}
#banner b{font:700 12px "Space Grotesk",sans-serif}
#banner button{border:0;border-radius:9px;padding:9px 16px;background:linear-gradient(135deg,#d7d0ff,#9b8aff);color:#0a090f;font-size:9px;font-weight:800;cursor:pointer;box-shadow:0 8px 20px -8px rgba(155,138,255,.6);transition:transform .15s cubic-bezier(.34,1.56,.64,1)}
#banner button:active{transform:scale(.94)}
</style></head>
<body data-cf-keep-dark><span class="kicker">SCROLL DOWN</span>
<div class="content"><h1>Something worth<br>scrolling for.</h1><p>Keep reading — a call-to-action banner slides up from the bottom once you've scrolled past the fold.</p></div>
<div id="banner"><b>Ready to start your free trial?</b><button>Get started</button></div>
<script>
document.addEventListener("scroll",function(){document.getElementById("banner").classList.toggle("show",window.scrollY>150)},{passive:true});
</script>
</body></html>`,

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
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>FAQ Accordion Section</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:26px}
.faq{width:min(460px,92vw)}
.faq h2{margin:0 0 16px;font:700 22px "Space Grotesk",sans-serif;letter-spacing:-.03em}
details{border-bottom:1px solid var(--line);padding:12px 4px;border-radius:8px;transition:background .25s}
details[open]{background:#0e0d14}
summary{cursor:pointer;list-style:none;font:700 11px "Space Grotesk",sans-serif;display:flex;justify-content:space-between;align-items:center}
summary::-webkit-details-marker{display:none}
summary:after{content:"+";width:20px;height:20px;border-radius:50%;background:#181425;color:var(--lav);display:grid;place-items:center;font-style:normal;transition:transform .35s cubic-bezier(.34,1.56,.64,1),background .3s,color .3s}
details[open] summary:after{transform:rotate(45deg);background:linear-gradient(135deg,#d7d0ff,#9b8aff);color:#0a090f}
details p{margin:10px 0 2px;font-size:9px;color:#847e8f;line-height:1.75;animation:fade .35s ease both}
@keyframes fade{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:none}}
</style></head>
<body data-cf-keep-dark><div class="faq"><h2>Frequently asked</h2>
<details open><summary>Can I use this commercially?</summary><p>Yes — every component ships with a commercial-use license included.</p></details>
<details><summary>Do I need a framework?</summary><p>No. Everything is plain HTML, CSS and vanilla JS you can paste anywhere.</p></details>
<details><summary>How do updates work?</summary><p>New components are added weekly and are included with an active plan.</p></details>
</div>
</body></html>`,

  "logo-cloud-marquee": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Logo Cloud Marquee</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif;overflow:hidden}
.wrap{width:100%;text-align:center}
.wrap small{font-size:9px;letter-spacing:2px;color:#77737f;font-weight:700}
.marquee{margin-top:18px;overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent);mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)}
.track{display:flex;gap:34px;width:max-content;animation:slide 16s linear infinite}
.track:hover{animation-play-state:paused}
.track b{font:700 18px "Space Grotesk",sans-serif;color:#4d4956;letter-spacing:-.03em;transition:color .3s,text-shadow .3s}
.track b:hover{color:var(--lav);text-shadow:0 0 16px rgba(196,181,253,.5)}
@keyframes slide{to{transform:translateX(-50%)}}
</style></head>
<body data-cf-keep-dark><div class="wrap"><small>TRUSTED BY TEAMS AT</small><div class="marquee"><div class="track" id="t"></div></div></div>
<script>
const names=["NORTHSTAR","ATELIER","VANTA","ORBIT","HALO","ECHO"];
const t=document.getElementById("t");
[...names,...names].forEach(function(n){const b=document.createElement("b");b.textContent=n;t.appendChild(b)});
</script>
</body></html>`,

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
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Launch Banner</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.banner{display:flex;align-items:center;gap:14px;padding:14px 18px;border:1px solid var(--line);border-radius:14px;background:#0d0d12;width:320px;box-shadow:0 20px 50px -22px rgba(0,0,0,.6)}
.icon{position:relative;width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#d7d0ff,#9b8aff);flex:none;box-shadow:0 8px 20px -8px rgba(155,138,255,.6)}
.info b{display:block;color:#f7f5fb;font-size:12px}
.info span{color:#817d8a;font-size:9px}
.upvote{margin-left:auto;display:grid;place-items:center;padding:8px 12px;border:1px solid var(--line);border-radius:10px;background:#111017;color:#eee9f8;font-size:11px;cursor:pointer;text-align:center;transition:transform .2s cubic-bezier(.34,1.56,.64,1),border-color .2s,background .2s}
.upvote.voted{border-color:transparent;background:linear-gradient(135deg,#d7d0ff,#9b8aff);color:#0a090f}
.upvote:active{transform:scale(.92)}
.upvote small{display:block;color:#5f5c68;font-size:8px}
.upvote.voted small{color:#3a2f57}
</style></head>
<body data-cf-keep-dark><div class="banner"><div class="icon"></div><div class="info"><b>CodeFusion is live on Launch Day</b><span>#3 Product of the Day</span></div>
<button class="upvote" id="up">▲<br><small id="count">412</small></button></div>
<script>document.getElementById("up").addEventListener("click",function(e){e.currentTarget.classList.add("voted");document.getElementById("count").textContent="413"});</script>
</body></html>`,

  "newsletter-signup-split-section": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Newsletter Signup Split Section</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.section{display:grid;grid-template-columns:1fr 1fr;gap:24px;width:min(460px,90vw);align-items:center}
.section h2{color:#f7f5fb;font-size:20px;margin:0 0 8px}
.section p{color:#a49dbc;font-size:11px;line-height:1.7;margin:0}
form{display:grid;gap:8px}
input{padding:12px;border:1px solid var(--line);border-radius:10px;background:#111017;color:#fff;font-size:11px;outline:0;transition:border-color .25s,box-shadow .25s}
input:focus{border-color:#6d5f93;box-shadow:0 0 0 3px rgba(196,181,253,.2)}
button{padding:12px;border:0;border-radius:10px;background:linear-gradient(135deg,#d7d0ff,#9b8aff);color:#0a090f;font-weight:800;font-size:11px;cursor:pointer;box-shadow:0 10px 24px -10px rgba(155,138,255,.6);transition:transform .15s cubic-bezier(.34,1.56,.64,1)}
button:active{transform:scale(.96)}
.done{display:none;color:#5fd4a1;font-size:11px;animation:fade .3s ease}
@keyframes fade{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:none}}
</style></head>
<body data-cf-keep-dark><div class="section"><div><h2>The weekly build note.</h2><p>One email a week with new components and release notes. No spam.</p></div>
<form id="form"><input type="email" placeholder="you@company.com" required><button>Subscribe</button><div class="done" id="done">✓ You're subscribed.</div></form></div>
<script>document.getElementById("form").addEventListener("submit",function(e){e.preventDefault();e.target.querySelector("button").style.display="none";document.getElementById("done").style.display="block"});</script>
</body></html>`,

  "social-share-cta-section": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Social Share CTA Section</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.wrap{text-align:center}
.wrap h2{color:#f7f5fb;font-size:22px;margin:0 0 16px}
.icons{display:flex;gap:10px;justify-content:center}
.icons button{width:40px;height:40px;border:1px solid var(--line);border-radius:10px;background:#111017;color:#c9c4d6;font-size:13px;cursor:pointer;transition:transform .2s cubic-bezier(.34,1.56,.64,1),border-color .2s,color .2s,box-shadow .2s}
.icons button:hover{color:#fff;border-color:#544c67;transform:translateY(-3px);box-shadow:0 10px 20px -10px rgba(155,138,255,.5)}
.copy{margin-top:14px;display:inline-flex;align-items:center;gap:8px;padding:8px 12px;border:1px solid var(--line);border-radius:9px;background:#0d0d12;color:#817d8a;font-size:10px;box-shadow:0 12px 30px -18px rgba(0,0,0,.6)}
.copy button{border:0;background:none;color:var(--lav);cursor:pointer;font-size:10px;font-weight:700}
</style></head>
<body data-cf-keep-dark><div class="wrap"><h2>Loved it? Share it.</h2>
<div class="icons"><button>𝕏</button><button>in</button><button>f</button></div>
<div class="copy"><span id="url">codefusion.dev/launch</span><button id="copy">Copy link</button></div></div>
<script>document.getElementById("copy").addEventListener("click",function(e){e.target.textContent="Copied ✓";setTimeout(function(){e.target.textContent="Copy link"},1500)});</script>
</body></html>`,

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
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Final CTA Gradient Section</title><style>
:root{--bg:#050507}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;overflow:hidden;position:relative}
body::before{content:"";position:absolute;inset:-20%;background:radial-gradient(circle at 50% 50%,rgba(155,138,255,.16),transparent 60%);pointer-events:none}
.wrap{position:relative;text-align:center;padding:40px}
.wrap h2{color:#f7f5fb;font-size:26px;margin:0 0 20px}
.shimmer-btn{position:relative;padding:17px 36px;border:0;border-radius:14px;font-size:13px;font-weight:800;color:#0a090f;cursor:pointer;background:linear-gradient(135deg,#d7d0ff,#9b8aff);overflow:hidden;box-shadow:0 20px 50px -16px rgba(155,138,255,.6);transition:transform .15s cubic-bezier(.34,1.56,.64,1)}
.shimmer-btn:active{transform:scale(.96)}
.shimmer-btn::after{content:"";position:absolute;top:0;bottom:0;width:60px;background:linear-gradient(120deg,transparent,rgba(255,255,255,.55),transparent);animation:sweep 2.6s infinite}
@keyframes sweep{from{left:-80px}to{left:120%}}
</style></head>
<body data-cf-keep-dark><div class="wrap"><h2>Stop rebuilding the basics.</h2><button class="shimmer-btn">Start building free →</button></div>
</body></html>`,

  "circuit-trace-border": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Circuit Trace Border</title><style>
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:#050507;font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:26px}
.stage{display:grid;gap:20px;place-items:center}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.board{position:relative;width:min(300px,84vw);aspect-ratio:1.55/1;border-radius:10px;background:#07120d;
  background-image:radial-gradient(circle at 50% 40%,rgba(54,211,153,.09),transparent 60%);overflow:hidden}
svg{position:absolute;inset:0;width:100%;height:100%}
.rail{fill:none;stroke:#13462f;stroke-width:1.6}
.pulse{fill:none;stroke:#4ade9b;stroke-width:1.8;stroke-linecap:round;
  filter:drop-shadow(0 0 4px rgba(74,222,155,.9));stroke-dasharray:26 320;animation:travel 3.4s linear infinite}
.pulse.b{animation-delay:-1.15s;stroke:#7dd3fc;filter:drop-shadow(0 0 4px rgba(125,211,252,.9))}
.pulse.c{animation-delay:-2.3s;stroke:#c4b5fd;filter:drop-shadow(0 0 4px rgba(196,181,253,.9))}
@keyframes travel{to{stroke-dashoffset:-346}}
.pad{fill:#0d2a1d;stroke:#2f7f57;stroke-width:1.4}
.label{position:absolute;inset:0;display:grid;place-items:center;text-align:center;padding:26px}
.label b{display:block;color:#d7fbe8;font-size:14px;letter-spacing:-.01em}
.label small{display:block;margin-top:5px;color:#5f9d81;font-size:9px;letter-spacing:1.5px;font-family:ui-monospace,Menlo,monospace}
@media(prefers-reduced-motion:reduce){.pulse{animation:none;stroke-dasharray:none;opacity:.5}}
</style></head>
<body data-cf-keep-dark><div class="stage"><span class="kicker">SIGNAL ON THE TRACE</span>
<div class="board">
<svg viewBox="0 0 310 200" preserveAspectRatio="none">
  <path class="rail" d="M20 14 H290 V186 H20 Z"/>
  <path class="pulse"   d="M20 14 H290 V186 H20 Z"/>
  <path class="pulse b" d="M20 14 H290 V186 H20 Z"/>
  <path class="pulse c" d="M20 14 H290 V186 H20 Z"/>
  <circle class="pad" cx="20" cy="14" r="4.5"/><circle class="pad" cx="290" cy="14" r="4.5"/>
  <circle class="pad" cx="290" cy="186" r="4.5"/><circle class="pad" cx="20" cy="186" r="4.5"/>
</svg>
<div class="label"><b>Edge Controller</b><small>REV 2.4 · ONLINE</small></div>
</div>
</div>
</body></html>`,

  "kinetic-cursor-grid": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Kinetic Cursor Grid</title><style>
*{box-sizing:border-box}
html,body{height:100%}
body{margin:0;background:#05060a;font-family:Inter,ui-sans-serif,Arial,sans-serif;overflow:hidden}
canvas{position:fixed;inset:0;width:100%;height:100%;display:block}
.copy{position:relative;z-index:1;height:100%;display:grid;place-items:center;text-align:center;padding:26px;pointer-events:none}
.copy small{color:#6f7ea8;font-size:8px;letter-spacing:2.5px;font-weight:700}
.copy h1{margin:10px 0 8px;color:#eaf1ff;font-size:clamp(19px,5.5vw,30px);letter-spacing:-.03em;line-height:1.15}
.copy p{margin:0;color:#7e8db5;font-size:11px;line-height:1.6;max-width:30ch}
</style></head>
<body data-cf-keep-dark>
<canvas id="c"></canvas>
<div class="copy"><div><small>INTERACTIVE BACKGROUND</small>
<h1>Move your cursor.<br>Click anywhere.</h1>
<p>A kinetic grid that warps toward the pointer and ripples on every click.</p></div></div>
<script>
var c=document.getElementById("c"),x=c.getContext("2d"),W,H,GAP=26;
var mx=-999,my=-999,ripples=[];
function size(){W=c.width=innerWidth;H=c.height=innerHeight}
size();addEventListener("resize",size);
addEventListener("pointermove",function(e){mx=e.clientX;my=e.clientY});
addEventListener("pointerleave",function(){mx=-999;my=-999});
addEventListener("click",function(e){ripples.push({x:e.clientX,y:e.clientY,r:0})});
function frame(){
  x.clearRect(0,0,W,H);
  for(var i=ripples.length-1;i>=0;i--){ripples[i].r+=6;if(ripples[i].r>Math.max(W,H))ripples.splice(i,1)}
  for(var gx=GAP/2;gx<W;gx+=GAP){
    for(var gy=GAP/2;gy<H;gy+=GAP){
      var dx=gx-mx,dy=gy-my,d=Math.hypot(dx,dy),ox=0,oy=0,glow=0;
      if(d<150){var pull=(1-d/150);ox=-dx/d*pull*11;oy=-dy/d*pull*11;glow=pull}
      for(var k=0;k<ripples.length;k++){
        var rp=ripples[k],rd=Math.abs(Math.hypot(gx-rp.x,gy-rp.y)-rp.r);
        if(rd<34){var w=(1-rd/34);glow=Math.max(glow,w*.9)}
      }
      var s=1.1+glow*2.1;
      x.fillStyle="rgba("+Math.round(110+glow*145)+","+Math.round(140+glow*110)+",255,"+(0.2+glow*0.8)+")";
      x.beginPath();x.arc(gx+ox,gy+oy,s,0,6.283);x.fill();
    }
  }
  requestAnimationFrame(frame);
}
frame();
</script>
</body></html>`,

  "dot-pattern-spotlight": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Dot Pattern Spotlight</title><style>
*{box-sizing:border-box}
html,body{height:100%}
body{margin:0;background:#08080c;font-family:Inter,ui-sans-serif,Arial,sans-serif;overflow:hidden;position:relative}
/* Two identical dot layers: a dim one always on, and a bright one revealed only
   inside a mask that follows the pointer. */
.dots{position:fixed;inset:0;background-image:radial-gradient(#2a2a39 1.4px,transparent 1.4px);background-size:22px 22px}
.dots.lit{background-image:radial-gradient(#b9a8ff 1.6px,transparent 1.6px);
  -webkit-mask:radial-gradient(190px circle at var(--x,-300px) var(--y,-300px),#000 0%,rgba(0,0,0,.35) 45%,transparent 72%);
  mask:radial-gradient(190px circle at var(--x,-300px) var(--y,-300px),#000 0%,rgba(0,0,0,.35) 45%,transparent 72%)}
.copy{position:relative;z-index:1;height:100%;display:grid;place-items:center;text-align:center;padding:26px;pointer-events:none}
.copy h1{margin:0;color:#f2efff;font-size:clamp(22px,7vw,38px);letter-spacing:-.04em}
.copy p{margin:9px 0 0;color:#767089;font-size:11px}
</style></head>
<body data-cf-keep-dark>
<div class="dots"></div><div class="dots lit" id="lit"></div>
<div class="copy"><div><h1>Dot Pattern</h1><p>The grid only lights where you point.</p></div></div>
<script>
var lit=document.getElementById("lit");
addEventListener("pointermove",function(e){lit.style.setProperty("--x",e.clientX+"px");lit.style.setProperty("--y",e.clientY+"px")});
</script>
</body></html>`,

  "aurora-mesh-drift": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Aurora Mesh Drift</title><style>
*{box-sizing:border-box}
html,body{height:100%}
body{margin:0;background:#04040a;font-family:Inter,ui-sans-serif,Arial,sans-serif;overflow:hidden;position:relative}
.mesh{position:fixed;inset:-30%;filter:blur(70px);opacity:.9}
.mesh i{position:absolute;display:block;border-radius:50%;mix-blend-mode:screen}
.m1{width:52%;aspect-ratio:1;background:#4c1d95;left:2%;top:6%;animation:d1 17s ease-in-out infinite alternate}
.m2{width:44%;aspect-ratio:1;background:#0369a1;right:3%;top:18%;animation:d2 21s ease-in-out infinite alternate}
.m3{width:48%;aspect-ratio:1;background:#be185d;left:26%;bottom:2%;animation:d3 19s ease-in-out infinite alternate}
.m4{width:36%;aspect-ratio:1;background:#0d9488;right:22%;bottom:12%;animation:d1 23s ease-in-out infinite alternate-reverse}
@keyframes d1{to{transform:translate(26%,-18%) scale(1.22)}}
@keyframes d2{to{transform:translate(-22%,20%) scale(.84)}}
@keyframes d3{to{transform:translate(16%,-24%) scale(1.14)}}
.copy{position:relative;z-index:1;height:100%;display:grid;place-items:center;text-align:center;padding:26px;pointer-events:none}
.copy h1{margin:0;color:#fff;font-size:clamp(21px,6.5vw,34px);letter-spacing:-.035em}
.copy p{margin:9px 0 0;color:rgba(255,255,255,.62);font-size:11px}
@media(prefers-reduced-motion:reduce){.mesh i{animation:none}}
</style></head>
<body data-cf-keep-dark>
<div class="mesh"><i class="m1"></i><i class="m2"></i><i class="m3"></i><i class="m4"></i></div>
<div class="copy"><div><h1>Aurora Mesh</h1><p>Four screen-blended fields drifting out of sync.</p></div></div>
</body></html>`,

  "gradient-wave-field": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Gradient Wave Field</title><style>
*{box-sizing:border-box}
html,body{height:100%}
body{margin:0;overflow:hidden;font-family:Inter,ui-sans-serif,Arial,sans-serif;
  background:linear-gradient(180deg,#eaf6ff 0%,#cfe9ff 42%,#9fd2ff 100%)}
.waves{position:fixed;inset:0}
svg{position:absolute;bottom:0;left:0;width:260%;height:auto}
.w1{fill:rgba(255,255,255,.55);animation:slide 18s linear infinite}
.w2{fill:rgba(126,196,255,.5);animation:slide 26s linear infinite;bottom:-12px}
.w3{fill:rgba(56,152,236,.42);animation:slide 34s linear infinite reverse;bottom:-26px}
@keyframes slide{to{transform:translateX(-38.4%)}}
.copy{position:relative;z-index:1;height:100%;display:grid;place-items:center;text-align:center;padding:26px;pointer-events:none}
.copy h1{margin:0;color:#0b3a63;font-size:clamp(22px,7vw,36px);letter-spacing:-.04em}
.copy p{margin:9px 0 0;color:#3a6d99;font-size:11px}
@media(prefers-reduced-motion:reduce){svg{animation:none}}
</style></head>
<body>
<div class="waves">
<svg class="w1" viewBox="0 0 1440 220" preserveAspectRatio="none"><path d="M0 120 C180 60 300 180 480 130 C660 80 780 170 960 120 C1140 70 1260 160 1440 110 V220 H0 Z"/></svg>
<svg class="w2" viewBox="0 0 1440 220" preserveAspectRatio="none"><path d="M0 150 C200 100 320 200 520 155 C720 110 840 195 1040 150 C1240 105 1330 180 1440 145 V220 H0 Z"/></svg>
<svg class="w3" viewBox="0 0 1440 220" preserveAspectRatio="none"><path d="M0 175 C160 140 340 210 520 178 C700 146 860 205 1040 175 C1220 145 1350 195 1440 172 V220 H0 Z"/></svg>
</div>
<div class="copy"><div><h1>Gradient Wave</h1><p>Three wave bands sliding at different speeds.</p></div></div>
</body></html>`,

  "starfield-parallax": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Starfield Parallax</title><style>
*{box-sizing:border-box}
html,body{height:100%}
body{margin:0;background:radial-gradient(circle at 50% 40%,#14162c,#04040a 70%);font-family:Inter,ui-sans-serif,Arial,sans-serif;overflow:hidden}
canvas{position:fixed;inset:0;width:100%;height:100%;display:block}
.copy{position:relative;z-index:1;height:100%;display:grid;place-items:center;text-align:center;padding:26px;pointer-events:none}
.copy h1{margin:0;color:#eef1ff;font-size:clamp(21px,6.5vw,34px);letter-spacing:-.035em}
.copy p{margin:9px 0 0;color:#7d84a8;font-size:11px}
</style></head>
<body data-cf-keep-dark>
<canvas id="c"></canvas>
<div class="copy"><div><h1>Starfield</h1><p>Three depth layers, each tracking the pointer by a different amount.</p></div></div>
<script>
var c=document.getElementById("c"),x=c.getContext("2d"),W,H,stars=[],tx=0,ty=0,cx=0,cy=0;
function size(){W=c.width=innerWidth;H=c.height=innerHeight;build()}
function build(){
  stars=[];
  for(var i=0;i<190;i++){
    var depth=Math.random();
    stars.push({x:Math.random()*W,y:Math.random()*H,d:depth,r:depth*1.5+.35});
  }
}
size();addEventListener("resize",size);
addEventListener("pointermove",function(e){tx=(e.clientX/innerWidth-.5);ty=(e.clientY/innerHeight-.5)});
function frame(){
  cx+=(tx-cx)*.05;cy+=(ty-cy)*.05;
  x.clearRect(0,0,W,H);
  for(var i=0;i<stars.length;i++){
    var s=stars[i],shift=(s.d*34+6);
    var px=s.x-cx*shift,py=s.y-cy*shift;
    x.globalAlpha=.25+s.d*.75;
    x.fillStyle=s.d>.72?"#c9d4ff":"#ffffff";
    x.beginPath();x.arc(px,py,s.r,0,6.283);x.fill();
  }
  x.globalAlpha=1;
  requestAnimationFrame(frame);
}
frame();
</script>
</body></html>`,

  "grain-gradient-bg": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Grain Gradient</title><style>
*{box-sizing:border-box}
html,body{height:100%}
body{margin:0;overflow:hidden;font-family:Inter,ui-sans-serif,Arial,sans-serif;position:relative;background:#0a0713}
.tint{position:fixed;inset:0;background:linear-gradient(125deg,#3b1d6e,#7a2f6b 32%,#b4573f 62%,#1d3b6e 100%);
  background-size:280% 280%;animation:shift 16s ease-in-out infinite}
@keyframes shift{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
/* Real film grain rather than a tiled PNG: turbulence rendered once, then held
   above the gradient at low opacity. */
.grain{position:fixed;inset:-50%;opacity:.26;pointer-events:none;mix-blend-mode:overlay;animation:jitter .6s steps(3) infinite}
@keyframes jitter{0%{transform:translate(0,0)}33%{transform:translate(-2%,1.5%)}66%{transform:translate(1.5%,-1%)}}
.copy{position:relative;z-index:2;height:100%;display:grid;place-items:center;text-align:center;padding:26px;pointer-events:none}
.copy h1{margin:0;color:#fff;font-size:clamp(21px,6.5vw,34px);letter-spacing:-.035em}
.copy p{margin:9px 0 0;color:rgba(255,255,255,.66);font-size:11px}
@media(prefers-reduced-motion:reduce){.tint,.grain{animation:none}}
</style></head>
<body data-cf-keep-dark>
<div class="tint"></div>
<svg class="grain" xmlns="http://www.w3.org/2000/svg"><filter id="g"><feTurbulence type="fractalNoise" baseFrequency="0.82" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#g)"/></svg>
<div class="copy"><div><h1>Grain Gradient</h1><p>A drifting gradient under live turbulence grain.</p></div></div>
</body></html>`,

  "topographic-flow-lines": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Topographic Flow Lines</title><style>
*{box-sizing:border-box}
html,body{height:100%}
body{margin:0;background:#070709;font-family:Inter,ui-sans-serif,Arial,sans-serif;overflow:hidden}
canvas{position:fixed;inset:0;width:100%;height:100%;display:block}
.copy{position:relative;z-index:1;height:100%;display:grid;place-items:center;text-align:center;padding:26px;pointer-events:none}
.copy h1{margin:0;color:#ececf2;font-size:clamp(21px,6.5vw,34px);letter-spacing:-.035em}
.copy p{margin:9px 0 0;color:#6e6e7d;font-size:11px}
</style></head>
<body data-cf-keep-dark>
<canvas id="c"></canvas>
<div class="copy"><div><h1>Flow Lines</h1><p>Contours redrawn each frame from a drifting noise field.</p></div></div>
<script>
var c=document.getElementById("c"),x=c.getContext("2d"),W,H,t=0,mx=.5;
function size(){W=c.width=innerWidth;H=c.height=innerHeight}
size();addEventListener("resize",size);
addEventListener("pointermove",function(e){mx=e.clientX/innerWidth});
function frame(){
  x.clearRect(0,0,W,H);
  var lines=26;
  for(var i=0;i<lines;i++){
    var p=i/lines;
    x.beginPath();
    for(var px=0;px<=W;px+=8){
      var u=px/W;
      var y=H*(0.12+p*0.78)
        + Math.sin(u*5.1+t*0.6+i*0.24)*22*(0.4+mx)
        + Math.sin(u*11.3-t*0.34+i*0.11)*9;
      if(px===0)x.moveTo(px,y);else x.lineTo(px,y);
    }
    x.strokeStyle="rgba(190,190,215,"+(0.06+0.16*Math.sin(p*3.14))+")";
    x.lineWidth=1;x.stroke();
  }
  t+=0.012;
  requestAnimationFrame(frame);
}
frame();
</script>
</body></html>`,

  "ripple-surface-bg": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Ripple Surface</title><style>
*{box-sizing:border-box}
html,body{height:100%}
body{margin:0;overflow:hidden;font-family:Inter,ui-sans-serif,Arial,sans-serif;
  background:linear-gradient(160deg,#06283d,#0b4f6c 55%,#01baef 190%)}
canvas{position:fixed;inset:0;width:100%;height:100%;display:block}
.copy{position:relative;z-index:1;height:100%;display:grid;place-items:center;text-align:center;padding:26px;pointer-events:none}
.copy h1{margin:0;color:#eaf8ff;font-size:clamp(21px,6.5vw,34px);letter-spacing:-.035em}
.copy p{margin:9px 0 0;color:#8fc3dc;font-size:11px}
</style></head>
<body data-cf-keep-dark>
<canvas id="c"></canvas>
<div class="copy"><div><h1>Ripple Surface</h1><p>Click or drag to disturb the water.</p></div></div>
<script>
var c=document.getElementById("c"),x=c.getContext("2d"),W,H,drops=[];
function size(){W=c.width=innerWidth;H=c.height=innerHeight}
size();addEventListener("resize",size);
function drop(e){drops.push({x:e.clientX,y:e.clientY,r:0,a:.55})}
addEventListener("click",drop);
addEventListener("pointermove",function(e){if(Math.random()<.12)drop(e)});
function frame(){
  x.clearRect(0,0,W,H);
  for(var i=drops.length-1;i>=0;i--){
    var d=drops[i];
    d.r+=2.4;d.a-=.006;
    if(d.a<=0){drops.splice(i,1);continue}
    x.beginPath();x.arc(d.x,d.y,d.r,0,6.283);
    x.strokeStyle="rgba(210,245,255,"+d.a+")";x.lineWidth=1.4;x.stroke();
    x.beginPath();x.arc(d.x,d.y,d.r*.66,0,6.283);
    x.strokeStyle="rgba(150,220,255,"+(d.a*.5)+")";x.lineWidth=1;x.stroke();
  }
  requestAnimationFrame(frame);
}
frame();
</script>
</body></html>`,

  "border-beam-comet": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Border Beam</title><style>
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:#07070c;font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:24px}
/* Oversized conic square spinning behind the card; the inner panel covers all of
   it except a 3px rim, so only the beam arc shows along the edge. */
.rim{position:relative;width:min(300px,86vw);aspect-ratio:1.55/1;border-radius:18px;padding:3px;overflow:hidden;
  background:#1a1a26;box-shadow:0 0 34px rgba(56,189,248,.16)}
.rim::before{content:"";position:absolute;left:50%;top:50%;width:200%;aspect-ratio:1;translate:-50% -50%;
  background:conic-gradient(from 0deg,transparent 0 62%,rgba(56,189,248,.35) 74%,#38bdf8 86%,#ffffff 92%,transparent 96%);
  animation:beam 2.6s linear infinite}
@keyframes beam{to{rotate:360deg}}
.panel{position:relative;z-index:1;height:100%;border-radius:15px;background:#0b0b12;
  display:grid;place-items:center;text-align:center;padding:24px}
.panel b{display:block;color:#eaf6ff;font-size:16px;letter-spacing:-.02em}
.panel small{display:block;margin-top:6px;color:#5e7691;font-size:9px;letter-spacing:2px}
@media(prefers-reduced-motion:reduce){.rim::before{animation:none}}
</style></head>
<body data-cf-keep-dark>
<div class="rim"><div class="panel"><div><b>Border Beam</b><small>ONE COMET · 2.6S LAP</small></div></div></div>
</body></html>`,

  "rainbow-spin-border": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Rainbow Spin Border</title><style>
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:#07070c;font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:24px}
.rim{position:relative;width:min(300px,86vw);aspect-ratio:1.55/1;border-radius:18px;padding:3px;overflow:hidden;
  box-shadow:0 0 40px rgba(168,85,247,.22)}
.rim::before{content:"";position:absolute;left:50%;top:50%;width:200%;aspect-ratio:1;translate:-50% -50%;
  background:conic-gradient(#f43f5e,#f59e0b,#84cc16,#06b6d4,#6366f1,#a855f7,#f43f5e);
  animation:spin 4s linear infinite;filter:saturate(1.3)}
@keyframes spin{to{rotate:360deg}}
.panel{position:relative;z-index:1;height:100%;border-radius:15px;background:#0b0b12;
  display:grid;place-items:center;text-align:center;padding:24px}
.panel b{display:block;color:#f6f2ff;font-size:16px;letter-spacing:-.02em}
.panel small{display:block;margin-top:6px;color:#7b6f92;font-size:9px;letter-spacing:2px}
@media(prefers-reduced-motion:reduce){.rim::before{animation:none}}
</style></head>
<body data-cf-keep-dark>
<div class="rim"><div class="panel"><div><b>Rainbow Spin</b><small>FULL SPECTRUM RIM</small></div></div></div>
</body></html>`,

  "snake-chase-border": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Snake Chase Border</title><style>
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:#07070c;font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:24px}
.wrap{position:relative;width:min(300px,86vw);aspect-ratio:1.55/1}
svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
.track{fill:none;stroke:#1c1c2a;stroke-width:3}
/* A long dash with a long gap is all a "snake" is — the offset animation is what
   makes the segment travel instead of the whole outline lighting up. */
.snake{fill:none;stroke-width:3;stroke-linecap:round;stroke-dasharray:110 560;
  animation:chase 3s linear infinite}
.s1{stroke:#22d3ee;filter:drop-shadow(0 0 6px rgba(34,211,238,.85))}
.s2{stroke:#a855f7;filter:drop-shadow(0 0 6px rgba(168,85,247,.85));animation-delay:-1.5s}
@keyframes chase{to{stroke-dashoffset:-670}}
.panel{position:absolute;inset:8px;border-radius:13px;background:#0b0b12;display:grid;place-items:center;text-align:center;padding:22px}
.panel b{display:block;color:#eafcff;font-size:16px;letter-spacing:-.02em}
.panel small{display:block;margin-top:6px;color:#5d7a84;font-size:9px;letter-spacing:2px}
@media(prefers-reduced-motion:reduce){.snake{animation:none;stroke-dasharray:none;opacity:.45}}
</style></head>
<body data-cf-keep-dark>
<div class="wrap">
<svg viewBox="0 0 310 200" preserveAspectRatio="none">
  <rect class="track" x="4" y="4" width="302" height="192" rx="16"/>
  <rect class="snake s1" x="4" y="4" width="302" height="192" rx="16"/>
  <rect class="snake s2" x="4" y="4" width="302" height="192" rx="16"/>
</svg>
<div class="panel"><div><b>Snake Chase</b><small>TWO SEGMENTS · OFFSET</small></div></div>
</div>
</body></html>`,

  "shine-sweep-border": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Shine Sweep Border</title><style>
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:#07070c;font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:24px}
.rim{position:relative;width:min(300px,86vw);aspect-ratio:1.55/1;border-radius:18px;padding:3px;overflow:hidden;
  background:linear-gradient(135deg,#312b45,#4b4468 50%,#312b45)}
/* The rim colour is static; a specular band slides across it on a diagonal, so
   the highlight reads as light moving over metal rather than a colour cycle. */
.rim::before{content:"";position:absolute;inset:-60%;
  background:linear-gradient(115deg,transparent 40%,rgba(255,255,255,.9) 50%,transparent 60%);
  animation:sweep 3.2s ease-in-out infinite}
@keyframes sweep{0%{translate:-55% -55%}60%,100%{translate:55% 55%}}
.panel{position:relative;z-index:1;height:100%;border-radius:15px;background:#0b0b12;
  display:grid;place-items:center;text-align:center;padding:24px}
.panel b{display:block;color:#f3f0fb;font-size:16px;letter-spacing:-.02em}
.panel small{display:block;margin-top:6px;color:#7c7591;font-size:9px;letter-spacing:2px}
@media(prefers-reduced-motion:reduce){.rim::before{animation:none;opacity:.35}}
</style></head>
<body data-cf-keep-dark>
<div class="rim"><div class="panel"><div><b>Shine Sweep</b><small>SPECULAR PASS</small></div></div></div>
</body></html>`,

  "pulse-ring-border": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Pulse Ring Border</title><style>
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:#07070c;font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:30px}
.wrap{position:relative;width:min(290px,84vw);aspect-ratio:1.55/1}
/* Each ring is a copy of the outline scaling outward and fading, staggered so a
   new pulse leaves the edge before the last one dies. */
.ring{position:absolute;inset:0;border:2px solid #34d399;border-radius:18px;opacity:0;
  animation:pulse 2.4s ease-out infinite}
.ring:nth-child(2){animation-delay:.8s}
.ring:nth-child(3){animation-delay:1.6s}
@keyframes pulse{0%{scale:1;opacity:.85}100%{scale:1.16;opacity:0}}
.panel{position:absolute;inset:0;border:2px solid #34d399;border-radius:18px;background:#0b0f0d;
  display:grid;place-items:center;text-align:center;padding:24px;box-shadow:0 0 30px rgba(52,211,153,.18)}
.panel b{display:block;color:#e7fff5;font-size:16px;letter-spacing:-.02em}
.panel small{display:block;margin-top:6px;color:#4e8b73;font-size:9px;letter-spacing:2px}
@media(prefers-reduced-motion:reduce){.ring{animation:none;opacity:0}}
</style></head>
<body data-cf-keep-dark>
<div class="wrap">
  <span class="ring"></span><span class="ring"></span><span class="ring"></span>
  <div class="panel"><div><b>Pulse Ring</b><small>EMITTING · 2.4S</small></div></div>
</div>
</body></html>`,

  "scanline-border": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Scanline Border</title><style>
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:#07070c;font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:24px}
.rim{position:relative;width:min(300px,86vw);aspect-ratio:1.55/1;border-radius:18px;padding:3px;overflow:hidden;
  background:#161622}
/* A horizontal band travelling top to bottom. Because it sits in the rim layer,
   it lights whichever part of the border it is level with. */
.rim::before{content:"";position:absolute;left:0;right:0;height:38%;
  background:linear-gradient(180deg,transparent,#f97316 45%,#fde68a 52%,#f97316 58%,transparent);
  filter:blur(1px);animation:scan 2.8s cubic-bezier(.5,0,.5,1) infinite}
@keyframes scan{0%{top:-40%}100%{top:102%}}
.panel{position:relative;z-index:1;height:100%;border-radius:15px;background:#0c0a09;
  display:grid;place-items:center;text-align:center;padding:24px}
.panel b{display:block;color:#fff4e6;font-size:16px;letter-spacing:-.02em}
.panel small{display:block;margin-top:6px;color:#8a6a4b;font-size:9px;letter-spacing:2px}
@media(prefers-reduced-motion:reduce){.rim::before{animation:none;top:32%}}
</style></head>
<body data-cf-keep-dark>
<div class="rim"><div class="panel"><div><b>Scanline</b><small>TOP TO BOTTOM SWEEP</small></div></div></div>
</body></html>`,

  "dual-counter-beam-border": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Dual Counter Beam</title><style>
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:#07070c;font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:24px}
.rim{position:relative;width:min(300px,86vw);aspect-ratio:1.55/1;border-radius:18px;padding:3px;overflow:hidden;background:#171723}
/* Two arcs on the same rim turning opposite ways, so they cross twice a lap and
   briefly stack into a brighter flare at the crossing point. */
.rim::before,.rim::after{content:"";position:absolute;left:50%;top:50%;width:200%;aspect-ratio:1;translate:-50% -50%}
.rim::before{background:conic-gradient(from 0deg,transparent 0 70%,#f43f5e 88%,#ffd6de 94%,transparent 98%);
  animation:cw 3.4s linear infinite}
.rim::after{background:conic-gradient(from 180deg,transparent 0 70%,#22d3ee 88%,#d6f7ff 94%,transparent 98%);
  animation:ccw 3.4s linear infinite;mix-blend-mode:screen}
@keyframes cw{to{rotate:360deg}}
@keyframes ccw{to{rotate:-360deg}}
.panel{position:relative;z-index:1;height:100%;border-radius:15px;background:#0b0b12;
  display:grid;place-items:center;text-align:center;padding:24px}
.panel b{display:block;color:#f4f6ff;font-size:16px;letter-spacing:-.02em}
.panel small{display:block;margin-top:6px;color:#77708a;font-size:9px;letter-spacing:2px}
@media(prefers-reduced-motion:reduce){.rim::before,.rim::after{animation:none}}
</style></head>
<body data-cf-keep-dark>
<div class="rim"><div class="panel"><div><b>Counter Beam</b><small>TWO ARCS · OPPOSED</small></div></div></div>
</body></html>`,

  "aurora-rim-border": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Aurora Rim</title><style>
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:#07070c;font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:24px}
.rim{position:relative;width:min(300px,86vw);aspect-ratio:1.55/1;border-radius:18px;padding:3px;overflow:hidden;
  box-shadow:0 0 44px rgba(99,102,241,.22)}
/* Not a rotation — the gradient itself slides across an oversized background box,
   which reads as colour flowing along the rim rather than a wheel turning. */
.rim::before{content:"";position:absolute;inset:0;
  background:linear-gradient(115deg,#22d3ee,#6366f1 22%,#a855f7 44%,#34d399 66%,#22d3ee 88%,#6366f1);
  background-size:340% 100%;filter:blur(.4px) saturate(1.25);
  animation:flow 7s linear infinite}
@keyframes flow{to{background-position:340% 0}}
.panel{position:relative;z-index:1;height:100%;border-radius:15px;background:#0b0b12;
  display:grid;place-items:center;text-align:center;padding:24px}
.panel b{display:block;color:#eef4ff;font-size:16px;letter-spacing:-.02em}
.panel small{display:block;margin-top:6px;color:#6d7794;font-size:9px;letter-spacing:2px}
@media(prefers-reduced-motion:reduce){.rim::before{animation:none}}
</style></head>
<body data-cf-keep-dark>
<div class="rim"><div class="panel"><div><b>Aurora Rim</b><small>FLOWING · NOT SPINNING</small></div></div></div>
</body></html>`,

  "neon-flicker-border": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Neon Flicker Border</title><style>
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:#07070c;font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:24px}
.tube{position:relative;width:min(300px,86vw);aspect-ratio:1.55/1;border-radius:18px;
  border:2.5px solid #ff4fd8;background:#0d0711;display:grid;place-items:center;text-align:center;padding:24px;
  animation:flicker 4.5s linear infinite}
/* Uneven keyframe spacing is what sells a failing tube — evenly spaced steps read
   as a deliberate pulse instead of a fault. */
@keyframes flicker{
  0%,14%,16%,22%,24%,55%,57%,100%{
    box-shadow:0 0 6px rgba(255,79,216,.9),0 0 22px rgba(255,79,216,.55),0 0 46px rgba(255,79,216,.3),inset 0 0 18px rgba(255,79,216,.22);
    border-color:#ff4fd8}
  15%,23%,56%{box-shadow:0 0 2px rgba(255,79,216,.25);border-color:#5d2a52}
}
.tube b{display:block;color:#ffe9fa;font-size:17px;letter-spacing:-.02em;text-shadow:0 0 12px rgba(255,79,216,.8)}
.tube small{display:block;margin-top:6px;color:#9b5c8c;font-size:9px;letter-spacing:2px}
@media(prefers-reduced-motion:reduce){.tube{animation:none;
  box-shadow:0 0 6px rgba(255,79,216,.9),0 0 22px rgba(255,79,216,.5)}}
</style></head>
<body data-cf-keep-dark>
<div class="tube"><div><b>Neon Flicker</b><small>FAILING TUBE</small></div></div>
</body></html>`,

  "liquid-metal-border-button": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Liquid Metal Border Button</title><style>
:root{--line:#272632}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:#050507;font-family:Inter,ui-sans-serif,Arial,sans-serif}
.stage{display:grid;gap:18px;place-items:center;padding:34px}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.row{display:flex;align-items:center;gap:18px}

/* 3px of rim, not 2 — at card-preview scale a thinner ring disappears and the
   button just reads as a flat black pill. */
.metal{position:relative;border-radius:100px;padding:3px;overflow:hidden;cursor:pointer;border:0;background:transparent;
  box-shadow:0 0 0 1px rgba(0,0,0,.35),0 20px 12px rgba(0,0,0,.08),0 9px 9px rgba(0,0,0,.12),0 2px 5px rgba(0,0,0,.15);
  transition:box-shadow .3s cubic-bezier(.34,1.56,.64,1),transform .15s cubic-bezier(.4,0,.2,1)}
.metal::before{content:"";position:absolute;left:50%;top:50%;width:260%;aspect-ratio:1;translate:-50% -50%;
  background:conic-gradient(#ffffff,#8f8f8f,#ffffff,#5a5a5a,#e6e6e6,#3f3f3f,#fdfdfd,#7a7a7a,#ffffff);
  animation:metalSpin 6s linear infinite}
.metal:hover{box-shadow:0 0 0 1px rgba(0,0,0,.45),0 12px 6px rgba(0,0,0,.05),0 8px 5px rgba(0,0,0,.1),0 4px 4px rgba(0,0,0,.15),0 1px 2px rgba(0,0,0,.2)}
.metal:hover::before{animation-duration:2.6s}
.metal:active{transform:translateY(1px) scale(.98)}
.metal:active .face{box-shadow:inset 0 2px 4px rgba(0,0,0,.45),inset 0 1px 2px rgba(0,0,0,.35)}
@keyframes metalSpin{to{rotate:360deg}}

.face{position:relative;z-index:1;display:flex;align-items:center;justify-content:center;gap:7px;height:42px;padding:0 24px;border-radius:100px;
  background:linear-gradient(180deg,#202020 0%,#000000 100%);color:#8a8a8a;font-size:14px;font-weight:400;white-space:nowrap;
  text-shadow:0 1px 2px rgba(0,0,0,.5);transition:box-shadow .15s cubic-bezier(.4,0,.2,1),color .3s}
.metal:hover .face{color:#b5b5b5}
.metal.icon .face{width:42px;padding:0}
.face svg{width:16px;height:16px;filter:drop-shadow(0 1px 2px rgba(0,0,0,.5))}

.ripple{position:absolute;width:20px;height:20px;border-radius:50%;pointer-events:none;translate:-50% -50%;z-index:2;
  background:radial-gradient(circle,rgba(255,255,255,.45) 0%,rgba(255,255,255,0) 70%);animation:rippleOut .6s ease-out forwards}
@keyframes rippleOut{from{scale:0;opacity:.6}to{scale:4;opacity:0}}

@media(prefers-reduced-motion:reduce){.metal::before{animation:none}.metal:active{transform:none}.ripple{display:none}}
</style></head>
<body data-cf-keep-dark><div class="stage"><span class="kicker">CLICK ME</span>
<div class="row">
<button class="metal" id="a"><span class="face">Get Started</span></button>
<button class="metal icon" id="b"><span class="face">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z"/></svg>
</span></button>
</div></div>
<script>
document.querySelectorAll(".metal").forEach(function(btn){
  btn.addEventListener("click",function(e){
    var r=btn.getBoundingClientRect();
    var dot=document.createElement("span");
    dot.className="ripple";
    dot.style.left=(e.clientX-r.left)+"px";
    dot.style.top=(e.clientY-r.top)+"px";
    btn.appendChild(dot);
    setTimeout(function(){dot.remove()},600);
  });
});
</script>
</body></html>`,

  "glowing-shadow-border": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Glowing Shadow Border</title><style>
/* Registering these as typed custom properties is what makes them animatable —
   a plain --hue would jump between keyframes instead of interpolating. */
@property --hue{syntax:"<number>";inherits:true;initial-value:0}
@property --rotate{syntax:"<number>";inherits:true;initial-value:0}
@property --bg-y{syntax:"<number>";inherits:true;initial-value:0}
@property --bg-x{syntax:"<number>";inherits:true;initial-value:0}
@property --glow-translate-y{syntax:"<number>";inherits:true;initial-value:0}
@property --bg-size{syntax:"<number>";inherits:true;initial-value:0}
@property --glow-opacity{syntax:"<number>";inherits:true;initial-value:0}
@property --glow-blur{syntax:"<number>";inherits:true;initial-value:0}
@property --glow-scale{syntax:"<number>";inherits:true;initial-value:2}
@property --glow-radius{syntax:"<number>";inherits:true;initial-value:2}
@property --white-shadow{syntax:"<number>";inherits:true;initial-value:0}

*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:#050507;font-family:Inter,ui-sans-serif,Arial,sans-serif;overflow:hidden}
.stage{display:grid;gap:18px;place-items:center;padding:22px}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}

.glow-container{
  --card-color:hsl(260deg 100% 3%);
  --card-radius:22px;
  --card-width:min(320px,80vw);
  --border-width:3px;
  --bg-size:1;--hue:0;--hue-speed:1;--rotate:0;
  --animation-speed:4s;--interaction-speed:.55s;
  --glow-scale:1.5;--scale-factor:1;--glow-blur:6;--glow-opacity:1;--glow-radius:100;--glow-rotate-unit:1deg;
  width:var(--card-width);aspect-ratio:1.5/1;color:#fff;margin:auto;
  display:flex;align-items:center;justify-content:center;position:relative;z-index:2;
  border-radius:var(--card-radius);cursor:pointer}

.glow-content{position:absolute;background:var(--card-color);border-radius:calc(var(--card-radius) * .9);
  display:flex;align-items:center;justify-content:center;padding:calc(var(--card-width) / 9);inset:var(--border-width)}

.glow-content span{display:inline-block;padding:.25em;border-radius:4px;text-align:center;
  font-size:clamp(18px,7vw,30px);font-weight:600;letter-spacing:-.03em;line-height:1.05}

.glow-content:before{content:"";display:block;position:absolute;
  width:calc(100% + var(--border-width));height:calc(100% + var(--border-width));
  border-radius:calc(var(--card-radius) * .9);box-shadow:0 0 20px black;mix-blend-mode:color-burn;z-index:-1;
  background:hsl(0deg 0% 16%) radial-gradient(30% 30% at calc(var(--bg-x) * 1%) calc(var(--bg-y) * 1%),
    hsl(calc(var(--hue) * var(--hue-speed) * 1deg) 100% 90%) calc(0% * var(--bg-size)),
    hsl(calc(var(--hue) * var(--hue-speed) * 1deg) 100% 80%) calc(20% * var(--bg-size)),
    hsl(calc(var(--hue) * var(--hue-speed) * 1deg) 100% 60%) calc(40% * var(--bg-size)),
    transparent 100%);
  animation:hue-animation var(--animation-speed) linear infinite,rotate-bg var(--animation-speed) linear infinite;
  transition:--bg-size var(--interaction-speed) ease}

.glow{--glow-translate-y:0;display:block;position:absolute;
  width:calc(var(--card-width) / 5);height:calc(var(--card-width) / 5);
  animation:rotate var(--animation-speed) linear infinite;
  transform:rotateZ(calc(var(--rotate) * var(--glow-rotate-unit)));transform-origin:center;
  border-radius:calc(var(--glow-radius) * 10vw)}

.glow:after{content:"";display:block;z-index:-2;filter:blur(calc(var(--glow-blur) * 10px));
  width:130%;height:130%;left:-15%;top:-15%;position:relative;
  background:hsl(calc(var(--hue) * var(--hue-speed) * 1deg) 100% 60%);
  border-radius:calc(var(--glow-radius) * 10vw);
  animation:hue-animation var(--animation-speed) linear infinite;
  transform:scaleY(calc(var(--glow-scale) * var(--scale-factor) / 1.1))
            scaleX(calc(var(--glow-scale) * var(--scale-factor) * 1.2))
            translateY(calc(var(--glow-translate-y) * 1%));
  opacity:var(--glow-opacity)}

.glow-container:hover .glow-content{mix-blend-mode:darken;
  box-shadow:0 0 calc(var(--white-shadow) * 1vw) calc(var(--white-shadow) * .15vw) rgb(255 255 255 / 20%);
  animation:shadow-pulse calc(var(--animation-speed) * 2) linear infinite}
.glow-container:hover .glow-content:before{--bg-size:15;animation-play-state:paused;transition:--bg-size var(--interaction-speed) ease}
.glow-container:hover .glow{--glow-blur:1.5;--glow-opacity:.6;--glow-scale:2.5;--glow-radius:0;--rotate:900;--glow-rotate-unit:0;--scale-factor:1.25;animation-play-state:paused}
.glow-container:hover .glow:after{--glow-translate-y:0;animation-play-state:paused;
  transition:--glow-translate-y 0s ease,--glow-blur .05s ease,--glow-opacity .05s ease,--glow-scale .05s ease,--glow-radius .05s ease}

@keyframes shadow-pulse{
  0%,24%,46%,73%,96%{--white-shadow:.5}
  12%,28%,41%,63%,75%,82%,98%{--white-shadow:2.5}
  6%,32%,57%{--white-shadow:1.3}
  18%,52%,88%{--white-shadow:3.5}}
@keyframes rotate-bg{
  0%{--bg-x:0;--bg-y:0}25%{--bg-x:100;--bg-y:0}50%{--bg-x:100;--bg-y:100}75%{--bg-x:0;--bg-y:100}100%{--bg-x:0;--bg-y:0}}
@keyframes rotate{
  from{--rotate:-70;--glow-translate-y:-65}
  25%,50%,60%,75%,85%{--glow-translate-y:-65}
  to{--rotate:290;--glow-translate-y:-65}}
@keyframes hue-animation{0%{--hue:0}100%{--hue:360}}

@media(prefers-reduced-motion:reduce){
  .glow-content:before,.glow,.glow:after,.glow-container:hover .glow-content{animation:none}}
</style></head>
<body data-cf-keep-dark>
<div class="stage"><span class="kicker">HOVER TO FOCUS</span>
<div class="glow-container" role="button" tabindex="0">
  <span class="glow"></span>
  <div class="glow-content"><span>Glowing Shadow</span></div>
</div>
</div>
</body></html>`,
  "editorial-saas-landing-page": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Editorial SaaS Landing Page</title><style>
:root{--pur:#7e21fe;--pur-d:#6b16e0;--ink:#0f172b;--mut:#979eac;--wash:#f7f8fb;--line:#e8eaf0;--black:#000;--node:#272727;--lined:rgba(255,255,255,.1)}
*{box-sizing:border-box}
body{margin:0;background:#fff;color:var(--ink);font-family:Inter,ui-sans-serif,system-ui,sans-serif;-webkit-font-smoothing:antialiased;overflow-x:hidden}
h1,h2,h3{font-family:"Space Grotesk",Inter,ui-sans-serif,sans-serif;margin:0;font-weight:500;letter-spacing:-.035em;color:var(--ink)}
p{margin:0}
button{font-family:inherit;cursor:pointer;border:0}
.wrap{max-width:1140px;margin:0 auto;padding:0 28px}
.rv{opacity:0;transform:translateY(28px)}

.eb{display:flex;align-items:center;gap:12px;font-size:13.5px;color:var(--pur);margin-bottom:16px}
.eb:before{content:"";width:28px;height:1px;background:#cdd2dd}

/* ---------- buttons ---------- */
.btn{position:relative;display:inline-flex;align-items:center;gap:9px;border-radius:999px;padding:14px 24px;font-size:14.5px;font-weight:600;overflow:hidden;transition:transform .25s cubic-bezier(.2,.8,.2,1),box-shadow .3s,border-color .25s,color .25s}
.btn i{font-style:normal;display:inline-block;transition:transform .28s cubic-bezier(.2,.8,.2,1)}
.btn:hover i{transform:translateX(4px)}
.btn svg{width:15px;height:15px;flex:none}
/* sheen sweeps across on hover */
.btn:before{content:"";position:absolute;top:0;bottom:0;left:-60%;width:45%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.28),transparent);transform:skewX(-18deg);transition:left .55s cubic-bezier(.2,.8,.2,1)}
.btn:hover:before{left:120%}
.btn-dark{background:linear-gradient(120deg,#1c2338,var(--ink) 62%);color:#fff;box-shadow:0 10px 26px rgba(15,23,43,.24)}
.btn-dark:hover{transform:translateY(-2px);box-shadow:0 18px 38px rgba(15,23,43,.32)}
.btn-white{background:#fff;color:var(--ink);border:1px solid var(--line)}
.btn-white:hover{transform:translateY(-2px);border-color:#c6c1e2;box-shadow:0 14px 30px rgba(15,23,43,.1)}
.btn-pur{background:var(--pur);color:#fff}
.btn-pur:hover{transform:translateY(-2px);background:var(--pur-d);box-shadow:0 16px 34px rgba(126,33,254,.45)}
.cta{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}

/* ---------- nav ---------- */
.nav{position:sticky;top:0;z-index:60;transition:background .4s,box-shadow .4s,backdrop-filter .4s}
.nav-in{max-width:1240px;margin:0 auto;padding:20px 28px;display:flex;align-items:center;gap:30px;transition:padding .4s}
.nav.on{background:rgba(255,255,255,.86);backdrop-filter:blur(18px) saturate(1.6);box-shadow:0 1px 0 rgba(15,23,43,.07),0 10px 30px rgba(15,23,43,.06)}
.nav.on .nav-in{padding:11px 28px}
.brand{display:flex;align-items:center;gap:11px;font-family:"Space Grotesk",sans-serif;font-size:21px;font-weight:600;letter-spacing:-.04em;color:var(--ink)}
.brand em{color:var(--pur);font-style:normal}
.brand svg{width:30px;height:30px;color:var(--pur);flex:none;transition:transform .45s cubic-bezier(.2,.8,.2,1)}
.brand:hover svg{transform:rotate(-12deg) scale(1.08)}
.nav-links{display:flex;gap:32px;margin:0 auto;font-size:14.5px;color:#5c6577}
.nav-links a{position:relative;cursor:pointer;padding-bottom:4px;transition:color .25s}
.nav-links a:after{content:"";position:absolute;left:0;bottom:0;width:100%;height:1.5px;background:var(--ink);transform:scaleX(0);transform-origin:right;transition:transform .32s cubic-bezier(.2,.8,.2,1)}
.nav-links a:hover{color:var(--ink)}
.nav-links a:hover:after{transform:scaleX(1);transform-origin:left}
.nav-right{display:flex;align-items:center;gap:20px}
.nav-right .lg{font-size:14.5px;color:#5c6577;cursor:pointer;transition:color .25s}
.nav-right .lg:hover{color:var(--ink)}
.nav-right .btn{padding:11px 20px;font-size:13.5px}

/* ---------- hero ---------- */
.hero{position:relative;padding:76px 0 52px;text-align:center;overflow:hidden}
/* organic ink-blot wash rather than tidy circles, like the reference backdrop */
.wash{position:absolute;inset:-12% -6% auto -6%;height:660px;z-index:0;pointer-events:none;
  background:
    radial-gradient(38% 46% at 14% 34%,rgba(126,33,254,.2),transparent 70%),
    radial-gradient(30% 40% at 30% 12%,rgba(126,33,254,.13),transparent 72%),
    radial-gradient(26% 52% at 62% 26%,rgba(150,80,255,.14),transparent 70%),
    radial-gradient(34% 38% at 86% 46%,rgba(126,33,254,.11),transparent 72%),
    radial-gradient(24% 30% at 48% 62%,rgba(170,120,255,.1),transparent 70%);
  filter:blur(26px)}
.hero>.wrap{position:relative;z-index:1}
.pill{display:inline-flex;align-items:center;gap:9px;padding:9px 18px;border-radius:999px;background:#12121a;color:#eceaf4;font-size:12.5px;margin-bottom:28px;box-shadow:0 12px 26px rgba(0,0,0,.22);transition:transform .3s cubic-bezier(.2,.8,.2,1)}
.pill:hover{transform:translateY(-2px)}
.pill svg{width:13px;height:13px;color:#b795ff}
h1{font-size:clamp(38px,6.3vw,74px);line-height:1.04}
h1 .pu{color:var(--pur)}
/* rotating middle line: fixed height so the headline never reflows */
.rot{display:block;position:relative;height:1.04em;overflow:hidden}
.rot span{position:absolute;left:0;right:0;top:0;transform:translateY(100%)}
.rot span.in{transform:none}
.sub{margin:26px auto 30px;max-width:56ch;font-size:17px;line-height:1.72;color:var(--mut)}
.micro{margin-top:16px;font-size:12.5px;color:#a7adb9}
.socials{display:flex;gap:10px;justify-content:center;margin-top:26px}
.socials a{width:40px;height:40px;border-radius:11px;background:#12121a;display:grid;place-items:center;color:#fff;transition:transform .3s cubic-bezier(.2,.8,.2,1),background .3s,box-shadow .3s}
.socials a:hover{transform:translateY(-4px);background:var(--pur);box-shadow:0 12px 24px rgba(126,33,254,.4)}
.socials svg{width:16px;height:16px}

/* ---------- marquee ---------- */
.marq{position:relative;margin-top:44px;padding:22px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line);overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent);mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)}
.marq-track{display:flex;gap:56px;width:max-content;animation:slide 34s linear infinite}
.marq:hover .marq-track{animation-play-state:paused}
@keyframes slide{to{transform:translateX(-50%)}}
.mi{display:flex;align-items:center;gap:11px;font-size:15px;color:#9aa1ad;white-space:nowrap;transition:color .3s}
.mi:hover{color:var(--ink)}
.mi b{width:23px;height:23px;border-radius:7px;display:grid;place-items:center;font-size:11px;color:#fff;transition:transform .3s cubic-bezier(.2,.8,.2,1)}
.mi:hover b{transform:scale(1.15) rotate(-6deg)}

/* ---------- floating review badge ---------- */
.rev{position:fixed;right:0;top:34%;z-index:40;width:132px;border-radius:12px 0 0 12px;overflow:hidden;background:#fff;border:1px solid var(--line);border-right:0;box-shadow:-8px 14px 34px rgba(15,23,43,.14);font-size:10px;text-align:center;transform:translateX(74px);transition:transform .4s cubic-bezier(.2,.8,.2,1)}
.rev:hover{transform:translateX(0)}
.rev-h{background:var(--ink);color:#fff;padding:6px;font-weight:600;letter-spacing:.02em}
.rev-b{padding:9px 8px}
.rev-s{color:#f0a020;font-size:12px;letter-spacing:1px}
.rev-b b{display:block;font-size:12px;margin:4px 0 2px}
.rev-b span{color:var(--mut);font-size:9.5px}

/* ---------- dark 3D showcase ---------- */
.shows{position:relative;background:var(--black);padding:94px 0 108px;overflow:hidden}
.shows:before{content:"";position:absolute;width:760px;height:540px;top:-190px;left:-170px;border-radius:50%;filter:blur(100px);background:rgba(126,33,254,.3)}
.shows:after{content:"";position:absolute;width:580px;height:430px;bottom:-170px;right:-150px;border-radius:50%;filter:blur(100px);background:rgba(126,33,254,.17)}
.shows .wrap{position:relative;z-index:1}
.shows .eb{color:#bda2ff}
.shows .eb:before{background:rgba(255,255,255,.24)}
.shows h2{color:#fff;font-size:clamp(28px,3.8vw,44px);line-height:1.08}
.shows .lead{margin-top:16px;max-width:52ch;color:rgba(255,255,255,.56);font-size:16px;line-height:1.7}
/* centre card holds the flow height; side cards are absolute and pushed back in Z */
.fan{position:relative;margin-top:62px;padding-bottom:74px;perspective:1900px;transform-style:preserve-3d}
.card3d{border-radius:16px;overflow:hidden;background:#fff;border:1px solid rgba(255,255,255,.15);box-shadow:0 50px 110px -24px rgba(0,0,0,.8);will-change:transform}
.c-mid{position:relative;width:58%;margin:0 auto;z-index:3}
/* The caption is white and the mock beneath it is not, so the centre card carries a
   scrim under its lower third to keep the slide title legible. */
.c-mid:after{content:"";position:absolute;left:0;right:0;bottom:0;height:44%;z-index:2;pointer-events:none;background:linear-gradient(180deg,transparent,rgba(6,6,10,.9))}
.c-left{position:absolute;left:2%;top:38px;width:34%;z-index:2;transform-origin:right center}
.c-right{position:absolute;right:2%;top:38px;width:34%;z-index:2;transform-origin:left center}
.tag{position:absolute;z-index:5;display:inline-flex;align-items:center;gap:8px;padding:9px 15px;border-radius:999px;background:rgba(20,20,24,.92);border:1px solid rgba(255,255,255,.13);backdrop-filter:blur(8px);color:#fff;font-size:13px;font-weight:600;box-shadow:0 14px 34px rgba(0,0,0,.6)}
.tag s{width:7px;height:7px;border-radius:50%;background:#34d399;box-shadow:0 0 0 3px rgba(52,211,153,.2);animation:pulse 2.4s ease-in-out infinite}
@keyframes pulse{0%,100%{box-shadow:0 0 0 3px rgba(52,211,153,.2)}50%{box-shadow:0 0 0 6px rgba(52,211,153,.06)}}
.t1{left:18%;top:11%}
.t2{left:4%;top:44%}
.t3{right:7%;top:26%}
.fan-cap{position:absolute;left:22%;bottom:92px;z-index:6;max-width:40%;color:#fff;text-shadow:0 6px 30px rgba(0,0,0,.8)}
.fan-cap b{display:block;font-family:"Space Grotesk",sans-serif;font-size:30px;font-weight:600;letter-spacing:-.04em}
.fan-cap span{display:block;margin-top:6px;font-size:14px;line-height:1.55;color:rgba(255,255,255,.66)}
/* dot pagination: the active slide reads as a pill, the rest as dots */
.fan-dots{position:absolute;left:0;right:0;bottom:0;z-index:6;display:flex;justify-content:center;gap:7px}
.fan-dots button{width:8px;height:8px;padding:0;border-radius:99px;background:rgba(255,255,255,.28);transition:width .35s cubic-bezier(.2,.8,.2,1),background .35s}
.fan-dots button:hover{background:rgba(255,255,255,.5)}
.fan-dots button.on{width:26px;background:var(--vio)}

/* mini app mockup */
.app{background:#fff;font-size:0}
.app-top{display:flex;align-items:center;gap:7px;padding:9px 12px;border-bottom:1px solid #eef0f5}
.app-top s{width:7px;height:7px;border-radius:50%;background:#e3e6ee;display:block}
.app-top u{margin-left:6px;height:7px;width:76px;border-radius:4px;background:#f0f2f7;display:block}
.app-b{display:grid;grid-template-columns:62px 1fr}
.app-side{border-right:1px solid #f1f3f8;padding:10px 8px;display:flex;flex-direction:column;gap:6px}
.app-side i{height:7px;border-radius:4px;background:#f1f3f8;display:block}
.app-side i.on{background:linear-gradient(90deg,rgba(126,33,254,.3),rgba(126,33,254,.07))}
.app-main{padding:11px;display:flex;flex-direction:column;gap:8px}
.kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:7px}
.kpis div{border:1px solid #f1f3f8;border-radius:7px;padding:8px 7px}
.kpis u{display:block;height:5px;width:60%;border-radius:3px;background:#f0f2f7;margin-bottom:6px}
.kpis b{display:block;height:9px;width:78%;border-radius:4px;background:#dfe3ec}
.kpis div:first-child b{background:linear-gradient(90deg,var(--pur),#a259ff)}
.chart{border:1px solid #f1f3f8;border-radius:8px;padding:10px;display:flex;align-items:flex-end;gap:5px;height:96px}
.chart i{flex:1;border-radius:3px 3px 0 0;background:#eef0f7;display:block}
.chart i:nth-child(2n){background:linear-gradient(180deg,#a259ff,var(--pur))}
.rows{display:flex;flex-direction:column;gap:6px}
.rows i{height:9px;border-radius:5px;background:#f3f5fa;display:block}
.rows i:nth-child(2){width:74%}
.rows i:nth-child(3){width:58%}

/* ---------- use cases ---------- */
.uc{padding:100px 0}
.uc h2{font-size:clamp(28px,3.9vw,46px);line-height:1.08}
.uc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:46px}
.uc-card{position:relative;border:1px solid var(--line);border-radius:18px;padding:28px;background:#fff;overflow:hidden;transition:transform .34s cubic-bezier(.2,.8,.2,1),box-shadow .34s,border-color .34s}
.uc-card:after{content:"";position:absolute;inset:auto auto 0 0;width:100%;height:2px;background:linear-gradient(90deg,var(--pur),#a259ff);transform:scaleX(0);transform-origin:left;transition:transform .4s cubic-bezier(.2,.8,.2,1)}
.uc-card:hover{transform:translateY(-6px);border-color:#ddd9ee;box-shadow:0 26px 54px -18px rgba(15,23,43,.16)}
.uc-card:hover:after{transform:scaleX(1)}
.ic{width:46px;height:46px;border-radius:13px;background:var(--wash);display:grid;place-items:center;color:var(--ink);margin-bottom:20px;transition:background .34s,color .34s,transform .34s cubic-bezier(.2,.8,.2,1)}
.uc-card:hover .ic{background:var(--pur);color:#fff;transform:rotate(-8deg) scale(1.06)}
.ic svg{width:20px;height:20px}
.uc-card h3{font-size:19px;margin-bottom:9px}
.uc-card p{font-size:14.5px;line-height:1.7;color:var(--mut)}

/* ---------- workflow grid ---------- */
.wf{background:var(--wash);padding:100px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.wf h2{font-size:clamp(28px,3.9vw,46px);line-height:1.08}
.wf .lead{margin-top:18px;max-width:58ch;font-size:16.5px;line-height:1.72;color:var(--mut)}
.wf-grid{display:grid;grid-template-columns:1fr 1fr;gap:22px;margin-top:50px}
.wf-card{background:#fff;border:1px solid var(--line);border-radius:20px;padding:26px;transition:transform .34s cubic-bezier(.2,.8,.2,1),box-shadow .34s}
.wf-card:hover{transform:translateY(-5px);box-shadow:0 28px 58px -20px rgba(15,23,43,.16)}
.wf-card h3{font-size:22px;margin:24px 0 10px}
.wf-card p{font-size:15px;line-height:1.75;color:var(--mut)}
.shot{border:1px solid var(--line);border-radius:13px;overflow:hidden;background:var(--wash);transition:transform .34s cubic-bezier(.2,.8,.2,1)}
.wf-card:hover .shot{transform:scale(1.02)}
.shot-h{display:flex;justify-content:space-between;padding:11px 14px;border-bottom:1px solid var(--line);font-size:12px;color:var(--mut);background:#fcfcfe}
.shot-h em{font-style:normal;color:#10b981}
.li{display:flex;justify-content:space-between;padding:11px 14px;border-bottom:1px solid #f2f4f9;font-size:12.5px;color:var(--ink)}
.li:last-child{border:0}
.li span:last-child{font-family:ui-monospace,Menlo,monospace;color:var(--mut)}
.li.tot{background:#f6f3ff;font-weight:600}
.li.tot span:last-child{color:var(--ink)}
.ok{display:flex;align-items:center;gap:12px;padding:16px;background:#f0fdf6;border:1px solid #d5f5e3;border-radius:13px}
.ok .cr{width:30px;height:30px;border-radius:50%;background:#d9f7e7;display:grid;place-items:center;color:#10b981;flex:none}
.ok b{display:block;font-size:13.5px;color:var(--ink)}
.ok small{font-size:12.5px;color:#10b981}
.stack{display:flex;flex-direction:column;gap:9px}
.srow{display:flex;align-items:center;gap:11px;padding:12px 14px;border:1px solid var(--line);border-radius:11px;background:#fff;font-size:13px;color:var(--ink);transition:border-color .3s,transform .3s}
.srow:hover{border-color:var(--pur);transform:translateX(3px)}
.srow u{width:8px;height:8px;border-radius:50%;background:var(--pur);flex:none}
.srow small{margin-left:auto;color:var(--mut);font-size:11.5px}
.bars{display:flex;align-items:flex-end;gap:7px;height:120px;padding:14px;border:1px solid var(--line);border-radius:13px;background:#fff}
.bars i{flex:1;border-radius:5px 5px 0 0;background:#eff1f7;display:block;transition:background .3s}
.bars i.hi{background:linear-gradient(180deg,#a259ff,var(--pur))}
.wf-card:hover .bars i{background:#e8eaf3}
.wf-card:hover .bars i.hi{background:linear-gradient(180deg,#a259ff,var(--pur))}

/* ---------- dark pipeline ---------- */
.flow{position:relative;background:var(--black);padding:100px 0 112px;overflow:hidden}
.stars{position:absolute;inset:0;background-image:radial-gradient(1.4px 1.4px at 12% 18%,rgba(255,255,255,.5),transparent),radial-gradient(1.4px 1.4px at 74% 12%,rgba(196,168,255,.5),transparent),radial-gradient(1.6px 1.6px at 32% 62%,rgba(255,255,255,.4),transparent),radial-gradient(1.4px 1.4px at 88% 48%,rgba(255,255,255,.34),transparent),radial-gradient(1.6px 1.6px at 55% 84%,rgba(196,168,255,.42),transparent),radial-gradient(1.2px 1.2px at 22% 90%,rgba(255,255,255,.3),transparent),radial-gradient(1.2px 1.2px at 66% 34%,rgba(255,255,255,.28),transparent),radial-gradient(1.3px 1.3px at 44% 22%,rgba(255,255,255,.26),transparent);animation:twinkle 7s ease-in-out infinite}
@keyframes twinkle{0%,100%{opacity:.75}50%{opacity:1}}
.flow:before{content:"";position:absolute;width:660px;height:480px;top:12%;right:-160px;border-radius:50%;filter:blur(100px);background:rgba(126,33,254,.22)}
.flow .wrap{position:relative;z-index:1}
.flow-grid{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center}
.flow .eb{color:#bda2ff}
.flow .eb:before{background:rgba(255,255,255,.24)}
.flow h2{color:#fff;font-size:clamp(27px,3.6vw,42px);line-height:1.1}
.flow .lead{margin-top:18px;color:rgba(255,255,255,.56);font-size:16px;line-height:1.75}
.checks{margin:26px 0;border:1px solid var(--lined);border-radius:16px;background:rgba(255,255,255,.035);padding:8px 4px}
.checks div{display:flex;align-items:center;gap:11px;padding:11px 16px;font-size:14px;color:rgba(255,255,255,.78);transition:color .3s,transform .3s}
.checks div:hover{color:#fff;transform:translateX(4px)}
.checks svg{width:14px;height:14px;color:#b795ff;flex:none}
.pipe{position:relative;display:flex;flex-direction:column;align-items:center;gap:18px}
.node{display:inline-flex;align-items:center;gap:9px;padding:12px 20px;border-radius:999px;background:linear-gradient(145deg,#2e2e2e,var(--node));border:1px solid var(--lined);color:#fff;font-size:13.5px;font-weight:600;box-shadow:0 16px 34px rgba(0,0,0,.55);transition:transform .32s cubic-bezier(.2,.8,.2,1),border-color .32s,box-shadow .32s}
.node:hover{transform:translateY(-3px);border-color:rgba(126,33,254,.6);box-shadow:0 20px 42px rgba(126,33,254,.28)}
.node svg{width:14px;height:14px;color:#b795ff}
.inputs{display:flex;gap:14px}
.big{width:100%;flex-direction:column;gap:3px;border-radius:16px;padding:15px 20px;text-align:center}
.big small{font-size:10.5px;letter-spacing:.11em;color:rgba(255,255,255,.42);font-weight:500}
.conn{width:100%;height:40px;display:block}
.conn path{fill:none;stroke:#8b45ff;stroke-width:1.4;stroke-dasharray:5 5;opacity:.8}

/* ---------- final cta ---------- */
.fin{position:relative;padding:110px 0;text-align:center;overflow:hidden;background:#fff}
.fin-glow{position:absolute;width:760px;height:500px;top:-150px;left:50%;margin-left:-380px;border-radius:50%;filter:blur(90px);background:rgba(126,33,254,.24);animation:breathe 9s ease-in-out infinite}
@keyframes breathe{0%,100%{opacity:.8;transform:scale(1)}50%{opacity:1;transform:scale(1.07)}}
.fin>.wrap{position:relative;z-index:1}
.fin h2{font-size:clamp(30px,4.6vw,56px);line-height:1.08}
.fin p{margin:20px auto 32px;max-width:48ch;font-size:16.5px;line-height:1.7;color:var(--mut)}

/* ---------- footer ---------- */
.ft{background:var(--black);color:#fff;padding:62px 0 32px}
.ft-top{display:flex;justify-content:space-between;gap:48px;flex-wrap:wrap;padding-bottom:38px;border-bottom:1px solid var(--lined)}
.ft .brand{color:#fff}
.ft-brand{max-width:290px}
.ft-brand p{margin-top:14px;font-size:13.5px;line-height:1.75;color:rgba(255,255,255,.46)}
.ft-cols{display:flex;gap:56px;flex-wrap:wrap}
.ft-cols div{display:flex;flex-direction:column;gap:11px}
.ft-cols b{font-size:12.5px;color:#fff;margin-bottom:4px}
.ft-cols a{font-size:13.5px;color:rgba(255,255,255,.46);cursor:pointer;transition:color .25s,transform .25s;display:inline-block}
.ft-cols a:hover{color:#fff;transform:translateX(3px)}
.ft-bot{display:flex;justify-content:space-between;gap:14px;flex-wrap:wrap;padding-top:24px;font-size:12.5px;color:rgba(255,255,255,.36)}

/* ---------- responsive ---------- */
@media(max-width:1000px){
  .nav-links{display:none}
  .flow-grid{grid-template-columns:1fr;gap:38px}
  .uc-grid,.wf-grid{grid-template-columns:1fr}
  .fan-cap{left:6%;max-width:60%}
  .fan-cap b{font-size:24px}
  .rev{display:none}
}
@media(max-width:680px){
  .wrap{padding:0 18px}
  .hero{padding:46px 0 32px}
  .nav-right .lg{display:none}
  h1{font-size:clamp(29px,8.2vw,40px)}
  .sub{font-size:15.5px;margin:20px auto 24px}
  .cta .btn{flex:1 1 100%;justify-content:center}
  .fan{perspective:none;display:flex;flex-direction:column;gap:18px;margin-top:38px;padding-bottom:0}
  .card3d{position:relative;left:auto;right:auto;top:auto;width:100%;margin:0;transform:none!important}
  .tag{position:relative;left:auto;right:auto;top:auto;align-self:flex-start;margin-bottom:-8px}
  .fan-cap{position:relative;left:auto;bottom:auto;max-width:none;margin-top:4px}
  .fan-cap b{font-size:22px}
  .fan-dots{position:relative;justify-content:flex-start;margin-top:14px}
  .shows,.uc,.wf,.flow,.fin{padding:60px 0}
  .app-side{display:none}
  .app-b{grid-template-columns:1fr}
  .app-main{min-height:132px}
  .kpis{grid-template-columns:1fr 1fr}
  .chart{height:78px}
  .inputs{flex-wrap:wrap;justify-content:center}
  .ft-cols{gap:30px}
}
@media(prefers-reduced-motion:reduce){
  .rv{opacity:1!important;transform:none!important}
  .marq-track,.stars,.fin-glow,.tag s{animation:none}
  .card3d{transform:none!important}
  .rot span{position:relative;opacity:1;transform:none}
  .rot span~span{display:none}
  .btn:before{display:none}
}
</style></head>
<body data-cf-keep-dark>

<aside class="rev">
  <div class="rev-h">Verified Reviews</div>
  <div class="rev-b"><div class="rev-s">&#9733;&#9733;&#9733;&#9733;&#9733;</div><b>4.9 / 5.0</b><span>2,480 teams rated us</span></div>
</aside>

<nav class="nav" id="nav"><div class="nav-in">
  <div class="brand">
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M22 9c-3-2.6-9-2.6-11 .6-2 3.2 1.4 5.2 5 6.4 3.6 1.2 7 3.2 5 6.4-2 3.2-8 3.2-11 .6"/><circle cx="24.5" cy="7" r="1.8" fill="currentColor" stroke="none"/></svg>
    <span>QuoteFlow<em>AI</em></span>
  </div>
  <div class="nav-links"><a>Workflow</a><a>Screenshots</a><a>Use Cases</a><a>Demo</a><a>Pricing</a></div>
  <div class="nav-right"><span class="lg">Log in</span><button class="btn btn-pur"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.9 5.7L19.6 9l-4.3 3.4 1.2 5.8L12 15l-4.5 3.2 1.2-5.8L4.4 9l5.7-1.3L12 2z"/></svg>Ask Flow AI</button></div>
</div></nav>

<header class="hero">
  <div class="wash"></div>
  <div class="wrap">
    <div class="pill rv"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h16v3H4zM4 10h16v3H4zM4 16h10v3H4z"/></svg>E-invoicing ready &middot; Built for 2026 compliance</div>
    <h1 class="rv">Win jobs faster.<span class="rot" id="rot"><span class="in">By voice message.</span><span>Or by photo.</span><span>Even by text.</span></span><span class="pu">All in one platform.</span></h1>
    <p class="sub rv">Tell Flow AI what the job needs and it drafts a ready-to-sign quote in seconds. Scheduling, time tracking and exports come along for free.</p>
    <div class="cta rv">
      <button class="btn btn-dark">Start 7 days free <i>&rarr;</i></button>
      <button class="btn btn-white"><svg viewBox="0 0 24 24" fill="#7e21fe"><path d="M8 5v14l11-7z"/></svg>Watch Demo</button>
    </div>
    <p class="micro rv">No mailbox required &middot; Share via link &middot; Digital signature</p>
    <div class="socials rv">
      <a aria-label="X"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.2 8.2L23 22h-6.9l-5.4-7-6.2 7H1.3l7.7-8.8L1 2h7l4.9 6.4L18.9 2z"/></svg></a>
      <a aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2 3.76-2 4 0 4.7 2.6 4.7 6v6.3h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21h-4V9z"/></svg></a>
      <a aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg></a>
      <a aria-label="TikTok"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 2h-3v13.2a2.9 2.9 0 1 1-2.4-2.85V9.3a6 6 0 1 0 5.4 5.97V8.9a6.8 6.8 0 0 0 4 1.3V7.2a4 4 0 0 1-4-4z"/></svg></a>
      <a aria-label="YouTube"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.8-.5-5.6a2.9 2.9 0 0 0-2-2C18.7 4 12 4 12 4s-6.7 0-8.5.4a2.9 2.9 0 0 0-2 2C1 8.2 1 12 1 12s0 3.8.5 5.6a2.9 2.9 0 0 0 2 2C5.3 20 12 20 12 20s6.7 0 8.5-.4a2.9 2.9 0 0 0 2-2C23 15.8 23 12 23 12zM9.8 15.4V8.6l5.9 3.4-5.9 3.4z"/></svg></a>
      <a aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z"/></svg></a>
    </div>
  </div>

  <div class="marq">
    <div class="marq-track" id="marq">
      <div class="mi"><b style="background:#4285f4">D</b>Drive Sync</div>
      <div class="mi"><b style="background:#3ecf8e">S</b>Supabase Database</div>
      <div class="mi"><b style="background:#d97757">C</b>Claude MCP Access</div>
      <div class="mi"><b style="background:#7e21fe">F</b>Figma Handoff</div>
      <div class="mi"><b style="background:#0f172b">V</b>Vercel Deploy</div>
      <div class="mi"><b style="background:#f24e1e">N</b>Notion Export</div>
      <div class="mi"><b style="background:#0ea5e9">T</b>Tailwind Ready</div>
      <div class="mi"><b style="background:#0f172b">G</b>GitHub Sync</div>
    </div>
  </div>
</header>

<section class="shows" id="shows">
  <div class="wrap">
    <div class="eb rv">Live</div>
    <h2 class="rv">Your business,<br>one dashboard.</h2>
    <p class="lead rv">Quotes, planning, time tracking and Flow AI — all live, all in one place.</p>

    <div class="fan" id="fan">
      <span class="tag t1" id="tag1"><s></s>7 days free</span>
      <span class="tag t2" id="tag2"><s></s>Live</span>
      <span class="tag t3" id="tag3"><s></s>Auto-saved</span>

      <div class="card3d c-left" id="cL"><div class="app">
        <div class="app-top"><s></s><s></s><s></s><u></u></div>
        <div class="app-b"><div class="app-side"><i class="on"></i><i></i><i></i><i></i><i></i><i></i></div>
          <div class="app-main"><div class="rows"><i></i><i></i><i></i></div><div class="chart"><i style="height:38%"></i><i style="height:66%"></i><i style="height:44%"></i><i style="height:82%"></i><i style="height:54%"></i></div></div></div>
      </div></div>

      <div class="card3d c-mid" id="cM"><div class="app">
        <div class="app-top"><s></s><s></s><s></s><u></u></div>
        <div class="app-b"><div class="app-side"><i class="on"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
          <div class="app-main">
            <div class="kpis"><div><u></u><b></b></div><div><u></u><b></b></div><div><u></u><b></b></div><div><u></u><b></b></div></div>
            <div class="chart"><i style="height:34%"></i><i style="height:58%"></i><i style="height:42%"></i><i style="height:76%"></i><i style="height:50%"></i><i style="height:92%"></i><i style="height:64%"></i><i style="height:80%"></i></div>
            <div class="rows"><i></i><i></i><i></i></div>
          </div></div>
      </div></div>

      <div class="card3d c-right" id="cR"><div class="app">
        <div class="app-top"><s></s><s></s><s></s><u></u></div>
        <div class="app-b"><div class="app-side"><i></i><i class="on"></i><i></i><i></i><i></i><i></i></div>
          <div class="app-main"><div class="kpis" style="grid-template-columns:1fr 1fr"><div><u></u><b></b></div><div><u></u><b></b></div></div><div class="rows"><i></i><i></i><i></i><i></i></div></div></div>
      </div></div>

      <div class="fan-cap" id="fanCap"><b>Dashboard</b><span>Every project, its revenue and what is due, at a glance.</span></div>
      <div class="fan-dots" id="fanDots">
        <button class="on" aria-label="Dashboard"></button>
        <button aria-label="Time tracking"></button>
        <button aria-label="Quotes"></button>
        <button aria-label="Scheduling"></button>
      </div>
    </div>
  </div>
</section>

<section class="uc">
  <div class="wrap">
    <div class="eb rv">Use Cases</div>
    <h2 class="rv">Who is QuoteFlowAI for?</h2>
    <div class="uc-grid">
      <div class="uc-card rv">
        <div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 1 5.4-5.4l-2.6 2.6"/></svg></div>
        <h3>Craft &amp; Construction</h3>
        <p>Quote on site from a voice note, get it signed before you pack the van, and turn it straight into a scheduled job.</p>
      </div>
      <div class="uc-card rv">
        <div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></div>
        <h3>Services &amp; Consulting</h3>
        <p>Track billable hours against every project and let the invoice build itself from what your team actually logged.</p>
      </div>
      <div class="uc-card rv">
        <div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="2" y="4" width="20" height="14" rx="2"/><path d="M8 21h8M12 18v3"/></svg></div>
        <h3>Digital &amp; Creative</h3>
        <p>Send a scoped proposal with line items and legal text included, then watch it move from sent to signed in one view.</p>
      </div>
    </div>
  </div>
</section>

<section class="wf">
  <div class="wrap">
    <div class="eb rv">Your Workflow</div>
    <h2 class="rv">From first contact to final invoice</h2>
    <p class="lead rv">QuoteFlowAI guides you through the entire project lifecycle — no media breaks and no double data entry.</p>

    <div class="wf-grid">
      <div class="wf-card rv">
        <div class="shot">
          <div class="shot-h"><span>Quote #1847 &middot; Example</span><em>done</em></div>
          <div class="li"><span>Wallbox 11 kW, Type 2</span><span>1,140.00</span></div>
          <div class="li"><span>Cable NYM-J 5x6, 14 m</span><span>238.00</span></div>
          <div class="li"><span>Installation 4.5 hrs</span><span>382.50</span></div>
          <div class="li tot"><span>Total net</span><span>1,760.50</span></div>
        </div>
        <h3>Customer &amp; Quote</h3>
        <p>Describe the project in a few sentences. Flow AI creates a professional quote with line items, prices and legal texts.</p>
      </div>

      <div class="wf-card rv">
        <div class="ok"><div class="cr"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6L9 17l-5-5"/></svg></div><div><b>Signed digitally</b><small>Quote &rarr; project created automatically</small></div></div>
        <h3>Acceptance &amp; Project</h3>
        <p>Share quotes via a simple link — no mailbox required. The customer signs digitally and the quote turns into a project.</p>
      </div>

      <div class="wf-card rv">
        <div class="stack">
          <div class="srow"><u></u>Team scheduling<small>4 assigned</small></div>
          <div class="srow"><u></u>Time tracking<small>works offline</small></div>
          <div class="srow"><u></u>Material list<small>synced</small></div>
        </div>
        <h3>Planning &amp; Execution</h3>
        <p>Plan assignments in the planner, assign jobs to your team, and let everyone log hours from the site — even without signal.</p>
      </div>

      <div class="wf-card rv">
        <div class="bars"><i style="height:36%"></i><i style="height:54%"></i><i class="hi" style="height:72%"></i><i style="height:46%"></i><i class="hi" style="height:88%"></i><i style="height:60%"></i><i style="height:40%"></i></div>
        <h3>Invoice &amp; Export</h3>
        <p>Turn logged hours and materials into a compliant invoice, then export the whole month to your accounting tool in one click.</p>
      </div>
    </div>
  </div>
</section>

<section class="flow" id="flow">
  <div class="stars"></div>
  <div class="wrap"><div class="flow-grid">
    <div>
      <div class="eb rv">Under the hood</div>
      <h2 class="rv">Everything connected,<br>nothing duplicated.</h2>
      <p class="lead rv">Voice, photo or text goes in one end. A signed quote, a scheduled job and a compliant invoice come out the other — with nothing re-typed in between.</p>
      <div class="checks rv">
        <div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M20 6L9 17l-5-5"/></svg>Legal texts included automatically</div>
        <div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M20 6L9 17l-5-5"/></svg>Works offline on site</div>
        <div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M20 6L9 17l-5-5"/></svg>Export to your accounting tool</div>
      </div>
      <button class="btn btn-pur rv">Try it now <i>&rarr;</i></button>
    </div>

    <div class="pipe" id="pipe">
      <div class="inputs">
        <span class="node rv"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>Voice</span>
        <span class="node rv"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-6 6"/></svg>Photo</span>
        <span class="node rv"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg>Text</span>
      </div>
      <svg class="conn" viewBox="0 0 300 40" preserveAspectRatio="none"><path d="M58 2 C58 23, 150 17, 150 38"/><path d="M150 2 L150 38"/><path d="M242 2 C242 23, 150 17, 150 38"/></svg>
      <span class="node big rv"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" style="vertical-align:-2px;margin-right:7px"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>Digital signature</span><small>ON-SITE, ON THE PHONE</small></span>
      <svg class="conn" viewBox="0 0 300 40" preserveAspectRatio="none"><path d="M150 2 L150 38"/></svg>
      <span class="node big rv"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" style="vertical-align:-2px;margin-right:7px"><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M8 2v4M16 2v4M3 10h18"/></svg>Job scheduling</span><small>PLANBOOK</small></span>
      <svg class="conn" viewBox="0 0 300 40" preserveAspectRatio="none"><path d="M150 2 L150 38"/></svg>
      <span class="node big rv"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" style="vertical-align:-2px;margin-right:7px"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2M9 2h6"/></svg>Time tracking</span><small>WORKS OFFLINE</small></span>
    </div>
  </div></div>
</section>

<section class="fin">
  <div class="fin-glow"></div>
  <div class="wrap">
    <h2 class="rv">Turn your next job<br>into a signed deal.</h2>
    <p class="rv">Join thousands of teams quoting faster, scheduling smarter and invoicing without the paperwork.</p>
    <div class="cta rv">
      <button class="btn btn-dark">Start 7 days free <i>&rarr;</i></button>
      <button class="btn btn-white">Book a demo</button>
    </div>
  </div>
</section>

<footer class="ft"><div class="wrap">
  <div class="ft-top">
    <div class="ft-brand">
      <div class="brand">
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M22 9c-3-2.6-9-2.6-11 .6-2 3.2 1.4 5.2 5 6.4 3.6 1.2 7 3.2 5 6.4-2 3.2-8 3.2-11 .6"/><circle cx="24.5" cy="7" r="1.8" fill="currentColor" stroke="none"/></svg>
        <span>QuoteFlow<em>AI</em></span>
      </div>
      <p>Quotes, scheduling, time tracking and invoicing for teams who would rather be on site than at a desk.</p>
    </div>
    <div class="ft-cols">
      <div><b>Product</b><a>Workflow</a><a>Screenshots</a><a>Pricing</a></div>
      <div><b>Use Cases</b><a>Construction</a><a>Consulting</a><a>Creative</a></div>
      <div><b>Resources</b><a>Getting started</a><a>Documentation</a><a>Changelog</a></div>
      <div><b>Company</b><a>About</a><a>Support</a><a>Contact</a></div>
    </div>
  </div>
  <div class="ft-bot"><span>&copy; 2026 QuoteFlowAI. All rights reserved.</span><span>Privacy &middot; Terms &middot; Imprint</span></div>
</div></footer>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script>
(function(){
  var nav = document.getElementById("nav");
  document.addEventListener("scroll", function(){
    nav.classList.toggle("on", window.scrollY > 14);
  }, { passive: true });

  // Duplicate the marquee so the -50% keyframe wraps seamlessly.
  var track = document.getElementById("marq");
  track.innerHTML += track.innerHTML;

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var phone = window.matchMedia("(max-width: 680px)").matches;

  if (!window.gsap || !window.ScrollTrigger || reduced) {
    document.querySelectorAll(".rv").forEach(function(el){
      el.style.opacity = 1;
      el.style.transform = "none";
    });
    // Without GSAP every rotating line stays parked below the clipped box, which
    // would leave the headline missing a line. Show the first and drop the rest.
    document.querySelectorAll("#rot span").forEach(function(el, i){
      if (i === 0) el.style.transform = "none";
      else el.style.display = "none";
    });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // Hero copy rises in on load.
  gsap.to(".hero .rv", { opacity: 1, y: 0, duration: .85, stagger: .085, ease: "power3.out" });

  // Rotating middle headline line. This rolls on position alone with every line at
  // full opacity — a crossfade leaves a frame where both lines are half-faded and the
  // headline reads as blank, which the clipped box already makes unnecessary.
  // y:0 matters — the CSS parks each line at translateY(100%), and GSAP folds that
  // existing transform into its own base, so yPercent alone would stack to 200%.
  var lines = document.querySelectorAll("#rot span");
  var idx = 0;
  gsap.set(lines, { y: 0, yPercent: 100, opacity: 1 });
  gsap.set(lines[0], { y: 0, yPercent: 0 });
  setInterval(function(){
    var cur = lines[idx];
    idx = (idx + 1) % lines.length;
    var next = lines[idx];
    gsap.to(cur, { yPercent: -100, duration: .6, ease: "power2.inOut" });
    gsap.fromTo(next, { y: 0, yPercent: 100 }, { yPercent: 0, duration: .6, ease: "power2.inOut" });
  }, 2600);

  // Everything below the fold reveals as it enters.
  document.querySelectorAll("section .rv").forEach(function(el){
    gsap.to(el, {
      opacity: 1, y: 0, duration: .8, ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 88%", once: true }
    });
  });

  if (!phone) {
    // Negative translateZ is what puts the side cards behind the centre one: inside a
    // preserve-3d parent the browser sorts by computed depth and ignores z-index.
    gsap.set("#cM", { y: 60, scale: .94, opacity: 0 });
    gsap.set("#cL", { xPercent: 26, y: 100, rotationY: 46, z: -300, scale: .9, opacity: 0 });
    gsap.set("#cR", { xPercent: -26, y: 100, rotationY: -46, z: -300, scale: .9, opacity: 0 });
    gsap.set([".tag", ".fan-cap"], { opacity: 0, y: 14 });

    gsap.timeline({ scrollTrigger: { trigger: "#shows", start: "top 62%", once: true } })
      .to("#cM", { y: 0, scale: 1, opacity: 1, duration: 1, ease: "power3.out" })
      .to("#cL", { xPercent: 0, y: 34, rotationY: 28, z: -190, scale: 1, opacity: 1, duration: 1.1, ease: "power3.out" }, "-=0.75")
      .to("#cR", { xPercent: 0, y: 34, rotationY: -28, z: -190, scale: 1, opacity: 1, duration: 1.1, ease: "power3.out" }, "<")
      .to([".tag", ".fan-cap", ".fan-dots"], { opacity: 1, y: 0, duration: .55, stagger: .09, ease: "power2.out" }, "-=0.5");

    // Carousel: the three cards hold their positions while the slide content and the
    // caption cycle through them, which is cheaper than moving four cards around and
    // keeps the fan's composition fixed.
    var slides = [
      { t: "Dashboard", d: "Every project, its revenue and what is due, at a glance." },
      { t: "Time tracking", d: "Hours logged on site, even with no signal, ready to bill." },
      { t: "Quotes", d: "Drafted from a sentence, signed from a link, never re-typed." },
      { t: "Scheduling", d: "Who is where, what they need, and what happens next." }
    ];
    var cap = document.getElementById("fanCap");
    var dots = [].slice.call(document.querySelectorAll("#fanDots button"));
    var slide = 0, timer;

    function show(next){
      slide = (next + slides.length) % slides.length;
      dots.forEach(function(d, i){ d.classList.toggle("on", i === slide); });

      gsap.timeline()
        .to(cap, { opacity: 0, y: 10, duration: .25, ease: "power2.in" })
        .add(function(){
          cap.querySelector("b").textContent = slides[slide].t;
          cap.querySelector("span").textContent = slides[slide].d;
        })
        .to(cap, { opacity: 1, y: 0, duration: .35, ease: "power2.out" });

      // A small nudge on the stack sells the change without re-running the entrance.
      gsap.fromTo("#cM", { scale: .985 }, { scale: 1, duration: .5, ease: "power2.out" });
    }

    function play(){ timer = setInterval(function(){ show(slide + 1); }, 3800); }
    function pause(){ clearInterval(timer); }

    dots.forEach(function(d, i){
      d.addEventListener("click", function(){ pause(); show(i); play(); });
    });
    document.getElementById("fan").addEventListener("mouseenter", pause);
    document.getElementById("fan").addEventListener("mouseleave", play);
    play();

    // Scrub drift at three depths. Deliberately animates only yPercent — tweening
    // rotationY here would fight the entrance timeline, which starts it elsewhere.
    var drift = { trigger: "#shows", start: "top bottom", end: "bottom top", scrub: true };
    gsap.to("#cM", { yPercent: -7, ease: "none", scrollTrigger: drift });
    gsap.to("#cL", { yPercent: -13, ease: "none", scrollTrigger: drift });
    gsap.to("#cR", { yPercent: -13, ease: "none", scrollTrigger: drift });
    gsap.to("#tag1", { yPercent: -50, ease: "none", scrollTrigger: drift });
    gsap.to("#tag2", { yPercent: -80, ease: "none", scrollTrigger: drift });
    gsap.to("#tag3", { yPercent: -34, ease: "none", scrollTrigger: drift });

    // Hero wash drifts slower than the page for depth.
    gsap.to(".wash", { yPercent: 22, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
  }

  // Pipeline connectors draw themselves in, then settle back to a dashed stroke.
  document.querySelectorAll(".conn path").forEach(function(path){
    var len = path.getTotalLength();
    gsap.fromTo(path,
      { strokeDasharray: len, strokeDashoffset: len },
      { strokeDashoffset: 0, duration: 1, ease: "power2.inOut",
        scrollTrigger: { trigger: path, start: "top 92%", once: true },
        onComplete: function(){ path.style.strokeDasharray = "5 5"; } }
    );
  });

  window.addEventListener("load", function(){ ScrollTrigger.refresh(); });
})();
</script>
</body></html>`,
  "ai-music-app-landing-page": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>AI Music App Landing Page</title><style>
:root{--or:#ed7706;--or-d:#d76a04;--or-l:#f59a3f;--ink:#000;--mut:#8a8a8a;--line:#e9e9e9;--line-s:#f1f1f1}
*{box-sizing:border-box}
body{margin:0;background:#fafafa;color:var(--ink);font-family:Inter,ui-sans-serif,system-ui,sans-serif;-webkit-font-smoothing:antialiased;overflow-x:hidden}
h1,h2,h3{font-family:"Space Grotesk",Inter,ui-sans-serif,sans-serif;margin:0;font-weight:700;letter-spacing:-.035em}
p{margin:0}
button,input{font-family:inherit}
button{cursor:pointer;border:0}
.rv{opacity:0;transform:translateY(26px)}

/* the whole page sits in a ruled column, like the reference */
.shell{max-width:1120px;margin:0 auto;background:#fff;border-left:1px solid var(--line);border-right:1px solid var(--line)}
.pad{padding:0 40px}

/* diagonal hatch band used as a section divider */
.hatch{height:26px;border-top:1px solid var(--line);border-bottom:1px solid var(--line);background-image:repeating-linear-gradient(45deg,transparent 0 5px,rgba(0,0,0,.07) 5px 6px)}

/* ---------- buttons ---------- */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:12px 22px;border-radius:5px;font-size:14px;font-weight:600;transition:transform .22s cubic-bezier(.2,.8,.2,1),background .22s,color .22s,border-color .22s,box-shadow .22s}
.btn i{font-style:normal;display:inline-block;transition:transform .24s}
.btn:hover i{transform:translateX(3px)}
.b-dark{background:var(--ink);color:#fff}
.b-dark:hover{transform:translateY(-2px);box-shadow:0 10px 22px rgba(0,0,0,.26)}
.b-line{background:#fff;color:var(--ink);border:1px solid var(--line)}
.b-line:hover{transform:translateY(-2px);border-color:#c9c9c9}
.b-ghost{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.8)}
.b-ghost:hover{transform:translateY(-2px);background:rgba(255,255,255,.14)}
.b-or{background:var(--or);color:#fff}
.b-or:hover{transform:translateY(-2px);background:var(--or-d);box-shadow:0 12px 26px rgba(237,119,6,.4)}

/* ---------- nav ---------- */
.nav{position:sticky;top:0;z-index:50;background:rgba(255,255,255,.92);backdrop-filter:blur(14px);border-bottom:1px solid transparent;transition:border-color .3s,box-shadow .3s}
.nav.on{border-bottom-color:var(--line);box-shadow:0 6px 22px rgba(0,0,0,.05)}
.nav-in{max-width:1120px;margin:0 auto;padding:14px 40px;display:flex;align-items:center;gap:28px}
.brand{display:flex;align-items:center;gap:10px;font-size:19px;font-weight:700;letter-spacing:-.04em}
.mk{width:28px;height:28px;border-radius:50%;background:radial-gradient(circle at 34% 30%,#ffb347,var(--or) 52%,#c2410c);display:grid;place-items:center;color:#fff;font-size:7px;font-weight:800;letter-spacing:.04em;transition:transform .4s cubic-bezier(.2,.8,.2,1)}
.brand:hover .mk{transform:rotate(-14deg) scale(1.08)}
.nav-links{display:flex;gap:26px;margin:0 auto;font-size:14px;color:#3c3c3c}
.nav-links a{position:relative;cursor:pointer;padding-bottom:3px}
.nav-links a:after{content:"";position:absolute;left:0;bottom:0;width:100%;height:1.5px;background:var(--or);transform:scaleX(0);transform-origin:right;transition:transform .3s cubic-bezier(.2,.8,.2,1)}
.nav-links a:hover:after{transform:scaleX(1);transform-origin:left}
.nav-right{display:flex;gap:10px}
.nav-right .btn{padding:9px 17px;font-size:13px}

/* ---------- hero ---------- */
/* The hero fills the viewport so the handsets below stay under the fold. Without that
   their entrance trigger is already past on load, the animation plays while the reader
   is still on the hero, and the section looks static by the time they scroll to it. */
.hero{position:relative;text-align:center;padding:52px 40px 0;min-height:calc(100vh - 58px);display:flex;flex-direction:column;justify-content:center;background:linear-gradient(180deg,#fff 0%,#fdf1e4 32%,#f5ad63 72%,var(--or) 100%)}
.tag{display:inline-flex;align-items:center;gap:0;border:1px solid rgba(0,0,0,.1);border-radius:6px;overflow:hidden;background:rgba(255,255,255,.7);font-size:12.5px;margin-bottom:26px;transition:transform .25s cubic-bezier(.2,.8,.2,1)}
.tag:hover{transform:translateY(-2px)}
.tag b{background:var(--ink);color:#fff;padding:6px 10px;font-weight:600}
.tag span{padding:6px 12px;color:#222}
h1{font-size:clamp(38px,6.4vw,70px);line-height:1.04;color:#fff;text-shadow:0 2px 24px rgba(180,90,10,.18)}
.lead{margin:20px auto 30px;max-width:56ch;font-size:15.5px;line-height:1.75;color:rgba(255,255,255,.92)}
.hero-cta{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;padding-bottom:34px}

/* ---------- phones ---------- */
/* The handsets are taller than this band on purpose; the mask fades them out at the
   bottom instead of letting them spill over the copy that follows. */
.phones{position:relative;height:430px;overflow:hidden;background:linear-gradient(180deg,var(--or) 0%,#f2a765 42%,#fff 88%);perspective:1600px;-webkit-mask-image:linear-gradient(180deg,#000 66%,transparent 98%);mask-image:linear-gradient(180deg,#000 66%,transparent 98%)}
.ph{position:absolute;bottom:-40px;width:212px;height:428px;border-radius:34px;background:#1c1c1e;padding:8px;box-shadow:0 34px 70px rgba(120,55,0,.4);will-change:transform}
.ph-s{position:absolute;inset:8px;border-radius:27px;overflow:hidden;background:#fff}
.notch{position:absolute;top:8px;left:50%;transform:translateX(-50%);width:66px;height:15px;border-radius:99px;background:#1c1c1e;z-index:3}
.notch:after{content:"";position:absolute;right:9px;top:4px;width:7px;height:7px;border-radius:50%;background:#3a3a3d}
.p-mid{left:50%;margin-left:-106px;z-index:3}
.p-left{left:50%;margin-left:-250px;z-index:2;transform-origin:right center}
.p-right{left:50%;margin-left:44px;z-index:2;transform-origin:left center}

/* centre phone: player */
.pl{height:100%;background:linear-gradient(180deg,#e8760a,#7a3b06);color:#fff;padding:30px 16px 16px;display:flex;flex-direction:column;align-items:center}
.pl small{font-size:8px;letter-spacing:.14em;opacity:.85;align-self:flex-start}
.disc{width:126px;height:126px;border-radius:50%;background:#1a1008;margin:16px 0 14px;display:grid;place-items:center;border:2px dotted rgba(255,190,120,.6);animation:spin 14s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
.disc i{width:26px;height:26px;border-radius:50%;background:var(--or);display:block}
.pl b{font-size:22px;letter-spacing:.12em;font-weight:800}
.pl span{font-size:9px;opacity:.85;margin-top:3px}
.bar{width:100%;height:3px;border-radius:9px;background:rgba(255,255,255,.28);margin-top:auto;position:relative}
.bar:after{content:"";position:absolute;left:0;top:0;bottom:0;width:58%;border-radius:9px;background:#fff}
.times{width:100%;display:flex;justify-content:space-between;font-size:8px;opacity:.8;margin-top:6px}

/* side phones: discover / library */
.dc{height:100%;background:#fff;padding:26px 12px 12px}
.dc-h{display:flex;align-items:center;gap:7px;font-size:12px;font-weight:700}
.dc-h u{width:17px;height:17px;border-radius:50%;background:var(--ink);color:#fff;display:grid;place-items:center;font-size:11px;text-decoration:none}
.srch{display:flex;align-items:center;gap:6px;margin:11px 0;padding:7px 9px;border:1px solid var(--line);border-radius:8px;font-size:8.5px;color:#9a9a9a}
.dc b{font-size:10.5px}
.art{margin-top:8px;height:86px;border-radius:9px;background:linear-gradient(140deg,#f6b26b,#ed7706)}
.art.alt{background:linear-gradient(140deg,#fde3c8,#f7c58d)}
.dc em{display:block;font-style:normal;font-size:8px;color:#8a8a8a;margin-top:5px}
.rowline{height:7px;border-radius:5px;background:#f2f2f2;margin-top:7px}

/* ---------- trusted / logos ---------- */
.trust{padding:52px 40px 30px;text-align:center;font-size:14px;color:var(--mut)}
.logos{display:grid;grid-template-columns:repeat(6,1fr)}
.logos div{padding:26px 8px;text-align:center;border-right:1px solid var(--line);font-size:14px;font-weight:700;color:#b9b9b9;letter-spacing:-.02em;transition:color .3s}
.logos div:last-child{border-right:0}
.logos div:hover{color:var(--ink)}

/* ---------- features ---------- */
.sec{padding:66px 40px}
.sec-h{text-align:center;font-size:clamp(23px,3.1vw,33px);line-height:1.28;color:#b6b6b6;font-weight:700;margin-bottom:40px}
.f-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.f-card{border:1px solid var(--line);border-radius:6px;padding:28px 24px;display:flex;flex-direction:column;transition:transform .3s cubic-bezier(.2,.8,.2,1),box-shadow .3s,border-color .3s}
.f-card:hover{transform:translateY(-5px);box-shadow:0 22px 46px -18px rgba(0,0,0,.14)}
.f-card.hot{border-color:var(--or)}
.f-card h3{font-size:24px;line-height:1.2;margin-bottom:14px}
.f-card p{font-size:13.5px;line-height:1.75;color:var(--mut);margin-bottom:24px}
.wave{display:flex;align-items:center;gap:3px;height:70px;margin-top:auto}
.wave i{flex:1;border-radius:2px;background:var(--or);opacity:.62;display:block;animation:pump 1.5s ease-in-out infinite}
.f-card:hover .wave i{opacity:1}
@keyframes pump{0%,100%{transform:scaleY(.72)}50%{transform:scaleY(1)}}
.prompt{margin-top:auto}
.prompt .pill{display:inline-block;max-width:100%;background:var(--or);color:#fff;border-radius:16px;padding:9px 16px;font-size:11.5px;font-weight:600;line-height:1.5;transition:transform .25s cubic-bezier(.2,.8,.2,1)}
.f-card:hover .prompt .pill{transform:translateY(-2px)}
.dots{display:flex;gap:5px;margin:12px 0 7px}
.dots u{width:6px;height:6px;border-radius:50%;background:#dcdcdc;text-decoration:none}
.dots u.on{background:var(--or)}
.prompt em{font-style:normal;font-size:11px;color:#a5a5a5}
.socs{display:flex;gap:14px;margin-top:auto;color:var(--or)}
.socs a{display:grid;place-items:center;transition:transform .25s cubic-bezier(.2,.8,.2,1),color .25s}
.socs a:hover{transform:translateY(-3px);color:var(--ink)}
.socs svg{width:19px;height:19px}

/* ---------- pricing ---------- */
.pr-h{text-align:center;font-size:clamp(30px,4.2vw,46px);margin-bottom:20px}
.toggle{display:flex;justify-content:center;margin-bottom:38px}
.toggle div{display:inline-flex;border:1px solid var(--line);border-radius:6px;overflow:hidden;font-size:13px}
.toggle button{padding:10px 18px;background:#fff;color:#555;transition:background .25s,color .25s}
.toggle button.on{background:var(--ink);color:#fff}
.toggle button:not(.on):hover{background:#f6f6f6}
.p-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;align-items:start}
.p-card{position:relative;border:1px solid var(--line);border-radius:6px;padding:28px 24px;transition:transform .3s cubic-bezier(.2,.8,.2,1),box-shadow .3s}
.p-card:hover{transform:translateY(-5px);box-shadow:0 22px 46px -18px rgba(0,0,0,.14)}
.p-card.hot{border-color:var(--or)}
.badge{position:absolute;right:16px;top:-11px;background:var(--or);color:#fff;font-size:9.5px;font-weight:700;letter-spacing:.06em;padding:5px 10px;border-radius:4px}
.p-card h3{font-size:25px;margin-bottom:10px}
.p-card>p{font-size:13px;color:var(--mut);line-height:1.6;min-height:38px}
.price{margin:16px 0 20px;font-family:"Space Grotesk",sans-serif;font-size:40px;font-weight:700;letter-spacing:-.04em}
.price small{font-size:13px;color:var(--mut);font-weight:500;letter-spacing:0}
.p-card ul{list-style:none;padding:0;margin:0 0 24px}
.p-card li{display:flex;gap:10px;font-size:12.5px;line-height:1.6;color:#4a4a4a;margin-bottom:11px}
.p-card li:before{content:"";width:9px;height:9px;background:var(--ink);flex:none;margin-top:4px}
.p-card .btn{width:100%}

/* ---------- closing gradient ---------- */
.close-g{height:190px;background:linear-gradient(180deg,#fff 0%,#f7c894 62%,var(--or) 100%)}

/* ---------- footer ---------- */
.ft{padding:52px 40px 34px;display:grid;grid-template-columns:1.5fr 1fr 1fr;gap:40px}
.ft h4{margin:0 0 16px;font-family:"Space Grotesk",sans-serif;font-size:19px;font-weight:700;letter-spacing:-.03em}
.news{display:flex;gap:8px;max-width:330px}
.news input{flex:1;padding:11px 13px;border:1px solid var(--line);border-radius:5px;font-size:13px;outline:0;transition:border-color .25s}
.news input:focus{border-color:var(--or)}
.ft-soc{display:flex;gap:14px;margin-top:38px;color:#4a4a4a}
.ft-soc a{transition:transform .25s cubic-bezier(.2,.8,.2,1),color .25s}
.ft-soc a:hover{transform:translateY(-3px);color:var(--or)}
.ft-soc svg{width:15px;height:15px}
.copy{margin-top:14px;font-size:12px;color:var(--mut)}
.ft-col a{display:block;font-size:14px;color:var(--mut);margin-bottom:13px;cursor:pointer;transition:color .25s,transform .25s}
.ft-col a:hover{color:var(--ink);transform:translateX(3px)}

/* ---------- responsive ---------- */
@media(max-width:940px){
  .nav-links{display:none}
  .f-grid,.p-grid{grid-template-columns:1fr}
  .logos{grid-template-columns:repeat(3,1fr)}
  .logos div:nth-child(3n){border-right:0}
  .logos div:nth-child(-n+3){border-bottom:1px solid var(--line)}
  .ft{grid-template-columns:1fr 1fr}
  .ft-brand{grid-column:1/-1}
}
@media(max-width:620px){
  .pad,.nav-in,.sec,.trust,.ft{padding-left:18px;padding-right:18px}
  .hero{padding:34px 18px 0}
  .hero-cta .btn{flex:1 1 100%}
  .nav-right .btn:first-child{display:none}
  .phones{height:300px;perspective:none}
  .ph{width:150px;height:304px;bottom:-30px;border-radius:26px}
  .ph-s{border-radius:20px}
  .p-mid{margin-left:-75px}
  .p-left,.p-right{display:none}
  .disc{width:92px;height:92px}
  .logos{grid-template-columns:repeat(2,1fr)}
  .logos div:nth-child(2n){border-right:0}
  .ft{grid-template-columns:1fr}
}
@media(prefers-reduced-motion:reduce){
  .rv{opacity:1!important;transform:none!important}
  .disc,.wave i{animation:none}
  .ph{transform:none!important}
}
</style></head>
<body data-cf-keep-dark>

<nav class="nav" id="nav"><div class="nav-in">
  <div class="brand"><span class="mk">WAVE</span>MelodiaAI</div>
  <div class="nav-links"><a>Products</a><a>Customer</a><a>Solution</a><a>Pricing</a><a>About</a></div>
  <div class="nav-right"><button class="btn b-line">Watch Demo</button><button class="btn b-dark">Install Now</button></div>
</div></nav>

<div class="shell">

  <header class="hero">
    <div class="tag rv"><b>Hiring</b><span>Apply for Design Engineer &rarr;</span></div>
    <h1 class="rv">Make Any Song<br>You Can Imagine</h1>
    <p class="lead rv">Create stunning original music for free in seconds using AI. Make your own masterpieces, share with friends, and discover music from artists worldwide.</p>
    <div class="hero-cta rv">
      <button class="btn b-dark">Install Now</button>
      <button class="btn b-ghost">Watch Demo</button>
    </div>
  </header>

  <div class="hatch"></div>

  <div class="phones" id="phones">
    <div class="ph p-left" id="phL"><div class="notch"></div><div class="ph-s"><div class="dc">
      <div class="dc-h"><u>+</u>Discover</div>
      <div class="srch">&#9906; Search tracks and artists</div>
      <b>Fresh for you</b>
      <div class="art"></div><em>Midnight Signals</em>
      <div class="art alt" style="height:56px"></div><em>Paper Lanterns</em>
      <div class="rowline"></div><div class="rowline"></div>
    </div></div></div>

    <div class="ph p-mid" id="phM"><div class="notch"></div><div class="ph-s"><div class="pl">
      <small>NOW PLAYING</small>
      <div class="disc"><i></i></div>
      <b>MELODIA</b>
      <span>Make any song you can imagine</span>
      <div class="bar"></div>
      <div class="times"><span>1:42</span><span>3:05</span></div>
    </div></div></div>

    <div class="ph p-right" id="phR"><div class="notch"></div><div class="ph-s"><div class="dc">
      <div class="dc-h"><u>&#9835;</u>Library</div>
      <div class="art" style="height:104px"></div><em>Saved this week</em>
      <div class="rowline"></div><div class="rowline"></div><div class="rowline"></div>
      <div class="art alt" style="height:64px"></div><em>Your mixes</em>
    </div></div></div>
  </div>

  <p class="trust rv">Trusted By The World's Best Companies</p>
  <div class="hatch"></div>
  <div class="logos">
    <div>billboard</div><div>COMPLEX</div><div>Forbes</div><div>RollingStone</div><div>Variety</div><div>WIRED</div>
  </div>
  <div class="hatch"></div>

  <section class="sec">
    <h2 class="sec-h rv">Everything You Need To<br>Make Music Your Way</h2>
    <div class="f-grid">
      <div class="f-card rv">
        <h3>100 free<br>songs daily</h3>
        <p>Turn any moment into customized music instantly, from your commute to inside jokes. Express what words can't. Free forever, no subscription needed.</p>
        <div class="wave">
          <i style="height:24%;animation-delay:0s"></i><i style="height:58%;animation-delay:.1s"></i><i style="height:36%;animation-delay:.2s"></i>
          <i style="height:82%;animation-delay:.3s"></i><i style="height:48%;animation-delay:.4s"></i><i style="height:96%;animation-delay:.5s"></i>
          <i style="height:62%;animation-delay:.6s"></i><i style="height:30%;animation-delay:.7s"></i><i style="height:74%;animation-delay:.8s"></i>
          <i style="height:44%;animation-delay:.9s"></i><i style="height:88%;animation-delay:1s"></i><i style="height:52%;animation-delay:1.1s"></i>
          <i style="height:68%;animation-delay:1.2s"></i><i style="height:26%;animation-delay:1.3s"></i><i style="height:56%;animation-delay:1.4s"></i>
        </div>
      </div>

      <div class="f-card hot rv">
        <h3>Free AI music<br>generator</h3>
        <p>Discover what's possible when anyone can make music. Access the market-leading AI song generator — millions of songs, remixes, jokes, and raw emotion awaiting.</p>
        <div class="prompt">
          <span class="pill">Make a house song about quitting your job</span>
          <div class="dots"><u class="on"></u><u></u><u></u></div>
          <em>Generating a house song about quitting the job</em>
        </div>
      </div>

      <div class="f-card rv">
        <h3>Share It with<br>the world</h3>
        <p>Make music that matters to you, then share it with people who'll feel it too. From your inner circle to millions of music fans, your next track can go far.</p>
        <div class="socs">
          <a aria-label="YouTube"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.8-.5-5.6a2.9 2.9 0 0 0-2-2C18.7 4 12 4 12 4s-6.7 0-8.5.4a2.9 2.9 0 0 0-2 2C1 8.2 1 12 1 12s0 3.8.5 5.6a2.9 2.9 0 0 0 2 2C5.3 20 12 20 12 20s6.7 0 8.5-.4a2.9 2.9 0 0 0 2-2C23 15.8 23 12 23 12zM9.8 15.4V8.6l5.9 3.4-5.9 3.4z"/></svg></a>
          <a aria-label="X"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.2 8.2L23 22h-6.9l-5.4-7-6.2 7H1.3l7.7-8.8L1 2h7l4.9 6.4L18.9 2z"/></svg></a>
          <a aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2 3.76-2 4 0 4.7 2.6 4.7 6v6.3h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21h-4V9z"/></svg></a>
          <a aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z"/></svg></a>
          <a aria-label="Threads"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.2 22h-.05c-3.35-.02-5.93-1.13-7.66-3.29C3.04 16.78 2.25 14.02 2.24 12v-.02c.01-2.02.8-4.78 2.25-6.7C6.22 3.13 8.8 2.02 12.15 2h.05c2.57.02 4.72.68 6.39 1.97a7.9 7.9 0 0 1 2.66 3.85l-1.87.52a6 6 0 0 0-2-2.88C16.06 4.45 14.33 3.94 12.2 3.92h-.04c-2.75.02-4.82.88-6.16 2.56C4.73 8.05 4.2 10.2 4.19 12c.01 1.8.54 3.95 1.81 5.52 1.34 1.68 3.41 2.54 6.16 2.56h.04c2.48-.02 4.12-.6 5.48-1.94 1.55-1.53 1.52-3.41 1.02-4.55-.3-.67-.83-1.23-1.55-1.65-.18 1.27-.58 2.3-1.2 3.07-.83 1.03-2.01 1.6-3.5 1.68-1.13.06-2.22-.2-3.06-.75a3.55 3.55 0 0 1-1.63-2.72c-.12-2.16 1.6-3.72 4.3-3.88 .95-.05 1.85 0 2.67.13-.11-.66-.33-1.18-.67-1.56-.46-.52-1.17-.78-2.12-.79h-.03c-.76 0-1.8.21-2.46 1.2l-1.6-1.08c.88-1.31 2.32-2.03 4.06-2.03h.05c2.9.02 4.63 1.8 4.8 4.9l.1.05c1.32.62 2.29 1.56 2.8 2.71.71 1.6.78 4.2-1.34 6.3C17.36 21.24 15.24 21.98 12.2 22zm-.63-11.1c-.2 0-.4 0-.6.02-1.94.11-2.53.98-2.48 1.78.05.87.99 1.28 1.9 1.23.83-.05 1.92-.37 2.1-2.85a7.5 7.5 0 0 0-.92-.17z"/></svg></a>
          <a aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg></a>
        </div>
      </div>
    </div>
  </section>

  <div class="hatch"></div>

  <section class="sec">
    <h2 class="pr-h rv">Pricing</h2>
    <div class="toggle rv"><div><button class="on" id="mo">Monthly</button><button id="yr">Yearly ( 20% Off )</button></div></div>
    <div class="p-grid">
      <div class="p-card rv">
        <h3>Hobbyist Plan</h3>
        <p>Our starter plan.</p>
        <div class="price"><span data-m="$0" data-y="$0">$0</span> <small>/mo</small></div>
        <ul>
          <li>Access to v4.5-all</li>
          <li>50 credits renew daily (10 songs)</li>
          <li>Standard features only</li>
          <li>Upload up to 1 min of audio</li>
          <li>No add-on credit purchases</li>
        </ul>
        <button class="btn b-line">Sign Up</button>
      </div>

      <div class="p-card hot rv">
        <span class="badge">MOST POPULAR</span>
        <h3>Artist Plan</h3>
        <p>Access to our best models and editing tools</p>
        <div class="price"><span data-m="$10" data-y="$8">$10</span> <small>/mo</small></div>
        <ul>
          <li>Access to latest and most advanced v5 model</li>
          <li>2,500 credits (up to 500 songs), refreshes monthly</li>
          <li>Commercial use rights for new songs</li>
          <li>Split songs into up to 12 vocal and instrument stems</li>
          <li>Upload up to 8 min of audio</li>
          <li>Early access to new features</li>
        </ul>
        <button class="btn b-or">Subscribe</button>
      </div>

      <div class="p-card rv">
        <h3>Professional Plan</h3>
        <p>Maximum credits and every feature unlocked</p>
        <div class="price"><span data-m="$30" data-y="$24">$30</span> <small>/mo</small></div>
        <ul>
          <li>Access to Melodia Studio</li>
          <li>10,000 credits (up to 2,000 songs), refreshes monthly</li>
          <li>Standard + Pro features (personas and advanced editing)</li>
          <li>Upload up to 8 min of audio</li>
          <li>Priority queue, up to 10 songs at once</li>
        </ul>
        <button class="btn b-dark">Subscribe</button>
      </div>
    </div>
  </section>

  <div class="close-g"></div>

  <footer class="ft">
    <div class="ft-brand">
      <h4>Newsletter</h4>
      <div class="news"><input placeholder="Enter Your Email"><button class="btn b-dark">Submit</button></div>
      <div class="ft-soc">
        <a aria-label="X"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.2 8.2L23 22h-6.9l-5.4-7-6.2 7H1.3l7.7-8.8L1 2h7l4.9 6.4L18.9 2z"/></svg></a>
        <a aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2 3.76-2 4 0 4.7 2.6 4.7 6v6.3h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21h-4V9z"/></svg></a>
        <a aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z"/></svg></a>
        <a aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/></svg></a>
        <a aria-label="TikTok"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 2h-3v13.2a2.9 2.9 0 1 1-2.4-2.85V9.3a6 6 0 1 0 5.4 5.97V8.9a6.8 6.8 0 0 0 4 1.3V7.2a4 4 0 0 1-4-4z"/></svg></a>
        <a aria-label="YouTube"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.8-.5-5.6a2.9 2.9 0 0 0-2-2C18.7 4 12 4 12 4s-6.7 0-8.5.4a2.9 2.9 0 0 0-2 2C1 8.2 1 12 1 12s0 3.8.5 5.6a2.9 2.9 0 0 0 2 2C5.3 20 12 20 12 20s6.7 0 8.5-.4a2.9 2.9 0 0 0 2-2C23 15.8 23 12 23 12zM9.8 15.4V8.6l5.9 3.4-5.9 3.4z"/></svg></a>
      </div>
      <p class="copy">&copy; 2026 Melodia AI, All rights reserved</p>
    </div>
    <div class="ft-col"><h4>Brand</h4><a>About</a><a>Work at Melodia</a><a>Blog</a><a>Pricing</a><a>Hub</a></div>
    <div class="ft-col"><h4>Support</h4><a>Help</a><a>Contact Us</a><a>Guidelines</a><a>FAQs</a><a>T&amp;S</a><a>Privacy</a></div>
  </footer>

</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script>
(function(){
  var nav = document.getElementById("nav");
  document.addEventListener("scroll", function(){
    nav.classList.toggle("on", window.scrollY > 10);
  }, { passive: true });

  // Pricing toggle swaps the figures rather than only restyling the switch.
  var mo = document.getElementById("mo"), yr = document.getElementById("yr");
  var figures = document.querySelectorAll(".price span");
  function bill(yearly){
    mo.classList.toggle("on", !yearly);
    yr.classList.toggle("on", yearly);
    figures.forEach(function(f){
      f.textContent = f.getAttribute(yearly ? "data-y" : "data-m");
    });
  }
  mo.addEventListener("click", function(){ bill(false); });
  yr.addEventListener("click", function(){ bill(true); });

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var phone = window.matchMedia("(max-width: 620px)").matches;

  if (!window.gsap || !window.ScrollTrigger || reduced) {
    document.querySelectorAll(".rv").forEach(function(el){
      el.style.opacity = 1;
      el.style.transform = "none";
    });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".hero .rv", { opacity: 1, y: 0, duration: .8, stagger: .09, ease: "power3.out" });

  document.querySelectorAll("section .rv, .trust.rv").forEach(function(el){
    gsap.to(el, {
      opacity: 1, y: 0, duration: .75, ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 88%", once: true }
    });
  });

  if (!phone) {
    // Side handsets sit behind the centre one via negative translateZ: inside a
    // perspective parent the browser sorts by depth and ignores z-index.
    gsap.set("#phM", { y: 120, opacity: 0 });
    gsap.set("#phL", { x: 120, y: 150, rotationY: 40, rotation: -14, z: -260, opacity: 0 });
    gsap.set("#phR", { x: -120, y: 150, rotationY: -40, rotation: 14, z: -260, opacity: 0 });

    // Replays on re-entry rather than running once, so the fan is still worth
    // scrolling back to and a short preview viewport cannot burn it on load.
    gsap.timeline({ scrollTrigger: { trigger: "#phones", start: "top 84%", toggleActions: "restart none none reverse" } })
      .to("#phM", { y: 0, opacity: 1, duration: 1, ease: "power3.out" })
      .to("#phL", { x: 0, y: 46, rotationY: 24, rotation: -10, z: -150, opacity: 1, duration: 1.1, ease: "power3.out" }, "-=0.78")
      .to("#phR", { x: 0, y: 46, rotationY: -24, rotation: 10, z: -150, opacity: 1, duration: 1.1, ease: "power3.out" }, "<");

    // Parallax drift at three depths. Only yPercent is scrubbed here — tweening the
    // rotations would fight the entrance above, which starts them elsewhere.
    var drift = { trigger: "#phones", start: "top bottom", end: "bottom top", scrub: true };
    gsap.to("#phM", { yPercent: -9, ease: "none", scrollTrigger: drift });
    gsap.to("#phL", { yPercent: -15, ease: "none", scrollTrigger: drift });
    gsap.to("#phR", { yPercent: -15, ease: "none", scrollTrigger: drift });
  }

  window.addEventListener("load", function(){ ScrollTrigger.refresh(); });
})();
</script>
</body></html>`,
  "enterprise-delivery-landing-page": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Enterprise Delivery Landing Page</title><style>
:root{--blue:#2146f7;--blue-d:#1736d8;--ink:#0c0f16;--mut:#6b7280;--dark:#010101;--card:#0d041a;--line:#e8eaf1;--lined:rgba(255,255,255,.08)}
*{box-sizing:border-box}
body{margin:0;background:var(--dark);color:#fff;font-family:Inter,ui-sans-serif,system-ui,sans-serif;-webkit-font-smoothing:antialiased;overflow-x:hidden}
h1,h2,h3{font-family:"Space Grotesk",Inter,ui-sans-serif,sans-serif;margin:0;font-weight:500;letter-spacing:-.03em}
p{margin:0}
button{font-family:inherit;cursor:pointer;border:0}
.wrap{max-width:1180px;margin:0 auto;padding:0 28px}
.rv{opacity:0;transform:translateY(26px)}
.grad{background:linear-gradient(95deg,#4a9eff,#8b5cf6 34%,#e879a8 66%,#f59e5b);-webkit-background-clip:text;background-clip:text;color:transparent}

/* ---------- floating pill nav ---------- */
.nav{position:fixed;top:14px;left:0;right:0;z-index:80;display:flex;justify-content:center;pointer-events:none}
.nav-in{pointer-events:auto;display:flex;align-items:center;gap:22px;padding:9px 9px 9px 20px;border-radius:999px;background:#fff;box-shadow:0 12px 40px rgba(0,0,0,.34);transition:box-shadow .35s,transform .35s cubic-bezier(.2,.8,.2,1)}
.nav.on .nav-in{transform:translateY(-1px);box-shadow:0 16px 46px rgba(0,0,0,.44)}
.brand{display:flex;align-items:center;gap:10px;color:var(--ink);font-family:"Space Grotesk",sans-serif;font-size:17px;font-weight:600;letter-spacing:-.03em}
.ring{width:19px;height:19px;border-radius:50%;border:2px solid #8b5cf6;flex:none;transition:transform .45s cubic-bezier(.2,.8,.2,1),border-color .35s}
.brand:hover .ring{transform:rotate(140deg) scale(1.12);border-color:var(--blue)}
.nav-links{display:flex;gap:20px;font-size:13.5px;color:#3f4654}
.nav-links a{position:relative;cursor:pointer;padding-bottom:2px}
.nav-links a:after{content:"";position:absolute;left:0;bottom:0;width:100%;height:1.5px;background:var(--blue);transform:scaleX(0);transform-origin:right;transition:transform .3s cubic-bezier(.2,.8,.2,1)}
.nav-links a:hover:after{transform:scaleX(1);transform-origin:left}
.nav-srch{display:grid;place-items:center;width:26px;height:26px;color:#3f4654;transition:color .25s,transform .25s}
.nav-srch:hover{color:var(--blue);transform:scale(1.1)}
.nav-srch svg{width:16px;height:16px}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;border-radius:999px;padding:11px 22px;font-size:14px;font-weight:600;transition:transform .25s cubic-bezier(.2,.8,.2,1),background .25s,box-shadow .3s,border-color .25s}
.btn i{font-style:normal;display:inline-block;transition:transform .26s}
.btn:hover i{transform:translateX(4px)}
.b-blue{background:var(--blue);color:#fff}
.b-blue:hover{transform:translateY(-2px);background:var(--blue-d);box-shadow:0 14px 30px rgba(33,70,247,.45)}
.b-grad{background:linear-gradient(95deg,#6d3bf5,#c2410c);color:#fff;width:100%}
.b-grad:hover{transform:translateY(-2px);box-shadow:0 14px 34px rgba(140,60,200,.5)}
.b-line{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.3)}
.b-line:hover{transform:translateY(-2px);border-color:#fff;background:rgba(255,255,255,.08)}

/* ---------- hero ---------- */
.hero{position:relative;padding:200px 0 90px;text-align:center;overflow:hidden}
/* fanned light panels behind the nav, like the reference ceiling */
.fanlight{position:absolute;top:-96px;left:50%;transform:translateX(-50%);width:1600px;height:420px;pointer-events:none;
  background:
    conic-gradient(from 200deg at 50% 120%,transparent 0deg,rgba(60,90,220,.5) 14deg,transparent 26deg,rgba(150,80,220,.42) 40deg,transparent 54deg,rgba(210,120,90,.4) 70deg,transparent 84deg);
  filter:blur(3px);opacity:1}
.beam{position:absolute;left:50%;bottom:-140px;transform:translateX(-50%);width:760px;height:520px;pointer-events:none;background:radial-gradient(50% 50% at 50% 100%,rgba(255,215,170,.5),rgba(190,120,255,.22) 42%,transparent 72%);filter:blur(24px)}
.hero>.wrap{position:relative;z-index:2}
h1{font-size:clamp(32px,5.2vw,60px);line-height:1.12}
.hero p{margin:20px auto 0;max-width:62ch;font-size:15.5px;line-height:1.7;color:rgba(255,255,255,.58)}

/* ---------- capability cards ---------- */
.cards{position:relative;padding:0 0 130px;overflow:hidden}
.cards:after{content:"";position:absolute;left:-10%;right:-10%;bottom:-30px;height:340px;pointer-events:none;background:radial-gradient(60% 80% at 50% 100%,rgba(214,200,255,.95),rgba(214,200,255,.4) 45%,transparent 74%)}
.c-grid{position:relative;z-index:2;display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.c-card{position:relative;min-height:330px;display:flex;flex-direction:column;justify-content:flex-end;padding:26px 22px;border-radius:18px;background:linear-gradient(180deg,#160a28,var(--card));border:1px solid rgba(255,255,255,.09);overflow:hidden;transition:transform .35s cubic-bezier(.2,.8,.2,1),border-color .35s,box-shadow .35s}
.c-card:before{content:"";position:absolute;inset:0;border-radius:18px;padding:1px;background:linear-gradient(160deg,rgba(140,110,255,.55),transparent 45%);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:.8;pointer-events:none}
.c-card:hover{transform:translateY(-8px);border-color:rgba(160,130,255,.5);box-shadow:0 30px 60px -22px rgba(120,80,255,.5)}
.c-tag{position:absolute;top:18px;left:18px;display:inline-flex;align-items:center;gap:8px;padding:7px 14px;border-radius:999px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);font-size:12.5px;font-weight:500}
.c-tag u{width:11px;height:11px;border-radius:50%;border:2px solid #a78bfa;text-decoration:none;flex:none}
.c-card h3{font-size:21px;line-height:1.26;margin-bottom:16px}
.c-card ul{list-style:none;margin:0;padding:0}
.c-card li{display:flex;gap:9px;font-size:13px;line-height:1.5;color:rgba(255,255,255,.66);margin-bottom:9px}
.c-card li:before{content:"";width:12px;height:12px;border-radius:50%;border:2px solid #a78bfa;flex:none;margin-top:3px}
.c-card .btn{margin-top:14px}

/* ---------- light comparison ---------- */
.cmp{background:#fff;color:var(--ink);padding:96px 0 110px}
.cmp h2{text-align:center;font-size:clamp(28px,4vw,46px);line-height:1.12;margin-bottom:12px}
.cmp .lead{text-align:center;max-width:56ch;margin:0 auto 54px;font-size:15.5px;line-height:1.7;color:var(--mut)}
.cmp-grid{display:grid;grid-template-columns:1fr .86fr 1fr;gap:30px;align-items:center}
.col{display:flex;flex-direction:column;gap:12px}
.row{display:flex;gap:12px;padding:16px 18px;border:1px solid var(--line);border-radius:12px;background:#fff;font-size:14px;line-height:1.5;transition:transform .3s cubic-bezier(.2,.8,.2,1),box-shadow .3s,border-color .3s}
.row:hover{transform:translateY(-3px);box-shadow:0 16px 34px -14px rgba(12,15,22,.18);border-color:#d5d9e6}
.row svg{width:15px;height:15px;flex:none;margin-top:2px}
.col.bad .row{color:var(--mut)}
.col.bad svg{color:#9aa1ae}
.col.good svg{color:var(--blue)}
.col.good .row:hover{border-color:#b9c6ff}
/* gradient orb */
.orb{position:relative;aspect-ratio:1;display:grid;place-items:center}
.orb-glow{position:absolute;inset:-4%;border-radius:50%;background:radial-gradient(circle at 50% 50%,#fff 14%,rgba(233,225,255,.95) 30%,rgba(196,170,253,.72) 52%,rgba(251,186,140,.55) 74%,transparent 88%);filter:blur(10px)}
.orb-ring{position:relative;width:78%;aspect-ratio:1;border-radius:50%;border:3px solid transparent;background:linear-gradient(#fff,#fff) padding-box,conic-gradient(from 210deg,#4a9eff,#8b5cf6,#e879a8,#f59e5b,#fbbf24,#4a9eff) border-box;animation:orbspin 18s linear infinite}
@keyframes orbspin{to{transform:rotate(360deg)}}
.orb-mesh{position:absolute;inset:11%;border-radius:50%;opacity:.5;
  background:repeating-linear-gradient(0deg,rgba(140,110,220,.22) 0 1px,transparent 1px 13px),repeating-linear-gradient(90deg,rgba(140,110,220,.22) 0 1px,transparent 1px 13px)}
.orb-core{position:absolute;width:24%;aspect-ratio:1;border-radius:50%;background:#fff;box-shadow:0 0 46px 22px rgba(255,255,255,.98)}

/* ---------- flow / phases ---------- */
.flow{position:relative;background:#fff;color:var(--ink);padding:20px 0 120px;overflow:hidden}
.ph-grid{position:relative;z-index:2;display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
.ph{padding-left:2px}
.ph b{display:flex;align-items:center;gap:9px;font-size:16px;font-weight:600;margin-bottom:16px}
.ph b u{width:13px;height:13px;border-radius:50%;border:2px solid #a78bfa;text-decoration:none;flex:none}
.ph div{position:relative;padding:9px 0 9px 22px;font-size:14px;color:var(--mut);transition:color .25s,transform .25s}
.ph div:hover{color:var(--ink);transform:translateX(3px)}
.ph-line{position:absolute;left:5px;top:0;bottom:0;width:2px;border-radius:2px;background:linear-gradient(180deg,#8b5cf6,#f59e5b)}
.ph-items{position:relative}
.waves{position:absolute;left:0;right:0;bottom:-10px;height:300px;z-index:1;pointer-events:none}
.waves svg{width:100%;height:100%}
.waves path{fill:none;stroke-width:1}

/* ---------- final cta ---------- */
.fin{position:relative;background:var(--dark);padding:104px 0;text-align:center;overflow:hidden}
.fin .beam{bottom:-200px}
.fin>.wrap{position:relative;z-index:2}
.fin h2{font-size:clamp(28px,4.4vw,50px);line-height:1.12}
.fin p{margin:18px auto 30px;max-width:50ch;font-size:15.5px;line-height:1.7;color:rgba(255,255,255,.56)}
.fin-cta{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
.fin-cta .btn{width:auto}

/* ---------- footer ---------- */
.ft{background:var(--dark);border-top:1px solid var(--lined);padding:44px 0 34px}
.ft-in{display:flex;justify-content:space-between;gap:30px;flex-wrap:wrap;align-items:center}
.ft .brand{color:#fff}
.ft-links{display:flex;gap:26px;font-size:13.5px;color:rgba(255,255,255,.5)}
.ft-links a{cursor:pointer;transition:color .25s}
.ft-links a:hover{color:#fff}
.ft-copy{width:100%;padding-top:24px;font-size:12.5px;color:rgba(255,255,255,.34)}

/* ---------- responsive ---------- */
@media(max-width:1000px){
  .nav-links,.nav-srch{display:none}
  .c-grid{grid-template-columns:1fr 1fr}
  .cmp-grid{grid-template-columns:1fr}
  .orb{max-width:340px;margin:8px auto}
  .ph-grid{grid-template-columns:1fr 1fr}
}
@media(max-width:620px){
  .wrap{padding:0 18px}
  .hero{padding:150px 0 70px}
  .c-grid,.ph-grid{grid-template-columns:1fr}
  .c-card{min-height:0;padding-top:64px}
  .cmp,.fin{padding:66px 0}
  .fin-cta .btn{flex:1 1 100%}
}
@media(prefers-reduced-motion:reduce){
  .rv{opacity:1!important;transform:none!important}
  .orb-ring{animation:none}
}
</style></head>
<body data-cf-keep-dark>

<nav class="nav" id="nav"><div class="nav-in">
  <div class="brand"><span class="ring"></span>NexaCore</div>
  <div class="nav-links"><a>What We Build</a><a>Our Method</a><a>Who We Are</a><a>Thinking</a></div>
  <span class="nav-srch"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg></span>
  <button class="btn b-blue">Contact</button>
</div></nav>

<header class="hero">
  <div class="fanlight"></div>
  <div class="beam"></div>
  <div class="wrap">
    <h1 class="rv">Relied on by enterprise teams<br><span class="grad">from groundbreak to go-live.</span></h1>
    <p class="rv">Built for operational clarity through constant change. Proven across 530+ MW of critical infrastructure.</p>
  </div>
</header>

<section class="cards">
  <div class="wrap"><div class="c-grid">
    <article class="c-card rv">
      <span class="c-tag"><u></u>Planning</span>
      <h3>Turn new programs into structured plans without the noise.</h3>
      <ul><li>Embedded program leads</li><li>Decision-ready roadmaps</li></ul>
    </article>
    <article class="c-card rv">
      <span class="c-tag"><u></u>Procurement</span>
      <h3>Source and qualify vendors with far less friction.</h3>
      <ul><li>Cross-org scope alignment</li><li>End-to-end accountability</li></ul>
    </article>
    <article class="c-card rv">
      <span class="c-tag"><u></u>Logistics</span>
      <h3>Move the right materials on time without surprises.</h3>
      <ul><li>Spec and fit validations</li><li>Change order ownership</li></ul>
    </article>
    <article class="c-card rv">
      <span class="c-tag"><u></u>Commissioning</span>
      <h3>Activate systems with complete context, not guesswork.</h3>
      <ul><li>Uninterrupted workflows</li><li>Verified clean handoffs</li></ul>
      <button class="btn b-grad">Learn more <i>&rarr;</i></button>
    </article>
  </div></div>
</section>

<section class="cmp">
  <div class="wrap">
    <h2 class="rv">Replace the guesswork.<br><span class="grad">Run with confidence.</span></h2>
    <p class="lead rv">The same program, seen from both sides — before the operating model changes, and after.</p>

    <div class="cmp-grid">
      <div class="col bad">
        <div class="row rv"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M18 6 6 18M6 6l12 12"/></svg>Reactive firefighting when foundational issues surface too late</div>
        <div class="row rv"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M18 6 6 18M6 6l12 12"/></svg>Bloated coordination overhead drains bandwidth from core teams</div>
        <div class="row rv"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M18 6 6 18M6 6l12 12"/></svg>Constant re-verification because source data can't be trusted</div>
        <div class="row rv"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M18 6 6 18M6 6l12 12"/></svg>Fragmented vendor relations produce mismatched deliverables</div>
        <div class="row rv"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M18 6 6 18M6 6l12 12"/></svg>Scattered specs and decisions buried across siloed systems</div>
      </div>

      <div class="orb rv">
        <div class="orb-glow"></div>
        <div class="orb-ring"></div>
        <div class="orb-mesh"></div>
        <div class="orb-core"></div>
      </div>

      <div class="col good">
        <div class="row rv"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6 9 17l-5-5"/></svg>Layered dependency maps eliminate costly surprises at every phase</div>
        <div class="row rv"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6 9 17l-5-5"/></svg>Streamlined team handoffs deliver production-ready outcomes fast</div>
        <div class="row rv"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6 9 17l-5-5"/></svg>Live validation loops keep requirements locked across all stages</div>
        <div class="row rv"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6 9 17l-5-5"/></svg>Unified vendor management through a single accountable contact</div>
        <div class="row rv"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6 9 17l-5-5"/></svg>Centralized context and clear records accelerate every decision</div>
      </div>
    </div>
  </div>
</section>

<section class="flow">
  <div class="wrap"><div class="ph-grid">
    <div class="ph rv"><b><u></u>Scopes</b><div class="ph-items"><span class="ph-line"></span><div>conditions</div><div>capacity</div><div>specs</div><div>timelines</div></div></div>
    <div class="ph rv"><b><u></u>Integrates</b><div class="ph-items"><span class="ph-line"></span><div>civil</div><div>mechanical</div><div>electrical</div><div>controls</div></div></div>
    <div class="ph rv"><b><u></u>Certifies</b><div class="ph-items"><span class="ph-line"></span><div>redundancy</div><div>testing</div><div>compliance</div><div>sign-offs</div></div></div>
    <div class="ph rv"><b><u></u>Activates</b><div class="ph-items"><span class="ph-line"></span><div>cutover</div><div>runbooks</div><div>handoff</div><div>SLAs</div></div></div>
  </div></div>
  <div class="waves" id="waves"><svg viewBox="0 0 1200 300" preserveAspectRatio="none" id="wsvg"></svg></div>
</section>

<section class="fin">
  <div class="beam"></div>
  <div class="wrap">
    <h2 class="rv">Bring the same clarity<br><span class="grad">to your next program.</span></h2>
    <p class="rv">Tell us where the plan stops being trusted, and we will show you what changes in the first ninety days.</p>
    <div class="fin-cta rv">
      <button class="btn b-blue">Contact <i>&rarr;</i></button>
      <button class="btn b-line">Read our method</button>
    </div>
  </div>
</section>

<footer class="ft"><div class="wrap"><div class="ft-in">
  <div class="brand"><span class="ring"></span>NexaCore</div>
  <div class="ft-links"><a>What We Build</a><a>Our Method</a><a>Who We Are</a><a>Thinking</a><a>Contact</a></div>
  <div class="ft-copy">&copy; 2026 NexaCore. Operational clarity for critical infrastructure.</div>
</div></div></footer>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script>
(function(){
  var nav = document.getElementById("nav");
  document.addEventListener("scroll", function(){
    nav.classList.toggle("on", window.scrollY > 12);
  }, { passive: true });

  // The wave band is drawn rather than hand-authored: 26 offset sine paths read as a
  // single swept ribbon, and writing them out by hand would be unmaintainable.
  var svg = document.getElementById("wsvg");
  var lines = 26;
  for (var i = 0; i < lines; i++) {
    var t = i / (lines - 1);
    var amp = 52 - t * 16;
    var base = 150 + t * 80;
    var d = "M0 " + base;
    for (var x = 0; x <= 1200; x += 40) {
      var y = base - Math.sin((x / 1200) * Math.PI * 2.1 + t * 0.55) * amp;
      d += " L" + x + " " + y.toFixed(1);
    }
    var p = document.createElementNS("http://www.w3.org/2000/svg", "path");
    p.setAttribute("d", d);
    p.setAttribute("stroke", "url(#wg)");
    p.setAttribute("opacity", (0.16 + t * 0.3).toFixed(2));
    svg.appendChild(p);
  }
  var defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
  defs.innerHTML = '<linearGradient id="wg" x1="0" y1="0" x2="1" y2="0">' +
    '<stop offset="0" stop-color="#4a9eff"/><stop offset="0.36" stop-color="#8b5cf6"/>' +
    '<stop offset="0.66" stop-color="#e879a8"/><stop offset="1" stop-color="#f59e5b"/></linearGradient>';
  svg.insertBefore(defs, svg.firstChild);

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!window.gsap || !window.ScrollTrigger || reduced) {
    document.querySelectorAll(".rv").forEach(function(el){
      el.style.opacity = 1;
      el.style.transform = "none";
    });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".hero .rv", { opacity: 1, y: 0, duration: .9, stagger: .12, ease: "power3.out" });

  // Cards rise in sequence rather than all at once, so the row reads left to right.
  gsap.to(".c-card", {
    opacity: 1, y: 0, duration: .8, stagger: .11, ease: "power3.out",
    scrollTrigger: { trigger: ".c-grid", start: "top 84%", once: true }
  });

  document.querySelectorAll(".cmp .rv, .flow .rv, .fin .rv").forEach(function(el){
    gsap.to(el, {
      opacity: 1, y: 0, duration: .7, ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 90%", once: true }
    });
  });

  // The beams drift slower than the page so the dark sections gain depth.
  gsap.to(".hero .beam", { yPercent: 26, ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
  gsap.to(".fanlight", { yPercent: -18, ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
  gsap.to(".waves", { yPercent: -14, ease: "none",
    scrollTrigger: { trigger: ".flow", start: "top bottom", end: "bottom top", scrub: true } });

  window.addEventListener("load", function(){ ScrollTrigger.refresh(); });
})();
</script>
</body></html>`,
  "creative-agency-landing-page": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Creative Agency Landing Page</title><style>
:root{--lime:#c3ff76;--lime-d:#b1f25c;--dark:#1f292d;--light:#f2f6f8;--mut:#5f6b70;--line:#e3e8ea}
*{box-sizing:border-box}
body{margin:0;background:#fff;color:var(--dark);font-family:Inter,ui-sans-serif,system-ui,sans-serif;-webkit-font-smoothing:antialiased;overflow-x:hidden}
h1,h2,h3{font-family:"Space Grotesk",Inter,ui-sans-serif,sans-serif;margin:0;font-weight:600;letter-spacing:-.035em}
p{margin:0}
button,input,textarea{font-family:inherit}
button{cursor:pointer;border:0}
.wrap{padding:0 28px}
.rv{opacity:0;transform:translateY(30px)}

/* ---------- nav: transparent over the hero, lime bar once scrolled ---------- */
.nav{position:fixed;top:0;left:0;right:0;z-index:70;display:flex;align-items:center;justify-content:space-between;padding:18px 28px;transition:background .4s,padding .4s}
.nav.on{background:var(--lime);padding:12px 28px}
.logo{font-family:"Space Grotesk",sans-serif;font-size:38px;font-weight:700;letter-spacing:-.05em;color:#fff;transition:color .4s}
.logo i{font-style:normal;color:var(--lime);transition:color .4s}
.nav.on .logo{color:var(--dark)}
.nav.on .logo i{color:var(--dark)}
.burger{width:48px;height:48px;border-radius:50%;background:#fff;display:grid;place-items:center;transition:background .4s,transform .3s cubic-bezier(.2,.8,.2,1)}
.burger:hover{transform:scale(1.08)}
.burger span{display:block;width:20px;height:2px;border-radius:2px;background:var(--dark);box-shadow:0 -6px 0 var(--dark),0 6px 0 var(--dark);transition:background .4s,box-shadow .4s}
.nav.on .burger{background:var(--dark)}
.nav.on .burger span{background:#fff;box-shadow:0 -6px 0 #fff,0 6px 0 #fff}

/* slide-out menu */
.menu{position:fixed;top:70px;right:18px;z-index:90;width:300px;padding:22px;border-radius:20px;background:#fff;border:1px solid var(--line);box-shadow:0 30px 70px rgba(31,41,45,.18);opacity:0;visibility:hidden;transform:translateX(24px);transition:opacity .35s,transform .45s cubic-bezier(.2,.8,.2,1),visibility .35s}
.menu.open{opacity:1;visibility:visible;transform:none}
.menu-h{display:flex;justify-content:space-between;align-items:center;padding-bottom:16px;border-bottom:1px solid var(--line);margin-bottom:14px;font-size:16px}
.menu-x{width:28px;height:28px;background:none;font-size:22px;line-height:1;color:var(--dark);transition:transform .3s}
.menu-x:hover{transform:rotate(90deg)}
.menu a{display:flex;align-items:center;gap:8px;padding:6px 0;font-family:"Space Grotesk",sans-serif;font-size:22px;font-weight:600;letter-spacing:-.03em;cursor:pointer;transition:transform .3s cubic-bezier(.2,.8,.2,1),color .3s}
.menu a:hover{transform:translateX(8px);color:#617a2a}
.menu a.cur:before{content:"✱";font-size:15px;color:var(--dark)}
.menu-auth{display:flex;gap:10px;margin:18px 0}
.menu-auth button{flex:1;padding:13px;border-radius:999px;font-size:15px;font-weight:600;transition:transform .25s,background .25s}
.menu-auth .in{background:#fff;border:1px solid var(--line);color:var(--dark)}
.menu-auth .up{background:var(--dark);color:#fff}
.menu-auth button:hover{transform:translateY(-2px)}
.menu small{display:block;font-size:13px;color:var(--mut)}
.menu b{display:block;margin-top:4px;font-size:19px;letter-spacing:-.02em}

/* pill with an arrow disc that slides across on hover */
.pill{position:relative;display:inline-flex;align-items:center;gap:14px;padding:6px 6px 6px 24px;border-radius:999px;background:var(--lime);color:var(--dark);font-size:16px;font-weight:600;overflow:hidden;transition:background .3s}
.pill .disc{width:44px;height:44px;border-radius:50%;background:#fff;display:grid;place-items:center;flex:none;transition:transform .45s cubic-bezier(.2,.8,.2,1)}
.pill .disc svg{width:17px;height:17px;transition:transform .45s cubic-bezier(.2,.8,.2,1)}
.pill:hover{background:var(--lime-d)}
.pill:hover .disc svg{transform:rotate(45deg)}
.pill.bare{padding:6px;gap:0}
.pill.bare .disc{background:var(--dark);color:#fff}
.pill.bare:hover .disc{transform:translateX(26px)}
.pill.bare{width:88px}

/* ---------- hero ---------- */
.hero{position:relative;min-height:100vh;display:flex;flex-direction:column;justify-content:flex-end;padding:0 28px 44px;overflow:hidden;background:#050606}
/* stand-in for the reference's portrait video: a lit figure-shaped glow on black */
.hero-art{position:absolute;inset:0;pointer-events:none;
  background:
    radial-gradient(22% 34% at 50% 30%,rgba(170,160,145,.55),transparent 70%),
    radial-gradient(34% 44% at 52% 78%,rgba(125,122,110,.55),transparent 72%),
    radial-gradient(60% 60% at 50% 60%,rgba(40,42,40,.9),transparent 75%),
    #050606}
.hero-art:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.2),transparent 40%,rgba(0,0,0,.55))}
.hero>*{position:relative;z-index:2}
.tagline{display:flex;align-items:flex-start;gap:16px;max-width:420px;margin-bottom:16px;color:rgba(255,255,255,.72);font-size:16px;line-height:1.55}
.tagline em{font-style:normal;color:var(--lime)}
.star{width:36px;height:36px;flex:none;color:var(--lime);animation:spin 12s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
.hero-word{display:flex;align-items:flex-end;gap:18px;flex-wrap:wrap}
.hero-word h1{font-size:clamp(72px,13vw,188px);line-height:.86;letter-spacing:-.06em;color:#fff}
.hero-word .pill{margin-bottom:14px}

/* ---------- section label ---------- */
.lab{display:flex;align-items:center;gap:0}
.lab u{width:30px;height:30px;border-radius:50%;background:var(--lime);display:grid;place-items:center;font-size:13px;text-decoration:none;flex:none}
.lab i{width:52px;height:1px;background:#c9d1d4;margin:0 22px}
.lab b{padding:7px 14px;border-radius:999px;background:var(--dark);color:#fff;font-size:14px;font-weight:500}
.split{display:grid;grid-template-columns:1fr 2fr;gap:30px}
.sec{padding:96px 28px}
.sec h2{font-size:clamp(32px,4.4vw,54px);line-height:1.08}
.sec .lead{margin-top:16px;max-width:52ch;font-size:17px;line-height:1.7;color:var(--mut)}

/* ---------- stats ---------- */
.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;margin:40px 0 34px}
.stat{padding-top:30px;border-top:1px solid var(--line)}
.stat b{display:block;font-family:"Space Grotesk",sans-serif;font-size:clamp(40px,5vw,62px);font-weight:600;letter-spacing:-.04em}
.stat span{display:block;margin-top:8px;font-size:15px;line-height:1.5;color:var(--mut)}
.bg-star{position:absolute;left:-60px;bottom:-40px;width:380px;height:380px;color:#e3e8ea;pointer-events:none}
.stats-sec{position:relative;overflow:hidden}

/* ---------- portfolio marquee ---------- */
.pf{background:var(--light)}
.pf-row{margin-top:54px;overflow:hidden}
.pf-track{display:flex;gap:24px;width:max-content;animation:slide 40s linear infinite}
.pf-row:hover .pf-track{animation-play-state:paused}
@keyframes slide{to{transform:translateX(-50%)}}
.proj{width:300px;flex:none;cursor:pointer}
.proj-img{height:220px;overflow:hidden}
.proj-img div{width:100%;height:100%;transition:transform .7s cubic-bezier(.2,.8,.2,1)}
.proj:hover .proj-img div{transform:scale(1.08)}
.proj h3{margin:18px 0 12px;font-size:30px;transition:color .3s}
.proj:hover h3{color:#617a2a}
.chips{display:flex;gap:8px;flex-wrap:wrap}
.chips span{padding:7px 14px;border:1px solid #d3dadd;border-radius:999px;font-size:14px;color:var(--dark);background:#fff}
.a1{background:radial-gradient(circle at 30% 30%,#e7dccc,#b8a58a 60%,#6d5f4c)}
.a2{background:linear-gradient(160deg,#c9d2c8,#8a9a88)}
.a3{background:radial-gradient(circle at 70% 60%,#ff5a3c,#b3171d 55%,#4a0a0c)}
.a4{background:linear-gradient(180deg,#8fb8e3 0 45%,#f5c64c 45% 60%,#2b2f38 60%)}
.a5{background:radial-gradient(circle at 50% 40%,#dbe8f0,#8aa6b8 60%,#344553)}
.a6{background:linear-gradient(135deg,#1f292d,#3b4d52 50%,#c3ff76)}

/* ---------- about bento ---------- */
.bento{display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:auto auto;gap:24px}
.bx{padding:24px;transition:transform .35s cubic-bezier(.2,.8,.2,1),box-shadow .35s}
.bx:hover{transform:translateY(-6px);box-shadow:0 26px 50px -20px rgba(31,41,45,.25)}
.bx-lime{grid-row:span 2;background:var(--lime);position:relative;overflow:hidden;display:flex;flex-direction:column}
.bx-lime:after{content:"";position:absolute;right:-90px;top:40%;width:260px;height:260px;border-radius:50%;background:rgba(255,255,255,.28)}
.bx-lime>*{position:relative;z-index:1}
.stars{letter-spacing:3px;font-size:18px}
.bx-lime p{margin:14px 0 auto;font-size:19px;line-height:1.5}
.bx-lime b{display:block;margin-top:40px;font-family:"Space Grotesk",sans-serif;font-size:46px;letter-spacing:-.04em}
.bx-lime small{display:block;color:#4b5a3a;font-size:15px}
.who{display:flex;align-items:center;gap:14px;margin-top:26px;padding-top:22px;border-top:1px solid rgba(31,41,45,.14)}
.av{width:50px;height:50px;border-radius:50%;display:grid;place-items:center;font-weight:700;font-size:16px;color:#fff;flex:none}
.who strong{display:block;font-size:17px}
.who span{font-size:14px;color:#4b5a3a}
.bx-img{padding:0;min-height:170px;background:radial-gradient(circle at 78% 30%,#f0a53a 0 7%,transparent 7.5%),linear-gradient(180deg,#bfc6c0 0 55%,#e9d9bd 55%)}
.bx-dark{background:var(--dark);color:#fff}
.bx-dark b{display:block;font-family:"Space Grotesk",sans-serif;font-size:46px;letter-spacing:-.04em}
.bx-dark span{color:rgba(255,255,255,.66);font-size:15px}
.faces{display:flex;margin-top:18px}
.faces i{width:40px;height:40px;border-radius:50%;border:2px solid var(--dark);margin-left:-8px}
.faces i:first-child{margin-left:0}
.bx-line{grid-row:span 2;border:1px solid var(--line);display:flex;flex-direction:column}
.bx-line b{font-family:"Space Grotesk",sans-serif;font-size:46px;letter-spacing:-.04em}
.bx-line span{color:var(--mut);font-size:15px}
.bx-line .logo{color:var(--dark);font-size:40px;margin:auto 0 12px}
.bx-line .logo i{color:var(--dark)}
.bx-line p{font-size:17px;line-height:1.6;color:#3d484c}

/* ---------- testimonials ---------- */
.tm{background:var(--light)}
.tm-grid{display:grid;grid-template-columns:1fr 1.6fr 1fr;gap:24px;margin-top:54px}
.tc{position:relative;padding:26px;display:flex;flex-direction:column;min-height:330px;transition:transform .35s cubic-bezier(.2,.8,.2,1)}
.tc:hover{transform:translateY(-6px)}
.tc h3{font-size:26px;line-height:1.22;letter-spacing:-.025em}
.tc .rate{margin-top:14px;font-size:15px;letter-spacing:2px}
.tc .who{margin-top:auto;border-top:0;padding-top:0}
.tc .who span{color:inherit;opacity:.65}
.tc.l{background:var(--lime)}
.tc.d{background:var(--dark);color:#fff}
.tc.w{background:#fff}
.qm{position:absolute;right:26px;bottom:26px;font-family:Georgia,serif;font-size:90px;line-height:.6;color:rgba(255,255,255,.22)}

/* ---------- pricing ---------- */
.pr-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:54px}
.pc{padding:36px;background:#fff;border:1px solid var(--line);display:flex;flex-direction:column;transition:transform .35s cubic-bezier(.2,.8,.2,1),box-shadow .35s}
.pc:hover{transform:translateY(-6px);box-shadow:0 30px 60px -24px rgba(31,41,45,.22)}
.pc-h{display:flex;align-items:center;gap:12px;font-size:18px}
.hot{display:inline-flex;align-items:center;gap:6px;padding:7px 14px;border-radius:999px;background:var(--dark);color:#fff;font-size:14px}
.price{display:flex;align-items:baseline;flex-wrap:wrap;gap:8px;margin:16px 0 14px;font-family:"Space Grotesk",sans-serif;font-size:clamp(26px,3vw,36px);font-weight:600;letter-spacing:-.03em}
.price s{color:#9aa3a6;margin-right:8px;font-size:.62em}
.price small{font-family:Inter,sans-serif;font-size:15px;font-weight:400;color:var(--mut);letter-spacing:0}
.pc>p{font-size:15.5px;line-height:1.6;color:var(--mut);padding-bottom:28px;border-bottom:1px solid var(--line)}
.inc{margin:26px 0 12px;font-size:15px}
.pc ul{list-style:none;margin:0 0 30px;padding:0}
.pc li{display:flex;align-items:center;gap:14px;margin-bottom:14px;font-size:15.5px}
.pc li:before{content:"✓";width:28px;height:28px;border-radius:50%;background:var(--lime);display:grid;place-items:center;font-size:13px;flex:none}
.pc .pill{margin-top:auto;justify-content:space-between}

/* ---------- faq ---------- */
.faq{border-top:1px solid var(--line)}
.q{border-bottom:1px solid var(--line)}
.q button{width:100%;display:flex;justify-content:space-between;align-items:center;gap:20px;padding:28px 0;background:none;text-align:left;font-family:"Space Grotesk",sans-serif;font-size:clamp(19px,2vw,25px);font-weight:600;letter-spacing:-.02em;color:var(--dark)}
.q button i{width:36px;height:36px;border-radius:50%;background:var(--light);display:grid;place-items:center;flex:none;font-style:normal;font-size:22px;transition:transform .35s cubic-bezier(.2,.8,.2,1),background .3s}
.q button:hover i{background:var(--lime)}
.q.open button i{transform:rotate(45deg);background:var(--lime)}
.q .a{height:0;overflow:hidden;transition:height .4s cubic-bezier(.2,.8,.2,1)}
.q .a p{padding-bottom:26px;font-size:16px;line-height:1.7;color:var(--mut)}

/* ---------- contact ---------- */
.form{display:grid;grid-template-columns:1fr 1fr;gap:34px 30px}
.form label{display:block;font-size:15px;color:var(--mut)}
.form input,.form textarea{width:100%;margin-top:8px;padding:10px 0;border:0;border-bottom:1px solid #9aa3a6;background:transparent;font-size:17px;color:var(--dark);outline:0;transition:border-color .3s}
.form input:focus,.form textarea:focus{border-color:var(--dark)}
.form .full{grid-column:1/-1}
.form textarea{min-height:80px;resize:vertical}
.submit{width:100%;justify-content:center;padding:6px}
.submit .disc{position:absolute;right:6px}
.submit span{padding:10px 0}

/* ---------- footer ---------- */
.ft{background:var(--dark);color:#fff;padding:120px 28px 40px}
.ft-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1.2fr;gap:30px;align-items:end}
.ft h2{font-size:clamp(34px,4.4vw,56px);line-height:1.05}
.ft-col a{display:block;margin-bottom:12px;font-size:17px;cursor:pointer;opacity:.9;transition:color .3s,transform .3s}
.ft-col a:hover{color:var(--lime);transform:translateX(4px)}
.ft-copy{font-size:15px;color:rgba(255,255,255,.6);text-align:right}
.ft-copy a{display:block;margin-top:10px;color:#fff;cursor:pointer;transition:color .3s}
.ft-copy a:hover{color:var(--lime)}

/* back to top */
.top{position:fixed;right:22px;bottom:22px;z-index:60;width:52px;height:52px;border-radius:50%;background:var(--lime);display:grid;place-items:center;box-shadow:0 12px 26px rgba(31,41,45,.2);opacity:0;visibility:hidden;transform:translateY(12px);transition:opacity .35s,transform .35s,visibility .35s}
.top.on{opacity:1;visibility:visible;transform:none}
.top:hover{transform:translateY(-3px)}
.top svg{width:20px;height:20px}

/* ---------- responsive ---------- */
@media(max-width:980px){
  .split{grid-template-columns:1fr}
  .bento{grid-template-columns:1fr 1fr}
  .bx-lime,.bx-line{grid-row:auto}
  .tm-grid,.pr-grid{grid-template-columns:1fr}
  .ft-grid{grid-template-columns:1fr 1fr}
  .ft-copy{text-align:left}
}
@media(max-width:620px){
  .wrap,.sec{padding-left:18px;padding-right:18px}
  .sec{padding-top:64px;padding-bottom:64px}
  .nav,.nav.on{padding-left:18px;padding-right:18px}
  .logo{font-size:30px}
  .hero{padding:0 18px 34px}
  .stats,.bento,.form{grid-template-columns:1fr}
  .menu{left:14px;right:14px;width:auto}
  .proj{width:250px}
  .ft{padding:80px 18px 34px}
  .ft-grid{grid-template-columns:1fr}
}
@media(prefers-reduced-motion:reduce){
  .rv{opacity:1!important;transform:none!important}
  .pf-track,.star{animation:none}
}
</style></head>
<body data-cf-keep-dark>

<nav class="nav" id="nav">
  <div class="logo">Studiova<i>.</i></div>
  <button class="burger" id="burger" aria-label="Open menu"><span></span></button>
</nav>

<div class="menu" id="menu">
  <div class="menu-h">Menu<button class="menu-x" id="menuX" aria-label="Close menu">&times;</button></div>
  <a class="cur">Home</a><a>About</a><a>Projects</a><a>Blog</a><a>Services</a><a>Contact</a><a>Docs</a>
  <div class="menu-auth"><button class="in">Sign In</button><button class="up">Sign Up</button></div>
  <small>+1-212-456-7890</small>
  <b>hello@studiova.studio</b>
</div>

<header class="hero">
  <div class="hero-art"></div>
  <div class="tagline rv">
    <svg class="star" viewBox="0 0 40 40" fill="currentColor"><path d="M17 0h6l-1 15 13-8 3 5-13 7 13 7-3 5-13-8 1 15h-6l1-15-13 8-3-5 13-7-13-7 3-5 13 8z"/></svg>
    <p>We create <em>high-performing</em> digital designs that elevate brands and enhance conversions.</p>
  </div>
  <div class="hero-word rv">
    <h1>Studiova</h1>
    <a class="pill bare"><span class="disc"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M7 17 17 7M8 7h9v9"/></svg></span></a>
  </div>
</header>

<section class="sec stats-sec">
  <svg class="bg-star" viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width=".25"><path d="M17 0h6l-1 15 13-8 3 5-13 7 13 7-3 5-13-8 1 15h-6l1-15-13 8-3-5 13-7-13-7 3-5 13 8z"/></svg>
  <div class="split">
    <div class="lab rv"><u>01</u><i></i><b>Stats &amp; facts</b></div>
    <div>
      <h2 class="rv">High quality web design solutions you can trust.</h2>
      <p class="lead rv">When selecting a web design agency, it's essential to consider its reputation, experience, and the specific needs of your project.</p>
      <div class="stats">
        <div class="stat rv"><b data-count="40" data-suf="K+">0</b><span>People who have launched their websites</span></div>
        <div class="stat rv"><b data-count="238" data-suf="+">0</b><span>Experienced professionals ready to assist</span></div>
        <div class="stat rv"><b data-count="95" data-suf="%">0</b><span>Customer satisfaction across every engagement</span></div>
      </div>
      <a class="pill rv">Who we are<span class="disc"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M7 17 17 7M8 7h9v9"/></svg></span></a>
    </div>
  </div>
</section>

<section class="sec pf">
  <div class="split">
    <div class="lab rv"><u>02</u><i></i><b>Portfolio</b></div>
    <div>
      <h2 class="rv">Featured projects</h2>
      <p class="lead rv">A glimpse into our creativity — exploring innovative designs, successful collaborations, and transformative digital experiences.</p>
    </div>
  </div>
  <div class="pf-row">
    <div class="pf-track" id="pf">
      <div class="proj"><div class="proj-img"><div class="a1"></div></div><h3>Amber Bottle</h3><div class="chips"><span>Photography</span><span>Studio</span></div></div>
      <div class="proj"><div class="proj-img"><div class="a3"></div></div><h3>Digital Magazine</h3><div class="chips"><span>Digital design</span><span>Web development</span></div></div>
      <div class="proj"><div class="proj-img"><div class="a4"></div></div><h3>Snapclear</h3><div class="chips"><span>UX Strategy</span><span>UI Design</span></div></div>
      <div class="proj"><div class="proj-img"><div class="a5"></div></div><h3>Glass Lab</h3><div class="chips"><span>3D</span><span>Branding</span></div></div>
      <div class="proj"><div class="proj-img"><div class="a2"></div></div><h3>Canvas CMS</h3><div class="chips"><span>Digital design</span></div></div>
      <div class="proj"><div class="proj-img"><div class="a6"></div></div><h3>Northwind</h3><div class="chips"><span>Web development</span><span>SEO</span></div></div>
    </div>
  </div>
</section>

<section class="sec">
  <div class="split">
    <div>
      <div class="lab rv"><u>04</u><i></i><b>About us</b></div>
      <h2 class="rv" style="margin-top:40px">Why choose us</h2>
    </div>
    <div class="bento">
      <div class="bx bx-lime rv">
        <div class="stars">&#9733;&#9733;&#9733;&#9733;&#9734;</div>
        <p>The team exceeded our expectations with a stunning brand identity.</p>
        <b>98.6%</b><small>Customer satisfaction</small>
        <div class="who"><span class="av" style="background:#3f5b4a">WW</span><div><strong>Wade Warren</strong><span>Brightline Bank</span></div></div>
      </div>
      <div class="bx bx-img rv"></div>
      <div class="bx bx-line rv">
        <b>238+</b><span>Brands served worldwide</span>
        <div class="logo">Studiova<i>.</i></div>
        <p>Our global reach allows us to create unique, culturally relevant designs for businesses across different industries.</p>
      </div>
      <div class="bx bx-dark rv">
        <b>500+</b><span>Successful projects completed</span>
        <div class="faces"><i style="background:#f4c05c"></i><i style="background:#e98b73"></i><i style="background:#5c7c8a"></i><i style="background:#c9b6e4"></i></div>
      </div>
    </div>
  </div>
</section>

<section class="sec tm">
  <div class="split">
    <div class="lab rv"><u>05</u><i></i><b>Testimonials</b></div>
    <h2 class="rv">What our clients say</h2>
  </div>
  <div class="tm-grid">
    <div class="tc l rv">
      <h3>Our website redesign was flawless. They understood our vision perfectly!</h3>
      <div class="who"><span class="av" style="background:#2f4f5d">AF</span><div><strong>Albert Flores</strong><span>Meridian Pay</span></div></div>
    </div>
    <div class="tc d rv">
      <h3>From concept to execution, they delivered outstanding results. Highly recommend their expertise!</h3>
      <div class="rate">&#9733;&#9733;&#9733;&#9733;&#9734; 4.0</div>
      <div class="who"><span class="av" style="background:#6f7f86">RF</span><div><strong>Robert Fox</strong><span>Kirin Motors</span></div></div>
      <span class="qm">&rdquo;</span>
    </div>
    <div class="tc w rv">
      <h3>Super smooth process with incredible results. highly recommend!</h3>
      <div class="who"><span class="av" style="background:#8a5a44">JW</span><div><strong>Jenny Wilson</strong><span>Slice House</span></div></div>
    </div>
  </div>
</section>

<section class="sec">
  <div class="split">
    <div class="lab rv"><u>06</u><i></i><b>Pricing</b></div>
    <h2 class="rv">Simple plans, serious results</h2>
  </div>
  <div class="pr-grid">
    <div class="pc rv">
      <div class="pc-h">Launch</div>
      <div class="price">$699 <small>/month</small></div>
      <p>Ideal for startups and small businesses taking their first steps online.</p>
      <div class="inc">What's Included:</div>
      <ul><li>Competitive research &amp; insights</li><li>Wireframing and prototyping</li><li>Basic tracking setup</li><li>Standard contact form integration</li></ul>
      <a class="pill">Get started<span class="disc"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M7 17 17 7M8 7h9v9"/></svg></span></a>
    </div>
    <div class="pc rv">
      <div class="pc-h">Scale <span class="hot">&#128293; Most popular</span></div>
      <div class="price"><s>$2,199</s>$1,699 <small>/month</small></div>
      <p>Perfect for growing brands needing more customization and flexibility.</p>
      <div class="inc">What's Included:</div>
      <ul><li>Everything in the Launch Plan</li><li>Custom design for up to 10 pages</li><li>Seamless social media integration</li><li>SEO enhancements for key pages</li></ul>
      <a class="pill">Get started<span class="disc"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M7 17 17 7M8 7h9v9"/></svg></span></a>
    </div>
    <div class="pc rv">
      <div class="pc-h">Elevate</div>
      <div class="price">$3,499 <small>/month</small></div>
      <p>Best suited for established businesses wanting a fully tailored experience.</p>
      <div class="inc">What's Included:</div>
      <ul><li>Everything in the Scale Plan</li><li>E-commerce functionality</li><li>Branded email template design</li><li>Priority support for six months</li></ul>
      <a class="pill">Get started<span class="disc"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M7 17 17 7M8 7h9v9"/></svg></span></a>
    </div>
  </div>
</section>

<section class="sec" style="background:var(--light)">
  <div class="split">
    <div class="lab rv"><u>07</u><i></i><b>FAQs</b></div>
    <div>
      <h2 class="rv" style="margin-bottom:34px">Got questions?</h2>
      <div class="faq">
        <div class="q open"><button>Do you provide ongoing support after launch?<i>+</i></button><div class="a"><p>Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.</p></div></div>
        <div class="q"><button>How long does a typical project take?<i>+</i></button><div class="a"><p>Most marketing sites ship in four to eight weeks. Larger builds with custom functionality are scoped in phases so you see working pages early.</p></div></div>
        <div class="q"><button>Do you offer custom designs, or do you use templates?<i>+</i></button><div class="a"><p>Every project starts from a custom design system built around your brand, not a template.</p></div></div>
        <div class="q"><button>What's the cost of a project?<i>+</i></button><div class="a"><p>Our plans start at $699 a month; fixed-price quotes are available once we understand the scope.</p></div></div>
      </div>
    </div>
  </div>
</section>

<section class="sec">
  <div class="split">
    <div>
      <div class="lab rv"><u>08</u><i></i><b>Contact</b></div>
      <h2 class="rv" style="margin-top:40px">Let's talk</h2>
    </div>
    <form class="form rv" onsubmit="return false">
      <label>Name<input placeholder="Your name"></label>
      <label>Email<input placeholder="you@company.com"></label>
      <label class="full">Tell us about your project<textarea></textarea></label>
      <button class="pill submit full" type="submit"><span>Submit message</span><span class="disc"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M7 17 17 7M8 7h9v9"/></svg></span></button>
    </form>
  </div>
</section>

<footer class="ft">
  <div class="ft-grid">
    <h2 class="rv">Build something together?</h2>
    <div class="ft-col"><a>Home</a><a>About</a><a>Services</a><a>Work</a></div>
    <div class="ft-col"><a>Facebook</a><a>Instagram</a><a>Twitter</a><a>LinkedIn</a></div>
    <div class="ft-copy">&copy; Studiova copyright 2026<a>Privacy Policy</a><a>Terms of Service</a></div>
  </div>
</footer>

<button class="top" id="top" aria-label="Back to top"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M12 19V5M5 12l7-7 7 7"/></svg></button>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script>
(function(){
  var nav = document.getElementById("nav");
  var topBtn = document.getElementById("top");
  var hero = document.querySelector(".hero");
  function onScroll(){
    var past = window.scrollY > hero.offsetHeight - 80;
    nav.classList.toggle("on", past);
    topBtn.classList.toggle("on", window.scrollY > 600);
  }
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  topBtn.addEventListener("click", function(){ window.scrollTo({ top: 0, behavior: "smooth" }); });

  var menu = document.getElementById("menu");
  document.getElementById("burger").addEventListener("click", function(){ menu.classList.toggle("open"); });
  document.getElementById("menuX").addEventListener("click", function(){ menu.classList.remove("open"); });

  // FAQ: heights are measured so the open/close eases instead of snapping.
  document.querySelectorAll(".q").forEach(function(q){
    var a = q.querySelector(".a");
    if (q.classList.contains("open")) a.style.height = a.scrollHeight + "px";
    q.querySelector("button").addEventListener("click", function(){
      var open = q.classList.toggle("open");
      a.style.height = open ? a.scrollHeight + "px" : "0px";
    });
  });

  var track = document.getElementById("pf");
  track.innerHTML += track.innerHTML;

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function countUp(el){
    var target = +el.getAttribute("data-count"), suf = el.getAttribute("data-suf") || "";
    if (reduced) { el.textContent = target + suf; return; }
    var start = null;
    function step(t){
      if (!start) start = t;
      var p = Math.min((t - start) / 1300, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suf;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  if (!window.gsap || !window.ScrollTrigger || reduced) {
    document.querySelectorAll(".rv").forEach(function(el){ el.style.opacity = 1; el.style.transform = "none"; });
    document.querySelectorAll("[data-count]").forEach(countUp);
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".hero .rv", { opacity: 1, y: 0, duration: 1, stagger: .15, ease: "power3.out", delay: .1 });
  gsap.from(".hero-word h1", { yPercent: 40, duration: 1.2, ease: "power4.out", delay: .1 });

  document.querySelectorAll("section .rv, footer .rv").forEach(function(el){
    gsap.to(el, { opacity: 1, y: 0, duration: .8, ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 88%", once: true } });
  });

  document.querySelectorAll("[data-count]").forEach(function(el){
    ScrollTrigger.create({ trigger: el, start: "top 90%", once: true, onEnter: function(){ countUp(el); } });
  });

  // The hero art drifts down as it leaves, so the wordmark appears to rise off it.
  gsap.to(".hero-art", { yPercent: 18, scale: 1.06, ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
  gsap.to(".bg-star", { rotation: 40, ease: "none",
    scrollTrigger: { trigger: ".stats-sec", start: "top bottom", end: "bottom top", scrub: true } });

  window.addEventListener("load", function(){ ScrollTrigger.refresh(); });
})();
</script>
</body></html>`,
};
