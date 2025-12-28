export const rooms = [
  {
    id: 'bedroom',
    name: 'Bedroom',
    icon: '🛏️',
    background: 'linear-gradient(180deg, #FFB6C1 0%, #FFC0CB 50%, #FFDAB9 100%)',
    decorations: [
      { type: 'bed', x: '10%', y: '60%' },
      { type: 'mirror', x: '75%', y: '30%' },
      { type: 'lamp', x: '85%', y: '20%' },
    ]
  },
  {
    id: 'living',
    name: 'Living Room',
    icon: '🛋️',
    background: 'linear-gradient(180deg, #E6E6FA 0%, #DDA0DD 50%, #FFB6C1 100%)',
    decorations: [
      { type: 'sofa', x: '15%', y: '65%' },
      { type: 'tv', x: '70%', y: '25%' },
      { type: 'plant', x: '85%', y: '55%' },
    ]
  },
  {
    id: 'kitchen',
    name: 'Kitchen',
    icon: '🍳',
    background: 'linear-gradient(180deg, #FFFACD 0%, #FFE4B5 50%, #FFDAB9 100%)',
    decorations: [
      { type: 'fridge', x: '10%', y: '35%' },
      { type: 'table', x: '60%', y: '65%' },
      { type: 'cupcake', x: '65%', y: '55%' },
    ]
  },
  {
    id: 'garden',
    name: 'Garden',
    icon: '🌸',
    background: 'linear-gradient(180deg, #87CEEB 0%, #98FB98 50%, #90EE90 100%)',
    decorations: [
      { type: 'flowers', x: '10%', y: '70%' },
      { type: 'pool', x: '60%', y: '65%' },
      { type: 'butterfly', x: '80%', y: '20%' },
    ]
  }
];

export const roomDecorations = {
  bed: (
    <g>
      <rect x="0" y="20" width="120" height="80" rx="10" fill="#FF69B4" />
      <rect x="5" y="25" width="110" height="40" rx="5" fill="#FFB6C1" />
      <ellipse cx="30" cy="35" rx="20" ry="15" fill="#FFF0F5" />
      <ellipse cx="90" cy="35" rx="20" ry="15" fill="#FFF0F5" />
      <rect x="0" y="0" width="120" height="25" rx="5" fill="#DDA0DD" />
    </g>
  ),
  mirror: (
    <g>
      <ellipse cx="40" cy="50" rx="35" ry="45" fill="#FFD700" />
      <ellipse cx="40" cy="50" rx="30" ry="40" fill="#E0FFFF" />
      <ellipse cx="35" cy="40" rx="10" ry="15" fill="rgba(255,255,255,0.5)" />
    </g>
  ),
  lamp: (
    <g>
      <rect x="15" y="50" width="10" height="40" fill="#DDA0DD" />
      <path d="M0 50 L40 50 L30 20 L10 20 Z" fill="#FFB6C1" />
      <ellipse cx="20" cy="18" rx="8" ry="4" fill="#FFD700" />
    </g>
  ),
  sofa: (
    <g>
      <rect x="0" y="30" width="140" height="50" rx="15" fill="#FF69B4" />
      <rect x="5" y="35" width="40" height="40" rx="10" fill="#FFB6C1" />
      <rect x="95" y="35" width="40" height="40" rx="10" fill="#FFB6C1" />
      <rect x="10" y="0" width="30" height="35" rx="10" fill="#FF69B4" />
      <rect x="100" y="0" width="30" height="35" rx="10" fill="#FF69B4" />
    </g>
  ),
  tv: (
    <g>
      <rect x="0" y="0" width="80" height="55" rx="5" fill="#333" />
      <rect x="5" y="5" width="70" height="40" rx="3" fill="#87CEEB" />
      <rect x="35" y="55" width="10" height="15" fill="#333" />
      <rect x="20" y="70" width="40" height="5" rx="2" fill="#333" />
    </g>
  ),
  plant: (
    <g>
      <rect x="10" y="40" width="30" height="35" rx="5" fill="#FF69B4" />
      <ellipse cx="25" cy="30" rx="20" ry="25" fill="#90EE90" />
      <ellipse cx="15" cy="20" rx="12" ry="15" fill="#98FB98" />
      <ellipse cx="35" cy="25" rx="10" ry="12" fill="#98FB98" />
    </g>
  ),
  fridge: (
    <g>
      <rect x="0" y="0" width="60" height="100" rx="5" fill="#FFB6C1" />
      <rect x="5" y="5" width="50" height="40" rx="3" fill="#FFF0F5" />
      <rect x="5" y="50" width="50" height="45" rx="3" fill="#FFF0F5" />
      <circle cx="50" cy="25" r="4" fill="#FF69B4" />
      <circle cx="50" cy="72" r="4" fill="#FF69B4" />
    </g>
  ),
  table: (
    <g>
      <ellipse cx="50" cy="20" rx="50" ry="20" fill="#DDA0DD" />
      <rect x="20" y="20" width="10" height="50" fill="#BA55D3" />
      <rect x="70" y="20" width="10" height="50" fill="#BA55D3" />
    </g>
  ),
  cupcake: (
    <g>
      <path d="M10 25 L5 40 L35 40 L30 25 Z" fill="#FFB6C1" />
      <ellipse cx="20" cy="20" rx="15" ry="12" fill="#FF69B4" />
      <ellipse cx="20" cy="12" rx="5" ry="8" fill="#FFF0F5" />
      <circle cx="20" cy="5" r="4" fill="#FF0000" />
    </g>
  ),
  flowers: (
    <g>
      <rect x="25" y="50" width="5" height="30" fill="#228B22" />
      <rect x="45" y="45" width="5" height="35" fill="#228B22" />
      <rect x="65" y="55" width="5" height="25" fill="#228B22" />
      <circle cx="27" cy="45" r="12" fill="#FF69B4" />
      <circle cx="47" cy="40" r="12" fill="#FFD700" />
      <circle cx="67" cy="50" r="12" fill="#DDA0DD" />
      <circle cx="27" cy="45" r="5" fill="#FFD700" />
      <circle cx="47" cy="40" r="5" fill="#FF69B4" />
      <circle cx="67" cy="50" r="5" fill="#FFD700" />
    </g>
  ),
  pool: (
    <g>
      <ellipse cx="50" cy="35" rx="50" ry="30" fill="#87CEEB" />
      <ellipse cx="50" cy="35" rx="45" ry="25" fill="#ADD8E6" />
      <ellipse cx="40" cy="30" rx="15" ry="8" fill="rgba(255,255,255,0.4)" />
    </g>
  ),
  butterfly: (
    <g>
      <ellipse cx="20" cy="15" rx="15" ry="12" fill="#FF69B4" />
      <ellipse cx="40" cy="15" rx="15" ry="12" fill="#FF69B4" />
      <ellipse cx="20" cy="30" rx="12" ry="10" fill="#DDA0DD" />
      <ellipse cx="40" cy="30" rx="12" ry="10" fill="#DDA0DD" />
      <rect x="28" y="5" width="4" height="35" rx="2" fill="#333" />
      <circle cx="25" cy="15" r="3" fill="#FFD700" />
      <circle cx="35" cy="15" r="3" fill="#FFD700" />
    </g>
  ),
};
