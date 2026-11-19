import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  Menu,
  Search,
  Search as SearchIcon,
  X,
  House,
  Music2,
  Library,
  Heart,
  Radio,
  User,
  ChevronDown,
  Settings,
  LogOut,
} from 'lucide-react';
import {
  guitarNavbarData,
  navItems as NAV_ITEMS,
  profileMenuItems as PROFILE_MENU_ITEMS,
  musicParticles as MUSIC_PARTICLES,
  sectionBarRanges as SECTION_BAR_RANGES,
  soundParticles as SOUND_PARTICLES,
  guitarBodyParticles as GUITAR_BODY_PARTICLES
} from './GuitarNavbarData';

/**
 * VinylLogo: Authentic circular vinyl record disc with concentric micro-grooves,
 * brushed-metal specular sheen, dual-tone neon halo, central soundwave hub,
 * and continuous floating tiny music notes/sparkle particles.
 */
export const VinylLogo = ({ className = '', size = 124 }) => {
  return (
    <div 
      className={`relative flex items-center justify-center shrink-0 select-none group ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
      aria-label="SoundWave Vinyl Logo"
      role="img"
    >
      {/* Outer Glow Halo Layer */}
      <div 
        className="absolute inset-0 rounded-full blur-md opacity-85 pointer-events-none transition-opacity duration-300 animate-vinyl-spin"
        style={{
          background: 'conic-gradient(from 200deg at 50% 50%, #FF7A59 0deg, #EF35ED 75deg, #8238FF 170deg, #6D28D9 280deg, #FF7A59 360deg)'
        }}
      />

      {/* Tiny Music Particles Floating Outward from Vinyl Disc (Image 3) */}
      <div className="absolute inset-0 pointer-events-none z-30 select-none overflow-visible">
        {MUSIC_PARTICLES.map((p) => (
          <span
            key={p.id}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold leading-none ${p.anim}`}
            style={{
              color: p.color,
              fontSize: `${p.size}px`,
              filter: `drop-shadow(0 0 6px ${p.glow})`,
              animationDelay: p.delay,
              animationDuration: p.dur,
            }}
          >
            {p.char}
          </span>
        ))}
      </div>

      {/* SVG Vinyl Disc */}
      <svg 
        viewBox="0 0 120 120" 
        className="relative z-10 w-full h-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.7)]"
      >
        <defs>
          {/* Dual tone glowing border ring */}
          <linearGradient id="vinylRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8238FF" />
            <stop offset="35%" stopColor="#A855F7" />
            <stop offset="68%" stopColor="#EF35ED" />
            <stop offset="100%" stopColor="#FF7A59" />
          </linearGradient>

          {/* Vinyl base gradient */}
          <radialGradient id="vinylBase" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0B0914" />
            <stop offset="60%" stopColor="#151224" />
            <stop offset="85%" stopColor="#0B0914" />
            <stop offset="96%" stopColor="#1C1730" />
            <stop offset="100%" stopColor="#07060C" />
          </radialGradient>

          {/* Central hub gradient */}
          <radialGradient id="hubGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#20153D" />
            <stop offset="75%" stopColor="#0F0A1F" />
            <stop offset="100%" stopColor="#07050E" />
          </radialGradient>

          {/* Soundwave bars gradient */}
          <linearGradient id="soundwaveGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF6BB5" />
            <stop offset="45%" stopColor="#EF35ED" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>

          {/* Metallic brushed reflection mask/gradient */}
          <linearGradient id="reflectionSheen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.18" />
            <stop offset="25%" stopColor="#FFFFFF" stopOpacity="0.0" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.14" />
            <stop offset="75%" stopColor="#FFFFFF" stopOpacity="0.0" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.18" />
          </linearGradient>
        </defs>

        {/* Rotating Vinyl Disc Group */}
        <g className="animate-vinyl-spin" style={{ transformOrigin: '60px 60px' }}>
          {/* Outer Dual-Tone Border Ring */}
          <circle 
            cx="60" 
            cy="60" 
            r="58" 
            fill="none" 
            stroke="url(#vinylRingGrad)" 
            strokeWidth="3.2" 
          />

          {/* Outer Coral / Sunset lower accent flare */}
          <path 
            d="M 22,86 A 58,58 0 0,0 82,116" 
            fill="none" 
            stroke="#FF7A59" 
            strokeWidth="3.8" 
            strokeLinecap="round" 
            opacity="0.95"
          />

          {/* Upper Purple flare */}
          <path 
            d="M 36,9 A 58,58 0 0,1 106,42" 
            fill="none" 
            stroke="#C084FC" 
            strokeWidth="3.2" 
            strokeLinecap="round" 
            opacity="0.9"
          />

          {/* Main Black Vinyl Body */}
          <circle cx="60" cy="60" r="56" fill="url(#vinylBase)" />

          {/* Concentric Record Grooves */}
          <circle cx="60" cy="60" r="53" fill="none" stroke="#FFFFFF" strokeWidth="0.5" strokeOpacity="0.09" />
          <circle cx="60" cy="60" r="50" fill="none" stroke="#FFFFFF" strokeWidth="0.6" strokeOpacity="0.13" />
          <circle cx="60" cy="60" r="47" fill="none" stroke="#000000" strokeWidth="0.8" strokeOpacity="0.6" />
          <circle cx="60" cy="60" r="44" fill="none" stroke="#FFFFFF" strokeWidth="0.5" strokeOpacity="0.11" />
          <circle cx="60" cy="60" r="41" fill="none" stroke="#FFFFFF" strokeWidth="0.6" strokeOpacity="0.15" />
          <circle cx="60" cy="60" r="38" fill="none" stroke="#000000" strokeWidth="0.8" strokeOpacity="0.6" />
          <circle cx="60" cy="60" r="35" fill="none" stroke="#FFFFFF" strokeWidth="0.5" strokeOpacity="0.11" />
          <circle cx="60" cy="60" r="32" fill="none" stroke="#FFFFFF" strokeWidth="0.6" strokeOpacity="0.13" />
          <circle cx="60" cy="60" r="29" fill="none" stroke="#000000" strokeWidth="0.8" strokeOpacity="0.6" />
          <circle cx="60" cy="60" r="26" fill="none" stroke="#FFFFFF" strokeWidth="0.5" strokeOpacity="0.10" />
          <circle cx="60" cy="60" r="23" fill="none" stroke="#FFFFFF" strokeWidth="0.6" strokeOpacity="0.12" />

          {/* Subtle Brushed Sheen Overlay */}
          <circle cx="60" cy="60" r="56" fill="url(#reflectionSheen)" />

          {/* Center Label Border Ring */}
          <circle cx="60" cy="60" r="19.5" fill="none" stroke="#4C1D95" strokeWidth="1" strokeOpacity="0.4" />

          {/* Center Black Hub */}
          <circle cx="60" cy="60" r="18" fill="url(#hubGrad)" stroke="#110E1B" strokeWidth="1.2" />

          {/* Equalizer Soundwave in Center Hub */}
          <g transform="translate(60, 60)">
            {/* Bar 1 (Leftmost) */}
            <rect x="-10" y="-4" width="2.2" height="8" rx="1.1" fill="url(#soundwaveGrad)" />
            {/* Bar 2 */}
            <rect x="-5" y="-8.5" width="2.2" height="17" rx="1.1" fill="url(#soundwaveGrad)" />
            {/* Bar 3 (Center tallest) */}
            <rect x="-1.1" y="-12" width="2.2" height="24" rx="1.1" fill="url(#soundwaveGrad)" />
            {/* Bar 4 */}
            <rect x="2.8" y="-8.5" width="2.2" height="17" rx="1.1" fill="url(#soundwaveGrad)" />
            {/* Bar 5 (Rightmost) */}
            <rect x="7.8" y="-4" width="2.2" height="8" rx="1.1" fill="url(#soundwaveGrad)" />
          </g>
        </g>
      </svg>
    </div>
  );
};

