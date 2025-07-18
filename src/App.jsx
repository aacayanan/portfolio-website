import './App.css'
import PortfolioCard from "./cards/PortfolioCard.jsx";
import AboutCard from "./cards/AboutCard.jsx";
import data from "./data.json";
import TechCard from "./cards/TechCard.jsx";
import ExperienceCard from "./cards/ExperienceCard.jsx";
import ContactCard from "./cards/ContactCard.jsx";

function App() {

    return (
        <div className='flex py-24 px-12 justify-center'>
            <div className='min-w-sm max-w-md'>
                <PortfolioCard
                    jobHeader={data.portfolio["job-header"]}
                    description={data.portfolio.description}
                    location={data.portfolio.location}
                />
            </div>
            <div className='flex flex-col min-w-sm max-w-4xl gap-12'>
                <AboutCard
                    content={data.about.content}
                />
                <TechCard
                    languages={data.technologies.languages}
                    frameworks={data.technologies.frameworks}
                />
                {/* Experience Section */}
                <ExperienceCard content={data.experience} />
                <ContactCard />
            </div>
        </div>
    )
}

export default App
