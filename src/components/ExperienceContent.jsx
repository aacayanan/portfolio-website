import React from 'react';
import PropTypes from 'prop-types';

ExperienceContent.propTypes = {
    content: PropTypes.object.isRequired,
};

function ExperienceContent(props) {
    return (
        <div>
            <div className="self-stretch px-2.5 bg-slate-500 w-44"></div>
            <div className='flex justify-between'>
                <div>{props.content.company}</div>
                <div>{props.content.duration}</div>
            </div>
            <div>{props.content.position}</div>
            <div>
                {props.content.description}
            </div>
        </div>
    );
}

export default ExperienceContent;