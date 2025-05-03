import React from 'react';
import { X } from 'lucide-react';

interface BookFiltersProps {
  genres: string[];
  activeGenres: string[];
  onGenreChange: (genre: string) => void;
  onResetFilters: () => void;
}

const BookFilters: React.FC<BookFiltersProps> = ({ 
  genres, 
  activeGenres, 
  onGenreChange, 
  onResetFilters 
}) => {
  return (
    <div className="w-full mb-8">
      <div className="flex flex-wrap items-center mb-4">
        <h3 className="font-medium text-gray-800 dark:text-white mr-4">Filters:</h3>
        
        {activeGenres.length > 0 && (
          <button
            onClick={onResetFilters}
            className="text-sm flex items-center text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
          >
            <X className="h-4 w-4 mr-1" />
            Clear all
          </button>
        )}
      </div>
      
      <div className="flex flex-wrap gap-2">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => onGenreChange(genre)}
            className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
              activeGenres.includes(genre)
                ? 'bg-lavender-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BookFilters;