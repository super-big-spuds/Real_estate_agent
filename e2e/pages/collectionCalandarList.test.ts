import { test } from "@playwright/test";
import { constants } from "../util";

test.describe("Collection Calandar Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${constants.frontendURL}/Calenderlist_collection`);
    await page.screenshot({
      path: constants.getScreenShotPath("CollectionCalandar"),
    });
  });

  test("should render", async ({ page }) => {
    test.expect(await page.getByText("error..").count()).toEqual(0);
  });

  test("get collection calandar API test", async ({ page }) => {
    await page.reload();

    const response = await page.waitForResponse((response) => {
      return response.url().includes("calendar");
    });

    test.expect(response.status()).toBe(200);
  });
});
