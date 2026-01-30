import React, { useState } from 'react';
import { User, Lock, ShoppingCart, ArrowUp, ShieldCheck, Users } from 'lucide-react';

interface LoginProps {
  onLogin: (role: 'admin' | 'staff') => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'admin' | 'staff'>('admin');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(role);
  };

  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
        <svg viewBox="0 0 1440 320" className="absolute top-0 w-full">
          <path fill="#10b981" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,213.3C960,224,1056,192,1152,165.3C1248,139,1344,117,1392,106.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>

      <div className="w-full max-w-sm flex flex-col items-center z-10">
        <div className="mb-10 relative">
          <ShoppingCart size={70} className="text-slate-800" strokeWidth={1.5} />
          <div className="absolute top-[16px] left-1/2 -translate-x-1/2">
            <ArrowUp size={20} className="text-slate-800" strokeWidth={3} />
          </div>
        </div>

        <h2 className="text-xl font-black text-slate-800 tracking-tight mb-8">EASY CEBU POS</h2>

        {/* Role Selector */}
        <div className="w-full flex bg-slate-50 p-1.5 rounded-xl border border-slate-100 mb-6">
          <button 
            type="button"
            onClick={() => setRole('admin')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-xs font-black transition-all ${
              role === 'admin' ? 'bg-white text-emerald-500 shadow-sm' : 'text-slate-400'
            }`}
          >
            <ShieldCheck size={16} />
            ADMIN
          </button>
          <button 
            type="button"
            onClick={() => setRole('staff')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-xs font-black transition-all ${
              role === 'staff' ? 'bg-white text-emerald-500 shadow-sm' : 'text-slate-400'
            }`}
          >
            <Users size={16} />
            STAFF
          </button>
        </div>

        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <User size={18} />
            </div>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="USERNAME"
              className="w-full bg-white border-2 border-slate-100 rounded-lg py-3.5 pl-11 pr-4 text-sm font-bold tracking-widest text-slate-800 outline-none focus:border-kyte-brightGreen transition-all"
            />
          </div>

          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <Lock size={18} />
            </div>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="PASSWORD"
              className="w-full bg-white border-2 border-slate-100 rounded-lg py-3.5 pl-11 pr-4 text-sm font-bold tracking-widest text-slate-800 outline-none focus:border-kyte-brightGreen transition-all"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-kyte-brightGreen hover:bg-emerald-400 text-white font-black py-4 rounded-lg text-sm uppercase tracking-[0.2em] shadow-lg shadow-emerald-500/20 mt-4 transition-all active:scale-95"
          >
            LOGIN AS {role.toUpperCase()}
          </button>
        </form>

        <p className="mt-8 text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] text-center max-w-[200px] leading-relaxed">
          Secure access to your business dashboard
        </p>
      </div>
    </div>
  );
};
