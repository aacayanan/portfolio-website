import PropTypes from 'prop-types';

AboutCard.propTypes = {
    content: PropTypes.string.isRequired,
};

function AboutCard(props) {
    return (
        <div className='flex flex-col gap-2.5'>
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