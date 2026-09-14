export const productSources = {

  "magnetic-cta-button": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Magnetic CTA Button</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.stage{display:grid;gap:22px;place-items:center;padding:60px}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.magnetic{padding:18px 34px;border:1px solid var(--line);border-radius:999px;font-size:12px;font-weight:700;color:#eee9f8;cursor:pointer;background:#111017;transition:transform .15s ease-out,background .25s}
.magnetic:hover{background:#17131f;border-color:#544c67}
</style></head>
<body><div class="stage"><span class="kicker">MOVE YOUR CURSOR NEAR IT</span><button class="magnetic" id="btn">Join the waitlist</button></div>
<script>
const btn=document.getElementById("btn");
document.addEventListener("pointermove",e=>{const r=btn.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,dx=e.clientX-cx,dy=e.clientY-cy,dist=Math.hypot(dx,dy);if(dist<140){btn.style.transform=\`translate(\${dx*.25}px, \${dy*.25}px)\`}else{btn.style.transform="translate(0,0)"}});
</script>
</body></html>`,

  "reveal-on-scroll": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Reveal On Scroll</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.stack{display:grid;gap:14px;padding:40px 30px}
.reveal-card{opacity:0;transform:translateY(24px);transition:opacity .6s ease,transform .6s ease;padding:22px;border:1px solid var(--line);border-radius:14px;background:#0d0d12}
.reveal-card.visible{opacity:1;transform:none}
.reveal-card h3{margin:0 0 6px;font:700 16px "Space Grotesk",sans-serif}
.reveal-card p{margin:0;color:#847e8f;font-size:10px}
</style></head>
<body><div class="stack"><span class="kicker">SCROLL DOWN INSIDE THIS PREVIEW</span>
<div class="reveal-card"><h3>Step one</h3><p>Cards fade and slide in as they enter the viewport.</p></div>
<div class="reveal-card"><h3>Step two</h3><p>Powered by IntersectionObserver, no scroll-jank.</p></div>
<div class="reveal-card"><h3>Step three</h3><p>Drop it into any section that needs a reveal.</p></div>
<div class="reveal-card"><h3>Step four</h3><p>Respects prefers-reduced-motion automatically.</p></div>
</div>
<script>
const cards=document.querySelectorAll(".reveal-card");
const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add("visible")}),{threshold:.2});
cards.forEach(c=>io.observe(c));
</script>
</body></html>`,

  "parallax-scroll-panels": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Parallax Scroll Panels</title><style>
:root{--bg:#050507;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif;overflow-x:hidden}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700;padding:16px 24px 0;display:block}
.px-wrap{height:340px;position:relative;overflow:hidden;border-radius:16px;margin:16px}
.px-layer{position:absolute;inset:0;display:grid;place-items:center;will-change:transform}
.px-back{background:radial-gradient(circle at 50% 40%,rgba(155,138,255,.22),transparent 55%),#0a0a0f}
.px-mid span{font:700 clamp(40px,9vw,90px) "Space Grotesk",sans-serif;color:#1c1a24}
.px-front{color:#eee9f8;text-align:center}
.px-front h2{margin:0 0 6px;font:700 20px "Space Grotesk",sans-serif}
.px-front p{margin:0;color:#a49dae;font-size:10px}
</style></head>
<body><span class="kicker">SCROLL THE PREVIEW</span>
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
:root{--bg:#050507;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.stage{display:flex;gap:46px;align-items:center;padding:40px}
.kicker{display:block;margin-bottom:16px;color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.loader{position:relative;width:56px;height:56px}
.loader.ring{border:3px solid #23222c;border-top-color:var(--lav);border-radius:50%;animation:spin .9s linear infinite}
.loader.dots{display:flex;gap:6px;align-items:center;width:auto;height:auto}
.loader.dots i{width:10px;height:10px;border-radius:50%;background:var(--lav);animation:bounce 1s ease-in-out infinite}
.loader.dots i:nth-child(2){animation-delay:.15s}
.loader.dots i:nth-child(3){animation-delay:.3s}
.loader.orbit{border:1px solid #2c2a35;border-radius:50%}
.loader.orbit i{position:absolute;width:8px;height:8px;border-radius:50%;background:var(--lav);top:-4px;left:50%;margin-left:-4px;box-shadow:0 0 12px var(--lav);animation:orbit 1.2s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes bounce{0%,80%,100%{transform:translateY(0);opacity:.5}40%{transform:translateY(-9px);opacity:1}}
@keyframes orbit{from{transform:rotate(0)}to{transform:rotate(360deg)}}
</style></head>
<body><span class="kicker">THREE LOADER STYLES</span><div class="stage"><div class="loader ring"></div><div class="loader dots"><i></i><i></i><i></i></div><div class="loader orbit"><i></i></div></div>
</body></html>`,

  "cursor-trail-effect": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Custom Cursor Trail</title><style>
:root{--bg:#050507;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;cursor:none;overflow:hidden}
.kicker{display:block;margin-bottom:16px;color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.msg{color:#847e8f;font-size:11px}
.dot{position:fixed;top:0;left:0;width:8px;height:8px;border-radius:50%;background:#c4b5fd;pointer-events:none;transform:translate(-50%,-50%)}
.ring{position:fixed;top:0;left:0;width:34px;height:34px;border:1px solid #695f83;border-radius:50%;pointer-events:none;transform:translate(-50%,-50%);transition:transform .08s linear}
</style></head>
<body><span class="kicker">MOVE YOUR CURSOR</span><p class="msg">A trailing dot follows the pointer with easing.</p>
<div class="dot" id="dot"></div><div class="ring" id="ring"></div>
<script>
const dot=document.getElementById("dot"),ring=document.getElementById("ring");
let rx=0,ry=0;
document.addEventListener("pointermove",e=>{dot.style.left=e.clientX+"px";dot.style.top=e.clientY+"px";rx=e.clientX;ry=e.clientY});
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
<body><span class="kicker">SCROLL TO STACK</span>
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
.tile{flex:0 0 220px;height:260px;border-radius:16px;scroll-snap-align:start;display:flex;align-items:end;padding:16px;border:1px solid var(--line);font:700 14px "Space Grotesk",sans-serif}
.tile:nth-child(1){background:radial-gradient(circle at 30% 20%,rgba(155,138,255,.3),transparent 60%),#121018}
.tile:nth-child(2){background:radial-gradient(circle at 70% 30%,rgba(120,170,255,.28),transparent 60%),#101219}
.tile:nth-child(3){background:radial-gradient(circle at 50% 70%,rgba(200,150,255,.25),transparent 60%),#141018}
.tile:nth-child(4){background:radial-gradient(circle at 40% 40%,rgba(155,220,200,.22),transparent 60%),#0f1614}
.tile:nth-child(5){background:radial-gradient(circle at 60% 60%,rgba(255,180,150,.22),transparent 60%),#181210}
</style></head>
<body><span class="kicker">DRAG OR SCROLL SIDEWAYS</span>
<div class="track">
<div class="tile">Frame 01</div><div class="tile">Frame 02</div><div class="tile">Frame 03</div><div class="tile">Frame 04</div><div class="tile">Frame 05</div>
</div>
</body></html>`,

  "text-scramble-reveal": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Text Scramble Reveal</title><style>
:root{--bg:#050507;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.kicker{display:block;margin-bottom:16px;color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
h1{font:700 clamp(28px,5vw,48px) "Space Grotesk",sans-serif;color:#eee9f8;letter-spacing:-.03em}
button{margin-top:20px;border:1px solid #363243;border-radius:9px;padding:10px 16px;background:#121019;color:#d8d2df;font-size:10px;cursor:pointer}
</style></head>
<body><span class="kicker">CLICK TO SCRAMBLE</span>
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
#bar{position:sticky;top:0;height:4px;width:0%;background:linear-gradient(90deg,#9b8aff,#c4b5fd);z-index:5}
.content{padding:10px 24px 40px;display:grid;gap:14px}
.content p{color:#847e8f;font-size:11px;line-height:1.8;max-width:520px;margin:0}
.block{height:220px;border-radius:14px;border:1px solid #272632;background:#0d0d12}
</style></head>
<body><div id="bar"></div><span class="kicker">SCROLL DOWN</span>
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
.carousel{width:min(560px,90%);height:280px;position:relative;border-radius:18px;overflow:hidden;border:1px solid var(--line)}
.slide{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font:700 22px "Space Grotesk",sans-serif;opacity:0;transition:opacity .5s ease;color:#eee9f8}
.slide.active{opacity:1}
.slide:nth-child(1){background:radial-gradient(circle at 40% 30%,rgba(155,138,255,.28),transparent 55%),#111018}
.slide:nth-child(2){background:radial-gradient(circle at 60% 60%,rgba(120,170,255,.25),transparent 55%),#101219}
.slide:nth-child(3){background:radial-gradient(circle at 50% 50%,rgba(220,150,255,.25),transparent 55%),#141018}
.dots{position:absolute;bottom:14px;left:0;right:0;display:flex;justify-content:center;gap:6px}
.dots i{width:7px;height:7px;border-radius:50%;background:#34303e}
.dots i.active{background:var(--lav)}
</style></head>
<body><span class="kicker">AUTO-ADVANCING EVERY 2.5S</span>
<div class="carousel" id="car">
<div class="slide active">Slide one</div><div class="slide">Slide two</div><div class="slide">Slide three</div>
<div class="dots"><i class="active"></i><i></i><i></i></div>
</div>
<script>
const slides=document.querySelectorAll(".slide"),dots=document.querySelectorAll(".dots i");let i=0;
setInterval(()=>{slides[i].classList.remove("active");dots[i].classList.remove("active");i=(i+1)%slides.length;slides[i].classList.add("active");dots[i].classList.add("active")},2500);
</script>
</body></html>`,

  "counter-on-scroll": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Counter On Scroll</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif}
.kicker{display:block;color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700;padding:20px 24px}
.spacer{height:200px}
.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;padding:0 24px 40px}
.stats div{padding:20px;border:1px solid var(--line);border-radius:14px;background:#0d0d12;text-align:center}
.stats strong{display:block;font:700 34px "Space Grotesk",sans-serif;color:var(--lav)}
.stats small{color:#77737f;font-size:8px}
</style></head>
<body><span class="kicker">SCROLL DOWN TO TRIGGER</span><div class="spacer"></div>
<div class="stats"><div><strong data-to="240">0</strong><small>PROJECTS SHIPPED</small></div><div><strong data-to="98">0</strong><small>SATISFACTION %</small></div><div><strong data-to="12">0</strong><small>YEARS ACTIVE</small></div></div>
<script>
const nums=document.querySelectorAll(".stats strong");
const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting)return;const el=entry.target,to=parseInt(el.dataset.to,10);let cur=0;const step=Math.max(1,Math.round(to/40));const timer=setInterval(()=>{cur=Math.min(to,cur+step);el.textContent=cur;if(cur>=to)clearInterval(timer)},25);io.unobserve(el)}),{threshold:.6});
nums.forEach(n=>io.observe(n));
</script>
</body></html>`,

  "sticky-shrink-navbar": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Sticky Shrink Navbar</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif}
nav{position:sticky;top:0;z-index:5;display:flex;align-items:center;justify-content:space-between;padding:22px 24px;background:#0a0a0f;border-bottom:1px solid transparent;transition:padding .25s ease,background .25s ease,border-color .25s ease}
nav.shrink{padding:12px 24px;background:#08080dee;backdrop-filter:blur(10px);border-color:var(--line)}
nav b{font:700 14px "Space Grotesk",sans-serif}
nav span{color:#77737f;font-size:9px}
.content{padding:20px 24px 400px;color:#847e8f;font-size:11px;line-height:1.9;max-width:500px}
</style></head>
<body>
<nav id="nav"><b>STUDIO.</b><span>Scroll down to shrink the bar</span></nav>
<div class="content"><p>This navbar reduces its padding and gains a background once you scroll past it — a common pattern for marketing sites.</p></div>
<script>
const nav=document.getElementById("nav");
document.addEventListener("scroll",()=>{nav.classList.toggle("shrink",window.scrollY>40)},{passive:true});
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
.item:before{content:"";position:absolute;left:-24px;top:4px;width:9px;height:9px;border-radius:50%;background:var(--lav);box-shadow:0 0 12px var(--lav)}
.item h3{margin:0 0 4px;font:700 14px "Space Grotesk",sans-serif}
.item p{margin:0;color:#847e8f;font-size:10px}
</style></head>
<body><span class="kicker">SCROLL TO REVEAL</span>
<div class="timeline">
<div class="item"><h3>2023 — Founded</h3><p>Started as a small internal tool.</p></div>
<div class="item"><h3>2024 — Public launch</h3><p>Opened up to the first cohort of builders.</p></div>
<div class="item"><h3>2025 — Scale</h3><p>Crossed ten thousand active workspaces.</p></div>
<div class="item"><h3>2026 — Today</h3><p>Continuing to refine the core experience.</p></div>
</div>
<script>
const items=document.querySelectorAll(".item");
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.3});
items.forEach(i=>io.observe(i));
</script>
</body></html>`,

  "ripple-click-button": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Ripple Click Button</title><style>
:root{--bg:#050507;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.kicker{display:block;margin-bottom:16px;color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.ripple-btn{position:relative;overflow:hidden;padding:16px 32px;border:0;border-radius:12px;font-size:12px;font-weight:800;color:#fff;cursor:pointer;background:#3b3255}
.ripple{position:absolute;border-radius:50%;background:rgba(255,255,255,.45);transform:scale(0);animation:ripple .6s ease-out;pointer-events:none}
@keyframes ripple{to{transform:scale(3);opacity:0}}
</style></head>
<body><span class="kicker">CLICK ANYWHERE ON THE BUTTON</span><button class="ripple-btn" id="btn">Click me</button>
<script>
document.getElementById("btn").addEventListener("click",function(e){const r=this.getBoundingClientRect();const d=Math.max(r.width,r.height);const span=document.createElement("span");span.className="ripple";span.style.width=span.style.height=d+"px";span.style.left=(e.clientX-r.left-d/2)+"px";span.style.top=(e.clientY-r.top-d/2)+"px";this.appendChild(span);setTimeout(()=>span.remove(),600)});
</script>
</body></html>`,

  "flip-card-3d": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>3D Flip Card</title><style>
:root{--bg:#050507;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.kicker{display:block;margin-bottom:16px;color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.scene{width:260px;height:340px;perspective:1200px}
.card{position:relative;width:100%;height:100%;transition:transform .6s cubic-bezier(.2,.8,.2,1);transform-style:preserve-3d;cursor:pointer}
.scene:hover .card{transform:rotateY(180deg)}
.face{position:absolute;inset:0;backface-visibility:hidden;border-radius:20px;padding:24px;display:flex;flex-direction:column;justify-content:flex-end;border:1px solid #2e2a3a}
.front{background:radial-gradient(circle at 30% 20%,rgba(155,138,255,.25),transparent 55%),#111018}
.back{background:#161221;transform:rotateY(180deg);justify-content:center;text-align:center}
.face h3{margin:0 0 6px;font:700 20px "Space Grotesk",sans-serif}
.face p{margin:0;color:#847e8f;font-size:10px}
</style></head>
<body><span class="kicker">HOVER THE CARD</span>
<div class="scene"><div class="card"><div class="face front"><h3>Front side</h3><p>Hover to flip.</p></div><div class="face back"><h3>Back side</h3><p>A full 3D rotation, pure CSS.</p></div></div></div>
</body></html>`,

  "toggle-pricing-switch": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Toggle Pricing Switch</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif;display:grid;place-items:center;padding:30px}
.kicker{display:block;margin-bottom:16px;color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.switcher{display:flex;align-items:center;gap:10px;margin-bottom:24px;font-size:10px;color:#847e8f}
.track{width:44px;height:24px;border-radius:999px;background:#242130;position:relative;cursor:pointer;border:1px solid #363243}
.thumb{position:absolute;top:2px;left:2px;width:18px;height:18px;border-radius:50%;background:var(--lav);transition:transform .25s ease}
.track.on .thumb{transform:translateX(20px)}
.plans{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.plan{padding:20px;border:1px solid var(--line);border-radius:14px;background:#0d0d12;min-width:160px}
.plan strong{display:block;font:700 30px "Space Grotesk",sans-serif;margin:8px 0}
.plan small{color:#77737f;font-size:8px}
</style></head>
<body><span class="kicker">TOGGLE BILLING</span>
<div class="switcher">Monthly<div class="track" id="track"><div class="thumb"></div></div>Yearly (save 20%)</div>
<div class="plans"><div class="plan"><small>STARTER</small><strong id="p1">$12</strong><small>per month</small></div><div class="plan"><small>PRO</small><strong id="p2">$29</strong><small>per month</small></div></div>
<script>
const track=document.getElementById("track"),p1=document.getElementById("p1"),p2=document.getElementById("p2");
track.addEventListener("click",()=>{const on=track.classList.toggle("on");p1.textContent=on?"$115":"$12";p2.textContent=on?"$278":"$29"});
</script>
</body></html>`,

  "typewriter-hero": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Typewriter Hero</title><style>
:root{--bg:#050507;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif;text-align:center}
.kicker{display:block;margin-bottom:16px;color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
h1{font:700 clamp(30px,5.5vw,58px) "Space Grotesk",sans-serif;letter-spacing:-.04em}
h1 span{color:var(--lav)}
#cursor{display:inline-block;width:3px;background:var(--lav);margin-left:2px;animation:blink 1s step-end infinite}
@keyframes blink{50%{opacity:0}}
p{color:#847e8f;font-size:11px;margin-top:14px}
</style></head>
<body><div><span class="kicker">BUILD FOR</span><h1>We design for <span id="word">founders</span><i id="cursor">&nbsp;</i></h1><p>A rotating word hero for landing pages.</p></div>
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
.card{width:220px;padding:16px;border:1px solid var(--line);border-radius:13px;background:#0d0d12;font-size:9px;color:#a49dae}
.card b{display:block;margin-top:8px;color:#eee9f8;font-size:9px}
@keyframes scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
</style></head>
<body><span class="kicker">AUTO-SCROLLING</span>
<div class="marquee"><div class="track" id="track"></div></div>
<script>
const quotes=["Shipped in a day, not a sprint.","The polish is on another level.","Our best-performing landing page yet.","Support that actually replies.","Exactly what our team needed."];
const track=document.getElementById("track");
[...quotes,...quotes].forEach((q,i)=>{const d=document.createElement("div");d.className="card";d.innerHTML=q+"<b>— Builder "+(i%quotes.length+1)+"</b>";track.appendChild(d)});
</script>
</body></html>`,

  "mega-menu-navbar": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Mega Menu Navbar</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif}
nav{display:flex;align-items:center;justify-content:space-between;padding:18px 24px;border-bottom:1px solid var(--line)}
nav b{font:700 14px "Space Grotesk",sans-serif}
.item{position:relative}
.item>span{font-size:10px;color:#c1bccb;cursor:pointer;padding:8px 0}
.mega{position:absolute;top:100%;left:0;width:420px;display:none;grid-template-columns:1fr 1fr;gap:10px;padding:18px;border:1px solid var(--line);border-radius:14px;background:#0d0d12;box-shadow:0 30px 70px rgba(0,0,0,.4)}
.item:hover .mega{display:grid}
.mega a{display:block;color:#a49dae;font-size:9px;padding:6px 0}
.mega b{display:block;color:#eee9f8;font-size:10px;margin-bottom:4px}
.content{padding:50px 24px;color:#77737f;font-size:10px}
</style></head>
<body><nav><b>STUDIO.</b><div class="item"><span>Products ▾</span><div class="mega"><div><b>Design</b><a href="#">Templates</a><a href="#">Components</a></div><div><b>Engineering</b><a href="#">API</a><a href="#">CLI</a></div></div></div><span style="font-size:10px;color:#77737f">Pricing</span></nav>
<p class="content">Hover "Products ▾" to open the mega menu.</p>
</body></html>`,

  "multi-step-form": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Multi-Step Form</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif}
.wrap{width:min(380px,90%)}
.dots{display:flex;gap:6px;margin-bottom:18px}
.dots i{flex:1;height:4px;border-radius:2px;background:#242130}
.dots i.active{background:var(--lav)}
.step{display:none}
.step.active{display:block}
h3{margin:0 0 10px;font:700 18px "Space Grotesk",sans-serif}
input{width:100%;padding:11px;margin-bottom:10px;border:1px solid var(--line);border-radius:8px;background:#0e0e14;color:#fff}
.actions{display:flex;justify-content:space-between;margin-top:6px}
button{border:0;border-radius:9px;padding:10px 16px;font-size:10px;font-weight:700;cursor:pointer;background:#3b3255;color:#fff}
button.ghost{background:transparent;color:#847e8f}
</style></head>
<body><div class="wrap">
<div class="dots"><i class="active"></i><i></i><i></i></div>
<div class="step active" data-step="1"><h3>Your details</h3><input placeholder="Full name"><div class="actions"><span></span><button onclick="go(2)">Next</button></div></div>
<div class="step" data-step="2"><h3>Company</h3><input placeholder="Company name"><div class="actions"><button class="ghost" onclick="go(1)">Back</button><button onclick="go(3)">Next</button></div></div>
<div class="step" data-step="3"><h3>All set ✓</h3><p style="color:#847e8f;font-size:10px">Your account is ready to go.</p><div class="actions"><button class="ghost" onclick="go(2)">Back</button><span></span></div></div>
</div>
<script>
function go(n){document.querySelectorAll(".step").forEach(s=>s.classList.toggle("active",s.dataset.step==n));document.querySelectorAll(".dots i").forEach((d,i)=>d.classList.toggle("active",i<n))}
</script>
</body></html>`,

  "masonry-portfolio-grid": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Masonry Portfolio Grid</title><style>
:root{--bg:#050507}
*{box-sizing:border-box}body{margin:0;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.kicker{display:block;color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700;padding:18px 20px 0}
.masonry{columns:3 160px;column-gap:10px;padding:14px 20px 24px}
.tile{break-inside:avoid;margin-bottom:10px;border-radius:12px;position:relative;overflow:hidden;color:#fff}
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
<body><span class="kicker">MASONRY LAYOUT</span>
<div class="masonry">
<div class="tile"><span>Project Alpha</span></div><div class="tile"><span>Project Beta</span></div><div class="tile"><span>Project Gamma</span></div><div class="tile"><span>Project Delta</span></div><div class="tile"><span>Project Epsilon</span></div><div class="tile"><span>Project Zeta</span></div>
</div>
</body></html>`,

  "tabbed-features": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Tabbed Features</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif}
.wrap{width:min(520px,90%)}
.tabs{display:flex;gap:6px;margin-bottom:16px}
.tabs button{padding:9px 13px;border:1px solid var(--line);border-radius:999px;background:#0d0d12;color:#847e8f;font-size:9px;cursor:pointer}
.tabs button.active{color:#fff;border-color:#544c67;background:#181420}
.panel{display:none;padding:26px;border:1px solid var(--line);border-radius:16px;background:#0d0d12;min-height:150px}
.panel.active{display:block}
.panel h3{margin:0 0 8px;font:700 18px "Space Grotesk",sans-serif}
.panel p{margin:0;color:#847e8f;font-size:10px;line-height:1.7}
</style></head>
<body><div class="wrap">
<div class="tabs"><button class="active" data-tab="1">Speed</button><button data-tab="2">Security</button><button data-tab="3">Scale</button></div>
<div class="panel active" data-panel="1"><h3>Built for speed</h3><p>Every interaction responds in under 100ms.</p></div>
<div class="panel" data-panel="2"><h3>Secure by default</h3><p>Encrypted at rest and in transit, always.</p></div>
<div class="panel" data-panel="3"><h3>Scales with you</h3><p>From one user to one million, no re-architecture.</p></div>
</div>
<script>
document.querySelectorAll(".tabs button").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll(".tabs button").forEach(b=>b.classList.remove("active"));document.querySelectorAll(".panel").forEach(p=>p.classList.remove("active"));btn.classList.add("active");document.querySelector('[data-panel="'+btn.dataset.tab+'"]').classList.add("active")}));
</script>
</body></html>`,

  "sticky-cta-banner": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Sticky CTA Banner</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif}
.kicker{display:block;color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700;padding:20px 24px}
.content{padding:0 24px 100px;color:#847e8f;font-size:11px;line-height:1.9;max-width:500px}
.content h1{color:#f7f5fb;font:700 34px "Space Grotesk",sans-serif;letter-spacing:-.03em}
#banner{position:fixed;left:16px;right:16px;bottom:-80px;display:flex;align-items:center;justify-content:space-between;padding:14px 18px;border:1px solid var(--line);border-radius:14px;background:#0d0d12ee;backdrop-filter:blur(10px);box-shadow:0 25px 60px rgba(0,0,0,.4);transition:bottom .35s ease}
#banner.show{bottom:16px}
#banner b{font:700 12px "Space Grotesk",sans-serif}
#banner button{border:0;border-radius:9px;padding:9px 14px;background:#3b3255;color:#fff;font-size:9px;font-weight:700;cursor:pointer}
</style></head>
<body><span class="kicker">SCROLL DOWN</span>
<div class="content"><h1>Something worth<br>scrolling for.</h1><p>Keep reading — a call-to-action banner slides up from the bottom once you've scrolled past the fold.</p></div>
<div id="banner"><b>Ready to start your free trial?</b><button>Get started</button></div>
<script>
document.addEventListener("scroll",()=>{document.getElementById("banner").classList.toggle("show",window.scrollY>150)},{passive:true});
</script>
</body></html>`,

  "card-hover-tilt": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Hover Tilt Card</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif;perspective:1000px}
.tilt{width:260px;padding:26px;border:1px solid var(--line);border-radius:18px;background:radial-gradient(circle at 30% 15%,rgba(155,138,255,.22),transparent 60%),#0e0d14;box-shadow:0 24px 60px rgba(0,0,0,.45);transition:transform .18s ease-out,box-shadow .3s}
.tilt:hover{box-shadow:0 34px 80px rgba(0,0,0,.55),0 0 50px rgba(155,138,255,.12)}
.tilt span{font-size:9px;letter-spacing:2px;color:#9d94b0;font-weight:700}
.tilt h3{margin:12px 0 6px;font:700 20px "Space Grotesk",sans-serif}
.tilt p{margin:0;color:#847e8f;font-size:10px;line-height:1.7}
</style></head>
<body><article class="tilt" id="card"><span>INTERACTIVE</span><h3>Tilt on hover</h3><p>The card tracks your pointer and tilts in 3D with a soft glare.</p></article>
<script>
const card=document.getElementById("card");
card.addEventListener("pointermove",e=>{const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=\`rotateY(\${x*14}deg) rotateX(\${y*-14}deg) translateY(-4px)\`});
card.addEventListener("pointerleave",()=>card.style.transform="");
</script>
</body></html>`,

  "glass-stat-card": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Glass Stat Card</title><style>
:root{--bg:#050507;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:radial-gradient(circle at 30% 20%,rgba(155,138,255,.2),transparent 45%),radial-gradient(circle at 75% 70%,rgba(90,160,255,.16),transparent 45%),var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif}
.glass{display:flex;gap:12px}
.stat{width:120px;padding:18px;border:1px solid rgba(255,255,255,.14);border-radius:16px;background:rgba(255,255,255,.06);backdrop-filter:blur(14px);transition:transform .3s cubic-bezier(.2,.8,.2,1),background .3s}
.stat:hover{transform:translateY(-7px);background:rgba(255,255,255,.11)}
.stat small{display:block;font-size:7px;letter-spacing:1.5px;color:#c3bdd0}
.stat strong{display:block;margin-top:8px;font:700 26px "Space Grotesk",sans-serif}
.stat em{font-style:normal;font-size:8px;color:#a9e6b4}
</style></head>
<body><div class="glass"><div class="stat"><small>REVENUE</small><strong>$48K</strong><em>+12.4%</em></div><div class="stat"><small>USERS</small><strong>3.2K</strong><em>+8.1%</em></div><div class="stat"><small>UPTIME</small><strong>99.9%</strong><em>stable</em></div></div>
</body></html>`,

  "live-chart-card": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Live Chart Card</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif}
.card{width:min(420px,90vw);padding:22px;border:1px solid var(--line);border-radius:16px;background:#0d0d12}
.card header{display:flex;justify-content:space-between;align-items:baseline}
.card small{font-size:8px;letter-spacing:1.5px;color:#77737f}
.card strong{font:700 28px "Space Grotesk",sans-serif}
.bars{display:flex;align-items:end;gap:5px;height:120px;margin-top:18px}
.bars i{flex:1;border-radius:4px 4px 0 0;background:linear-gradient(#c4b5fd,#5f5878);transition:height .6s cubic-bezier(.2,.8,.2,1)}
</style></head>
<body><div class="card"><header><div><small>WEEKLY REVENUE</small><strong id="val">$12.4K</strong></div><small id="tick">live</small></header><div class="bars" id="bars"></div></div>
<script>
const bars=document.getElementById("bars");
for(let i=0;i<12;i++){const b=document.createElement("i");b.style.height=(20+Math.random()*70)+"%";bars.appendChild(b)}
setInterval(()=>{[...bars.children].forEach(b=>b.style.height=(20+Math.random()*70)+"%");document.getElementById("val").textContent="$"+(9+Math.random()*6).toFixed(1)+"K"},1600);
</script>
</body></html>`,

  "activity-feed-panel": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Activity Feed Panel</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif}
.panel{width:min(360px,90vw);padding:20px;border:1px solid var(--line);border-radius:16px;background:#0d0d12}
.panel h3{margin:0 0 14px;font:700 14px "Space Grotesk",sans-serif}
.row{display:flex;gap:10px;align-items:center;padding:10px 0;border-bottom:1px solid #191821;animation:slideIn .5s ease both}
.row:last-child{border:0}
.dot{width:8px;height:8px;border-radius:50%;background:var(--lav);box-shadow:0 0 10px var(--lav);flex:0 0 auto}
.row p{margin:0;font-size:9px;color:#b4aec0}
.row span{margin-left:auto;font-size:8px;color:#66626f}
@keyframes slideIn{from{opacity:0;transform:translateX(-10px)}to{opacity:1;transform:none}}
</style></head>
<body><div class="panel"><h3>Recent activity</h3><div id="feed"></div></div>
<script>
const items=[["Payment received","2m"],["New workspace created","14m"],["Report exported","1h"],["Team member invited","3h"],["Plan upgraded","1d"]];
const feed=document.getElementById("feed");
items.forEach((it,i)=>{const d=document.createElement("div");d.className="row";d.style.animationDelay=(i*.09)+"s";d.innerHTML='<span class="dot"></span><p>'+it[0]+'</p><span>'+it[1]+'</span>';feed.appendChild(d)});
</script>
</body></html>`,

  "icon-feature-grid": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Icon Feature Grid</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:24px}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;max-width:520px}
.f{padding:18px;border:1px solid var(--line);border-radius:14px;background:#0d0d12;transition:transform .3s cubic-bezier(.2,.8,.2,1),border-color .3s}
.f:hover{transform:translateY(-6px);border-color:#544c67}
.ico{width:34px;height:34px;display:grid;place-items:center;border-radius:10px;background:#181425;color:var(--lav);font-size:15px;transition:transform .3s}
.f:hover .ico{transform:rotate(-8deg) scale(1.08)}
.f h4{margin:12px 0 4px;font:700 12px "Space Grotesk",sans-serif}
.f p{margin:0;font-size:8px;color:#847e8f;line-height:1.6}
@media(max-width:520px){.grid{grid-template-columns:1fr 1fr}}
</style></head>
<body><div class="grid">
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
.item{border:1px solid var(--line);border-radius:12px;margin-bottom:8px;overflow:hidden;background:#0d0d12}
.head{display:flex;justify-content:space-between;align-items:center;padding:14px 16px;cursor:pointer;font:700 12px "Space Grotesk",sans-serif}
.head i{font-style:normal;color:var(--lav);transition:transform .3s}
.item.open .head i{transform:rotate(45deg)}
.body{max-height:0;overflow:hidden;transition:max-height .35s cubic-bezier(.2,.8,.2,1)}
.item.open .body{max-height:120px}
.body p{margin:0;padding:0 16px 14px;font-size:9px;color:#847e8f;line-height:1.7}
</style></head>
<body><div class="acc" id="acc">
<div class="item open"><div class="head">Built for speed <i>+</i></div><div class="body"><p>Every interaction resolves in under 100ms, even on mid-range devices.</p></div></div>
<div class="item"><div class="head">Secure by default <i>+</i></div><div class="body"><p>Encrypted at rest and in transit, with audited access controls.</p></div></div>
<div class="item"><div class="head">Scales with you <i>+</i></div><div class="body"><p>From a single workspace to enterprise fleets, no re-architecture.</p></div></div>
</div>
<script>
document.querySelectorAll(".head").forEach(h=>h.addEventListener("click",()=>h.parentElement.classList.toggle("open")));
</script>
</body></html>`,

  "floating-label-form": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Floating Label Form</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:24px}
form{width:min(340px,92vw);display:grid;gap:16px}
.field{position:relative}
.field input{width:100%;padding:16px 12px 8px;border:1px solid var(--line);border-radius:10px;background:#0e0e14;color:#fff;outline:0;font-size:12px;transition:border-color .25s,box-shadow .25s}
.field input:focus{border-color:#6d5f93;box-shadow:0 0 0 3px rgba(155,138,255,.12)}
.field label{position:absolute;left:12px;top:14px;font-size:11px;color:#77737f;pointer-events:none;transition:transform .2s ease,font-size .2s ease,color .2s}
.field input:focus+label,.field input:not(:placeholder-shown)+label{transform:translateY(-9px);font-size:8px;color:var(--lav)}
button{border:0;border-radius:10px;padding:13px;background:linear-gradient(135deg,#d7d0ff,#9b8aff);color:#0a090f;font-weight:800;font-size:11px;cursor:pointer}
</style></head>
<body><form id="f"><div class="field"><input id="n" placeholder=" "><label for="n">Full name</label></div><div class="field"><input id="e" type="email" placeholder=" "><label for="e">Email address</label></div><button>Create account</button></form>
<script>document.getElementById("f").addEventListener("submit",e=>{e.preventDefault();e.target.innerHTML='<p style="margin:0;color:#a9e6b4;font-size:11px">Account created ✓</p>'});</script>
</body></html>`,

  "inline-validation-form": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Inline Validation Form</title><style>
:root{--bg:#050507;--line:#272632;--ok:#9fd6ad;--bad:#efb8c2}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:24px}
form{width:min(340px,92vw);display:grid;gap:14px}
label{display:grid;gap:6px;font-size:9px;color:#85818d}
input{padding:12px;border:1px solid var(--line);border-radius:9px;background:#0e0e14;color:#fff;outline:0;transition:border-color .25s}
input.ok{border-color:#3d6b48}
input.bad{border-color:#6b3d47}
.msg{font-size:8px;min-height:11px;transition:opacity .2s}
.msg.ok{color:var(--ok)}.msg.bad{color:var(--bad)}
</style></head>
<body><form><label>Email<input id="e" type="email" placeholder="you@company.com"><span class="msg" id="m">Type to validate live</span></label></form>
<script>
const e=document.getElementById("e"),m=document.getElementById("m");
e.addEventListener("input",()=>{const v=e.value;const good=/^[^@\\s]+@[^@\\s]+\\.[a-z]{2,}$/i.test(v);e.className=v?(good?"ok":"bad"):"";m.className="msg "+(v?(good?"ok":"bad"):"");m.textContent=!v?"Type to validate live":good?"Looks good ✓":"That doesn't look like an email yet"});
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
.copy button{border:0;border-radius:10px;padding:11px 18px;background:linear-gradient(135deg,#d7d0ff,#9b8aff);color:#0a090f;font-weight:800;font-size:10px;cursor:pointer}
.art{aspect-ratio:1;border-radius:20px;border:1px solid var(--line);background:radial-gradient(circle at 40% 30%,rgba(155,138,255,.34),transparent 60%),#0e0d14;display:grid;place-items:center;overflow:hidden}
.art i{width:60%;aspect-ratio:1;border-radius:50%;border:1px solid rgba(196,181,253,.35);animation:pulse 3.4s ease-in-out infinite}
@keyframes pulse{50%{transform:scale(.86);border-color:rgba(196,181,253,.7)}}
@media(max-width:560px){.split{grid-template-columns:1fr}}
</style></head>
<body><div class="split"><div class="copy"><small>NEW RELEASE</small><h1>Design once. Ship everywhere.</h1><p>A split hero that keeps the message and the visual in balance.</p><button>See the system</button></div><div class="art"><i></i></div></div>
</body></html>`,

  "faq-accordion-section": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>FAQ Accordion Section</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:26px}
.faq{width:min(460px,92vw)}
.faq h2{margin:0 0 16px;font:700 22px "Space Grotesk",sans-serif;letter-spacing:-.03em}
details{border-bottom:1px solid var(--line);padding:12px 0}
summary{cursor:pointer;list-style:none;font:700 11px "Space Grotesk",sans-serif;display:flex;justify-content:space-between;align-items:center}
summary::-webkit-details-marker{display:none}
summary:after{content:"+";color:var(--lav);transition:transform .3s}
details[open] summary:after{transform:rotate(45deg)}
details p{margin:10px 0 2px;font-size:9px;color:#847e8f;line-height:1.75;animation:fade .35s ease both}
@keyframes fade{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:none}}
</style></head>
<body><div class="faq"><h2>Frequently asked</h2>
<details open><summary>Can I use this commercially?</summary><p>Yes — every component ships with a commercial-use license included.</p></details>
<details><summary>Do I need a framework?</summary><p>No. Everything is plain HTML, CSS and vanilla JS you can paste anywhere.</p></details>
<details><summary>How do updates work?</summary><p>New components are added weekly and are included with an active plan.</p></details>
</div>
</body></html>`,

  "logo-cloud-marquee": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Logo Cloud Marquee</title><style>
:root{--bg:#050507;--line:#272632}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif;overflow:hidden}
.wrap{width:100%;text-align:center}
.wrap small{font-size:9px;letter-spacing:2px;color:#77737f;font-weight:700}
.marquee{margin-top:18px;overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent);mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)}
.track{display:flex;gap:34px;width:max-content;animation:slide 16s linear infinite}
.track b{font:700 18px "Space Grotesk",sans-serif;color:#4d4956;letter-spacing:-.03em;transition:color .3s}
.track b:hover{color:#c4b5fd}
@keyframes slide{to{transform:translateX(-50%)}}
</style></head>
<body><div class="wrap"><small>TRUSTED BY TEAMS AT</small><div class="marquee"><div class="track" id="t"></div></div></div>
<script>
const names=["NORTHSTAR","ATELIER","VANTA","ORBIT","HALO","ECHO"];
const t=document.getElementById("t");
[...names,...names].forEach(n=>{const b=document.createElement("b");b.textContent=n;t.appendChild(b)});
</script>
</body></html>`,

  "sidebar-nav-collapse": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Collapsible Sidebar Nav</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:flex;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif}
aside{width:170px;padding:18px 12px;border-right:1px solid var(--line);background:#0b0b10;transition:width .3s cubic-bezier(.2,.8,.2,1);overflow:hidden}
aside.collapsed{width:58px}
aside b{display:block;font:700 13px "Space Grotesk",sans-serif;margin-bottom:16px;white-space:nowrap}
aside a{display:flex;align-items:center;gap:10px;padding:9px 8px;border-radius:8px;color:#847e8f;text-decoration:none;font-size:10px;white-space:nowrap;transition:background .25s,color .25s}
aside a:hover,aside a.active{background:#171420;color:#e6e1f2}
aside i{font-style:normal;color:var(--lav);flex:0 0 16px;text-align:center}
aside.collapsed span{opacity:0}
aside span{transition:opacity .2s}
main{flex:1;padding:22px}
main button{border:1px solid var(--line);border-radius:9px;background:#0d0d12;color:#c1bccb;padding:9px 13px;font-size:10px;cursor:pointer}
</style></head>
<body><aside id="side"><b>CF</b><a class="active"><i>◧</i><span>Overview</span></a><a><i>◈</i><span>Projects</span></a><a><i>◎</i><span>Team</span></a><a><i>⚙</i><span>Settings</span></a></aside><main><button id="t">Toggle sidebar</button></main>
<script>document.getElementById("t").addEventListener("click",()=>document.getElementById("side").classList.toggle("collapsed"));</script>
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
<body><div class="gal">
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
<body><div class="list">
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
<body><div class="plan"><small>CODEFUSION PRO</small><strong>₹499<em>/mo</em></strong><ul><li>Every component unlocked</li><li>Copy code and prompts</li><li>New drops every week</li><li>Cancel anytime</li></ul><button>Get Pro</button></div>
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
<body><div><div class="stack"><div class="a">SC</div><div class="b">JM</div><div class="c">AR</div><div class="d">TK</div><div class="e">+9k</div></div><p>Trusted by <b>9,000+</b> builders shipping this week</p></div>
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
.morph-btn{position:relative;width:180px;height:48px;border:0;border-radius:24px;font-size:13px;font-weight:800;color:#0a090f;cursor:pointer;background:linear-gradient(135deg,#d7d0ff,#9b8aff);transition:width .35s ease,border-radius .35s ease,background .35s}
.morph-btn.loading{width:48px;border-radius:50%;background:#17131f}
.morph-btn.done{width:180px;border-radius:24px;background:#5fd4a1}
.spinner{display:none;width:18px;height:18px;border:2px solid #3a3546;border-top-color:#c4b5fd;border-radius:50%;animation:spin .7s linear infinite}
.morph-btn.loading .label{display:none}.morph-btn.loading .spinner{display:block}
@keyframes spin{to{transform:rotate(360deg)}}
</style></head>
<body><div class="stage"><span class="kicker">CLICK TO SUBMIT</span><button class="morph-btn" id="btn"><span class="label">Create account</span><span class="spinner"></span></button></div>
<script>
const btn=document.getElementById("btn"),label=btn.querySelector(".label");
btn.addEventListener("click",()=>{
  if(btn.classList.contains("loading")||btn.classList.contains("done"))return;
  btn.classList.add("loading");
  setTimeout(()=>{btn.classList.remove("loading");btn.classList.add("done");label.textContent="Account created ✓";},1400);
  setTimeout(()=>{btn.classList.remove("done");label.textContent="Create account";},3200);
});
</script>
</body></html>`,

  "command-trigger-button": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Command Trigger Button</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.stage{display:grid;gap:22px;place-items:center;padding:40px;position:relative}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.cmd-btn{display:flex;align-items:center;gap:10px;padding:12px 16px;border:1px solid var(--line);border-radius:10px;background:#111017;color:#c9c4d6;font-size:12px;cursor:pointer}
.cmd-btn kbd{padding:2px 6px;border:1px solid #3a3546;border-radius:5px;background:#1a1723;font-size:10px;color:#9d94b0}
.cmd-menu{position:absolute;top:78px;width:260px;border:1px solid var(--line);border-radius:12px;background:#0d0d12;box-shadow:0 20px 60px rgba(0,0,0,.5);opacity:0;pointer-events:none;transform:translateY(-8px);transition:opacity .2s,transform .2s;overflow:hidden}
.cmd-menu.open{opacity:1;pointer-events:auto;transform:none}
.cmd-menu div{padding:11px 14px;font-size:12px;color:#eee9f8;border-bottom:1px solid var(--line);cursor:pointer}
.cmd-menu div:last-child{border-bottom:0}.cmd-menu div:hover{background:#17131f;color:var(--lav)}
</style></head>
<body><div class="stage"><span class="kicker">CLICK OR PRESS ⌘K</span><button class="cmd-btn" id="btn">Search actions… <kbd>⌘K</kbd></button>
<div class="cmd-menu" id="menu"><div>New project</div><div>Invite teammate</div><div>Open settings</div><div>View documentation</div></div></div>
<script>
const btn=document.getElementById("btn"),menu=document.getElementById("menu");
function toggle(){menu.classList.toggle("open")}
btn.addEventListener("click",toggle);
document.addEventListener("keydown",e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="k"){e.preventDefault();toggle()}});
document.addEventListener("click",e=>{if(!menu.contains(e.target)&&e.target!==btn)menu.classList.remove("open")});
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
</style></head>
<body><div class="stage"><span class="kicker">LOADING…</span>
<div class="ring-wrap">
<svg width="120" height="120"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#d7d0ff"/><stop offset="100%" stop-color="#9b8aff"/></linearGradient></defs>
<circle class="track" cx="60" cy="60" r="52"/><circle class="bar" id="bar" cx="60" cy="60" r="52" stroke-dasharray="327" stroke-dashoffset="327"/></svg>
<span class="pct" id="pct">0%</span></div></div>
<script>
const bar=document.getElementById("bar"),pct=document.getElementById("pct"),C=327;let v=0;
const t=setInterval(()=>{v=Math.min(100,v+Math.random()*9);bar.style.strokeDashoffset=C-(C*v/100);pct.textContent=Math.round(v)+"%";if(v>=100)clearInterval(t)},220);
</script>
</body></html>`,

  "spotlight-cursor-grid": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Spotlight Cursor Grid</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;display:grid;place-items:center}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700;display:block;text-align:center;margin-bottom:16px}
.grid{position:relative;display:grid;grid-template-columns:repeat(3,1fr);gap:12px;padding:30px;max-width:480px}
.grid::before{content:"";position:absolute;inset:0;border-radius:18px;pointer-events:none;background:radial-gradient(220px circle at var(--x,50%) var(--y,50%),rgba(196,181,253,.16),transparent 70%)}
.tile{position:relative;padding:22px 16px;border:1px solid var(--line);border-radius:12px;background:#0d0d12;color:#c9c4d6;font-size:11px;text-align:center}
</style></head>
<body><div><span class="kicker">MOVE YOUR CURSOR OVER THE GRID</span>
<div class="grid" id="grid">
<div class="tile">Speed</div><div class="tile">Security</div><div class="tile">Scale</div>
<div class="tile">Uptime</div><div class="tile">Support</div><div class="tile">Insights</div>
</div></div>
<script>
const grid=document.getElementById("grid");
grid.addEventListener("pointermove",e=>{const r=grid.getBoundingClientRect();grid.style.setProperty("--x",(e.clientX-r.left)+"px");grid.style.setProperty("--y",(e.clientY-r.top)+"px")});
</script>
</body></html>`,

  "expandable-detail-card": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Expandable Detail Card</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.stage{display:grid;gap:16px;padding:40px;width:min(360px,86vw)}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.exp-card{border:1px solid var(--line);border-radius:16px;background:#0d0d12;overflow:hidden;cursor:pointer}
.exp-head{display:flex;justify-content:space-between;align-items:center;padding:18px 20px}
.exp-head b{color:#f7f5fb;font-size:13px}
.exp-head span{color:#817d8a;font-size:11px}
.chev{transition:transform .3s}
.exp-card.open .chev{transform:rotate(180deg)}
.exp-body{max-height:0;overflow:hidden;transition:max-height .35s ease}
.exp-card.open .exp-body{max-height:140px}
.exp-body p{margin:0;padding:0 20px 20px;color:#a49dbc;font-size:12px;line-height:1.6}
</style></head>
<body><div class="stage"><span class="kicker">CLICK TO EXPAND</span>
<div class="exp-card" id="card"><div class="exp-head"><b>What's included in Pro?</b><span class="chev">⌄</span></div>
<div class="exp-body"><p>Unlimited projects, priority support, advanced analytics and early access to every new component we ship.</p></div></div></div>
<script>document.getElementById("card").addEventListener("click",e=>e.currentTarget.classList.toggle("open"));</script>
</body></html>`,

  "before-after-compare-card": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Before/After Compare Card</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.stage{display:grid;gap:16px;place-items:center;padding:40px}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.compare{position:relative;width:320px;height:200px;border:1px solid var(--line);border-radius:14px;overflow:hidden;user-select:none}
.pane{position:absolute;inset:0;display:grid;place-items:center;font-size:12px;font-weight:800}
.before{background:linear-gradient(135deg,#1a1723,#0d0d12);color:#817d8a}
.after{background:linear-gradient(135deg,#d7d0ff,#9b8aff);color:#0a090f}
.after-wrap{position:absolute;inset:0;width:50%;overflow:hidden}
.handle{position:absolute;top:0;bottom:0;left:50%;width:2px;background:#f7f5fb;cursor:ew-resize}
.handle::after{content:"↔";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:32px;height:32px;border-radius:50%;background:#f7f5fb;color:#0a090f;display:grid;place-items:center;font-size:13px}
</style></head>
<body><div class="stage"><span class="kicker">DRAG THE HANDLE</span>
<div class="compare" id="compare"><div class="pane before">BEFORE</div><div class="after-wrap" id="afterWrap"><div class="pane after" style="width:320px">AFTER</div></div><div class="handle" id="handle"></div></div></div>
<script>
const compare=document.getElementById("compare"),afterWrap=document.getElementById("afterWrap"),handle=document.getElementById("handle");
let dragging=false;
handle.addEventListener("pointerdown",()=>dragging=true);
window.addEventListener("pointerup",()=>dragging=false);
window.addEventListener("pointermove",e=>{
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
.calc{border:1px solid var(--line);border-radius:16px;background:#0d0d12;padding:24px}
.calc b{color:#817d8a;font-size:11px;display:block;margin-bottom:6px}
.calc .price{font-size:34px;font-weight:800;color:#f7f5fb}
.calc .price span{font-size:13px;color:#817d8a;font-weight:600}
input[type=range]{width:100%;margin:18px 0 8px;accent-color:#c4b5fd}
.rowlabel{display:flex;justify-content:space-between;color:#a49dbc;font-size:11px}
</style></head>
<body><div class="stage"><span class="kicker">DRAG TO ESTIMATE YOUR PLAN</span>
<div class="calc"><b>Monthly active users</b><div class="price"><span id="users">2,500</span></div>
<input type="range" id="slider" min="500" max="50000" step="500" value="2500">
<div class="rowlabel"><span>500</span><span>50,000+</span></div>
<div class="price" style="margin-top:18px" id="cost">$29<span>/mo</span></div></div></div>
<script>
const slider=document.getElementById("slider"),users=document.getElementById("users"),cost=document.getElementById("cost");
slider.addEventListener("input",()=>{
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
.tier{border:1px solid var(--line);border-radius:14px;background:#0d0d12;padding:18px 16px;text-align:center;transition:border-color .25s,transform .25s}
.tier b{display:block;color:#817d8a;font-size:10px;letter-spacing:1px}
.tier strong{display:block;font-size:22px;color:#f7f5fb;margin:10px 0}
.tier:hover{border-color:#c4b5fd;transform:translateY(-4px)}
</style></head>
<body><div class="stage"><span class="kicker">HOVER A PLAN</span>
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
.col{border:1px solid var(--line);border-radius:12px;background:#0d0d12;padding:12px}
.col h4{margin:0 0 10px;font-size:10px;letter-spacing:1px;color:#817d8a}
.task{padding:10px;border-radius:8px;background:#141119;border:1px solid var(--line);font-size:11px;color:#eee9f8;margin-bottom:8px;cursor:grab}
.task:last-child{margin-bottom:0}
.task small{display:block;color:#817d8a;margin-top:4px;font-size:9px}
</style></head>
<body><div><span class="kicker">TASKS AT A GLANCE</span>
<div class="board"><div class="col"><h4>TO DO</h4><div class="task">Design onboarding flow<small>UX</small></div><div class="task">Write API docs<small>Docs</small></div></div>
<div class="col"><h4>IN PROGRESS</h4><div class="task">Build checkout widget<small>Frontend</small></div></div>
<div class="col"><h4>DONE</h4><div class="task">Fix login redirect<small>Bug</small></div><div class="task">Ship dark mode<small>Feature</small></div></div></div></div>
</body></html>`,

  "notification-center-panel": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Notification Center Panel</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.stage{display:grid;gap:16px;padding:40px}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.panel{width:280px;border:1px solid var(--line);border-radius:14px;background:#0d0d12;overflow:hidden}
.panel h4{margin:0;padding:14px 16px;font-size:11px;color:#817d8a;border-bottom:1px solid var(--line)}
.notif{display:flex;gap:10px;padding:12px 16px;border-bottom:1px solid var(--line);cursor:pointer}
.notif:last-child{border-bottom:0}
.notif.unread{background:#141020}
.notif i{width:8px;height:8px;border-radius:50%;background:#c4b5fd;margin-top:5px;flex:none;font-style:normal}
.notif.read i{background:transparent}
.notif div b{display:block;font-size:11px;color:#eee9f8}
.notif div span{font-size:10px;color:#817d8a}
</style></head>
<body><div class="stage"><span class="kicker">CLICK A NOTIFICATION TO MARK READ</span>
<div class="panel"><h4>NOTIFICATIONS</h4>
<div class="notif unread"><i></i><div><b>New comment on your PR</b><span>2 min ago</span></div></div>
<div class="notif unread"><i></i><div><b>Deploy succeeded</b><span>1 hour ago</span></div></div>
<div class="notif read"><i></i><div><b>Weekly summary ready</b><span>Yesterday</span></div></div></div></div>
<script>
document.querySelectorAll(".notif").forEach(n=>n.addEventListener("click",()=>{n.classList.remove("unread");n.classList.add("read")}));
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
button{padding:13px 26px;border:0;border-radius:12px;background:#f7f5fb;color:#0a090f;font-weight:800;font-size:12px;cursor:pointer}
</style></head>
<body><div class="aurora"></div><div class="hero"><span class="kicker">INTRODUCING V2</span><h1>Design systems that move with you.</h1><p>An adaptive component library built for teams shipping fast, polished products.</p><button>Start building →</button></div>
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
<body><canvas id="c"></canvas><div class="hero"><div><span class="kicker">MOVE YOUR CURSOR</span><h1>Interfaces with a pulse.</h1></div></div>
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
.card{border:1px solid var(--line);border-radius:16px;background:#0d0d12;padding:24px;text-align:center;min-height:120px}
.card p{color:#eee9f8;font-size:13px;line-height:1.6;margin:0 0 12px}
.card b{color:#c4b5fd;font-size:11px}
.dots{display:flex;gap:6px}
.dots span{width:7px;height:7px;border-radius:50%;background:#3a3546;cursor:pointer}
.dots span.active{background:#c4b5fd}
</style></head>
<body><div class="stage"><span class="kicker">TAP A DOT</span>
<div class="card" id="card"><p>"CodeFusion cut our build time in half — every component just works."</p><b>Maya Torres · Frontend Lead</b></div>
<div class="dots" id="dots"><span class="active"></span><span></span><span></span></div></div>
<script>
const quotes=[{q:"CodeFusion cut our build time in half — every component just works.",a:"Maya Torres · Frontend Lead"},
{q:"The polish here rivals a custom design agency, at a fraction of the cost.",a:"Dev Patel · Founder"},
{q:"We shipped our MVP in a weekend using nothing but this library.",a:"Ines Laurent · Product Designer"}];
const card=document.getElementById("card"),dots=[...document.querySelectorAll("#dots span")];
dots.forEach((d,i)=>d.addEventListener("click",()=>{
  dots.forEach(x=>x.classList.remove("active"));d.classList.add("active");
  card.innerHTML=\`<p>"\${quotes[i].q}"</p><b>\${quotes[i].a}</b>\`;
}));
</script>
</body></html>`,

  "pull-quote-testimonial": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Pull Quote Testimonial</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.wrap{max-width:420px;padding:40px;text-align:center}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.mark{font-size:40px;color:#3a3546;font-family:Georgia,serif;line-height:1}
blockquote{margin:10px 0 20px;font-size:19px;color:#f7f5fb;line-height:1.4;font-weight:600}
.who{color:#a49dbc;font-size:12px}
.logos{display:flex;gap:18px;justify-content:center;margin-top:22px;opacity:.6}
.logos span{color:#817d8a;font-size:11px;font-weight:800;letter-spacing:1px}
</style></head>
<body><div class="wrap"><span class="kicker">TRUSTED BY BUILDERS</span><div class="mark">"</div>
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
.search{display:flex;align-items:center;gap:8px;padding:9px 14px;border:1px solid var(--line);border-radius:9px;background:#111017;color:#817d8a;font-size:11px;cursor:pointer}
.overlay{position:fixed;inset:0;background:rgba(5,5,7,.7);display:none;place-items:start center;padding-top:100px}
.overlay.open{display:grid}
.palette{width:min(420px,88vw);border:1px solid var(--line);border-radius:14px;background:#0d0d12;overflow:hidden}
.palette input{width:100%;padding:14px 16px;border:0;border-bottom:1px solid var(--line);background:transparent;color:#f7f5fb;font-size:13px;outline:0}
.palette div{padding:11px 16px;font-size:12px;color:#c9c4d6;cursor:pointer}
.palette div:hover{background:#17131f;color:var(--lav)}
</style></head>
<body><header><b>CodeFusion</b><div class="search" id="open">Search… ⌘K</div></header>
<div class="overlay" id="overlay"><div class="palette"><input placeholder="Type a command…" autofocus>
<div>Go to Dashboard</div><div>Create new component</div><div>Toggle theme</div><div>View documentation</div></div></div>
<script>
const open=document.getElementById("open"),overlay=document.getElementById("overlay");
open.addEventListener("click",()=>overlay.classList.add("open"));
overlay.addEventListener("click",e=>{if(e.target===overlay)overlay.classList.remove("open")});
document.addEventListener("keydown",e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="k"){e.preventDefault();overlay.classList.add("open")}if(e.key==="Escape")overlay.classList.remove("open")});
</script>
</body></html>`,

  "sliding-underline-tabs": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Sliding Underline Tabs</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.stage{display:grid;gap:20px;padding:40px}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.tabs{position:relative;display:flex;gap:26px;border-bottom:1px solid var(--line);padding-bottom:0}
.tabs button{background:none;border:0;color:#817d8a;font-size:12px;font-weight:700;padding:10px 2px;cursor:pointer}
.tabs button.active{color:#f7f5fb}
.underline{position:absolute;bottom:-1px;height:2px;background:#c4b5fd;transition:left .3s ease,width .3s ease}
</style></head>
<body><div class="stage"><span class="kicker">CLICK A TAB</span>
<div class="tabs" id="tabs"><button class="active">Overview</button><button>Analytics</button><button>Settings</button><button>Billing</button><div class="underline" id="u"></div></div></div>
<script>
const tabs=document.getElementById("tabs"),buttons=[...tabs.querySelectorAll("button")],u=document.getElementById("u");
function place(btn){u.style.width=btn.offsetWidth+"px";u.style.left=btn.offsetLeft+"px"}
buttons.forEach(b=>b.addEventListener("click",()=>{buttons.forEach(x=>x.classList.remove("active"));b.classList.add("active");place(b)}));
place(buttons[0]);
</script>
</body></html>`,

  "drag-drop-upload-form": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Drag & Drop Upload</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.stage{display:grid;gap:14px;padding:40px;width:min(340px,86vw)}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.drop{border:2px dashed var(--line);border-radius:14px;padding:34px 18px;text-align:center;color:#817d8a;font-size:12px;transition:border-color .2s,background .2s}
.drop.over{border-color:#c4b5fd;background:#141020;color:#c9c4d6}
.drop b{display:block;color:#eee9f8;font-size:13px;margin-bottom:6px}
.bar{height:6px;border-radius:4px;background:#1c1a24;margin-top:14px;overflow:hidden;display:none}
.bar.show{display:block}
.bar i{display:block;height:100%;width:0;background:linear-gradient(90deg,#9b8aff,#c4b5fd);transition:width .25s;font-style:normal}
</style></head>
<body><div class="stage"><span class="kicker">DROP A FILE OR CLICK TO SIMULATE</span>
<div class="drop" id="drop"><b>Drag & drop your file here</b>or click to browse<div class="bar" id="bar"><i id="fill"></i></div></div></div>
<script>
const drop=document.getElementById("drop"),bar=document.getElementById("bar"),fill=document.getElementById("fill");
function simulate(){bar.classList.add("show");fill.style.width="0%";let p=0;const t=setInterval(()=>{p+=Math.random()*20;fill.style.width=Math.min(100,p)+"%";if(p>=100)clearInterval(t)},180)}
drop.addEventListener("click",simulate);
["dragover","dragenter"].forEach(ev=>drop.addEventListener(ev,e=>{e.preventDefault();drop.classList.add("over")}));
["dragleave","drop"].forEach(ev=>drop.addEventListener(ev,e=>{e.preventDefault();drop.classList.remove("over");if(ev==="drop")simulate()}));
</script>
</body></html>`,

  "otp-input-form": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>OTP Input Form</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.stage{display:grid;gap:16px;place-items:center;padding:40px}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.otp{display:flex;gap:9px}
.otp input{width:42px;height:52px;text-align:center;font-size:19px;font-weight:800;color:#f7f5fb;background:#111017;border:1px solid var(--line);border-radius:10px;outline:0}
.otp input:focus{border-color:#c4b5fd}
.status{font-size:11px;color:#5fd4a1;height:14px}
</style></head>
<body><div class="stage"><span class="kicker">ENTER THE 6-DIGIT CODE</span>
<div class="otp" id="otp"><input maxlength="1" inputmode="numeric"><input maxlength="1" inputmode="numeric"><input maxlength="1" inputmode="numeric"><input maxlength="1" inputmode="numeric"><input maxlength="1" inputmode="numeric"><input maxlength="1" inputmode="numeric"></div>
<div class="status" id="status"></div></div>
<script>
const inputs=[...document.querySelectorAll("#otp input")],status=document.getElementById("status");
inputs.forEach((inp,i)=>{
  inp.addEventListener("input",()=>{
    inp.value=inp.value.replace(/[^0-9]/g,"");
    if(inp.value&&inputs[i+1])inputs[i+1].focus();
    if(inputs.every(x=>x.value))status.textContent="Code verified ✓";
  });
  inp.addEventListener("keydown",e=>{if(e.key==="Backspace"&&!inp.value&&inputs[i-1])inputs[i-1].focus()});
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
.chips span{padding:7px 13px;border:1px solid var(--line);border-radius:999px;font-size:11px;color:#a49dbc;cursor:pointer}
.chips span.active{background:#c4b5fd;color:#0a090f;border-color:#c4b5fd}
.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}
.grid div{padding:22px 14px;border:1px solid var(--line);border-radius:12px;background:#0d0d12;color:#c9c4d6;font-size:11px;text-align:center;transition:opacity .2s,transform .2s}
.grid div.hide{opacity:0;transform:scale(.9);position:absolute;pointer-events:none}
</style></head>
<body><div class="stage"><span class="kicker">FILTER BY CATEGORY</span>
<div class="chips" id="chips"><span class="active" data-f="all">All</span><span data-f="web">Web</span><span data-f="brand">Brand</span><span data-f="app">App</span></div>
<div class="grid" id="grid">
<div data-c="web">Nova Website</div><div data-c="brand">Atlas Rebrand</div><div data-c="app">Finora App</div>
<div data-c="web">Travelora Landing</div><div data-c="app">LearnFlow Mobile</div><div data-c="brand">Socially Identity</div>
</div></div>
<script>
const chips=[...document.querySelectorAll("#chips span")],items=[...document.querySelectorAll("#grid div")];
chips.forEach(c=>c.addEventListener("click",()=>{
  chips.forEach(x=>x.classList.remove("active"));c.classList.add("active");
  const f=c.dataset.f;
  items.forEach(i=>i.classList.toggle("hide",f!=="all"&&i.dataset.c!==f));
}));
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
.strip div{flex:none;width:150px;height:100px;border:1px solid var(--line);border-radius:12px;background:linear-gradient(135deg,#141119,#1c1a24);display:grid;place-items:center;color:#c9c4d6;font-size:11px;user-select:none}
</style></head>
<body><div><span class="kicker">DRAG TO SCROLL</span>
<div class="strip" id="strip"><div>Nova SaaS</div><div>Atlas Agency</div><div>CommerceX</div><div>Finora</div><div>Medora</div><div>Travelora</div></div></div>
<script>
const strip=document.getElementById("strip");let down=false,startX,scrollLeft;
strip.addEventListener("pointerdown",e=>{down=true;strip.classList.add("grabbing");startX=e.pageX;scrollLeft=strip.scrollLeft});
window.addEventListener("pointerup",()=>{down=false;strip.classList.remove("grabbing")});
strip.addEventListener("pointermove",e=>{if(!down)return;strip.scrollLeft=scrollLeft-(e.pageX-startX)});
</script>
</body></html>`,

  "before-after-feature-toggle": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Before/After Feature Toggle</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.stage{display:grid;gap:16px;place-items:center;padding:40px;width:min(340px,86vw)}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.switch{display:flex;border:1px solid var(--line);border-radius:999px;padding:3px;width:fit-content}
.switch button{border:0;background:none;padding:7px 16px;border-radius:999px;font-size:11px;font-weight:700;color:#817d8a;cursor:pointer}
.switch button.active{background:#c4b5fd;color:#0a090f}
.panel{border:1px solid var(--line);border-radius:14px;background:#0d0d12;padding:20px;width:100%;color:#eee9f8;font-size:12px;line-height:1.6}
.panel b{display:block;color:#f7f5fb;margin-bottom:6px;font-size:13px}
</style></head>
<body><div class="stage"><span class="kicker">TOGGLE TO COMPARE</span>
<div class="switch" id="switch"><button class="active" data-v="before">Without CodeFusion</button><button data-v="after">With CodeFusion</button></div>
<div class="panel" id="panel"><b>Manual, from-scratch builds</b>Weeks spent wiring up components, chasing pixel-perfect states and re-solving problems already solved elsewhere.</div></div>
<script>
const buttons=[...document.querySelectorAll("#switch button")],panel=document.getElementById("panel");
const content={before:"<b>Manual, from-scratch builds</b>Weeks spent wiring up components, chasing pixel-perfect states and re-solving problems already solved elsewhere.",
after:"<b>Production-ready in hours</b>Copy a fully polished, interactive component and ship — every state, every breakpoint, already handled."};
buttons.forEach(b=>b.addEventListener("click",()=>{buttons.forEach(x=>x.classList.remove("active"));b.classList.add("active");panel.innerHTML=content[b.dataset.v]}));
</script>
</body></html>`,

  "scrollspy-feature-list": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Scrollspy Feature List</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;display:flex}
.nav{position:sticky;top:0;align-self:flex-start;padding:40px 18px;display:grid;gap:12px;min-width:130px}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700;margin-bottom:6px}
.nav a{color:#817d8a;font-size:11px;text-decoration:none;padding-left:10px;border-left:2px solid var(--line)}
.nav a.active{color:#f7f5fb;border-left-color:#c4b5fd}
.content{padding:40px 24px;display:grid;gap:200px;flex:1}
section{scroll-margin-top:20px}
section h3{color:#f7f5fb;font-size:16px;margin:0 0 8px}
section p{color:#a49dbc;font-size:12px;max-width:260px;line-height:1.6}
</style></head>
<body><nav class="nav"><span class="kicker">FEATURES</span><a href="#speed" class="active">Speed</a><a href="#security">Security</a><a href="#scale">Scale</a></nav>
<div class="content">
<section id="speed"><h3>Built for speed</h3><p>Every component ships pre-optimized, no extra tuning required.</p></section>
<section id="security"><h3>Security first</h3><p>Sanitized, dependency-light source you can audit in minutes.</p></section>
<section id="scale"><h3>Scales with you</h3><p>From a weekend project to a production platform, unchanged.</p></section>
</div>
<script>
const links=[...document.querySelectorAll(".nav a")],sections=[...document.querySelectorAll("section")];
const io=new IntersectionObserver(entries=>{
  entries.forEach(en=>{if(en.isIntersecting){links.forEach(l=>l.classList.remove("active"));document.querySelector(\`a[href="#\${en.target.id}"]\`).classList.add("active")}});
},{rootMargin:"-40% 0px -50% 0px"});
sections.forEach(s=>io.observe(s));
</script>
</body></html>`,

  "waitlist-capture-section": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Waitlist Capture Section</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.wrap{max-width:380px;padding:40px;text-align:center}
.kicker{color:#c4b5fd;font-size:10px;letter-spacing:2px;font-weight:700}
h2{color:#f7f5fb;font-size:24px;margin:12px 0 6px}
p{color:#a49dbc;font-size:12px;margin:0 0 20px}
form{display:flex;gap:8px}
input{flex:1;padding:12px 14px;border:1px solid var(--line);border-radius:10px;background:#111017;color:#f7f5fb;font-size:12px;outline:0}
button{padding:12px 18px;border:0;border-radius:10px;background:#f7f5fb;color:#0a090f;font-weight:800;font-size:12px;cursor:pointer;white-space:nowrap}
.success{display:none;color:#5fd4a1;font-size:12px;margin-top:12px}
</style></head>
<body><div class="wrap"><span class="kicker">JOIN 4,200+ ON THE WAITLIST</span><h2>Be first to try v3.</h2><p>Early access, launch pricing and priority onboarding.</p>
<form id="form"><input type="email" placeholder="you@company.com" required><button>Notify me</button></form>
<div class="success" id="success">You're on the list ✓ — check your inbox soon.</div></div>
<script>
document.getElementById("form").addEventListener("submit",e=>{e.preventDefault();e.target.style.display="none";document.getElementById("success").style.display="block"});
</script>
</body></html>`,

  "animated-stats-band": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Animated Stats Band</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.band{display:flex;gap:0;border:1px solid var(--line);border-radius:16px;overflow:hidden}
.stat{padding:26px 32px;text-align:center;border-right:1px solid var(--line)}
.stat:last-child{border-right:0}
.stat b{display:block;font-size:26px;color:#f7f5fb}
.stat span{font-size:10px;color:#817d8a;letter-spacing:.5px}
</style></head>
<body><div class="band" id="band">
<div class="stat"><b data-t="12400">0</b><span>ACTIVE TEAMS</span></div>
<div class="stat"><b data-t="98">0</b><span>UPTIME %</span></div>
<div class="stat"><b data-t="340">0</b><span>COMPONENTS SHIPPED</span></div>
</div>
<script>
document.querySelectorAll("#band b").forEach(el=>{
  const target=Number(el.dataset.t);let v=0;
  const t=setInterval(()=>{v+=Math.ceil(target/40);if(v>=target){v=target;clearInterval(t)}el.textContent=v.toLocaleString();},30);
});
</script>
</body></html>`,

  "elastic-press-button": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Elastic Press Button</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.stage{display:grid;gap:22px;place-items:center;padding:40px}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.elastic-btn{padding:16px 32px;border:0;border-radius:14px;font-size:13px;font-weight:800;color:#0a090f;cursor:pointer;background:linear-gradient(135deg,#d7d0ff,#9b8aff);transition:transform .12s cubic-bezier(.34,1.56,.64,1)}
.elastic-btn:active{transform:scale(.88)}
.elastic-btn.pop{animation:pop .45s cubic-bezier(.34,1.56,.64,1)}
@keyframes pop{0%{transform:scale(.88)}60%{transform:scale(1.08)}100%{transform:scale(1)}}
</style></head>
<body><div class="stage"><span class="kicker">PRESS AND RELEASE</span><button class="elastic-btn" id="btn">Add to cart</button></div>
<script>
const btn=document.getElementById("btn");
btn.addEventListener("pointerup",()=>{btn.classList.remove("pop");void btn.offsetWidth;btn.classList.add("pop")});
</script>
</body></html>`,

  "split-hover-button": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Split Hover Button</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.stage{display:grid;gap:22px;place-items:center;padding:40px}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.split-btn{position:relative;width:190px;height:50px;border:1px solid var(--line);border-radius:12px;overflow:hidden;cursor:pointer;background:#111017}
.split-half{position:absolute;top:0;bottom:0;width:50%;display:grid;place-items:center;font-size:12px;font-weight:800;color:#eee9f8;transition:transform .3s cubic-bezier(.2,.8,.2,1)}
.split-left{left:0;background:#17131f;transform-origin:left}
.split-right{right:0;background:#1b1725;transform-origin:right}
.split-btn:hover .split-left{transform:skewX(-8deg) translateX(-6px)}
.split-btn:hover .split-right{transform:skewX(-8deg) translateX(6px)}
.split-icon{position:absolute;inset:0;display:grid;place-items:center;color:var(--lav);font-size:16px;opacity:0;transition:opacity .3s}
.split-btn:hover .split-icon{opacity:1}
</style></head>
<body><div class="stage"><span class="kicker">HOVER TO PEEL</span>
<div class="split-btn"><div class="split-half split-left">Down</div><div class="split-half split-right">load</div><div class="split-icon">↓</div></div></div>
</body></html>`,

  "long-press-confirm-button": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Long Press Confirm Button</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.stage{display:grid;gap:22px;place-items:center;padding:40px}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.hold-btn{position:relative;width:180px;height:48px;border:1px solid #5e3540;border-radius:12px;overflow:hidden;background:#180f12;color:#efb8c2;font-size:12px;font-weight:800;cursor:pointer}
.hold-fill{position:absolute;left:0;top:0;bottom:0;width:0;background:#7a2f3d}
.hold-label{position:relative;z-index:2;display:grid;place-items:center;height:100%}
</style></head>
<body><div class="stage"><span class="kicker">PRESS AND HOLD TO DELETE</span>
<button class="hold-btn" id="btn"><div class="hold-fill" id="fill"></div><span class="hold-label" id="label">Hold to delete</span></button></div>
<script>
const btn=document.getElementById("btn"),fill=document.getElementById("fill"),label=document.getElementById("label");
let raf,start;
function step(ts){if(!start)start=ts;const p=Math.min(1,(ts-start)/900);fill.style.width=(p*100)+"%";if(p>=1){label.textContent="Deleted ✓";cancelAnimationFrame(raf);return}raf=requestAnimationFrame(step)}
function begin(){start=null;raf=requestAnimationFrame(step)}
function cancel(){cancelAnimationFrame(raf);fill.style.width="0%";if(label.textContent!=="Deleted ✓")label.textContent="Hold to delete"}
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
.glow-cursor-btn{position:relative;padding:16px 34px;border:1px solid var(--line);border-radius:12px;font-size:12px;font-weight:800;color:#eee9f8;cursor:pointer;background:#111017;overflow:hidden}
.glow-cursor-btn::before{content:"";position:absolute;width:120px;height:120px;left:var(--x,50%);top:var(--y,50%);transform:translate(-50%,-50%);background:radial-gradient(circle,rgba(196,181,253,.35),transparent 70%);opacity:0;transition:opacity .25s}
.glow-cursor-btn:hover::before{opacity:1}
.glow-cursor-btn span{position:relative;z-index:1}
</style></head>
<body><div class="stage"><span class="kicker">MOVE OVER THE BUTTON</span>
<button class="glow-cursor-btn" id="btn"><span>Explore plans</span></button></div>
<script>
const btn=document.getElementById("btn");
btn.addEventListener("pointermove",e=>{const r=btn.getBoundingClientRect();btn.style.setProperty("--x",(e.clientX-r.left)+"px");btn.style.setProperty("--y",(e.clientY-r.top)+"px")});
</script>
</body></html>`,

  "toggle-icon-morph-button": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Toggle Icon Morph Button</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.stage{display:grid;gap:22px;place-items:center;padding:40px}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.morph-icon-btn{width:52px;height:52px;border:1px solid var(--line);border-radius:50%;background:#111017;cursor:pointer;display:grid;place-items:center;color:var(--lav)}
.morph-icon-btn svg{width:20px;height:20px}
.bar{transform-origin:center;transition:transform .3s ease,opacity .2s}
.morph-icon-btn.on .bar1{transform:rotate(45deg) translateY(0)}
.morph-icon-btn.on .bar2{opacity:0}
.morph-icon-btn.on .bar3{transform:rotate(-45deg) translateY(0)}
</style></head>
<body><div class="stage"><span class="kicker">CLICK TO MORPH MENU → CLOSE</span>
<button class="morph-icon-btn" id="btn">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
<line class="bar bar1" x1="4" y1="7" x2="20" y2="7"/>
<line class="bar bar2" x1="4" y1="12" x2="20" y2="12"/>
<line class="bar bar3" x1="4" y1="17" x2="20" y2="17"/>
</svg>
</button></div>
<script>document.getElementById("btn").addEventListener("click",e=>e.currentTarget.classList.toggle("on"));</script>
</body></html>`,

  "stacked-3d-button": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Stacked 3D Button</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.stage{display:grid;gap:22px;place-items:center;padding:50px}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.key-btn{position:relative;padding:0;border:0;background:none;cursor:pointer}
.key-face{display:block;padding:15px 30px;border-radius:12px;background:linear-gradient(135deg,#d7d0ff,#9b8aff);color:#0a090f;font-size:12px;font-weight:800;transform:translateY(-6px);transition:transform .12s}
.key-side{position:absolute;left:0;right:0;bottom:0;height:6px;border-radius:0 0 12px 12px;background:#6c5cc4}
.key-btn:active .key-face{transform:translateY(0)}
</style></head>
<body><div class="stage"><span class="kicker">PRESS THE KEY</span>
<button class="key-btn"><span class="key-face">Confirm order</span><span class="key-side"></span></button></div>
</body></html>`,

  "magnetic-cursor-dot": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Magnetic Cursor Dot</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;display:grid;place-items:center;cursor:none}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700;display:block;text-align:center;margin-bottom:16px}
.targets{display:flex;gap:14px}
.targets button{padding:16px 22px;border:1px solid var(--line);border-radius:12px;background:#111017;color:#eee9f8;font-size:12px;cursor:none}
.dot{position:fixed;width:10px;height:10px;border-radius:50%;background:var(--lav);pointer-events:none;transform:translate(-50%,-50%);transition:width .2s,height .2s,background .2s;z-index:9}
</style></head>
<body><div><span class="kicker">MOVE OVER A BUTTON — THE DOT SNAPS</span>
<div class="targets" id="targets"><button>Pricing</button><button>Docs</button><button>Sign in</button></div></div>
<div class="dot" id="dot"></div>
<script>
const dot=document.getElementById("dot");let tx=0,ty=0,x=0,y=0,snap=false,sx=0,sy=0;
document.addEventListener("pointermove",e=>{tx=e.clientX;ty=e.clientY});
document.querySelectorAll(".targets button").forEach(b=>{
  b.addEventListener("pointerenter",()=>{const r=b.getBoundingClientRect();sx=r.left+r.width/2;sy=r.top+r.height/2;snap=true;dot.style.width="60px";dot.style.height="34px";dot.style.background="rgba(196,181,253,.25)"});
  b.addEventListener("pointerleave",()=>{snap=false;dot.style.width="10px";dot.style.height="10px";dot.style.background="#c4b5fd"});
});
function tick(){x+=((snap?sx:tx)-x)*.25;y+=((snap?sy:ty)-y)*.25;dot.style.left=x+"px";dot.style.top=y+"px";requestAnimationFrame(tick)}
tick();
</script>
</body></html>`,

  "typing-dots-loader": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Typing Dots Loader</title><style>
:root{--bg:#050507;--line:#272632}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.bubble{display:flex;gap:5px;padding:14px 18px;border:1px solid var(--line);border-radius:16px 16px 16px 4px;background:#111017}
.bubble i{width:7px;height:7px;border-radius:50%;background:#9d94b0;animation:bounce 1.1s infinite ease-in-out}
.bubble i:nth-child(2){animation-delay:.15s}
.bubble i:nth-child(3){animation-delay:.3s}
@keyframes bounce{0%,60%,100%{transform:translateY(0);opacity:.5}30%{transform:translateY(-6px);opacity:1}}
</style></head>
<body><div class="bubble"><i></i><i></i><i></i></div>
</body></html>`,

  "gradient-bar-loader": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Gradient Bar Loader</title><style>
:root{--bg:#050507;--line:#272632}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.stage{display:grid;gap:14px;place-items:center;width:260px}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.bar-track{width:100%;height:5px;border-radius:4px;background:#1c1a24;overflow:hidden}
.bar-sweep{width:40%;height:100%;border-radius:4px;background:linear-gradient(90deg,transparent,#c4b5fd,#9b8aff,transparent);animation:sweep 1.4s infinite ease-in-out}
@keyframes sweep{0%{transform:translateX(-100%)}100%{transform:translateX(350%)}}
</style></head>
<body><div class="stage"><span class="kicker">FETCHING RESULTS…</span><div class="bar-track"><div class="bar-sweep"></div></div></div>
</body></html>`,

  "crosshair-cursor": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Crosshair Cursor</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;background:var(--bg);font-family:ui-monospace,Menlo,monospace;cursor:none;overflow:hidden}
.h-line,.v-line{position:fixed;background:rgba(196,181,253,.35);pointer-events:none;z-index:9}
.h-line{left:0;right:0;height:1px}
.v-line{top:0;bottom:0;width:1px}
.coords{position:fixed;padding:4px 7px;border:1px solid var(--line);border-radius:6px;background:#111017;color:#c4b5fd;font-size:10px;pointer-events:none;z-index:10;transform:translate(12px,12px)}
.kicker{position:absolute;top:20px;left:20px;color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
</style></head>
<body><span class="kicker">MOVE AROUND THE CANVAS</span>
<div class="h-line" id="h"></div><div class="v-line" id="v"></div><div class="coords" id="c">0, 0</div>
<script>
const h=document.getElementById("h"),v=document.getElementById("v"),c=document.getElementById("c");
document.addEventListener("pointermove",e=>{h.style.top=e.clientY+"px";v.style.left=e.clientX+"px";c.style.left=e.clientX+"px";c.style.top=e.clientY+"px";c.textContent=Math.round(e.clientX)+", "+Math.round(e.clientY)});
</script>
</body></html>`,

  "content-placeholder-loader": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Content Placeholder Loader</title><style>
:root{--bg:#050507;--line:#272632}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.card{width:280px;padding:18px;border:1px solid var(--line);border-radius:14px;background:#0d0d12;display:flex;gap:12px}
.shimmer{background:linear-gradient(90deg,#151319 25%,#201c2b 50%,#151319 75%);background-size:200% 100%;animation:shimmer 1.4s infinite linear;border-radius:6px}
.avatar{width:38px;height:38px;border-radius:50%;flex:none}
.lines{flex:1;display:grid;gap:8px;align-content:center}
.line{height:8px}
.line.short{width:60%}
@keyframes shimmer{from{background-position:200% 0}to{background-position:-200% 0}}
</style></head>
<body><div class="card"><div class="shimmer avatar"></div><div class="lines"><div class="shimmer line"></div><div class="shimmer line short"></div></div></div>
</body></html>`,

  "loading-percentage-counter": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Loading Percentage Counter</title><style>
:root{--bg:#050507}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:"Space Grotesk",Inter,sans-serif}
.wrap{text-align:center}
.pct{font-size:64px;font-weight:800;color:#f7f5fb;letter-spacing:-.03em}
.kicker{display:block;color:#817d8a;font-size:10px;letter-spacing:2px;margin-top:6px}
.line-track{width:220px;height:2px;margin:22px auto 0;background:#1c1a24}
.line-fill{height:100%;width:0;background:#c4b5fd}
</style></head>
<body><div class="wrap"><div class="pct" id="pct">0%</div><span class="kicker">LOADING EXPERIENCE</span><div class="line-track"><div class="line-fill" id="fill"></div></div></div>
<script>
let v=0;const pct=document.getElementById("pct"),fill=document.getElementById("fill");
const t=setInterval(()=>{v=Math.min(100,v+Math.random()*7);pct.textContent=Math.round(v)+"%";fill.style.width=v+"%";if(v>=100)clearInterval(t)},130);
</script>
</body></html>`,

  "stacked-card-deck": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Stacked Card Deck</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.deck{position:relative;width:220px;height:150px}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700;display:block;text-align:center;margin-bottom:16px}
.card{position:absolute;inset:0;border:1px solid var(--line);border-radius:16px;background:linear-gradient(135deg,#161420,#0d0d12);display:grid;place-items:center;color:#eee9f8;font-size:12px;font-weight:700;cursor:grab;transition:transform .3s ease,opacity .3s ease}
</style></head>
<body><div><span class="kicker">DRAG THE TOP CARD AWAY</span><div class="deck" id="deck">
<div class="card" style="transform:translateY(10px) scale(.95)">Card 3</div>
<div class="card" style="transform:translateY(5px) scale(.98)">Card 2</div>
<div class="card" id="top">Card 1 — drag me</div>
</div></div>
<script>
const deck=document.getElementById("deck");
function attach(){
  const top=deck.querySelector(".card:last-child");
  let down=false,sx=0,dx=0;
  top.addEventListener("pointerdown",e=>{down=true;sx=e.clientX;top.style.transition="none"});
  window.addEventListener("pointermove",e=>{if(!down)return;dx=e.clientX-sx;top.style.transform=\`translateX(\${dx}px) rotate(\${dx/12}deg)\`});
  window.addEventListener("pointerup",()=>{
    if(!down)return;down=false;top.style.transition="transform .3s ease, opacity .3s ease";
    if(Math.abs(dx)>90){top.style.transform=\`translateX(\${dx*4}px) rotate(\${dx/6}deg)\`;top.style.opacity="0";setTimeout(()=>{top.remove();if(deck.children.length)attach()},280)}
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
.toast{position:relative;width:290px;padding:14px 16px;border:1px solid var(--line);border-radius:14px;background:#111017;overflow:hidden}
.toast-row{display:flex;justify-content:space-between;align-items:center;gap:10px}
.toast-row b{color:#f7f5fb;font-size:12px}
.toast-row button{border:0;background:none;color:#817d8a;font-size:11px;cursor:pointer}
.toast p{margin:6px 0 10px;color:#a49dbc;font-size:11px}
.toast-bar{position:absolute;left:0;bottom:0;height:3px;background:#c4b5fd;width:100%;animation:drain 4s linear forwards}
@keyframes drain{to{width:0%}}
</style></head>
<body><div class="toast"><div class="toast-row"><b>File deleted</b><button id="undo">Undo</button></div><p>project-plan.pdf was moved to trash.</p><div class="toast-bar" id="bar"></div></div>
<script>document.getElementById("undo").addEventListener("click",()=>{const bar=document.getElementById("bar");bar.style.animation="none";bar.style.width="100%"});</script>
</body></html>`,

  "pinned-metric-card": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Pinned Metric Card</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.card{width:230px;padding:20px;border:1px solid var(--line);border-radius:16px;background:#0d0d12}
.card b{display:block;color:#817d8a;font-size:10px;letter-spacing:1px}
.card strong{display:block;font-size:30px;color:#f7f5fb;margin:8px 0}
svg{display:block}
polyline{fill:none;stroke:#c4b5fd;stroke-width:2}
</style></head>
<body><div class="card"><b>WEEKLY ACTIVE USERS</b><strong id="num">0</strong>
<svg width="190" height="40" viewBox="0 0 190 40"><polyline points="0,30 25,24 50,28 75,14 100,18 125,8 150,12 175,3"/></svg></div>
<script>
let v=0;const num=document.getElementById("num");
const t=setInterval(()=>{v+=310;num.textContent=v.toLocaleString();if(v>=18400){v=18400;num.textContent=v.toLocaleString();clearInterval(t)}},25);
</script>
</body></html>`,

  "credit-card-3d": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Credit Card 3D</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:"Space Grotesk",Inter,sans-serif;perspective:900px}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700;display:block;text-align:center;margin-bottom:16px}
.card3d{position:relative;width:280px;height:175px;cursor:pointer;transform-style:preserve-3d;transition:transform .6s cubic-bezier(.2,.8,.2,1)}
.card3d.flip{transform:rotateY(180deg)}
.face{position:absolute;inset:0;border-radius:16px;backface-visibility:hidden;padding:20px;color:#fff}
.front{background:linear-gradient(135deg,#3c3560,#171325);display:flex;flex-direction:column;justify-content:space-between}
.front b{font-size:15px;letter-spacing:2px}
.front span{font-size:9px;color:#a49dbc}
.back{background:linear-gradient(135deg,#171325,#3c3560);transform:rotateY(180deg)}
.stripe{height:34px;background:#0a090f;margin-top:16px}
.cvv{margin:16px;padding:8px 10px;background:#fff;color:#111;font-size:11px;border-radius:4px;text-align:right}
</style></head>
<body><div><span class="kicker">CLICK THE CARD TO FLIP</span>
<div class="card3d" id="card"><div class="face front"><b>•••• •••• •••• 4821</b><span>VALID THRU 09/28</span></div><div class="face back"><div class="stripe"></div><div class="cvv">CVV 042</div></div></div></div>
<script>document.getElementById("card").addEventListener("click",e=>e.currentTarget.classList.toggle("flip"));</script>
</body></html>`,

  "timeline-milestone-card": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Timeline Milestone Card</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.card{width:260px;padding:20px;border:1px solid var(--line);border-radius:16px;background:#0d0d12}
.card b{display:block;color:#f7f5fb;font-size:13px;margin-bottom:14px}
.step{display:flex;gap:10px;align-items:flex-start;position:relative;padding-bottom:16px}
.step:last-child{padding-bottom:0}
.step::before{content:"";position:absolute;left:8px;top:20px;bottom:-4px;width:1px;background:var(--line)}
.step:last-child::before{display:none}
.dot{width:17px;height:17px;border-radius:50%;border:1px solid var(--line);display:grid;place-items:center;flex:none;font-size:9px;color:#050507;background:#1c1a24}
.step.done .dot{background:#5fd4a1;color:#0a090f}
.step span{font-size:11px;color:#c9c4d6;padding-top:1px}
</style></head>
<body><div class="card"><b>Onboarding progress</b>
<div class="step done"><div class="dot">✓</div><span>Account created</span></div>
<div class="step done"><div class="dot">✓</div><span>Workspace connected</span></div>
<div class="step"><div class="dot">3</div><span>Invite your team</span></div>
</div>
</body></html>`,

  "sliding-price-ladder": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Sliding Price Ladder</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.stage{width:280px}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700;display:block;margin-bottom:14px}
.ladder{border:1px solid var(--line);border-radius:16px;background:#0d0d12;padding:22px;text-align:center}
.ladder strong{display:block;font-size:32px;color:#f7f5fb}
.ladder b{display:block;color:#817d8a;font-size:11px;margin-top:4px}
input[type=range]{width:100%;margin-top:18px;accent-color:#c4b5fd}
.steps{display:flex;justify-content:space-between;color:#5f5c68;font-size:9px;margin-top:6px}
</style></head>
<body><div class="stage"><span class="kicker">DRAG BETWEEN TIERS</span>
<div class="ladder"><strong id="price">$19</strong><b id="tier">STARTER</b>
<input type="range" id="slider" min="0" max="2" step="1" value="0">
<div class="steps"><span>Starter</span><span>Growth</span><span>Scale</span></div></div></div>
<script>
const tiers=[{p:"$19",t:"STARTER"},{p:"$49",t:"GROWTH"},{p:"$99",t:"SCALE"}];
const slider=document.getElementById("slider"),price=document.getElementById("price"),tier=document.getElementById("tier");
slider.addEventListener("input",()=>{const x=tiers[Number(slider.value)];price.textContent=x.p;tier.textContent=x.t});
</script>
</body></html>`,

  "feature-checklist-pricing-card": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Feature Checklist Pricing Card</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.card{width:250px;padding:22px;border:1px solid var(--line);border-radius:16px;background:#0d0d12}
.card b{display:block;font-size:11px;color:#817d8a}
.card strong{display:block;font-size:28px;color:#f7f5fb;margin:6px 0 14px}
.feat{display:flex;align-items:center;gap:8px;padding:7px 0;color:#c9c4d6;font-size:11px;position:relative}
.feat i{width:15px;height:15px;border-radius:50%;background:#1c1a24;display:grid;place-items:center;font-size:8px;color:#5fd4a1;flex:none;font-style:normal}
.tip{display:none;position:absolute;left:24px;top:26px;padding:6px 8px;border:1px solid var(--line);border-radius:7px;background:#17131f;color:#a49dbc;font-size:9px;z-index:2;width:170px}
.feat:hover .tip{display:block}
</style></head>
<body><div class="card"><b>PRO PLAN</b><strong>$29/mo</strong>
<div class="feat"><i>✓</i>Unlimited projects<div class="tip">No cap on active or archived projects.</div></div>
<div class="feat"><i>✓</i>Priority support<div class="tip">Average first response under 2 hours.</div></div>
<div class="feat"><i>✓</i>Advanced analytics<div class="tip">Cohort, funnel and retention reports included.</div></div>
</div>
</body></html>`,

  "team-seats-pricing-calculator": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Team Seats Pricing Calculator</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.card{width:250px;padding:22px;border:1px solid var(--line);border-radius:16px;background:#0d0d12;text-align:center}
.card b{display:block;color:#817d8a;font-size:11px;margin-bottom:10px}
.stepper{display:flex;align-items:center;justify-content:center;gap:14px}
.stepper button{width:32px;height:32px;border:1px solid var(--line);border-radius:8px;background:#111017;color:#eee9f8;font-size:16px;cursor:pointer}
.stepper strong{font-size:20px;color:#f7f5fb;min-width:30px}
.total{margin-top:16px;font-size:26px;font-weight:800;color:#c4b5fd}
.per{color:#5f5c68;font-size:10px}
</style></head>
<body><div class="card"><b>TEAM SEATS</b>
<div class="stepper"><button id="dec">−</button><strong id="seats">5</strong><button id="inc">+</button></div>
<div class="total" id="total">$60</div><div class="per">$12 / seat / month</div></div>
<script>
let n=5;const seats=document.getElementById("seats"),total=document.getElementById("total");
function render(){seats.textContent=n;total.textContent="$"+(n*12)}
document.getElementById("inc").addEventListener("click",()=>{n=Math.min(50,n+1);render()});
document.getElementById("dec").addEventListener("click",()=>{n=Math.max(1,n-1);render()});
</script>
</body></html>`,

  "limited-time-pricing-card": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Limited Time Pricing Card</title><style>
:root{--bg:#050507;--line:#272632}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.card{width:250px;padding:22px;border:1px solid #4c3f2a;border-radius:16px;background:#181307}
.badge{display:inline-block;padding:4px 9px;border-radius:999px;background:#3a2c10;color:#f0c674;font-size:9px;font-weight:700}
.card strong{display:block;font-size:30px;color:#fff;margin:10px 0 4px}
.card s{color:#7a7466;font-size:12px}
.urgency-track{height:4px;border-radius:3px;background:#2a2313;margin-top:16px;overflow:hidden}
.urgency-fill{height:100%;width:70%;background:#f0c674;animation:shrink 25s linear forwards}
@keyframes shrink{to{width:0%}}
.card small{display:block;margin-top:8px;color:#9c9482;font-size:9px}
</style></head>
<body><div class="card"><span class="badge">LAUNCH WEEK OFFER</span><strong>$39<s style="margin-left:8px">$79</s></strong>
<div class="urgency-track"><div class="urgency-fill"></div></div><small>Offer window closing</small></div>
</body></html>`,

  "enterprise-contact-pricing-card": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Enterprise Contact Pricing Card</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.card{width:270px;padding:22px;border:1px solid var(--line);border-radius:16px;background:#0d0d12}
.card b{display:block;color:#817d8a;font-size:11px}
.card strong{display:block;font-size:22px;color:#f7f5fb;margin:8px 0 14px}
.card button{width:100%;padding:11px;border:1px solid var(--line);border-radius:10px;background:#111017;color:#eee9f8;font-size:11px;cursor:pointer}
.quote-form{max-height:0;overflow:hidden;transition:max-height .3s ease}
.quote-form.open{max-height:120px;margin-top:12px}
.quote-form input{width:100%;padding:9px;margin-top:8px;border:1px solid var(--line);border-radius:8px;background:#111017;color:#fff;font-size:11px;outline:0}
</style></head>
<body><div class="card"><b>ENTERPRISE</b><strong>Custom pricing</strong>
<button id="toggle">Request a quote</button>
<div class="quote-form" id="form"><input placeholder="Work email"><input placeholder="Team size"></div></div>
<script>document.getElementById("toggle").addEventListener("click",()=>document.getElementById("form").classList.toggle("open"));</script>
</body></html>`,

  "addon-bundle-pricing-card": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Add-on Bundle Pricing Card</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.card{width:260px;padding:22px;border:1px solid var(--line);border-radius:16px;background:#0d0d12}
.card b{display:block;color:#817d8a;font-size:11px;margin-bottom:8px}
.addon{display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-top:1px solid var(--line);color:#c9c4d6;font-size:11px}
.addon:first-of-type{border-top:0}
.addon input{accent-color:#c4b5fd}
.total{display:flex;justify-content:space-between;margin-top:14px;padding-top:14px;border-top:1px solid var(--line);font-size:16px;font-weight:800;color:#f7f5fb}
</style></head>
<body><div class="card"><b>BASE PLAN — $19/mo</b>
<label class="addon"><span>+ Extra storage ($5)</span><input type="checkbox" data-p="5"></label>
<label class="addon"><span>+ Advanced API access ($9)</span><input type="checkbox" data-p="9"></label>
<label class="addon"><span>+ Priority support ($7)</span><input type="checkbox" data-p="7"></label>
<div class="total"><span>Total</span><span id="total">$19</span></div></div>
<script>
const boxes=[...document.querySelectorAll(".addon input")],total=document.getElementById("total");
boxes.forEach(b=>b.addEventListener("change",()=>{const sum=19+boxes.filter(x=>x.checked).reduce((s,x)=>s+Number(x.dataset.p),0);total.textContent="$"+sum}));
</script>
</body></html>`,

  "drag-reorder-widgets": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Drag Reorder Widgets</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;display:grid;place-items:center}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700;display:block;text-align:center;margin-bottom:14px}
.widgets{display:grid;gap:10px;width:240px}
.w{padding:14px;border:1px solid var(--line);border-radius:12px;background:#111017;color:#eee9f8;font-size:11px;display:flex;justify-content:space-between;cursor:grab}
.w.drag{opacity:.4}
.w b{color:#c4b5fd}
</style></head>
<body><div><span class="kicker">DRAG A ROW TO REORDER</span>
<div class="widgets" id="list">
<div class="w" draggable="true"><span>Revenue</span><b>$48.4K</b></div>
<div class="w" draggable="true"><span>Conversion</span><b>8.7%</b></div>
<div class="w" draggable="true"><span>Active users</span><b>12.8K</b></div>
</div></div>
<script>
const list=document.getElementById("list");let dragged;
list.addEventListener("dragstart",e=>{dragged=e.target;e.target.classList.add("drag")});
list.addEventListener("dragend",e=>e.target.classList.remove("drag"));
list.addEventListener("dragover",e=>{
  e.preventDefault();
  const after=[...list.children].find(el=>el!==dragged&&e.clientY<el.getBoundingClientRect().top+el.offsetHeight/2);
  list.insertBefore(dragged, after||null);
});
</script>
</body></html>`,

  "team-members-status-panel": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Team Members Status Panel</title><style>
:root{--bg:#050507;--line:#272632}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.panel{width:250px;border:1px solid var(--line);border-radius:14px;background:#0d0d12;overflow:hidden}
.panel h4{margin:0;padding:12px 14px;font-size:10px;color:#817d8a;border-bottom:1px solid var(--line)}
.member{display:flex;align-items:center;gap:10px;padding:10px 14px;border-bottom:1px solid var(--line)}
.member:last-child{border-bottom:0}
.avatar{position:relative;width:30px;height:30px;border-radius:50%;background:#241d33;display:grid;place-items:center;color:#c4b5fd;font-size:10px;font-weight:800;flex:none}
.dot{position:absolute;right:-1px;bottom:-1px;width:9px;height:9px;border-radius:50%;border:2px solid #0d0d12}
.dot.online{background:#5fd4a1}.dot.away{background:#e8b563}.dot.offline{background:#4a4657}
.member div b{display:block;font-size:11px;color:#eee9f8}
.member div span{font-size:9px;color:#6f6c77}
</style></head>
<body><div class="panel"><h4>TEAM</h4>
<div class="member"><div class="avatar">AK<span class="dot online"></span></div><div><b>Aria Kim</b><span>Active now</span></div></div>
<div class="member"><div class="avatar">TR<span class="dot away"></span></div><div><b>Theo Reyes</b><span>Away · 12m</span></div></div>
<div class="member"><div class="avatar">NS<span class="dot offline"></span></div><div><b>Nia Santos</b><span>Offline</span></div></div>
</div>
</body></html>`,

  "goal-progress-tracker": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Goal Progress Tracker</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.card{width:250px;padding:20px;border:1px solid var(--line);border-radius:16px;background:#0d0d12}
.card h4{margin:0 0 14px;font-size:11px;color:#817d8a}
.goal{margin-bottom:12px}
.goal:last-child{margin-bottom:0}
.goal-row{display:flex;justify-content:space-between;font-size:10px;color:#c9c4d6;margin-bottom:5px}
.track{height:6px;border-radius:4px;background:#1c1a24;overflow:hidden}
.fill{height:100%;border-radius:4px;background:linear-gradient(90deg,#9b8aff,#c4b5fd);width:0;transition:width 1s ease}
</style></head>
<body><div class="card"><h4>QUARTERLY GOALS</h4>
<div class="goal"><div class="goal-row"><span>New signups</span><span>82%</span></div><div class="track"><div class="fill" data-w="82"></div></div></div>
<div class="goal"><div class="goal-row"><span>Revenue target</span><span>61%</span></div><div class="track"><div class="fill" data-w="61"></div></div></div>
<div class="goal"><div class="goal-row"><span>Churn reduction</span><span>45%</span></div><div class="track"><div class="fill" data-w="45"></div></div></div>
</div>
<script>requestAnimationFrame(()=>document.querySelectorAll(".fill").forEach(f=>f.style.width=f.dataset.w+"%"));</script>
</body></html>`,

  "calendar-heatmap-widget": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Calendar Heatmap Widget</title><style>
:root{--bg:#050507;--line:#272632}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.card{padding:20px;border:1px solid var(--line);border-radius:14px;background:#0d0d12}
.card h4{margin:0 0 12px;font-size:11px;color:#817d8a}
.grid{display:grid;grid-template-columns:repeat(13,10px);gap:3px;position:relative}
.cell{width:10px;height:10px;border-radius:2px;background:#17131f}
.cell[data-l="1"]{background:#2c2440}
.cell[data-l="2"]{background:#463584}
.cell[data-l="3"]{background:#6d55c9}
.cell[data-l="4"]{background:#a58bff}
.tip{position:absolute;display:none;padding:5px 7px;border-radius:6px;background:#17131f;border:1px solid var(--line);color:#eee9f8;font-size:9px;transform:translate(-50%,-130%);white-space:nowrap}
</style></head>
<body><div class="card"><h4>CONTRIBUTION ACTIVITY</h4><div class="grid" id="grid"></div><div class="tip" id="tip"></div></div>
<script>
const grid=document.getElementById("grid"),tip=document.getElementById("tip");
for(let i=0;i<65;i++){
  const cell=document.createElement("div");cell.className="cell";
  const level=Math.floor(Math.random()*5);cell.dataset.l=level;
  cell.addEventListener("pointerenter",e=>{tip.style.display="block";tip.style.left=cell.offsetLeft+5+"px";tip.style.top=cell.offsetTop+"px";tip.textContent=level+" commits"});
  cell.addEventListener("pointerleave",()=>tip.style.display="none");
  grid.appendChild(cell);
}
</script>
</body></html>`,

  "revenue-comparison-widget": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Revenue Comparison Widget</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.card{width:250px;padding:20px;border:1px solid var(--line);border-radius:16px;background:#0d0d12}
.head{display:flex;justify-content:space-between;align-items:center;margin-bottom:14px}
.head b{color:#817d8a;font-size:11px}
.delta{padding:3px 8px;border-radius:999px;background:#0f1a12;color:#a9e6b4;font-size:9px;font-weight:700}
.bars{display:flex;align-items:end;gap:24px;height:80px;padding:0 10px}
.bar-col{display:grid;gap:6px;justify-items:center}
.bar-col i{width:34px;border-radius:6px 6px 0 0;display:block}
.bar-col .last{background:#2c2440}
.bar-col .this{background:linear-gradient(180deg,#c4b5fd,#9b8aff)}
.bar-col span{font-size:9px;color:#6f6c77}
</style></head>
<body><div class="card"><div class="head"><b>REVENUE, MONTH OVER MONTH</b><span class="delta">+24%</span></div>
<div class="bars">
<div class="bar-col"><i class="last" style="height:46px"></i><span>Aug</span></div>
<div class="bar-col"><i class="this" style="height:70px"></i><span>Sep</span></div>
</div></div>
</body></html>`,

  "quick-actions-command-bar": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Quick Actions Command Bar</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.bar{display:flex;align-items:center;gap:6px;padding:8px;border:1px solid var(--line);border-radius:12px;background:#0d0d12;position:relative}
.bar button{width:34px;height:34px;display:grid;place-items:center;border:0;border-radius:8px;background:#111017;color:#9d94b0;font-size:13px;cursor:pointer}
.bar button:hover{color:#fff;background:#17131f}
.bar input{border:0;background:transparent;color:#fff;font-size:11px;outline:0;padding:0 6px;width:120px}
.results{position:absolute;top:48px;left:0;right:0;border:1px solid var(--line);border-radius:10px;background:#0d0d12;display:none;overflow:hidden}
.bar.active .results{display:block}
.results div{padding:9px 12px;font-size:11px;color:#c9c4d6}
.results div:hover{background:#17131f;color:var(--lav)}
</style></head>
<body><div class="bar" id="bar"><button title="New">+</button><button title="Filter">⚲</button><input id="q" placeholder="Quick action…">
<div class="results"><div>Create report</div><div>Invite teammate</div><div>Export CSV</div></div></div>
<script>
const bar=document.getElementById("bar"),q=document.getElementById("q");
q.addEventListener("focus",()=>bar.classList.add("active"));
q.addEventListener("blur",()=>setTimeout(()=>bar.classList.remove("active"),150));
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
<body><div class="hero" id="hero"><span class="kicker">TILT-REACTIVE INTERFACE</span><h1>Depth that responds to you.</h1><div class="card"><span>Move your cursor to feel the layers shift.</span></div></div>
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
.word{display:inline-block;color:#f7f5fb;font-size:38px;font-weight:800;transition:transform .1s linear,opacity .1s linear}
</style></head>
<body><div class="hero"><div id="line">
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
.frame{width:min(460px,100%);border:1px solid var(--line);border-radius:18px;overflow:hidden;background:linear-gradient(135deg,#191527,#0a0a0f)}
.screen{height:230px;position:relative;display:grid;place-items:center}
.play{width:56px;height:56px;border-radius:50%;background:rgba(255,255,255,.92);display:grid;place-items:center;cursor:pointer;color:#0a090f;font-size:16px}
.controls{display:flex;align-items:center;gap:10px;padding:12px 16px;border-top:1px solid var(--line)}
.scrub{flex:1;height:3px;border-radius:2px;background:#252230}
.scrub i{display:block;width:34%;height:100%;background:#c4b5fd;border-radius:2px}
.time{color:#77737f;font-size:9px}
</style></head>
<body><div class="frame"><div class="screen"><span class="play">▶</span></div><div class="controls"><div class="scrub"><i></i></div><span class="time">1:12 / 3:20</span></div></div>
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
<body><span class="kicker">HOVER TO PAUSE</span>
<div class="cube-wrap"><div class="face f1">Design</div><div class="face f2">Build</div><div class="face f3">Test</div><div class="face f4">Ship</div></div>
</body></html>`,

  "chat-bubble-hero": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Chat Bubble Hero</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;display:grid;place-items:center;padding:30px}
.thread{width:min(360px,100%);display:grid;gap:10px}
.bubble{max-width:80%;padding:11px 14px;border-radius:16px;font-size:12px;line-height:1.5;opacity:0;transform:translateY(8px);animation:in .4s forwards}
.them{background:#17131f;color:#eee9f8;border-bottom-left-radius:4px;justify-self:start}
.me{background:linear-gradient(135deg,#9b8aff,#7c6cf0);color:#0a090f;border-bottom-right-radius:4px;justify-self:end}
@keyframes in{to{opacity:1;transform:none}}
</style></head>
<body><div class="thread" id="thread"></div>
<script>
const msgs=[{t:"them",m:"Hey — can this actually ship by Friday?"},{t:"me",m:"Already in staging."},{t:"them",m:"That's the fastest launch we've had."}];
const thread=document.getElementById("thread");
msgs.forEach((x,i)=>{setTimeout(()=>{const d=document.createElement("div");d.className="bubble "+x.t;d.textContent=x.m;thread.appendChild(d)},i*550)});
</script>
</body></html>`,

  "map-pin-hero": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Map Pin Hero</title><style>
:root{--bg:#050507}
*{box-sizing:border-box}body{margin:0;min-height:100vh;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;display:grid;place-items:center;overflow:hidden}
.map{position:relative;width:320px;height:220px}
.pin{position:absolute;width:12px;height:12px;border-radius:50%;background:#c4b5fd;box-shadow:0 0 0 0 rgba(196,181,253,.5);animation:pulse 2s infinite}
.pin::after{content:"";position:absolute;inset:-4px;border-radius:50%;border:1px solid rgba(196,181,253,.4)}
@keyframes pulse{0%{box-shadow:0 0 0 0 rgba(196,181,253,.5)}70%{box-shadow:0 0 0 14px rgba(196,181,253,0)}100%{box-shadow:0 0 0 0 rgba(196,181,253,0)}}
.route{position:absolute;stroke:#3a3546;stroke-width:1.5;stroke-dasharray:4 4;fill:none}
.kicker{position:absolute;top:-30px;left:0;color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
</style></head>
<body><div class="map"><span class="kicker">3 DESTINATIONS PLOTTED</span>
<svg class="route" width="320" height="220"><path d="M30,180 Q120,40 180,90 T290,40"/></svg>
<div class="pin" style="left:26px;top:176px"></div><div class="pin" style="left:176px;top:86px"></div><div class="pin" style="left:286px;top:36px"></div>
</div>
</body></html>`,

  "social-proof-wall": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Social Proof Wall</title><style>
:root{--bg:#050507;--line:#272632}
*{box-sizing:border-box}body{margin:0;height:100vh;overflow:hidden;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;display:grid;place-items:center}
.wall{display:flex;gap:14px;width:340px;height:260px;overflow:hidden;mask-image:linear-gradient(to bottom,transparent,#000 15%,#000 85%,transparent)}
.col{display:grid;gap:10px;animation:scroll 14s linear infinite}
.col.down{animation-direction:reverse}
.note{padding:10px 12px;border:1px solid var(--line);border-radius:10px;background:#111017;color:#c9c4d6;font-size:10px;line-height:1.5}
@keyframes scroll{from{transform:translateY(0)}to{transform:translateY(-50%)}}
</style></head>
<body><div class="wall">
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
.card{width:280px;padding:18px;border:1px solid var(--line);border-radius:14px;background:#0d0d12}
.card b{color:#f7f5fb;font-size:12px}
.card p{color:#a49dbc;font-size:11px;line-height:1.7;margin:8px 0;overflow:hidden;max-height:38px;transition:max-height .3s ease}
.card p.open{max-height:200px}
.more{border:0;background:none;color:#c4b5fd;font-size:10px;cursor:pointer;padding:0}
.votes{display:flex;gap:10px;margin-top:12px}
.votes button{border:1px solid var(--line);border-radius:7px;background:#111017;color:#817d8a;font-size:10px;padding:6px 9px;cursor:pointer}
</style></head>
<body><div class="card"><b>Priya M. ★★★★★</b>
<p id="text">The onboarding alone saved us two weeks of internal debate. Every component slots into our existing design tokens without a fight, and the copy-prompt feature meant our junior devs could extend things confidently on day one.</p>
<button class="more" id="more">Read more</button>
<div class="votes"><button id="up">👍 12</button><button id="down">👎 0</button></div></div>
<script>
const text=document.getElementById("text"),more=document.getElementById("more");
more.addEventListener("click",()=>{text.classList.toggle("open");more.textContent=text.classList.contains("open")?"Show less":"Read more"});
document.getElementById("up").addEventListener("click",e=>{e.target.textContent="👍 13"});
</script>
</body></html>`,

  "before-after-results-testimonial": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Before/After Results Testimonial</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.card{width:290px;padding:20px;border:1px solid var(--line);border-radius:16px;background:#0d0d12}
.result{display:flex;align-items:center;justify-content:center;gap:14px;margin-bottom:14px}
.result b{font-size:26px;color:#5f5c68}
.result b.after{color:#5fd4a1}
.result span{color:#5f5c68;font-size:16px}
.card p{color:#c9c4d6;font-size:12px;line-height:1.7;margin:0}
.card small{display:block;margin-top:10px;color:#817d8a;font-size:10px}
</style></head>
<body><div class="card"><div class="result"><b>41%</b><span>→</span><b class="after">89%</b></div>
<p>"Our checkout conversion nearly doubled after we swapped in the pricing and form components — no other changes."</p>
<small>— Marcus Lee, Growth Lead at Fluent</small></div>
</body></html>`,

  "video-call-style-testimonial": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Video Call Style Testimonial</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.wrap{width:290px}
.tiles{display:grid;grid-template-columns:repeat(2,1fr);gap:8px}
.tile{position:relative;height:80px;border-radius:10px;background:#141119;display:grid;place-items:center;color:#eee9f8;font-size:11px;font-weight:700}
.tile.speaking{box-shadow:0 0 0 2px #5fd4a1}
.tile span{position:absolute;bottom:6px;left:8px;font-size:8px;color:#817d8a;font-weight:400}
.quote{margin-top:14px;padding:14px;border:1px solid var(--line);border-radius:12px;background:#0d0d12;color:#c9c4d6;font-size:11px;line-height:1.6}
</style></head>
<body><div class="wrap"><div class="tiles">
<div class="tile speaking">JR<span>Jordan</span></div><div class="tile">SC<span>Sam</span></div>
<div class="tile">LP<span>Lena</span></div><div class="tile">DK<span>Devon</span></div>
</div><div class="quote">"We onboarded the whole team on this library live, on a call — nobody got stuck once."</div></div>
</body></html>`,

  "star-breakdown-reviews": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Star Breakdown Reviews</title><style>
:root{--bg:#050507;--line:#272632}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.card{width:270px;padding:20px;border:1px solid var(--line);border-radius:16px;background:#0d0d12}
.top{display:flex;align-items:center;gap:14px;margin-bottom:14px}
.top strong{font-size:34px;color:#f7f5fb}
.top div span{display:block;color:#e8b563;font-size:12px}
.top div small{color:#6f6c77;font-size:9px}
.row{display:flex;align-items:center;gap:8px;margin-bottom:5px}
.row span{width:12px;font-size:9px;color:#817d8a}
.track{flex:1;height:5px;border-radius:3px;background:#1c1a24;overflow:hidden}
.fill{height:100%;background:#e8b563}
</style></head>
<body><div class="card"><div class="top"><strong>4.9</strong><div><span>★★★★★</span><small>Based on 1,204 reviews</small></div></div>
<div class="row"><span>5</span><div class="track"><div class="fill" style="width:88%"></div></div></div>
<div class="row"><span>4</span><div class="track"><div class="fill" style="width:9%"></div></div></div>
<div class="row"><span>3</span><div class="track"><div class="fill" style="width:2%"></div></div></div>
<div class="row"><span>2</span><div class="track"><div class="fill" style="width:1%"></div></div></div>
<div class="row"><span>1</span><div class="track"><div class="fill" style="width:0%"></div></div></div>
</div>
</body></html>`,

  "case-study-highlight-card": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Case Study Highlight Card</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.card{width:290px;border:1px solid var(--line);border-radius:16px;background:#0d0d12;overflow:hidden}
.tag{padding:14px 18px 0;color:#817d8a;font-size:9px;letter-spacing:1px;display:flex;justify-content:space-between}
.tag b{color:#c4b5fd;font-weight:700}
.card p{padding:12px 18px;margin:0;color:#eee9f8;font-size:13px;line-height:1.6;font-weight:600}
.stat{display:flex;justify-content:space-between;align-items:center;padding:14px 18px;border-top:1px solid var(--line);background:#111017}
.stat strong{color:#5fd4a1;font-size:18px}
.stat span{color:#6f6c77;font-size:9px}
</style></head>
<body><div class="card"><div class="tag"><span>CLIENT: ORBIT LABS</span><b>SaaS</b></div>
<p>"We replaced three vendor tools with CodeFusion's dashboard kit and cut our build timeline in half."</p>
<div class="stat"><strong>+52%</strong><span>faster shipping</span></div></div>
</body></html>`,

  "progress-breadcrumb-nav": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Progress Breadcrumb Nav</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.trail{display:flex;align-items:center}
.step{display:flex;align-items:center;gap:8px;color:#5f5c68;font-size:11px}
.step b{width:22px;height:22px;border-radius:50%;border:1px solid var(--line);display:grid;place-items:center;font-size:10px;color:#817d8a}
.step.done b{background:#5fd4a1;border-color:#5fd4a1;color:#0a090f}
.step.active{color:#f7f5fb}
.step.active b{border-color:var(--lav);color:var(--lav)}
.line{width:36px;height:1px;background:var(--line);margin:0 6px}
.line.done{background:#5fd4a1}
</style></head>
<body><div class="trail">
<div class="step done"><b>✓</b>Cart</div><div class="line done"></div>
<div class="step active"><b>2</b>Shipping</div><div class="line"></div>
<div class="step"><b>3</b>Payment</div>
</div>
</body></html>`,

  "bottom-tab-bar-nav": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Bottom Tab Bar Nav</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:end center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding-bottom:40px}
.tabbar{position:relative;display:flex;width:260px;padding:5px;border:1px solid var(--line);border-radius:16px;background:#0d0d12}
.tabbar button{flex:1;position:relative;z-index:1;border:0;background:none;padding:10px 0;color:#77737f;font-size:9px;cursor:pointer}
.tabbar button.active{color:#0a090f}
.pill{position:absolute;top:5px;bottom:5px;width:calc(33.33% - 4px);border-radius:11px;background:linear-gradient(135deg,#d7d0ff,#9b8aff);transition:left .3s cubic-bezier(.2,.8,.2,1)}
</style></head>
<body><div class="tabbar" id="bar"><div class="pill" id="pill"></div>
<button class="active">Home</button><button>Search</button><button>Profile</button></div>
<script>
const bar=document.getElementById("bar"),pill=document.getElementById("pill"),buttons=[...bar.querySelectorAll("button")];
buttons.forEach((b,i)=>b.addEventListener("click",()=>{buttons.forEach(x=>x.classList.remove("active"));b.classList.add("active");pill.style.left=(5+i*(250/3))+"px"}));
</script>
</body></html>`,

  "vertical-dot-nav": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Vertical Dot Nav</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;height:100vh;display:flex;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.dotnav{display:grid;gap:16px;align-self:center;padding-left:30px}
.dotnav button{width:9px;height:9px;border-radius:50%;border:1px solid #4a4657;background:transparent;cursor:pointer;position:relative}
.dotnav button.active{background:var(--lav);border-color:var(--lav)}
.dotnav button.active::after{content:attr(data-l);position:absolute;left:18px;top:-4px;color:#eee9f8;font-size:10px;white-space:nowrap}
.sections{flex:1;display:grid}
section{height:100vh;display:grid;place-items:center;color:#4a4657;font-size:40px;font-weight:800;scroll-snap-align:start}
.sections{scroll-snap-type:y mandatory;overflow-y:auto}
</style></head>
<body><div class="dotnav" id="dots">
<button class="active" data-l="Intro"></button><button data-l="Features"></button><button data-l="Pricing"></button>
</div>
<div class="sections" id="sections"><section>01</section><section>02</section><section>03</section></div>
<script>
const dots=[...document.querySelectorAll("#dots button")],sections=[...document.querySelectorAll("section")];
dots.forEach((d,i)=>d.addEventListener("click",()=>{dots.forEach(x=>x.classList.remove("active"));d.classList.add("active");sections[i].scrollIntoView({behavior:"smooth"})}));
</script>
</body></html>`,

  "search-expand-nav": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Search Expand Nav</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
header{display:flex;justify-content:space-between;align-items:center;padding:16px 22px;border-bottom:1px solid var(--line)}
header b{color:#f7f5fb;font-size:13px}
nav{display:flex;gap:18px;color:#817d8a;font-size:11px;align-items:center}
.search-btn{width:34px;height:34px;border:1px solid var(--line);border-radius:9px;background:#111017;color:#9d94b0;cursor:pointer;transition:width .3s ease}
.search-wrap{position:relative;display:flex;align-items:center}
.search-wrap input{position:absolute;right:0;width:0;opacity:0;padding:0;border:1px solid var(--line);border-radius:9px;background:#111017;color:#fff;font-size:11px;height:34px;transition:width .3s ease,opacity .2s ease,padding .3s ease}
.search-wrap.open input{width:180px;opacity:1;padding:0 12px;right:0}
.search-wrap.open .search-btn{opacity:0;pointer-events:none}
</style></head>
<body><header><b>CodeFusion</b><nav><span>Products</span><span>Docs</span>
<div class="search-wrap" id="wrap"><input id="input" placeholder="Search…"><button class="search-btn" id="btn">⚲</button></div>
</nav></header>
<script>
const wrap=document.getElementById("wrap"),btn=document.getElementById("btn"),input=document.getElementById("input");
btn.addEventListener("click",()=>{wrap.classList.add("open");input.focus()});
input.addEventListener("blur",()=>{if(!input.value)wrap.classList.remove("open")});
</script>
</body></html>`,

  "icon-rail-nav": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Icon Rail Nav</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;height:100vh;display:flex;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.rail{width:56px;border-right:1px solid var(--line);display:grid;align-content:start;gap:4px;padding:14px 8px;transition:width .25s ease;overflow:hidden}
.rail:hover{width:150px}
.rail a{display:flex;align-items:center;gap:12px;padding:10px;border-radius:9px;color:#817d8a;font-size:11px;white-space:nowrap;text-decoration:none}
.rail a:hover{background:#111017;color:#eee9f8}
.rail a i{width:18px;height:18px;flex:none;border-radius:5px;background:#1c1a24;display:grid;place-items:center;font-style:normal;color:var(--lav);font-size:10px}
.rail a.active{color:var(--lav);background:#171420}
</style></head>
<body><div class="rail"><a class="active"><i>◧</i>Dashboard</a><a><i>◨</i>Projects</a><a><i>◩</i>Reports</a><a><i>◪</i>Settings</a></div>
</body></html>`,

  "pagination-nav": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Pagination Nav</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.pager{position:relative;display:flex;gap:4px;padding:4px;border:1px solid var(--line);border-radius:12px;background:#0d0d12}
.pager button{position:relative;z-index:1;width:32px;height:32px;border:0;background:none;color:#817d8a;font-size:11px;cursor:pointer;border-radius:8px}
.pager button.active{color:#0a090f}
.pill{position:absolute;top:4px;left:4px;width:32px;height:32px;border-radius:8px;background:linear-gradient(135deg,#d7d0ff,#9b8aff);transition:left .25s ease}
</style></head>
<body><div class="pager" id="pager"><div class="pill" id="pill"></div>
<button>‹</button><button class="active">1</button><button>2</button><button>3</button><button>4</button><button>›</button></div>
<script>
const pager=document.getElementById("pager"),pill=document.getElementById("pill"),buttons=[...pager.querySelectorAll("button")].slice(1,5);
buttons.forEach(b=>b.addEventListener("click",()=>{buttons.forEach(x=>x.classList.remove("active"));b.classList.add("active");pill.style.left=b.offsetLeft+"px"}));
</script>
</body></html>`,

  "rating-feedback-form": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Rating Feedback Form</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.card{width:280px;padding:20px;border:1px solid var(--line);border-radius:16px;background:#0d0d12}
.card b{display:block;color:#eee9f8;font-size:13px;margin-bottom:12px}
.stars{display:flex;gap:6px;font-size:24px}
.stars span{color:#2a2833;cursor:pointer}
.stars span.on{color:#e8b563}
.note{max-height:0;overflow:hidden;transition:max-height .3s ease}
.note.open{max-height:100px;margin-top:12px}
.note textarea{width:100%;padding:9px;border:1px solid var(--line);border-radius:8px;background:#111017;color:#fff;font-size:11px;resize:none;height:60px;outline:0}
</style></head>
<body><div class="card"><b>How was your experience?</b>
<div class="stars" id="stars"><span data-v="1">★</span><span data-v="2">★</span><span data-v="3">★</span><span data-v="4">★</span><span data-v="5">★</span></div>
<div class="note" id="note"><textarea placeholder="Tell us more (optional)"></textarea></div></div>
<script>
const stars=[...document.querySelectorAll("#stars span")],note=document.getElementById("note");
stars.forEach(s=>s.addEventListener("click",()=>{const v=Number(s.dataset.v);stars.forEach(x=>x.classList.toggle("on",Number(x.dataset.v)<=v));note.classList.add("open")}));
</script>
</body></html>`,

  "range-slider-form": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Range Slider Form</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.card{width:270px;padding:20px;border:1px solid var(--line);border-radius:16px;background:#0d0d12}
.card b{display:block;color:#817d8a;font-size:11px;margin-bottom:14px}
.range-wrap{position:relative;height:4px;background:#1c1a24;border-radius:2px;margin:20px 6px}
.range-fill{position:absolute;height:100%;background:#c4b5fd;border-radius:2px}
input[type=range]{position:absolute;top:-8px;width:100%;background:transparent;pointer-events:none;-webkit-appearance:none;margin:0}
input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;pointer-events:auto;width:16px;height:16px;border-radius:50%;background:#f7f5fb;cursor:pointer}
.values{display:flex;justify-content:space-between;color:#eee9f8;font-size:12px;font-weight:700}
</style></head>
<body><div class="card"><b>MONTHLY BUDGET RANGE</b>
<div class="values"><span id="minv">$20</span><span id="maxv">$80</span></div>
<div class="range-wrap"><div class="range-fill" id="fill"></div><input type="range" id="min" min="0" max="100" value="20"><input type="range" id="max" min="0" max="100" value="80"></div></div>
<script>
const min=document.getElementById("min"),max=document.getElementById("max"),fill=document.getElementById("fill"),minv=document.getElementById("minv"),maxv=document.getElementById("maxv");
function render(){let a=Number(min.value),b=Number(max.value);if(a>b)[a,b]=[b,a];fill.style.left=a+"%";fill.style.width=(b-a)+"%";minv.textContent="$"+a;maxv.textContent="$"+b}
min.addEventListener("input",render);max.addEventListener("input",render);render();
</script>
</body></html>`,

  "tag-input-form": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Tag Input Form</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.field{width:270px}
.field b{display:block;color:#85818d;font-size:9px;margin-bottom:6px}
.tag-box{display:flex;flex-wrap:wrap;gap:6px;padding:9px;border:1px solid var(--line);border-radius:10px;background:#111017;min-height:44px}
.tag{display:flex;align-items:center;gap:6px;padding:5px 9px;border-radius:999px;background:#1c1730;color:#c4b5fd;font-size:10px}
.tag button{border:0;background:none;color:#8f7fc9;cursor:pointer;font-size:10px}
.tag-box input{flex:1;min-width:80px;border:0;background:transparent;color:#fff;font-size:11px;outline:0}
</style></head>
<body><div class="field"><b>SKILLS (PRESS ENTER)</b>
<div class="tag-box" id="box"><span class="tag">React<button data-t="React">×</button></span><span class="tag">Node<button data-t="Node">×</button></span><input id="input" placeholder="Add a skill…"></div></div>
<script>
const box=document.getElementById("box"),input=document.getElementById("input");
function addTag(t){if(!t.trim())return;const tag=document.createElement("span");tag.className="tag";tag.innerHTML=t+'<button data-t="'+t+'">×</button>';box.insertBefore(tag,input)}
input.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===","){e.preventDefault();addTag(input.value);input.value=""}});
box.addEventListener("click",e=>{if(e.target.tagName==="BUTTON")e.target.parentElement.remove()});
</script>
</body></html>`,

  "signature-pad-form": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Signature Pad Form</title><style>
:root{--bg:#050507;--line:#272632}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.field{width:280px}
.field b{display:block;color:#85818d;font-size:9px;margin-bottom:6px}
canvas{width:100%;height:130px;border:1px dashed var(--line);border-radius:10px;background:#111017;touch-action:none}
.actions{display:flex;justify-content:flex-end;gap:8px;margin-top:8px}
.actions button{padding:7px 11px;border:1px solid var(--line);border-radius:8px;background:#0d0d12;color:#817d8a;font-size:10px;cursor:pointer}
</style></head>
<body><div class="field"><b>SIGN BELOW</b><canvas id="pad" width="280" height="130"></canvas>
<div class="actions"><button id="clear">Clear</button></div></div>
<script>
const pad=document.getElementById("pad"),ctx=pad.getContext("2d");ctx.strokeStyle="#eee9f8";ctx.lineWidth=2;ctx.lineCap="round";
let drawing=false;
function pos(e){const r=pad.getBoundingClientRect();const t=e.touches?e.touches[0]:e;return{x:(t.clientX-r.left)*(pad.width/r.width),y:(t.clientY-r.top)*(pad.height/r.height)}}
function start(e){drawing=true;const p=pos(e);ctx.beginPath();ctx.moveTo(p.x,p.y)}
function move(e){if(!drawing)return;const p=pos(e);ctx.lineTo(p.x,p.y);ctx.stroke()}
function end(){drawing=false}
pad.addEventListener("pointerdown",start);pad.addEventListener("pointermove",move);pad.addEventListener("pointerup",end);pad.addEventListener("pointerleave",end);
document.getElementById("clear").addEventListener("click",()=>ctx.clearRect(0,0,pad.width,pad.height));
</script>
</body></html>`,

  "conditional-fields-form": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Conditional Fields Form</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.card{width:270px;padding:20px;border:1px solid var(--line);border-radius:16px;background:#0d0d12}
.switch{display:flex;border:1px solid var(--line);border-radius:999px;padding:3px;margin-bottom:14px}
.switch button{flex:1;border:0;background:none;padding:8px 0;border-radius:999px;font-size:11px;color:#817d8a;cursor:pointer}
.switch button.active{background:#c4b5fd;color:#0a090f}
.extra{max-height:0;overflow:hidden;transition:max-height .3s ease}
.extra.open{max-height:120px}
input{width:100%;padding:10px;margin-top:8px;border:1px solid var(--line);border-radius:8px;background:#111017;color:#fff;font-size:11px;outline:0}
</style></head>
<body><div class="card"><div class="switch" id="switch"><button class="active" data-v="personal">Personal</button><button data-v="business">Business</button></div>
<input placeholder="Full name">
<div class="extra" id="extra"><input placeholder="Company name"><input placeholder="Tax ID"></div></div>
<script>
const buttons=[...document.querySelectorAll("#switch button")],extra=document.getElementById("extra");
buttons.forEach(b=>b.addEventListener("click",()=>{buttons.forEach(x=>x.classList.remove("active"));b.classList.add("active");extra.classList.toggle("open",b.dataset.v==="business")}));
</script>
</body></html>`,

  "case-study-scroll-reveal": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Case Study Scroll Reveal</title><style>
:root{--bg:#050507;--line:#272632}
*{box-sizing:border-box}body{margin:0;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.list{padding:30px 24px;display:grid;gap:60px}
.item{opacity:0;transform:translateY(30px);transition:opacity .6s ease,transform .6s ease}
.item.visible{opacity:1;transform:none}
.cover{height:140px;border-radius:14px;background:linear-gradient(135deg,#191527,#0d0d12);border:1px solid var(--line)}
.item h3{color:#f7f5fb;font-size:15px;margin:12px 0 4px}
.item span{color:#817d8a;font-size:10px}
</style></head>
<body><div class="list" id="list">
<div class="item"><div class="cover"></div><h3>Nova SaaS redesign</h3><span>Product · 2026</span></div>
<div class="item"><div class="cover"></div><h3>Finora onboarding</h3><span>Fintech · 2026</span></div>
<div class="item"><div class="cover"></div><h3>Travelora campaign</h3><span>Travel · 2025</span></div>
</div>
<script>
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.2});
document.querySelectorAll(".item").forEach(i=>io.observe(i));
</script>
</body></html>`,

  "cursor-preview-portfolio-list": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Cursor Preview Portfolio List</title><style>
:root{--bg:#050507;--line:#272632}
*{box-sizing:border-box}body{margin:0;min-height:100vh;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:30px}
.row{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--line);color:#eee9f8;font-size:16px;font-weight:700;cursor:pointer}
.row span{color:#5f5c68;font-size:11px;font-weight:400}
.preview{position:fixed;width:130px;height:90px;border-radius:10px;background:linear-gradient(135deg,#191527,#0d0d12);border:1px solid var(--line);pointer-events:none;opacity:0;transform:translate(-50%,-50%) scale(.9);transition:opacity .2s,transform .2s;z-index:9}
.preview.show{opacity:1;transform:translate(-50%,-50%) scale(1)}
</style></head>
<body>
<div class="row">Atlas Agency <span>Branding</span></div>
<div class="row">CommerceX <span>Ecommerce</span></div>
<div class="row">DevDock <span>Docs</span></div>
<div class="preview" id="prev"></div>
<script>
const prev=document.getElementById("prev");
document.querySelectorAll(".row").forEach(r=>{
  r.addEventListener("pointerenter",()=>prev.classList.add("show"));
  r.addEventListener("pointerleave",()=>prev.classList.remove("show"));
  r.addEventListener("pointermove",e=>{prev.style.left=e.clientX+"px";prev.style.top=e.clientY-70+"px"});
});
</script>
</body></html>`,

  "split-screen-portfolio": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Split Screen Portfolio</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;height:100vh;display:flex;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.list{width:180px;border-right:1px solid var(--line);padding:20px 0;display:grid;align-content:start}
.list div{padding:12px 20px;color:#817d8a;font-size:12px;cursor:pointer}
.list div.active{color:#f7f5fb;background:#111017;border-left:2px solid var(--lav)}
.preview{flex:1;display:grid;place-items:center;background:radial-gradient(circle at 50% 40%,rgba(155,138,255,.1),transparent 40%)}
.preview div{width:200px;height:130px;border-radius:14px;background:linear-gradient(135deg,#191527,#0d0d12);border:1px solid var(--line)}
</style></head>
<body><div class="list" id="list"><div class="active">Medora</div><div>LearnFlow</div><div>Socially</div></div>
<div class="preview"><div></div></div>
<script>
document.querySelectorAll("#list div").forEach(d=>d.addEventListener("click",()=>{document.querySelectorAll("#list div").forEach(x=>x.classList.remove("active"));d.classList.add("active")}));
</script>
</body></html>`,

  "client-logo-showcase-grid": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Client Logo Showcase Grid</title><style>
:root{--bg:#050507;--line:#272632}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;width:320px}
.logo{padding:20px 10px;border:1px solid var(--line);border-radius:12px;display:grid;place-items:center;color:#3a3546;font-weight:800;font-size:12px;letter-spacing:1px;transition:color .25s,border-color .25s,background .25s;position:relative}
.logo:hover{color:#eee9f8;border-color:#514960;background:#111017}
.logo small{position:absolute;bottom:-16px;color:#5f5c68;font-size:8px;opacity:0;transition:opacity .25s}
.logo:hover small{opacity:1}
</style></head>
<body><div class="grid">
<div class="logo">ORBIT<small>Since 2023</small></div><div class="logo">NORTHSTAR<small>Since 2022</small></div><div class="logo">FLUENT<small>Since 2024</small></div>
<div class="logo">ATLAS<small>Since 2021</small></div><div class="logo">MEDORA<small>Since 2023</small></div><div class="logo">FINORA<small>Since 2022</small></div>
</div>
</body></html>`,

  "resume-timeline-portfolio": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Resume Timeline Portfolio</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:30px}
.timeline{position:relative;max-width:320px;margin:auto;padding-left:20px}
.timeline::before{content:"";position:absolute;left:4px;top:4px;bottom:4px;width:1px;background:var(--line)}
.entry{position:relative;padding-bottom:26px}
.entry:last-child{padding-bottom:0}
.entry::before{content:"";position:absolute;left:-20px;top:3px;width:9px;height:9px;border-radius:50%;background:var(--lav)}
.entry b{display:block;color:#f7f5fb;font-size:12px}
.entry span{display:block;color:#5f5c68;font-size:9px;margin:2px 0 4px}
.entry p{margin:0;color:#a49dbc;font-size:10px;line-height:1.6}
</style></head>
<body><div class="timeline">
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
.card{position:relative;height:110px;border:1px solid var(--line);border-radius:12px;background:#0d0d12;overflow:hidden;padding:14px}
.card b{color:#eee9f8;font-size:11px}
.reveal{position:absolute;left:0;right:0;bottom:0;padding:10px 14px;background:#141020;color:#a49dbc;font-size:9px;line-height:1.5;transform:translateY(100%);transition:transform .3s ease}
.card:hover .reveal{transform:translateY(0)}
</style></head>
<body><div class="grid">
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
.step b{display:block;width:30px;height:30px;margin:0 auto 10px;border-radius:50%;border:1px solid var(--lav);color:var(--lav);display:grid;place-items:center;font-size:12px;background:#0d0d12;position:relative;z-index:1}
.step span{color:#c9c4d6;font-size:10px}
.connector{position:absolute;top:15px;left:50%;right:-50%;height:1px;background:var(--line);z-index:0}
.step:last-child .connector{display:none}
</style></head>
<body><div class="steps">
<div class="step"><b>1</b><span>Pick a component</span><div class="connector"></div></div>
<div class="step"><b>2</b><span>Copy the code</span><div class="connector"></div></div>
<div class="step"><b>3</b><span>Ship it</span></div>
</div>
</body></html>`,

  "code-snippet-feature-card": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Code Snippet Feature Card</title><style>
:root{--bg:#050507;--line:#272632}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.card{width:300px;border:1px solid var(--line);border-radius:14px;background:#0d0d12;overflow:hidden}
.bar{display:flex;gap:5px;padding:10px 12px;border-bottom:1px solid var(--line)}
.bar i{width:7px;height:7px;border-radius:50%;background:#2f2d3a}
pre{margin:0;padding:16px;font:11px/1.7 ui-monospace,Menlo,monospace;color:#a9e6b4;white-space:pre-wrap}
.k{color:#c4b5fd}.s{color:#e8b563}
</style></head>
<body><div class="card"><div class="bar"><i></i><i></i><i></i></div><pre id="pre"></pre></div>
<script>
const code='<span class="k">import</span> { Button } <span class="k">from</span> <span class="s">"codefusion"</span>;\\n\\n<span class="k">export default function</span> App(){\\n  <span class="k">return</span> <Button>Ship it</Button>;\\n}';
const pre=document.getElementById("pre");let i=0;
function type(){if(i<=code.length){pre.innerHTML=code.slice(0,i);i+=3;setTimeout(type,20)}}
type();
</script>
</body></html>`,

  "comparison-checklist-features": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Comparison Checklist Features</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.table{width:300px;border:1px solid var(--line);border-radius:14px;overflow:hidden}
.row{display:grid;grid-template-columns:1fr 60px 60px;align-items:center;padding:10px 14px;border-bottom:1px solid var(--line);font-size:10px;color:#c9c4d6}
.row:first-child{background:#111017;color:#817d8a;font-weight:700}
.row:last-child{border-bottom:0}
.row span{text-align:center}
.yes{color:#5fd4a1}.no{color:#e88ba0}
</style></head>
<body><div class="table">
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
.card{width:280px;padding:20px;border:1px solid var(--line);border-radius:16px;background:#0d0d12;text-align:center}
.card b{display:block;color:#817d8a;font-size:11px;margin-bottom:14px}
.swatch{height:70px;border-radius:12px;background:#f4f3fa;transition:background .3s ease,color .3s ease;display:grid;place-items:center;color:#15131c;font-size:11px;font-weight:700}
.swatch.dark{background:#111017;color:#eee9f8}
.toggle-row{display:flex;justify-content:center;gap:8px;margin-top:14px}
.toggle-row button{padding:7px 12px;border:1px solid var(--line);border-radius:8px;background:#111017;color:#817d8a;font-size:10px;cursor:pointer}
.toggle-row button.active{color:#fff;border-color:#514960}
</style></head>
<body><div class="card"><b>LIVE THEME PREVIEW</b><div class="swatch" id="swatch">Aa Preview text</div>
<div class="toggle-row"><button class="active" data-t="light">Light</button><button data-t="dark">Dark</button></div></div>
<script>
const buttons=[...document.querySelectorAll(".toggle-row button")],swatch=document.getElementById("swatch");
buttons.forEach(b=>b.addEventListener("click",()=>{buttons.forEach(x=>x.classList.remove("active"));b.classList.add("active");swatch.classList.toggle("dark",b.dataset.t==="dark")}));
</script>
</body></html>`,

  "product-hunt-style-launch-banner": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Launch Banner</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.banner{display:flex;align-items:center;gap:14px;padding:14px 18px;border:1px solid var(--line);border-radius:14px;background:#0d0d12;width:320px}
.icon{width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#d7d0ff,#9b8aff);flex:none}
.info b{display:block;color:#f7f5fb;font-size:12px}
.info span{color:#817d8a;font-size:9px}
.upvote{margin-left:auto;display:grid;place-items:center;padding:8px 12px;border:1px solid var(--line);border-radius:10px;background:#111017;color:#eee9f8;font-size:11px;cursor:pointer;text-align:center}
.upvote small{display:block;color:#5f5c68;font-size:8px}
</style></head>
<body><div class="banner"><div class="icon"></div><div class="info"><b>CodeFusion is live on Launch Day</b><span>#3 Product of the Day</span></div>
<button class="upvote" id="up">▲<br><small id="count">412</small></button></div>
<script>document.getElementById("up").addEventListener("click",()=>{document.getElementById("count").textContent="413"});</script>
</body></html>`,

  "newsletter-signup-split-section": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Newsletter Signup Split Section</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.section{display:grid;grid-template-columns:1fr 1fr;gap:24px;width:min(460px,90vw);align-items:center}
.section h2{color:#f7f5fb;font-size:20px;margin:0 0 8px}
.section p{color:#a49dbc;font-size:11px;line-height:1.7;margin:0}
form{display:grid;gap:8px}
input{padding:12px;border:1px solid var(--line);border-radius:10px;background:#111017;color:#fff;font-size:11px;outline:0}
button{padding:12px;border:0;border-radius:10px;background:#f7f5fb;color:#0a090f;font-weight:800;font-size:11px;cursor:pointer}
.done{display:none;color:#5fd4a1;font-size:11px}
</style></head>
<body><div class="section"><div><h2>The weekly build note.</h2><p>One email a week with new components and release notes. No spam.</p></div>
<form id="form"><input type="email" placeholder="you@company.com" required><button>Subscribe</button><div class="done" id="done">✓ You're subscribed.</div></form></div>
<script>document.getElementById("form").addEventListener("submit",e=>{e.preventDefault();e.target.querySelector("button").style.display="none";document.getElementById("done").style.display="block"});</script>
</body></html>`,

  "social-share-cta-section": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Social Share CTA Section</title><style>
:root{--bg:#050507;--line:#272632}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.wrap{text-align:center}
.wrap h2{color:#f7f5fb;font-size:22px;margin:0 0 16px}
.icons{display:flex;gap:10px;justify-content:center}
.icons button{width:40px;height:40px;border:1px solid var(--line);border-radius:10px;background:#111017;color:#c9c4d6;font-size:13px;cursor:pointer}
.icons button:hover{color:#fff;border-color:#514960}
.copy{margin-top:14px;display:inline-flex;align-items:center;gap:8px;padding:8px 12px;border:1px solid var(--line);border-radius:9px;background:#0d0d12;color:#817d8a;font-size:10px}
.copy button{border:0;background:none;color:#c4b5fd;cursor:pointer;font-size:10px}
</style></head>
<body><div class="wrap"><h2>Loved it? Share it.</h2>
<div class="icons"><button>𝕏</button><button>in</button><button>f</button></div>
<div class="copy"><span id="url">codefusion.dev/launch</span><button id="copy">Copy link</button></div></div>
<script>document.getElementById("copy").addEventListener("click",e=>{e.target.textContent="Copied ✓";setTimeout(()=>e.target.textContent="Copy link",1500)});</script>
</body></html>`,

  "trust-badges-security-band": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Trust Badges Security Band</title><style>
:root{--bg:#050507;--line:#272632}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.band{display:flex;gap:12px;padding:18px 22px;border:1px solid var(--line);border-radius:14px;background:#0d0d12}
.badge{display:grid;place-items:center;gap:6px;padding:10px 14px;border-radius:10px;transition:transform .2s}
.badge:hover{transform:translateY(-3px)}
.badge i{width:26px;height:26px;border-radius:50%;background:#141020;display:grid;place-items:center;color:#c4b5fd;font-size:12px;font-style:normal}
.badge span{color:#6f6c77;font-size:8px;letter-spacing:.5px}
</style></head>
<body><div class="band">
<div class="badge"><i>✓</i><span>SOC 2</span></div><div class="badge"><i>⚿</i><span>GDPR</span></div><div class="badge"><i>◈</i><span>ISO 27001</span></div>
</div>
</body></html>`,

  "final-cta-gradient-section": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Final CTA Gradient Section</title><style>
:root{--bg:#050507}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.wrap{text-align:center;padding:40px}
.wrap h2{color:#f7f5fb;font-size:26px;margin:0 0 20px}
.shimmer-btn{position:relative;padding:16px 34px;border:0;border-radius:14px;font-size:13px;font-weight:800;color:#0a090f;cursor:pointer;background:linear-gradient(135deg,#d7d0ff,#9b8aff);overflow:hidden}
.shimmer-btn::after{content:"";position:absolute;top:0;bottom:0;width:60px;background:linear-gradient(120deg,transparent,rgba(255,255,255,.55),transparent);animation:sweep 2.6s infinite}
@keyframes sweep{from{left:-80px}to{left:120%}}
</style></head>
<body><div class="wrap"><h2>Stop rebuilding the basics.</h2><button class="shimmer-btn">Start building free →</button></div>
</body></html>`,
};
