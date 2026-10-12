import Card from '../common/Card.jsx'
import {
  LayoutDashboard,
  Briefcase,
  TrendingUp,
  ArrowRightLeft,
  PlusCircle,
  BarChart2,
  FileText,
  Settings,
  Shield,
  Globe,
  Bell,
  ChevronDown,
  Download,
  Info,
  AlertTriangle,
  ArrowUpRight,
  ArrowDownRight,
  Wallet,
  Activity,
  Layers,
  CheckCircle2,
  Clock,
  User,
  PieChart as PieChartIcon
} from 'lucide-react';


const SummaryCards = ({ balance }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
    <Card>
      <div className="flex items-center gap-2 mb-2">
        <Wallet size={16} className="text-[#94A3B8]" />
        <h3 className="text-xs sm:text-sm text-[#94A3B8]">Total Investment Balance</h3>
      </div>
      <div className="text-xl sm:text-2xl font-bold text-white mb-1">
        ${balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </div>
      <div className="text-[10px] sm:text-xs text-[#64748B]">(in USD)</div>
    </Card>
    <Card>
      <div className="flex items-center gap-2 mb-2">
        <Activity size={16} className="text-[#10B981]" />
        <h3 className="text-xs sm:text-sm text-[#94A3B8]">This Month Return</h3>
      </div>
      <div className="text-xl sm:text-2xl font-bold text-[#10B981] mb-1">+1.24%</div>
      <div className="flex items-center gap-1 text-[10px] sm:text-xs text-[#64748B]">
        (Illustrative) <Info size={12} />
      </div>
    </Card>
    <Card>
      <div className="flex items-center gap-2 mb-2">
        <Layers size={16} className="text-[#94A3B8]" />
        <h3 className="text-xs sm:text-sm text-[#94A3B8]">Current NAV</h3>
      </div>
      <div className="text-xl sm:text-2xl font-bold text-white mb-1">$25,161.20</div>
      <div className="text-[10px] sm:text-xs text-[#64748B]">(Includes unrealized P&L)</div>
    </Card>
    <Card>
      <div className="flex items-center gap-2 mb-2">
        <TrendingUp size={16} className="text-[#10B981]" />
        <h3 className="text-xs sm:text-sm text-[#94A3B8]">Total Profit / Loss</h3>
      </div>
      <div className="text-xl sm:text-2xl font-bold text-[#10B981] mb-1">+$311.20</div>
      <div className="flex items-center gap-1 text-[10px] sm:text-xs text-[#64748B]">
        (1.25% since inception) <Info size={12} />
      </div>
    </Card>
  </div>
);

export default SummaryCards;