import React, { useEffect, useRef, useState } from 'react';
import './Menu.css';

function Menu(props) {
    const [isLoaded, setIsLoaded] = useState(false);
    const pathBlue = useRef(null);
    const pathCyan = useRef(null);
    const pathYellow = useRef(null);
    const pathRed = useRef(null);

    useEffect(() => {
        let lengthBlue = pathBlue.current.getTotalLength();
        let lengthCyan = pathCyan.current.getTotalLength();
        let lengthYellow = pathYellow.current.getTotalLength();
        let lengthRed = pathRed.current.getTotalLength();
        // Clear any previous transition
        pathBlue.current.style.transition = pathBlue.current.style.WebkitTransition = 'none';
        pathCyan.current.style.transition = pathCyan.current.style.WebkitTransition = 'none';
        pathYellow.current.style.transition = pathYellow.current.style.WebkitTransition = 'none';
        pathRed.current.style.transition = pathRed.current.style.WebkitTransition = 'none';
        // Set up the starting positions
        pathBlue.current.style.strokeDasharray = lengthBlue + ' ' + lengthBlue;
        pathBlue.current.style.strokeDashoffset = lengthBlue;
        pathCyan.current.style.strokeDasharray = lengthCyan + ' ' + lengthCyan;
        pathCyan.current.style.strokeDashoffset = lengthCyan;
        pathYellow.current.style.strokeDasharray = lengthYellow + ' ' + lengthYellow;
        pathYellow.current.style.strokeDashoffset = lengthYellow;
        pathRed.current.style.strokeDasharray = lengthRed + ' ' + lengthRed;
        pathRed.current.style.strokeDashoffset = lengthRed;
        // Trigger a layout so styles are calculated & the browser
        // picks up the starting position before animating
        pathBlue.current.getBoundingClientRect();
        pathCyan.current.getBoundingClientRect();
        pathYellow.current.getBoundingClientRect();
        pathRed.current.getBoundingClientRect();
        // Define our transition
        pathBlue.current.style.transition = pathBlue.current.style.WebkitTransition = 'stroke-dashoffset 0.5s ease-in-out';
        pathCyan.current.style.transition = pathCyan.current.style.WebkitTransition = 'stroke-dashoffset 0.5s ease-in-out 0.2s';
        pathYellow.current.style.transition = pathYellow.current.style.WebkitTransition = 'stroke-dashoffset 0.5s ease-in-out 0.4s';
        pathRed.current.style.transition = pathRed.current.style.WebkitTransition = 'stroke-dashoffset 0.5s ease-in-out 0.6s';

        setIsLoaded(true);

        setTimeout(() => {
            pathBlue.current.style.strokeDashoffset = lengthBlue;
            pathCyan.current.style.strokeDashoffset = lengthCyan;
            pathYellow.current.style.strokeDashoffset = lengthYellow;
            pathRed.current.style.strokeDashoffset = lengthRed;
        }, 0);

        setTimeout(() => {
            props.setOpenMenu(true);
        }, 2600);
    }, []);

    useEffect(() => {
        let lengthBlue = pathBlue.current.getTotalLength();
        let lengthCyan = pathCyan.current.getTotalLength();
        let lengthYellow = pathYellow.current.getTotalLength();
        let lengthRed = pathRed.current.getTotalLength();

        if (props.openMenu) {
            pathBlue.current.style.strokeDashoffset = '0';
            pathCyan.current.style.strokeDashoffset = '0';
            pathYellow.current.style.strokeDashoffset = '0';
            pathRed.current.style.strokeDashoffset = '0';
        } else {
            pathBlue.current.style.strokeDashoffset = lengthBlue - 24;
            pathCyan.current.style.strokeDashoffset = lengthCyan - 20;
            pathYellow.current.style.strokeDashoffset = lengthYellow;
            pathRed.current.style.strokeDashoffset = lengthRed - 16;
        }
    }, [props.openMenu]);

    function triggerMenu(e) {
        e.preventDefault();
        if (props.openMenu) {
            props.setOpenMenu(false);
        } else {
            props.setOpenMenu(true);
        }
    }

    return (
        <div className={props.openMenu ? 'menu-container open' : 'menu-container'}>
            <div className={isLoaded ? 'hamburger-menu' : 'loading hamburger-menu'}>
                <nav className="menu">
                    <a href="#" className="menu-trigger" onClick={triggerMenu}>
                        <div className="loading-lines">
                            <span className="blue"></span>
                            <span className="cyan"></span>
                            <span className="red"></span>
                        </div>
                        <svg className="menu-item-lines" width="47" height="90" fill="none">
                            <path ref={pathRed} className="red" stroke="#D0809D" strokeWidth="4" d="M8 41C12.3333 41 21.6 41 24 41C27 41 29 43 29 46C29 49 29 79 29 82C29 85 31 87 34 87C36.4 87 39.6667 87 41 87C41 86.5 41.5 86 42 86C42.5 86 43 86.5 43 87C43 87.5 42.5 88 42 88C41.6 88 41.1667 87.6667 41 87.5"/>
                            <path ref={pathYellow} className="yellow" stroke="#D9B762" strokeWidth="4" d="M24 31C25.3333 31 28.6 31 31 31C34 31 36 33 36 36C36 39 36 50 36 53C36 56 38 58 41 58H42C42 57.5 42.5 57 43 57C43.5 57 44 57.5 44 58C44 58.5 43.5 59 43 59C42.6 59 42.1667 58.6667 42 58.5"/>
                            <path ref={pathCyan} className="cyan" stroke="#8DDBB5" strokeWidth="4" d="M4 31H43C43 30.5 43.5 30 44 30C44.5 30 45 30.5 45 31C45 31.5 44.5 32 44 32C43.6 32 43.1667 31.6667 43 31.5"/>
                            <path ref={pathBlue} className="blue" stroke="#60A2FB" strokeWidth="4" d="M0 21C8.66667 21 26.6 21 29 21C32 21 34 19 34 16C34 13 34 11 34 8C34 5 36 3 39 3C41.4 3 42.6667 3 43 3C43 2.5 43.5 2 44 2C44.5 2 45 2.5 45 3C45 3.5 44.5 4 44 4C43.6 4 43.1667 3.66667 43 3.5"/>
                        </svg>
                    </a>
                    <ul className="menu-items">
                        <li><a href="#skills" className="skills">skills</a></li>
                        <li><a href="#experience" className="experience">experience</a></li>
                        <li><a href="#services" className="services">capabilities</a></li>
                        <li><a href="#contact" className="contact">contact & CV</a></li>
                    </ul>
                </nav>
                <button className="theme-switch-btn" onClick={props.switchTheme}>
                    <svg width="16" height="16" fill="none">
                        <path d="M4 4L3 3" stroke="var(--background)" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 8H1" stroke="var(--background)" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 14V15" stroke="var(--background)" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4 12L3 13" stroke="var(--background)" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 12L13 13" stroke="var(--background)" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14 8H15" stroke="var(--background)" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 4L13 3" stroke="var(--background)" strokeLinecap="round" strokeLinejoin="round"/>
                        <rect x="2.5" y="2.5" width="11" height="11" rx="5.5" stroke="var(--background)"/>
                        <path d="M8 2V1" stroke="var(--background)" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <svg width="15" height="15" fill="none">
                        <path d="M0.5 7C0.5 3.41015 3.41015 0.5 7 0.5C10.5899 0.5 13.5 3.41015 13.5 7C13.5 7.05646 13.4993 7.11274 13.4979 7.16885C12.6731 6.15098 11.4129 5.5 10 5.5C7.51472 5.5 5.5 7.51472 5.5 10C5.5 11.4129 6.15099 12.6731 7.16885 13.4979C7.11275 13.4993 7.05646 13.5 7 13.5C3.41015 13.5 0.5 10.5899 0.5 7Z" stroke="var(--background)"/>
                    </svg>
                    <span className="sr-only">switch to {props.theme === "light" ? 'dark' : 'light'} mode</span>
                </button>
            </div>
        </div>
    );
}

export default Menu;