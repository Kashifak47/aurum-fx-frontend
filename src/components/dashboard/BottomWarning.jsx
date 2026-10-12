import {
  AlertTriangle,
} from 'lucide-react';

const BottomWarning = () => (
  <div className="border border-[#F59E0B]/30 bg-[#F59E0B]/10 rounded-xl p-3 sm:p-4 flex items-start gap-3 mt-auto">
    <AlertTriangle size={18} className="text-[#F59E0B] shrink-0 mt-0.5" />
    <div className="text-[10px] sm:text-xs text-[#FCD34D] leading-relaxed">
      <p>Past performance is not a guarantee of future results. Capital is at risk.</p>
    </div>
  </div>
);

export default BottomWarning;