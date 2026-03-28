export default function SpecialOccasionScreen({
  options = [],
  onSelect,
  onBack,
}) {
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
          <div className="h-full w-[95.83%] rounded-full bg-[#356f4b]" />
        </div>

        <div className="pr-2 text-[14px] font-medium text-[#1f1f1f]">
          23 / 24
        </div>
      </div>

      <div className="mx-auto mt-10 flex w-full max-w-[560px] flex-col items-center">
        <h2 className="max-w-[520px] text-center text-[24px] font-bold leading-[1.15] tracking-[-0.02em] text-black">
         Do you have any upcoming event that motivates you to lose weight?
        </h2>

        <div className="mt-8 flex w-full flex-col gap-4">
          <h4 className="font-bold">You can choose more than one</h4>
          {options.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => onSelect?.(option)}
              className="flex min-h-[78px] w-full items-center justify-between rounded-[16px] bg-[#ecece9] px-7 py-5 text-left transition hover:bg-[#e6e6e2]"
            >
              <span className="text-[18px] font-semibold text-black">
                {option.label}
              </span>

              <span className="ml-4 text-[30px] leading-none">
                {option.emoji}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}