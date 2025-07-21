import React from 'react';
import PropTypes from 'prop-types';

TechComponent.propTypes = {
    title: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired
};

function TechComponent(props) {
    const fileLocation = `../assets/${props.logo}`;
    console.log(fileLocation);

    return (
        <div className="bg-secondary rounded-md w-12">
            <div
                className="flex items-center justify-center p-2 cursor-pointer rounded-md text-neutral-500
                hover:text-neutral-100 hover:bg-secondary-accent font-medium relative z-10"
                data-tooltip="HTML"
            >
                <img src={fileLocation} alt={props.title} className='' />
            </div>
        </div>

    );
}

export default TechComponent;