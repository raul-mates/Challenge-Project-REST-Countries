const path = require('path');

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    watch: true,
    entry: {
        main: "./src/app.ts",
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "script.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: {
                    transpileOnly: true
                }
            }
        ]
    }
};
