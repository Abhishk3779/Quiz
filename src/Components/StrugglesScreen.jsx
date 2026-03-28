function StruggleOptionCard({ option, onToggle }) {
  return (
    <button
      type="button"
      onClick={() => onToggle(option.id)}
      className={`flex w-full items-center justify-between overflow-hidden rounded-[16px] px-6 py-0 text-left transition ${
        option.selected ? "bg-[#dff0e5]" : "bg-[#ecebe7]"
      }`}
    >
      <div className="flex min-w-0 items-center gap-5">
        <span
          className={`text-[28px] leading-none ${
            option.selected ? "text-[#2f7a4d]" : "text-[#9b9b9b]"
          }`}
        >
          {option.selected ? "−" : "+"}
        </span>

        <span className="text-[16px] font-semibold leading-[1.4] text-black md:text-[18px]">
          {option.label}
        </span>
      </div>

      <img
        src=""
        alt={option.label}
        className="h-[78px] w-[78px] shrink-0 object-cover md:h-[92px] md:w-[92px]"
      />
    </button>
  );
}

export default function StrugglesScreen({
  options = [],
  onToggle,
  onContinue,
  onBack,
}) {
  const hasSelection = options.some((option) => option.selected);

  return (
    <section className="min-h-screen bg-[#f5f5f5] px-2 pb-10 pt-3 md:px-4">
      <div className="w-full">
        <div className="mb-2 flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className="text-[26px] leading-none text-[#b8b8b8]"
          >
            ←
          </button>

          <div className="text-[14px] font-medium text-[#6f6f6f]">11 / 24</div>
        </div>

        <div className="relative h-[5px] w-full overflow-hidden rounded-full bg-[#e6e6e3]">
          <div className="h-full w-[45.84%] rounded-full bg-[#2f7a4d]" />
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-[520px]">
        <h2 className="text-center text-[30px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[24px]">
         Do you have any pain or discomfort in your body?
        </h2>

        <div className="mt-8 space-y-4">
          {options.map((option) => (
            <StruggleOptionCard
              key={option.id}
              option={option}
              onToggle={onToggle}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={onContinue}
          disabled={!hasSelection}
          className={`mt-20 w-full rounded-[16px] py-2 text-[22px] font-bold transition ${
            hasSelection
              ? "bg-[#67b382] text-white"
              : "bg-[#67b382] text-[#b9ddc5] opacity-90"
          }`}
        >
          Continue
        </button>
      </div>
    </section>
  );
}