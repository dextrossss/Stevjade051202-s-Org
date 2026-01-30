import React from 'react';
import { Search, Share, Download, Plus, ChevronRight } from 'lucide-react';

const MOCK_CUSTOMERS = [
  { id: 1, name: 'Ijane Grace Guinto' },
  { id: 2, name: 'Aiz Fariolen' },
  { id: 3, name: 'Aiz Fariolen | Beans and Brew' },
  { id: 4, name: 'Allan Sia' },
  { id: 5, name: 'Arly Baller' },
  { id: 6, name: 'Arwen Sorrosa' },
  { id: 7, name: 'Babette Borja' },
  { id: 8, name: 'Bernard Acosta', balance: 1.84 },
];

export const Customers: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-gray-50 relative">
      {/* Header */}
      <div className="bg-white px-4 py-3 flex items-center justify-between border-b border-gray-200">
        <h1 className="text-xl font-bold text-gray-800">Customers (3057)</h1>
        <div className="flex items-center gap-4">
          <button className="text-gray-500 hover:text-gray-700">
            <Share size={22} />
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <Download size={22} />
          </button>
          <button className="text-kyte-brightGreen hover:text-emerald-400 transition-colors">
            <Plus size={28} />
          </button>
        </div>
      </div>

      {/* Search and Filters - Updated to White Style */}
      <div className="bg-white px-4 py-4 border-b border-gray-100 space-y-4">
        {/* White Search Bar */}
        <div className="bg-white border border-gray-200 rounded-lg px-3 py-2 flex items-center gap-3 shadow-sm focus-within:border-kyte-brightGreen transition-all">
          <Search size={18} className="text-gray-400" />
          <input 
            type="text" 
            placeholder="Search by name or contact information" 
            className="w-full bg-transparent text-gray-800 text-sm font-medium outline-none placeholder-gray-300"
          />
        </div>

        {/* Tabs/Pills */}
        <div className="flex items-center gap-3 pt-1">
          <button className="px-3 py-1 rounded-full border border-gray-300 text-[10px] font-bold text-gray-400 uppercase tracking-wide hover:border-gray-400 hover:text-gray-500 transition-colors">
            Receivables
          </button>
          <button className="px-3 py-1 rounded-full border border-gray-300 text-[10px] font-bold text-gray-400 uppercase tracking-wide hover:border-gray-400 hover:text-gray-500 transition-colors">
            Store credits
          </button>
        </div>
      </div>

      {/* Customer List */}
      <div className="flex-1 overflow-y-auto bg-white">
        {MOCK_CUSTOMERS.map((customer) => (
          <div 
            key={customer.id}
            className="p-4 border-b border-gray-50 hover:bg-gray-50 cursor-pointer flex items-center justify-between group transition-colors"
          >
            <div className="flex flex-col">
              <span className="text-sm font-bold text-gray-800">{customer.name}</span>
              {customer.balance !== undefined && (
                <span className="text-xs text-kyte-brightGreen font-medium mt-1">
                  Account Balance: +₱{customer.balance.toFixed(2)}
                </span>
              )}
            </div>
            <ChevronRight className="text-gray-300 group-hover:text-gray-400" size={16} />
          </div>
        ))}
      </div>

      {/* Footer Summary */}
      <div className="bg-kyte-card text-white px-4 py-3 flex items-center justify-between border-t border-gray-700">
        <div className="flex flex-col">
          <span className="text-xs text-white font-medium">Receivables</span>
          <span className="text-sm font-bold text-red-400">-₱642,527.03</span>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-xs text-white font-medium">Store credits</span>
          <span className="text-sm font-bold text-kyte-brightGreen">₱128,088.69</span>
        </div>
      </div>
    </div>
  );
};