import React from 'react';
import PropTypes from 'prop-types';
import profilePicture from "../assets/pfp.jpg";

HeroCard.propTypes = {};

function HeroCard(props) {
    return (
        <div className='flex gap-16 justify-center'>
            <div className='flex flex-col gap-8 justify-center'>
                {/* Headline */}
                <div className='flex flex-col gap-1'>
                    <div className='text-7xl font-bold'>Aaron Justin Cayanan</div>
                    <div className='text-6xl font-normal text-danger'>{`</${"full-stack developer"}>`}</div>
                </div>
                {/*  Benefits  */}
                <div className='flex flex-wrap gap-8 text-lg font-medium text-gray-600'>
                    <div>🖥️ Responsive UI</div>
                    <div>👤 User Focused</div>
                    <div>🔌 Scalable API Builder</div>
                </div>
                <div className='text-gray-500 max-w-xl text-base leading-relaxed'>
                    A full-stack developer and computer science student with experience building end-to-end web and
                    mobile applications. Creating software with focus on usability, performance, and scalability that is
                    easy to maintain.
                </div>
            </div>
            <img src={profilePicture} alt="Profile" className='w-2xl h-2xl rounded-2xl p-2'/>
        </div>
    );
}

export default HeroCard;