import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginAstro from 'eslint-plugin-astro'
import pluginPrettier from 'eslint-config-prettier'
import tsParser from '@typescript-eslint/parser'
import astroParser from 'astro-eslint-parser'

export default [
  pluginJs.configs.recommended,
  ...pluginAstro.configs.recommended,
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.astro'],
      },
    },
    rules: {
      'no-undef': 'off', // Desabilita no-undef para arquivos Astro
    },
  },
  {
    files: ['src/components/layout/Footer.astro'],
    rules: {
      'no-unused-vars': 'off', // Desabilita no-unused-vars para Footer.astro
    },
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginPrettier,
  {
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**', '**/.astro/**'],
  },
]
