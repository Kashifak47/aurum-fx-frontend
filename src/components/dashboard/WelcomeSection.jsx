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

const WelcomeSection = ({ onDepositClick, onWithdrawClick }) => (
  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
    <div>
      <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Welcome to Aurum FX Capital</h2>
      <p className="text-xs sm:text-sm text-[#94A3B8] mt-1">Managed Forex Trading | Your Capital, Our Strategy</p>
    </div>
    <div className="flex w-full sm:w-auto gap-3">
      <button onClick={onDepositClick} className="flex-1 sm:flex-none bg-[#10B981] hover:bg-[#059669] text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors shadow-lg shadow-[#10B981]/20">
        <PlusCircle size={16} />
        Deposit
      </button>
      <button onClick={onWithdrawClick} className="flex-1 sm:flex-none bg-transparent border border-[#1E293B] text-white hover:bg-[#1E293B] px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors">
        <span className="text-[#94A3B8] hidden sm:inline">—</span>
        Withdraw
      </button>
    </div>
  </div>
);

export default WelcomeSection;
