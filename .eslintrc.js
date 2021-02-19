module.exports = {
    root: true,
    env: {
      node: true
    },
    extends: [
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      "eslint:recommended",
      "plugin:vue/vue3-recommended",
      "@vue/typescript",
      "plugin:prettier/recommended",
      "prettier/vue",
      "prettier/@typescript-eslint",
    ],
    parserOptions: {
      parser: '@typescript-eslint/parser',
      ecmaVersion: 2020
    },
    rules: {
      'quotes': ['warn', 'single'],
      'indent': ['warn', 2],
      '@typescript-eslint/interface-name-prefix': 'off',
      'sort-imports': 'off',
      'sort-keys': 'off',
      'no-multiple-empty-lines': 'off',
      'no-console': 1,
      '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_'}],
      '@typescript-eslint/camelcase': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-explicit-any': ['error', {'ignoreRestArgs': true}]
    }
}
