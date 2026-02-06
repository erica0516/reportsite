
import React, { useState, useEffect } from 'react';
import { Check, Loader2 } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    company: '',
    subscribe: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [emailFormatError, setEmailFormatError] = useState<string | null>(null);

  const isFormFilled = 
    formData.name.trim() !== '' && 
    formData.email.trim() !== '' && 
    formData.title.trim() !== '' && 
    formData.company.trim() !== '';

  const validateEmail = (email: string) => {
    if (!email) {
      setEmailFormatError(null);
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailFormatError("電子郵件格式錯誤");
      return false;
    }
    setEmailFormatError(null);
    return true;
  };

  useEffect(() => {
    if (formData.email && emailFormatError) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(formData.email)) {
        setEmailFormatError(null);
      }
    }
  }, [formData.email]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormFilled) return;
    if (!validateEmail(formData.email)) return;

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeSuccessModal = () => {
    setIsSuccess(false);
    setFormData({
      name: '',
      email: '',
      title: '',
      company: '',
      subscribe: false
    });
  };

  const sectionBackgroundStyle: React.CSSProperties = {
    backgroundColor: '#000105',
    backgroundImage: `
      radial-gradient(circle at 15% 15%, rgba(57, 123, 255, 0.45) 0%, transparent 60%),
      radial-gradient(circle at 85% 85%, rgba(57, 123, 255, 0.35) 0%, transparent 55%),
      radial-gradient(circle at 50% 50%, rgba(0, 5, 25, 1) 0%, transparent 100%)
    `,
    backgroundAttachment: 'fixed'
  };

  return (
    <section 
      id="download-form" 
      className="py-24 md:py-48 text-white relative overflow-hidden scroll-mt-20"
      style={sectionBackgroundStyle}
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[15%] right-[5%] w-[600px] h-[600px] bg-[#397bff]/25 blur-[150px] rounded-full opacity-60"></div>
        <div className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] bg-blue-800/40 blur-[130px] rounded-full opacity-50"></div>
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-12 reveal-on-scroll">
            {/* 章節標題固定為 32px / H2 */}
            <h2 className="text-[32px] font-black leading-tight tracking-tight drop-shadow-2xl">
              立即下載 <span className="block mt-1">《 Motix Lab 年度產業前瞻報告 》</span>
            </h2>
            <ul className="space-y-10">
              {[
                "以消費者行為為出發點，觀察十個產業之間的動態變化",
                "從跨產業視告理解趨勢形成，而非單點產業分析",
                "追蹤消費者在不同產業間的行為轉移與關注變化",
                "補足傳統產業分析中對產業連動與行為流動的理解落差"
              ].map((text, i) => (
                <li key={i} className={`flex items-start gap-5 reveal-on-scroll reveal-delay-${(i + 1) * 100}`}>
                  <div className="mt-1 flex-shrink-0">
                    <Check className="w-6 h-6 text-[#397bff] stroke-[3] drop-shadow-[0_0_8px_rgba(57,123,255,0.5)]" />
                  </div>
                  {/* 調整為 text-base (16px) */}
                  <span className="text-base text-white font-normal leading-relaxed tracking-[0.1em] drop-shadow-md">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative reveal-on-scroll reveal-delay-300">
            <div className="bg-black/30 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 md:p-12 shadow-[0_40px_100px_rgba(0,0,0,0.9)] hover:border-[#397bff]/40 transition-all duration-500">
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="space-y-2">
                  <label className="text-base font-bold text-white uppercase tracking-widest">姓名<span className="text-red-500 ml-1">*</span></label>
                  <input 
                    type="text" 
                    placeholder="請輸入姓名"
                    className="w-full bg-[#1e293b]/40 border-none rounded-lg px-4 py-4 text-white placeholder:text-slate-400 focus:ring-1 focus:ring-[#397bff] outline-none transition-all text-base"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                
                <div className="space-y-2 relative">
                  <label className="text-base font-bold text-white uppercase tracking-widest">公司電子郵件<span className="text-red-500 ml-1">*</span></label>
                  <input 
                    type="email" 
                    placeholder="請輸入公司電子郵件"
                    className={`w-full bg-[#1e293b]/40 rounded-lg px-4 py-4 text-white placeholder:text-slate-400 outline-none transition-all text-base border ${
                      emailFormatError ? 'border-red-500 ring-1 ring-red-500' : 'border-transparent focus:ring-1 focus:ring-[#397bff]'
                    }`}
                    value={formData.email}
                    onBlur={(e) => validateEmail(e.target.value)}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                  {emailFormatError && (
                    <p className="text-red-500 text-base mt-2 absolute left-1">{emailFormatError}</p>
                  )}
                </div>

                <div className="space-y-2 pt-2">
                  <label className="text-base font-bold text-white uppercase tracking-widest">職稱<span className="text-red-500 ml-1">*</span></label>
                  <input 
                    type="text" 
                    placeholder="請輸入職稱"
                    className="w-full bg-[#1e293b]/40 border-none rounded-lg px-4 py-4 text-white placeholder:text-slate-400 focus:ring-1 focus:ring-[#397bff] outline-none transition-all text-base"
                    value={formData.title}
                    onChange={e => setFormData({...formData, title: e.target.value})}
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-base font-bold text-white uppercase tracking-widest">公司名稱<span className="text-red-500 ml-1">*</span></label>
                  <input 
                    type="text" 
                    placeholder="請輸入公司名稱"
                    className="w-full bg-[#1e293b]/40 border-none rounded-lg px-4 py-4 text-white placeholder:text-slate-400 focus:ring-1 focus:ring-[#397bff] outline-none transition-all text-base"
                    value={formData.company}
                    onChange={e => setFormData({...formData, company: e.target.value})}
                  />
                </div>

                <div className="pt-2 flex items-start gap-3 group cursor-pointer" onClick={() => setFormData({...formData, subscribe: !formData.subscribe})}>
                  <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-sm border transition-all flex items-center justify-center ${formData.subscribe ? 'bg-[#397bff] border-[#397bff]' : 'bg-transparent border-white/20 group-hover:border-white/40'}`}>
                    {formData.subscribe && <Check className="w-4 h-4 text-black stroke-[4]" />}
                  </div>
                  <span className="text-base text-white font-normal leading-snug select-none group-hover:text-blue-200 transition-colors">
                    我同意接收未來的產業研究、報告更新與行銷推廣相關資訊。
                  </span>
                </div>

                <div className="flex flex-col items-center pt-6">
                  <button 
                    type="submit" 
                    disabled={isSubmitting || !isFormFilled || !!emailFormatError}
                    className={`font-black px-12 py-4 rounded-full transition-all duration-500 text-base flex items-center gap-3 border ${
                      isFormFilled && !isSubmitting && !emailFormatError
                      ? 'bg-black/80 backdrop-blur-md text-[#397bff] border-[#397bff]/60 hover:bg-[#397bff] hover:text-white shadow-[0_0_30px_rgba(57,123,255,0.3)]'
                      : 'bg-white/5 border-white/10 text-white/40 cursor-not-allowed'
                    }`}
                  >
                    {isSubmitting ? <Loader2 className="w-6 h-6 animate-spin" /> : <span className="tracking-widest uppercase">送出</span>}
                  </button>
                  <p className="mt-4 text-base text-slate-300 font-bold tracking-widest text-center">
                    表單送出後，系統將立即寄送完整報告至您的電子信箱
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {isSuccess && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={closeSuccessModal}></div>
          <div className="relative bg-black w-full max-w-lg rounded-2xl p-10 py-16 text-center shadow-[0_0_100px_rgba(0,0,0,1)] border border-white/10 animate-in fade-in zoom-in duration-500">
            <div className="flex justify-center mb-10">
              <div className="relative">
                <div className="absolute inset-0 bg-[#397bff]/20 blur-2xl rounded-full"></div>
                <div className="relative w-24 h-24 rounded-xl border-2 border-[#397bff] flex items-center justify-center bg-black/50">
                  <Check className="w-12 h-12 text-[#397bff] stroke-[3]" />
                </div>
              </div>
            </div>
            
            <div className="space-y-4 mb-14">
              <h3 className="text-2xl md:text-3xl font-black text-white tracking-wide">感謝您索取本次報告。</h3>
              <p className="text-base text-slate-100 font-medium leading-relaxed">
                完整報告已寄送至您填寫的電子郵件信箱。
              </p>
            </div>

            <div className="flex justify-center">
              <button 
                onClick={closeSuccessModal}
                className="w-full max-w-[280px] bg-black text-[#397bff] border-2 border-[#397bff] font-black py-4 rounded-full text-base hover:bg-[#397bff] hover:text-white transition-all duration-300 active:scale-95 shadow-[0_0_30px_rgba(57,123,255,0.2)]"
              >
                確認
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactForm;
