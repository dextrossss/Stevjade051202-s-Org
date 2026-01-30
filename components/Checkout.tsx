import React from 'react';
import { 
  Search, 
  ScanLine, 
  Zap, 
  LayoutGrid, 
  UserPlus, 
  MoreHorizontal, 
  ShoppingCart, 
  Star 
} from 'lucide-react';
import { MOCK_PRODUCTS, CATEGORIES } from '../constants';

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    minimumFractionDigits: 2
  }).format(price);
};

export const Checkout: React.FC = () => {
  return (
    <div className="flex h-full bg-white flex-col lg:flex-row overflow-hidden">
      {/* LEFT PANE: Product Selection */}
      <div className="flex-1 flex flex-col h-full overflow-hidden border-r border-gray-200">
        
        {/* Header */}
        <div className="p-4 flex items-center justify-between bg-white border-b border-gray-100">
          <h1 className="text-xl font-bold text-gray-800">Checkout</h1>
          <button className="text-kyte-brightGreen hover:bg-green-50 p-2 rounded-full transition-colors">
            <UserPlus size={24} />
          </button>
        </div>

        {/* Toolbar: Search & View Options - Updated to White Style */}
        <div className="flex items-center px-4 py-3 gap-3 border-b border-gray-100">
          <div className="flex-1 bg-white border border-gray-200 rounded-lg px-3 py-2 flex items-center gap-3 shadow-sm focus-within:border-kyte-brightGreen transition-all">
            <Search className="text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search products..." 
              className="w-full bg-transparent text-gray-800 text-sm font-medium py-1 outline-none placeholder-gray-300"
            />
          </div>
          
          <div className="flex items-center gap-4 text-gray-500">
            <button className="hover:text-gray-800"><ScanLine size={22} /></button>
            <button className="hover:text-gray-800"><Zap size={22} /></button>
            <button className="hover:text-gray-800"><LayoutGrid size={22} /></button>
            <button className="border border-gray-300 rounded px-1 text-xs font-bold text-gray-600 h-6 flex items-center">
              1 X
            </button>
          </div>
        </div>

        {/* Categories Tab */}
        <div className="flex items-center border-b border-gray-100 overflow-x-auto no-scrollbar">
          {CATEGORIES.map((cat, idx) => (
            <button 
              key={cat}
              className={`px-4 py-3 text-xs font-bold whitespace-nowrap transition-colors
                ${idx === 0 
                  ? 'text-kyte-brightGreen border-b-2 border-kyte-brightGreen' 
                  : 'text-gray-400 hover:text-gray-600'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product List */}
        <div className="flex-1 overflow-y-auto">
          {MOCK_PRODUCTS.map((product) => (
            <div 
              key={product.id}
              className="flex items-center p-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors group"
            >
              <div className={`w-12 h-12 rounded ${product.imageColor} mr-3 flex-shrink-0 flex items-center justify-center text-white text-xs font-bold`}>
                 <div className="w-8 h-8 opacity-50 bg-black/10 rounded-sm"></div>
              </div>

              <div className="flex-1 min-w-0 pr-2">
                <div className="flex items-start justify-between">
                    <div className="flex items-start gap-1">
                        {product.isStarred && (
                            <Star size={12} className="text-orange-400 fill-orange-400 mt-1 flex-shrink-0" />
                        )}
                        <h3 className="text-sm font-medium text-gray-800 leading-tight line-clamp-2">
                            {product.name} {product.expiry ? `| ${product.expiry}` : ''} | {product.code}
                        </h3>
                    </div>
                </div>
                <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-gray-400">Code {product.code}</span>
                </div>
              </div>

              <div className="text-right flex-shrink-0">
                <div className="text-sm font-semibold text-gray-800">{formatPrice(product.price)}</div>
                <div className="text-xs text-gray-500 font-medium mt-0.5">Stock: {product.stock}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT PANE: Cart / Receipt */}
      <div className="w-full lg:w-[420px] bg-gray-50 flex flex-col border-l border-gray-200">
        
        <div className="flex-1 flex flex-col items-center justify-center text-gray-400 p-8 text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6 relative">
                 <ShoppingCart size={48} className="text-kyte-brightGreen opacity-60" />
                 <div className="absolute -top-6 text-gray-400">
                    <svg width="24" height="40" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 0V30M12 30L5 23M12 30L19 23" />
                    </svg>
                 </div>
            </div>
            <p className="max-w-[200px] text-sm leading-relaxed">
                Add products to your cart to view them here.
            </p>
        </div>

        <div className="p-4 bg-white border-t border-gray-200 flex gap-3">
          <button className="p-3 bg-gray-100 rounded-lg text-gray-500 hover:bg-gray-200 transition-colors">
            <MoreHorizontal size={24} />
          </button>
          <button className="flex-1 border border-kyte-brightGreen text-kyte-brightGreen font-bold py-3 px-4 rounded-lg hover:bg-green-50 transition-colors flex items-center justify-center">
            No item
          </button>
        </div>

      </div>
    </div>
  );
};