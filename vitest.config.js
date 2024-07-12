import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";
import { config } from "dotenv";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    clearMocks: true,
    globals: true,
    env: {
      ...config({ path: ".env.test" }).parsed,
    }
  },
  resolve: {
    alias: [{ find: "@/libs", replacement: path.resolve(__dirname, "libs") }],
  },
});