import globals from 'globals';
import pluginJs from '@eslint/js';
import stylisticJs from '@stylistic/eslint-plugin-js';

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    plugins: {
      '@stylistic/js': stylisticJs,
    },
  },
  {
    rules: {
      'linebreak-style': 'off',
      camelcase: 'error',
      '@stylistic/js/quotes': ['warn', 'single'],
    },
  },
];
