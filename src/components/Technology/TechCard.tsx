import { FaStar, FaCheck } from "react-icons/fa";
import { toast } from "react-toastify";
import type { Technology } from "../../types/types";

interface TechCardProps {
    technology: Technology;
    selectedTechnologies: Technology[];
    handleAddToStack: (technology: Technology) => void;
}

const TechCard = ({
    technology,
    selectedTechnologies,
    handleAddToStack,
}: TechCardProps) => {

    const {
        name,
        category,
        description,
        icon,
        rating,
        difficulty,
        badge,
        color,
    } = technology;

    const isSelected = selectedTechnologies.some(
        (item) => item.id === technology.id
    );

    const handleAdd = () => {
        if (isSelected) {
            toast.warning(`${technology.name} is already in your stack!`);
            return;
        }

        handleAddToStack(technology);
    };

    return (
        <div className="card bg-base-100 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="card-body p-5">

                {/* Icon + Badge */}
                <div className="flex items-center justify-between">
                    <img
                        src={icon}
                        alt={name}
                        className="w-10 h-10 object-contain"
                    />

                    <span
                        className="badge border-none"
                        style={{
                            backgroundColor: `${color}20`,
                            color: color,
                        }}
                    >
                        {badge}
                    </span>
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-gray-900 mt-4">
                    {name}
                </h3>

                {/* Description */}
                <p className="text-[#64748B] text-sm leading-6">
                    {description}
                </p>

                {/* Category + Difficulty + Rating */}
                <div className="flex items-center justify-between gap-2 mt-4 text-sm">
                    <span className="text-gray-700">
                        {category}
                    </span>

                    <span className="text-gray-700">
                        {difficulty}
                    </span>

                    <span className="flex items-center gap-1">
                        <FaStar
                            className="text-yellow-400"
                            size={14}
                        />
                        <span className="text-gray-700">
                            {rating}
                        </span>
                    </span>
                </div>

                {/* Add To Stack */}
                <button
                    onClick={handleAdd}
                    className={`w-full mt-5 py-2.5 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors ${
                        isSelected
                            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                            : "bg-black text-white hover:bg-gray-800"
                    }`}
                >
                    {isSelected ? (
                        <>
                            <FaCheck size={14} />
                            <span>Added to Stack</span>
                        </>
                    ) : (
                        "Add to Stack"
                    )}
                </button>

            </div>
        </div>
    );
};

export default TechCard;