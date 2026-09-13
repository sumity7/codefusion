/**
 * Full-page boilerplate templates. Kept separate from productSources.js purely
 * for file size — they are merged into the same `productSources` export.
 */
export const boilerplateSources = {
  "learnflow": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>LearnFlow</title><style>
:root{--bg:#fffbf5;--card:#fff;--ink:#241b12;--dim:#7a6a58;--line:#efe4d4;--indigo:#4f46e5;--amber:#f59e0b}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);font-family:Inter,ui-sans-serif,system-ui,sans-serif}
header{border-bottom:1px solid var(--line);background:var(--card)}
.hi{max-width:1140px;margin:0 auto;padding:14px 24px;display:flex;align-items:center;gap:26px}
.lg{font-weight:800;font-size:18px;letter-spacing:-.03em}
.lg span{color:var(--indigo)}
header nav{display:flex;gap:20px;font-size:13px;color:var(--dim)}
header nav a{cursor:pointer}
header nav a:hover{color:var(--ink)}
.hactions{margin-left:auto;display:flex;align-items:center;gap:12px;font-size:13px}
.hactions button{border:0;border-radius:10px;background:var(--indigo);color:#fff;padding:9px 15px;font-size:13px;font-weight:600;cursor:pointer}
.dash{max-width:1140px;margin:0 auto;padding:26px 24px 56px;display:grid;grid-template-columns:1fr 300px;gap:26px}
.welcome{padding:24px;border-radius:18px;background:linear-gradient(120deg,var(--indigo),#8b5cf6);color:#fff;margin-bottom:22px}
.welcome h1{margin:0 0 6px;font-size:24px;letter-spacing:-.03em}
.welcome p{margin:0 0 16px;opacity:.88;font-size:13px}
.prog{height:8px;border-radius:6px;background:rgba(255,255,255,.25);overflow:hidden}
.prog i{display:block;height:100%;width:0;background:var(--amber);border-radius:6px;transition:width 1s cubic-bezier(.2,.9,.2,1)}
.welcome small{display:block;margin-top:8px;font-size:11px;opacity:.85}
h2{font-size:16px;letter-spacing:-.02em;margin:0 0 14px}
.courses{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
.c{background:var(--card);border:1px solid var(--line);border-radius:16px;overflow:hidden;transition:.3s;cursor:pointer}
.c:hover{transform:translateY(-4px);box-shadow:0 16px 38px rgba(36,27,18,.08)}
.c .cov{height:104px;display:grid;place-items:center;font-size:32px}
.v1{background:linear-gradient(135deg,#ede9fe,#c7d2fe)}
.v2{background:linear-gradient(135deg,#fef3c7,#fde68a)}
.v3{background:linear-gradient(135deg,#dcfce7,#bbf7d0)}
.v4{background:linear-gradient(135deg,#ffe4e6,#fecdd3)}
.c .cb{padding:14px}
.c .cb small{font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:var(--indigo);font-weight:700}
.c .cb h3{margin:5px 0 6px;font-size:14px;letter-spacing:-.01em}
.c .cb p{margin:0 0 10px;font-size:11px;color:var(--dim);line-height:1.6}
.meta{display:flex;justify-content:space-between;font-size:11px;color:var(--dim);border-top:1px solid var(--line);padding-top:9px}
.meta b{color:var(--ink)}
.side .box{background:var(--card);border:1px solid var(--line);border-radius:16px;padding:17px;margin-bottom:14px}
.side h4{margin:0 0 12px;font-size:13px}
.lesson{display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid var(--line);font-size:12px}
.lesson:last-child{border:0}
.lesson i{width:22px;height:22px;border-radius:50%;display:grid;place-items:center;font-style:normal;font-size:11px;flex:0 0 auto}
.done{background:#dcfce7;color:#15803d}
.now{background:var(--indigo);color:#fff}
.next{background:#f3f4f6;color:#9ca3af}
.inst{display:flex;gap:11px;align-items:center}
.inst .a{width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#c7d2fe,#a5b4fc);display:grid;place-items:center;font-size:17px}
.inst b{display:block;font-size:13px}
.inst small{color:var(--dim);font-size:11px}
@media(max-width:940px){.dash{grid-template-columns:1fr}.courses{grid-template-columns:1fr}header nav{display:none}}
</style></head>
<body>
<header><div class="hi"><div class="lg">Learn<span>Flow</span></div><nav><a>Browse</a><a>My learning</a><a>Paths</a><a>Community</a></nav><div class="hactions"><span>&#128276;</span><button>Upgrade</button></div></div></header>
<div class="dash">
<div>
<div class="welcome"><h1>Welcome back, Maya</h1><p>You're 62% through <b>Design Systems in Practice</b>.</p><div class="prog"><i id="bar"></i></div><small>14 of 22 lessons complete &middot; 3h 20m remaining</small></div>
<h2>Continue learning</h2>
<div class="courses">
<article class="c"><div class="cov v1">&#127912;</div><div class="cb"><small>Design</small><h3>Design Systems in Practice</h3><p>Tokens, components and governance for real teams.</p><div class="meta"><span>22 lessons</span><b>62%</b></div></div></article>
<article class="c"><div class="cov v2">&#9889;</div><div class="cb"><small>Engineering</small><h3>Frontend Performance</h3><p>Measure, budget and ship genuinely fast interfaces.</p><div class="meta"><span>16 lessons</span><b>28%</b></div></div></article>
<article class="c"><div class="cov v3">&#128202;</div><div class="cb"><small>Data</small><h3>Analytics for Product Teams</h3><p>From events to decisions without dashboard sprawl.</p><div class="meta"><span>19 lessons</span><b>New</b></div></div></article>
<article class="c"><div class="cov v4">&#9997;</div><div class="cb"><small>Craft</small><h3>Writing for Interfaces</h3><p>Microcopy that reduces support tickets.</p><div class="meta"><span>11 lessons</span><b>New</b></div></div></article>
</div>
</div>
<div class="side">
<div class="box"><h4>Up next</h4><div class="lesson"><i class="done">&#10003;</i>Auditing your components</div><div class="lesson"><i class="done">&#10003;</i>Naming and tokens</div><div class="lesson"><i class="now">&#9654;</i>Theming strategies</div><div class="lesson"><i class="next">4</i>Documentation that sticks</div></div>
<div class="box"><h4>Your instructor</h4><div class="inst"><div class="a">&#128105;</div><div><b>Elena Fischer</b><small>Design Systems Lead, Northstar</small></div></div></div>
<div class="box"><h4>This week</h4><div class="lesson"><i class="done">&#10003;</i>4 lessons completed</div><div class="lesson"><i class="now">&#128293;</i>6-day streak</div></div>
</div>
</div>
<script>setTimeout(function(){document.getElementById("bar").style.width="62%"},180);</script>
</body></html>`,

  "travelora": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Travelora</title><style>
:root{--ink:#0f1d1a;--dim:#5d6f69;--line:#e3ece8;--sea:#0e7c66;--sand:#f4ece0;--coral:#ef6c50}
*{box-sizing:border-box}body{margin:0;background:#fff;color:var(--ink);font-family:Inter,ui-sans-serif,system-ui,sans-serif}
.hero{position:relative;min-height:440px;display:flex;flex-direction:column;justify-content:space-between;padding:20px 26px 26px;color:#fff;background:linear-gradient(160deg,#0b3b33,#0e7c66 55%,#37a88b);overflow:hidden}
.hero:before{content:"";position:absolute;inset:0;background:radial-gradient(600px 300px at 78% 18%,rgba(255,255,255,.22),transparent 60%),radial-gradient(400px 260px at 12% 80%,rgba(239,108,80,.3),transparent 60%)}
.hero>*{position:relative;z-index:2}
.nav{display:flex;align-items:center;gap:26px;max-width:1140px;margin:0 auto;width:100%}
.nav b{font-size:19px;letter-spacing:-.03em}
.nav nav{display:flex;gap:20px;font-size:13px;opacity:.9}
.nav nav a{cursor:pointer}
.nav .r{margin-left:auto;display:flex;gap:12px;align-items:center;font-size:13px}
.nav .r button{border:1px solid rgba(255,255,255,.5);background:rgba(255,255,255,.12);color:#fff;border-radius:22px;padding:8px 16px;font-size:12px;cursor:pointer;backdrop-filter:blur(6px)}
.htxt{max-width:1140px;margin:0 auto;width:100%}
.htxt small{font-size:11px;letter-spacing:.2em;text-transform:uppercase;opacity:.85}
.htxt h1{margin:10px 0 0;font-size:clamp(34px,6vw,62px);line-height:1.02;letter-spacing:-.04em;max-width:15ch}
.search{max-width:1140px;margin:0 auto;width:100%;background:#fff;border-radius:18px;padding:12px;display:grid;grid-template-columns:1.3fr 1fr 1fr auto;gap:10px;box-shadow:0 22px 50px rgba(11,59,51,.26)}
.f label{display:block;font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--dim);margin-bottom:3px}
.f input,.f select{width:100%;border:0;outline:0;font-size:13px;color:var(--ink);background:transparent}
.f{padding:8px 12px;border-right:1px solid var(--line)}
.f:nth-child(3){border-right:0}
.search button{border:0;border-radius:13px;background:var(--coral);color:#fff;padding:0 26px;font-size:13px;font-weight:700;cursor:pointer;transition:.25s}
.search button:hover{background:#d85a3f}
section{max-width:1140px;margin:0 auto;padding:40px 26px}
.sh{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:18px}
.sh h2{margin:0;font-size:22px;letter-spacing:-.03em}
.sh a{font-size:13px;color:var(--sea);cursor:pointer}
.dest{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.d{border-radius:18px;overflow:hidden;position:relative;aspect-ratio:3/4;cursor:pointer;color:#fff}
.d .im{position:absolute;inset:0;transition:transform .8s cubic-bezier(.2,.8,.2,1)}
.d:hover .im{transform:scale(1.08)}
.d:after{content:"";position:absolute;inset:0;background:linear-gradient(0deg,rgba(7,26,22,.82),transparent 58%)}
.d .cap{position:absolute;left:14px;right:14px;bottom:13px;z-index:2}
.d h3{margin:0;font-size:16px;letter-spacing:-.02em}
.d small{opacity:.85;font-size:11px}
.d .pr{position:absolute;top:12px;right:12px;z-index:2;background:rgba(255,255,255,.94);color:var(--ink);border-radius:20px;padding:4px 10px;font-size:11px;font-weight:700}
.g1{background:linear-gradient(160deg,#2b6cb0,#63b3ed)}
.g2{background:linear-gradient(160deg,#b7791f,#f6e05e)}
.g3{background:linear-gradient(160deg,#276749,#68d391)}
.g4{background:linear-gradient(160deg,#97266d,#f687b3)}
.strip{background:var(--sand);border-radius:20px;padding:26px;display:grid;grid-template-columns:repeat(4,1fr);gap:20px;text-align:center}
.strip b{display:block;font-size:26px;letter-spacing:-.03em;color:var(--sea)}
.strip small{font-size:11px;color:var(--dim)}
@media(max-width:960px){.search{grid-template-columns:1fr 1fr}.search button{grid-column:span 2;padding:12px}.dest{grid-template-columns:repeat(2,1fr)}.strip{grid-template-columns:repeat(2,1fr);gap:16px}}
@media(max-width:560px){.nav nav{display:none}.dest{grid-template-columns:1fr}.search{grid-template-columns:1fr}.search button{grid-column:span 1}.f{border-right:0;border-bottom:1px solid var(--line)}}
</style></head>
<body>
<div class="hero">
<div class="nav"><b>Travelora</b><nav><a>Destinations</a><a>Stays</a><a>Experiences</a><a>Deals</a></nav><div class="r"><span>INR &#8377;</span><button>Sign in</button></div></div>
<div class="htxt"><small>Handpicked since 2011</small><h1>Somewhere better is three hours away.</h1></div>
<div class="search">
<div class="f"><label>Destination</label><input value="Kyoto, Japan"></div>
<div class="f"><label>Dates</label><input value="14 - 21 Apr"></div>
<div class="f"><label>Travellers</label><select><option>2 adults</option><option>1 adult</option><option>2 adults + 1 child</option></select></div>
<button id="go">Search</button>
</div>
</div>
<section><div class="sh"><h2>Trending destinations</h2><a>View all &rarr;</a></div><div class="dest">
<article class="d"><div class="im g1"></div><span class="pr">&#8377;48,200</span><div class="cap"><h3>Kyoto</h3><small>Japan &middot; 7 nights</small></div></article>
<article class="d"><div class="im g2"></div><span class="pr">&#8377;36,900</span><div class="cap"><h3>Marrakech</h3><small>Morocco &middot; 5 nights</small></div></article>
<article class="d"><div class="im g3"></div><span class="pr">&#8377;52,400</span><div class="cap"><h3>Reykjavik</h3><small>Iceland &middot; 6 nights</small></div></article>
<article class="d"><div class="im g4"></div><span class="pr">&#8377;29,750</span><div class="cap"><h3>Lisbon</h3><small>Portugal &middot; 4 nights</small></div></article>
</div></section>
<section><div class="strip"><div><b>180+</b><small>Destinations</small></div><div><b>4.9/5</b><small>Traveller rating</small></div><div><b>24/7</b><small>On-trip support</small></div><div><b>Free</b><small>Cancellation</small></div></div></section>
<script>document.getElementById("go").addEventListener("click",function(e){e.target.textContent="Searching...";setTimeout(function(){e.target.textContent="Search"},1200)});</script>
</body></html>`,

  "devdock": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>DevDock</title><style>
:root{--bg:#0a0c10;--panel:#0f1218;--stroke:#1e2430;--ink:#d7dee9;--dim:#6d7888;--green:#3fb950;--blue:#58a6ff;--pink:#db61a2}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:13px}
header{border-bottom:1px solid var(--stroke);background:rgba(10,12,16,.9);position:sticky;top:0;z-index:9;backdrop-filter:blur(8px)}
.hi{display:flex;align-items:center;gap:18px;padding:11px 18px}
.lg{display:flex;align-items:center;gap:8px;font-weight:700;color:#fff}
.lg i{width:22px;height:22px;border-radius:6px;background:var(--green);color:#05210b;display:grid;place-items:center;font-style:normal;font-size:12px}
header nav{display:flex;gap:16px;color:var(--dim);font-size:12px}
header nav a{cursor:pointer}
header nav a.on,header nav a:hover{color:var(--ink)}
.cmd{margin-left:auto;display:flex;align-items:center;gap:8px;border:1px solid var(--stroke);border-radius:7px;padding:6px 10px;color:var(--dim);font-size:11px;background:var(--panel);cursor:pointer;min-width:210px}
.cmd kbd{margin-left:auto;border:1px solid var(--stroke);border-radius:4px;padding:1px 5px;font-size:10px}
.layout{display:grid;grid-template-columns:216px 1fr 190px;min-height:100vh}
.side{border-right:1px solid var(--stroke);padding:18px 14px}
.side b{display:block;color:var(--dim);font-size:10px;letter-spacing:.1em;margin:14px 0 6px}
.side b:first-child{margin-top:0}
.side a{display:block;padding:5px 9px;border-radius:6px;color:var(--dim);font-size:12px;cursor:pointer;border-left:2px solid transparent}
.side a.on{color:var(--ink);background:var(--panel);border-left-color:var(--green)}
.side a:hover{color:var(--ink)}
article{padding:26px 30px;min-width:0}
.crumb{color:var(--dim);font-size:11px;margin-bottom:12px}
article h1{margin:0 0 8px;font-size:26px;color:#fff;letter-spacing:-.02em;font-family:Inter,sans-serif}
article>p{color:var(--dim);line-height:1.75;font-size:13px;font-family:Inter,sans-serif}
.badge{display:inline-block;border:1px solid var(--stroke);border-radius:20px;padding:2px 9px;font-size:10px;color:var(--green);margin-bottom:14px}
.code{border:1px solid var(--stroke);border-radius:9px;background:var(--panel);overflow:hidden;margin:16px 0}
.code .cb{display:flex;align-items:center;gap:8px;padding:8px 12px;border-bottom:1px solid var(--stroke);color:var(--dim);font-size:11px}
.code .cb span{margin-left:auto;cursor:pointer;transition:.2s}
.code .cb span:hover{color:var(--ink)}
.code pre{margin:0;padding:14px;overflow-x:auto;line-height:1.7;font-size:12px}
.k{color:var(--pink)}.s{color:#a5d6ff}.c{color:#6d7888}.f{color:var(--blue)}
h2{font-size:15px;color:#fff;margin:24px 0 8px;font-family:Inter,sans-serif;letter-spacing:-.01em}
table{width:100%;border-collapse:collapse;font-size:12px;margin-top:10px}
th,td{text-align:left;padding:9px 10px;border-bottom:1px solid var(--stroke)}
th{color:var(--dim);font-weight:500;font-size:11px}
td code{color:var(--blue)}
.req{display:inline-block;font-size:10px;color:var(--pink)}
.toc{border-left:1px solid var(--stroke);padding:18px 14px;font-size:11px;color:var(--dim)}
.toc b{display:block;color:var(--ink);font-size:10px;letter-spacing:.1em;margin-bottom:9px}
.toc a{display:block;padding:4px 0;cursor:pointer}
.toc a:hover,.toc a.on{color:var(--green)}
@media(max-width:1080px){.layout{grid-template-columns:1fr}.side,.toc{display:none}header nav{display:none}}
</style></head>
<body>
<header><div class="hi"><div class="lg"><i>&rsaquo;</i>DevDock</div><nav><a class="on">Docs</a><a>API</a><a>Changelog</a><a>Status</a></nav><div class="cmd">&#8981; Search docs<kbd>&#8984;K</kbd></div></div></header>
<div class="layout">
<div class="side"><b>GETTING STARTED</b><a>Introduction</a><a class="on">Quickstart</a><a>Authentication</a><b>CORE API</b><a>Deployments</a><a>Environments</a><a>Webhooks</a><b>CLI</b><a>Installation</a><a>Commands</a></div>
<article>
<div class="crumb">Docs / Getting started / Quickstart</div>
<span class="badge">v4.2 &middot; stable</span>
<h1>Quickstart</h1>
<p>Ship your first deployment in under two minutes. Install the CLI, authenticate, and push.</p>
<div class="code"><div class="cb">bash<span id="c1">copy</span></div><pre><span class="c"># install the CLI</span>
<span class="k">npm</span> i -g <span class="s">"@devdock/cli"</span>

<span class="c"># authenticate</span>
<span class="k">devdock</span> login --token <span class="s">$DEVDOCK_TOKEN</span>

<span class="c"># deploy the current directory</span>
<span class="k">devdock</span> deploy --prod</pre></div>
<h2>Programmatic usage</h2>
<div class="code"><div class="cb">deploy.js<span id="c2">copy</span></div><pre><span class="k">import</span> { Client } <span class="k">from</span> <span class="s">"@devdock/sdk"</span>;

<span class="k">const</span> dock = <span class="k">new</span> <span class="f">Client</span>({ token: process.env.DEVDOCK_TOKEN });

<span class="k">const</span> deployment = <span class="k">await</span> dock.deployments.<span class="f">create</span>({
  project: <span class="s">"northstar-web"</span>,
  target:  <span class="s">"production"</span>
});</pre></div>
<h2>Parameters</h2>
<table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>project</code> <span class="req">required</span></td><td>string</td><td>Project slug to deploy.</td></tr>
<tr><td><code>target</code></td><td>enum</td><td><code>preview</code> or <code>production</code>. Defaults to preview.</td></tr>
<tr><td><code>env</code></td><td>object</td><td>Environment variables merged at build time.</td></tr>
</tbody></table>
</article>
<div class="toc"><b>ON THIS PAGE</b><a class="on">Quickstart</a><a>Programmatic usage</a><a>Parameters</a><a>Next steps</a></div>
</div>
<script>
["c1","c2"].forEach(function(id){var el=document.getElementById(id);el.addEventListener("click",function(){el.textContent="copied";setTimeout(function(){el.textContent="copy"},1200)})});
</script>
</body></html>`,

  "socially": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Socially</title><style>
:root{--bg:#f7f4ff;--card:#fff;--ink:#1b1430;--dim:#7a6e96;--line:#ebe4fb;--brand:#7c3aed;--pink:#ec4899}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);font-family:Inter,ui-sans-serif,system-ui,sans-serif}
.top{position:sticky;top:0;z-index:10;background:rgba(247,244,255,.9);backdrop-filter:blur(12px);border-bottom:1px solid var(--line)}
.ti{max-width:1080px;margin:0 auto;padding:12px 20px;display:flex;align-items:center;gap:16px}
.lg{font-weight:900;font-size:19px;letter-spacing:-.04em;background:linear-gradient(120deg,var(--brand),var(--pink));-webkit-background-clip:text;background-clip:text;color:transparent}
.se{flex:1;max-width:320px;border:1px solid var(--line);background:var(--card);border-radius:22px;padding:8px 14px;font-size:13px;color:var(--dim)}
.ti .ic{display:flex;gap:8px;margin-left:auto;align-items:center}
.ti .ic span{width:34px;height:34px;border-radius:50%;background:var(--card);border:1px solid var(--line);display:grid;place-items:center;font-size:15px;cursor:pointer;transition:.2s;position:relative}
.ti .ic span:hover{transform:translateY(-2px)}
.dot{position:absolute;top:5px;right:6px;width:8px;height:8px;border-radius:50%;background:var(--pink);border:2px solid var(--card)}
.wrap{max-width:1080px;margin:0 auto;padding:20px;display:grid;grid-template-columns:200px 1fr 250px;gap:20px}
.nav a{display:flex;align-items:center;gap:11px;padding:10px 12px;border-radius:12px;font-size:13px;color:var(--dim);cursor:pointer;transition:.2s}
.nav a.on{background:var(--card);color:var(--ink);font-weight:600;box-shadow:0 4px 14px rgba(27,20,48,.05)}
.nav a:hover{background:var(--card);color:var(--ink)}
.post-btn{width:100%;margin-top:12px;border:0;border-radius:22px;background:linear-gradient(120deg,var(--brand),var(--pink));color:#fff;padding:11px;font-weight:700;font-size:13px;cursor:pointer;box-shadow:0 10px 24px rgba(124,58,237,.3)}
.stories{display:flex;gap:12px;overflow-x:auto;padding-bottom:6px;margin-bottom:16px}
.st{flex:0 0 auto;text-align:center;cursor:pointer}
.st i{display:block;width:58px;height:58px;border-radius:50%;padding:2px;background:linear-gradient(120deg,var(--brand),var(--pink));margin-bottom:5px}
.st i b{display:grid;place-items:center;width:100%;height:100%;border-radius:50%;background:var(--card);font-size:22px;font-style:normal}
.st small{font-size:10px;color:var(--dim)}
.composer{background:var(--card);border:1px solid var(--line);border-radius:18px;padding:14px;margin-bottom:16px;display:flex;gap:11px;align-items:center}
.composer .av{width:38px;height:38px;border-radius:50%;background:linear-gradient(120deg,#c4b5fd,#f9a8d4);display:grid;place-items:center;font-size:16px;flex:0 0 auto}
.composer input{flex:1;border:0;outline:0;font-size:13px;color:var(--ink);background:transparent}
.composer button{border:0;border-radius:18px;background:var(--brand);color:#fff;padding:8px 16px;font-size:12px;font-weight:600;cursor:pointer}
.post{background:var(--card);border:1px solid var(--line);border-radius:18px;padding:16px;margin-bottom:14px}
.ph{display:flex;align-items:center;gap:10px;margin-bottom:11px}
.ph .av{width:40px;height:40px;border-radius:50%;display:grid;place-items:center;font-size:17px}
.a1{background:linear-gradient(120deg,#bfdbfe,#93c5fd)}.a2{background:linear-gradient(120deg,#fecdd3,#fda4af)}
.ph b{display:block;font-size:13px}
.ph small{color:var(--dim);font-size:11px}
.ph .more{margin-left:auto;color:var(--dim);cursor:pointer}
.post p{margin:0 0 12px;font-size:14px;line-height:1.65}
.media{height:180px;border-radius:14px;margin-bottom:12px;background:linear-gradient(125deg,#ddd6fe,#fbcfe8,#bfdbfe)}
.acts{display:flex;gap:18px;font-size:12px;color:var(--dim);border-top:1px solid var(--line);padding-top:11px}
.acts span{display:flex;align-items:center;gap:6px;cursor:pointer;transition:.2s}
.acts span:hover{color:var(--brand)}
.acts span.liked{color:var(--pink);font-weight:600}
.side .box{background:var(--card);border:1px solid var(--line);border-radius:18px;padding:15px;margin-bottom:14px}
.side h4{margin:0 0 11px;font-size:12px;letter-spacing:.04em;color:var(--dim)}
.trend{padding:7px 0;font-size:13px;cursor:pointer}
.trend b{display:block;font-weight:600}
.trend small{color:var(--dim);font-size:11px}
.sug{display:flex;align-items:center;gap:10px;padding:7px 0}
.sug .av{width:32px;height:32px;border-radius:50%;background:linear-gradient(120deg,#a7f3d0,#6ee7b7);display:grid;place-items:center;font-size:14px}
.sug b{font-size:12px}
.sug small{display:block;color:var(--dim);font-size:10px}
.sug button{margin-left:auto;border:1px solid var(--brand);color:var(--brand);background:transparent;border-radius:16px;padding:5px 12px;font-size:11px;font-weight:600;cursor:pointer;transition:.2s}
.sug button:hover{background:var(--brand);color:#fff}
@media(max-width:940px){.wrap{grid-template-columns:1fr}.nav,.side{display:none}}
</style></head>
<body>
<div class="top"><div class="ti"><div class="lg">Socially</div><div class="se">&#8981; Search people, tags, communities</div><div class="ic"><span>&#128172;</span><span>&#128276;<i class="dot"></i></span><span>&#129333;</span></div></div></div>
<div class="wrap">
<div class="nav"><a class="on">&#127968; Home</a><a>&#128269; Explore</a><a>&#128101; Communities</a><a>&#128172; Messages</a><a>&#128278; Saved</a><a>&#128100; Profile</a><button class="post-btn">New post</button></div>
<div>
<div class="stories"><div class="st"><i><b>+</b></i><small>Your story</small></div><div class="st"><i><b>&#127912;</b></i><small>maya</small></div><div class="st"><i><b>&#127911;</b></i><small>devs</small></div><div class="st"><i><b>&#127807;</b></i><small>plants</small></div><div class="st"><i><b>&#128247;</b></i><small>photo</small></div><div class="st"><i><b>&#127939;</b></i><small>run</small></div></div>
<div class="composer"><div class="av">&#129333;</div><input placeholder="What's happening?"><button>Post</button></div>
<article class="post"><div class="ph"><div class="av a1">&#127912;</div><div><b>Maya Rivera</b><small>@mayabuilds &middot; 18m</small></div><span class="more">&middot;&middot;&middot;</span></div><p>Shipped the new design system docs today. Three months of work, 140 components, one very tired team. Worth it.</p><div class="media"></div><div class="acts"><span class="like" data-n="248">&#9825; 248</span><span>&#128172; 31</span><span>&#8599; Share</span></div></article>
<article class="post"><div class="ph"><div class="av a2">&#9889;</div><div><b>Tom Keller</b><small>@tomk &middot; 2h</small></div><span class="more">&middot;&middot;&middot;</span></div><p>Hot take: most "performance problems" are actually 400kb of unused JavaScript and a hero image nobody compressed.</p><div class="acts"><span class="like" data-n="1204">&#9825; 1204</span><span>&#128172; 184</span><span>&#8599; Share</span></div></article>
</div>
<div class="side">
<div class="box"><h4>TRENDING</h4><div class="trend"><b>#DesignSystems</b><small>4,812 posts</small></div><div class="trend"><b>#WebPerf</b><small>2,140 posts</small></div><div class="trend"><b>#ShipIt</b><small>1,908 posts</small></div></div>
<div class="box"><h4>SUGGESTED</h4><div class="sug"><div class="av">&#127807;</div><div><b>Ana Ruiz</b><small>@anagrows</small></div><button>Follow</button></div><div class="sug"><div class="av">&#128247;</div><div><b>Leo Park</b><small>@leoshoots</small></div><button>Follow</button></div></div>
</div>
</div>
<script>
document.querySelectorAll(".like").forEach(function(l){var liked=false;var base=parseInt(l.getAttribute("data-n"),10);
l.addEventListener("click",function(){liked=!liked;l.classList.toggle("liked",liked);l.textContent=(liked?"\\u2665 ":"\\u2661 ")+(liked?base+1:base)})});
document.querySelectorAll(".sug button").forEach(function(b){b.addEventListener("click",function(){b.textContent=b.textContent==="Follow"?"Following":"Follow"})});
</script>
</body></html>`,

  "launchkit": `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>LaunchKit</title><style>
:root{--ink:#080808;--paper:#fafafa;--dim:#6b6b6b;--line:#e4e4e4;--lime:#d4ff3f;--card:#fff}
*{box-sizing:border-box}body{margin:0;background:var(--paper);color:var(--ink);font-family:Inter,ui-sans-serif,system-ui,sans-serif}
.nav{position:sticky;top:0;z-index:10;background:rgba(250,250,250,.88);backdrop-filter:blur(12px);border-bottom:1px solid var(--line)}
.ni{max-width:1140px;margin:0 auto;padding:14px 24px;display:flex;align-items:center;gap:26px}
.ni b{font-size:18px;letter-spacing:-.05em;font-weight:900}
.ni nav{display:flex;gap:22px;font-size:13px;color:var(--dim)}
.ni nav a{cursor:pointer}.ni nav a:hover{color:var(--ink)}
.ni .r{margin-left:auto;display:flex;gap:10px;align-items:center;font-size:13px}
.btn{border:0;border-radius:8px;padding:10px 16px;font-size:13px;font-weight:700;cursor:pointer;transition:.25s}
.dark{background:var(--ink);color:#fff}
.dark:hover{transform:translateY(-2px);box-shadow:0 10px 24px rgba(0,0,0,.22)}
.lime{background:var(--lime);color:var(--ink)}
.lime:hover{transform:translateY(-2px);box-shadow:0 10px 26px rgba(212,255,63,.6)}
.hero{max-width:1140px;margin:0 auto;padding:74px 24px 50px;text-align:center}
.pill{display:inline-flex;align-items:center;gap:8px;border:1px solid var(--line);background:var(--card);border-radius:22px;padding:6px 14px;font-size:12px;color:var(--dim);margin-bottom:22px}
.pill i{width:6px;height:6px;border-radius:50%;background:var(--lime);box-shadow:0 0 0 3px rgba(212,255,63,.35);font-style:normal}
.hero h1{margin:0;font-size:clamp(38px,7vw,78px);line-height:.98;letter-spacing:-.055em;font-weight:900}
.hero h1 mark{background:var(--lime);padding:0 .1em;border-radius:4px}
.hero p{margin:20px auto 26px;max-width:52ch;font-size:16px;line-height:1.65;color:var(--dim)}
.hactions{display:flex;gap:10px;justify-content:center;flex-wrap:wrap}
.shot{max-width:1000px;margin:46px auto 0;border:1px solid var(--line);border-radius:18px;overflow:hidden;background:var(--card);box-shadow:0 30px 70px rgba(0,0,0,.1)}
.shot .bar{display:flex;gap:6px;padding:11px 14px;border-bottom:1px solid var(--line)}
.shot .bar i{width:9px;height:9px;border-radius:50%;background:#e0e0e0}
.shot .body{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;padding:20px}
.shot .body div{height:88px;border-radius:11px;background:linear-gradient(135deg,#f2f2f2,#e8e8e8)}
.shot .body div:first-child{background:linear-gradient(135deg,var(--lime),#b8e625)}
.logos{max-width:1140px;margin:0 auto;padding:34px 24px;display:flex;gap:38px;justify-content:center;flex-wrap:wrap;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.logos span{font-weight:800;font-size:16px;letter-spacing:-.03em;color:#c2c2c2;transition:.25s;cursor:default}
.logos span:hover{color:var(--ink)}
section{max-width:1140px;margin:0 auto;padding:56px 24px}
.sh{text-align:center;margin-bottom:32px}
.sh h2{margin:0 0 8px;font-size:clamp(26px,4vw,38px);letter-spacing:-.04em;font-weight:900}
.sh p{margin:0;color:var(--dim);font-size:14px}
.feat{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.f{border:1px solid var(--line);border-radius:16px;padding:22px;background:var(--card);transition:.3s}
.f:hover{transform:translateY(-6px);border-color:var(--ink);box-shadow:0 18px 40px rgba(0,0,0,.08)}
.f i{display:grid;place-items:center;width:40px;height:40px;border-radius:11px;background:var(--lime);font-style:normal;font-size:18px;margin-bottom:13px}
.f h3{margin:0 0 6px;font-size:16px;letter-spacing:-.02em}
.f p{margin:0;font-size:13px;color:var(--dim);line-height:1.65}
.pricing{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.pl{border:1px solid var(--line);border-radius:18px;padding:26px;background:var(--card);transition:.3s}
.pl.best{background:var(--ink);color:#fff;border-color:var(--ink);transform:scale(1.03)}
.pl small{font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--dim)}
.pl.best small{color:var(--lime)}
.pl b{display:block;font-size:40px;letter-spacing:-.05em;margin:10px 0 2px;font-weight:900}
.pl .per{font-size:12px;color:var(--dim)}
.pl ul{list-style:none;padding:0;margin:18px 0}
.pl li{padding:6px 0;font-size:13px;display:flex;gap:9px}
.pl li:before{content:"\\2713";color:#18a558;font-weight:800}
.pl.best li:before{color:var(--lime)}
.pl .btn{width:100%}
.faq{max-width:720px;margin:0 auto}
.q{border-bottom:1px solid var(--line);padding:16px 0;cursor:pointer}
.q b{display:flex;justify-content:space-between;font-size:15px;letter-spacing:-.01em}
.q b i{font-style:normal;color:var(--dim);transition:transform .3s}
.q.open b i{transform:rotate(45deg)}
.q p{max-height:0;overflow:hidden;margin:0;font-size:13px;color:var(--dim);line-height:1.7;transition:max-height .35s ease,margin .35s}
.q.open p{max-height:120px;margin-top:10px}
.cta{background:var(--ink);color:#fff;border-radius:22px;padding:52px 26px;text-align:center;margin:0 24px}
.cta h2{margin:0 0 10px;font-size:clamp(26px,4.4vw,42px);letter-spacing:-.04em;font-weight:900}
.cta p{margin:0 0 22px;color:#b5b5b5;font-size:14px}
footer{max-width:1140px;margin:0 auto;padding:36px 24px;display:flex;justify-content:space-between;color:var(--dim);font-size:12px;flex-wrap:wrap;gap:12px}
@media(max-width:880px){.feat,.pricing,.shot .body{grid-template-columns:1fr}.pl.best{transform:none}.ni nav{display:none}}
</style></head>
<body>
<div class="nav"><div class="ni"><b>LaunchKit</b><nav><a>Product</a><a>Features</a><a>Pricing</a><a>Docs</a></nav><div class="r"><span>Sign in</span><button class="btn dark">Start free</button></div></div></div>
<section class="hero"><div class="pill"><i></i>v4.0 just shipped - now with edge functions</div><h1>Launch your startup<br>in a <mark>weekend.</mark></h1><p>Everything you need to go from idea to paying customers: auth, billing, email, analytics and a design system that doesn't look like everyone else's.</p><div class="hactions"><button class="btn dark">Start building free</button><button class="btn lime">Watch 2-min demo</button></div>
<div class="shot"><div class="bar"><i></i><i></i><i></i></div><div class="body"><div></div><div></div><div></div></div></div>
</section>
<div class="logos"><span>NORTHSTAR</span><span>VANTAGE</span><span>ORBIT</span><span>ATELIER</span><span>HALO</span></div>
<section><div class="sh"><h2>Batteries included.</h2><p>Stop rebuilding the same six things on every project.</p></div><div class="feat">
<div class="f"><i>&#128274;</i><h3>Auth that just works</h3><p>Email, OAuth, magic links and sessions wired up on day one.</p></div>
<div class="f"><i>&#128179;</i><h3>Billing built in</h3><p>Subscriptions, trials, proration and a customer portal.</p></div>
<div class="f"><i>&#128200;</i><h3>Analytics</h3><p>Product events and funnels without a second vendor.</p></div>
</div></section>
<section><div class="sh"><h2>Simple pricing.</h2><p>No seats. No surprises.</p></div><div class="pricing">
<div class="pl"><small>HOBBY</small><b>$0</b><span class="per">forever</span><ul><li>1 project</li><li>Community support</li><li>LaunchKit branding</li></ul><button class="btn dark">Get started</button></div>
<div class="pl best"><small>PRO - MOST POPULAR</small><b>$29</b><span class="per" style="color:#9a9a9a">per month</span><ul><li>Unlimited projects</li><li>Custom domains</li><li>Priority support</li><li>No branding</li></ul><button class="btn lime">Start 14-day trial</button></div>
<div class="pl"><small>TEAM</small><b>$99</b><span class="per">per month</span><ul><li>Everything in Pro</li><li>Roles and permissions</li><li>SSO / SAML</li></ul><button class="btn dark">Contact sales</button></div>
</div></section>
<section><div class="sh"><h2>Questions?</h2></div><div class="faq">
<div class="q open"><b>Do I need a credit card to start? <i>+</i></b><p>No. The Hobby tier is free forever and the Pro trial doesn't ask for payment details until day 14.</p></div>
<div class="q"><b>Can I self-host? <i>+</i></b><p>Yes - Team plans include a self-hosting license and deployment guides for AWS, Fly and bare metal.</p></div>
<div class="q"><b>What's the refund policy? <i>+</i></b><p>Full refund within 30 days, no questions asked. Email support and we'll process it same day.</p></div>
</div></section>
<div class="cta"><h2>Ship it this weekend.</h2><p>Join 9,000+ founders who stopped rebuilding boilerplate.</p><button class="btn lime">Start building free</button></div>
<footer><span>&copy; 2026 LaunchKit</span><span>Privacy &middot; Terms &middot; Security</span></footer>
<script>document.querySelectorAll(".q").forEach(function(q){q.addEventListener("click",function(){q.classList.toggle("open")})});</script>
</body></html>`
};
