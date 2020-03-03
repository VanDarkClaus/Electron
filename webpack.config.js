const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')

// the path(s) that should be cleaned
let pathsToClean = ['dist'];
// the clean options to use
let cleanOptions = {
    root: path.resolve(__dirname),
    // exclude: ['shared.js'],
    verbose: true,
    dry: false,
};

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
        alias: {
          '@': resolve('dist/')
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        // modules: ['src', 'node_modules'],
        modules: ['src'],
        mainFields: ['module', 'browser', 'main']
      },
    module: {
        rules: [
            // {
            //     test: /\.tsx|ts?$/,
            //     use:{
            //         loader:'ts-loader'
            //     }
            // },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                include: [resolve("./src"), resolve('../nexp.dev-lib')],
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
              }
        ]
    },
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
    // mode: 'production',

}