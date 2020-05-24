const path = require("path");

module.exports = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js"
  },
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      }
    ],
  },
  resolve: {
    extensions: [
      '.ts', '.js',
    ],
  },
};