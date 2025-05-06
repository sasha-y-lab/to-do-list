const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const webpack = require('webpack'); 
 const locales = ["en-US"]; // Define directly

 

 module.exports = {
   entry: {
     app: './src/index.js',
   },
   output: {
    filename: 'main.js', // This gives you dist/main.js
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
   resolve: {
    alias: {
      "date-fns-locale": path.dirname(require.resolve("date-fns/package.json")),
    },
  },
   plugins: [
     new HtmlWebpackPlugin({
       title: 'Production',
       template: './src/template.html',
     }),
     new webpack.ContextReplacementPlugin(
      /date-fns[/\\]locale/,
      new RegExp(`(${locales.join("|")})\.js$`),
    ),
   ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
   module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
},
 };