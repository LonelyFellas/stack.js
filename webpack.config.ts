import * as path from 'path';
import * as webpack from 'webpack';
const config: webpack.Configuration = {
  mode: 'production',
  entry: {
    HStack: path.resolve(__dirname, 'src/HStack.ts'),
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: '[name].js',
    library: 'ui-stack',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: '/.ts$/',
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            preset: ['@babel/preset-env', '@babel/preset-typescript'],
          },
        },
      },
    ],
  },
};
export default config;
