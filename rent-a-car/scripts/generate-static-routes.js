import fs from 'fs';
import path from 'path';
import process from 'node:process';
import { fileURLToPath } from 'url';
import { carsData, getCarDisplayName } from '../src/data/carsData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');
const indexPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('Error: dist/index.html does not exist. Run vite build first.');
  process.exit(1);
}

const templateHtml = fs.readFileSync(indexPath, 'utf8');

const routeMeta = {
  'cars-fleet-for-rent': {
    title: 'Cars for Rent in Lahore & Bahria Town | Fleet | New Ali Lajpal',
    description: 'Browse our full fleet of cars for rent in Lahore and Bahria Town. Economy hatchbacks, sedans, luxury SUVs, and group vans.',
    h1: 'Cars for Rent in Bahria Town Lahore',
    links: [
      { href: '/', text: 'Home' },
      { href: '/blog', text: 'Car Rental Blog' },
    ]
  },
  'blog': {
    title: 'Best Car Rental in Bahria Town Lahore | Complete Rental Guide',
    description: 'Looking for the best car rental in Bahria Town Lahore? Explore our complete guide to choosing rental cars, services, and airport travel.',
    h1: 'Best Car Rental in Bahria Town Lahore: A Complete Guide',
    links: [
      { href: '/', text: 'Home' },
      { href: '/cars-fleet-for-rent', text: 'Cars Fleet' },
    ]
  }
};

// Add route meta for each car
carsData.forEach((car) => {
  const displayName = getCarDisplayName(car);
  const h1Text = car.make === 'Service' ? `${displayName} Service in Lahore` : `${displayName} Rent a Car in Lahore`;
  const routeKey = `car/${car.id}`;
  routeMeta[routeKey] = {
    title: `${displayName} Rent A Car in Lahore | New Ali Lajpal`,
    description: `Rent ${displayName} in Lahore & Bahria Town. Comfort, reliability, and low rates. Book with New Ali Lajpal.`,
    h1: h1Text,
    links: [
      { href: '/', text: 'Home' },
      { href: '/cars-fleet-for-rent', text: 'Cars Fleet' },
      { href: '/blog', text: 'Car Rental Blog' },
    ]
  };
});

console.log('Generating static route HTML files for SPA fallback-free routing...');

Object.keys(routeMeta).forEach((route) => {
  const meta = routeMeta[route];
  const routeDir = path.join(distDir, route);
  fs.mkdirSync(routeDir, { recursive: true });

  let pageHtml = templateHtml;

  // Replace Title & Description if matching tags exist
  if (meta.title) {
    pageHtml = pageHtml.replace(/<title>.*?<\/title>/s, `<title>${meta.title}</title>`);
  }
  if (meta.description) {
    pageHtml = pageHtml.replace(/<meta\s+name="description"\s+content=".*?"\s*\/?>/s, `<meta name="description" content="${meta.description}" />`);
  }

  // Pre-hydration root content for raw HTML crawlers
  const navHtml = meta.links.map(l => `<a href="${l.href}">${l.text}</a>`).join(' ');
  const rootContent = `<div id="root"><h1>${meta.h1}</h1><p>${meta.description}</p><nav>${navHtml}</nav></div>`;

  pageHtml = pageHtml.replace('<div id="root"></div>', rootContent);

  fs.writeFileSync(path.join(routeDir, 'index.html'), pageHtml, 'utf8');
  console.log(`  ✓ Generated dist/${route}/index.html with static H1 and links`);
});

// Also update root dist/index.html with home pre-hydration fallback if appropriate
let homeHtml = templateHtml;
const homeH1 = 'Car Rental in Bahria Town Lahore – New Ali Lajpal Rent A Car';
const homeNav = '<a href="/cars-fleet-for-rent">Cars for Rent in Bahria Town Lahore</a> <a href="/blog">Car Rental Blog & Guides</a>';
const homeRoot = `<div id="root"><h1>${homeH1}</h1><p>Book reliable cars for rent in Bahria Town, near Teen Talwar, and across Lahore.</p><nav>${homeNav}</nav></div>`;
homeHtml = homeHtml.replace('<div id="root"></div>', homeRoot);
fs.writeFileSync(indexPath, homeHtml, 'utf8');
console.log('  ✓ Updated dist/index.html with static home H1 and links');

console.log('Successfully generated all valid static route entry points.');
