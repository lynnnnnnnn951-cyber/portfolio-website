import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(import.meta.dirname, 'index.html'),
        goldbit: resolve(import.meta.dirname, 'goldbit-case.html'),
        ucbitex: resolve(import.meta.dirname, 'ucbitex-case.html'),
        bitview: resolve(import.meta.dirname, 'bitview-case.html'),
      },
    },
  },
});
