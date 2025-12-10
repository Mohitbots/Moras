
import React from 'react';
import { Calendar, User, ArrowRight } from '../components/Icons';

interface BlogProps {
  onBack: () => void;
}

const Blog: React.FC<BlogProps> = ({ onBack }) => {
  const posts = [
    {
      id: 1,
      title: 'Moras Payment System Update',
      excerpt: 'We have updated our payment processing to be even faster. Now supporting instant UPI transfers for Indian users.',
      date: 'Oct 24, 2025',
      author: 'Admin'
    },
    {
      id: 2,
      title: 'How to Maximize Your Earnings',
      excerpt: 'Learn the top strategies used by our highest earners to drive traffic and increase CPM rates effectively.',
      date: 'Sep 15, 2025',
      author: 'Support Team'
    },
    {
      id: 3,
      title: 'New Tools for Developers',
      excerpt: 'Check out our improved API documentation and new script generators for mass shrinking links.',
      date: 'Aug 05, 2025',
      author: 'Dev Team'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-[#00c0ef] mb-4 uppercase tracking-wide">Moras Blog</h1>
          <p className="text-slate-600">Latest news, updates and guides from the team.</p>
        </div>

        <div className="grid gap-8">
          {posts.map(post => (
            <div key={post.id} className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                  <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-800 mb-2 hover:text-[#00c0ef] cursor-pointer">
                  {post.title}
                </h2>
                <p className="text-slate-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <button className="text-[#00c0ef] font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
           <button onClick={onBack} className="text-[#00c0ef] hover:underline">
              &larr; Back to Home
           </button>
        </div>

      </div>
    </div>
  );
};

export default Blog;
