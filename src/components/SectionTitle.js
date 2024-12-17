import React, { useRef }  from 'react';
import { useInViewport } from 'react-in-viewport';
import './SectionTitle.css';

const SectionTitle = (props) => {
    const titleRef = useRef();
    const {
        inViewport,
        enterCount,
        leaveCount,
    } = useInViewport(
        titleRef,
        {},
        { disconnectOnLeave: false },
        props
    );

    return (
        <div ref={titleRef} className={'section-title' + 
                        (enterCount > 0 ? '' : ' unseen ') +
                        (props.initFrom === 'left' ? ' init-left ' : ' init-right ') + 
                        (props.color)}>
            <h2>{props.title}</h2>
        </div>
    )
}

export default SectionTitle;