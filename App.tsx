
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Auth from './pages/Auth';
import Landing from './pages/Landing';
import Withdraw from './pages/Withdraw';
import Tools from './pages/Tools';
import Settings from './pages/Settings';
import LinkManager from './components/LinkManager';
import PublisherRates from './pages/PublisherRates';
import Blog from './pages/Blog';
import Referrals from './pages/Referrals';
import Support from './pages/Support';
import { Menu, Users, LifeBuoy, LogOut, User, Settings as SettingsIcon } from './components/Icons';
import { LinkData, DailyStat, Announcement, UserProfile, Transaction } from './types';

// MOCK DATA
const MOCK_STATS: DailyStat[] = [
  { date: '2023-10-24', views: 0, linkEarnings: 0, dailyCPM: 0, referralEarnings: 0 },
  { date: '2023-10-25', views: 0, linkEarnings: 0, dailyCPM: 0, referralEarnings: 0 },
  { date: '2023-10-26', views: 0, linkEarnings: 0, dailyCPM: 0, referralEarnings: 0 },
];

const MOCK_ANNOUNCEMENTS: Announcement[] = [
  { id: '1', type: 'info', message: 'Welcome to Moras Shortener', date: '2023-10-28' }
];

const MOCK_USER: UserProfile = {
  id: 'u1',
  name: 'Pankaj Sahu',
  email: 'alex@example.com',
  address: 'Kekri',
  country: 'India',
  paymentMethod: 'paypal',
  paymentAccount: 'alex@example.com',
  apiToken: 'ea2eb5063b95705eaf54d154c005742f7c7a1a15'
};

const MOCK_TRANSACTIONS: Transaction[] = [];

