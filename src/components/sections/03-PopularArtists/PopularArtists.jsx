import React from 'react';
import { SectionHeader } from '../../common/SectionHeader';
import {
  popularArtistsData,
  popularArtists as POPULAR_ARTISTS,
  puzzlePieces as PUZZLE_PIECES,
  wheelGeometry
} from './PopularArtistsData';

const { CX, CY, R_IN, R_HOLE, R_BEVEL, R_OUTER } = wheelGeometry;

/* =========================================================================

   3. POPULAR ARTISTS SECTION (JIGSAW PUZZLE WHEEL)

   ========================================================================= */

/**

 * Geometric constants for the Master SVG Wheel

 * Center: (811, 443)

 * Outer silver rim: R=379, Bevel: R=363, Segments: R=360.5, Inner silver ring: R=149, Center hole: R=77

 */

/* Wheel constants imported from PopularArtistsData */



/**

 * 8 Interlocking Puzzle Segments data

 * Neighboring pieces share identical boundary coordinates (zero gap, zero overlap).

 */

/* PUZZLE_PIECES imported from PopularArtistsData */



/**

 * Reusable Wheel Component with 8 puzzle pieces, artists, and metallic rings

 */

const PuzzleWheel = ({ idPrefix = 'pw', onSelectArtist, isMobile = false }) => (

  <>

    <defs>

      {/* W3C Browser-Compatible Linear Gradients for Metallic Rings */}

      <linearGradient id={`${idPrefix}-inner-metal-grad`} x1="0%" y1="0%" x2="100%" y2="100%">

        <stop offset="0%" stopColor="#b8b8bc" />

        <stop offset="28%" stopColor="#f2f2f4" />

        <stop offset="50%" stopColor="#929296" />

        <stop offset="75%" stopColor="#dedee2" />

        <stop offset="100%" stopColor="#7e7e82" />

      </linearGradient>



      <linearGradient id={`${idPrefix}-outer-metal-grad`} x1="100%" y1="0%" x2="0%" y2="100%">

        <stop offset="0%" stopColor="#d2d2d6" />

        <stop offset="35%" stopColor="#f5f5f7" />

        <stop offset="68%" stopColor="#9c9ca0" />

        <stop offset="100%" stopColor="#c6c6ca" />

      </linearGradient>



      {/* Recessed Center White Opening */}

      <radialGradient id={`${idPrefix}-center-recess`} cx="48%" cy="46%" r="54%">

        <stop offset="0%" stopColor="#ffffff" />

        <stop offset="85%" stopColor="#ffffff" />

        <stop offset="100%" stopColor="#d6d6da" />

      </radialGradient>



      {/* Drop Shadows */}

      <filter id={`${idPrefix}-avatar-shadow`} x="-30%" y="-30%" width="160%" height="160%">

        <feDropShadow dx="0" dy="2.5" stdDeviation="3.5" floodColor="#000000" floodOpacity="0.30" />

      </filter>

      <filter id={`${idPrefix}-text-glow`} x="-25%" y="-25%" width="150%" height="150%">

        <feDropShadow dx="0" dy="1.5" stdDeviation="2" floodColor="#000000" floodOpacity="0.80" />

      </filter>



      {/* Clip Paths for Circular Artist Portraits */}
      {PUZZLE_PIECES.map((piece) => {
        const r = isMobile ? 50 : 48;
        const cy = piece.ay - 14.0;
        return (
          <clipPath key={`clip-${idPrefix}-${piece.index}`} id={`${idPrefix}-artist-clip-${piece.index}`}>
            <circle cx={piece.ax} cy={cy} r={r} />
          </clipPath>
        );
      })}
    </defs>

    {/* Continuous 360-degree Rotating Puzzle Wheel */}
    <g
      id={`${idPrefix}-rotating-wheel`}
      className="animate-puzzle-wheel-spin"
      style={{
        transformBox: 'view-box',
        transformOrigin: `${CX}px ${CY}px`,
      }}
    >
      {/* Outer Metallic Ring & Dark Outer Rim Bevel */}
      <g id={`${idPrefix}-outer-metallic-ring`}>
        <circle cx={CX} cy={CY} r={R_OUTER} fill={`url(#${idPrefix}-outer-metal-grad)`} stroke="#3a3a3e" strokeWidth="2" />
        <circle cx={CX} cy={CY} r={R_BEVEL} fill="none" stroke="#1c1c1f" strokeWidth="3" />
      </g>

      {/* The 8 Puzzle Pieces & Embedded Artists (Avatars + Names) */}
      <g id={`${idPrefix}-puzzle-segments`}>
        {PUZZLE_PIECES.map((piece) => {
          const artist = POPULAR_ARTISTS[piece.index] || {
            name: 'Artist',
            followers: '',
            image: '',
          };
          const isYellow = piece.index === 3;
          const textFill = isYellow ? '#1e293b' : '#ffffff';
          const subFill = isYellow ? '#475569' : 'rgba(255,255,255,0.92)';
          const filterAttr = isYellow ? undefined : `url(#${idPrefix}-text-glow)`;
          
          // Balanced vertical alignment with enlarged circular avatar
          const avatarR = isMobile ? 50 : 48;
          const avatarDiameter = avatarR * 2;
          const avatarY = piece.ay - 14.0;
          const nameY = isMobile ? piece.ay + 55.0 : piece.ay + 52.0;
          const followerY = isMobile ? piece.ay + 72.0 : piece.ay + 68.0;

          return (
            <g 
              key={`piece-${idPrefix}-${piece.index}`} 
              className="group cursor-pointer transition-transform duration-200"
              onClick={() => onSelectArtist?.(artist)}
              tabIndex="0"
              role="button"
              aria-label={`${artist.name} - ${artist.followers}`}
            >
              {/* Puzzle Segment Path */}
              <path
                id={`${idPrefix}-puzzle-piece-${piece.index}`}
                d={piece.d}
                fill={piece.color}
                stroke="#1c1c1f"
                strokeWidth="3.5"
                strokeLinejoin="round"
                className="transition-all duration-300 group-hover:brightness-110"
              />

              {/* Counter-Rotating Artist Card (Avatar + Text): keeps cards 100% upright & horizontal */}
              <g
                className="animate-puzzle-card-counter"
                style={{
                  transformBox: 'view-box',
                  transformOrigin: `${piece.ax}px ${piece.ay}px`,
                }}
              >
                <g className="transition-transform duration-300 group-hover:scale-105" style={{ transformOrigin: `${piece.ax}px ${piece.ay}px` }}>
                  {/* Artist Avatar Badge */}
                  <circle
                    cx={piece.ax}
                    cy={avatarY}
                    r={avatarR + 2.5}
                    fill="#ffffff"
                    filter={`url(#${idPrefix}-avatar-shadow)`}
                  />
                  <image
                    href={artist.image}
                    x={piece.ax - avatarR}
                    y={avatarY - avatarR}
                    width={avatarDiameter}
                    height={avatarDiameter}
                    clipPath={`url(#${idPrefix}-artist-clip-${piece.index})`}
                    preserveAspectRatio="xMidYMid slice"
                  />
                  <circle
                    cx={piece.ax}
                    cy={avatarY}
                    r={avatarR + 1.2}
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth={isMobile ? 3.5 : 3}
                  />

                  {/* Artist Name & Follower Labels */}
                  <text
                    x={piece.ax}
                    y={nameY}
                    textAnchor="middle"
                    fontFamily="system-ui, -apple-system, sans-serif"
                    fontWeight="800"
                    fontSize={isMobile ? "16" : "14.5"}
                    fill={textFill}
                    filter={filterAttr}
                    className="pointer-events-none select-none"
                  >
                    {artist.name}
                  </text>
                  <text
                    x={piece.ax}
                    y={followerY}
                    textAnchor="middle"
                    fontFamily="system-ui, -apple-system, sans-serif"
                    fontWeight="600"
                    fontSize={isMobile ? "12.5" : "11.5"}
                    fill={subFill}
                    filter={filterAttr}
                    className="pointer-events-none select-none"
                  >
                    {artist.followers}
                  </text>
                </g>
              </g>
            </g>
          );
        })}
      </g>

      {/* Inner Metallic Ring */}

      <g id={`${idPrefix}-inner-metallic-ring`} className="pointer-events-none">

        <path

          d={`M ${CX - R_IN} ${CY} A ${R_IN} ${R_IN} 0 1 0 ${CX + R_IN} ${CY} A ${R_IN} ${R_IN} 0 1 0 ${CX - R_IN} ${CY} M ${CX - R_HOLE} ${CY} A ${R_HOLE} ${R_HOLE} 0 1 1 ${CX + R_HOLE} ${CY} A ${R_HOLE} ${R_HOLE} 0 1 1 ${CX - R_HOLE} ${CY} Z`}

          fill={`url(#${idPrefix}-inner-metal-grad)`}

          stroke="#2a2a2d"

          strokeWidth="2"

        />

      </g>



      {/* Center Recessed White Opening */}

      <g id={`${idPrefix}-center-opening`} className="pointer-events-none">

        <circle

          cx={CX}

          cy={CY}

          r={R_HOLE}

          fill={`url(#${idPrefix}-center-recess)`}

          stroke="#d1d1d6"

          strokeWidth="2.5"

        />

      </g>

    </g>

  </>

);



