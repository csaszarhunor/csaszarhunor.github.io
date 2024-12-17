import React, { useEffect, useRef } from 'react';
import './App.css';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Services from './components/Services.js';
import Contact from './components/Contact';
import useLocalStorage from 'use-local-storage';
import { useInViewport } from 'react-in-viewport';

function App() {
  /*const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');*/
  const [theme, setTheme] = useLocalStorage('theme', 'dark');
  const header = useRef(null);
  const content = useRef(null);
  const {
    inViewport,
    enterCount,
    leaveCount,
  } = useInViewport(
    content,
    {},
    { disconnectOnLeave: false },
    {}
  );

  const switchTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    const TRANSFORM_PERCENT = 65;
    const onScroll = () => {
      //console.log(getScrolledPassedViewPercentage(header.current))
    };
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [])

  return (
    <div className={inViewport ? 'App scroll-up-active' : 'App'} data-theme={theme}>
      <Header ref={header} switchTheme={switchTheme} theme={theme}></Header>
      <div ref={content} className="content">
        <Skills theme={theme}></Skills>
        <Experience theme={theme}></Experience>
        <Services theme={theme}></Services>
        <Contact theme={theme}></Contact>
        <button onClick={scrollToTop} className='scroll-up-icon'>↑</button>
      </div>
      <footer>
        Hunor Csaszar © 2024
      </footer>
    </div>
  );
}

export default App;
