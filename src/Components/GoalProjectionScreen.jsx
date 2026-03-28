import { useEffect, useMemo, useRef, useState } from "react";

export default function GoalProjectionScreen({ answers, onContinue, onBack }) {
  const currentWeight = Number(answers?.currentWeight?.kg || 56);
  const goalWeight = Number(answers?.goalWeight?.kg || 50);
  const eventDate = answers?.eventDate
    ? new Date(answers.eventDate)
    : new Date("2026-05-23");

  const pathRef = useRef(null);

  const [pathLength, setPathLength] = useState(0);
  const [progress, setProgress] = useState(0);
  const [movingPoint, setMovingPoint] = useState({ x: 0, y: 0 });
  const [visibleIndex, setVisibleIndex] = useState(-1);

  const formatDateHeading = (date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const points = useMemo(() => {
    const totalPoints = 5;
    const start = currentWeight;
    const end = goalWeight;
    const diff = start - end;

    const generated = Array.from({ length: totalPoints }, (_, i) => {
      const t = i / (totalPoints - 1);
      const value = Math.round(start - diff * t);
      return {
        id: i,
        value,
        label: `${value} kg`,
      };
    });

    const minWeight = Math.min(...generated.map((item) => item.value));
    const maxWeight = Math.max(...generated.map((item) => item.value));

    const getY = (value) => {
      if (maxWeight === minWeight) return 58;
      const normalized = (value - minWeight) / (maxWeight - minWeight);
      return 72 - normalized * 22;
    };

    return generated.map((item, index) => ({
      ...item,
      x: 12 + index * 19.5,
      y: getY(item.value),
    }));
  }, [currentWeight, goalWeight]);

  const curvedPath = useMemo(() => {
    if (points.length < 2) return "";

    let d = `M ${points[0].x} ${points[0].y}`;

    for (let i = 0; i < points.length - 1; i++) {
      const current = points[i];
      const next = points[i + 1];
      const controlX = (current.x + next.x) / 2;

      d += ` C ${controlX} ${current.y}, ${controlX} ${next.y}, ${next.x} ${next.y}`;
    }

    return d;
  }, [points]);

  useEffect(() => {
    if (!pathRef.current) return;

    const totalLength = pathRef.current.getTotalLength();
    setPathLength(totalLength);
    setProgress(0);
    setVisibleIndex(-1);

    let startTime = null;
    const duration = 2600;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const elapsed = timestamp - startTime;
      const nextProgress = Math.min(elapsed / duration, 1);
      setProgress(nextProgress);

      const pointAtLength = pathRef.current.getPointAtLength(totalLength * nextProgress);
      setMovingPoint({ x: pointAtLength.x, y: pointAtLength.y });

      const currentVisibleIndex = Math.min(
        points.length - 1,
        Math.floor(nextProgress * points.length)
      );
      setVisibleIndex(currentVisibleIndex);

      if (nextProgress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [curvedPath, points]);

  return (
    <section className="min-h-screen bg-[#f3f3f3] px-4 py-8 font-sans">
      <div className="mx-auto max-w-[620px]">
        <div className="text-center">
          <h2 className="mx-auto max-w-[560px] text-[24px] font-bold leading-tight text-black sm:text-[26px]">
            👉 Your personal plan is ready
          </h2>

          <p className="mt-4 text-[14px] text-[#555] sm:text-[16px]">
           You’re moving in the right direction.
          </p>

          <h3 className="mt-9 text-[22px] font-bold text-[#39a85b] sm:text-[30px]">
            Your goal: {goalWeight} kg by {formatDateHeading(eventDate)}
          </h3>

          <p className="mt-2 text-[15px] text-[#4c4c4c] sm:text-[16px]">
            {goalWeight < currentWeight
              ? "We will guide you step by step so you can stay consistent and see progress."
              : goalWeight > currentWeight
              ? "Get ready to build your ideal shape!"
              : "Get ready to stay strong and consistent!"}
          </p>
        </div>

        <div className="mx-auto mt-10 w-full max-w-[430px] rounded-[18px] bg-[#f7f7f5] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
          <div className="relative h-[240px] w-full overflow-hidden rounded-[14px] bg-[#f5f5f1]">
            <div className="absolute inset-x-5 bottom-6 top-10">
              <div className="absolute inset-0 flex justify-between">
                {points.map((point) => (
                  <div
                    key={`grid-${point.id}`}
                    className="h-full w-px bg-[#d8d8d2]"
                  />
                ))}
              </div>

              <svg
                viewBox="0 0 100 85"
                className="absolute inset-0 h-full w-full overflow-visible"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="goalLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#eb8e8e" />
                    <stop offset="45%" stopColor="#e2c63d" />
                    <stop offset="100%" stopColor="#42c46a" />
                  </linearGradient>
                </defs>

                <path
                  ref={pathRef}
                  d={curvedPath}
                  fill="none"
                  stroke="url(#goalLineGradient)"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray={pathLength}
                  strokeDashoffset={pathLength - pathLength * progress}
                />

                {points.map((point, index) => {
                  const shown = index <= visibleIndex;
                  const isLast = index === points.length - 1;

                  return (
                    <g
                      key={point.id}
                      style={{
                        opacity: shown ? 1 : 0,
                        transition: `opacity 0.25s ease ${index * 0.08}s`,
                      }}
                    >
                      <circle
                        cx={point.x}
                        cy={point.y}
                        r={isLast ? 3.5 : 3}
                        fill="#f5f5f1"
                        stroke={
                          index === 0
                            ? "#eb8e8e"
                            : index < points.length - 2
                            ? "#e2c63d"
                            : "#42c46a"
                        }
                        strokeWidth="1.5"
                      />
                      {isLast && (
                        <circle
                          cx={point.x}
                          cy={point.y}
                          r="5.2"
                          fill="none"
                          stroke="#42c46a"
                          strokeWidth="1.4"
                          opacity="0.95"
                        />
                      )}
                    </g>
                  );
                })}

                {progress < 1 && (
                  <g>
                    <circle
                      cx={movingPoint.x}
                      cy={movingPoint.y}
                      r="3.2"
                      fill="#ffd759"
                      stroke="#ffffff"
                      strokeWidth="1.4"
                      style={{
                        filter: "drop-shadow(0 3px 8px rgba(0,0,0,0.18))",
                      }}
                    />
                  </g>
                )}
              </svg>

              {points.map((point, index) => {
                const shown = index <= visibleIndex;
                const isLast = index === points.length - 1;

                return (
                  <div
                    key={`label-${point.id}`}
                    className="absolute"
                    style={{
                      left: `${point.x}%`,
                      top: `${point.y - 15}%`,
                      transform: "translateX(-50%)",
                      opacity: shown ? 1 : 0,
                      transition: `opacity 0.28s ease ${index * 0.1}s`,
                    }}
                  >
                    <div
                      className={`relative rounded-[8px] px-3 py-2 text-[12px] font-bold text-white shadow-md ${
                        isLast ? "bg-[#39a85b]" : "bg-[#4a4a4a]"
                      }`}
                    >
                      {point.label}
                      <div
                        className={`absolute left-1/2 top-full h-2.5 w-2.5 -translate-x-1/2 -translate-y-1 rotate-45 ${
                          isLast ? "bg-[#39a85b]" : "bg-[#4a4a4a]"
                        }`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <button
          onClick={onContinue}
          className="mx-auto mt-14 block w-full max-w-[620px] rounded-[18px] bg-[#379b5d] py-[12px] text-[18px] font-bold text-white shadow-md transition-all hover:bg-[#2f8550]"
        >
          Continue
        </button>
      </div>
    </section>
  );
}