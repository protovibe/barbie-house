import React from 'react';

// Hair style definitions
const hairStyles = {
  long: (color, shadow) => (
    <g className="hair-back">
      <ellipse cx="150" cy="85" rx="65" ry="70" fill={color} />
      <path
        d="M85 85 Q70 180 85 280 Q95 260 105 280 Q115 260 125 280 Q135 260 150 285
           Q165 260 175 280 Q185 260 195 280 Q205 260 215 280 Q230 180 215 85"
        fill={shadow}
      />
      <path d="M85 100 Q60 150 70 220 Q80 200 85 220" fill={color} />
      <path d="M215 100 Q240 150 230 220 Q220 200 215 220" fill={color} />
    </g>
  ),
  short: (color, shadow) => (
    <g className="hair-back">
      <ellipse cx="150" cy="75" rx="55" ry="60" fill={color} />
      <path d="M95 75 Q85 100 90 130 Q100 120 95 75" fill={shadow} />
      <path d="M205 75 Q215 100 210 130 Q200 120 205 75" fill={shadow} />
    </g>
  ),
  curly: (color, shadow) => (
    <g className="hair-back">
      <ellipse cx="150" cy="80" rx="70" ry="75" fill={color} />
      {/* Curly texture */}
      <circle cx="90" cy="100" r="25" fill={shadow} />
      <circle cx="210" cy="100" r="25" fill={shadow} />
      <circle cx="80" cy="150" r="22" fill={color} />
      <circle cx="220" cy="150" r="22" fill={color} />
      <circle cx="85" cy="200" r="20" fill={shadow} />
      <circle cx="215" cy="200" r="20" fill={shadow} />
      <circle cx="95" cy="240" r="18" fill={color} />
      <circle cx="205" cy="240" r="18" fill={color} />
      <circle cx="110" cy="270" r="15" fill={shadow} />
      <circle cx="190" cy="270" r="15" fill={shadow} />
    </g>
  ),
  ponytail: (color, shadow) => (
    <g className="hair-back">
      <ellipse cx="150" cy="75" rx="55" ry="60" fill={color} />
      {/* Ponytail */}
      <ellipse cx="150" cy="35" rx="20" ry="15" fill="#FF69B4" />
      <path d="M135 40 Q120 100 130 200 Q140 220 150 200 Q160 220 170 200 Q180 100 165 40" fill={color} />
      <path d="M140 50 Q130 120 140 180" stroke={shadow} strokeWidth="8" fill="none" />
    </g>
  ),
  pigtails: (color, shadow) => (
    <g className="hair-back">
      <ellipse cx="150" cy="75" rx="55" ry="60" fill={color} />
      {/* Left pigtail */}
      <circle cx="85" cy="65" r="12" fill="#FF69B4" />
      <path d="M75 70 Q55 130 65 200 Q75 210 85 200 Q95 130 85 70" fill={color} />
      <path d="M70 80 Q60 140 70 190" stroke={shadow} strokeWidth="6" fill="none" />
      {/* Right pigtail */}
      <circle cx="215" cy="65" r="12" fill="#FF69B4" />
      <path d="M225 70 Q245 130 235 200 Q225 210 215 200 Q205 130 215 70" fill={color} />
      <path d="M230 80 Q240 140 230 190" stroke={shadow} strokeWidth="6" fill="none" />
    </g>
  ),
  buns: (color, shadow) => (
    <g className="hair-back">
      <ellipse cx="150" cy="75" rx="55" ry="60" fill={color} />
      {/* Space buns */}
      <circle cx="100" cy="40" r="25" fill={color} />
      <circle cx="100" cy="40" r="18" fill={shadow} />
      <circle cx="200" cy="40" r="25" fill={color} />
      <circle cx="200" cy="40" r="18" fill={shadow} />
    </g>
  ),
};

