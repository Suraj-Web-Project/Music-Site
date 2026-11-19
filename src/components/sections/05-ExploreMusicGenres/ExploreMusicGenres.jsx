import React, { useState } from 'react';
import {
  exploreMusicGenresData,
  genres as GENRES,
  genreAssets,
} from './ExploreMusicGenresData';

const {
  headphonesStageImg,
  equalizerWaveformImg,
  notePurpleImg,
  notePinkImg,
  neonRingImg,
  glowOrbImg,
  badgePillImg,
  swooshUnderlineImg,
  btnViewAllImg,
  waveRibbonLeftImg,
  waveHillsCenterImg,
  cardBaseBgImg,
  dottedGridImg,
} = genreAssets;

/* Continuous Pulsating Neon Audio Waveform Component */
const AnimatedAudioWaveform = () => (
  <div 
    className="absolute z-20 pointer-events-none"
    style={{ left: '25.64%', top: '35.62%', width: '41.96%', height: '30.53%' }}
    aria-hidden="true"
  >
    <svg viewBox="0 0 180 120" className="w-full h-full anim-audio-beat-pulse overflow-visible">
      {/* Broad Atmospheric Magenta Glow */}
      <path 
        d="M 12 75 L 41 75 L 54 48 L 73 94 L 98 10 L 120 94 L 138 48 L 148 72" 
        fill="none" 
        stroke="#ff007f" 
        strokeWidth="8" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        opacity="0.55"
      />
      {/* Crisp Neon Tube */}
      <path 
        d="M 12 75 L 41 75 L 54 48 L 73 94 L 98 10 L 120 94 L 138 48 L 148 72" 
        fill="none" 
        stroke="#ff1493" 
        strokeWidth="4.8" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        opacity="0.9"
      />
      {/* Primary Electric Light Surge (Flows through the wave) */}
      <path 
        d="M 12 75 L 41 75 L 54 48 L 73 94 L 98 10 L 120 94 L 138 48 L 148 72" 
        fill="none" 
        stroke="#ffffff" 
        strokeWidth="2.6" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="anim-wave-spark-fast"
      />
      {/* Secondary Trailing Energy Spark */}
      <path 
        d="M 12 75 L 41 75 L 54 48 L 73 94 L 98 10 L 120 94 L 138 48 L 148 72" 
        fill="none" 
        stroke="#fce7f3" 
        strokeWidth="1.8" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="anim-wave-spark-slow"
        opacity="0.8"
      />
      {/* Glowing Neon Peak Node Highlights */}
      <circle cx="54" cy="48" r="3.2" fill="#ffffff" className="anim-node-pulse" />
      <circle cx="98" cy="10" r="3.8" fill="#ffffff" className="anim-node-pulse" />
      <circle cx="138" cy="48" r="3.2" fill="#ffffff" className="anim-node-pulse" />
    </svg>
  </div>
);

