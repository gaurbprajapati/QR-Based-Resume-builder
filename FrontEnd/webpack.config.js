module.exports = {
    // ...
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    // Disable the source-map-loader for Ant Design LESS files
                    {
                        loader: 'source-map-loader',
                        exclude: ["./node_modules/antd"]
                    }
                ]
            }
        ]
    }
};