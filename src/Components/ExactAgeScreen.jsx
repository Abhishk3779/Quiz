import { useEffect, useRef, useState } from "react";

export default function ExactAgeScreen({ onContinue, onBack }) {
  const [age, setAge] = useState("18");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange = (e) => {
    const raw = e.target.value.replace(/\D/g, "");

    if (raw === "") {
      setAge("");
      return;
    }

    const numeric = Number(raw);

    if (numeric < 18) {
      setAge("18");
      return;
    }

    if (numeric > 100) {
      setAge("100");
      return;
    }

    setAge(String(numeric));
  };

  const handleContinue = () => {
    const numericAge = Number(age);

    if (!numericAge || numericAge < 18 || numericAge > 100) return;

    onContinue?.(numericAge);
  };

  return (
    <div className="min-h-screen bg-[#f6f6f4] px-1.5 pt-3 pb-8 font-sans">
      <div className="grid grid-cols-[32px_1fr_auto] items-center gap-2">
        <button
          type="button"
          onClick={onBack}
          aria-label="Go back"
          className="text-[24px] leading-none text-[#8e8e8e]"
        >
          ←
        </button>

        <div className="h-[4px] w-full overflow-hidden rounded-full bg-[#e4e4e2]">
          <div className="h-full w-[87.5%] rounded-full bg-[#356f4b]" />
        </div>

        <div className="pr-2 text-[14px] font-medium text-[#1f1f1f]">
          21 / 24
        </div>
      </div>

      <div className="mx-auto mt-10 flex w-full max-w-[560px] flex-col items-center">
        <h2 className="text-center text-[28px] font-extrabold leading-[1.15] tracking-[-0.02em] text-black">
          What is your age?
        </h2>

        <div className="mt-12 flex min-h-[92px] items-end justify-center">
          <span className="text-center text-[72px] font-semibold leading-none text-[#d9d9d9]">
            {age || "18"}
          </span>
        </div>

        <label htmlFor="exact-age" className="sr-only">
          Enter your age
        </label>

        <input
          ref={inputRef}
          id="exact-age"
          type="number"
          inputMode="numeric"
          min="18"
          max="100"
          value={age}
          onChange={handleChange}
          className="mt-3 w-[160px] rounded-lg border border-[#d8d8d8] bg-white px-3 py-2 text-center text-[16px] text-black outline-none focus:border-[#3d7f56]"
          placeholder="Enter age"
        />

        <div className="mt-7 flex w-full max-w-[494px] items-center gap-3 rounded-[16px] bg-[#ecece9] px-8 py-6">
          <div className="text-[28px] leading-none">☝️</div>
          <p className="text-[15px] font-medium leading-[1.4] text-[#1e1e1e]">
            This will help us make adjustments to your personal plan.
          </p>
        </div>

        <button
          type="button"
          onClick={handleContinue}
          disabled={!age || Number(age) < 18 || Number(age) > 100}
          className={`mt-10 h-[46px] w-full max-w-[494px] rounded-[12px] text-[16px] font-semibold text-white transition ${
            age && Number(age) >= 18 && Number(age) <= 100
              ? "bg-[#36975f] hover:bg-[#318653]"
              : "cursor-not-allowed bg-[#36975f]/70"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}