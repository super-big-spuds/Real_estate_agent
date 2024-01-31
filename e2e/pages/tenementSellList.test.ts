import { test } from "@playwright/test";
import { constants } from "../util";

test.describe("Tenement Sell List Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${constants.frontendURL}/Tenements/Sell`);
    await page.screenshot({
      path: constants.getScreenShotPath("tenementSell"),
    });
  });

  test("should render", async ({ page }) => {
    test.expect(await page.getByText("error..").count()).toEqual(0);
  });
});
