import Card from '../common/Card.jsx'
import {
  TrendingUp,
} from 'lucide-react';

const MajorCurrencyPairs = () => (
  <Card className="flex flex-col h-full justify-between">
    <div>
      <div className="flex items-center gap-2 mb-3">
        <TrendingUp size={16} className="text-[#10B981]" />
        <h3 className="text-sm font-semibold text-white">Trade Only in Major Currency Pairs</h3>
      </div>
      <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
        We focus on liquid and highly tradable forex pairs to manage risk and maintain stability.
      </p>
    </div>
    <div className="flex flex-wrap gap-2">
      {['EUR/USD', 'GBP/USD', 'USD/JPY', 'AUD/USD'].map((pair) => (
        <span key={pair} className="px-3 py-1.5 bg-[#131A2F] border border-[#1E293B] rounded-full text-[11px] text-[#E2E8F0]">
          {pair}
        </span>
      ))}
    </div>
  </Card>
);

export default MajorCurrencyPairs;