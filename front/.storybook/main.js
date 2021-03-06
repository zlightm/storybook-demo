const path = require('path');
module.exports = {
  "stories": [
    // "../src/**/*.stories.mdx",
    // '../src/stories/**/*.stories.@(js|mdx)',
    '../src/components/**/*.stories.@(js|mdx)',
    '../src/components/**/**/*.stories.@(js|mdx)'
    // "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      }
    },
    '@storybook/addon-actions', '@storybook/addon-links', '@storybook/preset-scss',"@storybook/addon-essentials",'@storybook/addon-controls', {
      name: '@storybook/addon-storysource',
      options: {
        loaderOptions: {
          injectStoryParameters: false,
        },
      },
    }],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    // Return the altered config
    return config;
  },
}