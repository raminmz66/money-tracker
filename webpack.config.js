const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // Where files should be sent once they are bundled
 output: {
   path: path.join(__dirname, '/dist'),
   filename: 'bundle.js'
 },
  // webpack 5 comes with devServer which loads in development mode
 devServer: {
   port: 3001,
   static: {
       watch: true
   }
 },
  // Rules of how webpack will take our files, complie & bundle them for the browser 
 module: {
   rules: [
     {
       test: /\.(js|jsx)$/,
       exclude: /nodeModules/,
       use: {
         loader: 'babel-loader'
       }
     },
     {
       test: /\.css$/,
       use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: true
          }
        },
        'postcss-loader'
      ],
      include: /\.module\.css$/
     },
     {
      test: /\.css$/,
      use: [
       'style-loader',
       'css-loader',
       'postcss-loader'
     ],
     exclude: /\.module\.css$/
    }
   ]
 },
 resolve: {
    extensions: ['', '.js', '.jsx'],
  },
 plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
}
