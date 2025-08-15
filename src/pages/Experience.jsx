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
            {/* Tab Switcher */}
            <div className='relative flex w-full bg-gray-200 text-black text-lg font-semibold py-2 rounded-md'>
                {/* Sliding Bar */}
                <div
                    className={`absolute top-2 left-2 w-[calc(50%-8px)] h-[calc(100%-16px)] bg-white shadow-md rounded-md transition-transform duration-300
                    ${activeTab ? 'translate-x-0' : 'translate-x-full'}
                `}/>
                {tabs.map((tab) => (
                    <button
                        key={tab.name}
                        className={`z-10 flex w-full justify-center text-gray-700 transition-all duration-300' 
                        ${activeTab === tab.value 
                            ? 'text-black' 
                            : 'text-gray-600 hover:text-black'
                        }`}
                        onClick={() => setActiveTab(tab.value)}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>
            <div className='transition-opacity duration-300'>
                {activeTab ? (
                    <ExperienceCard content={data.experience}/>
                ) : (
                    <EducationCard content={data.education}/>
                )}
            </div>
        </div>
    );
}

export default Experience;