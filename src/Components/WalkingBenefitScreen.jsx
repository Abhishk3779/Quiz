import walking from "../assets/Walking.png";
export default function WalkingBenefitScreen({ onContinue, onBack }) {
  return (
    <div className="min-h-screen bg-[#f6f6f4] px-2 pt-8 pb-10 font-sans">
      <div className="mx-auto flex w-full max-w-[520px] flex-col items-center">
        <div className="w-full overflow-hidden rounded-[36px]">
          <img
            src={walking}
            alt=""
            className="h-auto w-full object-cover"
          />
        </div>

        <h2 className="mt-8 max-w-[500px] text-center text-[24px] font-bold leading-[1.1] tracking-[-0.02em] text-black">
          Personalized indoor walking with TAICHI COACH
        </h2>

        <p className="mt-5 max-w-[510px] text-center text-[13px] leading-[1.6] text-[#2a2a2a]">
          TAICHI COACH combines gentle walking at home with simple Tai Chi-based movement.
          <br />
          Your plan is personalized to fit your body, your needs, and your daily life — so you can move safely, stay consistent, and feel better over time.
        </p>

        <button
          type="button"
          onClick={onContinue}
          className="mt-15 h-[52px] w-full rounded-[14px] bg-[#36975f] text-[18px] font-semibold text-white transition hover:bg-[#318653]"
        >
          Continue
        </button>
      </div>
    </div>
  );
}