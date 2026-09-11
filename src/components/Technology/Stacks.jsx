import { FaXmark } from "react-icons/fa6";

const Stacks = ({ selectedTechnologies, setSelectedTechnologies }) => {

    const handleRemove = (id) => {
        const remainingTechnologies = selectedTechnologies.filter(
            technology => technology.id !== id
        );

        setSelectedTechnologies(remainingTechnologies);
    };

    const handleRemoveAll = () => {
        setSelectedTechnologies([]);
    };

    return (
        <div className="self-start border border-slate-200 rounded-2xl p-5">

            {/* Heading */}
            <div className="mb-5">
                <h3 className="text-xl font-bold text-gray-900">
                    Your Stack
                </h3>

                <p className="text-sm text-[#64748B] mt-1">
                    {selectedTechnologies.length}{" "}
                    {selectedTechnologies.length === 1
                        ? "Technology"
                        : "Technologies"}{" "}
                    Selected
                </p>
            </div>

            {/* Empty State */}
            {selectedTechnologies.length === 0 ? (
                <div className="border border-dashed border-slate-300 rounded-xl p-6 text-center">
                    <p className="text-sm font-medium text-slate-500">
                        Your stack is empty
                    </p>
                </div>
            ) : (

                /* Selected Technologies */
                <div className="space-y-2">

                    {selectedTechnologies.map(
                        ({ id, name, category, icon }) => (

                            <div
                                key={id}
                                className="flex items-center justify-between border border-slate-200 rounded-lg p-3"
                            >

                                <div className="flex items-center gap-3">

                                    <img
                                        src={icon}
                                        alt={name}
                                        className="w-8 h-8 object-contain"
                                    />

                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900">
                                            {name}
                                        </h4>

                                        <p className="text-xs text-[#64748B]">
                                            {category}
                                        </p>
                                    </div>

                                </div>

                                <button
                                    onClick={() => handleRemove(id)}
                                    className="text-slate-400 hover:text-red-500 transition-colors"
                                >
                                    <FaXmark size={16} />
                                </button>

                            </div>
                        )
                    )}

                </div>
            )}

            {/* Remove All */}
            {selectedTechnologies.length > 0 && (
                <button
                    onClick={handleRemoveAll}
                    className="w-full mt-5 py-2.5 rounded-lg border border-red-500 text-red-500 font-semibold hover:bg-red-50 transition-colors"
                >
                    Remove All
                </button>
            )}

        </div>
    );
};

export default Stacks;