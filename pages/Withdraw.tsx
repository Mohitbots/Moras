
import React from 'react';
import StatCard from '../components/StatCard';
import { ShortenerSection } from '../components/DashboardWidgets';
import { Transaction } from '../types';

interface WithdrawProps {
  balance: number;
  transactions: Transaction[];
}

const Withdraw: React.FC<WithdrawProps> = ({ balance, transactions }) => {
  return (
    <div className="space-y-6">
      
      <ShortenerSection pageTitle="Withdraw" />

      {/* 3 Colored Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard 
          title="Available Balance" 
          value="$0.000" 
          variant="blue"
        />
        <StatCard 
          title="Pending Withdrawn" 
          value="$36.492" 
          variant="red"
        />
        <StatCard 
          title="Total Withdraw" 
          value="$1,645.154" 
          variant="green"
        />
      </div>

      {/* Withdraw Button */}
      <div className="flex justify-center py-4 bg-white rounded border border-slate-200 shadow-sm">
         <button className="bg-[#27ae60] hover:bg-[#219150] text-white font-medium px-8 py-2 rounded shadow transition-colors">
            Withdraw
         </button>
      </div>

      {/* Red Warning Box */}
      <div className="bg-[#ff4444] text-white p-4 rounded shadow-sm relative">
         <button className="absolute top-2 right-2 text-white/80 hover:text-white">×</button>
         <h3 className="font-bold mb-1">Warning! Please Enter Traffic source detailes (With Link)</h3>
         <p className="text-sm opacity-90">
            also in Payment detailes box before making a withdrawal. Otherwise, Withdraw Returned.
         </p>
      </div>

      {/* Info Text */}
      <div className="text-slate-600 text-sm leading-relaxed p-4 bg-white border border-slate-200 rounded">
         <p className="mb-2">
            When your account reaches the minimum amount or more, you may request your earnings by clicking the above button. The payment is then sent to your withdraw account during business days no longer than 1 days after requesting.
         </p>
         <p>
            Please do not contact us regarding payments before due dates.
         </p>
      </div>

      {/* Withdrawal Method Table (From Screenshot 6) */}
      <div className="bg-white border border-slate-200 rounded overflow-hidden">
         <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
               <tr>
                  <th className="px-4 py-3">Withdraw Method</th>
                  <th className="px-4 py-3">Minimum Withdrawal Amount</th>
               </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
               <tr><td className="px-4 py-3">Bank Transfer</td><td className="px-4 py-3">$10.000</td></tr>
               <tr><td className="px-4 py-3">Paytm</td><td className="px-4 py-3">$2.000</td></tr>
               <tr><td className="px-4 py-3">UPI ID</td><td className="px-4 py-3">$2.000</td></tr>
               <tr><td className="px-4 py-3">Phone Pay</td><td className="px-4 py-3">$5.000</td></tr>
               <tr><td className="px-4 py-3">Gpay</td><td className="px-4 py-3">$5.000</td></tr>
            </tbody>
         </table>
      </div>

      {/* Withdrawal Account Form (From Screenshot 6) */}
      <div className="bg-white border border-slate-200 rounded p-4">
         <label className="block text-sm font-bold text-slate-700 mb-2">Withdrawal Account</label>
         <textarea 
            className="w-full border border-slate-300 rounded p-3 text-sm h-32 focus:border-blue-500 outline-none"
            defaultValue={`UPI - Pankajpandiyar@ybl\n\nDetails of my Bank account :\nName- Pankaj Sahu\nAccount Number- 00000041206018793`}
         />
         
         <div className="bg-red-500 text-white p-3 rounded mt-4 text-sm relative">
             <button className="absolute top-1 right-2 text-white/80">×</button>
             Warning! Please Enter Traffic source detailes (With Link) also in Payment detailes box before making a withdrawal. Otherwise, Withdraw Returned.
         </div>

         <p className="text-xs text-slate-500 mt-4 space-y-1">
            - For bank transfer add your account holder name, Bank Name, City/Town, Country, Account number, SWIFT, IBAN and Account currency<br/>
            Add mobile number.<br/>
            Add upi I'd.<br/>
            Add phone pay number or upi.<br/>
            Add gpay number or upi.
         </p>

         <button className="mt-4 bg-[#17a2b8] text-white px-6 py-2 rounded text-sm font-medium">Submit</button>
      </div>

    </div>
  );
};

export default Withdraw;
