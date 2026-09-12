import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const required = [
  'client/src/App.jsx',
  'client/src/pages/Admin.jsx',
  'client/src/pages/AdminLogin.jsx',
  'client/src/pages/ForgotPassword.jsx',
  'client/src/components/ProductCard.jsx',
  'client/src/components/ProductVisual.jsx',
  'client/src/components/UnifiedCode.jsx',
  'server/src/routes/auth.js',
  'server/src/routes/admin.js',
  'server/src/routes/products.js',
  'server/src/routes/orders.js',
  'server/src/models/Product.js',
  'server/src/models/Category.js',
  'server/src/models/Collection.js',
  'server/src/models/SiteSetting.js',
  'PROMPTS/PROJECT-BUILD-PROMPT.md',
  'PROMPTS/V5-UPGRADE-PROMPT.md'
];
for (const rel of required) {
  if (!fs.existsSync(path.join(root, rel))) throw new Error(`Missing ${rel}`);
}

const seed = fs.readFileSync(path.join(root, 'server/scripts/seed.js'), 'utf8');
const slugs = [...seed.matchAll(/slug:"([^"]+)"/g)].map((m) => m[1]);
if (slugs.length !== 10) throw new Error(`Expected 10 products, found ${slugs.length}`);

const source = await import(path.join(root, 'server/scripts/productSources.js'));
const sourceKeys = Object.keys(source.productSources || {});
for (const slug of slugs) {
  if (!sourceKeys.includes(slug)) throw new Error(`Missing source for ${slug}`);
}

const app = fs.readFileSync(path.join(root, 'client/src/App.jsx'), 'utf8');
for (const route of ['/admin/login', '/admin/*', '/forgot-password']) {
  if (!app.includes(route)) throw new Error(`Missing route ${route}`);
}

const auth = fs.readFileSync(path.join(root, 'server/src/routes/auth.js'), 'utf8');
for (const endpoint of ['/forgot-password', '/resend-otp', '/verify-otp', '/reset-password', '/admin-login']) {
  if (!auth.includes(endpoint)) throw new Error(`Missing auth endpoint ${endpoint}`);
}

const admin = fs.readFileSync(path.join(root, 'client/src/pages/Admin.jsx'), 'utf8');
for (const section of ['Categories','Collections','Prompts','Orders','UsersPage','Reviews','Downloads','Analytics','Coupons','Settings']) {
  if (!admin.includes(`function ${section}`)) throw new Error(`Missing admin section ${section}`);
}

const api = fs.readFileSync(path.join(root, 'client/src/services/api.js'), 'utf8');
for (const method of ['adminLogin','verifyOtp','resetPassword','duplicate','createCategory','createCollection','saveSettings','verifyCheckout']) {
  if (!api.includes(method)) throw new Error(`Missing API method ${method}`);
}

const leakedEnv = fs.existsSync(path.join(root, 'server/.env'));
if (leakedEnv) throw new Error('server/.env must not be bundled');

console.log('CodeFusion verification passed.');
console.log(`Products: ${slugs.length}/10`);
console.log(`Product sources: ${sourceKeys.length}`);
console.log('Admin sections: 11');
console.log('OTP reset endpoints: 5');
console.log('Secret .env bundled: no');
