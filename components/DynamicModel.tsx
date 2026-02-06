
import React from 'react';
import { ChevronRight, Zap, Target, Route } from 'lucide-react';

interface DynamicModelProps {
  onNavigate: () => void;
}

const serviceCapabilities = [
  {
    icon: <Target className="w-8 h-8 text-[#397bff]" />,
    title: "真實受眾洞察",
    description: "透過 2,000 萬真實數據來定義目標客群，提供實際使用者輪廓 and 高偏好瀏覽行為分析，協助品牌跳脫主觀想像。"
  },
  {
    icon: <Zap className="w-8 h-8 text-[#397bff]" />,
    title: "即時市場情報",
    description: "50,000+ 網站、150,000 實體據點數據與 605 個產業標籤，精確量化市場與品牌聲量。幫助您立即確認品牌目前地位，並為商務指引戰略方向。"
  },
  {
    icon: <Route className="w-8 h-8 text-[#397bff]" />,
    title: "跨渠道探勘",
    description: "串聯線上線下接觸點，還原消費者從「看見」到「造訪」的完整路徑。辨識各渠道的影響角色與關鍵節點，協助品牌優化媒體配置、門市策略與活動規劃。"
  }
];

const DynamicModel: React.FC<DynamicModelProps> = ({ onNavigate }) => {
  return (
    <section id="capabilities" className="py-32 md:py-48 bg-black relative overflow-hidden scroll-mt-20 border-t border-white/5">
      {/* 科技感背景：強化圓點網格 */}
      <div className="absolute inset-0 opacity-[0.12] pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, #397bff 1px, transparent 0)', 
          backgroundSize: '40px 40px' 
        }}>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24 reveal-on-scroll">
           {/* 更新為 16px (text-base) 並保留雙橫線 */}
           <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-[#397bff]/50 hidden md:block"></div>
              <p className="text-[#397bff] font-black tracking-[0.4em] uppercase text-base">Our Expertise</p>
              <div className="w-8 h-[1px] bg-[#397bff]/50 hidden md:block"></div>
           </div>
           
           <h2 className="text-[32px] md:text-5xl font-black text-white tracking-tight mb-8">關鍵優勢</h2>
           <div className="w-24 h-1.5 bg-[#397bff] rounded-full shadow-[0_0_15px_rgba(57,123,255,0.4)] mx-auto"></div>
        </div>

        <div className="flex flex-col gap-10 mb-20">
          {serviceCapabilities.map((item, idx) => (idx < 3 &&
            <div 
              key={idx} 
              className={`bg-slate-900/10 p-10 md:p-14 rounded-[40px] border border-white/5 transition-all duration-700 hover:border-[#397bff]/40 flex flex-col md:flex-row gap-12 items-center md:items-start hover:bg-slate-900/20 group reveal-on-scroll reveal-delay-${(idx + 1) * 100}`}
            >
              <div className="relative z-10 shrink-0">
                <div className="relative w-24 h-24 md:w-28 md:h-28">
                  <div className="w-full h-full rounded-3xl bg-black border border-white/10 flex items-center justify-center transition-all duration-500 shadow-2xl transform group-hover:-rotate-12 group-hover:scale-105 group-hover:bg-[#397bff]/5 group-hover:border-[#397bff]/50">
                    <div className="transition-all duration-500">
                      {item.icon}
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-11 h-11 rounded-full bg-[#397bff] text-black font-black flex items-center justify-center text-base shadow-[0_0_20px_rgba(57,123,255,0.4)] z-20 transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                    0{idx + 1}
                  </div>
                </div>
              </div>
              
              <div className="space-y-6 flex-grow text-center md:text-left">
                <h3 className="text-[28px] md:text-[32px] font-black text-white tracking-tight group-hover:text-[#397bff] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-base text-slate-200 font-normal leading-[1.8] tracking-wider group-hover:text-white transition-colors max-w-3xl">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center reveal-on-scroll">
          <button 
            onClick={onNavigate}
            className="group relative flex items-center justify-center bg-transparent border-2 border-white text-white px-14 py-6 rounded-full font-black text-xl transition-all duration-500 hover:bg-[#397bff] hover:border-[#397bff] shadow-xl hover:shadow-[0_0_30px_rgba(57,123,255,0.4)] active:scale-95 overflow-hidden"
          >
            <span className="relative z-10 whitespace-nowrap uppercase tracking-widest">客製化洞察服務</span>
            <ChevronRight className="ml-4 w-6 h-6 transform group-hover:translate-x-2 transition-transform relative z-10" />
            {/* Shimmer Effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none"></div>
          </button>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      ` }} />
    </section>
  );
};

export default DynamicModel;
