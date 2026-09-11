import React, { use, useState } from 'react';
import TechnologyCards from './TechnologyCards';
import Stacks from './Stacks';

const Technology = ({ technologiesPromise }) => {

    const technologies = use(technologiesPromise);

    const [selectedTechnologies, setSelectedTechnologies] = useState([]);
    
    const handleAddToStack = (technology) => {
        setSelectedTechnologies([...selectedTechnologies, technology]);
        console.log("Selected Technologies:", [...selectedTechnologies, technology]);
    };

    return (
        <div className="max-w-[1200px] mx-auto px-4 py-16 md:py-20">

                {/* Section Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
                        Explore the{" "}
                        <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
                            Technologies
                        </span>
                    </h2>

                    <p className="mt-4 text-base md:text-lg text-[#64748B]">
                        Pick one technology per category to build your ideal stack.
                    </p>
                </div>

                {/* Cards + Stack */}
                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_300px] gap-8">

                    {/* Technology Cards */}
                    <TechnologyCards 
                    technologies={technologies} 
                    selectedTechnologies={selectedTechnologies}
                    setSelectedTechnologies={setSelectedTechnologies}
                    handleAddToStack={handleAddToStack} />

                    {/* Selected Stack */}
                    <Stacks 
                    selectedTechnologies={selectedTechnologies}
                    setSelectedTechnologies={setSelectedTechnologies} />

                </div>

            </div>
    );
};

export default Technology;

