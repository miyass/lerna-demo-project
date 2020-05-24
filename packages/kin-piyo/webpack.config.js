const path = require("path");

module.exports = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "kin-piyo.js"
  },
  entry: './lib/kin-piyo.js',
  resolve: {
    extensions: [
      '.js',
    ],
  },
};