import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Home } from './components/Home';
import { NewProduct } from './components/NewProduct';
import { Checkout } from './components/Checkout';
import { Orders } from './components/Orders';
import { Products } from './components/Products';
import { SmartAssistant } from './components/SmartAssistant';
import { OnlineCatalog } from './components/OnlineCatalog';
import { Coupons } from './components/Coupons';
import { Customers } from './components/Customers';
import { Transactions } from './components/Transactions';
import { Analytics } from './components/Analytics';
import { Users } from './components/Users';
import { Settings } from './components/Settings';
import { Help } from './components/Help';
import { Menu } from 'lucide-react';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeView, setActiveView] = useState('home'); 

  const handleNavigate = (view: string) => {
    setActiveView(view);
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden font-sans text-slate-800">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-30 transform transition-transform duration-300 ease-in-out
        lg:relative lg:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <Sidebar activeView={activeView} onNavigate={handleNavigate} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        
        {/* Render View Based on State */}
        {activeView === 'home' && (
          <div className="flex-1 h-full flex flex-col overflow-hidden">
            <div className="lg:hidden bg-white border-b p-4 flex items-center gap-3">
                 <button onClick={() => setIsSidebarOpen(true)}>
                    <Menu size={24} className="text-slate-600"/>
                 </button>
                 <span className="font-bold uppercase tracking-wide">EASY CEBU</span>
            </div>
            <Home />
          </div>
        )}

        {activeView === 'new-product' && (
          <div className="flex-1 h-full flex flex-col">
            <NewProduct onBack={() => setActiveView('home')} />
          </div>
        )}

        {activeView === 'checkout' && (
          <div className="flex-1 h-full flex flex-col">
            <div className="lg:hidden bg-white border-b p-2">
                 <button onClick={() => setIsSidebarOpen(true)} className="p-2">
                    <Menu size={20} className="text-gray-600"/>
                 </button>
            </div>
            <Checkout />
          </div>
        )}

        {activeView === 'orders' && (
          <div className="flex-1 h-full flex flex-col">
            <div className="lg:hidden bg-white border-b p-2">
                 <button onClick={() => setIsSidebarOpen(true)} className="p-2">
                    <Menu size={20} className="text-gray-600"/>
                 </button>
            </div>
            <Orders />
          </div>
        )}
        
        {activeView === 'products' && (
          <div className="flex-1 h-full flex flex-col">
            <div className="lg:hidden bg-white border-b p-2">
                 <button onClick={() => setIsSidebarOpen(true)} className="p-2">
                    <Menu size={20} className="text-gray-600"/>
                 </button>
            </div>
            <Products />
          </div>
        )}

        {activeView === 'smart-assistant' && (
          <div className="flex-1 h-full flex flex-col">
            <div className="lg:hidden bg-white border-b p-2">
                 <button onClick={() => setIsSidebarOpen(true)} className="p-2">
                    <Menu size={20} className="text-gray-600"/>
                 </button>
            </div>
            <SmartAssistant />
          </div>
        )}

        {activeView === 'online-catalog' && (
          <div className="flex-1 h-full flex flex-col">
            <div className="lg:hidden bg-white border-b p-2">
                 <button onClick={() => setIsSidebarOpen(true)} className="p-2">
                    <Menu size={20} className="text-gray-600"/>
                 </button>
            </div>
            <OnlineCatalog />
          </div>
        )}

        {activeView === 'coupons' && (
          <div className="flex-1 h-full flex flex-col">
            <div className="lg:hidden bg-white border-b p-2">
                 <button onClick={() => setIsSidebarOpen(true)} className="p-2">
                    <Menu size={20} className="text-gray-600"/>
                 </button>
            </div>
            <Coupons />
          </div>
        )}

        {activeView === 'customers' && (
          <div className="flex-1 h-full flex flex-col">
            <div className="lg:hidden bg-white border-b p-2">
                 <button onClick={() => setIsSidebarOpen(true)} className="p-2">
                    <Menu size={20} className="text-gray-600"/>
                 </button>
            </div>
            <Customers />
          </div>
        )}

        {activeView === 'transactions' && (
          <div className="flex-1 h-full flex flex-col">
            <div className="lg:hidden bg-white border-b p-2">
                 <button onClick={() => setIsSidebarOpen(true)} className="p-2">
                    <Menu size={20} className="text-gray-600"/>
                 </button>
            </div>
            <Transactions />
          </div>
        )}

        {activeView === 'analytics' && (
          <div className="flex-1 h-full flex flex-col">
            <div className="lg:hidden bg-white border-b p-2">
                 <button onClick={() => setIsSidebarOpen(true)} className="p-2">
                    <Menu size={20} className="text-gray-600"/>
                 </button>
            </div>
            <Analytics />
          </div>
        )}

        {activeView === 'users' && (
          <div className="flex-1 h-full flex flex-col">
            <div className="lg:hidden bg-white border-b p-2">
                 <button onClick={() => setIsSidebarOpen(true)} className="p-2">
                    <Menu size={20} className="text-gray-600"/>
                 </button>
            </div>
            <Users />
          </div>
        )}

        {activeView === 'settings' && (
          <div className="flex-1 h-full flex flex-col">
            <div className="lg:hidden bg-white border-b p-2">
                 <button onClick={() => setIsSidebarOpen(true)} className="p-2">
                    <Menu size={20} className="text-gray-600"/>
                 </button>
            </div>
            <Settings />
          </div>
        )}

        {activeView === 'help' && (
          <div className="flex-1 h-full flex flex-col">
            <div className="lg:hidden bg-white border-b p-2">
                 <button onClick={() => setIsSidebarOpen(true)} className="p-2">
                    <Menu size={20} className="text-gray-600"/>
                 </button>
            </div>
            <Help />
          </div>
        )}

        {/* Fallback */}
        {!['home', 'new-product', 'checkout', 'orders', 'products', 'smart-assistant', 'online-catalog', 'coupons', 'customers', 'transactions', 'analytics', 'users', 'settings', 'help'].includes(activeView) && (
           <div className="flex-1 flex items-center justify-center flex-col">
              <div className="lg:hidden w-full bg-kyte-dark p-4 text-white flex items-center gap-3 absolute top-0">
                  <button onClick={() => setIsSidebarOpen(true)}>
                      <Menu size={24} />
                  </button>
                  <span>{activeView}</span>
              </div>
              <p className="text-gray-400">View not implemented: {activeView}</p>
           </div>
        )}

      </div>
    </div>
  );
};

export default App;