
import React from 'react';
import { ShortenerSection } from '../components/DashboardWidgets';
import { Copy, CheckCircle, Users } from '../components/Icons';

const Referrals: React.FC = () => {
  const referralLink = "https://moras.link/ref/u1";
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <ShortenerSection pageTitle="Referrals" />

      <div className="bg-white border border-slate-200 rounded shadow-sm p-6 text-center space-y-4">
        <div className="w-16 h-16 bg-[#00c0ef] rounded-full flex items-center justify-center mx-auto text-white">
           <Users className="w-8 h-8" />
        </div>
        <h2 className="text-xl font-bold text-slate-800">Referral Program</h2>
        <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
           The Moras referral program is a great way to spread the word of this great service and to earn even more money with your short links! Refer friends and receive <span className="font-bold text-[#00c0ef]">20%</span> of their earnings for life!
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded shadow-sm p-6">
         <h3 className="font-bold text-slate-700 mb-3">Your Referral Link</h3>
         <div className="flex gap-2">
            <input 
               type="text" 
               readOnly 
               value={referralLink} 
               className="flex-1 bg-slate-50 border border-slate-300 rounded px-4 py-2 text-slate-600 outline-none focus:border-[#00c0ef]"
            />
            <button 
               onClick={handleCopy}
               className={`px-6 py-2 rounded font-bold text-white transition-colors flex items-center gap-2 ${copied ? 'bg-green-500' : 'bg-[#17a2b8] hover:bg-[#138496]'}`}
            >
               {copied ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
               {copied ? 'Copied' : 'Copy'}
            </button>
         </div>
      </div>
    </div>
  );
};

export default Referrals;
