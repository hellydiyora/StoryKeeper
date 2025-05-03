import React, { useState } from 'react';
import { Book } from '../../types';
import { Bookmark, Star } from 'lucide-react';
import { useBookmarks } from '../../context/BookmarkContext';

interface BookGridProps {
  books: Book[];
}

const BookGrid: React.FC<BookGridProps> = ({ books }) => {
  const { addBookmark, removeBookmark, isBookmarked } = useBookmarks();
  const [hoveredBook, setHoveredBook] = useState<string | null>(null);

  const handleBookmark = (book: Book, e: React.MouseEvent) => {
    e.stopPropagation();
    if (isBookmarked(book.id)) {
      removeBookmark(book.id);
    } else {
      addBookmark(book);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {books.map((book) => (
        <div 
          key={book.id}
          className="group bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
          onMouseEnter={() => setHoveredBook(book.id)}
          onMouseLeave={() => setHoveredBook(null)}
        >
          <div className="relative aspect-[2/3] overflow-hidden">
            <img 
              src={book.cover} 
              alt={book.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div 
              className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 transition-opacity duration-300 ${
                hoveredBook === book.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-white font-bold text-lg leading-tight mb-1">{book.title}</h3>
                  <p className="text-gray-200 text-sm">{book.author}</p>
                </div>
                <button 
                  onClick={(e) => handleBookmark(book, e)}
                  className={`p-2 rounded-full ${
                    isBookmarked(book.id) ? 'bg-lavender-600 text-white' : 'bg-white/20 text-white hover:bg-white/30'
                  } transition-colors`}
                  aria-label={isBookmarked(book.id) ? "Remove bookmark" : "Add bookmark"}
                >
                  <Bookmark className="h-5 w-5" fill={isBookmarked(book.id) ? "currentColor" : "none"} />
                </button>
              </div>
            </div>
          </div>
          
          <div className="p-4">
            <div className="flex mb-2">
              {book.genre.slice(0, 2).map((genre, index) => (
                <span 
                  key={index}
                  className="text-xs mr-2 px-2 py-0.5 rounded-full bg-lavender-100 text-lavender-800 dark:bg-lavender-900 dark:text-lavender-300"
                >
                  {genre}
                </span>
              ))}
            </div>
            
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className="h-4 w-4 text-amber-400"
                  fill={i < Math.floor(book.rating) ? "currentColor" : "none"}
                />
              ))}
              <span className="ml-1 text-xs text-gray-600 dark:text-gray-400">
                {book.rating.toFixed(1)}
              </span>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
              {book.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookGrid;