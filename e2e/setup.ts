import { constants } from "./util";
import { STORAGE_STATE } from "../playwright.config";
import { chromium } from "@playwright/test";

export default async function globalSetup() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(`${constants.frontendURL}/login`, {
    waitUntil: "domcontentloaded",
  });
  await page.screenshot({ path: constants.getScreenShotPath("login") });

  await page.fill('input[type="email"]', "admin@gmail.com");
  await page.fill('input[type="user_password"]', "admin");
  await page.click('button[type="submit"]');

  await page.waitForResponse((response) => response.url().includes("login"));

  await page.context().storageState({ path: STORAGE_STATE });
}
