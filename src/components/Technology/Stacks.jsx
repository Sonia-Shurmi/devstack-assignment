const Stacks = ({ selectedTechnologies, setSelectedTechnologies }) => {
    return (
        <div className="bg-white border border-slate-200 rounded-2xl p-5">

            <h3 className="text-xl font-bold text-gray-900 mb-5">
                My Stack
            </h3>

            <div className="space-y-3">
                {selectedTechnologies.map((technology) => (
                    <div
                        key={technology.id}
                        className="flex items-center gap-3 p-3 rounded-xl bg-slate-50"
                    >
                        <img
                            src={technology.icon}
                            alt={technology.name}
                            className="w-10 h-10 object-contain"
                        />

                        <div>
                            <h4 className="font-semibold text-gray-900">
                                {technology.name}
                            </h4>

                            <p className="text-sm text-[#64748B]">
                                {technology.category}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Stacks;