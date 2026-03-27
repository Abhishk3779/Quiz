import Women3 from '../assets/Women-3.webp';
export default function WelcomeScreen({ onContinue }) {
  return (
    <section className="min-h-screen bg-[#f3f3f3] px-4 py-8 md:py-10">
      <div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-[760px] flex-col items-center justify-center">
        <div className="w-full max-w-[500px]">
          <img
            src={Women3}
            alt="welcome visual"
            className="h-auto w-full rounded-[34px] object-cover"
          />
        </div>

        <h2 className="mt-8 text-center text-[28px] font-bold leading-[1.2] text-black md:text-[22px]">
          Welcome to TAICHI COACH
        </h2>

        <p className="mt-5 max-w-[520px] text-center text-[14px] leading-[1.6] text-[#2f2f2f]">
          You’re here to start a simple indoor walking routine you can do without leaving home.

          Let’s learn more about your goals and your needs, so we can create the right plan for you.
        </p>

        <div className="w-full max-w-[640px] pt-20">
          <button
            onClick={onContinue}
            className="w-full rounded-[14px] bg-[#3b9b5d] py-2 text-[18px] font-bold text-white transition hover:bg-[#318451]"
          >
            Continue
          </button>
        </div>
      </div>
    </section>
  );
}