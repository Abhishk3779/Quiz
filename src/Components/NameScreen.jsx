import { useEffect, useRef, useState } from "react";

export default function NameScreen({ onContinue, onBack }) {
  const [name, setName] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange = (e) => {
    let value = e.target.value;

    value = value.replace(/\s+/g, " ");
    value = value.replace(/[^a-zA-Z\s]/g, "");

    if (value.length > 20) {
      value = value.slice(0, 20);
    }

    setName(value);
  };

  const trimmedName = name.trim();
  const isValid = trimmedName.length >= 2 && trimmedName.length <= 20;

  const handleContinue = () => {
    if (!isValid) return;
    onContinue?.(trimmedName);
  };

  return (
    <div className="min-h-screen bg-[#f6f6f4] px-1.5 pt-3 pb-8 font-sans">
      <div className="grid grid-cols-[32px_1fr_auto] items-center gap-2">
        <button
          type="button"
          onClick={onBack}
          aria-label="Go back"
          className="text-[24px] leading-none text-[#8e8e8e]"
        >
          ←
        </button>

        <div className="h-[4px] w-full overflow-hidden rounded-full bg-[#e4e4e2]">
          <div className="h-full w-[91.66%] rounded-full bg-[#356f4b]" />
        </div>

        <div className="pr-2 text-[14px] font-medium text-[#1f1f1f]">
          22 / 24
        </div>
      </div>

      <div className="mx-auto mt-10 flex w-full max-w-[560px] flex-col items-center">
        <h2 className="text-center text-[28px] font-extrabold leading-[1.15] tracking-[-0.02em] text-black">
          What is your name?
        </h2>

        <div className="mt-12 flex w-full max-w-[494px] flex-col items-center">
          <label htmlFor="user-name" className="sr-only">
            Enter your name
          </label>

          <input
            ref={inputRef}
            id="user-name"
            type="text"
            value={name}
            onChange={handleChange}
            placeholder="Your name"
            maxLength={20}
            className="w-full border-0 border-b border-[#86c9a0] bg-transparent px-0 pb-3 text-center text-[22px] font-semibold text-[#111111] placeholder:text-[#d9d9d9] outline-none"
          />

          <div className="mt-1 flex w-full justify-end">
            <span className="text-[13px] font-medium text-[#8b7458]">2-20</span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleContinue}
          disabled={!isValid}
          className={`mt-24 h-[46px] w-full max-w-[494px] rounded-[12px] text-[16px] font-semibold text-white transition ${
            isValid
              ? "bg-[#36975f] hover:bg-[#318653]"
              : "cursor-not-allowed bg-[#36975f]/70"
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}