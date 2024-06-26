import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import terser from '@rollup/plugin-terser'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import copy from 'rollup-plugin-copy'
import del from 'rollup-plugin-delete'

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
      typescript({ tsconfig: './tsconfig.json', exclude: ['**/*.stories.tsx', '**/*.test.tsx'] }),
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
    plugins: [
      copy({ targets: [{ src: 'dist/esm/*.css*', dest: 'dist' }], hook: 'buildStart' }),
      del({ targets: ['dist/esm/*.css*', 'dist/cjs/*.css*'], hook: 'buildEnd' }),
      dts(),
    ],
    external: [/\.css$/],
  },
]
