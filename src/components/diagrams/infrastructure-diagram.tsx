export function InfrastructureDiagram() {
  return (
    <div className="w-full max-w-[900px] mx-auto">
      <svg viewBox="0 0 900 520" className="w-full h-auto" role="img" aria-label="Technioz full-stack infrastructure architecture diagram showing client, edge, app layer, data, and cloud components">
        <defs>
          <linearGradient id="infra-flow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3923c7" stopOpacity="0" />
            <stop offset="50%" stopColor="#3923c7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3923c7" stopOpacity="0" />
          </linearGradient>
          <pattern id="infra-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#c7c3b2" strokeWidth="0.5" opacity="0.3" />
          </pattern>
        </defs>

        <rect width="900" height="520" fill="url(#infra-grid)" />

        {/* Layer labels */}
        <text x="20" y="30" className="font-mono" fontSize="10" fill="#777673" style={{ textTransform: "uppercase", letterSpacing: "1.2px" }}>CLIENT</text>
        <text x="20" y="120" className="font-mono" fontSize="10" fill="#777673" style={{ textTransform: "uppercase", letterSpacing: "1.2px" }}>EDGE</text>
        <text x="20" y="220" className="font-mono" fontSize="10" fill="#777673" style={{ textTransform: "uppercase", letterSpacing: "1.2px" }}>APP LAYER</text>
        <text x="20" y="340" className="font-mono" fontSize="10" fill="#777673" style={{ textTransform: "uppercase", letterSpacing: "1.2px" }}>DATA</text>
        <text x="20" y="440" className="font-mono" fontSize="10" fill="#777673" style={{ textTransform: "uppercase", letterSpacing: "1.2px" }}>CLOUD</text>

        {/* Flow lines (animated) */}
        <line x1="0" y1="75" x2="900" y2="75" stroke="url(#infra-flow)" strokeWidth="1" opacity="0.4" />
        <line x1="0" y1="170" x2="900" y2="170" stroke="url(#infra-flow)" strokeWidth="1" opacity="0.4" />
        <line x1="0" y1="290" x2="900" y2="290" stroke="url(#infra-flow)" strokeWidth="1" opacity="0.4" />
        <line x1="0" y1="390" x2="900" y2="390" stroke="url(#infra-flow)" strokeWidth="1" opacity="0.4" />

        {/* Client layer */}
        <g>
          <rect x="150" y="45" width="140" height="50" rx="4" fill="#fdfcf8" stroke="#3923c7" strokeWidth="1.5" />
          <text x="220" y="68" textAnchor="middle" fontSize="13" fill="#1d1b16" fontFamily="var(--font-body)">Web Browser</text>
          <text x="220" y="83" textAnchor="middle" fontSize="10" fill="#777673" fontFamily="var(--font-mono)">React / Next.js</text>
        </g>
        <g>
          <rect x="350" y="45" width="140" height="50" rx="4" fill="#fdfcf8" stroke="#3923c7" strokeWidth="1.5" />
          <text x="420" y="68" textAnchor="middle" fontSize="13" fill="#1d1b16" fontFamily="var(--font-body)">Mobile App</text>
          <text x="420" y="83" textAnchor="middle" fontSize="10" fill="#777673" fontFamily="var(--font-mono)">React Native / Flutter</text>
        </g>
        <g>
          <rect x="550" y="45" width="140" height="50" rx="4" fill="#fdfcf8" stroke="#3923c7" strokeWidth="1.5" />
          <text x="620" y="68" textAnchor="middle" fontSize="13" fill="#1d1b16" fontFamily="var(--font-body)">API Client</text>
          <text x="620" y="83" textAnchor="middle" fontSize="10" fill="#777673" fontFamily="var(--font-mono)">REST / GraphQL</text>
        </g>

        {/* Edge layer */}
        <g>
          <rect x="250" y="130" width="400" height="50" rx="4" fill="#3923c7" stroke="#3923c7" strokeWidth="1.5" />
          <text x="450" y="153" textAnchor="middle" fontSize="13" fill="#ffffff" fontFamily="var(--font-body)" fontWeight="500">CloudFront CDN + WAF + Rate Limiting</text>
          <text x="450" y="168" textAnchor="middle" fontSize="10" fill="#d7d3f4" fontFamily="var(--font-mono)">Global edge · TLS 1.3 · DDoS protection</text>
        </g>

        {/* App layer */}
        <g>
          <rect x="120" y="230" width="160" height="55" rx="4" fill="#fdfcf8" stroke="#c7c3b2" strokeWidth="1" />
          <text x="200" y="253" textAnchor="middle" fontSize="12" fill="#1d1b16" fontFamily="var(--font-body)">API Gateway</text>
          <text x="200" y="268" textAnchor="middle" fontSize="10" fill="#777673" fontFamily="var(--font-mono)">Express.js / FastAPI</text>
        </g>
        <g>
          <rect x="320" y="230" width="160" height="55" rx="4" fill="#fdfcf8" stroke="#c7c3b2" strokeWidth="1" />
          <text x="400" y="253" textAnchor="middle" fontSize="12" fill="#1d1b16" fontFamily="var(--font-body)">App Server</text>
          <text x="400" y="268" textAnchor="middle" fontSize="10" fill="#777673" fontFamily="var(--font-mono)">Node.js / Python</text>
        </g>
        <g>
          <rect x="520" y="230" width="160" height="55" rx="4" fill="#fdfcf8" stroke="#c7c3b2" strokeWidth="1" />
          <text x="600" y="253" textAnchor="middle" fontSize="12" fill="#1d1b16" fontFamily="var(--font-body)">Worker Queue</text>
          <text x="600" y="268" textAnchor="middle" fontSize="10" fill="#777673" fontFamily="var(--font-mono)">BullMQ / Celery</text>
        </g>
        <g>
          <rect x="720" y="230" width="140" height="55" rx="4" fill="#fdfcf8" stroke="#c7c3b2" strokeWidth="1" />
          <text x="790" y="253" textAnchor="middle" fontSize="12" fill="#1d1b16" fontFamily="var(--font-body)">WebSocket</text>
          <text x="790" y="268" textAnchor="middle" fontSize="10" fill="#777673" fontFamily="var(--font-mono)">Socket.io</text>
        </g>

        {/* Data layer */}
        <g>
          <rect x="150" y="345" width="130" height="50" rx="4" fill="#fdfcf8" stroke="#c7c3b2" strokeWidth="1" />
          <text x="215" y="368" textAnchor="middle" fontSize="12" fill="#1d1b16" fontFamily="var(--font-body)">PostgreSQL</text>
          <text x="215" y="383" textAnchor="middle" fontSize="10" fill="#777673" fontFamily="var(--font-mono)">Primary DB</text>
        </g>
        <g>
          <rect x="320" y="345" width="130" height="50" rx="4" fill="#fdfcf8" stroke="#c7c3b2" strokeWidth="1" />
          <text x="385" y="368" textAnchor="middle" fontSize="12" fill="#1d1b16" fontFamily="var(--font-body)">Redis</text>
          <text x="385" y="383" textAnchor="middle" fontSize="10" fill="#777673" fontFamily="var(--font-mono)">Cache / Sessions</text>
        </g>
        <g>
          <rect x="490" y="345" width="130" height="50" rx="4" fill="#fdfcf8" stroke="#c7c3b2" strokeWidth="1" />
          <text x="555" y="368" textAnchor="middle" fontSize="12" fill="#1d1b16" fontFamily="var(--font-body)">MongoDB</text>
          <text x="555" y="383" textAnchor="middle" fontSize="10" fill="#777673" fontFamily="var(--font-mono)">Document Store</text>
        </g>
        <g>
          <rect x="660" y="345" width="130" height="50" rx="4" fill="#fdfcf8" stroke="#c7c3b2" strokeWidth="1" />
          <text x="725" y="368" textAnchor="middle" fontSize="12" fill="#1d1b16" fontFamily="var(--font-body)">S3 Storage</text>
          <text x="725" y="383" textAnchor="middle" fontSize="10" fill="#777673" fontFamily="var(--font-mono)">Files / Backups</text>
        </g>

        {/* Cloud layer */}
        <g>
          <rect x="200" y="440" width="160" height="50" rx="4" fill="#1d1b16" stroke="#3923c7" strokeWidth="1.5" />
          <text x="280" y="463" textAnchor="middle" fontSize="12" fill="#ffffff" fontFamily="var(--font-body)">AWS EC2</text>
          <text x="280" y="478" textAnchor="middle" fontSize="10" fill="#a5a4a2" fontFamily="var(--font-mono)">Auto-scaling group</text>
        </g>
        <g>
          <rect x="400" y="440" width="160" height="50" rx="4" fill="#1d1b16" stroke="#3923c7" strokeWidth="1.5" />
          <text x="480" y="463" textAnchor="middle" fontSize="12" fill="#ffffff" fontFamily="var(--font-body)">AWS Lambda</text>
          <text x="480" y="478" textAnchor="middle" fontSize="10" fill="#a5a4a2" fontFamily="var(--font-mono)">Serverless functions</text>
        </g>
        <g>
          <rect x="600" y="440" width="160" height="50" rx="4" fill="#1d1b16" stroke="#3923c7" strokeWidth="1.5" />
          <text x="680" y="463" textAnchor="middle" fontSize="12" fill="#ffffff" fontFamily="var(--font-body)">Docker / K8s</text>
          <text x="680" y="478" textAnchor="middle" fontSize="10" fill="#a5a4a2" fontFamily="var(--font-mono)">Container orchestration</text>
        </g>

        {/* Connection lines */}
        {/* Client to Edge */}
        <line x1="220" y1="95" x2="350" y2="130" stroke="#3923c7" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
        <line x1="420" y1="95" x2="450" y2="130" stroke="#3923c7" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
        <line x1="620" y1="95" x2="550" y2="130" stroke="#3923c7" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />

        {/* Edge to App */}
        <line x1="350" y1="180" x2="200" y2="230" stroke="#3923c7" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
        <line x1="430" y1="180" x2="400" y2="230" stroke="#3923c7" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
        <line x1="500" y1="180" x2="600" y2="230" stroke="#3923c7" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
        <line x1="600" y1="180" x2="790" y2="230" stroke="#3923c7" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />

        {/* App to Data */}
        <line x1="200" y1="285" x2="215" y2="345" stroke="#c7c3b2" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
        <line x1="400" y1="285" x2="385" y2="345" stroke="#c7c3b2" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
        <line x1="600" y1="285" x2="555" y2="345" stroke="#c7c3b2" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
        <line x1="790" y1="285" x2="725" y2="345" stroke="#c7c3b2" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />

        {/* Data to Cloud */}
        <line x1="215" y1="395" x2="280" y2="440" stroke="#c7c3b2" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
        <line x1="385" y1="395" x2="480" y2="440" stroke="#c7c3b2" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
        <line x1="555" y1="395" x2="680" y2="440" stroke="#c7c3b2" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
        <line x1="725" y1="395" x2="680" y2="440" stroke="#c7c3b2" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
      </svg>
    </div>
  );
}