import React from 'react';
import { motion } from 'framer-motion';

import { mainContentVariants } from 'variants';

// test - remove later motion

const LoginPage = () => {
  return (
    <motion.div
      style={{ color: 'white' }}
      variants={mainContentVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      login page
    </motion.div>
  );
};

export default LoginPage;
