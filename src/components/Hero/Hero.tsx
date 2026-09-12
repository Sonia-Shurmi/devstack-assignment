import heroImg from "../../assets/banner-stack.png";

const Hero = () => {
    return (
        <section className="bg-white">
            <div className="max-w-[1200px] mx-auto px-4 py-10 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

                    {/* Hero Content */}
                    <div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                            Build Your Ideal{" "}
                            <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
                                Development Stack
                            </span>
                        </h1>

                        <p className="mt-6 text-lg leading-8 text-gray-600 max-w-xl">
                            Explore frontend, backend, database, and tooling options,
                            compare them side by side, and put together the stack that
                            fits your next project.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4 mt-8">

                            <button className="px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] hover:shadow-lg transition-all duration-300">
                                Explore Technologies
                            </button>

                            <button className="px-6 py-3 rounded-full font-semibold border-2 border-[#D81B7E] text-[#D81B7E] hover:bg-gradient-to-r hover:from-[#FF5722] hover:via-[#D81B7E] hover:to-[#7C3AED] hover:text-white hover:border-transparent transition-all duration-300">
                                Learn More
                            </button>

                        </div>
                    </div>

                    {/* Banner Image */}
                    <div className="flex justify-center md:justify-end">
                        <img
                            src={heroImg}
                            alt="Development Stack"
                            className="w-full max-w-lg object-contain"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;