import React from 'react';
import { Target, TrendingUp, TrendingDown, BarChart2 } from 'lucide-react';
import Card from '../common/Card';

const TradingDetailsView = () => {
  const closedTrades = [
    { id: 'TRD-1092', pair: 'EUR/USD', type: 'Buy', openDate: 'Sep 10, 2026', closeDate: 'Sep 12, 2026', openPrice: '1.0950', closePrice: '1.1010', pnl: '+ $600.00', win: true },
    { id: 'TRD-1091', pair: 'GBP/USD', type: 'Sell', openDate: 'Sep 08, 2026', closeDate: 'Sep 09, 2026', openPrice: '1.3250', closePrice: '1.3210', pnl: '+ $400.00', win: true },
    { id: 'TRD-1090', pair: 'USD/JPY', type: 'Buy', openDate: 'Sep 05, 2026', closeDate: 'Sep 07, 2026', openPrice: '148.50', closePrice: '148.20', pnl: '- $250.00', win: false },
    { id: 'TRD-1089', pair: 'AUD/USD', type: 'Buy', openDate: 'Sep 01, 2026', closeDate: 'Sep 04, 2026', openPrice: '0.6710', closePrice: '0.6750', pnl: '+ $400.00', win: true },
    { id: 'TRD-1088', pair: 'EUR/USD', type: 'Sell', openDate: 'Aug 28, 2026', closeDate: 'Aug 29, 2026', openPrice: '1.1050', closePrice: '1.1080', pnl: '- $300.00', win: false },
  ];

  return (
    <div className="space-y-5 sm:space-y-6 animate-in fade-in duration-300">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Trading Details</h2>
        <p className="text-xs sm:text-sm text-[#94A3B8] mt-1">Historical ledger of all closed market positions and execution metrics.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Closed Trades", value: "248", icon: BarChart2, color: "text-[#00B5E2]" },
          { label: "Profit Factor", value: "1.85", icon: Target, color: "text-[#10B981]" },
          { label: "Average Win", value: "$412.50", icon: TrendingUp, color: "text-[#10B981]" },
          { label: "Average Loss", value: "-$220.10", icon: TrendingDown, color: "text-[#EF4444]" }
        ].map((stat, idx) => (
          <Card key={idx} className="flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-1.5">
              <stat.icon size={14} className={stat.color} />
              <span className="text-xs text-[#94A3B8]">{stat.label}</span>
            </div>
            <div className="text-xl font-bold text-white">{stat.value}</div>
          </Card>
        ))}
      </div>

      <Card>
        <h3 className="text-base font-semibold text-white mb-4">Trade History</h3>
        <div className="overflow-x-auto custom-scrollbar pb-2">
          <table className="w-full text-sm text-left min-w-[800px]">
            <thead className="text-xs text-[#64748B] border-b border-[#1E293B]">
              <tr>
                <th className="pb-3 font-medium">Ticket ID</th>
                <th className="pb-3 font-medium">Asset</th>
                <th className="pb-3 font-medium">Type</th>
                <th className="pb-3 font-medium">Open Date & Price</th>
                <th className="pb-3 font-medium">Close Date & Price</th>
                <th className="pb-3 font-medium text-right">Net P&L</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1E293B]">
              {closedTrades.map((trade) => (
                <tr key={trade.id} className="hover:bg-[#131A2F]/50 transition-colors">
                  <td className="py-4 text-[#94A3B8] font-mono text-xs">{trade.id}</td>
                  <td className="py-4 font-bold text-white">{trade.pair}</td>
                  <td className="py-4">
                    <span className={`px-2 py-1 rounded text-[10px] uppercase font-bold tracking-wider ${trade.type === 'Buy' ? 'bg-[#10B981]/10 text-[#10B981]' : 'bg-[#EF4444]/10 text-[#EF4444]'}`}>
                      {trade.type}
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="text-white text-xs">{trade.openDate}</div>
                    <div className="text-[#94A3B8] font-mono text-xs">{trade.openPrice}</div>
                  </td>
                  <td className="py-4">
                    <div className="text-white text-xs">{trade.closeDate}</div>
                    <div className="text-[#94A3B8] font-mono text-xs">{trade.closePrice}</div>
                  </td>
                  <td className={`py-4 text-right font-medium font-mono ${trade.win ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>
                    {trade.pnl}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default TradingDetailsView;
