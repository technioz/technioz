export function ITConsultingDiagram() {
  return (
    <div className="w-full max-w-[900px] mx-auto">
      <svg viewBox="0 0 900 420" className="w-full h-auto" role="img" aria-label="IT consulting process timeline showing six phases: discovery, analysis, strategy, planning, execution, and continuous optimization">
        <defs>
          <pattern id="it-grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#c7c3b2" strokeWidth="0.5" opacity="0.25" />
          </pattern>
          <linearGradient id="it-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3923c7" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#887bdd" stopOpacity="0.7" />
          </linearGradient>
        </defs>
        <rect width="900" height="420" fill="url(#it-grid)" />

        {/* Timeline axis */}
        <line x1="50" y1="80" x2="850" y2="80" stroke="#c7c3b2" strokeWidth="1" />

        {/* Phase markers on timeline */}
        {[
          { x: 120, label: "DISCOVERY", week: "Week 1-2" },
          { x: 260, label: "ANALYSIS", week: "Week 3-4" },
          { x: 400, label: "STRATEGY", week: "Week 5-6" },
          { x: 540, label: "PLANNING", week: "Week 7-8" },
          { x: 680, label: "EXECUTION", week: "Ongoing" },
          { x: 820, label: "OPTIMIZE", week: "Continuous" },
        ].map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy="80" r="6" fill={i < 4 ? "#3923c7" : "#1d1b16"} stroke="#3923c7" strokeWidth="1.5" />
            <text x={p.x} y="65" textAnchor="middle" fontSize="9" fill="#777673" fontFamily="var(--font-mono)" style={{ textTransform: "uppercase", letterSpacing: "1px" }}>{p.label}</text>
            <text x={p.x} y="105" textAnchor="middle" fontSize="8" fill="#777673" fontFamily="var(--font-mono)">{p.week}</text>
          </g>
        ))}

        {/* Phase 1: Discovery */}
        <g>
          <rect x="60" y="130" width="120" height="110" rx="4" fill="#fdfcf8" stroke="#3923c7" strokeWidth="1" />
          <text x="120" y="150" textAnchor="middle" fontSize="11" fill="#1d1b16" fontFamily="var(--font-body)" fontWeight="500">01 Discovery</text>
          <line x1="75" y1="158" x2="165" y2="158" stroke="#c7c3b2" strokeWidth="0.5" />
          <text x="120" y="175" textAnchor="middle" fontSize="8" fill="#777673" fontFamily="var(--font-mono)">• Stakeholder interviews</text>
          <text x="120" y="190" textAnchor="middle" fontSize="8" fill="#777673" fontFamily="var(--font-mono)">• System assessment</text>
          <text x="120" y="205" textAnchor="middle" fontSize="8" fill="#777673" fontFamily="var(--font-mono)">• Gap analysis</text>
          <text x="120" y="220" textAnchor="middle" fontSize="8" fill="#777673" fontFamily="var(--font-mono)">• Requirements</text>
        </g>

        {/* Phase 2: Analysis */}
        <g>
          <rect x="200" y="130" width="120" height="110" rx="4" fill="#fdfcf8" stroke="#3923c7" strokeWidth="1" />
          <text x="260" y="150" textAnchor="middle" fontSize="11" fill="#1d1b16" fontFamily="var(--font-body)" fontWeight="500">02 Analysis</text>
          <line x1="215" y1="158" x2="305" y2="158" stroke="#c7c3b2" strokeWidth="0.5" />
          <text x="260" y="175" textAnchor="middle" fontSize="8" fill="#777673" fontFamily="var(--font-mono)">• Tech audit</text>
          <text x="260" y="190" textAnchor="middle" fontSize="8" fill="#777673" fontFamily="var(--font-mono)">• Risk assessment</text>
          <text x="260" y="205" textAnchor="middle" fontSize="8" fill="#777673" fontFamily="var(--font-mono)">• Cost-benefit</text>
          <text x="260" y="220" textAnchor="middle" fontSize="8" fill="#777673" fontFamily="var(--font-mono)">• Competitive scan</text>
        </g>

        {/* Phase 3: Strategy */}
        <g>
          <rect x="340" y="130" width="120" height="110" rx="4" fill="#3923c7" />
          <text x="400" y="150" textAnchor="middle" fontSize="11" fill="#ffffff" fontFamily="var(--font-body)" fontWeight="500">03 Strategy</text>
          <line x1="355" y1="158" x2="445" y2="158" stroke="#887bdd" strokeWidth="0.5" />
          <text x="400" y="175" textAnchor="middle" fontSize="8" fill="#d7d3f4" fontFamily="var(--font-mono)">• Strategy design</text>
          <text x="400" y="190" textAnchor="middle" fontSize="8" fill="#d7d3f4" fontFamily="var(--font-mono)">• Roadmap creation</text>
          <text x="400" y="205" textAnchor="middle" fontSize="8" fill="#d7d3f4" fontFamily="var(--font-mono)">• Budget planning</text>
          <text x="400" y="220" textAnchor="middle" fontSize="8" fill="#d7d3f4" fontFamily="var(--font-mono)">• Success metrics</text>
        </g>

        {/* Phase 4: Planning */}
        <g>
          <rect x="480" y="130" width="120" height="110" rx="4" fill="#fdfcf8" stroke="#3923c7" strokeWidth="1" />
          <text x="540" y="150" textAnchor="middle" fontSize="11" fill="#1d1b16" fontFamily="var(--font-body)" fontWeight="500">04 Planning</text>
          <line x1="495" y1="158" x2="585" y2="158" stroke="#c7c3b2" strokeWidth="0.5" />
          <text x="540" y="175" textAnchor="middle" fontSize="8" fill="#777673" fontFamily="var(--font-mono)">• Implementation plan</text>
          <text x="540" y="190" textAnchor="middle" fontSize="8" fill="#777673" fontFamily="var(--font-mono)">• Resource planning</text>
          <text x="540" y="205" textAnchor="middle" fontSize="8" fill="#777673" fontFamily="var(--font-mono)">• Risk mitigation</text>
          <text x="540" y="220" textAnchor="middle" fontSize="8" fill="#777673" fontFamily="var(--font-mono)">• Change mgmt</text>
        </g>

        {/* Phase 5: Execution */}
        <g>
          <rect x="620" y="130" width="120" height="110" rx="4" fill="#1d1b16" stroke="#3923c7" strokeWidth="1.5" />
          <text x="680" y="150" textAnchor="middle" fontSize="11" fill="#ffffff" fontFamily="var(--font-body)" fontWeight="500">05 Execution</text>
          <line x1="635" y1="158" x2="725" y2="158" stroke="#3923c7" strokeWidth="0.5" />
          <text x="680" y="175" textAnchor="middle" fontSize="8" fill="#a5a4a2" fontFamily="var(--font-mono)">• Implementation</text>
          <text x="680" y="190" textAnchor="middle" fontSize="8" fill="#a5a4a2" fontFamily="var(--font-mono)">• Progress monitor</text>
          <text x="680" y="205" textAnchor="middle" fontSize="8" fill="#a5a4a2" fontFamily="var(--font-mono)">• Issue resolution</text>
          <text x="680" y="220" textAnchor="middle" fontSize="8" fill="#a5a4a2" fontFamily="var(--font-mono)">• Quality assurance</text>
        </g>

        {/* Phase 6: Optimization */}
        <g>
          <rect x="760" y="130" width="100" height="110" rx="4" fill="#1d1b16" stroke="#3923c7" strokeWidth="1.5" />
          <text x="810" y="150" textAnchor="middle" fontSize="11" fill="#ffffff" fontFamily="var(--font-body)" fontWeight="500">06 Optimize</text>
          <line x1="775" y1="158" x2="845" y2="158" stroke="#3923c7" strokeWidth="0.5" />
          <text x="810" y="175" textAnchor="middle" fontSize="8" fill="#a5a4a2" fontFamily="var(--font-mono)">• Performance</text>
          <text x="810" y="190" textAnchor="middle" fontSize="8" fill="#a5a4a2" fontFamily="var(--font-mono)">• Optimization</text>
          <text x="810" y="205" textAnchor="middle" fontSize="8" fill="#a5a4a2" fontFamily="var(--font-mono)">• Knowledge xfer</text>
          <text x="810" y="220" textAnchor="middle" fontSize="8" fill="#a5a4a2" fontFamily="var(--font-mono)">• Ongoing support</text>
        </g>

        {/* Connecting arrows between phases */}
        {[180, 320, 460, 600, 740].map((x) => (
          <g key={x}>
            <line x1={x} y1="185" x2={x + 20} y2="185" stroke="#3923c7" strokeWidth="1.5" opacity="0.3" />
            <path d={`M${x + 20},185 L${x + 14},181 L${x + 14},189 Z`} fill="#3923c7" opacity="0.3" />
          </g>
        ))}

        {/* Deliverables bar at bottom */}
        <g>
          <rect x="50" y="270" width="800" height="55" rx="4" fill="url(#it-grad)" opacity="0.1" />
          <text x="450" y="290" textAnchor="middle" fontSize="11" fill="#1d1b16" fontFamily="var(--font-body)" fontWeight="500">Key Deliverables</text>
          <text x="120" y="312" textAnchor="middle" fontSize="8" fill="#777673" fontFamily="var(--font-mono)">Assessment Report</text>
          <text x="260" y="312" textAnchor="middle" fontSize="8" fill="#777673" fontFamily="var(--font-mono)">Risk Matrix</text>
          <text x="400" y="312" textAnchor="middle" fontSize="8" fill="#777673" fontFamily="var(--font-mono)">Strategic Roadmap</text>
          <text x="540" y="312" textAnchor="middle" fontSize="8" fill="#777673" fontFamily="var(--font-mono)">Implementation Plan</text>
          <text x="680" y="312" textAnchor="middle" fontSize="8" fill="#777673" fontFamily="var(--font-mono)">Quarterly Reviews</text>
          <text x="810" y="312" textAnchor="middle" fontSize="8" fill="#777673" fontFamily="var(--font-mono)">Optimization Report</text>

          {/* Deliverable markers */}
          {[120, 260, 400, 540, 680, 810].map((x, i) => (
            <circle key={i} cx={x} cy="295" r="3" fill="#3923c7" opacity="0.5" />
          ))}
        </g>

        {/* Timeline section */}
        <g>
          <text x="50" y="370" fontSize="9" fill="#777673" fontFamily="var(--font-mono)" style={{ textTransform: "uppercase", letterSpacing: "1.2px" }}>Typical engagement: 4-8 weeks to roadmap · Ongoing execution support</text>
          <rect x="50" y="380" width="800" height="6" rx="3" fill="#c7c3b2" opacity="0.3" />
          <rect x="50" y="380" width="300" height="6" rx="3" fill="url(#it-grad)" />
          <text x="50" y="402" fontSize="8" fill="#3923c7" fontFamily="var(--font-mono)">Discovery → Strategy (4-8 wks)</text>
          <text x="850" y="402" textAnchor="end" fontSize="8" fill="#777673" fontFamily="var(--font-mono)">Execution → Optimization (ongoing)</text>
        </g>
      </svg>
    </div>
  );
}