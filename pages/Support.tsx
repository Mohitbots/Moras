
import React from 'react';
import { ShortenerSection } from '../components/DashboardWidgets';
import { Mail, LifeBuoy } from '../components/Icons';

const Support: React.FC = () => {
  return (
    <div className="space-y-6">
      <ShortenerSection pageTitle="Support" />

      <div className="bg-white border border-slate-200 rounded shadow-sm overflow-hidden">
         <div className="px-6 py-4 border-b border-slate-100 bg-slate-50 flex items-center gap-2">
            <LifeBuoy className="w-5 h-5 text-slate-500" />
            <h3 className="font-bold text-slate-700">Contact Us</h3>
         </div>
         <div className="p-6">
            <form className="space-y-4 max-w-2xl">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                     <label className="block text-sm font-bold text-slate-700 mb-1">Name</label>
                     <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded text-sm outline-none focus:border-[#00c0ef]" placeholder="Your Name" />
                  </div>
                  <div>
                     <label className="block text-sm font-bold text-slate-700 mb-1">Email</label>
                     <input type="email" className="w-full px-4 py-2 border border-slate-300 rounded text-sm outline-none focus:border-[#00c0ef]" placeholder="Your Email" />
                  </div>
               </div>
               
               <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Subject</label>
                  <select className="w-full px-4 py-2 border border-slate-300 rounded text-sm outline-none focus:border-[#00c0ef] bg-white text-slate-600">
                     <option>General Question</option>
                     <option>Payment Issue</option>
                     <option>Technical Support</option>
                     <option>Report Violation</option>
                  </select>
               </div>

               <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Message</label>
                  <textarea 
                     className="w-full px-4 py-2 border border-slate-300 rounded text-sm outline-none focus:border-[#00c0ef] h-32 resize-none"
                     placeholder="How can we help you?"
                  ></textarea>
               </div>

               <div className="pt-2">
                  <button type="submit" className="bg-[#17a2b8] hover:bg-[#138496] text-white px-6 py-2 rounded text-sm font-bold shadow-sm transition-colors flex items-center gap-2">
                     <Mail className="w-4 h-4" /> Send Message
                  </button>
               </div>
            </form>
         </div>
      </div>
    </div>
  );
};

export default Support;
