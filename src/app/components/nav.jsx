"use client";
import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Link as ScrollLink } from 'react-scroll';

function Nav() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <nav className={`fixed top-0 left-0 w-full ${isDarkMode ? 'bg-black' : 'bg-white'}  shadow-lg py-4 px-20 z-20`}>
      <div className='flex items-center justify-between'>
        <div className='space-x-2 flex-none'>
          <span className={`font-bold text-xl ${isDarkMode ? 'text-white' : 'text-black'}`}>Cerverizzo</span>
          <span className={`text-gray-500 text-sm ${isDarkMode ? 'text-white' : 'text-gray'}`}>Dev</span>
        </div>
        <div className='space-x-20 text-1xl hidden md:block'>
          <DesktopMenu />
        </div>
        <div className='md:hidden'>
          <MobileMenu />
        </div>
        <button
          id="theme-toggle"
          type="button"
          className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 ml-5"
          onClick={toggleDarkMode}
        >
          <svg id="theme-toggle-dark-icon" className={`w-4 h-4 ${isDarkMode ? 'hidden' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
            <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"></path>
          </svg>

          <svg id="theme-toggle-light-icon" className={`w-4 h-4 ${isDarkMode ? '' : 'hidden'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}

function DesktopMenu() {
  const { isDarkMode } = useTheme();
  const [hoveredLink, setHoveredLink] = useState(null);

  const linkStyles = (linkIndex) => {
    const baseStyles = isDarkMode ? 'text-white' : 'text-black-500';
    return `${baseStyles} ${hoveredLink === linkIndex ? 'hover:underline' : 'hover:no-underline'} cursor-pointer`;
  };

  return (
    <div className={`space-x-20 text-1xl z-100`}>
      <ScrollLink to="home" smooth={true} className={linkStyles(0)} onMouseEnter={() => setHoveredLink(0)} onMouseLeave={() => setHoveredLink(null)}>
        Home
      </ScrollLink>
      <ScrollLink to="services" smooth={true} className={linkStyles(1)} onMouseEnter={() => setHoveredLink(1)} onMouseLeave={() => setHoveredLink(null)}>
        Services
      </ScrollLink>
      <ScrollLink to="about" smooth={true} className={linkStyles(2)} onMouseEnter={() => setHoveredLink(2)} onMouseLeave={() => setHoveredLink(null)}>
        About
      </ScrollLink>
      <ScrollLink to="skills" smooth={true} className={linkStyles(3)} onMouseEnter={() => setHoveredLink(3)} onMouseLeave={() => setHoveredLink(null)}>
        Skills
      </ScrollLink>
      <ScrollLink to="exp" smooth={true} className={linkStyles(4)} onMouseEnter={() => setHoveredLink(4)} onMouseLeave={() => setHoveredLink(null)}>
        Experience
      </ScrollLink>
      {/* <ScrollLink to="blog" smooth={true} className={linkStyles(5)} onMouseEnter={() => setHoveredLink(5)} onMouseLeave={() => setHoveredLink(null)}>
        Blog
      </ScrollLink> */}
      <ScrollLink to="contact" smooth={true} className={linkStyles(6)} onMouseEnter={() => setHoveredLink(6)} onMouseLeave={() => setHoveredLink(null)}>
        Contact
      </ScrollLink>
    </div>
  );
}


function MobileMenu() {
  const { isDarkMode } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuStyles = {
    backgroundColor: isDarkMode ? 'black' : 'white',
    color: isDarkMode ? 'white' : 'black',
  };

  const linkStyles = isDarkMode
    ? 'text-white hover:underline block mt-2'
    : 'text-black-500 hover:underline block mt-2';

  return (
    <div>
      <button onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-6 h-6 text-${menuStyles.color}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      {menuOpen && (
        <div className="menu-items z-10" style={menuStyles}>
          <ScrollLink to="home" smooth={true} className={linkStyles(0)} onMouseEnter={() => setHoveredLink(0)} onMouseLeave={() => setHoveredLink(null)}>
            Home
          </ScrollLink>
          <ScrollLink to="services" smooth={true} className={linkStyles(1)} onMouseEnter={() => setHoveredLink(1)} onMouseLeave={() => setHoveredLink(null)}>
            Services
          </ScrollLink>
          <ScrollLink to="about" smooth={true} className={linkStyles(2)} onMouseEnter={() => setHoveredLink(2)} onMouseLeave={() => setHoveredLink(null)}>
            About
          </ScrollLink>
          <ScrollLink to="skills" smooth={true} className={linkStyles(3)} onMouseEnter={() => setHoveredLink(3)} onMouseLeave={() => setHoveredLink(null)}>
            Skills
          </ScrollLink>
          <ScrollLink to="exp" smooth={true} className={linkStyles(4)} onMouseEnter={() => setHoveredLink(4)} onMouseLeave={() => setHoveredLink(null)}>
            Experience
          </ScrollLink>
          <ScrollLink to="blog" smooth={true} className={linkStyles(5)} onMouseEnter={() => setHoveredLink(5)} onMouseLeave={() => setHoveredLink(null)}>
            Blog
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} className={linkStyles(6)} onMouseEnter={() => setHoveredLink(6)} onMouseLeave={() => setHoveredLink(null)}>
            Contact
          </ScrollLink>
        </div>
      )}
    </div>
  );
}


export default Nav;


