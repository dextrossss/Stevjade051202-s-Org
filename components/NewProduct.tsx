import React, { useState } from 'react';
import { 
  ChevronLeft, 
  Sparkles, 
  Image as ImageIcon, 
  ChevronDown, 
  Plus,
  Camera
} from 'lucide-react';

interface NewProductProps {
  onBack?: () => void;
}

export const NewProduct: React.FC<NewProductProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'PRODUCT' | 'STOCK'>('PRODUCT');
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');

  return (
    <div className="flex flex-col h-full bg-slate-50 overflow-hidden relative">
      {/* Header */}
      <div className="bg-white px-6 py-4 flex items-center justify-between border-b border-slate-100 sticky top-0 z-20">
        <div className="flex items-center gap-6">
          <button onClick={onBack} className="text-slate-400 hover:text-slate-600 transition-colors">
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-xl font-medium text-slate-800 tracking-tight">New product</h1>
        </div>
        
        <button className="flex items-center gap-2 px-4 py-1.5 rounded-lg border border-emerald-200 text-emerald-500 text-xs font-bold hover:bg-emerald-50 transition-all shadow-sm">
          <Sparkles size={14} className="fill-emerald-500" />
          <span>Create with AI</span>
        </button>
      </div>

      {/* Segmented Control Tabs */}
      <div className="bg-white flex px-6 border-b border-slate-100">
        <button
          onClick={() => setActiveTab('PRODUCT')}
          className={`flex-1 py-4 text-[10px] font-black tracking-[0.2em] transition-all relative ${
            activeTab === 'PRODUCT' ? 'text-emerald-500' : 'text-slate-300'
          }`}
        >
          PRODUCT
          {activeTab === 'PRODUCT' && (
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-emerald-500 rounded-full mx-8" />
          )}
        </button>
        <button
          onClick={() => setActiveTab('STOCK')}
          className={`flex-1 py-4 text-[10px] font-black tracking-[0.2em] transition-all relative ${
            activeTab === 'STOCK' ? 'text-emerald-500' : 'text-slate-300'
          }`}
        >
          STOCK
          {activeTab === 'STOCK' && (
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-emerald-500 rounded-full mx-8" />
          )}
        </button>
      </div>

      {/* Main Form Content */}
      <div className="flex-1 overflow-y-auto bg-white custom-scrollbar">
        <div className="max-w-2xl mx-auto w-full px-6 py-10 space-y-12 pb-32">
          
          {/* Preview Area */}
          <div className="flex justify-center items-center py-4">
            <div className="relative flex items-center gap-12">
              {/* Photo Upload Placeholder */}
              <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 hover:bg-slate-200 cursor-pointer transition-colors shadow-inner">
                <Camera size={20} />
              </div>

              {/* Main Preview Card */}
              <div className="w-64 h-32 bg-[#5d647a] rounded-lg shadow-xl flex flex-col justify-end p-4 relative overflow-hidden group">
                 {/* Decorative background "Name" text */}
                 <div className="absolute top-4 left-0 right-0 text-center opacity-40">
                    <span className="text-white text-3xl font-bold tracking-tight">Name</span>
                 </div>
                 
                 {/* Icon in preview */}
                 <div className="absolute top-6 right-6 text-white/50">
                    <ImageIcon size={24} />
                 </div>

                 <div className="z-10 bg-[#3a4155]/80 backdrop-blur-sm -mx-4 -mb-4 p-3 border-t border-white/5">
                    <p className="text-white text-[11px] font-medium truncate uppercase tracking-wider opacity-80">
                      {productName || 'Product name'}
                    </p>
                    <p className="text-white text-sm font-black mt-0.5">
                      ₱{price || '0.00'}
                    </p>
                 </div>
              </div>

              {/* Extra Icon Slot */}
              <div className="w-10 h-10 border-2 border-slate-100 rounded-lg flex items-center justify-center text-slate-200">
                <ImageIcon size={20} />
              </div>
            </div>
          </div>

          {/* Form Fields - White Style */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">
                Product name
              </label>
              <div className="bg-white border border-slate-200 p-3.5 rounded-lg shadow-sm focus-within:border-emerald-500 transition-colors">
                <input 
                  type="text" 
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  placeholder="Product name"
                  className="w-full bg-transparent text-slate-800 text-lg font-medium outline-none placeholder-slate-300"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">
                Price
              </label>
              <div className="bg-white border border-slate-200 p-3.5 rounded-lg shadow-sm focus-within:border-emerald-500 transition-colors">
                <input 
                  type="text" 
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Price"
                  className="w-full bg-transparent text-slate-800 text-lg font-medium outline-none placeholder-slate-300"
                />
              </div>
            </div>
          </div>

          {/* Collapsible Sections */}
          <div className="space-y-4">
            <button className="w-full flex items-center justify-between py-6 border-b border-slate-50 group hover:bg-slate-50 transition-colors rounded-lg px-2 -mx-2 text-left">
              <div>
                <h3 className="text-sm font-bold text-slate-700">Details</h3>
                <p className="text-[11px] text-slate-400 mt-1">Try the AI-generated description</p>
              </div>
              <ChevronDown size={20} className="text-slate-300 group-hover:text-emerald-500 transition-colors" />
            </button>

            <div className="flex items-center justify-between py-6 border-b border-slate-50 px-2 -mx-2">
              <div className="flex items-center gap-4">
                <h3 className="text-sm font-bold text-slate-700">Variants</h3>
                <span className="bg-emerald-400 text-white text-[9px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider">NEW</span>
              </div>
              <button className="text-[11px] font-black text-emerald-500 uppercase tracking-widest hover:text-emerald-600">
                ADD
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Footer Action */}
      <div className="p-6 bg-white border-t border-slate-100 shadow-[0_-10px_20px_rgba(0,0,0,0.02)] sticky bottom-0 z-20">
        <button 
          disabled={!productName}
          className={`w-full py-4 rounded-xl text-sm font-black uppercase tracking-[0.2em] transition-all ${
            productName 
              ? 'bg-emerald-500 text-white shadow-xl shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.98]' 
              : 'bg-slate-100 text-slate-300 cursor-not-allowed'
          }`}
        >
          Create product
        </button>
      </div>
    </div>
  );
};