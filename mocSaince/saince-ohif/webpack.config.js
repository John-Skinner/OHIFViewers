const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode:'development',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use:'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use:['style-loader', 'css-loader'],
      },
      {
        test:/\.svg$/i,
        use:'svg-inline-loader',
      }
    ]
  },
    resolve: {
      extensions:['.tsx','.ts','.js']
    },
  devtool: 'inline-source-map',
  plugins: [new HtmlWebpackPlugin({
    title:'react template for root',
    template: './public/index.html',
  })]
};