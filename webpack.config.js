const path = require("path");

const config = {
  entry: "./src/Insights.tsx",
  output: {
    path: path.resolve(__dirname, "assets"),
    filename: "insights.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  mode: "development",
};

module.exports = config;
