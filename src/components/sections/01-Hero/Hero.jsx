import React, { useState, useEffect } from 'react';
import {
  Heart,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
  Flame,
  ChevronRight,
  Music2,
  Users,
  Globe2,
  ChevronDown,
} from 'lucide-react';

import {
  heroData,
  heroImages,
  trendingArtists as ARTISTS,
  heroStats,
} from './HeroData';

const {
  blindingLights: blindingLightsImg,
  chillVibes: chillVibesImg,
  doja: dojaImg,
} = heroImages;


/* =========================================================================
   1. HERO BACKGROUND AMBIENT DECORATIONS
   ========================================================================= */
/**
 * HeroBackgroundDecorations: Ultra-refined, low-opacity music-themed ambient layer.
 * 
 * Design Elements:
 * - Pure white website background preserved (#ffffff).
 * - Soft lateral soundwave ribbons and undulating frequency curves (Left & Right).
 * - Faint circular dot clusters & matrix particles (inspired by modern luxury audio landing pages).
 * - Faint curved harmonic connection lines linking the central circle to the 4 floating cards.
 * - Floating musical notes (♪, ♫, ♩, ✦) drifting gently in peripheral empty spaces.
 * - 100% vector SVG & CSS, pointer-events-none, zero distraction, zero text obstruction.
 */
export const HeroBackgroundDecorations = () => {
  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none z-0"
      aria-hidden="true"
    >
      {/* 
        ============================================================
        1. AMBIENT RADIAL LIGHTING (Soft Bokeh Lights behind hero)
        ============================================================ 
      */}
      {/* Central Warm Magenta/Violet Halo behind the portrait */}
      <div
        className="absolute w-[580px] h-[580px] rounded-full blur-[100px] opacity-30 top-[100px] left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(236,72,153,0.35) 0%, rgba(139,92,246,0.2) 45%, transparent 70%)',
        }}
      />

      {/* Far-Left Soft Peach/Coral Glow */}
      <div
        className="hidden lg:block absolute w-[360px] h-[360px] rounded-full blur-[90px] opacity-25 -left-20 top-[160px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,122,89,0.3) 0%, rgba(236,72,153,0.15) 50%, transparent 70%)',
        }}
      />

      {/* Far-Right Soft Purple/Indigo Glow */}
      <div
        className="hidden lg:block absolute w-[380px] h-[380px] rounded-full blur-[90px] opacity-25 -right-20 top-[140px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(168,85,247,0.3) 0%, rgba(56,189,248,0.15) 50%, transparent 70%)',
        }}
      />

      {/* 
        ============================================================
        2. VECTOR HARMONIC WAVES & CARD CONNECTIONS
        (Faint flowing ribbons connecting peripheral space to center)
        ============================================================ 
      */}
      <svg
        viewBox="0 0 1440 600"
        className="absolute inset-0 w-full h-full object-cover opacity-35"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Subtle Pink to Purple Harmonic Gradient */}
          <linearGradient id="heroHarmonicGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ec4899" stopOpacity="0.02" />
            <stop offset="30%" stopColor="#ec4899" stopOpacity="0.22" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.30" />
            <stop offset="70%" stopColor="#38bdf8" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.02" />
          </linearGradient>

          {/* Secondary Soft Orange-Pink Ribbon Gradient */}
          <linearGradient id="heroHarmonicGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff7a59" stopOpacity="0.02" />
            <stop offset="40%" stopColor="#ec4899" stopOpacity="0.20" />
            <stop offset="70%" stopColor="#a855f7" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {/* Harmonic Wave Ribbon 1 (Left to Right flowing beneath cards) */}
        <path
          d="M -50,380 C 220,320 380,440 600,380 C 780,330 980,430 1180,360 C 1320,310 1420,350 1500,340"
          fill="none"
          stroke="url(#heroHarmonicGrad1)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Harmonic Wave Ribbon 2 (Counter-wave for natural organic depth) */}
        <path
          d="M -50,420 C 180,480 420,360 660,410 C 860,450 1060,320 1280,390 C 1380,420 1450,400 1520,390"
          fill="none"
          stroke="url(#heroHarmonicGrad2)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>

      {/* 
        ============================================================
        4. FLOATING PERIPHERAL MUSIC NOTES & SHIMMER STARS
        ============================================================ 
      */}
      {/* Note 1 (Far-Left Upper: Soft Magenta ♪) */}
      <div
        className="hidden lg:block absolute left-[8%] top-[18%] text-pink-500 font-bold text-2xl opacity-40 select-none animate-hero-note-drift"
        style={{ animationDuration: '7s', animationDelay: '0s' }}
      >
        ♪
      </div>

      {/* Note 2 (Far-Left Lower: Soft Purple ♫) */}
      <div
        className="hidden md:block absolute left-[12%] bottom-[22%] text-purple-500 font-bold text-xl opacity-35 select-none animate-hero-note-drift"
        style={{ animationDuration: '8.5s', animationDelay: '-2.5s' }}
      >
        ♫
      </div>

      {/* Note 3 (Far-Right Upper: Soft Cyan/Pink ♩) */}
      <div
        className="hidden lg:block absolute right-[9%] top-[16%] text-pink-400 font-bold text-2xl opacity-40 select-none animate-hero-note-drift"
        style={{ animationDuration: '7.8s', animationDelay: '-1.5s' }}
      >
        ♩
      </div>

      {/* Note 4 (Far-Right Lower: Soft Violet ♬) */}
      <div
        className="hidden md:block absolute right-[11%] bottom-[25%] text-indigo-400 font-bold text-xl opacity-35 select-none animate-hero-note-drift"
        style={{ animationDuration: '9s', animationDelay: '-4s' }}
      >
        ♬
      </div>

      {/* Delicate Sparkle Star (Left) */}
      <div
        className="hidden xl:block absolute left-[19%] top-[14%] text-pink-400 text-sm opacity-50 animate-pulse"
        style={{ animationDuration: '3.5s' }}
      >
        ✦
      </div>

      {/* Delicate Sparkle Star (Right) */}
      <div
        className="hidden xl:block absolute right-[18%] top-[12%] text-purple-400 text-xs opacity-50 animate-pulse"
        style={{ animationDuration: '4s', animationDelay: '-1.5s' }}
      >
        ✦
      </div>
    </div>
  );
};

/* =========================================================================
   2. SPINNING COMPACT DISC VISUAL
   ========================================================================= */
