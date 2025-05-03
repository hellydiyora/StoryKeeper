import React, { useState, useEffect } from 'react';
import AffirmationCard from '../components/affirmations/AffirmationCard';
import { affirmations } from '../data/affirmations';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Affirmations: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  
  useEffect(() => {
    let interval: number | undefined;
    
    if (isAutoplay) {
      interval = window.setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % affirmations.length);
      }, 8000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoplay]);

  const goToPrev = () => {
    setIsAutoplay(false);
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? affirmations.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setIsAutoplay(false);
    setCurrentIndex(prevIndex => 
      (prevIndex + 1) % affirmations.length
    );
  };

  return (
    <div className="min-h-screen bg-lavender-50 dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Daily Affirmations
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Embrace mindful reading with these thoughtful affirmations
          </p>
        </div>
        
        <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg min-h-[280px] md:min-h-[320px] max-w-4xl mx-auto flex items-center overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-lavender-100 dark:bg-lavender-900/20 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-mint-100 dark:bg-mint-900/20 rounded-full translate-x-1/3 translate-y-1/3 opacity-50"></div>
          
          <div className="relative w-full h-full">
            {affirmations.map((affirmation, index) => (
              <AffirmationCard 
                key={affirmation.id}
                affirmation={affirmation}
                isActive={index === currentIndex}
              />
            ))}
          </div>
          
          <div className="absolute bottom-6 left-0 right-0 flex justify-center">
            <div className="flex items-center space-x-2">
              {affirmations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoplay(false);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? 'bg-lavender-600 w-4'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  aria-label={`Go to affirmation ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-gray-700/80 text-gray-800 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-700 focus:outline-none transition-colors"
            aria-label="Previous affirmation"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-gray-700/80 text-gray-800 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-700 focus:outline-none transition-colors"
            aria-label="Next affirmation"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Affirmations;