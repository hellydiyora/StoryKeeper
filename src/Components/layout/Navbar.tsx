import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Recommendations', path: '/recommendations' },
    { name: 'Affirmations', path: '/affirmations' },
    { name: 'Blogs', path: '/blogs' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <BookOpen className="h-8 w-8 text-lavender-600 dark:text-lavender-400" />
            <span className="ml-2 text-xl font-serif italic font-medium text-gray-800 dark:text-white">
              Story Keeper
            </span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-lavender-700 dark:text-lavender-400 font-medium'
                    : 'text-gray-600 hover:text-lavender-600 dark:text-gray-300 dark:hover:text-lavender-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 ml-2 rounded-full text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 md:hidden transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-60' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4 py-3 bg-white dark:bg-gray-900 shadow-lg rounded-b-lg">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`block py-2 px-4 rounded-md ${
                location.pathname === link.path
                  ? 'bg-lavender-50 text-lavender-700 dark:bg-gray-800 dark:text-lavender-400'
                  : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;