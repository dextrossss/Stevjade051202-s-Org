import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export const OnlineCatalog: React.FC = () => {
  const [isPublished, setIsPublished] = useState(true);

  return (
    <div className="flex flex-col h-full bg-gray-50 overflow-hidden items-center">
      <div className="w-full max-w-2xl bg-white h-full lg:h-auto lg:mt-8 lg:mb-8 flex flex-col shadow-2xl lg:rounded-2xl overflow-hidden border border-gray-100">
        
        {/* Header */}
        <div className="bg-white px-8 py-8 border-b border-gray-100">
          <h1 className="text-xl font-bold text-slate-800 tracking-tight">Online Catalog</h1>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto">
          {/* Publish Section */}
          <div className="px-8 py-6 border-b border-gray-50 flex items-center justify-between hover:bg-gray-50/30 transition-colors">
            <div>
              <h3 className="text-[15px] font-semibold text-slate-800">Publish my catalog</h3>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-sm text-kyte-brightGreen font-medium hover:underline cursor-pointer">
                  easycebu.kyte.site
                </span>
                <span className="text-sm text-gray-400 font-medium hover:text-kyte-brightGreen transition-colors cursor-pointer">edit</span>
              </div>
            </div>
            
            {/* Toggle Switch */}
            <button 
              onClick={() => setIsPublished(!isPublished)}
              className={`w-11 h-6 rounded-full p-1 transition-colors duration-200 ease-in-out relative ${
                isPublished ? 'bg-kyte-brightGreen' : 'bg-gray-200'
              }`}
            >
              <div className={`bg-white w-4 h-4 rounded-full shadow-sm transform transition-transform duration-200 ${
                isPublished ? 'translate-x-5' : 'translate-x-0'
              }`} />
            </button>
          </div>

          {/* Catalog Version Row */}
          <button className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors border-b border-gray-50 group">
            <div className="text-left">
              <h3 className="text-[15px] font-semibold text-slate-800">Catalog version</h3>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-medium">
                Compare and choose the catalog version that best fits your business!
              </p>
            </div>
            <div className="flex items-center gap-3">
               <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest bg-slate-50 px-2 py-0.5 rounded">NEW</span>
               <ChevronRight className="text-slate-300 group-hover:text-kyte-brightGreen transition-colors" size={20} />
            </div>
          </button>

          {/* Grouped Settings List */}
          <div className="divide-y divide-gray-50">
            <SettingRow label="Business Information" />
            <SettingRow label="Identification" />
            <SettingRow label="Display options" />
            <SettingRow label="Order settings" value="ON" valueColor="text-kyte-brightGreen" />
            <SettingRow label="Social Media & Others" />
          </div>

          {/* Action Buttons Section */}
          <div className="p-8 space-y-4">
            <button className="w-full bg-white border border-gray-300 text-slate-600 font-bold py-3.5 rounded-xl text-sm uppercase tracking-widest shadow-sm hover:bg-gray-50 transition-all active:scale-[0.98]">
              Open catalog
            </button>
            <button className="w-full bg-kyte-brightGreen text-white font-bold py-4 rounded-xl text-sm uppercase tracking-widest shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 transition-all active:scale-[0.98]">
              Share catalog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface SettingRowProps {
  label: string;
  value?: string;
  valueColor?: string;
}

const SettingRow: React.FC<SettingRowProps> = ({ label, value, valueColor = "text-gray-400" }) => {
  return (
    <button className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors group">
      <span className="text-[15px] font-semibold text-slate-800">{label}</span>
      <div className="flex items-center gap-3">
        {value && (
          <span className={`text-[11px] font-black uppercase tracking-widest ${valueColor}`}>
            {value}
          </span>
        )}
        <ChevronRight className="text-slate-300 group-hover:text-kyte-brightGreen transition-colors" size={20} />
      </div>
    </button>
  );
};
