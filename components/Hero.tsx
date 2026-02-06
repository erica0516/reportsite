
import React from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const heroBackgroundStyle: React.CSSProperties = {
    backgroundColor: '#000105',
    backgroundImage: `
      radial-gradient(circle at 10% 20%, rgba(57, 123, 255, 0.6) 0%, transparent 50%),
      radial-gradient(circle at 90% 80%, rgba(57, 123, 255, 0.5) 0%, transparent 45%),
      radial-gradient(circle at 50% 50%, rgba(0, 5, 20, 1) 0%, transparent 100%)
    `,
    backgroundAttachment: 'fixed'
  };

  return (
    <section 
      className="relative pt-32 pb-48 md:pt-40 md:pb-48 min-h-[100vh] flex flex-col justify-center items-center overflow-hidden"
      style={heroBackgroundStyle}
    >
      
      {/* 裝飾性背景氛圍 */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 w-full z-20">
        {/* 調整負邊距：-mt-6 與 md:-mt-12。這能確保內容向上移但不會進入 Navbar (h-20/h-24) 的區域 */}
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center -mt-6 md:-mt-12">
          
          {/* 上方膠囊標籤 - 微調行動版字級(text-[12px])與字距(tracking-[0.15em])以達成兩行呈現 */}
          <div className="animate-reveal opacity-0 [animation-delay:200ms] inline-block px-6 py-3 md:px-8 md:py-4 bg-white/[0.01] backdrop-blur-3xl rounded-lg text-slate-200 text-[12px] md:text-[14px] font-bold tracking-[0.15em] md:tracking-[0.4em] mb-16 shadow-[0_10px_40px_rgba(0,0,0,0.3)] uppercase border border-white/10 leading-relaxed md:leading-normal max-w-[280px] md:max-w-none">
            REDEFINING HOW DATA INTERPRETS PEOPLE, MOVEMENT, AND PLACE.
          </div>
          
          {/* 主標題區域 */}
          <div className="mb-16 md:mb-20 text-center">
            {/* MOTIX LAB */}
            <h1 className="animate-reveal opacity-0 [animation-delay:400ms] text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter bg-gradient-to-r from-slate-200 via-white to-slate-200 bg-clip-text text-transparent drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] uppercase mb-6 md:mb-8">
              MOTIX LAB
            </h1>
            
            {/* 中文標題與英文口號組 */}
            <div className="space-y-3 md:space-y-4">
              {/* 中文標題 */}
              <h2 className="animate-reveal opacity-0 [animation-delay:600ms] text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight bg-gradient-to-r from-slate-300 via-white to-slate-300 bg-clip-text text-transparent drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
                從人潮洞察，走向商業前瞻
              </h2>
              {/* 英文口號 */}
              <p className="animate-reveal opacity-0 [animation-delay:800ms] text-xl md:text-2xl font-medium tracking-[0.1em] text-slate-200 drop-shadow-lg opacity-90">
                From human flow to business foresight.
              </p>
            </div>
          </div>
          
          {/* 雙按鈕設計 */}
          <div className="animate-reveal opacity-0 [animation-delay:1200ms] flex flex-col items-center justify-center gap-6 w-full max-w-[420px] md:max-w-[600px] px-4">
            {/* 第一個按鈕：下載報告 */}
            <button 
              onClick={() => scrollToId('download-form')}
              className="group relative flex items-center justify-center bg-gradient-to-b from-[#4d91ff] to-[#397bff] text-white border-none px-10 py-5 rounded-full font-black text-base md:text-xl transition-all duration-500 hover:scale-[1.05] active:scale-[0.98] shadow-[0_12px_40px_-8px_rgba(57,123,255,0.7)] hover:shadow-[0_18px_50px_-5px_rgba(57,123,255,0.9)] w-full overflow-hidden animate-button-pulse"
            >
              <span className="relative z-10 tracking-[0.05em] uppercase leading-none drop-shadow-md">下載《年度產業前瞻報告》</span>
              <div className="absolute right-6 flex items-center justify-center transition-all duration-500 z-10">
                <ChevronRight className="w-5 h-5 md:w-7 md:h-7 text-white transform group-hover:translate-x-2 transition-transform drop-shadow-lg" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.2s_infinite] pointer-events-none"></div>
              <div className="absolute inset-0 bg-[#397bff] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            </button>

            {/* 第二個按鈕：關於報告 */}
            <button 
              onClick={() => scrollToId('intro')}
              className="group relative flex items-center justify-center bg-black/20 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-full font-black text-base md:text-xl transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] hover:border-[#397bff] hover:text-[#397bff] shadow-[0_0_15px_rgba(57,123,255,0.1)] hover:shadow-[0_0_25px_rgba(57,123,255,0.3)] w-full overflow-hidden"
            >
              <span className="tracking-[0.05em] uppercase leading-none">關於《年度產業前瞻報告》</span>
              <div className="absolute right-6 flex items-center justify-center transition-all duration-500">
                <ChevronRight className="w-5 h-5 md:w-7 md:h-7 text-white group-hover:text-[#397bff] transform group-hover:translate-x-2 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* 捲動指示 */}
      <div className="absolute bottom-10 md:bottom-12 inset-x-0 mx-auto w-fit text-blue-400/70 animate-bounce flex flex-col items-center pointer-events-none z-30">
        <ChevronDown className="w-9 h-9 md:w-11 md:h-11 drop-shadow-[0_0_20px_rgba(0,0,0,1)]" />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes reveal {
          0% { opacity: 0; transform: translateY(20px) scale(0.98); filter: blur(10px); }
          100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }
        
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }

        @keyframes buttonPulse {
          0% { box-shadow: 0 12px 40px -8px rgba(57, 123, 255, 0.7); }
          50% { box-shadow: 0 12px 60px 5px rgba(57, 123, 255, 0.9), 0 0 0 4px rgba(57, 123, 255, 0.2); }
          100% { box-shadow: 0 12px 40px -8px rgba(57, 123, 255, 0.7); }
        }

        .animate-reveal {
          animation: reveal 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        .animate-button-pulse {
          animation: buttonPulse 3s infinite ease-in-out;
        }
      ` }} />
    </section>
  );
};

export default Hero;
