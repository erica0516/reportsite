
import React from 'react';
import { Loader2, FileText, Search, Settings, Check } from 'lucide-react';

export default function ServicesSection() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    title: '',
    company: '',
    requirement: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [emailError, setEmailError] = React.useState<string | null>(null);

  const isFormFilled = 
    formData.name.trim() !== '' && 
    formData.email.trim() !== '' && 
    formData.title.trim() !== '' && 
    formData.company.trim() !== '' && 
    formData.requirement.trim() !== '';

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
      setEmailError("電子郵件格式錯誤");
      return false;
    }
    setEmailError(null);
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormFilled || !validateEmail(formData.email)) return;

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const closeSuccess = () => {
    setIsSuccess(false);
    setFormData({ name: '', email: '', title: '', company: '', requirement: '' });
  };

  const services = [
    { icon: <FileText className="w-5 h-5 text-[#397bff]" />, title: "年度產業報告" },
    { icon: <Search className="w-5 h-5 text-[#397bff]" />, title: "專題研究企劃" },
    { icon: <Settings className="w-5 h-5 text-[#397bff]" />, title: "客製化數據應用與延伸服務" }
  ];

  return (
    <div className="bg-black min-h-screen relative overflow-hidden flex flex-col justify-center py-24 md:py-32">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 z-10 w-full">
        {/* 標題區：引言 - 提升至 18px (text-lg) */}
        <div className="text-center mb-10 md:mb-12 reveal-on-scroll">
          <p className="text-[#397bff] font-bold tracking-[0.3em] uppercase text-base mb-4 md:mb-6">CUSTOMIZED SOLUTIONS</p>
          <p className="max-w-3xl mx-auto text-slate-100 text-lg font-normal px-4 md:px-0 tracking-[0.12em] leading-[1.8]">
            Motix Lab 以「人潮洞察」為核心，提供三種型態的研究與應用服務：
          </p>
        </div>

        {/* 服務列表 - 標題提升至 18px (text-lg) */}
        <div className="flex flex-col items-center gap-6 md:gap-8 mb-12 md:mb-16">
          {services.map((service, index) => (
            <div key={index} className={`group flex flex-row items-center gap-5 md:gap-6 transition-all duration-500 reveal-on-scroll reveal-delay-${(index + 1) * 100}`}>
              <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center transition-all duration-700 bg-black group-hover:border-[#397bff]/50 shadow-[0_0_15px_rgba(0,0,0,0.3)]">
                {service.icon}
              </div>
              <div className="flex flex-col justify-center min-w-[220px] md:min-w-[400px]">
                <h3 className="text-white text-lg font-bold tracking-widest group-hover:text-[#397bff] transition-colors duration-500 leading-none">
                  {service.title}
                </h3>
                <div className="mt-2 md:mt-3 w-4 h-[1px] bg-white/10 group-hover:w-full group-hover:bg-[#397bff]/30 transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>

        {/* 底部說明文字 - 提升至 18px (text-lg) */}
        <div className="text-center mb-20 md:mb-28 reveal-on-scroll">
          <p className="max-w-4xl mx-auto text-white text-lg font-normal px-4 md:px-0 tracking-[0.12em] leading-[1.8]">
            協助品牌持續掌握市場變化，並把洞察落地成可執行的策略。
          </p>
        </div>

        {/* 聯絡表單區 */}
        <section className="bg-black border border-white/10 rounded-[40px] p-8 md:p-16 mb-12 shadow-[0_0_80px_rgba(0,0,0,1)] max-w-4xl mx-auto relative group hover:border-[#397bff]/20 transition-colors reveal-on-scroll">
          <div className="text-center mb-12">
            <h2 className="text-[28px] md:text-[32px] font-black text-white mb-4 tracking-tight uppercase">聯絡我們</h2>
            <p className="text-slate-400 text-base font-bold tracking-wide">
              請您留下需求資訊，我們將盡快與您聯繫，討論適合您的服務方案
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8 text-left" noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-base font-bold text-white uppercase tracking-widest">姓名<span className="text-red-500 ml-1">*</span></label>
                <input 
                  type="text" 
                  placeholder="請輸入姓名" 
                  className="w-full bg-[#1e293b] border-none rounded-xl px-4 py-4 text-white placeholder:text-slate-500 focus:ring-1 focus:ring-[#397bff] outline-none transition-all text-base"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="space-y-3 relative">
                <label className="text-base font-bold text-white uppercase tracking-widest">公司電子郵件<span className="text-red-500 ml-1">*</span></label>
                <input 
                  type="email" 
                  placeholder="請輸入公司電子郵件" 
                  className={`w-full bg-[#1e293b] rounded-xl px-4 py-4 text-white placeholder:text-slate-500 outline-none transition-all text-base border ${
                    emailError ? 'border-red-500 ring-1 ring-red-500' : 'border-transparent focus:ring-1 focus:ring-[#397bff]'
                  }`}
                  value={formData.email}
                  onBlur={(e) => validateEmail(e.target.value)}
                  onChange={e => {
                    setFormData({...formData, email: e.target.value});
                    if (emailError) setEmailError(null);
                  }}
                />
                {emailError && <span className="text-red-500 text-base absolute -bottom-6 left-1">{emailError}</span>}
              </div>

              <div className="space-y-3">
                <label className="text-base font-bold text-white uppercase tracking-widest">職稱<span className="text-red-500 ml-1">*</span></label>
                <input 
                  type="text" 
                  placeholder="請輸入職稱" 
                  className="w-full bg-[#1e293b] border-none rounded-xl px-4 py-4 text-white placeholder:text-slate-500 focus:ring-1 focus:ring-[#397bff] outline-none transition-all text-base"
                  value={formData.title}
                  onChange={e => setFormData({...formData, title: e.target.value})}
                />
              </div>

              <div className="space-y-3">
                <label className="text-base font-bold text-white uppercase tracking-widest">公司名稱<span className="text-red-500 ml-1">*</span></label>
                <input 
                  type="text" 
                  placeholder="請輸入公司名稱" 
                  className="w-full bg-[#1e293b] border-none rounded-xl px-4 py-4 text-white placeholder:text-slate-500 focus:ring-1 focus:ring-[#397bff] outline-none transition-all text-base"
                  value={formData.company}
                  onChange={e => setFormData({...formData, company: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-base font-bold text-white uppercase tracking-widest">服務需求<span className="text-red-500 ml-1">*</span></label>
              <textarea 
                placeholder="請輸入您的服務需求，EX.希望依據實際情境進行客製化的產業洞察分析。" 
                className="w-full bg-[#1e293b] border-none rounded-2xl px-4 py-4 text-white placeholder:text-slate-500 focus:ring-1 focus:ring-[#397bff] outline-none transition-all text-base h-40 resize-none"
                value={formData.requirement}
                onChange={e => setFormData({...formData, requirement: e.target.value})}
              ></textarea>
            </div>
            
            <div className="flex justify-center pt-8">
              <button 
                type="submit" 
                disabled={isSubmitting || !isFormFilled || !!emailError}
                className={`px-14 py-4 rounded-full font-black text-base transition-all duration-500 border-2 ${
                  isFormFilled && !isSubmitting && !emailError
                  ? 'bg-black text-[#397bff] border-[#397bff]/60 hover:bg-[#397bff] hover:text-white shadow-[0_0_30px_rgba(57,123,255,0.2)]'
                  : 'bg-white/5 border-white/10 text-white/40 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : "送出需求"}
              </button>
            </div>
          </form>

          {isSuccess && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/95 backdrop-blur-xl rounded-[40px] z-20 animate-in fade-in zoom-in duration-500">
              <div className="text-center px-4 py-10 w-full max-w-lg">
                <div className="flex justify-center mb-10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#397bff]/20 blur-2xl rounded-full"></div>
                    <div className="relative w-20 h-20 rounded-xl border-2 border-[#397bff] flex items-center justify-center bg-black/50">
                      <Check className="w-10 h-10 text-[#397bff] stroke-[3]" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-14">
                  <h3 className="text-2xl font-black text-white tracking-wide">已成功送出。</h3>
                  <div className="space-y-2">
                    <p className="text-base text-slate-100 font-medium leading-relaxed">感謝您的聯絡。</p>
                    <p className="text-base text-slate-100 font-medium leading-relaxed">我們已收到您的需求，相關人員將儘速與您聯繫。</p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button 
                    onClick={closeSuccess}
                    className="w-full max-w-[240px] bg-black text-[#397bff] border-2 border-[#397bff] font-black py-4 rounded-full text-base hover:bg-[#397bff] hover:text-white transition-all duration-300 active:scale-95 shadow-[0_0_30px_rgba(57,123,255,0.2)]"
                  >
                    確認
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
