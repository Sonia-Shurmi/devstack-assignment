import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-[1200px] mx-auto px-4 py-12">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <img src={logo} alt="Dev Stack" />
            </div>

            <p className="text-sm text-[#64748B] leading-6 mt-4 max-w-xs">
              Build your ideal development stack with the technologies that fit
              your next project.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-5 mt-5">
              <a
                href="#"
                className="text-sm text-[#64748B] hover:text-gray-900 transition-colors"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-sm text-[#64748B] hover:text-gray-900 transition-colors"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-sm text-[#64748B] hover:text-gray-900 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Product</h3>

            <ul className="space-y-3 text-sm text-[#64748B]">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Technologies
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-gray-900">
                  Projects
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-gray-900">
                  Features
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>

            <ul className="space-y-3 text-sm text-[#64748B]">
              <li>
                <a href="#" className="hover:text-gray-900">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-gray-900">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-gray-900">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>

            <ul className="space-y-3 text-sm text-[#64748B]">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-gray-900">
                  Terms of Service
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-gray-900">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#64748B]">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-gray-900 transition-colors">
              Privacy
            </a>

            <a href="#" className="hover:text-gray-900 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
