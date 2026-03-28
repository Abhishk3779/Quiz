import { useEffect, useRef, useState } from "react";

export default function GoalWeightScreen({
  onContinue,
  onBack,
  currentWeightKg = 70,
  initialData,
}) {
  const [unit, setUnit] = useState(initialData?.unit || "kg");
  const [value, setValue] = useState(initialData?.value ? String(initialData.value) : "");
  const [goalData, setGoalData] = useState(null);
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  const limits =
    unit === "kg"
      ? { min: 40, max: 200 }
      : { min: 88, max: 440 };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const targetWeight = parseFloat(value);

    if (value.length > 0) {
      if (targetWeight < limits.min || targetWeight > limits.max) {
        const minDigits = unit === "kg" ? 2 : 3;
        if (value.length >= minDigits) {
          setError(`Please enter a value between ${limits.min} and ${limits.max} ${unit}`);
          setGoalData(null);
        } else {
          setError("");
          setGoalData(null);
        }
      } else {
        setError("");
        calculateGoal(targetWeight);
      }
    } else {
      setError("");
      setGoalData(null);
    }
  }, [value, unit, currentWeightKg]);

  const calculateGoal = (target) => {
    const targetKg = unit === "lbs" ? target * 0.453592 : target;
    const currentKg = currentWeightKg;

    if (targetKg < currentKg) {
      const diffKg = currentKg - targetKg;
      const percentage = Math.round((diffKg / currentKg) * 100);
      setGoalData({
        icon: "👊",
        title: `SENSIBLE GOAL: lose ${percentage}% of your weight`,
        desc: "Secure your health and longevity by managing your weight correctly. According to CDC recommendations, losing 4 kg per month is perfectly safe.",
      });
    } else if (targetKg > currentKg) {
      const diffKg = targetKg - currentKg;
      const percentage = Math.round((diffKg / currentKg) * 100);
      setGoalData({
        icon: "💪",
        title: `GOAL: gain ${percentage}% of your weight`,
        desc: "Building muscle mass and maintaining a surplus will help you reach your ideal physique safely.",
      });
    } else {
      setGoalData({
        icon: "✨",
        title: "MAINTAIN: Keep your current weight",
        desc: "You're already at your perfect weight! We'll focus on toning and health maintenance.",
      });
    }
  };

  const handleUnitChange = (nextUnit) => {
    setUnit(nextUnit);
    setValue("");
    setError("");
    setGoalData(null);
    inputRef.current?.focus();
  };

  const handleChange = (e) => {
    const raw = e.target.value;
    let cleaned = raw.replace(/\D/g, "");
    if (cleaned.length > 3) cleaned = cleaned.slice(0, 3);
    setValue(cleaned);
  };

  const isValid = parseFloat(value) >= limits.min && parseFloat(value) <= limits.max;

  const handleContinue = () => {
    if (!isValid) return;

    const numericValue = Number(value);
    const kg = unit === "lbs" ? Number((numericValue * 0.453592).toFixed(2)) : numericValue;

    onContinue({
      value: numericValue,
      unit,
      kg,
    });
  };

  return (
    <section className="min-h-screen bg-white px-4 pb-10 pt-4 font-sans text-center">
      <div className="mx-auto max-w-full">
        <div className="flex items-center justify-between">
          <button onClick={onBack} className="text-[24px] text-[#b8b8b8]">←</button>
          <div className="text-[14px] font-medium text-[#6f6f6f]">20 / 24</div>
        </div>
        <div className="mt-2 relative h-[5px] w-full overflow-hidden rounded-full bg-[#e6e6e3]">
          <div className="h-full w-[83.33%] rounded-full bg-[#2f7a4d]" />
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-[650px] flex flex-col items-center">
        <h2 className="text-[26px] font-bold leading-tight text-black">
          What would you consider to be your perfect <br /> weight?
        </h2>

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

        <div className="mt-12 flex items-baseline justify-center">
          <input
            ref={inputRef}
            type="text"
            inputMode="numeric"
            value={value}
            onChange={handleChange}
            placeholder="0"
            className={`bg-transparent text-right text-[35px] mr-5 font-bold outline-none border-none focus:ring-0 placeholder-[#d4d4d4] leading-none ${
              error ? "text-red-500" : "text-black"
            }`}
            style={{ width: value.length > 0 ? `${value.length * 42}px` : "60px" }}
          />
          <span className="ml-1 text-[20px] font-bold text-black pb-2">
            {unit}
          </span>
        </div>

        <div className="h-6 mt-2 flex items-center justify-center">
          {error && <p className="text-red-500 text-[13px] font-medium">{error}</p>}
        </div>

        {goalData && (
          <div className="mt-4 w-full rounded-[24px] bg-[#f2f2ee] p-6 text-left animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="flex items-start gap-4">
              <span className="text-[24px]">{goalData.icon}</span>
              <div>
                <h3 className="text-[14px] font-bold text-black uppercase tracking-tight">
                  {goalData.title}
                </h3>
                <p className="mt-1 text-[13px] leading-relaxed text-[#6f6f6f]">
                  {goalData.desc}
                </p>
              </div>
            </div>
          </div>
        )}

        <button
          disabled={!isValid}
          onClick={handleContinue}
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