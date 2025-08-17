import '../App.css'
import HeroCard from "../cards/HeroCard.jsx";
import data from "../data.json";

function Home() {

    return (
        <div className='flex flex-col py-24 px-8 justify-center max-w-7xl mx-auto'>
            <HeroCard data={data.portfolio}/>
        </div>
    )
}

export default Home