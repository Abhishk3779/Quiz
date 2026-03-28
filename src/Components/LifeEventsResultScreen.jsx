import Transformation from "../assets/Transformation.png";
 export default function LifeEventsResultScreen({ onContinue }) {
  return (
    <section className="min-h-screen bg-[#f5f5f5] px-4 py-10">
      <div className="mx-auto flex min-h-[80vh] max-w-[520px] flex-col items-center justify-center">
        <div className="flex w-full justify-center">
          <img
            src={Transformation}
            alt="Life changes motivation"
            className="h-[360px] w-[360px] rounded-full object-cover md:h-[420px] md:w-[420px]"
          />
        </div>

        <div className="mt-8 w-full text-center">
          <h2 className="text-[30px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[24px]">
            Small changes can make a big difference
          </h2>

          <p className="mx-auto mt-4 max-w-[470px] text-[14px] font-medium leading-[1.45] tracking-[-0.01em] text-[#303030] md:text-[15px]">
            Many people gain weight after life changes. You are not alone. We will guide you and support you on your journey.
          </p>
        </div>

        <button
          type="button"
          onClick={onContinue}
          className="mt-15 w-full rounded-[16px] bg-[#3ca05f] py-[18px] text-center text-[17px] font-bold leading-none text-white transition"
        >
          Continue
        </button>
      </div>
    </section>
  );
}