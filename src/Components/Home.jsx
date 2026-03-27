import { useState } from "react";
import Women1 from '../assets/Women.webp';
import Women2 from '../assets/Women-2.webp';


const questions = [
  {
    id: "age",
    badge: "1-minute quiz",
    badgeSub: "ACCORDING TO YOUR AGE",
    title: "Tai Chi Indoor Walking 28-Day Challenge for Weight Loss",
    options: ["18-29 y.o.", "30-39 y.o.", "40-49 y.o.", "50+ y.o."],
  },
  {
    id: "goal",
    badge: "1-minute quiz",
    badgeSub: "YOUR GOAL",
    title: "What is your primary fitness goal?",
    options: [
      "Lose weight",
      "Build muscle",
      "Improve flexibility",
      "Reduce stress",
    ],
  },
  {
    id: "activity",
    badge: "1-minute quiz",
    badgeSub: "YOUR ACTIVITY LEVEL",
    title: "How active are you on a daily basis?",
    options: [
      "Not active at all",
      "Lightly active",
      "Moderately active",
      "Very active",
    ],
  },
];

function WomanFigure() {
  return (
    <img
      src={Women1}
      alt="WomanFigure"
      className="w-[210px] md:w-[250px] lg:w-[290px] h-auto object-contain"
    />
  );
}

function ArrowIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.5 7.5H11.5M11.5 7.5L8.2 4.2M11.5 7.5L8.2 10.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2c2.8 2.9 4.2 6.2 4.2 10S14.8 19.1 12 22c-2.8-2.9-4.2-6.2-4.2-10S9.2 4.9 12 2z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="11"
      height="9"
      viewBox="0 0 11 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.2 4.7L4.1 7.5L9.8 1.5"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LaurelLeft() {
  return (
    <svg width="26" height="68" viewBox="0 0 26 68" fill="none">
      <path
        d="M23 2C10 10 6 24 8 37C10 50 16 60 23 66"
        stroke="#3b9b5d"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M17 10C11 12 8 16 7 22"
        stroke="#3b9b5d"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M15 21C10 24 8 28 8 33"
        stroke="#3b9b5d"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M15 33C11 36 10 40 10 45"
        stroke="#3b9b5d"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M17 45C13 49 13 53 15 58"
        stroke="#3b9b5d"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LaurelRight() {
  return (
    <svg width="26" height="68" viewBox="0 0 26 68" fill="none">
      <path
        d="M3 2C16 10 20 24 18 37C16 50 10 60 3 66"
        stroke="#3b9b5d"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M9 10C15 12 18 16 19 22"
        stroke="#3b9b5d"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M11 21C16 24 18 28 18 33"
        stroke="#3b9b5d"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M11 33C15 36 16 40 16 45"
        stroke="#3b9b5d"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M9 45C13 49 13 53 11 58"
        stroke="#3b9b5d"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SocialProofScreen({ onContinue }) {
  return (
    <section className="min-h-screen bg-[#f3f3f3] px-4 py-8 md:py-10">
      <div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-[980px] flex-col items-center justify-between">
        <div className="flex flex-1 items-center justify-center w-full">
          <img
            src={Women2}
            alt="social proof"
            className="w-full max-w-[420px] h-auto object-contain"
          />
        </div>

        <div className="-mt-2 md:-mt-4 flex flex-col items-center">
          <div className="flex items-center justify-center gap-4">
            <LaurelLeft />
            <h2 className="text-[34px] md:text-[44px] font-extrabold tracking-tight text-black">
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

export default function TaiChiQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [done, setDone] = useState(false);
  const [showSocialProof, setShowSocialProof] = useState(false);

  const q = questions[step];

  function handleSelect(option) {
    const newAnswers = { ...answers, [q.id]: option };
    setAnswers(newAnswers);

    if (q.id === "age") {
      setShowSocialProof(true);
      return;
    }

    if (step < questions.length - 1) {
      setTimeout(() => setStep(step + 1), 160);
    } else {
      setTimeout(() => setDone(true), 160);
    }
  }

  function handleContinueAfterSocialProof() {
    setShowSocialProof(false);
    setStep(1);
  }

  function restart() {
    setStep(0);
    setAnswers({});
    setDone(false);
    setShowSocialProof(false);
  }

  if (showSocialProof) {
    return <SocialProofScreen onContinue={handleContinueAfterSocialProof} />;
  }

  if (done) {
    return (
      <section className="min-h-screen bg-[#f3f3f3] flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-[900px] text-center">
          <div className="inline-flex items-center gap-2 rounded-md bg-[#dcecc8] px-3 py-2">
            <span className="text-[#2e9b64] text-[13px]">★</span>
            <span className="text-[12px] font-semibold text-[#1f1f1f]">
              1-minute quiz
            </span>
            <span className="text-[#8b8b8b]">|</span>
            <span className="text-[12px] uppercase tracking-wide text-[#4c5a37]">
              Your plan is ready
            </span>
          </div>

          <h2 className="mt-6 text-[32px] font-extrabold leading-[1.2] text-black">
            Your personalized 28-Day Tai Chi Plan is ready!
          </h2>

          <p className="mt-4 text-[16px] text-[#5f5f5f]">
            We’ve tailored the perfect indoor walking challenge for you.
          </p>

          <div className="mt-8 flex justify-center">
            <img
              src=""
              alt="result visual"
              className="max-w-full h-auto object-contain"
            />
          </div>

          <button
            onClick={restart}
            className="mt-8 inline-flex items-center gap-4 rounded-full bg-[#3b9b5d] px-7 py-4 text-white font-semibold hover:bg-[#318451] transition"
          >
            <span>Start My Challenge</span>
            <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white text-black">
              <ArrowIcon />
            </span>
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#f3f3f3] px-4 py-10">
      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-[920px] flex-col items-center justify-center">
        <div className="inline-flex items-center gap-2 rounded-md bg-[#dcecc8] px-3 py-2">
          <span className="text-[#2e9b64] text-[13px]">★</span>
          <span className="text-[12px] font-semibold text-[#1f1f1f]">
            {q.badge}
          </span>
          <span className="text-[#8b8b8b]">|</span>
          <span className="text-[12px] uppercase tracking-wide text-[#4c5a37]">
            {q.badgeSub}
          </span>
        </div>

        <h1 className="mt-7 max-w-[560px] text-center text-[34px] md:text-[42px] font-extrabold leading-[1.18] tracking-[-0.02em] text-black">
          {q.title}
        </h1>

        <div className="mt-10 flex w-full max-w-[760px] flex-col items-center justify-center gap-10 md:flex-row md:items-center md:justify-center">
          <div className="flex justify-center md:w-[300px]">
            <WomanFigure />
          </div>

          <div className="w-full max-w-[320px] space-y-3">
            {q.options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleSelect(option)}
                className="flex w-full items-center justify-between rounded-[14px] bg-[#3b9b5d] px-4 py-4 text-left text-white transition hover:bg-[#318451]"
              >
                <span className="text-[16px] font-semibold">{option}</span>
                <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-white text-black">
                  <ArrowIcon />
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-[#7a7a7a]">
          <GlobeIcon />
          <span className="text-[16px]">En</span>
        </div>

        <div className="mt-4 flex max-w-[560px] items-start justify-center gap-3 text-center md:text-left">
          <div className="mt-[2px] flex h-[22px] w-[22px] min-w-[22px] items-center justify-center rounded-md bg-[#3b9b5d]">
            <CheckIcon />
          </div>

          <p className="text-[13px] leading-[1.55] text-[#6f6f6f]">
            By continuing, you agree to our{" "}
            <span className="underline cursor-pointer">Terms of Use</span> and{" "}
            <span className="underline cursor-pointer">Privacy Policy</span>. You
            also consent to the use of cookies as described in our{" "}
            <span className="underline cursor-pointer">Cookie Policy</span>.
          </p>
        </div>
      </div>
    </section>
  );
}