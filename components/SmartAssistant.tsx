import React from 'react';
import { History, HelpCircle, Sparkles, Mic, ArrowUp } from 'lucide-react';

export const SmartAssistant: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-gray-50 relative">
      {/* Header */}
      <div className="bg-white px-6 py-4 flex items-center justify-between border-b border-gray-100 flex-shrink-0">
        <h1 className="text-xl font-bold text-gray-800">Smart Assistant</h1>
        <div className="flex items-center gap-4 text-gray-400">
          <button className="hover:text-gray-600 transition-colors"><History size={22} /></button>
          <button className="hover:text-gray-600 transition-colors"><HelpCircle size={22} /></button>
        </div>
      </div>

      {/* Main Content - Centered */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center w-full max-w-2xl mx-auto overflow-y-auto">
        
        {/* Illustration */}
        <div className="mb-6 relative w-48 h-48 flex items-center justify-center">
            {/* Abstract Kite Illustration */}
             <svg width="180" height="180" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Clouds */}
                <path d="M40 130C40 130 50 110 80 120C80 120 100 100 130 120" stroke="#E5E7EB" strokeWidth="4" strokeLinecap="round"/>
                <path d="M140 140C140 140 150 125 170 135" stroke="#E5E7EB" strokeWidth="4" strokeLinecap="round"/>
                
                {/* Kite Tail */}
                <path d="M100 130C100 130 100 160 120 170" stroke="#374151" strokeWidth="4" strokeLinecap="round"/>

                {/* Kite Body - Left Half */}
                <path d="M100 40L40 90L100 140V40Z" fill="#ffffff" stroke="#10b981" strokeWidth="3" strokeLinejoin="round"/>
                {/* Kite Body - Right Half (Green) */}
                <path d="M100 40L160 90L100 140V40Z" fill="#34d399" stroke="#10b981" strokeWidth="3" strokeLinejoin="round"/>
                
                {/* Sparkle */}
                <path d="M170 50L175 60L185 65L175 70L170 80L165 70L155 65L165 60L170 50Z" fill="#F472B6" />
            </svg>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">Hi, Easy.</h2>
        
        <p className="text-gray-500 text-sm leading-relaxed max-w-md mb-10">
          I'm your smart assistant. I can review your history and help with quick questions or insights to support decisions for your business.
        </p>

        <button className="flex items-center gap-2 text-kyte-brightGreen font-bold text-sm hover:underline transition-all">
          <Sparkles size={16} />
          Show me some examples
        </button>
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-gray-100 pb-6 lg:pb-6 flex-shrink-0">
        <div className="max-w-3xl mx-auto relative flex items-center gap-3">
           <div className="relative flex-1">
             <input 
                type="text" 
                placeholder="Ask something..." 
                className="w-full bg-gray-100 text-gray-800 rounded-xl pl-4 pr-12 py-3.5 focus:outline-none focus:ring-2 focus:ring-kyte-brightGreen/50 transition-all placeholder-gray-400"
             />
             <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                <Mic size={20} />
             </button>
           </div>
           
           <button className="bg-gray-100 hover:bg-gray-200 text-gray-400 hover:text-gray-600 p-3.5 rounded-xl transition-colors">
              <ArrowUp size={20} />
           </button>
        </div>
      </div>
    </div>
  );
};