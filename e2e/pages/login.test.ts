import { test, expect } from "@playwright/test";
import { constants } from "../util";

test.describe("Login Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${constants.frontendURL}/login`, {
      waitUntil: "domcontentloaded",
    });
    await page.screenshot({ path: constants.getScreenShotPath("login") });
  });

  test("Login test", async ({ page }) => {
    await page.fill('input[type="email"]', "admin@gmail.com");
    await page.fill('input[type="user_password"]', "admin");
    await page.click('button[type="submit"]');
    const response = await page.waitForResponse((response) =>
      response.url().includes("login")
    );

    expect(response.status()).toBe(201);
  });
});
