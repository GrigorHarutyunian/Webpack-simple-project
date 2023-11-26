const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  devServer: {
    port: 8080,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  entry: {
    main: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: "asset/resource",
      },
      {
        test: /\.webp$/i,
        type: "asset",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};
