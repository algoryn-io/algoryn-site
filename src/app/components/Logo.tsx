interface LogoProps {
  variant?: 'light' | 'dark';
  size?: number;
  withWordmark?: boolean;
}

export function Logo({ variant = 'dark', size = 72, withWordmark = false }: LogoProps) {
  const w = size * (96 / 80);
  const h = size;
  const gap = size > 40 ? 18 : 12;
  const wordmarkSize = Math.round(size * 0.62);

  if (variant === 'light') {
    return (
      <div className="flex items-center" style={{ gap }}>
        <svg width={w} height={h} viewBox="0 0 96 80" fill="none" role="img" aria-label="Algoryn">
          <defs>
            <linearGradient id="lg-a-light" x1="30" y1="18" x2="66" y2="66" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3B6FE8"/>
              <stop offset="100%" stopColor="#0F1F8C"/>
            </linearGradient>
          </defs>
          {/* Prompt > */}
          <path d="M10 28 L20 40 L10 52" stroke="#3B6FE8" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          {/* Bracket ] */}
          <path d="M78 20 L86 20 L86 60 L78 60" stroke="#3B6FE8" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          {/* A as circuit graph */}
          <line x1="48" y1="22" x2="30" y2="62" stroke="url(#lg-a-light)" strokeWidth="5.5" strokeLinecap="round"/>
          <line x1="48" y1="22" x2="66" y2="62" stroke="url(#lg-a-light)" strokeWidth="5.5" strokeLinecap="round"/>
          <line x1="38" y1="46" x2="58" y2="46" stroke="url(#lg-a-light)" strokeWidth="5" strokeLinecap="round"/>
          {/* Apex node */}
          <circle cx="48" cy="22" r="7" fill="#3B6FE8" opacity="0.15"/>
          <circle cx="48" cy="22" r="5" fill="#5B9BFF"/>
          <circle cx="48" cy="22" r="2.2" fill="white"/>
          {/* Foot nodes */}
          <circle cx="30" cy="62" r="4" fill="#1A3AC0"/>
          <circle cx="30" cy="62" r="1.6" fill="white" opacity="0.8"/>
          <circle cx="66" cy="62" r="4" fill="#1A3AC0"/>
          <circle cx="66" cy="62" r="1.6" fill="white" opacity="0.8"/>
        </svg>

        {withWordmark && (
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: wordmarkSize,
              letterSpacing: '-0.03em',
              color: '#0F1F5C',
              lineHeight: 1,
            }}
          >
            Algoryn
          </span>
        )}
      </div>
    );
  }

  // Dark variant
  return (
    <div className="flex items-center" style={{ gap }}>
      <svg width={w} height={h} viewBox="0 0 96 80" fill="none" role="img" aria-label="Algoryn">
        <defs>
          <linearGradient id="lg-a-dark" x1="30" y1="18" x2="66" y2="66" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#7BB5FF"/>
            <stop offset="100%" stopColor="#2A4FE8"/>
          </linearGradient>
        </defs>
        {/* Prompt > */}
        <path d="M10 28 L20 40 L10 52" stroke="#5B9BFF" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        {/* Bracket ] */}
        <path d="M78 20 L86 20 L86 60 L78 60" stroke="#5B9BFF" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        {/* A as circuit graph */}
        <line x1="48" y1="22" x2="30" y2="62" stroke="url(#lg-a-dark)" strokeWidth="5.5" strokeLinecap="round"/>
        <line x1="48" y1="22" x2="66" y2="62" stroke="url(#lg-a-dark)" strokeWidth="5.5" strokeLinecap="round"/>
        <line x1="38" y1="46" x2="58" y2="46" stroke="url(#lg-a-dark)" strokeWidth="5" strokeLinecap="round"/>
        {/* Apex node */}
        <circle cx="48" cy="22" r="7" fill="#5B9BFF" opacity="0.25"/>
        <circle cx="48" cy="22" r="5" fill="#BFD9FF"/>
        <circle cx="48" cy="22" r="2.2" fill="white"/>
        {/* Foot nodes */}
        <circle cx="30" cy="62" r="4" fill="#4A80F0"/>
        <circle cx="30" cy="62" r="1.6" fill="white" opacity="0.9"/>
        <circle cx="66" cy="62" r="4" fill="#4A80F0"/>
        <circle cx="66" cy="62" r="1.6" fill="white" opacity="0.9"/>
      </svg>

      {withWordmark && (
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: wordmarkSize,
            letterSpacing: '-0.03em',
            color: '#fff',
            lineHeight: 1,
          }}
        >
          Algoryn
        </span>
      )}
    </div>
  );
}
