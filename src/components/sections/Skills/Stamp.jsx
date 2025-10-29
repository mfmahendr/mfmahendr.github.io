import { useMemo } from "react";

export default function Stamp({ stamp, logoMap }) {
  const seed = useMemo(() => Math.random().toFixed(2), []);
  const requested = (stamp.logo || "").trim();
  const logoUrl = logoMap[requested];
  // const logoPath = `/images/tools/${stamp.logo}`

  return (
    <div
      className="stamp-responsive"
      data-tags={stamp.tags.join(",")}
      style={{ "--seed": seed }}
    >
      <div className="stamp-logo" style={{ background: stamp.bgcolor }}>
        {logoUrl ? (
          <img
            src={logoUrl}
            alt={`${stamp.title} Logo`}
            loading="lazy"
            className="w-[85%] h-[85%] object-contain"
          />
        ) : (
          <div
            style={{
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="w-[85%] h-[85%] object-contain"
          >
            ?
          </div>
        )}
      </div>
      <p className="stamp-text" style={{ color: stamp.color }}>
        <span className="stamp-title">{stamp.title}</span>
        <span className="stamp-key">{stamp.category}</span>
      </p>
    </div>
  );
}
