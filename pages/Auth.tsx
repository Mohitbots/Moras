
import React, { useState, useEffect } from 'react';
import { User, Lock, Mail, ArrowRight } from '../components/Icons';

interface AuthProps {
  onLogin: () => void;
  initialView?: 'login' | 'register';
}

const Auth: React.FC<AuthProps> = ({ onLogin, initialView = 'login' }) => {
  const [isLogin, setIsLogin] = useState(initialView === 'login');

  useEffect(() => {
    setIsLogin(initialView === 'login');
  }, [initialView]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen bg-[#00c0ef] flex flex-col justify-center items-center p-4 font-sans text-slate-600">
      
      {/* Logo Area */}
      <div className="mb-8 text-center animate-in fade-in zoom-in duration-500">
        <h1 className="text-4xl font-bold text-white tracking-wide uppercase drop-shadow-md">Moras</h1>
        <p className="text-white/80 text-sm font-bold tracking-wider mt-1 uppercase">Shorten Urls and Earn Money</p>
      </div>

      <div className="bg-white rounded shadow-2xl w-full max-w-md overflow-hidden relative animate-in slide-in-from-bottom-4 duration-500">
        {/* Top Accent Line */}
        <div className="h-1 bg-yellow-400 w-full"></div>
        
        <div className="p-8">
          <p className="text-center text-slate-600 mb-6 font-medium">
            {isLogin ? 'Sign in to start your session' : 'Register a new membership'}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="relative group">
                <input 
                  type="text" 
                  className="w-full pl-4 pr-10 py-3 border border-slate-300 rounded focus:border-[#00c0ef] focus:ring-1 focus:ring-[#00c0ef] outline-none transition-all placeholder:text-slate-400 text-sm"
                  placeholder="Full Name"
                  required
                />
                <User className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 group-focus-within:text-[#00c0ef] transition-colors" />
              </div>
            )}
            
            <div className="relative group">
              <input 
                type="text" 
                className="w-full pl-4 pr-10 py-3 border border-slate-300 rounded focus:border-[#00c0ef] focus:ring-1 focus:ring-[#00c0ef] outline-none transition-all placeholder:text-slate-400 text-sm"
                placeholder={isLogin ? "Email or Username" : "Email"}
                required
              />
              <Mail className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 group-focus-within:text-[#00c0ef] transition-colors" />
            </div>

            <div className="relative group">
              <input 
                type="password" 
                className="w-full pl-4 pr-10 py-3 border border-slate-300 rounded focus:border-[#00c0ef] focus:ring-1 focus:ring-[#00c0ef] outline-none transition-all placeholder:text-slate-400 text-sm"
                placeholder="Password"
                required
              />
              <Lock className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 group-focus-within:text-[#00c0ef] transition-colors" />
            </div>

            {!isLogin && (
               <div className="relative group">
                <input 
                  type="password" 
                  className="w-full pl-4 pr-10 py-3 border border-slate-300 rounded focus:border-[#00c0ef] focus:ring-1 focus:ring-[#00c0ef] outline-none transition-all placeholder:text-slate-400 text-sm"
                  placeholder="Retype password"
                  required
                />
                <Lock className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 group-focus-within:text-[#00c0ef] transition-colors" />
              </div>
            )}
            
            {/* Checkbox for Register */}
            {!isLogin && (
               <div className="flex items-center gap-2 text-sm text-slate-500">
                  <input type="checkbox" required className="accent-[#00c0ef] w-4 h-4" />
                  <span>I agree to the <a href="#" className="text-[#00c0ef] hover:underline">terms of use</a></span>
               </div>
            )}

            <div className="pt-2">
               <button 
               type="submit"
               className="w-full bg-[#00c0ef] hover:bg-[#00a8d6] text-white font-bold py-3 rounded shadow-md transition-all active:scale-[0.98] uppercase tracking-wide text-sm flex justify-center items-center gap-2"
               >
               {isLogin ? 'Sign In' : 'Register'}
               </button>
            </div>
          </form>

          <div className="mt-6 text-center border-t border-slate-100 pt-6 space-y-2">
            <div>
               <button 
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-sm text-slate-500 hover:text-[#00c0ef] font-medium transition-colors"
               >
                  {isLogin ? "I forgot my password" : "I already have a membership"}
               </button>
            </div>
            {isLogin && (
               <div>
                  <button 
                  onClick={() => setIsLogin(false)}
                  className="text-sm text-slate-500 hover:text-[#00c0ef] font-medium transition-colors"
                  >
                  Register a new membership
                  </button>
               </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Simple Footer */}
      <div className="mt-12 text-white/70 text-sm font-medium">
         <button onClick={() => window.location.reload()} className="hover:text-white mx-2 transition-colors">Home</button>
      </div>
    </div>
  );
};

export default Auth;
