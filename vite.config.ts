import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";
import compression from 'vite-plugin-compression';


export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss(), visualizer({ open: true }), compression()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react")) return "vendor-react";
            if (id.includes("chakra-ui")) return "vendor-chakra";
            return "vendor";
          }
        },
      },
    },
  },
});
