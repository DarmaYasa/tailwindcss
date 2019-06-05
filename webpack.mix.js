const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss')

mix.js('src/js/min.js', 'js')
.sass('src/sass/min.scss', 'css')
  .options({
    processCssUrls: false,
    postCss: [ tailwindcss('./tailwind.config.js') ],
  })