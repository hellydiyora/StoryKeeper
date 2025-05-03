import React, { useState, useEffect } from 'react';
import { Affirmation } from '../../types';

interface AffirmationCardProps {
  affirmation: Affirmation;
  isActive: boolean;
}

const AffirmationCard: React.FC<AffirmationCardProps> = ({ affirmation, isActive }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isActive) {
      // Add a slight delay for animation purposes
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [isActive]);

  return (
    <div
      className={`absolute inset-0 transition-all duration-700 p-8 ${
        isActive ? 'z-10' : 'z-0'
      } ${
        isVisible 
          ? 'opacity-100 transform-none' 
          : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-800 dark:text-white font-serif leading-relaxed mb-8">
          "{affirmation.text}"
        </p>
        
        {affirmation.author && (
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            — {affirmation.author}
          </p>
        )}
      </div>
    </div>
  );
};

export default AffirmationCard;