/**
 * CompactDisc: High-Fidelity Spinning Compact Disc Visual
 * - Exact 22s smooth continuous 360-degree rotation matching Video 2
 * - Pauses gracefully on hover
 * - Ambient breathing neon aura halo
 * - Concentric light reflection sheen and iridescent sweeps
 */
export const CompactDisc = ({ size = 460, className = '' }) => {
  return (
    <div
      className={`relative select-none group ${className}`}
      style={{ width: size, height: size }}
      aria-label="SoundWave Compact Disc"
    >
      {/* Ambient Breathing Neon Halo */}
      <div
        className="absolute inset-0 pointer-events-none rounded-full -z-10 animate-cd-halo"
        style={{
          transform: 'scale(1.12)',
          background:
            'radial-gradient(circle at 45% 40%, rgba(168, 85, 247, 0.40) 0%, rgba(236, 72, 153, 0.32) 32%, rgba(6, 182, 212, 0.22) 58%, rgba(244, 63, 94, 0.12) 75%, transparent 85%)',
          filter: `blur(${Math.max(16, Math.round(size * 0.08))}px)`,
        }}
        aria-hidden="true"
      />

      {/* Main Disc Body with Elevation Drop Shadows */}
      <div
        className="relative w-full h-full rounded-full transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        style={{
          filter: `drop-shadow(0 ${Math.round(size * 0.035)}px ${Math.round(size * 0.055)}px rgba(26, 10, 48, 0.35)) drop-shadow(0 4px 12px rgba(0, 0, 0, 0.18))`,
        }}
      >
        {/* Real Continuous 360-degree Rotating CD Image */}
        <img
          src="/compact_disc.png"
          alt="Neon Music Bliss Compact Disc"
          width={size}
          height={size}
          className="w-full h-full object-contain pointer-events-none select-none rounded-full animate-cd-spin"
          loading="eager"
          decoding="async"
          draggable="false"
        />

        {/* Dynamic Holographic Rainbow Sheen Reflection */}
        <div
          className="absolute inset-0 pointer-events-none rounded-full overflow-hidden animate-cd-rainbow-spin opacity-30 group-hover:opacity-45 transition-opacity duration-500"
          style={{ mixBlendMode: 'screen' }}
          aria-hidden="true"
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              background:
                'conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(168, 85, 247, 0.35) 45deg, rgba(6, 182, 212, 0.40) 90deg, transparent 135deg, rgba(236, 72, 153, 0.38) 180deg, rgba(245, 158, 11, 0.30) 225deg, transparent 270deg, rgba(16, 185, 129, 0.25) 315deg, transparent 360deg)',
            }}
          />
        </div>

        {/* Specular Polycarbonate Surface Glare */}
        <div
          className="absolute inset-0 pointer-events-none rounded-full"
          style={{
            background: `radial-gradient(ellipse ${Math.round(size * 0.55)}px ${Math.round(size * 0.2)}px at 28% 20%, rgba(255, 255, 255, 0.35) 0%, transparent 80%)`,
            mixBlendMode: 'screen',
          }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

/* =========================================================================
   3. HERO HARMONY DISC & GOLDEN GRAMOPHONE VISUAL
   ========================================================================= */
/**
 * HeroHarmonyDisc: Symmetrical Master Artwork with Golden Gramophone Horn & Complete Tonearm
 * & Continuous 360-degree Spinning Compact Disc (Video 2 rotation specification)
 *
 * - 100% complete, unbroken Golden Gramophone Horn Bell & Base Mount
 * - 100% complete, authentic Tonearm & Stylus Needle resting on the record grooves
 * - Central Compact Disc spins 360-degree continuously at 22s linear infinite underneath
 * - Pauses gracefully on hover
 * - Holographic iridescent rainbow reflection sweeps & specular sheen
 * - Breathing ambient neon aura halo behind
 */
export const HeroHarmonyDisc = ({ className = '' }) => {
  return (
    <div
      className={`relative group select-none shrink-0 flex items-center justify-center ${className}`}
      aria-label="SoundWave Golden Gramophone and Spinning Disc"
    >
      {/* 
        ========================================================
        MASTER ARTWORK CONTAINER (Aspect Ratio 864 / 1004)
        ======================================================== 
      */}
      <div
        className="relative w-[270px] sm:w-[330px] md:w-[390px] lg:w-[450px] xl:w-[480px] transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        style={{ aspectRatio: '864 / 1004' }}
      >
        {/* Soft Ambient Breathing Neon Aura */}
        <div
          className="absolute rounded-full -z-10 animate-cd-halo pointer-events-none"
          style={{
            left: '48.26%',
            top: '59.26%',
            width: '76%',
            aspectRatio: '1 / 1',
            transform: 'translate(-50%, -50%)',
            background: [
              'radial-gradient(circle at 45% 45%,',
              'rgba(168, 85, 247, 0.45) 0%,',
              'rgba(236, 72, 153, 0.35) 35%,',
              'rgba(6, 182, 212, 0.22) 60%,',
              'rgba(244, 63, 94, 0.12) 75%,',
              'transparent 85%)',
            ].join(' '),
            filter: 'blur(34px)',
          }}
          aria-hidden="true"
        />

        {/* 
          ========================================================
          CONTINUOUS 360° SPINNING COMPACT DISC
          Exact geometric alignment: center (417, 595), diameter 624
          Percentage: left 48.2639%, top 59.2629%, width 72.2222%
          ======================================================== 
        */}
        <div
          className="absolute rounded-full overflow-hidden select-none"
          style={{
            left: '48.2639%',
            top: '59.2629%',
            width: '72.2222%',
            aspectRatio: '1 / 1',
            transform: 'translate(-50%, -50%)',
            filter: 'drop-shadow(0 6px 16px rgba(26, 10, 48, 0.40))',
          }}
        >
          {/* Rotating Disc Body */}
          <img
            src="/compact_disc_spinning.png"
            alt="Neon Music Bliss Spinning CD"
            className="w-full h-full object-contain pointer-events-none select-none rounded-full animate-cd-spin"
            loading="eager"
            decoding="async"
            draggable="false"
          />

          {/* Holographic Iridescent Rainbow Sheen Reflection */}
          <div
            className="absolute inset-0 pointer-events-none rounded-full overflow-hidden animate-cd-rainbow-spin opacity-35 group-hover:opacity-50 transition-opacity duration-500"
            style={{ mixBlendMode: 'screen' }}
            aria-hidden="true"
          >
            <div
              className="w-full h-full rounded-full"
              style={{
                background:
                  'conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(168, 85, 247, 0.35) 45deg, rgba(6, 182, 212, 0.40) 90deg, transparent 135deg, rgba(236, 72, 153, 0.38) 180deg, rgba(245, 158, 11, 0.30) 225deg, transparent 270deg, rgba(16, 185, 129, 0.25) 315deg, transparent 360deg)',
              }}
            />
          </div>

          {/* Polycarbonate Surface Specular Glare */}
          <div
            className="absolute inset-0 pointer-events-none rounded-full"
            style={{
              background:
                'radial-gradient(ellipse 55% 20% at 28% 20%, rgba(255, 255, 255, 0.38) 0%, transparent 80%)',
              mixBlendMode: 'screen',
            }}
            aria-hidden="true"
          />
        </div>

        {/* 
          ========================================================
          GOLDEN GRAMOPHONE HORN & COMPLETE TONEARM OVERLAY
          Preserves 100% of the Horn Bell and complete Tonearm with Needle
          ======================================================== 
        */}
        <img
          src="/gramophone_overlay_clean.png?v=clean_horn_mouth_v5"
          alt="SoundWave Golden Gramophone Horn and Tonearm"
          className="
            absolute inset-0 w-full h-full object-contain
            pointer-events-none select-none z-10
            drop-shadow-[0_12px_28px_rgba(26,10,48,0.22)]
          "
          loading="eager"
          decoding="async"
          draggable="false"
        />
      </div>
    </div>
  );
};

/* =========================================================================
   4. RESPONSIVE ARCHED TITLE ("Your Music Your World")
   ========================================================================= */
/**
 * HeroArchedTitle: Responsive SVG Arched Headline
 * "Your Music Your World ✦"
 * 
 * Features & Polish:
 * - True circular arc SVG path (A 720 720) for constant, smooth, concentric curvature
 * - Perfectly centered and aligned to frame the top contour of the central compact disc
 * - Crisp Plus Jakarta Sans typography with rich liquid aurora gradient on "Your World"
 * - Traveling Specular Shining Gleam: Light beam sweeps across the letters through an SVG text silhouette mask
 * - Glowing 4-point sparkle star ✦ with radiant lens-flare pulse (white specular core + hot pink halo)
 * - Delicate micro-sparkles hovering over the arch with staggered twinkle timing
 * - 100% vector SVG, fully responsive, zero blur
 */
export const HeroArchedTitle = ({ className = '' }) => {
  return (
    <div
      className={`
        relative z-20 w-full max-w-[840px] mx-auto 
        h-[48px] sm:h-[75px] md:h-[90px] lg:h-[100px] xl:h-[105px] 
        select-none -mb-1 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-4 
        ${className}
      `}
    >
      <svg
        viewBox="0 0 900 135"
        className="w-full h-full overflow-visible"
        aria-label="Your Music Your World"
      >
        <defs>
          {/* Smooth, concentric true circular arc perfectly cradling the central circle */}
          <path
            id="heroCurvePath"
            d="M 80,124 A 720 720 0 0 1 820,124"
            fill="none"
          />

          {/* Electric Purple to Neon Magenta & Coral Pink Gradient */}
          <linearGradient id="heroWorldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="38%" stopColor="#ec4899" />
            <stop offset="75%" stopColor="#f43f5e" />
            <stop offset="100%" stopColor="#fb7185" />
          </linearGradient>

          {/* Flare Radial Gradient for Traveling Specular Shine */}
          <radialGradient id="travelingGlintGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="25%" stopColor="#fff1f5" stopOpacity="0.95" />
            <stop offset="55%" stopColor="#ec4899" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
          </radialGradient>

          {/* Mask: Text silhouette so the traveling beam ONLY shines within the letters */}
          <mask id="curvedTextMask">
            <text
              fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
              fontWeight="800"
              fontSize="46"
              textAnchor="middle"
              letterSpacing="-0.02em"
              fill="#ffffff"
            >
              <textPath href="#heroCurvePath" startOffset="50%">
                Your Music Your World ✦
              </textPath>
            </text>
          </mask>

          {/* Soft Luminous Sparkle Glow Filter */}
          <filter id="heroSparkleGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 1. BASE TEXT LAYER (Crisp original typography) */}
        <text
          fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="46"
          textAnchor="middle"
          letterSpacing="-0.02em"
          className="select-none tracking-tight font-extrabold"
        >
          <textPath href="#heroCurvePath" startOffset="50%">
            {/* "Your Music" in deep luxury dark violet */}
            <tspan fill="#1e1035">{heroData.archedTitle.prefix} </tspan>
            {/* "Your World" in lush vibrant music gradient */}
            <tspan fill="url(#heroWorldGrad)">{heroData.archedTitle.accent}</tspan>
            {/* Four-point glowing neon sparkle star with shining flare animation */}
            <tspan
              fill="#f43f5e"
              dx="12"
              dy="-4"
              fontSize="34"
              filter="url(#heroSparkleGlow)"
              className="animate-title-sparkle"
            >
              ✦
            </tspan>
          </textPath>
        </text>

        {/* 2. TRAVELING SPECULAR LIGHT SWEEP (Masked inside letters) */}
        <g mask="url(#curvedTextMask)" style={{ pointerEvents: 'none' }}>
          <g>
            <animateMotion
              path="M 140,122 A 720 720 0 0 1 760,122"
              dur="3.8s"
              repeatCount="indefinite"
              keyTimes="0; 0.65; 1"
              keyPoints="0; 1; 1"
              calcMode="spline"
              keySplines="0.4 0 0.2 1; 0 0 1 1"
            />
            {/* Specular flare: white core + luminous aura */}
            <ellipse rx="110" ry="60" fill="url(#travelingGlintGrad)" opacity="0.95" />
            <ellipse rx="50" ry="26" fill="#ffffff" opacity="0.98" />
          </g>
        </g>

        {/* 3. DELICATE MICRO-SPARKLES (Soft glints hovering above the arch) */}
        <g className="animate-micro-star-1 pointer-events-none" aria-hidden="true">
          <path d="M 370,32 L 372,37 L 377,38 L 372,39 L 370,44 L 368,39 L 363,38 L 368,37 Z" fill="#ec4899" />
          <circle cx="370" cy="38" r="1.2" fill="#ffffff" />
        </g>

        <g className="animate-micro-star-2 pointer-events-none" aria-hidden="true">
          <path d="M 540,30 L 542,35 L 547,36 L 542,37 L 540,42 L 538,37 L 533,36 L 538,35 Z" fill="#fb7185" />
          <circle cx="540" cy="36" r="1.2" fill="#ffffff" />
        </g>
      </svg>
    </div>
  );
};

/* =========================================================================
   5. ANIMATED INTERACTIVE PLAYER CARD ("Blinding Lights")
   ========================================================================= */
/**
 * AnimatedPlayerCard: Master 100% vector-rendered, fully animated
 * interactive glassmorphic music player card recreating the signature
 * Blinding Lights Hero card with micro-animations across every element:
 * 
 * Animations:
 * - Floating 3D card levitation & breathing neon aura
 * - Organic pulsing heartbeat on the neon heart icon
 * - Expanding luminous ripple ring & glowing aura on the Play/Pause button
 * - Animated laser shimmer & pulsing scrubber thumb on the progress bar
 * - Real-time animated audio equalizer bars next to the track title
 * - Smooth interactive play/pause, like toggle, shuffle, and repeat controls
 */
export const AnimatedPlayerCard = ({ className = '' }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLiked, setIsLiked] = useState(true);
  const [isShuffle, setIsShuffle] = useState(true);
  const [isRepeat, setIsRepeat] = useState(true);
  const [currentSeconds, setCurrentSeconds] = useState(134); // 2:14 = 134 seconds
  const totalSeconds = 200; // 3:20 = 200 seconds

  // Smoothly increment track playback timer when playing
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSeconds((prev) => (prev >= totalSeconds ? 0 : prev + 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const remSecs = secs % 60;
    return `${mins}:${remSecs < 10 ? '0' : ''}${remSecs}`;
  };

  const progressPercent = Math.min(100, (currentSeconds / totalSeconds) * 100);

  return (
    <div
      className={`
        relative rounded-[24px] sm:rounded-[28px] md:rounded-[32px]
        p-3 sm:p-4 md:p-5
        bg-gradient-to-b from-[#180D33]/92 via-[#130829]/95 to-[#0D051D]/95
        border border-purple-400/30
        backdrop-blur-xl
        animate-player-aura
        select-none overflow-hidden cursor-default
        transition-all duration-300 ease-out
        ${className}
      `}
    >
      {/* 
        1. Inner Glass Specular Wave Highlight (Matches reference card)
      */}
      <div
        className="absolute -top-12 -right-12 w-48 h-48 rounded-full pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(239, 53, 237, 0.4) 0%, rgba(120, 53, 255, 0.15) 50%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(255, 122, 89, 0.4) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Decorative inner curve line across top-right (Vector glass reflection) */}
      <svg
        viewBox="0 0 300 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full pointer-events-none opacity-25"
        preserveAspectRatio="none"
      >
        <path
          d="M 120 0 C 180 30, 240 60, 300 40 L 300 0 Z"
          fill="url(#cardSheenGrad)"
        />
        <defs>
          <linearGradient id="cardSheenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#EF35ED" stopOpacity="0.05" />
          </linearGradient>
        </defs>
      </svg>

      {/* ========================================================
          TOP ROW: Album Artwork + Title & Artist + Heart Icon
         ======================================================== */}
      <div className="relative z-10 flex items-center justify-between gap-2.5 sm:gap-3.5">
        {/* Left: Thumbnail & Song Details */}
        <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
          {/* Album Cover Thumbnail with Glowing Ring */}
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl overflow-hidden shrink-0 shadow-[0_4px_16px_rgba(0,0,0,0.5)] border border-purple-500/40">
            <img
              src={blindingLightsImg}
              alt="Blinding Lights Album Cover"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            {/* Ambient soft corner glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 via-transparent to-pink-500/20 pointer-events-none" />
          </div>

          {/* Song Title, Artist & Live Equalizer */}
          <div className="min-w-0 pr-1">
            <div className="flex items-center gap-1.5">
              <h3 className="text-xs sm:text-sm md:text-base font-extrabold text-white tracking-tight leading-tight truncate">
                Blinding Lights
              </h3>
              {/* Mini animated equalizer bars dancing to music */}
              {isPlaying && (
                <div className="flex items-end gap-[2px] h-3 shrink-0 ml-1" aria-hidden="true">
                  <span className="w-[2px] h-2 bg-gradient-to-t from-[#7835FF] to-[#EF35ED] rounded-full animate-equalizer-bar" style={{ animationDuration: '0.65s' }} />
                  <span className="w-[2px] h-3 bg-gradient-to-t from-[#EF35ED] to-[#FF7A59] rounded-full animate-equalizer-bar" style={{ animationDuration: '0.9s', animationDelay: '-0.25s' }} />
                  <span className="w-[2px] h-1.5 bg-gradient-to-t from-[#7835FF] to-[#EF35ED] rounded-full animate-equalizer-bar" style={{ animationDuration: '0.75s', animationDelay: '-0.5s' }} />
                </div>
              )}
            </div>
            <p className="text-[10px] sm:text-xs md:text-[13px] text-slate-300 font-medium leading-tight truncate mt-0.5 sm:mt-1">
              The Weeknd
            </p>
          </div>
        </div>

        {/* Right: Pulsing Heart Icon (Interactive Like) */}
        <button
          type="button"
          onClick={() => setIsLiked((prev) => !prev)}
          title={isLiked ? 'Unlike' : 'Like'}
          aria-label="Like Blinding Lights"
          className="p-1 sm:p-1.5 rounded-full hover:bg-white/10 transition-colors focus:outline-none cursor-pointer shrink-0"
        >
          <Heart
            className={`
              w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 transition-all duration-200
              ${isLiked
                ? 'text-[#EF35ED] fill-[#EF35ED] animate-heartbeat'
                : 'text-slate-400 hover:text-white'
              }
            `}
            strokeWidth={2.2}
          />
        </button>
      </div>

      {/* ========================================================
          MIDDLE ROW: Track Progress Bar & Timers
         ======================================================== */}
      <div className="relative z-10 mt-3 sm:mt-4 md:mt-5">
        {/* Progress Bar Container */}
        <div className="relative w-full h-1 sm:h-1.5 bg-white/10 rounded-full overflow-hidden">
          {/* Active Gradient Filled Track */}
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#7835FF] via-[#EF35ED] to-[#FF7A59] relative transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          >
            {/* Animated Laser Shimmer sweeping along the filled track */}
            <div
              className="absolute inset-y-0 w-8 bg-gradient-to-r from-transparent via-white/70 to-transparent animate-progress-shimmer pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Glowing Scrubber Thumb (Positioned dynamically on the track) */}
        <div
          className="absolute -top-1 sm:-top-1.5 pointer-events-none transition-all duration-300"
          style={{ left: `calc(${progressPercent}% - 6px)` }}
        >
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 bg-white rounded-full animate-thumb-pulse" />
        </div>

        {/* Timers (Current Time & Total Time) */}
        <div className="flex items-center justify-between text-[9.5px] sm:text-[11px] md:text-xs text-slate-400 font-mono font-medium mt-1.5">
          <span>{formatTime(currentSeconds)}</span>
          <span>{formatTime(totalSeconds)}</span>
        </div>
      </div>

      {/* ========================================================
          BOTTOM ROW: Playback Controls (Shuffle, Prev, Play/Pause, Next, Repeat)
         ======================================================== */}
      <div className="relative z-10 flex items-center justify-between mt-2 sm:mt-2.5 md:mt-3 px-1 sm:px-2">
        {/* Shuffle Button */}
        <button
          type="button"
          onClick={() => setIsShuffle((prev) => !prev)}
          title="Toggle Shuffle"
          aria-label="Toggle Shuffle"
          className={`
            p-1 sm:p-1.5 rounded-full transition-all duration-200 cursor-pointer
            ${isShuffle
              ? 'text-[#EF35ED] drop-shadow-[0_0_6px_rgba(239,53,237,0.7)] hover:scale-110'
              : 'text-slate-500 hover:text-slate-300'
            }
          `}
        >
          <Shuffle className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5" strokeWidth={2.2} />
        </button>

        {/* Previous Button (SkipBack) */}
        <button
          type="button"
          onClick={() => setCurrentSeconds(0)}
          title="Previous Track"
          aria-label="Previous Track"
          className="p-1 sm:p-1.5 rounded-full text-white/90 hover:text-white hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
        >
          <SkipBack className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 fill-current" />
        </button>

        {/* Center Circular Play/Pause Button with Glowing Ripple Ring */}
        <div className="relative flex items-center justify-center">
          {/* Expanding Pulsing Ring Behind Button (When Playing) */}
          {isPlaying && (
            <div
              className="absolute w-full h-full rounded-full bg-gradient-to-tr from-[#7835FF] to-[#EF35ED] animate-play-ripple pointer-events-none"
              aria-hidden="true"
            />
          )}

          {/* Master Play/Pause Gradient Circle */}
          <button
            type="button"
            onClick={() => setIsPlaying((prev) => !prev)}
            title={isPlaying ? 'Pause' : 'Play'}
            aria-label={isPlaying ? 'Pause Blinding Lights' : 'Play Blinding Lights'}
            className="
              relative z-10 w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full
              bg-gradient-to-tr from-[#7835FF] via-[#EF35ED] to-[#FF7A59]
              flex items-center justify-center text-white
              shadow-[0_0_20px_rgba(239,53,237,0.65)] hover:shadow-[0_0_28px_rgba(239,53,237,0.9)]
              hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer
              animate-play-glow
            "
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
            ) : (
              <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current ml-0.5" />
            )}
          </button>
        </div>

        {/* Next Button (SkipForward) */}
        <button
          type="button"
          onClick={() => setCurrentSeconds(0)}
          title="Next Track"
          aria-label="Next Track"
          className="p-1 sm:p-1.5 rounded-full text-white/90 hover:text-white hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
        >
          <SkipForward className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 fill-current" />
        </button>

        {/* Repeat Button */}
        <button
          type="button"
          onClick={() => setIsRepeat((prev) => !prev)}
          title="Toggle Repeat"
          aria-label="Toggle Repeat"
          className={`
            p-1 sm:p-1.5 rounded-full transition-all duration-200 cursor-pointer
            ${isRepeat
              ? 'text-[#EF35ED] drop-shadow-[0_0_6px_rgba(239,53,237,0.7)] hover:scale-110'
              : 'text-slate-500 hover:text-slate-300'
            }
          `}
        >
          <Repeat className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5" strokeWidth={2.2} />
        </button>
      </div>
    </div>
  );
};

