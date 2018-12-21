module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parsers: ['typescript-eslint-parser', 'babel-eslint']
  },
  extends: ['eslint:recommended', 'plugin:vue/recommended', 'plugin:vue/strongly-recommended', 'plugin:prettier/recommended', '@vue/typescript'],
  // required to lint *.vue files
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    semi: [1, 'never'], // KEEP
    'no-console': 0, // KEEP
    'vue/html-self-closing': 0, // KEEP
    'vue/max-attributes-per-line': 0, // KEEP
    'prettier/prettier': 0, // KEEP
    'vue/require-default-prop': 0, // KEEP
    'no-undef': 0, // KEEP disabled for third party scripts
    'vue/attributes-order': 1, // KEEP
    'vue/require-prop-types': 2, // KEEP for now, unsure about two props, sort buttons
    'no-useless-escape': 1, // KEEP
    'no-redeclare': 0, // KEEP off for now
    'no-unused-vars': 0, // Disabling for now due to TS false positives
    'vue/attribute-hyphenation': 2,
    'no-var': 2,
    'vars-on-top': 1,
    'prefer-template': 2,
    'no-useless-concat': 2,
    'prefer-const': 2,
    'vue/html-quotes': 2,
    'vue/html-indent': 2,
    'vue/this-in-template': 2,
    'no-dupe-keys': 2,
    'no-dupe-args': 0,
    'no-global-assign': 2,
    'vue/mustache-interpolation-spacing': 2,
    'vue/v-bind-style': 2,
    'vue/v-on-style': 2,
    'vue/no-multi-spaces': 2,
    'vue/name-property-casing': 2,
    'no-multi-spaces': 1,
    'comma-dangle': 1,
    'brace-style': 1,
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          ['components', 'directives', 'filters'],
          'extends',
          'mixins',
          'inheritAttrs',
          'model',
          ['props', 'propsData'],
          'data',
          'computed',
          'watch',
          'methods',
          // "LIFECYCLE_HOOKS",
          'beforeCreate',
          'created',
          'beforeMount',
          'mounted',
          'beforeUpdate',
          'updated',
          'activated',
          'deactivated',
          'beforeDestroy',
          'destroyed',
          // end lifecycle
          'head',
          'fetch',
          'asyncData',
          ['template', 'render'],
          'renderError'
        ]
      }
    ]
  }
}
