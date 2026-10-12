import Card from '../common/Card.jsx'
import {
  TrendingUp,
} from 'lucide-react';

const LiveTradingOverview = ({ data }) => (
  <Card>
    <div className="flex items-center gap-2 mb-4 sm:mb-5">
      <TrendingUp size={16} className="text-[#10B981]" />
      <h3 className="text-base sm:text-lg font-semibold text-white">Live Trading Overview</h3>
    </div>
    <div className="overflow-x-auto custom-scrollbar pb-2">
      <table className="w-full text-xs sm:text-sm text-left min-w-[500px]">
        <thead className="text-xs text-[#64748B] border-b border-[#1E293B]">
          <tr>
            <th className="pb-3 font-medium">Symbol</th>
            <th className="pb-3 font-medium">Direction</th>
            <th className="pb-3 font-medium">Lot Size</th>
            <th className="pb-3 font-medium">Entry Price</th>
            <th className="pb-3 font-medium">Current Price</th>
            <th className="pb-3 font-medium">P&L (USD)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#1E293B]">
          {data.map((trade) => (
            <tr
              key={trade.id}
              className={`transition-colors duration-500 hover:bg-[#131A2F]/50 ${trade.flash === 'up' ? 'bg-[#10B981]/10' :
                  trade.flash === 'down' ? 'bg-[#EF4444]/10' : ''
                }`}
            >
              <td className="py-3 font-medium text-[#E2E8F0] whitespace-nowrap">{trade.symbol}</td>
              <td className="py-3 whitespace-nowrap">
                <span className={`flex items-center gap-1 text-xs font-medium ${trade.direction === 'Buy' ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${trade.direction === 'Buy' ? 'bg-[#10B981]' : 'bg-[#EF4444]'}`}></span>
                  {trade.direction}
                </span>
              </td>
              <td className="py-3 text-[#94A3B8] whitespace-nowrap">{trade.lotSize}</td>
              <td className="py-3 text-[#94A3B8] whitespace-nowrap">{trade.entryPrice}</td>
              <td className={`py-3 whitespace-nowrap transition-colors duration-300 ${trade.flash === 'up' ? 'text-[#10B981]' :
                  trade.flash === 'down' ? 'text-[#EF4444]' : 'text-[#94A3B8]'
                }`}>
                {trade.currentPrice}
              </td>
              <td className={`py-3 whitespace-nowrap font-medium ${trade.positive ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>
                {trade.pnl}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Card>
);

export default LiveTradingOverview;