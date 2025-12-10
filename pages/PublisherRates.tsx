
import React from 'react';
import { Globe, DollarSign, CheckCircle } from '../components/Icons';

interface PublisherRatesProps {
  onBack: () => void;
}

const PublisherRates: React.FC<PublisherRatesProps> = ({ onBack }) => {
  const rates = [
    { country: 'Greenland', desktop: 20.00, mobile: 20.00 },
    { country: 'United States', desktop: 12.00, mobile: 12.00 },
    { country: 'Canada', desktop: 10.00, mobile: 10.00 },
    { country: 'United Kingdom', desktop: 8.00, mobile: 8.00 },
    { country: 'Australia', desktop: 8.00, mobile: 8.00 },
    { country: 'Germany', desktop: 6.00, mobile: 6.00 },
    { country: 'India', desktop: 4.00, mobile: 4.00 },
    { country: 'Worldwide Deal (All Countries)', desktop: 2.50, mobile: 2.50 },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-[#00c0ef] mb-4 uppercase tracking-wide">Publisher Rates</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Make money with Moras by shortening and sharing your links. We offer the highest CPM rates in the market with daily payments.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 text-center">
             <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                <DollarSign className="text-green-600 w-6 h-6" />
             </div>
             <h3 className="font-bold mb-2">Minimum Withdrawal</h3>
             <p className="text-sm text-slate-500">Just $5.00 required to request payment.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 text-center">
             <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <Globe className="text-blue-600 w-6 h-6" />
             </div>
             <h3 className="font-bold mb-2">Worldwide Traffic</h3>
             <p className="text-sm text-slate-500">We pay for all legitimate visitors from any country.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 text-center">
             <div className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                <CheckCircle className="text-purple-600 w-6 h-6" />
             </div>
             <h3 className="font-bold mb-2">Daily Payments</h3>
             <p className="text-sm text-slate-500">Fast processing times for all payment methods.</p>
          </div>
        </div>

        {/* Rates Table */}
        <div className="bg-white rounded-lg shadow-lg border border-slate-200 overflow-hidden">
          <div className="p-4 bg-[#00c0ef] text-white font-bold text-lg">
            Earnings per 1000 Views
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 text-sm uppercase">
                  <th className="px-6 py-4 font-bold">Country</th>
                  <th className="px-6 py-4 font-bold text-right">Earnings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {rates.map((rate, index) => (
                  <tr key={index} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-700">{rate.country}</td>
                    <td className="px-6 py-4 text-right font-bold text-green-600">${rate.desktop.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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

export default PublisherRates;
