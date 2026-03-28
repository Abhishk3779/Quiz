import { useMemo, useState } from "react";

export default function EventDateScreen({ onContinue, onBack, initialDate = "" }) {
  const today = useMemo(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, "0");
    const day = `${now.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
  }, []);

  const [date, setDate] = useState(initialDate || today);

  const formattedDate = useMemo(() => formatDisplayDate(date), [date]);

  const handleContinue = () => {
    onContinue?.(date);
  };

  const handleSkip = () => {
    onContinue?.("");
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
          <div className="h-full w-full rounded-full bg-[#356f4b]" />
        </div>

        <div className="pr-2 text-[14px] font-medium text-[#1f1f1f]">
          24 / 24
        </div>
      </div>

      <div className="mx-auto mt-10 flex w-full max-w-[560px] flex-col items-center">
        <h2 className="text-center text-[28px] font-extrabold leading-[1.15] tracking-[-0.02em] text-black">
          When is your event?
        </h2>

        <p className="mt-2 max-w-[560px] text-center text-[14px] leading-[1.4] text-[#3d3d3d]">
          Once we know this, we&apos;ll be able to put together a personalized plan
          to help you get in shape. Your data will not be shared with any third
          parties.
        </p>

        <div className="relative mt-8 w-full max-w-[190px]">
          <input
            type="date"
            value={date}
            min={today}
            onChange={(e) => setDate(e.target.value)}
            className="peer absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
            aria-label="Select event date"
          />

          <div className="flex h-[56px] items-center justify-between rounded-[10px] border border-[#e2e2e2] bg-[#f3f3f3] px-5">
            <span className="text-[16px] font-medium text-[#2c2c2c]">
              {formattedDate}
            </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#c2c2c2]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10m-12 9h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v11a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>

        <button
          type="button"
          onClick={handleContinue}
          className="mt-28 h-[52px] w-full rounded-[14px] bg-[#36975f] text-[18px] font-semibold text-white transition hover:bg-[#318653]"
        >
          Continue
        </button>

        <button
          type="button"
          onClick={handleSkip}
          className="mt-5 text-[14px] font-medium text-[#8a8a8a] transition hover:text-[#666666]"
        >
          Skip this question
        </button>
      </div>
    </div>
  );
}

function formatDisplayDate(value) {
  if (!value) return "";

  const [year, month, day] = value.split("-");
  if (!year || !month || !day) return value;

  return `${day}-${month}-${year}`;
}