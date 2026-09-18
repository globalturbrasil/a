import React from 'react';

interface EmblemLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark' | 'gold-on-dark';
  showText?: boolean;
  textPosition?: 'right' | 'bottom';
  className?: string;
}

export const EmblemLogo: React.FC<EmblemLogoProps> = ({
  size = 'md',
  variant = 'light',
  showText = true,
  textPosition = 'right',
  className = '',
}) => {
  const sizeMap = {
    sm: { box: 36, textTitle: 'text-sm', textSubtitle: 'text-[9px]' },
    md: { box: 48, textTitle: 'text-lg', textSubtitle: 'text-[10px]' },
    lg: { box: 64, textTitle: 'text-2xl', textSubtitle: 'text-xs' },
    xl: { box: 88, textTitle: 'text-3xl', textSubtitle: 'text-sm' },
  };

  const currentSize = sizeMap[size];

  // Colors based on variant
  const isDarkBg = variant === 'gold-on-dark';
  const primaryTextColor = isDarkBg ? 'text-amber-100' : 'text-[#193126]';
  const subtitleTextColor = isDarkBg ? 'text-[#C5A059]' : 'text-[#8C6D2D]';

  return (
    <div
      className={`inline-flex items-center gap-3 ${
        textPosition === 'bottom' ? 'flex-col text-center' : 'flex-row text-left'
      } ${className}`}
    >
      {/* Precision SVG Vector Emblem */}
      <div
        className="relative shrink-0 flex items-center justify-center rounded-full p-1 transition-transform duration-300 hover:scale-105"
        style={{
          width: currentSize.box,
          height: currentSize.box,
        }}
      >
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Outer Medallion Glow / Ring */}
          <circle cx="100" cy="100" r="95" fill={isDarkBg ? '#12221A' : '#FAF9F5'} stroke="#C5A059" strokeWidth="2.5" strokeOpacity="0.4" />
          <circle cx="100" cy="100" r="90" stroke="#C5A059" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.6" />

          {/* Top Baroque Coronet / Laurel Crown */}
          <path
            d="M 100 24 
               C 96 32, 92 38, 86 42 
               C 89 45, 95 47, 100 48 
               C 105 47, 111 45, 114 42 
               C 108 38, 104 32, 100 24 Z"
            fill="#C5A059"
          />
          <circle cx="100" cy="22" r="3.5" fill="#D8B467" />
          <circle cx="84" cy="32" r="2.5" fill="#C5A059" />
          <circle cx="116" cy="32" r="2.5" fill="#C5A059" />

          {/* Lateral Scrollwork Flourishes */}
          <path
            d="M 68 52 C 54 48, 44 60, 52 74 C 58 64, 66 60, 74 62 Z"
            fill="#C5A059"
            fillOpacity="0.85"
          />
          <path
            d="M 132 52 C 146 48, 156 60, 148 74 C 142 64, 134 60, 126 62 Z"
            fill="#C5A059"
            fillOpacity="0.85"
          />

          {/* Side Foliage / Laurel Vines */}
          <path
            d="M 46 80 C 40 92, 42 108, 48 122 C 45 106, 50 94, 52 86 Z"
            fill="#C5A059"
            fillOpacity="0.7"
          />
          <path
            d="M 154 80 C 160 92, 158 108, 152 122 C 155 106, 150 94, 148 86 Z"
            fill="#C5A059"
            fillOpacity="0.7"
          />

          {/* Royal Shield Outline - Double Contoured */}
          <path
            d="M 100 45 
               C 125 45, 148 54, 150 78 
               C 152 118, 126 148, 100 166 
               C 74 148, 48 118, 50 78 
               C 52 54, 75 45, 100 45 Z"
            stroke="#C5A059"
            strokeWidth="3.5"
            strokeLinejoin="round"
            fill={isDarkBg ? '#162C22' : '#FFFFFF'}
          />
          <path
            d="M 100 52 
               C 120 52, 140 60, 142 80 
               C 144 114, 122 140, 100 156 
               C 78 140, 56 114, 58 80 
               C 60 60, 80 52, 100 52 Z"
            stroke="#D8B467"
            strokeWidth="1.2"
            strokeOpacity="0.75"
            fill="none"
          />

          {/* Letter 'K' with Classical Doric / Corinthian Column as the Main Stem */}
          <g id="Kirnev-K-Emblem">
            {/* Column Capital */}
            <rect x="73" y="74" width="22" height="4" rx="1.5" fill="#A8843E" />
            <rect x="76" y="78" width="16" height="3" fill="#C5A059" />

            {/* Column Shaft Flutes */}
            <rect x="78" y="81" width="12" height="52" fill="#D8B467" />
            {/* Fluting lines */}
            <line x1="81" y1="82" x2="81" y2="132" stroke="#A8843E" strokeWidth="1" />
            <line x1="84" y1="82" x2="84" y2="132" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.8" />
            <line x1="87" y1="82" x2="87" y2="132" stroke="#A8843E" strokeWidth="1" />

            {/* Column Base */}
            <rect x="76" y="133" width="16" height="3" fill="#C5A059" />
            <rect x="73" y="136" width="22" height="4" rx="1.5" fill="#A8843E" />

            {/* Upper Diagonal Arm of the K with classical serif terminators */}
            <path
              d="M 88 106 
                 L 118 78 
                 L 128 78 
                 L 128 85 
                 L 100 111 Z"
              fill="#C5A059"
            />
            {/* Upper Serif Accent */}
            <path d="M 116 76 L 130 76 L 128 84 Z" fill="#A8843E" />

            {/* Lower Diagonal Leg of the K with curved flared base */}
            <path
              d="M 94 104 
                 L 122 136 
                 L 132 136 
                 C 130 132, 126 128, 122 124 
                 L 104 102 Z"
              fill="#C5A059"
            />
            {/* Lower Serif Accent */}
            <path d="M 118 136 L 134 136 L 128 128 Z" fill="#A8843E" />
          </g>

          {/* Bottom Pendant Star / Accent */}
          <polygon
            points="100,172 102,176 106,177 103,180 104,184 100,182 96,184 97,180 94,177 98,176"
            fill="#C5A059"
          />
        </svg>
      </div>

      {/* Wordmark Typography */}
      {showText && (
        <div className="flex flex-col tracking-wider">
          <span
            className={`font-serif uppercase font-bold tracking-[0.18em] ${currentSize.textTitle} ${primaryTextColor} transition-colors`}
            style={{ fontFamily: "'Cinzel', 'Playfair Display', Georgia, serif" }}
          >
            KIRNEV
            <span className="ml-1.5 font-light tracking-[0.25em] text-[#C5A059]">ADVOCACIA</span>
          </span>
          <span
            className={`font-sans tracking-[0.14em] uppercase font-semibold ${currentSize.textSubtitle} ${subtitleTextColor}`}
          >
            Dra. Daiane Kirnev • Agronegócio & Cível
          </span>
        </div>
      )}
    </div>
  );
};
