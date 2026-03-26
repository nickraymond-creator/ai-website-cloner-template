#!/usr/bin/env node
/**
 * Stripe AU asset downloader
 * Downloads all images referenced in the Stripe AU homepage
 * Run: node scripts/download-assets.mjs
 */

import { createWriteStream, mkdirSync, existsSync } from "fs";
import { pipeline } from "stream/promises";
import path from "path";

const PUBLIC_DIR = "./public";
const IMAGES_DIR = `${PUBLIC_DIR}/images`;
const SEO_DIR = `${PUBLIC_DIR}/seo`;

// Ensure directories exist
[IMAGES_DIR, SEO_DIR].forEach((dir) => {
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
});

const assets = [
  // Hero
  {
    url: "https://images.stripeassets.com/fzn2n1nzq965/115d4Vd5LVAsqFGDR1ClAv/0ceb2c44a7a7182cd624262420af7544/wave-fallback-desktop.png",
    dest: `${IMAGES_DIR}/wave-fallback-desktop.png`,
  },
  // Solutions section
  {
    url: "https://images.stripeassets.com/fzn2n1nzq965/vYmk6v8n7oDAwbDpwhjV6/846f9b3e214549b8f14e2b8c8cfe9343/payment-bento-background.jpg",
    dest: `${IMAGES_DIR}/payment-bento-background.jpg`,
  },
  {
    url: "https://images.stripeassets.com/fzn2n1nzq965/1j4wM9h2bBsyRFvTv6Wsn0/07f4b9b1e1e17fdc509d9087454dd8bc/ConnectBentoBackground.jpg",
    dest: `${IMAGES_DIR}/connect-bento-background.jpg`,
  },
  // Stats section
  {
    url: "https://images.stripeassets.com/fzn2n1nzq965/63zO5Z4CABvFl3pLLhnu3l/a9c12c883f820dc29d29fa0b9dcb0814/DatavizStatic3x.png",
    dest: `${IMAGES_DIR}/dataviz-static.png`,
  },
  // Enterprise case studies
  {
    url: "https://images.stripeassets.com/fzn2n1nzq965/24BNV3GGtvCprFLrYovyaa/b2eac20a1d5ec75e4bff3888b998d163/enterprise-accordion-hertz.png",
    dest: `${IMAGES_DIR}/enterprise-hertz.png`,
  },
  {
    url: "https://images.stripeassets.com/fzn2n1nzq965/37wKFanVluouT2iEZUbD0H/f75e77141e1330ad81ea18c6aea65f0c/enterprise-accordion-urbn.png",
    dest: `${IMAGES_DIR}/enterprise-urbn.png`,
  },
  {
    url: "https://images.stripeassets.com/fzn2n1nzq965/1v5hJ2NWvKpQfVbMqOzCpE/c900b9ed4c288f7cf0a0dced5f4983f2/enterprise-accordion-instacart.png",
    dest: `${IMAGES_DIR}/enterprise-instacart.png`,
  },
  {
    url: "https://images.stripeassets.com/fzn2n1nzq965/5AQ9A87KzwpPy4CD3uPz5C/4afd1a1e9d6e1d698c4c7c74a4868822/enterprise-accordion-lemonde.png",
    dest: `${IMAGES_DIR}/enterprise-lemonde.png`,
  },
  // Platform section
  {
    url: "https://images.stripeassets.com/fzn2n1nzq965/5dQAw5oJf3TOO1Jt6IKDRH/f391594c11f38d821259acdd3412a7a6/platform-graphic-background_2x.png",
    dest: `${IMAGES_DIR}/platform-graphic-background.png`,
  },
  // News items
  {
    url: "https://images.stripeassets.com/fzn2n1nzq965/yqIFyZRGU5zDwdUsWtUyM/25b9f23c748c4d54079a09016fde59d8/annual-letter-mobile.png",
    dest: `${IMAGES_DIR}/news-annual-letter.png`,
  },
  {
    url: "https://images.stripeassets.com/fzn2n1nzq965/6yE6G454SGCJnJgEYsS2MB/70b405a1dce904bc0c6f2698223fb966/the-happenings-bfcm-mobile.png",
    dest: `${IMAGES_DIR}/news-bfcm.png`,
  },
  {
    url: "https://images.stripeassets.com/fzn2n1nzq965/33xcv8eCmXzMzWXicVQ4cF/83d91fa419ff8d1b9466739b4ecdcb1d/the-happenings-tidemark-mobile.png",
    dest: `${IMAGES_DIR}/news-tidemark.png`,
  },
  {
    url: "https://images.stripeassets.com/fzn2n1nzq965/t03tXrgvnHUPGwxYUgSxN/bd8da003434c9e9fb72c719b9edb429b/the-happenings-cheeky-pint-mobile.png",
    dest: `${IMAGES_DIR}/news-shopify-collison.png`,
  },
  {
    url: "https://images.stripeassets.com/fzn2n1nzq965/Pd2JQ7FZ1pYMIMGDwvMdV/13e7e021ca23d042da8ac07be829f7ef/the-happenings-payment-processing-mobile.png",
    dest: `${IMAGES_DIR}/news-in-app-payments.png`,
  },
  {
    url: "https://images.stripeassets.com/fzn2n1nzq965/4LaZVLqDqGf9091wqUAmFp/fbe9fc307e1336b69bcd9be4ec5c4752/the-happenings-crypto-mobile.png",
    dest: `${IMAGES_DIR}/news-crypto.png`,
  },
  {
    url: "https://images.stripeassets.com/fzn2n1nzq965/1k7ckFceNFlxqF47hWJUlM/eaa4d8b3f8e4b76ba3dd7df7da88e099/the-happenings-agentic-mobile.png",
    dest: `${IMAGES_DIR}/news-agentic.png`,
  },
  {
    url: "https://images.stripeassets.com/fzn2n1nzq965/7EVLwfXmG3pl1vhBssMrFB/b6d8612b1f567922c1355d864c279678/the-happenings-payment-retailers-mobile.png",
    dest: `${IMAGES_DIR}/news-retail.png`,
  },
  // Book section
  {
    url: "https://images.stripeassets.com/fzn2n1nzq965/5PHZ2AECWxSFJxbMkvbr6C/17bce6607c8526eed664c15682199e18/Book_cover.png",
    dest: `${IMAGES_DIR}/book-how-buildings-learn.png`,
  },
  {
    url: "https://images.stripeassets.com/fzn2n1nzq965/1hmjWQj2Xwglop2rAW62zf/2899db472c5095e1a6b69bee0ead60c9/WorkInProgressIcon.png",
    dest: `${IMAGES_DIR}/work-in-progress-icon.png`,
  },
  // Favicon
  {
    url: "https://images.stripeassets.com/fzn2n1nzq965/1hgcBNd12BfT9VLgbId7By/01d91920114b124fb4cf6d448f9f06eb/favicon.svg",
    dest: `${SEO_DIR}/favicon.svg`,
  },
];

async function downloadAsset(url, dest) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error(`  ✗ ${path.basename(dest)} — HTTP ${response.status}`);
      return false;
    }
    await pipeline(response.body, createWriteStream(dest));
    console.log(`  ✓ ${path.basename(dest)}`);
    return true;
  } catch (err) {
    console.error(`  ✗ ${path.basename(dest)} — ${err.message}`);
    return false;
  }
}

async function downloadBatch(batch) {
  return Promise.all(batch.map((a) => downloadAsset(a.url, a.dest)));
}

async function main() {
  console.log(`Downloading ${assets.length} assets…\n`);
  // Download in batches of 4
  for (let i = 0; i < assets.length; i += 4) {
    await downloadBatch(assets.slice(i, i + 4));
  }
  console.log("\nDone.");
}

main();
