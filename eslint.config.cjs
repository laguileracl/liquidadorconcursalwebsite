module.exports = {
  extends: [
    // Base configurations
    'eslint:recommended',
    '@typescript-eslint/recommended',

    // Astro specific
    'plugin:astro/recommended',

    // Must be last to override other configs
    'prettier',
  ],

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  plugins: ['@typescript-eslint'],

  env: {
    node: true,
    browser: true,
    es2022: true,
  },

  rules: {
    // TypeScript specific rules
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 'warn',

    // General rules
    'no-console': 'warn',
    'no-debugger': 'error',
    'prefer-const': 'error',
    'no-var': 'error',
  },

  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        // Disable some rules that don't work well with Astro
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
      },
    },
  ],

  ignorePatterns: [
    'dist/',
    'node_modules/',
    '.astro/',
    '*.config.js',
    '*.config.mjs',
    '*.config.ts',
    '!src/**/*.astro',
  ],
};
