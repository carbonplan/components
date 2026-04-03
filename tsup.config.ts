import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  outDir: 'dst',
  clean: true,
  sourcemap: true,
  target: 'es2017',
  skipNodeModulesBundle: true,
})
