import React from 'react';
import {
  ArrowLeft,
  Mail,
  Eye,
  EyeOff,
  User,
  Lock
} from 'lucide-react';

const AuthPage = ({ type, onNavigate, onAuthSuccess }) => {
  const isLogin = type === 'login';
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLaunching, setIsLaunching] = React.useState(false);
  const [launchProgress, setLaunchProgress] = React.useState(0);
  const [launchStatus, setLaunchStatus] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLaunching) return;
    
    setIsLaunching(true);
    setLaunchProgress(15);
    setLaunchStatus('Authenticating institutional credentials...');

    setTimeout(() => {
      setLaunchProgress(55);
      setLaunchStatus('Connecting to Equinix LD4 G4 liquidity feed...');
    }, 450);

    setTimeout(() => {
      setLaunchProgress(90);
      setLaunchStatus('Syncing real-time NAV & portfolio ledger...');
    }, 950);

    setTimeout(() => {
      setLaunchProgress(100);
      onAuthSuccess();
    }, 1350);
  };

  return (
    <div className="min-h-screen bg-[#070B14] flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#00B5E2]/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <button 
        onClick={() => onNavigate('landing')}
        className="absolute top-6 sm:top-8 left-6 sm:left-8 text-[#94A3B8] hover:text-white flex items-center gap-2 transition-colors text-sm font-medium z-20"
      >
        <ArrowLeft size={16} /> Back to Home
      </button>

      {isLaunching && (
        <div className="fixed inset-0 z-[100] bg-[#070B14]/95 backdrop-blur-md flex flex-col items-center justify-center px-6 animate-in fade-in duration-200">
          <div className="w-full max-w-md bg-[#0B1221] border border-[#1E293B] rounded-2xl p-6 sm:p-8 shadow-2xl text-center relative overflow-hidden">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-56 h-56 bg-[#00B5E2]/15 blur-[60px] rounded-full pointer-events-none"></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="relative mb-5">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#F59E0B] to-[#D97706] flex items-center justify-center transform -skew-x-12 shadow-lg shadow-[#F59E0B]/20">
                  <span className="text-white font-bold text-2xl skew-x-12">A</span>
                </div>
                <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#10B981] border-2 border-[#0B1221] animate-ping"></span>
                <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#10B981] border-2 border-[#0B1221]"></span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-wide mb-1">LAUNCHING AURUM FX TERMINAL</h3>
              <p className="text-xs text-[#00B5E2] font-mono min-h-[18px] mb-5 transition-all">{launchStatus}</p>
              <div className="w-full h-2 bg-[#131A2F] rounded-full overflow-hidden border border-[#1E293B] mb-3">
                <div className="h-full bg-gradient-to-r from-[#00B5E2] to-[#10B981] transition-all duration-300 ease-out rounded-full" style={{ width: `${launchProgress}%` }} />
              </div>
              <div className="w-full flex justify-between items-center text-[10px] text-[#64748B] font-mono">
                <span>EQUINIX-LD4 // TLS 1.3</span>
                <span>{launchProgress}%</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="w-full max-w-[420px] bg-[#0B1221]/80 backdrop-blur-xl border border-[#1E293B] rounded-2xl p-6 sm:p-8 shadow-2xl relative z-10">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-12 h-12 rounded bg-gradient-to-br from-[#F59E0B] to-[#D97706] flex items-center justify-center transform -skew-x-12 mb-4 shadow-lg shadow-[#F59E0B]/10">
            <span className="text-white font-bold text-2xl skew-x-12">A</span>
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">{isLogin ? 'Welcome Back' : 'Create an Account'}</h2>
          <p className="text-sm text-[#94A3B8] mt-1">{isLogin ? 'Access your institutional dashboard' : 'Join our premium capital management platform'}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-[#94A3B8]">First Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><User size={16} className="text-[#64748B]" /></div>
                  <input type="text" required className="w-full bg-[#131A2F] border border-[#1E293B] text-white rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-[#00B5E2] focus:ring-1 focus:ring-[#00B5E2] transition-colors placeholder:text-[#334155]" placeholder="John" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-[#94A3B8]">Last Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><User size={16} className="text-[#64748B]" /></div>
                  <input type="text" required className="w-full bg-[#131A2F] border border-[#1E293B] text-white rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-[#00B5E2] focus:ring-1 focus:ring-[#00B5E2] transition-colors placeholder:text-[#334155]" placeholder="Doe" />
                </div>
              </div>
            </div>
          )}
          
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-[#94A3B8]">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><Mail size={16} className="text-[#64748B]" /></div>
              <input type="email" required className="w-full bg-[#131A2F] border border-[#1E293B] text-white rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-[#00B5E2] focus:ring-1 focus:ring-[#00B5E2] transition-colors placeholder:text-[#334155]" placeholder="investor@example.com" />
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label className="text-xs font-medium text-[#94A3B8]">Password</label>
              {isLogin && <a href="#" className="text-[11px] text-[#00B5E2] hover:text-[#00D1FF] transition-colors">Forgot password?</a>}
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><Lock size={16} className="text-[#64748B]" /></div>
              <input type={showPassword ? 'text' : 'password'} required className="w-full bg-[#131A2F] border border-[#1E293B] text-white rounded-lg pl-10 pr-10 py-2.5 text-sm focus:outline-none focus:border-[#00B5E2] focus:ring-1 focus:ring-[#00B5E2] transition-colors placeholder:text-[#334155]" placeholder="••••••••" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#64748B] hover:text-[#94A3B8]">
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {isLogin && (
            <div className="flex items-center gap-2 pt-1">
              <input type="checkbox" id="remember" className="w-4 h-4 rounded border-[#1E293B] bg-[#131A2F] checked:bg-[#00B5E2] checked:border-[#00B5E2] focus:ring-[#00B5E2] focus:ring-offset-[#0B1221]" />
              <label htmlFor="remember" className="text-xs text-[#94A3B8]">Remember me on this device</label>
            </div>
          )}

          <div className="pt-4">
            <button type="submit" className="w-full bg-gradient-to-r from-[#00B5E2] to-[#0096cc] hover:from-[#0096cc] hover:to-[#007ba8] text-white py-3 rounded-xl text-sm font-bold transition-all shadow-lg shadow-[#00B5E2]/20 hover:-translate-y-0.5">
              {isLogin ? 'Sign In to Terminal' : 'Create Investor Account'}
            </button>
          </div>
        </form>

        <div className="mt-6 pt-6 border-t border-[#1E293B] text-center text-sm text-[#94A3B8]">
          {isLogin ? (
            <p>Don't have an account? <button onClick={() => onNavigate('register')} className="text-[#00B5E2] hover:text-white font-medium transition-colors">Apply here</button></p>
          ) : (
            <p>Already an investor? <button onClick={() => onNavigate('login')} className="text-[#00B5E2] hover:text-white font-medium transition-colors">Sign in</button></p>
          )}
        </div>
      </div>
    </div>
  );
};
export default AuthPage;