/* =========================================================================
   2. BRAND IDENTITY (SOUNDWAVE LETTER-BY-LETTER WAVE)
   ========================================================================= */
/**
 * BrandIdentity: "SoundWave" geometric title with "Sound" in white,
 * "Wave" in radiant fuchsia/magenta, and "MUSIC LIVES HERE" subtitle.
 * 
 * Letter-by-Letter Music Wave Animation ("slowly slowly"):
 * On reload, every individual letter emerges from the circular vinyl record
 * on the left, traveling along an organic sinusoidal soundwave path into place.
 */
export const BrandIdentity = ({ className = '' }) => {
  const soundLetters = ['S', 'o', 'u', 'n', 'd'];
  const waveLetters = ['W', 'a', 'v', 'e'];
  
  const subWords = [
    { word: 'MUSIC', startDelay: 1.06 },
    { word: 'LIVES', startDelay: 1.38 },
    { word: 'HERE', startDelay: 1.70 },
  ];

  return (
    <div className={`flex flex-col select-none justify-center shrink-0 ${className}`}>
      {/* Title: SoundWave */}
      <div className="flex items-baseline tracking-tight">
        {/* Sound (White letters) */}
        <span className="flex items-baseline">
          {soundLetters.map((char, i) => (
            <span
              key={`sound-${i}`}
              className="animate-letter-wave text-white font-extrabold text-[16px] sm:text-[20px] md:text-[23px] lg:text-[25px] xl:text-[28px] leading-none drop-shadow-sm"
              style={{ animationDelay: `${0.12 + i * 0.10}s` }}
            >
              {char}
            </span>
          ))}
        </span>

        {/* Wave (Fuchsia / Magenta Gradient letters) */}
        <span className="flex items-baseline">
          {waveLetters.map((char, i) => (
            <span
              key={`wave-${i}`}
              className="animate-letter-wave font-extrabold text-[16px] sm:text-[20px] md:text-[23px] lg:text-[25px] xl:text-[28px] leading-none bg-gradient-to-r from-[#FF4FD8] to-[#EF35ED] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(239,53,237,0.4)]"
              style={{ animationDelay: `${0.64 + i * 0.10}s` }}
            >
              {char}
            </span>
          ))}
        </span>
      </div>

      {/* Subtitle: MUSIC LIVES HERE */}
      <div className="flex items-center gap-1.5 sm:gap-2 text-[7.5px] sm:text-[8.5px] md:text-[9.5px] lg:text-[10px] xl:text-[10.5px] font-semibold text-slate-300/90 tracking-[0.22em] uppercase mt-1 leading-none">
        {subWords.map(({ word, startDelay }, wIdx) => (
          <span key={`sub-word-${wIdx}`} className="flex items-center">
            {word.split('').map((char, cIdx) => (
              <span
                key={`sub-char-${wIdx}-${cIdx}`}
                className="animate-letter-wave"
                style={{ animationDelay: `${startDelay + cIdx * 0.06}s` }}
              >
                {char}
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
};

/* =========================================================================
   3. FRETBOARD EQUALIZER SOUNDWAVE SPECTRUM
   ========================================================================= */
/**
 * FretboardEqualizer: High-Fidelity Animated Equalizer Soundwave Spectrum
 * with Sound Particles Emerging and Floating Upward.
 * 
 * Features:
 * 1. 48 Active Equalizer Soundwave Bars:
 *    - Anchored seamlessly on the guitar neck top border (baselineY = 57).
 *    - Energetic musical beat animation (6 rhythmic frequency variants).
 *    - Dynamic crests and troughs with 9 tall harmonic accent peaks.
 * 2. Continuous Sound Particles Emerging FROM the Animation:
 *    - Musical notes (♪, ♫, ♩, ♬), sparkles (✦, ✧, ✨), and glowing sound motes (•).
 *    - Emerge directly from the equalizer bar peaks along the neck.
 *    - Float UPWARDS into the white decorative space above the guitar with gentle horizontal drift and opacity fade.
 * 3. Interactive Section Hover Surge:
 *    - Hovering any nav button surges that section's bars upward with radiant glow.
 */

/* SECTION_BAR_RANGES and SOUND_PARTICLES imported from GuitarNavbarData */

export const FretboardEqualizer = ({ hoveredNavId = null }) => {
  // 48 rhythmic equalizer bar frequency heights
  const barHeights = [
    // Section 1: Home (Bars 0 - 8) - Sub-bass to low frequencies with tall harmonic peak
    18, 28, 44, 60, 48, 30, 22, 38, 54,
    // Section 2: Explore (Bars 9 - 17) - Dynamic low-mids with dramatic accent crest
    38, 24, 36, 52, 68, 46, 28, 20, 38,
    // Section 3: Library (Bars 18 - 26) - Vocal mids & melodic cadence
    52, 64, 42, 26, 38, 56, 44, 30, 22,
    // Section 4: Favorites (Bars 27 - 36) - High-mids with crowning majestic peak
    36, 52, 70, 48, 32, 24, 42, 62, 50, 34,
    // Section 5: Radio (Bars 37 - 47) - Crisp airy treble shimmering towards nut
    26, 40, 54, 42, 30, 38, 28, 22, 18, 14, 12
  ];

  const totalBars = barHeights.length;
  const startX = 428;
  const endX = 1052;
  const pitch = (endX - startX) / (totalBars - 1);
  const barWidth = 4.0;
  const r = barWidth / 2;
  const baselineY = 57; // Exact top line of the guitar neck

  return (
    <g className="topline-equalizer-group" pointerEvents="none">
      <defs>
        {/* 1. Vertical Gradient: Electric Cyan top -> Bright Aqua -> Indigo -> Purple -> Deep Violet base */}
        <linearGradient id="eqTopLineGrad" x1="0" y1="-15" x2="0" y2="57" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="22%" stopColor="#22d3ee" />
          <stop offset="48%" stopColor="#818cf8" />
          <stop offset="72%" stopColor="#c084fc" />
          <stop offset="88%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>

        {/* 2. Luminous Root Line Gradient along Guitar Neck Top Border */}
        <linearGradient id="eqBorderRootGrad" x1="424" y1="57" x2="1056" y2="57" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.85" />
          <stop offset="25%" stopColor="#818cf8" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#c084fc" stopOpacity="0.9" />
          <stop offset="75%" stopColor="#818cf8" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.85" />
        </linearGradient>

        {/* 3. Subtle Neon Radiance Filter for Equalizer Bars */}
        <filter id="topLineEqGlow" x="-30%" y="-40%" width="160%" height="180%">
          <feGaussianBlur stdDeviation="1.8" result="blur" />
          <feColorMatrix 
            type="matrix" 
            values="
              1 0 0 0 0
              0 1 0 0 0.15
              0 0 1 0 0.4
              0 0 0 1.25 0" 
            result="glowBoost"
          />
          <feMerge>
            <feMergeNode in="glowBoost" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ========================================================
           1. LUMINOUS ROOT BORDER ON GUITAR NECK TOP EDGE (y = 57)
           ======================================================== */}
      <line
        x1="424"
        y1={baselineY}
        x2="1056"
        y2={baselineY}
        stroke="url(#eqBorderRootGrad)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Subtle guide wave undulating gently ABOVE the neck line (all y <= 57) */}
      <path 
        d="
          M 425,57
          C 465,53 510,57 555,52
          C 600,50 645,57 690,53
          C 735,51 780,57 825,52
          C 870,50 915,57 960,53
          C 990,51 1025,56 1055,57
        " 
        fill="none" 
        stroke="#38bdf8" 
        strokeWidth="1.2" 
        strokeOpacity="0.6" 
        className="animate-eq-wave-sway"
      />

      {/* ========================================================
           2. 48 EQUALIZER SPECTRUM BARS (Energetic Audio Animation)
           ======================================================== */}
      <g filter="url(#topLineEqGlow)">
        {barHeights.map((h, i) => {
          const x = startX + i * pitch;
          const topY = baselineY - h; // Extends upwards from baselineY = 57
          
          // Check if this specific bar belongs to the currently hovered navigation item
          const isSurged = Boolean(
            hoveredNavId && 
            SECTION_BAR_RANGES[hoveredNavId] &&
            i >= SECTION_BAR_RANGES[hoveredNavId][0] && 
            i <= SECTION_BAR_RANGES[hoveredNavId][1]
          );

          // 6 Energetic beat animation variants with audio tempo (0.68s - 0.96s)
          const animVariants = [
            'animate-eq-bar-1',
            'animate-eq-bar-2',
            'animate-eq-bar-3',
            'animate-eq-bar-4',
            'animate-eq-bar-5',
            'animate-eq-bar-6'
          ];
          const animClass = animVariants[i % 6];
          const dur = (0.72 + (i % 5) * 0.06 + Math.sin(i * 0.65) * 0.05).toFixed(2);
          const delay = (-((i * 0.16) % 1.6)).toFixed(2);

          // Flat-bottom bar path: starts at baselineY (57), ascends to topY+r, semi-circles dome, descends to baselineY
          const barPath = `
            M ${x - r},${baselineY}
            L ${x - r},${topY + r}
            A ${r},${r} 0 0 1 ${x + r},${topY + r}
            L ${x + r},${baselineY}
            Z
          `;

          const isAccentPeak = h >= 54;

          return (
            <g 
              key={`top-eq-bar-${i}`}
              className={`${animClass} ${isSurged ? 'bar-hover-surge' : ''}`}
              style={{
                transformOrigin: `${x}px ${baselineY}px`,
                animationDuration: `${dur}s`,
                animationDelay: `${delay}s`,
              }}
            >
              <path
                d={barPath}
                fill="url(#eqTopLineGrad)"
              />
              <circle
                cx={x}
                cy={topY + r}
                r={r}
                fill={isAccentPeak ? '#e0f2fe' : '#38bdf8'}
                fillOpacity="0.95"
              />
            </g>
          );
        })}
      </g>

      {/* ========================================================
           3. SOUND'S TINY PARTICLES (Emerging FROM Equalizer & Floating UPWARD)
           Continuous stream of notes, sparkles, and energy motes floating into the sky
           ======================================================== */}
      <g className="sound-particles-group" pointerEvents="none">
        {SOUND_PARTICLES.map((p) => (
          <g
            key={p.id}
            className={p.anim}
            style={{
              transformOrigin: `${p.x}px ${p.y}px`,
              animationDelay: p.delay,
              animationDuration: p.dur,
            }}
          >
            <text
              x={p.x}
              y={p.y}
              fill={p.color}
              fontSize={p.size}
              fontWeight="bold"
              textAnchor="middle"
              dominantBaseline="central"
              style={{
                filter: `drop-shadow(0 2px 5px ${p.glow})`,
                userSelect: 'none',
              }}
            >
              {p.symbol}
            </text>
          </g>
        ))}
      </g>
    </g>
  );
};

/* =========================================================================
   4. GUITAR BODY PARTICLES
   ========================================================================= */
/**
 * GuitarBodyParticles: Ambient musical notes & sparkles emerging from the 
 * acoustic guitar body silhouette (Image 2) and floating outward into the air.
 * - Upper bout shoulder curve
 * - Waist curve
 * - Lower bout bottom curve
 * - Bridge region
 * - Soundboard around SoundWave
 */
/* GUITAR_BODY_PARTICLES imported from GuitarNavbarData */

export const GuitarBodyParticles = () => {
  return (
    <div 
      className="absolute left-0 top-0 w-[420px] max-w-[32%] h-full pointer-events-none z-30 overflow-visible select-none"
      aria-hidden="true"
    >
      {GUITAR_BODY_PARTICLES.map((p) => (
        <span
          key={p.id}
          className={`absolute font-bold leading-none select-none pointer-events-none ${p.anim}`}
          style={{
            top: p.top,
            left: p.left,
            color: p.color,
            fontSize: `${p.size}px`,
            filter: `drop-shadow(0 0 6px ${p.glow})`,
            animationDelay: p.delay,
            animationDuration: p.dur,
          }}
        >
          {p.char}
        </span>
      ))}
    </div>
  );
};

/* =========================================================================
   5. GUITAR SVG FRAME SILHOUETTE & HARDWARE
   ========================================================================= */
/**
 * GuitarSvgFrame: High-Fidelity SVG Reconstruction of the Richtone Red-Black Sunburst Acoustic Cutaway Guitar (Image 1)
 * 
 * Structural Refinements:
 * - Taller, fuller, voluptuous left-side acoustic guitar body (depth 210px) with generous parabolic arcs
 * - Organic acoustic hourglass waist dipping naturally to y = 22 and y = 148
 * - Upper bout shoulder with authentic curved swell (y = -4) leveling smoothly into neck joint at (420, 57)
 * - Sculpted acoustic cutaway horn (y = 175) and continuous concave scoop curving smoothly into neck joint at (420, 113)
 * - SLIMMER, authentic Richtone acoustic headstock: tapered from nut (56px) out to sleek 80px crown shoulders,
 *   with 6 chrome tuning machines, string posts, and white script "Richtone" logo
 * - Center neck, rosette (cx=142, cy=85), mustache bridge, and strings preserved
 */
export const GuitarSvgFrame = ({ className = '', isHovered = false, hoveredNavId = null }) => {
  const VB_W = 1440;
  const VB_H = 170;
  const CY = 85;
  const SH_CX = 142;
  const SH_CY = 85;

  // Single-cutaway acoustic guitar silhouette: taller body + slimmer headstock (Image 1)
  const bodyPath = `
    M 420,57
    C 400,50 355,-4 305,-4
    C 265,-4 235,22 210,22
    C 180,22 150,-20 105,-20
    C 60,-20 20,12 8,46
    C 0,64 0,85 0,85
    C 0,106 8,126 20,144
    C 45,178 70,190 105,190
    C 150,190 180,148 210,148
    C 235,148 265,172 305,175
    C 345,178 375,168 388,148
    C 395,138 390,126 378,120
    C 366,114 380,113 420,113
    L 1060,113
    C 1085,114 1120,117 1160,119
    C 1220,121 1290,122 1350,122
    C 1380,122 1405,115 1415,102
    C 1420,94 1422,85 1422,85
    C 1422,85 1420,76 1415,68
    C 1405,55 1380,48 1350,48
    C 1290,48 1220,49 1160,51
    C 1120,53 1085,56 1060,57
    Z
  `;

  // Inner purfling pinstripe matching refined curves
  const purflingPath = `
    M 416,59
    C 398,52 353,0 305,0
    C 266,0 237,25 210,25
    C 178,25 149,-16 105,-16
    C 63,-16 24,14 12,48
    C 4,65 4,85 4,85
    C 4,105 12,124 24,141
    C 48,174 72,186 105,186
    C 149,186 178,145 210,145
    C 237,145 264,169 304,171
    C 342,174 371,164 382,145
    C 388,136 384,127 374,122
    C 364,116 380,115 416,115
  `;

  return (
    <svg 
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`} 
      viewBox={`0 0 ${VB_W} ${VB_H}`} 
      fill="none" 
      preserveAspectRatio="none"
      style={{ overflow: 'visible' }}
      aria-hidden="true"
    >
      <defs>
        {/* Clip path of the exact single-cutaway acoustic guitar */}
        <clipPath id="guitarFullClip">
          <path d={bodyPath} />
        </clipPath>

        {/* 1. Richtone Cherry Sunburst: expanded radius for fuller body height */}
        <radialGradient 
          id="richtoneBodyBurst" 
          cx="0" 
          cy="0" 
          r="105" 
          gradientUnits="userSpaceOnUse"
          gradientTransform={`translate(180, ${CY}) scale(2.2, 1)`}
        >
          <stop offset="0%" stopColor="#ea221c" />
          <stop offset="38%" stopColor="#cb1214" />
          <stop offset="58%" stopColor="#ab090b" />
          <stop offset="72%" stopColor="#720406" />
          <stop offset="84%" stopColor="#3e0103" />
          <stop offset="94%" stopColor="#120001" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>

        {/* 2. Soft base black edge overlay on far left butt */}
        <linearGradient id="buttBlackFade" x1="0" y1="0" x2="65" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.95" />
          <stop offset="50%" stopColor="#000000" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.0" />
        </linearGradient>

        {/* 3. Smooth radial feathered black shading for cutaway horn and scoop */}
        <radialGradient id="cutawayRadial" cx="365" cy="145" r="75" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#000000" stopOpacity="1.0" />
          <stop offset="50%" stopColor="#000000" stopOpacity="0.88" />
          <stop offset="75%" stopColor="#120002" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#ea221c" stopOpacity="0.0" />
        </radialGradient>

        {/* 4. Headstock sunburst scaled to slimmer headstock */}
        <radialGradient id="headstockBurst" cx="1270" cy={CY} r="130" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ea221c" />
          <stop offset="35%" stopColor="#cb1214" />
          <stop offset="65%" stopColor="#600406" />
          <stop offset="88%" stopColor="#180002" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>

        {/* 5. Rosewood Fretboard Wood Texture */}
        <linearGradient id="fretboardWood" x1="420" y1="57" x2="420" y2="113" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#24130b" />
          <stop offset="25%" stopColor="#170b05" />
          <stop offset="50%" stopColor="#0c0502" />
          <stop offset="75%" stopColor="#170b05" />
          <stop offset="100%" stopColor="#24130b" />
        </linearGradient>

        {/* 6. Acoustic Bridge Wood Texture */}
        <linearGradient id="bridgeWood" x1="50" y1="50" x2="76" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#321b10" />
          <stop offset="25%" stopColor="#1b0c06" />
          <stop offset="50%" stopColor="#110603" />
          <stop offset="75%" stopColor="#1b0c06" />
          <stop offset="100%" stopColor="#321b10" />
        </linearGradient>

        {/* 7. Chrome Tuning Pegs & Posts */}
        <linearGradient id="chromeTuning" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="35%" stopColor="#d6dde6" />
          <stop offset="65%" stopColor="#707a88" />
          <stop offset="100%" stopColor="#a4b0c0" />
        </linearGradient>

        {/* 8. Subtle natural acoustic guitar drop shadow */}
        <filter id="naturalShadow" x="-5%" y="-25%" width="110%" height="150%">
          <feDropShadow dx="0" dy="6" stdDeviation="7" floodColor="#000000" floodOpacity="0.26" />
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.14" />
        </filter>
      </defs>

      {/* ========================================================
           1. BASE GUITAR SILHOUETTE (Solid Pitch Black with Shadow)
           ======================================================== */}
      <path d={bodyPath} fill="#000000" filter="url(#naturalShadow)" />

      {/* ========================================================
           2. SHADING CLIPPED STRICTLY INSIDE GUITAR SILHOUETTE
           ======================================================== */}
      <g clipPath="url(#guitarFullClip)">
        {/* Rich radiant cherry sunburst spanning the fuller body height */}
        <rect x="0" y="-30" width="430" height="230" fill="url(#richtoneBodyBurst)" />

        {/* Soft base black edge overlay on far left */}
        <rect x="0" y="-30" width="65" height="230" fill="url(#buttBlackFade)" />

        {/* Smooth radial cutaway black overlay */}
        <rect x="220" y="70" width="210" height="135" fill="url(#cutawayRadial)" />

        {/* Dark rosewood fretboard */}
        <rect x="420" y="57" width="640" height="56" fill="url(#fretboardWood)" />

        {/* Headstock sunburst fill (scaled to slimmer headstock) */}
        <rect x="1060" y="0" width="380" height={VB_H} fill="url(#headstockBurst)" />
      </g>

      {/* Solid Black Guitar Binding Rim */}
      <path d={bodyPath} fill="none" stroke="#000000" strokeWidth="2.5" />

      {/* Inner Ivory Purfling Pinstripe */}
      <path d={purflingPath} fill="none" stroke="#ffffff" strokeWidth="0.7" strokeOpacity="0.35" />

      {/* ========================================================
           3. SOUNDHOLE ROSETTE (Centered at cx=142, cy=85)
           ======================================================== */}
      <circle cx={SH_CX} cy={SH_CY} r="54" fill="none" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.95" />
      <circle cx={SH_CX} cy={SH_CY} r="51.5" fill="none" stroke="#000000" strokeWidth="1.0" />
      <circle cx={SH_CX} cy={SH_CY} r="49" fill="none" stroke="#ffffff" strokeWidth="2.4" strokeDasharray="2.8 1.8" strokeOpacity="0.95" />
      <circle cx={SH_CX} cy={SH_CY} r="46.5" fill="none" stroke="#cbd5e1" strokeWidth="0.8" strokeOpacity="0.80" />
      <circle cx={SH_CX} cy={SH_CY} r="44.5" fill="none" stroke="#ffffff" strokeWidth="1.4" strokeOpacity="0.95" />
      <circle cx={SH_CX} cy={SH_CY} r="43" fill="#040103" />

      {/* ========================================================
           4. AUTHENTIC RICHTONE MUSTACHE BRIDGE WITH 6 PINS
           ======================================================== */}
      <path 
        d="
          M 74,53
          L 74,117
          C 74,119 72,120 70,120
          L 63,120
          C 59,118 57,114 57,109
          C 57,102 51,96 50,85
          C 51,74 57,68 57,61
          C 57,56 59,52 63,50
          L 70,50
          C 72,50 74,51 74,53
          Z
        " 
        fill="url(#bridgeWood)" 
        stroke="#000000" 
        strokeWidth="1.2"
      />

      {/* Bone Saddle */}
      <rect x="71" y="58" width="2.6" height="54" rx="1.3" fill="#fffef0" stroke="#000000" strokeWidth="0.4" />

      {/* 2 Pearl Inlay Dots on outer wings */}
      <circle cx="64" cy="55" r="2.2" fill="#0f172a" stroke="#cbd5e1" strokeWidth="0.5" />
      <circle cx="64" cy="115" r="2.2" fill="#0f172a" stroke="#cbd5e1" strokeWidth="0.5" />

      {/* 6 White Bridge Pins */}
      {[
        { y: 62 },
        { y: 71 },
        { y: 80.5 },
        { y: 89.5 },
        { y: 99 },
        { y: 108 }
      ].map((p, idx) => (
        <g key={`pin-${idx}`}>
          <circle cx="63" cy={p.y} r="2.8" fill="#f8fafc" stroke="#0f172a" strokeWidth="0.8" />
          <circle cx="63" cy={p.y} r="1.0" fill="#0f172a" />
        </g>
      ))}

      {/* ========================================================
           5. FRETBOARD BINDING, NICKEL FRETS & PEARLOID INLAYS
           ======================================================== */}
      {/* Animated Equalizer Soundwave Spectrum anchored ON the Top Line (Image 1 & Image 2) */}
      <FretboardEqualizer hoveredNavId={hoveredNavId} />

      {/* Top and Bottom Fretboard Nickel/Ivory Binding Lines */}
      <line x1="420" y1="57" x2="1060" y2="57" stroke="#fef3c7" strokeWidth="1.8" strokeOpacity="0.8" />
      <line x1="420" y1="113" x2="1060" y2="113" stroke="#fef3c7" strokeWidth="1.8" strokeOpacity="0.8" />

      {/* 28 Nickel Fret Wires */}
      {[465, 508, 549, 588, 625, 660, 693, 724, 753, 780, 805, 828, 849, 868, 885, 901, 916, 930, 943, 958, 972, 985, 998, 1010, 1022, 1033, 1044, 1054].map((x, idx) => (
        <line 
          key={`fret-${idx}`}
          x1={x} 
          y1="57" 
          x2={x} 
          y2="113" 
          stroke="#cbd5e1" 
          strokeWidth="1.2" 
          strokeOpacity="0.38" 
        />
      ))}

      {/* Pearloid Position Inlays matching Image 1 */}
      <circle cx="528" cy={CY} r="3.4" fill="#f8fafc" fillOpacity="0.85" />
      <circle cx="606" cy={CY} r="3.4" fill="#f8fafc" fillOpacity="0.85" />
      <circle cx="676" cy={CY} r="3.4" fill="#f8fafc" fillOpacity="0.85" />
      <circle cx="738" cy={CY} r="3.4" fill="#f8fafc" fillOpacity="0.85" />
      <circle cx="816" cy={CY - 12} r="2.8" fill="#f8fafc" fillOpacity="0.85" />
      <circle cx="816" cy={CY + 12} r="2.8" fill="#f8fafc" fillOpacity="0.85" />
      <circle cx="876" cy={CY} r="2.6" fill="#f8fafc" fillOpacity="0.80" />
      <circle cx="923" cy={CY} r="2.6" fill="#f8fafc" fillOpacity="0.80" />

      {/* ========================================================
           6. 6 GUITAR STRINGS: Bridge Saddle -> Fretboard -> Nut
           ======================================================== */}
      {[
        { y: 62, w: 2.2, c: '#d4a332', op: 0.92 }, // Low E (wound brass)
        { y: 71, w: 1.8, c: '#cda135', op: 0.88 }, // A (wound brass)
        { y: 80.5, w: 1.4, c: '#d8b868', op: 0.82 }, // D (wound brass/steel)
        { y: 89.5, w: 1.1, c: '#e2e8f0', op: 0.80 }, // G (plain steel)
        { y: 99, w: 0.9, c: '#f1f5f9', op: 0.85 },   // B (plain steel)
        { y: 108, w: 0.7, c: '#ffffff', op: 0.90 }   // High e (plain steel)
      ].map((str, idx) => (
        <line 
          key={`str-${idx}`}
          className={`guitar-string transition-transform duration-100 ${isHovered ? 'animate-string-vibrate' : ''}`}
          style={{ animationDelay: `${idx * 0.04}s` }}
          x1="72" 
          y1={str.y} 
          x2="1060" 
          y2={str.y} 
          stroke={str.c} 
          strokeWidth={str.w} 
          strokeOpacity={str.op} 
        />
      ))}

      {/* Strings over SLIMMER headstock to posts */}
      <line x1="1060" y1="62" x2="1140" y2="69" stroke="#d4a332" strokeWidth="1.5" strokeOpacity="0.85" />
      <line x1="1060" y1="71" x2="1230" y2="68" stroke="#cda135" strokeWidth="1.3" strokeOpacity="0.85" />
      <line x1="1060" y1="80.5" x2="1320" y2="67" stroke="#d8b868" strokeWidth="1.1" strokeOpacity="0.80" />
      <line x1="1060" y1="89.5" x2="1320" y2="103" stroke="#e2e8f0" strokeWidth="1.0" strokeOpacity="0.80" />
      <line x1="1060" y1="99" x2="1230" y2="102" stroke="#f1f5f9" strokeWidth="0.8" strokeOpacity="0.85" />
      <line x1="1060" y1="108" x2="1140" y2="101" stroke="#ffffff" strokeWidth="0.6" strokeOpacity="0.90" />

      {/* ========================================================
           7. IVORY BONE NUT (x = 1058)
           ======================================================== */}
      <rect x="1058" y="55" width="5.5" height="60" rx="1.5" fill="#fef9c3" stroke="#b45309" strokeWidth="0.8" />

      {/* ========================================================
           8. SLIMMER HEADSTOCK: 6 Chrome Tuning Machines & Posts
           ======================================================== */}
      {/* 3 Top Tuning Pegs */}
      <g transform="translate(1145, 51.5)">
        <rect x="-2" y="0" width="4" height="7" fill="#64748b" />
        <ellipse cx="0" cy="-5" rx="7" ry="4.4" fill="url(#chromeTuning)" stroke="#334155" strokeWidth="0.8" />
      </g>
      <g transform="translate(1235, 49)">
        <rect x="-2" y="0" width="4" height="7" fill="#64748b" />
        <ellipse cx="0" cy="-5" rx="7" ry="4.4" fill="url(#chromeTuning)" stroke="#334155" strokeWidth="0.8" />
      </g>
      <g transform="translate(1325, 48)">
        <rect x="-2" y="0" width="4" height="7" fill="#64748b" />
        <ellipse cx="0" cy="-5" rx="7" ry="4.4" fill="url(#chromeTuning)" stroke="#334155" strokeWidth="0.8" />
      </g>

      {/* 3 Bottom Tuning Pegs */}
      <g transform="translate(1145, 118.5)">
        <rect x="-2" y="-7" width="4" height="7" fill="#64748b" />
        <ellipse cx="0" cy="5" rx="7" ry="4.4" fill="url(#chromeTuning)" stroke="#334155" strokeWidth="0.8" />
      </g>
      <g transform="translate(1235, 121)">
        <rect x="-2" y="-7" width="4" height="7" fill="#64748b" />
        <ellipse cx="0" cy="5" rx="7" ry="4.4" fill="url(#chromeTuning)" stroke="#334155" strokeWidth="0.8" />
      </g>
      <g transform="translate(1325, 122)">
        <rect x="-2" y="-7" width="4" height="7" fill="#64748b" />
        <ellipse cx="0" cy="5" rx="7" ry="4.4" fill="url(#chromeTuning)" stroke="#334155" strokeWidth="0.8" />
      </g>

      {/* 6 Chrome String Posts on face of headstock with brass string cap */}
      <circle cx="1140" cy="69" r="3.2" fill="#e2e8f0" stroke="#475569" strokeWidth="0.8" />
      <circle cx="1140" cy="69" r="1.2" fill="#b45309" />

      <circle cx="1230" cy="68" r="3.2" fill="#e2e8f0" stroke="#475569" strokeWidth="0.8" />
      <circle cx="1230" cy="68" r="1.2" fill="#b45309" />

      <circle cx="1320" cy="67" r="3.2" fill="#e2e8f0" stroke="#475569" strokeWidth="0.8" />
      <circle cx="1320" cy="67" r="1.2" fill="#b45309" />

      <circle cx="1140" cy="101" r="3.2" fill="#e2e8f0" stroke="#475569" strokeWidth="0.8" />
      <circle cx="1140" cy="101" r="1.2" fill="#b45309" />

      <circle cx="1230" cy="102" r="3.2" fill="#e2e8f0" stroke="#475569" strokeWidth="0.8" />
      <circle cx="1230" cy="102" r="1.2" fill="#b45309" />

      <circle cx="1320" cy="103" r="3.2" fill="#e2e8f0" stroke="#475569" strokeWidth="0.8" />
      <circle cx="1320" cy="103" r="1.2" fill="#b45309" />

      {/* Script "Richtone" Logo on Headstock matching Image 1 zoom */}
      <text 
        x="1372" 
        y="86" 
        fill="#ffffff" 
        fontFamily="'Brush Script MT', 'Dancing Script', 'Pacifico', cursive, sans-serif" 
        fontSize="13" 
        fontWeight="bold" 
        fontStyle="italic" 
        textAnchor="middle"
        transform="rotate(-90 1372 86)"
        letterSpacing="0.4"
      >Richtone</text>
    </svg>
  );
};

/* =========================================================================
   6. NAVBAR LINKS (DESKTOP / LAPTOP)
   ========================================================================= */
const ICON_MAP = {
  House,
  Music2,
  Library,
  Heart,
  Radio,
};

/**
 * NavbarLinks: Center navigation items with the signature active Home pill gradient
 * linear-gradient(110deg, #F044ED 0%, #7835FF 55%, #30219E 100%) and smooth hover states.
 * Comfortably seated directly on the rosewood guitar neck/fretboard.
 */
export const NavbarLinks = ({ activeId = 'home', onSelect, onHoverItem, className = '' }) => {
  return (
    <nav 
      aria-label="Main Navigation" 
      className={`flex items-center gap-1.5 lg:gap-3 xl:gap-5 select-none ${className}`}
    >
      {NAV_ITEMS.map((item, index) => {
        const IconComponent = ICON_MAP[item.icon];
        const isActive = activeId === item.id;

        return (
          <div 
            key={item.id}
            className="animate-nav-drop"
            style={{
              animationDelay: `${120 + index * 140}ms`,
            }}
          >
            <button
              type="button"
              onClick={() => onSelect?.(item.id)}
              onMouseEnter={() => onHoverItem?.(item.id)}
              onMouseLeave={() => onHoverItem?.(null)}
              aria-current={isActive ? 'page' : undefined}
              className={`
                relative flex items-center gap-1.5 xl:gap-2 rounded-full transition-all duration-200 ease-out select-none
                cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#100A1F]
                ${
                  isActive
                    ? 'px-3.5 py-1.5 xl:px-4.5 xl:py-1.5 text-white font-bold text-xs xl:text-[14px] shadow-[0_4px_18px_rgba(240,68,237,0.55)] border border-white/30'
                    : 'px-2.5 py-1.5 xl:px-3.5 xl:py-1.5 text-white hover:text-white font-bold text-xs xl:text-[14px] bg-[#140b20]/80 hover:bg-[#25103a]/90 border border-purple-400/35 hover:border-fuchsia-400/60 backdrop-blur-sm shadow-[0_2px_10px_rgba(0,0,0,0.6)] nav-link-contrast'
                }
              `}
              style={isActive ? { background: 'linear-gradient(110deg, #F044ED 0%, #7835FF 55%, #30219E 100%)' } : {}}
            >
              {IconComponent && (
                <IconComponent 
                  className="w-3.5 h-3.5 xl:w-[17px] xl:h-[17px] shrink-0 transition-transform duration-200 text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]" 
                  strokeWidth={2.3}
                />
              )}
              <span className="leading-none whitespace-nowrap tracking-wide drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">{item.label}</span>
            </button>
          </div>
        );
      })}
    </nav>
  );
};

/* =========================================================================
   7. SEARCH BAR
   ========================================================================= */
/**
 * SearchBar: Capsule-shaped search field with dark translucent glass backdrop,
 * thin purple border, search icon, placeholder, clear button, and accessible keyboard submit.
 */
export const SearchBar = ({ onSearch, className = '' }) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch?.(query.trim());
    }
  };

  const handleClear = () => {
    setQuery('');
    inputRef.current?.focus();
    onSearch?.('');
  };

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className={`
        relative flex items-center h-[38px] sm:h-[40px] lg:h-[40px] xl:h-[42px] rounded-full transition-all duration-200
        bg-[#18112C]/65 hover:bg-[#1E1338]/80 backdrop-blur-md
        border ${isFocused ? 'border-fuchsia-500/60 ring-2 ring-fuchsia-500/20' : 'border-purple-400/20 hover:border-purple-400/40'}
        w-full max-w-[220px] sm:max-w-[260px] lg:max-w-[310px] px-3.5 sm:px-4
        ${className}
      `}
    >
      <Search 
        className="w-4 h-4 text-white/70 shrink-0 select-none mr-2 sm:mr-2.5" 
        strokeWidth={2.2}
        aria-hidden="true"
      />

      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={guitarNavbarData?.searchPlaceholder || "Search songs, artists..."}
        aria-label="Search songs, artists"
        className="
          w-full bg-transparent text-[13px] lg:text-[13.5px] xl:text-[14px] text-white placeholder-slate-400/70
          focus:outline-none tracking-normal font-normal
        "
      />

      {query && (
        <button
          type="button"
          onClick={handleClear}
          aria-label="Clear search input"
          className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors ml-1 focus:outline-none cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </form>
  );
};

/* =========================================================================
   8. USER PROFILE DROPDOWN
   ========================================================================= */
const MENU_ICONS = {
  User,
  Settings,
  LogOut,
};

/**
 * ProfileDropdown: Circular user avatar with glowing purple rim,
 * chevron indicator, and accessible popover menu.
 */
export const ProfileDropdown = ({ onAction, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    // Close on Escape key
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleItemClick = (id) => {
    onAction?.(id);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className={`relative z-50 select-none ${className}`}>
      {/* Profile Trigger Button (Highlighted Luxury Capsule) */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="User Account Menu"
        className="
          flex items-center gap-1.5 sm:gap-2 group
          px-1.5 py-1 sm:px-2 sm:py-1 rounded-full
          bg-[#180a2a]/85 hover:bg-[#25103a]/95
          border border-purple-400/50 hover:border-fuchsia-400/90
          shadow-[0_2px_14px_rgba(0,0,0,0.5),0_0_15px_rgba(239,53,237,0.3)]
          hover:shadow-[0_0_22px_rgba(239,53,237,0.55),0_0_35px_rgba(56,189,248,0.35)]
          backdrop-blur-md transition-all duration-200
          focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400
          cursor-pointer
        "
      >
        {/* Highlighted Circular Avatar with Radiant Neon Gradient Ring */}
        <div className="
          relative w-7 h-7 sm:w-8 sm:h-8 lg:w-[35px] lg:h-[35px] xl:w-[39px] xl:h-[39px] rounded-full p-[2px]
          bg-gradient-to-tr from-[#FF4FD8] via-[#A855F7] to-[#38BDF8]
          shadow-[0_0_14px_rgba(239,53,237,0.65),0_0_25px_rgba(56,189,248,0.35)]
          group-hover:shadow-[0_0_22px_rgba(239,53,237,0.9),0_0_35px_rgba(56,189,248,0.5)]
          flex items-center justify-center transition-all duration-300
        ">
          {/* Inner Dark Violet Avatar Hub */}
          <div className="w-full h-full rounded-full bg-[#140826] flex items-center justify-center">
            <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 xl:w-[17px] xl:h-[17px] text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]" strokeWidth={2.4} />
          </div>

          {/* Active Online Status Beacon Dot */}
          <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#140826] shadow-[0_0_8px_#34d399]" />
        </div>

        {/* Highlighted Down Chevron */}
        <ChevronDown 
          className={`w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/90 group-hover:text-fuchsia-300 transition-all duration-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] ${
            isOpen ? 'rotate-180 text-fuchsia-400' : ''
          }`} 
          strokeWidth={2.5} 
        />
      </button>

      {/* Accessible Dropdown Popover */}
      {isOpen && (
        <div
          role="menu"
          aria-orientation="vertical"
          className="
            absolute right-0 mt-3 w-52 py-2 rounded-2xl z-50
            bg-[#170F2C]/95 backdrop-blur-xl border border-purple-500/30
            shadow-[0_16px_36px_rgba(0,0,0,0.65),0_0_20px_rgba(239,53,237,0.15)]
            animate-in fade-in zoom-in-95 duration-150
          "
        >
          {/* User Header */}
          <div className="px-4 py-2 border-b border-purple-500/15">
            <p className="text-xs font-semibold text-white tracking-wide">SoundWave Listener</p>
            <p className="text-[11px] text-slate-400 truncate">listener@soundwave.io</p>
          </div>

          <div className="py-1">
            {PROFILE_MENU_ITEMS.map((item) => {
              const Icon = MENU_ICONS[item.icon];
              return (
                <button
                  key={item.id}
                  role="menuitem"
                  type="button"
                  onClick={() => handleItemClick(item.id)}
                  className="
                    w-full flex items-center gap-3 px-4 py-2.5 text-sm text-slate-300
                    hover:text-white hover:bg-white/10 transition-colors text-left cursor-pointer
                    focus:outline-none focus:bg-white/10
                  "
                >
                  {Icon && <Icon className="w-4 h-4 text-fuchsia-400" />}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

/* =========================================================================
   9. MOBILE NAVIGATION MENU DRAWER
   ========================================================================= */


/**
 * MobileMenu: Fullscreen premium glassmorphic navigation drawer for mobile and tablet screens.
 * Rendered directly into document.body via createPortal to prevent stacking context or transform containment traps.
 */
export const MobileMenu = ({ isOpen, onClose, activeId, onSelectNav, onSearchSubmit }) => {
  const [mounted, setMounted] = useState(false);
  const [mobileQuery, setMobileQuery] = useState('');
  const menuRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !mounted) return null;

  const sectionMap = {
    home: 'top',
    explore: 'explore-genres',
    library: 'featured-albums',
    favorites: 'made-for-you',
    radio: 'new-releases',
  };

  const handleItemClick = (id) => {
    onSelectNav?.(id);
    onClose();
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const targetId = sectionMap[id];
      if (targetId) {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (mobileQuery.trim()) {
      onSearchSubmit?.(mobileQuery.trim());
      onClose();
    }
  };

  return createPortal(
    <div 
      className="fixed inset-0 z-[99999] flex flex-col justify-start bg-black/75 backdrop-blur-xl lg:hidden animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Drawer Container - Sleek Top-to-Bottom Mobile Panel */}
      <div
        ref={menuRef}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
        className="
          w-full max-w-lg mx-auto bg-gradient-to-b from-[#160a26] via-[#120822] to-[#0c0418]
          border-b border-x border-purple-500/30 rounded-b-3xl
          shadow-[0_24px_60px_rgba(0,0,0,0.85),0_0_35px_rgba(240,68,237,0.2)]
          p-5 sm:p-6 max-h-[92vh] flex flex-col overflow-y-auto
          animate-in slide-in-from-top-6 duration-300
        "
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-purple-500/20">
          {/* Brand Logo & Name */}
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-full bg-gradient-to-tr from-fuchsia-500 to-purple-600 p-0.5 shadow-[0_0_12px_rgba(239,53,237,0.5)]">
              <div className="w-full h-full rounded-full bg-[#150a26] flex items-center justify-center text-xs text-fuchsia-300 font-bold">
                ♫
              </div>
            </div>
            <div>
              <span className="font-extrabold text-base tracking-wide bg-gradient-to-r from-white via-purple-200 to-fuchsia-300 bg-clip-text text-transparent">
                SoundWave
              </span>
              <span className="block text-[10px] text-purple-300/70 font-semibold tracking-wider uppercase">
                Music Navigation
              </span>
            </div>
          </div>

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer border border-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Search Field Inside Menu */}
        <form onSubmit={handleSearch} className="relative my-4">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-300/80 pointer-events-none" />
          <input
            type="text"
            value={mobileQuery}
            onChange={(e) => setMobileQuery(e.target.value)}
            placeholder="Search tracks, artists, genres..."
            className="w-full pl-10 pr-10 py-2.5 rounded-2xl bg-white/[0.08] hover:bg-white/[0.12] focus:bg-white/[0.15] border border-purple-400/25 focus:border-fuchsia-400 text-white placeholder:text-purple-300/50 text-sm focus:outline-none focus:ring-1 focus:ring-fuchsia-400/50 transition-all"
          />
          {mobileQuery && (
            <button
              type="button"
              onClick={() => setMobileQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-300 hover:text-white p-1 text-xs"
            >
              ✕
            </button>
          )}
        </form>

        {/* Navigation Items */}
        <nav className="flex flex-col gap-2 my-1">
          {NAV_ITEMS.map((item) => {
            const Icon = ICON_MAP[item.icon];
            const isActive = activeId === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleItemClick(item.id)}
                aria-current={isActive ? 'page' : undefined}
                style={{
                  ...(isActive
                    ? {
                        background: 'linear-gradient(110deg, #F044ED 0%, #7835FF 55%, #30219E 100%)',
                      }
                    : {}),
                }}
                className={`
                  w-full flex items-center justify-between px-4 py-3 rounded-2xl font-medium text-base transition-all duration-200 cursor-pointer
                  ${
                    isActive
                      ? 'text-white font-bold shadow-[0_4px_20px_rgba(240,68,237,0.35)] border border-white/30 scale-[1.01]'
                      : 'text-slate-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] active:bg-white/[0.12] border border-purple-400/15'
                  }
                `}
              >
                <div className="flex items-center gap-3.5">
                  {Icon && (
                    <div className={`p-1.5 rounded-xl ${isActive ? 'bg-white/20' : 'bg-purple-900/40 text-purple-300'}`}>
                      <Icon className="w-5 h-5 shrink-0" />
                    </div>
                  )}
                  <span className="tracking-wide">{item.label}</span>
                </div>
                {isActive ? (
                  <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
                ) : (
                  <span className="text-purple-400/50 text-xs">›</span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Footer Area with Live Equalizer & Status */}
        <div className="mt-4 pt-4 border-t border-purple-500/20 flex items-center justify-between text-xs text-purple-300/80">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium text-slate-300">Live SoundWave Stream</span>
          </div>

          {/* Equalizer Visualizer Waves */}
          <div className="flex items-end gap-1 h-3.5">
            <span className="w-1 h-3 bg-fuchsia-400 rounded-full animate-bounce [animation-delay:0ms]" />
            <span className="w-1 h-2 bg-purple-400 rounded-full animate-bounce [animation-delay:150ms]" />
            <span className="w-1 h-3.5 bg-pink-400 rounded-full animate-bounce [animation-delay:300ms]" />
            <span className="w-1 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:450ms]" />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

/* =========================================================================
   10. MAIN GUITAR NAVBAR COMPONENT
   ========================================================================= */
/**
 * GuitarNavbar: Luxury Acoustic Guitar Navigation Bar.
 * Directly replaces the standard capsule navbar with an authentic,
 * meticulously styled horizontal acoustic guitar inspired by guiter.webp:
 * - Single cutaway red/black sunburst guitar body
 * - Soundhole hosting the spinning vinyl disc logo
 * - Long rosewood fretboard hosting the navigation tabs (Home, Explore, Library, Favorites, Radio)
 * - 6 metallic guitar strings with interactive strum vibration on hover
 * - Headstock with chrome tuning pegs hosting the search bar and user profile dropdown
 * - Responsive mobile drawer and search bar
 */
export const GuitarNavbar = ({ onSearchSubmit, onProfileSelect }) => {
  const [activeNav, setActiveNav] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [isGuitarHovered, setIsGuitarHovered] = useState(false);
  const [hoveredNavId, setHoveredNavId] = useState(null);

  const handleNavSelect = (id) => {
    setActiveNav(id);
    const targetMap = { home: 'hero', explore: 'explore-music-genres', library: 'featured-albums', favorites: 'made-for-you', radio: 'new-releases' };
    const targetId = targetMap[id] || id;
    const el = document.getElementById(targetId);
    if (el) { el.scrollIntoView({ behavior: 'smooth' }); }
  };

  const handleSearch = (query) => {
    onSearchSubmit?.(query);
  };

  return (
    <header id="soundwave-navbar" className="relative z-50 w-full max-w-[1620px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 pt-2 sm:pt-3 md:pt-4 select-none">
      {/* 
        Main Guitar Container:
        - Houses the SVG Guitar Body, Fretboard, and Headstock
        - Interactive strum vibration on hover
        - Responsive height scaling
      */}
      <div 
        onMouseEnter={() => setIsGuitarHovered(true)}
        onMouseLeave={() => setIsGuitarHovered(false)}
        className="
          relative z-40 w-full
          h-[88px] sm:h-[108px] md:h-[128px] lg:h-[148px] xl:h-[168px]
          flex items-center justify-between
          pl-2 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-8
          pr-3 sm:pr-4 md:pr-6 lg:pr-8 xl:pr-14
          transition-all duration-300
        "
      >
        {/* Vector SVG Guitar Frame (Silhouette, Sunburst, Fretboard, Strings, Pegs) */}
        <GuitarSvgFrame isHovered={isGuitarHovered} hoveredNavId={hoveredNavId} />

        {/* Ambient Music Particles Floating OUT of Guitar Body (Image 2) */}
        <GuitarBodyParticles />

        {/* ========================================================
            LEFT SECTION: Guitar Body Soundhole Vinyl + Branding
           ======================================================== */}
        <div className="relative z-20 flex items-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-3.5 xl:gap-4 shrink-0 ml-[2px] sm:ml-[26px] lg:ml-[28px] xl:ml-[50px]">
          {/* Vinyl Disc Logo centered right over the Guitar Soundhole Rosette */}
          <div className="relative shrink-0 flex items-center justify-center">
            {/* Desktop XL: 110px, Laptop LG: 94px, Tablet SM: 70px, Mobile: 54px */}
            <div className="hidden xl:block">
              <VinylLogo size={110} />
            </div>
            <div className="hidden lg:block xl:hidden">
              <VinylLogo size={94} />
            </div>
            <div className="hidden sm:block lg:hidden">
              <VinylLogo size={70} />
            </div>
            <div className="block sm:hidden">
              <VinylLogo size={54} />
            </div>
          </div>

          {/* SoundWave Brand Typography & Tagline */}
          <div className="relative z-10">
            <BrandIdentity />
          </div>
        </div>

        {/* ========================================================
            CENTER SECTION: Fretboard Navigation Links (Desktop & Laptop)
            Rendered directly on top of the guitar neck/fretboard without any black capsule
           ======================================================== */}
        <div className="relative z-30 hidden lg:flex items-center justify-center shrink-0 mx-auto lg:-translate-x-2 xl:-translate-x-4">
          <NavbarLinks 
            activeId={activeNav} 
            onSelect={handleNavSelect} 
            onHoverItem={setHoveredNavId}
          />
        </div>

        {/* ========================================================
            RIGHT SECTION: Headstock Controls (Search + Profile)
           ======================================================== */}
        <div className="relative z-50 flex items-center gap-1.5 sm:gap-2.5 md:gap-3 lg:gap-3 xl:gap-3.5 shrink-0">
          {/* Desktop Search Bar (visible >= 1024px) */}
          <div className="hidden lg:block">
            <SearchBar 
              onSearch={handleSearch} 
              className="lg:w-[130px] xl:w-[155px] bg-black/40 hover:bg-black/55 backdrop-blur-xs border-white/20 hover:border-white/40 shadow-sm"
            />
          </div>

          {/* Mobile / Tablet Search Trigger Icon (< 1024px) */}
          <button
            type="button"
            onClick={() => setIsMobileSearchOpen((prev) => !prev)}
            aria-label="Toggle search field"
            className="lg:hidden p-1.5 sm:p-2 rounded-full text-white/90 hover:text-white hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
          >
            <SearchIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Profile Dropdown with User Avatar & Chevron */}
          <ProfileDropdown onAction={onProfileSelect} />

          {/* Mobile Hamburger Menu Button (< 1024px) */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open navigation menu"
            className="lg:hidden p-1.5 sm:p-2 rounded-full text-white/90 hover:text-white hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
          >
            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>

      {/* Expandable Mobile Search Bar (Below guitar when toggled on small screens) */}
      {isMobileSearchOpen && (
        <div className="lg:hidden mt-3 px-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <SearchBar 
            onSearch={handleSearch} 
            className="max-w-none w-full bg-[#180a22]/95 border-purple-400/40"
          />
        </div>
      )}

      {/* Mobile Navigation Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeId={activeNav}
        onSelectNav={handleNavSelect}
        onSearchSubmit={handleSearch}
      />
    </header>
  );
};

// Aliases for convenience & compatibility
export const Navbar = GuitarNavbar;
export default GuitarNavbar;