/* =========================================================================
   6. TRENDING NOW ARTISTS CAPSULE CARD
   ========================================================================= */
/* ARTISTS imported from HeroData */

/**
 * TrendingNowCard: 100% Vector/CSS Glassmorphic Card
 * Recreates the Trending Now box with Fire icon, 5 artist circles, and chevron.
 */
export const TrendingNowCard = ({ className = '' }) => {
  return (
    <div
      className={`
        relative rounded-[22px] sm:rounded-[26px]
        p-3 sm:p-4
        bg-gradient-to-b from-[#180D33]/92 via-[#130829]/95 to-[#0D051D]/95
        border border-purple-400/35
        backdrop-blur-xl
        shadow-[0_16px_36px_rgba(0,0,0,0.55),0_0_24px_rgba(168,85,247,0.32)]
        select-none cursor-pointer
        transition-all duration-300 ease-out
        hover:scale-[1.03] hover:-translate-y-1 hover:border-purple-300/60
        ${className}
      `}
    >
      {/* Ambient Inner Sheen */}
      <div
        className="absolute -top-10 -right-10 w-32 h-32 rounded-full pointer-events-none opacity-25"
        style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.4) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* Header Row: Fire Icon + "Trending Now" + Chevron */}
      <div className="relative z-10 flex items-center justify-between mb-2.5 sm:mb-3">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400">
            <Flame className="w-3.5 h-3.5 fill-orange-400 text-orange-400 animate-pulse" />
          </div>
          <span className="font-bold text-white text-xs sm:text-[13px] tracking-wide">
            Trending Now
          </span>
        </div>
        <ChevronRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
      </div>

      {/* Artists Avatar Row */}
      <div className="relative z-10 flex items-center justify-between gap-1.5 sm:gap-2">
        {ARTISTS.map((artist) => (
          <div
            key={artist.id}
            title={artist.name}
            className={`
              relative w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full overflow-hidden shrink-0
              border-2 ${artist.border}
              transition-transform duration-200 hover:scale-115 hover:z-20
            `}
          >
            <img
              src={artist.img}
              alt={artist.name}
              className="w-full h-full object-cover select-none pointer-events-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

/* =========================================================================
   7. NEW ARTIST CAPSULE CARD ("Doja Cat")
   ========================================================================= */
/**
 * NewArtistCard: 100% Vector/CSS Glassmorphic Capsule Card
 * Recreates the New Artist box with golden ring avatar, text, and chevron.
 */
export const NewArtistCard = ({ className = '' }) => {
  return (
    <div
      className={`
        relative rounded-full
        pl-2.5 pr-3.5 py-2 sm:py-2.5
        bg-gradient-to-r from-[#180D33]/92 via-[#130829]/95 to-[#0D051D]/95
        border border-purple-400/35
        backdrop-blur-xl
        shadow-[0_14px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(236,72,153,0.28)]
        flex items-center gap-2.5 sm:gap-3
        select-none cursor-pointer
        transition-all duration-300 ease-out
        hover:scale-[1.04] hover:-translate-y-1 hover:border-pink-400/60
        ${className}
      `}
    >
      {/* Avatar with Radiant Golden/Amber Glow Ring */}
      <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden shrink-0 border-2 border-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.65)]">
        <img
          src={dojaImg}
          alt="New Featured Artist"
          className="w-full h-full object-cover select-none pointer-events-none"
        />
      </div>

      {/* Text Info */}
      <div className="flex flex-col min-w-0 pr-1">
        <span className="font-extrabold text-white text-xs sm:text-[13px] leading-tight truncate">
          New Artist
        </span>
        <span className="text-[10px] sm:text-[11px] font-semibold text-purple-300/80 leading-tight">
          Discover Now
        </span>
      </div>

      {/* Chevron Right */}
      <ChevronRight className="w-4 h-4 text-white/50 shrink-0 ml-auto group-hover:text-white transition-colors" />
    </div>
  );
};

/* =========================================================================
   8. CHILL VIBES PLAYLIST CARD
   ========================================================================= */
/**
 * ChillVibesCard: 100% Vector/CSS Glassmorphic Playlist Card
 * Recreates the Chill Vibes box with playlist art, title, and circular play button.
 */
export const ChillVibesCard = ({ className = '', onPlay }) => {
  return (
    <div
      onClick={onPlay}
      className={`
        group relative rounded-[20px] sm:rounded-[24px]
        pl-2.5 pr-3 py-2 sm:py-2.5
        bg-gradient-to-r from-[#180D33]/92 via-[#130829]/95 to-[#0D051D]/95
        border border-purple-400/35
        backdrop-blur-xl
        shadow-[0_14px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(236,72,153,0.28)]
        flex items-center gap-2.5 sm:gap-3
        select-none cursor-pointer
        transition-all duration-300 ease-out
        hover:scale-[1.04] hover:-translate-y-1 hover:border-pink-400/60
        ${className}
      `}
    >
      {/* Playlist Thumbnail */}
      <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl overflow-hidden shrink-0 border border-purple-400/40 shadow-sm">
        <img
          src={chillVibesImg}
          alt="Chill Vibes Vibes Playlist Cover"
          className="w-full h-full object-cover select-none pointer-events-none group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Playlist Details */}
      <div className="flex flex-col min-w-0 pr-1">
        <span className="font-extrabold text-white text-xs sm:text-[13px] leading-tight truncate">
          Chill Vibes Vibes
        </span>
        <span className="text-[10px] sm:text-[11px] font-semibold text-purple-300/80 leading-tight">
          Playlist
        </span>
      </div>

      {/* Circular Play Button Badge */}
      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white flex items-center justify-center text-purple-700 shadow-md shrink-0 ml-auto group-hover:scale-115 group-hover:bg-pink-50 transition-all duration-200">
        <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current ml-0.5" />
      </div>
    </div>
  );
};

/* =========================================================================
   9. HERO CENTRAL VISUAL QUADRANT CLUSTER
   ========================================================================= */
/**
 * HeroCentralVisual: Symmetrical Master Visual Cluster
 * - Central CompactDisc (replaces old HeroAudioRing neon circle)
 * - 4 Real Interactive Glassmorphic Cards (Player, Trending, New Artist, Chill Vibes)
 * - Balanced quadrant spacing with smooth organic floating motion
 * - Hover pauses floating motion and gently lifts/scales cards
 * - 100% responsive across desktop (1440/1920), laptop (1024), tablet (768), mobile (375)
 */
export const HeroCentralVisual = () => {
  return (
    <div className="relative w-full max-w-[1440px] mx-auto h-auto sm:h-[460px] md:h-[510px] lg:h-[550px] xl:h-[580px] flex items-center justify-center z-10 select-none">
      {/* 
        ========================================================
        FLOATING NEON MUSIC NOTES (Symmetrically Framed)
        ======================================================== 
      */}
      {/* Note 1 (Upper-Left: Pink ♫) */}
      <span
        className="hidden md:block absolute right-[calc(50%+180px)] lg:right-[calc(50%+215px)] xl:right-[calc(50%+245px)] top-[4%] text-pink-500 font-bold text-3xl select-none pointer-events-none drop-shadow-[0_0_12px_#ff3bb4] animate-bounce"
        style={{ animationDuration: '3.4s' }}
      >
        ♫
      </span>

      {/* Note 2 (Mid-Left: Pink ♪) */}
      <span
        className="hidden lg:block absolute right-[calc(50%+210px)] lg:right-[calc(50%+250px)] xl:right-[calc(50%+280px)] top-[44%] text-pink-500 font-bold text-2xl select-none pointer-events-none drop-shadow-[0_0_10px_#ff3bb4] animate-bounce"
        style={{ animationDuration: '2.9s', animationDelay: '-1.2s' }}
      >
        ♪
      </span>

      {/* Note 3 (Upper-Right: Pink ♫) */}
      <span
        className="hidden md:block absolute left-[calc(50%+190px)] lg:left-[calc(50%+225px)] xl:left-[calc(50%+255px)] top-[8%] text-pink-500 font-bold text-2xl select-none pointer-events-none drop-shadow-[0_0_10px_#ff3bb4] animate-bounce"
        style={{ animationDuration: '3.6s', animationDelay: '-2.1s' }}
      >
        ♫
      </span>

      {/* Note 4 (Mid-Right: Pink ♪) */}
      <span
        className="hidden lg:block absolute left-[calc(50%+215px)] lg:left-[calc(50%+255px)] xl:left-[calc(50%+285px)] top-[36%] text-pink-500 font-bold text-xl select-none pointer-events-none drop-shadow-[0_0_8px_#ff3bb4] animate-bounce"
        style={{ animationDuration: '3.1s', animationDelay: '-1.6s' }}
      >
        ♪
      </span>

      {/* 
        ========================================================
        CARD 1: Interactive Animated Player Card (Top-Left)
        ======================================================== 
      */}
      <div
        className="
          hidden sm:block absolute z-20
          left-3 sm:left-4 md:left-6 lg:left-auto
          lg:right-[calc(50%+215px)] xl:right-[calc(50%+265px)]
          top-[5%] sm:top-[7%] lg:top-[9%]
          w-[240px] sm:w-[260px] md:w-[280px] lg:w-[315px] xl:w-[340px]
          sm:scale-90 md:scale-95 lg:scale-100 origin-top-left lg:origin-center
          hero-float-card hero-float-card-1
        "
      >
        <AnimatedPlayerCard className="w-full" />
      </div>

      {/* 
        ========================================================
        CARD 2: Trending Now Card (Bottom-Left)
        ======================================================== 
      */}
      <div
        className="
          hidden sm:block absolute z-30
          left-4 sm:left-6 md:left-10 lg:left-auto
          lg:right-[calc(50%+155px)] xl:right-[calc(50%+195px)]
          bottom-[-1%] sm:bottom-[1%] lg:bottom-[3%]
          w-[200px] sm:w-[220px] md:w-[240px] lg:w-[265px] xl:w-[280px]
          sm:scale-90 md:scale-95 lg:scale-100 origin-bottom-left lg:origin-center
          hero-float-card hero-float-card-2
        "
      >
        <TrendingNowCard className="w-full" />
      </div>

      {/* 
        ========================================================
        CENTRAL MASTER ARTWORK: GOLDEN HORN & SPINNING COMPACT DISC
        - Original "Harmony" design retained with 100% pixel alignment
        - Compact Disc rotates continuously 360° clockwise (Video 2 spec)
        ======================================================== 
      */}
      <div className="relative shrink-0 z-10 flex items-center justify-center">
        <HeroHarmonyDisc />
      </div>

      {/* 
        ========================================================
        CARD 3: New Artist Card (Top-Right)
        ======================================================== 
      */}
      <div
        className="
          hidden sm:block absolute z-20
          right-3 sm:right-4 md:right-6 lg:right-auto
          lg:left-[calc(50%+255px)] xl:left-[calc(50%+295px)]
          top-[14%] sm:top-[16%] lg:top-[18%]
          w-[145px] sm:w-[155px] md:w-[170px] lg:w-[185px] xl:w-[195px]
          sm:scale-90 md:scale-95 lg:scale-100 origin-top-right lg:origin-center
          hero-float-card hero-float-card-3
        "
      >
        <NewArtistCard className="w-full" />
      </div>

      {/* 
        ========================================================
        CARD 4: Chill Vibes Playlist Card (Bottom-Right)
        ======================================================== 
      */}
      <div
        className="
          hidden sm:block absolute z-20
          right-4 sm:right-6 md:right-8 lg:right-auto
          lg:left-[calc(50%+205px)] xl:left-[calc(50%+250px)]
          bottom-[8%] sm:bottom-[11%] lg:bottom-[14%]
          w-[160px] sm:w-[175px] md:w-[195px] lg:w-[215px] xl:w-[230px]
          sm:scale-90 md:scale-95 lg:scale-100 origin-bottom-right lg:origin-center
          hero-float-card hero-float-card-4
        "
      >
        <ChillVibesCard className="w-full" />
      </div>

      {/* 
        ========================================================
        MOBILE RESPONSIVE MINI-CARD STRIP (Screen width < 640px)
        ======================================================== 
      */}
      <div className="flex sm:hidden absolute -bottom-5 left-1/2 -translate-x-1/2 z-30 w-full max-w-[340px] px-2 justify-center gap-2">
        <div className="w-[165px] shrink-0">
          <NewArtistCard className="scale-[0.84] origin-center" />
        </div>
        <div className="w-[155px] shrink-0">
          <ChillVibesCard className="scale-[0.84] origin-center" />
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   10. HERO BOTTOM CONTENT (STATS METRICS, CTA, TICKER)
   ========================================================================= */
/**
 * useCounter: Lightweight smooth eased count-up hook for hero metrics.
 */
function useCounter(target, duration = 1400) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Respect reduced motion preferences
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(target);
      return;
    }

    let startTimestamp = null;
    let animationFrameId;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth easeOutExpo curve
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.round(easeOut * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [target, duration]);

  return count;
}

/**
 * HeroBottomContent: Centered description, enhanced gradient CTA with liquid sheen & bloom,
 * dynamic animated key statistics (50M+, 10M+, 190+), and minimal downward scroll indicator.
 */
export const HeroBottomContent = ({ onStartListening }) => {
  const songsCount = useCounter(heroStats[0]?.target || 50, heroStats[0]?.duration || 1200);
  const artistsCount = useCounter(heroStats[1]?.target || 10, heroStats[1]?.duration || 1400);
  const countriesCount = useCounter(heroStats[2]?.target || 190, heroStats[2]?.duration || 1600);

  const handleScrollDown = () => {
    const trendingSection = document.querySelector('section[aria-label="Trending Now"]') ||
      document.querySelector('.trending-section') ||
      document.getElementById('trending-now');
    if (trendingSection) {
      trendingSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: 600, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative z-30 flex flex-col items-center text-center mt-10 sm:mt-5 lg:mt-6 px-4 select-none">
      {/* 
        ============================================================
        1. CRISP TWO-LINE VALUE-PROPOSITION DESCRIPTION
        ============================================================ 
      */}
      <p className="text-[14px] sm:text-[15px] md:text-[16px] text-slate-600 font-medium leading-relaxed max-w-[560px] mb-5 sm:mb-6">
        {heroData.description.line1}<br className="hidden sm:inline" />{' '}
        {heroData.description.line2}
      </p>

      {/* 
        ============================================================
        2. POLISHED "START LISTENING" PRIMARY CTA WITH LIQUID SHEEN & BLOOM
        ============================================================ 
      */}
      <div className="relative group">
        {/* Ambient blooming under-glow aura */}
        <div
          className="
            absolute -inset-1 rounded-full pointer-events-none 
            bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500
            opacity-40 blur-xl transition-all duration-500
            group-hover:opacity-75 group-hover:blur-2xl
          "
          aria-hidden="true"
        />

        <button
          type="button"
          onClick={onStartListening}
          className="
            relative inline-flex items-center gap-3
            bg-gradient-to-r from-[#7c3aed] via-[#a855f7] to-[#ec4899]
            text-white font-bold text-[15px] sm:text-[16px]
            pl-3.5 pr-7 py-2.5 sm:py-3
            rounded-full
            shadow-[0_12px_28px_rgba(236,72,153,0.45)]
            hover:shadow-[0_16px_36px_rgba(236,72,153,0.65)]
            hover:scale-[1.04] active:scale-[0.98]
            transition-all duration-300 ease-out cursor-pointer
            overflow-hidden
          "
          aria-label="Start Listening to Music on SoundWave"
        >
          {/* Animated Liquid Specular Sheen */}
          <div
            className="
              absolute inset-0 w-[200%] pointer-events-none -translate-x-full
              bg-gradient-to-r from-transparent via-white/20 to-transparent
              group-hover:translate-x-full transition-transform duration-1000 ease-out
            "
            aria-hidden="true"
          />

          {/* Icon Badge with Ripple Pulse on Hover */}
          <span className="relative w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#7c3aed] shadow-sm group-hover:scale-110 group-hover:ring-4 group-hover:ring-white/30 transition-all duration-300">
            <Play className="w-4 h-4 fill-current ml-0.5" />
          </span>

          <span className="tracking-wide">Start Listening</span>
        </button>
      </div>

      {/* 
        ============================================================
        3. KEY PLATFORM STATISTICS (With Soft Count-Up Animation)
        ============================================================ 
      */}
      <div className="flex items-center justify-center flex-wrap gap-4 sm:gap-7 md:gap-9 mt-6 sm:mt-8 pt-2">
        {/* Stat 1: Songs */}
        <div className="flex items-center gap-2.5 sm:gap-3 text-left">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-pink-50 text-pink-600 flex items-center justify-center shrink-0 border border-pink-100 shadow-sm">
            <Music2 className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <div className="font-extrabold text-slate-900 text-base sm:text-lg md:text-xl leading-none tracking-tight">
              {songsCount}M+
            </div>
            <div className="text-[10px] sm:text-[11px] font-bold text-slate-400 tracking-wider uppercase mt-1">
              Songs
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden sm:block w-[1px] h-7 bg-slate-200" aria-hidden="true" />

        {/* Stat 2: Artists */}
        <div className="flex items-center gap-2.5 sm:gap-3 text-left">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100 shadow-sm">
            <Users className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <div className="font-extrabold text-slate-900 text-base sm:text-lg md:text-xl leading-none tracking-tight">
              {artistsCount}M+
            </div>
            <div className="text-[10px] sm:text-[11px] font-bold text-slate-400 tracking-wider uppercase mt-1">
              Artists
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden sm:block w-[1px] h-7 bg-slate-200" aria-hidden="true" />

        {/* Stat 3: Countries */}
        <div className="flex items-center gap-2.5 sm:gap-3 text-left">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 border border-indigo-100 shadow-sm">
            <Globe2 className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <div className="font-extrabold text-slate-900 text-base sm:text-lg md:text-xl leading-none tracking-tight">
              {countriesCount}+
            </div>
            <div className="text-[10px] sm:text-[11px] font-bold text-slate-400 tracking-wider uppercase mt-1">
              Countries
            </div>
          </div>
        </div>
      </div>

      {/* 
        ============================================================
        4. MINIMAL DOWNWARD SCROLL INDICATOR (Requirement 8)
        ============================================================ 
      */}
      <button
        type="button"
        onClick={handleScrollDown}
        className="
          mt-6 sm:mt-8 flex flex-col items-center gap-1.5 
          text-slate-400 hover:text-purple-600
          transition-colors duration-300 cursor-pointer
          focus:outline-none group
        "
        aria-label="Scroll down to explore Trending tracks"
      >
        <span className="text-[10px] font-bold tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity">
          Scroll
        </span>
        <div className="w-5 h-8 rounded-full border border-slate-300 group-hover:border-purple-400 flex items-start justify-center p-1 transition-colors">
          <div className="w-1 h-2 rounded-full bg-purple-500 animate-hero-scroll-dot" />
        </div>
        <ChevronDown className="w-3.5 h-3.5 -mt-0.5 text-slate-400 group-hover:text-purple-600 animate-bounce transition-colors" />
      </button>
    </div>
  );
};

/* =========================================================================
   11. MAIN HERO SECTION COMPONENT
   ========================================================================= */
/**
 * HeroSection: Pure Code-Driven Master Centered Hero Section (Refined & Enhanced)
 * 
 * Features:
 * 1. Background Enhancement: Low-opacity musical waves, dotted matrices, and floating notes
 * 2. Arched Headline: Responsive SVG textPath with true circular arc curvature framing the central ring
 * 3. Central Circle: Original portrait with subtle animated reactive audio ring (48 nodes, rotating conic rim, breathing aura)
 * 4. Floating Cards: 4 glassmorphic cards with organic floating dance and hover pause/lift micro-interactions
 * 5. Card Connection: Faint harmonic frequency lines linking peripheral cards to center
 * 6. CTA Section: Primary "Start Listening" button with liquid sheen, ripple ring, and blooming under-glow
 * 7. Stats Section: Refined 50M+, 10M+, 190+ metrics with smooth eased count-up effect
 * 8. Scroll Indicator: Minimal downward mouse scroll cue with smooth scroll to next section
 */
export const YourMusicYourWorld = ({ onStartListening }) => {
  return (
    <section id="hero" aria-label="SoundWave Hero"
      className="relative z-10 w-full max-w-[1620px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 pt-2 sm:pt-4 pb-6 sm:pb-10 select-none overflow-hidden"
    >
      {/* 
        1. Low-opacity music-themed background decorations & harmonic connection lines
        (Preserves pure white website background) 
      */}
      <HeroBackgroundDecorations />

      {/* 
        2. Top Center Arched Headline: "Your Music Your World ✦" 
      */}
      <HeroArchedTitle />

      {/* 
        3. Central Visual Cluster:
        Central Circle with Animated Audio Ring + 4 Floating Cards with Hover Pause
      */}
      <HeroCentralVisual />

      {/* 
        4. Bottom Center Content:
        Description + Polished "Start Listening" CTA + Animated Stats + Scroll Indicator
      */}
      <HeroBottomContent onStartListening={onStartListening} />
    </section>
  );
};

// Aliases for convenience & compatibility
export const HeroSection = YourMusicYourWorld;
export const Hero = YourMusicYourWorld;
export default Hero;

