import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { BookmarkProvider } from './context/BookmarkContext';
import { BlogProvider } from './context/BlogContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import Router from './Router';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-lavender-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-serif italic text-lavender-700 dark:text-lavender-300">
            Story Keeper
          </h1>
          <div className="mt-4 flex space-x-2 justify-center">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-full bg-lavender-300 dark:bg-lavender-500 animate-bounce"
                style={{ animationDelay: `${i * 0.15}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <ThemeProvider>
        <BookmarkProvider>
          <BlogProvider>
            <div className="min-h-screen bg-lavender-50 dark:bg-gray-900 flex flex-col">
              <Navbar />
              <main className="flex-grow">
                <Router />
              </main>
              <ScrollToTop />
              <Footer />
            </div>
          </BlogProvider>
        </BookmarkProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;