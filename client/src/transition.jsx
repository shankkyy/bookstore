import { motion } from 'framer-motion';
import React from 'react';

const transition = (OgComponent) => {
  return (props) => (
    <>
      <OgComponent {...props} />
      <motion.div
        className='slide-in'
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1}}
        transition={{ duration:0.5, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className='slide-out'
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 0.5 , ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};

export default transition;