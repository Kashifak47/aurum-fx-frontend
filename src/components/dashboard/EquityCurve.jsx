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


const EquityCurve = ({ data, timeframe, setTimeframe }) => (
  <Card className="h-[300px] sm:h-[340px] flex flex-col">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-3 sm:gap-0">
      <div className="flex items-center gap-2">
        <h3 className="text-base sm:text-lg font-semibold text-white">Equity Curve</h3>
        <span className="text-[10px] sm:text-xs text-[#94A3B8] font-normal">(Illustrative)</span>
      </div>
      <div className="flex bg-[#131A2F] rounded-lg p-1 border border-[#1E293B] w-full sm:w-auto justify-between sm:justify-start">
        {['1M', '3M', '6M', '1Y', 'All'].map((tf) => (
          <button 
            key={tf}
            onClick={() => setTimeframe(tf)}
            className={`px-2 sm:px-3 py-1 text-xs rounded-md font-medium transition-colors ${
              timeframe === tf ? 'bg-[#10B981] text-white shadow-sm' : 'text-[#94A3B8] hover:text-white'
            }`}
          >
            {tf}
          </button>
        ))}
      </div>
    </div>
    <div className="flex-1 w-full min-h-0 -ml-4 sm:-ml-0">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1E293B" />
          <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 10 }} dy={10} />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 10 }} tickFormatter={(value) => `$${value.toLocaleString()}`} dx={-5} domain={['dataMin - 1000', 'dataMax + 1000']} />
          <Tooltip contentStyle={{ backgroundColor: '#0B1221', borderColor: '#1E293B', color: '#fff', borderRadius: '8px' }} itemStyle={{ color: '#10B981' }} formatter={(value) => [`$${value.toLocaleString()}`, 'Equity']} />
          <Area type="monotone" dataKey="value" stroke="#10B981" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </Card>
);

export default EquityCurve;