import enjoy from "../assets/enjoying.png";
export default function EncouragementScreen({ onContinue }) {
  return (
    <section className="min-h-screen bg-[#f3f3f3] px-4 py-8 md:py-10">
      <div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-[760px] flex-col items-center justify-center">
        <div className="w-full max-w-[510px]">
          <img
            src={enjoy}
            alt="encouragement visual"
            className="h-auto w-full rounded-[34px] object-cover"
          />
        </div>

        <h2 className="mt-8 text-center text-[28px] font-bold leading-[1.2] text-black md:text-[24px]">
          You’re doing great!
        </h2>

        <p className="mt-4 max-w-[520px] text-center text-[16px] leading-[1.6] text-[#2f2f2f]">
          Many people worry that they are not good enough.

          We understand this, and we will keep it in mind when we create your plan, so you can feel more confident as you go.
        </p>

        <div className="w-full max-w-[510px] pt-15">
          <button
            onClick={onContinue}
            className="w-full rounded-[14px] bg-[#3b9b5d] py-3 text-[18px] font-bold text-white transition hover:bg-[#318451]"
          >
            Continue
          </button>
        </div>
      </div>
    </section>
  );
}