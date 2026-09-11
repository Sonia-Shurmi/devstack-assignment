import { FiMenu } from "react-icons/fi";
import logo from "../../assets/logo-text.png";

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="max-w-[1200px] mx-auto px-4">
                <div className="flex items-center justify-between h-20">

                    {/* Mobile Menu */}
                    <button className="btn btn-ghost btn-circle text-[#DB2777] hover:bg-transparent hover:text-[#DB2777] md:hidden">
                        <FiMenu size={24} />
                    </button>

                    {/* Logo */}
                    <a className="flex items-center gap-2">
                        <img
                            src={logo}
                            alt="Dev Stack Logo"
                        />
                    </a>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex">
                        <ul className="flex items-center gap-8">
                            <li>
                                <a className="text-gray-700 hover:text-[#DB2777] transition-colors">
                                    Home
                                </a>
                            </li>

                            <li>
                                <a className="text-gray-700 hover:text-[#DB2777] transition-colors">
                                    Technologies
                                </a>
                            </li>

                            <li>
                                <a className="text-gray-700 hover:text-[#DB2777] transition-colors">
                                    Projects
                                </a>
                            </li>

                            <li>
                                <a className="text-gray-700 hover:text-[#DB2777] transition-colors">
                                    About
                                </a>
                            </li>

                            <li>
                                <a className="text-gray-700 hover:text-[#DB2777] transition-colors">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>

                    {/* Auth Buttons */}
                    <div className="flex items-center gap-2">
                        <button className="px-4 py-2 rounded-full border border-[#DB2777] bg-transparent text-[#DB2777] hover:bg-[#DB2777] hover:text-white transition-colors">
                            Sign In
                        </button>

                        <button className="px-4 py-2 rounded-full border border-[#DB2777] bg-transparent text-[#DB2777] hover:bg-[#DB2777] hover:text-white transition-colors">
                            Sign Up
                        </button>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Navbar;