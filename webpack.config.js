const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        main: path.resolve(__dirname, "src/index.js")
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        clean: true,
    },
    devtool: "inline-source-map",
    devServer: {
        port: 9001,
        open: true,
        hot: true,
    },
    module: {
        rules: [
            { 
                test: /\.css$/, 
                use: ["style-loader", "css-loader"] 
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ]
    },
    plugins: [new HTMLWebpackPlugin({
        title: "Shokujidokoro Yukihira",
        filename: "index.html",
        template: path.resolve(__dirname, "src/template.html")
    })]
}
