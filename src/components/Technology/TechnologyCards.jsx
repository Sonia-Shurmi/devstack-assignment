import React from "react";
import { FaStar } from "react-icons/fa";
import TechCard from "./TechCard";

const TechnologyCards = ({ technologies, selectedTechnologies, setSelectedTechnologies, handleAddToStack }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {technologies.map((technology) => (
        <TechCard 
          key={technology.id} 
          technology={technology} 
          selectedTechnologies={selectedTechnologies}
          setSelectedTechnologies={setSelectedTechnologies}
          handleAddToStack={handleAddToStack}
        />
      ))}
    </div>
  );
};

export default TechnologyCards;
