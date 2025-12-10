
import React from 'react';
import { 
  BarChart3, LinkIcon, Settings, X, Wallet, Wrench, Users, LifeBuoy, LogOut 
} from './Icons';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen, activeTab, setActiveTab, onLogout }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Statistics', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'links', label: 'Manage Links', icon: <LinkIcon className="w-5 h-5" /> },
    { id: 'withdraw', label: 'Withdraw', icon: <DollarSignIcon className="w-5 h-5" /> }, // Using a custom icon wrapper or existing
    { id: 'tools', label: 'Tools', icon: <Wrench className="w-5 h-5" /> },
    { id: 'referrals', label: 'Referrals', icon: <Users className="w-5 h-5" /> },
    { id: 'settings', label: 'Settings', icon: <Settings className="w-5 h-5" /> },
    { id: 'support', label: 'Support', icon: <LifeBuoy className="w-5 h-5" /> },
  ];

  return (
    <>
      {/* Mobile Overlay - z-40 to sit below sidebar (z-50) but above header (z-10) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container - z-50 to sit on top of everything on mobile */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-[#1e293b] text-slate-300 shadow-xl lg:shadow-none transform transition-transform duration-300 ease-in-out lg:transform-none ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="h-16 flex items-center justify-center bg-[#5e35b1] text-white font-bold text-xl shadow-md border-b border-[#4d2c91]">
             Moras Shortener
          </div>

          {/* User Profile Summary in Sidebar (Optional based on screenshot style, keeping nav clean) */}
          <div className="p-4 hidden lg:block">
             <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Main Menu</div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-2 space-y-1 overflow-y-auto custom-scrollbar pt-2">
            {menuItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => { setActiveTab(item.id); setIsOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-3 transition-all font-medium text-sm border-l-4 rounded-r-md ${
                  activeTab === item.id 
                    ? 'border-[#5e35b1] bg-[#0f172a] text-white shadow-sm' 
                    : 'border-transparent hover:bg-slate-800 hover:text-white'
                }`}
              >
                <span className={`${activeTab === item.id ? 'text-[#00c0ef]' : 'text-slate-400'}`}>
                  {item.icon}
                </span>
                <span className="flex-1 text-left">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-slate-800 bg-[#172033]">
            <button 
              onClick={onLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium text-sm text-red-400 hover:bg-red-500/10 hover:text-red-300"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

// Helper for the dollar sign to avoid import conflicts if any
const DollarSignIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
);

export default Sidebar;
