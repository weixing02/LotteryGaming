module.exports = {
  devtool: 'eval-source-map',
  entry:  __dirname + "/app/index.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/app/public/",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  },
  module: {//在配置文件里添加JSON loader
    loaders: [
       {
         test: require.resolve("jquery"),
         loader: "expose-loader?$!expose-loader?jQuery"
       },
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',//在webpack的module部分的loaders里进行配置即可
        query: {
          presets: ['es2015','react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'//添加对样式表的处理
      },
      {
        test: /\.scss$/,
        loader: "sass-loader"
      },
      {
        test: /\.(jpg|png)$/,
        loader: "url-loader?limit=8192"
      },
      {
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
      loader: 'file-loader?name=fonts/[name].[ext]'
      },

    ]
  },
  devServer: {
   contentBase: "./app/",//本地服务器所加载的页面所在的目录
   colors: true,//终端中输出结果为彩色
   historyApiFallback: true,//不跳转
   inline: true//实时刷新
 }
}
