import React, { useState, useEffect } from 'react';
import {mockEquityData,mockAllocationData,mockRecentActivity,mockLiveTrading} from './data/mockData.js'
import Sidebar from './components/layout/Sidebar.jsx'
import Header from './components/layout/Header.jsx'
import WelcomeSection from './components/dashboard/WelcomeSection.jsx'
import SummaryCards from './components/dashboard/SummaryCards.jsx'
import RiskMetrics from './components/dashboard/RiskMetrics.jsx'
import RecentActivity from './components/dashboard/RecentActivity.jsx'
import MajorCurrencyPairs from './components/dashboard/MajorCurrencyPairs.jsx'
import LiveTradingOverview from './components/dashboard/LiveTradingOverview.jsx'
import EquityCurve from './components/dashboard/EquityCurve.jsx'
import CurrencyAllocation from './components/dashboard/CurrencyAllocation.jsx'
import BottomWarning from './components/dashboard/BottomWarning.jsx'
import Modal from './components/common/Modal.jsx'
import LandingPage from './components/landing/LandingPage.jsx'
import {
  Briefcase,
  ArrowDownRight,
  Wallet
} from 'lucide-react';

const Dashboard = ({ onSignOut }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Overview');
  const [timeframe, setTimeframe] = useState('1M');
  
  // Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('Deposit'); 
  const [amount, setAmount] = useState('');
  
  const [equityData] = useState(mockEquityData);
  const [allocationData] = useState(mockAllocationData);
  
  const [activityData, setActivityData] = useState(mockRecentActivity);
  const [balance, setBalance] = useState(24850.00);
  
  const [tradingData, setTradingData] = useState(mockLiveTrading);

  const getFilteredEquityData = () => {
    if (timeframe === '1M') return equityData.slice(-13);
    if (timeframe === '3M') return equityData.slice(-18);
    return equityData;
  };

  const handleOpenModal = (type) => {
    setModalType(type);
    setAmount('');
    setIsModalOpen(true);
  };

  const handleTransactionSubmit = (e) => {
    e.preventDefault();
    const numAmount = parseFloat(amount);
    
    if (isNaN(numAmount) || numAmount <= 0) return;

    if (modalType === 'Withdraw' && numAmount > balance) {
      alert("Insufficient funds for this withdrawal.");
      return;
    }
    
    setBalance(prev => modalType === 'Deposit' ? prev + numAmount : prev - numAmount);

    const dateStr = new Date().toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false }).replace(',', '');
    
    const newTransaction = {
      id: Date.now(),
      date: dateStr,
      type: modalType,
      icon: modalType === 'Deposit' ? ArrowDownRight : Wallet,
      details: modalType === 'Deposit' ? 'From Bank Account' : 'To Bank Account',
      amount: `${modalType === 'Deposit' ? '+' : '-'} $${numAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      status: 'Pending',
      positive: modalType === 'Deposit'
    };

    setActivityData(prev => [newTransaction, ...prev]);
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (activeTab !== 'Overview') return;

    const interval = setInterval(() => {
      setTradingData(currentData => currentData.map(trade => {
        const isJpy = trade.symbol.includes('JPY');
        const multiplier = isJpy ? 0.1 : 0.001; 
        const fluctuation = (Math.random() * (multiplier * 2)) - multiplier;
        
        const oldPrice = parseFloat(trade.currentPrice);
        const newPrice = (oldPrice + fluctuation).toFixed(isJpy ? 2 : 4);
        
        const isUp = newPrice > oldPrice;
        const pnlChange = isUp ? (Math.random() * 5 + 1) : -(Math.random() * 5 + 1);
        
        const currentPnlValue = parseFloat(trade.pnl.replace('+', '').replace(',', ''));
        const newPnlValue = currentPnlValue + pnlChange;
        const formattedPnl = (newPnlValue >= 0 ? '+' : '') + newPnlValue.toFixed(2);
        
        return {
          ...trade,
          currentPrice: newPrice,
          pnl: formattedPnl,
          positive: newPnlValue >= 0,
          flash: isUp ? 'up' : 'down' 
        };
      }));

      setTimeout(() => {
        setTradingData(data => data.map(t => ({ ...t, flash: null })));
      }, 500);

    }, 4000); 

    return () => clearInterval(interval);
  }, [activeTab]);

  return (
    <div className="flex h-screen bg-[#070B14] font-sans selection:bg-[#00B5E2]/30 overflow-hidden relative">
      
      {/* Responsive Sidebar */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onLogoClick={onSignOut}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col w-full lg:ml-64 overflow-hidden h-screen">
        <Header onMenuClick={() => setIsSidebarOpen(true)} onSignOut={onSignOut} />

        {/* Scrollable Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 custom-scrollbar">
          <div className="max-w-7xl mx-auto space-y-5 sm:space-y-6">
            
            {activeTab === 'Overview' ? (
              <>
                <WelcomeSection 
                  onDepositClick={() => handleOpenModal('Deposit')}
                  onWithdrawClick={() => handleOpenModal('Withdraw')}
                />
                <SummaryCards balance={balance} />

                {/* TWO-COLUMN GRID */}
                <div className="flex flex-col xl:flex-row gap-5 sm:gap-6">
                  
                  {/* LEFT COLUMN */}
                  <div className="flex-1 flex flex-col gap-5 sm:gap-6 xl:w-[72%] w-full min-w-0">
                    <EquityCurve 
                      data={getFilteredEquityData()} 
                      timeframe={timeframe}
                      setTimeframe={setTimeframe}
                    />
                    <RecentActivity data={activityData} />
                    <LiveTradingOverview data={tradingData} />
                  </div>

                  {/* RIGHT COLUMN */}
                  <div className="xl:w-[28%] w-full flex flex-col gap-5 sm:gap-6">
                    <CurrencyAllocation data={allocationData} />
                    <RiskMetrics />
                    <MajorCurrencyPairs />
                    <BottomWarning />
                  </div>

                </div>
              </>
            ) : (
              // Navigation Placeholder
              <div className="flex flex-col items-center justify-center h-[60vh] text-center px-4 animate-in fade-in duration-500">
                <div className="w-16 h-16 bg-[#131A2F] rounded-full flex items-center justify-center mb-4 border border-[#1E293B]">
                  <Briefcase size={24} className="text-[#00B5E2]" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">{activeTab} Dashboard</h2>
                <p className="text-sm text-[#94A3B8] max-w-md leading-relaxed">
                  This section is currently under development. Once the Spring Boot API is connected, you will be able to manage your {activeTab.toLowerCase()} data here.
                </p>
                <button 
                  onClick={() => setActiveTab('Overview')}
                  className="mt-6 text-sm text-[#00B5E2] hover:text-white transition-colors"
                >
                  &larr; Return to Overview
                </button>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Reusable Transaction Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title={`${modalType} Funds`}
      >
        <form onSubmit={handleTransactionSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#94A3B8] mb-1.5">Amount (USD)</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-[#64748B]">$</span>
              </div>
              <input
                type="number"
                min="1"
                step="0.01"
                required
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-[#131A2F] border border-[#1E293B] text-white rounded-lg pl-8 pr-4 py-2.5 focus:outline-none focus:border-[#00B5E2] focus:ring-1 focus:ring-[#00B5E2] transition-colors placeholder:text-[#334155]"
                placeholder="0.00"
              />
            </div>
          </div>
          <div className="pt-2">
            <button 
              type="submit"
              className={`w-full py-2.5 rounded-lg text-white font-medium transition-colors shadow-lg ${
                modalType === 'Deposit' 
                  ? 'bg-[#10B981] hover:bg-[#059669] shadow-[#10B981]/20' 
                  : 'bg-[#00B5E2] hover:bg-[#0096cc] shadow-[#00B5E2]/20'
              }`}
            >
              Confirm {modalType}
            </button>
          </div>
          <p className="text-[10px] text-center text-[#64748B] mt-2">
            Secure SSL encrypted transaction. Standard processing times apply.
          </p>
        </form>
      </Modal>

      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent; 
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #1E293B; 
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #334155; 
        }
      `}} />
    </div>
  );
}

export default function App() {
  const [currentView, setCurrentView] = useState('landing');

  if (currentView === 'landing') {
    return <LandingPage onEnter={() => setCurrentView('dashboard')} />;
  }

  return <Dashboard onSignOut={() => setCurrentView('landing')} />;
}