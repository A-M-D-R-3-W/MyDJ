import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  clearScreen: false,
  server: {
    host: "127.0.0.1",
    port: 1420,
    strictPort: true,
    watch: {
      // Cargo rewrites and briefly locks DLLs while linking on Windows. They
      // are backend build outputs, so watching them cannot trigger useful HMR.
      ignored: ["**/src-tauri/target/**"],
    },
  },
  test: {
    environment: "node",
    include: ["src/**/*.test.ts"],
  },
});
