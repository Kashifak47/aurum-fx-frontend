import React, { useState } from 'react';import {
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
  Menu,
  X,
  LogOut
} from 'lucide-react';

const Header = ({ onMenuClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);

  const notifications = [
    { id: 1, title: 'Trade Executed', time: '2 mins ago', desc: 'Buy 1.00 EUR/USD at 1.1025', unread: true },
    { id: 2, title: 'Deposit Successful', time: '1 hour ago', desc: '$1,000.00 has been credited.', unread: true },
    { id: 3, title: 'System Maintenance', time: 'Yesterday', desc: 'Scheduled maintenance this weekend.', unread: false },
  ];

  return (
    <header className="h-16 border-b border-[#1E293B] bg-[#070B14] flex items-center justify-between lg:justify-end px-4 sm:px-8 sticky top-0 z-10 w-full">
      {/* Hamburger Menu for Mobile */}
      <button onClick={onMenuClick} className="lg:hidden text-[#94A3B8] hover:text-white p-2 -ml-2 rounded-md hover:bg-[#131A2F]">
        <Menu size={24} />
      </button>

      <div className="flex items-center gap-4 sm:gap-6">
        <div className="flex items-center gap-2 cursor-pointer hover:bg-[#131A2F] px-2 py-1 rounded-md transition-colors">
          <Globe size={16} className="text-[#94A3B8]" />
          <span className="text-sm text-white hidden sm:inline">USD</span>
          <ChevronDown size={14} className="text-[#94A3B8]" />
        </div>
        
        {/* Notifications Dropdown Container */}
        <div className="relative">
          <button 
            onClick={() => setIsNotifOpen(!isNotifOpen)}
            className="text-[#94A3B8] hover:text-white transition-colors relative p-1"
          >
            <Bell size={18} />
            <span className="absolute top-0 right-0 w-2 h-2 bg-[#EF4444] rounded-full border border-[#070B14]"></span>
          </button>

          {}
          {isNotifOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setIsNotifOpen(false)}></div>
              
              <div className="absolute right-0 mt-3 w-[260px] sm:w-80 bg-[#0B1221] border border-[#1E293B] rounded-xl shadow-2xl py-1.5 sm:py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="flex justify-between items-center px-3 sm:px-4 py-2 sm:py-3 border-b border-[#1E293B] mb-1">
                  <p className="text-xs sm:text-sm font-semibold text-white">Notifications</p>
                  <button className="text-[9px] sm:text-[10px] text-[#00B5E2] hover:text-[#00D1FF]">Mark all read</button>
                </div>
                <div className="max-h-[240px] sm:max-h-[300px] overflow-y-auto custom-scrollbar">
                  {notifications.map((notif) => (
                    <div key={notif.id} className="px-3 sm:px-4 py-2.5 sm:py-3 hover:bg-[#131A2F] transition-colors cursor-pointer border-b border-[#1E293B]/50 last:border-0 relative">
                      {notif.unread && <span className="absolute left-1.5 sm:left-2 top-3.5 sm:top-4 w-1.5 h-1.5 bg-[#00B5E2] rounded-full"></span>}
                      <div className="pl-2.5 sm:pl-3">
                        <div className="flex justify-between items-start mb-0.5 gap-2">
                          <p className={`text-xs sm:text-sm leading-tight ${notif.unread ? 'text-white font-medium' : 'text-[#E2E8F0]'}`}>{notif.title}</p>
                          <span className="text-[9px] sm:text-[10px] text-[#64748B] whitespace-nowrap">{notif.time}</span>
                        </div>
                        <p className="text-[10px] sm:text-xs text-[#94A3B8] leading-relaxed mt-1 sm:mt-0">{notif.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-3 sm:px-4 py-2 mt-1 border-t border-[#1E293B]">
                  <button className="w-full text-center text-[10px] sm:text-xs text-[#94A3B8] hover:text-white transition-colors">
                    View all notifications
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="w-px h-6 bg-[#1E293B] hidden sm:block"></div>
        
        {/* Profile Dropdown Container */}
        <div className="relative">
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 rounded-full bg-[#131A2F] border border-[#1E293B] flex items-center justify-center text-[#94A3B8]">
              <User size={16} />
            </div>
            <div className="hidden sm:flex items-center gap-1 text-sm text-white">
              <span>Hi, Investor</span>
              <ChevronDown size={14} className={`text-[#94A3B8] transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </div>
          </button>

          {/* The Dropdown Menu */}
          {isDropdownOpen && (
            <>
              {/* Invisible overlay to catch outside clicks */}
              <div 
                className="fixed inset-0 z-40" 
                onClick={() => setIsDropdownOpen(false)}
              ></div>
              
              {/* Dropdown panel */}
              <div className="absolute right-0 mt-3 w-56 bg-[#0B1221] border border-[#1E293B] rounded-xl shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="px-4 py-3 border-b border-[#1E293B] mb-2">
                  <p className="text-sm font-semibold text-white">Investor Account</p>
                  <p className="text-xs text-[#94A3B8] mt-0.5">investor@aurumfx.com</p>
                </div>
                <button className="w-full text-left px-4 py-2.5 text-sm text-[#94A3B8] hover:text-white hover:bg-[#131A2F] flex items-center gap-3 transition-colors">
                  <User size={16} /> My Profile
                </button>
                <button className="w-full text-left px-4 py-2.5 text-sm text-[#94A3B8] hover:text-white hover:bg-[#131A2F] flex items-center gap-3 transition-colors">
                  <Settings size={16} /> Account Settings
                </button>
                <div className="px-3 py-2">
                  <button className="w-full text-left px-4 py-2.5 text-sm text-[#EF4444] hover:bg-[#EF4444]/10 rounded-lg flex items-center gap-3 transition-colors">
                    <LogOut size={16} /> Sign Out
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};



export default Header;
