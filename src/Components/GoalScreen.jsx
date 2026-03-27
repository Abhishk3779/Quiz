
function GoalCard({ option, onToggle }) {
  return (
    <button
      onClick={() => onToggle(option.id)}
      className={`flex w-full items-center justify-between overflow-hidden rounded-[14px] px-5 py-0 transition ${option.selected ? "bg-[#3b9b5d]" : "bg-[#ecebe7]"
        }`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`flex h-[28px] w-[28px] items-center justify-center rounded-full text-[18px] font-semibold ${option.selected
            ? "bg-white text-[#3b9b5d]"
            : "bg-transparent text-[#9a9a9a]"
            }`}
        >
          {option.selected ? "✓" : "+"}
        </div>

        <span
          className={`text-[16px] font-semibold md:text-[18px] ${option.selected ? "text-white" : "text-black"
            }`}
        >
          {option.label}
        </span>
      </div>

      <img
        src={option.image}
        alt={option.label}
        className="h-[82px] w-[82px] shrink-0 object-contain"
      />
    </button>
  );
}

export default function GoalScreen({ goals, onToggle, onContinue }) {
  return (
    <section className="min-h-screen bg-[#f3f3f3] px-4 pb-10 pt-4">
      <div className="w-full">
        <div className="relative h-[6px] w-full overflow-hidden rounded-full bg-[#e7e7e4]">
          <div className="h-full w-[4%] rounded-full bg-[#3b7b50]" />
        </div>
        <div className="mt-2 text-right text-[14px] text-[#7c7c7c]">1 / 24</div>
      </div>

      <div className="mx-auto mt-10 max-w-[760px]">
        <h2 className="text-center text-[30px] font-bold leading-[1.2] text-black md:text-[28px]">
          What are your main goals?
        </h2>

        <p className="mt-3 text-center text-[16px] text-[#6b6b6b]">
          You can choose more than one
        </p>

        <div className="mt-8 space-y-4">
          {goals.map((option) => (
            <GoalCard key={option.id} option={option} onToggle={onToggle} />
          ))}
        </div>

        <div className="mt-16">
          <button
            onClick={onContinue}
            className="w-full rounded-[14px] bg-[#3b9b5d] py-5 text-[18px] font-bold text-white transition hover:bg-[#318451]"
          >
            Continue
          </button>
        </div>
      </div>
    </section>
  );
}