import React from 'react';
import Card from '../common/Card.jsx'
import {
    Search, Badge, Filter 
} from 'lucide-react';

const TransactionsView = ({ data }) => {
  const [filter, setFilter] = React.useState('All');
  const [search, setSearch] = React.useState('');

  const filteredData = data.filter(item => {
    const matchesFilter = filter === 'All' || item.type.includes(filter);
    const matchesSearch = item.details.toLowerCase().includes(search.toLowerCase()) || 
                          item.amount.toLowerCase().includes(search.toLowerCase()) ||
                          item.type.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-5 sm:space-y-6 animate-in fade-in duration-300">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Ledger & History</h2>
          <p className="text-xs sm:text-sm text-[#94A3B8] mt-1">Full audit trail of deposits, withdrawals, and internal allocations.</p>
        </div>
      </div>

      <Card className="flex flex-col sm:flex-row justify-between gap-4">
        {/* Filter Pills */}
        <div className="flex gap-2 overflow-x-auto custom-scrollbar pb-1 sm:pb-0">
          {['All', 'Deposit', 'Withdrawal', 'Allocation'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                filter === f 
                  ? 'bg-[#00B5E2] text-white shadow-lg shadow-[#00B5E2]/20' 
                  : 'bg-[#131A2F] text-[#94A3B8] hover:text-white border border-[#1E293B]'
              }`}
            >
              {f === 'All' ? 'All Transactions' : `${f}s`}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:w-64 shrink-0">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={14} className="text-[#64748B]" />
          </div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search ledger..."
            className="w-full bg-[#131A2F] border border-[#1E293B] text-white rounded-lg pl-9 pr-4 py-2 text-xs focus:outline-none focus:border-[#00B5E2] transition-colors placeholder:text-[#64748B]"
          />
        </div>
      </Card>

      <Card className="p-0 overflow-hidden">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-sm text-left min-w-[700px]">
            <thead className="text-xs text-[#64748B] bg-[#131A2F]/50 border-b border-[#1E293B]">
              <tr>
                <th className="px-6 py-4 font-medium">Date & Time</th>
                <th className="px-6 py-4 font-medium">Transaction Type</th>
                <th className="px-6 py-4 font-medium">Origin / Destination</th>
                <th className="px-6 py-4 font-medium">Net Amount (USD)</th>
                <th className="px-6 py-4 font-medium text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1E293B]">
              {filteredData.length > 0 ? filteredData.map((row) => (
                <tr key={row.id} className="hover:bg-[#131A2F]/30 transition-colors">
                  <td className="px-6 py-4 text-[#94A3B8] font-mono text-xs whitespace-nowrap">{row.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded flex items-center justify-center bg-[#131A2F] border border-[#1E293B]">
                        <row.icon size={12} className={row.positive ? 'text-[#10B981]' : 'text-[#00B5E2]'} />
                      </div>
                      <span className={`font-medium ${row.positive ? 'text-[#10B981]' : 'text-[#E2E8F0]'}`}>{row.type}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-[#94A3B8] whitespace-nowrap">{row.details}</td>
                  <td className={`px-6 py-4 font-mono font-medium whitespace-nowrap ${row.positive ? 'text-[#10B981]' : 'text-[#E2E8F0]'}`}>
                    {row.amount}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Badge status={row.status} />
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="5" className="px-6 py-12 text-center text-[#64748B] text-sm">
                    <Filter size={24} className="mx-auto mb-3 opacity-20" />
                    No transactions match your current filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default TransactionsView;