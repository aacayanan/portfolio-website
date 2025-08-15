import React from 'react';
import PropTypes from 'prop-types';
import profilePicture from "../assets/pfp.jpg";

HeroCard.propTypes = {
    data: PropTypes.object.isRequired
};

function HeroCard(props) {
    const jobHeader = props.data.jobHeader;
    const location = props.data.location;
    const description = props.data.description;

    const benefits = [
        {icon: '🖥️', text: 'Responsive UI'},
        {icon: '👤', text: 'User Focused'},
        {icon: '🔌', text: 'Scalable API Builder'}
    ]

    return (
        <div className='flex gap-16 justify-center font-mono'>
            <div className='flex flex-col gap-8 justify-center'>
                {/* Headline */}
                <div className='flex flex-col gap-1'>
                    <div className='text-6xl font-semibold'>Aaron Justin Cayanan</div>
                    <div className='text-5xl font-normal text-danger'>{`</${jobHeader}>`}</div>
                    <div className='text-2xl font-normal text-gray-600'>based in {location}</div>
                </div>
                {/*  Benefits  */}
                {/*<div className='flex flex-wrap gap-8 text-lg font-medium text-gray-600'>*/}
                {/*    {benefits.map((benefit, index) => (*/}
                {/*        <div key={index} className='flex items-center gap-2'>*/}
                {/*            <span className='text-xl'>{benefit.icon}</span>*/}
                {/*            <span>{benefit.text}</span>*/}
                {/*        </div>*/}
                {/*    ))}*/}
                {/*</div>*/}
                {/* Description */}
                <div className='text-gray-500 max-w-xl text-base leading-relaxed'>
                    {description}
                </div>
            </div>
            <img src={profilePicture} alt="Profile" className='w-xl h-xl rounded-2xl p-2 object-contain'/>
        </div>
    );
}

export default HeroCard;