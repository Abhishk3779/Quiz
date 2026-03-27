import { useState } from "react";

export default function HeightScreen({ onContinue, onBack }) {
  const [unit, setUnit] = useState("in");
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [cmValue, setCmValue] = useState("");
  const [consent, setConsent] = useState(false);

  function handleUnitChange(nextUnit) {
    setUnit(nextUnit);
    setFeet("");
    setInches("");
    setCmValue("");
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

          <div className="text-[14px] font-medium text-[#6f6f6f]">18 / 24</div>
        </div>

        <div className="relative h-[5px] w-full overflow-hidden rounded-full bg-[#e6e6e3]">
          <div className="h-full w-[75%] rounded-full bg-[#2f7a4d]" />
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-[520px]">
        <h2 className="text-center text-[30px] font-extrabold leading-[1.15] tracking-[-0.02em] text-black md:text-[38px]">
          What&apos;s your height?
        </h2>

        <div className="mt-8 flex justify-center">
          <div className="flex rounded-full bg-[#e9e9e6] p-[2px]">
            <button
              type="button"
              onClick={() => handleUnitChange("in")}
              className={`min-w-[48px] rounded-full px-5 py-2 text-[14px] font-semibold transition ${
                unit === "in"
                  ? "bg-[#3c7f56] text-white"
                  : "bg-transparent text-[#7e7e7e]"
              }`}
            >
              in
            </button>

            <button
              type="button"
              onClick={() => handleUnitChange("cm")}
              className={`min-w-[48px] rounded-full px-5 py-2 text-[14px] font-semibold transition ${
                unit === "cm"
                  ? "bg-[#3c7f56] text-white"
                  : "bg-transparent text-[#7e7e7e]"
              }`}
            >
              cm
            </button>
          </div>
        </div>

        {unit === "in" ? (
          <div className="mt-10 flex items-end justify-center gap-14">
            <div className="flex items-end gap-2">
              <input
                type="number"
                value={feet}
                onChange={(e) => setFeet(e.target.value)}
                placeholder="0"
                className="w-[48px] border-0 bg-transparent p-0 text-center text-[72px] font-medium leading-none text-[#d4d4d4] outline-none placeholder:text-[#d4d4d4]"
              />
              <span className="mb-2 text-[16px] font-bold text-black">ft</span>
            </div>

            <div className="flex items-end gap-2">
              <input
                type="number"
                value={inches}
                onChange={(e) => setInches(e.target.value)}
                placeholder="0"
                className="w-[48px] border-0 bg-transparent p-0 text-center text-[72px] font-medium leading-none text-[#d4d4d4] outline-none placeholder:text-[#d4d4d4]"
              />
              <span className="mb-2 text-[16px] font-bold text-black">in</span>
            </div>
          </div>
        ) : (
          <div className="mt-10 flex items-end justify-center gap-2">
            <input
              type="number"
              value={cmValue}
              onChange={(e) => setCmValue(e.target.value)}
              placeholder="0"
              className="w-[90px] border-0 bg-transparent p-0 text-center text-[72px] font-medium leading-none text-[#d4d4d4] outline-none placeholder:text-[#d4d4d4]"
            />
            <span className="mb-2 text-[16px] font-bold text-black">cm</span>
          </div>
        )}

        <div className="mt-12 rounded-[18px] bg-[#ecebe7] px-8 py-6">
          <div className="flex items-start gap-4">
            <span className="mt-1 text-[28px] leading-none">☝️</span>

            <div>
              <h3 className="text-[18px] font-semibold leading-[1.2] text-black">
                Calculating your body mass index
              </h3>

              <p className="mt-2 text-[13px] font-medium leading-[1.4] text-[#7c7c7c]">
                BMI is widely used as a risk factor for development of or the
                prevalence of several health issues.
              </p>
            </div>
          </div>
        </div>

        <label className="mt-10 flex cursor-pointer items-start gap-4">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-[2px] h-[22px] w-[22px] rounded-[6px] border border-[#5faa78] accent-[#3ca05f]"
          />

          <span className="text-[13px] font-medium leading-[1.45] text-[#6f6f6f]">
            I consent to the processing of my health data to provide services and
            personalize my experience.{" "}
            <span className="underline">Privacy Policy.</span>
          </span>
        </label>

        <button
          type="button"
          onClick={() =>
            onContinue({
              unit,
              feet,
              inches,
              cm: cmValue,
              consent,
            })
          }
          className="mt-6 w-full rounded-[16px] bg-[#3ca05f] py-[18px] text-center text-[17px] font-bold leading-none text-white transition"
        >
          Continue
        </button>
      </div>
    </section>
  );
} 