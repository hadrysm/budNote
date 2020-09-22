const breakpoints = {
  phone: 374,
  tablet: 767,
  bigTablet: 1020,
  desktop: 1150,
  bigDesktop: 1440,
  huge: 1700,
};

const theme = {
  font: {
    weight: {
      regular: 400,
      bold: 700,
    },
    size: {
      xxs: '1.6rem',
      xs: '1.7rem',
      s: '2rem',
      m: '3rem',
      l: '5.2rem',
      xxl: '8rem',
    },
  },

  zIndex: {
    level1: '1000',
    level2: '2000',
    level3: '3000',
    level4: '4000',
    level5: '5000',
    level6: '6000',
    level7: '7000',
    level8: '8000',
    level9: '9000',
  },

  mq: {
    mobile: `(min-width: ${breakpoints.phone}px)`,
    tablet: `(min-width: ${breakpoints.tablet}px)`,
    bigTablet: `(min-width: ${breakpoints.bigTablet}px)`,
    desktop: `(min-width: ${breakpoints.desktop}px)`,
    bigDesktop: `(min-width: ${breakpoints.bigDesktop}px)`,
    huge: `(min-width: ${breakpoints.huge}px)`,
  },

  layout: {
    maxContainerWidth: '1400px',
    mainSpacing: '2rem',
  },
};

export const themeDark = {
  colors: {
    primary: '#6C63FF',
    secondary: '#02E4C0',
    tertiary: '#112D57',
    text: '#FFFFFF',
    background: '#181818',
  },
  ...theme,
};

export const themeLight = {
  colors: {
    primary: '#6C63FF',
    secondary: '#02E4C0',
    tertiary: '#112D57',
    text: '#000000',
    background: '#FFFFFF',
  },
  ...theme,
};
