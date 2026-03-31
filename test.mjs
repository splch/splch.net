import puppeteer from 'puppeteer';

const BASE = 'http://localhost:8765';
let passed = 0, failed = 0;

function assert(name, condition, detail = '') {
  if (condition) { console.log(`  PASS: ${name}`); passed++; }
  else { console.log(`  FAIL: ${name} ${detail}`); failed++; }
}

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
const page = await browser.newPage();
const errors = [];
page.on('pageerror', e => errors.push(e.message));
page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });

// 1. Home page loads
console.log('\n--- Home Page ---');
await page.goto(BASE + '/#Home', { waitUntil: 'networkidle0', timeout: 15000 });
const title = await page.$eval('#title', el => el.innerText);
assert('Title renders', title.length > 0 && title !== 'Loading…', `got: "${title}"`);

const coverDisplay = await page.$eval('#cover', el => getComputedStyle(el).display);
assert('Cover image visible', coverDisplay !== 'none');

const activeLink = await page.$eval('.link.active', el => el.id);
assert('Home nav is active', activeLink === 'Home', `got: "${activeLink}"`);

const previewExists = await page.$('h2.template');
assert('Latest post preview shown', !!previewExists);

// 2. Archive page
console.log('\n--- Archive Page ---');
await page.click('#Archive');
await page.waitForSelector('#search', { timeout: 5000 });
const searchExists = await page.$('#search');
assert('Search input renders', !!searchExists);

const posts = await page.$$('h2.template');
assert('Posts listed', posts.length > 0, `found: ${posts.length}`);

// 3. Search
console.log('\n--- Search ---');
await page.type('#search', 'quantum');
await page.keyboard.press('Enter');
await new Promise(r => setTimeout(r, 500));
const searchResults = await page.$$('h2.template');
assert('Search filters posts', searchResults.length > 0 && searchResults.length <= posts.length,
  `${searchResults.length} results vs ${posts.length} total`);

// 4. Click a blog post
console.log('\n--- Blog Post ---');
const firstPostTitle = await page.$eval('h2.template', el => el.innerText);
await page.click('h2.template');
await new Promise(r => setTimeout(r, 1000));
const postTitle = await page.$eval('#title', el => el.innerText);
assert('Post title rendered', postTitle.length > 0, `got: "${postTitle}"`);
const postBody = await page.$('.template');
assert('Post body rendered', !!postBody);

// 5. About page
console.log('\n--- About Page ---');
await page.click('#About');
await new Promise(r => setTimeout(r, 1000));
const aboutTitle = await page.$eval('#title', el => el.innerText);
assert('About page renders', aboutTitle.length > 0, `got: "${aboutTitle}"`);

// 6. Contact page
console.log('\n--- Contact Page ---');
await page.click('#Contact');
await new Promise(r => setTimeout(r, 1000));
const contactTitle = await page.$eval('#title', el => el.innerText);
assert('Contact page renders', contactTitle.length > 0, `got: "${contactTitle}"`);

// 7. Back button (popstate)
console.log('\n--- Navigation ---');
await page.goBack();
await new Promise(r => setTimeout(r, 500));
const backTitle = await page.$eval('#title', el => el.innerText);
assert('Back button works', backTitle === aboutTitle, `expected "${aboutTitle}", got "${backTitle}"`);

// 8. Console errors
console.log('\n--- Errors ---');
const realErrors = errors.filter(e => !e.includes('favicon'));
assert('No console errors', realErrors.length === 0, realErrors.join('; '));

await browser.close();
console.log(`\n=== ${passed} passed, ${failed} failed ===`);
process.exit(failed > 0 ? 1 : 0);
