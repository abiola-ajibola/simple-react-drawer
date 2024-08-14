import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["lib"],
      rollupTypes: true,
      tsconfigPath: "./tsconfig.build.json",
    }),
    libInjectCss(),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      fileName: "index",
      entry: path.resolve(__dirname, "lib/index.tsx"),
      formats: ["es"],
    },
    sourcemap: true,
    minify: true,
    outDir: "dist",
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
    },
  },
});
