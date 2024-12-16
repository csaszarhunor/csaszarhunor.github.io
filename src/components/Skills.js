import React, { Component, useEffect, useState, useRef }  from 'react';
import VideoSection from './VideoSection';
import Container from './Container';
import videoLight from '../assets/6772576-hd_1920_1080_30fps.mp4';
import videoDark from '../assets/7513671-hd_1920_1080_24fps.mp4';
import './Skills.css';

const Skills = (props) => {

    return (
        <VideoSection 
            className='skills-container' 
            id='skills'
            title='skills' 
            initFrom='left' 
            color='blue'
            videoSrc={props.theme === 'dark' ? videoDark : videoLight}
            backgroundGradient={props.theme === 'dark' ? 
                'linear-gradient(180deg, var(--background), var(--blue-dark), transparent, transparent, var(--cyan-dark)' :
                'linear-gradient(180deg, var(--background), var(--blue-light), transparent, transparent, var(--cyan-light))'
            }>
            <Container style={{fontWeight: '500', paddingTop: '10vh', paddingBottom: '30vh'}}>
                <div className="skills-dev" style={{width: '50%', paddingLeft: '10px', paddingRight: '10px', textAlign: 'left', display: 'flex', justifyContent: 'flex-end'}}>
                    <div style={{display: 'inline-block'}}>
                        <p>javascript</p>
                        <p>react</p>
                        <p>css5</p>
                        <p>html5</p>
                        <p>java</p>
                        <p>wordpress</p>
                        <p>liferay</p>
                        <p>python</p>
                    </div>
                </div>
                <div className="skills-des" style={{width: '50%', paddingLeft: '10px', paddingRight: '10px', textAlign: 'right', display: 'flex', justifyContent: 'flex-start'}}>
                    <div style={{display: 'inline-block'}}>
                        <p>figma</p>
                        <p>prototyping</p>
                        <p>wireframing</p>
                        <p>web design</p>
                        <p>print design</p>
                        <p>branding</p>
                        <p>affinity suite</p>
                        <p>adobe suite</p>
                    </div>
                </div>
            </Container>
        </VideoSection>
    )
}

export default Skills;