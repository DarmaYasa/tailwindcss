module.exports = {
  important: true,
  theme: {
    transform: { // defaults to this value
      'none': 'none',
    },
    transformOrigin: { // defaults to these values
      't': 'top',
      'tr': 'top right',
      'r': 'right',
      'br': 'bottom right',
      'b': 'bottom',
      'bl': 'bottom left',
      'l': 'left',
      'tl': 'top left',
    },
    translate: { // defaults to {}
      '2px': '2px',
      '1/2': '50%',
      'full': '100%',
      'right-up': ['100%', '-100%'],
      '3d': ['40px', '-60px', '-130px'],
    },
    scale: { // defaults to {}
      '90': '0.9',
      '100': '1',
      '110': '1.1',
      '-100': '-1',
      'stretched-x': ['2', '0.5'],
      'stretched-y': ['0.5', '2'],
      '3d': ['0.5', '1', '2'],
    },
    rotate: { // defaults to {}
      '90': '90deg',
      '180': '180deg',
      '270': '270deg',
      '3d': ['0', '1', '0.5', '45deg'],
    },
    skew: { // defaults to {}
      '-5': '-5deg',
      '5': '5deg',
    },
    perspective: { // defaults to {}
      'none': 'none',
      '250': '250px',
      '500': '500px',
      '750': '750px',
      '1000': '1000px',
    },
    perspectiveOrigin: { // defaults to these values
      't': 'top',
      'tr': 'top right',
      'r': 'right',
      'br': 'bottom right',
      'b': 'bottom',
      'bl': 'bottom left',
      'l': 'left',
      'tl': 'top left',
    },
    extend: {}
  },
  variants: {
    transform: ['responsive'],
    transformOrigin: ['responsive'],
    translate: ['responsive', 'hover'],
    scale: ['responsive'],
    rotate: ['responsive'],
    skew: ['responsive'],
    perspective: ['responsive'],
    perspectiveOrigin: ['responsive'],
    transformStyle: ['responsive'],
    backfaceVisibility: ['responsive'],
  },
  plugins: [
    require('glhd-tailwindcss-transitions')(),
    require('tailwindcss-grid')({
      grids: [2, 3, 5, 6, 8, 10, 12],
      gaps: {
        0: '0',
        4: '1rem',
        8: '2rem',
        '4-x': '1rem',
        '4-y': '1rem',
      },
      autoMinWidths: {
        '16': '4rem',
        '24': '6rem',
        '300px': '300px',
      },
      variants: ['responsive'],
    }),
    require('tailwindcss-transforms')({
      '3d': false, // defaults to false
    }),
  ],
}
