import { defineConfig, devices } from "@playwright/test";
import { createRequire } from "node:module";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(".env.local") });

export const STORAGE_STATE = path.join("e2e", "storage-state.json");
const require = createRequire(import.meta.url);

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./e2e",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "list",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: "http://localhost:5173",
    storageState: STORAGE_STATE,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
  },

  // replace require.resolve("./e2e/setup.ts") with import
  globalSetup: require.resolve("./e2e/setup.ts"),

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    //{
    //  name: "firefox",
    //  use: { ...devices["Desktop Firefox"] },
    //  dependencies: ["login"],
    //},

    //{
    //  name: "webkit",
    //  use: { ...devices["Desktop Safari"] },
    //  dependencies: ["login"],
    //},

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    command: "npm run build && npm run preview",
    port: 4173,
  },
});
