const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const baseConfig = {
    entry: {
        app:'./app1/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'app1'),
        //publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            name: '[path][name].[ext]',
                            attrs: ['img:src']
                        }
                    }
                ],
                exclude: path.resolve(__dirname, 'app1/index.html')
            },
            // {
            //     test: /\.html$/,
            //     use: ['html-loader']
            // },
            //{ test: /\.png$/, use: [ "url-loader?mimetype=image/png" ] },
            // {
            //     test: /\.png$/,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 name: '[path][name].[ext]',
            //                 outputPath: '/images',
            //                 publicPath: '/images'
            //             }
            //         }
            //     ]
            // },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 14000, // Convert images < 14kb to base64 strings
                        name: '[path][name].[ext]',
                        outputPath: '/',
                        publicPath: '/'
                    }
                }]
            },
            // {
            //     test:/\.(s*)css$/,
            //     use: ExtractTextPlugin.extract({
            //         fallback: 'style-loader',
            //         use: ['css-loader','sass-loader']
            //     })
            // },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            name: '[path][name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'app1/index.html'
        })
    ]
};

module.exports = function(env) {
    return baseConfig;
};
