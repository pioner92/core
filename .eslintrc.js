module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.tsx', '.ts'],
      },
    },
  },
  rules: {
    'max-len': [2, {code: 120, tabWidth: 4, ignoreUrls: true}],
    'guard-for-in': 'off',
    'no-unused-vars': 'off',
    'react/sort-comp': 'off',
    'react/no-children-prop': 'off',
    'react-native/no-raw-text': 'off',
    'react-native/no-color-literals': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
  },
  globals: {
    XMLHttpRequest: false,
  },
};
