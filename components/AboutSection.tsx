
import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  formatComma?: boolean;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  suffix = '',
  duration = 2500,
  formatComma = true,
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentCount = Math.floor(easeProgress * end);

      setCount(currentCount);

      if (progress < 1) window.requestAnimationFrame(step);
    };

    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  const formattedCount = formatComma ? count.toLocaleString('en-US') : count.toString();

  return (
    <span ref={countRef} className="tabular-nums">
      {formattedCount}
      {suffix}
    </span>
  );
};

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 md:py-48 bg-[#0a0a0b] relative overflow-hidden scroll-mt-20 border-t border-white/5"
    >
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-black text-white/[0.01] tracking-tighter select-none pointer-events-none uppercase whitespace-nowrap italic">
        MOTIX LAB
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-10 items-start">
          <div className="lg:col-span-4 space-y-10 reveal-on-scroll">
            <div className="space-y-8">
              <div className="flex items-center gap-5 mb-4">
                 <div className="w-12 h-1.5 bg-[#397bff] rounded-full shadow-[0_0_15px_rgba(57,123,255,0.4)]"></div>
                 <p className="text-[#397bff] font-black tracking-[0.25em] uppercase text-base leading-none">ABOUT MOTIX LAB</p>
              </div>

              <h2 className="text-[32px] md:text-5xl font-black text-white tracking-tight leading-tight">
                從人潮洞察走向商業前瞻
              </h2>
            </div>

            <div className="relative p-8 bg-white/[0.03] border border-white/10 border-l-4 border-l-[#397bff] rounded-2xl backdrop-blur-md">
              <p className="text-base font-bold text-white/90 leading-relaxed">
                Motix Lab 是 <span className="text-[#397bff]">MESh+</span>{' '}
                旗下的數據洞察實驗室，以電信數據為核心。
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-16 md:space-y-20 reveal-on-scroll reveal-delay-200">
            <div className="space-y-6 max-w-3xl">
              <div className="text-lg text-slate-100 font-normal leading-loose tracking-wider text-left space-y-8">
                <p className="text-lg leading-[1.8]">
                  我們追蹤人潮如何在不同地點與生活情境中跨場域流動，並進一步解析這些移動如何跨渠道影響品牌接觸、消費路徑與商業決策。
                </p>
                <p className="text-lg leading-[1.8]">
                  Motix Lab 以可驗證的方法與可落地的指標，將複雜的人潮流動行為，轉化為可讀懂變化、比較趨勢、判斷策略。
                </p>
              </div>
            </div>

            <div className="w-full grid grid-cols-2 gap-y-16 gap-x-8 md:gap-x-12 lg:flex lg:flex-wrap lg:justify-between lg:gap-x-16 lg:gap-y-16 items-start">
              <div className="flex flex-col items-start min-w-0 lg:min-w-[220px] lg:max-w-[260px] group">
                <div className="flex items-end justify-start mb-6 md:mb-10 whitespace-nowrap">
                  <span className="text-[clamp(28px,4.2vw,72px)] font-black text-white leading-[0.85] tracking-tighter drop-shadow-2xl group-hover:drop-shadow-[0_0_30px_rgba(57,123,255,0.4)] transition-all duration-700">
                    <AnimatedCounter end={2000} />
                  </span>
                  <span className="text-[clamp(16px,1.8vw,32px)] font-black text-white leading-[1] tracking-tighter ml-1 group-hover:text-[#397bff] transition-colors duration-700">
                    萬+
                  </span>
                </div>
                <div className="flex items-center gap-2 w-full border-t border-white/5 pt-4">
                  <div className="w-4 h-[1px] bg-[#397bff] shrink-0" />
                  <p className="text-base text-[#397bff] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] whitespace-nowrap">真實行為數據</p>
                </div>
              </div>

              <div className="flex flex-col items-start min-w-0 lg:min-w-[220px] lg:max-w-[260px] group">
                <div className="flex items-end justify-start mb-6 md:mb-10 whitespace-nowrap">
                  <span className="text-[clamp(28px,4.2vw,72px)] font-black text-white leading-[0.85] tracking-tighter drop-shadow-2xl group-hover:drop-shadow-[0_0_30px_rgba(57,123,255,0.4)] transition-all duration-700">
                    <AnimatedCounter end={150000} suffix="+" />
                  </span>
                </div>
                <div className="flex items-center gap-2 w-full border-t border-white/5 pt-4">
                  <div className="w-4 h-[1px] bg-[#397bff] shrink-0" />
                  <p className="text-base text-[#397bff] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] whitespace-nowrap">實體觀測據點</p>
                </div>
              </div>

              <div className="flex flex-col items-start min-w-0 lg:min-w-[220px] lg:max-w-[260px] group">
                <div className="flex items-end justify-start mb-6 md:mb-10 whitespace-nowrap">
                  <span className="text-[clamp(28px,4.2vw,72px)] font-black text-white leading-[0.85] tracking-tighter drop-shadow-2xl group-hover:drop-shadow-[0_0_30px_rgba(57,123,255,0.4)] transition-all duration-700">
                    <AnimatedCounter end={50000} suffix="+" />
                  </span>
                </div>
                <div className="flex items-center gap-2 w-full border-t border-white/5 pt-4">
                  <div className="w-4 h-[1px] bg-[#397bff] shrink-0" />
                  <p className="text-base text-[#397bff] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] whitespace-nowrap">網站流量觀測</p>
                </div>
              </div>

              <div className="flex flex-col items-start min-w-0 lg:min-w-[220px] lg:max-w-[260px] group">
                <div className="flex items-end justify-start mb-6 md:mb-10 whitespace-nowrap">
                  <span className="text-[clamp(28px,4.2vw,72px)] font-black text-white leading-[0.85] tracking-tighter drop-shadow-2xl group-hover:drop-shadow-[0_0_30px_rgba(57,123,255,0.4)] transition-all duration-700">
                    <AnimatedCounter end={605} />
                  </span>
                </div>
                <div className="flex items-center gap-2 w-full border-t border-white/5 pt-4">
                  <div className="w-4 h-[1px] bg-[#397bff] shrink-0" />
                  <p className="text-base text-[#397bff] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] whitespace-nowrap">產業類別標籤</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
