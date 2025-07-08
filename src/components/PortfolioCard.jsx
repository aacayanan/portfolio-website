import React from 'react';
import profilePicture from '../assets/pfp.jpg';
import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin.svg';
import emailIcon from '../assets/email.svg';
import PropTypes from "prop-types";

PortfolioCard.propTypes = {
    jobHeader: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

function PortfolioCard(props) {
    return (
        <div className='py-24 px-12 flex-col gap-2.5 w-[580px] bg-green-700'>
            <div className='p-2.5 bg-white'>
                <img src={profilePicture} alt="Profile" className='w-44 h-44 rounded-2xl p-2'/>
                <div className='flex-col p-2'>
                    <div className='text-black text-2xl font-bold'>
                        Howdy, I'm Aaron 👋
                    </div>
                    <div className='flex'>
                        <div className='text-black text-base font-normal'>
                            I am a
                        </div>
                        <div className='text-red-600 text-base font-normal'>
                            {`</${props.jobHeader}>`}
                        </div>
                    </div>
                    <div className='text-black text-sm font-light'>
                        based in {props.location}
                    </div>
                </div>
                <div className='text-black text-base font-normal p-2'>
                    {props.description}
                </div>
                <div className='flex gap-4 p-2.5'>
                    <a href="https://github.com/aacayanan" target="_blank">
                        <img src={githubIcon} alt='github' height={24} width={24}/>
                    </a>
                    <a href="https://www.linkedin.com/in/aaroncayanan/" target="_blank">
                        <img src={linkedinIcon} alt='linkedin' height={24} width={24}/>
                    </a>
                    <a href="mailto:aaroncayanan02@gmail.com" target="_blank">
                        <img src={emailIcon} alt='linkedin' height={24} width={24}/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default PortfolioCard;