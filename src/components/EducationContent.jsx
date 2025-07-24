import PropTypes from 'prop-types';
import placeholderImg from '../assets/placeholder-img.webp';

ExperienceContent.propTypes = {
    content: PropTypes.object.isRequired,
};

function ExperienceContent(props) {
    const logoUrl = new URL(props.content.logo, import.meta.url).href;


    return (
        <div className='flex gap-3'>
            <div className='flex flex-col items-center'>
                <div className="bg-secondary-accent h-full w-0.5"></div>
                <div className='w-16 h-16 shrink-0'>
                    <img
                        src={logoUrl || placeholderImg}
                        className="w-full h-full object-cover border-2 border-secondary-accent rounded-full"
                        alt="company-logo"
                    />
                </div>
                <div className="bg-secondary-accent h-full w-0.5"></div>
            </div>
            <div className='flex flex-col py-4 w-full'>
                <div className='flex justify-between text-black font-normal'>
                    <div className='text-lg font-semibold'>
                        {props.content.institution}
                    </div>
                    <div className='text-s font-light'>
                        {props.content.duration}
                    </div>
                </div>
                <div className='text-s font-light'>
                    {props.content.degree}
                </div>
                <div>
                    {props.content.description}
                </div>
            </div>
        </div>
    );
}

export default ExperienceContent;