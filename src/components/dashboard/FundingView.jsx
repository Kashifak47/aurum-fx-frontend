import React from 'react';
import { Wallet, PlusCircle, ArrowUpRight, Building, Landmark, Clock, CheckCircle2 } from 'lucide-react';
import Card from '../common/Card';

const FundingView = ({ balance, onDeposit, onWithdraw }) => (
  <div className="space-y-5 sm:space-y-6 animate-in fade-in duration-300">
    <div>
      <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Fund Management</h2>
      <p className="text-xs sm:text-sm text-[#94A3B8] mt-1">Manage deposits, request withdrawals, and view settlement times.</p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Balance & Actions */}
      <Card className="lg:col-span-3 flex flex-col sm:flex-row items-center justify-between gap-6 py-8 px-6 border-[#00B5E2]/20 bg-gradient-to-r from-[#131A2F]/80 to-[#0B1221]">
        <div className="flex items-center gap-6 text-center sm:text-left">
          <div className="w-16 h-16 rounded-full bg-[#131A2F] border border-[#1E293B] flex items-center justify-center shrink-0">
            <Wallet size={28} className="text-[#00B5E2]" />
          </div>
          <div>
            <h3 className="text-[#94A3B8] font-medium text-sm mb-1">Available Portfolio Balance</h3>
            <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              ${balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2 mt-2 text-xs text-[#64748B]">
              <Clock size={12} /> Pending Settlement: <span className="text-[#F59E0B] font-medium">$0.00</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col w-full sm:w-auto gap-3 shrink-0">
          <button onClick={onDeposit} className="w-full sm:w-48 bg-gradient-to-r from-[#10B981] to-[#059669] hover:from-[#059669] hover:to-[#047857] text-white px-6 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#10B981]/20 hover:-translate-y-0.5">
            <PlusCircle size={16} /> Deposit Capital
          </button>
          <button onClick={onWithdraw} className="w-full sm:w-48 bg-[#131A2F] border border-[#1E293B] hover:bg-[#1E293B] text-white px-6 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5">
            <ArrowUpRight size={16} /> Withdraw USD
          </button>
        </div>
      </Card>

      {/* Linked Accounts */}
      <Card className="lg:col-span-2">
        <h3 className="text-base font-semibold text-white mb-4">Linked Withdrawal Accounts</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-xl bg-[#131A2F] border border-[#1E293B]">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#0B1221] border border-[#1E293B] flex items-center justify-center"><Building size={20} className="text-[#00B5E2]" /></div>
              <div>
                <h4 className="text-sm font-bold text-white">Chase Business Checking</h4>
                <p className="text-xs text-[#94A3B8] mt-0.5">Account ending in •••• 4921</p>
              </div>
            </div>
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#052E2B] border border-[#064E3B] text-[10px] font-bold text-[#10B981] uppercase tracking-wider">
              <CheckCircle2 size={12} /> Verified
            </span>
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl bg-[#131A2F] border border-[#1E293B]">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#0B1221] border border-[#1E293B] flex items-center justify-center"><Wallet size={20} className="text-[#F59E0B]" /></div>
              <div>
                <h4 className="text-sm font-bold text-white">USDT / USDC Whitelist</h4>
                <p className="text-xs text-[#94A3B8] mt-0.5 font-mono">0x71C...3A92</p>
              </div>
            </div>
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#052E2B] border border-[#064E3B] text-[10px] font-bold text-[#10B981] uppercase tracking-wider">
              <CheckCircle2 size={12} /> Verified
            </span>
          </div>
        </div>
      </Card>

      {/* Wire Instructions */}
      <Card className="bg-[#0B1221] border border-[#1E293B] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-[#10B981]/5 blur-[30px] rounded-full pointer-events-none"></div>
        <div className="flex items-center gap-2 mb-4">
          <Landmark size={18} className="text-[#10B981]" />
          <h3 className="text-base font-semibold text-white">Wire Instructions</h3>
        </div>
        <p className="text-xs text-[#94A3B8] mb-5 leading-relaxed">
          For deposits exceeding $100,000, please remit funds directly to our institutional custody account.
        </p>
        <div className="space-y-3 text-xs">
          <div className="flex justify-between border-b border-[#1E293B] pb-2">
            <span className="text-[#64748B]">Bank Name</span><span className="text-white font-medium text-right">Standard Chartered</span>
          </div>
          <div className="flex justify-between border-b border-[#1E293B] pb-2">
            <span className="text-[#64748B]">Account Name</span><span className="text-white font-medium text-right">Aurum FX Custody</span>
          </div>
          <div className="flex justify-between border-b border-[#1E293B] pb-2">
            <span className="text-[#64748B]">SWIFT Code</span><span className="text-white font-medium text-right font-mono">SCBLUS33XXX</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#64748B]">Reference</span><span className="text-[#00B5E2] font-medium text-right font-mono">AFX-8921-X</span>
          </div>
        </div>
      </Card>
    </div>
  </div>
);

export default FundingView;
