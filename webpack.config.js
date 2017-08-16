var webpack = require('webpack')

module.exports = {
    entry: "./game/index.js",
    output: {
        path: __dirname,
        filename: "dist/index.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
      new webpack.ProvidePlugin({
          $: "jquery",
          "window.jQuery": "jquery"
      }),
    ]
};
