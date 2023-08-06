const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js',
    },
    output: {
      publicPath: "",
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({template: 'index.html'}), 
      new WebpackPwaManifest({
        name: 'J.A.T.E.',
        short_name: 'MyTE',
        description: 'Progressive Web App for a text editor',
        background_color: '#ffffff',
        icons: [
          {
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
          },
        ],
        fingerprints: false,
        inject: false,
      }),
      new InjectManifest({
        swSrc: './src-sw.js',
      }),
      new CopyPlugin({
        patterns: [
          { from: "./src/css/style.css", to: "." },
        ],
      }),
    ],

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["css-loader"], 
        }   
      ],
    },
  };
};
