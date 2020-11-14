module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    '../src/stories/**/*.stories.@(js|mdx)',
    '../src/components/**/*.stories.@(js|mdx)',
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ]
}