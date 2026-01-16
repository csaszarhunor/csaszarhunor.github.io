import React from 'react';
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
                'linear-gradient(180deg, var(--background), var(--blue-light), rgba(241, 241, 241, 0.75), rgba(241, 241, 241, 0.75), var(--cyan-light))'
            }>
            <Container style={{fontWeight: '500', paddingTop: '10vh', paddingBottom: '30vh'}}>
                <div className="skills-dev" style={{width: '33%', paddingLeft: '10px', paddingRight: '10px', textAlign: 'left', display: 'flex', justifyContent: 'center'}}>
                    <div style={{display: 'inline-block'}}>
                        <h3>frontend</h3>
                        <p>JavaScript (ES6+)</p>
                        <p>HTML5, CSS3</p>
                        <p>Responsive layouts, Accessibility</p>
                        <p>Basic React (hooks, components)</p>
                    </div>
                </div>
                <div className="skills-dev" style={{width: '33%', paddingLeft: '10px', paddingRight: '10px', textAlign: 'left', display: 'flex', justifyContent: 'center'}}>
                    <div style={{display: 'inline-block'}}>
                        <h3>backend / platforms</h3>
                        <p>Java</p>
                        <p>Liferay</p>
                        <p>WordPress</p>
                        <p>REST APIs</p>
                    </div>
                </div>
                <div className="skills-des" style={{width: '33%', paddingLeft: '10px', paddingRight: '10px', textAlign: 'left', display: 'flex', justifyContent: 'center'}}>
                    <div style={{display: 'inline-block'}}>
                        <h3>design</h3>
                        <p>digital / print design</p>
                        <p>branding</p>
                        <p>Figma</p>
                        <p>adobe / affinity suites</p>
                    </div>
                </div>
            </Container>
        </VideoSection>
    )
}

export default Skills;