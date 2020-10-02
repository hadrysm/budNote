import React from 'react';
import { Redirect } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionRedirect = ({ ...props }) => (
  <motion.div exit="undefined">
    <Redirect {...props} />
  </motion.div>
);

export default MotionRedirect;
