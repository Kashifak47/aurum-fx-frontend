import Card from '../common/Card.jsx'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const CurrencyAllocation = ({ data }) => (
  <Card className="h-[300px] sm:h-[340px] flex flex-col">
    <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-6">Currency Allocation</h3>
    <div className="flex flex-col h-full items-center justify-center sm:-mt-4">
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} innerRadius={45} outerRadius={60} paddingAngle={2} dataKey="value" stroke="none">
              {data.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-[9px] sm:text-[10px] text-[#94A3B8]">Total Exposure</span>
          <span className="text-xs sm:text-sm font-bold text-white">100%</span>
        </div>
      </div>
      <div className="w-full space-y-2 px-2">
        {data.map((item, idx) => (
          <div key={idx} className="flex justify-between items-center text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></div>
              <span className="text-[#E2E8F0]">{item.name}</span>
            </div>
            <span className="text-[#94A3B8]">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  </Card>
);

export default CurrencyAllocation;