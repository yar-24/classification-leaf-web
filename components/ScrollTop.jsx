'use client';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAnimationControls } from 'framer-motion';
import { ScrollToTopContainerVariants } from '../utils/motion';

const ScrollTop = () => {
  const controls = useAnimationControls();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        controls.start('show');
      } else {
        controls.start('hidden');
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button
      className="right-5 bottom-3 fixed z-30"
      variants={ScrollToTopContainerVariants}
      initial="hidden"
      animate={controls}
      onClick={goToTop}
    >
      <h1>kocak</h1>
    </motion.button>
  );
};

export default ScrollTop;
