import React, { useState } from 'react';
import { useBlogs } from '../../context/BlogContext';
import { X } from 'lucide-react';

const BlogForm: React.FC = () => {
  const { addBlog } = useBlogs();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [errors, setErrors] = useState<{ title?: string; content?: string }>({});

  const handleTagAdd = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
      }
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const validateForm = () => {
    const newErrors: { title?: string; content?: string } = {};
    
    if (!title.trim()) {
      newErrors.title = 'Title is required';
    }
    
    if (!content.trim()) {
      newErrors.content = 'Content is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      addBlog({
        id: '', // Will be set in context
        title: title.trim(),
        content: content.trim(),
        tags: tags,
        createdAt: '' // Will be set in context
      });
      
      // Reset form
      setTitle('');
      setContent('');
      setTags([]);
      setErrors({});
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
        Share Your Thoughts
      </h3>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border ${
              errors.title ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            } rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-lavender-500`}
            placeholder="Enter a title for your blog"
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-600">{errors.title}</p>
          )}
        </div>
        
        <div className="mb-4">
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={5}
            className={`w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border ${
              errors.content ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            } rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-lavender-500`}
            placeholder="Write your thoughts here..."
          />
          {errors.content && (
            <p className="mt-1 text-sm text-red-600">{errors.content}</p>
          )}
        </div>
        
        <div className="mb-6">
          <label htmlFor="tags" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Tags
          </label>
          <div className="flex flex-wrap gap-2 mb-2">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-lavender-100 text-lavender-800 dark:bg-lavender-900 dark:text-lavender-300"
              >
                {tag}
                <button 
                  type="button" 
                  onClick={() => removeTag(tag)}
                  className="ml-1 text-lavender-600 dark:text-lavender-400 hover:text-lavender-900 dark:hover:text-lavender-200 focus:outline-none"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            ))}
          </div>
          <input
            type="text"
            id="tags"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleTagAdd}
            className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-lavender-500"
            placeholder="Add tags and press Enter"
          />
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            Press Enter to add multiple tags
          </p>
        </div>
        
        <button
          type="submit"
          className="w-full px-4 py-2 bg-lavender-600 hover:bg-lavender-700 text-white font-medium rounded-md shadow-sm transition-colors"
        >
          Publish Blog
        </button>
      </form>
    </div>
  );
};

export default BlogForm;