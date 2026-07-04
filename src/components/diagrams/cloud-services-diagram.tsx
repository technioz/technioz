export function CloudServicesDiagram() {
  return (
    <div className="w-full max-w-[900px] mx-auto">
      <svg viewBox="0 0 900 440" className="w-full h-auto" role="img" aria-label="Cloud services architecture showing Git source, CI/CD pipeline, Kubernetes orchestration, and deployment across AWS, Azure, and Google Cloud">
        <defs>
          <pattern id="cloud-grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#c7c3b2" strokeWidth="0.5" opacity="0.25" />
          </pattern>
        </defs>
        <rect width="900" height="440" fill="url(#cloud-grid)" />

        {/* Labels */}
        {[
          { y: 35, label: "SOURCE" },
          { y: 115, label: "CI/CD" },
          { y: 215, label: "ORCHESTRATION" },
          { y: 315, label: "CLOUD PROVIDERS" },
        ].map((l) => (
          <text key={l.label} x="15" y={l.y} fontSize="9" fill="#777673" fontFamily="var(--font-mono)" style={{ textTransform: "uppercase", letterSpacing: "1.2px" }}>{l.label}</text>
        ))}

        {/* Source */}
        <g>
          <rect x="200" y="50" width="160" height="50" rx="4" fill="#fdfcf8" stroke="#3923c7" strokeWidth="1.5" />
          <text x="280" y="72" textAnchor="middle" fontSize="12" fill="#1d1b16" fontFamily="var(--font-body)">Git Repository</text>
          <text x="280" y="87" textAnchor="middle" fontSize="9" fill="#777673" fontFamily="var(--font-mono)">GitHub / GitLab</text>
        </g>
        <g>
          <rect x="420" y="50" width="160" height="50" rx="4" fill="#fdfcf8" stroke="#3923c7" strokeWidth="1.5" />
          <text x="500" y="72" textAnchor="middle" fontSize="12" fill="#1d1b16" fontFamily="var(--font-body)">Docker Image</text>
          <text x="500" y="87" textAnchor="middle" fontSize="9" fill="#777673" fontFamily="var(--font-mono)">Containerized app</text>
        </g>
        <g>
          <rect x="640" y="50" width="160" height="50" rx="4" fill="#fdfcf8" stroke="#3923c7" strokeWidth="1.5" />
          <text x="720" y="72" textAnchor="middle" fontSize="12" fill="#1d1b16" fontFamily="var(--font-body)">Terraform</text>
          <text x="720" y="87" textAnchor="middle" fontSize="9" fill="#777673" fontFamily="var(--font-mono)">Infra as code</text>
        </g>

        {/* CI/CD */}
        <g>
          <rect x="150" y="130" width="260" height="50" rx="4" fill="#3923c7" />
          <text x="280" y="152" textAnchor="middle" fontSize="12" fill="#ffffff" fontFamily="var(--font-body)">CI/CD Pipeline</text>
          <text x="280" y="167" textAnchor="middle" fontSize="9" fill="#d7d3f4" fontFamily="var(--font-mono)">Build → Test → Scan → Deploy</text>
        </g>
        <g>
          <rect x="460" y="130" width="260" height="50" rx="4" fill="#3923c7" />
          <text x="590" y="152" textAnchor="middle" fontSize="12" fill="#ffffff" fontFamily="var(--font-body)">Blue-Green Deployment</text>
          <text x="590" y="167" textAnchor="middle" fontSize="9" fill="#d7d3f4" fontFamily="var(--font-mono)">Zero downtime releases</text>
        </g>

        {/* Orchestration */}
        <g>
          <rect x="120" y="230" width="180" height="55" rx="4" fill="#1d1b16" stroke="#3923c7" strokeWidth="1.5" />
          <text x="210" y="252" textAnchor="middle" fontSize="12" fill="#ffffff" fontFamily="var(--font-body)">Kubernetes</text>
          <text x="210" y="267" textAnchor="middle" fontSize="9" fill="#a5a4a2" fontFamily="var(--font-mono)">EKS / AKS / GKE</text>
        </g>
        <g>
          <rect x="340" y="230" width="180" height="55" rx="4" fill="#1d1b16" stroke="#3923c7" strokeWidth="1.5" />
          <text x="430" y="252" textAnchor="middle" fontSize="12" fill="#ffffff" fontFamily="var(--font-body)">Serverless</text>
          <text x="430" y="267" textAnchor="middle" fontSize="9" fill="#a5a4a2" fontFamily="var(--font-mono)">Lambda / Functions</text>
        </g>
        <g>
          <rect x="560" y="230" width="180" height="55" rx="4" fill="#1d1b16" stroke="#3923c7" strokeWidth="1.5" />
          <text x="650" y="252" textAnchor="middle" fontSize="12" fill="#ffffff" fontFamily="var(--font-body)">Auto-scaling</text>
          <text x="650" y="267" textAnchor="middle" fontSize="9" fill="#a5a4a2" fontFamily="var(--font-mono)">HPA / KEDA</text>
        </g>

        {/* Cloud providers */}
        <g>
          <rect x="100" y="330" width="200" height="55" rx="4" fill="#fdfcf8" stroke="#3923c7" strokeWidth="1.5" />
          <text x="200" y="352" textAnchor="middle" fontSize="12" fill="#1d1b16" fontFamily="var(--font-body)">AWS</text>
          <text x="200" y="367" textAnchor="middle" fontSize="9" fill="#777673" fontFamily="var(--font-mono)">EC2 / S3 / RDS / Lambda</text>
        </g>
        <g>
          <rect x="340" y="330" width="200" height="55" rx="4" fill="#fdfcf8" stroke="#3923c7" strokeWidth="1.5" />
          <text x="440" y="352" textAnchor="middle" fontSize="12" fill="#1d1b16" fontFamily="var(--font-body)">Azure</text>
          <text x="440" y="367" textAnchor="middle" fontSize="9" fill="#777673" fontFamily="var(--font-mono)">VMs / AKS / Functions</text>
        </g>
        <g>
          <rect x="580" y="330" width="200" height="55" rx="4" fill="#fdfcf8" stroke="#3923c7" strokeWidth="1.5" />
          <text x="680" y="352" textAnchor="middle" fontSize="12" fill="#1d1b16" fontFamily="var(--font-body)">Google Cloud</text>
          <text x="680" y="367" textAnchor="middle" fontSize="9" fill="#777673" fontFamily="var(--font-mono)">GKE / Cloud Functions</text>
        </g>

        {/* Monitoring badge */}
        <g>
          <rect x="100" y="405" width="680" height="25" rx="4" fill="#3923c7" opacity="0.1" />
          <text x="440" y="422" textAnchor="middle" fontSize="10" fill="#3923c7" fontFamily="var(--font-mono)">Monitoring: CloudWatch + Prometheus + Grafana + Alerting + Log Aggregation</text>
        </g>

        {/* Connections */}
        <line x1="280" y1="100" x2="280" y2="130" stroke="#3923c7" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
        <line x1="500" y1="100" x2="280" y2="130" stroke="#3923c7" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
        <line x1="720" y1="100" x2="590" y2="130" stroke="#3923c7" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
        <line x1="280" y1="180" x2="210" y2="230" stroke="#3923c7" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
        <line x1="280" y1="180" x2="430" y2="230" stroke="#3923c7" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
        <line x1="590" y1="180" x2="650" y2="230" stroke="#3923c7" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
        <line x1="210" y1="285" x2="200" y2="330" stroke="#c7c3b2" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
        <line x1="430" y1="285" x2="440" y2="330" stroke="#c7c3b2" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
        <line x1="650" y1="285" x2="680" y2="330" stroke="#c7c3b2" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
      </svg>
    </div>
  );
}