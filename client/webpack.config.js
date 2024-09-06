const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    //Add and configure workbox plugins for a service worker and manifest file.
    plugins: [
      // Webpack plugin that generates our html file and injects our bundles. 
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'HTML Webpack Plugin',
        //inject: true,
      }),
      // Injects our custom service worker
      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'src-sw.js',
      }),
      //Create a manifest.json file
      new WebpackPwaManifest({
        fingerprints: false,
        inject: true,
        name: 'Just Another Text Editor',
        short_name: 'J.A.T.E',
        description: 'Take notes with JavaScript',
        background_color: '#225ca3',
        theme_color: '#225ca3',
        start_url: '/',
        publicPath: '/',
        icons: [
          {
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons'),
          },
        ],
      }),

    ],

    module: {
      rules: [
        //Add CSS loaders
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        
        {
          test: /\.(png|jpeg|jpg|svg|gif|webp)$/i,
          type: "asset/resource",
          generator: {
            filename: "images/[name].[hash][ext]",
          },
        },
        //Add babel to webpack.
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
  };
};
