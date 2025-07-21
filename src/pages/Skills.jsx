import React from "react";
import data from "../data.json";
import TechCard from "../cards/TechCard.jsx";

function Skills() {
    return (
        <div className='flex py-24 px-12 justify-center'>
            <TechCard
                languages={data.technologies.languages}
                frameworks={data.technologies.frameworks}
            />
        </div>
    );
}

export default Skills;