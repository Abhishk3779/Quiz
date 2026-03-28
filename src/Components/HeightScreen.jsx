import { useState, useRef, useEffect } from "react";

export default function HeightScreen({ onContinue, onBack }) {
  const [unit, setUnit] = useState("in");
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [cmValue, setCmValue] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState(""); // State for range errors

  const feetRef = useRef(null);
  const inchesRef = useRef(null);

  // Clear errors when switching units
  function handleUnitChange(nextUnit) {
    setUnit(nextUnit);
    setFeet("");
    setInches("");
    setCmValue("");
    setError("");
  }

  // Range Validation Logic
  useEffect(() => {
    let errorMsg = "";

    if (unit === "in") {
      const f = parseInt(feet);
      const i = parseInt(inches);

      // Check Feet range (4-7)
      if (feet && (f < 4 || f > 7)) {
        errorMsg = "Enter a value between 4 and 7 feet";
      } 
      // Check Inches range (0-11)
      else if (inches && (i < 0 || i > 11)) {
        errorMsg = "Enter a value between 0 and 11 inches";
      }
    } else {
      // Check CM range (120-250)
      const cm = parseInt(cmValue);
      if (cmValue && (cm < 120 || cm > 250)) {
        errorMsg = "Please enter a value between 120 and 250 for cm";
      }
    }
    setError(errorMsg);
  }, [feet, inches, cmValue, unit]);

  const handleNumericInput = (value, limit, setter, isFeetField = false) => {
    const cleanValue = value.replace(/\D/g, "");
    if (cleanValue.length <= limit) {
      setter(cleanValue);
      if (isFeetField && cleanValue.length === 1 && inchesRef.current) {
        inchesRef.current.focus();
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Backspace" && inches === "" && feetRef.current) {
      feetRef.current.focus();
    }
  };

  const getHeightInMeters = () => {
    if (unit === "cm") {
      return parseFloat(cmValue) / 100;
    } else {
      const totalInches = (parseFloat(feet) || 0) * 12 + (parseFloat(inches) || 0);
      return totalInches * 0.0254;
    }
  };

  // Button logic: Must have height, NO error, and consent checked
  const isHeightEntered = unit === "cm" ? cmValue.length >= 2 : (feet.length > 0);
  const canContinue = isHeightEntered && !error && consent;

  return (
    <section className="min-h-screen bg-white px-4 pb-10 pt-4 font-sans">
      <div className="mx-auto max-w-full">
        <div className="flex items-center justify-between">
          <button onClick={onBack} className="text-[24px] text-[#b8b8b8]">←</button>
          <div className="text-[14px] font-medium text-[#6f6f6f]">18 / 24</div>
        </div>
        <div className="mt-2 relative h-[5px] w-full overflow-hidden rounded-full bg-[#e6e6e3]">
          <div className="h-full w-[75%] rounded-full bg-[#2f7a4d]" />
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-[650px]">
        <h2 className="text-center text-[24px] font-bold text-black">
          What&apos;s your height?
        </h2>

        <div className="mt-6 flex justify-center">
          <div className="flex rounded-full bg-[#ecebe7] p-[3px]">
            {["in", "cm"].map((u) => (
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

        <div className="flex flex-col items-center">
          <div className="mt-12 flex items-end justify-center gap-6">
            {unit === "in" ? (
              <>
                <div className="flex items-end gap-0.5">
                  <input
                    type="text"
                    inputMode="numeric"
                    ref={feetRef}
                    value={feet}
                    onChange={(e) => handleNumericInput(e.target.value, 1, setFeet, true)}
                    placeholder="5"
                    className={`w-[35px] bg-transparent text-center text-[52px] font-bold outline-none leading-none border-none focus:ring-0 ${
                      feet ? "text-black" : "text-[#d4d4d4]"
                    }`}
                  />
                  <span className="mb-1 text-[16px] font-bold text-black">ft</span>
                </div>

                <div className="flex items-end gap-0.5">
                  <input
                    type="text"
                    inputMode="numeric"
                    ref={inchesRef}
                    value={inches}
                    onKeyDown={handleKeyDown}
                    onChange={(e) => handleNumericInput(e.target.value, 2, setInches)}
                    placeholder="0"
                    className={`w-[65px] bg-transparent text-center text-[52px] font-bold outline-none leading-none border-none focus:ring-0 ${
                      inches ? "text-black" : "text-[#d4d4d4]"
                    }`}
                  />
                  <span className="mb-1 text-[16px] font-bold text-black">in</span>
                </div>
              </>
            ) : (
              <div className="flex items-end gap-0.5">
                <input
                  type="text"
                  inputMode="numeric"
                  value={cmValue}
                  onChange={(e) => handleNumericInput(e.target.value, 3, setCmValue)}
                  placeholder="170"
                  className={`w-[110px] bg-transparent text-center text-[52px] font-bold outline-none leading-none border-none focus:ring-0 ${
                    cmValue ? "text-black" : "text-[#d4d4d4]"
                  }`}
                />
                <span className="mb-1 text-[16px] font-bold text-black">cm</span>
              </div>
            )}
          </div>

          {/* Error Message Display - Height fixed to prevent layout shift */}
          <div className="h-6 mt-2">
            {error && <p className="text-red-500 text-[13px] font-medium">{error}</p>}
          </div>
        </div>

        <div className="mt-12 rounded-[24px] bg-[#f2f2ee] p-6">
          <div className="flex items-start gap-4">
            <span className="text-[24px]">☝️</span>
            <div>
              <h3 className="text-[17px] font-bold text-black">
                Calculating your body mass index
              </h3>
              <p className="mt-1 text-[13px] leading-relaxed text-[#6f6f6f]">
                BMI is widely used as a risk factor for development of or the
                prevalence of several health issues.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-start gap-3 px-2">
          <label className="relative mt-1 flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center">
            <input
              type="checkbox"
              className="peer sr-only"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
            />
            <div className="h-full w-full rounded-[6px] border-2 border-[#3ca05f] bg-white transition-all peer-checked:bg-[#3ca05f]">
              <svg 
                className={`h-full w-full p-1 text-white ${consent ? 'block' : 'hidden'}`} 
                fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </label>
          <span className="text-[13px] font-medium leading-[1.6] text-[#6f6f6f]">
            I consent to the processing of my health data to provide services and
            personalize my experience. <span className="underline cursor-pointer">Privacy Policy</span>.
          </span>
        </div>

        <button
          disabled={!canContinue}
          onClick={() =>
            onContinue({
              unit,
              heightInMeters: getHeightInMeters(),
              displayValue: unit === "cm" ? `${cmValue}cm` : `${feet}'${inches}"`,
              consent,
            })
          }
          className={`mt-8 w-full rounded-[16px] py-[15px] text-[18px] font-bold text-white transition-all ${
            canContinue 
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