import {
    RefreshCw 
} from 'lucide-react';
import Card from '../common/Card.jsx'

const PortfolioView = ({ balance, allocationData, liveTrades }) => (
  <div className="space-y-5 sm:space-y-6 animate-in fade-in duration-300">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Portfolio Holdings</h2>
        <p className="text-xs sm:text-sm text-[#94A3B8] mt-1">Real-time asset allocation and open positions.</p>
      </div>
      <button className="bg-[#131A2F] border border-[#1E293B] hover:bg-[#1E293B] text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
        <RefreshCw size={14} className="text-[#00B5E2]" />
        Rebalance Portfolio
      </button>
    </div>

    {/* Allocation Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {allocationData.map((asset, idx) => (
        <Card key={idx} className="relative overflow-hidden">
          <div className={`absolute top-0 right-0 w-16 h-16 rounded-bl-full opacity-10`} style={{ backgroundColor: asset.color }}></div>
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: asset.color }}></div>
              <span className="font-bold text-white">{asset.name}</span>
            </div>
            <span className="text-xs font-mono text-[#94A3B8]">{asset.value}%</span>
          </div>
          <div className="text-2xl font-bold text-white relative z-10">
            ${(balance * (asset.value / 100)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
          <div className="text-[10px] text-[#64748B] mt-1 relative z-10">Allocated USD Capital</div>
        </Card>
      ))}
    </div>

    {/* Detailed Positions Table */}
    <Card>
      <h3 className="text-lg font-semibold text-white mb-4">Active Market Positions</h3>
      <div className="overflow-x-auto custom-scrollbar pb-2">
        <table className="w-full text-sm text-left min-w-[700px]">
          <thead className="text-xs text-[#64748B] border-b border-[#1E293B]">
            <tr>
              <th className="pb-3 font-medium">Asset Pair</th>
              <th className="pb-3 font-medium">Type</th>
              <th className="pb-3 font-medium">Exposure (Lots)</th>
              <th className="pb-3 font-medium">Entry Rate</th>
              <th className="pb-3 font-medium">Market Rate</th>
              <th className="pb-3 font-medium text-right">Unrealized P&L</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1E293B]">
            {liveTrades.map((trade) => (
              <tr key={trade.id} className="hover:bg-[#131A2F]/50 transition-colors">
                <td className="py-4 font-medium text-white">{trade.symbol}</td>
                <td className="py-4">
                  <span className={`px-2 py-1 rounded text-[10px] uppercase font-bold tracking-wider ${trade.direction === 'Buy' ? 'bg-[#10B981]/10 text-[#10B981]' : 'bg-[#EF4444]/10 text-[#EF4444]'}`}>
                    {trade.direction}
                  </span>
                </td>
                <td className="py-4 text-[#94A3B8]">{trade.lotSize}</td>
                <td className="py-4 text-[#94A3B8] font-mono">{trade.entryPrice}</td>
                <td className="py-4 text-[#E2E8F0] font-mono">{trade.currentPrice}</td>
                <td className={`py-4 text-right font-medium font-mono ${trade.positive ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>
                  {trade.pnl} USD
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  </div>
);

export default PortfolioView;
