import { defineConfig } from "vite";

export default defineConfig({
  base: "/calculator/",
  build: {
    rollupOptions: {
      output: {
        input: "index.html",
        entryFileNames: "main.js", // Personnalisez le nom du fichier ici
      },
    },
  },
});
