
import React from 'react';

const IntroSection: React.FC = () => {
  return (
    <section id="intro" className="py-32 md:py-48 bg-gradient-to-b from-black via-[#030712] to-black relative overflow-hidden scroll-mt-20">
      {/* 科技微米網格背景 */}
      <div className="absolute inset-0 opacity-[0.1] pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(#397bff 0.5px, transparent 0.5px)', 
          backgroundSize: '32px 32px' 
        }}>
      </div>

      {/* 背景裝飾：大型序號 */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 text-[30vw] font-black text-white/[0.02] select-none pointer-events-none tracking-tighter">
        01
      </div>
      
      {/* 背景裝飾光點 */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#397bff]/10 blur-[100px] rounded-full pointer-events-none animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start lg:items-center">
          
          <div className="lg:col-span-5 space-y-6 reveal-on-scroll relative">
            {/* 標籤文字確保為 16px */}
            <div className="flex items-center gap-5 mb-8">
               <div className="w-12 h-1.5 bg-[#397bff] rounded-full shadow-[0_0_15px_rgba(57,123,255,0.4)]"></div>
               <p className="text-[#397bff] font-black tracking-[0.25em] uppercase text-base leading-none">EXECUTIVE SUMMARY</p>
            </div>
            
            <h2 className="text-[32px] md:text-5xl font-black text-white tracking-tight leading-tight">
              <span className="block mb-2 text-white/95">2025 Motix Lab</span>
              <span className="text-white/80">年度產業前瞻報告</span>
            </h2>
            <div className="w-16 h-1 bg-white/10 mt-8"></div>
          </div>

          <div className="lg:col-span-7 space-y-12 reveal-on-scroll reveal-delay-200">
            {/* 內文容器提升至 text-lg (18px) */}
            <div className="space-y-10 text-lg text-slate-200 font-normal leading-[2] tracking-[0.12em] relative">
              <div className="absolute -left-8 top-0 bottom-0 w-[1px] bg-white/10 hidden lg:block"></div>
              <p className="text-lg">
                以消費者行為數據為基礎，選定十個關鍵產業作為主要觀察範圍，長期追蹤消費者在不同產業之間的行為轉移與連動變化。
                報告不僅分析各產業的個別表現，更進一步比較產業之間的互動關係，嘗試從整體市場角度理解趨勢如何形成。
              </p>
              <p className="text-lg text-slate-300 italic opacity-90">
                透過橫向對照與時間序列分析，本報告將十個產業視為一個動態系統，觀察消費者如何在不同產業間移動，以及這些移動所反映的市場結構變化。
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
