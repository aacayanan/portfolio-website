import PropTypes from 'prop-types';
import TechComponent from "../components/TechComponent.jsx";

TechCard.propTypes = {
    languages: PropTypes.arrayOf(PropTypes.string).isRequired,
    frameworks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function TechCard(props) {
    return (
        <div className='flex flex-col gap-20 w-full'>
            {/* Frontend */}
            <div className='flex'>
                <div className='text-black text-xl font-bold w-56'>Frontend</div>
                <div className='grid grid-cols-4 gap-8 w-full'>
                    <div>JavaScript</div>
                    <div>TypeScript</div>
                    <div>React</div>
                    <div>JavaScript</div>
                    <div>TypeScript</div>
                    <div>React</div>
                    <div>JavaScript</div>
                    <div>TypeScript</div>
                    <div>React</div>
                    <div>JavaScript</div>
                    <div>TypeScript</div>
                    <div>React</div>
                </div>
            </div>
            {/* Backend */}
            <div className='flex'>
                <div className='text-black text-xl font-bold w-56'>Backend</div>
                <div className='grid grid-cols-4 gap-8 w-full'>
                    <div>Node.js</div>
                    <div>Next.js</div>
                    <div>Flask</div>
                    <div>Node.js</div>
                    <div>Next.js</div>
                    <div>Flask</div>
                    <div>Node.js</div>
                    <div>Next.js</div>
                    <div>Flask</div>
                    <div>Node.js</div>
                    <div>Next.js</div>
                    <div>Flask</div>

                </div>
            </div>
            {/* Database */}
            <div className='flex'>
                <div className='text-black text-xl font-bold w-56'>Database</div>
                <div className='grid grid-cols-4 gap-8 w-full'>
                    <div>Supabase</div>
                    <div>Postgres</div>
                    <div>Supabase</div>
                    <div>Postgres</div>
                    <div>Supabase</div>
                    <div>Postgres</div>

                </div>
            </div>
            {/* Tools */}
            <div className='flex'>
                <div className='text-black text-xl font-bold w-56'>Tools</div>
                <div className='grid grid-cols-4 gap-8 w-full'>
                    <div>Git</div>
                    <div>Docker</div>
                    <div>GitHub</div>
                    <div>Git</div>
                    <div>Docker</div>
                    <div>GitHub</div>
                    <div>Git</div>
                    <div>Docker</div>
                    <div>GitHub</div>
                    <div>Git</div>
                    <div>Docker</div>
                    <div>GitHub</div>

                </div>
            </div>
        </div>
    );
}

export default TechCard;