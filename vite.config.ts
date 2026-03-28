import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react-router")) {
              return "router";
            }
            if (id.includes("react-dom") || id.includes("/react/")) {
              return "react-vendor";
            }
            return "vendor";
          }

          if (id.includes("/src/content/terms/")) {
            return "content-terms";
          }

          if (id.includes("/src/content/lessons/")) {
            return "content-lessons";
          }

          if (id.includes("/src/content/parts/")) {
            return "content-parts";
          }

          if (id.includes("/src/content/abbreviations/")) {
            return "content-abbreviations";
          }

          if (id.includes("/src/content/units/")) {
            return "content-units";
          }

          if (id.includes("/src/content/index")) {
            return "content-index";
          }

          if (
            id.includes("/src/lib/curriculum/") ||
            id.includes("/src/lib/progress/") ||
            id.includes("/src/app/AppState")
          ) {
            return "learning-core";
          }

          return undefined;
        },
      },
    },
  },
});
