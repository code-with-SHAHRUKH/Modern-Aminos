
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import CallToAction from "../components/homepage/CallToAction";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const fetchedPosts = await BlogPost.filter({ published: true }, '-created_date', 12);
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div className="bg-primary-dark text-white">
      <div className="relative hero-pattern" style={{backgroundImage: "url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop')"}}>
        <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-shadow-glow">
            Transport Insights
          </h1>
          <p className="mt-6 text-xl text-gray-200 max-w-3xl mx-auto text-shadow-md">
            Your expert resource for shipping tips, industry news, and guides to make your transport experience seamless.
          </p>
        </div>
      </div>
      
      <div className="py-20 bg-secondary-dark">
        <div className="max-w-7xl mx-auto px-4">
          {loading ? (
            <div className="text-center text-xl">Loading posts...</div>
          ) : posts.length === 0 ? (
             <div className="text-center text-xl text-gray-400">No blog posts found.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link to={createPageUrl(`BlogPostPage?slug=${post.slug}`)} key={post.id} className="group block transform transition-transform duration-300 hover:-translate-y-2">
                  <Card className="h-full bg-primary-dark/80 border border-gray-700 rounded-lg overflow-hidden transition-all duration-300 hover:border-accent-cyan hover:shadow-2xl hover:shadow-accent-cyan/20">
                    <div className="aspect-w-16 aspect-h-9 bg-primary-dark">
                      {post.featured_image && <img src={post.featured_image} alt={post.title} className="w-full h-48 object-cover" />}
                    </div>
                    <CardContent className="p-6 flex flex-col flex-grow">
                      <Badge className="mb-2 bg-accent-cyan text-primary-dark font-semibold self-start">{post.category.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</Badge>
                      <h3 className="text-xl font-bold text-white mb-2 flex-grow group-hover:text-accent-cyan transition-colors">{post.title}</h3>
                      <p className="text-gray-400 mb-4 text-sm">{post.excerpt}</p>
                      <div className="flex items-center text-accent-cyan font-semibold mt-auto">
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      <CallToAction />
    </div>
  );
}
