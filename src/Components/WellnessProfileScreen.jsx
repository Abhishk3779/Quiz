export default function WellnessProfileScreen({
  onContinue,
  onBack,
  answers = {},
}) {
  const heightData = answers.height || {};
  const weightData = answers.weight || {};

  const heightCm = getHeightInCm(heightData);
  const weightKg = getWeightInKg(weightData);

  const bmi =
    heightCm > 0 && weightKg > 0
      ? Number((weightKg / Math.pow(heightCm / 100, 2)).toFixed(1))
      : 21.6;

  const markerPosition = getBmiPosition(bmi);
  const bmiLabel = getBmiLabel(bmi);

  return (
    <div className="min-h-screen bg-[#f6f6f4] px-2 pt-6 pb-10 font-sans">
      <div className="mx-auto flex w-full max-w-[520px] flex-col items-center">
        <h2 className="text-center text-[28px] font-extrabold leading-[1.15] tracking-[-0.02em] text-black">
          Here is your wellness profile
        </h2>

        <div className="mt-10 w-full rounded-[18px] bg-white px-4 py-5 shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-[15px] font-bold text-[#171717]">
              Body-Mass-Index (BMI)
            </h3>

            <p className="text-[13px] font-medium text-[#6d573c]">
              {bmiLabel} - {bmi.toFixed(1)}
            </p>
          </div>

          <div className="relative mt-8">
            <div className="absolute -top-8 z-10" style={{ left: `${markerPosition}%`, transform: "translateX(-50%)" }}>
              <div className="relative rounded-[8px] bg-[#5d5d5d] px-3 py-1.5 text-center text-[11px] font-semibold leading-[1.05] text-white shadow">
                Your BMI is
                <br />
                {bmi.toFixed(1)}
                <div className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 border-l-[6px] border-r-[6px] border-t-[7px] border-l-transparent border-r-transparent border-t-[#5d5d5d]" />
              </div>
            </div>

            <div className="h-[8px] w-full overflow-hidden rounded-full bg-[#ececec]">
              <div className="flex h-full w-full">
                <div className="h-full w-[34%] bg-[#56c66b]" />
                <div className="h-full w-[33%] bg-[#e9b16d]" />
                <div className="h-full w-[33%] bg-[#ee9a9a]" />
              </div>
            </div>

            <div
              className="absolute top-1/2 z-20 h-[20px] w-[20px] -translate-y-1/2 rounded-full border-[3px] border-[#e4c44d] bg-white shadow-sm"
              style={{ left: `${markerPosition}%`, transform: "translate(-50%, -50%)" }}
            />

            <div className="mt-4 flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.08em] text-[#5e5e5e]">
              <span>Normal</span>
              <span>Overweight</span>
              <span>Obese</span>
            </div>
          </div>
        </div>

        <div className="mt-5 grid w-full grid-cols-[1fr_160px] items-end gap-3">
          <div className="space-y-7 px-6 py-3">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 text-[18px] text-[#7a7a7a]">◔</span>
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#8a8a8a]">
                  Lifestyle
                </p>
                <p className="mt-1 text-[16px] font-bold text-black">Active</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-0.5 text-[18px] text-[#7a7a7a]">🍴</span>
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#8a8a8a]">
                  Type of eater
                </p>
                <p className="mt-1 text-[16px] font-bold text-black">Gourmand</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-0.5 text-[18px] text-[#7a7a7a]">🔥</span>
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#8a8a8a]">
                  Fitness motivation
                </p>
                <p className="mt-1 text-[16px] font-bold text-black">High</p>
              </div>
            </div>
          </div>

          <div className="flex items-end justify-center">
            <img
              src=""
              alt=""
              className="h-[250px] w-auto object-contain"
            />
          </div>
        </div>

        <div className="mt-4 w-full rounded-[18px] bg-[#dbe7c7] px-8 py-6">
          <div className="flex items-start gap-3">
            <span className="text-[28px] leading-none">👌</span>
            <div>
              <p className="text-[16px] font-bold leading-tight text-[#1d1d1d]">
                Good starting BMI to get a fit body
              </p>
              <p className="mt-2 text-[14px] leading-[1.45] text-[#48513f]">
                You are doing a good job keeping your weight in the normal
                range. We will use your index to tailor a program to your
                needs.
              </p>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={onContinue}
          className="mt-10 h-[52px] w-full rounded-[14px] bg-[#36975f] text-[18px] font-semibold text-white transition hover:bg-[#318653]"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

function getHeightInCm(heightData) {
  if (!heightData || typeof heightData !== "object") return 0;

  if (heightData.unit === "cm") {
    return Number(heightData.value) || 0;
  }

  if (heightData.unit === "ft-in") {
    const feet = Number(heightData.feet) || 0;
    const inches = Number(heightData.inches) || 0;
    return feet * 30.48 + inches * 2.54;
  }

  return 0;
}

function getWeightInKg(weightData) {
  if (!weightData || typeof weightData !== "object") return 0;

  const value = Number(weightData.value) || 0;

  if (weightData.unit === "kg") {
    return value;
  }

  if (weightData.unit === "lbs") {
    return value * 0.45359237;
  }

  return 0;
}

function getBmiLabel(bmi) {
  if (bmi < 25) return "Normal";
  if (bmi < 30) return "Overweight";
  return "Obese";
}

function getBmiPosition(bmi) {
  const min = 15;
  const max = 40;
  const clamped = Math.min(Math.max(bmi, min), max);
  return ((clamped - min) / (max - min)) * 100;
}