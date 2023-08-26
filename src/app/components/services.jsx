'use client';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

export default function Services() {
  const { isDarkMode } = useTheme();

  const styles = {
    backgroundColor: isDarkMode ? 'bg-black' : 'bg-white',
    colorMain: isDarkMode ? 'text-white' : 'text-black-800',
    colorSecundary: isDarkMode ? 'text-white' : 'text-gray-400',
  };

  return (
    <div id='services' className={`p-10 ${styles.backgroundColor}`}>
      {/* Services */}
      <div className={`text-left p-10 mt-10 ${styles.backgroundColor}`}>
        <span className={`text-4xl font-bold text-black-500 block ${styles.colorMain}`}>Services</span>

        <motion.div
          animate={{ x: [null, 100, 0] }}
          transition={{ ease: "easeOut", duration: 2 }}
        >

          <div className={`flex flex-wrap justify-center mt-8 ${styles.backgroundColor}`}>
            <div className='flex flex-col rounded-lg mr-56 border-2 p-4 m-2 h-48 w-2/6 '>
              <div className="flex items-center">
                <div className="w-20 h-20 mt-15 mr-4 ml-4 mt-5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-full h-full ${styles.colorMain} hidden sm:block`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                  </svg>
                </div>

                <div className="mt-5 ml-10">
                  <span className={`block text-2xl font-bold text-black-800 mb-4 ${styles.colorMain}`}>
                    UX/UI Design &
                    Website/App Design
                  </span>
                  <span className={`block text-gray-500 text-md leading-tight ${styles.colorSecundary}`}>
                    Crafting memorable digital experiences through intuitive and functional designs
                  </span>
                </div>
              </div>
            </div>

            <div className='flex flex-col items-center rounded-lg border-2 p-4 m-2 h-48 w-2/6'>
              <div className="flex items-center">
                <div className="w-20 h-20 mt-15 mr-4 ml-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-full h-full ${styles.colorMain} hidden sm:block`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                  </svg>
                </div>

                <div className="mt-5 ml-10">
                  <span className={`block text-2xl font-bold text-black-800 mb-4 ${styles.colorMain}`}>
                    Front End Development
                  </span>
                  <span className={`block text-gray-500 text-md leading-tight ${styles.colorSecundary}`}>
                    Crafting user-centered front-end solutions that seamlessly blend aesthetics and functionality
                  </span>
                </div>
              </div>
            </div>
          </div>
          
        </motion.div>

        <motion.div
          animate={{ x: [null, 100, 0] }}
          transition={{ ease: "easeOut", duration: 2 }}>

          <div className='flex flex-wrap justify-center mt-8'>
            <div className='flex flex-col items-center rounded-lg mt-10 mr-56 border-2 p-4 m-2 h-48 w-2/6'>
              <div className="flex items-center">
                <div className="w-20 h-20 mt-15 mr-4 ml-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-full h-full ${styles.colorMain} hidden sm:block`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                  </svg>
                </div>

                <div className="mt-5 ml-10">
                  <span className={`block text-2xl font-bold text-black-800 mb-4 ${styles.colorMain}`}>
                    Back End Development
                  </span>
                  <span className={`block text-gray-500 text-md leading-tight ${styles.colorSecundary}`}>
                    Empowering Applications with Robust Back-End Solutions for Seamless Performance and Scalability
                  </span>
                </div>
              </div>

            </div>

            <div className='flex flex-col items-center rounded-lg mt-10 border-2 p-4 m-2 h-48 w-2/6'>
              <div className="flex items-center">
                <div className="w-20 h-20 mt-15 mr-4 ml-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-full h-full ${styles.colorMain} hidden sm:block`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                  </svg>
                </div>

                <div className="mt-5 ml-10">
                  <span className={`block text-2xl font-bold text-black-800 mb-4 ${styles.colorMain}`}>
                    Collaboration & Management 
                  </span>
                  <span className={`block text-gray-500 text-md leading-tight ${styles.colorSecundary}`}>
                    Collaborating with people, actively engaging in meetings to discuss requirements, progress, and customer-focused planning.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* End Services */}
      <hr className='border-black-600'></hr>
    </div>
  )

}
