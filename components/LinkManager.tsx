
import React, { useState } from 'react';
import { LinkData } from '../types';
import { ShortenerSection } from './DashboardWidgets';
import { 
  Copy, Edit, EyeOff, BarChart3, Calendar, Globe, CheckCircle
} from './Icons';

interface LinkManagerProps {
  links: LinkData[];
  setLinks: React.Dispatch<React.SetStateAction<LinkData[]>>;
}

const LinkManager: React.FC<LinkManagerProps> = ({ links, setLinks }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  
  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      <ShortenerSection pageTitle="Manage Links" />

      {/* Filter Section */}
      <div className="bg-white p-4 rounded shadow-sm border border-slate-200 space-y-3">
         <div className="grid grid-cols-1 md:grid-cols-1 gap-3">
            <input type="text" placeholder="Search Alias" className="w-full px-3 py-2 border border-slate-300 rounded text-sm outline-none focus:border-blue-500" />
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <select className="w-full px-3 py-2 border border-slate-300 rounded text-sm outline-none bg-white text-slate-500 focus:border-blue-500">
               <option>All Advertising Types</option>
               <option>Interstitial</option>
               <option>Banner</option>
            </select>
            <input type="text" placeholder="Filter by Title, Desc. or URL" className="w-full px-3 py-2 border border-slate-300 rounded text-sm outline-none focus:border-blue-500" />
         </div>
         <div className="flex gap-3 pt-1">
            <button className="px-5 py-2 bg-slate-100 border border-slate-200 text-slate-600 rounded text-sm font-medium hover:bg-slate-200 transition-colors">Filter</button>
            <button className="px-5 py-2 text-blue-500 text-sm font-medium hover:text-blue-700 transition-colors">Reset</button>
         </div>
      </div>

      {/* Links List as Cards */}
      <div className="space-y-4">
        {links.length === 0 ? (
           <div className="text-center py-12 bg-white rounded border border-slate-200 border-dashed">
             <div className="text-slate-300 mb-2">
               <LinkIconWrapper className="w-12 h-12 mx-auto" />
             </div>
             <p className="text-slate-500">No links found. Create one above!</p>
           </div>
        ) : (
           links.map((link) => (
             <div key={link.id} className="bg-white p-4 rounded shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3 mb-3">
                   <div className="mt-1 bg-blue-50 p-2 rounded text-blue-500">
                      <LinkIconWrapper className="w-5 h-5" />
                   </div>
                   <div className="flex-1 min-w-0">
                      <h3 className="text-blue-500 font-medium text-lg truncate hover:underline cursor-pointer">{link.slug}</h3>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-xs text-slate-500">
                         <span className="flex items-center gap-1"><BarChart3 className="w-3 h-3" /> {link.clicks} Visits</span>
                         <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {new Date(link.createdAt).toLocaleDateString()}</span>
                         <span className="hidden sm:flex items-center gap-1 text-blue-400 font-bold">TELEGRAM.ME</span>
                         <span className="hidden sm:inline">Created on: API</span>
                      </div>
                      <div className="text-xs text-slate-400 mt-1 truncate max-w-md">{link.originalUrl}</div>
                   </div>
                </div>

                {/* URL Input Box */}
                <div className="bg-slate-50 border border-slate-200 rounded flex items-center p-1 mb-3 group focus-within:ring-1 focus-within:ring-blue-300">
                   <input 
                      readOnly 
                      value={link.shortUrl} 
                      className="bg-transparent flex-1 px-3 py-1 text-sm text-slate-600 outline-none w-full"
                      onClick={(e) => e.currentTarget.select()}
                   />
                   <button 
                      onClick={() => copyToClipboard(link.shortUrl, link.id)}
                      className={`p-1.5 rounded transition-all flex items-center gap-1 px-2 ${copiedId === link.id ? 'bg-green-100 text-green-600' : 'hover:bg-slate-200 text-slate-500'}`}
                      title="Copy to clipboard"
                   >
                      {copiedId === link.id ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                   </button>
                </div>

                {/* Actions */}
                <div className="flex justify-end gap-2 border-t border-slate-100 pt-3 mt-2">
                   <button className="px-3 py-1.5 bg-[#17a2b8] text-white text-xs rounded font-medium hover:bg-[#138496] flex items-center gap-1 transition-colors">
                      <Edit className="w-3 h-3" /> Edit
                   </button>
                   <button className="px-3 py-1.5 bg-[#e74c3c] text-white text-xs rounded font-medium hover:bg-[#c0392b] flex items-center gap-1 transition-colors">
                      <EyeOff className="w-3 h-3" /> Hide
                   </button>
                </div>
             </div>
           ))
        )}
      </div>
    </div>
  );
};

const LinkIconWrapper = ({className}: {className?: string}) => (
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
);

export default LinkManager;
