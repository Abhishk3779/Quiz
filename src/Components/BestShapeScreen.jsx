function BestShapeOptionCard({ option, onSelect }) {
  return (
    <button
      onClick={() => onSelect(option.label)}
      className={`flex min-h-[74px] w-full items-center justify-between rounded-[14px] px-7 transition ${
        option.selected ? "bg-[#3b9b5d]" : "bg-[#ecebe7]"
      }`}
    >
      <span
        className={`text-left text-[16px] font-medium md:text-[18px] ${
          option.selected ? "text-white" : "text-black"
        }`}
      >
        {option.label}
      </span>

      <span className="text-[28px] leading-none">{option.emoji}</span>
    </button>
  );
}

export default function BestShapeScreen({ options, onSelect, onBack }) {
  return (
    <section className="min-h-screen bg-[#f3f3f3] px-4 pb-10 pt-4">
      <div className="w-full">
        <div className="mb-2 flex items-center justify-between text-[#a8a8a8]">
          <button onClick={onBack} className="text-[22px] leading-none">
            ←
          </button>
          <div className="text-[14px] text-[#7c7c7c]">5 / 24</div>
        </div>

        <div className="relative h-[6px] w-full overflow-hidden rounded-full bg-[#e7e7e4]">
          <div className="h-full w-[21%] rounded-full bg-[#3b7b50]" />
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-[760px]">
        <h2 className="text-center text-[30px] font-extrabold leading-[1.2] text-black md:text-[36px]">
          How long ago were you in the best shape of your life?
        </h2>

        <div className="mt-8 space-y-4">
          {options.map((option) => (
            <BestShapeOptionCard
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