import React, { useState } from 'react';
import BlogForm from '../components/blogs/BlogForm';
import BlogList from '../components/blogs/BlogList';
import { useBlogs } from '../context/BlogContext';
import { Search, Filter, X } from 'lucide-react';

const Blogs: React.FC = () => {
  const { blogs, searchBlogs, filterBlogsByTag } = useBlogs();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTag, setActiveTag] = useState('');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // The actual filtering happens in the rendered component
  };

  const handleTagClick = (tag: string) => {
    setActiveTag(prevTag => prevTag === tag ? '' : tag);
    setSearchTerm('');
  };

  const clearFilters = () => {
    setSearchTerm('');
    setActiveTag('');
  };

  const displayedBlogs = activeTag 
    ? filterBlogsByTag(activeTag) 
    : searchTerm 
    ? searchBlogs(searchTerm) 
    : blogs;

  return (
    <div className="min-h-screen bg-lavender-50 dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Reader's Journal
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Share your thoughts on books and explore what others are reading
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <BlogForm />
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="mb-6">
              <form onSubmit={handleSearch} className="relative">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="block w-full pl-10 pr-10 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 focus:ring-lavender-500 focus:border-lavender-500"
                    placeholder="Search blogs..."
                  />
                  {(searchTerm || activeTag) && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <button
                        type="button"
                        onClick={clearFilters}
                        className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                  )}
                </div>
              </form>
              
              {activeTag && (
                <div className="mt-2 flex items-center">
                  <Filter className="h-4 w-4 text-lavender-600 dark:text-lavender-400 mr-2" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Filtering by tag: 
                  </span>
                  <span className="ml-1 px-2 py-0.5 bg-lavender-100 dark:bg-lavender-900/30 text-lavender-800 dark:text-lavender-300 rounded-full text-xs">
                    {activeTag}
                  </span>
                </div>
              )}
            </div>
            
            <BlogList blogs={displayedBlogs} onTagClick={handleTagClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;