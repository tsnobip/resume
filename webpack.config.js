const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const outputDir = path.join(__dirname, 'dist/');
const fork = require('child_process').fork;

const isProd = process.env.NODE_ENV === 'production';

const browser = {
  entry: './src/index.js',
  mode: isProd ? 'production' : 'development',
  output: {
    path: outputDir,
    filename: 'index.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: false
    })
  ],
  devServer: {
    compress: true,
    contentBase: outputDir,
    port: process.env.PORT || 8000,
    historyApiFallback: true,
    writeToDisk: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|jpg|jpeg|gif|ttf)$/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ]
  }
};

const nodeOutputDir = path.join(outputDir, "server")

const node = {
  entry: './src/Render.js',
  mode: isProd ? 'production' : 'development',
  target: 'node',
  output: {
    path: nodeOutputDir,
    filename: 'index.js',
    publicPath: 'dist/server/'
  },
  plugins: [
    {
      apply: (compiler) => {
        compiler.hooks.afterEmit.tap('AfterEmitPlugin', (compilation) => {
          fork(path.join(nodeOutputDir, "index.js"));
        });
      }
    }
  ],
  node: {
    __dirname: false
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|jpg|jpeg|gif|ttf)$/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ]
  }
};

module.exports = [browser, node];