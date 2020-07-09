module.exports = {
  parser: 'babel-eslint', // define babel as the parser
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  plugins: ['react', 'jsdoc'],
  parserOptions: {
    ecmaVersion: 2018, // understands let, const and other features
    sourceType: 'module', // understands the use of import and export
    ecmaFeatures: {
      jsx: true, // understands the use of tags inside js files
    },
  },
  rules: {
    indent: ['error', 2],
    'no-undef': 0,
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    'jsx-quotes': ['error', 'prefer-double'],
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
    'react/display-name': 0,
    'react/prop-types': [
      1,
      {
        ignore: ['navigation', 't'],
        customValidators: [],
      },
    ],
    semi: [2, 'always'],
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'log'],
      },
    ],
    'react/require-default-props': [
      2,
      {
        forbidDefaultForRequired: true,
      },
    ],
    'react/no-unused-prop-types': [2],
    'jsdoc/check-alignment': 1,
    // Recommended
    'jsdoc/check-param-names': 1,
    // Recommended
    'jsdoc/check-tag-names': 1,
    // Recommended
    'jsdoc/check-types': 1,
    // Recommended
    'jsdoc/implements-on-classes': 1,
    // Recommended
    'jsdoc/newline-after-description': 1,
    // Recommended
    'jsdoc/no-undefined-types': 1,
    // Recommended
    'jsdoc/require-jsdoc': 1,
    // Recommended
    'jsdoc/require-param': 1,
    // Recommended
    'jsdoc/require-param-description': 1,
    // Recommended
    'jsdoc/require-param-name': 1,
    // Recommended
    'jsdoc/require-param-type': 1,
    // Recommended
    'jsdoc/require-returns': 1,
    // Recommended
    'jsdoc/require-returns-check': 1,
    // Recommended
    'jsdoc/require-returns-description': 1,
    // Recommended
    'jsdoc/require-returns-type': 1,
    // Recommended
    'jsdoc/valid-types': 1,
    // Recommended
  },
  env: {
    browser: true, // add browser globals variables like document and window
    es6: true, // add globals like Set
  },
};
