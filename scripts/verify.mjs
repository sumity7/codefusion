import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const required = [
  'client/src/App.jsx',
  'client/src/pages/Admin.jsx',
  'client/src/pages/AdminLogin.jsx',
  'client/src/pages/ForgotPassword.jsx',
  'client/src/pages/Subscription.jsx',
  'client/src/components/ProductCard.jsx',
  'client/src/components/ProductVisual.jsx',
  'client/src/components/UnifiedCode.jsx',
  'client/src/components/CategorySidebar.jsx',
  'client/src/hooks/useTheme.jsx',
  'server/src/routes/auth.js',
  'server/src/routes/admin.js',
  'server/src/routes/products.js',
  'server/src/routes/subscription.js',
  'server/src/models/Product.js',
  'server/src/models/Category.js',
  'server/src/models/Collection.js',
  'server/src/models/SiteSetting.js',
  'server/src/models/TokenTransaction.js',
  'server/scripts/boilerplateSources.js',
  'PROMPTS/PROJECT-BUILD-PROMPT.md',
  'PROMPTS/V5-UPGRADE-PROMPT.md'
];
for (const rel of required) {
  if (!fs.existsSync(path.join(root, rel))) throw new Error(`Missing ${rel}`);
}

const seed = fs.readFileSync(path.join(root, 'server/scripts/seed.js'), 'utf8');
const slugs = [...seed.matchAll(/slug:"([^"]+)"/g)].map((m) => m[1]);
if (slugs.length !== 56) throw new Error(`Expected 56 products, found ${slugs.length}`);

const coreSource = await import(pathToFileURL(path.join(root, 'server/scripts/productSources.js')));
const boilerplateSource = await import(pathToFileURL(path.join(root, 'server/scripts/boilerplateSources.js')));
const sourceKeys = [...Object.keys(coreSource.productSources || {}), ...Object.keys(boilerplateSource.boilerplateSources || {})];
for (const slug of slugs) {
  if (!sourceKeys.includes(slug)) throw new Error(`Missing source for ${slug}`);
}

if (!seed.includes('"Boilerplates"')) throw new Error('Boilerplates category missing from seed.js');
const boilerplateSlugs = ['nova-saas','atlas-agency','commercex','finora','medora','learnflow','travelora','devdock','socially','launchkit'];
const missingBoilerplates = boilerplateSlugs.filter((s) => !slugs.includes(s));
if (missingBoilerplates.length) throw new Error(`Missing boilerplate products: ${missingBoilerplates.join(', ')}`);

const app = fs.readFileSync(path.join(root, 'client/src/App.jsx'), 'utf8');
for (const route of ['/admin/login', '/admin/*', '/forgot-password', '/subscription']) {
  if (!app.includes(route)) throw new Error(`Missing route ${route}`);
}

const auth = fs.readFileSync(path.join(root, 'server/src/routes/auth.js'), 'utf8');
for (const endpoint of ['/forgot-password', '/resend-otp', '/verify-otp', '/reset-password', '/admin-login']) {
  if (!auth.includes(endpoint)) throw new Error(`Missing auth endpoint ${endpoint}`);
}

const admin = fs.readFileSync(path.join(root, 'client/src/pages/Admin.jsx'), 'utf8');
const adminSections = ['Categories', 'Collections', 'Prompts', 'Subscribers', 'UsersPage', 'Reviews', 'TokenActivity', 'Analytics', 'PlanSettings', 'Settings'];
for (const section of adminSections) {
  if (!admin.includes(`function ${section}`)) throw new Error(`Missing admin section ${section}`);
}
if (admin.includes('function Coupons') || admin.includes('function Orders') || admin.includes('function Downloads')) {
  throw new Error('Found a removed admin section (Coupons/Orders/Downloads) still present');
}

const api = fs.readFileSync(path.join(root, 'client/src/services/api.js'), 'utf8');
for (const method of ['adminLogin', 'verifyOtp', 'resetPassword', 'duplicate', 'createCategory', 'createCollection', 'saveSettings', 'categories', 'adminSubscribers', 'adminTransactions']) {
  if (!api.includes(method)) throw new Error(`Missing API method ${method}`);
}
if (api.includes('coupons:')) throw new Error('Found removed api.coupons still present');

const productsRoute = fs.readFileSync(path.join(root, 'server/src/routes/products.js'), 'utf8');
if (!productsRoute.includes('"/categories"')) throw new Error('Missing public GET /products/categories route');

const leakedEnv = fs.existsSync(path.join(root, 'server/.env'));
if (leakedEnv) throw new Error('server/.env must not be bundled');

console.log('CodeFusion verification passed.');
console.log(`Products: ${slugs.length}/56`);
console.log(`Product sources: ${sourceKeys.length}`);
console.log(`Admin sections: ${adminSections.length}`);
console.log('OTP reset endpoints: 5');
console.log('Secret .env bundled: no');
