import '../App.css'
import PortfolioCard from "../cards/PortfolioCard.jsx";
import AboutCard from "../cards/AboutCard.jsx";
import data from "../data.json";
import TechCard from "../cards/TechCard.jsx";
import ExperienceCard from "../cards/ExperienceCard.jsx";
import ContactCard from "../cards/ContactCard.jsx";
import HeroCard from "../cards/HeroCard.jsx";

function Home() {

    return (
        <div className='flex flex-col py-24 px-12 justify-center'>
            <HeroCard />
            {/*<div className='min-w-sm max-w-md'>*/}
            {/*    <PortfolioCard*/}
            {/*        jobHeader={data.portfolio["job-header"]}*/}
            {/*        description={data.portfolio.description}*/}
            {/*        location={data.portfolio.location}*/}
            {/*    />*/}
            {/*/!*</div>*!/*/}
            {/*<div className='flex flex-col gap-12'>*/}
            {/*    <AboutCard*/}
            {/*        content={data.about.content}*/}
            {/*    />*/}
            {/*</div>*/}
        </div>
    )
}

export default Home