const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const {GenerateSW} = require("workbox-webpack-plugin");

const production = process.env.PRODUCTION == 1;

let patterns = [
];

const preserve_structure_patterns = [
  "manifest.json",
  "*.html",
  "css/**",
  "js/**",
  "media/**",
];

for (let i in preserve_structure_patterns) {
  patterns.push(
    {
      from: preserve_structure_patterns[i],
      to: "[path][name][ext]",
      context: "src/",
    }
  );
}

const plugins = [
  new CopyWebpackPlugin({
    patterns
  }),
];

if (production) {
  plugins.push(
    new GenerateSW({
      swDest: "sw.js",
    })
  );
}

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  mode: production ? "production" : "development",
  plugins,
};
