const CorrectionTape = ({
  children,
  replacementText,
  className = "",
  tapeHeight = "h-3/5", //default 60%
  tapeRotation = "-rotate-1",
  replacementSize = "text-xs",
}) => {
  return (
    <span className={`relative inline-block cursor-pointer group ${className}`}>
      <span className="relative inline-block">
        {children}
        {/* first stroke */}
        <span className="absolute top-1/2 left-0 w-full h-0.5 bg-repeat-x bg-[length:4px_100%] bg-[linear-gradient(to_right,transparent_2px,rgba(0,0,0,0.7)_2px,rgba(0,0,0,0.7)_4px)] transform -translate-y-1/2 opacity-100 group-hover:opacity-20 transition-opacity duration-300"></span>
        {/* second stroke */}
        <span className="absolute top-1/3 -left-0.5 w-[calc(100%+4px)] h-0.5 bg-repeat-x bg-[length:5px_100%] bg-[linear-gradient(to_right,transparent_3px,rgba(0,0,0,0.7)_3px,rgba(0,0,0,0.7)_5px)] rotate-2 opacity-100 group-hover:opacity-20 transition-opacity duration-300"></span>
      </span>

      <span
        className={`absolute top-1/10 -left-1 w-[calc(100%+8px)] ${tapeHeight} bg-gradient-to-b from-white/90 via-white/70 to-white/90 rounded-sm shadow-sm ${tapeRotation} opacity-100 group-hover:opacity-30 group-hover:-translate-y-1 transition-all duration-300`}
      ></span>

      <span
        className={`absolute top-0 left-0 w-full text-gray-800 font-bold text-center text-shadow-[0_0_1px_rgba(255,255,255,0.8)] opacity-100 group-hover:opacity-20 group-hover:translate-y-0.5 transition-all duration-300 ${replacementSize}`}
      >
        {replacementText}
      </span>
    </span>
  );
};

export default CorrectionTape;
