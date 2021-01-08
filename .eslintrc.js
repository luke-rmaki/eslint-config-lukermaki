module.exports = {
  extends: [`airbnb`, `prettier`, `prettier/react`],
  parser: `babel-eslint`,
  parserOptions: {
    ecmaVersion: 2020,
    // Can I remove these now?
    ecmaFeatures: {
      impliedStrict: true,
      classes: true,
    },
  },
  env: {
    browser: true,
    node: true,
    jquery: true,
    jest: true,
  },
  rules: {
    'no-debugger': 0,
    'no-console': 1,
    'no-unused-vars': [
      1,
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: `res|next|^err`,
      },
    ],
    'prefer-const': [
      `warn`,
      {
        destructuring: `all`,
      },
    ],
    'arrow-body-style': [2, `as-needed`],
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
    'func-names': 0,
    'space-before-function-paren': 0,
    'comma-dangle': 0,
    'max-len': 0,
    'import/extensions': 0,
    'consistent-return': 0,
    'react/display-name': 1,
    'react/no-array-index-key': 0,
    'react/react-in-jsx-scope': 0,
    'react/forbid-prop-types': 0,
    'react/no-unescaped-entities': 0,
    // 'no-shadow': [
    //   2,
    //   {
    //     hoist: 'all',
    //     allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
    //   },
    // ],
    quotes: [
      2,
      `backtick`,
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'prettier/prettier': [
      `error`,
      {
        trailingComma: `es5`,
        singleQuote: true,
        printWidth: 80,
        // below line only for window users facing CLRF and eslint/prettier error
        // non window users feel free to delete it
        endOfLine: `auto`,
      },
    ],
    'react-hooks/rules-of-hooks': `error`,
    'react-hooks/exhaustive-deps': `warn`,
    '@typescript-eslint/comma-dangle': [`off`],
  },
  plugins: [`html`, `prettier`, `react-hooks`],
};
