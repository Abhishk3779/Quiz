import React, { useState, useEffect } from "react";

export default function SalesPlanScreen({ answers, onPurchase }) {
  const [timeLeft, setTimeLeft] = useState(897); // 14:57 in seconds

  // Timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // Data mapping from previous screens
  const userName = answers.name || "User";
  const currentWeight = answers.currentWeight?.weight || 70;
  const targetWeight = answers.goalWeight?.goalWeight || 60;
  const unit = answers.currentWeight?.unit || "kg";

  return (
    <div className="min-h-screen bg-[#f4f7ff] font-sans text-black pb-20">
      {/* Sticky Header with Timer */}
      <div className="sticky top-0 z-50 flex items-center justify-between bg-white px-6 py-3 shadow-sm">
        <div className="text-[14px] font-medium text-gray-500">
          Discount expires in: <span className="font-bold text-black">{formatTime(timeLeft)}</span>
        </div>
        <button className="rounded-full bg-[#1a73e8] px-5 py-2 text-[14px] font-bold text-white shadow-md">
          Get your plan
        </button>
      </div>

      <div className="mx-auto max-w-[500px] px-4 pt-8">
        {/* Comparison Section */}
        <div className="rounded-[24px] bg-white p-8 text-center shadow-sm">
          <div className="mb-6 flex items-center justify-center gap-8">
            <div className="flex flex-col items-center">
              <div className="h-32 w-20 bg-gray-200 rounded-t-full opacity-50 relative overflow-hidden">
                 {/* Placeholder for "Before" Body Shape */}
                 <div className="absolute bottom-0 w-full h-[80%] bg-[#ffcc80]" />
              </div>
              <p className="mt-2 text-[12px] font-bold uppercase text-gray-400 tracking-tighter">Starting weight</p>
              <p className="text-[20px] font-extrabold">{currentWeight} {unit}</p>
            </div>
            
            <div className="text-[#1a73e8] text-[32px] font-bold">→</div>

            <div className="flex flex-col items-center">
              <div className="h-32 w-20 bg-gray-200 rounded-t-full opacity-50 relative overflow-hidden">
                 {/* Placeholder for "After" Body Shape */}
                 <div className="absolute bottom-0 w-full h-[60%] bg-[#81c784]" />
              </div>
              <p className="mt-2 text-[12px] font-bold uppercase text-gray-400 tracking-tighter">Goal weight</p>
              <p className="text-[20px] font-extrabold text-[#2e7d32]">{targetWeight} {unit}</p>
            </div>
          </div>
          <h2 className="text-[22px] font-black leading-tight">
            Your A1C management plan is customized and waiting, {userName}!
          </h2>
        </div>

        {/* Promo Box */}
        <div className="mt-4 rounded-2xl bg-[#e3f2fd] p-4 border-2 border-dashed border-[#1a73e8] flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="bg-[#1a73e8] rounded-full p-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="text-[14px] font-bold text-[#1a73e8]">Your promo code applied</span>
            </div>
            <span className="text-[12px] font-black text-gray-400 uppercase">HEALTHY-START</span>
        </div>

        {/* Membership Options */}
        <div className="mt-6 space-y-3">
          <PlanCard title="1-month membership" price="0.45" original="1.20" isPopular={true} />
          <PlanCard title="3-month membership" price="0.29" original="0.85" />
          <PlanCard title="6-month membership" price="0.17" original="0.60" />
        </div>

        <button className="mt-8 w-full rounded-2xl bg-[#1a73e8] py-5 text-[18px] font-black text-white shadow-xl hover:bg-[#1557b0] transition-transform active:scale-95">
          Get your plan
        </button>

        {/* Features / Screenshots Section */}
        <div className="mt-16 text-center">
          <h3 className="text-[22px] font-black mb-8">Track your wins and stay motivated</h3>
          <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
            <AppScreenshot img="📱" title="Smart Tracking" />
            <AppScreenshot img="🥗" title="Meal Plans" />
            <AppScreenshot img="📊" title="Progress" />
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-16 bg-white rounded-[32px] p-8 shadow-sm">
           <h3 className="text-[20px] font-black text-center mb-6">Success stories from our members</h3>
           <Testimonial name="Sophie H." text="I lost 12kg in just 3 months! The plan was so easy to follow and the support was incredible." stars={5} />
        </div>

        {/* Guarantee */}
        <div className="mt-16 text-center px-4">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#2e7d32]">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h4 className="text-[18px] font-black">30 days money-back guarantee</h4>
            <p className="mt-2 text-[14px] text-gray-500 leading-relaxed">
                We are confident in our program and you will start seeing results within two weeks! 
                If you don't notice any changes, we'll give your money back.
            </p>
        </div>
      </div>
    </div>
  );
}

// Sub-components for cleaner code
function PlanCard({ title, price, original, isPopular }) {
  return (
    <div className={`relative rounded-2xl bg-white p-5 border-2 transition-all ${isPopular ? "border-[#2e7d32] shadow-md" : "border-transparent"}`}>
      {isPopular && (
          <div className="absolute -top-3 left-6 bg-[#2e7d32] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase">Most Popular</div>
      )}
      <div className="flex justify-between items-center">
        <div>
            <p className="text-[16px] font-black">{title}</p>
            <p className="text-[12px] text-gray-400 line-through">USD {original} / day</p>
        </div>
        <div className="text-right">
            <p className="text-[22px] font-black text-[#2e7d32]">USD {price}</p>
            <p className="text-[12px] font-bold text-gray-400">per day</p>
        </div>
      </div>
    </div>
  );
}

function AppScreenshot({ img, title }) {
    return (
        <div className="min-w-[160px] h-[280px] bg-white rounded-[24px] border border-gray-100 flex flex-col items-center justify-center shadow-sm">
            <span className="text-[40px] mb-4">{img}</span>
            <p className="font-bold text-gray-400 uppercase text-[10px] tracking-widest">{title}</p>
        </div>
    )
}

function Testimonial({ name, text, stars }) {
    return (
        <div className="border-b border-gray-100 py-6 last:border-0">
            <div className="flex gap-1 mb-2">
                {[...Array(stars)].map((_, i) => <span key={i} className="text-[#ffb300]">★</span>)}
            </div>
            <p className="text-[14px] italic text-gray-600 mb-3">"{text}"</p>
            <p className="text-[14px] font-black">— {name}</p>
        </div>
    )
}