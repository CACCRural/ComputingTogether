// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");


const isProduction = process.env.NODE_ENV === "production";

const stylesHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : "style-loader";

const config = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: 'auto',
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './src/assets/icons/favicon.svg'
    }),

    new InterpolateHtmlPlugin({
      'PUBLIC_URL': '../public'
    }),

    new CopyWebpackPlugin({
      patterns: [
        { from: "src/assets", to: "assets" },
      ],
    })
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', "@babel/preset-react"],
            plugins: ["babel-plugin-styled-components"]
          }
        }, 'ts-loader'],
        exclude: ["/node_modules/"],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
      {
        test: /\.(otf|eot|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      '@material-ui/styled-engine': '@material-ui/styled-engine-sc',
    }
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";

    config.plugins.push(new MiniCssExtractPlugin());
    config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
  } else {
    config.mode = "development";
  }
  return config;
};
