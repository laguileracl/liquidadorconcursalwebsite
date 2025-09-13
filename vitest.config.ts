/// <reference types="vitest" />
import { getViteConfig } from 'astro/config';
import { defineConfig } from 'vite';

export default defineConfig(
  getViteConfig({
    test: {
      globals: true,
      environment: 'happy-dom',
      setupFiles: ['./src/test/setup.ts'],
      include: ['src/**/*.{test,spec}.{js,ts}'],
      exclude: ['node_modules', 'dist', '.astro'],
      coverage: {
        provider: 'v8',
        reporter: ['text', 'json', 'html', 'lcov'],
        exclude: [
          'node_modules/',
          'dist/',
          '.astro/',
          'src/test/',
          '**/*.config.{js,ts,mjs}',
          '**/*.d.ts',
        ],
      },
    },
  })
);
