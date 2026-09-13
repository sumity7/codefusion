export const productSources = {

  "glow-gradient-button": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Glow Gradient Button</title><style>
:root{--bg:#050507;--line:#272632;--muted:#817d8a;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.stage{display:grid;gap:22px;place-items:center;padding:40px}
.kicker{color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700}
.glow-btn{position:relative;padding:16px 30px;border:0;border-radius:14px;font-size:13px;font-weight:800;color:#0a090f;cursor:pointer;background:linear-gradient(135deg,#d7d0ff,#9b8aff);box-shadow:0 0 0 rgba(155,138,255,.5);transition:transform .25s,box-shadow .25s}
.glow-btn:hover{transform:translateY(-3px);box-shadow:0 14px 45px rgba(155,138,255,.45)}
.glow-btn:active{transform:translateY(-1px)}
</style></head>
<body><div class="stage"><span class="kicker">HOVER TO GLOW</span><button class="glow-btn" id="btn">Get started \u2192</button></div>
<script>document.getElementById("btn").addEventListener("click",e=>{e.currentTarget.textContent="Let's go \u2713";setTimeout(()=>e.currentTarget.textContent="Get started \u2192",1400)});</script>
</body></html>`,

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

  "skeleton-loader-grid": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Skeleton Loader Grid</title><style>
:root{--bg:#050507}
*{box-sizing:border-box}body{margin:0;min-height:100vh;background:var(--bg);font-family:Inter,ui-sans-serif,Arial,sans-serif}
.kicker{display:block;color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700;padding:20px 24px}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;padding:0 24px 30px}
.card{border-radius:14px;overflow:hidden;border:1px solid #24232d;background:#0d0d12}
.thumb{height:110px;background:linear-gradient(90deg,#141218 25%,#1e1c26 50%,#141218 75%);background-size:200% 100%;animation:shimmer 1.4s infinite linear}
.line{height:9px;margin:12px;border-radius:5px;background:linear-gradient(90deg,#141218 25%,#1e1c26 50%,#141218 75%);background-size:200% 100%;animation:shimmer 1.4s infinite linear}
.line.short{width:50%}
@keyframes shimmer{from{background-position:200% 0}to{background-position:-200% 0}}
</style></head>
<body><span class="kicker">LOADING STATE</span>
<div class="grid">
<div class="card"><div class="thumb"></div><div class="line"></div><div class="line short"></div></div>
<div class="card"><div class="thumb"></div><div class="line"></div><div class="line short"></div></div>
<div class="card"><div class="thumb"></div><div class="line"></div><div class="line short"></div></div>
</div>
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

  "widget-dashboard-grid": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Widget Dashboard Grid</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:24px}
.kicker{display:block;color:#9d94b0;font-size:9px;letter-spacing:2px;font-weight:700;margin-bottom:14px}
.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}
.widget{padding:16px;border:1px solid var(--line);border-radius:13px;background:#0d0d12}
.widget.wide{grid-column:span 2}
.widget small{color:#77737f;font-size:7px}
.widget strong{display:block;font:700 22px "Space Grotesk",sans-serif;margin-top:6px}
.bars{display:flex;align-items:end;gap:4px;height:60px;margin-top:10px}
.bars i{flex:1;background:linear-gradient(#c4b5fd,#5f5878);border-radius:3px 3px 0 0}
@media(max-width:600px){.grid{grid-template-columns:repeat(2,1fr)}.widget.wide{grid-column:span 2}}
</style></head>
<body><span class="kicker">COMPACT WIDGETS</span>
<div class="grid">
<div class="widget"><small>REVENUE</small><strong>$12.4K</strong></div>
<div class="widget"><small>USERS</small><strong>3,204</strong></div>
<div class="widget"><small>CHURN</small><strong>1.2%</strong></div>
<div class="widget"><small>UPTIME</small><strong>99.9%</strong></div>
<div class="widget wide"><small>WEEKLY TREND</small><div class="bars"><i style="height:40%"></i><i style="height:55%"></i><i style="height:48%"></i><i style="height:70%"></i><i style="height:60%"></i><i style="height:85%"></i><i style="height:75%"></i></div></div>
</div>
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

  "gradient-mesh-hero": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Gradient Mesh Hero</title><style>
:root{--bg:#050507}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif;text-align:center;padding:30px;position:relative;overflow:hidden}
.mesh{position:absolute;inset:0;background:radial-gradient(circle at 20% 30%,rgba(155,138,255,.35),transparent 45%),radial-gradient(circle at 80% 25%,rgba(90,160,255,.3),transparent 45%),radial-gradient(circle at 50% 80%,rgba(220,140,255,.28),transparent 45%);filter:blur(20px);animation:drift 12s ease-in-out infinite alternate}
@keyframes drift{to{transform:scale(1.15) translateY(-18px)}}
.inner{position:relative;z-index:2}
h1{margin:0;font:700 clamp(30px,6vw,54px) "Space Grotesk",sans-serif;letter-spacing:-.04em}
p{margin:12px 0 20px;color:#c8c2d4;font-size:11px}
button{border:0;border-radius:999px;padding:13px 26px;background:#fff;color:#0a090f;font-weight:800;font-size:11px;cursor:pointer;transition:transform .25s}
button:hover{transform:translateY(-3px)}
</style></head>
<body><div class="mesh"></div><div class="inner"><h1>Ship something<br>worth looking at.</h1><p>An animated mesh gradient hero that stays subtle.</p><button>Start building</button></div>
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

  "breadcrumb-trail": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Breadcrumb Trail</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:24px}
nav{display:flex;align-items:center;gap:8px;padding:10px 14px;border:1px solid var(--line);border-radius:999px;background:#0d0d12;font-size:10px}
nav a{color:#847e8f;text-decoration:none;position:relative;transition:color .25s}
nav a:after{content:"";position:absolute;left:0;right:0;bottom:-3px;height:1px;background:var(--lav);transform:scaleX(0);transition:transform .25s}
nav a:hover{color:#fff}
nav a:hover:after{transform:scaleX(1)}
nav span{color:#3f3c48}
nav b{color:#e6e1f2;font-weight:700}
</style></head>
<body><nav><a href="#">Home</a><span>/</span><a href="#">Components</a><span>/</span><a href="#">Navigation</a><span>/</span><b>Breadcrumbs</b></nav>
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

  "comparison-table": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Plan Comparison Table</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd;--ok:#9fd6ad}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:24px}
table{width:min(460px,94vw);border-collapse:collapse;border:1px solid var(--line);border-radius:14px;overflow:hidden;font-size:10px}
th,td{padding:12px;text-align:left;border-bottom:1px solid #191821}
thead th{background:#0e0d14;font:700 10px "Space Grotesk",sans-serif}
thead th:last-child{color:var(--lav)}
tbody tr{transition:background .25s}
tbody tr:hover{background:#100f16}
td:not(:first-child){text-align:center}
.y{color:var(--ok)}.n{color:#4a4752}
tr:last-child td{border-bottom:0}
</style></head>
<body><table><thead><tr><th>Feature</th><th>Free</th><th>Pro</th></tr></thead><tbody>
<tr><td>Component previews</td><td class="y">✓</td><td class="y">✓</td></tr>
<tr><td>Copy source code</td><td class="n">—</td><td class="y">✓</td></tr>
<tr><td>Premium prompts</td><td class="n">—</td><td class="y">✓</td></tr>
<tr><td>New drops weekly</td><td class="n">—</td><td class="y">✓</td></tr>
</tbody></table>
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

  "rating-stars-card": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Rating Stars Card</title><style>
:root{--bg:#050507;--line:#272632;--lav:#c4b5fd}
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);color:#f7f5fb;font-family:Inter,ui-sans-serif,Arial,sans-serif;padding:24px}
.card{width:min(320px,92vw);padding:24px;border:1px solid var(--line);border-radius:16px;background:#0d0d12}
.stars{display:flex;gap:4px;font-size:18px;cursor:pointer}
.stars i{font-style:normal;color:#332f3d;transition:transform .2s,color .2s}
.stars i.on{color:var(--lav)}
.stars i:hover{transform:scale(1.2)}
.card p{margin:14px 0 12px;font-size:10px;color:#b4aec0;line-height:1.75}
.who{display:flex;align-items:center;gap:10px}
.av{width:32px;height:32px;border-radius:10px;display:grid;place-items:center;background:#242033;color:#d0c5ff;font-size:10px;font-weight:800}
.who b{display:block;font-size:10px}
.who small{color:#77737f;font-size:8px}
</style></head>
<body><div class="card"><div class="stars" id="s"><i class="on">★</i><i class="on">★</i><i class="on">★</i><i class="on">★</i><i class="on">★</i></div><p>"It felt finished on day one. Every state was already considered."</p><div class="who"><div class="av">SC</div><div><b>Sarah Chen</b><small>Product Designer · Northstar</small></div></div></div>
<script>
const stars=[...document.querySelectorAll("#s i")];
stars.forEach((st,i)=>st.addEventListener("click",()=>stars.forEach((x,j)=>x.classList.toggle("on",j<=i))));
</script>
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
};
