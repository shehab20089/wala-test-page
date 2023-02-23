const path = require("path");

export default {
  base: "./",
  root: path.resolve(__dirname, "src"),

  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: new URL("./src/index.html", import.meta.url).pathname,
        callUs: new URL("./src/call-us.html", import.meta.url).pathname,
      },
    },
  },
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  server: {
    port: 8080,
    hot: true,
  },
};