export const ExploreMusicGenres = ({ onSelectGenre, onViewAllGenres }) => {
  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleGenreClick = (genreName) => {
    setSelectedGenre((prev) => (prev === genreName ? null : genreName));
    onSelectGenre?.(genreName);
  };

  return (
    <section 
      id="explore-music-genres"
      aria-label="Explore Music Genres" 
      className="relative w-full max-w-[1620px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 mt-12 sm:mt-16 lg:mt-20 select-none scroll-mt-24"
    >
      {/* Dynamic Soundwave & Neon Audio Keyframes */}
      <style>{`
        @keyframes audioBeatPulse {
          0%, 100% {
            filter: drop-shadow(0 0 5px #ff007f) drop-shadow(0 0 12px rgba(255, 0, 128, 0.7));
            opacity: 0.92;
            transform: scaleY(1);
          }
          25% {
            filter: drop-shadow(0 0 16px #ff007f) drop-shadow(0 0 32px rgba(255, 0, 128, 0.95)) drop-shadow(0 0 48px rgba(236, 72, 153, 0.8));
            opacity: 1;
            transform: scaleY(1.08);
          }
          50% {
            filter: drop-shadow(0 0 4px #ff007f) drop-shadow(0 0 10px rgba(255, 0, 128, 0.6));
            opacity: 0.88;
            transform: scaleY(0.96);
          }
          75% {
            filter: drop-shadow(0 0 13px #ff007f) drop-shadow(0 0 24px rgba(255, 0, 128, 0.85));
            opacity: 0.97;
            transform: scaleY(1.04);
          }
        }
        @keyframes waveSparkFast {
          0% { stroke-dashoffset: 320; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes waveSparkSlow {
          0% { stroke-dashoffset: 300; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes nodeGlowPulse {
          0%, 100% {
            opacity: 0.75;
            transform: scale(0.9);
          }
          25% {
            opacity: 1;
            transform: scale(1.25);
            filter: drop-shadow(0 0 6px #ffffff);
          }
          50% {
            opacity: 0.65;
            transform: scale(0.85);
          }
          75% {
            opacity: 0.95;
            transform: scale(1.15);
          }
        }
        .anim-audio-beat-pulse {
          animation: audioBeatPulse 1.4s ease-in-out infinite;
          transform-origin: 50% 65%;
        }
        .anim-wave-spark-fast {
          stroke-dasharray: 48 180;
          animation: waveSparkFast 1.5s linear infinite;
        }
        .anim-wave-spark-slow {
          stroke-dasharray: 24 140;
          animation: waveSparkSlow 2.2s linear infinite reverse;
        }
        .anim-node-pulse {
          animation: nodeGlowPulse 1.4s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: center;
        }
      `}</style>
      {/* MASTER CARD CONTAINER WITH GRADIENT & BOTTOM WAVES */}
      <div className="relative w-full rounded-3xl sm:rounded-[36px] lg:rounded-[42px] overflow-hidden shadow-[0_24px_70px_rgba(130,50,210,0.16)] border border-purple-200/80 bg-gradient-to-br from-[#fbf8fe] via-[#f5effb] to-[#ecdef9]">
        
        {/* Seamless Layered Bottom Waves */}
        <div className="absolute inset-x-0 bottom-0 pointer-events-none overflow-hidden h-[180px] sm:h-[220px] lg:h-[280px] xl:h-[310px] z-0">
          <img 
            src={cardBaseBgImg} 
            alt="" 
            aria-hidden="true" 
            className="absolute inset-x-0 bottom-0 w-full h-[65%] sm:h-[70%] object-cover object-bottom pointer-events-none opacity-90" 
          />
          <img 
            src={waveHillsCenterImg} 
            alt="" 
            aria-hidden="true" 
            className="absolute bottom-0 left-[34%] sm:left-[38%] lg:left-[42%] w-[48%] sm:w-[44%] lg:w-[42%] max-w-[620px] h-[85%] sm:h-[90%] object-contain object-bottom pointer-events-none opacity-85 z-0" 
          />
          <img 
            src={waveRibbonLeftImg} 
            alt="" 
            aria-hidden="true" 
            className="absolute bottom-0 left-0 w-[78%] sm:w-[74%] lg:w-[70%] max-w-[1080px] h-full object-contain object-bottom pointer-events-none opacity-95 z-10" 
          />
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center p-6 sm:p-10 md:p-12 lg:p-14 xl:p-16">
          
          {/* ================================================================
              LEFT COLUMN: BADGE, HEADINGS, PILLS, AND CTA
              ================================================================ */}
          <div className="lg:col-span-7 flex flex-col items-start justify-center">
            
            {/* 1. TOP PILL BADGE */}
            <div className="mb-4 sm:mb-5">
              <img 
                src={badgePillImg} 
                alt="Explore Music Genres" 
                className="h-8 sm:h-9 lg:h-[35px] w-auto object-contain select-none" 
                loading="eager"
              />
            </div>

            {/* 2. MAIN HEADING WITH SLICED SWOOSH FLOURISH */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] 2xl:text-[50px] font-extrabold tracking-tight text-[#150a2e] leading-none mb-3 sm:mb-4 select-none">
              {exploreMusicGenresData.titlePrefix} <br />
              <span className="relative inline-block mt-1 sm:mt-1.5">
                <span 
                  className="italic font-extrabold bg-gradient-to-r from-[#470d70] via-[#9315a0] to-[#e5187e] bg-clip-text text-transparent pr-1"
                  style={{ letterSpacing: '-0.01em' }}
                >
                  {exploreMusicGenresData.titleAccent}
                </span>
                <img 
                  src={swooshUnderlineImg} 
                  alt="" 
                  aria-hidden="true" 
                  className="absolute -bottom-2 sm:-bottom-2.5 lg:-bottom-3 left-0 w-[140px] sm:w-[165px] lg:w-[185px] h-auto pointer-events-none select-none" 
                />
              </span>
            </h2>

            {/* 3. SUBTITLE */}
            <p className="text-xs sm:text-sm lg:text-[15px] text-[#4d4668] font-medium leading-relaxed max-w-[390px] mb-6 sm:mb-8 select-none">
              Discover music by genre and find the perfect sound for every mood.
            </p>

            {/* MOBILE ONLY: 3D Headphones Artwork centered right after subtitle */}
            <div className="lg:hidden w-full max-w-[340px] sm:max-w-[400px] mx-auto aspect-square relative flex items-center justify-center my-4 select-none pointer-events-none">
              <img 
                src={glowOrbImg} 
                alt="" 
                aria-hidden="true" 
                className="absolute w-[70%] h-auto opacity-70 animate-pulse pointer-events-none"
              />
              <img 
                src={neonRingImg} 
                alt="" 
                aria-hidden="true" 
                className="absolute w-[64%] h-auto opacity-80 pointer-events-none"
              />
              <div className="absolute left-[0%] top-[30%] w-[36%] h-auto pointer-events-none z-0">
                <img 
                  src={equalizerWaveformImg} 
                  alt="" 
                  aria-hidden="true" 
                  className="w-full h-auto drop-shadow-[0_0_12px_rgba(217,70,239,0.5)] animate-pulse"
                />
              </div>
              <div className="absolute left-[20%] top-[6%] w-[12%] h-auto animate-bounce pointer-events-none z-20">
                <img src={notePurpleImg} alt="" aria-hidden="true" className="w-full h-auto drop-shadow-md" />
              </div>
              <div className="absolute right-[4%] top-[24%] w-[10%] h-auto animate-bounce pointer-events-none z-20">
                <img src={notePinkImg} alt="" aria-hidden="true" className="w-full h-auto drop-shadow-md" />
              </div>
              {/* Hero 3D Headphones on Pedestal with Live Animated Soundwave */}
              <div className="relative z-10 w-[86%] flex items-center justify-center pointer-events-none">
                <img 
                  src={headphonesStageImg} 
                  alt="3D Headphones on stage" 
                  className="w-full h-auto object-contain drop-shadow-[0_16px_32px_rgba(147,51,234,0.3)] block pointer-events-none"
                />
                <AnimatedAudioWaveform />
              </div>
            </div>

            {/* 4. GENRE PILLS - NATURAL BALANCED WRAP (2 ROWS ON DESKTOP, 3 ROWS ON MOBILE) */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 lg:gap-3 mb-7 sm:mb-9 w-full max-w-[490px] xl:max-w-[520px]">
              {GENRES.map((genre) => {
                const isSelected = selectedGenre === genre.name;
                return (
                  <button
                    key={genre.id}
                    type="button"
                    onClick={() => handleGenreClick(genre.name)}
                    title={`Select ${genre.name}`}
                    aria-label={`Select ${genre.name} genre`}
                    aria-pressed={isSelected}
                    className={`
                      relative rounded-full transition-transform duration-200 cursor-pointer select-none outline-none
                      ${isSelected 
                        ? 'scale-105 drop-shadow-[0_4px_12px_rgba(217,70,239,0.45)]' 
                        : 'hover:scale-105 active:scale-95'
                      }
                    `}
                  >
                    <img 
                      src={genre.img} 
                      alt={genre.name} 
                      className={`h-[34px] sm:h-9 lg:h-[38px] w-auto object-contain pointer-events-none rounded-full transition-all ${
                        isSelected ? 'ring-2 ring-fuchsia-500' : ''
                      }`} 
                    />
                  </button>
                );
              })}
            </div>

            {/* 5. PRIMARY CTA BUTTON: "View All Genres →" */}
            <button
              type="button"
              onClick={() => onViewAllGenres?.()}
              title="View All Genres"
              aria-label="View All Genres"
              className="relative group inline-block transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] cursor-pointer select-none outline-none"
            >
              <img 
                src={btnViewAllImg} 
                alt="View All Genres" 
                className="h-11 sm:h-12 lg:h-[48px] w-auto object-contain drop-shadow-[0_8px_20px_rgba(191,23,126,0.38)] group-hover:drop-shadow-[0_12px_28px_rgba(191,23,126,0.55)] transition-all duration-300 pointer-events-none" 
              />
            </button>

          </div>

          {/* ================================================================
              RIGHT COLUMN (DESKTOP): 3D HEADPHONES ON PEDESTAL STAGE & ATMOSPHERE
              ================================================================ */}
          <div className="hidden lg:flex lg:col-span-5 items-center justify-center relative">
            <div className="relative w-full max-w-[480px] xl:max-w-[540px] aspect-[1/1] flex items-center justify-center select-none pointer-events-none">
              
              {/* Layer 1: Soft Ambient Glow Orb */}
              <img 
                src={glowOrbImg} 
                alt="" 
                aria-hidden="true" 
                className="absolute w-[68%] h-auto opacity-75 animate-pulse pointer-events-none"
                style={{ animationDuration: '4s' }}
              />

              {/* Layer 2: Neon Ring */}
              <img 
                src={neonRingImg} 
                alt="" 
                aria-hidden="true" 
                className="absolute w-[62%] h-auto opacity-80 pointer-events-none"
              />

              {/* Layer 3: Equalizer Waveform (positioned to the left of headphones) */}
              <div className="absolute left-[-2%] sm:left-[0%] top-[30%] w-[36%] h-auto pointer-events-none z-0">
                <img 
                  src={equalizerWaveformImg} 
                  alt="" 
                  aria-hidden="true" 
                  className="w-full h-auto drop-shadow-[0_0_12px_rgba(217,70,239,0.5)] animate-pulse"
                  style={{ animationDuration: '2.5s' }}
                />
              </div>

              {/* Layer 4: Floating Purple Musical Note (♫) */}
              <div 
                className="absolute left-[20%] top-[6%] w-[12%] h-auto animate-bounce pointer-events-none z-20"
                style={{ animationDuration: '3.6s' }}
              >
                <img src={notePurpleImg} alt="" aria-hidden="true" className="w-full h-auto drop-shadow-md" />
              </div>

              {/* Layer 5: Floating Pink Musical Note (♪) */}
              <div 
                className="absolute right-[4%] top-[24%] w-[10%] h-auto animate-bounce pointer-events-none z-20"
                style={{ animationDuration: '4.2s', animationDelay: '-1.8s' }}
              >
                <img src={notePinkImg} alt="" aria-hidden="true" className="w-full h-auto drop-shadow-md" />
              </div>

              {/* Layer 6: Hero 3D Headphones on Illuminated Pedestal with Live Animated Soundwave */}
              <div className="relative z-10 w-[84%] sm:w-[88%] flex items-center justify-center pointer-events-none">
                <img 
                  src={headphonesStageImg} 
                  alt="3D Headphones on illuminated stage" 
                  className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(147,51,234,0.32)] block pointer-events-none"
                  loading="eager"
                />
                <AnimatedAudioWaveform />
              </div>

              {/* Layer 7: Dotted Soundwave Equalizer Grid (bottom-right) */}
              <img 
                src={dottedGridImg} 
                alt="" 
                aria-hidden="true" 
                className="absolute right-[0%] bottom-[8%] w-[38%] h-auto opacity-70 pointer-events-none z-0" 
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ExploreMusicGenres;
