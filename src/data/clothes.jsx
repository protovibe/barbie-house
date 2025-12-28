// Clothing items for Barbie - coordinates match viewBox 0 0 300 500
// Barbie body: torso 105-245, legs to 395

export const clothes = {
  dresses: [
    {
      id: 'princess-gown',
      name: 'Princess Gown',
      category: 'dress',
      isSpecial: true,
      color: '#FF69B4',
      svg: (
        <g>
          {/* Bodice */}
          <path d="M110 150 Q105 180 108 200 L192 200 Q195 180 190 150 Q170 142 150 140 Q130 142 110 150" fill="#FF69B4" />
          <path d="M120 155 Q118 175 120 195 L180 195 Q182 175 180 155 Q165 150 150 148 Q135 150 120 155" fill="#FFB6C1" />
          {/* Puffy sleeves */}
          <ellipse cx="95" cy="165" rx="20" ry="18" fill="#FF69B4" />
          <ellipse cx="205" cy="165" rx="20" ry="18" fill="#FF69B4" />
          {/* Big princess skirt */}
          <path d="M80 200 Q50 300 30 400 L270 400 Q250 300 220 200 Q185 210 150 210 Q115 210 80 200" fill="#FF69B4" />
          <path d="M90 205 Q65 295 50 385 L250 385 Q235 295 210 205 Q180 215 150 215 Q120 215 90 205" fill="#FFB6C1" />
          {/* Ruffles */}
          <path d="M50 385 Q70 375 90 385 Q110 395 130 385 Q150 375 170 385 Q190 395 210 385 Q230 375 250 385" stroke="#FF1493" strokeWidth="3" fill="none" />
          {/* Sparkles on dress */}
          <circle cx="100" cy="300" r="5" fill="#FFD700" />
          <circle cx="200" cy="320" r="5" fill="#FFD700" />
          <circle cx="150" cy="360" r="6" fill="#FFD700" />
          <circle cx="80" cy="350" r="4" fill="#FFD700" />
          <circle cx="220" cy="280" r="4" fill="#FFD700" />
          <circle cx="130" cy="280" r="3" fill="#FFD700" />
          <circle cx="170" cy="330" r="3" fill="#FFD700" />
        </g>
      ),
      thumbnail: '#FF69B4'
    },
    {
      id: 'party-dress',
      name: 'Party Dress',
      category: 'dress',
      color: '#DDA0DD',
      svg: (
        <g>
          {/* Bodice with sweetheart neckline */}
          <path d="M115 150 Q112 180 115 210 L185 210 Q188 180 185 150 Q165 140 150 138 Q135 140 115 150" fill="#DDA0DD" />
          <path d="M130 145 Q150 155 170 145" stroke="#BA55D3" strokeWidth="3" fill="none" />
          {/* Straps */}
          <rect x="125" y="130" width="10" height="20" rx="3" fill="#BA55D3" />
          <rect x="165" y="130" width="10" height="20" rx="3" fill="#BA55D3" />
          {/* Flared skirt */}
          <path d="M100 210 L70 380 L230 380 L200 210 Q175 220 150 220 Q125 220 100 210" fill="#DDA0DD" />
          {/* Belt with bow */}
          <rect x="110" y="205" width="80" height="12" rx="4" fill="#BA55D3" />
          <ellipse cx="150" cy="211" rx="15" ry="8" fill="#9932CC" />
          <circle cx="150" cy="211" r="5" fill="#FFD700" />
        </g>
      ),
      thumbnail: '#DDA0DD'
    },
    {
      id: 'sundress',
      name: 'Sundress',
      category: 'dress',
      color: '#FFD700',
      svg: (
        <g>
          {/* Bodice */}
          <path d="M118 155 Q115 185 118 215 L182 215 Q185 185 182 155 Q165 148 150 146 Q135 148 118 155" fill="#FFD700" />
          {/* Thin straps */}
          <rect x="130" y="130" width="8" height="25" rx="2" fill="#FFA500" />
          <rect x="162" y="130" width="8" height="25" rx="2" fill="#FFA500" />
          {/* Flowing skirt */}
          <path d="M105 215 L80 370 L220 370 L195 215 Q172 225 150 225 Q128 225 105 215" fill="#FFD700" />
          {/* Flower pattern */}
          <g className="flower-pattern">
            <circle cx="130" cy="280" r="10" fill="#FF69B4" />
            <circle cx="130" cy="280" r="4" fill="#FFD700" />
            <circle cx="170" cy="320" r="10" fill="#FF69B4" />
            <circle cx="170" cy="320" r="4" fill="#FFD700" />
            <circle cx="120" cy="350" r="10" fill="#FF69B4" />
            <circle cx="120" cy="350" r="4" fill="#FFD700" />
            <circle cx="180" cy="260" r="8" fill="#FF69B4" />
            <circle cx="180" cy="260" r="3" fill="#FFD700" />
          </g>
        </g>
      ),
      thumbnail: '#FFD700'
    },
    {
      id: 'evening-gown',
      name: 'Evening Gown',
      category: 'dress',
      isSpecial: true,
      color: '#4169E1',
      svg: (
        <g>
          {/* Elegant fitted bodice */}
          <path d="M115 145 Q110 175 112 220 L188 220 Q190 175 185 145 Q165 138 150 136 Q135 138 115 145" fill="#4169E1" />
          {/* One shoulder strap */}
          <path d="M120 145 Q110 130 125 120 L140 135 Q130 145 120 145" fill="#4169E1" />
          {/* Long elegant mermaid skirt */}
          <path d="M112 220 Q105 280 100 350 Q90 400 70 420 L230 420 Q210 400 200 350 Q195 280 188 220" fill="#4169E1" />
          {/* Slit */}
          <path d="M175 320 L200 420 L220 420 L185 300" fill="#FDBBB5" opacity="0.9" />
          {/* Sparkle details */}
          <circle cx="150" cy="170" r="6" fill="#FFD700" />
          <circle cx="140" cy="190" r="3" fill="rgba(255,255,255,0.8)" />
          <circle cx="160" cy="200" r="3" fill="rgba(255,255,255,0.8)" />
          <circle cx="130" cy="280" r="4" fill="rgba(255,255,255,0.6)" />
          <circle cx="170" cy="350" r="4" fill="rgba(255,255,255,0.6)" />
        </g>
      ),
      thumbnail: '#4169E1'
    },
    {
      id: 'tutu-dress',
      name: 'Ballet Tutu',
      category: 'dress',
      isSpecial: true,
      color: '#FFB6C1',
      svg: (
        <g>
          {/* Leotard top */}
          <path d="M115 150 Q112 175 115 200 L185 200 Q188 175 185 150 Q165 142 150 140 Q135 142 115 150" fill="#FFB6C1" />
          {/* Tutu layers */}
          <ellipse cx="150" cy="220" rx="80" ry="25" fill="#FFF0F5" />
          <ellipse cx="150" cy="225" rx="75" ry="22" fill="#FFB6C1" />
          <ellipse cx="150" cy="230" rx="70" ry="20" fill="#FFF0F5" />
          <ellipse cx="150" cy="235" rx="65" ry="18" fill="#FFB6C1" />
          {/* Sparkles */}
          <circle cx="130" cy="210" r="3" fill="#FFD700" />
          <circle cx="170" cy="210" r="3" fill="#FFD700" />
          <circle cx="150" cy="160" r="4" fill="#FFD700" />
        </g>
      ),
      thumbnail: '#FFB6C1'
    },
    {
      id: 'mermaid-dress',
      name: 'Mermaid Tail',
      category: 'dress',
      isSpecial: true,
      color: '#40E0D0',
      svg: (
        <g>
          {/* Shell top */}
          <ellipse cx="135" cy="165" rx="18" ry="15" fill="#FF69B4" />
          <ellipse cx="165" cy="165" rx="18" ry="15" fill="#FF69B4" />
          <path d="M130 175 Q135 180 140 175" stroke="#FF1493" strokeWidth="2" fill="none" />
          <path d="M160 175 Q165 180 170 175" stroke="#FF1493" strokeWidth="2" fill="none" />
          {/* Mermaid tail */}
          <path d="M115 185 Q110 250 115 320 Q120 380 150 400 Q180 380 185 320 Q190 250 185 185 Q165 195 150 195 Q135 195 115 185" fill="url(#mermaidGradient)" />
          {/* Tail fin */}
          <path d="M110 390 Q80 420 60 400 Q100 380 150 400 Q200 380 240 400 Q220 420 190 390" fill="#40E0D0" />
          {/* Scales pattern */}
          <g opacity="0.6">
            <path d="M130 220 Q140 210 150 220 Q160 210 170 220" stroke="#20B2AA" strokeWidth="2" fill="none" />
            <path d="M125 250 Q140 240 155 250 Q170 240 175 250" stroke="#20B2AA" strokeWidth="2" fill="none" />
            <path d="M130 280 Q145 270 160 280 Q175 270 180 280" stroke="#20B2AA" strokeWidth="2" fill="none" />
            <path d="M135 310 Q150 300 165 310" stroke="#20B2AA" strokeWidth="2" fill="none" />
          </g>
          <defs>
            <linearGradient id="mermaidGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#40E0D0" />
              <stop offset="50%" stopColor="#48D1CC" />
              <stop offset="100%" stopColor="#20B2AA" />
            </linearGradient>
          </defs>
        </g>
      ),
      thumbnail: '#40E0D0'
    },
  ],

  tops: [
    {
      id: 'pink-tshirt',
      name: 'Pink T-Shirt',
      category: 'top',
      color: '#FF69B4',
      svg: (
        <g>
          <path d="M110 150 Q105 180 108 215 L192 215 Q195 180 190 150 Q170 142 150 140 Q130 142 110 150" fill="#FF69B4" />
          {/* Sleeves */}
          <path d="M105 155 Q80 160 70 190 Q75 200 85 195 Q95 175 110 165" fill="#FF69B4" />
          <path d="M195 155 Q220 160 230 190 Q225 200 215 195 Q205 175 190 165" fill="#FF69B4" />
          {/* Neckline */}
          <ellipse cx="150" cy="148" rx="18" ry="10" fill="#FDBBB5" />
          {/* Heart design */}
          <path d="M140 175 Q140 165 150 175 Q160 165 160 175 L150 195 Z" fill="#FFB6C1" />
        </g>
      ),
      thumbnail: '#FF69B4'
    },
    {
      id: 'crop-top',
      name: 'Sparkle Crop',
      category: 'top',
      color: '#98FB98',
      svg: (
        <g>
          <path d="M118 150 Q115 170 118 195 L182 195 Q185 170 182 150 Q165 143 150 141 Q135 143 118 150" fill="#98FB98" />
          {/* Straps */}
          <rect x="128" y="130" width="10" height="22" rx="3" fill="#90EE90" />
          <rect x="162" y="130" width="10" height="22" rx="3" fill="#90EE90" />
          {/* Sparkles */}
          <circle cx="140" cy="170" r="4" fill="#FFD700" />
          <circle cx="160" cy="175" r="3" fill="#FFD700" />
          <circle cx="150" cy="185" r="3" fill="#FFD700" />
        </g>
      ),
      thumbnail: '#98FB98'
    },
    {
      id: 'blouse',
      name: 'Fancy Blouse',
      category: 'top',
      color: '#FFF0F5',
      svg: (
        <g>
          <path d="M108 150 Q105 180 108 220 L192 220 Q195 180 192 150 Q170 140 150 138 Q130 140 108 150" fill="#FFF0F5" />
          {/* Puffy sleeves */}
          <ellipse cx="90" cy="170" rx="22" ry="25" fill="#FFF0F5" />
          <ellipse cx="210" cy="170" rx="22" ry="25" fill="#FFF0F5" />
          {/* Collar with bow */}
          <path d="M130 148 L150 165 L170 148" stroke="#FFB6C1" strokeWidth="4" fill="none" />
          <circle cx="150" cy="165" r="8" fill="#FF69B4" />
          {/* Buttons */}
          <circle cx="150" cy="180" r="4" fill="#FFB6C1" />
          <circle cx="150" cy="198" r="4" fill="#FFB6C1" />
        </g>
      ),
      thumbnail: '#FFF0F5'
    },
    {
      id: 'sweater',
      name: 'Cozy Sweater',
      category: 'top',
      color: '#DDA0DD',
      svg: (
        <g>
          <path d="M105 148 Q100 180 105 225 L195 225 Q200 180 195 148 Q170 138 150 136 Q130 138 105 148" fill="#DDA0DD" />
          {/* Long sleeves */}
          <path d="M105 155 Q70 165 60 230 L85 235 Q90 180 110 165" fill="#DDA0DD" />
          <path d="M195 155 Q230 165 240 230 L215 235 Q210 180 190 165" fill="#DDA0DD" />
          {/* Cable knit pattern */}
          <path d="M130 160 Q135 180 130 200 Q135 220 130 225" stroke="#BA55D3" strokeWidth="3" fill="none" />
          <path d="M150 160 Q155 180 150 200 Q155 220 150 225" stroke="#BA55D3" strokeWidth="3" fill="none" />
          <path d="M170 160 Q175 180 170 200 Q175 220 170 225" stroke="#BA55D3" strokeWidth="3" fill="none" />
          {/* Neckline */}
          <ellipse cx="150" cy="152" rx="22" ry="12" fill="#FDBBB5" />
        </g>
      ),
      thumbnail: '#DDA0DD'
    },
    {
      id: 'tank-top',
      name: 'Rainbow Tank',
      category: 'top',
      color: '#FF6B6B',
      svg: (
        <g>
          <path d="M118 152 Q115 180 118 220 L182 220 Q185 180 182 152 Q165 145 150 143 Q135 145 118 152" fill="url(#rainbowGradient)" />
          {/* Straps */}
          <rect x="125" y="132" width="12" height="22" rx="4" fill="#FF6B6B" />
          <rect x="163" y="132" width="12" height="22" rx="4" fill="#9B59B6" />
          <defs>
            <linearGradient id="rainbowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FF6B6B" />
              <stop offset="25%" stopColor="#FFD93D" />
              <stop offset="50%" stopColor="#6BCB77" />
              <stop offset="75%" stopColor="#4D96FF" />
              <stop offset="100%" stopColor="#9B59B6" />
            </linearGradient>
          </defs>
        </g>
      ),
      thumbnail: '#FF6B6B'
    },
  ],

  bottoms: [
    {
      id: 'pink-skirt',
      name: 'Twirl Skirt',
      category: 'bottom',
      color: '#FF69B4',
      svg: (
        <g>
          {/* Waistband */}
          <rect x="108" y="200" width="84" height="15" rx="5" fill="#FF1493" />
          {/* Skirt */}
          <path d="M100 215 L75 370 L225 370 L200 215 Q175 225 150 225 Q125 225 100 215" fill="#FF69B4" />
          {/* Pleats */}
          <path d="M115 220 L100 370" stroke="#FF1493" strokeWidth="3" />
          <path d="M140 225 L130 370" stroke="#FF1493" strokeWidth="3" />
          <path d="M165 225 L170 370" stroke="#FF1493" strokeWidth="3" />
          <path d="M185 220 L200 370" stroke="#FF1493" strokeWidth="3" />
        </g>
      ),
      thumbnail: '#FF69B4'
    },
    {
      id: 'jeans',
      name: 'Blue Jeans',
      category: 'bottom',
      color: '#4169E1',
      svg: (
        <g>
          {/* Waistband */}
          <rect x="108" y="200" width="84" height="18" rx="3" fill="#1E90FF" />
          {/* Belt */}
          <rect x="112" y="203" width="76" height="8" fill="#8B4513" />
          <rect x="145" y="200" width="10" height="14" rx="2" fill="#FFD700" />
          {/* Left leg */}
          <path d="M108 218 L105 385 Q105 395 115 395 L140 395 Q145 395 145 385 L145 230" fill="#4169E1" />
          {/* Right leg */}
          <path d="M155 230 L155 385 Q155 395 165 395 L185 395 Q195 395 195 385 L192 218" fill="#4169E1" />
          {/* Pockets */}
          <path d="M115 230 L118 260 L138 260 L135 230" stroke="#1E90FF" strokeWidth="3" fill="none" />
          <path d="M165 230 L162 260 L182 260 L185 230" stroke="#1E90FF" strokeWidth="3" fill="none" />
          {/* Stitching */}
          <path d="M145 230 L145 380" stroke="#DAA520" strokeWidth="2" strokeDasharray="5,3" />
          <path d="M155 230 L155 380" stroke="#DAA520" strokeWidth="2" strokeDasharray="5,3" />
        </g>
      ),
      thumbnail: '#4169E1'
    },
    {
      id: 'shorts',
      name: 'Denim Shorts',
      category: 'bottom',
      color: '#87CEEB',
      svg: (
        <g>
          {/* Waistband */}
          <rect x="108" y="200" width="84" height="15" rx="3" fill="#5F9EA0" />
          {/* Shorts */}
          <path d="M108 215 L100 280 L145 280 L150 240 L155 280 L200 280 L192 215" fill="#87CEEB" />
          {/* Frayed edges */}
          <path d="M100 278 L105 290 L112 278 L119 290 L126 278 L133 290 L140 278 L145 285" stroke="#87CEEB" strokeWidth="3" fill="none" />
          <path d="M155 285 L160 278 L167 290 L174 278 L181 290 L188 278 L195 290 L200 278" stroke="#87CEEB" strokeWidth="3" fill="none" />
          {/* Pockets */}
          <path d="M115 225 L117 250 L135 250 L133 225" stroke="#5F9EA0" strokeWidth="2" fill="none" />
        </g>
      ),
      thumbnail: '#87CEEB'
    },
    {
      id: 'leggings',
      name: 'Star Leggings',
      category: 'bottom',
      color: '#9370DB',
      svg: (
        <g>
          {/* Waistband */}
          <rect x="108" y="200" width="84" height="12" rx="3" fill="#8B008B" />
          {/* Left leg */}
          <path d="M108 212 L112 385 Q112 395 122 395 L138 395 Q145 395 145 385 L145 225" fill="#9370DB" />
          {/* Right leg */}
          <path d="M155 225 L155 385 Q155 395 162 395 L178 395 Q188 395 188 385 L192 212" fill="#9370DB" />
          {/* Stars pattern */}
          <polygon points="125,260 127,267 135,267 129,272 131,280 125,275 119,280 121,272 115,267 123,267" fill="#FFD700" />
          <polygon points="170,300 172,307 180,307 174,312 176,320 170,315 164,320 166,312 160,307 168,307" fill="#FFD700" />
          <polygon points="130,340 131,345 137,345 133,349 134,355 130,351 126,355 127,349 123,345 129,345" fill="#FFD700" />
        </g>
      ),
      thumbnail: '#9370DB'
    },
    {
      id: 'tutu-skirt',
      name: 'Mini Tutu',
      category: 'bottom',
      color: '#FF69B4',
      svg: (
        <g>
          {/* Waistband */}
          <rect x="110" y="200" width="80" height="12" rx="4" fill="#FF1493" />
          {/* Tutu layers */}
          <ellipse cx="150" cy="230" rx="70" ry="20" fill="#FFF0F5" />
          <ellipse cx="150" cy="240" rx="65" ry="18" fill="#FFB6C1" />
          <ellipse cx="150" cy="250" rx="60" ry="16" fill="#FFF0F5" />
          <ellipse cx="150" cy="258" rx="55" ry="14" fill="#FF69B4" />
        </g>
      ),
      thumbnail: '#FF69B4'
    },
  ],

  shoes: [
    {
      id: 'glass-slippers',
      name: 'Glass Slippers',
      category: 'shoes',
      isSpecial: true,
      color: '#E0FFFF',
      svg: (
        <g>
          {/* Left slipper */}
          <ellipse cx="130" cy="400" rx="20" ry="10" fill="rgba(224,255,255,0.7)" stroke="#87CEEB" strokeWidth="2" />
          <path d="M115 395 Q105 385 115 375 L130 382 L130 395" fill="rgba(224,255,255,0.7)" stroke="#87CEEB" strokeWidth="2" />
          <ellipse cx="120" cy="388" rx="8" ry="5" fill="rgba(255,255,255,0.5)" />
          {/* Right slipper */}
          <ellipse cx="170" cy="400" rx="20" ry="10" fill="rgba(224,255,255,0.7)" stroke="#87CEEB" strokeWidth="2" />
          <path d="M185 395 Q195 385 185 375 L170 382 L170 395" fill="rgba(224,255,255,0.7)" stroke="#87CEEB" strokeWidth="2" />
          <ellipse cx="180" cy="388" rx="8" ry="5" fill="rgba(255,255,255,0.5)" />
          {/* Sparkles */}
          <circle cx="125" cy="390" r="4" fill="#FFD700" />
          <circle cx="175" cy="390" r="4" fill="#FFD700" />
          <circle cx="130" cy="380" r="2" fill="#FFD700" />
          <circle cx="170" cy="380" r="2" fill="#FFD700" />
        </g>
      ),
      thumbnail: '#E0FFFF'
    },
    {
      id: 'pink-heels',
      name: 'Pink Heels',
      category: 'shoes',
      color: '#FF69B4',
      svg: (
        <g>
          {/* Left heel */}
          <ellipse cx="130" cy="402" rx="18" ry="8" fill="#FF69B4" />
          <rect x="112" y="400" width="10" height="22" rx="2" fill="#FF1493" />
          <path d="M115 395 L130 388 L130 400" fill="#FF69B4" />
          {/* Right heel */}
          <ellipse cx="170" cy="402" rx="18" ry="8" fill="#FF69B4" />
          <rect x="178" y="400" width="10" height="22" rx="2" fill="#FF1493" />
          <path d="M185 395 L170 388 L170 400" fill="#FF69B4" />
          {/* Bows */}
          <circle cx="130" cy="392" r="5" fill="#FF1493" />
          <circle cx="170" cy="392" r="5" fill="#FF1493" />
        </g>
      ),
      thumbnail: '#FF69B4'
    },
    {
      id: 'sneakers',
      name: 'Cool Sneakers',
      category: 'shoes',
      color: '#FFFFFF',
      svg: (
        <g>
          {/* Left sneaker */}
          <ellipse cx="130" cy="402" rx="22" ry="12" fill="#FFFFFF" stroke="#DDD" strokeWidth="2" />
          <rect x="108" y="385" width="30" height="18" rx="8" fill="#FFFFFF" stroke="#DDD" strokeWidth="2" />
          <ellipse cx="120" cy="395" rx="10" ry="6" fill="#FF69B4" />
          {/* Laces */}
          <path d="M118 390 L128 390" stroke="#FF69B4" strokeWidth="2" />
          <path d="M118 395 L128 395" stroke="#FF69B4" strokeWidth="2" />
          {/* Right sneaker */}
          <ellipse cx="170" cy="402" rx="22" ry="12" fill="#FFFFFF" stroke="#DDD" strokeWidth="2" />
          <rect x="162" y="385" width="30" height="18" rx="8" fill="#FFFFFF" stroke="#DDD" strokeWidth="2" />
          <ellipse cx="180" cy="395" rx="10" ry="6" fill="#FF69B4" />
          {/* Laces */}
          <path d="M172 390 L182 390" stroke="#FF69B4" strokeWidth="2" />
          <path d="M172 395 L182 395" stroke="#FF69B4" strokeWidth="2" />
        </g>
      ),
      thumbnail: '#FFFFFF'
    },
    {
      id: 'boots',
      name: 'Fashion Boots',
      category: 'shoes',
      color: '#8B4513',
      svg: (
        <g>
          {/* Left boot */}
          <rect x="112" y="340" width="28" height="55" rx="5" fill="#8B4513" />
          <ellipse cx="126" cy="402" rx="20" ry="10" fill="#654321" />
          <rect x="115" y="350" width="22" height="6" fill="#654321" />
          <rect x="115" y="365" width="22" height="6" fill="#654321" />
          {/* Right boot */}
          <rect x="160" y="340" width="28" height="55" rx="5" fill="#8B4513" />
          <ellipse cx="174" cy="402" rx="20" ry="10" fill="#654321" />
          <rect x="163" y="350" width="22" height="6" fill="#654321" />
          <rect x="163" y="365" width="22" height="6" fill="#654321" />
        </g>
      ),
      thumbnail: '#8B4513'
    },
    {
      id: 'sandals',
      name: 'Flower Sandals',
      category: 'shoes',
      color: '#FFD700',
      svg: (
        <g>
          {/* Left sandal */}
          <ellipse cx="130" cy="405" rx="18" ry="7" fill="#FFD700" />
          <path d="M115 398 L130 388 L145 398" stroke="#FFA500" strokeWidth="4" fill="none" />
          <circle cx="130" cy="392" r="6" fill="#FF69B4" />
          <circle cx="130" cy="392" r="2" fill="#FFD700" />
          {/* Right sandal */}
          <ellipse cx="170" cy="405" rx="18" ry="7" fill="#FFD700" />
          <path d="M155 398 L170 388 L185 398" stroke="#FFA500" strokeWidth="4" fill="none" />
          <circle cx="170" cy="392" r="6" fill="#FF69B4" />
          <circle cx="170" cy="392" r="2" fill="#FFD700" />
        </g>
      ),
      thumbnail: '#FFD700'
    },
    {
      id: 'ballet-shoes',
      name: 'Ballet Slippers',
      category: 'shoes',
      isSpecial: true,
      color: '#FFB6C1',
      svg: (
        <g>
          {/* Left ballet slipper */}
          <ellipse cx="130" cy="402" rx="18" ry="8" fill="#FFB6C1" />
          <path d="M118 395 Q130 385 142 395" fill="#FFB6C1" />
          {/* Ribbons */}
          <path d="M125 395 Q115 370 125 350" stroke="#FFB6C1" strokeWidth="4" fill="none" />
          <path d="M135 395 Q145 375 130 360" stroke="#FFB6C1" strokeWidth="4" fill="none" />
          {/* Right ballet slipper */}
          <ellipse cx="170" cy="402" rx="18" ry="8" fill="#FFB6C1" />
          <path d="M158 395 Q170 385 182 395" fill="#FFB6C1" />
          {/* Ribbons */}
          <path d="M165 395 Q155 370 165 350" stroke="#FFB6C1" strokeWidth="4" fill="none" />
          <path d="M175 395 Q185 375 170 360" stroke="#FFB6C1" strokeWidth="4" fill="none" />
        </g>
      ),
      thumbnail: '#FFB6C1'
    },
  ],

  accessories: [
    {
      id: 'tiara',
      name: 'Princess Tiara',
      category: 'accessory',
      isSpecial: true,
      color: '#FFD700',
      svg: (
        <g>
          <path d="M100 30 L115 5 L130 25 L150 -5 L170 25 L185 5 L200 30" stroke="#FFD700" strokeWidth="5" fill="none" />
          <path d="M100 30 L200 30" stroke="#FFD700" strokeWidth="5" />
          {/* Gems */}
          <circle cx="150" cy="8" r="8" fill="#FF69B4" />
          <circle cx="115" cy="15" r="5" fill="#87CEEB" />
          <circle cx="185" cy="15" r="5" fill="#87CEEB" />
          <circle cx="130" cy="20" r="4" fill="#FFD700" />
          <circle cx="170" cy="20" r="4" fill="#FFD700" />
        </g>
      ),
      thumbnail: '#FFD700'
    },
    {
      id: 'sunglasses',
      name: 'Star Glasses',
      category: 'accessory',
      color: '#FF69B4',
      svg: (
        <g>
          {/* Star-shaped lenses */}
          <polygon points="130,70 135,60 145,60 138,52 140,42 130,48 120,42 122,52 115,60 125,60" fill="#FF69B4" />
          <polygon points="170,70 175,60 185,60 178,52 180,42 170,48 160,42 162,52 155,60 165,60" fill="#FF69B4" />
          {/* Bridge */}
          <rect x="143" y="60" width="14" height="5" rx="2" fill="#FF1493" />
          {/* Arms */}
          <rect x="100" y="58" width="18" height="5" rx="2" fill="#FF1493" />
          <rect x="182" y="58" width="18" height="5" rx="2" fill="#FF1493" />
        </g>
      ),
      thumbnail: '#FF69B4'
    },
    {
      id: 'handbag',
      name: 'Cute Handbag',
      category: 'accessory',
      color: '#FF69B4',
      svg: (
        <g transform="translate(205, 220)">
          <rect x="0" y="15" width="40" height="35" rx="5" fill="#FF69B4" />
          <path d="M8 15 Q20 -5 32 15" stroke="#FF1493" strokeWidth="5" fill="none" />
          <circle cx="20" cy="30" r="6" fill="#FFD700" />
          <rect x="5" y="20" width="30" height="3" fill="#FF1493" />
        </g>
      ),
      thumbnail: '#FF69B4'
    },
    {
      id: 'necklace',
      name: 'Heart Necklace',
      category: 'accessory',
      color: '#FFD700',
      svg: (
        <g>
          <path d="M125 130 Q150 145 175 130" stroke="#FFD700" strokeWidth="3" fill="none" />
          {/* Heart pendant */}
          <path d="M145 145 Q145 138 150 145 Q155 138 155 145 L150 155 Z" fill="#FF69B4" stroke="#FFD700" strokeWidth="2" />
          {/* Chain details */}
          <circle cx="130" cy="132" r="3" fill="#FFD700" />
          <circle cx="140" cy="138" r="3" fill="#FFD700" />
          <circle cx="160" cy="138" r="3" fill="#FFD700" />
          <circle cx="170" cy="132" r="3" fill="#FFD700" />
        </g>
      ),
      thumbnail: '#FFD700'
    },
    {
      id: 'bow',
      name: 'Big Hair Bow',
      category: 'accessory',
      color: '#FF69B4',
      svg: (
        <g>
          <ellipse cx="195" cy="55" rx="25" ry="18" fill="#FF69B4" />
          <ellipse cx="235" cy="55" rx="25" ry="18" fill="#FF69B4" />
          <circle cx="215" cy="55" r="12" fill="#FF1493" />
          {/* Ribbon tails */}
          <path d="M215 67 L210 100 L220 100 Z" fill="#FF69B4" />
          <path d="M210 100 L205 90 L215 95" fill="#FFB6C1" />
        </g>
      ),
      thumbnail: '#FF69B4'
    },
    {
      id: 'crown',
      name: 'Queen Crown',
      category: 'accessory',
      isSpecial: true,
      color: '#FFD700',
      svg: (
        <g>
          {/* Crown base */}
          <rect x="105" y="25" width="90" height="25" rx="3" fill="#FFD700" />
          {/* Crown points */}
          <polygon points="110,25 120,0 130,25" fill="#FFD700" />
          <polygon points="140,25 150,-10 160,25" fill="#FFD700" />
          <polygon points="170,25 180,0 190,25" fill="#FFD700" />
          {/* Jewels */}
          <circle cx="120" cy="10" r="5" fill="#FF0000" />
          <circle cx="150" cy="0" r="7" fill="#FF69B4" />
          <circle cx="180" cy="10" r="5" fill="#00CED1" />
          <circle cx="130" cy="35" r="4" fill="#9370DB" />
          <circle cx="150" cy="35" r="5" fill="#FF0000" />
          <circle cx="170" cy="35" r="4" fill="#9370DB" />
        </g>
      ),
      thumbnail: '#FFD700'
    },
    {
      id: 'wings',
      name: 'Fairy Wings',
      category: 'accessory',
      isSpecial: true,
      color: '#E6E6FA',
      svg: (
        <g opacity="0.8">
          {/* Left wing */}
          <ellipse cx="70" cy="180" rx="50" ry="70" fill="url(#wingGradient)" />
          <ellipse cx="55" cy="220" rx="30" ry="45" fill="url(#wingGradient)" />
          {/* Right wing */}
          <ellipse cx="230" cy="180" rx="50" ry="70" fill="url(#wingGradient)" />
          <ellipse cx="245" cy="220" rx="30" ry="45" fill="url(#wingGradient)" />
          {/* Sparkles */}
          <circle cx="60" cy="160" r="4" fill="#FFD700" />
          <circle cx="80" cy="200" r="3" fill="#FFD700" />
          <circle cx="240" cy="160" r="4" fill="#FFD700" />
          <circle cx="220" cy="200" r="3" fill="#FFD700" />
          <defs>
            <linearGradient id="wingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E6E6FA" />
              <stop offset="50%" stopColor="#DDA0DD" />
              <stop offset="100%" stopColor="#FFB6C1" />
            </linearGradient>
          </defs>
        </g>
      ),
      thumbnail: '#E6E6FA'
    },
  ],

  hair: [
    {
      id: 'ponytail',
      name: 'High Ponytail',
      category: 'hair',
      color: '#F4D03F',
      svg: (
        <g>
          {/* Scrunchie */}
          <ellipse cx="150" cy="30" rx="20" ry="15" fill="#FF69B4" />
          {/* Ponytail */}
          <path d="M130 30 Q120 100 140 180 Q150 200 160 180 Q180 100 170 30" fill="currentColor" />
        </g>
      ),
      thumbnail: '#FF69B4'
    },
    {
      id: 'pigtails',
      name: 'Cute Pigtails',
      category: 'hair',
      color: '#F4D03F',
      svg: (
        <g>
          {/* Left pigtail holder */}
          <circle cx="95" cy="60" r="10" fill="#FF69B4" />
          {/* Left pigtail */}
          <path d="M85 60 Q70 120 80 180" stroke="currentColor" strokeWidth="20" fill="none" strokeLinecap="round" />
          {/* Right pigtail holder */}
          <circle cx="205" cy="60" r="10" fill="#FF69B4" />
          {/* Right pigtail */}
          <path d="M215 60 Q230 120 220 180" stroke="currentColor" strokeWidth="20" fill="none" strokeLinecap="round" />
        </g>
      ),
      thumbnail: '#FF69B4'
    },
  ],
};

export const getAllClothes = () => {
  return [
    ...clothes.dresses,
    ...clothes.tops,
    ...clothes.bottoms,
    ...clothes.shoes,
    ...clothes.accessories,
    ...clothes.hair,
  ];
};

export const getClothesByCategory = (category) => {
  switch (category) {
    case 'dress':
      return clothes.dresses;
    case 'top':
      return clothes.tops;
    case 'bottom':
      return clothes.bottoms;
    case 'shoes':
      return clothes.shoes;
    case 'accessory':
      return clothes.accessories;
    case 'hair':
      return clothes.hair;
    default:
      return [];
  }
};
