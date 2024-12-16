import React, { useEffect, useState, useRef }  from 'react';
import './Header.css';
import AboutSection from './AboutSection.js';
import Menu from './Menu.js';
import {getScrolledPassedViewPercentage} from './ScrollUtils.js';

const Header = React.forwardRef((props, headerRef) => {
    const [openAbout, setOpenAbout] = useState(true);
    const [openMenu, setOpenMenu] = useState(false);
    const [fixedNavbar, setFixedNavbar] = useState(false);
    const [scrollIndicatorStyle, setScrollIndicatorStyle] = useState({display: 'none', opacity: 1});
    const path = useRef(null);
    const scrollIndicator = useRef(null);
    const scrollText = useRef(null);
    const navbar = useRef(null);

    const transitionFixed = function(headerViewPercent) {
        headerViewPercent -= 65;
        let percent = headerViewPercent < 0 ? 0 : headerViewPercent > 25 ? 1 : headerViewPercent / 25;
        setScrollIndicatorStyle({opacity: 1 - percent});
    }

    useEffect(() => {
        setTimeout(() => {
            scrollIndicator.current.style.display = '';
            scrollText.current.style.opacity = 1;

            var length = path.current.getTotalLength();
            // Clear any previous transition
            path.current.style.transition = path.current.style.WebkitTransition = 'none';
            // Set up the starting positions
            path.current.style.strokeDasharray = length + ' ' + length;
            path.current.style.strokeDashoffset = length;
            // Trigger a layout so styles are calculated & the browser
            // picks up the starting position before animating
            path.current.getBoundingClientRect();
            // Define our transition
            path.current.style.transition = path.current.style.WebkitTransition =
            'stroke-dashoffset 2s ease-in-out';
            // Go!
            path.current.style.strokeDashoffset = '0';
        }, 4200);
        
        const onScroll = () => {
            let headerViewPercent = getScrolledPassedViewPercentage(headerRef.current);
            if (headerViewPercent > 55) {
                setOpenAbout(false);
                setOpenMenu(false);
                transitionFixed(headerViewPercent);
            } else {
                setOpenAbout(true);
                setOpenMenu(true);
            }
            if (window.scrollY >= (headerRef.current.clientHeight - navbar.current.clientHeight) / 2) {
                setFixedNavbar(true);
            } else {
                setFixedNavbar(false);
            }
        };
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [headerRef])
    
    return (
        <header ref={headerRef}>
            <div className={(fixedNavbar ? "navbar fixed" : "navbar") + ((openAbout || openMenu) ? " high" : "")} ref={navbar}>
                <AboutSection openAbout={openAbout} setOpenAbout={setOpenAbout}></AboutSection>
                <Menu switchTheme={props.switchTheme} openMenu={openMenu} setOpenMenu={setOpenMenu} theme={props.theme}></Menu>
            </div>
            <div className="scroll-indicator" ref={scrollIndicator} style={scrollIndicatorStyle}>
                <svg width="10" height="24" fill="none">
                    <path ref={path} stroke="var(--text-primary)" className="scroll-cursor" strokeLinecap="round" strokeLinejoin="round" d="M4 1C3 1 1 2.5 1 4.5C1 6 1 7 1 9C1 11.5 2.5 13 5 13C7.5 13 9 11.5 9 9C9 6.5 9 8 9 5C9 2.5 7.5 1 5 1C5 1.8 5 16 5 23L9 19H1L4.5 22.5"/>
                </svg>
                <p ref={scrollText}>scroll</p>
            </div>
        </header>
    );
});

export default Header;