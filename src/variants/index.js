export const mainContentVariants = {
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
      staggerChildren: 0.4,
    },
  },
};

export const childrenVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
