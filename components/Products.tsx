import React, { useState } from 'react';
import { 
  Search, 
  Share, 
  Plus, 
  Star, 
  BookOpen, 
  ChevronUp, 
  ArrowLeft,
  Copy,
  Trash2,
  ChevronRight,
  ChevronDown,
  Image as ImageIcon
} from 'lucide-react';
import { MOCK_PRODUCTS } from '../constants';
import { Product } from '../types';

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    minimumFractionDigits: 2
  }).format(price);
};

export const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  if (selectedProduct) {
    return <ProductDetail product={selectedProduct} onBack={() => setSelectedProduct(null)} />;
  }

  return <ProductList onSelectProduct={setSelectedProduct} />;
};

interface ProductListProps {
  onSelectProduct: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ onSelectProduct }) => {
  return (
    <div className="flex flex-col h-full bg-white relative">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
        <h1 className="text-xl font-medium text-gray-800">Items ({MOCK_PRODUCTS.length})</h1>
        <button className="text-gray-500 hover:text-gray-700">
          <Share size={22} />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center px-4 border-b border-gray-100">
        <button className="py-3 px-2 text-sm font-bold text-kyte-brightGreen border-b-2 border-kyte-brightGreen uppercase tracking-wide">
          Items
        </button>
        <button className="py-3 px-6 text-sm font-bold text-gray-400 hover:text-gray-600 uppercase tracking-wide">
          Stock
        </button>
        <button className="py-3 px-6 text-sm font-bold text-gray-400 hover:text-gray-600 uppercase tracking-wide">
          Categories
        </button>
      </div>

      {/* Search Bar - Updated to White Style */}
      <div className="px-4 py-4 border-b border-gray-100 flex items-center gap-3">
        <div className="flex-1 bg-white border border-gray-200 rounded-lg px-3 py-2 flex items-center gap-3 shadow-sm focus-within:border-kyte-brightGreen transition-all">
          <Search size={18} className="text-gray-400" />
          <input 
            type="text" 
            placeholder="Item, value or code" 
            className="w-full bg-transparent text-gray-800 text-sm font-medium outline-none placeholder-gray-300"
          />
        </div>
        <button className="text-kyte-brightGreen hover:text-emerald-400 transition-colors flex-shrink-0">
          <Plus size={28} />
        </button>
      </div>

      {/* Product List */}
      <div className="flex-1 overflow-y-auto">
        {MOCK_PRODUCTS.map((product) => (
          <div 
            key={product.id}
            onClick={() => onSelectProduct(product)}
            className="flex items-center p-4 border-b border-gray-50 hover:bg-gray-50 cursor-pointer transition-colors"
          >
            {/* Image Placeholder */}
            <div className={`w-12 h-12 rounded-md ${product.imageColor} mr-4 flex-shrink-0 flex items-center justify-center relative overflow-hidden`}>
              {/* Simulate product image */}
               <div className="w-full h-full opacity-30 flex items-center justify-center">
                 <ImageIcon size={20} className="text-black/20" />
               </div>
            </div>

            {/* Details */}
            <div className="flex-1 min-w-0 pr-4">
              <div className="flex items-start gap-1">
                 {product.isStarred && (
                   <Star size={12} className="text-orange-400 fill-orange-400 mt-1 flex-shrink-0" />
                 )}
                 <h3 className="text-sm font-medium text-gray-800 leading-snug line-clamp-2">
                   {product.name} {product.expiry ? `| ${product.expiry}` : ''}
                 </h3>
              </div>
              <p className="text-[10px] font-bold text-gray-400 uppercase mt-1 tracking-wide">
                {product.category || 'UNCATEGORIZED'}
              </p>
            </div>

            {/* Price */}
            <div className="text-right flex-shrink-0 self-start mt-0.5">
              <span className="text-sm font-medium text-gray-800">
                {formatPrice(product.price)}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer: Ordering and Catalog */}
      <div className="border-t border-gray-200 bg-white p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50">
        <div className="flex items-center gap-4">
          <BookOpen className="text-gray-400" size={24} />
          <div>
            <h3 className="text-sm font-medium text-gray-700">Ordering and Catalog</h3>
            <p className="text-[10px] text-kyte-brightGreen font-bold tracking-wide uppercase flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-kyte-brightGreen inline-block"></span>
              Published • Accepting Online Orders
            </p>
          </div>
        </div>
        <ChevronUp className="text-gray-400" size={20} />
      </div>
    </div>
  );
};

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack }) => {
  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Detail Header */}
      <div className="bg-white px-4 py-3 flex items-center justify-between border-b border-gray-200">
        <div className="flex items-center gap-3 overflow-hidden">
          <button onClick={onBack} className="text-gray-500 hover:text-gray-800">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-lg font-medium text-gray-800 truncate">{product.name}</h1>
        </div>
        <div className="flex items-center gap-4 pl-2 flex-shrink-0">
          <button className="text-gray-500 hover:text-gray-700"><Share size={22} /></button>
          <button className="text-gray-500 hover:text-gray-700"><Copy size={22} /></button>
          <button className="text-gray-500 hover:text-gray-700"><Trash2 size={22} /></button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white flex items-center px-4 shadow-sm z-10">
        <button className="py-3 px-2 text-sm font-bold text-kyte-brightGreen border-b-2 border-kyte-brightGreen uppercase tracking-wide flex-1 text-center">
          Product
        </button>
        <button className="py-3 px-2 text-sm font-bold text-gray-400 hover:text-gray-600 uppercase tracking-wide flex-1 text-center">
          Stock
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        
        {/* Images Area */}
        <div className="flex justify-center items-center py-4 relative">
             <div className="relative">
                <div className={`w-32 h-32 ${product.imageColor} rounded-lg shadow-sm flex items-center justify-center`}>
                    <ImageIcon size={48} className="text-black/20" />
                </div>
                {/* Floating Preview Card */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-kyte-dark text-white text-xs py-2 px-3 rounded shadow-lg flex items-center gap-3 whitespace-nowrap z-10">
                    <div className="w-6 h-6 bg-white/10 rounded flex items-center justify-center">
                         <div className="w-4 h-4 bg-white/50 rounded-sm"></div>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold truncate max-w-[120px]">{product.name}</span>
                        <span className="text-gray-300">{formatPrice(product.price)}</span>
                    </div>
                </div>
             </div>
             
             {/* Additional image slots */}
             <div className="absolute right-4 top-4 flex flex-col gap-2">
                 <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center text-gray-400">
                     <ImageIcon size={14} />
                 </div>
                 <div className="w-8 h-8 bg-kyte-brightGreen rounded flex items-center justify-center text-white text-xs font-bold">
                     1
                 </div>
             </div>
        </div>

        {/* Input Fields - Updated to White Style */}
        <div className="bg-white p-6 rounded-xl shadow-sm space-y-6 mt-8 border border-gray-100">
            <div className="flex flex-col">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Product name</label>
                <input 
                    type="text" 
                    defaultValue={product.name + (product.expiry ? ` | ${product.expiry} | hg cf` : '')}
                    className="w-full bg-white border-b border-gray-100 py-2 text-gray-800 font-medium outline-none focus:border-kyte-brightGreen transition-all" 
                />
            </div>
            <div className="flex flex-col">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Price</label>
                <input 
                    type="text" 
                    defaultValue={formatPrice(product.price).replace('₱', '₱ ')}
                    className="w-full bg-white border-b border-gray-100 py-2 text-gray-800 font-medium outline-none focus:border-kyte-brightGreen transition-all" 
                />
            </div>
        </div>

        {/* Details Accordion */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 flex items-center justify-between cursor-pointer border-b border-gray-50">
                <div>
                    <h3 className="font-medium text-gray-800">Details</h3>
                    <p className="text-xs text-gray-400 mt-0.5">Try the AI-generated description</p>
                </div>
                <ChevronUp className="text-gray-400" size={20} />
            </div>
            <div className="p-4 pt-0"></div> 
        </div>

        {/* Reduced Price */}
        <div className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-between cursor-pointer">
             <div className="flex flex-col">
                 <span className="text-base text-gray-300 font-normal">Reduced price</span>
                 <span className="text-[10px] text-gray-300">Sale prices will be crossed out (e.g.: from <span className="line-through">₱10.00</span> to ₱5.00)</span>
             </div>
        </div>

        {/* Category */}
        <div className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-between cursor-pointer">
             <div className="flex flex-col">
                 <span className="text-xs text-gray-400 mb-1">Category</span>
                 <span className="text-base text-gray-800">{product.category || 'UNCATEGORIZED'}</span>
             </div>
             <ChevronRight className="text-gray-400" size={20} />
        </div>

        {/* Description */}
        <div className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-between cursor-pointer mb-20">
             <div className="flex flex-col">
                 <span className="text-xs text-gray-400 mb-1">Description</span>
                 <span className="text-base text-gray-800">
                    {product.expiry || 'No description'} {product.expiry ? '| 200' : ''}
                 </span>
             </div>
             <ChevronRight className="text-gray-400" size={20} />
        </div>
      </div>

      {/* Save Button */}
      <div className="p-4 bg-white border-t border-gray-200">
          <button className="w-full bg-kyte-brightGreen hover:bg-emerald-400 text-white font-bold py-3.5 rounded-lg text-base shadow-sm transition-colors" onClick={onBack}>
            Save
          </button>
      </div>
    </div>
  );
};