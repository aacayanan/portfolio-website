import PropTypes from 'prop-types';

ExperienceContent.propTypes = {
    content: PropTypes.object.isRequired,
};

function ExperienceContent(props) {
    return (
        <div className='flex gap-2.5 py-2.5'>
            <div className="bg-secondary-accent text-primary">.</div>
            <div className='flex flex-col py-2.5'>
                <div className='flex justify-between text-black font-normal'>
                    <div className='text-lg font-semibold'>
                        {props.content.company}
                    </div>
                    <div className='text-s font-light'>
                        {props.content.duration}
                    </div>
                </div>
                <div className='text-s font-light'>
                    {props.content.position}
                </div>
                <div>
                    {props.content.description}
                </div>
            </div>
        </div>
    );
}

export default ExperienceContent;