interface LogoProps {
  variant?: 'light' | 'dark';
  size?: number;
  withWordmark?: boolean;
}

export function Logo({ variant = 'dark', size = 72, withWordmark = false }: LogoProps) {
  const aspectRatio = 80 / 72;
  const height = size * aspectRatio;

  if (variant === 'light') {
    return (
      <div className="flex items-center gap-6">
        <svg width={size} height={height} viewBox="0 0 72 80" fill="none">
          <defs>
            <linearGradient id="g1-light" x1="0" y1="0" x2="72" y2="80" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3b6fe8"/>
              <stop offset="100%" stopColor="#0f1f8c"/>
            </linearGradient>
            <linearGradient id="g2-light" x1="0" y1="0" x2="72" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3b6fe8"/>
              <stop offset="100%" stopColor="#1a3ac0"/>
            </linearGradient>
          </defs>
          <line x1="36" y1="8" x2="8" y2="70" stroke="url(#g1-light)" strokeWidth="8" strokeLinecap="round"/>
          <line x1="36" y1="8" x2="64" y2="70" stroke="url(#g1-light)" strokeWidth="8" strokeLinecap="round"/>
          <line x1="20" y1="46" x2="52" y2="46" stroke="url(#g2-light)" strokeWidth="7" strokeLinecap="round"/>
          <circle cx="36" cy="8" r="7" fill="#5b9bff"/>
          <circle cx="36" cy="8" r="3.5" fill="white"/>
          <circle cx="20" cy="46" r="6" fill="#3b6fe8"/>
          <circle cx="20" cy="46" r="3" fill="white"/>
          <circle cx="52" cy="46" r="6" fill="#3b6fe8"/>
          <circle cx="52" cy="46" r="3" fill="white"/>
          <circle cx="8" cy="70" r="5" fill="#1a3ac0"/>
          <circle cx="8" cy="70" r="2.5" fill="white" opacity="0.7"/>
          <circle cx="64" cy="70" r="5" fill="#1a3ac0"/>
          <circle cx="64" cy="70" r="2.5" fill="white" opacity="0.7"/>
        </svg>
        
        {withWordmark && (
          <div className="flex flex-col gap-1">
            <span className="text-[42px] font-bold text-[#0f1f5c] tracking-tight leading-none">
              Algoryn
            </span>
            <span className="text-xs text-[#7a8ab0] tracking-wider">
              Simple tools for serious infrastructure.
            </span>
          </div>
        )}
      </div>
    );
  }

  // Dark variant
  return (
    <div className="flex items-center gap-6">
      <svg width={size} height={height} viewBox="0 0 72 80" fill="none">
        <defs>
          <linearGradient id="gd1-dark" x1="0" y1="0" x2="72" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#5b9bff"/>
            <stop offset="100%" stopColor="#2a4fe8"/>
          </linearGradient>
          <linearGradient id="gd2-dark" x1="0" y1="0" x2="72" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4a80f0"/>
            <stop offset="100%" stopColor="#2a4fe8"/>
          </linearGradient>
        </defs>
        <line x1="36" y1="8" x2="8" y2="70" stroke="url(#gd1-dark)" strokeWidth="8" strokeLinecap="round"/>
        <line x1="36" y1="8" x2="64" y2="70" stroke="url(#gd1-dark)" strokeWidth="8" strokeLinecap="round"/>
        <line x1="20" y1="46" x2="52" y2="46" stroke="url(#gd2-dark)" strokeWidth="7" strokeLinecap="round"/>
        <circle cx="36" cy="8" r="9" fill="#5b9bff" opacity="0.2"/>
        <circle cx="36" cy="8" r="7" fill="#7bb5ff"/>
        <circle cx="36" cy="8" r="3.5" fill="white"/>
        <circle cx="20" cy="46" r="6" fill="#4a80f0"/>
        <circle cx="20" cy="46" r="3" fill="white" opacity="0.9"/>
        <circle cx="52" cy="46" r="6" fill="#4a80f0"/>
        <circle cx="52" cy="46" r="3" fill="white" opacity="0.9"/>
        <circle cx="8" cy="70" r="5" fill="#2a4fe8"/>
        <circle cx="8" cy="70" r="2.5" fill="white" opacity="0.5"/>
        <circle cx="64" cy="70" r="5" fill="#2a4fe8"/>
        <circle cx="64" cy="70" r="2.5" fill="white" opacity="0.5"/>
      </svg>

      {withWordmark && (
        <div className="flex flex-col gap-1">
          <span className="text-[42px] font-bold text-white tracking-tight leading-none">
            Algoryn
          </span>
          <span className="text-xs text-[#5a6a90] tracking-wider">
            Simple tools for serious infrastructure.
          </span>
        </div>
      )}
    </div>
  );
}
