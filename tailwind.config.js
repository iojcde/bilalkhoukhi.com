const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./components/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './pages/*.{js,ts,jsx,tsx,mdx}', './pages/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  prefix: '',
  separator: ':',
  theme: {
    fontFamily: {
      'roboto-mono': ['Roboto Mono', 'monospace']
    },
    container: {
      center: true
    },
    colors:{
      grey: {
        '100': '#f5f5f5',
        '200': '#eeeeee',
        '300': '#e0e0e0',
        '400': '#bdbdbd',
        '500': '#9e9e9e',
        '600': '#757575',
        '700': '#616161',
        '800': '#424242',
        '900': '#212121'
      },
      white: colors.white,
      black: colors.black,
      red: colors.red,
      yellow: colors.yellow,
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.grey.800'),
            a: {
              color: theme('colors.red.500'),
              'text-decoration': 'none',
              '&:hover, &.active': {
                color: 'white',
                'background-color': theme('colors.red.500'),
                strong: {
                  color: 'white'
                },
              },
            },
            strong: {
              color: theme('colors.red.500')
            },
            h1: {
              color: theme('colors.grey.800'),
              'margin-top': '0'
            },
            h2: {
              color: theme('colors.grey.800'),
              'margin-top': '0'
            },
            h3: {
              color: theme('colors.grey.800'),
              'margin-top': '0'
            },
            h4: {
              color: theme('colors.grey.800'),
              'margin-top': '0'
            },
            code: {
              color: 'white',
              'background-color': theme('colors.grey.800'),
              '&:before, &:after': {
                display: 'none'
              }
            },
            p: {
              color: theme('colors.grey.800'),
              'margin-top': '0',
              'margin-bottom': '1em'
            },
            img: {
              'margin-top': '0',
              'margin-bottom': '0',
              'box-shadow': '0px 2px 4px -2px rgba(0, 0, 0, 30%)'
            },
            'ul > li': {
              '&::before': {
                'background-color': theme('colors.grey.800'),
                'font-weight': 'bold'
              }
            },
            'ol > li': {
              '&::before': {
                color: theme('colors.grey.800'),
                'font-weight': 'bold'
              }
            }
          },
        },

        dark: {
          css: {
            color: 'white',
            a: {
              color: theme('colors.red.500'),
              'text-decoration': 'none',
              '&:hover, &.active': {
                color: 'white',
                'background-color': theme('colors.red.500'),
              },
            },
            strong: {
              color: theme('colors.red.500')
            },
            h1: {
              color: 'white',
              'margin-top': '0'
            },
            h2: {
              color: 'white',
              'margin-top': '0'
            },
            h3: {
              color: 'white',
              'margin-top': '0'
            },
            h4: {
              color: 'white',
              'margin-top': '0'
            },
            code: {
              color: theme('colors.grey.800'),
              'background-color': 'white',
              '&:before, &:after': {
                display: 'none'
              }
            },
            p: {
              color: 'white',
              'margin-top': '0',
              'margin-bottom': '1em'
            },
            img: {
              'margin-top': '0',
              'margin-bottom': '0',
              'box-shadow': '0px 2px 4px -2px rgba(255, 255, 255, 30%)'
            },
            'ul > li': {
              '&::before': {
                'background-color': 'white',
                'font-weight': 'bold'
              }
            },
            'ol > li': {
              '&::before': {
                color: 'white',
                'font-weight': 'bold'
              }
            }
          }
        },
      })
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
  variants: {
    extend: {
      borderWidth: ['last'],
      transitionDuration: ['hover'],
      transitionProperty: ['hover'],
      margin: ['last'],
      padding: ['last'],
      height: ['group-hover'],
      typography: ['dark']
    }
  } 
};
