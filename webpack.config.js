const path = require('path');

module.exports = {
    entry: './assets/js/main.js',
    output: {
        path: path.resolve(__dirname, 'build/assets/js'),
        filename: 'bundle.js'
    },
    devServer : {
        contentBase: './build'
    }
};