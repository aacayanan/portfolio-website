import React from "react";
import ExperienceCard from "../cards/ExperienceCard.jsx";
import data from "../data.json";
import ContactCard from "../cards/ContactCard.jsx";

function Experience() {
    return (
        <div className='flex py-24 px-12 justify-center'>
            <ExperienceCard content={data.experience}/>
        </div>
    )
        ;
}

export default Experience;