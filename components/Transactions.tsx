import React from 'react';
import { Search, Share, Filter, Plus, User, ChevronDown, Camera, MoreHorizontal } from 'lucide-react';

const MOCK_TRANSACTIONS = [
  {
    id: 1,
    price: 490.00,
    salesperson: 'Cindy',
    time: '4:20 PM',
    transId: '#33-11596',
    items: '1x Coffee E',
    customer: 'Leizer / Rachel Balleno',
    icon: 'camera'
  },
  {
    id: 2,
    price: 344.00,
    salesperson: 'Emma',
    time: '3:52 PM',
    transId: '#47-11599',
    items: '2x Cheese S',
    customer: 'Romel',
    icon: 'camera'
  },
  {
    id: 3,
    price: 890.00,
    salesperson: 'Emma',
    time: '3:41 PM',
    transId: '#47-11596',
    items: '1x Pure Ara',
    customer: 'Mess Hall Cafe | Ry',
    icon: 'camera'
  },
  {
    id: 4,
    price: 1007.00,
    salesperson: 'Emma',
    time: '3:35 PM',
    transId: '#47-11598',
    items: '1x Box Oats 1x Sig Butt',
    customer: 'Queenie Estavilla',
    icon: 'dots'
  }
];

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    minimumFractionDigits: 2
  }).format(value);
};

export const Transactions: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-gray-50 relative">
      {/* Header */}
      <div className="bg-white px-4 py-3 flex items-center justify-between border-b border-gray-200">
        <h1 className="text-xl font-medium text-gray-800">Transactions</h1>
        <div className="flex items-center gap-4">
          <button className="text-gray-500 hover:text-gray-700">
            <Share size={22} />
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <Filter size={22} />
          </button>
          <button className="bg-kyte-brightGreen hover:bg-emerald-400 text-white w-9 h-9 rounded-md flex items-center justify-center shadow-sm transition-colors">
            <Plus size={24} />
          </button>
        </div>
      </div>

      {/* Search & Filter - Updated to White Style */}
      <div className="bg-white px-4 py-4 border-b border-gray-100 space-y-4">
        {/* White Search Bar */}
        <div className="bg-white border border-gray-200 rounded-lg px-3 py-2 flex items-center gap-3 shadow-sm focus-within:border-kyte-brightGreen transition-all">
          <Search size={18} className="text-gray-400" />
          <input 
            type="text" 
            placeholder="Item, customer, price or code" 
            className="w-full bg-transparent text-gray-800 text-sm font-medium outline-none placeholder-gray-300"
          />
        </div>

        {/* Salesperson Filter */}
        <div className="flex items-center pt-1">
          <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 transition-colors">
            <User size={18} className="text-gray-500" />
            <span>Salesperson</span>
            <ChevronDown size={16} className="text-gray-400" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto bg-gray-50">
        <div className="px-4 py-4">
          <h2 className="text-lg font-medium text-gray-800">Today</h2>
          <p className="text-sm text-gray-400 font-light">20 sales, ₱36,643.00</p>
        </div>

        <div className="bg-white border-t border-b border-gray-100">
          {MOCK_TRANSACTIONS.map((tx, index) => (
            <div 
              key={tx.id}
              className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${
                index !== MOCK_TRANSACTIONS.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <div className="flex justify-between items-start mb-1">
                <div className="flex items-center gap-2">
                  <div className="text-gray-500 mt-0.5">
                    {tx.icon === 'camera' ? <Camera size={18} /> : <MoreHorizontal size={18} className="border border-gray-400 rounded-sm p-0.5" />}
                  </div>
                  <span className="font-bold text-gray-800 text-base">
                    {formatCurrency(tx.price)}
                  </span>
                  <span className="text-xs text-gray-300 font-light">
                    by {tx.salesperson}
                  </span>
                </div>
                
                <div className="text-right">
                  <div className="text-xs font-bold text-gray-300 mb-0.5">{tx.time}</div>
                  <div className="text-[10px] text-gray-300">{tx.transId}</div>
                </div>
              </div>

              <div className="text-sm text-gray-600 mb-1 pl-7">
                {tx.items}
              </div>

              <div className="flex items-center gap-2 pl-7">
                <User size={14} className="text-gray-400" />
                <span className="text-xs font-medium text-gray-600">
                  {tx.customer}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-kyte-card text-white px-4 py-3 border-t border-gray-700">
        <h3 className="font-bold text-base text-white mb-0.5">Last 30 days</h3>
        <p className="text-sm text-gray-300 font-light">
          ₱3,523,836.15 from 1129 sales
        </p>
      </div>
    </div>
  );
};