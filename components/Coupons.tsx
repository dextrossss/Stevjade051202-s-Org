import React from 'react';
import { Plus, Share2, Tag, ChevronLeft } from 'lucide-react';

export const Coupons: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header matching the screenshot */}
      <div className="bg-white px-4 py-3 flex items-center justify-between border-b border-gray-200 shadow-sm z-10">
        <div className="flex items-center gap-4 text-gray-800">
          <button className="text-gray-600 hover:text-gray-900 transition-colors">
            <ChevronLeft size={26} />
          </button>
          <h1 className="text-xl font-medium">Coupons</h1>
        </div>
        <button className="bg-kyte-brightGreen hover:bg-emerald-400 text-white w-9 h-9 rounded-md flex items-center justify-center shadow-sm transition-colors">
          <Plus size={24} />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Coupon Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 relative hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-medium text-gray-800 mb-1">5</h2>
              <div className="flex items-center gap-2 text-gray-800">
                <Tag size={16} className="transform scale-x-[-1]" />
                <span className="text-sm">₱100 off in the cart</span>
              </div>
            </div>
            <button className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition-colors">
              <Share2 size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};