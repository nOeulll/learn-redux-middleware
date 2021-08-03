// eslint-disable-next-line
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: "module",
    ecmaVersion: 12,
    allowImportExportEverywhere: true
  },
  plugins: ["react"],
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
  },
};
