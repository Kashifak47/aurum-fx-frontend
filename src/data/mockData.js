// ==========================================
// MOCK DATA (Simulates Spring Boot Backend)
// ==========================================
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

export const mockEquityData = [
  { date: 'Jan 15', value: 15000 },
  { date: 'Feb 15', value: 15500 },
  { date: 'Mar 15', value: 16200 },
  { date: 'Apr 15', value: 15800 },
  { date: 'May 15', value: 17000 },
  { date: 'Jun 15', value: 17500 },
  { date: 'Jul 15', value: 18100 },
  { date: 'Aug 01', value: 17900 },
  { date: 'Aug 10', value: 18200 },
  { date: 'Aug 20', value: 18500 },
  { date: 'Aug 22', value: 19200 },
  { date: 'Aug 25', value: 19100 },
  { date: 'Aug 27', value: 20500 },
  { date: 'Aug 30', value: 21200 },
  { date: 'Sep 01', value: 20800 },
  { date: 'Sep 03', value: 21800 },
  { date: 'Sep 06', value: 21500 },
  { date: 'Sep 08', value: 22100 },
  { date: 'Sep 10', value: 22900 },
  { date: 'Sep 13', value: 22700 },
  { date: 'Sep 15', value: 23500 },
  { date: 'Sep 16', value: 24850 },
];

export const mockAllocationData = [
  { name: 'EUR/USD', value: 35, color: '#00B5E2' },
  { name: 'GBP/USD', value: 25, color: '#00D1FF' },
  { name: 'USD/JPY', value: 20, color: '#8B5CF6' },
  { name: 'AUD/USD', value: 20, color: '#F59E0B' },
];

export const mockRecentActivity = [
  { id: 1, date: 'Sep 16, 2026 14:32', type: 'Deposit', icon: ArrowDownRight, details: 'From Bank Account', amount: '+ $1,000.00', status: 'Completed', positive: true },
  { id: 2, date: 'Sep 15, 2026 10:21', type: 'Allocation', icon: ArrowUpRight, details: 'To Trading Account', amount: '- $1,000.00', status: 'Completed', positive: false },
  { id: 3, date: 'Sep 14, 2026 18:45', type: 'Withdrawal Request', icon: Wallet, details: 'To Bank Account', amount: '- $500.00', status: 'Pending', positive: false },
  { id: 4, date: 'Sep 12, 2026 09:10', type: 'Deposit', icon: ArrowDownRight, details: 'From Bank Account', amount: '+ $2,000.00', status: 'Completed', positive: true },
  { id: 5, date: 'Sep 10, 2026 16:05', type: 'Allocation', icon: ArrowUpRight, details: 'To Trading Account', amount: '- $1,500.00', status: 'Completed', positive: false },
];

export const mockLiveTrading = [
  { id: 1, symbol: 'EUR/USD', direction: 'Buy', lotSize: '1.00', entryPrice: '1.1025', currentPrice: '1.1048', pnl: '+230.00', positive: true },
  { id: 2, symbol: 'GBP/USD', direction: 'Buy', lotSize: '0.80', entryPrice: '1.3180', currentPrice: '1.3204', pnl: '+192.00', positive: true },
  { id: 3, symbol: 'USD/JPY', direction: 'Sell', lotSize: '1.20', entryPrice: '149.80', currentPrice: '149.42', pnl: '+456.00', positive: true },
  { id: 4, symbol: 'AUD/USD', direction: 'Buy', lotSize: '0.70', entryPrice: '0.6750', currentPrice: '0.6778', pnl: '+196.00', positive: true },
  { id: 5, symbol: 'USD/CAD', direction: 'Sell', lotSize: '0.60', entryPrice: '1.3650', currentPrice: '1.3621', pnl: '+174.00', positive: true },
];
