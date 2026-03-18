import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';
import { format } from 'date-fns';

export default function BlogPostPage() {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const fetchPost = async () => {
      const params = new URLSearchParams(location.search);
      const slug = params.get('slug');
      if (slug) {
        setIsLoading(true);
        const results = await BlogPost.filter({ slug: slug });
        if (results.length > 0) {
          setPost(results[0]);
        }
        setIsLoading(false);
      }
    };
    fetchPost();
  }, [location.search]);

  const categoryColors = {
    auto_transport: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    marine_transport: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    heavy_equipment: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    freight_logistics: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    air_cargo: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
    specialized_transport: "bg-pink-500/20 text-pink-300 border-pink-500/30",
    industry_news: "bg-green-500/20 text-green-300 border-green-500/30",
  };

  if (isLoading) {
    return (
      <div className="bg-primary-dark text-light-gray py-16">
        <div className="max-w-4xl mx-auto px-4 animate-pulse">
            <div className="h-8 bg-gray-700 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-700 rounded w-1/4 mb-8"></div>
            <div className="h-64 bg-gray-700 rounded-lg mb-8"></div>
            <div className="space-y-4">
                <div className="h-4 bg-gray-700 rounded w-full"></div>
                <div className="h-4 bg-gray-700 rounded w-full"></div>
                <div className="h-4 bg-gray-700 rounded w-5/6"></div>
            </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="bg-primary-dark text-light-gray py-16 text-center">
        <h1 className="text-2xl font-bold text-white">Post not found.</h1>
      </div>
    );
  }

  return (
    <div className="bg-primary-dark text-light-gray py-16">
      <div className="max-w-4xl mx-auto px-4">
        <article className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-accent-cyan prose-strong:text-white">
            <header className="mb-8 border-b-2 border-gray-700 pb-8">
                <Badge variant="outline" className={`${categoryColors[post.category]} capitalize mb-4`}>
                    {post.category.replace('_', ' ')}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white !mb-4">{post.title}</h1>
                <div className="flex items-center text-gray-400">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>Published on {format(new Date(post.created_date), 'MMMM d, yyyy')}</span>
                </div>
            </header>
            
            <img src={post.featured_image} alt={post.title} className="w-full rounded-lg mb-8" />
            
            <ReactMarkdown
                components={{
                    h2: ({node, ...props}) => <h2 className="text-3xl font-bold mt-12 mb-4 text-accent-cyan" {...props} />,
                    h3: ({node, ...props}) => <h3 className="text-2xl font-bold mt-8 mb-4 text-white" {...props} />,
                }}
            >
                {post.content}
            </ReactMarkdown>
        </article>
      </div>
    </div>
  );
}