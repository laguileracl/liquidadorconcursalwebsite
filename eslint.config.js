import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import astroPlugin from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';

export default [
  // Astro files using official flat recommended
  ...astroPlugin.configs['flat/recommended'],
  // Use TS parser inside <script> blocks of .astro
  {
    files: ['**/*.astro/*.js', '**/*.astro/*.ts', '**/*.astro/*.jsx', '**/*.astro/*.tsx'],
    languageOptions: { parser: tsParser },
  },

  // JS files
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: js.configs.recommended.rules,
  },

  // TS files (scoped)
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
      ...(tseslint.configs.recommended[0]?.rules || {}),
      ...(tseslint.configs.recommended[1]?.rules || {}),
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },

  // General rules for all files
  {
    rules: {
      'no-console': 'warn',
      'no-debugger': 'error',
      'prefer-const': 'error',
      'no-var': 'error',
    },
  },

  // Ignores
  {
    ignores: [
      'dist/',
      'node_modules/',
      '.astro/',
      'coverage/',
      '*.config.js',
      '*.config.mjs',
      '*.config.ts',
    ],
  },
];
