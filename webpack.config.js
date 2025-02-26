const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  // 运行模式
  mode: 'development',
  // 入口文件
  entry: './src/index.js',
  // 方便查看源代码
  devtool: 'inline-source-map',
  // 热更新
  devServer: {
    // 配置目录
    static: './dist',
    // 热更新
    hot: true,
    // 端口号
    port: 3000,
  },
  output: {
    filename: 'dist.js',
    // 避免浏览器缓存js文件，生产随机命名文件，目的避免看到旧的内容
    // filename: '[name].[contenthash].js',
    // __dirname获取当前文件夹路径，合并路径
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    // 别名
    alias: {
      utils: path.resolve(__dirname, 'src/utils'),
    },
  },
  // 优化
  optimization: {
    // 是否压缩
    minimize: true,
    // 使用 terser 压缩
    minimizer: [new TerserWebpackPlugin()],
  },

  plugins: [
    // 使用插件生成html文件
    new HtmlWebpackPlugin({ title: 'My blog' }),
    // 可视化web打包工具
    new BundleAnalyzerPlugin(),
  ],
  module: {
    rules: [
      {
        // 匹配所有以css结尾的文件
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|png|jpeg|gif|svg)$/i,
        // 配置图片资源
        type: 'asset/resource',
      },
      {
        // 处理js文件
        test: /\.js$/,
        // 排除掉node_modules文件夹中的文件
        exclude: /node_modules/,
        // 配置loader
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
}
