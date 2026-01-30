import React from 'react';
import { Share2, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

// Mock data for sparklines to simulate the curves in the screenshot
const generateSparklineData = (seed: number) => {
  return Array.from({ length: 20 }, (_, i) => ({
    value: Math.sin(i * 0.5 + seed) * 10 + 20 + Math.random() * 5
  }));
};

const revenueData = generateSparklineData(1);
const salesData = generateSparklineData(2);
const avgTicketData = generateSparklineData(3);
const profitsData = generateSparklineData(4);
const taxData = [{ value: 10 }, { value: 10 }, { value: 10 }]; // Flat line

const MetricRow: React.FC<{
  label: string;
  value: string;
  bestDay: string;
  data: any[];
  isCurrency?: boolean;
}> = ({ label, value, bestDay, data, isCurrency = true }) => (
  <div className="flex items-center justify-between p-4 bg-white border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors group">
    <div className="flex flex-col flex-1">
      <span className="text-sm font-medium text-gray-500 mb-0.5">{label}</span>
      <span className={`text-2xl font-bold ${isCurrency || label === 'Sales' ? 'text-emerald-500' : 'text-gray-800'}`}>
        {value}
      </span>
      <span className="text-xs text-gray-400 mt-1 font-light">Best day: {bestDay}</span>
    </div>
    
    <div className="flex items-center gap-4">
      <div className="w-24 h-12">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#10b981" 
              strokeWidth={2} 
              dot={index => index === data.length - 1 ? { r: 3, fill: '#10b981' } : false} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <ChevronRight className="text-gray-300 group-hover:text-gray-400" size={20} />
    </div>
  </div>
);

export const Analytics: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-gray-50 overflow-hidden">
      {/* Header */}
      <div className="bg-white px-4 py-3 flex items-center justify-between border-b border-gray-200 shadow-sm z-10">
        <h1 className="text-xl font-medium text-gray-800">Analytics</h1>
        <button className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors">
          <Share2 size={22} />
        </button>
      </div>

      {/* Content Scrollable */}
      <div className="flex-1 overflow-y-auto">
        {/* Date Selector */}
        <div className="p-4">
          <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
              <ChevronLeft size={20} />
            </button>
            <span className="text-sm font-medium text-gray-600">This month: January 2026</span>
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Metrics List */}
        <div className="space-y-0.5">
          <MetricRow 
            label="Revenue" 
            value="₱3,269,223.61" 
            bestDay="21 Jan" 
            data={revenueData} 
          />
          <MetricRow 
            label="Sales" 
            value="1067" 
            bestDay="25 Jan" 
            data={salesData} 
            isCurrency={false}
          />
          <MetricRow 
            label="Average Ticket Size" 
            value="₱3,063.94" 
            bestDay="21 Jan" 
            data={avgTicketData} 
          />
          <MetricRow 
            label="Profits" 
            value="₱273,169.18" 
            bestDay="13 Jan" 
            data={profitsData} 
          />
          <MetricRow 
            label="Sales Tax" 
            value="₱0.00" 
            bestDay="01 Jan" 
            data={taxData} 
          />
        </div>

        {/* Payment Method Section Placeholder */}
        <div className="p-4 bg-white mt-4 border-t border-b border-gray-100 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors">
          <span className="text-sm font-medium text-gray-800">Payment method</span>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border-2 border-emerald-500 border-t-transparent animate-spin opacity-20"></div>
            <ChevronDown className="text-gray-300" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};