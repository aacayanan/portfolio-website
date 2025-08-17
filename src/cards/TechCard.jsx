import PropTypes from 'prop-types';

TechCard.propTypes = {
    frontend: PropTypes.arrayOf(PropTypes.string).isRequired,
    backend: PropTypes.arrayOf(PropTypes.string).isRequired,
    database: PropTypes.arrayOf(PropTypes.string).isRequired,
    tools: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function TechCard(props) {
    const data = [
        {title: 'Frontend', data: props.frontend},
        {title: 'Backend', data: props.backend},
        {title: 'Database', data: props.database},
        {title: 'Tools', data: props.tools}
    ]

    return (
        <div className='flex flex-col gap-20 w-full'>
            {/* Frontend */}
            {data.map((section) => (
                <div key={section.title} className='flex flex-col md:flex-row'>
                    <div className='text-black text-xl font-bold w-56 h-12'>{section.title}</div>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 w-full'>
                        {section.data.map((tech, index) => (
                            <div key={index} className='flex gap-2 items-center'>
                                <img
                                    src={tech.icon}
                                    alt={tech.language}
                                    className='h-6 w-6'
                                />
                                <span className='text-lg text-nowrap'>{tech.language}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TechCard;