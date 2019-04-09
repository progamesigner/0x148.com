const path = require('path')

const AssetsPlugin = require('assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env, options) => {
    const isProd = options.mode === 'production'

    return {
        entry: './src/main.js',
        output: {
            path: path.join(__dirname, 'static'),
            filename: isProd ? '[name].[chunkhash:8].js' : '[name].js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.s[ac]ss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: !isProd,
                                importLoaders: 1
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: !isProd,
                                plugins: [
                                    require('postcss-inline-svg')({
                                        removeFill: true,
                                        xmlns: false
                                    }),
                                    require('cssnano')({
                                        preset: [
                                            'default',
                                            {
                                                autoprefixer: {
                                                },
                                                discardComments: {
                                                    removeAll: !isProd
                                                }
                                            }
                                        ]
                                    })
                                ]
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: !isProd
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new AssetsPlugin({
                filename: 'assets.json',
                path: path.join(__dirname, 'data'),
                prettyPrint: !isProd
            }),
            new MiniCssExtractPlugin({
                path: path.join(__dirname, 'static'),
                filename: isProd ? '[name].[contenthash:8].css' : '[name].css'
            })
        ]
    }
}
