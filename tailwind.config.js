module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xxs: '375px',
        min: '414px',
        xs: '500px',
        sm: '640px',
        md: '768px',
        md1: '768px',
        mdd: '948px',
        lg: '1024px',
        lg1: '1024px',
        lg2: '1040px',
        lgg: '1120px',
        xl: '1280px',
        xxl: '1312px',
      },
      colors: {
        primary: '#15803d',
        secondary: '#14532d',
        back: '#f3f4f6',
        light: '#4ADE80',
        brownLight: '#95876C',
        sky: '#1F2937',
        main: '#f3f4f6'
      },
      maxWidth: {
        544: '544px',
        27: '29rem',
        352: '352px',
        486: '486px',
        608: '608px',
        640: '640px',
        928: '928px',
        1120: '1120px'
      },
      height: {
        512: '512px',
        640: '640px'
      },
      fontFamily: {
        body: 'ff-good-headline-web-pro-com, sans-serif',
        runda: 'runda, sans-serif',
        nova: 'proxima-nova'
      },
      lineHeight: {
        11: '65px',
        12: '102px',
        13: '45px',
        14: '76px'
      },
      width:{
        170: '169px',
        456: '456px',
        608: '608px',
        1024: '1024px',
      },
      fontSize: {
        '10xl': '256px',
        '27': '43px'
      },
      fontWeight: {
        'xbold' : '900'
      },
      margin: {
        '-98' : '-29rem'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
