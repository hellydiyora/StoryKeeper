import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Heart, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center">
              <BookOpen className="h-6 w-6 text-lavender-600 dark:text-lavender-400" />
              <span className="ml-2 text-xl font-serif italic font-medium text-gray-800 dark:text-white">
                Bookish
              </span>
            </Link>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Your personal space for literary exploration and mindful reading.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-lavender-600 dark:hover:text-lavender-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/recommendations" className="text-gray-600 dark:text-gray-400 hover:text-lavender-600 dark:hover:text-lavender-400 transition-colors">
                  Recommendations
                </Link>
              </li>
              <li>
                <Link to="/affirmations" className="text-gray-600 dark:text-gray-400 hover:text-lavender-600 dark:hover:text-lavender-400 transition-colors">
                  Affirmations
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-gray-600 dark:text-gray-400 hover:text-lavender-600 dark:hover:text-lavender-400 transition-colors">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-lavender-600 dark:hover:text-lavender-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-lavender-600 dark:hover:text-lavender-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-lavender-600 dark:hover:text-lavender-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white mb-4">Newsletter</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Stay updated with our latest recommendations and articles.
            </p>
            <div className="flex mt-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-l-md text-sm focus:outline-none focus:ring-1 focus:ring-lavender-500 w-full"
              />
              <button className="bg-lavender-600 hover:bg-lavender-700 text-white px-3 py-2 rounded-r-md text-sm transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Bookish. All rights reserved.
          </p>
          <div className="flex items-center mt-4 sm:mt-0">
            <span className="text-sm text-gray-600 dark:text-gray-400">Made with</span>
            <Heart className="h-4 w-4 mx-1 text-red-500" />
            <span className="text-sm text-gray-600 dark:text-gray-400">for book lovers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;