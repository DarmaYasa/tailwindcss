const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss')

mix.js('src/min.js', 'js')
.sass('src/min.scss', 'css')
  .options({
    processCssUrls: false,
    postCss: [ tailwindcss('./tailwind.config.js') ],
  })