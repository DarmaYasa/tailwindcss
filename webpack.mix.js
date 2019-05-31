const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss')

mix.sass('src/min.scss', 'css')
  .options({
    processCssUrls: false,
    postCss: [ tailwindcss('./tailwind.config.js') ],
  })