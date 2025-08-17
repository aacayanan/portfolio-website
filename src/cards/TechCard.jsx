import PropTypes from 'prop-types';
import {useEffect, useRef, useState} from "react";

TechCard.propTypes = {
    frontend: PropTypes.arrayOf(PropTypes.string).isRequired,
    backend: PropTypes.arrayOf(PropTypes.string).isRequired,
    database: PropTypes.arrayOf(PropTypes.string).isRequired,
    tools: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function TechCard(props) {
    const [visibleSections, setVisibleSections] = useState({});
    const skillsRef = useRef(null);
    const data = [
        {title: 'Frontend', data: props.frontend},
        {title: 'Backend', data: props.backend},
        {title: 'Database', data: props.database},
        {title: 'Tools', data: props.tools}
    ]

    // Observer for Skills section
   useEffect(() => {
       const observer = new IntersectionObserver(
           (entries) => {
               entries.forEach(entry => {
                   if (entry.isIntersecting) {
                       const sectionTitle = entry.target.dataset.section;
                       setVisibleSections(prev => ({
                            ...prev,
                            [sectionTitle]: true
                       }));
                       observer.unobserve(entry.target);
                   }
               })
           },
           {
               threshold: 0.1,
               rootMargin: "-20% 0px -20% 0px"  // triggers when in % of viewport
           }
       );

       const sections = document.querySelectorAll('[data-section]');
       sections.forEach(section => observer.observe(section));
       return () => observer.disconnect();
   }, []);

    return (
        <div className='flex flex-col gap-20 w-full'>
            {/* Frontend */}
            {data.map((section) => (
                <div key={section.title} className='flex flex-col md:flex-row'>
                    <div className='text-black text-xl font-bold w-56 h-12'>{section.title}</div>
                    <div
                        className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 w-full opacity-0
                        ${
                            visibleSections[section.title]
                                ? 'animate-float-up [animation-fill-mode:forwards]'
                                : ''
                        }
                        `}
                        data-section={section.title}
                    >
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