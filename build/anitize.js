const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const conf = require('../anitize.js/conf/webpack');

const DistConfig = conf.dist;
const configInstance = new DistConfig();
configInstance.config.output = {
  path: path.resolve('../dist/anitize'),
  filename: 'app.js'
};
configInstance.config.plugins.push(new HtmlWebpackPlugin({
  title: 'Anitize',
  template: path.join(__dirname, './index.ejs'),
}));
configInstance.config.plugins.push(new UglifyJsWebpackPlugin());

webpack(configInstance.config).run(function(err, stats) {
  if (err) {
    console.error(err);
  }
});
