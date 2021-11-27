const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const DotEnvPlugin = require('dotenv-webpack');
const StyledComponentsTransformer = require('typescript-plugin-styled-components').default({
  minify: true,
});

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProduction ? 'production' : 'development',
  // devServer: {
  //   stats: {
  //     chunks: false,
  //   },
  // },
  entry: './src/index.tsx',
  output: {
    path: `${__dirname}/build/`,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.json'],
        },
        options: {
          getCustomTransformers: () => ({ before: [StyledComponentsTransformer] }),
        },
      },
      {
        test: /\.svg$/,
        use: 'svg-url-loader',
      },
    ],
  },
  devtool: isProduction ? undefined : 'source-map',
  plugins: [
    new DotEnvPlugin({ systemvars: true, silent: true }),
    new CopyWebpackPlugin({
      patterns: [{
        from: 'public',
        globOptions: {
          ignore: ['**/index.html'],
        },
      }],
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
  ],
};
