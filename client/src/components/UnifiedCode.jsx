import { useMemo,useState } from "react";import { Check,Clipboard,Download,LockKeyhole,Sparkles } from "lucide-react";import { getCombinedSourceCode } from "../services/combinedSource";
function buildExactPrompt(product){const tags=product.tags?.join(", ")||"HTML, CSS and JavaScript";return `Recreate this exact single-page UI product as a production-ready ${product.category||"web"} section.

Product: ${product.name}
Slug: ${product.slug}
Category: ${product.category||"UI"}
Preview type: ${product.previewType||"custom"}
Purpose: ${product.description||"A polished responsive interface."}
Technology: ${tags}

Build requirements:
- Match the original hierarchy, proportions, spacing, typography, colors, borders, shadows, radii and visual emphasis.
- Make it fully responsive for desktop, laptop, tablet and mobile.
- Preserve every visible interaction and state.
- Use semantic accessible markup and keyboard-friendly controls.
- Keep the implementation self-contained and easy to paste into a new project.
- Do not add unrelated sections, placeholder copy, stock imagery or extra features.
- Return complete working code with no explanations.

The companion source code is the reference implementation for this exact product. Preserve its behavior and appearance when adapting it to another framework.`}
export default function UnifiedCode({product,onLoadSource}){const[copied,setCopied]=useState(false);const[promptCopied,setPromptCopied]=useState(false);const code=useMemo(()=>getCombinedSourceCode(product),[product]);const prompt=product.prompt||buildExactPrompt(product);async function copyText(text,setter){try{await navigator.clipboard.writeText(text)}catch{const t=document.createElement("textarea");t.value=text;document.body.appendChild(t);t.select();document.execCommand("copy");t.remove()}setter(true);setTimeout(()=>setter(false),1500)}function download(){const blob=new Blob([code],{type:"text/html;charset=utf-8"});const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download=`${product.slug}.html`;document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url)}const locked=product.productType!=="FREE"&&!product.code?.html;return <section className="unified-code"><div className="code-heading"><div><div className="code-title"><span/>Source code + prompt</div><small>Exact product implementation and recreation prompt</small></div><div className="code-actions">{locked?<button className="code-secondary" onClick={onLoadSource}><LockKeyhole size={13}/>Unlock source</button>:<button className="code-secondary" onClick={download}><Download size={13}/>Download</button>} {!locked&&<button className={`code-copy ${copied?"copied":""}`} onClick={()=>copyText(code,setCopied)}>{copied?<Check size={14}/>:<Clipboard size={14}/>} {copied?"Copied ✓":"Copy all code"}</button>}</div></div><div className="code-prompt-grid"><div>{locked?<div className="locked-code"><LockKeyhole size={22}/><h3>Premium source is protected.</h3><p>Purchase this product to unlock the complete source code.</p></div>:<div className="code-editor"><div className="codebar"><span>● ● ●</span><b>{product.slug}.html</b><em>Ready</em></div><pre>{code.split("\n").map((line,i)=><code key={i}><i>{String(i+1).padStart(2,"0")}</i><span>{line||" "}</span></code>)}</pre></div>}</div><div className="prompt-panel"><div className="prompt-head"><div className="code-title"><Sparkles size={14}/>Exact build prompt</div><button className={`code-copy ${promptCopied?"copied":""}`} onClick={()=>copyText(prompt,setPromptCopied)}>{promptCopied?<Check size={13}/>:<Clipboard size={13}/>} {promptCopied?"Copied ✓":"Copy prompt"}</button></div><p>{prompt}</p></div></div></section>}
