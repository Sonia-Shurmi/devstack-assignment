import type { Dispatch, SetStateAction } from "react";
import TechCard from "./TechCard";
import { Technology } from "../../types/Types";

interface TechnologyCardsProps {
    technologies: Technology[];
    selectedTechnologies: Technology[];
    setSelectedTechnologies: Dispatch<SetStateAction<Technology[]>>;
    handleAddToStack: (technology: Technology) => void;
}

const TechnologyCards = ({ technologies, selectedTechnologies, setSelectedTechnologies, handleAddToStack }: TechnologyCardsProps) => {
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
