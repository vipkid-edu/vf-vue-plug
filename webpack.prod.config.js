const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
console.log(__dirname, '__dirname__dirname')
module.exports = {
  entry: {
    index: './src/index.js',
    // 'index.min': './src/index.js'
  },
  // optimization: {
  //   minimizer: [
  //     new UglifyJsPlugin({
  //       include: /\.min\.js$/,
  //     })
  //   ]
  // },
  output: {
    path: path.resolve(__dirname, './dist'),
    libraryTarget: "umd",
    library: "vf",
    libraryExport: "default"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            hotReload: true
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            babelrc: true
            // presets: ['@babel/preset-env'],
            // plugins: ['@babel/plugin-transform-runtime']
          }
        },
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
  ]
}
