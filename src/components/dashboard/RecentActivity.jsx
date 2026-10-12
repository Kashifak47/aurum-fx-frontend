import Card from '../common/Card.jsx'
import Badge from '../common/Badge.jsx'
import {
  ArrowRightLeft,
  Clock,
} from 'lucide-react';

const RecentActivity = ({ data }) => (
  <Card>
    <div className="flex justify-between items-center mb-5">
      <div className="flex items-center gap-2">
        <Clock size={16} className="text-[#94A3B8]" />
        <h3 className="text-base sm:text-lg font-semibold text-white">Recent Activity</h3>
      </div>
      <a href="#" className="text-[10px] sm:text-xs text-[#00B5E2] hover:text-[#00D1FF] flex items-center gap-1">
        View All <ArrowRightLeft size={10} />
      </a>
    </div>
    <div className="overflow-x-auto custom-scrollbar pb-2">
      <table className="w-full text-xs sm:text-sm text-left min-w-[600px]">
        <thead className="text-xs text-[#64748B] border-b border-[#1E293B]">
          <tr>
            <th className="pb-3 font-medium">Date & Time</th>
            <th className="pb-3 font-medium">Type</th>
            <th className="pb-3 font-medium">Details</th>
            <th className="pb-3 font-medium">Amount (USD)</th>
            <th className="pb-3 font-medium text-right">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#1E293B]">
          {data.map((row) => (
            <tr key={row.id} className="hover:bg-[#131A2F]/50 transition-colors">
              <td className="py-3 text-[#94A3B8] whitespace-nowrap">{row.date}</td>
              <td className="py-3 whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <div className={`w-5 h-5 rounded flex items-center justify-center bg-[#131A2F]`}>
                    <row.icon size={12} className={row.positive ? 'text-[#10B981]' : 'text-[#00B5E2]'} />
                  </div>
                  <span className={row.positive ? 'text-[#10B981]' : 'text-[#00B5E2]'}>{row.type}</span>
                </div>
              </td>
              <td className="py-3 text-[#E2E8F0] whitespace-nowrap">{row.details}</td>
              <td className="py-3 text-[#E2E8F0] whitespace-nowrap">{row.amount}</td>
              <td className="py-3 text-right">
                <Badge status={row.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Card>
);

export default RecentActivity;