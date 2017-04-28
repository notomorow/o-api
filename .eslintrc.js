// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      'webpack': {
        'config': 'client/build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  rules: {
    'no-param-reassign': ["error", { "props": true, "ignorePropertyModificationsFor": ["state", "rootState"] }],
    'comma-dangle': ['error', 'never'],
    'indent': ['error', 4, { "SwitchCase": 1 }],
    'semi': ['error', 'never'],
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-plusplus': "off",
    'no-mixed-operators': "off",
    'linebreak-style': "off",
    "no-unused-expressions": ["error", { "allowShortCircuit": true, "allowTernary": true }]
  }
}
