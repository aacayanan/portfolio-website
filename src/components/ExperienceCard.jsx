import React from 'react';
import PropTypes from 'prop-types';

ExperienceCard.propTypes = {
    content: PropTypes.object.isRequired,
};

function ExperienceCard(props) {
    return (
        <div>
            <div className='text-black text-xl font-bold'>
                Experience
            </div>
            <div>
                <div className="self-stretch px-2.5 bg-slate-500 w-44"></div>
                <div className='flex justify-between'>
                    <div>Company Name</div>
                    <div>Month, 20xx - present</div>
                </div>
                <div>Job Title</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel sem malesuada, congue arcu quis,
                    lobortis justo. Vestibulum vel iaculis orci. Donec tincidunt ante sit.
                </div>
            </div>
        </div>
    );
}

export default ExperienceCard;