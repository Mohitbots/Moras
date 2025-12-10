
import React from 'react';
import StatCard from '../components/StatCard';
import AnalyticsChart from '../components/AnalyticsChart';
import { ShortenerSection } from '../components/DashboardWidgets';
import { TrendingUp, Megaphone, LinkIcon, Copy, CheckCircle, Clock } from '../components/Icons';
import { DailyStat, LinkData, Announcement } from '../types';

interface DashboardProps {
  stats: DailyStat[];
  announcements: Announcement[];
  onShorten: (url: string, alias: string, expiration: string) => Promise<LinkData>;
  isProcessing: boolean;
  recentLinks: LinkData[];
}

const Dashboard: React.FC<DashboardProps> = ({ stats, announcements, onShorten, recentLinks }) => {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      
      <ShortenerSection onShorten={onShorten} pageTitle="Statistics" />

      {/* Warning Black Box */}
      <div className="bg-black text-white p-4 rounded shadow-sm border-l-4 border-red-600">
         <div className="text-red-500 font-bold mb-1">Warning!</div>
         <p className="font-bold text-lg mb-2">CPM = 2.5$ And 1$ = 80 INR (fixed).</p>
         <div className="text-green-500 font-bold mb-2">Minimum withdrawal $5.00</div>
         <p className="text-sm text-gray-300">
            Contact on this channel for payments related issues.
         </p>
      </div>

      {/* Date Picker Row */}
      <div className="bg-white p-3 rounded shadow-sm border border-slate-200">
         <input type="month" defaultValue={new Date().toISOString().slice(0, 7)} className="w-full text-slate-700 outline-none" />
      </div>

      {/* 4 Colored Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Total Views" 
          value="0" 
          variant="orange"
        />
        <StatCard 
          title="Total Earnings" 
          value="$0.000" 
          variant="blue"
        />
        <StatCard 
          title="Referral Earnings" 
          value="$0.000" 
          variant="green"
        />
        <StatCard 
          title="Average CPM" 
          value="0" 
          variant="red"
        />
      </div>

      {/* Announcements List */}
      <div className="bg-white rounded shadow-sm border border-slate-200 overflow-hidden">
        <div className="px-4 py-3 border-b border-slate-100 flex items-center gap-2">
           <Megaphone className="w-4 h-4 text-slate-500" />
           <h3 className="font-bold text-slate-700">Announcements</h3>
        </div>
        <div className="p-4 space-y-4 text-sm">
           <div>
              <div className="flex justify-between text-slate-500 text-xs mb-1">
                 <span className="font-bold text-slate-800">» About payments & CPM ✅</span>
                 <span>8/12/22, 4:37 PM</span>
              </div>
              <div className="pl-4">
                 <p>1. 2.5$ CPM.</p>
                 <p>2. 1$ = 80 INR (fixed).</p>
              </div>
           </div>
           <div className="border-t border-slate-100 pt-4">
              <div className="flex justify-between text-slate-500 text-xs mb-1">
                 <span className="font-bold text-slate-800">» Warning ⚠️</span>
                 <span>8/12/22, 4:35 PM</span>
              </div>
              <div className="pl-4">
                 <p className="font-bold">MULTIPLE LINKSHORTNER ALLOWED AFTER moras.link.</p>
                 <p className="mt-1 text-slate-600">Self Click, Self Refer, Click Exchange Website Click, Bot Click, Faucet Traffic, VPN, Bot Proxy Traffic Is Not Allowed On Moras.link Payment Will Be Cancelled For That Type Of Traffic.</p>
              </div>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart */}
        <div className="lg:col-span-2 bg-white p-4 rounded shadow-sm border border-slate-200">
          <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-4 h-4 text-slate-500" />
              <h3 className="font-bold text-slate-700">Statistics</h3>
          </div>
          <AnalyticsChart data={stats.map(s => ({ name: s.date.split('-').slice(1).join('-'), clicks: s.views, earnings: s.linkEarnings }))} />
        </div>

        {/* Recent Activity Widget */}
        <div className="bg-white rounded shadow-sm border border-slate-200 overflow-hidden flex flex-col">
           <div className="px-4 py-3 border-b border-slate-100 flex items-center gap-2 bg-slate-50">
              <Clock className="w-4 h-4 text-slate-500" />
              <h3 className="font-bold text-slate-700">Recent Activity</h3>
           </div>
           <div className="flex-1 overflow-y-auto p-0">
              {recentLinks.length === 0 ? (
                 <div className="p-4 text-center text-slate-400 text-sm">No recent activity</div>
              ) : (
                 <div className="divide-y divide-slate-100">
                    {recentLinks.map(link => (
                       <div key={link.id} className="p-3 hover:bg-slate-50 transition-colors">
                          <div className="flex items-center justify-between mb-1">
                             <div className="font-bold text-[#00c0ef] text-sm">{link.slug}</div>
                             <div className="text-xs text-slate-400">{new Date(link.createdAt).toLocaleDateString()}</div>
                          </div>
                          <div className="flex items-center gap-2">
                             <input 
                                readOnly 
                                value={link.shortUrl} 
                                className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded border-none w-full outline-none"
                             />
                             <button 
                                onClick={() => copyToClipboard(link.shortUrl, link.id)}
                                className="text-slate-400 hover:text-[#00c0ef]"
                             >
                                {copiedId === link.id ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                             </button>
                          </div>
                       </div>
                    ))}
                 </div>
              )}
           </div>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200">
              <tr>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Views</th>
                <th className="px-4 py-3">Link Earnings</th>
                <th className="px-4 py-3">Daily CPM</th>
                <th className="px-4 py-3">Referral Earnings</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {stats.map((row, index) => (
                <tr key={index} className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3 text-slate-600">{row.date}</td>
                  <td className="px-4 py-3 font-medium">{row.views}</td>
                  <td className="px-4 py-3 font-medium text-slate-600">${row.linkEarnings.toFixed(3)}</td>
                  <td className="px-4 py-3">{row.dailyCPM}</td>
                  <td className="px-4 py-3 text-slate-600">${row.referralEarnings.toFixed(3)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
