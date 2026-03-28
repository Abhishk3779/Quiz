function LifeEventOptionCard({ option, onToggle }) {
  return (
    <button
      type="button"
      onClick={() => onToggle(option.id)}
      className={`flex w-full items-center justify-between rounded-[16px] px-6 py-6 text-left transition ${
        option.selected ? "bg-[#dff1e7]" : "bg-[#ecebe7]"
      }`}
    >
      <div className="flex min-w-0 items-center gap-5">
        <span
          className={`text-[28px] font-normal leading-none ${
            option.selected ? "text-[#2f7a4d]" : "text-[#9a9a9a]"
          }`}
        >
          {option.selected ? "−" : "+"}
        </span>

        <span className="text-[16px] font-semibold leading-[1.35] tracking-[-0.01em] text-black md:text-[18px]">
          {option.label}
        </span>
      </div>

      {option.emoji ? (
        <span className="ml-4 shrink-0 text-[28px] leading-none md:text-[32px]">
          {option.emoji}
        </span>
      ) : (
        <span className="ml-4 h-[32px] w-[32px] shrink-0" />
      )}
    </button>
  );
}

export default function LifeEventsScreen({
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
            className="text-[26px] font-normal leading-none text-[#b8b8b8]"
          >
            ←
          </button>

          <div className="text-[14px] font-medium text-[#6f6f6f]">17 / 24</div>
        </div>

        <div className="relative h-[5px] w-full overflow-hidden rounded-full bg-[#e6e6e3]">
          <div className="h-full w-[70.84%] rounded-full bg-[#2f7a4d]" />
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-[520px]">
        <h2 className="text-center text-[30px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[24px]">
          Have any life changes affected your weight?
        </h2>

        <div className="mt-8 space-y-4">
          <h3 className="font-semibold">You can choose more than one</h3>
          {options.map((option) => (
            <LifeEventOptionCard
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
          className={`mt-20 w-full rounded-[16px] py-[18px] text-center text-[17px] font-bold leading-none transition ${
            hasSelection
              ? "bg-[#349760] text-white"
              : "bg-[#66b07f] text-[#b8ddc3]"
          }`}
        >
          Continue
        </button>
      </div>
    </section>
  );
}