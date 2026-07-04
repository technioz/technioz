export function ShippingVelocityDiagram() {
  return (
    <div className="w-full max-w-[900px] mx-auto">
      <svg viewBox="0 0 900 420" className="w-full h-auto" role="img" aria-label="Shipping velocity timeline showing discovery in weeks 1-2, design and development in weeks 3-6, build and launch in weeks 7-16, and ongoing optimization">
        <defs>
          <pattern id="vel-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#c7c3b2" strokeWidth="0.5" opacity="0.2" />
          </pattern>
          <linearGradient id="sprint-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3923c7" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#887bdd" stopOpacity="0.7" />
          </linearGradient>
        </defs>

        <rect width="900" height="420" fill="url(#vel-grid)" />

        {/* Timeline header */}
        <text x="50" y="30" fontSize="11" fill="#777673" fontFamily="var(--font-mono)" style={{ textTransform: "uppercase", letterSpacing: "1.2px" }}>Phase</text>
        <text x="250" y="30" fontSize="11" fill="#777673" fontFamily="var(--font-mono)" style={{ textTransform: "uppercase", letterSpacing: "1.2px" }}>Week 1-2</text>
        <text x="400" y="30" fontSize="11" fill="#777673" fontFamily="var(--font-mono)" style={{ textTransform: "uppercase", letterSpacing: "1.2px" }}>Week 3-6</text>
        <text x="580" y="30" fontSize="11" fill="#777673" fontFamily="var(--font-mono)" style={{ textTransform: "uppercase", letterSpacing: "1.2px" }}>Week 7-16</text>
        <text x="760" y="30" fontSize="11" fill="#777673" fontFamily="var(--font-mono)" style={{ textTransform: "uppercase", letterSpacing: "1.2px" }}>Ongoing</text>

        {/* Timeline axis */}
        <line x1="50" y1="45" x2="850" y2="45" stroke="#c7c3b2" strokeWidth="1" />
        {[250, 400, 580, 760].map((x) => (
          <line key={x} x1={x} y1="42" x2={x} y2="48" stroke="#c7c3b2" strokeWidth="1" />
        ))}

        {/* Phase 1: Discover */}
        <g>
          <text x="50" y="90" fontSize="14" fill="#1d1b16" fontFamily="var(--font-display)" fontWeight="500">01 Discover</text>
          <text x="50" y="108" fontSize="10" fill="#777673" fontFamily="var(--font-mono)">Week 1</text>
          <rect x="230" y="70" width="120" height="50" rx="4" fill="url(#sprint-grad)" />
          <text x="290" y="92" textAnchor="middle" fontSize="11" fill="#ffffff" fontFamily="var(--font-body)">Requirements</text>
          <text x="290" y="107" textAnchor="middle" fontSize="10" fill="#d7d3f4" fontFamily="var(--font-mono)">Scope + timeline</text>
          {/* Deliverable marker */}
          <circle cx="350" cy="95" r="5" fill="#3923c7" />
          <text x="365" y="99" fontSize="10" fill="#4a4945" fontFamily="var(--font-mono)">→ Trusted timeline</text>
        </g>

        {/* Phase 2: Design */}
        <g>
          <text x="50" y="160" fontSize="14" fill="#1d1b16" fontFamily="var(--font-display)" fontWeight="500">02 Design</text>
          <text x="50" y="178" fontSize="10" fill="#777673" fontFamily="var(--font-mono)">Week 2-3</text>
          <rect x="230" y="140" width="200" height="50" rx="4" fill="url(#sprint-grad)" />
          <text x="330" y="162" textAnchor="middle" fontSize="11" fill="#ffffff" fontFamily="var(--font-body)">Wireframes + Architecture</text>
          <text x="330" y="177" textAnchor="middle" fontSize="10" fill="#d7d3f4" fontFamily="var(--font-mono)">Sprint plan</text>
          <circle cx="430" cy="165" r="5" fill="#3923c7" />
          <text x="445" y="169" fontSize="10" fill="#4a4945" fontFamily="var(--font-mono)">→ Approved blueprints</text>
        </g>

        {/* Phase 3: Build (sprint cycles) */}
        <g>
          <text x="50" y="230" fontSize="14" fill="#1d1b16" fontFamily="var(--font-display)" fontWeight="500">03 Build</text>
          <text x="50" y="248" fontSize="10" fill="#777673" fontFamily="var(--font-mono)">Week 4-14</text>

          {/* Sprint bars (2-week cycles) */}
          {[0, 1, 2, 3, 4].map((s) => (
            <g key={s}>
              <rect x={230 + s * 70} y="210" width="60" height="50" rx="4" fill={s % 2 === 0 ? "#3923c7" : "#614fd2"} opacity={0.85 - s * 0.05} />
              <text x={260 + s * 70} y="232" textAnchor="middle" fontSize="10" fill="#ffffff" fontFamily="var(--font-mono)">Sprint {s + 1}</text>
              <text x={260 + s * 70} y="247" textAnchor="middle" fontSize="9" fill="#d7d3f4" fontFamily="var(--font-mono)">Demo</text>
              {/* Demo marker */}
              <circle cx={290 + s * 70} cy="235" r="3" fill="#ffffff" opacity="0.6" />
            </g>
          ))}

          {/* Deliverable */}
          <circle cx="580" cy="235" r="5" fill="#3923c7" />
          <text x="595" y="239" fontSize="10" fill="#4a4945" fontFamily="var(--font-mono)">→ Working software</text>
        </g>

        {/* Phase 4: Launch & Scale */}
        <g>
          <text x="50" y="310" fontSize="14" fill="#1d1b16" fontFamily="var(--font-display)" fontWeight="500">04 Launch</text>
          <text x="50" y="328" fontSize="10" fill="#777673" fontFamily="var(--font-mono)">Week 15+</text>
          <rect x="580" y="290" width="270" height="50" rx="4" fill="#1d1b16" stroke="#3923c7" strokeWidth="1.5" />
          <text x="715" y="312" textAnchor="middle" fontSize="11" fill="#ffffff" fontFamily="var(--font-body)">Deploy + Monitor + Iterate</text>
          <text x="715" y="327" textAnchor="middle" fontSize="10" fill="#a5a4a2" fontFamily="var(--font-mono)">Ongoing support</text>
          <circle cx="850" cy="315" r="5" fill="#3923c7" />
          <text x="860" y="319" fontSize="10" fill="#4a4945" fontFamily="var(--font-mono)">→ Live</text>
        </g>

        {/* Sprint cadence legend */}
        <g>
          <rect x="50" y="370" width="60" height="20" rx="3" fill="#3923c7" opacity="0.85" />
          <text x="125" y="384" fontSize="10" fill="#4a4945" fontFamily="var(--font-body)">2-week sprint</text>

          <circle cx="240" cy="380" r="4" fill="#3923c7" />
          <text x="255" y="384" fontSize="10" fill="#4a4945" fontFamily="var(--font-body)">Demo at end of each sprint</text>

          <circle cx="430" cy="380" r="4" fill="#3923c7" />
          <text x="445" y="384" fontSize="10" fill="#4a4945" fontFamily="var(--font-body)">Deliverable marker</text>

          <rect x="580" y="370" width="60" height="20" rx="3" fill="#1d1b16" stroke="#3923c7" strokeWidth="1" />
          <text x="655" y="384" fontSize="10" fill="#4a4945" fontFamily="var(--font-body)">Production phase</text>
        </g>
      </svg>
    </div>
  );
}