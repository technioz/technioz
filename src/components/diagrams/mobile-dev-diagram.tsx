export function MobileDevDiagram() {
  return (
    <div className="w-full max-w-[900px] mx-auto">
      <svg viewBox="0 0 900 420" className="w-full h-auto" role="img" aria-label="Mobile app development architecture showing iOS, Android, React Native, and Flutter paths connected to backend APIs and databases">
        <defs>
          <pattern id="mob-grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#c7c3b2" strokeWidth="0.5" opacity="0.25" />
          </pattern>
        </defs>
        <rect width="900" height="420" fill="url(#mob-grid)" />

        {/* Labels */}
        {[
          { y: 35, label: "USER" },
          { y: 115, label: "PLATFORM" },
          { y: 215, label: "FRAMEWORK" },
          { y: 315, label: "BACKEND" },
        ].map((l) => (
          <text key={l.label} x="15" y={l.y} fontSize="9" fill="#777673" fontFamily="var(--font-mono)" style={{ textTransform: "uppercase", letterSpacing: "1.2px" }}>{l.label}</text>
        ))}

        {/* User devices */}
        <g>
          <rect x="120" y="50" width="140" height="50" rx="4" fill="#fdfcf8" stroke="#3923c7" strokeWidth="1.5" />
          <text x="190" y="72" textAnchor="middle" fontSize="12" fill="#1d1b16" fontFamily="var(--font-body)">iOS App</text>
          <text x="190" y="87" textAnchor="middle" fontSize="9" fill="#777673" fontFamily="var(--font-mono)">iPhone / iPad</text>
        </g>
        <g>
          <rect x="340" y="50" width="140" height="50" rx="4" fill="#fdfcf8" stroke="#3923c7" strokeWidth="1.5" />
          <text x="410" y="72" textAnchor="middle" fontSize="12" fill="#1d1b16" fontFamily="var(--font-body)">Android App</text>
          <text x="410" y="87" textAnchor="middle" fontSize="9" fill="#777673" fontFamily="var(--font-mono)">Phone / Tablet</text>
        </g>
        <g>
          <rect x="560" y="50" width="140" height="50" rx="4" fill="#fdfcf8" stroke="#3923c7" strokeWidth="1.5" />
          <text x="630" y="72" textAnchor="middle" fontSize="12" fill="#1d1b16" fontFamily="var(--font-body)">Web App</text>
          <text x="630" y="87" textAnchor="middle" fontSize="9" fill="#777673" fontFamily="var(--font-mono)">PWA</text>
        </g>

        {/* Platform layer — two paths */}
        {/* Native path */}
        <g>
          <rect x="80" y="130" width="150" height="45" rx="4" fill="#3923c7" opacity="0.85" />
          <text x="155" y="150" textAnchor="middle" fontSize="11" fill="#ffffff" fontFamily="var(--font-body)">Swift / SwiftUI</text>
          <text x="155" y="165" textAnchor="middle" fontSize="9" fill="#d7d3f4" fontFamily="var(--font-mono)">Native iOS</text>
        </g>
        <g>
          <rect x="250" y="130" width="150" height="45" rx="4" fill="#3923c7" opacity="0.85" />
          <text x="325" y="150" textAnchor="middle" fontSize="11" fill="#ffffff" fontFamily="var(--font-body)">Kotlin / Jetpack</text>
          <text x="325" y="165" textAnchor="middle" fontSize="9" fill="#d7d3f4" fontFamily="var(--font-mono)">Native Android</text>
        </g>

        {/* Cross-platform path */}
        <g>
          <rect x="440" y="130" width="160" height="45" rx="4" fill="#614fd2" opacity="0.85" />
          <text x="520" y="150" textAnchor="middle" fontSize="11" fill="#ffffff" fontFamily="var(--font-body)">React Native</text>
          <text x="520" y="165" textAnchor="middle" fontSize="9" fill="#d7d3f4" fontFamily="var(--font-mono)">Cross-platform</text>
        </g>
        <g>
          <rect x="620" y="130" width="160" height="45" rx="4" fill="#614fd2" opacity="0.85" />
          <text x="700" y="150" textAnchor="middle" fontSize="11" fill="#ffffff" fontFamily="var(--font-body)">Flutter / Dart</text>
          <text x="700" y="165" textAnchor="middle" fontSize="9" fill="#d7d3f4" fontFamily="var(--font-mono)">Cross-platform</text>
        </g>

        {/* Shared framework layer */}
        <g>
          <rect x="200" y="230" width="500" height="50" rx="4" fill="#1d1b16" stroke="#3923c7" strokeWidth="1.5" />
          <text x="450" y="252" textAnchor="middle" fontSize="12" fill="#ffffff" fontFamily="var(--font-body)">Shared Business Logic + State Management + API Layer</text>
          <text x="450" y="267" textAnchor="middle" fontSize="9" fill="#a5a4a2" fontFamily="var(--font-mono)">Redux / Zustand / TypeScript / REST / GraphQL</text>
        </g>

        {/* Backend services */}
        <g>
          <rect x="120" y="330" width="130" height="45" rx="4" fill="#fdfcf8" stroke="#c7c3b2" strokeWidth="1" />
          <text x="185" y="350" textAnchor="middle" fontSize="11" fill="#1d1b16" fontFamily="var(--font-body)">Node.js API</text>
          <text x="185" y="365" textAnchor="middle" fontSize="9" fill="#777673" fontFamily="var(--font-mono)">Express.js</text>
        </g>
        <g>
          <rect x="290" y="330" width="130" height="45" rx="4" fill="#fdfcf8" stroke="#c7c3b2" strokeWidth="1" />
          <text x="355" y="350" textAnchor="middle" fontSize="11" fill="#1d1b16" fontFamily="var(--font-body)">Firebase</text>
          <text x="355" y="365" textAnchor="middle" fontSize="9" fill="#777673" fontFamily="var(--font-mono)">Auth / Push / DB</text>
        </g>
        <g>
          <rect x="460" y="330" width="130" height="45" rx="4" fill="#fdfcf8" stroke="#c7c3b2" strokeWidth="1" />
          <text x="525" y="350" textAnchor="middle" fontSize="11" fill="#1d1b16" fontFamily="var(--font-body)">Stripe</text>
          <text x="525" y="365" textAnchor="middle" fontSize="9" fill="#777673" fontFamily="var(--font-mono)">Payments</text>
        </g>
        <g>
          <rect x="630" y="330" width="130" height="45" rx="4" fill="#fdfcf8" stroke="#c7c3b2" strokeWidth="1" />
          <text x="695" y="350" textAnchor="middle" fontSize="11" fill="#1d1b16" fontFamily="var(--font-body)">APNs / FCM</text>
          <text x="695" y="365" textAnchor="middle" fontSize="9" fill="#777673" fontFamily="var(--font-mono)">Push notifications</text>
        </g>

        {/* Connections */}
        <line x1="190" y1="100" x2="155" y2="130" stroke="#3923c7" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
        <line x1="190" y1="100" x2="520" y2="130" stroke="#3923c7" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
        <line x1="410" y1="100" x2="325" y2="130" stroke="#3923c7" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
        <line x1="410" y1="100" x2="520" y2="130" stroke="#3923c7" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
        <line x1="410" y1="100" x2="700" y2="130" stroke="#3923c7" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
        <line x1="630" y1="100" x2="700" y2="130" stroke="#3923c7" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
        <line x1="155" y1="175" x2="350" y2="230" stroke="#3923c7" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
        <line x1="325" y1="175" x2="400" y2="230" stroke="#3923c7" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
        <line x1="520" y1="175" x2="500" y2="230" stroke="#3923c7" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
        <line x1="700" y1="175" x2="550" y2="230" stroke="#3923c7" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
        <line x1="350" y1="280" x2="185" y2="330" stroke="#c7c3b2" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
        <line x1="400" y1="280" x2="355" y2="330" stroke="#c7c3b2" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
        <line x1="500" y1="280" x2="525" y2="330" stroke="#c7c3b2" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
        <line x1="550" y1="280" x2="695" y2="330" stroke="#c7c3b2" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />

        {/* Path labels */}
        <text x="200" y="200" fontSize="8" fill="#3923c7" fontFamily="var(--font-mono)" style={{ textTransform: "uppercase" }}>Native path</text>
        <text x="560" y="200" fontSize="8" fill="#614fd2" fontFamily="var(--font-mono)" style={{ textTransform: "uppercase" }}>Cross-platform path</text>
      </svg>
    </div>
  );
}