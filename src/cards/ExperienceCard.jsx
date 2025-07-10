import React from 'react';
import PropTypes from 'prop-types';
import ExperienceContent from "../components/ExperienceContent.jsx";

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
                {props.content.map((experience, index) => (
                    <ExperienceContent content={experience} key={index}/>
                ))}
            </div>
        </div>
    );
}

export default ExperienceCard;