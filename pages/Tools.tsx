
import React from 'react';
import { ShortenerSection } from '../components/DashboardWidgets';

interface ToolsProps {
  apiToken: string;
}

const Tools: React.FC<ToolsProps> = ({ apiToken }) => {
  return (
    <div className="space-y-6">
      <ShortenerSection pageTitle="Developers API" />

      {/* API Token Box */}
      <div className="bg-[#00a65a] p-1 rounded-sm shadow-sm border border-[#00a65a]">
         <div className="bg-[#00a65a] text-white px-4 py-2 font-bold text-lg">
            Your API token:
         </div>
         <div className="bg-white p-4">
            <textarea 
               readOnly 
               className="w-full bg-slate-50 border border-slate-200 p-3 rounded text-sm font-mono text-slate-600 outline-none resize-none"
               rows={2}
               value={apiToken}
            />
         </div>
      </div>

      {/* Documentation Text */}
      <div className="bg-white p-6 rounded shadow-sm border border-slate-200 text-sm text-slate-600 space-y-4 leading-relaxed">
         <p>
            For developers Moras prepared API which returns responses in JSON or TEXT formats.
         </p>
         <p>
            Currently there is one method which can be used to shorten links on behalf of your account.
         </p>
         <p>
            All you have to do is to send a <b>GET</b> request to the following URL:
         </p>
         <code className="block bg-slate-100 p-3 rounded border border-slate-200 text-blue-600">
            https://moras.link/api?api={apiToken}&url=yourdestinationlink.com&alias=CustomAlias
         </code>
         
         <h3 className="font-bold text-slate-800 text-lg pt-4">API Parameters</h3>
         <ul className="list-disc pl-5 space-y-2">
            <li><b>api</b> - your unique API token</li>
            <li><b>url</b> - the URL you want to shorten</li>
            <li><b>alias</b> - (optional) custom alias for your link</li>
            <li><b>format</b> - (optional) "text" or "json" (default: json)</li>
         </ul>
      </div>
    </div>
  );
};

export default Tools;
