import { test } from "@playwright/test";
import { constants } from "../util";

test.describe("Notice Calandar Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${constants.frontendURL}/Calenderlist`);
    await page.screenshot({
      path: constants.getScreenShotPath("NoticeCalandar"),
    });
  });

  test("should render", async ({ page }) => {
    test.expect(await page.getByText("error..").count()).toEqual(0);
  });

  test("get calandar API test", async ({ page }) => {
    await page.reload();

    const response = await page.waitForResponse((response) => {
      return response.url().includes("calendar");
    });

    test.expect(response.status()).toBe(200);
  });
});
