const path = require("path");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const autoprefixer = require("autoprefixer");
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
    new FaviconsWebpackPlugin({
      logo: "src/images/favicon.ico", // path to your favicon
      outputPath: "src/", // output path (optional)
      prefix: "src/", // prefix for the favicon files (optional)
      inject: true, // inject the link tag into the HTML
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: "asset/resource",
      },

      {
        test: /\.webp$/i,
        type: "asset",
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },

      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [autoprefixer()],
              },
            },
          },
        ],
      },
    ],
  },
};
