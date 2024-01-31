import { test, expect } from "@playwright/test";
import { constants } from "../util";

test.describe("Collection Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${constants.frontendURL}/collections`);
    await page.screenshot({ path: constants.getScreenShotPath("collections") });
  });

  test("get collection list API test", async ({ page }) => {
    await page.reload();

    const response = await page.waitForResponse((response) => {
      return response.url().includes("collection");
    });

    expect(response.status()).toBe(200);
  });

  // TODO - Clicked collection and check the detail page
});
