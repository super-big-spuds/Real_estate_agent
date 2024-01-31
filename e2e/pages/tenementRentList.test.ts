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
});
