import Card from '../common/Card.jsx'
import {
  Shield,
  Layers,
  PieChart as PieChartIcon
} from 'lucide-react';

const RiskMetrics = () => (
  <Card>
    <h3 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-5">Risk Metrics</h3>
    <div className="grid grid-cols-1 min-[400px]:grid-cols-3 xl:grid-cols-3 gap-4">
       <div className="flex flex-row min-[400px]:flex-col xl:flex-col items-center min-[400px]:items-start justify-between min-[400px]:justify-start">
          <div className="flex items-center gap-1.5 mb-0 min-[400px]:mb-2">
            <Shield size={14} className="text-[#00B5E2]" />
            <span className="text-xs text-[#94A3B8]">Max Drawdown</span>
          </div>
          <div className="text-right min-[400px]:text-left">
            <div className="text-base sm:text-lg font-semibold text-white">-4.32%</div>
            <div className="text-[10px] text-[#94A3B8] mt-0.5 sm:mt-1 hidden min-[400px]:block">(Since inception)</div>
          </div>
       </div>
       <div className="flex flex-row min-[400px]:flex-col xl:flex-col items-center min-[400px]:items-start justify-between min-[400px]:justify-start">
          <div className="flex items-center gap-1.5 mb-0 min-[400px]:mb-2">
            <PieChartIcon size={14} className="text-[#00B5E2]" />
            <span className="text-xs text-[#94A3B8]">Current Exposure</span>
          </div>
          <div className="text-right min-[400px]:text-left">
            <div className="text-base sm:text-lg font-semibold text-white">78%</div>
            <div className="text-[10px] text-[#94A3B8] mt-0.5 sm:mt-1 hidden min-[400px]:block">(of total capital)</div>
          </div>
       </div>
       <div className="flex flex-row min-[400px]:flex-col xl:flex-col items-center min-[400px]:items-start justify-between min-[400px]:justify-start">
          <div className="flex items-center gap-1.5 mb-0 min-[400px]:mb-2">
            <Layers size={14} className="text-[#00B5E2]" />
            <span className="text-xs text-[#94A3B8]">Open Positions</span>
          </div>
          <div className="text-right min-[400px]:text-left">
            <div className="text-base sm:text-lg font-semibold text-white">5</div>
            <div className="text-[10px] text-[#94A3B8] mt-0.5 sm:mt-1 hidden min-[400px]:block">(Currency pairs)</div>
          </div>
       </div>
    </div>
  </Card>
);

export default RiskMetrics;