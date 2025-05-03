import React from 'react';
import { Link } from 'react-router-dom';
import { BookX } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-lavender-50 dark:bg-gray-900 flex items-center justify-center pt-16">
      <div className="text-center max-w-md mx-auto px-4">
        <BookX className="h-20 w-20 text-lavender-500 mx-auto mb-6" />
        <h1 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="inline-flex px-5 py-2.5 bg-lavender-600 hover:bg-lavender-700 text-white font-medium rounded-lg transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;