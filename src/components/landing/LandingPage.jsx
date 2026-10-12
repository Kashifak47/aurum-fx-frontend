import React from 'react';
import { ArrowRight, Shield, Globe, Users,Zap,Award, TrendingUp } from 'lucide-react';

const LandingPage = ({ onEnter }) => {
  return (
    <div className="h-screen bg-[#070B14] text-white selection:bg-[#00B5E2]/30 flex flex-col relative overflow-y-auto custom-scrollbar">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#00B5E2]/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-4 sm:px-8 lg:px-12 py-4 sm:py-6">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded bg-gradient-to-br from-[#F59E0B] to-[#D97706] flex items-center justify-center transform -skew-x-12">
            <span className="text-white font-bold text-xl sm:text-2xl skew-x-12">A</span>
          </div>
          <div>
            <h1 className="text-white font-bold text-lg sm:text-xl tracking-wide leading-tight">AURUM FX</h1>
            <p className="text-[#94A3B8] text-[8px] sm:text-[10px] tracking-[0.2em] font-medium uppercase">Capital</p>
          </div>
        </div>
        <button 
          onClick={onEnter}
          className="bg-[#131A2F] border border-[#1E293B] hover:bg-[#1E293B] text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-colors"
        >
          Dashboard Demo
        </button>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 mt-10 sm:mt-16 lg:mt-24 mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-[#131A2F] border border-[#1E293B] mb-6 sm:mb-8">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#10B981] animate-pulse"></span>
          <span className="text-[10px] sm:text-xs font-medium text-[#E2E8F0]">System Status: Fully Operational</span>
        </div>
        
        {/* Responsive Typography: 4xl on mobile, 5xl on tablet, 7xl on desktop */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6 max-w-4xl leading-[1.1]">
          Institutional-Grade <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B5E2] to-[#00D1FF]">
            Managed Forex Trading
          </span>
        </h1>
        
        <p className="text-sm sm:text-base lg:text-lg text-[#94A3B8] max-w-2xl mb-8 sm:mb-10 leading-relaxed px-2 sm:px-0">
          Experience premium capital management with transparent reporting, dynamic risk controls, and automated portfolio balancing. Your capital, our strategy.
        </p>
        
        <button 
          onClick={onEnter}
          className="group w-full sm:w-auto justify-center bg-gradient-to-r from-[#10B981] to-[#059669] hover:from-[#059669] hover:to-[#047857] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium flex items-center gap-3 transition-all shadow-lg shadow-[#10B981]/20 hover:shadow-[#10B981]/40 hover:-translate-y-0.5"
        >
          Access Demo Dashboard
          <ArrowRight size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </main>

      {/* Stats Banner - Grid fixed for mobile to prevent broken borders */}
      <div className="relative z-10 border-y border-[#1E293B] bg-[#0B1221]/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 md:gap-8 text-center md:divide-x md:divide-[#1E293B]/50">
          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1">$500M+</div>
            <div className="text-[10px] sm:text-xs lg:text-sm text-[#94A3B8]">Assets Under Management</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#10B981] mb-1">12.4%</div>
            <div className="text-[10px] sm:text-xs lg:text-sm text-[#94A3B8]">Average Annual Return</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1">99.9%</div>
            <div className="text-[10px] sm:text-xs lg:text-sm text-[#94A3B8]">System Uptime</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1">24/7</div>
            <div className="text-[10px] sm:text-xs lg:text-sm text-[#94A3B8]">Global Market Access</div>
          </div>
        </div>
      </div>

      {/* How it Works Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 w-full">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">How Aurum FX Works</h2>
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl mx-auto px-2 sm:px-0">Our streamlined process allows you to put your capital to work immediately, completely hands-off.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[3.5rem] left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-transparent via-[#1E293B] to-transparent"></div>
          
          {[
            { icon: Users, title: "1. Create Account", desc: "Sign up and complete our secure onboarding process in minutes." },
            { icon: Zap, title: "2. Fund Portfolio", desc: "Deposit USD via bank wire, crypto, or direct transfer with zero fees." },
            { icon: TrendingUp, title: "3. Watch it Grow", desc: "Our algorithms and expert traders deploy your capital in the Forex market." }
          ].map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center p-6 sm:p-8 bg-[#0B1221] border border-[#1E293B] rounded-2xl">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#131A2F] border border-[#1E293B] flex items-center justify-center mb-4 sm:mb-6 text-[#00B5E2] shadow-[0_0_30px_rgba(0,181,226,0.15)]">
                <step.icon size={24} className="sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{step.title}</h3>
              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="relative z-10 text-center py-16 sm:py-24 px-4 sm:px-6 border-t border-[#1E293B] bg-gradient-to-b from-[#070B14] to-[#0B1221]">
        <Award size={40} className="sm:w-12 sm:h-12 mx-auto text-[#F59E0B] mb-4 sm:mb-6" />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 px-2">Ready to optimize your capital?</h2>
        <p className="text-sm sm:text-base text-[#94A3B8] max-w-xl mx-auto mb-8 sm:mb-10 px-4">Join thousands of investors utilizing our institutional-grade infrastructure.</p>
        <button 
          onClick={onEnter}
          className="w-full sm:w-auto bg-white text-[#070B14] hover:bg-gray-200 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-bold transition-all shadow-lg shadow-white/10 hover:shadow-white/20 hover:-translate-y-0.5"
        >
          Access Demo Version Today
        </button>
      </div>

      <footer className="relative z-10 py-8 sm:py-10 text-center text-xs sm:text-sm text-[#64748B] border-t border-[#1E293B] bg-[#070B14]">
        &copy; {new Date().getFullYear()} Aurum FX Capital. All rights reserved. <br/>
        <span className="text-[9px] sm:text-[10px] mt-2 sm:mt-3 block opacity-60 max-w-2xl mx-auto px-4">
          Risk Warning: Trading foreign exchange on margin carries a high level of risk, and may not be suitable for all investors. 
          Past performance is not indicative of future results.
        </span>
      </footer>
    </div>
  );
};

export default LandingPage;