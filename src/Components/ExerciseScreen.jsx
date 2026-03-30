function ExerciseOptionCard({ option, onSelect }) {
  return (
   <button
      onClick={() => onSelect(option.label)}
      className={`flex min-h-[78px] w-[650px] mx-auto items-center justify-between rounded-[14px] px-7 transition ${
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

      <img
        src={option.image}
        alt="exercise"
        className="h-[80px] w-[80px] object-contain"
      />
    </button>
  );
}

export default function ExerciseScreen({ options, onSelect, onBack }) {
  return (
    <section className="min-h-screen bg-[#f3f3f3] px-4 pb-10 pt-2">
      {/* Top */}
      <div className="w-full">
        <div className="mb-2 flex items-center justify-between text-[#a8a8a8]">
          <button onClick={onBack} className="text-[22px]">
            ←
          </button>
          <div className="text-[14px] text-[#7c7c7c]">8 / 24</div>
        </div>

        <div className="relative h-[6px] w-full rounded-full bg-[#e7e7e4]">
          <div className="h-full w-[34%] rounded-full bg-[#3b7b50]" />
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto mt-10 max-w-650px]">
        <h2 className="text-center text-[30px] font-bold md:text-[24px]">
          How often do you exercise?
        </h2>

        <div className="mt-8 space-y-4">
          {options.map((option) => (
            <ExerciseOptionCard
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