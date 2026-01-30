import React from 'react';
import { Search, Book, MessageSquare, Video, ExternalLink, ChevronRight } from 'lucide-react';

const HelpCard: React.FC<{ icon: any, title: string, desc: string }> = ({ icon: Icon, title, desc }) => (
  <button className="flex flex-col items-start p-5 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-all text-left group">
    <div className="p-3 bg-kyte-brightGreen/10 rounded-xl text-kyte-brightGreen mb-4 group-hover:scale-110 transition-transform">
      <Icon size={24} />
    </div>
    <h3 className="text-base font-bold text-gray-800 mb-1">{title}</h3>
    <p className="text-sm text-gray-500 font-light leading-relaxed mb-4">{desc}</p>
    <div className="mt-auto flex items-center text-xs font-bold text-kyte-brightGreen uppercase tracking-wide">
      Learn more <ChevronRight size={14} className="ml-1" />
    </div>
  </button>
);

export const Help: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-gray-50 overflow-hidden">
      <div className="bg-white px-4 py-3 border-b border-gray-200 shadow-sm z-10 flex items-center justify-between">
        <h1 className="text-xl font-medium text-gray-800">Help Center</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-4 lg:p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Hero Search */}
          <div className="bg-kyte-dark rounded-2xl p-8 text-center text-white shadow-xl">
            <h2 className="text-2xl font-bold mb-6">How can we help you?</h2>
            <div className="relative max-w-lg mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Search articles, tutorials..." 
                className="w-full bg-white/10 border border-white/20 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-kyte-brightGreen transition-all"
              />
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <HelpCard 
              icon={Book} 
              title="Knowledge Base" 
              desc="Detailed guides on how to use every feature of Kyte." 
            />
            <HelpCard 
              icon={Video} 
              title="Video Tutorials" 
              desc="Step-by-step visual guides to get you up and running." 
            />
            <HelpCard 
              icon={MessageSquare} 
              title="Live Chat" 
              desc="Talk to our support team directly for immediate assistance." 
            />
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h3 className="font-bold text-gray-800 mb-4">Quick Links</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a href="#" className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <span className="text-sm font-medium text-gray-700">Service Status</span>
                <ExternalLink size={16} className="text-gray-400" />
              </a>
              <a href="#" className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <span className="text-sm font-medium text-gray-700">Community Forum</span>
                <ExternalLink size={16} className="text-gray-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};