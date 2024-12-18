import React from 'react';
import VideoSection from './VideoSection';
import Container from './Container';
import videoLight from '../assets/6551321-hd_1280_720_25fps.mp4'
import videoDark from '../assets/5561389-hd_1920_1080_25fps.mp4';
/*import videoDark from '../assets/855240-hd_1280_720_25fps.mp4';*/
import './Services.css';

const Services = (props) => {
    return (
        <VideoSection 
            className='services-container' 
            id='services'
            title='services' 
            initFrom='left' 
            color='yellow'
            playbackRate={props.theme === 'dark' ? '1.0' : '0.5'}
            videoSrc={props.theme === 'dark' ? videoDark : videoLight}
            backgroundGradient={props.theme === 'dark' ? 
                'linear-gradient(180deg, var(--yellow-dark), transparent, var(--red-dark)' :
                'linear-gradient(180deg, var(--yellow-light), rgba(241, 241, 241, 0.75), var(--red-light))'
            } >
            
            <Container style={{paddingTop: '10vh', paddingBottom: '30vh', flexWrap: 'wrap'}}>
                <div style={{margin: 'auto'}}>
                    <h3>Design</h3>
                    <ul>
                        <li>Branding materials (from logo to design system)</li>
                        <li>UI / UX (wireframing, UI kit, UI, prototyping)</li>
                        <li>Printing materials</li>
                    </ul>
                </div>
                <div style={{margin: 'auto'}}>
                    <h3>Development</h3>
                    <ul>
                        <li>Frontend / full stack web development</li>
                        <li>Sitebuild</li>
                    </ul>
                </div>
            </Container>
        </VideoSection>
    )
}

export default Services;