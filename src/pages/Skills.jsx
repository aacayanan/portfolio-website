import React from "react";
import data from "../data.json";
import TechCard from "../cards/TechCard.jsx";

function Skills() {
    return (
        <div className='flex justify-center px-4 py-10 mx-auto max-w-4xl'>
            <TechCard
                frontend={data.technologies.frontend}
                backend={data.technologies.backend}
                database={data.technologies.database}
                tools={data.technologies.tools}
            />
        </div>
    );
}

export default Skills;