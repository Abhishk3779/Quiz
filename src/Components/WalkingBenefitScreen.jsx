export default function WalkingBenefitScreen({ onContinue, onBack }) {
  return (
    <div className="min-h-screen bg-[#f6f6f4] px-2 pt-8 pb-10 font-sans">
      <div className="mx-auto flex w-full max-w-[520px] flex-col items-center">
        <div className="w-full overflow-hidden rounded-[36px]">
          <img
            src=""
            alt=""
            className="h-auto w-full object-cover"
          />
        </div>

        <h2 className="mt-8 max-w-[500px] text-center text-[27px] font-extrabold leading-[1.1] tracking-[-0.02em] text-black">
          Walking regularly may help reduce risk factors linked to heart health
        </h2>

        <p className="mt-5 max-w-[510px] text-center text-[13px] leading-[1.6] text-[#2a2a2a]">
          A study published in the Journal of Physical Activity and Health found
          that older adults who walk regularly tend to have fewer risk factors
          linked to metabolic syndrome.
          <br />
          For educational purposes only. Not medical advice.
        </p>

        <button
          type="button"
          onClick={onContinue}
          className="mt-20 h-[52px] w-full rounded-[14px] bg-[#36975f] text-[18px] font-semibold text-white transition hover:bg-[#318653]"
        >
          Continue
        </button>
      </div>
    </div>
  );
}