
import React from 'react';
import { ShortenerSection } from '../components/DashboardWidgets';
import { UserProfile } from '../types';

interface SettingsProps {
  profile: UserProfile;
}

const Settings: React.FC<SettingsProps> = ({ profile }) => {
  return (
    <div className="space-y-6">
      <ShortenerSection pageTitle="Profile" />

      {/* Billing Address Form */}
      <div className="bg-white border border-slate-200 rounded shadow-sm overflow-hidden">
         <div className="px-4 py-3 border-b border-slate-100 bg-white">
            <h3 className="text-xl font-normal text-slate-700">Billing Address</h3>
         </div>
         <div className="p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">First Name</label>
                  <input type="text" defaultValue={profile.name.split(' ')[0]} className="w-full px-4 py-2 border border-slate-300 rounded text-sm outline-none" />
               </div>
               <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Last Name</label>
                  <input type="text" defaultValue={profile.name.split(' ')[1] || 'User'} className="w-full px-4 py-2 border border-slate-300 rounded text-sm outline-none" />
               </div>
            </div>
            <div>
               <label className="block text-sm font-bold text-slate-700 mb-1">Address 1</label>
               <input type="text" defaultValue={profile.address} className="w-full px-4 py-2 border border-slate-300 rounded text-sm outline-none" />
            </div>
            <div>
               <label className="block text-sm font-bold text-slate-700 mb-1">Address 2</label>
               <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded text-sm outline-none" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">City</label>
                  <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded text-sm outline-none" />
               </div>
               <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">State</label>
                  <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded text-sm outline-none" />
               </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Zip</label>
                  <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded text-sm outline-none" />
               </div>
               <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Country</label>
                  <select className="w-full px-4 py-2 border border-slate-300 rounded text-sm outline-none bg-white">
                     <option>United States</option>
                     <option>India</option>
                     <option>United Kingdom</option>
                  </select>
               </div>
            </div>
            <div>
               <label className="block text-sm font-bold text-slate-700 mb-1">Phone Number</label>
               <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded text-sm outline-none" />
            </div>

            <div className="pt-4">
               <button className="bg-[#17a2b8] hover:bg-[#138496] text-white px-6 py-2 rounded text-sm font-medium transition-colors">
                  Submit
               </button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Settings;
