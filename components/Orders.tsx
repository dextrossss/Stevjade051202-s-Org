import React from 'react';
import { 
  Search, 
  Share, 
  Filter, 
  Plus, 
  Clock, 
  User, 
  ChevronDown, 
  FileText 
} from 'lucide-react';

interface Order {
  id: string;
  displayId: string;
  price: number;
  salesperson: string;
  time: string;
  itemsSummary: string;
  customer: string;
  hasReceipt?: boolean;
}

const MOCK_ORDERS: Order[] = [
  {
    id: '1',
    displayId: '#47-11597',
    price: 1180.00,
    salesperson: 'Emma',
    time: '2:17 PM',
    itemsSummary: '4x D kg Str',
    customer: 'EPS Food Station'
  },
  {
    id: '2',
    displayId: '#47-11594',
    price: 6800.00,
    salesperson: 'Emma',
    time: '12:52 PM',
    itemsSummary: '2x Master M 5x C Styro',
    customer: 'Puesto Restaurant | Mon',
    hasReceipt: true
  },
  {
    id: '3',
    displayId: '#47-11592',
    price: 14795.00,
    salesperson: 'VINCE',
    time: '12:16 PM',
    itemsSummary: '3 items: 3x Bravo Bu 1x Conaprol 2x Box Laci',
    customer: 'Say Cheese | Jeannina Kho'
  },
  {
    id: '4',
    displayId: '#101-11588',
    price: 5636.00,
    salesperson: 'May',
    time: '10:43 AM',
    itemsSummary: '4 items: 1x Sweet Ch 1x Sig Salt 1x Sig Vani 50x kg Aviko',
    customer: 'Quick-E Food Hub | Sara Joy Pagalan | Saruu'
  }
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    minimumFractionDigits: 2
  }).format(price);
};

export const Orders: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-gray-50 relative">
      {/* Header */}
      <div className="bg-white px-4 py-3 flex items-center justify-between border-b border-gray-200">
        <h1 className="text-xl font-medium text-gray-800">Orders (25)</h1>
        <div className="flex items-center gap-3">
          <button className="text-gray-500 hover:text-gray-700">
            <Share size={22} />
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <Filter size={22} />
          </button>
          <button className="bg-kyte-brightGreen hover:bg-emerald-400 text-white p-1.5 rounded-md shadow-sm transition-colors">
            <Plus size={24} />
          </button>
        </div>
      </div>

      {/* Search & Filters - Updated Search to White Style */}
      <div className="bg-white px-4 py-4 border-b border-gray-200 space-y-4">
        {/* White Search Bar */}
        <div className="bg-white border border-gray-200 rounded-lg px-3 py-2 flex items-center gap-3 shadow-sm focus-within:border-kyte-brightGreen transition-all">
          <Search size={18} className="text-gray-400" />
          <input 
            type="text" 
            placeholder="Item, customer, price or code" 
            className="w-full bg-transparent text-gray-800 text-sm font-medium outline-none placeholder-gray-300"
          />
        </div>

        {/* Filter Chips */}
        <div className="flex items-center justify-between pt-1">
          <button className="flex items-center gap-2 text-sm text-gray-700 font-medium">
            <div className="w-5 h-5 bg-gray-800 rounded-full flex items-center justify-center text-white">
              <Clock size={12} strokeWidth={3} />
            </div>
            <span>All status</span>
            <ChevronDown size={16} className="text-gray-400" />
          </button>

          <button className="flex items-center gap-2 text-sm text-gray-700 font-medium">
            <User size={18} className="text-gray-500" />
            <span>Salesperson</span>
            <ChevronDown size={16} className="text-gray-400" />
          </button>
        </div>
      </div>

      {/* Order List Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <div className="mb-4">
            <h2 className="text-lg font-medium text-gray-700">Today</h2>
            <p className="text-sm text-gray-400 font-light">4 orders, ₱28,411.00</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            {MOCK_ORDERS.map((order, index) => (
              <div 
                key={order.id} 
                className={`p-4 flex flex-col gap-1 hover:bg-gray-50 cursor-pointer transition-colors relative
                  ${index !== MOCK_ORDERS.length - 1 ? 'border-b border-gray-100' : ''}
                `}
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-gray-600" />
                    <span className="font-bold text-gray-800 text-lg">
                      {formatPrice(order.price)}
                    </span>
                    <span className="text-xs text-gray-400 font-light">
                      by {order.salesperson}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-gray-400">
                    {order.time}
                  </div>
                </div>

                <div className="flex justify-between items-start mt-0.5">
                  <p className="text-sm text-gray-600 truncate pr-4 max-w-[70%]">
                    {order.itemsSummary}
                  </p>
                  <span className="text-xs text-gray-300 font-medium">
                    {order.displayId}
                  </span>
                </div>

                <div className="flex items-center gap-2 mt-1">
                  <User size={14} className="text-gray-400" />
                  <span className="text-xs font-medium text-gray-600 truncate">
                    {order.customer}
                  </span>
                  {order.hasReceipt && (
                    <FileText size={14} className="text-gray-400 ml-1" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-kyte-card text-white p-4 flex flex-col">
        <h3 className="font-bold text-base">Orders</h3>
        <p className="text-sm text-gray-300">₱224,310.68 from 22 orders</p>
      </div>
    </div>
  );
};