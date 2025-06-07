const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    // Diğer Webpack ayarları...
    plugins: [
        // Diğer eklentiler...
        new BundleAnalyzerPlugin(),
    ],
};