import PropTypes from 'prop-types';

TechCard.propTypes = {
    languages: PropTypes.arrayOf(PropTypes.string).isRequired,
    frameworks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function TechCard(props) {
    return (
        <div className='flex flex-col gap-2.5'>
            <div className='text-black text-xl font-bold'>
                Current Technologies
            </div>
            <div>
                <div className="text-black text-base font-semibold">
                    Languages
                </div>
                <ul className='flex justify-start items-center gap-3.5'>
                    {props.languages.map((language, index) => (
                        <li key={index}
                            className='justify-center text-primary-accent text-sm font-normal px-1 py-0.5 bg-primary rounded-lg inline-flex items-center'>
                            {language}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <div className="text-black text-base font-semibold">
                Frameworks
                </div>
                <ul className='flex justify-start items-center gap-3.5'>
                    {props.frameworks.map((framework, index) => (
                        <li key={index} className='justify-center text-secondary-accent text-sm font-normal px-1 py-0.5 bg-secondary rounded-lg inline-flex items-center'>
                            {framework}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TechCard;