import React from 'react';
import { SalesCard, StockCard } from './StatCards';
import { Menu } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="flex-1 h-full bg-slate-50 overflow-y-auto custom-scrollbar">
      <div className="max-w-4xl mx-auto p-4 lg:p-10 space-y-8">
        
        {/* Main Integrated Stock/Sales Card */}
        <div className="w-full">
          <StockCard />
        </div>

        {/* Secondary Section from screenshot */}
        <div className="w-full bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-800 text-lg">Open orders content</h3>
          <div className="h-24 flex items-center justify-center border-2 border-dashed border-gray-100 rounded-lg mt-4">
            <p className="text-gray-300 text-sm italic">No open orders at the moment</p>
          </div>
        </div>
        
        {/* Bottom spacing */}
        <div className="h-16"></div>
      </div>
    </div>
  );
};
