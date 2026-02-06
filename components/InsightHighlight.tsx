
import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Loader2, ArrowUpRight } from 'lucide-react';

const insightData: Record<string, { title: string; description: string; imageId: string }> = {
  '1': {
    title: "有錢人資產配置行為變化",
    description: "透過 2025 與 2024 的趨勢數據比對，我們發現高端消費族群在資產配置與 brand 忠誠度上呈現明顯的位移，特別是在跨產業的連動行為中展現了全新的消費邏輯。",
    imageId: "14wNqoDuWRNqHtPGZbrajP2eAxA773XKe"
  },
  '2': {
    title: "美妝保養產業消費者流動",
    description: "分析顯示美妝市場正從單一品牌忠誠轉向功效型與純淨美容的混合行為，消費者在不同價格帶間的流動速率較往年提升，反映出更理性的「成分導向」採購決策。",
    imageId: "1HlIatg3stHrgc-eJci6K12bb0hp0-cCa"
  },
  '3': {
    title: "綜合娛樂消費趨勢分析",
    description: "數位娛樂與實體體驗的界線逐漸模糊，消費者更傾向於投資在具備「社交貨幣」價值的限時性活動，透過行為軌跡可見消費者對於沉浸式內容的停留時間顯著增加。",
    imageId: "1KaVQuLdKaAeUIosx9c63hhxq3-1Cj_jd"
  },
  '4': {
    title: "母嬰寵物市場的新型態需求",
    description: "擬人化消費成為主流，寵物生活品質的提升帶動了相關健康管理與高端食品市場的快速成長。數據顯示，「精緻照護」已成為橫跨母嬰與寵物兩大族群的共同消費核心。",
    imageId: "1Xs7ISP83MIv8Xk1uCHdqvFV_bqVZS4W8"
  },
  '5': {
    title: "金融投資意向與行為洞察",
    description: "投資市場呈現顯著的「年輕化」與「去中心化」趨勢。透過數據觀察，我們發現不同年齡層在避險資產選擇與數位資產配置上的權重分配出現劇烈分歧，反映出對傳統金融體系截然不同的信賴模型。",
    imageId: "1HlIatg3stHrgc-eJci6K12bb0hp0-cCa"
  }
};

const tags = [
  { id: '1', label: '高端消費' },
  { id: '2', label: '美妝保養' },
  { id: '3', label: '綜合娛樂' },
  { id: '4', label: '母嬰寵物' },
  { id: '5', label: '金融投資' },
];

