import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, GraduationCap } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/college-finder', text: 'College Finder' },
    { to: '/about', text: 'About' },
    { to: '/contact', text: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
      <nav className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
        <Link 
          to="/"
          className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400 font-bold text-xl md:text-2xl"
          onClick={closeMenu}
        >
          <GraduationCap className="h-6 w-6 md:h-7 md:w-7" />
          <span>TSCollegeFinder</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-medium transition-colors duration-200 hover:text-emerald-600 dark:hover:text-emerald-400 ${
                  location.pathname === link.to
                    ? 'text-emerald-600 dark:text-emerald-400'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {link.text}
              </Link>
            ))}
          </div>
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <Moon className="h-5 w-5 text-gray-700" />
            ) : (
              <Sun className="h-5 w-5 text-yellow-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <Moon className="h-5 w-5 text-gray-700" />
            ) : (
              <Sun className="h-5 w-5 text-yellow-300" />
            )}
          </button>
          
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg absolute w-full py-4 transition-all duration-300 ease-in-out">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`py-2 px-4 rounded-md font-medium transition-colors duration-200 ${
                  location.pathname === link.to
                    ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
                onClick={closeMenu}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;