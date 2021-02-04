var path = require("path");

module.exports = {
  mode: "production",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  target: "node",
  module: {
    rules: [
      {
        exclude: [/node_modules/, "./sportySpiceApi/tests/*"],
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
