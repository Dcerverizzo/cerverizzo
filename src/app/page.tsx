"use-client";

import Nav from './components/nav';
import HomePage from './components/home';
import Services from './components/services';
import About from './components/about';
import Experience from './components/experience';
import Skills from './components/skills';
import Blog from './components/blog';
import Contact from './components/contact';
import { ThemeProvider } from '../context/ThemeContext';

export default function Home() {

  return (
    <ThemeProvider>
      <div>
        <Nav />
        <HomePage />
        <Services />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

