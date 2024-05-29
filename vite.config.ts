import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: "/src/assets",
      components: "/src/components",
      pages: "/src/pages",
      styled: "/src/styled",
      hooks: "/src/hooks",
      hoc: "/src/hoc",
      helpers: "/src/helpers",
      store: "/src/store",
      types: "/src/types",
      utils: "/src/utils",
      constants: "/src/constants",
    },
  },
});
