import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer id="subscribe" className="relative text-[#002f34] py-16 bg-[#E5FAF8]">
      {/* Soft background blur effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#B5E6E0]/30 via-transparent to-transparent blur-2xl z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* CTA Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold mb-6 text-[#00A9B7]">
            Let’s build something great together
          </h2>
          <button className="bg-[#00A9B7] hover:bg-[#00C5B8] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-md">
            Start a Project →
          </button>
        </div>

        <hr className="border-[#B5E6E0] mb-10" />

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 text-sm text-[#4F6F74]">
         {/* Logo Image */}
<div className="space-y-2">
  <img
    src={logo}
    alt="Qloron Logo"
    className="h-[68px] object-contain"
  />
</div>


          {/* What */}
          <div>
            <h3 className="mb-3 text-[#002f34] font-semibold">What</h3>
            <ul className="space-y-2">
              <li className="hover:text-[#00C5B8] transition-colors cursor-pointer">
                Services
              </li>
              <li className="hover:text-[#00C5B8] transition-colors cursor-pointer">
                Testimonials
              </li>
              <li className="hover:text-[#00C5B8] transition-colors cursor-pointer">
                Our Work
              </li>
            </ul>
          </div>

          {/* Who */}
          <div>
            <h3 className="mb-3 text-[#002f34] font-semibold">Who</h3>
            <ul className="space-y-2">
              <li className="hover:text-[#00C5B8] transition-colors cursor-pointer">
                About
              </li>
              <li className="hover:text-[#00C5B8] transition-colors cursor-pointer">
                Team
              </li>
              <li className="hover:text-[#00C5B8] transition-colors cursor-pointer">
                Careers
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-3 text-[#002f34] font-semibold">Connect</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 hover:text-[#00C5B8] cursor-pointer transition-colors">
                <FaLinkedin /> LinkedIn
              </li>
              <li className="flex items-center gap-2 hover:text-[#00C5B8] cursor-pointer transition-colors">
                <FaInstagram /> Instagram
              </li>
              <li className="flex items-center gap-2 hover:text-[#00C5B8] cursor-pointer transition-colors">
                <FaTwitter /> Twitter
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-3 text-[#002f34] font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li className="hover:text-[#00C5B8] transition-colors cursor-pointer">
                Terms & Conditions
              </li>
              <li className="hover:text-[#00C5B8] transition-colors cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-[#00C5B8] transition-colors cursor-pointer">
                Contact Us
              </li>
            </ul>
          </div>
        </div>

          {/* Subscribe to Updates (Right-Aligned + Stylish) */}
<div className="space-y-4 md:col-start-5 md:col-span-1">
  <h3 className="text-[#002f34] font-semibold">Subscribe</h3>
  <p className="text-[#4F6F74] text-sm">
    Get the latest updates right to your inbox.
  </p>
  <form className="relative">
    <div className="flex items-center backdrop-blur-md bg-white/40 border border-[#00A9B7]/30 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
      <input
        type="email"
        placeholder="Your Email"
        className="w-full px-4 py-2 text-sm text-[#002f34] placeholder-[#7CAAB3] bg-transparent focus:outline-none"
      />
      <button
        type="submit"
        className="bg-[#00A9B7] hover:bg-[#007A8A] text-white px-4 py-2 transition-colors duration-300"
      >
        Subscribe
      </button>
    </div>
  </form>
</div>

        {/* Bottom Line */}
        <div className="mt-12 text-center text-xs text-[#7CAAB3]">
          © {new Date().getFullYear()} Qloron Technology Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
