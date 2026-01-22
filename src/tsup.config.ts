import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['npm-package/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  outDir: 'dist',
  external: ['react', 'react-dom'],
  treeshake: true,
  minify: false, // Set to true for production
  bundle: true,
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    };
  },
});
