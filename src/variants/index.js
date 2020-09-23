export const pageVariants = {
  mainContent: {
    hidden: {
      x: '100vw',
      opacity: 0,
    },

    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 8,
        delay: 0.2,
        when: 'beforeChildren',
        staggerChildren: 0.4,
      },
    },

    exit: {
      x: '-100vw',
      transition: {
        type: 'spring',
        stiffness: 120,
        when: 'beforeChildren',
        mass: 0.4,
        damping: 8,
        staggerChildren: 0.3,
      },
    },
  },

  children: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  },

  childrenFadeIn: {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  },
};

export const navigationVariants = {
  nav: {
    hidden: {
      y: -200,
    },
    visible: {
      y: 0,
      transition: {
        delay: 0.2,
        type: 'spring',
        stiffness: 90,
      },
    },
  },

  navList: {
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        mass: 0.4,
        damping: 8,
      },
    },
    closed: {
      x: '+100%',
    },
  },

  burger: {
    firstLine: {
      open: {
        rotate: 135,
        y: 4,
        x: 0,
      },
      closed: {
        rotate: 0,
        y: 0,
      },
      hover: {
        x: 0,
      },
    },

    secondLine: {
      closed: {
        x: '+33%',
      },
      hover: {
        x: 0,
      },
    },

    thirdLine: {
      open: {
        rotate: -135,
        y: -4,
        x: 0,
      },
      closed: {
        rotate: 0,
        y: 0,
        x: '+66%',
      },
      hover: {
        x: 0,
      },
    },
  },
};

export const footerVariants = {
  hidden: {
    y: +200,
  },
  visible: {
    y: 0,
    transition: {
      delay: 0.2,
      type: 'spring',
      stiffness: 90,
    },
  },
};

export const buttonVariants = {
  button: {
    hover: {
      scale: 0.95,
    },
    tap: {
      scale: 0.9,
    },
  },

  line: {
    hidden: {
      x: '-110%',
    },

    hover: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
      },
    },
  },
};
