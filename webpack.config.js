const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: { 
        main: "./src/js/index.js" 
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/index.js",
        clean: true
    },
    devtool: "source-map",
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    cache: true,
    module: {
        rules: [
            {
                test: /\.(scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require("autoprefixer"),
                                    require("cssnano")({ preset: "default" })
                                ]
                            }
                        }
                    },
                    "sass-loader"
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)/i,
                type: "asset/resource",
                generator: {
                    filename: "images/[name][hash][ext]"
                }
            },
            {
                test: /\.(mp4)/i,
                type: "asset/resource",
                generator: {
                    filename: "images/[name][hash][ext]"
                }
            },
            {
                test: /\.(ttf|otf|woff|woff2)/i,
                type: "asset/resource",
                generator: {
                    filename: "fonts/[name][hash][ext]"
                }
            },
            {
                test: /\.(pdf)/i,
                type: "asset/resource",
                generator: {
                    filename: "images/[name][hash][ext]"
                }
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
                options: {
                    sources: {
                      list: [
                        "...",
                        {
                            tag: "div",
                            attribute: "data-src",
                            type: "src"
                        },
                        {
                            tag: "div",
                            attribute: "data-retina",
                            type: "src"
                        },
                        {
                            tag: "img",
                            attribute: "data-src",
                            type: "src"
                        },
                        {
                            tag: "img",
                            attribute: "data-retina",
                            type: "src"
                        }
                      ],
                    },
                  },
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/index.html",
            inject: "body",
            scriptLoading: "defer"
        }),
        new HtmlWebpackPlugin({
            filename: "kontakt.html",
            template: "src/kontakt.html",
            inject: "body",
            scriptLoading: "defer"
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "css/[id].css",
            ignoreOrder: false,
        })
    ],
    mode: "production",
    watch: true,
    stats: "minimal",
    watchOptions: {
        ignored: /node_modules/
    },
    devServer: {    
        static: false,
        compress: true,
        port: 3000,
        open: true
    },
}