const InsightHighlight: React.FC = () => {
  const [activeTag, setActiveTag] = useState('1');
  const [isImageLoading, setIsImageLoading] = useState(true);
  const loadedImages = useRef<Set<string>>(new Set());

  const currentInsight = insightData[activeTag] || insightData['1'];
  const imageUrl = `https://lh3.googleusercontent.com/d/${currentInsight.imageId}`;

  useEffect(() => {
    tags.forEach(tag => {
      const img = new Image();
      const url = `https://lh3.googleusercontent.com/d/${insightData[tag.id].imageId}`;
      img.src = url;
      img.onload = () => {
        loadedImages.current.add(url);
      };
    });
  }, []);

  useEffect(() => {
    setIsImageLoading(true);
  }, [activeTag]);

  const scrollToDownload = () => {
    const element = document.getElementById('download-form');
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

  return (
    <section id="insights" className="py-32 bg-black relative scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16 reveal-on-scroll">
          <div className="space-y-4 flex flex-col items-center">
             <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-[#397bff]/50 hidden md:block"></div>
                <p className="text-[#397bff] font-black tracking-[0.4em] uppercase text-base">Analysis Hub</p>
                <div className="w-8 h-[1px] bg-[#397bff]/50 hidden md:block"></div>
             </div>
             <h2 className="text-[28px] md:text-[40px] font-bold text-white tracking-tight leading-tight px-4 max-w-2xl">
                關鍵產業洞察亮點
             </h2>
             <div className="w-12 h-1 bg-[#397bff] rounded-full shadow-[0_0_15px_rgba(57,123,255,0.5)]"></div>
          </div>
        </div>

        <div className="relative group reveal-on-scroll">
          <div className="flex flex-col bg-slate-900/20 border border-white/10 rounded-[32px] md:rounded-[48px] overflow-hidden backdrop-blur-3xl shadow-2xl">
            <div className="w-full p-4 md:p-6 bg-white/[0.03] border-b border-white/10">
              <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6">
                {tags.map(tag => (
                  <button
                    key={tag.id}
                    onClick={() => setActiveTag(tag.id)}
                    className={`px-5 py-2.5 md:px-8 md:py-3.5 rounded-2xl text-base font-bold transition-all duration-300 whitespace-nowrap ${
                      activeTag === tag.id 
                      ? 'bg-[#397bff] text-white shadow-[0_10px_25px_rgba(57,123,255,0.4)] scale-105' 
                      : 'bg-transparent text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {tag.label}
                  </button>
                ))}
                
                <span className="text-slate-400 text-base font-medium tracking-[0.1em] opacity-80 whitespace-nowrap px-4 py-2 border-l border-white/10 hidden sm:block">
                  + 更多產業在完整報告中
                </span>
              </div>
              
              <div className="sm:hidden w-full text-center mt-4 pt-4 border-t border-white/5">
                <span className="text-slate-400 text-base font-medium tracking-widest opacity-70">
                  + 更多產業在完整報告中
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-4 p-10 md:p-14 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10 relative">
                <div className="absolute -bottom-10 -left-10 text-[120px] font-black text-white/[0.02] select-none pointer-events-none hidden lg:block">DATA</div>
                
                <div className="relative z-10">
                  <h3 className="text-[24px] md:text-[28px] font-bold mb-8 text-white leading-tight tracking-wide">
                    {currentInsight.title}
                  </h3>
                  <p className="text-slate-200 text-base leading-relaxed mb-12 font-normal lg:mb-12">
                    {currentInsight.description}
                  </p>
                  
                  {/* 桌機版按鈕：隱藏在行動端 */}
                  <button 
                    onClick={scrollToDownload}
                    className="hidden lg:flex items-center gap-3 text-white font-bold group w-fit px-8 py-4 bg-white/5 rounded-full border border-white/10 hover:border-[#397bff]/50 hover:bg-[#397bff]/10 transition-all shadow-lg"
                  >
                    <span className="text-base tracking-widest">查看深度數據</span>
                    <ArrowUpRight className="w-5 h-5 text-[#397bff] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
              
              <div className="lg:col-span-8 bg-black/40 flex flex-col items-center justify-center p-6 md:p-12 lg:p-20 relative min-h-[400px]">
                <div className="relative w-full aspect-[4/3] md:aspect-video flex items-center justify-center rounded-2xl md:rounded-[32px] overflow-hidden bg-black/20 shadow-inner group-hover:shadow-[inset_0_0_50px_rgba(57,123,255,0.1)] transition-shadow duration-700">
                  {isImageLoading && (
                    <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 backdrop-blur-md">
                      <Loader2 className="w-12 h-12 text-[#397bff] animate-spin" />
                    </div>
                  )}
                  <img 
                    src={imageUrl} 
                    alt={currentInsight.title} 
                    onLoad={() => setIsImageLoading(false)}
                    className={`max-w-full max-h-full object-contain transition-all duration-1000 transform p-4 md:p-0 ${
                      isImageLoading ? 'opacity-0 scale-95 blur-2xl' : 'opacity-100 scale-100 blur-0'
                    }`}
                  />
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-[#397bff]/5 to-transparent h-[200%] -top-full group-hover:animate-[scan_4s_linear_infinite] opacity-0 group-hover:opacity-100"></div>
                </div>

                {/* 行動版按鈕：顯示在圖片下方 */}
                <div className="mt-10 lg:hidden w-full flex justify-center">
                  <button 
                    onClick={scrollToDownload}
                    className="flex items-center gap-3 text-white font-bold group w-fit px-10 py-5 bg-white/5 rounded-full border border-white/10 active:bg-[#397bff]/10 transition-all shadow-xl"
                  >
                    <span className="text-base tracking-widest">查看深度數據</span>
                    <ArrowUpRight className="w-6 h-6 text-[#397bff]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 md:mt-28 flex flex-col items-center reveal-on-scroll">
          <button 
            onClick={scrollToDownload}
            className="group relative flex items-center justify-center bg-transparent border-2 border-white text-white px-12 py-5 rounded-full font-black text-lg md:text-xl transition-all duration-500 hover:bg-[#397bff] hover:border-[#397bff] shadow-2xl hover:shadow-[0_0_40px_rgba(57,123,255,0.5)] overflow-hidden"
          >
            <span className="relative z-10 tracking-widest text-base">獲取完整產業洞察</span>
            <ChevronRight className="ml-4 w-6 h-6 transform group-hover:translate-x-2 transition-transform relative z-10" />
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none"></div>
          </button>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan {
          0% { transform: translateY(0); }
          100% { transform: translateY(100%); }
        }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </section>
  );
};

export default InsightHighlight;
