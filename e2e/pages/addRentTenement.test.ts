import { test } from "@playwright/test";
import { constants } from "../util";

test.describe("Collection Calandar Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${constants.frontendURL}/Tenement/Add`);
    await page.screenshot({
      path: constants.getScreenShotPath("CollectionCalandar"),
    });
  });

  test("should render", async ({ page }) => {
    test.expect(await page.getByText("error..").count()).toEqual(0);
  });

  test("get collection calandar API test", async ({ page }) => {
    await page
      .locator("div")
      .filter({ hasText: /^地址:至少兩個字$/ })
      .getByPlaceholder("請輸入內容")
      .fill("123");
    await page.getByLabel("套房").check();
    await page.getByLabel("未成交").check();
    await page.getByLabel("海景", { exact: true }).check();
    await page
      .locator("div")
      .filter({ hasText: /^權狀坪數:請輸入到小數點後二位$/ })
      .getByPlaceholder("請輸入內容")
      .fill("12");
    await page
      .locator("div")
      .filter({ hasText: /^主建物:請輸入到小數點後二位$/ })
      .getByPlaceholder("請輸入內容")
      .fill("123");
    await page
      .locator("div")
      .filter({ hasText: /^附屬建物:請輸入到小數點後二位$/ })
      .getByPlaceholder("請輸入內容")
      .fill("123");
    await page
      .locator("div")
      .filter({ hasText: /^公設面積:請輸入到小數點後二位$/ })
      .getByPlaceholder("請輸入內容")
      .fill("1231");
    await page
      .locator("div")
      .filter({ hasText: /^未登記面積:請輸入到小數點後二位$/ })
      .getByPlaceholder("請輸入內容")
      .fill("3");
    await page
      .locator("div")
      .filter({ hasText: /^管理費倍率:至少兩個字$/ })
      .getByPlaceholder("請輸入內容")
      .fill("123");
    await page
      .locator("div")
      .filter({ hasText: /^租金:至少兩個字$/ })
      .getByPlaceholder("請輸入內容")
      .fill("23");
    await page
      .locator("div")
      .filter({ hasText: /^押金:至少兩個字$/ })
      .getByPlaceholder("請輸入內容")
      .fill("12");
    await page
      .locator("div")
      .filter({ hasText: /^押金:至少兩個字$/ })
      .getByPlaceholder("請輸入內容")
      .fill("123");
    await page
      .locator("div")
      .filter({ hasText: /^總樓層:至少一個字$/ })
      .getByPlaceholder("請輸入內容")
      .fill("123");
    await page
      .locator("div")
      .filter({ hasText: /^姓名:至少兩個字$/ })
      .getByPlaceholder("請輸入內容")
      .fill("123");
    await page
      .locator("div")
      .filter({ hasText: /^行動電話:至少兩個字$/ })
      .getByPlaceholder("請輸入內容")
      .fill("12");
    await page
      .locator("div")
      .filter({ hasText: /^電話:至少兩個字$/ })
      .getByPlaceholder("請輸入內容")
      .fill("123");
    await page
      .locator("div")
      .filter({ hasText: /^Line:至少兩個字$/ })
      .getByPlaceholder("請輸入內容")
      .fill("123");
    await page
      .locator("div")
      .filter({ hasText: /^匯款銀行:至少兩個字$/ })
      .getByPlaceholder("請輸入內容")
      .fill("12");
    await page
      .locator("div")
      .filter({ hasText: /^匯款銀行:至少兩個字$/ })
      .getByPlaceholder("請輸入內容")
      .fill("123");
    await page
      .locator("div")
      .filter({ hasText: /^帳號:至少兩個字$/ })
      .getByPlaceholder("請輸入內容")
      .fill("123");
    await page
      .locator("div")
      .filter({ hasText: /^通訊地址:至少兩個字$/ })
      .getByPlaceholder("請輸入內容")
      .fill("123");
    await page
      .locator("div")
      .filter({ hasText: /^通訊地址:$/ })
      .getByPlaceholder("請輸入內容")
      .fill("1231");
    await page
      .locator("div")
      .filter({ hasText: /^生日:至少兩個字$/ })
      .getByPlaceholder("請輸入內容")
      .fill("23");
    await page
      .locator("div")
      .filter({ hasText: /^嗜好:至少兩個字$/ })
      .getByPlaceholder("請輸入內容")
      .fill("123");
    await page.getByText("No remarks").fill("No remarks123");
    await page.getByRole("button", { name: "新增提醒" }).click();
    await page.getByRole("button", { name: "新增提醒" }).click();
    await page.getByRole("button", { name: "儲 存" }).click();
  });
});
