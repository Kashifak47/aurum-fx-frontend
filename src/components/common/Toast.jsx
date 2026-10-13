import {
  AlertTriangle,CheckCircle2,X} from 'lucide-react';

const Toast = ({ toast, onClose }) => {
  if (!toast) return null;
  const isSuccess = toast.type === 'success';

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes toastProgress {
          from { width: 100%; }
          to { width: 0%; }
        }
        @keyframes toastSlideUp {
          from { opacity: 0; transform: translate3d(0, 20px, 0) scale(0.96); }
          to { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
        }
        .animate-toast-enter {
          animation: toastSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-toast-bar {
          animation: toastProgress 4s linear forwards;
        }
      `}} />

      <div
        role="status"
        aria-live="polite"
        className="fixed z-[90] inset-x-3 bottom-4 sm:inset-x-auto sm:bottom-6 sm:right-6 sm:w-[390px] max-w-full pointer-events-none flex justify-center sm:justify-end"
      >
        <div
          className={`pointer-events-auto relative w-full overflow-hidden rounded-2xl border backdrop-blur-xl bg-[#0B1221]/95 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.65)] animate-toast-enter ${
            isSuccess
              ? 'border-[#10B981]/40 shadow-[#10B981]/10'
              : 'border-[#EF4444]/40 shadow-[#EF4444]/10'
          }`}
        >
          {/* Ambient radial glow */}
          <div
            className={`pointer-events-none absolute -top-12 -left-12 w-32 h-32 rounded-full blur-2xl opacity-25 ${
              isSuccess ? 'bg-[#10B981]' : 'bg-[#EF4444]'
            }`}
          />

          {/* Left accent bar */}
          <div
            className={`absolute left-0 inset-y-0 w-1 ${
              isSuccess
                ? 'bg-gradient-to-b from-[#10B981] to-[#059669]'
                : 'bg-gradient-to-b from-[#EF4444] to-[#DC2626]'
            }`}
          />

          <div className="relative z-10 flex items-start gap-3.5 pl-1">
            {/* Glowing Icon Orb */}
            <div className="relative shrink-0 mt-0.5">
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center border ${
                  isSuccess
                    ? 'bg-[#10B981]/15 border-[#10B981]/30 text-[#10B981]'
                    : 'bg-[#EF4444]/15 border-[#EF4444]/30 text-[#EF4444]'
                }`}
              >
                {isSuccess ? <CheckCircle2 size={19} /> : <AlertTriangle size={19} />}
              </div>
              <span
                className={`absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-[#0B1221] ${
                  isSuccess ? 'bg-[#10B981]' : 'bg-[#EF4444]'
                }`}
              />
            </div>

            {/* Text Content */}
            <div className="flex-1 min-w-0 pr-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight truncate">
                  {toast.title}
                </h4>
                <span
                  className={`text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded border ${
                    isSuccess
                      ? 'bg-[#052E2B] text-[#10B981] border-[#064E3B]'
                      : 'bg-[#2E1014] text-[#EF4444] border-[#450A0A]'
                  }`}
                >
                  {isSuccess ? 'Ledger Synced' : 'Alert'}
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-[#94A3B8] mt-1 leading-relaxed break-words">
                {toast.message}
              </p>
            </div>

            {/* Dismiss Button */}
            <button
              onClick={onClose}
              aria-label="Close notification"
              className="p-1.5 rounded-lg text-[#64748B] hover:text-white hover:bg-[#131A2F] border border-transparent hover:border-[#1E293B] transition-all shrink-0"
            >
              <X size={15} />
            </button>
          </div>

          {/* 4-Second Auto-Dismiss Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#131A2F]">
            <div
              key={toast.title + toast.message}
              className={`h-full animate-toast-bar ${
                isSuccess
                  ? 'bg-gradient-to-r from-[#10B981] to-[#00B5E2]'
                  : 'bg-gradient-to-r from-[#EF4444] to-[#F59E0B]'
              }`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Toast;
