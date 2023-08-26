'use client';

import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

export default function Motion() {

  const { isDarkMode } = useTheme();

  const styles = {
    backgroundColor: isDarkMode ? 'bg-black' : 'bg-white',
    colorMain: isDarkMode ? 'text-white' : 'text-black-800',
    colorSecundary: isDarkMode ? 'text-white' : 'text-gray-400',
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ textAlign: 'left' }}
    >

      <div className={`h-screen flex items-center ${styles.backgroundColor}`} id='home'>
        <div className='text-left mx-5'>
          <span className={`block m-10 text-2xl md:text-3xl lg:text-4xl font-bold mb-4 ${styles.colorMain}`}>Hello 👋, I'm Daniel Cerverizzo</span>
          <span className={`block m-10 text-gray-500 text-6xl md:text-7xl lg:text-9xl leading-tight ${styles.colorSecundary}`}>
            A UX & UI Designer <br /> Specializing in Front <br /> End
          </span>
        </div>
      </div>
      <hr className='border-black-600'></hr>
    </motion.div> 
  );
}
