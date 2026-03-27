import { useState } from "react";

export default function WeightScreen({ onContinue, onBack }) {
  const [unit, setUnit] = useState("lbs");
  const [weight, setWeight] = useState("");

  function handleUnitChange(nextUnit) {
    setUnit(nextUnit);
    setWeight("");
  }

  function handleWeightChange(e) {
    const value = e.target.value;

    if (value === "") {
      setWeight("");
      return;
    }

    const numericValue = Number(value);

    if (unit === "kg") {
      if (numericValue >= 50 && numericValue <= 250) {
        setWeight(value);
      }
      return;
    }

    if (unit === "lbs") {
      if (numericValue >= 110 && numericValue <= 550) {
        setWeight(value);
      }
    }
  }

  function handleContinueClick() {
    const numericValue = Number(weight);

    if (unit === "kg" && (numericValue < 50 || numericValue > 250)) {
      return;
    }

    if (unit === "lbs" && (numericValue < 110 || numericValue > 550)) {
      return;
    }

    onContinue({ unit, weight });
  }

  return (
    <section className="min-h-screen bg-[#f5f5f5] px-2 pb-10 pt-3 md:px-4">
      <div className="w-full">
        <div className="mb-2 flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className="text-[26px] font-normal leading-none text-[#b8b8b8]"
          >
            ←
          </button>

          <div className="text-[14px] font-medium text-[#6f6f6f]">19 / 24</div>
        </div>

        <div className="relative h-[5px] w-full overflow-hidden rounded-full bg-[#e6e6e3]">
          <div className="h-full w-[79.17%] rounded-full bg-[#2f7a4d]" />
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-[520px]">
        <h2 className="text-center text-[30px] font-extrabold leading-[1.15] tracking-[-0.02em] text-black md:text-[38px]">
          What&apos;s your current weight?
        </h2>

        <div className="mt-8 flex justify-center">
          <div className="flex rounded-full bg-[#e9e9e6] p-[2px]">
            <button
              type="button"
              onClick={() => handleUnitChange("lbs")}
              className={`min-w-[48px] rounded-full px-5 py-2 text-[14px] font-semibold transition ${
                unit === "lbs"
                  ? "bg-[#3c7f56] text-white"
                  : "bg-transparent text-[#7e7e7e]"
              }`}
            >
              lbs
            </button>

            <button
              type="button"
              onClick={() => handleUnitChange("kg")}
              className={`min-w-[48px] rounded-full px-5 py-2 text-[14px] font-semibold transition ${
                unit === "kg"
                  ? "bg-[#3c7f56] text-white"
                  : "bg-transparent text-[#7e7e7e]"
              }`}
            >
              kg
            </button>
          </div>
        </div>

        <div className="mt-10 flex items-end justify-center gap-2">
          <input
            type="number"
            value={weight}
            onChange={handleWeightChange}
            placeholder="0"
            min={unit === "kg" ? 50 : 110}
            max={unit === "kg" ? 250 : 550}
            className="w-[72px] border-0 bg-transparent p-0 text-center text-[72px] font-medium leading-none text-[#d4d4d4] outline-none placeholder:text-[#d4d4d4]"
          />
          <span className="mb-2 text-[16px] font-bold text-black">{unit}</span>
        </div>

        {unit === "kg" && (
          <p className="mt-3 text-center text-[13px] font-medium text-[#7c7c7c]">
            Enter a value between 50 and 250 kg
          </p>
        )}

        {unit === "lbs" && (
          <p className="mt-3 text-center text-[13px] font-medium text-[#7c7c7c]">
            Enter a value between 110 and 550 lbs
          </p>
        )}

        <button
          type="button"
          onClick={handleContinueClick}
          className="mt-8 w-full rounded-[16px] bg-[#3ca05f] py-[18px] text-center text-[17px] font-bold leading-none text-white transition"
        >
          Continue
        </button>
      </div>
    </section>
  );
}