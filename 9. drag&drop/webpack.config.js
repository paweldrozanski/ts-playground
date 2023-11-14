const path = require("path");

module.export = {
  entry: "./src/app.ts",
  output: {
    fliename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
