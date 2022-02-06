module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', 'simple-import-sort', 'prettier'],
  rules: {
    'react/jsx-indent': [
      'error',
      2,
      {
        checkAttributes: true,
        indentLogicalExpressions: true,
      },
    ],
    'react/prop-types': 'warn',
    'no-unused-vars': 'warn',
    'react/forbid-prop-types': 'warn',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'react/jsx-key': 'error',
    'react/function-component-definition': 'off',
    'func-names': 'off',
    'react/jsx-filename-extension': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-pascal-case': 'off',
    'object-curly-newline': 'off',
    'react/button-has-type': 'off',
    'react/no-array-index-key': 'off',
  },
};
