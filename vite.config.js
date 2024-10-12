import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import basicSsl from "@vitejs/plugin-basic-ssl";
// import ssr from "vite-plugin-ssr/plugin";

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [react(), ssr()],
  plugins: [react(), basicSsl()],
  build: {
    outDir: "./docs",
  },
  base: "./",
});
