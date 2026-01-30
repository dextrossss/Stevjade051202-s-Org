import React from 'react';
import { 
  Settings as SettingsIcon, 
  ChevronRight, 
  Store, 
  LayoutGrid, 
  ShoppingBag, 
  FileText, 
  CreditCard, 
  Percent, 
  Truck, 
  Upload, 
  Puzzle 
} from 'lucide-react';

interface SettingRowProps {
  icon: any;
  label: string;
  subtext?: string;
  badge?: string;
}

const SettingRow: React.FC<SettingRowProps> = ({ icon: Icon, label, subtext, badge }) => (
  <button className="w-full flex items-center py-5 px-6 border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors group">
    <div className="mr-5 text-slate-500 group-hover:text-emerald-500 transition-colors">
      <Icon size={22} strokeWidth={1.5} />
    </div>
    <div className="flex-1 text-left flex flex-col">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-slate-700">{label}</span>
        {badge && (
          <span className="bg-emerald-400 text-white text-[9px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider">
            {badge}
          </span>
        )}
      </div>
      {subtext && (
        <span className="text-[11px] text-slate-400 font-medium mt-0.5">{subtext}</span>
      )}
    </div>
    <ChevronRight className="text-slate-300 group-hover:text-slate-400 transition-colors" size={18} />
  </button>
);

export const Settings: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-slate-100/50 overflow-hidden items-center">
      <div className="w-full max-w-2xl bg-white h-full lg:h-auto lg:mt-8 lg:mb-8 flex flex-col shadow-2xl lg:rounded-2xl overflow-hidden border border-slate-100">
        
        {/* Header */}
        <div className="px-8 py-8 border-b border-slate-50">
          <h1 className="text-xl font-bold text-slate-800 tracking-tight">Settings</h1>
        </div>

        {/* Settings List */}
        <div className="flex-1 overflow-y-auto">
          <SettingRow 
            icon={SettingsIcon} 
            label="General" 
          />
          <SettingRow 
            icon={Store} 
            label="Business Information" 
          />
          <SettingRow 
            icon={LayoutGrid} 
            label="Items" 
            badge="NEW" 
            subtext="Product categories and variations" 
          />
          <SettingRow 
            icon={ShoppingBag} 
            label="Online Catalog" 
          />
          <SettingRow 
            icon={FileText} 
            label="My Receipt" 
          />
          <SettingRow 
            icon={CreditCard} 
            label="Payment options" 
          />
          <SettingRow 
            icon={Percent} 
            label="Orders and Sales" 
          />
          <SettingRow 
            icon={Truck} 
            label="Delivery rates" 
          />
          <SettingRow 
            icon={Upload} 
            label="Export Reports" 
          />
          <SettingRow 
            icon={Puzzle} 
            label="Integrate with partners" 
            subtext="Instagram, Facebook, Google Shopping and more" 
          />
        </div>
      </div>
    </div>
  );
};