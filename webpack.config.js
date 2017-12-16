const path = require('path');

module.exports = {
  entry: './src/view/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [{
      test: /\.js[x]?$/,
      include: path.resolve(__dirname, 'src'),
      loader: 'babel-loader',
      query: {
        presets: [['env', {
          'targets': {
            'browsers': ['last 2 versions', 'safari >= 7'],
          },
          'include': ['transform-es2015-arrow-functions', 'es6.map'],
        }], 'react'],
      },
      exclude: /node_modules/,
    },
    {
      test: /\.css$/,
      use: [{
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
      },
      ],
    },
    {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
      },
      {
        loader: 'sass-loader',
      },
      ],
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      }],
    },
    ],
  },
};
