const Card = ({ children, className = "" }) => (
  <div className={`bg-[#0B1221] border border-[#1E293B] rounded-xl p-5 shadow-sm ${className}`}>
    {children}
  </div>
);

export default Card;