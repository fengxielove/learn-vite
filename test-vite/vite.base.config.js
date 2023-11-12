import { defineConfig } from "vite";
export default defineConfig({
  optimizeDeps: {
    // 当遇到 lodash-es 这个依赖的时候不进行依赖预构建
    // exclude: ["lodash-es"],
  },
  envPrefix: "ENV_",
  css: {
    //
    modules: {
      localsConvention: "camelCaseOnly",
      scopeBehaviour: "default",
      // generateScopedName: "[name]_[local]_[hash:5]",
      // generateScopedName: (name, filename, css) => {
      //   console.log("🚀 ~ file: vite.base.config.js:15 ~ css:", css);
      //   console.log("🚀 ~ file: vite.base.config.js:15 ~ filename:", filename);
      //   console.log("🚀 ~ file: vite.base.config.js:15 ~ name:", name);
      //   return `${name}-${filename}`;
      // },
      hashPrefix: "hello",
      globalModulePaths: [], // 代表你不想参与到CSS模块化的路径
    },
  },
});
