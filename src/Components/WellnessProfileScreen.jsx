import React, { useEffect, useState } from "react";

export default function WellnessProfileScreen({ answers, onContinue }) {
  const [animatedPos, setAnimatedPos] = useState(0);

  const bmi = Number(answers?.currentWeight?.bmi) || 22.0;
  const lifestyle = answers?.activityLevel || "Active";
  const currentWeightKg = Number(answers?.currentWeight?.kg || 0);
  const goalWeightKg = Number(answers?.goalWeight?.kg || 0);
  const exactAge = answers?.exactAge || "-";

  const getBmiPosition = (val) => {
    if (val <= 15) return 0;
    if (val >= 40) return 100;
    return ((val - 15) / (40 - 15)) * 100;
  };

  useEffect(() => {
    const finalPos = getBmiPosition(bmi);
    const timer = setTimeout(() => {
      setAnimatedPos(finalPos);
    }, 100);

    return () => clearTimeout(timer);
  }, [bmi]);

  const getBmiCategory = (value) => {
    if (value < 18.5) return "Low";
    if (value < 25) return "Normal";
    if (value < 30) return "Overweight";
    return "Obese";
  };

  const getFeedbackContent = (value) => {
    if (value < 25) {
      return {
        icon: "👉",
        title: "You are in a healthy range",
        description:
          "You are doing well. We will build your plan to help you stay consistent and feel even better in your body.",
        boxBg: "bg-[#eef7ee]",
        boxBorder: "border-[#dceadc]",
        textColor: "text-[#4a5f4a]",
      };
    }

    if (value < 30) {
      return {
        icon: "👉",
        title: "You can improve your current level",
        description:
          "Many people are in this situation, and it can be improved step by step. We will create a simple plan to help you feel lighter and move more easily.",
        boxBg: "bg-[#fff7e8]",
        boxBorder: "border-[#f3dfb2]",
        textColor: "text-[#7a5a1f]",
      };
    }

    return {
      icon: "👉",
      title: "It’s a good time to take care of your body",
      description:
        "Your current weight may make daily movement harder. The good news is — with the right plan, you can improve this over time. We will guide you in a safe and simple way.",
      boxBg: "bg-[#fff1f1]",
      boxBorder: "border-[#f1caca]",
      textColor: "text-[#7a4040]",
    };
  };

  const bmiLabel = getBmiCategory(bmi);
  const feedback = getFeedbackContent(bmi);

  const weightDifference =
    currentWeightKg && goalWeightKg
      ? Math.abs(currentWeightKg - goalWeightKg).toFixed(1)
      : null;

  const weightGoalText =
    currentWeightKg && goalWeightKg
      ? goalWeightKg < currentWeightKg
        ? `Lose ${weightDifference} kg`
        : goalWeightKg > currentWeightKg
        ? `Gain ${weightDifference} kg`
        : "Maintain weight"
      : "Weight goal set";

  return (
    <section className="min-h-screen bg-[#f9f9f7] px-4 py-10 font-sans">
      <div className="mx-auto max-w-[600px]">
        <h2 className="mb-8 text-center text-[28px] font-bold text-black">
          Here is your wellness profile
        </h2>

        <div className="rounded-[24px] bg-white p-6 shadow-sm border border-[#efefed]">
          <div className="flex justify-between items-center mb-6">
            <span className="font-bold text-[15px] text-black">
              Body-Mass-Index (BMI)
            </span>
            <span className="text-[13px] text-[#6f6f6f]">
              {bmiLabel} - {bmi}
            </span>
          </div>

          <div className="relative mt-12 mb-8">
            <div className="h-2.5 w-full rounded-full flex overflow-hidden bg-[#eee]">
              <div className="h-full w-[35%] bg-[#4CAF50]" />
              <div className="h-full w-[25%] bg-[#FFC107]" />
              <div className="h-full w-[40%] bg-[#F44336]" />
            </div>

            <div
              className="absolute top-[-42px] flex flex-col items-center transition-all duration-[1500ms] ease-out"
              style={{ left: `${animatedPos}%`, transform: "translateX(-50%)" }}
            >
              <div className="relative bg-[#333] text-white text-[12px] px-3 py-1.5 rounded-lg font-bold mb-2 whitespace-nowrap shadow-md">
                Your BMI is {bmi}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#333] rotate-45" />
              </div>

              <div className="w-3.5 h-3.5 rounded-full bg-[#ffd54f] border-[2px] border-white shadow-[0_4px_12px_rgba(0,0,0,0.22)]" />
            </div>

            <div className="flex justify-between mt-4 text-[10px] font-extrabold text-[#b0b0ae] uppercase tracking-widest">
              <span>Normal</span>
              <span>Overweight</span>
              <span>Obese</span>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-7 px-2">
          <AttributeItem icon="🕒" label="Lifestyle" value={lifestyle} />
          <AttributeItem icon="🎯" label="Weight Goal" value={weightGoalText} />
          <AttributeItem icon="📅" label="Age" value={`${exactAge} years`} />
        </div>

        <div
          className={`mt-10 rounded-[24px] p-6 flex items-start gap-4 border ${feedback.boxBg} ${feedback.boxBorder}`}
        >
          <span className="text-[24px]">{feedback.icon}</span>
          <div>
            <h4 className="font-bold text-[16px] text-black mb-2">
              {feedback.title}
            </h4>
            <p className={`text-[14px] leading-relaxed ${feedback.textColor}`}>
              {feedback.description}
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

function AttributeItem({ icon, label, value }) {
  return (
    <div className="flex items-center gap-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[20px] shadow-sm border border-[#f0f0ee]">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-bold text-[#b0b0ae] uppercase tracking-tighter">
          {label}
        </p>
        <p className="text-[17px] font-bold text-black">{value}</p>
      </div>
    </div>
  );
}