export default function App() {
  // Auth State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [authView, setAuthView] = useState<'login' | 'register'>('login');
  
  // Public Pages State
  const [publicView, setPublicView] = useState<'home' | 'rates' | 'blog'>('home');
  
  // Dashboard State
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  
  // Data State
  const [links, setLinks] = useState<LinkData[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    // Initial Load
    const saved = localStorage.getItem('moras_links');
    if (saved) setLinks(JSON.parse(saved));
    else {
      // Add sample links for the UI
      setLinks([
         {id: '1', originalUrl: 'https://example.com', shortUrl: 'https://moras.link/SJSeJ', slug: 'SJSeJ', createdAt: new Date().toISOString(), clicks: 0, earnings: 0, status: 'active'},
         {id: '2', originalUrl: 'https://google.com', shortUrl: 'https://moras.link/dXbm', slug: 'dXbm', createdAt: new Date().toISOString(), clicks: 0, earnings: 0, status: 'active'},
         {id: '3', originalUrl: 'https://youtube.com', shortUrl: 'https://moras.link/k36LQXG6', slug: 'k36LQXG6', createdAt: new Date().toISOString(), clicks: 0, earnings: 0, status: 'active'},
      ]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('moras_links', JSON.stringify(links));
  }, [links]);

  const handleShorten = async (url: string, alias: string, expiration: string): Promise<LinkData> => {
    setIsProcessing(true);
    await new Promise(resolve => setTimeout(resolve, 800)); // Mock delay
    
    const slug = alias.trim() || Math.random().toString(36).substring(2, 8);
    const newLink: LinkData = {
      id: Math.random().toString(36).substring(2, 11),
      originalUrl: url,
      shortUrl: `https://moras.link/${slug}`,
      slug,
      createdAt: new Date().toISOString(),
      expirationDate: expiration,
      clicks: 0,
      earnings: 0,
      status: 'active'
    };
    
    setLinks(prev => [newLink, ...prev]);
    setIsProcessing(false);
    return newLink;
  };

  // ----------------------------------------------------------------------
  // VIEW ROUTING
  // ----------------------------------------------------------------------

  // 1. Not Logged In
  if (!isLoggedIn) {
    if (showAuth) {
      return (
        <Auth 
          onLogin={() => {
             setIsLoggedIn(true);
             setShowAuth(false);
          }} 
          initialView={authView} 
        />
      );
    }
    
    if (publicView === 'rates') {
      return <PublisherRates onBack={() => setPublicView('home')} />;
    }
    
    if (publicView === 'blog') {
      return <Blog onBack={() => setPublicView('home')} />;
    }

    return (
      <Landing 
        onLoginClick={() => { setAuthView('login'); setShowAuth(true); }} 
        onRegisterClick={() => { setAuthView('register'); setShowAuth(true); }}
        onNavigate={(view) => setPublicView(view)}
      />
    );
  }

  // 2. Logged In (Dashboard)
  return (
    <div className="flex h-screen bg-slate-100 font-sans text-slate-900">
      
      <Sidebar 
        isOpen={sidebarOpen} 
        setIsOpen={setSidebarOpen} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        onLogout={() => {
           setIsLoggedIn(false);
           setShowAuth(false);
        }}
      />

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {/* Header */}
        <header className="bg-[#5e35b1] h-16 flex items-center justify-between px-4 sticky top-0 z-10 shadow-md">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-white/80 hover:text-white">
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-medium text-white hidden md:block">
              Moras Shortener
            </h1>
          </div>
          
          <div className="flex items-center gap-4">
             <div className="text-white text-sm font-bold flex items-center gap-2">
                <span>$0.000</span>
             </div>

             {/* Profile Circle with Dropdown */}
             <div className="relative group">
                <button 
                  onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                  className="w-8 h-8 rounded-full bg-slate-400 flex items-center justify-center text-white font-bold border-2 border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                   Ps
                </button>
                
                {isProfileDropdownOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-10" 
                      onClick={() => setIsProfileDropdownOpen(false)}
                    ></div>
                    <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-20 border border-slate-100 text-slate-700 animate-in fade-in zoom-in-95 duration-100">
                       <div className="px-4 py-2 border-b border-slate-100 mb-1">
                          <p className="font-bold text-sm">Pankaj Sahu</p>
                          <p className="text-xs text-slate-400">Member since 2025</p>
                       </div>
                       <button 
                          onClick={() => {
                             setActiveTab('settings');
                             setIsProfileDropdownOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 flex items-center gap-2"
                       >
                          <User className="w-4 h-4" /> Profile
                       </button>
                       <button 
                          onClick={() => {
                             setActiveTab('settings');
                             setIsProfileDropdownOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 flex items-center gap-2"
                       >
                          <SettingsIcon className="w-4 h-4" /> Settings
                       </button>
                       <div className="border-t border-slate-100 my-1"></div>
                       <button 
                          onClick={() => {
                             setIsLoggedIn(false);
                             setShowAuth(false);
                             setIsProfileDropdownOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
                       >
                          <LogOut className="w-4 h-4" /> Logout
                       </button>
                    </div>
                  </>
                )}
             </div>
          </div>
        </header>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 scroll-smooth bg-slate-100">
          <div className="max-w-6xl mx-auto">
            {activeTab === 'dashboard' && (
              <Dashboard 
                stats={MOCK_STATS} 
                announcements={MOCK_ANNOUNCEMENTS}
                onShorten={handleShorten}
                isProcessing={isProcessing}
                recentLinks={links.slice(0, 5)}
              />
            )}

            {activeTab === 'links' && (
              <LinkManager links={links} setLinks={setLinks} />
            )}

            {activeTab === 'withdraw' && (
              <Withdraw balance={0.000} transactions={MOCK_TRANSACTIONS} />
            )}

            {activeTab === 'tools' && (
              <Tools apiToken={MOCK_USER.apiToken} />
            )}

            {activeTab === 'settings' && (
              <Settings profile={MOCK_USER} />
            )}

            {activeTab === 'referrals' && (
               <Referrals />
            )}

            {activeTab === 'support' && (
               <Support />
            )}
            
            <footer className="mt-12 text-center text-xs text-slate-500 pb-4">
               Copyright © Moras Shortener 2025
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
}
