import { LaurelLeft, LaurelRight } from "./icons";

export default function SocialProofScreen({ onContinue }) {
  return (
    <section className="min-h-screen bg-[#f3f3f3] px-4 py-8 md:py-10">
      <div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-[980px] flex-col items-center justify-between">
        <div className="flex w-full flex-1 items-center justify-center">
          <img
            src=""
            alt="social proof"
            className="h-auto w-full max-w-[620px] object-contain"
          />
        </div>

        <div className="-mt-2 flex flex-col items-center md:-mt-4">
          <div className="flex items-center justify-center gap-4">
            <LaurelLeft />
            <h2 className="text-[34px] font-extrabold tracking-tight text-black md:text-[44px]">
              23 000 000+
            </h2>
            <LaurelRight />
          </div>

          <p className="mt-2 text-[16px] text-[#3a3a3a]">
            people already joined us
          </p>
        </div>

        <div className="w-full max-w-[560px] pb-2 pt-10 md:pt-12">
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