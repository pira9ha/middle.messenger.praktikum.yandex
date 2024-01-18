module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}', '*.d.ts'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'linebreak-style': ['error', 'unix'],
    quotes: ['warn', 'single'],
    semi: ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    'eol-last': ['error', 'always'],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
