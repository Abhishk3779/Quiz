function TargetZoneCard({ option, onToggle }) {
  return (
    <button
      onClick={() => onToggle(option.id)}
      className={`flex h-[46px] w-full items-center justify-between rounded-[12px] px-6 transition ${
        option.selected ? "bg-[#3b9b5d]" : "bg-[#ecebe7]"
      }`}
    >
      <span
        className={`text-[20px] leading-none ${
          option.selected ? "text-white" : "text-[#9d9d9d]"
        }`}
      >
        {option.selected ? "−" : "+"}
      </span>

      <span
        className={`text-[16px] font-medium ${
          option.selected ? "text-white" : "text-black"
        }`}
      >
        {option.label}
      </span>
    </button>
  );
}

export default function TargetZonesScreen({
  options,
  onToggle,
  onContinue,
  onBack,
}) {
  const hasSelection = options.some((item) => item.selected);

  return (
    <section className="min-h-screen bg-[#f3f3f3] px-4 pb-10 pt-4">
      <div className="w-full">
        <div className="mb-2 flex items-center justify-between text-[#a8a8a8]">
          <button onClick={onBack} className="text-[22px] leading-none">
            ←
          </button>
          <div className="text-[14px] text-[#7c7c7c]">4 / 24</div>
        </div>

        <div className="relative h-[6px] w-full overflow-hidden rounded-full bg-[#e7e7e4]">
          <div className="h-full w-[17%] rounded-full bg-[#3b7b50]" />
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-[760px]">
        <h2 className="text-center text-[30px] font-extrabold leading-[1.2] text-black md:text-[36px]">
          What are your target zones?
        </h2>

        <div className="mx-auto mt-8 flex max-w-[760px] items-start justify-center gap-6">
          <div className="w-full max-w-[270px] space-y-4">
            {options.map((option) => (
              <TargetZoneCard
                key={option.id}
                option={option}
                onToggle={onToggle}
              />
            ))}
          </div>

          <div className="flex w-[180px] shrink-0 justify-center">
            <img
              src=""
              alt="target zones"
              className="h-auto w-full max-w-[170px] object-contain"
            />
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-[760px]">
          <button
            onClick={onContinue}
            className={`w-full rounded-[14px] py-5 text-[18px] font-bold text-white transition ${
              hasSelection
                ? "bg-[#3b9b5d] hover:bg-[#318451]"
                : "cursor-not-allowed bg-[#72bc8c] opacity-70"
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </section>
  );
}