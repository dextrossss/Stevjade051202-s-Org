import React from 'react';
import { 
  Building2, 
  Users, 
  ShieldCheck, 
  CreditCard, 
  History, 
  Bell, 
  ChevronRight,
  ChevronLeft,
  ArrowRightLeft,
  Lock,
  Smartphone
} from 'lucide-react';

interface AdminPanelProps {
  onBack: () => void;
  onNavigateToUsers: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ onBack, onNavigateToUsers }) => {
  return (
    <div className="flex flex-col h-full bg-slate-50 overflow-hidden items-center">
      <div className="w-full max-w-2xl bg-white h-full lg:h-[95%] lg:mt-4 flex flex-col shadow-2xl lg:rounded-2xl overflow-hidden border border-slate-100">
        
        {/* Header */}
        <div className="px-8 py-6 flex items-center justify-between border-b border-slate-50 sticky top-0 bg-white z-10">
          <div className="flex items-center gap-4">
            <button onClick={onBack} className="text-slate-400 hover:text-slate-600 transition-colors">
              <ChevronLeft size={24} />
            </button>
            <h1 className="text-xl font-black text-slate-800 tracking-tight">Management</h1>
          </div>
          <div className="bg-emerald-50 text-emerald-500 p-2 rounded-lg">
            <ShieldCheck size={20} />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
          
          {/* Business Profile Summary */}
          <div className="bg-slate-900 rounded-2xl p-6 text-white shadow-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center font-black text-xl">
                EC
              </div>
              <div>
                <h2 className="text-lg font-bold">Easy Cebu</h2>
                <p className="text-slate-400 text-xs">Business ID: #POS-11597</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 bg-white/10 hover:bg-white/20 py-2 rounded-lg text-xs font-bold transition-all">
                EDIT PROFILE
              </button>
              <button className="flex-1 bg-emerald-500 hover:bg-emerald-400 py-2 rounded-lg text-xs font-bold transition-all">
                PREVIEW CATALOG
              </button>
            </div>
          </div>

          {/* Management Sections */}
          <div className="space-y-4">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] px-2">Core Management</h3>
            <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden divide-y divide-slate-50">
              <AdminAction 
                icon={Users} 
                label="Team & Users" 
                subtext="Manage staff accounts and permissions"
                onClick={onNavigateToUsers}
              />
              <AdminAction 
                icon={Smartphone} 
                label="Connected Devices" 
                subtext="6 active sessions found"
              />
              <AdminAction 
                icon={ArrowRightLeft} 
                label="Activity Logs" 
                subtext="View all recent administrative changes"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] px-2">Billing & Security</h3>
            <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden divide-y divide-slate-50">
              <AdminAction 
                icon={CreditCard} 
                label="Subscription" 
                subtext="Next billing: Feb 28, 2026"
                badge="PRO PLAN"
              />
              <AdminAction 
                icon={Lock} 
                label="Security Settings" 
                subtext="Two-factor authentication and passwords"
              />
              <AdminAction 
                icon={Bell} 
                label="Notifications" 
                subtext="Configure store and order alerts"
              />
            </div>
          </div>

          <div className="pt-4 pb-8">
             <button className="w-full text-center text-red-500 text-xs font-bold uppercase tracking-widest hover:underline">
               Delete business account
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const AdminAction: React.FC<{ 
  icon: any, 
  label: string, 
  subtext: string, 
  badge?: string,
  onClick?: () => void 
}> = ({ icon: Icon, label, subtext, badge, onClick }) => (
  <button 
    onClick={onClick}
    className="w-full flex items-center gap-5 p-5 hover:bg-slate-50 transition-colors group text-left"
  >
    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-500 transition-all">
      <Icon size={20} />
    </div>
    <div className="flex-1">
      <div className="flex items-center gap-2">
        <span className="text-sm font-bold text-slate-800">{label}</span>
        {badge && (
          <span className="text-[8px] font-black bg-emerald-100 text-emerald-600 px-1.5 py-0.5 rounded tracking-tighter">
            {badge}
          </span>
        )}
      </div>
      <p className="text-[11px] text-slate-400 font-medium">{subtext}</p>
    </div>
    <ChevronRight size={18} className="text-slate-200 group-hover:text-slate-400 transition-colors" />
  </button>
);
