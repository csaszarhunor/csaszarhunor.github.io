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
import uniqaIcon from '../assets/uniqa.svg';
import redseaIcon from '../assets/redsea.svg';

import l2ImgDesk from '../assets/l2energy.hu_ 1.jpg';
import l2ImgMobile from '../assets/l2energy.hu_mobile.jpg';
import ksaa from '../assets/ksaa.jpg';
import parkena1 from '../assets/parkena1.png';
import parkena2 from '../assets/parkena2.png';
import parkena3 from '../assets/parkena3.png';
import parkena4 from '../assets/parkena4.png';
import parkena5 from '../assets/parkena5.png';
import ksaa_web from '../assets/ksaa.png';
import budget1 from '../assets/budgetmanager1.png';
import budget2 from '../assets/budgetmanager2.png';
import budget3 from '../assets/budgetmanager3.png';
import budget4 from '../assets/budgetmanager4.png';
import budget5 from '../assets/budgetmanager5.png';
import cc from '../assets/cc.png';

const useCases = [
    {
        design: true,
        dev: true,
        icon: ksaaIcon,
        name: 'Arabic Academy Website',
        label: 'figma',
        link: 'https://www.figma.com/proto/0kTh3O4oevNqN1gsPDDsOO/KSAA-design-(221124)?page-id=0%3A1&node-id=1239-4066&viewport=375%2C-24%2C0.02&t=aVkQbi302NjJMFGY-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=1239%3A4066&show-proto-sidebar=1',
        description: "The Arabic Academy of Saudi Arabia is an institution that aims to popularise the Arabic language.",
        role: 'UI design | Frontend development',
        technologies: 'Figma | Liferay | HTML5, CSS3, JavaScript',
        contribution: 'Designed landing page UI components | Implemented the frontend within the Liferay platform',
        desktopImage: ksaa_web,
        mobileImages: []
    },
    {
        design: false,
        dev: true,
        icon: ksaaIcon,
        name: 'Arabic Academy Event Platform',
        label: '',
        link: '',
        description: "The Arabic Academy of Saudi Arabia is an institution that aims to popularise the Arabic language.",
        role: 'Frontend development | Platform design',
        technologies: 'Java | Liferay | UML design | HTML5, CSS3, JavaScript',
        contribution: 'Implemented the frontend within the Liferay platform | Designed the platform for an enterprise level language competition system with all the necessary roles, permissions and competition stages',
        desktopImage: ksaa,
        mobileImages: []
    },
    {
        design: false,
        dev: true,
        icon: kbcIcon,
        name: 'kbc.ie',
        label: '',
        link: '',
        description: "KBC Ireland website UX / UI redesign by Wondr, implementation in the Liferay platform on Liferay cloud environment.",
        role: 'Frontend development',
        technologies: 'Java | Liferay | Liferay Cloud | HTML5, CSS3, JavaScript',
        contribution: 'Built UI layouts, components (forms, banking calculators, sliders, etc.) | Built infrastructure in Liferay Cloud',
        desktopImage: '',
        mobileImages: []
    },
    {
        design: false,
        dev: true,
        icon: redseaIcon,
        name: 'redseaglobal.com',
        label: 'website',
        link: 'https://www.redseaglobal.com',
        description: "Red Sea Global is part of Saudi Arabia's Vision 2030 project that aims to boost tourism. Frontend codebase integration into Liferay platform in collaboration with multiple international business, design and developer teams.",
        role: 'Frontend development',
        technologies: 'Java | Liferay | HTML5, CSS3, JavaScript',
        contribution: 'Integrated frontend codebase into Liferay platform',
        desktopImage: '',
        mobileImages: []
    },
    {
        design: false,
        dev: true,
        icon: uniqaIcon,
        name: 'uniqa.hu',
        label: 'website',
        link: 'https://www.uniqa.hu',
        description: "Liferay portal redesign project.",
        role: 'Frontend development',
        technologies: 'Liferay | HTML5, CSS3, JavaScript',
        contribution: 'Implemented the frontend within the Liferay platform',
        desktopImage: '',
        mobileImages: []
    },
    {
        design: false,
        dev: true,
        icon: '',
        name: 'A1.si',
        label: 'website',
        link: 'https://www.a1.si',
        description: "Fast paced business feature development on a complex Liferay platform of international telecommunication company.",
        role: 'Frontend development',
        technologies: 'Liferay | HTML5, CSS3, JavaScript',
        contribution: 'Implemented the frontend within the Liferay platform',
        desktopImage: '',
        mobileImages: []
    },
    {
        design: false,
        dev: true,
        icon: '',
        name: 'msci.com',
        label: 'website',
        link: 'https://www.msci.com',
        description: "Liferay portal project.",
        role: 'Frontend development',
        technologies: 'Liferay | HTML5, CSS3, JavaScript',
        contribution: 'Implemented the frontend within the Liferay platform',
        desktopImage: '',
        mobileImages: []
    },
    {
        design: false,
        dev: true,
        icon: '',
        name: 'vigado.hu',
        label: 'website',
        link: 'https://www.vigado.hu',
        description: "Liferay portal project.",
        role: 'Frontend development',
        technologies: 'Liferay | HTML5, CSS3, JavaScript',
        contribution: 'Implemented the frontend within the Liferay platform',
        desktopImage: '',
        mobileImages: []
    },
    {
        design: false,
        dev: true,
        icon: '',
        name: 'AJBH.hu',
        label: 'website',
        link: 'https://www.ajbh.hu',
        description: "Liferay portal redesign project.",
        role: 'Frontend development',
        technologies: 'Liferay | HTML5, CSS3, JavaScript',
        contribution: 'Implemented the frontend within the Liferay platform',
        desktopImage: '',
        mobileImages: []
    },
    {
        design: false,
        dev: true,
        icon: '',
        name: 'uni-mate.hu',
        label: 'website',
        link: 'https://www.uni-mate.hu',
        description: "Liferay portal redesign project.",
        role: 'Frontend development',
        technologies: 'Liferay | HTML5, CSS3, JavaScript',
        contribution: 'Implemented the frontend within the Liferay platform',
        desktopImage: '',
        mobileImages: []
    },
    {
        design: false,
        dev: true,
        icon: '',
        name: 'BMLV intranet',
        label: '',
        link: '',
        description: "Liferay portal project.",
        role: 'Frontend development',
        technologies: 'Liferay | HTML5, CSS3, JavaScript',
        contribution: 'Implemented the frontend within the Liferay platform',
        desktopImage: '',
        mobileImages: []
    },
    {
        design: true,
        dev: true,
        icon: l2eIcon,
        name: 'L2 Energy',
        label: 'website',
        link: 'https://www.l2energy.hu',
        description: 'L2Energy is an energy trading company specializing in mathematical and algorithmic trading.',
        role: 'UI and brand design | Frontend development',
        technologies: 'Figma | Wordpress | HTML5, CSS3, JavaScript',
        contribution: 'Designed the brand and website | Implemented UI in Wordpress',
        desktopImage: l2ImgDesk,
        mobileImages: [l2ImgMobile]
    },
    {
        design: true,
        dev: true,
        icon: budgetingIcon,
        name: 'Budgeting App',
        label: 'code',
        link: 'https://github.com/csaszarhunor/budget-manager',
        description: "Hobby project for React practice.",
        role: 'UI design / Frontend development',
        technologies: 'Figma | React | HTML5, CSS3, JavaScript',
        contribution: 'Implemented a small React-based budgeting app using components, hooks, and basic state management.',
        desktopImage: '',
        mobileImages: [budget1, budget2, budget3, budget4, budget5]
    },
    {
        design: true,
        dev: false,
        icon: parkenaIcon,
        name: 'Parking App Prototype',
        label: 'figma',
        link: 'https://www.figma.com/proto/SgFmKm094dhzy8exgG75bW/Parkena?page-id=0%3A1&node-id=465-3953&viewport=465%2C349%2C0.04&t=H9ShjrVQs8B6fUyn-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=324%3A8797&show-proto-sidebar=1',
        description: 'Hobby project for a parking space reservation platform.',
        role: 'UI / UX design',
        technologies: 'Figma',
        contribution: 'Designed parking app with user role workflows',
        desktopImage: '',
        mobileImages: [parkena1, parkena2, parkena3, parkena4, parkena5]
    },
    {
        design: true,
        dev: false,
        icon: codecoolIcon,
        name: 'Codecool Branding Designs',
        label: '',
        link: '',
        description: 'The programming school where I learned coding also offered me the opportunity to contribute as a graphic designer. This collaboration allowed me to combine my creative skills with my technical journey, resulting in the production of a wide range of marketing materials. These included both print assets, such as brochures, flyers, and posters, as well as digital content like social media graphics, email templates, and website visuals. Working closely with the school’s team, I ensured that all designs effectively communicated their brand identity and appealed to prospective students. ',
        role: 'Branding design',
        technologies: 'Adobe Illustrator, Indesign, Photoshop',
        contribution: 'Designed branding related digital and print materials (ad banners, leaflets, email templates, posters, illustrations, logos etc.)',
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
        title='experience' 
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
                        <p><a href={useCases[activeUseCase].link} target='_blank' title={useCases[activeUseCase].label}>{useCases[activeUseCase].label}</a></p>
                    ) : ''}
                    {useCases[activeUseCase].role ? (
                        <div>
                            <h4>Role: </h4>
                            <p>{useCases[activeUseCase].role}</p>
                        </div>
                    ) : ''}
                    {useCases[activeUseCase].technologies ? (
                        <div>
                            <h4>Technologies: </h4>
                            <p>{useCases[activeUseCase].technologies}</p>
                        </div>
                    ) : ''}
                    {useCases[activeUseCase].contribution ? (
                        <div>
                            <h4>Contribution: </h4>
                            <p>{useCases[activeUseCase].contribution}</p>
                        </div>
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