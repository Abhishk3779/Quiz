import { LaurelLeft, LaurelRight } from "./icons";
import Women2 from '../assets/Women-2.webp';
import left from '../assets/left.png';
import right from '../assets/right.png';

export default function SocialProofScreen({ onContinue }) {
  return (
    <section className="min-h-screen bg-[#f3f3f3] px-4 py-8 md:py-10">
      <div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-[980px] flex-col items-center justify-between">
        <div className="flex w-full flex-1 items-center justify-center">
          <img
            src={Women2}
            alt="social proof"
            className="h-auto w-full max-w-[420px] object-contain"
          />
        </div>

        <div className="-mt-2 flex flex-col items-center md:-mt-4">
          <div className="flex items-center justify-center gap-4">
            <img
            src={left}
            alt="social proof"
            className="h-auto w-full max-w-[40px] object-contain"
          />
            <h2 className="text-[34px] font-bold tracking-tight text-black md:text-[30px]">
              21 million +
            </h2>
            <img
            src={right}
            alt="social proof"
            className="h-auto w-full max-w-[40px] object-contain"
          />
          </div>

          <p className="mt-2 text-[16px] text-[#3a3a3a]">
            people have already chosen a simpler way to move
          </p>
        </div>

        <div className="w-full max-w-[460px] pb-2 pt-10 md:pt-12">
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