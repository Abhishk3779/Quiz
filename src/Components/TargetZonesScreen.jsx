import abs from "../assets/abs.png";

function TargetZoneCard({ option, onToggle }) {
  return (
    <button
      onClick={() => onToggle(option.id)}
      className={`flex h-[46px] w-full items-center justify-between rounded-[12px] px-6 transition ${
        option.selected ? "bg-[#3b9b5d]" : "bg-[#ecebe7]"
      }`}
    >
      <span className={`text-[20px] leading-none ${option.selected ? "text-white" : "text-[#9d9d9d]"}`}>
        {option.selected ? "−" : "+"}
      </span>
      <span className={`text-[16px] font-medium ${option.selected ? "text-white" : "text-black"}`}>
        {option.label}
      </span>
    </button>
  );
}

// Marker component for the dots on the body
const ZoneMarker = ({ isVisible, positionClass }) => {
  if (!isVisible) return null;
  return (
    <div className={`absolute z-10 flex h-6 w-6 items-center justify-center ${positionClass}`}>
      {/* Outer Pulse Animation */}
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-75"></span>
      {/* Solid Inner Dot */}
      <span className="relative inline-flex h-3 w-3 rounded-full bg-yellow-500 border border-white"></span>
    </div>
  );
};

export default function TargetZonesScreen({ options, onToggle, onContinue, onBack }) {
  const hasSelection = options.some((item) => item.selected);

  // Map your option labels to specific tailwind positions on the image
  const getMarkerPosition = (label) => {
    switch (label.toLowerCase()) {
      case "arms": return "top-[18%] left-[20%] md:left-[13%]";
      case "abs": return "top-[32%] left-[35%]";
      case "booty": return "top-[45%] left-[13%]";
      case "legs": return "top-[55%] left-[55%]";
      default: return "";
    }
  };

  return (
    <section className="min-h-screen bg-[#f3f3f3] px-4 pb-10 pt-4">
      <div className="w-full">
        <div className="mb-2 flex items-center justify-between text-[#a8a8a8]">
          <button onClick={onBack} className="text-[22px] leading-none hover:text-black">←</button>
          <div className="text-[14px] text-[#7c7c7c]">4 / 24</div>
        </div>
        <div className="relative h-[6px] w-full overflow-hidden rounded-full bg-[#e7e7e4]">
          <div className="h-full w-[17%] rounded-full bg-[#3b7b50]" />
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-[760px]">
        <h2 className="text-center text-[30px] font-bold leading-[1.2] text-black md:text-[22px]">
          Which parts of your body would you like to improve?
        </h2>

        <div className="mx-auto mt-8 flex max-w-[760px] flex-col items-center gap-6 md:flex-row md:items-start md:justify-center">
          {/* Left Side: Options */}
          <div className="w-full max-w-[270px] space-y-4">
             <h4 className="font-semibold">You can choose more than one</h4>
            {options.map((option) => (
              <TargetZoneCard key={option.id} option={option} onToggle={onToggle} />
            ))}
          </div>

          {/* Right Side: Image with Overlay Markers */}
          <div className="relative flex w-[180px] shrink-0 justify-center">
            <img src={abs} alt="target zones" className="h-auto w-full object-contain" />
            
            {/* Markers Overlay */}
            {options.map((option) => (
              <ZoneMarker 
                key={option.id} 
                isVisible={option.selected} 
                positionClass={getMarkerPosition(option.label)} 
              />
            ))}
          </div>
        </div>

        {/* Continue Button */}
        <div className="mx-auto mt-14 max-w-[550px]">
          <button
            onClick={hasSelection ? onContinue : null}
            disabled={!hasSelection}
            className={`w-full rounded-[14px] py-3 text-[18px] font-bold text-white transition-all duration-300 ${
              hasSelection
                ? "bg-[#3b9b5d] hover:bg-[#318451] cursor-pointer shadow-lg"
                : "bg-[#72bc8c] opacity-60 cursor-not-allowed"
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </section>
  );
}