'use client';
import '../../../public/styles/about.css'
import { useTheme } from '../../context/ThemeContext';

export default function About() {
  const { isDarkMode } = useTheme();

  const styles = {
    backgroundColor: isDarkMode ? 'bg-black' : 'bg-white',
    colorMain: isDarkMode ? 'text-white' : 'text-black-800',
    colorSecundary: isDarkMode ? 'text-white' : 'text-gray-400',
  };

  return (
    <div className={`${styles.backgroundColor}`} id='about'>
      {/* About */}
      <div className={` p-10 flex flex-col md:flex-row items-center h-screen ${styles.backgroundColor}`} >
        <div className='text-center md:text-left mx-5 md:w-1/2'>
          <span className={`text-gray-500 text-8xl leading-tight ${styles.colorMain}`}>
            Creative Dev</span>
          <span className={` ${isDarkMode ? 'outline-text-white' : 'outline-text-black'}`}>
            eloper
          </span><br />
          <span className={`text-gray-500 text-8xl leading-tight ${styles.colorSecondary}`}>
            Front End
          </span> <br />
        </div>
        <div className="mt-5 md:mt-0 mx-5 md:mr-10 md:w-1/2">
          <div className='mb-4 inline-block bg-gray-200 rounded-full px-3 py-1'>
            <span className='text-black-700 text-xs'>
              7+ Years Experience
            </span>
          </div>
          <div className="p-4 w-2/6">
            <span className={`text-left text-sm break-words ${styles.colorMain}`}>
              I'm a Creative Independent Web Developer, passionate and dedicated to my work. Utilizing year-over-year design approaches and the latest technologies.
            </span>
          </div>
        </div>
      </div>
      <hr className='border-black-600'></hr>
      {/* End About */}
    </div>
  )

}
