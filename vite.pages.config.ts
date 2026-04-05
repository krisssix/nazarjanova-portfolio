import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Separate config for GitHub Pages — no Cloudflare plugin
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir: "dist",
    chunkSizeWarningLimit: 5000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
