import { test } from "@playwright/test";
import { constants } from "../util";

test.describe("Collection Edit Page", () => {
  test.beforeEach(async ({ page }) => {
    const id = 1;
    await page.goto(`${constants.frontendURL}/Collection/${id}`);
    await page.screenshot({
      path: constants.getScreenShotPath("collectionEdit"),
    });
  });

  test("should render", async ({ page }) => {
    test.expect(await page.getByText("error..").count()).toEqual(0);
  });

  //test("Edit Collection And Collection Notice Test", async ({ page }) => {
  //  await page.getByRole("button", { name: "新增提醒" }).click();
  //  await page
  //    .getByText("洽談日期：紀錄事項：提醒日期：提醒事項：刪 除")
  //    .getByText("刪 除")
  //    .first()
  //    .click();

  //  const deleteNoticeResponse = await page.waitForResponse(
  //    (response) =>
  //      response.url().includes("collection") && response.status() === 200
  //  );

  //  test.expect(deleteNoticeResponse.status()).toBe(200);

  //  await page.getByRole("button", { name: "儲 存" }).click();

  //  const response = await page.waitForResponse((response) =>
  //    response.url().includes("/api/collection")
  //  );
  //  const noticeResponse = await page.waitForResponse((response) =>
  //    response.url().includes("notices")
  //  );

  //  test.expect(response.status()).toBe(201);
  //  test.expect(noticeResponse.status()).toBe(201);
  //});
});
