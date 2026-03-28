import { useEffect, useMemo, useState } from "react";

const REVIEWS = [
  {
    id: 1,
    name: "Debora Lampron",
    text: "Ok, so whoever made this a thing I thank you so much! That’s because this is making me fit and I think if I do it every day I’ll feel much better.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Melissa Kane",
    text: "I’ve never stuck to workouts for this long. This feels simple and actually doable.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Sarah Nelson",
    text: "I was surprised by how easy it was to follow. It made daily movement feel less stressful.",
    avatar:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=120&q=80&auto=format&fit=crop",
  },
];

export default function PlanLoadingScreen({ onComplete, onBack }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = 0;

    const interval = setInterval(() => {
      start += 1;
      setProgress(start);

      if (start >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete?.();
        }, 500);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  const circle = useMemo(() => {
    const radius = 88;
    const stroke = 10;
    const normalizedRadius = radius - stroke / 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset =
      circumference - (progress / 100) * circumference;

    return {
      radius,
      stroke,
      normalizedRadius,
      circumference,
      strokeDashoffset,
    };
  }, [progress]);

  return (
    <section className="min-h-screen bg-[#f3f3f3] px-4 py-8 font-sans">
      <div className="mx-auto max-w-[760px]">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className="text-[24px] text-[#8f8f8f]"
          >
            ←
          </button>
          <div className="text-[14px] font-medium text-[#666]">Generating plan</div>
        </div>

        <div className="mt-8 flex flex-col items-center">
          <div className="relative flex h-[220px] w-[220px] items-center justify-center">
            <svg
              height={circle.radius * 2}
              width={circle.radius * 2}
              className="-rotate-90"
            >
              <circle
                stroke="#d3d3d3"
                fill="transparent"
                strokeWidth={circle.stroke}
                r={circle.normalizedRadius}
                cx={circle.radius}
                cy={circle.radius}
              />
              <circle
                stroke="#36975f"
                fill="transparent"
                strokeWidth={circle.stroke}
                strokeLinecap="round"
                strokeDasharray={`${circle.circumference} ${circle.circumference}`}
                style={{ strokeDashoffset: circle.strokeDashoffset }}
                r={circle.normalizedRadius}
                cx={circle.radius}
                cy={circle.radius}
                className="transition-all duration-300 ease-linear"
              />
            </svg>

            <div className="absolute text-center">
              <div className="text-[42px] font-bold text-black">{progress}%</div>
            </div>
          </div>

          <h2 className="mt-8 max-w-[560px] text-center text-[28px] font-bold leading-tight text-[#36975f] sm:text-[38px]">
            Creating your personalised Tai Chi Indoor Walking workout plan
          </h2>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="rounded-[20px] border border-[#e5e5e5] bg-white p-4 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="text-[15px] font-semibold text-[#222]">
                  Trustpilot
                </div>
                <div className="text-[14px] text-[#18a957]">★★★★★</div>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <div className="text-[16px] font-semibold text-[#222]">
                    {review.name}
                  </div>
                  <div className="text-[13px] text-[#18a957]">★★★★★</div>
                </div>
              </div>

              <p className="mt-4 text-[15px] leading-7 text-[#555]">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}