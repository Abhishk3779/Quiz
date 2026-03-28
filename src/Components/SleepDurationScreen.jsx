function SleepDurationOptionCard({ option, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(option.label)}
      className={`flex w-full items-center justify-between rounded-[16px] px-6 py-6 text-left transition ${
        option.selected ? "bg-[#3ca05f]" : "bg-[#ecebe7]"
      }`}
    >
      <span
        className={`text-[16px] font-semibold leading-[1.4] md:text-[18px] ${
          option.selected ? "text-white" : "text-black"
        }`}
      >
        {option.label}
      </span>

      <span className="ml-4 shrink-0 text-[28px] leading-none md:text-[32px]">
        {option.emoji}
      </span>
    </button>
  );
}

export default function SleepDurationScreen({
  options = [],
  onSelect,
  onBack,
}) {
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

          <div className="text-[14px] font-medium text-[#6f6f6f]">14 / 24</div>
        </div>

        <div className="relative h-[5px] w-full overflow-hidden rounded-full bg-[#e6e6e3]">
          <div className="h-full w-[58.34%] rounded-full bg-[#2f7a4d]" />
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-[520px]">
        <h2 className="text-center text-[30px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[24px]">
          How long do you sleep at night?
        </h2>

        <div className="mt-8 space-y-4">
          {options.map((option) => (
            <SleepDurationOptionCard
              key={option.id}
              option={option}
              onSelect={onSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
}