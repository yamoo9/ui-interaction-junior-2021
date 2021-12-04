module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  globals: {
    jest: true,
  },
  plugins: ['jest'],
  extends: ['eslint:recommended', 'plugin:jest/recommended'],
  settings: {
    jest: {
      version: require('jest/package.json').version,
    },
  },
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 'off',
  },
};
