import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  server: {
    proxy: {
      // string shorthand
      "/*": {
        target: "https://client-wishly.onrender.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/*/, ""),
      },
    },
    host: "0.0.0.0",
  },
  build: {
    // generate .vite/manifest.json in outDir
    manifest: true,
    rollupOptions: {
      // overwrite default .html entry
      input: "./index.html",
    },
  },
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components",
    },
  },
});
