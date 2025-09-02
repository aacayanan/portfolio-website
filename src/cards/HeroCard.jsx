import React from 'react';
import PropTypes from 'prop-types';
import profilePicture from "../assets/pfp.jpg";
import RadialMenu from "../components/RadialMenu.jsx";

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
        <div className='flex flex-col-reverse gap-16 justify-center items-center lg:flex-row'>
            <div className='flex flex-col gap-8 justify-center'>
                {/* Headline */}
                <div className='flex flex-col gap-1 text-center lg:text-left'>
                    <div className='text-3xl font-semibold xl:text-6xl lg:text-5xl md:text-4xl'>Aaron Justin Cayanan</div>
                    <div className='text-xl font-normal text-danger xl:text-5xl lg:text-4xl md:text-3xl'>{`</${jobHeader}>`}</div>
                    <div className='text-md font-normal text-gray-600 xl:text-2xl lg:text-xl md:text-lg'>based in {location}</div>
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
            <div className='group'>
                <img src={profilePicture} alt="Profile" className='w-56 h-xl xl:w-lg lg:w-md rounded-2xl p-2 object-contain'/>
                <div className='opacity-0 group-hover:opacity-100 transition duration-200 ease-in-out'>
                    <RadialMenu />
                </div>
            </div>
        </div>
    );
}

export default HeroCard;