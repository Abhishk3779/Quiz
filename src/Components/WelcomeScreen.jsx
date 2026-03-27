export default function WelcomeScreen({ onContinue }) {
  return (
    <section className="min-h-screen bg-[#f3f3f3] px-4 py-8 md:py-10">
      <div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-[760px] flex-col items-center justify-center">
        <div className="w-full max-w-[540px]">
          <img
            src=""
            alt="welcome visual"
            className="h-auto w-full rounded-[34px] object-cover"
          />
        </div>

        <h2 className="mt-8 text-center text-[28px] font-extrabold leading-[1.2] text-black md:text-[32px]">
          Welcome to your Tai Chi Indoor Walking journey!
        </h2>

        <p className="mt-5 max-w-[720px] text-center text-[16px] leading-[1.6] text-[#2f2f2f]">
          Welcome to our Walking Challenge! You are here to embark on a walking
          journey and achieve your daily step goal without leaving home. Let&apos;s
          better understand your specific goals and needs.
        </p>

        <div className="w-full max-w-[540px] pt-20">
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