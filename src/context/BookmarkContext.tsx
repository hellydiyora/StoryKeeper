import React, { createContext, useContext, useState, useEffect } from 'react';
import { Book } from '../types';

interface BookmarkContextType {
  bookmarks: Book[];
  addBookmark: (book: Book) => void;
  removeBookmark: (id: string) => void;
  isBookmarked: (id: string) => boolean;
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

export const useBookmarks = () => {
  const context = useContext(BookmarkContext);
  if (context === undefined) {
    throw new Error('useBookmarks must be used within a BookmarkProvider');
  }
  return context;
};

export const BookmarkProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bookmarks, setBookmarks] = useState<Book[]>(() => {
    const savedBookmarks = localStorage.getItem('bookmarks');
    return savedBookmarks ? JSON.parse(savedBookmarks) : [];
  });

  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const addBookmark = (book: Book) => {
    setBookmarks(prev => [...prev, book]);
  };

  const removeBookmark = (id: string) => {
    setBookmarks(prev => prev.filter(book => book.id !== id));
  };

  const isBookmarked = (id: string) => {
    return bookmarks.some(book => book.id === id);
  };

  return (
    <BookmarkContext.Provider value={{ bookmarks, addBookmark, removeBookmark, isBookmarked }}>
      {children}
    </BookmarkContext.Provider>
  );
};