module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "eslint:recommended",
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended'
  ],
  overrides: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json',
    ecmaFeatures: {
      tsx: true,
      jsx: true
    }
  },
  ignorePatterns: ['.eslintrc.js'],
  plugins: [
    'react'
  ],
  rules: {
    'react/prop-types':'off',
    'react/react-in-jsx-scope': 'off',
    'no-empty-function':'off',
    'eqeqeq':['error', 'always'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/no-absolute-path':'off',
    '@typescript-eslint/no-duplicate-enum-values':'warn',
    '@typescript-eslint/no-floating-promises':'off',
    '@typescript-eslint/triple-slash-reference':'off'
  },
}