// Bangs style definitions
const bangsStyles = {
  side: (color, shadow) => (
    <g className="hair-front">
      <path
        d="M90 50 Q100 25 150 20 Q200 25 210 50 Q200 45 180 40 Q160 50 150 35 Q140 50 120 40 Q100 45 90 50"
        fill={color}
      />
      <path d="M95 55 Q85 70 90 90 Q100 75 95 55" fill={color} />
      <path d="M205 55 Q215 70 210 90 Q200 75 205 55" fill={color} />
    </g>
  ),
  straight: (color, shadow) => (
    <g className="hair-front">
      <path d="M95 45 Q100 20 150 15 Q200 20 205 45 L205 70 Q180 65 150 65 Q120 65 95 70 Z" fill={color} />
      <path d="M100 68 L200 68" stroke={shadow} strokeWidth="3" />
    </g>
  ),
  none: (color, shadow) => (
    <g className="hair-front">
      <path d="M95 50 Q120 30 150 25 Q180 30 205 50 Q190 45 150 40 Q110 45 95 50" fill={color} />
    </g>
  ),
  curly: (color, shadow) => (
    <g className="hair-front">
      <circle cx="110" cy="50" r="18" fill={color} />
      <circle cx="140" cy="40" r="20" fill={color} />
      <circle cx="170" cy="42" r="18" fill={color} />
      <circle cx="195" cy="52" r="16" fill={color} />
      <circle cx="125" cy="60" r="12" fill={shadow} />
      <circle cx="160" cy="55" r="14" fill={shadow} />
    </g>
  ),
};

// Eye style definitions
const eyeStyles = {
  normal: (eyeColor) => (
    <g className="eyes">
      <ellipse cx="130" cy="70" rx="12" ry="8" fill="#FFF" />
      <ellipse cx="132" cy="71" rx="8" ry="6" fill={eyeColor} />
      <ellipse cx="134" cy="69" rx="3" ry="2.5" fill="#FFF" />
      <path d="M118 65 Q122 62 125 65" stroke="#333" strokeWidth="2" fill="none" />
      <path d="M135 65 Q138 60 142 65" stroke="#333" strokeWidth="2" fill="none" />

      <ellipse cx="170" cy="70" rx="12" ry="8" fill="#FFF" />
      <ellipse cx="168" cy="71" rx="8" ry="6" fill={eyeColor} />
      <ellipse cx="166" cy="69" rx="3" ry="2.5" fill="#FFF" />
      <path d="M158 65 Q162 60 165 65" stroke="#333" strokeWidth="2" fill="none" />
      <path d="M175 65 Q178 62 182 65" stroke="#333" strokeWidth="2" fill="none" />
    </g>
  ),
  big: (eyeColor) => (
    <g className="eyes">
      <ellipse cx="128" cy="68" rx="16" ry="14" fill="#FFF" />
      <ellipse cx="130" cy="70" rx="12" ry="10" fill={eyeColor} />
      <ellipse cx="134" cy="66" rx="5" ry="4" fill="#FFF" />
      <ellipse cx="126" cy="72" rx="2" ry="2" fill="#FFF" />
      <path d="M112 60 Q120 54 135 58" stroke="#333" strokeWidth="2.5" fill="none" />
      <path d="M138 58 Q142 52 148 60" stroke="#333" strokeWidth="2" fill="none" />

      <ellipse cx="172" cy="68" rx="16" ry="14" fill="#FFF" />
      <ellipse cx="170" cy="70" rx="12" ry="10" fill={eyeColor} />
      <ellipse cx="166" cy="66" rx="5" ry="4" fill="#FFF" />
      <ellipse cx="174" cy="72" rx="2" ry="2" fill="#FFF" />
      <path d="M152 60 Q158 52 165 58" stroke="#333" strokeWidth="2" fill="none" />
      <path d="M165 58 Q180 54 188 60" stroke="#333" strokeWidth="2.5" fill="none" />
    </g>
  ),
  sparkly: (eyeColor) => (
    <g className="eyes">
      <ellipse cx="128" cy="68" rx="14" ry="12" fill="#FFF" />
      <ellipse cx="130" cy="70" rx="10" ry="9" fill={eyeColor} />
      <ellipse cx="134" cy="66" rx="4" ry="3" fill="#FFF" />
      <circle cx="126" cy="72" r="2" fill="#FFF" />
      <circle cx="135" cy="74" r="1.5" fill="#FFF" />
      {/* Sparkles */}
      <path d="M115 58 L118 62 L115 66 L112 62 Z" fill="#FFD700" />
      <circle cx="140" cy="56" r="2" fill="#FFD700" />

      <ellipse cx="172" cy="68" rx="14" ry="12" fill="#FFF" />
      <ellipse cx="170" cy="70" rx="10" ry="9" fill={eyeColor} />
      <ellipse cx="166" cy="66" rx="4" ry="3" fill="#FFF" />
      <circle cx="174" cy="72" r="2" fill="#FFF" />
      <circle cx="165" cy="74" r="1.5" fill="#FFF" />
      {/* Sparkles */}
      <path d="M185 58 L188 62 L185 66 L182 62 Z" fill="#FFD700" />
      <circle cx="160" cy="56" r="2" fill="#FFD700" />
    </g>
  ),
  cute: (eyeColor) => (
    <g className="eyes">
      <ellipse cx="128" cy="70" rx="13" ry="11" fill="#FFF" />
      <ellipse cx="130" cy="72" rx="9" ry="8" fill={eyeColor} />
      <ellipse cx="133" cy="69" rx="4" ry="3" fill="#FFF" />
      {/* Heart sparkle */}
      <path d="M120 60 Q120 56 124 60 Q128 56 128 60 L124 66 Z" fill="#FF69B4" />

      <ellipse cx="172" cy="70" rx="13" ry="11" fill="#FFF" />
      <ellipse cx="170" cy="72" rx="9" ry="8" fill={eyeColor} />
      <ellipse cx="167" cy="69" rx="4" ry="3" fill="#FFF" />
      {/* Heart sparkle */}
      <path d="M180 60 Q180 56 184 60 Q188 56 188 60 L184 66 Z" fill="#FF69B4" />
    </g>
  ),
  wink: (eyeColor) => (
    <g className="eyes">
      <ellipse cx="128" cy="68" rx="14" ry="12" fill="#FFF" />
      <ellipse cx="130" cy="70" rx="10" ry="9" fill={eyeColor} />
      <ellipse cx="134" cy="66" rx="4" ry="3" fill="#FFF" />
      <path d="M114 62 Q122 56 142 62" stroke="#333" strokeWidth="2.5" fill="none" />

      {/* Winking eye */}
      <path d="M158 70 Q170 65 182 70" stroke="#333" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M160 66 L162 62" stroke="#333" strokeWidth="2" fill="none" />
      <path d="M180 66 L178 62" stroke="#333" strokeWidth="2" fill="none" />
    </g>
  ),
};

