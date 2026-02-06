
import React from 'react';
import { Globe, Activity, Share2 } from 'lucide-react';

const features = [
  {
    id: 'globe',
    title: "跳脫媒體投資量框架",
    description: "不再傾只是看「產業花了多少錢」，而是透過行為數據去看「消費者正在往哪裡移動」"
  },
  {
    id: 'activity',
    title: "即時跟進市場環境變化",
    description: "2,000萬真實行為數據，即時追蹤消費者的線上瀏覽、線下造訪行為，捕捉真正的「正在發生的行為」"
  },
  {
    id: 'share',
    title: "結合跨產業的趨勢觀察",
    description: "消費者關注 X 產業連動變化 X 事件即時影響的多視角交聯集數據"
  }
];

const FeatureCards: React.FC = () => {
  const renderIcon = (id: string, className: string) => {
    switch (id) {
      case 'globe': return <Globe className={className} />;
      case 'activity': return <Activity className={className} />;
      case 'share': return <Share2 className={className} />;
      default: return null;
    }
  };

  return (
    <section id="features" className="py-32 bg-[#020617] relative scroll-mt-20 border-y border-white/5 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(#397bff 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)', 
          backgroundSize: '40px 40px, 80px 80px, 80px 80px' 
        }}>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        <div className="flex flex-col items-center mb-24 reveal-on-scroll">
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-[#397bff] mb-8"></div>
          <h2 className="text-[32px] font-bold text-center text-white leading-relaxed tracking-tight">
            市場第一份以消費者為核心的<br/><span className="text-[#397bff]">產業流動趨勢報告</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {features.map((item, idx) => (
            <div 
              key={item.id} 
              className={`group relative bg-slate-900/40 backdrop-blur-2xl p-10 lg:p-12 rounded-[40px] border border-white/10 transition-all duration-700 hover:border-[#397bff]/50 flex flex-col hover:-translate-y-4 shadow-2xl reveal-on-scroll reveal-delay-${(idx + 1) * 100}`}
            >
              <div className="absolute -inset-px bg-gradient-to-br from-[#397bff]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[40px] -z-10"></div>
              
              <div className="flex justify-between items-start mb-12">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:bg-[#397bff] group-hover:border-[#397bff] group-hover:shadow-[0_0_40px_rgba(57,123,255,0.5)]">
                  {renderIcon(item.id, "w-7 h-7 text-[#397bff] group-hover:text-white transition-colors")}
                </div>
                <span className="text-white/10 group-hover:text-[#397bff]/30 font-black text-6xl italic tracking-tighter transition-all duration-700 select-none">
                  0{idx + 1}
                </span>
              </div>
              
              <div className="space-y-5 flex-grow">
                <h3 className="text-[24px] font-bold text-white tracking-tight group-hover:text-[#397bff] transition-colors leading-snug">
                  {item.title}
                </h3>
                {/* 強制為 16px (text-base) */}
                <p className="text-base text-slate-200 font-normal leading-[1.8] tracking-wider group-hover:text-white transition-colors">
                  {item.description}
                </p>
              </div>

              <div className="mt-10 h-1 w-0 bg-[#397bff] group-hover:w-full transition-all duration-700 rounded-full opacity-50"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
