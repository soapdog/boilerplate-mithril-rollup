// rollup.config.js
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'src/main.js',
  format: 'cjs',
  plugins: [
    json(),

    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),

    commonjs({
       include: "node_modules/**"
    })

  ],
  dest: 'dist/bundle.js',
  sourceMap: true
};
