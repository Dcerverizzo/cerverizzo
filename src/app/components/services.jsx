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
      <motion.div
        animate={{ x: [null, 100, 0] }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <section className='h-screen'>
          <div className="bb ze ki xn yq mb en">
            <div className="wc qf pn xo ng">
              <div className="animate_top sg oi pi zq ml il am cn _m">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-16 h-16 ${styles.colorMain} hidden sm:block`}> <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /> </svg>
                <h4 className={`ek zj wm nb _b ${styles.colorMain}`}>UX/UI Design & Website/App Design</h4>
                <p className={`${styles.colorMain}`}>Crafting memorable digital experiences through intuitive and functional designs</p>
              </div>

              <div className="animate_top sg oi pi zq ml il am cn _m">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-20 h-20 ${styles.colorMain} hidden sm:block`}> <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" /> </svg>
                <h4 className={`ek zj wm nb _b ${styles.colorMain}`}>Front End Development</h4>
                <p className={`${styles.colorMain}`}>Crafting user-centered front-end solutions that seamlessly blend aesthetics and functionality</p>
              </div>

              <div className="animate_top sg oi pi zq ml il am cn _m">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-20 h-20 ${styles.colorMain} hidden sm:block`}> <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" /> </svg>
                <h4 className={`ek zj wm nb _b ${styles.colorMain}`}>Back End Development</h4>
                <p className={`${styles.colorMain}`}>Empowering Applications with Robust Back-End Solutions for Seamless Performance and Scalability</p>
              </div>
            </div>

            <div className="wc qf pn xo ng">
              <div className="animate_top sg oi pi zq ml il am cn _m">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-16 h-16 ${styles.colorMain} hidden sm:block`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                </svg>
                <h4 className={`ek zj wm nb _b ${styles.colorMain}`}>Performance Optimization</h4>
                <p className={`${styles.colorMain}`}>Enhancing the speed and performance of web applications through code optimization and performance testing.</p>
              </div>

              <div className="animate_top sg oi pi zq ml il am cn _m">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-16 h-16 ${styles.colorMain} hidden sm:block`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
                <h4 className={`ek zj wm nb _b ${styles.colorMain}`}>Responsive Web Development</h4>
                <p className={`${styles.colorMain}`}>Building websites that adapt seamlessly to various screen sizes and devices for a consistent user experience.</p>
              </div>

              <div className="animate_top sg oi pi zq ml il am cn _m">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-16 h-16 ${styles.colorMain} hidden sm:block`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                </svg>

                <h4 className={`ek zj wm nb _b ${styles.colorMain}`}>Front-End Frameworks</h4>
                <p className={`${styles.colorMain}`}>Utilizing popular front-end frameworks like React or Angular to build interactive and dynamic web applications.</p>
              </div>
            </div>

          </div>
        </section >
      </motion.div>
      <hr className='border-black-600'></hr>
    </div>
  )

}
