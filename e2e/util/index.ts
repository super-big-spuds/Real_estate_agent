export const constants = {
  APIBASEURL: `${process.env.VITE_API_BASE_URL}/api`,
  frontendURL: "http://localhost:4173",
  getScreenShotPath: (path: string) => `e2e/screenshots/${path}.png`,
};
