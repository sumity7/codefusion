const API=import.meta.env.VITE_API_URL||"http://localhost:5000/api";
function normalizeProduct(product){if(!product)return product;return product.previewCode?{...product,previewMode:"source"}:product}
async function request(path,options={}){const token=localStorage.getItem("codefusion_token");const headers={"Content-Type":"application/json",...(options.headers||{})};if(token)headers.Authorization=`Bearer ${token}`;const response=await fetch(`${API}${path}`,{...options,headers});const data=await response.json().catch(()=>({}));if(!response.ok){const error=new Error(data.message||"Request failed.");error.status=response.status;error.code=data.code;error.remaining=data.remaining;throw error}return data}
const json=(method,body)=>({method,body:JSON.stringify(body)});
export const api={
 base:API,
 auth:{login:(body)=>request("/auth/login",json("POST",body)),adminLogin:(body)=>request("/auth/admin-login",json("POST",body)),register:(body)=>request("/auth/register",json("POST",body)),forgot:(body)=>request("/auth/forgot-password",json("POST",body)),resendOtp:(body)=>request("/auth/resend-otp",json("POST",body)),verifyOtp:(body)=>request("/auth/verify-otp",json("POST",body)),resetPassword:(body)=>request("/auth/reset-password",json("POST",body)),me:()=>request("/auth/me"),update:(body)=>request("/auth/me",json("PUT",body)),changePassword:(body)=>request("/auth/password",json("PUT",body))},
 products:{
  list:async(params="")=>{const result=await request(`/products${params}`);result.products=(result.products||[]).map(normalizeProduct);return result},
  categories:()=>request("/products/categories"),
  tags:()=>request("/products/tags"),
  searchIndex:()=>request("/products/search-index"),
  releases:(days=7)=>request(`/products/releases?days=${days}`),
  one:async(slug)=>{const result=await request(`/products/${slug}`);result.product=normalizeProduct(result.product);return result},
  // Preview source only — what a listing card loads once it's on screen.
  preview:(slug)=>request(`/products/${encodeURIComponent(slug)}/preview`),
  copyCode:(slug,key)=>request(`/products/${slug}/copy-code`,{method:"POST",headers:key?{"Idempotency-Key":key}:{}}),
  copyPrompt:(slug,key)=>request(`/products/${slug}/copy-prompt`,{method:"POST",headers:key?{"Idempotency-Key":key}:{}}),
  collections:()=>request("/products/collections"),
  updates:()=>request("/products/me/updates"),
  markUpdateSeen:(slug)=>request(`/products/me/updates/${slug}/seen`,{method:"POST"}),
  adminAll:()=>request("/products/admin/all"),adminOne:(id)=>request(`/products/admin/${id}`),create:(body)=>request("/products/admin",json("POST",body)),update:(id,body)=>request(`/products/admin/${id}`,json("PUT",body)),duplicate:(id)=>request(`/products/admin/${id}/duplicate`,{method:"POST"}),remove:(id)=>request(`/products/admin/${id}`,{method:"DELETE"})},
 subscription:{get:()=>request("/subscription"),plans:()=>request("/subscription/plans"),balance:()=>request("/subscription/balance"),history:()=>request("/subscription/history"),checkout:()=>request("/subscription/checkout",{method:"POST"}),verify:(body)=>request("/subscription/verify",json("POST",body)),adminSettings:()=>request("/subscription/admin/settings"),updateAdminSettings:(body)=>request("/subscription/admin/settings",json("PUT",body)),adminSubscribers:()=>request("/subscription/admin/subscribers"),adminTransactions:()=>request("/subscription/admin/transactions"),adminPayments:()=>request("/subscription/admin/payments")},
 creators:{list:()=>request("/creators"),one:(slug)=>request(`/creators/${encodeURIComponent(slug)}`)},
 wishlist:{list:()=>request("/wishlist"),toggle:(slug)=>request(`/wishlist/${slug}`,{method:"POST"})},
 reviews:{list:(slug)=>request(`/reviews/${slug}`),create:(slug,body)=>request(`/reviews/${slug}`,json("POST",body)),removeMine:(slug)=>request(`/reviews/${slug}/mine`,{method:"DELETE"}),helpful:(id)=>request(`/reviews/${id}/helpful`,{method:"POST"}),admin:()=>request("/reviews/admin/all"),moderate:(id,status)=>request(`/reviews/admin/${id}`,json("PUT",{status}))},
 collections:{mine:()=>request("/me/collections"),one:(id)=>request(`/me/collections/${id}`),create:(body)=>request("/me/collections",json("POST",body)),update:(id,body)=>request(`/me/collections/${id}`,json("PUT",body)),remove:(id)=>request(`/me/collections/${id}`,{method:"DELETE"}),toggle:(id,slug)=>request(`/me/collections/${id}/items/${slug}`,{method:"POST"}),shared:(shareId)=>request(`/me/collections/shared/${encodeURIComponent(shareId)}`)},
 analytics:{admin:(days=30)=>request(`/analytics/admin?days=${days}`),popularSearches:()=>request("/analytics/popular-searches")},
 admin:{dashboard:()=>request("/admin/dashboard"),summary:()=>request("/admin/summary"),users:()=>request("/admin/users"),categories:()=>request("/admin/categories"),createCategory:(body)=>request("/admin/categories",json("POST",body)),updateCategory:(id,body)=>request(`/admin/categories/${id}`,json("PUT",body)),removeCategory:(id)=>request(`/admin/categories/${id}`,{method:"DELETE"}),collections:()=>request("/admin/collections"),createCollection:(body)=>request("/admin/collections",json("POST",body)),updateCollection:(id,body)=>request(`/admin/collections/${id}`,json("PUT",body)),removeCollection:(id)=>request(`/admin/collections/${id}`,{method:"DELETE"}),creators:()=>request("/admin/creators"),createCreator:(body)=>request("/admin/creators",json("POST",body)),updateCreator:(id,body)=>request(`/admin/creators/${id}`,json("PUT",body)),removeCreator:(id)=>request(`/admin/creators/${id}`,{method:"DELETE"}),settings:()=>request("/admin/settings"),saveSettings:(settings)=>request("/admin/settings",json("PUT",{settings}))}};
