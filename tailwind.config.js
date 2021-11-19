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
        main: '#f3f4f6',
        line: '#E5E7EB',
      },
      maxWidth: {
        544: '544px',
        27: '29rem',
        160: '160px',
        260: '260px',
        284: '284px',
        330: '330px',
        352: '352px',
        448: '448px',
        486: '486px',
        544: '544px',
        608: '608px',
        640: '640px',
        736: '736px',
        832: '832px',
        928: '928px',
        1000: '1000px',
        1088: '1088px',
        1120: '1120px',
        1280: '1280px',
        1440: '1440px',
      },
      height: {
        512: '512px',
        640: '640px',
        686: '686px',
        775: '775px',
        892: '892px',
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
        170: '171px',
        352: '352px',
        456: '456px',
        544: '544px',
        608: '608px',
        1024: '1024px',
      },
      fontSize: {
        '10xl': '256px',
        '27': '43px'
      },
      fontWeight: {
        'xbold' : '900',
        '700' : '700',
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
