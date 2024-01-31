import { test } from "@playwright/test";
import { constants } from "../util";

test.describe("Tenement Rent List Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${constants.frontendURL}/Tenements/Rent`);
    await page.screenshot({
      path: constants.getScreenShotPath("tenementRent"),
    });
  });

  test("should render", async ({ page }) => {
    test.expect(await page.getByText("error..").count()).toEqual(0);
  });

  test("get tenement list API test", async ({ page }) => {
    await page.reload();

    const response = await page.waitForResponse((response) => {
      return response.url().includes("tenement");
    });

    test.expect(response.status()).toBe(200);
  });
});
