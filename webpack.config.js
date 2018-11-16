// 采用webpack4的设置
const path = require('path');
// 引入生成html插件
const htmlWebpackPlugin = require('html-webpack-plugin');
// 引入css插件，确保postcss插件起作用
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// 引入清除缓存的插件
const CleanWebpackPlugin = require('clean-webpack-plugin');
// 引入当前vue的相关插件
// const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: ['./app/js/main.js'],
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, './dist')
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',// 配置模板
    }
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: 'vue-style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              // 自定义生成类名
              localIdentName: '[local]_[hash:base64:8]'
            }
          },
          {
            loader: 'px2rem-loader',
            // options here
            options: {
              remUni: 75,
              remPrecision: 8
            }
          },
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true,
            }
          },
        ],
      },
    ]
  },
  plugins: [
    // new VueLoaderPlugin(),
    new CleanWebpackPlugin(['dist']),
    new htmlWebpackPlugin({
      // title: 'Development',
      // filename: '',
      template: './app/views/index.html',
      // chunk: []
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, './dist'),  //启动路径
    host:'localhost',  //域名
    port: 9000,  //端口号
    compress: true, // 使用gzip压缩
  },
  mode: 'production',
  devtool: 'source-map',
}