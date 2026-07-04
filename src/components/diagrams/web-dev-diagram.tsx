export function WebDevDiagram() {
  return (
    <div className="w-full max-w-[900px] mx-auto">
      <svg viewBox="0 0 900 440" className="w-full h-auto" role="img" aria-label="Web development architecture diagram showing React and Next.js frontend, REST and GraphQL APIs, Node.js backend, PostgreSQL and MongoDB data layers">
        <defs>
          <pattern id="web-grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#c7c3b2" strokeWidth="0.5" opacity="0.25" />
          </pattern>
          <linearGradient id="web-flow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3923c7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3923c7" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="900" height="440" fill="url(#web-grid)" />

        {/* Layer labels */}
        {[
          { y: 40, label: "FRONTEND" },
          { y: 160, label: "API LAYER" },
          { y: 280, label: "BACKEND" },
          { y: 380, label: "DATA" },
        ].map((l) => (
          <text key={l.label} x="15" y={l.y} fontSize="9" fill="#777673" fontFamily="var(--font-mono)" style={{ textTransform: "uppercase", letterSpacing: "1.2px" }}>{l.label}</text>
        ))}

        {/* Flow arrows */}
        <rect x="420" y="60" width="60" height="320" fill="url(#web-flow)" opacity="0.15" />

        {/* Frontend */}
        <g>
          <rect x="100" y="55" width="160" height="55" rx="4" fill="#fdfcf8" stroke="#3923c7" strokeWidth="1.5" />
          <text x="180" y="78" textAnchor="middle" fontSize="12" fill="#1d1b16" fontFamily="var(--font-body)">React + Next.js</text>
          <text x="180" y="93" textAnchor="middle" fontSize="9" fill="#777673" fontFamily="var(--font-mono)">SSR / SSG / ISR</text>
        </g>
        <g>
          <rect x="300" y="55" width="160" height="55" rx="4" fill="#fdfcf8" stroke="#3923c7" strokeWidth="1.5" />
          <text x="380" y="78" textAnchor="middle" fontSize="12" fill="#1d1b16" fontFamily="var(--font-body)">Tailwind CSS</text>
          <text x="380" y="93" textAnchor="middle" fontSize="9" fill="#777673" fontFamily="var(--font-mono)">Design system</text>
        </g>
        <g>
          <rect x="500" y="55" width="160" height="55" rx="4" fill="#fdfcf8" stroke="#3923c7" strokeWidth="1.5" />
          <text x="580" y="78" textAnchor="middle" fontSize="12" fill="#1d1b16" fontFamily="var(--font-body)">PWA</text>
          <text x="580" y="93" textAnchor="middle" fontSize="9" fill="#777673" fontFamily="var(--font-mono)">Offline + push</text>
        </g>
        <g>
          <rect x="700" y="55" width="160" height="55" rx="4" fill="#fdfcf8" stroke="#3923c7" strokeWidth="1.5" />
          <text x="780" y="78" textAnchor="middle" fontSize="12" fill="#1d1b16" fontFamily="var(--font-body)">TypeScript</text>
          <text x="780" y="93" textAnchor="middle" fontSize="9" fill="#777673" fontFamily="var(--font-mono)">Type safety</text>
        </g>

        {/* API Layer */}
        <g>
          <rect x="200" y="175" width="200" height="50" rx="4" fill="#3923c7" />
          <text x="300" y="197" textAnchor="middle" fontSize="12" fill="#ffffff" fontFamily="var(--font-body)">REST API</text>
          <text x="300" y="212" textAnchor="middle" fontSize="9" fill="#d7d3f4" fontFamily="var(--font-mono)">Express.js</text>
        </g>
        <g>
          <rect x="450" y="175" width="200" height="50" rx="4" fill="#3923c7" />
          <text x="550" y="197" textAnchor="middle" fontSize="12" fill="#ffffff" fontFamily="var(--font-body)">GraphQL API</text>
          <text x="550" y="212" textAnchor="middle" fontSize="9" fill="#d7d3f4" fontFamily="var(--font-mono)">Apollo Server</text>
        </g>

        {/* Backend */}
        <g>
          <rect x="120" y="295" width="140" height="50" rx="4" fill="#fdfcf8" stroke="#c7c3b2" strokeWidth="1" />
          <text x="190" y="317" textAnchor="middle" fontSize="11" fill="#1d1b16" fontFamily="var(--font-body)">Node.js</text>
          <text x="190" y="332" textAnchor="middle" fontSize="9" fill="#777673" fontFamily="var(--font-mono)">Runtime</text>
        </g>
        <g>
          <rect x="300" y="295" width="140" height="50" rx="4" fill="#fdfcf8" stroke="#c7c3b2" strokeWidth="1" />
          <text x="370" y="317" textAnchor="middle" fontSize="11" fill="#1d1b16" fontFamily="var(--font-body)">Redis</text>
          <text x="370" y="332" textAnchor="middle" fontSize="9" fill="#777673" fontFamily="var(--font-mono)">Cache / Queue</text>
        </g>
        <g>
          <rect x="480" y="295" width="140" height="50" rx="4" fill="#fdfcf8" stroke="#c7c3b2" strokeWidth="1" />
          <text x="550" y="317" textAnchor="middle" fontSize="11" fill="#1d1b16" fontFamily="var(--font-body)">Stripe</text>
          <text x="550" y="332" textAnchor="middle" fontSize="9" fill="#777673" fontFamily="var(--font-mono)">Payments</text>
        </g>
        <g>
          <rect x="660" y="295" width="140" height="50" rx="4" fill="#fdfcf8" stroke="#c7c3b2" strokeWidth="1" />
          <text x="730" y="317" textAnchor="middle" fontSize="11" fill="#1d1b16" fontFamily="var(--font-body)">AWS S3</text>
          <text x="730" y="332" textAnchor="middle" fontSize="9" fill="#777673" fontFamily="var(--font-mono)">File storage</text>
        </g>

        {/* Data */}
        <g>
          <rect x="250" y="385" width="180" height="45" rx="4" fill="#1d1b16" stroke="#3923c7" strokeWidth="1.5" />
          <text x="340" y="406" textAnchor="middle" fontSize="12" fill="#ffffff" fontFamily="var(--font-body)">PostgreSQL</text>
          <text x="340" y="420" textAnchor="middle" fontSize="9" fill="#a5a4a2" fontFamily="var(--font-mono)">Primary database</text>
        </g>
        <g>
          <rect x="480" y="385" width="180" height="45" rx="4" fill="#1d1b16" stroke="#3923c7" strokeWidth="1.5" />
          <text x="570" y="406" textAnchor="middle" fontSize="12" fill="#ffffff" fontFamily="var(--font-body)">MongoDB</text>
          <text x="570" y="420" textAnchor="middle" fontSize="9" fill="#a5a4a2" fontFamily="var(--font-mono)">Document store</text>
        </g>

        {/* Connections */}
        <line x1="180" y1="110" x2="300" y2="175" stroke="#3923c7" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
        <line x1="380" y1="110" x2="300" y2="175" stroke="#3923c7" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
        <line x1="580" y1="110" x2="550" y2="175" stroke="#3923c7" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
        <line x1="300" y1="225" x2="190" y2="295" stroke="#3923c7" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
        <line x1="300" y1="225" x2="370" y2="295" stroke="#3923c7" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
        <line x1="550" y1="225" x2="550" y2="295" stroke="#3923c7" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
        <line x1="190" y1="345" x2="340" y2="385" stroke="#c7c3b2" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
        <line x1="370" y1="345" x2="340" y2="385" stroke="#c7c3b2" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
        <line x1="550" y1="345" x2="570" y2="385" stroke="#c7c3b2" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
      </svg>
    </div>
  );
}