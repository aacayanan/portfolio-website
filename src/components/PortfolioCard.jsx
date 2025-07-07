import React from 'react';
import profilePicture from '../assets/pfp.jpg';

function PortfolioCard() {
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
                            {"</full-stack developer>"}
                        </div>
                    </div>
                    <div className='text-black text-sm font-light'>
                        based in San Diego, CA
                    </div>
                </div>
                <div className='text-black text-base font-normal p-2'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum sodales turpis ac
                    bibendum.
                    In eu gravida nibh, non tristique elit. Praesent eleifend neque ac.
                </div>
            </div>
        </div>
    );
}

export default PortfolioCard;