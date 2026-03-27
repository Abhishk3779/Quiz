import { useEffect, useRef, useState } from "react";

export default function PerfectWeightScreen({ onContinue, onBack }) {
  const [unit, setUnit] = useState("kg");
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  const limits =
    unit === "kg"
      ? { min: 50, max: 250, step: "0.1" }
      : { min: 110, max: 550, step: "0.1" };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const switchUnit = (nextUnit) => {
    if (nextUnit === unit) return;
    setUnit(nextUnit);
    setValue("");
  };

  const handleChange = (e) => {
    const raw = e.target.value;

    if (raw === "") {
      setValue("");
      return;
    }

    const cleaned = raw.replace(/[^0-9.]/g, "");
    const parts = cleaned.split(".");

    if (parts.length > 2) return;

    setValue(cleaned);
  };

  const numericValue = value === "" ? null : Number(value);
  const isValid =
    numericValue !== null &&
    !Number.isNaN(numericValue) &&
    numericValue >= limits.min &&
    numericValue <= limits.max;

  const handleContinue = () => {
    if (!isValid) return;

    onContinue?.({
      value: numericValue,
      unit,
    });
  };

  const displayValue = value === "" ? "0" : value;

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
          <div className="h-full w-[83.33%] rounded-full bg-[#356f4b]" />
        </div>

        <div className="pr-2 text-[14px] font-medium text-[#1f1f1f]">
          20 / 24
        </div>
      </div>

      <div className="mx-auto mt-10 flex w-full max-w-[560px] flex-col items-center">
        <h2 className="text-center text-[28px] font-extrabold leading-[1.15] tracking-[-0.02em] text-black">
          What would you consider to be your perfect
          <br />
          weight?
        </h2>

        <div className="mt-6 inline-flex rounded-full bg-[#ecebe6] p-[2px]">
          <button
            type="button"
            onClick={() => switchUnit("lbs")}
            className={`min-w-[50px] rounded-full px-4 py-2 text-[14px] font-semibold transition ${
              unit === "lbs"
                ? "bg-[#3d7f56] text-white"
                : "bg-transparent text-[#7a7a7a]"
            }`}
          >
            lbs
          </button>

          <button
            type="button"
            onClick={() => switchUnit("kg")}
            className={`min-w-[50px] rounded-full px-4 py-2 text-[14px] font-semibold transition ${
              unit === "kg"
                ? "bg-[#3d7f56] text-white"
                : "bg-transparent text-[#7a7a7a]"
            }`}
          >
            kg
          </button>
        </div>

        <div className="mt-7 flex flex-col items-center">
          <label htmlFor="perfect-weight" className="sr-only">
            Perfect weight in {unit}
          </label>

          <div className="flex min-h-[86px] items-end justify-center gap-2">
            <span className="text-[72px] font-semibold leading-none text-[#d9d9d9]">
              {displayValue}
            </span>
            <span className="mb-[10px] text-[18px] font-semibold leading-none text-black">
              {unit}
            </span>
          </div>

          <input
            ref={inputRef}
            id="perfect-weight"
            type="number"
            inputMode="decimal"
            min={limits.min}
            max={limits.max}
            step={limits.step}
            value={value}
            onChange={handleChange}
            className="mt-3 w-[160px] rounded-lg border border-[#d8d8d8] bg-white px-3 py-2 text-center text-[16px] text-black outline-none focus:border-[#3d7f56]"
            placeholder={`Enter ${unit}`}
          />

          <p className="mt-2 text-[12px] text-[#777777]">
            Range: {limits.min}–{limits.max} {unit}
          </p>
        </div>

        <button
          type="button"
          onClick={handleContinue}
          disabled={!isValid}
          className={`mt-6 h-[46px] w-full max-w-[490px] rounded-[12px] text-[16px] font-semibold text-white transition ${
            isValid
              ? "bg-[#36975f] hover:bg-[#318653]"
              : "cursor-not-allowed bg-[#36975f]/70"
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}