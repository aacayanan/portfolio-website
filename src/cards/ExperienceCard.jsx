import PropTypes from 'prop-types';
import ExperienceContent from "../components/ExperienceContent.jsx";

ExperienceCard.propTypes = {
    content: PropTypes.object.isRequired,
};

function ExperienceCard(props) {
    return (
        <div className='flex flex-col'>
            <div className='text-black text-xl font-bold py-2.5'>
                Experience
            </div>
            {props.content.map((experience, index) => (
                <ExperienceContent content={experience} key={index}/>
            ))}
        </div>
    );
}

export default ExperienceCard;