export const PopularArtists = ({ onSelectArtist }) => {

  return (

    <section id="popular-artists" aria-label="Popular Artists" 

      className="relative w-full mt-10 sm:mt-14 lg:mt-18 select-none overflow-hidden"

    >

      {/* Centered Section Header */}

      <div className="w-full max-w-[1620px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">

        <SectionHeader 

          titlePrefix={popularArtistsData.titlePrefix} 

          titleAccent={popularArtistsData.titleAccent} 

          subtitle={popularArtistsData.subtitle} 

          centered={true}

        />

      </div>



      {/* 

        1. DESKTOP VIEW (>= 1024px):

        Wide panoramic layout with flowing blue waves, 6 floating circles, and central puzzle wheel.

        All purple arrows, dotted lines, and chevrons removed for ultra-clean minimalist look.

      */}

      <div className="hidden lg:flex w-full max-w-[1620px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 justify-center items-center overflow-x-hidden">

        <svg

          viewBox="0 0 1648 928"

          className="w-full h-auto select-none block puzzle-wheel-rotator"

          preserveAspectRatio="xMidYMid meet"

          role="img"

          aria-label="Popular Artists Interlocking Puzzle Infographic"

        >

          {/* Background Waves (Behind central puzzle wheel) */}

          <g id="bg-waves">

            {/* Left flowing wave ribbons */}

            <path 

              d="M -20 210 L 0 210 C 140 210, 240 260, 350 370 C 440 450, 600 480, 811 480 L 811 580 C 600 580, 440 600, 350 560 C 240 520, 120 490, 0 490 L -20 490 Z" 

              fill="#dcebfe" 

              opacity="0.85" 

            />

            <path 

              d="M -20 280 L 0 280 C 120 280, 220 340, 330 440 C 420 530, 560 560, 811 560 L 811 620 C 600 620, 450 620, 340 565 C 220 510, 100 460, 0 460 L -20 460 Z" 

              fill="#93c5fd" 

              opacity="0.9" 

            />

            <path 

              d="M -20 350 L 0 350 C 100 350, 180 400, 260 480 C 330 550, 420 580, 500 580 C 580 580, 680 570, 780 560 L 780 595 C 670 605, 570 615, 490 615 C 390 615, 290 580, 220 510 C 140 430, 80 400, 0 395 L -20 395 Z" 

              fill="#2563eb" 

            />



            {/* Right flowing wave ribbons (Perfect Harmonic Mirror of Left Side) */}

            <path 

              d="M 1668.6 210.0 L 1648.0 210.0 C 1503.5 210.0, 1400.3 260.0, 1286.8 370.0 C 1193.9 450.0, 1028.8 480.0, 811.0 480.0 L 811.0 580.0 C 1028.8 580.0, 1193.9 600.0, 1286.8 560.0 C 1400.3 520.0, 1524.2 490.0, 1648.0 490.0 L 1668.6 490.0 Z" 

              fill="#dcebfe" 

              opacity="0.85" 

            />

            <path 

              d="M 1668.6 280.0 L 1648.0 280.0 C 1524.2 280.0, 1420.9 340.0, 1307.4 440.0 C 1214.5 530.0, 1070.0 560.0, 811.0 560.0 L 811.0 620.0 C 1028.8 620.0, 1183.6 620.0, 1297.1 565.0 C 1420.9 510.0, 1544.8 460.0, 1648.0 460.0 L 1668.6 460.0 Z" 

              fill="#93c5fd" 

              opacity="0.9" 

            />

            <path 

              d="M 1668.6 350.0 L 1648.0 350.0 C 1544.8 350.0, 1462.2 400.0, 1379.7 480.0 C 1307.4 550.0, 1214.5 580.0, 1132.0 580.0 C 1049.4 580.0, 946.2 570.0, 843.0 560.0 L 843.0 595.0 C 956.5 605.0, 1059.7 615.0, 1142.3 615.0 C 1245.5 615.0, 1348.7 580.0, 1420.9 510.0 C 1503.5 430.0, 1565.4 400.0, 1648.0 395.0 L 1668.6 395.0 Z" 

              fill="#2563eb" 

            />

          </g>



          {/* Floating Side Circles (3 Left, 3 Right) */}

          <g id="floating-circles-left">

            <circle cx="171.0" cy="357.0" r="48" fill="#7708bc" stroke="#ffffff" strokeWidth="7" />

            <circle cx="265.8" cy="441.0" r="48" fill="#0069e9" stroke="#ffffff" strokeWidth="7" />

            <circle cx="375.0" cy="522.6" r="48" fill="#14a8fe" stroke="#ffffff" strokeWidth="7" />

          </g>



          <g id="floating-circles-right">

            <circle cx="1297.0" cy="523.8" r="48" fill="#0088f8" stroke="#ffffff" strokeWidth="7" />

            <circle cx="1418.2" cy="441.0" r="48" fill="#7607bb" stroke="#ffffff" strokeWidth="7" />

            <circle cx="1521.4" cy="354.6" r="48" fill="#015ce0" stroke="#ffffff" strokeWidth="7" />

          </g>



          {/* Central Puzzle Wheel */}

          <PuzzleWheel idPrefix="desk" onSelectArtist={onSelectArtist} isMobile={false} />

        </svg>

      </div>



      {/* 

        2. MOBILE & TABLET VIEW (< 1024px):

        Focused, large, touch-friendly circular puzzle wheel.

        Eliminates the tiny shrunken display on small screens.

        Avatars, names, and follower counters are large and crystal clear.

      */}

      <div className="flex lg:hidden w-full justify-center items-center px-4 sm:px-6 py-4">

        <div className="w-full max-w-[390px] sm:max-w-[490px] md:max-w-[590px] mx-auto">

          <svg

            viewBox="406 38 810 810"

            className="w-full h-auto select-none block drop-shadow-md puzzle-wheel-rotator"

            preserveAspectRatio="xMidYMid meet"

            role="img"

            aria-label="Popular Artists Interlocking Puzzle Wheel"

          >

            <PuzzleWheel idPrefix="mob" onSelectArtist={onSelectArtist} isMobile={true} />

          </svg>

        </div>

      </div>

    </section>

  );

};


export default PopularArtists;
