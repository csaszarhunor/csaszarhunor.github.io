import React from 'react';
import VideoSection from './VideoSection';
import Container from './Container';
import videoLight from '../assets/7565458-hd_1920_1080_25fps.mp4';
import videoDark from '../assets/5197737-hd_1920_1080_25fps.mp4';
/*import videoDark from '../assets/5561389-hd_1920_1080_25fps.mp4';*/
import './Contact.css';

const Contact = (props) => {
    return (
        <VideoSection
            className='contact-container' 
            id='contact' 
            title='contact' 
            initFrom='right' 
            color='red'
            videoSrc={props.theme === 'dark' ? videoDark : videoLight}
            playbackRate={props.theme === 'dark' ? '0.3' : '1.0'}
            backgroundGradient={props.theme === 'dark' ? 
                'linear-gradient(180deg, var(--red-dark), transparent, var(--background)' :
                'linear-gradient(180deg, var(--red-light), rgba(241, 241, 241, 0.75), var(--background))'
            }>
                <Container style={{fontWeight: '500', 
                            alignItems: 'center',
                            flexDirection: 'column',
                            paddingTop: '10vh',
                            paddingBottom: '30vh'}}>
                    <div style={{display: 'flex', justifyContent: 'flex-start', width: '240px', marginBottom: '20px'}}>
                        <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight: '10px', marginBottom: '0.5rem'}}>
                            <path fillRule="evenodd" clipRule="evenodd" d="M28 1H2C1.44771 1 1 1.44772 1 2V20C1 20.5523 1.44772 21 2 21H28C28.5523 21 29 20.5523 29 20V2C29 1.44772 28.5523 1 28 1ZM2 0C0.895431 0 0 0.89543 0 2V20C0 21.1046 0.89543 22 2 22H28C29.1046 22 30 21.1046 30 20V2C30 0.895431 29.1046 0 28 0H2Z" fill="var(--text-primary)"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.58403 2.72264C2.7372 2.49288 3.04764 2.43079 3.2774 2.58397L15.0001 10.3991L26.7227 2.58397C26.9525 2.43079 27.2629 2.49288 27.4161 2.72264C27.5693 2.95241 27.5072 3.26284 27.2774 3.41602L15.2774 11.416C15.1095 11.528 14.8907 11.528 14.7227 11.416L2.7227 3.41602C2.49294 3.26284 2.43085 2.95241 2.58403 2.72264Z" fill="var(--text-primary)"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M17.584 12.7226C17.7372 12.4929 18.0476 12.4308 18.2774 12.584L27.2774 18.584C27.5072 18.7371 27.5693 19.0476 27.4161 19.2773C27.2629 19.5071 26.9525 19.5692 26.7227 19.416L17.7227 13.416C17.4929 13.2628 17.4309 12.9524 17.584 12.7226Z" fill="var(--text-primary)"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.416 12.7226C12.2628 12.4929 11.9524 12.4308 11.7226 12.584L2.7226 18.584C2.49283 18.7371 2.43075 19.0476 2.58392 19.2773C2.7371 19.5071 3.04753 19.5692 3.2773 19.416L12.2773 13.416C12.5071 13.2628 12.5691 12.9524 12.416 12.7226Z" fill="var(--text-primary)"/>
                        </svg>
                        <p>csaszarhunor at gmail.com</p>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'flex-start', width: '240px'}}>
                        <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight: '10px', marginBottom: '0.5rem'}}>
                            <path d="M2 21L28 21C28.5523 21 29 20.5523 29 20V14C29 13.8333 29.1 13.5 29.5 13.5C29.9 13.5 30 13.8333 30 14V20C30 21.1046 29.1046 22 28 22L2 22C0.89543 22 0 21.1046 0 20V2C0 0.89543 0.895433 0 2 0H16C16.1667 0 16.5 0.1 16.5 0.5C16.5 0.9 16.1667 1 16 1H2C1.44772 1 1 1.44772 1 2L1 20C1 20.5523 1.44772 21 2 21Z" fill="var(--text-primary)"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M18.6464 11.3536C18.8417 11.5488 19.1583 11.5488 19.3536 11.3536L29.3536 1.35355C29.5488 1.15829 29.5488 0.841708 29.3536 0.646446C29.1583 0.451184 28.8417 0.451184 28.6464 0.646446L18.6464 10.6464C18.4512 10.8417 18.4512 11.1583 18.6464 11.3536Z" fill="var(--text-primary)"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M21.5 0.5C21.5 0.223858 21.7239 0 22 0H29.5C29.7761 0 30 0.223858 30 0.5V8C30 8.27614 29.7761 8.5 29.5 8.5C29.2239 8.5 29 8.27614 29 8V1H22C21.7239 1 21.5 0.776142 21.5 0.5Z" fill="var(--text-primary)"/>
                        </svg>
                        <a title="cv download" href='/hunor_csaszar_cv.pdf' target="_blank">download cv</a>
                    </div>
                </Container>
        </VideoSection>
    )
}

export default Contact;