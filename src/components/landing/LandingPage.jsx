import React, {useState} from 'react';
import {
  TrendingUp,Info, Activity,Layers,Shield,ArrowRight,ChevronDown,CheckCircle2,ChevronRight
  ,PieChart as PieChartIcon, Menu,X,Zap,Award,Lock,Check} from 'lucide-react';

const LandingPage = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [calcDeposit, setCalcDeposit] = useState(25000);
  const [calcMonths, setCalcMonths] = useState(12);
  const [openFaq, setOpenFaq] = useState(0);

  // Re-added Terminal Loader States
  const [isLaunching, setIsLaunching] = useState(false);
  const [launchProgress, setLaunchProgress] = useState(0);
  const [launchStatus, setLaunchStatus] = useState('Initializing secure TLS 1.3 handshake...');

  const monthlyRate = 0.0105;
  const projectedTotal = calcDeposit * Math.pow(1 + monthlyRate, calcMonths);
  const projectedProfit = projectedTotal - calcDeposit;

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // The function to run the loader before entering the demo
  const handleLaunchDemo = () => {
    if (isLaunching) return;
    setMobileMenuOpen(false);
    setIsLaunching(true);
    setLaunchProgress(15);
    setLaunchStatus('Authenticating institutional demo session...');

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
      onNavigate('dashboard');
    }, 1350);
  };

  const tickerItems = [
    { type: 'status', text: 'London / NY Liquidity Pool Active' },
    { pair: 'EUR/USD', price: '1.1048', change: '+0.21%', positive: true },
    { pair: 'GBP/USD', price: '1.3204', change: '+0.18%', positive: true },
    { pair: 'USD/JPY', price: '149.42', change: '-0.25%', positive: false },
    { pair: 'AUD/USD', price: '0.6778', change: '+0.41%', positive: true },
  ];

  const faqs = [
    {
      q: "How is my capital protected during high market volatility?",
      a: "Our algorithmic risk engine enforces a strict hard-stop equity drawdown limit of 5% across all strategies. Furthermore, client funds are held in segregated Tier-1 banking accounts and only deployed into highly liquid G4 major currency pairs."
    },
    {
      q: "Are there any lock-up periods for deposits or withdrawals?",
      a: "No. Aurum FX Capital operates with full liquidity flexibility. You can request a partial or full USD withdrawal directly from your dashboard at any time, processed within 24 hours via bank wire or instant settlement rails."
    },
    {
      q: "Why do you only trade Major Currency Pairs?",
      a: "Major pairs (EUR/USD, GBP/USD, USD/JPY, AUD/USD) represent over 75% of daily global FX volume. Focusing exclusively on these pairs guarantees ultra-tight spreads, near-zero slippage and immunity from exotic illiquidity shocks."
    },
    {
      q: "How are management and performance fees structured?",
      a: "We operate on a High-Water Mark performance model. There are 0% deposit fees and a flat 20% performance fee strictly on net new profits generated at the end of each monthly cycle. If your portfolio does not profit, we do not charge."
    }
  ];

  const reviews = [
    { name: "Marcus Vance", role: "Managing Partner, Vance Family Office", tier: "Institutional Desk", metric: "+14.2% Net Yield", avatar: "MV", text: "Transitioning a portion of our FX treasury to Aurum FX Capital was seamless. Their strict 5% hard-stop drawdown governance and exclusive focus on G4 liquidity gave our investment committee the exact risk parameters we required." },
    { name: "Elena Rostova", role: "Quantitative Portfolio Consultant", tier: "Prime Allocation", metric: "Zero Slippage", avatar: "ER", text: "Most managed accounts hide their execution ledger until the end of the month. With Aurum's client terminal, I can verify entry prices, lot sizes on EUR/USD and real-time NAV fluctuations any hour of the day." },
    { name: "David Thorne", role: "Private Investor & Former Equities Trader", tier: "Prime Allocation", metric: "24h Wire Settlement", avatar: "DT", text: "What impressed me most wasn't just the steady ~1.1% monthly compounding—it was the liquidity flexibility. I requested a partial USD profit withdrawal on a Tuesday morning and the wire settled before market close." },
    { name: "Jonathan Sterling", role: "Director of Treasury, Apex Global", tier: "Institutional Desk", metric: "< 4.1% Max DD", avatar: "JS", text: "During recent central bank rate volatility, our equity curve remained remarkably stable. Aurum's automated circuit-breakers protected our principal while capturing clean macro swings on USD/JPY." },
    { name: "Sophia Chen", role: "Angel Investor & FinTech Founder", tier: "Prime Allocation", metric: "+13.6% APY", avatar: "SC", text: "I wanted diversified exposure to foreign exchange without staring at charts all day. The hands-off G4 allocation model and transparent High-Water Mark fee structure align their incentives 100% with mine." },
    { name: "Henrik Lindqvist", role: "Senior Wealth Advisor, Nordic Capital", tier: "Institutional Desk", metric: "Tier-1 Custody", avatar: "HL", text: "Segregated USD custody and Equinix LD4 execution speeds set Aurum apart from retail copy-trading platforms. It feels and operates like a true institutional prime-of-prime desk." },
    { name: "Omar Al-Fayed", role: "Principal, Crescent Private Equity", tier: "Prime Allocation", metric: "100% Transparent", avatar: "OA", text: "Every single trade on GBP/USD and AUD/USD is logged with clear entry and exit metrics. Having institutional-grade FX management accessible through such a clean dashboard is unmatched." }
  ];

  return (
    <div className="h-screen w-full max-w-[100vw] bg-[#070B14] text-white selection:bg-[#00B5E2]/30 relative overflow-y-auto overflow-x-hidden scroll-smooth custom-scrollbar block">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes aurumMarquee {
          0% { transform: translate3d(0%, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-aurum-marquee {
          display: flex;
          width: max-content;
          animation: aurumMarquee 26s linear infinite;
          will-change: transform;
        }
        .animate-aurum-marquee:hover {
          animation-play-state: paused;
        }
        .animate-aurum-reviews {
          display: flex;
          width: max-content;
          animation: aurumMarquee 45s linear infinite;
          will-change: transform;
        }
        .animate-aurum-reviews:hover,
        .animate-aurum-reviews:active {
          animation-play-state: paused;
        }
      `}} />

      {/* Terminal Loader Overlay */}
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
              <h3 className="text-base sm:text-lg font-bold text-white tracking-wide mb-1">LAUNCHING DEMO TERMINAL</h3>
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

      <div className="pointer-events-none absolute inset-x-0 top-0 overflow-hidden h-[600px] z-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[90vw] max-w-[800px] h-[400px] sm:h-[500px] bg-[#00B5E2]/10 blur-[100px] sm:blur-[130px] rounded-full"></div>
        <div className="absolute top-40 left-1/4 -translate-x-1/2 w-[60vw] max-w-[400px] h-[300px] bg-[#10B981]/5 blur-[90px] rounded-full"></div>
      </div>

      <div className="relative z-20 bg-[#050810] border-b border-[#1E293B] py-2 overflow-hidden text-[11px] text-[#94A3B8] select-none">
        <div className="animate-aurum-marquee">
          {[0, 1, 2, 3].map((loopIdx) => (
            <div key={loopIdx} className="flex items-center gap-6 sm:gap-10 px-3 sm:px-5 shrink-0">
              {tickerItems.map((item, idx) =>
                item.type === 'status' ? (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
                    <span className="font-semibold text-white tracking-wider uppercase text-[10px]">{item.text}</span>
                  </div>
                ) : (
                  <div key={idx} className="flex items-center gap-1.5 font-mono text-[11px]">
                    <strong className="text-white font-sans">{item.pair}</strong>
                    <span className="text-[#E2E8F0]">{item.price}</span>
                    <span className={item.positive ? 'text-[#10B981]' : 'text-[#EF4444]'}>{item.change}</span>
                  </div>
                )
              )}
              <span className="text-[#1E293B]">•</span>
            </div>
          ))}
        </div>
      </div>

      <header className="sticky top-0 z-30 bg-[#070B14]/85 backdrop-blur-md border-b border-[#1E293B]/80 shrink-0">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-3 sm:px-8 py-3 sm:py-4 gap-2">
          <a href="#hero-top" onClick={(e) => scrollToSection(e, 'hero-top')} className="flex items-center gap-2 sm:gap-3 min-w-0 shrink">
            <div className="w-7 h-7 sm:w-10 sm:h-10 rounded bg-gradient-to-br from-[#F59E0B] to-[#D97706] flex items-center justify-center transform -skew-x-12 shrink-0 shadow-lg shadow-[#F59E0B]/10">
              <span className="text-white font-bold text-sm sm:text-2xl skew-x-12">A</span>
            </div>
            <div className="min-w-0">
              <h1 className="text-white font-bold text-xs sm:text-lg tracking-wider leading-tight truncate">AURUM FX <span className="hidden sm:inline">CAPITAL</span></h1>
              <p className="text-[#94A3B8] text-[7px] sm:text-[9px] tracking-[0.14em] sm:tracking-[0.2em] font-medium uppercase truncate">Trade | Grow | Together</p>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-7 text-sm text-[#94A3B8]">
            {[
              { label: 'Strategy', id: 'strategy' },
              { label: 'Yield Calculator', id: 'calculator' },
              { label: 'Account Tiers', id: 'tiers' },
              { label: 'Reviews', id: 'reviews' },
              { label: 'FAQ', id: 'faq' },
            ].map((link) => (
              <a key={link.id} href={`#${link.id}`} onClick={(e) => scrollToSection(e, link.id)} className="relative py-1 hover:text-white transition-colors group">
                {link.label}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#00B5E2] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            <button onClick={() => onNavigate('login')} className="hidden sm:inline-flex bg-[#131A2F] border border-[#1E293B] hover:border-[#00B5E2]/50 hover:bg-[#1E293B] text-white px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all">
              Client Login
            </button>
            <button onClick={handleLaunchDemo} className="bg-[#10B981] hover:bg-[#059669] active:scale-95 text-white px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg text-[11px] sm:text-sm font-semibold transition-all shadow-md shadow-[#10B981]/20 whitespace-nowrap">
              Open Demo
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-1.5 sm:p-2 rounded-lg bg-[#131A2F] border border-[#1E293B] text-[#94A3B8] hover:text-white transition-colors" aria-label="Toggle Menu">
              {mobileMenuOpen ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </nav>

        <div className={`md:hidden grid transition-all duration-300 ease-in-out bg-[#0B1221] border-b border-[#1E293B] ${mobileMenuOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 border-b-0'}`}>
          <div className="overflow-hidden">
            <div className="px-4 pt-2 pb-4 space-y-1">
              {[
                { label: 'Institutional Strategy', id: 'strategy' },
                { label: 'Yield Calculator', id: 'calculator' },
                { label: 'Account Tiers', id: 'tiers' },
                { label: 'Client Reviews', id: 'reviews' },
                { label: 'Investor FAQ', id: 'faq' },
              ].map((item) => (
                <a key={item.id} href={`#${item.id}`} onClick={(e) => scrollToSection(e, item.id)} className="flex items-center justify-between py-2.5 text-sm text-[#E2E8F0] hover:text-[#00B5E2] border-b border-[#1E293B]/60 transition-colors">
                  <span>{item.label}</span>
                  <ChevronRight size={15} className="text-[#64748B]" />
                </a>
              ))}
              <button onClick={() => onNavigate('login')} className="w-full py-2.5 rounded-lg bg-[#131A2F] hover:bg-[#1E293B] border border-[#1E293B] text-white text-sm font-medium mt-3 transition-colors">
                Client Portal Login
              </button>
            </div>
          </div>
        </div>
      </header>

      <section id="hero-top" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-9 sm:pt-16 lg:pt-20 pb-14 sm:pb-20 flex flex-col items-center text-center shrink-0">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#131A2F] border border-[#1E293B] mb-6">
          <Shield size={14} className="text-[#10B981] shrink-0" />
          <span className="text-[11px] sm:text-xs font-medium text-[#E2E8F0]">Audited G4 Currency Execution • Segregated USD Accounts</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-5 sm:mb-6 max-w-4xl leading-[1.12]">
          Institutional-Grade <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B5E2] via-[#00D1FF] to-[#10B981]">Managed Forex Trading</span>
        </h1>

        <p className="text-sm sm:text-base lg:text-lg text-[#94A3B8] max-w-2xl mb-8 sm:mb-10 leading-relaxed">
          Experience quantitative capital management with real-time NAV reporting, strict drawdown controls and automated G4 currency allocation. Your capital, our institutional strategy.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          <button onClick={handleLaunchDemo} className="group w-full sm:w-auto justify-center bg-gradient-to-r from-[#10B981] to-[#059669] hover:from-[#059669] hover:to-[#047857] text-white px-7 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-semibold flex items-center gap-2.5 transition-all shadow-lg shadow-[#10B981]/20 hover:-translate-y-0.5">
            Launch Live Demo Dashboard
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <a href="#calculator" onClick={(e) => scrollToSection(e, 'calculator')} className="w-full sm:w-auto justify-center bg-[#131A2F] hover:bg-[#1E293B] border border-[#1E293B] text-[#E2E8F0] px-7 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-medium flex items-center gap-2 transition-colors">
            Calculate Projected Returns
          </a>
        </div>

        <div className="mt-12 sm:mt-16 w-full max-w-5xl bg-[#0B1221] border border-[#1E293B] rounded-2xl p-4 sm:p-6 shadow-2xl text-left">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-[#1E293B]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]"></span>
              <span className="text-xs text-[#64748B] ml-2 font-mono">aurum-fx-terminal://overview-feed</span>
            </div>
            <span className="text-[11px] text-[#10B981] bg-[#052E2B] border border-[#064E3B] px-2.5 py-0.5 rounded-full">Real-Time Reporting Enabled</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div className="bg-[#131A2F]/70 border border-[#1E293B] rounded-xl p-3.5">
              <div className="text-xs text-[#94A3B8] mb-1">Model Portfolio Balance</div>
              <div className="text-lg sm:text-xl font-bold text-white">$24,850.00</div>
              <div className="text-[10px] text-[#64748B] mt-0.5">USD Segregated Custody</div>
            </div>
            <div className="bg-[#131A2F]/70 border border-[#1E293B] rounded-xl p-3.5">
              <div className="text-xs text-[#94A3B8] mb-1">Monthly Target Yield</div>
              <div className="text-lg sm:text-xl font-bold text-[#10B981]">+1.24%</div>
              <div className="text-[10px] text-[#64748B] mt-0.5">Low-volatility execution</div>
            </div>
            <div className="bg-[#131A2F]/70 border border-[#1E293B] rounded-xl p-3.5">
              <div className="text-xs text-[#94A3B8] mb-1">Historical Max Drawdown</div>
              <div className="text-lg sm:text-xl font-bold text-[#00B5E2]">-4.32%</div>
              <div className="text-[10px] text-[#64748B] mt-0.5">Strict 5.0% Equity Hard-Stop</div>
            </div>
            <div className="bg-[#131A2F]/70 border border-[#1E293B] rounded-xl p-3.5">
              <div className="text-xs text-[#94A3B8] mb-1">Traded Instruments</div>
              <div className="text-lg sm:text-xl font-bold text-white">G4 Majors Only</div>
              <div className="text-[10px] text-[#64748B] mt-0.5">EUR, GBP, JPY, AUD / USD</div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 border-y border-[#1E293B] bg-[#0B1221]/70 shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
          <div className="p-2">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1">$500M+</div>
            <div className="text-xs sm:text-sm text-[#94A3B8]">Quarterly FX Volume</div>
          </div>
          <div className="p-2">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#10B981] mb-1">12.4%</div>
            <div className="text-xs sm:text-sm text-[#94A3B8]">Target Annualized Return</div>
          </div>
          <div className="p-2">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1">&lt; 12ms</div>
            <div className="text-xs sm:text-sm text-[#94A3B8]">Equinix LD4 Execution</div>
          </div>
          <div className="p-2">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00B5E2] mb-1">100%</div>
            <div className="text-xs sm:text-sm text-[#94A3B8]">Transparent Trade Ledger</div>
          </div>
        </div>
      </section>

      <section id="strategy" className="scroll-mt-20 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 w-full shrink-0">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#00B5E2]">Core Infrastructure</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-2 mb-3">Why Institutional & Retail Investors Choose Aurum FX</h2>
          <p className="text-sm sm:text-base text-[#94A3B8]">We eliminate emotional trading by combining quantitative macroeconomic models with bank-grade risk governance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {[
            { icon: TrendingUp, title: "Major Currency Pairs Only", desc: "We strictly trade EUR/USD, GBP/USD, USD/JPY and AUD/USD to guarantee deep institutional liquidity and zero exposure to volatile exotic pairs." },
            { icon: Shield, title: "Hard-Coded Risk Governance", desc: "Automated equity circuit-breakers cap maximum portfolio drawdown, ensuring capital preservation always takes precedence over speculative yield." },
            { icon: Layers, title: "Real-Time NAV & P&L Tracking", desc: "Monitor every open position, lot size, entry price and unrealized profit or loss directly inside your client portal 24/7." },
            { icon: Lock, title: "Segregated USD Custody", desc: "Client capital is denominated in USD and held in ring-fenced accounts, completely separate from corporate operational funds." },
            { icon: Zap, title: "Zero Lock-Up Liquidity", desc: "Unlike traditional hedge funds, your capital remains accessible. Submit deposit or withdrawal requests anytime with rapid settlement." },
            { icon: Activity, title: "Dynamic Exposure Balancing", desc: "Our desk actively adjusts currency weights based on central bank interest rate differentials and macroeconomic data releases." }
          ].map((item, idx) => (
            <div key={idx} className="bg-[#0B1221] border border-[#1E293B] hover:border-[#00B5E2]/40 hover:-translate-y-1 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#131A2F] border border-[#1E293B] flex items-center justify-center text-[#00B5E2] mb-5"><item.icon size={20} /></div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">{item.desc}</p>
              </div>
              <div className="mt-5 pt-4 border-t border-[#1E293B]/60 flex items-center justify-between text-xs text-[#64748B]">
                <span>Verified Protocol</span>
                <CheckCircle2 size={14} className="text-[#10B981]" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="calculator" className="scroll-mt-20 relative z-10 bg-[#0B1221]/60 border-y border-[#1E293B] py-16 sm:py-24 px-4 sm:px-6 shrink-0">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#10B981]">Interactive Estimator</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Project Your Managed Portfolio Growth</h2>
              <p className="text-sm text-[#94A3B8] leading-relaxed">Use our interactive compounding simulator based on our historical illustrative monthly return of ~1.05% to see how consistent, risk-managed FX returns compound over time.</p>
              <div className="p-4 rounded-xl bg-[#131A2F] border border-[#1E293B] text-xs text-[#94A3B8] space-y-1.5">
                <div className="text-white font-medium flex items-center gap-2"><Info size={14} className="text-[#00B5E2] shrink-0" /> Transparent Fee Assumption</div>
                <p>Projections already account for conservative lot sizing and standard major-pair spread costs.</p>
              </div>
            </div>
            <div className="lg:col-span-7 bg-[#0B1221] border border-[#1E293B] rounded-2xl p-5 sm:p-8 shadow-xl space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs sm:text-sm text-[#94A3B8] font-medium">Initial USD Allocation</label>
                  <span className="text-base sm:text-lg font-bold text-white">${calcDeposit.toLocaleString()}</span>
                </div>
                <input type="range" min="1000" max="250000" step="1000" value={calcDeposit} onChange={(e) => setCalcDeposit(Number(e.target.value))} className="w-full accent-[#10B981] bg-[#131A2F] h-2 rounded-lg cursor-pointer" />
                <div className="flex justify-between text-[10px] text-[#64748B] mt-1"><span>$1,000</span><span>$100,000</span><span>$250,000</span></div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs sm:text-sm text-[#94A3B8] font-medium">Investment Horizon</label>
                  <span className="text-base sm:text-lg font-bold text-[#00B5E2]">{calcMonths} Months</span>
                </div>
                <input type="range" min="3" max="36" step="3" value={calcMonths} onChange={(e) => setCalcMonths(Number(e.target.value))} className="w-full accent-[#00B5E2] bg-[#131A2F] h-2 rounded-lg cursor-pointer" />
                <div className="flex justify-between text-[10px] text-[#64748B] mt-1"><span>3 Mo</span><span>12 Mo</span><span>24 Mo</span><span>36 Mo</span></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#1E293B]">
                <div className="bg-[#131A2F] border border-[#1E293B] rounded-xl p-4">
                  <div className="text-xs text-[#94A3B8]">Estimated Net Profit</div>
                  <div className="text-xl sm:text-2xl font-bold text-[#10B981] mt-1">+${projectedProfit.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
                </div>
                <div className="bg-[#131A2F] border border-[#1E293B] rounded-xl p-4">
                  <div className="text-xs text-[#94A3B8]">Projected Total NAV</div>
                  <div className="text-xl sm:text-2xl font-bold text-white mt-1">${projectedTotal.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                <span className="text-[11px] text-[#64748B]">*Illustrative calculation. Past performance does not guarantee future results.</span>
                <button onClick={handleLaunchDemo} className="bg-[#10B981] hover:bg-[#059669] text-white px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors shrink-0">Test in Live Demo &rarr;</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tiers" className="scroll-mt-20 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 w-full shrink-0">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#F59E0B]">Portfolio Allocations</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-2 mb-3">Tailored Capital Tiers</h2>
          <p className="text-sm sm:text-base text-[#94A3B8]">Choose the allocation tier that aligns with your liquidity goals.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Standard Managed", min: "$1,000", tag: "Individual Investors", highlight: false, features: ["Full G4 Major Pair Strategy", "24/7 Client Dashboard Access", "Standard 5% Max Drawdown Guard", "48-Hour USD Withdrawal Settlement", "Monthly Performance Statements"] },
            { name: "Prime Allocation", min: "$25,000", tag: "Most Popular", highlight: true, features: ["Priority Liquidity Pool Routing", "Real-Time Live Position Feed", "Custom Risk Multiplier Controls", "Same-Day Wire & Crypto Settlement", "Dedicated Portfolio Analyst"] },
            { name: "Institutional Desk", min: "$100,000+", tag: "Family Offices & Corporates", highlight: false, features: ["Bespoke Drawdown & Yield Mandates", "Direct Prime-of-Prime Custody", "Reduced Performance Fee Structure", "API & FIX Reporting Integration", "Quarterly Strategy Audit Calls"] }
          ].map((tier, idx) => (
            <div key={idx} className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between border transition-all duration-300 hover:-translate-y-1 ${tier.highlight ? 'bg-gradient-to-b from-[#131A2F] to-[#0B1221] border-[#00B5E2] shadow-lg shadow-[#00B5E2]/10' : 'bg-[#0B1221] border-[#1E293B]'}`}>
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#131A2F] border border-[#1E293B] text-[#00B5E2]">{tier.tag}</span>
                </div>
                <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                <div className="mt-3 mb-6"><span className="text-3xl font-bold text-white">{tier.min}</span><span className="text-xs text-[#94A3B8] ml-1.5">Minimum USD</span></div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#E2E8F0]">
                      <Check size={16} className="text-[#10B981] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button onClick={handleLaunchDemo} className={`w-full py-3 rounded-xl text-sm font-semibold transition-colors ${tier.highlight ? 'bg-[#10B981] hover:bg-[#059669] text-white' : 'bg-[#131A2F] hover:bg-[#1E293B] text-white border border-[#1E293B]'}`}>
                Explore Tier in Demo
              </button>
            </div>
          ))}
        </div>
      </section>

      <section id="reviews" className="scroll-mt-20 relative z-10 border-t border-[#1E293B] bg-[#0B1221]/60 py-16 sm:py-24 w-full overflow-hidden shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10 sm:mb-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 text-center md:text-left">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#10B981]">Client Testimonials</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-2">Trusted by Private & Institutional Capital</h2>
              <p className="text-xs sm:text-sm text-[#94A3B8] mt-2">Hover or tap any card to pause the live investor feed.</p>
            </div>
            <div className="inline-flex items-center justify-center gap-3 bg-[#131A2F] border border-[#1E293B] px-4 py-2.5 rounded-xl self-center md:self-auto shrink-0">
              <div className="flex items-center gap-0.5 text-[#F59E0B]">
                {[...Array(5)].map((_, i) => (<svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>))}
              </div>
              <div className="text-xs text-[#E2E8F0] font-semibold">4.9 / 5.0</div>
              <span className="text-[#1E293B]">|</span>
              <div className="text-[11px] text-[#94A3B8]">Verified Custody Audit</div>
            </div>
          </div>
        </div>

        <div className="relative w-full overflow-hidden py-2">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-6 sm:w-20 bg-gradient-to-r from-[#070B14] to-transparent z-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-6 sm:w-20 bg-gradient-to-l from-[#070B14] to-transparent z-20" />
          <div className="animate-aurum-reviews">
            {[0, 1].map((loopIndex) => (
              <div key={loopIndex} className="flex items-stretch gap-4 sm:gap-6 px-2 sm:px-3 shrink-0">
                {reviews.map((rev, idx) => (
                  <div key={`${loopIndex}-${idx}`} className="w-[285px] sm:w-[350px] md:w-[390px] shrink-0 bg-[#0B1221] border border-[#1E293B] hover:border-[#00B5E2]/50 rounded-2xl p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg select-none cursor-default">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4 sm:mb-5">
                        <div className="flex items-center gap-1 text-[#F59E0B]">
                          {[...Array(5)].map((_, i) => (<svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>))}
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#052E2B] text-[#10B981] border border-[#064E3B] whitespace-nowrap">{rev.metric}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#E2E8F0] leading-relaxed mb-6">"{rev.text}"</p>
                    </div>
                    <div className="pt-4 border-t border-[#1E293B]/80 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#131A2F] to-[#1E293B] border border-[#00B5E2]/30 flex items-center justify-center text-xs font-bold text-[#00B5E2] shrink-0">{rev.avatar}</div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5"><h4 className="text-xs sm:text-sm font-bold text-white truncate">{rev.name}</h4><CheckCircle2 size={13} className="text-[#10B981] shrink-0" /></div>
                          <p className="text-[10px] sm:text-[11px] text-[#94A3B8] truncate">{rev.role}</p>
                        </div>
                      </div>
                      <span className="text-[10px] text-[#64748B] font-mono bg-[#131A2F] px-2 py-1 rounded border border-[#1E293B] shrink-0">{rev.tier}</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-20 relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-16 sm:pb-24 w-full shrink-0">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Frequently Asked Questions</h2>
          <p className="text-sm text-[#94A3B8]">Clear answers on custody, risk management and liquidity.</p>
        </div>
        <div className="space-y-3">
          {faqs.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className={`bg-[#0B1221] border rounded-xl overflow-hidden transition-colors duration-300 ${isOpen ? 'border-[#00B5E2]/50' : 'border-[#1E293B]'}`}>
                <button onClick={() => setOpenFaq(isOpen ? -1 : idx)} className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm sm:text-base font-semibold text-white hover:bg-[#131A2F]/50 transition-colors gap-4">
                  <span>{item.q}</span>
                  <ChevronDown size={18} className={`text-[#94A3B8] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#00B5E2]' : ''}`} />
                </button>
                <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-sm text-[#94A3B8] leading-relaxed border-t border-[#1E293B]/60 pt-3">{item.a}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="relative z-10 text-center py-14 sm:py-20 px-4 sm:px-6 border-t border-[#1E293B] bg-gradient-to-b from-[#070B14] to-[#0B1221] shrink-0">
        <Award size={40} className="mx-auto text-[#F59E0B] mb-4" />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">Ready to Inspect the Live Terminal?</h2>
        <p className="text-sm sm:text-base text-[#94A3B8] max-w-xl mx-auto mb-8">Step inside the interactive client portal to test deposits, withdrawals, equity curves and live G4 position tracking.</p>
        <button onClick={handleLaunchDemo} className="w-full sm:w-auto bg-white text-[#070B14] hover:bg-gray-200 px-8 py-3.5 rounded-xl text-sm sm:text-base font-bold transition-all shadow-lg hover:-translate-y-0.5">
          Enter Interactive Dashboard
        </button>
      </section>

      <footer className="relative z-10 border-t border-[#1E293B] bg-[#050810] text-xs text-[#64748B] px-4 sm:px-8 py-12 shrink-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 rounded bg-gradient-to-br from-[#F59E0B] to-[#D97706] flex items-center justify-center transform -skew-x-12"><span className="text-white font-bold text-sm skew-x-12">A</span></div>
              <span className="text-white font-bold text-sm tracking-wider">AURUM FX CAPITAL</span>
            </div>
            <p className="leading-relaxed text-[#94A3B8]">Managed Foreign Exchange asset allocation focused exclusively on liquid G4 currency pairs.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 uppercase tracking-wider text-[11px]">Platform</h4>
            <ul className="space-y-2">
              <li><button onClick={() => onNavigate('login')} className="hover:text-white transition-colors">Client Terminal</button></li>
              <li><a href="#strategy" onClick={(e) => scrollToSection(e, 'strategy')} className="hover:text-white transition-colors">Risk Architecture</a></li>
              <li><a href="#calculator" onClick={(e) => scrollToSection(e, 'calculator')} className="hover:text-white transition-colors">Yield Simulator</a></li>
              <li><a href="#reviews" onClick={(e) => scrollToSection(e, 'reviews')} className="hover:text-white transition-colors">Client Reviews</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 uppercase tracking-wider text-[11px]">Currency Focus</h4>
            <ul className="space-y-2 text-[#94A3B8]">
              <li>EUR/USD (Euro / US Dollar)</li>
              <li>GBP/USD (British Pound / US Dollar)</li>
              <li>USD/JPY (US Dollar / Japanese Yen)</li>
              <li>AUD/USD (Australian Dollar / US Dollar)</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 uppercase tracking-wider text-[11px]">Security & Governance</h4>
            <ul className="space-y-2 text-[#94A3B8]">
              <li>256-Bit SSL Encryption</li>
              <li>Segregated USD Accounts</li>
              <li>Automated Equity Hard-Stop</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-6 border-t border-[#1E293B]/60 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-4">
          <span>&copy; {new Date().getFullYear()} Aurum FX Capital. All rights reserved.</span>
          <span className="text-[11px] text-[#64748B] max-w-xl">Risk Disclosure: Trading foreign exchange on margin carries a high level of risk and may not be suitable for all investors. Past performance is not indicative of future results.</span>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;