const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'source'),
    hot: true,
  },
  entry: {
    main: [
      path.resolve(__dirname, 'source/assets/js/main'),
      path.resolve(__dirname, 'source/assets/css/main.css'),
    ],
  },
  output: {
    filename: 'assets/js/[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: {
                  discardComments: {
                    removeAll: true,
                  },
                },
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
          fallback: 'style-loader',
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'assets/css/[name].css',
    }),
    new HtmlWebpackPlugin({
      minify: {
        caseSensitive: false,
        collapseBooleanAttributes: true,
        collapseInlineTagWhitespace: false,
        collapseWhitespace: true,
        conservativeCollapse: false,
        decodeEntities: false,
        html5: true,
        includeAutoGeneratedTags: false,
        keepClosingSlash: false,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
        preserveLineBreaks: false,
        preventAttributesEscaping: false,
        processConditionalComments: false,
        processScripts: false,
        quoteCharacter: false,
        removeAttributeQuotes: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeEmptyElements: false,
        removeOptionalTags: true,
        removeRedundantAttributes: false,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        removeTagWhitespace: true,
        sortAttributes: true,
        sortClassName: true,
        trimCustomFragments: true,
        useShortDoctype: true,
      },
      inject: false,
      template: 'source/index.html',
    }),
    new UglifyJSPlugin({
      sourceMap: true,
      uglifyOptions: {
        output: {
          comments: false,
        },
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
