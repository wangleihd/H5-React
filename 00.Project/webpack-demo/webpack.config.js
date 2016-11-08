//webpack.config.js
var path = require('path');

module.exports = {
    entry: './js/entry.js',
    output: {
        path: path.join(__dirname, 'js/dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js|jsx$/,
            loader: 'jsx?harmony'
        }]
    }
}
