'use client';
import { motion } from 'framer-motion';
import React from 'react'
import { useTheme } from '../../context/ThemeContext';

export default function contact() {
  const { isDarkMode } = useTheme();

  const styles = {
    backgroundColor: isDarkMode ? 'bg-black' : 'bg-white',
    colorMain: isDarkMode ? 'text-white' : 'text-black-800',
    colorSecundary: isDarkMode ? 'text-white' : 'text-gray-400',
  };
  return (
    <div>
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ textAlign: 'left' }}
        >
          <div className={`text-left p-10 h-screen ${styles.backgroundColor}`} id='contact'>
            <div className='mb-4 inline-block bg-gray-200 rounded-full ml-5 px-5 py-1 mt-10'>
              <span className={`text-black-700 text-xs`}>
                Contact
              </span>
            </div>
            <div className='items-center mt-10'>
              <div className='text-left mx-5 m-10'>
                <span className={`block text-4xl md:text-6xl lg:text-8xl font-bold text-black-800 mb-4 ${styles.colorMain}`}>Turning Your Dreams <br /> into Reality</span>
                <span className={`block text-gray-500 text-2xl md:text-2xl lg:text-4xl leading-tight ${styles.colorSecundary}`}>
                  If you would like to work with me or just want to get in <br /> touch, i'd love to hear from you!
                </span>
                <div className='flex items-center space-x-10 mt-10'>
                  <span className={`leading-tight hover:underline ${styles.colorMain}`}><a href='https://www.facebook.com/D.cerverizo/' target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="mx-auto h-full w-8"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg></a></span>
                  <span className={`leading-tight hover:underline ${styles.colorMain}`}><a href='https://instagram.com/dadscerverizzo' target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="mx-auto h-full w-8"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  </span>
                  <span className={`leading-tight hover:underline ${styles.colorMain}`}><a href='https://www.linkedin.com/in/daniel-cerverizzo/' target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="mx-auto h-full w-8"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </a>
                  </span>
                  <span className={`leading-tight hover:underline ${styles.colorMain}`}><a href='https://github.com/Dcerverizzo' target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="mx-auto h-full w-8"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <hr className='border-black-600'></hr>
      </div>
      {/* <!-- Footer section with social media icons and newsletter sign-up --> */}
      <footer class={`text-center ${styles.backgroundColor} ${styles.colorMain}`}>
        <div class="container px-6 pt-6">
          <div>
            <form action="">
              <div
                class="gird-cols-1 grid items-center justify-center gap-4 md:grid-cols-3">
                <div class="md:mb-6 md:ml-auto">
                  <p class={`${styles.colorMain}`}>
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>

                <div class="relative md:mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] text-neutral-200 outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput1"
                    placeholder="Email address" />
                  <label
                    for="exampleFormControlInput1"
                    class={`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-neutral-200 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200 ${styles.colorMain}`}
                  >Email address
                  </label>
                </div>

                <div class="mb-6 md:mr-auto">
                  <button
                    type="submit"
                    class={`inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:${styles.colorMain} hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100  focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 ${styles.colorMain}`}
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div
          class={`p-4 text-center ${styles.backgroundColor}`}>
          <span class={`${styles.colorMain}`}>© 2023 Copyright:
            <a href="#home"
            > Daniel Cerverizzo</a
            >
          </span>
        </div>
      </footer>
    </div>

  );
}
