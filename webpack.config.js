const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const outputDir = path.join(__dirname, 'dist/');
const fork = require('child_process').fork;
const webpack = require('webpack');

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
    }),
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser',
    }),
  ],
  devServer: {
    compress: true,
    port: process.env.PORT || 8000,
    historyApiFallback: true,
    static: {
      publicPath: outputDir,
    },
    dev: {
      writeToDisk: true
    }
  },
  resolve: {
    fallback: {
      "stream": require.resolve("stream-browserify"),
      "zlib": require.resolve("browserify-zlib"),
      "assert": require.resolve("assert/")
    }
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