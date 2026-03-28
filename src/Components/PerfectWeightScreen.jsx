import { useEffect, useRef, useState } from "react";

export default function PerfectWeightScreen({ onContinue, onBack, userHeightInMeters = 1.75 }) {
  const [unit, setUnit] = useState("kg");
  const [value, setValue] = useState("");
  const [bmiResult, setBmiResult] = useState(null);
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  const limits =
    unit === "kg"
      ? { min: 50, max: 250 }
      : { min: 110, max: 550 };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const weight = parseFloat(value);
    
    if (value.length > 0) {
      // 1. Check if weight is within the required range
      if (weight < limits.min || weight > limits.max) {
        // Show error only if they've typed enough digits to realistically be finished
        const minDigits = unit === "kg" ? 2 : 3;
        if (value.length >= minDigits) {
          setError(`Please enter a value between ${limits.min} and ${limits.max} for ${unit}`);
          setBmiResult(null);
        } else {
          setError("");
          setBmiResult(null);
        }
      } else {
        // 2. Weight is valid -> Clear error and Calculate BMI
        setError("");
        const weightInKg = unit === "lbs" ? weight * 0.453592 : weight;
        // Basic BMI formula: weight (kg) / height (m)^2
        const bmi = weightInKg / (userHeightInMeters * userHeightInMeters);
        setBmiResult(parseFloat(bmi.toFixed(1)));
      }
    } else {
      setError("");
      setBmiResult(null);
    }
  }, [value, unit, userHeightInMeters]);

  const handleUnitChange = (nextUnit) => {
    setUnit(nextUnit);
    setValue("");
    setError("");
    setBmiResult(null);
    inputRef.current?.focus();
  };

  const handleChange = (e) => {
    const raw = e.target.value;
    let cleaned = raw.replace(/\D/g, "");
    // Strictly allow only 3 digits
    if (cleaned.length > 3) cleaned = cleaned.slice(0, 3);
    setValue(cleaned);
  };

  const getBmiStatus = (bmi) => {
    if (bmi < 25) {
      return { 
        label: "Normal", 
        bgColor: "bg-[#FEF9C3]", // Light Yellow
        icon: "👏", 
        desc: "You are doing a good job keeping your weight in the normal range. We will use your index to tailor a program to your needs." 
      };
    } else if (bmi >= 25 && bmi < 30) {
      return { 
        label: "Slightly High", 
        bgColor: "bg-[#FFEDD5]", // Orange
        icon: "☝️", 
        desc: "Your weight is slightly above the ideal range. We will use this index to customize your plan." 
      };
    } else {
      return { 
        label: "High", 
        bgColor: "bg-[#FEE2E2]", // Red
        icon: "⚠️", 
        desc: "Your BMI is in the high range. Let's work on a plan to reach your goals safely." 
      };
    }
  };

  const isValid = parseFloat(value) >= limits.min && parseFloat(value) <= limits.max;
  const status = bmiResult ? getBmiStatus(bmiResult) : null;

  return (
    <section className="min-h-screen bg-white px-4 pb-10 pt-4 font-sans">
      {/* Header & Progress Bar */}
      <div className="mx-auto max-w-full">
        <div className="flex items-center justify-between">
          <button onClick={onBack} className="text-[24px] text-[#b8b8b8]">←</button>
          <div className="text-[14px] font-medium text-[#6f6f6f]">19 / 24</div>
        </div>
        <div className="mt-2 relative h-[5px] w-full overflow-hidden rounded-full bg-[#e6e6e3]">
          <div className="h-full w-[79%] rounded-full bg-[#2f7a4d]" />
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-[550px] flex flex-col items-center">
        <h2 className="text-center text-[24px] font-bold text-black">
          What&apos;s your current weight?
        </h2>

        {/* Unit Toggle (Height Page Style) */}
        <div className="mt-6 flex justify-center">
          <div className="flex rounded-full bg-[#ecebe7] p-[3px]">
            {["lbs", "kg"].map((u) => (
              <button
                key={u}
                onClick={() => handleUnitChange(u)}
                className={`w-[60px] rounded-full py-1.5 text-[14px] font-bold transition-all ${
                  unit === u ? "bg-[#4a7a5a] text-white shadow-sm" : "text-[#7e7e7e]"
                }`}
              >
                {u}
              </button>
            ))}
          </div>
        </div>

        {/* Weight Input Area */}
        <div className="mt-12 relative flex items-center justify-center">
          <div className="relative flex items-center">
            <input
              ref={inputRef}
              type="text"
              inputMode="numeric"
              value={value}
              onChange={handleChange}
              placeholder="0"
              className={`bg-transparent text-center text-[40px] font-bold outline-none border-none focus:ring-0 placeholder-[#d4d4d4] transition-colors leading-none ${
                error ? "text-red-500" : "text-black"
              }`}
              style={{ width: value.length > 0 ? `${value.length * 45 + 10}px` : "80px" }}
            />
            {/* Unit at Bottom Right */}
            <span className="absolute bottom-2 -right-8 text-[18px] font-bold text-black">
              {unit}
            </span>
          </div>
        </div>

        {/* Error Message Space (No jump) */}
        <div className="h-6 mt-2 flex items-center justify-center">
          {error && <p className="text-red-500 text-[13px] font-medium">{error}</p>}
        </div>

        {/* Dynamic Color-Coded Result Box */}
        {bmiResult && status && (
          <div className={`mt-4 w-full rounded-[24px] ${status.bgColor} p-6 animate-in fade-in slide-in-from-top-2 duration-300`}>
            <div className="flex items-start gap-4">
              <span className="text-[24px]">{status.icon}</span>
              <div>
                <h3 className="text-[17px] font-bold text-black leading-tight">
                  Your BMI is {bmiResult}, which is {status.label}
                </h3>
                <p className="mt-1 text-[13px] leading-relaxed text-[#4b5563]">
                  {status.desc}
                </p>
              </div>
            </div>
          </div>
        )}

        <button
          disabled={!isValid}
          onClick={() => onContinue({ weight: value, unit, bmi: bmiResult })}
          className={`mt-10 w-full rounded-[16px] py-[12px] text-[18px] font-bold text-white transition-all ${
            isValid 
              ? "bg-[#3ca05f] hover:bg-[#318451] shadow-md" 
              : "bg-[#3ca05f] opacity-50 cursor-not-allowed"
          }`}
        >
          Continue
        </button>
      </div>
    </section>
  );
}