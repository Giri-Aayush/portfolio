import { test } from "@playwright/test";

const BASE = "http://localhost:3001";

const pages = [
  { name: "blogs-index", path: "/blogs" },
  { name: "erc-4337-post", path: "/blogs/erc-4337-is-not-enough" },
  {
    name: "sovereign-rollups-post",
    path: "/blogs/sovereign-rollups-on-bitcoin",
  },
];

const viewports = [
  { name: "desktop-1440", width: 1440, height: 900 },
  { name: "mobile-iphone14", width: 390, height: 844 },
];

for (const vp of viewports) {
  test.describe(`${vp.name}`, () => {
    test.use({ viewport: { width: vp.width, height: vp.height } });

    for (const p of pages) {
      test(`screenshot - ${p.name}`, async ({ page }) => {
        await page.goto(`${BASE}${p.path}`, { waitUntil: "networkidle" });
        await page.waitForTimeout(1500);
        await page.screenshot({
          path: `screenshots/blogs/${vp.name}/${p.name}.png`,
          fullPage: true,
        });
      });
    }
  });
}