// Nose style definitions
const noseStyles = {
  small: (skinShadow) => (
    <path d="M150 78 Q148 85 150 88 Q152 85 150 78" fill={skinShadow} />
  ),
  button: (skinShadow) => (
    <g>
      <ellipse cx="150" cy="84" rx="5" ry="4" fill={skinShadow} />
      <ellipse cx="150" cy="83" rx="3" ry="2" fill="rgba(255,255,255,0.3)" />
    </g>
  ),
  cute: (skinShadow) => (
    <g>
      <circle cx="150" cy="84" r="4" fill={skinShadow} />
      <ellipse cx="149" cy="83" rx="1.5" ry="1" fill="rgba(255,255,255,0.4)" />
    </g>
  ),
  pointed: (skinShadow) => (
    <path d="M150 75 L147 88 L150 90 L153 88 Z" fill={skinShadow} />
  ),
};

// Mouth style definitions
const mouthStyles = {
  smile: () => (
    <g>
      <path d="M135 95 Q150 110 165 95" stroke="#FF69B4" strokeWidth="4" fill="none" strokeLinecap="round" />
      <ellipse cx="150" cy="98" rx="8" ry="3" fill="#FF8FAB" />
    </g>
  ),
  bigSmile: () => (
    <g>
      <path d="M130 92 Q150 115 170 92" stroke="#FF69B4" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M135 95 Q150 108 165 95" fill="#FFF" />
      <ellipse cx="150" cy="98" rx="10" ry="4" fill="#FF8FAB" />
    </g>
  ),
  kiss: () => (
    <g>
      <ellipse cx="150" cy="98" rx="6" ry="8" fill="#FF69B4" />
      <ellipse cx="150" cy="95" rx="4" ry="3" fill="#FF8FAB" />
    </g>
  ),
  happy: () => (
    <g>
      <path d="M138 94 Q150 102 162 94" stroke="#FF69B4" strokeWidth="3" fill="none" strokeLinecap="round" />
      <ellipse cx="150" cy="96" rx="6" ry="2" fill="#FF8FAB" />
    </g>
  ),
  tongue: () => (
    <g>
      <path d="M135 95 Q150 108 165 95" stroke="#FF69B4" strokeWidth="4" fill="none" strokeLinecap="round" />
      <ellipse cx="150" cy="102" rx="5" ry="6" fill="#FF6B8A" />
      <ellipse cx="150" cy="100" rx="3" ry="3" fill="#FF8FAB" />
    </g>
  ),
};

