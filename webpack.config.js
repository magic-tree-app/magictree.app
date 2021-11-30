require('dotenv').config();
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const DotEnvPlugin = require('dotenv-webpack');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const StyledComponentsTransformer = require('typescript-plugin-styled-components').default({
  minify: true,
});

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: './src/index.tsx',
  devServer: {
    historyApiFallback: true,
  },
  output: {
    path: `${__dirname}/build/`,
    publicPath: '/',
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
    new InterpolateHtmlPlugin(process.env),
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
