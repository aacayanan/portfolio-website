import React, {useState} from "react";
import ExperienceCard from "../cards/ExperienceCard.jsx";
import data from "../data.json";
import EducationCard from "../cards/EducationCard.jsx";

function Experience() {
    const [activeTab, setActiveTab] = useState(true);

    const tabs = [
        { name: "Experience", value: true },
        { name: "Education", value: false }
    ]

    return (
        <div className='flex flex-col max-w-4xl mx-auto py-10'>
            <div className='flex w-full bg-gray-200 text-black text-lg font-semibold p-2 rounded-md'>
                {tabs.map((tab) => (
                    <button
                        key={tab.name}
                        className={`flex w-full justify-center text-gray-700' ${activeTab === tab.value ? 'bg-white shadow-md rounded-md text-black' : 'bg-gray-200 text-gray-600 hover:text-black'}`}
                        onClick={() => setActiveTab(tab.value)}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>
            {activeTab ? (
                <ExperienceCard content={data.experience} />
            ): (
                <EducationCard content={data.education} />
            )}
        </div>
    );
}

export default Experience;