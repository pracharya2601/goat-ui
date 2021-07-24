const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const tailwindcss = require('tailwindcss');
const classNames = require('classnames');
module.exports = {
  rollup(config, options) {
    if (config.output.format === 'umd') {
      delete config.external;
    }
    config.plugins.push(
      postcss({
        plugins: [
          autoprefixer(),
          tailwindcss(),
          classNames(),
          cssnano({
            preset: 'default',
          }),
        ],
        inject: true,
        // only write out CSS for the first bundle (avoids pointless extra files):
        extract: !!options.writeMeta,
      })
    );
    return config;
  },
};