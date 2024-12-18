import React, { useState }  from 'react';
import VideoSection from './VideoSection';
import Container from './Container';
import UseCase from './UseCase';
import './Experience.css';

import videoLight from '../assets/grass.mp4';
import videoDark from '../assets/6933537-hd_2048_1080_24fps.mp4';

import l2eIcon from '../assets/l2e.svg';
import ksaaIcon from '../assets/ksaa.svg';
import parkenaIcon from '../assets/parkena.svg';
import budgetingIcon from '../assets/feather.svg';
import kbcIcon from '../assets/KBC.svg';
import codecoolIcon from '../assets/codecool.svg';

import l2ImgDesk from '../assets/l2energy.hu_ 1.jpg';
import l2ImgMobile from '../assets/l2energy.hu_mobile.jpg';
import ksaa from '../assets/ksaa.jpg';
import parkena1 from '../assets/parkena1.jpg';
import parkena2 from '../assets/parkena2.jpg';
import parkena3 from '../assets/parkena3.jpg';
import parkena4 from '../assets/parkena4.jpg';
import parkena5 from '../assets/parkena5.jpg';
import parkena6 from '../assets/parkena6.jpg';
import ksaa_web from '../assets/ksaa_gov_sa 1.jpg';
import budget1 from '../assets/budget1.jpg';
import budget2 from '../assets/budget2.jpg';
import budget3 from '../assets/budget3.jpg';
import budget4 from '../assets/budget4.jpg';
import budget5 from '../assets/budget5.jpg';
import cc from '../assets/cc.png';

const useCases = [
    {
        design: true,
        dev: true,
        icon: l2eIcon,
        name: 'L2 Energy',
        label: 'website',
        link: 'https://www.l2energy.hu',
        description: 'A mathematical and algorithmic trading company specializing in the energy market approached me with the request to design a brand identity that reflects their scientific and data-driven approach. They wanted a clean, professional, and innovative aesthetic that would resonate with their highly analytical audience. Additionally, I was tasked with creating a user-friendly and visually appealing website that effectively communicates their expertise, services, and technological edge in the energy trading sector. This project required a deep understanding of their unique positioning in the market and the ability to translate complex concepts into a cohesive and accessible brand presence.',
        desktopImage: l2ImgDesk,
        mobileImages: [l2ImgMobile]
    },
    {
        design: false,
        dev: true,
        icon: ksaaIcon,
        name: 'Arabic Academy Event Platform',
        label: '',
        link: '',
        description: "I had the privilege of being the frontend developer of the team responsible for developing the redesigned platform for Arabic Hackathons in the Kingdom of Saudi Arabia. This platform aimed to provide an enhanced user experience, incorporating a modern design and intuitive functionality to support the institutions's aim to popularise the Arabic language. My role involved implementing responsive and accessible interfaces, optimising performance, and ensuring seamless navigation to engage users effectively, also I took part of the team's effort to design the complex system that involved many overlapping layers of competition phases and user group permissions.",
        desktopImage: ksaa,
        mobileImages: []
    },
    {
        design: true,
        dev: false,
        icon: parkenaIcon,
        name: 'Parking App Prototype',
        label: 'figma',
        link: 'https://www.figma.com/proto/6YxmJJz1YU1fvybFJA0SZH/Parkena?page-id=0%3A1&node-id=324-8797&starting-point-node-id=324%3A8797&show-proto-sidebar=1&t=6x3sLNKjcafKr7FD-1',
        description: 'This project was a personal hobby initiative designed to function as a parking space reservation platform. The goal was to create a user-friendly solution that simplifies the process of finding and reserving parking spaces in busy companies with limited parking spaces. The platform allows users to browse available parking spots, check real-time availability, and book spaces in advance, reducing the hassle of last-minute parking searches. By incorporating features like location-based filtering, multiple location and vehicle handling, and parking space designing, the project aimed to offer a seamless experience for both drivers and parking lot operators. This endeavor also served as a valuable opportunity to explore prototyping and wireframing skills while addressing a practical everyday challenge.',
        desktopImage: '',
        mobileImages: [parkena1, parkena2, parkena3, parkena4, parkena5, parkena6]
    },
    {
        design: true,
        dev: true,
        icon: ksaaIcon,
        name: 'Arabic Academy Website',
        label: 'figma',
        link: 'https://www.figma.com/proto/ukJvR6KAz1Pp7gJImExkho/KSAA-design-(221124)?page-id=0%3A1&node-id=1239-4066&node-type=frame&viewport=-122%2C-13072%2C0.32&t=55JGOVm4m5565ZXb-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1239%3A4066&show-proto-sidebar=1',
        description: "The Kingdom of Saudi Arabia’s Arabic Academy approached our company with the need for a complete redesign of their website to better reflect their mission and values while offering an improved user experience. At the time, our in-house designer was on an extended holiday, which left a critical gap in the project. Drawing on my background in design, I took the initiative to step into the role and lead the design process for the key elements of the website. Once the design phase was completed, I transitioned into my role as part of the development team, contributing as a frontend developer. This dual contribution—both in design and development—allowed me to take a holistic approach to the project, ensuring a seamless execution from concept to delivery.",
        desktopImage: ksaa_web,
        mobileImages: []
    },
    {
        design: true,
        dev: true,
        icon: budgetingIcon,
        name: 'Budgeting App',
        label: '',
        link: '',
        description: "This hobby project served as a multifaceted learning experience, allowing me to dive deeper into React.js and explore its potential for building dynamic, modern web applications. It also provided an opportunity to experiment with various CSS libraries, enabling me to understand their features, limitations, and how they could streamline the styling process in a React-based environment. Beyond the frontend exploration, the project also acted as a practical test case to assess how the Liferay platform integrates with a React.js frontend.",
        desktopImage: '',
        mobileImages: [budget1, budget2, budget3, budget4, budget5]
    },
    {
        design: false,
        dev: true,
        icon: kbcIcon,
        name: 'kbc.ie',
        label: '',
        link: '',
        description: "Based on the designs provided by Wondr, I had the privilege of participating as a frontend developer in the Irish KBC Bank’s ambitious project to migrate their website to the Liferay platform. This initiative also involved transitioning the website into the cloud, a cutting-edge and transformative technology at the time. My role focused on implementing the frontend aspects of the design, ensuring a seamless user experience that adhered to the high standards set by the design team.",
        desktopImage: '',
        mobileImages: []
    },
    {
        design: true,
        dev: false,
        icon: codecoolIcon,
        name: 'Codecool Branding Designs',
        label: '',
        link: '',
        description: 'The programming school where I learned coding also offered me the opportunity to contribute as a graphic designer. This collaboration allowed me to combine my creative skills with my technical journey, resulting in the production of a wide range of marketing materials. These included both print assets, such as brochures, flyers, and posters, as well as digital content like social media graphics, email templates, and website visuals. Working closely with the school’s team, I ensured that all designs effectively communicated their brand identity and appealed to prospective students. ',
        desktopImage: cc,
        mobileImages: []
    }
];

