import React, {useState} from "react";
import ExperienceCard from "../cards/ExperienceCard.jsx";
import data from "../data.json";

function Experience() {
    const [activeTab, setActiveTab] = useState(true);

    const tabs = [
        { name: "Experience", value: true },
        { name: "Education", value: false }
    ]

    return (
        <div className='flex flex-col py-24 px-12 justify-center'>
            <div className='flex w-full bg-gray-200 text-black text-lg font-semibold'>
                {tabs.map((tab) => (
                    <button
                        key={tab.name}
                        className={`flex w-full justify-center ${activeTab === tab.value ? 'bg-green-300' : 'bg-gray-400'}`}
                        onClick={() => setActiveTab(tab.value)}
                    >
                        {tab.name}
                    </button>
                ))};
            </div>
            <ExperienceCard content={data.experience}/>
        </div>
    );
}

export default Experience;