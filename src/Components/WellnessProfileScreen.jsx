import React, { useEffect, useState } from "react";

export default function WellnessProfileScreen({ answers, onContinue }) {
  // 1. Local state for the animated position
  const [animatedPos, setAnimatedPos] = useState(0);

  // 2. BMI Calculation Logic
  const bmi = parseFloat(answers.bmi) || 22.0;
  
  // Maps BMI (range 15-40) to a 0-100% scale for the UI bar
  const getBmiPosition = (val) => {
    if (val <= 15) return 0;
    if (val >= 40) return 100;
    return ((val - 15) / (40 - 15)) * 100;
  };

  // 3. Trigger the "Slide" effect on mount
  useEffect(() => {
    const finalPos = getBmiPosition(bmi);
    // Small timeout ensures the DOM is painted so the transition is visible
    const timer = setTimeout(() => {
      setAnimatedPos(finalPos);
    }, 100);
    return () => clearTimeout(timer);
  }, [bmi]);

  // 4. Dynamic Content based on BMI
  const isNormal = bmi >= 18.5 && bmi <= 25;
  const lifestyle = answers.activityLevel || "Active";

  return (
    <section className="min-h-screen bg-[#f9f9f7] px-4 py-10 font-sans">
      <div className="mx-auto max-w-[600px]">
        <h2 className="mb-8 text-center text-[28px] font-bold text-black">
          Here is your wellness profile
        </h2>

        {/* BMI CARD */}
        <div className="rounded-[24px] bg-white p-6 shadow-sm border border-[#efefed]">
          <div className="flex justify-between items-center mb-6">
            <span className="font-bold text-[15px] text-black">Body-Mass-Index (BMI)</span>
            <span className="text-[13px] text-[#6f6f6f]">
              {isNormal ? "Normal" : bmi > 25 ? "High" : "Low"} - {bmi}
            </span>
          </div>

          <div className="relative mt-12 mb-8">
            {/* The Gradient Bar */}
            <div className="h-2.5 w-full rounded-full flex overflow-hidden bg-[#eee]">
              <div className="h-full w-[35%] bg-[#4CAF50]" /> {/* Normal */}
              <div className="h-full w-[25%] bg-[#FFC107]" /> {/* Overweight */}
              <div className="h-full w-[40%] bg-[#F44336]" /> {/* Obese */}
            </div>

            {/* THE SLIDING INDICATOR */}
            <div 
              className="absolute top-[-42px] flex flex-col items-center transition-all duration-[1500ms] ease-out"
              style={{ left: `${animatedPos}%`, transform: 'translateX(-50%)' }}
            >
              {/* BMI Label Tooltip */}
              <div className="relative bg-[#333] text-white text-[12px] px-3 py-1.5 rounded-lg font-bold mb-2 whitespace-nowrap shadow-md">
                Your BMI is {bmi}
                {/* Tooltip Arrow */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#333] rotate-45" />
              </div>
              
              {/* The Yellow Dot */}
              <div className="w-5 h-5 rounded-full border-[3px] border-white bg-[#FFC107] shadow-lg" />
            </div>

            <div className="flex justify-between mt-4 text-[10px] font-extrabold text-[#b0b0ae] uppercase tracking-widest">
              <span>Normal</span>
              <span>Overweight</span>
              <span>Obese</span>
            </div>
          </div>
        </div>

        {/* PROFILE ATTRIBUTES */}
        <div className="mt-8 space-y-7 px-2">
          <AttributeItem icon="🕒" label="Lifestyle" value={lifestyle} />
          <AttributeItem icon="🍴" label="Type of Eater" value="Gourmand" />
          <AttributeItem icon="🔥" label="Fitness Motivation" value="High" />
        </div>

        {/* FEEDBACK BOX */}
        <div className="mt-10 rounded-[24px] bg-[#eef7ee] p-6 flex items-start gap-4 border border-[#dceadc]">
          <span className="text-[26px]">👌</span>
          <div>
            <h4 className="font-bold text-[16px] text-black mb-1">
              {isNormal ? "Good starting BMI to get a fit body" : "Tailored plan for your body type"}
            </h4>
            <p className="text-[14px] leading-relaxed text-[#4a5f4a]">
              {isNormal 
                ? "You are doing a good job keeping your weight in the normal range. We will use your index to tailor a program to your needs."
                : "We've analyzed your BMI and will adjust your caloric intake and exercise intensity to reach your goals safely."}
            </p>
          </div>
        </div>

        <button
          onClick={onContinue}
          className="mt-8 w-full rounded-[18px] bg-[#3ca05f] py-[18px] text-[18px] font-bold text-white shadow-xl active:scale-[0.98] transition-all"
        >
          Continue
        </button>
      </div>
    </section>
  );
}

// Helper component for the list items
function AttributeItem({ icon, label, value }) {
  return (
    <div className="flex items-center gap-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[20px] shadow-sm border border-[#f0f0ee]">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-bold text-[#b0b0ae] uppercase tracking-tighter">{label}</p>
        <p className="text-[17px] font-bold text-black">{value}</p>
      </div>
    </div>
  );
}