import fs from 'fs';
import path from 'path';
import process from 'node:process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');
const indexPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('Error: dist/index.html does not exist. Run vite build first.');
  process.exit(1);
}

const htmlContent = fs.readFileSync(indexPath, 'utf8');

// List of all valid static routes in the application
const validRoutes = [
  'cars-fleet-for-rent',
  'blog',
  ...Array.from({ length: 22 }, (_, i) => `car/${i + 1}`),
];

console.log('Generating static route HTML files for SPA fallback-free routing...');

validRoutes.forEach((route) => {
  const routeDir = path.join(distDir, route);
  fs.mkdirSync(routeDir, { recursive: true });
  fs.writeFileSync(path.join(routeDir, 'index.html'), htmlContent, 'utf8');
  console.log(`  ✓ Generated dist/${route}/index.html`);
});

console.log('Successfully generated all valid static route entry points.');
