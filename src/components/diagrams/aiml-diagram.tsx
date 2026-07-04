export function AIMLDiagram() {
  return (
    <div className="w-full max-w-[900px] mx-auto">
      <svg viewBox="0 0 900 440" className="w-full h-auto" role="img" aria-label="AI and machine learning pipeline diagram showing data collection, preprocessing, model training, evaluation, and deployment stages">
        <defs>
          <pattern id="ai-grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#c7c3b2" strokeWidth="0.5" opacity="0.25" />
          </pattern>
          <linearGradient id="ai-flow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3923c7" stopOpacity="0" />
            <stop offset="50%" stopColor="#3923c7" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#3923c7" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="900" height="440" fill="url(#ai-grid)" />

        {/* Flow line */}
        <line x1="0" y1="220" x2="900" y2="220" stroke="url(#ai-flow)" strokeWidth="1" />

        {/* Stage labels */}
        {[
          { x: 90, label: "DATA" },
          { x: 270, label: "PREPROCESS" },
          { x: 450, label: "TRAIN" },
          { x: 630, label: "EVALUATE" },
          { x: 810, label: "DEPLOY" },
        ].map((l) => (
          <text key={l.label} x={l.x} y={20} textAnchor="middle" fontSize="9" fill="#777673" fontFamily="var(--font-mono)" style={{ textTransform: "uppercase", letterSpacing: "1.2px" }}>{l.label}</text>
        ))}

        {/* Stage 1: Data */}
        <g>
          <rect x="30" y="40" width="130" height="50" rx="4" fill="#fdfcf8" stroke="#3923c7" strokeWidth="1.5" />
          <text x="95" y="62" textAnchor="middle" fontSize="11" fill="#1d1b16" fontFamily="var(--font-body)">Data Collection</text>
          <text x="95" y="77" textAnchor="middle" fontSize="9" fill="#777673" fontFamily="var(--font-mono)">Web / API / DB</text>
        </g>
        <g>
          <rect x="30" y="110" width="130" height="50" rx="4" fill="#fdfcf8" stroke="#3923c7" strokeWidth="1.5" />
          <text x="95" y="132" textAnchor="middle" fontSize="11" fill="#1d1b16" fontFamily="var(--font-body)">Labeling</text>
          <text x="95" y="147" textAnchor="middle" fontSize="9" fill="#777673" fontFamily="var(--font-mono)">Manual + auto</text>
        </g>
        <g>
          <rect x="30" y="310" width="130" height="50" rx="4" fill="#fdfcf8" stroke="#3923c7" strokeWidth="1.5" />
          <text x="95" y="332" textAnchor="middle" fontSize="11" fill="#1d1b16" fontFamily="var(--font-body)">Storage</text>
          <text x="95" y="347" textAnchor="middle" fontSize="9" fill="#777673" fontFamily="var(--font-mono)">S3 / PostgreSQL</text>
        </g>

        {/* Stage 2: Preprocess */}
        <g>
          <rect x="200" y="40" width="140" height="50" rx="4" fill="#fdfcf8" stroke="#c7c3b2" strokeWidth="1" />
          <text x="270" y="62" textAnchor="middle" fontSize="11" fill="#1d1b16" fontFamily="var(--font-body)">Cleaning</text>
          <text x="270" y="77" textAnchor="middle" fontSize="9" fill="#777673" fontFamily="var(--font-mono)">Outliers / nulls</text>
        </g>
        <g>
          <rect x="200" y="110" width="140" height="50" rx="4" fill="#fdfcf8" stroke="#c7c3b2" strokeWidth="1" />
          <text x="270" y="132" textAnchor="middle" fontSize="11" fill="#1d1b16" fontFamily="var(--font-body)">Feature Eng.</text>
          <text x="270" y="147" textAnchor="middle" fontSize="9" fill="#777673" fontFamily="var(--font-mono)">Transform / encode</text>
        </g>
        <g>
          <rect x="200" y="310" width="140" height="50" rx="4" fill="#fdfcf8" stroke="#c7c3b2" strokeWidth="1" />
          <text x="270" y="332" textAnchor="middle" fontSize="11" fill="#1d1b16" fontFamily="var(--font-body)">Tokenization</text>
          <text x="270" y="347" textAnchor="middle" fontSize="9" fill="#777673" fontFamily="var(--font-mono)">NLP / BERT</text>
        </g>

        {/* Stage 3: Train */}
        <g>
          <rect x="380" y="55" width="140" height="50" rx="4" fill="#3923c7" />
          <text x="450" y="77" textAnchor="middle" fontSize="11" fill="#ffffff" fontFamily="var(--font-body)">Model Training</text>
          <text x="450" y="92" textAnchor="middle" fontSize="9" fill="#d7d3f4" fontFamily="var(--font-mono)">TensorFlow / PyTorch</text>
        </g>
        <g>
          <rect x="380" y="125" width="140" height="50" rx="4" fill="#3923c7" />
          <text x="450" y="147" textAnchor="middle" fontSize="11" fill="#ffffff" fontFamily="var(--font-body)">Fine-tuning</text>
          <text x="450" y="162" textAnchor="middle" fontSize="9" fill="#d7d3f4" fontFamily="var(--font-mono)">Transfer learning</text>
        </g>
        <g>
          <rect x="380" y="295" width="140" height="50" rx="4" fill="#3923c7" />
          <text x="450" y="317" textAnchor="middle" fontSize="11" fill="#ffffff" fontFamily="var(--font-body)">Hyperparams</text>
          <text x="450" y="332" textAnchor="middle" fontSize="9" fill="#d7d3f4" fontFamily="var(--font-mono)">XGBoost / GridSearch</text>
        </g>

        {/* Stage 4: Evaluate */}
        <g>
          <rect x="560" y="55" width="140" height="50" rx="4" fill="#fdfcf8" stroke="#c7c3b2" strokeWidth="1" />
          <text x="630" y="77" textAnchor="middle" fontSize="11" fill="#1d1b16" fontFamily="var(--font-body)">Validation</text>
          <text x="630" y="92" textAnchor="middle" fontSize="9" fill="#777673" fontFamily="var(--font-mono)">Cross-validation</text>
        </g>
        <g>
          <rect x="560" y="125" width="140" height="50" rx="4" fill="#fdfcf8" stroke="#c7c3b2" strokeWidth="1" />
          <text x="630" y="147" textAnchor="middle" fontSize="11" fill="#1d1b16" fontFamily="var(--font-body)">Metrics</text>
          <text x="630" y="162" textAnchor="middle" fontSize="9" fill="#777673" fontFamily="var(--font-mono)">F1 / AUC / RMSE</text>
        </g>
        <g>
          <rect x="560" y="295" width="140" height="50" rx="4" fill="#fdfcf8" stroke="#c7c3b2" strokeWidth="1" />
          <text x="630" y="317" textAnchor="middle" fontSize="11" fill="#1d1b16" fontFamily="var(--font-body)">A/B Testing</text>
          <text x="630" y="332" textAnchor="middle" fontSize="9" fill="#777673" fontFamily="var(--font-mono)">Champion vs challenger</text>
        </g>

        {/* Stage 5: Deploy */}
        <g>
          <rect x="740" y="55" width="130" height="50" rx="4" fill="#1d1b16" stroke="#3923c7" strokeWidth="1.5" />
          <text x="805" y="77" textAnchor="middle" fontSize="11" fill="#ffffff" fontFamily="var(--font-body)">API Endpoint</text>
          <text x="805" y="92" textAnchor="middle" fontSize="9" fill="#a5a4a2" fontFamily="var(--font-mono)">FastAPI / Flask</text>
        </g>
        <g>
          <rect x="740" y="125" width="130" height="50" rx="4" fill="#1d1b16" stroke="#3923c7" strokeWidth="1.5" />
          <text x="805" y="147" textAnchor="middle" fontSize="11" fill="#ffffff" fontFamily="var(--font-body)">Monitoring</text>
          <text x="805" y="162" textAnchor="middle" fontSize="9" fill="#a5a4a2" fontFamily="var(--font-mono)">Drift detection</text>
        </g>
        <g>
          <rect x="740" y="295" width="130" height="50" rx="4" fill="#1d1b16" stroke="#3923c7" strokeWidth="1.5" />
          <text x="805" y="317" textAnchor="middle" fontSize="11" fill="#ffffff" fontFamily="var(--font-body)">Retraining</text>
          <text x="805" y="332" textAnchor="middle" fontSize="9" fill="#a5a4a2" fontFamily="var(--font-mono)">CI/CD pipeline</text>
        </g>

        {/* Flow arrows */}
        {[95, 270, 450, 630, 805].map((x, i) => {
          if (i < 4) return <line key={i} x1={x + 65} y1="220" x2={x + 135} y2="220" stroke="#3923c7" strokeWidth="1.5" opacity="0.3" markerEnd="url(#ai-arrow)" />;
        })}
        <defs>
          <marker id="ai-arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6" fill="#3923c7" opacity="0.4" />
          </marker>
        </defs>

        {/* Connections within stages */}
        <line x1="95" y1="90" x2="95" y2="110" stroke="#c7c3b2" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />
        <line x1="270" y1="90" x2="270" y2="110" stroke="#c7c3b2" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />
        <line x1="450" y1="105" x2="450" y2="125" stroke="#c7c3b2" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />
        <line x1="630" y1="105" x2="630" y2="125" stroke="#c7c3b2" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />
        <line x1="805" y1="105" x2="805" y2="125" stroke="#c7c3b2" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />

        {/* Feedback loop */}
        <path d="M 805 345 Q 600 410, 450 370 Q 300 360, 95 345" fill="none" stroke="#3923c7" strokeWidth="1" strokeDasharray="5 3" opacity="0.3" />
        <text x="450" y="415" textAnchor="middle" fontSize="9" fill="#3923c7" fontFamily="var(--font-mono)" style={{ textTransform: "uppercase" }}>Continuous feedback loop</text>
      </svg>
    </div>
  );
}