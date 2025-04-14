import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.png";

const navItems = ["Home", "About", "Careers", "Services", "Contact", "Subscribe"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setShadow(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItemClass = `
    uppercase italic font-bold tracking-wide 
    cursor-pointer relative group transition-all duration-300 
    hover:scale-105
  `;

  return (
     <nav
    className={`fixed top-0 left-0 w-full z-50 border-t-8 border-teal-500 transition-all duration-300 ${
   shadow ? "bg-white/80 backdrop-blur-lg shadow-md" : "bg-transparent"
  }`}
  >

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-4 group cursor-pointer" data-aos="fade-right">
          <img
            src={logo}
            alt="Qloron Logo"
            className="h-14 w-auto transition-transform duration-300 group-hover:scale-110 drop-shadow-md group-hover:drop-shadow-xl"
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-gray-800 font-poppins">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="text-teal-600"
                className={navItemClass}
              >
                <span className="group-hover:text-teal-600 transition">{item}</span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-500 group-hover:w-full transition-all duration-500 ease-in-out"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden z-50">
          <button
            onClick={toggleMenu}
            className="text-2xl text-teal-700 focus:outline-none"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl rounded-b-lg px-6 py-4 space-y-4 text-gray-800 font-poppins animate-fade-down">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsOpen(false)}
              className={`${navItemClass} block hover:text-teal-600`}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
