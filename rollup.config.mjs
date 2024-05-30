import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import terser from '@rollup/plugin-terser'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

import packageJson from './package.json' assert { type: 'json' }

export default [
  {
    input: 'src/index.ts',
    external: ['react-dom'],
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json', exclude: ['**/*.stories.tsx'] }),
      postcss({
        plugins: [autoprefixer()],
        sourceMap: true,
        extract: true,
        minimize: true,
      }),
      terser(),
      peerDepsExternal(),
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.css$/],
  },
]
