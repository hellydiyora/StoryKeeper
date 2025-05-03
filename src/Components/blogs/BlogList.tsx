import React from 'react';
import { BlogPost } from '../../types';
import { Calendar, Tag } from 'lucide-react';

interface BlogListProps {
  blogs: BlogPost[];
  onTagClick: (tag: string) => void;
}

const BlogList: React.FC<BlogListProps> = ({ blogs, onTagClick }) => {
  if (blogs.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-400">
          No blogs found. Be the first to share your thoughts!
        </p>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  return (
    <div className="space-y-8">
      {blogs.map((blog) => (
        <article 
          key={blog.id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
        >
          <div className="p-6">
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-3">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{formatDate(blog.createdAt)}</span>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {blog.title}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
              {blog.content}
            </p>
            
            {blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <button
                    key={index}
                    onClick={() => onTagClick(tag)}
                    className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-lavender-50 text-lavender-700 dark:bg-lavender-900/30 dark:text-lavender-300 hover:bg-lavender-100 dark:hover:bg-lavender-900/50 transition-colors"
                  >
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </button>
                ))}
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  );
};

export default BlogList;