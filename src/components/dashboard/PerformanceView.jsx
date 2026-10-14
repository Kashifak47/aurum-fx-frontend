import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, Shield, CheckCircle2, TrendingUp } from 'lucide-react';
import Card from '../common/Card'; // Adjust path as needed

const PerformanceView = ({ equityData }) => {
  // Generate dummy monthly data based on equityData
  const monthlyData = [
    { month: 'Jan', return: 1.2, benchmark: 0.8 },
    { month: 'Feb', return: 0.9, benchmark: 0.5 },
    { month: 'Mar', return: 1.5, benchmark: 1.1 },
    { month: 'Apr', return: -0.4, benchmark: -0.8 },
    { month: 'May', return: 2.1, benchmark: 1.2 },
    { month: 'Jun', return: 1.1, benchmark: 0.9 },
    { month: 'Jul', return: 1.8, benchmark: 1.4 },
    { month: 'Aug', return: 0.5, benchmark: 0.2 },
    { month: 'Sep', return: 1.24, benchmark: 0.7 },
  ];

  return (
    <div className="space-y-5 sm:space-y-6 animate-in fade-in duration-300">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Performance Analytics</h2>
        <p className="text-xs sm:text-sm text-[#94A3B8] mt-1">Detailed statistical breakdown of your managed portfolio.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Sharpe Ratio", value: "2.14", desc: "Risk-adjusted return", icon: Activity, color: "text-[#00B5E2]" },
          { label: "Max Drawdown", value: "-4.32%", desc: "Peak-to-trough drop", icon: Shield, color: "text-[#10B981]" },
          { label: "Win Rate", value: "68.5%", desc: "Profitable trades", icon: CheckCircle2, color: "text-[#F59E0B]" },
          { label: "Alpha", value: "+4.1%", desc: "vs. Benchmark", icon: TrendingUp, color: "text-[#00B5E2]" }
        ].map((stat, idx) => (
          <Card key={idx} className="flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-1.5">
              <stat.icon size={14} className={stat.color} />
              <span className="text-xs text-[#94A3B8]">{stat.label}</span>
            </div>
            <div className="text-xl font-bold text-white">{stat.value}</div>
            <div className="text-[10px] text-[#64748B] mt-0.5">{stat.desc}</div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 h-[400px] flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-base font-semibold text-white">Monthly Returns vs Benchmark</h3>
            <div className="flex items-center gap-4 text-[10px]">
              <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#10B981]"></span><span className="text-[#94A3B8]">Aurum FX</span></div>
              <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#1E293B]"></span><span className="text-[#94A3B8]">S&P 500</span></div>
            </div>
          </div>
          <div className="flex-1 w-full -ml-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlyData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1E293B" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 10 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 10 }} tickFormatter={(val) => `${val}%`} dx={-5} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0B1221', borderColor: '#1E293B', color: '#fff', borderRadius: '8px' }} 
                  itemStyle={{ color: '#10B981' }} 
                  formatter={(value) => [`${value}%`, 'Return']} 
                />
                <Area type="monotone" dataKey="return" stroke="#10B981" strokeWidth={2} fillOpacity={0.2} fill="#10B981" />
                <Area type="monotone" dataKey="benchmark" stroke="#64748B" strokeWidth={2} fillOpacity={0.1} fill="#64748B" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="flex flex-col h-[400px]">
          <h3 className="text-base font-semibold text-white mb-4">Trade Distribution</h3>
          <div className="flex-1 flex flex-col justify-center gap-6">
             <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-[#94A3B8]">Long Positions (Buy)</span>
                  <span className="text-white font-medium">54%</span>
                </div>
                <div className="w-full h-2 bg-[#131A2F] rounded-full overflow-hidden">
                  <div className="h-full bg-[#10B981] rounded-full" style={{ width: '54%' }}></div>
                </div>
             </div>
             <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-[#94A3B8]">Short Positions (Sell)</span>
                  <span className="text-white font-medium">46%</span>
                </div>
                <div className="w-full h-2 bg-[#131A2F] rounded-full overflow-hidden">
                  <div className="h-full bg-[#EF4444] rounded-full" style={{ width: '46%' }}></div>
                </div>
             </div>
             <div className="mt-4 p-4 rounded-lg bg-[#131A2F] border border-[#1E293B]">
               <div className="text-xs text-[#94A3B8] mb-1">Average Holding Time</div>
               <div className="text-lg font-bold text-white">4.2 Days</div>
               <div className="text-[10px] text-[#64748B] mt-1">Swing trading strategy profile</div>
             </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PerformanceView;
