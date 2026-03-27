import { test } from "@playwright/test";

const devices = [
  { name: "desktop-1920", width: 1920, height: 1080 },
  { name: "desktop-1440", width: 1440, height: 900 },
  { name: "laptop-1280", width: 1280, height: 800 },
  { name: "tablet-ipad", width: 768, height: 1024 },
  { name: "mobile-iphone14", width: 390, height: 844 },
  { name: "mobile-iphone-se", width: 375, height: 667 },
  { name: "mobile-pixel7", width: 412, height: 915 },
];

const sections = [
  { name: "full-page", selector: null },
  { name: "hero", selector: "#hero" },
  { name: "chronicle", selector: "#chronicle" },
  { name: "awards", selector: "#awards" },
  { name: "transmission", selector: "#transmission" },
  { name: "logs", selector: "#logs" },
  { name: "terminal", selector: "#terminal" },
  { name: "footer", selector: "#footer" },
];

for (const device of devices) {
  test.describe(`${device.name} (${device.width}x${device.height})`, () => {
    test.use({ viewport: { width: device.width, height: device.height } });

    for (const section of sections) {
      test(`screenshot - ${section.name}`, async ({ page }) => {
        await page.goto("http://localhost:3000", { waitUntil: "networkidle" });

        // Wait for fonts and images
        await page.waitForTimeout(1500);

        if (section.selector) {
          const el = page.locator(section.selector);
          await el.scrollIntoViewIfNeeded();
          await page.waitForTimeout(500);
          await el.screenshot({
            path: `screenshots/${device.name}/${section.name}.png`,
          });
        } else {
          await page.screenshot({
            path: `screenshots/${device.name}/${section.name}.png`,
            fullPage: true,
          });
        }
      });
    }
  });
}
