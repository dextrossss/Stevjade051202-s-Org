import React from 'react';
import { MENU_ITEMS } from '../constants';
import { ArrowLeft, ChevronRight } from 'lucide-react';

interface SidebarProps {
  activeView: string;
  onNavigate: (view: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeView, onNavigate }) => {
  return (
    <div className="flex flex-col h-full w-72 bg-kyte-dark text-gray-300 flex-shrink-0">
      {/* Header Section */}
      <div className="p-4 border-b border-gray-700/50">
        <button className="text-gray-400 hover:text-white mb-4">
          <ArrowLeft size={20} />
        </button>
        
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-white font-bold text-lg tracking-wide">EASY CEBU</h2>
            <p className="text-xs text-gray-400">Easy Cebu</p>
          </div>
          <button className="border border-kyte-brightGreen text-kyte-brightGreen text-xs font-bold px-3 py-1 rounded-full hover:bg-kyte-brightGreen/10 transition-colors">
            MANAGE
          </button>
        </div>
      </div>

      {/* Navigation Items */}
      <div className="flex-1 overflow-y-auto custom-scrollbar py-2">
        <nav className="space-y-0.5">
          {MENU_ITEMS.map((item) => {
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`w-full flex items-center px-6 py-3.5 text-sm transition-colors relative group
                  ${isActive 
                    ? 'text-white bg-white/5 border-l-4 border-white' 
                    : 'hover:text-white hover:bg-white/5 border-l-4 border-transparent'
                  }`}
              >
                <item.icon 
                  size={20} 
                  className={`mr-4 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'}`} 
                />
                <span className="font-medium">{item.label}</span>
                
                {item.badge && (
                  <span className={`ml-auto text-[10px] font-bold px-1.5 py-0.5 rounded
                    ${item.badgeColor === 'green' ? 'bg-kyte-brightGreen text-kyte-darker' : ''}
                    ${item.badgeColor === 'blue' ? 'border border-blue-400 text-blue-400' : ''}
                  `}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Banner */}
      <div className="p-0">
        <button className="w-full bg-kyte-brightGreen hover:bg-emerald-400 text-kyte-darker px-4 py-4 flex items-center justify-between transition-colors">
          <div className="flex flex-col items-start">
            <span className="font-bold text-sm">Use Kyte on a PC!</span>
            <span className="text-xs opacity-80">Go to web.kyteapp.com</span>
          </div>
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};