import { FaStar } from "react-icons/fa";

const TechCard = ({ technology, selectedTechnologies, setSelectedTechnologies, handleAddToStack }) => {

    const {name,category,description,icon,rating,difficulty,badge,color} = technology;

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
                            color: color
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
                        <FaStar className="text-yellow-400" size={14} />
                        <span className="text-gray-700">
                            {rating}
                        </span>
                    </span>
                </div>

                {/* Add To Stack */}
                <button 
                    className="w-full mt-5 py-2.5 rounded-lg bg-black text-white font-semibold hover:bg-gray-800 transition-colors"
                    onClick={() => handleAddToStack(technology)}
                >
                    Add to Stack
                </button>

            </div>
        </div>
    );
};

export default TechCard;