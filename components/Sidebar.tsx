import React from 'react';
import { MENU_ITEMS } from '../constants';
import { ArrowLeft, ChevronRight, LogOut } from 'lucide-react';

interface SidebarProps {
  activeView: string;
  onNavigate: (view: string) => void;
  onLogout: () => void;
  userRole: 'admin' | 'staff';
}

export const Sidebar: React.FC<SidebarProps> = ({ activeView, onNavigate, onLogout, userRole }) => {
  const isAdmin = userRole === 'admin';

  // Define views that only admins can see
  const adminOnlyViews = ['analytics', 'users', 'settings', 'admin-panel', 'finance'];

  const filteredItems = MENU_ITEMS.filter(item => {
    if (!isAdmin && adminOnlyViews.includes(item.id)) return false;
    return true;
  });

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
            <p className="text-xs text-gray-400 uppercase tracking-widest font-black opacity-60">
              {userRole}
            </p>
          </div>
          {isAdmin && (
            <button 
              onClick={() => onNavigate('admin-panel')}
              className="border border-kyte-brightGreen text-kyte-brightGreen text-[10px] font-black px-3 py-1 rounded-full hover:bg-kyte-brightGreen/10 transition-colors tracking-widest"
            >
              MANAGE
            </button>
          )}
        </div>
      </div>

      {/* Navigation Items */}
      <div className="flex-1 overflow-y-auto custom-scrollbar py-2">
        <nav className="space-y-0.5">
          {filteredItems.map((item) => {
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

      {/* Bottom Section */}
      <div className="mt-auto border-t border-gray-700/50">
        <button 
          onClick={onLogout}
          className="w-full flex items-center px-6 py-4 text-sm text-gray-400 hover:text-red-400 hover:bg-red-400/5 transition-all group"
        >
          <LogOut size={20} className="mr-4 group-hover:rotate-12 transition-transform" />
          <span className="font-bold uppercase tracking-widest text-[11px]">Log out</span>
        </button>

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