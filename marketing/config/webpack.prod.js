const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const CommonConfig = require('./webpack.common');
const packageJson = require('../package.json');


const prodConfig = {
  mode: 'production',  
  output: {
    filename:'[name].[contenthash].[js]'
  },
  plugins: [

    new ModuleFederationPlugin({
      name: 'marketing', 
      filename: 'remoteEntry.js',


      exposes: {
        './Marketing': './src/bootstrap',
      }, 


      shared: packageJson.dependencies
    }),
  ],
};

module.exports = merge(CommonConfig, prodConfig);