const Barbie = ({
  outfit,
  hairColor = '#F4D03F',
  skinTone = '#FDBBB5',
  hairStyle = 'long',
  bangsStyle = 'side',
  eyeStyle = 'normal',
  eyeColor = '#5D4E37',
  noseStyle = 'small',
  mouthStyle = 'smile'
}) => {
  const { dress, top, bottom, shoes, accessory, hair } = outfit;

  // Calculate shadow colors
  const hairShadow = {
    '#F4D03F': '#D4AC0D',
    '#8B4513': '#5D3A1A',
    '#1a1a1a': '#000000',
    '#FF6B6B': '#CC5555',
    '#9B59B6': '#7B3F9E',
    '#E74C3C': '#C0392B',
    '#3498DB': '#2980B9',
  }[hairColor] || '#D4AC0D';

  const skinShadow = {
    '#FDEBD0': '#E8D4B8',
    '#FDBBB5': '#E8A59F',
    '#D4A574': '#B8895C',
    '#A0522D': '#8B4726',
    '#8B4513': '#6B3410',
  }[skinTone] || '#E8A59F';

  return (
    <svg viewBox="0 0 300 500" className="barbie-doll">
      <defs>
        <linearGradient id="hairGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={hairColor} />
          <stop offset="100%" stopColor={hairShadow} />
        </linearGradient>
        <linearGradient id="skinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={skinTone} />
          <stop offset="100%" stopColor={skinShadow} />
        </linearGradient>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.2"/>
        </filter>
      </defs>

      {/* Hair Back */}
      {hairStyles[hairStyle]?.(hairColor, hairShadow)}

      {/* Body */}
      <g className="body" filter="url(#softShadow)">
        <path d="M120 245 L115 380 Q115 395 125 395 L135 395 Q145 395 143 380 L138 260" fill={skinTone} />
        <path d="M162 260 L157 380 Q155 395 165 395 L175 395 Q185 395 185 380 L180 245" fill={skinTone} />
        <path d="M110 155 Q100 180 105 245 L195 245 Q200 180 190 155 Q175 145 150 143 Q125 145 110 155" fill={skinTone} />
        <path d="M105 160 Q85 165 75 200 Q70 230 80 260 Q85 265 90 260 Q95 230 95 200 Q100 175 110 165" fill={skinTone} />
        <path d="M195 160 Q215 165 225 200 Q230 230 220 260 Q215 265 210 260 Q205 230 205 200 Q200 175 190 165" fill={skinTone} />
        <ellipse cx="85" cy="268" rx="12" ry="15" fill={skinTone} />
        <ellipse cx="215" cy="268" rx="12" ry="15" fill={skinTone} />
        <rect x="138" y="120" width="24" height="30" rx="5" fill={skinTone} />
        <ellipse cx="150" cy="75" rx="48" ry="55" fill="url(#skinGradient)" />
      </g>

      {/* Face */}
      <g className="face">
        {/* Eyes */}
        {eyeStyles[eyeStyle]?.(eyeColor)}

        {/* Eyebrows */}
        <path d="M118 55 Q130 50 142 55" stroke={hairShadow} strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M158 55 Q170 50 182 55" stroke={hairShadow} strokeWidth="2.5" fill="none" strokeLinecap="round" />

        {/* Nose */}
        {noseStyles[noseStyle]?.(skinShadow)}

        {/* Blush */}
        <ellipse cx="118" cy="82" rx="12" ry="7" fill="rgba(255,150,180,0.4)" />
        <ellipse cx="182" cy="82" rx="12" ry="7" fill="rgba(255,150,180,0.4)" />

        {/* Mouth */}
        {mouthStyles[mouthStyle]?.()}
      </g>

      {/* Hair Front (Bangs) */}
      {bangsStyles[bangsStyle]?.(hairColor, hairShadow)}

      {/* Clothing layers */}
      {!dress && !top && (
        <path d="M115 155 Q110 170 112 200 L188 200 Q190 170 185 155 Q170 148 150 147 Q130 148 115 155" fill="#FFB6C1" />
      )}
      {!dress && !bottom && (
        <path d="M112 200 L108 250 L142 250 L150 220 L158 250 L192 250 L188 200 Z" fill="#FFB6C1" />
      )}

      {!dress && bottom && <g className="clothing-layer">{bottom.svg}</g>}
      {!dress && top && <g className="clothing-layer">{top.svg}</g>}
      {dress && <g className="clothing-layer">{dress.svg}</g>}
      {shoes && <g className="clothing-layer">{shoes.svg}</g>}
      {accessory && <g className="clothing-layer">{accessory.svg}</g>}
      {hair && <g className="clothing-layer">{hair.svg}</g>}
    </svg>
  );
};

export default Barbie;
