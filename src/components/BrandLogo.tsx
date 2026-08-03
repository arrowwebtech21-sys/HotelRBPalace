import React from 'react';

type BrandLogoProps = {
  variant?: 'header' | 'icon' | 'vertical';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  darkBg?: boolean;
};

/**
 * Circular RB Monogram Emblem SVG component
 * Engineered with bold proportions and high contrast for maximum legibility.
 */
export function RbMonogramIcon({ size = 48, className = '', darkBg = false }: { size?: number; className?: string; darkBg?: boolean }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
    >
      {/* Optional Dark Background Circle Container */}
      {darkBg && (
        <circle cx="60" cy="60" r="58" fill="#172215" stroke="#C8A97E" strokeWidth="4" />
      )}

      {/* Outer Gold Circle Ring */}
      <circle cx="60" cy="60" r="48" stroke="#C8A97E" strokeWidth="3.2" fill="none" />

      {/* Horizontal Accent Bars on Left (Gold) */}
      <line x1="6" y1="46" x2="38" y2="46" stroke="#C8A97E" strokeWidth="3" strokeLinecap="round" />
      <line x1="12" y1="52" x2="44" y2="52" stroke="#C8A97E" strokeWidth="3" strokeLinecap="round" />

      {/* Horizontal Accent Bars on Right (Sage Green) */}
      <line x1="76" y1="68" x2="108" y2="68" stroke="#85AB8B" strokeWidth="3" strokeLinecap="round" />
      <line x1="82" y1="74" x2="114" y2="74" stroke="#85AB8B" strokeWidth="3" strokeLinecap="round" />

      {/* High-Contrast Monogram R (Vibrant Gold) & B (Sage Green) */}
      <g transform="translate(29, 22)">
        <text
          x="0"
          y="54"
          fill="#E6C687"
          fontSize="50"
          fontFamily="'Plus Jakarta Sans', 'Sora', system-ui, -apple-system, sans-serif"
          fontWeight="800"
          letterSpacing="-2"
        >
          R
        </text>
        <text
          x="28"
          y="54"
          fill="#85AB8B"
          fontSize="50"
          fontFamily="'Plus Jakarta Sans', 'Sora', system-ui, -apple-system, sans-serif"
          fontWeight="800"
          letterSpacing="-2"
        >
          B
        </text>
      </g>
    </svg>
  );
}

export default function BrandLogo({ variant = 'header', size = 'md', className = '', onClick }: BrandLogoProps) {
  const iconSizes = {
    sm: 36,
    md: 46,
    lg: 60
  };

  const iconPx = iconSizes[size];

  if (variant === 'icon') {
    return (
      <div onClick={onClick} className={`inline-flex items-center cursor-pointer ${className}`}>
        <RbMonogramIcon size={iconPx} />
      </div>
    );
  }

  if (variant === 'vertical') {
    return (
      <div onClick={onClick} className={`flex flex-col items-center text-center cursor-pointer group ${className}`}>
        <RbMonogramIcon size={iconPx * 1.3} className="group-hover:scale-105 transition-transform duration-300" />
        <div className="mt-3 flex flex-col items-center">
          <div className="flex items-center gap-1.5 text-lg sm:text-2xl font-sora tracking-normal uppercase">
            <span className="text-white font-semibold">HOTEL</span>
            <span className="text-[#C8A97E] font-medium">RB</span>
            <span className="text-[#85AB8B] font-light">PALACE</span>
          </div>
          {/* Filigree ornamental underline */}
          <div className="flex items-center gap-3 mt-2 text-[#C8A97E] opacity-75">
            <div className="w-14 h-[1px] bg-gradient-to-r from-transparent to-[#C8A97E]" />
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" fill="#85AB8B" />
            </svg>
            <div className="w-14 h-[1px] bg-gradient-to-l from-transparent to-[#C8A97E]" />
          </div>
        </div>
      </div>
    );
  }

  // Default 'header' variant: compact typography without wide letter gaps
  return (
    <div onClick={onClick} className={`inline-flex items-center gap-3 sm:gap-3.5 cursor-pointer group shrink-0 ${className}`}>
      {/* Monogram Icon */}
      <RbMonogramIcon size={iconPx} className="group-hover:scale-105 transition-transform duration-300" />

      {/* Vertical Thin Gold Divider Line */}
      <div className="h-7 sm:h-8 w-[1.5px] bg-gradient-to-b from-transparent via-[#C8A97E]/70 to-transparent shrink-0" />

      {/* Brand Text: Normal tracking to avoid wide gaps between letters */}
      <div className="flex items-center gap-1.5 sm:gap-2 text-base sm:text-xl font-sora tracking-normal uppercase">
        <span className="text-white font-semibold group-hover:text-white transition-colors">HOTEL</span>
        <span className="text-[#C8A97E] font-medium group-hover:brightness-110 transition-all">RB</span>
        <span className="text-[#85AB8B] font-light group-hover:text-[#9bc2a2] transition-colors">PALACE</span>
      </div>
    </div>
  );
}
