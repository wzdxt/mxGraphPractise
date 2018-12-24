const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: "./src/app.js",
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules:false,
            },
          },
          'less-loader',
        ],
      }
    ]
  },
  mode: 'development',
  plugins: [
    new CopyWebpackPlugin([{ from: "./node_modules/@epicfaace/mxgraph/javascript/src", to: "./mxgraph"}],)
  ]
};
