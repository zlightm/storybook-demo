module.exports = {
    root: true,
    env: {
      node: true
    },
    extends: ['plugin:vue/essential', '@vue/standard'],
    rules: {
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      quotes: [0, 'single'], // 引号类型 `` "" ''
      variable_name: 0
    },
    parserOptions: {
      parser: 'babel-eslint'
    }
  }
  