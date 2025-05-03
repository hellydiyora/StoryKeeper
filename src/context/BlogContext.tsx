import React, { createContext, useContext, useState, useEffect } from 'react';
import { BlogPost } from '../types';

interface BlogContextType {
  blogs: BlogPost[];
  addBlog: (blog: BlogPost) => void;
  searchBlogs: (term: string) => BlogPost[];
  filterBlogsByTag: (tag: string) => BlogPost[];
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const useBlogs = () => {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error('useBlogs must be used within a BlogProvider');
  }
  return context;
};

export const BlogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [blogs, setBlogs] = useState<BlogPost[]>(() => {
    const savedBlogs = localStorage.getItem('blogs');
    return savedBlogs ? JSON.parse(savedBlogs) : [];
  });

  useEffect(() => {
    localStorage.setItem('blogs', JSON.stringify(blogs));
  }, [blogs]);

  const addBlog = (blog: BlogPost) => {
    const newBlog = {
      ...blog,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    setBlogs(prev => [newBlog, ...prev]);
  };

  const searchBlogs = (term: string) => {
    if (!term.trim()) return blogs;
    const searchTerm = term.toLowerCase();
    return blogs.filter(
      blog => 
        blog.title.toLowerCase().includes(searchTerm) || 
        blog.content.toLowerCase().includes(searchTerm)
    );
  };

  const filterBlogsByTag = (tag: string) => {
    if (!tag) return blogs;
    return blogs.filter(blog => blog.tags.includes(tag));
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog, searchBlogs, filterBlogsByTag }}>
      {children}
    </BlogContext.Provider>
  );
};