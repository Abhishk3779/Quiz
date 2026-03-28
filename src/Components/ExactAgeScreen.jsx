import { useEffect, useRef, useState } from "react";

export default function ExactAgeScreen({ onContinue, onBack, initialAge }) {
  const [age, setAge] = useState(initialAge ? String(initialAge) : "");
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange = (e) => {
    const raw = e.target.value;
    let cleaned = raw.replace(/\D/g, "");

    if (cleaned.length > 3) cleaned = cleaned.slice(0, 3);

    setAge(cleaned);

    if (cleaned.length > 0) {
      const numericAge = parseInt(cleaned, 10);
      if (numericAge > 100) {
        setError("Please enter an age between 18 and 100");
      } else if (cleaned.length >= 2 && numericAge < 18) {
        setError("You must be at least 18 years old");
      } else {
        setError("");
      }
    } else {
      setError("");
    }
  };

  const numericAge = parseInt(age, 10);
  const isValid = numericAge >= 18 && numericAge <= 100;

  const handleContinue = () => {
    if (isValid) {
      onContinue?.(numericAge);
    }
  };

  return (
    <section className="min-h-screen bg-white px-4 pb-10 pt-4 font-sans text-center">
      <div className="mx-auto max-w-full">
        <div className="flex items-center justify-between">
          <button onClick={onBack} className="text-[24px] text-[#b8b8b8]">←</button>
          <div className="text-[14px] font-medium text-[#6f6f6f]">21 / 24</div>
        </div>
        <div className="mt-2 relative h-[5px] w-full overflow-hidden rounded-full bg-[#e6e6e3]">
          <div className="h-full w-[87.5%] rounded-full bg-[#2f7a4d]" />
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-[650px] flex flex-col items-center">
        <h2 className="text-[26px] font-bold leading-tight text-black">
          What is your age?
        </h2>

        <div className="mt-16 flex items-baseline justify-center">
          <input
            ref={inputRef}
            type="text"
            inputMode="numeric"
            value={age}
            onChange={handleChange}
            placeholder="0"
            className={`bg-transparent text-right text-[35px] font-bold outline-none border-none focus:ring-0 placeholder-[#d4d4d4] leading-none transition-colors ${
              error ? "text-red-500" : "text-black"
            }`}
            style={{ width: age.length > 0 ? `${age.length * 45}px` : "60px" }}
          />
          <span className={`ml-1 text-[20px] font-bold pb-2 ${error ? "text-red-500" : "text-black"}`}>
            years
          </span>
        </div>

        <div className="h-6 mt-4 flex items-center justify-center">
          {error && <p className="text-red-500 text-[13px] font-medium">{error}</p>}
        </div>

        <div className="mt-8 w-full rounded-[24px] bg-[#f2f2ee] p-6 text-left animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="flex items-start gap-4">
            <span className="text-[24px]">☝️</span>
            <div>
              <p className="text-[14px] font-medium leading-relaxed text-[#1e1e1e]">
                This will help us make adjustments to your personal plan to ensure it&apos;s safe and effective for your age group.
              </p>
            </div>
          </div>
        </div>

        <button
          disabled={!isValid}
          onClick={handleContinue}
          className={`mt-10 w-full rounded-[16px] py-[15px] text-[18px] font-bold text-white transition-all ${
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