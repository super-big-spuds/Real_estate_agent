import { test } from "@playwright/test";
import { constants } from "../util";

test.describe("Collection Add Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${constants.frontendURL}/Collection/Add`);
    await page.screenshot({
      path: constants.getScreenShotPath("collectionAdd"),
    });
  });

  test("Add Collection And Collection Notice Test", async ({ page }) => {
    // 填寫內容
    await page.fill('input[name="tenement_address"]', "Your Address");

    await page.getByText("是", { exact: true }).click();
    await page.getByText("是").nth(3).click();

    await page.getByPlaceholder("請選擇日期").click();
    await page.getByText("30").click();

    await page.getByText("代收", { exact: true }).click();
    await page.getByTitle("代付").locator("div").click();

    await page.getByText("水電空調費", { exact: true }).click();
    await page.getByText("管理費", { exact: true }).click();

    await page.fill('input[name="price"]', "1000");

    await page.getByText("現金", { exact: true }).click();
    await page.getByTitle("匯款").locator("div").click();

    await page.fill('input[name="remittance_bank"]', "Your Remittance Bank");
    await page.fill(
      'input[name="remittance_account"]',
      "Your Remittance Account"
    );
    await page.fill(
      'input[name="cus_remittance_bank"]',
      "Your Customer Remittance Bank"
    );
    await page.fill(
      'input[name="cus_remittance_account"]',
      "Your Customer Remittance Account"
    );
    await page.fill('textarea[name="collection_remark"]', "Your Remarks");

    await page.getByRole("button", { name: "新增提醒" }).click();

    page.getByRole("button", { name: "儲 存" }).click();

    const [collectionResponse, noticeResponse] = await Promise.all([
      await page.waitForResponse((response) =>
        response.url().includes("collection")
      ),
      await page.waitForResponse((response) =>
        response.url().includes("notices")
      ),
    ]);

    test.expect(collectionResponse.status()).toBe(201);
    test.expect(noticeResponse.status()).toBe(201);
  });
});