const Experience = (props) => {
    const [openModal, setOpenModal] = useState(false);
    const [activeUseCase, setActiveUseCase] = useState(0);

    return (
        <VideoSection 
        className='experience-container' 
        id='experience'
        title='use cases' 
        initFrom='right' 
        color='cyan'
        videoSrc={props.theme === 'dark' ? videoDark : videoLight}
        backgroundGradient={props.theme === 'dark' ? 
            'linear-gradient(180deg, var(--cyan-dark), transparent, var(--yellow-dark)' :
            'linear-gradient(180deg, var(--cyan-light), rgba(241, 241, 241, 0.75), var(--yellow-light))'
        }>
            <Container style={{fontWeight: '500', 
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        paddingTop: '10vh',
                        paddingBottom: '30vh'}}>
                {useCases.map((useCase, i) => {
                    return(<UseCase setOpenModal={setOpenModal} 
                            dev={useCase.dev} 
                            des={useCase.design} 
                            icon={useCase.icon}
                            name={useCase.name}
                            key={i}
                            index={i}
                            setActiveUseCase={setActiveUseCase}></UseCase>);
                })}
            </Container>
            <div className={openModal ? 'open use-case-modal' : 'use-case-modal'}>
                <button type='button' className='modal-close-btn' onClick={() => setOpenModal(false)}>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M27.8536 0.146447C28.0488 0.341709 28.0488 0.658291 27.8536 0.853553L0.853553 27.8536C0.658291 28.0488 0.341709 28.0488 0.146447 27.8536C-0.0488155 27.6583 -0.0488155 27.3417 0.146447 27.1464L27.1464 0.146447C27.3417 -0.0488155 27.6583 -0.0488155 27.8536 0.146447Z" fill="var(--text-primary)"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.146446 0.146447C-0.0488148 0.341709 -0.0488148 0.658291 0.146446 0.853553L27.1464 27.8536C27.3417 28.0488 27.6583 28.0488 27.8536 27.8536C28.0488 27.6583 28.0488 27.3417 27.8536 27.1464L0.853554 0.146447C0.658291 -0.0488155 0.341709 -0.0488155 0.146446 0.146447Z" fill="var(--text-primary)"/>
                    </svg>
                </button>
                <Container>
                    <h3>{useCases[activeUseCase].name}</h3>
                    {useCases[activeUseCase].label && useCases[activeUseCase].link ? (
                        <a href={useCases[activeUseCase].link} target='_blank' title={useCases[activeUseCase].label}>{useCases[activeUseCase].label}</a>
                    ) : ''}
                    <p>{useCases[activeUseCase].description}</p>
                    <div className='images'>
                        {useCases[activeUseCase].desktopImage ? (
                            <img src={useCases[activeUseCase].desktopImage} className='desktop-img' alt='desktop screen'></img>
                        ) : ''}
                        {useCases[activeUseCase].mobileImages.map((img, i) => {
                            return (<img src={img} key={i} className='mobile-img' alt='mobile screen'></img>)
                        })}
                    </div>
                </Container>
                <div className='navigator'>
                    <button type='button' className='navigate-prev' onClick={() => setActiveUseCase((activeUseCase - 1 < 0 ? useCases.length - 1 : activeUseCase - 1))}>{'<'}</button>
                    <button type='button' className='navigate-next' onClick={() => setActiveUseCase((activeUseCase + 1 >= useCases.length ? 0 : activeUseCase + 1))}>{'>'}</button>
                </div>
            </div>
        </VideoSection>
    )
}

export default Experience;