import after from '../assets/before-after.webp';
export default function ResultIntroScreen({ onContinue }) {
  return (
    <section className="min-h-screen bg-[#f3f3f3] px-4 py-8 md:py-10">
      <div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-[760px] flex-col items-center justify-center">
        <div className="w-full max-w-[510px]">
          <img
            src={after}
            alt="results intro"
            className="h-auto w-full rounded-[34px] object-cover"
          />
        </div>

        <p className="mt-2 text-center text-[14px] text-[#8d8d8d]">
          Results will vary based on your consistency and individual factors.
        </p>

        <h2 className="mt-8 text-center text-[28px] font-bold leading-[1.2] text-black md:text-[22px]">
          Great start — you’re on your way.
        </h2>

        <p className="mt-4 max-w-[500px] text-center text-[12px] leading-[1.6] text-[#2f2f2f]">
         With TAICHI COACH, you’ll get a guided, personalized approach that adapts to you, so you always know what to do next, without overthinking it.
        </p>

        <div className="w-full max-w-[510px] pt-10">
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