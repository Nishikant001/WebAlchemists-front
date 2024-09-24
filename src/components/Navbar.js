import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarScrolled(true);
      } else {
        setNavbarScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        navbarScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link
            to="/"
            className={`transition-colors duration-300 ${
              navbarScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            WebAlchemists
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="#home"
            className={`${
              navbarScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-gray-300'
            } font-medium transition-colors duration-300`}
          >
            Home
          </a>
          <a
            href="#service"
            className={`${
              navbarScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-gray-300'
            } font-medium transition-colors duration-300`}
          >
            Services
          </a>
          <a
            href="#portfolio"
            className={`${
              navbarScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-gray-300'
            } font-medium transition-colors duration-300`}
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className={`${
              navbarScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-gray-300'
            } font-medium transition-colors duration-300`}
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            {menuOpen ? (
              <HiX className={`w-8 h-8 ${navbarScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <HiOutlineMenuAlt3 className={`w-8 h-8 ${navbarScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            menuOpen ? 'block' : 'hidden'
          } absolute top-16 left-0 w-full bg-white md:hidden z-40 shadow-lg py-4 transition-all duration-300`}
        >
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <a
                href="#home"
                className="text-gray-700 hover:text-blue-600 font-medium text-lg transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a

                href="#service"
                className="text-gray-700 hover:text-blue-600 font-medium text-lg transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="text-gray-700 hover:text-blue-600 font-medium text-lg transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 font-medium text-lg transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
