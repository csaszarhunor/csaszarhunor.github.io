import React, { Component, useEffect, useState, useRef }  from 'react';
import SectionTitle from './SectionTitle';
import './VideoSection.css';

const VideoSection = (props) => {
    const videoRef = useRef();
    const videoWrapperRef = useRef();
    const setPlayBack = () => {
        videoWrapperRef.current.playbackRate = props.playbackRate ? props.playbackRate : '1.0';
    }

    useEffect(() => {    
        videoRef.current?.load();
        videoWrapperRef.current?.style.setProperty('--background-gradient', props.backgroundGradient);
    }, [props.videoSrc, props.backgroundGradient]);
    return (
        <div className={'video-section ' + props.color + ' ' + props.className} 
            id={props.id} 
            style={props.style}>
            <div className='video-wrapper' ref={videoWrapperRef}>
                <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                id={props.id + '-video'} 
                onCanPlay={() => setPlayBack()}
                ref={videoRef}>
                    <source src={props.videoSrc} type="video/mp4" />
                </video>
            </div>
            <SectionTitle title={props.title} initFrom={props.initFrom} color={props.color}></SectionTitle>
            {props.children}
        </div>
    )
}

export default VideoSection;