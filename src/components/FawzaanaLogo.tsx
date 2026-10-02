import React from 'react';

interface FawzaanaLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const FawzaanaLogo: React.FC<FawzaanaLogoProps> = ({
  className = '',
  size = 40,
  showText = false
}) => {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Authentic Gold Circular Crest */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:rotate-2 hover:scale-105"
      >
        <defs>
          <linearGradient id="goldRim" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F9E2A8" />
            <stop offset="35%" stopColor="#DFBA73" />
            <stop offset="65%" stopColor="#8A6321" />
            <stop offset="100%" stopColor="#D8B167" />
          </linearGradient>
          <radialGradient id="badgeBg" cx="50%" cy="45%" r="50%">
            <stop offset="0%" stopColor="#1E1C18" />
            <stop offset="70%" stopColor="#0E0D0B" />
            <stop offset="100%" stopColor="#050504" />
          </radialGradient>
          <linearGradient id="goldText" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF2D1" />
            <stop offset="50%" stopColor="#DEB66E" />
            <stop offset="100%" stopColor="#9C7328" />
          </linearGradient>
        </defs>

        {/* Outer Golden Ring */}
        <circle cx="100" cy="100" r="96" stroke="url(#goldRim)" strokeWidth="6" />
        <circle cx="100" cy="100" r="91" stroke="#5E4316" strokeWidth="1.5" />

        {/* Inner Black Field */}
        <circle cx="100" cy="100" r="90" fill="url(#badgeBg)" />
        <circle cx="100" cy="100" r="86" stroke="url(#goldRim)" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />

        {/* Top "FT" & Furniture Monogram */}
        <g transform="translate(68, 28) scale(0.68)">
          {/* Stylized 'F' */}
          <path
            d="M 5 5 H 55 V 17 H 22 V 35 H 48 V 47 H 22 V 80 H 6 Z"
            fill="url(#goldRim)"
          />
          {/* Stylized 'T' with chair & desk */}
          <path
            d="M 38 17 H 90 V 5 H 30 V 17 Z"
            fill="url(#goldRim)"
          />
          <path
            d="M 56 17 V 80 H 70 V 17 Z"
            fill="url(#goldRim)"
          />
          {/* Mini Office Chair and Desk Icon in gold */}
          <g transform="translate(18, 26) scale(0.55)" stroke="#DFBA73" strokeWidth="2.5" fill="none">
            {/* Chair back & seat */}
            <path d="M 12 12 Q 12 4 20 4 Q 28 4 28 12 V 28 H 12 Z" fill="#DFBA73" fillOpacity="0.3" />
            <path d="M 8 28 H 32 V 33 H 8 Z" fill="#DFBA73" />
            <line x1="20" y1="33" x2="20" y2="45" />
            <line x1="12" y1="48" x2="28" y2="48" />
            <line x1="8" y1="48" x2="20" y2="45" />
            <line x1="32" y1="48" x2="20" y2="45" />

            {/* Desk with drawers */}
            <path d="M 40 22 H 84 V 27 H 40 Z" fill="#DFBA73" />
            <line x1="44" y1="27" x2="44" y2="52" />
            <rect x="62" y="27" width="20" height="25" fill="#DFBA73" fillOpacity="0.2" />
            <line x1="62" y1="35" x2="82" y2="35" />
            <line x1="62" y1="43" x2="82" y2="43" />
            {/* Plant on desk */}
            <path d="M 70 14 C 70 8 74 6 74 14 C 74 6 78 8 78 14 C 78 20 70 20 70 22 H 78" />
          </g>
        </g>

        {/* Brand Name: FAWZAANA */}
        <text
          x="100"
          y="104"
          textAnchor="middle"
          fill="url(#goldText)"
          fontSize="17.5"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="2.8"
        >
          FAWZAANA
        </text>

        {/* TRADERS with side flourishes */}
        <line x1="28" y1="116" x2="55" y2="116" stroke="url(#goldRim)" strokeWidth="1.5" />
        <circle cx="58" cy="116" r="1.5" fill="#DFBA73" />
        <text
          x="100"
          y="120"
          textAnchor="middle"
          fill="url(#goldRim)"
          fontSize="12.5"
          fontWeight="800"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="4"
        >
          TRADERS
        </text>
        <circle cx="142" cy="116" r="1.5" fill="#DFBA73" />
        <line x1="145" y1="116" x2="172" y2="116" stroke="url(#goldRim)" strokeWidth="1.5" />

        {/* OFFICE FURNITURE SOLUTIONS */}
        <text
          x="100"
          y="132"
          textAnchor="middle"
          fill="#DFBA73"
          fontSize="7"
          fontWeight="700"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="1.8"
          opacity="0.9"
        >
          OFFICE FURNITURE SOLUTIONS
        </text>

        {/* 4 Feature Icons Row */}
        <g transform="translate(42, 140) scale(0.65)" stroke="#DFBA73" strokeWidth="1.5" fill="none">
          {/* Chair */}
          <path d="M 10 4 H 20 V 16 H 10 Z" />
          <line x1="15" y1="16" x2="15" y2="24" />
          <line x1="8" y1="24" x2="22" y2="24" />
          
          {/* Shield */}
          <path d="M 64 4 L 76 8 V 16 C 76 22 64 26 64 26 C 64 26 52 22 52 16 V 8 Z" />
          
          {/* Gear */}
          <circle cx="118" cy="14" r="7" />
          <circle cx="118" cy="14" r="3" fill="#DFBA73" />

          {/* Handshake */}
          <path d="M 166 12 L 174 8 L 182 14 L 174 18 Z" />
        </g>

        {/* SMART SPACES. STRONG IMPACT. */}
        <path
          id="taglineArc"
          d="M 32 155 A 72 72 0 0 0 168 155"
          fill="none"
        />
        <text
          fill="#F5DEAB"
          fontSize="6.8"
          fontWeight="700"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="1.2"
        >
          <textPath href="#taglineArc" startOffset="50%" textAnchor="middle">
            SMART SPACES. STRONG IMPACT.
          </textPath>
        </text>
      </svg>

      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-display font-extrabold text-sm md:text-base tracking-[0.2em] text-[#121212] uppercase leading-none">
            FAWZAANA
          </span>
          <span className="text-[10px] font-mono tracking-widest text-amber-700 uppercase font-semibold mt-0.5">
            Office Furniture
          </span>
        </div>
      )}
    </div>
  );
};
