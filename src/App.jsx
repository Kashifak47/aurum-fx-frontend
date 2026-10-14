import React, { useState, useEffect } from 'react';
import { mockEquityData, mockAllocationData, mockRecentActivity, mockLiveTrading } from './data/mockData.js'
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
import PortfolioView from './components/dashboard/PortfolioView';
import TransactionsView from './components/dashboard/TransactionsView';
import Modal from './components/common/Modal.jsx'
import Toast from './components/common/Toast.jsx'
import LandingPage from './components/landing/LandingPage.jsx'
import AuthPage from './components/auth/AuthPage.jsx'
import SettingsView from './components/dashboard/SettingsView';
import PerformanceView from './components/dashboard/PerformanceView';
import TradingDetailsView from './components/dashboard/TradingDetailsView';
import DocumentsView from './components/dashboard/DocumentsView';
import FundingView from './components/dashboard/FundingView';

import {
  Briefcase,
  ArrowDownRight,
  Wallet,
  AlertTriangle
} from 'lucide-react';

const Dashboard = ({ onSignOut }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Overview');
  const [timeframe, setTimeframe] = useState('1M');

  // Modal, Validation & Toast States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('Deposit');
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Bank Wire (SWIFT/ACH)');
  const [formError, setFormError] = useState('');
  const [toast, setToast] = useState(null);

  const [equityData] = useState(mockEquityData);
  const [allocationData] = useState(mockAllocationData);

  const [activityData, setActivityData] = useState(mockRecentActivity);
  const [balance, setBalance] = useState(24850.00);

  const [tradingData, setTradingData] = useState(mockLiveTrading);

  const showToast = (type, title, message) => {
    setToast({ type, title, message });
  };

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 4000);
    return () => clearTimeout(timer);
  }, [toast]);

  const validateAmountInput = (val, type = modalType) => {
    if (!val || val.trim() === '') {
      setFormError('');
      return false;
    }
    const num = Number(val);
    if (isNaN(num) || num <= 0) {
      setFormError('Please enter a valid positive USD amount.');
      return false;
    }
    if (num < 50) {
      setFormError(`Minimum ${type.toLowerCase()} amount is $50.00 USD.`);
      return false;
    }
    if (type === 'Withdraw' && num > balance) {
      setFormError(`Insufficient funds. Available balance is $${balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}.`);
      return false;
    }
    if (type === 'Deposit' && num > 1000000) {
      setFormError('Maximum single deposit is $1,000,000.00. Contact desk for larger wires.');
      return false;
    }
    setFormError('');
    return true;
  };

  const handleAmountChange = (val) => {
    setAmount(val);
    validateAmountInput(val, modalType);
  };

  const getFilteredEquityData = () => {
    if (timeframe === '1M') return equityData.slice(-13);
    if (timeframe === '3M') return equityData.slice(-18);
    return equityData;
  };

  const handleOpenModal = (type) => {
    setModalType(type);
    setAmount('');
    setFormError('');
    setPaymentMethod('Bank Wire (SWIFT/ACH)');
    setIsModalOpen(true);
  };

  const handleTransactionSubmit = (e) => {
    e.preventDefault();
    if (!validateAmountInput(amount, modalType)) {
      showToast('error', 'Validation Error', formError || 'Please enter a valid amount before confirming.');
      return;
    }

    const numAmount = parseFloat(amount);
    setBalance(prev => modalType === 'Deposit' ? prev + numAmount : prev - numAmount);

    const dateStr = new Date().toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false }).replace(',', '');
    const formattedAmount = numAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    const newTransaction = {
      id: Date.now(),
      date: dateStr,
      type: modalType === 'Deposit' ? 'Deposit' : 'Withdrawal Request',
      icon: modalType === 'Deposit' ? ArrowDownRight : Wallet,
      details: `${modalType === 'Deposit' ? 'From' : 'To'} ${paymentMethod}`,
      amount: `${modalType === 'Deposit' ? '+' : '-'} $${formattedAmount}`,
      status: modalType === 'Deposit' ? 'Completed' : 'Pending',
      positive: modalType === 'Deposit'
    };

    setActivityData(prev => [newTransaction, ...prev]);
    setIsModalOpen(false);

    showToast(
      'success',
      `${modalType} ${modalType === 'Deposit' ? 'Confirmed' : 'Submitted'}`,
      `$${formattedAmount} USD via ${paymentMethod} has been ${modalType === 'Deposit' ? 'credited to your portfolio.' : 'queued for settlement.'
      }`
    );
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

            {activeTab === 'Overview' && (
              <>
                <WelcomeSection onDepositClick={() => handleOpenModal('Deposit')} onWithdrawClick={() => handleOpenModal('Withdraw')} />
                <SummaryCards balance={balance} />
                <div className="flex flex-col xl:flex-row gap-5 sm:gap-6">
                  <div className="flex-1 flex flex-col gap-5 sm:gap-6 xl:w-[72%] w-full min-w-0">
                    <EquityCurve data={getFilteredEquityData()} timeframe={timeframe} setTimeframe={setTimeframe} />
                    <RecentActivity data={activityData} />
                    <LiveTradingOverview data={tradingData} />
                  </div>
                  <div className="xl:w-[28%] w-full flex flex-col gap-5 sm:gap-6">
                    <CurrencyAllocation data={allocationData} />
                    <RiskMetrics />
                    <MajorCurrencyPairs />
                    <BottomWarning />
                  </div>
                </div>
              </>
            )}

            {activeTab === 'Portfolio' && (
              <PortfolioView balance={balance} allocationData={allocationData} liveTrades={tradingData} />
            )}

            {activeTab === 'Transactions' && (
              <TransactionsView data={activityData} />
            )}

            {activeTab === 'Settings' && <SettingsView />}

            {activeTab === 'Performance' && <PerformanceView equityData={equityData} />}

            {activeTab === 'Trading Details' && <TradingDetailsView />}
            {activeTab === 'Documents' && <DocumentsView />}
            {activeTab === 'Deposit / Withdraw' && <FundingView balance={balance} onDeposit={() => handleOpenModal('Deposit')} onWithdraw={() => handleOpenModal('Withdraw')} />}


          </div>
        </main>
      </div>

      {/* Reusable Validated Transaction Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`${modalType} Funds`}
      >
        <form onSubmit={handleTransactionSubmit} className="space-y-4" noValidate>
          {/* Available Balance Banner */}
          <div className="flex items-center justify-between p-3 rounded-lg bg-[#131A2F] border border-[#1E293B] text-xs">
            <span className="text-[#94A3B8]">Available Portfolio Balance</span>
            <span className="font-bold text-white">
              ${balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
          </div>

          {/* Settlement Rail Selector */}
          <div>
            <label className="block text-xs font-medium text-[#94A3B8] mb-1.5">
              Settlement Method
            </label>
            <div className="grid grid-cols-2 gap-2">
              {['Bank Wire (SWIFT/ACH)', 'USDT / USDC Rail'].map((method) => (
                <button
                  type="button"
                  key={method}
                  onClick={() => setPaymentMethod(method)}
                  className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-all ${paymentMethod === method
                      ? 'bg-[#00B5E2]/15 border-[#00B5E2] text-white'
                      : 'bg-[#131A2F] border-[#1E293B] text-[#94A3B8] hover:text-white'
                    }`}
                >
                  {method}
                </button>
              ))}
            </div>
          </div>

          {/* Amount Input with Validation */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-medium text-[#94A3B8]">Amount (USD)</label>
              <span className="text-[10px] text-[#64748B]">Min: $50.00</span>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <span className={formError ? 'text-[#EF4444]' : 'text-[#64748B]'}>$</span>
              </div>
              <input
                type="number"
                min="50"
                step="0.01"
                value={amount}
                onChange={(e) => handleAmountChange(e.target.value)}
                className={`w-full bg-[#131A2F] border text-white rounded-lg pl-8 pr-16 py-2.5 text-sm focus:outline-none focus:ring-1 transition-colors placeholder:text-[#334155] ${formError
                    ? 'border-[#EF4444] focus:border-[#EF4444] focus:ring-[#EF4444]'
                    : 'border-[#1E293B] focus:border-[#00B5E2] focus:ring-[#00B5E2]'
                  }`}
                placeholder="0.00"
              />
              {modalType === 'Withdraw' && (
                <button
                  type="button"
                  onClick={() => handleAmountChange(balance.toFixed(2))}
                  className="absolute inset-y-1.5 right-1.5 px-2.5 bg-[#1E293B] hover:bg-[#334155] text-[#00B5E2] rounded text-[10px] font-bold uppercase tracking-wider transition-colors"
                >
                  MAX
                </button>
              )}
            </div>

            {/* Inline Error Message */}
            {formError && (
              <div className="flex items-center gap-1.5 text-[#EF4444] text-xs mt-1.5">
                <AlertTriangle size={13} className="shrink-0" />
                <span>{formError}</span>
              </div>
            )}

            {/* Quick Select Pills */}
            <div className="flex items-center gap-2 mt-2.5">
              {[500, 1000, 5000, 10000].map((preset) => (
                <button
                  type="button"
                  key={preset}
                  onClick={() => handleAmountChange(String(preset))}
                  className="flex-1 py-1.5 rounded-md bg-[#131A2F] hover:bg-[#1E293B] border border-[#1E293B] text-[11px] text-[#94A3B8] hover:text-white transition-colors"
                >
                  +${preset.toLocaleString()}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={!amount || Boolean(formError)}
              className={`w-full py-2.5 rounded-lg text-white text-sm font-semibold transition-all shadow-lg disabled:opacity-40 disabled:cursor-not-allowed ${modalType === 'Deposit'
                  ? 'bg-[#10B981] hover:bg-[#059669] shadow-[#10B981]/20'
                  : 'bg-[#00B5E2] hover:bg-[#0096cc] shadow-[#00B5E2]/20'
                }`}
            >
              Confirm {modalType}
            </button>
          </div>
          <p className="text-[10px] text-center text-[#64748B]">
            256-bit SSL encrypted instruction. Instant ledger update upon confirmation.
          </p>
        </form>
      </Modal>

      {/* Custom Toast Notification */}
      <Toast toast={toast} onClose={() => setToast(null)} />

      <style dangerouslySetInnerHTML={{
        __html: `
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
    return <LandingPage onNavigate={setCurrentView} />;
  }

  if (currentView === 'login' || currentView === 'register') {
    return <AuthPage type={currentView} onNavigate={setCurrentView} onAuthSuccess={() => setCurrentView('dashboard')} />;
  }

  return <Dashboard onSignOut={() => setCurrentView('landing')} />;
}