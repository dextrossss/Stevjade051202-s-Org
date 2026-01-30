import React from 'react';
import { Eye, HelpCircle, Plus, Sparkles, PieChart as PieChartIcon } from 'lucide-react';
import { MOCK_SALES_DATA, MOCK_STOCK_DATA } from '../constants';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    minimumFractionDigits: 2
  }).format(value);
};

export const SalesCard: React.FC = () => {
  return (
    <div className="bg-kyte-card rounded-xl text-white p-6 relative overflow-hidden shadow-lg">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-lg">Home</h3>
        <button className="text-kyte-brightGreen hover:text-emerald-300">
          <Eye size={20} />
        </button>
      </div>

      <div className="flex flex-col items-center mt-4 mb-8">
        <span className="text-xs uppercase tracking-wider text-gray-400 mb-1">Today</span>
        <h1 className="text-4xl font-bold mb-1">{formatCurrency(MOCK_SALES_DATA.today)}</h1>
        <p className="text-sm text-gray-400 mb-4">
          in <span className="text-white font-medium">{MOCK_SALES_DATA.saleCount} completed sales</span>
        </p>

        <div className="flex flex-col items-center space-y-1 text-sm text-gray-400">
          <p>
            Yesterday: <span className="text-white">{formatCurrency(MOCK_SALES_DATA.yesterday)}</span>
          </p>
          <p>
            This month: <span className="text-white">{formatCurrency(MOCK_SALES_DATA.thisMonth)}</span>
          </p>
        </div>
      </div>

      <button className="w-full bg-kyte-brightGreen hover:bg-emerald-400 text-kyte-darker font-bold py-3 rounded-lg transition-colors text-lg shadow-md">
        Log a sale
      </button>
    </div>
  );
};

const PIE_DATA = [
  { name: 'Available', value: 190, color: '#34d399' },
  { name: 'Running low', value: 2, color: '#fbbf24' },
  { name: 'Out of stock', value: 217, color: '#f87171' },
  { name: 'Inventory disabled', value: 447, color: '#60a5fa' },
];

export const StockCard: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden relative">
      {/* Dark Header Part */}
      <div className="bg-kyte-card text-white p-6 pb-8">
        <h3 className="font-semibold text-lg mb-6">Home</h3>
        
        <div className="flex items-stretch gap-0 border-b border-white/10 mb-6">
          <div className="flex-1 bg-white/5 p-4 text-center flex flex-col justify-center items-center border-r border-white/10">
            <span className="text-2xl font-bold">{MOCK_STOCK_DATA.registeredProducts}</span>
            <span className="text-[10px] uppercase text-gray-400 font-bold leading-tight mt-1 tracking-wider">
              Registered<br/>Products
            </span>
          </div>
          <div className="flex-[2] bg-white/5 p-4 text-center flex flex-col justify-center items-center">
            <span className="text-xs text-gray-400 mb-1 uppercase tracking-widest font-bold">Amount in stock</span>
            <span className="text-2xl font-bold">{formatCurrency(MOCK_STOCK_DATA.amountInStock)}</span>
          </div>
        </div>

        <button className="w-full bg-kyte-brightGreen hover:bg-emerald-400 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md">
          <Plus size={20} strokeWidth={3} />
          Product
        </button>
      </div>

      {/* White Content Part */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-6">
          <h4 className="font-bold text-gray-700 text-lg">Items in stock</h4>
          <div className="bg-gray-100 rounded-full p-0.5 cursor-pointer hover:bg-gray-200">
            <HelpCircle size={18} className="text-gray-500" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mb-10">
          <div className="w-40 h-40 flex-shrink-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={PIE_DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={0}
                  outerRadius={80}
                  paddingAngle={0}
                  dataKey="value"
                >
                  {PIE_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="flex flex-col gap-3 flex-1 w-full sm:w-auto">
            {PIE_DATA.map((item) => (
              <div key={item.name} className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }}></span>
                <span className="text-gray-600 text-sm font-medium">{item.name} ({item.value})</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center space-y-4 pt-4 border-t border-gray-100">
          <h5 className="font-bold text-gray-800">Why manage stock?</h5>
          <p className="text-sm text-gray-500 max-w-sm mx-auto leading-relaxed font-light">
            Kyte's stock control allows you to register products in seconds - and everything is synchronized between your teams.
          </p>
          <button className="w-full max-w-xs mx-auto border-2 border-kyte-brightGreen text-kyte-brightGreen font-bold py-2.5 rounded-lg hover:bg-kyte-brightGreen/5 transition-colors flex items-center justify-center gap-2">
            <PieChartIcon size={18} />
            Manage stock
          </button>
        </div>
      </div>
      
      {/* Floating Action Button */}
      <div className="absolute right-4 bottom-4">
        <button className="bg-slate-700 hover:bg-slate-600 text-kyte-brightGreen p-3.5 rounded-2xl shadow-xl border border-slate-600 transform transition-transform active:scale-95">
          <Sparkles size={24} className="fill-kyte-brightGreen/20" />
        </button>
      </div>
    </div>
  );
};
