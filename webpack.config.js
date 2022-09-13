const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TsCheckerPlugin = require('fork-ts-checker-webpack-plugin');

const buildPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');

const isProd = process.env.NODE_ENV === 'production';

const getSettingsForStyles = (withModules = false) => {
    return [
        MiniCssExtractPlugin.loader, 
        !withModules ? 'css-loader' : {
        loader: 'css-loader',
        options: {
            modules: {
                localIdentName: !isProd ? '[path][name]__[local]' : '[hash:base64]'
            }
        }
    },{
        loader: 'postcss-loader',
        options: {
            postcssOptions:{
                plugins: ['autoprefixer']
            }
        }
    }, 'sass-loader']
}

module.exports = {
    entry: path.join(srcPath, 'index.tsx'),
    target: isProd ? 'browserslist' : 'web',
    devtool: isProd ? 'hidden-source-map' : 'eval-source-map',
    output: {
        path : buildPath,
        filename: 'bundle.js',
    }, 
    plugins: [
        new HTMLWebpackPlugin({
            template: path.join(srcPath, 'index.html')
        }),
        !isProd && new ReactRefreshWebpackPlugin(),
        new MiniCssExtractPlugin(
            {
                filename: '[name]-[hash].css'
            }
        ),
        new TsCheckerPlugin()
    ].filter(Boolean),
    module: {
        rules:  [
            {
                test: /\.[jt]sx?$/,
                use: 'babel-loader'
            },
            {
                test: /\module\.s?css$/,
                use: getSettingsForStyles(true)
            },
            {
                test: /\.s?css$/,
                exclude: /\.module\.s?css$/, 
                use: getSettingsForStyles()
            },
            {
                test: /\.(png|svg|jpg)$/,
                type: 'asset/resource'
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', 'jsx'],
        alias: {
            "@components": path.join(srcPath, 'components'),
            "@styles": path.join(srcPath, "styles"),
            "@app": path.join(srcPath, "App"),
            "@pages": path.join(srcPath, "App/pages"),
            "@configs": path.join(srcPath, "configs"),
            "@utils": path.join(srcPath, "utils"),
            "@assets": path.join(srcPath, "assets"),
            "@models": path.join(srcPath, "models"),
            "@store": path.join(srcPath, "store"),
            "@api": path.join(srcPath, "api"),
        }
    },
    devServer: {
        host: '127.0.0.1',
        port: 9000,
        hot: true,
        historyApiFallback: true,
    }
}