import { useMemo, useState } from "react";

const USE_BACKEND_EMAIL = false;

export default function EmailCaptureScreen({ answers, onBack, onSuccess }) {
  const [email, setEmail] = useState(answers?.email || "");
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const isValidEmail = useMemo(() => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  }, [email]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail || isSending) return;

    setIsSending(true);
    setMessage("");
    setIsError(false);

    if (!USE_BACKEND_EMAIL) {
      setTimeout(() => {
        setMessage("Temporary mode: moving to next page.");
        setIsError(false);
        setIsSending(false);
        onSuccess?.(email.trim());
      }, 500);
      return;
    }

    try {
      const response = await fetch("/api/send-plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          answers,
        }),
      });

      let data = null;
      const contentType = response.headers.get("content-type");

      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        const text = await response.text();
        data = text ? { message: text } : null;
      }

      if (!response.ok) {
        throw new Error(data?.message || "Failed to send email");
      }

      setMessage(data?.message || "Your plan has been sent successfully.");
      setIsError(false);

      setTimeout(() => {
        onSuccess?.(email.trim());
      }, 700);
    } catch (error) {
      setMessage(error.message || "Something went wrong while sending email.");
      setIsError(true);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#f6f6f4] px-4 py-8 font-sans">
      <div className="mx-auto max-w-[560px]">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className="text-[24px] text-[#8f8f8f]"
          >
            ←
          </button>
          <div className="text-[14px] font-medium text-[#666]">Final step</div>
        </div>

        <div className="mt-14 rounded-[28px] border border-[#e6e6e6] bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-center text-[28px] font-bold leading-tight text-black sm:text-[34px]">
            Enter your email to receive your personalised plan
          </h2>

          <p className="mx-auto mt-4 max-w-[430px] text-center text-[15px] leading-7 text-[#5f5f5f]">
            We&apos;ll send your plan summary and next steps to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="mt-10">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-[56px] w-full rounded-[16px] border border-[#dcdcdc] bg-[#eef3fb] px-4 text-[16px] outline-none transition focus:border-[#36975f]"
            />

            <button
              type="submit"
              disabled={!isValidEmail || isSending}
              className={`mt-5 h-[56px] w-full rounded-[16px] text-[18px] font-bold text-white transition ${
                isValidEmail && !isSending
                  ? "bg-[#36975f] hover:bg-[#2f8553]"
                  : "cursor-not-allowed bg-[#36975f]/50"
              }`}
            >
              {isSending ? "Sending..." : "Send my plan"}
            </button>
          </form>

          {message ? (
            <p
              className={`mt-4 text-center text-[14px] ${
                isError ? "text-red-500" : "text-[#2f8553]"
              }`}
            >
              {message}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}