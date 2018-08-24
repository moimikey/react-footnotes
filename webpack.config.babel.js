import path from 'path'
export default function () {
  return {
    mode: 'production',
    target: 'web',
    entry: './src/Footnotes.js',
    module: {
      rules: [
        { test: /\.js$/, use: 'babel-loader' }
      ]
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'react-footnotes.js'
    }
  }
}
