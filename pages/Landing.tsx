
import React, { useState } from 'react';
import { 
  Menu, X, ArrowRight, Cloud, Lock, LinkIcon, Plus, FlaskConical, DollarSign 
} from '../components/Icons';

interface LandingProps {
  onLoginClick: () => void;
  onRegisterClick: () => void;
  onNavigate: (view: 'home' | 'rates' | 'blog') => void;
}

const Landing: React.FC<LandingProps> = ({ onLoginClick, onRegisterClick, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [url, setUrl] = useState('');

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to register because user needs account to earn
    onRegisterClick();
  };

  const handleLinkClick = (e: React.MouseEvent, action: () => void) => {
    e.preventDefault();
    setIsMenuOpen(false);
    action();
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      
      {/* Navigation Bar */}
      <nav className={`absolute top-0 left-0 right-0 z-50 p-4 transition-colors duration-300 ${isMenuOpen ? 'bg-[#00c0ef]' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo */}
          <div 
            className="text-white font-bold text-xl tracking-wide uppercase cursor-pointer select-none"
            onClick={() => onNavigate('home')}
          >
            Moras
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-white text-sm font-bold uppercase tracking-wider">
            <button onClick={() => onNavigate('home')} className="hover:text-slate-100 transition-colors">Home</button>
            <button onClick={() => onNavigate('rates')} className="hover:text-slate-100 transition-colors">Publisher Rates</button>
            <button onClick={() => onNavigate('blog')} className="hover:text-slate-100 transition-colors">Blog</button>
            <div className="h-4 w-px bg-white/40"></div>
            <button onClick={onLoginClick} className="hover:text-slate-100 transition-colors">Login</button>
            <button 
              onClick={onRegisterClick} 
              className="bg-white text-[#00c0ef] px-5 py-2 rounded shadow-sm hover:bg-slate-100 transition-transform active:scale-95"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden bg-white text-[#00c0ef] p-2 rounded hover:bg-slate-100 transition-colors shadow-sm"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile/Overlay Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-[#00c0ef] text-white py-6 px-4 shadow-xl min-h-screen z-50 animate-in slide-in-from-top-4 duration-200 md:hidden">
            <div className="flex flex-col space-y-6 text-sm font-bold tracking-wider uppercase pt-4 items-center">
              <button onClick={(e) => handleLinkClick(e, () => onNavigate('home'))} className="hover:text-slate-200 w-full text-center py-2">Home</button>
              <button onClick={(e) => handleLinkClick(e, () => onNavigate('rates'))} className="hover:text-slate-200 w-full text-center py-2">Publisher Rates</button>
              <button onClick={(e) => handleLinkClick(e, () => onNavigate('blog'))} className="hover:text-slate-200 w-full text-center py-2">Blog</button>
              <div className="border-t border-white/20 w-1/2 pt-2 mt-2"></div>
              <button onClick={(e) => handleLinkClick(e, onLoginClick)} className="hover:text-slate-200 w-full text-center py-2">Login</button>
              <button 
                onClick={(e) => handleLinkClick(e, onRegisterClick)} 
                className="bg-white text-[#00c0ef] px-8 py-3 rounded-full shadow hover:bg-slate-50 w-3/4 text-center mt-2"
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="bg-[#00c0ef] pt-32 pb-0 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center text-white relative z-10 pb-40">
          
          <div className="text-sm font-bold tracking-widest uppercase mb-4 opacity-90">Shorten Urls and</div>
          <h1 className="text-4xl md:text-7xl font-extrabold mb-12 drop-shadow-md leading-tight">
            EARN MONEY
          </h1>

          {/* URL Input Box */}
          <form onSubmit={handleHeroSubmit} className="max-w-2xl mx-auto relative group">
            <input 
              type="text" 
              placeholder="Your URL Here" 
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full h-16 pl-8 pr-16 rounded-full text-slate-700 outline-none shadow-2xl focus:ring-4 focus:ring-white/30 transition-all placeholder:text-slate-400 text-lg"
            />
            <button type="submit" className="absolute right-2 top-2 h-12 w-12 bg-[#8bc34a] hover:bg-[#7cb342] rounded-full flex items-center justify-center text-white transition-colors shadow-md group-hover:scale-105 cursor-pointer">
              <ArrowRight className="w-6 h-6" />
            </button>
          </form>

        </div>

        {/* Cloud Divider - SVG Wave */}
        <div className="absolute bottom-0 left-0 right-0 w-full leading-none">
          <svg className="relative block w-[calc(100%+1.3px)] h-[120px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#ffffff" opacity=".25"></path>
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#ffffff" opacity=".5"></path>
              <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#ffffff"></path>
          </svg>
        </div>
      </div>

      {/* Feature Steps */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-16 md:space-y-0 md:space-x-12">
            
            {/* Step 1: Create Account */}
            <div className="text-center group w-64">
              <div className="relative w-32 h-32 mx-auto mb-6 flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
                 <Cloud className="w-32 h-32 text-slate-300 absolute stroke-[1.5]" />
                 <div className="relative z-10 bg-[#8bc34a] p-3 rounded-xl border-2 border-slate-600 shadow-lg">
                    <Lock className="w-8 h-8 text-white stroke-[2.5]" />
                 </div>
              </div>
              <h2 className="text-[#00c0ef] text-lg font-bold uppercase tracking-wide">
                Create an Account
              </h2>
            </div>

            {/* Step 2: Shorten Link */}
            <div className="text-center group w-64">
               <div className="relative w-32 h-32 mx-auto mb-6 flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
                  <div className="bg-[#b2ebf2] rounded-full w-24 h-24 flex items-center justify-center relative shadow-md">
                     <Plus className="absolute -left-2 top-8 text-slate-400 w-6 h-6 stroke-[3]" />
                     <div className="transform -rotate-45">
                        <LinkIcon className="w-10 h-10 text-[#0097a7] stroke-[2.5]" />
                     </div>
                     <Plus className="absolute -right-2 top-8 text-slate-400 w-6 h-6 stroke-[3]" />
                  </div>
               </div>
               <h2 className="text-[#00c0ef] text-lg font-bold uppercase tracking-wide">
                  Shorten Your Link
               </h2>
            </div>

            {/* Step 3: Earn Money */}
            <div className="text-center group w-64">
               <div className="relative w-32 h-32 mx-auto mb-6 flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
                  <div className="relative">
                     {/* Flask */}
                     <FlaskConical className="w-24 h-24 text-slate-700 stroke-[1.5]" />
                     {/* Liquid in flask (visualized by color if we could, but using icon overlay) */}
                     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-3">
                        <DollarSign className="w-6 h-6 text-slate-700 opacity-20" />
                     </div>
                     {/* Coin overlay */}
                     <div className="absolute -bottom-1 -right-1 bg-[#fdd835] rounded-full p-2 border-2 border-slate-700 shadow-lg">
                        <DollarSign className="w-6 h-6 text-slate-800 stroke-[3]" />
                     </div>
                  </div>
               </div>
               <h2 className="text-[#00c0ef] text-lg font-bold uppercase tracking-wide">
                  Earn Money
               </h2>
            </div>

          </div>
        </div>
      </div>

      <footer className="bg-[#f8f9fa] py-8 text-center text-slate-500 text-sm border-t border-slate-200">
         <p className="font-medium">Copyright &copy; 2025 <span className="text-[#00c0ef]">Moras</span>. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Landing;
