import React, { useEffect, useState, useRef }  from 'react';
import './AboutSection.css';

function AboutSection(props) {
    const [hiddenProfile, setHiddenProfile] = useState(true);
    const [hiddenIntro, setHiddenIntro] = useState(true);
    const pathBlue = useRef(null);
    const pathCyan = useRef(null);
    const pathYellow = useRef(null);
    const pathRed = useRef(null);

    const triggerAbout = e => {
        e.preventDefault();
        props.setOpenAbout(!props.openAbout);
    }
    
    useEffect(() => {
        setHiddenProfile(false);
        setTimeout (() => {
            setHiddenIntro(false);
        }, 1000);

        const DASH_ARRAY =  18;
        const DASH_OFFSET =  18;
        
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
        pathBlue.current.style.strokeDasharray = DASH_ARRAY + ' ' + lengthBlue;
        pathBlue.current.style.strokeDashoffset = DASH_OFFSET;
        pathCyan.current.style.strokeDasharray = DASH_ARRAY + ' ' + lengthCyan;
        pathCyan.current.style.strokeDashoffset = DASH_OFFSET;
        pathYellow.current.style.strokeDasharray = DASH_ARRAY + ' ' + lengthYellow;
        pathYellow.current.style.strokeDashoffset = DASH_OFFSET;
        pathRed.current.style.strokeDasharray = DASH_ARRAY + ' ' + lengthRed;
        pathRed.current.style.strokeDashoffset = DASH_OFFSET;
        // Trigger a layout so styles are calculated & the browser
        // picks up the starting position before animating
        pathBlue.current.getBoundingClientRect();
        pathCyan.current.getBoundingClientRect();
        pathYellow.current.getBoundingClientRect();
        pathRed.current.getBoundingClientRect();
        // Define our transition
        pathBlue.current.style.transition = pathBlue.current.style.WebkitTransition = 'stroke-dashoffset 1s linear 0.4s';
        pathCyan.current.style.transition = pathCyan.current.style.WebkitTransition = 'stroke-dashoffset 1s linear';
        pathYellow.current.style.transition = pathYellow.current.style.WebkitTransition = 'stroke-dashoffset 1s linear 0.4s';
        pathRed.current.style.transition = pathRed.current.style.WebkitTransition = 'stroke-dashoffset 1s linear';

        setTimeout(() => {
            pathCyan.current.style.strokeDashoffset = lengthCyan + DASH_OFFSET * 2;
            pathRed.current.style.strokeDashoffset = lengthRed + DASH_OFFSET * 2;
        }, 400);

        setTimeout(() => {
            pathBlue.current.style.strokeDashoffset = lengthBlue + DASH_OFFSET * 2;
            pathYellow.current.style.strokeDashoffset = lengthYellow + DASH_OFFSET * 2;
            props.setOpenAbout(true);
        }, 800);
    }, [])

    return (
        <div className={props.openAbout ? 'about open' : 'about'}>
            <a onClick={triggerAbout} className={hiddenProfile ? 'hidden' : ''} href="" role="button" title="About">
                <div className="profile-pic"></div>
                <svg className="frame" width="48" height="48" fill="none">
                    <path ref={pathRed} className="red" d="M24 2C36 2 46 12 46 24C46 36 36 46 24 46" stroke="#D0809D" strokeWidth="4"/>
                    <path ref={pathCyan} className="cyan" d="M24 46H2V2H24" stroke="#8DDBB5" strokeWidth="4"/>
                    <path ref={pathYellow} className="yellow" d="M24 2H46V46H24" stroke="#D9B762" strokeWidth="4"/>
                    <path ref={pathBlue} className="blue" d="M24 46C12 46 2 36 2 24C2 12 12 2 24 2" stroke="#60A2FB" strokeWidth="4"/>
                </svg>
            </a>
            <div className={hiddenIntro ? 'intro hidden' : 'intro'}>
                <p>Hello,</p>
                <p>I’m <span data-fonetic-version="hu:nəʊr">Hunor</span>.</p>
                <p>I <b>[</b>design<b>]</b> and <b>{'{'}</b>develop<b>{'}'}</b></p>
                <p>digital experience.</p>
            </div>
        </div>
    );
}

export default AboutSection;