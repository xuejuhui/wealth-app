var path = require("path");
const NodemonPlugin = require("nodemon-webpack-plugin"); // Ding
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "development",
  // Change to your "entry-point".

  entry: "./src/inventory",
  target: "node",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    modules: [path.resolve(__dirname, "node_modules")],
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        // Include ts, tsx, js, and jsx files.
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
  },
  plugins: [
    new NodemonPlugin(), // Dong
  ],
};
