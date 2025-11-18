import eslint from '@eslint/js';
import js from '@eslint/js';
import tanstackQueryPlugin from '@tanstack/eslint-plugin-query';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import importHelpersPlugin from 'eslint-plugin-import-helpers';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import nPlugin from 'eslint-plugin-n';
import prettierPlugin from 'eslint-plugin-prettier';
import promisePlugin from 'eslint-plugin-promise';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import reactPerfPlugin from 'eslint-plugin-react-perf';
import sonarjsPlugin from 'eslint-plugin-sonarjs';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import unicornPlugin from 'eslint-plugin-unicorn';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  js.configs.recommended,
  eslintConfigPrettier,
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      import: importPlugin,
      'import-helpers': importHelpersPlugin,
      'unused-imports': unusedImportsPlugin,
      promise: promisePlugin,
      sonarjs: sonarjsPlugin,
      unicorn: unicornPlugin,
      n: nPlugin,
      prettier: prettierPlugin,
      'react-hooks': pluginReactHooks,
      'react-perf': reactPerfPlugin,
      'jsx-a11y': jsxA11yPlugin,
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
        node: true,
      },
    },
    rules: {
      // Prettier integration
      'prettier/prettier': ['error'],

      // General rules
      'no-shadow': 'off',
      'no-console': 'warn',
      semi: ['error', 'always'],
      'max-len': [
        'error',
        {
          code: 80,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreComments: true,
        },
      ],
      'linebreak-style': ['error', 'unix'],
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'class-methods-use-this': 'off',
      'no-nested-ternary': 'off',

      // Import rules
      'import/prefer-default-export': 'off',
      'import/no-unresolved': 'error',
      'import/extensions': ['error'],
      'import/no-extraneous-dependencies': ['error'],
      'import/no-cycle': 'error',

      // TypeScript rules
      '@typescript-eslint/no-use-before-define': ['error'],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': ['error'],
      '@typescript-eslint/triple-slash-reference': [
        'error',
        { path: 'always' },
      ],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'interface',
          format: ['PascalCase'],
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],

      // Import helpers
      'import-helpers/order-imports': [
        'warn',
        {
          newlinesBetween: 'always',
          groups: ['module', '/^~/', ['parent', 'sibling', 'index']],
          alphabetize: {
            order: 'asc',
            ignoreCase: true,
          },
        },
      ],
    },
  },
  {
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
        React: true,
        JSX: true,
      },
    },
  },
  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'react-hooks': pluginReactHooks,
      'react-perf': reactPerfPlugin,
      'jsx-a11y': jsxA11yPlugin,
      'import-helpers': importHelpersPlugin,
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      // React rules
      'react/react-in-jsx-scope': 'off',
      'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
      'react/prop-types': 'off',
      'react/button-has-type': 'error',

      // React Hooks rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // React Performance rules
      'react-perf/jsx-no-new-array-as-prop': 'warn',
      'react-perf/jsx-no-new-function-as-prop': 'warn',
      'react-perf/jsx-no-new-object-as-prop': 'warn',
      'react-perf/jsx-no-jsx-as-prop': ['warn', {
      'exceptions': [
          { 'prop': 'element', 'component': 'Route' }
        ]
      }],

      // JSX A11y rules (accessibility)
      ...jsxA11yPlugin.configs.recommended.rules,

      // Import helpers for React
      'import-helpers/order-imports': [
        'error',
        {
          newlinesBetween: 'always',
          groups: [
            '/^react/',
            '/^~/',
            'module',
            ['parent', 'sibling', 'index'],
          ],
          alphabetize: {
            order: 'asc',
            ignoreCase: true,
          },
        },
      ],
    },
  },
  {
    files: ['**/*.js', '**/*.mjs', '**/eslint.config.*', '**/next.config.*'],
    languageOptions: {
      parser: js.parser,
    },
    rules: {
      // Disable TypeScript-specific rules for JS files
      '@typescript-eslint/no-misused-promises': 'off',
    },
  },
  {
    files: ['**/*.tsx', '**/*.jsx'],
    plugins: {
      '@tanstack/query': tanstackQueryPlugin,
    },
    rules: {
      // TanStack Query rules only for React files
      ...tanstackQueryPlugin.configs.recommended.rules,
    },
  },
  {
    ignores: ['dist/**', 'build/**', 'node_modules/**', 'eslint.config.mjs'],
  },
]);
