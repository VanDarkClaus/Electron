const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//获取相对服务的跟路径
const resolve = dir => {
    return path.resolve(process.cwd(), dir)
  }

module.exports = {
    entry: {
        app: resolve('./src')
    },
    output: {
        path: resolve('./dist'),
        filename: '[name].js'
    },
    resolve: {
        // alias: {
        //   '@': resolve('dist/')
        // },
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        // modules: ['src', 'node_modules'],
        // modules: ['src'],
        // mainFields: ['module', 'browser', 'main']
      },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                include: [resolve("./src")],
                loaders: [
                  {
                    loader: 'ts-loader',
                    options: {
                      transpileOnly: true,
                      compilerOptions: {
                        // sourceMap: isEnvDevelopment,
                        module: 'es2015',
                        isolatedModules: true,
                        noEmitOnError: false
                      }
                    }
                  }
                ]
              },
          //加载css
            {
                     test: /\.css$/,
                     use: [
                       'style-loader',
                       'css-loader'
                     ]
            },
            //加载图片
            {
                     test: /\.(png|svg|jpg|gif)$/,
                     use: [
                       'file-loader'
                     ]
            },
            //加载字体
            {
                     test: /\.(woff|woff2|eot|ttf|otf)$/,
                     use: [
                       'file-loader'
                     ]
                   },
           
        ]
    },
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(),
              new HtmlWebpackPlugin({
                title: 'Output Management'
              })
            ],
    devServer: {
        contentBase: [ resolve("dist")],
        open:false,
        host: 'localhost',
        port: 3000,
        overlay: {
          errors: true
        },
        stats: {
          color: true,
          entrypoints: false,
          children: false,
          warnings: false,
          version: true,
          modules: false,
          timings: true,
          hash: false,
          context: resolve('./src'),
          performance: true,
          assets: false
        },
        // proxy: packageJson.proxy,
        compress: true,
        hot: true,
        inline: true
      },
    mode: 'production',

}