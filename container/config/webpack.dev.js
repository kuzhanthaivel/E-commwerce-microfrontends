const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const CommonConfig = require('./webpack.common');
const packageJson = require('../package.json');


const devConfig = {
  mode: 'development',
  devServer: {
    port: 8081, 
    historyApiFallback: {
      index: '/index.html',
    }, 
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: 'marketing@http://localhost:8080/remoteEntry.js',
      },
      shared: packageJson.dependencies
    }), 
  ],
};

module.exports = merge(CommonConfig, devConfig);
