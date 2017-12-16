/* eslint no-magic-numbers: "off" */
/* eslint max-len: "off" */

module.exports = {
  'root': true,
  'env': {
    'es6': true,
    'node': true,
  },
  'extends': [
    'eslint:recommended',
    'google',
  ],
  'rules': {
    'arrow-body-style': ['error', 'as-needed'],
    'brace-style': ['error', '1tbs'],
    'camelcase': ['error', {'properties': 'always'}],
    'complexity': ['error', 5],
    'computed-property-spacing': ['error', 'never'],
    'func-style': ['error', 'declaration', {'allowArrowFunctions': true}],
    'indent': ['error', 2],
    'max-depth': ['error', 3],
    'max-lines': ['error', 250],
    'max-nested-callbacks': ['error', 3],
    'max-params': ['error', 5],
    'max-statements': ['error', 10, {'ignoreTopLevelFunctions': true}],
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-implicit-globals': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': 'error',
    'no-multi-assign': 'error',
    'no-multiple-empty-lines': ['error', {'max': 1, 'maxEOF': 1}],
    'no-new': 'error',
    'no-param-reassign': 'error',
    'no-return-assign': 'error',
    'no-self-compare': 'error',
    'no-shadow': ['error', {'allow': ['err']}],
    'no-unused-expressions': 'error',
    'no-use-before-define': 'error',
    'padding-line-between-statements': [
      'error',
      {blankLine: 'always', prev: ['const', 'let', 'var'], next: '*'},
      {blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var']},
      {blankLine: 'always', prev: ['directive'], next: ['*']},
      {blankLine: 'always', prev: ['function'], next: ['function']},
    ],
    'radix': 'error',
    'require-jsdoc': 'off',
    'semi-style': ['error', 'last'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': ['error', {'words': true, 'nonwords': false}],
    'vars-on-top': 'error',
    'wrap-iife': ['error', 'inside'],
  },
  'overrides': [
    {
      'files': ['src/server/**/*.js'],
      'rules': {
        'array-bracket-newline': ['error', {'multiline': true}],
        'callback-return': 'error',
        'handle-callback-err': ['error', 'err'],
        'no-console': 'off',
        'no-mixed-requires': ['error', {'grouping': true}],
        'object-curly-newline': ['error', {'multiline': true}],
        'strict': ['error', 'global'],
      },
    },
    {
      'files': ['test/**/*.test.js'],
      'env': {
        'mocha': true,
      },
    },
    {
      'files': ['src/client/**/*.js'],
      'env': {
        'browser': true,
        'node': false,
      },
      'parserOptions': {
        'sourceType': 'module',
        'ecmaFeatures': {
          'experimentalObjectRestSpread': true,
          'jsx': true,
        },
      },
      'rules': {
        'array-bracket-newline': ['error', {'multiline': true}],
        'jsx-quotes': ['error', 'prefer-double'],
        'no-alert': 'error',
        'object-curly-newline': ['error', {'multiline': true}],
        'react/jsx-uses-vars': 'error',
        'react/jsx-uses-react': 'error',
      },
      'plugins': [
        'react',
      ],
    },
    {
      'files': ['src/client/**/*.test.js'],
      'env': {
        'jest': true,
      },
    },
  ],
};
