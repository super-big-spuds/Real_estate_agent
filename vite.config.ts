import { defineConfig, loadEnv } from "vite";
import { viteMockServe } from "vite-plugin-mock";
import react from "@vitejs/plugin-react-swc";

export default defineConfig((command) => {
  const env = loadEnv(command.command, process.cwd(), "");
  return {
    define: {
      "process.env": env,
    },
    plugins: [
      react(),
      viteMockServe({
        mockPath: "./src/mock/",
        localEnabled: command.command === "serve",
        prodEnabled: command.command !== "serve",
        supportTs: true,
        watchFiles: true,
      }),
    ],
    test: {
      include: ["/**/*.{test,spec}.{js,ts}"],
    },
  };
});
