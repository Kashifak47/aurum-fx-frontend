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
  PieChart as PieChartIcon,
  X
} from 'lucide-react';

const Sidebar = ({ isOpen, onClose, activeTab, setActiveTab, onLogoClick }) => (
  <>
    {/* Mobile Overlay */}
    {isOpen && (
      <div 
        className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
    )}

    {/* Sidebar Content */}
    <div className={`fixed inset-y-0 left-0 w-64 bg-[#0B1221] border-r border-[#1E293B] flex flex-col z-50 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="p-6 flex items-center justify-between group">
        <div 
          className="cursor-pointer hover:opacity-80 transition-opacity flex items-center gap-3 w-full"
          onClick={onLogoClick}
          title="Return to Home"
        >
          <div className="w-8 h-8 rounded bg-gradient-to-br from-[#F59E0B] to-[#D97706] flex items-center justify-center transform -skew-x-12">
            <span className="text-white font-bold text-xl skew-x-12">A</span>
          </div>
          <div>
            <h1 className="text-white font-semibold text-lg tracking-wide leading-tight group-hover:text-[#F59E0B] transition-colors">AURUM FX</h1>
            <p className="text-[#94A3B8] text-[10px] tracking-[0.2em] font-medium uppercase">
              Trade | Grow | Together
            </p>
          </div>
        </div>
        {/* Mobile Close Button */}
        <button onClick={onClose} className="lg:hidden text-[#94A3B8] hover:text-white ml-2">
          <X size={20} />
        </button>
      </div>

      <nav className="flex-1 px-3 mt-4 space-y-1 overflow-y-auto custom-scrollbar">
        {[
          { icon: LayoutDashboard, label: 'Overview' },
          { icon: Briefcase, label: 'Portfolio' },
          { icon: TrendingUp, label: 'Performance' },
          { icon: ArrowRightLeft, label: 'Transactions' },
          { icon: PlusCircle, label: 'Deposit / Withdraw' },
          { icon: BarChart2, label: 'Trading Details' },
          { icon: FileText, label: 'Documents' },
          { icon: Settings, label: 'Settings' },
        ].map((item, idx) => {
          const isActive = activeTab === item.label;
          return (
            <button
              key={idx}
              onClick={() => {
                setActiveTab(item.label);
                if (window.innerWidth < 1024) onClose(); // Auto-close on mobile
              }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-sm ${
                isActive 
                  ? 'bg-[#1E293B] text-white font-medium' 
                  : 'text-[#94A3B8] hover:bg-[#131A2F] hover:text-white'
              }`}
            >
              <item.icon size={18} className={isActive ? 'text-[#00B5E2]' : 'text-[#64748B]'} />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="p-4 mb-8 lg:mb-4 mx-3 rounded-xl bg-[#131A2F] border border-[#1E293B] mt-auto shrink-0">
        <div className="flex items-start gap-3 mb-3">
          <Shield className="text-[#10B981] mt-0.5 shrink-0" size={18} />
          <p className="text-xs text-[#94A3B8] leading-relaxed">
            Your funds are held in USD and managed transparently.
          </p>
        </div>
        <div className="flex justify-between items-center text-[10px] text-[#64748B]">
          <span>Secure</span>
          <span>•</span>
          <span>Transparent</span>
          <span>•</span>
          <span>Compliant</span>
        </div>
      </div>
    </div>
  </>
);


export default Sidebar;
