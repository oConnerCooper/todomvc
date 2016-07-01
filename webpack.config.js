'use strict'

let path = require('path');
let fs = require('fs');

const BUILD_PATH = path.resolve(__dirname, 'static/js');
const NODE_MODULES_PATH = path.resolve(__dirname, 'node_modules');
const SRC_PATH = path.resolve(__dirname, 'client/js/src');

let generateEntries = (srcPath, name, entries) => {
    // this version node do not support function param default values
    // so written as following codes
    name = name || '';
    entries = entries || {};

    let paths = fs.readdirSync(srcPath);

    if (paths.indexOf('app.jsx') > -1) {
        entries[`${name}/app`] = path.join(srcPath, 'app');
    } else {
        paths
            .filter(file => {
                return fs.statSync(path.join(srcPath, file)).isDirectory();
            })
            .map(path => {
                generateEntries(`${srcPath}/${path}`, `${name}/${path}`, entries);
            });
    }
    return entries;
};

// console.log(generateEntries(SRC_PATH));

module.exports = {
    entry: generateEntries(SRC_PATH),

    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        filename: '[name].js',
        path: BUILD_PATH
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            loaders: ['babel'],
            exclude: [NODE_MODULES_PATH]
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }]
    }
};
