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
        staggerChildren: 0.3,
      },
    },

    exit: {
      x: '-100vw',
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
    exit: {
      y: -200,
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

export const inputVariants = {
  labelVariants: {
    initial: {
      y: 0,
      scale: 1,
    },

    isFocused: {
      y: -20,
      scale: 0.8,
      transition: { type: 'spring', stiffness: 320, bounce: 0.25 },
    },
  },

  lineVariants: {
    initial: {
      x: '-150%',
    },
    isFocused: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 10,
      },
    },
  },

  feedbackVariants: {
    hidden: {
      x: -20,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: 20,
      opacity: 0,
    },
  },
};

export const sidebarVariants = {
  sidebar: {
    hidden: {
      x: '-100%',
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.2,
        type: 'spring',
        stiffness: 90,
      },
    },
    exit: {
      x: '-100%',
      transition: {
        delay: 0.2,
        type: 'spring',
        stiffness: 90,
      },
    },
  },
};

export const taskVariants = {
  parent: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 1,
      },
    },
  },

  task: {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
    hover: {
      scale: 0.95,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 4,
      },
    },
  },
};

export const newNoteBarVariants = {
  hidden: {
    x: '100%',
  },

  visible: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 90,
      damping: 10,
    },
  },

  exit: {
    x: '100%',
  },
};

export const popupVariants = {
  hidden: {
    x: '-100%',
  },

  visible: {
    x: 0,
  },

  exit: {
    x: '-100%',
  },
};

export const spinnerVariants = {
  container: {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },

  circle: {
    animate: {
      y: [0, 20],
      transition: {
        yoyo: Infinity,
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  },
};
