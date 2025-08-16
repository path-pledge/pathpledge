import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

async function generateSitemap() {
  const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/programs', changefreq: 'weekly', priority: 0.8 },
    { url: '/pricing', changefreq: 'weekly', priority: 0.8 },
    { url: '/leaderboard', changefreq: 'weekly', priority: 0.7 },
    { url: '/contact', changefreq: 'monthly', priority: 0.6 },
    
  ];

  const sitemap = new SitemapStream({ hostname: 'https://www.pathpledge.in' });

  const writeStream = createWriteStream('./public/sitemap.xml');
  sitemap.pipe(writeStream);

  links.forEach(link => sitemap.write(link));
  sitemap.end();

  await streamToPromise(sitemap);
  console.log('✅ Sitemap generated at public/sitemap.xml');
}

generateSitemap().catch(console.error);
