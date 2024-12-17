import { SvgLoader, SvgProxy } from 'react-svgmt';
import './UseCase.css';

const UseCase = (props) => {
    const handleOpenModal = () => {
        props.setOpenModal(true);
        props.setActiveUseCase(props.index);
    }
    return (
        <div className='use-case-wrapper'>
            <button onClick={handleOpenModal}
                className='use-case-btn'>
                <div className={[props.dev ? 'use-case-dev' : '', props.des ? 'use-case-des' : ''].join(' ')}>
                    <div className='use-case-tags'>
                        {props.dev && 
                            <p className='dev-tag'>dev</p>
                        }
                        {props.des && 
                            <p className='des-tag'>design</p>
                        }
                    </div>
                    <div className='use-case-info'>
                        {props.icon &&
                            <SvgLoader path={props.icon} className='use-case-icon'>
                                <SvgProxy selector='path' fill='var(--text-primary)'></SvgProxy>
                            </SvgLoader>
                        }
                        {props.name &&
                            <p className='use-case-name'>{props.name}</p>
                        }
                    </div>
                    <svg className="enlarge-icon" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M16.6464 11.3536C16.8417 11.5488 17.1583 11.5488 17.3536 11.3536L27.3536 1.35355C27.5488 1.15829 27.5488 0.841708 27.3536 0.646446C27.1583 0.451184 26.8417 0.451184 26.6464 0.646446L16.6464 10.6464C16.4512 10.8417 16.4512 11.1583 16.6464 11.3536Z" fill="var(--text-primary)"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M17.5 0.5C17.5 0.223858 17.7239 0 18 0H27.5C27.7761 0 28 0.223858 28 0.5V10C28 10.2761 27.7761 10.5 27.5 10.5C27.2239 10.5 27 10.2761 27 10V1H18C17.7239 1 17.5 0.776142 17.5 0.5Z" fill="var(--text-primary)"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M11.3536 16.6464C11.1583 16.4512 10.8417 16.4512 10.6464 16.6464L0.646446 26.6464C0.451184 26.8417 0.451184 27.1583 0.646446 27.3536C0.841709 27.5488 1.15829 27.5488 1.35355 27.3536L11.3536 17.3536C11.5488 17.1583 11.5488 16.8417 11.3536 16.6464Z" fill="var(--text-primary)"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M10.5 27.5C10.5 27.7761 10.2761 28 10 28H0.5C0.223857 28 0 27.7761 0 27.5V17C0 16.7239 0.223857 16.5 0.5 16.5C0.776143 16.5 1 16.7239 1 17V27H10C10.2761 27 10.5 27.2239 10.5 27.5Z" fill="var(--text-primary)"/>
                    </svg>
                </div>
            </button>
        </div>
    );
}

export default UseCase;