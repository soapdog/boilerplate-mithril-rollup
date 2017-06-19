// rollup.config.js
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'src/main.js',
  format: 'iife',
  plugins: [
    json(),

    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),

    commonjs({
       include: "node_modules/**"
    }),

    uglify()

  ],
  dest: 'dist/bundle.min.js',
  sourceMap: true
};
