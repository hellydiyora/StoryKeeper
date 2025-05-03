import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-lavender-50 dark:bg-gray-900 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-peach-200 dark:bg-peach-900/20 blur-3xl opacity-50"></div>
        <div className="absolute top-1/3 -left-24 w-80 h-80 rounded-full bg-mint-200 dark:bg-mint-900/20 blur-3xl opacity-40"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-lavender-100 dark:bg-lavender-900/30 text-lavender-800 dark:text-lavender-300 mb-6">
              <BookOpen className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Your Reading Sanctuary</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-gray-900 dark:text-white leading-tight">
              Discover Your Next 
              <span className="text-lavender-600 dark:text-lavender-400 italic"> Literary</span> Adventure
            </h1>
            
            <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300">
              Explore personalized book recommendations, share your thoughts, and embrace the joy of mindful reading in a community of fellow book lovers.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/recommendations" 
                className="px-6 py-3 bg-lavender-600 hover:bg-lavender-700 text-white font-medium rounded-lg shadow-sm transition-colors"
              >
                Discover Books
              </Link>
              <Link 
                to="/blogs" 
                className="px-6 py-3 bg-white dark:bg-gray-800 text-lavender-600 dark:text-lavender-400 font-medium rounded-lg shadow-sm border border-lavender-200 dark:border-gray-700 hover:bg-lavender-50 dark:hover:bg-gray-700 transition-colors"
              >
                Share Thoughts
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="aspect-[4/5] bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden relative transform rotate-3 border-8 border-white dark:border-gray-800">
              <img 
                src="https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Book lover's paradise" 
                className="object-cover h-full w-full"
              />
            </div>
            
            <div className="absolute -bottom-4 -left-12 aspect-[1/1] w-56 bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform -rotate-6 border-8 border-white dark:border-gray-800 z-10">
              <img 
                src="https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Reading corner" 
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;