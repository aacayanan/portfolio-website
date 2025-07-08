import React from 'react';
import PropTypes from 'prop-types';

AboutCard.propTypes = {
    content: PropTypes.string.isRequired,
};

function AboutCard(props) {
    return (
        <div>
            <div className=''>
                About Me
            </div>
            <div>
                {props.content}
            </div>
        </div>
    );
}

export default AboutCard;