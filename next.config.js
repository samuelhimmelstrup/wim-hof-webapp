module.exports = {
  reactStrictMode: true,
  module: {
    rules: [{ test: /\.mp3$/, use: 'file-loader' }],
  },
}
