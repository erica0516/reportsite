
import React from 'react';

const DataVenn: React.FC = () => {
  const imageUrl = "https://lh3.googleusercontent.com/d/1DSy6FwTZ8C4lZnCv53oypF1lDdx1QbNM";

  return (
    <section className="py-24 bg-[#000000] relative overflow-hidden border-t border-white/5">
      {/* 背景網格 */}
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 z-10">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">掌握 2,000 萬真實行為數據</h3>
          <p className="text-xl md:text-2xl text-blue-400 font-medium leading-relaxed">
            融合線上數位足跡與線下實體場域
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-10 shadow-[0_0_15px_#2563eb]"></div>
        </div>

        <div className="relative mx-auto w-full max-w-5xl flex items-center justify-center p-6 bg-slate-900/20 backdrop-blur-sm rounded-[50px] border border-white/5">
          <img 
            src={imageUrl} 
            alt="線上與線下數據交集的動態模型" 
            className="w-full h-auto object-contain transition-all duration-1000"
            style={{ filter: 'brightness(1.1) contrast(1.1) drop-shadow(0 0 30px rgba(59,130,246,0.1))' }}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default DataVenn;