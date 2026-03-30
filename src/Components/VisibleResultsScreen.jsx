import { useEffect, useMemo, useRef, useState } from "react";

export default function VisibleResultsScreen({ answers, onContinue, onBack }) {
  const currentWeight = Number(answers?.currentWeight?.kg || 70);
  const goalWeight = Number(answers?.goalWeight?.kg || 64);

  const weeks = ["Week 1", "Week 2", "Week 3", "Week 4"];
  const svgPathRef = useRef(null);

  const [pathLength, setPathLength] = useState(0);
  const [progress, setProgress] = useState(0);
  const [movingPoint, setMovingPoint] = useState({ x: 8, y: 16 });
  const [showEndLabel, setShowEndLabel] = useState(false);

  const chartPoints = useMemo(() => {
    const safeGoal = Math.min(currentWeight, goalWeight);
    const totalLoss = Math.max(currentWeight - safeGoal, 0.5);

    const week1 = Number((currentWeight - totalLoss * 0.35).toFixed(1));
    const week2 = Number((currentWeight - totalLoss * 0.55).toFixed(1));
    const week3 = Number((currentWeight - totalLoss * 0.65).toFixed(1));
    const week4 = Number((currentWeight - totalLoss * 0.9).toFixed(1));

    const values = [currentWeight, week1, week2, week3, week4];
    const min = Math.min(...values);
    const max = Math.max(...values);

    const normalizeY = (value) => {
      if (max === min) return 55;
      const ratio = (value - min) / (max - min);
      return 68 - ratio * 36;
    };

    return [
      { x: 8, y: normalizeY(currentWeight), value: currentWeight, label: "Now" },
      { x: 27, y: normalizeY(week1), value: week1, label: "Week 1" },
      { x: 47, y: normalizeY(week2), value: week2, label: "Week 2" },
      { x: 67, y: normalizeY(week3), value: week3, label: "Week 3" },
      { x: 87, y: normalizeY(week4), value: week4, label: "After 4 weeks" },
    ];
  }, [currentWeight, goalWeight]);

  const pathD = useMemo(() => {
    const p = chartPoints;
    return `
      M ${p[0].x} ${p[0].y}
      C 16 ${p[0].y + 20}, 20 ${p[1].y + 6}, ${p[1].x} ${p[1].y}
      S 40 ${p[2].y}, ${p[2].x} ${p[2].y}
      S 60 ${p[3].y - 1}, ${p[3].x} ${p[3].y}
      S 80 ${p[4].y}, ${p[4].x} ${p[4].y}
    `;
  }, [chartPoints]);

  useEffect(() => {
    if (!svgPathRef.current) return;

    const totalLength = svgPathRef.current.getTotalLength();
    setPathLength(totalLength);
    setProgress(0);
    setShowEndLabel(false);

    let start = null;
    const duration = 2200;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const nextProgress = Math.min(elapsed / duration, 1);

      setProgress(nextProgress);

      const point = svgPathRef.current.getPointAtLength(totalLength * nextProgress);
      setMovingPoint({ x: point.x, y: point.y });

      if (nextProgress < 1) {
        requestAnimationFrame(step);
      } else {
        setShowEndLabel(true);
      }
    };

    requestAnimationFrame(step);
  }, [pathD]);

  return (
    <section className="min-h-screen bg-[#f3f3f3] px-4 py-8 font-sans">
      <div className="mx-auto max-w-[660px]">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className="text-[24px] leading-none text-[#8e8e8e]"
          >
            ←
          </button>
          <div className="text-[14px] font-medium text-[#666]">Progress preview</div>
        </div>

        <div className="mx-auto mt-8 max-w-[440px]">
          <div className="text-[20px] font-bold text-black">Your weight</div>

          <div className="relative mt-4 h-[260px] w-full">
            <div className="absolute left-0 right-0 top-[26px] border-t border-dashed border-[#c9c9c9]" />
            <div className="absolute left-0 right-0 top-[88px] border-t border-dashed border-[#c9c9c9]" />
            <div className="absolute left-0 right-0 top-[150px] border-t border-dashed border-[#c9c9c9]" />
            <div className="absolute left-0 right-0 top-[212px] border-t border-dashed border-[#c9c9c9]" />

            <svg
              viewBox="0 0 100 85"
              preserveAspectRatio="none"
              className="absolute left-0 top-0 h-[210px] w-full overflow-visible"
            >
              <defs>
                <linearGradient id="resultsLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#e3d11f" />
                  <stop offset="50%" stopColor="#8bc34a" />
                  <stop offset="100%" stopColor="#25b06a" />
                </linearGradient>
              </defs>

              <path
                ref={svgPathRef}
                d={pathD}
                fill="none"
                stroke="url(#resultsLineGradient)"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray={pathLength}
                strokeDashoffset={pathLength - pathLength * progress}
              />

              <circle
                cx={chartPoints[0].x}
                cy={chartPoints[0].y}
                r="2.4"
                fill="#f3f3f3"
                stroke="#e3d11f"
                strokeWidth="1.1"
              />

              <circle
                cx={chartPoints[4].x}
                cy={chartPoints[4].y}
                r="2.5"
                fill="#f3f3f3"
                stroke="#25b06a"
                strokeWidth="1.2"
              />
              <circle
                cx={chartPoints[4].x}
                cy={chartPoints[4].y}
                r="4"
                fill="none"
                stroke="#25b06a"
                strokeWidth="1"
                opacity="0.9"
              />

              {progress < 1 && (
                <circle
                  cx={movingPoint.x}
                  cy={movingPoint.y}
                  r="2.2"
                  fill="#ffd54f"
                  stroke="#ffffff"
                  strokeWidth="1"
                  style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.18))" }}
                />
              )}
            </svg>

            <div
              className="absolute rounded-full bg-[#ecebe8] px-4 py-2 text-[14px] font-semibold text-black"
              style={{
                left: "42px",
                top: "10px",
              }}
            >
              Now
            </div>

            {showEndLabel && (
              <div
                className="absolute rounded-[14px] bg-[#36975f] px-4 py-2 text-[14px] font-semibold text-white shadow-sm"
                style={{
                  right: "4px",
                  top: "112px",
                }}
              >
                After 4 weeks
                <div className="absolute bottom-[-5px] left-5 h-3 w-3 rotate-45 bg-[#36975f]" />
              </div>
            )}

            <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[14px] text-black">
              {weeks.map((week) => (
                <span key={week}>{week}</span>
              ))}
            </div>
          </div>

          <p className="mt-4 text-[14px] text-[#a1a1a1]">
            This chart is for illustrative purposes only
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-[620px] text-center">
          <h2 className="text-[34px] font-bold leading-tight text-black sm:text-[42px]">
            Get visible results in only 28 days!
          </h2>
        </div>

        <button
          type="button"
          onClick={onContinue}
          className="mx-auto mt-14 block h-[58px] w-full max-w-[660px] rounded-[18px] bg-[#36975f] text-[18px] font-bold text-white transition hover:bg-[#2f8553]"
        >
          Continue
        </button>
      </div>
    </section>
  );
}