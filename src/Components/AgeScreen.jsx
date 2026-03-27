import { useState } from "react";
import { ArrowIcon, GlobeIcon } from "./icons"; // Removed CheckIcon from here to use raw SVG
import Women1 from "../assets/Women.webp";

export default function AgeScreen({ question, onSelect }) {
  const [agreed, setAgreed] = useState(false);

  const handleSelection = (option) => {
    if (agreed) {
      onSelect(option);
    } else {
      alert("Please agree to the Terms and Conditions first.");
    }
  };

  return (
    <section className="min-h-screen bg-[#f3f3f3] px-4 py-10">
      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-[920px] flex-col items-center justify-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-md bg-[#dcecc8] px-3 py-2">
          <span className="text-[13px] text-[#2e9b64]">★</span>
          <span className="text-[12px] font-semibold text-[#1f1f1f]">
            {question.badge}
          </span>
          <span className="text-[#8b8b8b]">|</span>
          <span className="text-[12px] uppercase tracking-wide text-[#4c5a37]">
            {question.badgeSub}
          </span>
        </div>

        {/* Title */}
        <h1 className="mt-7 max-w-[760px] text-center text-[34px] font-bold leading-[1.18] tracking-[-0.02em] text-black md:text-[24px]">
          {question.title}
        </h1>

        <div className="mt-10 flex w-full max-w-[760px] flex-col items-center justify-center gap-10 md:flex-row md:items-center md:justify-center">
          {/* Image */}
          <div className="flex justify-center md:w-[300px]">
            <img
              src={Women1}
              alt="WomanFigure"
              className="h-auto w-[210px] object-contain md:w-[250px] lg:w-[290px]"
            />
          </div>

          {/* Options Section */}
          <div className="w-full max-w-[320px] space-y-3">
            <h4 className="font-semibold text-gray-800">Which age group are you in?</h4>
            {question.options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleSelection(option)}
                className={`flex w-full items-center justify-between rounded-[14px] px-4 py-4 text-left text-white transition-all duration-300 ${
                  agreed 
                    ? "bg-[#3b9b5d] hover:bg-[#318451] cursor-pointer" 
                    : "bg-[#3b9b5d] opacity-50 cursor-not-allowed"
                }`}
              >
                <span className="text-[16px] font-semibold">{option}</span>
                <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-white text-black">
                  <ArrowIcon />
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Language */}
        <div className="mt-8 flex items-center justify-center gap-2 text-[#7a7a7a]">
          <GlobeIcon />
          <span className="text-[16px]">En</span>
        </div>

        {/* Custom Checkbox Container */}
        <div className="mt-6 flex max-w-[560px] items-start justify-center gap-3 text-left">
          <div className="relative mt-[2px] flex h-[22px] w-[22px] min-w-[22px] items-center justify-center">
            <label className="flex h-full w-full cursor-pointer items-center justify-center">
              <input
                type="checkbox"
                className="peer sr-only"
                checked={agreed}
                onChange={() => setAgreed(!agreed)}
              />
              {/* Visual Box: Green border/White BG by default. Solid Green when checked. */}
              <div className="flex h-full w-full items-center justify-center rounded-md border-2 border-[#3b9b5d] bg-white transition-all peer-checked:bg-[#3b9b5d]">
                {/* SVG Tick: Forced to White stroke */}
                <svg 
                  className="h-3.5 w-3.5 text-white peer-checked:block" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="4" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
            </label>
          </div>

          <p className="text-[13px] leading-[1.55] text-[#6f6f6f]">
            By continuing, you agree to our{" "}
            <span className="cursor-pointer underline">Terms of Use</span> and{" "}
            <span className="cursor-pointer underline">Privacy Policy</span>. You
            also consent to the use of cookies as described in our{" "}
            <span className="cursor-pointer underline">Cookie Policy</span>.
          </p>
        </div>
      </div>
    </section>
  );
}