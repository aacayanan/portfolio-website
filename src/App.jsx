import './App.css'
import PortfolioCard from "./components/PortfolioCard.jsx";
import AboutCard from "./components/AboutCard.jsx";
import data from "./data.json";
import TechCard from "./components/TechCard.jsx";
import ExperienceCard from "./components/ExperienceCard.jsx";

function App() {

    return (
        <div className='flex py-24 px-12'>
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
                <ExperienceCard
                    content={data.experience}
                />
            </div>
        </div>
    )
}

export default App
