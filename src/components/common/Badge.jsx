const Badge = ({ status }) => {
  const isCompleted = status === 'Completed';
  return (
    <span className={`px-2.5 py-1 text-xs rounded-full border whitespace-nowrap ${
      isCompleted 
        ? 'bg-[#052E2B] text-[#10B981] border-[#064E3B]' 
        : 'bg-[#2E2010] text-[#F59E0B] border-[#452703]'
    }`}>
      {status}
    </span>
  );
};

export default Badge;