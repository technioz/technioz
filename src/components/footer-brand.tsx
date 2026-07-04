export function FooterBrand() {
  return (
    <div className="group relative inline-block select-none" aria-hidden="true">
      {/* Ghost outline layer — stroke-only */}
      <span
        className="block font-display font-bold leading-none text-transparent whitespace-nowrap"
        style={{
          fontSize: "clamp(80px, 20vw, 400px)",
          letterSpacing: "-0.04em",
          WebkitTextStroke: "1px rgba(136, 123, 221, 0.58)",
        }}
      >
        technioz
      </span>
      {/* Solid foreground layer — offset over ghost */}
      <span
        className="absolute top-[4px] left-[4px] block font-display font-bold leading-none text-white-100 whitespace-nowrap group-hover:text-cobolt-200 transition-colors duration-300"
        style={{
          fontSize: "clamp(80px, 20vw, 400px)",
          letterSpacing: "-0.04em",
        }}
      >
        technioz
      </span>
    </div>
  );
}