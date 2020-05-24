const path = require("path");

module.exports = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js"
  },
  entry: './src/main.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: [
      '.ts', '.js',
    ],
  },
};