import PropTypes from 'prop-types';

AboutCard.propTypes = {
    content: PropTypes.string.isRequired,
};

function AboutCard(props) {
    return (
        <div>
            <div className='text-black text-xl font-bold'>
                About Me
            </div>
            <div className='text-black font-normal'>
                {props.content}
            </div>
        </div>
    );
}

export default AboutCard;