import profilePicture from '../assets/pfp.jpg';
import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin.svg';
import emailIcon from '../assets/email.svg';
import PropTypes from "prop-types";

PortfolioCard.propTypes = {
    jobHeader: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

function PortfolioCard(props) {
    return (
        <div className='flex flex-col gap-2.5 justify-center items-center'>
            <div className='flex flex-col justify-center items-center p-2.5'>
                <img src={profilePicture} alt="Profile" className='w-44 h-44 rounded-2xl p-2'/>
                <div className='flex flex-col p-2 items-center'>
                    <div className='text-black text-2xl font-bold'>
                        Howdy, I&#39;m Aaron 👋
                    </div>
                    <div className='flex'>
                        <div className='text-black text-base font-normal'>
                            I am a
                        </div>
                        <div className='text-danger text-base font-normal'>
                            {`</${props.jobHeader}>`}
                        </div>
                    </div>
                    <div className='text-black text-sm font-light'>
                        based in {props.location}
                    </div>
                </div>
                <div className='text-black text-base font-normal p-2'>
                    {props.description}
                </div>
                <div className='flex gap-4 p-2.5'>
                    <a href="https://github.com/aacayanan" target="_blank">
                        <img src={githubIcon} alt='github' height={24} width={24}/>
                    </a>
                    <a href="https://www.linkedin.com/in/aaroncayanan/" target="_blank">
                        <img src={linkedinIcon} alt='linkedin' height={24} width={24}/>
                    </a>
                    <a href="mailto:aaroncayanan02@gmail.com" target="_blank">
                        <img src={emailIcon} alt='linkedin' height={24} width={24}/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default PortfolioCard;