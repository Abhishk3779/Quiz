export default function EmailSentScreen({ email }) {
  return (
    <section className="min-h-screen bg-[#f6f6f4] px-4 py-8 font-sans">
      <div className="mx-auto mt-20 max-w-[560px] rounded-[28px] border border-[#e6e6e6] bg-white p-8 text-center shadow-sm">
        <div className="text-[54px]">✅</div>
        <h2 className="mt-4 text-[30px] font-bold text-black">
          Plan sent successfully
        </h2>
        <p className="mt-4 text-[16px] leading-7 text-[#555]">
          We’ve sent your personalised plan to:
        </p>
        <p className="mt-2 text-[18px] font-semibold text-[#36975f]">{email}</p>
      </div>
    </section>
  );
}