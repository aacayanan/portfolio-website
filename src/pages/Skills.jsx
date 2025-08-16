import React from "react";
import data from "../data.json";
import TechCard from "../cards/TechCard.jsx";

function Skills() {
    return (
        <div className='flex justify-center py-10 mx-auto max-w-4xl'>
            <TechCard
                languages={data.technologies.languages}
                frameworks={data.technologies.frameworks}
            />
        </div>
    );
}

export default Skills;