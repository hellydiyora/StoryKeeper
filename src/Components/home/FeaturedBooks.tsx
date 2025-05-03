import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Bookmark, Star } from 'lucide-react';
import { Book } from '../../types';
import { useBookmarks } from '../../context/BookmarkContext';
import { featuredBooks } from '../../data/books';

const FeaturedBooks: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { addBookmark, removeBookmark, isBookmarked } = useBookmarks();
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === featuredBooks.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? featuredBooks.length - 1 : prevIndex - 1
    );
  };

  const handleBookmark = (book: Book) => {
    if (isBookmarked(book.id)) {
      removeBookmark(book.id);
    } else {
      addBookmark(book);
    }
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Featured Books
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Handpicked selections to inspire your next reading journey
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {featuredBooks.map((book) => (
                <div 
                  key={book.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-lavender-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-md">
                    <div className="md:flex">
                      <div className="md:w-1/3 relative">
                        <img 
                          src={book.cover} 
                          alt={book.title} 
                          className="h-64 md:h-full w-full object-cover"
                        />
                        <div className="absolute top-4 right-4">
                          <button 
                            onClick={() => handleBookmark(book)}
                            className={`p-2 rounded-full ${
                              isBookmarked(book.id) 
                                ? 'bg-lavender-600 text-white' 
                                : 'bg-white/90 text-lavender-600'
                            } shadow-sm transition-colors`}
                            aria-label={isBookmarked(book.id) ? "Remove bookmark" : "Add bookmark"}
                          >
                            <Bookmark className="h-5 w-5" fill={isBookmarked(book.id) ? "currentColor" : "none"} />
                          </button>
                        </div>
                      </div>
                      <div className="md:w-2/3 p-6 md:p-8">
                        <div className="flex items-center mb-2">
                          {book.genre.slice(0, 2).map((genre, index) => (
                            <span 
                              key={index}
                              className="text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full bg-lavender-100 text-lavender-800 dark:bg-lavender-900 dark:text-lavender-300"
                            >
                              {genre}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {book.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-3">
                          by {book.author} ({book.year})
                        </p>
                        
                        <div className="flex items-center mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className="h-4 w-4 text-amber-400"
                              fill={i < Math.floor(book.rating) ? "currentColor" : "none"}
                            />
                          ))}
                          <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                            {book.rating.toFixed(1)}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">
                          {book.description}
                        </p>
                        
                        <button className="inline-flex items-center px-4 py-2 bg-lavender-600 hover:bg-lavender-700 text-white rounded-lg transition-colors">
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white dark:bg-gray-700 p-3 rounded-full shadow-md text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none transition-colors z-10"
            aria-label="Previous book"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white dark:bg-gray-700 p-3 rounded-full shadow-md text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none transition-colors z-10"
            aria-label="Next book"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
          
          <div className="flex justify-center mt-6 space-x-2">
            {featuredBooks.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full ${
                  currentIndex === index 
                    ? 'bg-lavender-600' 
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;