
import React, { useState } from 'react';
import { ArrowRight, LinkIcon, ExternalLink } from './Icons';

interface ShortenerSectionProps {
  onShorten?: (url: string, alias: string, expiration: string) => Promise<any>;
  pageTitle: string;
}

export const ShortenerSection: React.FC<ShortenerSectionProps> = ({ onShorten, pageTitle }) => {
  const [url, setUrl] = useState('');
  const [alias, setAlias] = useState('');
  const [expiration, setExpiration] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onShorten) onShorten(url, alias, expiration);
  };

  return (
    <div className="space-y-4">
      {/* Breadcrumb */}
      <div className="bg-slate-200 px-4 py-2 rounded-sm text-xs font-bold text-slate-600 flex items-center gap-2">
         <span className="opacity-50">Dashboard</span> 
         <span>&gt;</span>
         <span>{pageTitle}</span>
      </div>

      {/* Shortener Form */}
      <div className="bg-white p-4 rounded shadow-sm border border-slate-200">
         <form onSubmit={handleSubmit} className="space-y-3">
            <div className="relative">
               <input 
                  type="url" 
                  placeholder="Your URL Here (https://...)" 
                  className="w-full px-4 py-2 border border-slate-300 rounded outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  required
               />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
               <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Alias</label>
                  <input 
                     type="text" 
                     placeholder="Custom Alias" 
                     className="w-full px-4 py-2 border border-slate-300 rounded outline-none focus:border-blue-500 text-sm"
                     value={alias}
                     onChange={(e) => setAlias(e.target.value)}
                  />
               </div>
               <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Advertising Type</label>
                  <select className="w-full px-4 py-2 border border-slate-300 rounded outline-none focus:border-blue-500 text-sm bg-white text-slate-600">
                     <option value="interstitial">Interstitial Advertisement</option>
                     <option value="banner">Banner Advertisement</option>
                     <option value="no_adult">Non-Adult Content</option>
                  </select>
               </div>
               <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Expiration date</label>
                  <input 
                     type="date" 
                     className="w-full px-4 py-2 border border-slate-300 rounded outline-none focus:border-blue-500 text-sm text-slate-600" 
                     value={expiration}
                     onChange={(e) => setExpiration(e.target.value)}
                  />
               </div>
            </div>
            <div className="pt-1">
               <button className="bg-[#17a2b8] hover:bg-[#138496] text-white font-medium px-6 py-2 rounded text-sm transition-colors shadow-sm active:scale-95">
                  Shorten
               </button>
            </div>
         </form>
      </div>

      {/* Announcement */}
      <div className="bg-slate-100 p-4 rounded border-l-4 border-red-500 text-sm text-slate-700">
         <p>
            <span className="font-bold text-red-600">Important update Guys !! !!</span> We're closing our shortener for a short time. You can remove our links from your sources. But don't worry, pending payments will be cleared this week. We will be back soon with better CPM and a better setup. So don't leave this channel. We will provide the next update here. Join: <a href="https://t.me/Moras_Link" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">https://t.me/Moras_Link</a>
         </p>
      </div>
    </div>
  );
};
