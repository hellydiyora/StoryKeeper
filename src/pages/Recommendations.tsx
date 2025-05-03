import React, { useState, useEffect } from 'react';
import BookFilters from '../components/recommendations/BookFilters';
import BookGrid from '../components/recommendations/BookGrid';
import { allBooks } from '../data/books';

const Recommendations: React.FC = () => {
  const [filteredBooks, setFilteredBooks] = useState(allBooks);
  const [activeGenres, setActiveGenres] = useState<string[]>([]);
  
  // Extract all unique genres
  const allGenres = Array.from(
    new Set(allBooks.flatMap(book => book.genre))
  ).sort();

  useEffect(() => {
    if (activeGenres.length === 0) {
      setFilteredBooks(allBooks);
    } else {
      setFilteredBooks(
        allBooks.filter(book => 
          book.genre.some(genre => activeGenres.includes(genre))
        )
      );
    }
  }, [activeGenres]);

  const handleGenreChange = (genre: string) => {
    setActiveGenres(prev => 
      prev.includes(genre)
        ? prev.filter(g => g !== genre)
        : [...prev, genre]
    );
  };

  const resetFilters = () => {
    setActiveGenres([]);
  };

  return (
    <div className="min-h-screen bg-lavender-50 dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Book Recommendations
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover your next favorite read from our carefully curated selection
          </p>
        </div>
        
        <BookFilters 
          genres={allGenres}
          activeGenres={activeGenres}
          onGenreChange={handleGenreChange}
          onResetFilters={resetFilters}
        />
        
        <BookGrid books={filteredBooks} />
      </div>
    </div>
  );
};

export default Recommendations;