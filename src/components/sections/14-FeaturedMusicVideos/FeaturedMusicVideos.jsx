import { SectionHeader } from '../../common/SectionHeader';
import React, { useState } from 'react';
import { useInView } from '../../../hooks/useInView';
import { featuredMusicVideosData, featuredVideoTracks as TRACKS } from './FeaturedMusicVideosData';

/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * FULL EMBEDDED STYLESHEET (SCOPED COMPONENT STYLES)
 * Includes all layout, responsive rules, animations,
 * page transitions, saxophone reload entrance, and floating music note keyframes.
 * ═══════════════════════════════════════════════════════════════════════════════
 */
const FEATURED_MUSIC_VIDEO_STYLES = `/* Container maintaining 16:9 aspect ratio */
.music-frame {
  position: relative;
  z-index: 10;
  display: block;
  width: 100%;
  max-width: 1600px;
  height: auto;
  aspect-ratio: 16 / 9;
  margin: auto;
  overflow: visible;
  filter: drop-shadow(0 26px 36px rgba(50, 10, 80, 0.24));
  user-select: none;
  pointer-events: auto;
  touch-action: auto;
}

/* Make decorative outer SVG artwork pass events through so screen is never blocked */
.music-frame > g:not(#central-screen-display) {
  pointer-events: none;
}

/* Explicitly enable pointer events and clickability on central screen and foreignObject */
#central-screen-display,
#central-screen-display foreignObject,
#central-screen-display foreignObject * {
  pointer-events: auto !important;
}

.featured-music-video-wrapper button {
  pointer-events: auto !important;
  cursor: pointer !important;
}

/* ─── ANIMATIONS & EFFECTS ─── */
.frame-neon {
  animation: neon-pulse 3.8s ease-in-out infinite;
  pointer-events: none;
}

/* Music note is kept fixed in place (no translateY/movement) */
.note-glow {
  transform: none !important;
  pointer-events: none;
}

.equalizer-bar {
  transform-box: fill-box;
  transform-origin: center bottom;
  animation: equalize 1.4s ease-in-out infinite alternate;
  pointer-events: none;
}

.equalizer-bar:nth-child(2n) {
  animation-duration: 1.1s;
}

.equalizer-bar:nth-child(3n + 1) {
  animation-duration: 1.6s;
}

.equalizer-bar:nth-child(4n + 2) {
  animation-duration: 0.95s;
}

/* Starburst glints are STRICTLY FIXED in coordinates (NO translation, NO rotation, NO scale jumping) */
.gold-glint {
  transform: none !important;
  pointer-events: none;
  user-select: none;
  animation: star-shimmer 4s ease-in-out infinite alternate;
}

/* Keyframes */
@keyframes neon-pulse {
  0%, 100% {
    opacity: 0.88;
  }
  50% {
    opacity: 1;
    filter: drop-shadow(0 0 6px #ff3df4);
  }
}

@keyframes equalize {
  0% {
    transform: scaleY(0.72);
    opacity: 0.8;
  }
  50% {
    transform: scaleY(1.08);
    opacity: 1;
  }
  100% {
    transform: scaleY(0.85);
    opacity: 0.9;
  }
}

@keyframes star-shimmer {
  0%, 100% {
    opacity: 0.82;
  }
  50% {
    opacity: 1;
  }
}

/* ─── MUSIC DASHBOARD PAGE TRANSITIONS ─── */
@keyframes slideInFromRight {
  0% {
    opacity: 0;
    transform: translateX(70px) scale(0.96);
    filter: blur(4px);
  }
  100% {
    opacity: 1;
    transform: translateX(0) scale(1);
    filter: blur(0px);
  }
}

@keyframes slideInFromLeft {
  0% {
    opacity: 0;
    transform: translateX(-70px) scale(0.96);
    filter: blur(4px);
  }
  100% {
    opacity: 1;
    transform: translateX(0) scale(1);
    filter: blur(0px);
  }
}

.page-anim-next {
  animation: slideInFromRight 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.page-anim-prev {
  animation: slideInFromLeft 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

/* ─── INITIAL PAGE RELOAD / SCROLL ENTRANCE ANIMATION FOR SAXOPHONES ─── */
@keyframes saxEntranceLeft {
  0% {
    transform: translate(-380px, 0);
    opacity: 0;
  }
  15% {
    opacity: 0.2;
  }
  100% {
    transform: translate(0px, 0);
    opacity: 1;
  }
}

@keyframes saxEntranceRight {
  0% {
    transform: translate(380px, 0);
    opacity: 0;
  }
  15% {
    opacity: 0.2;
  }
  100% {
    transform: translate(0px, 0);
    opacity: 1;
  }
}

.sax-entrance-left {
  opacity: 0;
  transform: translate(-380px, 0);
  will-change: transform, opacity;
}

.is-in-view .sax-entrance-left {
  animation: saxEntranceLeft 1.25s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.sax-entrance-right {
  opacity: 0;
  transform: translate(380px, 0);
  will-change: transform, opacity;
}

.is-in-view .sax-entrance-right {
  animation: saxEntranceRight 1.25s cubic-bezier(0.16, 1, 0.3, 1) both;
}

/* ─── FLOATING 3D GOLDEN MUSIC NOTES (EMITTING FROM SAXOPHONE MOUTHS) ─── */
.floating-note {
  pointer-events: none;
  opacity: 0;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.35, 0.1, 0.25, 1);
  animation-fill-mode: both;
  will-change: transform, opacity;
}

.float-left-1 { animation-name: floatLeftRel1; }
.float-left-2 { animation-name: floatLeftRel2; }
.float-left-3 { animation-name: floatLeftRel3; }
.float-left-4 { animation-name: floatLeftRel4; }
.float-left-5 { animation-name: floatLeftRel5; }

.float-right-1 { animation-name: floatRightRel1; }
.float-right-2 { animation-name: floatRightRel2; }
.float-right-3 { animation-name: floatRightRel3; }
.float-right-4 { animation-name: floatRightRel4; }
.float-right-5 { animation-name: floatRightRel5; }

/* LEFT SAXOPHONE (Origin (330, 545)) */
@keyframes floatLeftRel1 {
  0% {
    transform: translate(0px, 0px) scale(0.25) rotate(-14deg);
    opacity: 0;
  }
  15% {
    transform: translate(24px, -52px) scale(0.7) rotate(6deg);
    opacity: 0.48;
  }
  42% {
    transform: translate(56px, -124px) scale(0.95) rotate(-6deg);
    opacity: 0.58;
  }
  70% {
    transform: translate(92px, -198px) scale(0.85) rotate(10deg);
    opacity: 0.45;
  }
  88% {
    transform: translate(122px, -265px) scale(0.65) rotate(-3deg);
    opacity: 0.18;
  }
  100% {
    transform: translate(142px, -310px) scale(0.48) rotate(0deg);
    opacity: 0;
  }
}

@keyframes floatLeftRel2 {
  0% {
    transform: translate(4px, 4px) scale(0.22) rotate(8deg);
    opacity: 0;
  }
  18% {
    transform: translate(26px, -50px) scale(0.68) rotate(-10deg);
    opacity: 0.50;
  }
  45% {
    transform: translate(48px, -135px) scale(0.92) rotate(12deg);
    opacity: 0.56;
  }
  72% {
    transform: translate(78px, -215px) scale(0.82) rotate(-8deg);
    opacity: 0.42;
  }
  90% {
    transform: translate(102px, -280px) scale(0.60) rotate(5deg);
    opacity: 0.16;
  }
  100% {
    transform: translate(118px, -330px) scale(0.45) rotate(0deg);
    opacity: 0;
  }
}

@keyframes floatLeftRel3 {
  0% {
    transform: translate(-4px, -4px) scale(0.25) rotate(-8deg);
    opacity: 0;
  }
  14% {
    transform: translate(32px, -46px) scale(0.66) rotate(14deg);
    opacity: 0.46;
  }
  38% {
    transform: translate(72px, -112px) scale(0.92) rotate(-10deg);
    opacity: 0.58;
  }
  68% {
    transform: translate(112px, -186px) scale(0.82) rotate(8deg);
    opacity: 0.40;
  }
  88% {
    transform: translate(144px, -252px) scale(0.62) rotate(-5deg);
    opacity: 0.15;
  }
  100% {
    transform: translate(168px, -298px) scale(0.45) rotate(0deg);
    opacity: 0;
  }
}

@keyframes floatLeftRel4 {
  0% {
    transform: translate(2px, -2px) scale(0.2) rotate(12deg);
    opacity: 0;
  }
  16% {
    transform: translate(20px, -42px) scale(0.65) rotate(-8deg);
    opacity: 0.45;
  }
  44% {
    transform: translate(48px, -102px) scale(0.88) rotate(10deg);
    opacity: 0.55;
  }
  70% {
    transform: translate(80px, -172px) scale(0.78) rotate(-6deg);
    opacity: 0.38;
  }
  88% {
    transform: translate(108px, -242px) scale(0.58) rotate(4deg);
    opacity: 0.15;
  }
  100% {
    transform: translate(128px, -288px) scale(0.42) rotate(0deg);
    opacity: 0;
  }
}

@keyframes floatLeftRel5 {
  0% {
    transform: translate(-2px, 2px) scale(0.24) rotate(-10deg);
    opacity: 0;
  }
  15% {
    transform: translate(28px, -56px) scale(0.72) rotate(12deg);
    opacity: 0.48;
  }
  42% {
    transform: translate(64px, -128px) scale(0.96) rotate(-8deg);
    opacity: 0.58;
  }
  69% {
    transform: translate(102px, -208px) scale(0.84) rotate(6deg);
    opacity: 0.42;
  }
  89% {
    transform: translate(134px, -278px) scale(0.64) rotate(-4deg);
    opacity: 0.16;
  }
  100% {
    transform: translate(154px, -320px) scale(0.46) rotate(0deg);
    opacity: 0;
  }
}

/* RIGHT SAXOPHONE (Origin (1270, 545)) */
@keyframes floatRightRel1 {
  0% {
    transform: translate(0px, 0px) scale(0.25) rotate(14deg);
    opacity: 0;
  }
  15% {
    transform: translate(-24px, -52px) scale(0.7) rotate(-6deg);
    opacity: 0.48;
  }
  42% {
    transform: translate(-56px, -124px) scale(0.95) rotate(6deg);
    opacity: 0.58;
  }
  70% {
    transform: translate(-92px, -198px) scale(0.85) rotate(-10deg);
    opacity: 0.45;
  }
  88% {
    transform: translate(-122px, -265px) scale(0.65) rotate(3deg);
    opacity: 0.18;
  }
  100% {
    transform: translate(-142px, -310px) scale(0.48) rotate(0deg);
    opacity: 0;
  }
}

@keyframes floatRightRel2 {
  0% {
    transform: translate(-4px, 4px) scale(0.22) rotate(-8deg);
    opacity: 0;
  }
  18% {
    transform: translate(-26px, -50px) scale(0.68) rotate(10deg);
    opacity: 0.50;
  }
  45% {
    transform: translate(-48px, -135px) scale(0.92) rotate(-12deg);
    opacity: 0.56;
  }
  72% {
    transform: translate(-78px, -215px) scale(0.82) rotate(8deg);
    opacity: 0.42;
  }
  90% {
    transform: translate(-102px, -280px) scale(0.60) rotate(-5deg);
    opacity: 0.16;
  }
  100% {
    transform: translate(-118px, -330px) scale(0.45) rotate(0deg);
    opacity: 0;
  }
}

@keyframes floatRightRel3 {
  0% {
    transform: translate(4px, -4px) scale(0.25) rotate(8deg);
    opacity: 0;
  }
  14% {
    transform: translate(-32px, -46px) scale(0.66) rotate(-14deg);
    opacity: 0.46;
  }
  38% {
    transform: translate(-72px, -112px) scale(0.92) rotate(10deg);
    opacity: 0.58;
  }
  68% {
    transform: translate(-112px, -186px) scale(0.82) rotate(-8deg);
    opacity: 0.40;
  }
  88% {
    transform: translate(-144px, -252px) scale(0.62) rotate(5deg);
    opacity: 0.15;
  }
  100% {
    transform: translate(-168px, -298px) scale(0.45) rotate(0deg);
    opacity: 0;
  }
}

@keyframes floatRightRel4 {
  0% {
    transform: translate(-2px, -2px) scale(0.2) rotate(-12deg);
    opacity: 0;
  }
  16% {
    transform: translate(-20px, -42px) scale(0.65) rotate(8deg);
    opacity: 0.45;
  }
  44% {
    transform: translate(-48px, -102px) scale(0.88) rotate(-10deg);
    opacity: 0.55;
  }
  70% {
    transform: translate(-80px, -172px) scale(0.78) rotate(6deg);
    opacity: 0.38;
  }
  88% {
    transform: translate(-108px, -242px) scale(0.58) rotate(-4deg);
    opacity: 0.15;
  }
  100% {
    transform: translate(-128px, -288px) scale(0.42) rotate(0deg);
    opacity: 0;
  }
}

@keyframes floatRightRel5 {
  0% {
    transform: translate(2px, 2px) scale(0.24) rotate(10deg);
    opacity: 0;
  }
  15% {
    transform: translate(-28px, -56px) scale(0.72) rotate(-12deg);
    opacity: 0.48;
  }
  42% {
    transform: translate(-64px, -128px) scale(0.96) rotate(8deg);
    opacity: 0.58;
  }
  69% {
    transform: translate(-102px, -208px) scale(0.84) rotate(-6deg);
    opacity: 0.42;
  }
  89% {
    transform: translate(-134px, -278px) scale(0.64) rotate(4deg);
    opacity: 0.16;
  }
  100% {
    transform: translate(-154px, -320px) scale(0.46) rotate(0deg);
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .floating-note {
    animation: none !important;
  }
}`;

function FrameDefinitions() {
  return (
    <defs>
      {/* ── METALLIC PURPLE & VIOLET GRADIENTS ── */}
      <linearGradient id="frameBevelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#250242" />
        <stop offset="14%" stopColor="#4f0882" />
        <stop offset="32%" stopColor="#8517cc" />
        <stop offset="50%" stopColor="#ba38f7" />
        <stop offset="68%" stopColor="#760eb8" />
        <stop offset="86%" stopColor="#3d0466" />
        <stop offset="100%" stopColor="#18002d" />
      </linearGradient>

      <linearGradient id="purpleFaceGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#a32cf0" />
        <stop offset="22%" stopColor="#710ebf" />
        <stop offset="50%" stopColor="#4c077e" />
        <stop offset="78%" stopColor="#690dae" />
        <stop offset="100%" stopColor="#2d024e" />
      </linearGradient>

      <linearGradient id="purplePlinthGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#24023c" />
        <stop offset="15%" stopColor="#550b8c" />
        <stop offset="42%" stopColor="#9526e4" />
        <stop offset="50%" stopColor="#bb47ff" />
        <stop offset="58%" stopColor="#9526e4" />
        <stop offset="85%" stopColor="#550b8c" />
        <stop offset="100%" stopColor="#24023c" />
      </linearGradient>

      <linearGradient id="plaqueFaceGrad" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="#43066e" />
        <stop offset="25%" stopColor="#7c19c0" />
        <stop offset="52%" stopColor="#9e2de8" />
        <stop offset="80%" stopColor="#670fa0" />
        <stop offset="100%" stopColor="#290244" />
      </linearGradient>

      <radialGradient id="medallionFaceGrad" cx="45%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#9e2de8" />
        <stop offset="38%" stopColor="#5c0b94" />
        <stop offset="75%" stopColor="#2f0350" />
        <stop offset="100%" stopColor="#130022" />
      </radialGradient>

      <linearGradient id="saxPurpleLacquer" x1="0%" y1="0%" x2="100%" y2="85%">
        <stop offset="0%" stopColor="#24023c" />
        <stop offset="16%" stopColor="#620d9e" />
        <stop offset="36%" stopColor="#a82be5" />
        <stop offset="52%" stopColor="#e269fc" />
        <stop offset="70%" stopColor="#9819d4" />
        <stop offset="88%" stopColor="#480575" />
        <stop offset="100%" stopColor="#24013d" />
      </linearGradient>

      <linearGradient id="saxBellConeGrad" x1="20%" y1="0%" x2="80%" y2="100%">
        <stop offset="0%" stopColor="#ea68ff" />
        <stop offset="25%" stopColor="#a31bdb" />
        <stop offset="60%" stopColor="#560888" />
        <stop offset="85%" stopColor="#2c0248" />
        <stop offset="100%" stopColor="#180028" />
      </linearGradient>

      <linearGradient id="mouthpieceGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#4a156e" />
        <stop offset="30%" stopColor="#280838" />
        <stop offset="70%" stopColor="#180324" />
        <stop offset="100%" stopColor="#0c0112" />
      </linearGradient>

      {/* ── METALLIC GOLD GRADIENTS ── */}
      <linearGradient id="goldBrassGrad" x1="0%" y1="0%" x2="100%" y2="70%">
        <stop offset="0%" stopColor="#733b03" />
        <stop offset="12%" stopColor="#c77b0b" />
        <stop offset="26%" stopColor="#f5b827" />
        <stop offset="42%" stopColor="#fff8b8" />
        <stop offset="52%" stopColor="#ffd34f" />
        <stop offset="70%" stopColor="#d4830e" />
        <stop offset="86%" stopColor="#8d4805" />
        <stop offset="100%" stopColor="#4f2401" />
      </linearGradient>

      <linearGradient id="goldTubeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#5c2d01" />
        <stop offset="15%" stopColor="#be740b" />
        <stop offset="35%" stopColor="#ffd54c" />
        <stop offset="48%" stopColor="#fffce0" />
        <stop offset="60%" stopColor="#ffc32c" />
        <stop offset="82%" stopColor="#9e5a07" />
        <stop offset="100%" stopColor="#4b2100" />
      </linearGradient>

      <linearGradient id="goldRibbonGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#fffce4" />
        <stop offset="20%" stopColor="#fed74d" />
        <stop offset="50%" stopColor="#d37e0c" />
        <stop offset="75%" stopColor="#fed653" />
        <stop offset="100%" stopColor="#703702" />
      </linearGradient>

      <radialGradient id="goldBezelGrad" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#fff9dc" />
        <stop offset="24%" stopColor="#ffca3d" />
        <stop offset="58%" stopColor="#d47607" />
        <stop offset="84%" stopColor="#8a4302" />
        <stop offset="100%" stopColor="#522500" />
      </radialGradient>

      <radialGradient id="saxBellInteriorGrad" cx="42%" cy="38%" r="62%">
        <stop offset="0%" stopColor="#fff1a3" />
        <stop offset="28%" stopColor="#ffb41c" />
        <stop offset="62%" stopColor="#cf5e03" />
        <stop offset="88%" stopColor="#732901" />
        <stop offset="100%" stopColor="#361200" />
      </radialGradient>

      {/* ── EQUALIZER & NEON GRADIENTS ── */}
      <linearGradient id="equalizerPinkGrad" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#b307d0" />
        <stop offset="35%" stopColor="#ff24d5" />
        <stop offset="70%" stopColor="#ff85f4" />
        <stop offset="100%" stopColor="#ffffff" />
      </linearGradient>

      {/* ── FILTERS & GLOWS ── */}
      <filter id="frameShadowFilter" x="-20%" y="-20%" width="140%" height="150%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="14" result="blur" />
        <feOffset dx="0" dy="18" result="offset" />
        <feFlood floodColor="#350658" floodOpacity="0.35" />
        <feComposite in2="offset" operator="in" />
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      <filter id="instrumentShadowFilter" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="10" result="blur" />
        <feOffset dx="-2" dy="14" result="offset" />
        <feFlood floodColor="#1a012d" floodOpacity="0.45" />
        <feComposite in2="offset" operator="in" />
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      <filter id="neonGlowFilter" x="-60%" y="-60%" width="220%" height="220%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur1" />
        <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur2" />
        <feMerge>
          <feMergeNode in="blur2" />
          <feMergeNode in="blur1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      <filter id="goldGlintFilter" x="-80%" y="-80%" width="260%" height="260%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
        <feColorMatrix in="blur" type="matrix" values="1 0 0 0 1  0 0.8 0 0 0.8  0 0 0.3 0 0.2  0 0 0 1.4 0" result="goldColor" />
        <feMerge>
          <feMergeNode in="goldColor" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      {/* 4-Point Golden Starburst Glint */}
      <g id="starGlint">
        <circle cx="0" cy="0" r="16" fill="#ffffff" opacity="0.25" filter="url(#neonGlowFilter)" />
        <circle cx="0" cy="0" r="5" fill="#ffffff" />
        <path d="M-40 0 L40 0 M0 -40 L0 40" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M-20 -20 L20 20 M-20 20 L20 -20" stroke="#ffeb82" strokeWidth="1.6" strokeLinecap="round" opacity="0.8" />
        <polygon points="0,-45 4,-6 45,0 4,6 0,45 -4,6 -45,0 -4,-6" fill="url(#goldRibbonGrad)" opacity="0.85" />
        <polygon points="0,-28 2,-4 28,0 2,4 0,28 -2,4 -28,0 -2,-4" fill="#ffffff" opacity="0.95" />
      </g>
    </defs>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   2. EQUALIZER AUDIO SPECTRUM BARS (USED ON TOP PLAQUE & BOTTOM WAVE)
   ───────────────────────────────────────────────────────────────────────────── */
function Equalizer({
  x = 0,
  y = 0,
  scale = 1,
  mirrored = false,
  barCount = 7,
  barWidth = 6,
  gap = 4.5,
  className = '',
}) {
  const curve = [14, 24, 35, 46, 32, 44, 22];

  return (
    <g
      className={`equalizer-group ${className}`}
      transform={`translate(${x}, ${y}) scale(${mirrored ? -scale : scale}, ${scale})`}
      filter="url(#neonGlowFilter)"
      pointerEvents="none"
    >
      {Array.from({ length: barCount }).map((_, i) => {
        const h = curve[i % curve.length];
        const barX = i * (barWidth + gap);
        const segmentHeight = 3.6;
        const segmentGap = 2;
        const totalSegments = Math.max(2, Math.floor(h / (segmentHeight + segmentGap)));

        return (
          <g
            key={i}
            className="equalizer-bar"
            style={{
              animationDelay: `${(i * 0.16).toFixed(2)}s`,
            }}
          >
            {Array.from({ length: totalSegments }).map((_, segIdx) => {
              const segY = -segIdx * (segmentHeight + segmentGap) - segmentHeight;
              const isPeak = segIdx >= totalSegments - 2;
              return (
                <rect
                  key={segIdx}
                  x={barX}
                  y={segY}
                  width={barWidth}
                  height={segmentHeight}
                  rx={1.3}
                  fill={isPeak ? '#ffffff' : 'url(#equalizerPinkGrad)'}
                  opacity={isPeak ? 0.98 : 0.88}
                />
              );
            })}
          </g>
        );
      })}
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   3. TREBLE CLEF MEDALLION (CENTER BOTTOM)
   ───────────────────────────────────────────────────────────────────────────── */
function MusicMedallion({ cx = 800, cy = 735, r = 66 }) {
  return (
    <g id="center-music-medallion" filter="url(#frameShadowFilter)">
      {/* Base Occlusion Shadow */}
      <circle cx={cx} cy={cy + 4} r={r + 5} fill="#100018" opacity="0.8" />

      {/* 3D Metallic Golden Donut Bezel */}
      <circle cx={cx} cy={cy} r={r} fill="url(#goldBezelGrad)" stroke="#522500" strokeWidth="1.5" />
      <circle cx={cx} cy={cy} r={r - 3} fill="none" stroke="#fff4b8" strokeWidth="2.5" opacity="0.9" />
      <circle cx={cx} cy={cy + 2} r={r - 5} fill="none" stroke="#703702" strokeWidth="2.5" opacity="0.6" />

      {/* Neon Magenta Inner Ring */}
      <circle
        cx={cx}
        cy={cy}
        r={r - 9}
        fill="none"
        stroke="#ff26df"
        strokeWidth="6"
        filter="url(#neonGlowFilter)"
        className="frame-neon"
      />
      <circle cx={cx} cy={cy} r={r - 9} fill="none" stroke="#ffffff" strokeWidth="2" />
      <circle cx={cx} cy={cy} r={r - 14} fill="none" stroke="url(#goldRibbonGrad)" strokeWidth="1.5" />

      {/* Glossy Royal Violet Face */}
      <circle cx={cx} cy={cy} r={r - 16} fill="url(#medallionFaceGrad)" />

      {/* Top Glass Specular Arc Reflection */}
      <path
        d={`M ${cx - 36} ${cy - 12} 
           A ${r - 18} ${r - 18} 0 0 1 ${cx + 36} ${cy - 12} 
           Q ${cx} ${cy + 14} ${cx - 36} ${cy - 12} Z`}
        fill="#ffffff"
        opacity="0.18"
      />

      {/* Calligraphic Solid White Treble Clef (𝄞) */}
      <g id="treble-clef-glyph" transform={`translate(${cx}, ${cy}) scale(0.66) translate(-47, -70)`}>
        <circle cx="47" cy="70" r="48" fill="#ff26df" opacity="0.3" filter="url(#neonGlowFilter)" />

        {/* 3D Drop Shadow */}
        <g transform="translate(2, 3)" opacity="0.6">
          <line x1="47" y1="12" x2="47" y2="120" stroke="#12001c" strokeWidth="7" strokeLinecap="round" />
          <path
            d="M 47 62 C 55 50, 63 38, 63 26 C 63 14, 56 10, 48 10 C 40 10, 36 18, 38 30 C 40 42, 45 52, 47 62 Z"
            fill="none"
            stroke="#12001c"
            strokeWidth="6.5"
            strokeLinejoin="round"
          />
          <path
            d="M 47 66 C 30 71, 18 82, 18 96 C 18 111, 31 121, 47 121 C 64 121, 76 108, 76 91 C 76 75, 64 66, 52 66 C 41 66, 35 74, 35 83 C 35 91, 42 97, 50 97 C 56 97, 61 92, 61 86 C 61 81, 56 76, 51 76"
            fill="none"
            stroke="#12001c"
            strokeWidth="7.5"
            strokeLinecap="round"
          />
          <circle cx="28" cy="122" r="9.5" fill="#12001c" />
          <path d="M 47 114 C 47 123, 38 127, 28 122" fill="none" stroke="#12001c" strokeWidth="6.8" strokeLinecap="round" />
        </g>

        {/* Pure White Clef Form */}
        <line x1="47" y1="12" x2="47" y2="120" stroke="#ffffff" strokeWidth="6.5" strokeLinecap="round" />
        <path
          d="M 47 62 C 55 50, 63 38, 63 26 C 63 14, 56 10, 48 10 C 40 10, 36 18, 38 30 C 40 42, 45 52, 47 62 Z"
          fill="none"
          stroke="#ffffff"
          strokeWidth="6"
          strokeLinejoin="round"
        />
        <path
          d="M 47 66 C 30 71, 18 82, 18 96 C 18 111, 31 121, 47 121 C 64 121, 76 108, 76 91 C 76 75, 64 66, 52 66 C 41 66, 35 74, 35 83 C 35 91, 42 97, 50 97 C 56 97, 61 92, 61 86 C 61 81, 56 76, 51 76"
          fill="none"
          stroke="#ffffff"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <circle cx="28" cy="122" r="9.5" fill="#ffffff" />
        <path d="M 47 114 C 47 123, 38 127, 28 122" fill="none" stroke="#ffffff" strokeWidth="6.5" strokeLinecap="round" />
        <circle cx="48" cy="10" r="3" fill="#ffffff" filter="url(#neonGlowFilter)" />
      </g>
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   4. TOP MUSIC PANEL (CENTER PLAQUE, BEAMED ♫ & EQUALIZERS)
   ───────────────────────────────────────────────────────────────────────────── */
function TopMusicPanel() {
  return (
    <g id="top-music-panel" filter="url(#frameShadowFilter)">
      {/* Outer Dark Bevel */}
      <path
        d="M 488 138 L 538 68 Q 560 46 592 42 L 780 32 L 820 32 L 1008 42 Q 1040 46 1062 68 L 1112 138 Q 1092 176 1045 176 L 555 176 Q 508 176 488 138 Z"
        fill="#1a012b"
        stroke="#10001c"
        strokeWidth="5"
      />

      {/* Glossy Purple Beveled Surface */}
      <path
        d="M 496 136 L 544 72 Q 564 52 594 48 L 780 38 L 820 38 L 1006 48 Q 1036 52 1056 72 L 1104 136 Q 1084 170 1040 170 L 560 170 Q 516 170 496 136 Z"
        fill="url(#plaqueFaceGrad)"
      />

      {/* Recessed Midnight Purple Face */}
      <path
        d="M 512 132 L 556 78 Q 572 60 600 56 L 780 48 L 820 48 L 1000 56 Q 1028 60 1044 78 L 1088 132 Q 1068 162 1030 162 L 570 162 Q 532 162 512 132 Z"
        fill="url(#medallionFaceGrad)"
        opacity="0.9"
      />

      {/* Top Facet Specular Highlight */}
      <path
        d="M 552 74 Q 570 56 598 52 L 780 42 L 820 42 L 1002 52 Q 1030 56 1048 74"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2.5"
        opacity="0.45"
      />

      {/* Sculpted Golden Crown */}
      <path
        d="M 538 68 Q 560 46 592 42 L 780 32 L 820 32 L 1008 42 Q 1040 46 1062 68 L 1044 72 Q 1024 54 998 50 L 820 40 L 780 40 L 602 50 Q 576 54 556 72 Z"
        fill="url(#goldRibbonGrad)"
        stroke="#683402"
        strokeWidth="1.2"
        filter="url(#goldGlintFilter)"
      />
      <path
        d="M 542 66 Q 562 44 594 40 L 780 30 L 820 30 L 1006 40 Q 1038 44 1058 66"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2"
        opacity="0.8"
      />

      {/* Neon Magenta Lower Outline */}
      <path
        d="M 510 168 Q 532 176 565 176 L 1035 176 Q 1068 176 1090 168"
        fill="none"
        stroke="#ff26df"
        strokeWidth="7"
        opacity="0.85"
        filter="url(#neonGlowFilter)"
        className="frame-neon"
      />
      <path
        d="M 515 168 Q 535 175 565 175 L 1035 175 Q 1065 175 1085 168"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      {/* Equalizers Flanking the Note */}
      <Equalizer x={615} y={136} scale={1.05} barCount={6} />
      <Equalizer x={985} y={136} scale={1.05} barCount={6} mirrored />

      {/* 3D Golden Beamed Music Note (♫) */}
      <g id="plaque-music-note" className="note-glow">
        <ellipse cx="800" cy="112" rx="64" ry="40" fill="#ff40d8" opacity="0.3" filter="url(#neonGlowFilter)" />

        {/* Drop Shadow */}
        <g transform="translate(2, 4)" opacity="0.6">
          <ellipse cx="766" cy="132" rx="19" ry="14" transform="rotate(-26 766 132)" fill="#150022" />
          <ellipse cx="836" cy="118" rx="19" ry="14" transform="rotate(-26 836 118)" fill="#150022" />
          <rect x="778" y="68" width="8" height="64" rx="3" fill="#150022" />
          <rect x="848" y="54" width="8" height="64" rx="3" fill="#150022" />
          <polygon points="776,78 858,64 858,50 776,64" fill="#150022" />
        </g>

        {/* Left Notehead */}
        <ellipse cx="766" cy="130" rx="18.5" ry="14" transform="rotate(-26 766 130)" fill="url(#goldBrassGrad)" stroke="#ffe680" strokeWidth="2" />
        <ellipse cx="763" cy="126" rx="10" ry="5.5" transform="rotate(-26 763 126)" fill="#ffffff" opacity="0.8" />

        {/* Right Notehead */}
        <ellipse cx="836" cy="116" rx="18.5" ry="14" transform="rotate(-26 836 116)" fill="url(#goldBrassGrad)" stroke="#ffe680" strokeWidth="2" />
        <ellipse cx="833" cy="112" rx="10" ry="5.5" transform="rotate(-26 833 112)" fill="#ffffff" opacity="0.8" />

        {/* Left Stem */}
        <rect x="778" y="66" width="7.5" height="64" rx="3" fill="url(#goldBrassGrad)" stroke="#ffe885" strokeWidth="1" />
        <line x1="779.5" y1="67" x2="779.5" y2="126" stroke="#ffffff" strokeWidth="1.6" opacity="0.8" />

        {/* Right Stem */}
        <rect x="848" y="52" width="7.5" height="64" rx="3" fill="url(#goldBrassGrad)" stroke="#ffe885" strokeWidth="1" />
        <line x1="849.5" y1="53" x2="849.5" y2="112" stroke="#ffffff" strokeWidth="1.6" opacity="0.8" />

        {/* Crossbeam */}
        <polygon points="777,74 856,60 856,48 777,62" fill="url(#goldBrassGrad)" stroke="#ffe885" strokeWidth="1.2" />
        <line x1="778" y1="62" x2="855" y2="48" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="778" y1="73" x2="855" y2="59" stroke="#703702" strokeWidth="1.5" />
      </g>
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   5. BOTTOM MUSIC PANEL (WAVE PLATFORM, NEON SLOT & MEDALLION)
   ───────────────────────────────────────────────────────────────────────────── */
function BottomMusicPanel() {
  return (
    <g id="bottom-decorative-platform" filter="url(#frameShadowFilter)">
      {/* ── BASE PLINTH ── */}
      <g id="base-plinth">
        <path d="M 60 785 Q 45 810 75 832 L 1525 832 Q 1555 810 1540 785 L 1515 775 L 85 775 Z" fill="#130122" />
        <path d="M 68 788 Q 54 808 80 826 L 1520 826 Q 1546 808 1532 788 L 1505 778 L 95 778 Z" fill="url(#purplePlinthGrad)" stroke="#3d0763" strokeWidth="1.5" />
        <path d="M 75 826 L 1525 826" stroke="url(#goldRibbonGrad)" strokeWidth="4" strokeLinecap="round" />
        <path d="M 120 825 L 1480 825" stroke="#ffffff" strokeWidth="1.2" opacity="0.8" />

        {/* Horizontal Neon Slot */}
        <path d="M 140 806 L 1460 806" stroke="#ff26df" strokeWidth="6" strokeLinecap="round" filter="url(#neonGlowFilter)" className="frame-neon" opacity="0.9" />
        <path d="M 160 806 L 1440 806" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.95" />

        {/* Neon Slot Specular Flares */}
        <ellipse cx="610" cy="806" rx="40" ry="2" fill="#ffffff" opacity="0.8" filter="url(#neonGlowFilter)" />
        <ellipse cx="990" cy="806" rx="40" ry="2" fill="#ffffff" opacity="0.8" filter="url(#neonGlowFilter)" />
        <ellipse cx="320" cy="806" rx="55" ry="2.5" fill="#ffffff" opacity="0.9" filter="url(#neonGlowFilter)" />
        <ellipse cx="1280" cy="806" rx="55" ry="2.5" fill="#ffffff" opacity="0.9" filter="url(#neonGlowFilter)" />
      </g>

      {/* ── CONTINUOUS PURPLE WAVE BACKING ── */}
      <g id="flowing-wave">
        <path
          d="M 50 742 C 140 760, 240 780, 340 755 C 420 735, 460 670, 520 670 C 600 670, 660 705, 730 722 C 770 730, 800 732, 800 732 C 800 732, 830 730, 870 722 C 940 705, 1000 670, 1080 670 C 1140 670, 1180 735, 1260 755 C 1360 780, 1460 760, 1550 742 L 1530 812 L 70 812 Z"
          fill="#160028"
        />
        <path
          d="M 52 738 C 140 756, 240 776, 340 752 C 420 732, 460 666, 520 666 C 600 666, 660 702, 730 718 C 770 726, 800 728, 800 728 C 800 728, 830 726, 870 718 C 940 702, 1000 666, 1080 666 C 1140 666, 1180 732, 1260 752 C 1360 776, 1460 756, 1548 738 L 1526 806 L 74 806 Z"
          fill="url(#purpleFaceGrad)"
        />
        <path d="M 500 675 C 600 685, 680 722, 740 736 M 1100 675 C 1000 685, 920 722, 860 736" stroke="#26013e" strokeWidth="4" fill="none" strokeLinecap="round" />

        {/* Specular Ridge on Wave */}
        <path
          d="M 460 672 C 520 665, 600 680, 690 714 C 725 726, 755 732, 780 734 M 1140 672 C 1080 665, 1000 680, 910 714 C 875 726, 845 732, 820 734"
          fill="none"
          stroke="#ffffff"
          strokeWidth="3.2"
          strokeLinecap="round"
          opacity="0.9"
          filter="url(#neonGlowFilter)"
        />
        <path d="M 460 672 C 520 665, 600 680, 690 714 M 1140 672 C 1080 665, 1000 680, 910 714" fill="none" stroke="#ff9efb" strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />

        {/* Wave Neon Magenta Light Channel */}
        <path
          d="M 54 746 C 142 764, 242 784, 342 760 C 422 740, 462 674, 522 674 C 602 674, 662 710, 732 726 C 772 734, 802 736, 802 736 C 802 736, 832 734, 872 726 C 942 710, 1002 674, 1082 674 C 1142 674, 1182 740, 1262 760 C 1362 784, 1462 764, 1544 746"
          fill="none"
          stroke="#ff26df"
          strokeWidth="6"
          strokeLinecap="round"
          filter="url(#neonGlowFilter)"
          className="frame-neon"
          opacity="0.85"
        />

        {/* Heavy 3D Golden Wave Ribbon */}
        <path
          d="M 52 738 C 140 756, 240 776, 340 752 C 420 732, 460 666, 520 666 C 600 666, 660 702, 730 718 C 770 726, 800 728, 800 728 C 800 728, 830 726, 870 718 C 940 702, 1000 666, 1080 666 C 1140 666, 1180 732, 1260 752 C 1360 776, 1460 756, 1548 738"
          fill="none"
          stroke="url(#goldRibbonGrad)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 54 734 C 142 752, 242 772, 342 748 C 422 728, 462 662, 520 662 C 598 662, 658 698, 728 714 C 768 722, 798 724, 798 724 C 798 724, 828 722, 868 714 C 938 698, 998 662, 1078 662 C 1138 662, 1178 728, 1258 748 C 1358 772, 1458 752, 1544 734"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.9"
        />
      </g>

      {/* Flanking Equalizers */}
      <Equalizer x={642} y={736} scale={1.05} barCount={7} barWidth={6.2} gap={4.2} />
      <Equalizer x={958} y={736} scale={1.05} barCount={7} barWidth={6.2} gap={4.2} mirrored />

      {/* Center Treble Clef Medallion */}
      <MusicMedallion cx={800} cy={735} r={66} />

      {/* Corner Lens Flares */}
      <g className="gold-glint">
        <use href="#starGlint" transform="translate(85, 805) scale(0.85)" />
        <use href="#starGlint" transform="translate(1515, 805) scale(0.85)" />
        <use href="#starGlint" transform="translate(520, 666) scale(0.7)" />
        <use href="#starGlint" transform="translate(1080, 666) scale(0.7)" />
      </g>
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   6. LEFT & RIGHT DETAILED SAXOPHONES
   ───────────────────────────────────────────────────────────────────────────── */
function SaxophoneLeft() {
  const pearlKeys = [
    { cx: 219, cy: 408, r: 4.8 },
    { cx: 214, cy: 426, r: 5.2 },
    { cx: 209, cy: 444, r: 5.5 },
    { cx: 204, cy: 462, r: 5.6 },
    { cx: 198, cy: 482, r: 5.8 },
    { cx: 192, cy: 504, r: 6.0 },
    { cx: 186, cy: 528, r: 6.2 },
    { cx: 179, cy: 556, r: 6.4 },
    { cx: 172, cy: 586, r: 6.6 },
    { cx: 165, cy: 616, r: 6.8 },
    { cx: 158, cy: 646, r: 7.0 },
  ];

  return (
    <g id="saxophone-left" filter="url(#instrumentShadowFilter)">
      {/* ── MOUTHPIECE & LIGATURE ── */}
      <g id="sax-mouthpiece">
        <rect x="140" y="370" width="12" height="18" rx="2" fill="#c98f48" stroke="#683d12" strokeWidth="1" />
        <line x1="143" y1="371" x2="143" y2="387" stroke="#ffe0a6" strokeWidth="1" opacity="0.6" />
        <path d="M 142 371 L 114 374 L 94 380 Q 88 383 94 386 L 114 388 L 142 389 Z" fill="url(#mouthpieceGrad)" stroke="#0c0112" strokeWidth="1.2" />
        <path d="M 140 373 L 110 376 L 96 380" stroke="#74339e" strokeWidth="1.6" strokeLinecap="round" />
        <ellipse cx="118" cy="381" rx="3" ry="8" fill="#1b042b" opacity="0.6" />
        <rect x="120" y="372" width="16" height="17" rx="2.5" fill="url(#goldBrassGrad)" stroke="#703702" strokeWidth="1" />
        <line x1="124" y1="373" x2="124" y2="388" stroke="#ffffff" strokeWidth="1.2" opacity="0.8" />
        <circle cx="128" cy="370" r="3" fill="url(#goldRibbonGrad)" stroke="#703702" strokeWidth="0.8" />
        <circle cx="128" cy="370" r="1.2" fill="#ffffff" />
      </g>

      {/* ── GOOSENECK ── */}
      <g id="sax-neck">
        <path
          d="M 146 377 C 154 340, 192 328, 222 352 C 234 362, 238 378, 228 400 L 214 394 C 220 378, 216 366, 206 358 C 182 342, 158 352, 154 382 Z"
          fill="url(#goldTubeGrad)"
          stroke="#703702"
          strokeWidth="1.2"
        />
        <path d="M 150 375 C 158 342, 192 332, 218 354 C 228 362, 232 374, 226 392" fill="none" stroke="#ffffff" strokeWidth="2.6" strokeLinecap="round" opacity="0.9" />
        <path d="M 154 382 C 162 354, 188 346, 208 360" fill="none" stroke="#823e02" strokeWidth="2.2" opacity="0.8" />
        <rect x="206" y="388" width="30" height="10" rx="3" transform="rotate(18 206 388)" fill="url(#goldBrassGrad)" stroke="#5c2d01" strokeWidth="1" />
        <circle cx="222" cy="394" r="3.2" fill="url(#goldRibbonGrad)" stroke="#5c2d01" strokeWidth="0.8" />
      </g>

      {/* ── MAIN BODY TUBE (TWO-TONE) ── */}
      <g id="sax-body-tube">
        <path d="M 232 394 L 202 536 L 168 526 L 210 386 Z" fill="url(#goldBrassGrad)" stroke="#5c2d01" strokeWidth="1.4" />
        <path d="M 226 392 L 198 534" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.85" />
        <path d="M 172 524 L 214 388" stroke="#482100" strokeWidth="2.5" opacity="0.75" />
        <rect x="166" y="522" width="38" height="14" rx="3" transform="rotate(16 166 522)" fill="url(#goldBrassGrad)" stroke="#5c2d01" strokeWidth="1.4" />
        <circle cx="184" cy="528" r="4.5" fill="url(#goldRibbonGrad)" stroke="#5c2d01" strokeWidth="1" />
        <line x1="168" y1="524" x2="202" y2="534" stroke="#ffffff" strokeWidth="1.4" opacity="0.9" />
        {/* Master Unified Seamless 3D Purple Lacquer Saxophone Body (Tube + Bow + Bell Horn) */}
        <path
          d="M 170 524 
             L 134 676 
             C 112 718, 118 774, 160 798 
             C 200 820, 246 800, 268 762 
             C 284 734, 312 672, 332 626 
             C 350 596, 360 580, 366 574 
             L 298 540 
             C 284 550, 274 564, 268 584 
             C 252 636, 238 698, 230 744 
             C 222 766, 192 774, 164 764 
             C 142 750, 146 714, 172 682 
             L 204 534 Z"
          fill="url(#saxPurpleLacquer)"
          stroke="#180028"
          strokeWidth="1.8"
        />

        {/* Outer Shadow Edge */}
        <path
          d="M 170 526 L 134 676 C 114 718, 120 772, 160 796"
          stroke="#0e0018"
          strokeWidth="2.8"
          fill="none"
          opacity="0.8"
        />

        {/* Continuous Specular Violet/Magenta Highlight down Tube and around Bow */}
        <path
          d="M 200 534 
             L 168 670 
             C 146 720, 140 762, 164 794 
             C 194 810, 232 798, 254 768"
          fill="none"
          stroke="#ff82f6"
          strokeWidth="3.4"
          strokeLinecap="round"
          opacity="0.85"
          filter="url(#neonGlowFilter)"
        />
        <path
          d="M 198 536 
             L 166 670 
             C 146 718, 142 760, 164 790"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.3"
          strokeLinecap="round"
          opacity="0.9"
        />

        {/* Key Stack Rod & Pearl Touchpieces */}
        <path d="M 226 396 L 164 656" stroke="url(#goldTubeGrad)" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M 225 396 L 163 656" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" opacity="0.85" />
        {pearlKeys.map(({ cx, cy, r }, idx) => (
          <g key={idx}>
            <circle cx={cx} cy={cy} r={r} fill="url(#goldBezelGrad)" stroke="#5c2d01" strokeWidth="1.4" />
            <circle cx={cx - 0.5} cy={cy - 0.5} r={r - 2.8} fill="#fffaee" stroke="#d4a855" strokeWidth="0.8" />
            <ellipse cx={cx - 2.2} cy={cy - 2.2} rx={r * 0.35} ry={r * 0.22} fill="#ffffff" opacity="0.9" />
          </g>
        ))}

        {/* Golden Protective Bow Bottom Bumper Cap */}
        <circle cx="154" cy="794" r="14.5" fill="url(#goldBezelGrad)" stroke="#5c2d01" strokeWidth="1.8" />
        <circle cx="153" cy="793" r="9.5" fill="url(#goldRibbonGrad)" />
        <circle cx="151" cy="791" r="4.2" fill="#ffffff" opacity="0.85" />
      </g>

      {/* ── VOLUPTUOUS PURPLE BELL HORN (DETAILS & MOUTH) ── */}
      <g id="sax-bell-horn">
        <path d="M 238 736 C 250 690, 266 632, 286 584 C 294 566, 304 554, 316 546" fill="none" stroke="#ff8af7" strokeWidth="3.8" strokeLinecap="round" opacity="0.9" filter="url(#neonGlowFilter)" />
        <path d="M 238 736 C 250 690, 266 632, 286 584 C 294 566, 304 554, 316 546" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />

        {/* Flared Bell Cavity (Mouth Opening) */}
        <g id="bell-interior" transform="rotate(-34 330 560)">
          <ellipse cx="330" cy="560" rx="52" ry="27" fill="url(#saxBellInteriorGrad)" stroke="#703702" strokeWidth="2" />
          <ellipse cx="328" cy="561" rx="42" ry="20" fill="#4b1700" opacity="0.65" />
          <ellipse cx="326" cy="562" rx="28" ry="12" fill="#220900" opacity="0.8" />
          <path d="M 284 560 C 296 578, 364 578, 376 560" fill="none" stroke="#ffe685" strokeWidth="3.5" opacity="0.9" />
          <ellipse cx="330" cy="560" rx="52" ry="27" fill="none" stroke="url(#goldBrassGrad)" strokeWidth="6.5" />
          <ellipse cx="330" cy="560" rx="54" ry="28.5" fill="none" stroke="#703702" strokeWidth="1.2" />
          <path d="M 288 550 C 308 540, 348 540, 368 550" fill="none" stroke="#ffffff" strokeWidth="3.2" strokeLinecap="round" />
        </g>

        {/* 3D Key Cups on Bell */}
        <g id="bell-keys">
          <circle cx="264" cy="676" r="18" fill="url(#goldBezelGrad)" stroke="#5c2d01" strokeWidth="2" />
          <circle cx="263" cy="675" r="12.5" fill="#fffaee" stroke="#d4a855" strokeWidth="1.2" />
          <ellipse cx="260" cy="672" rx="5.5" ry="3.2" fill="#ffffff" opacity="0.9" />
          <circle cx="230" cy="734" r="15" fill="url(#goldBezelGrad)" stroke="#5c2d01" strokeWidth="1.8" />
          <circle cx="229" cy="733" r="10.2" fill="#fffaee" stroke="#d4a855" strokeWidth="1" />
          <ellipse cx="226" cy="730" rx="4.5" ry="2.6" fill="#ffffff" opacity="0.9" />
          <path d="M 280 706 L 266 668 L 236 724 L 226 736" fill="none" stroke="url(#goldTubeGrad)" strokeWidth="3.4" strokeLinecap="round" />
          <line x1="279" y1="705" x2="227" y2="736" stroke="#ffffff" strokeWidth="1.2" opacity="0.85" />
          <circle cx="280" cy="706" r="3.8" fill="#5c2d01" />
          <circle cx="226" cy="736" r="3.8" fill="#5c2d01" />
        </g>
      </g>
    </g>
  );
}

function SaxophoneRight() {
  return (
    <g id="saxophone-right" transform="translate(1600, 0) scale(-1, 1)">
      <SaxophoneLeft />
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   7. FLOATING 3D GOLDEN MUSIC NOTES (WAFTING FROM SAXOPHONE MOUTHS)
   ───────────────────────────────────────────────────────────────────────────── */
function FloatingMusicNotes() {
  return (
    <g id="floating-music-notes" style={{ pointerEvents: 'none' }}>
      <defs>
        <filter id="delicateNoteGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <radialGradient id="delicateNoteHeadGrad" cx="35%" cy="32%" r="65%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="25%" stopColor="#fff3a1" />
          <stop offset="55%" stopColor="#ffb300" />
          <stop offset="85%" stopColor="#c76a00" />
          <stop offset="100%" stopColor="#5c2600" />
        </radialGradient>

        <linearGradient id="delicateStemGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#662900" />
          <stop offset="28%" stopColor="#ffffff" />
          <stop offset="65%" stopColor="#ffc107" />
          <stop offset="100%" stopColor="#5c2600" />
        </linearGradient>

        <linearGradient id="delicateBeamGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="24%" stopColor="#ffe082" />
          <stop offset="65%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#78350f" />
        </linearGradient>

        {/* ♫ Beamed Eighth Note */}
        <g id="delicate-beamed-eighth" filter="url(#delicateNoteGlow)">
          <ellipse cx="9" cy="30" rx="6.5" ry="4.8" transform="rotate(-26 9 30)" fill="url(#delicateNoteHeadGrad)" stroke="#522000" strokeWidth="0.8" />
          <ellipse cx="8.2" cy="29.2" rx="4" ry="2.3" transform="rotate(-26 8.2 29.2)" fill="#fffde6" opacity="0.9" />
          <ellipse cx="31" cy="24" rx="6.5" ry="4.8" transform="rotate(-26 31 24)" fill="url(#delicateNoteHeadGrad)" stroke="#522000" strokeWidth="0.8" />
          <ellipse cx="30.2" cy="23.2" rx="4" ry="2.3" transform="rotate(-26 30.2 23.2)" fill="#fffde6" opacity="0.9" />
          <rect x="13.5" y="7" width="2.6" height="23" rx="1.3" fill="url(#delicateStemGrad)" stroke="#522000" strokeWidth="0.5" />
          <line x1="14.6" y1="8" x2="14.6" y2="29" stroke="#ffffff" strokeWidth="0.8" opacity="0.9" />
          <rect x="35.5" y="2" width="2.6" height="22" rx="1.3" fill="url(#delicateStemGrad)" stroke="#522000" strokeWidth="0.5" />
          <line x1="36.6" y1="3" x2="36.6" y2="23" stroke="#ffffff" strokeWidth="0.8" opacity="0.9" />
          <polygon points="13.5,8 38.5,2 38.5,6.8 13.5,12.8" fill="url(#delicateBeamGrad)" stroke="#522000" strokeWidth="0.6" />
          <line x1="13.5" y1="8" x2="38.5" y2="2" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" />
        </g>

        {/* ♪ Single Eighth Note */}
        <g id="delicate-single-eighth" filter="url(#delicateNoteGlow)">
          <ellipse cx="9" cy="29" rx="6.5" ry="4.8" transform="rotate(-26 9 29)" fill="url(#delicateNoteHeadGrad)" stroke="#522000" strokeWidth="0.8" />
          <ellipse cx="8.2" cy="28.2" rx="4" ry="2.3" transform="rotate(-26 8.2 28.2)" fill="#fffde6" opacity="0.9" />
          <rect x="13.5" y="4" width="2.6" height="25" rx="1.3" fill="url(#delicateStemGrad)" stroke="#522000" strokeWidth="0.5" />
          <line x1="14.6" y1="5" x2="14.6" y2="28" stroke="#ffffff" strokeWidth="0.8" opacity="0.9" />
          <path d="M 14.8 4 C 24 6, 28 12, 25 22 C 23.5 18, 21.5 14, 14.8 12 Z" fill="url(#delicateBeamGrad)" stroke="#522000" strokeWidth="0.6" />
          <path d="M 15.5 5.5 C 23 7.5, 26 12, 24 20" fill="none" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" />
        </g>

        {/* ♩ Quarter Note */}
        <g id="delicate-quarter-note" filter="url(#delicateNoteGlow)">
          <ellipse cx="9" cy="27" rx="6.5" ry="4.8" transform="rotate(-26 9 27)" fill="url(#delicateNoteHeadGrad)" stroke="#522000" strokeWidth="0.8" />
          <ellipse cx="8.2" cy="26.2" rx="4" ry="2.3" transform="rotate(-26 8.2 26.2)" fill="#fffde6" opacity="0.9" />
          <rect x="13.5" y="4" width="2.6" height="23" rx="1.3" fill="url(#delicateStemGrad)" stroke="#522000" strokeWidth="0.5" />
          <line x1="14.6" y1="5" x2="14.6" y2="26" stroke="#ffffff" strokeWidth="0.8" opacity="0.9" />
        </g>

        {/* ♬ Sixteenth Note */}
        <g id="delicate-sixteenth-note" filter="url(#delicateNoteGlow)">
          <ellipse cx="9" cy="32" rx="6.5" ry="4.8" transform="rotate(-26 9 32)" fill="url(#delicateNoteHeadGrad)" stroke="#522000" strokeWidth="0.8" />
          <ellipse cx="8.2" cy="31.2" rx="4" ry="2.3" transform="rotate(-26 8.2 31.2)" fill="#fffde6" opacity="0.9" />
          <ellipse cx="31" cy="26" rx="6.5" ry="4.8" transform="rotate(-26 31 26)" fill="url(#delicateNoteHeadGrad)" stroke="#522000" strokeWidth="0.8" />
          <ellipse cx="30.2" cy="25.2" rx="4" ry="2.3" transform="rotate(-26 30.2 25.2)" fill="#fffde6" opacity="0.9" />
          <rect x="13.5" y="6" width="2.6" height="26" rx="1.3" fill="url(#delicateStemGrad)" stroke="#522000" strokeWidth="0.5" />
          <line x1="14.6" y1="7" x2="14.6" y2="31" stroke="#ffffff" strokeWidth="0.8" opacity="0.9" />
          <rect x="35.5" y="1" width="2.6" height="25" rx="1.3" fill="url(#delicateStemGrad)" stroke="#522000" strokeWidth="0.5" />
          <line x1="36.6" y1="2" x2="36.6" y2="25" stroke="#ffffff" strokeWidth="0.8" opacity="0.9" />
          <polygon points="13.5,6 38.5,0.5 38.5,5.2 13.5,10.7" fill="url(#delicateBeamGrad)" stroke="#522000" strokeWidth="0.6" />
          <line x1="13.5" y1="6" x2="38.5" y2="0.5" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
          <polygon points="13.5,13 38.5,7.5 38.5,11.5 13.5,17" fill="url(#delicateBeamGrad)" stroke="#522000" strokeWidth="0.6" />
          <line x1="13.5" y1="13" x2="38.5" y2="7.5" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" />
        </g>

        {/* ✦ Sparkle Star */}
        <g id="delicate-sparkle" filter="url(#delicateNoteGlow)">
          <path d="M 8 0 Q 8 8 0 8 Q 8 8 8 16 Q 8 8 16 8 Q 8 8 8 0 Z" fill="url(#delicateNoteHeadGrad)" />
          <circle cx="8" cy="8" r="2.2" fill="#ffffff" />
        </g>

        {/* 𝄞 Mini Treble Clef */}
        <g id="delicate-clef-mini" filter="url(#delicateNoteGlow)">
          <text x="0" y="24" fontSize="26" fontWeight="bold" fill="url(#delicateNoteHeadGrad)" stroke="#522000" strokeWidth="0.5" fontFamily="serif">𝄞</text>
        </g>
      </defs>

      {/* ── LEFT SAXOPHONE NOTES STREAM (16 DELICATE ITEMS) ── */}
      <g id="left-floating-stream" transform="translate(330, 545)">
        <g className="floating-note float-left-1" style={{ animationDelay: '-0.2s', animationDuration: '4.4s' }}><use href="#delicate-beamed-eighth" x="-18" y="-16" transform="scale(0.72)" /></g>
        <g className="floating-note float-left-2" style={{ animationDelay: '-0.5s', animationDuration: '4.1s' }}><use href="#delicate-single-eighth" x="-12" y="-15" transform="scale(0.65)" /></g>
        <g className="floating-note float-left-3" style={{ animationDelay: '-0.8s', animationDuration: '3.5s' }}><use href="#delicate-sparkle" x="-8" y="-8" transform="scale(0.7)" /></g>
        <g className="floating-note float-left-4" style={{ animationDelay: '-1.1s', animationDuration: '4.5s' }}><use href="#delicate-sixteenth-note" x="-18" y="-16" transform="scale(0.68)" /></g>
        <g className="floating-note float-left-5" style={{ animationDelay: '-1.4s', animationDuration: '4.0s' }}><use href="#delicate-quarter-note" x="-10" y="-14" transform="scale(0.62)" /></g>
        <g className="floating-note float-left-1" style={{ animationDelay: '-1.7s', animationDuration: '4.3s' }}><use href="#delicate-beamed-eighth" x="-18" y="-16" transform="scale(0.76)" /></g>
        <g className="floating-note float-left-2" style={{ animationDelay: '-2.0s', animationDuration: '4.2s' }}><use href="#delicate-clef-mini" x="-8" y="-14" transform="scale(0.7)" /></g>
        <g className="floating-note float-left-3" style={{ animationDelay: '-2.3s', animationDuration: '3.6s' }}><use href="#delicate-sparkle" x="-8" y="-8" transform="scale(0.8)" /></g>
        <g className="floating-note float-left-4" style={{ animationDelay: '-2.6s', animationDuration: '4.4s' }}><use href="#delicate-single-eighth" x="-12" y="-15" transform="scale(0.68)" /></g>
        <g className="floating-note float-left-5" style={{ animationDelay: '-2.9s', animationDuration: '4.2s' }}><use href="#delicate-beamed-eighth" x="-18" y="-16" transform="scale(0.7)" /></g>
        <g className="floating-note float-left-1" style={{ animationDelay: '-3.2s', animationDuration: '3.9s' }}><use href="#delicate-quarter-note" x="-10" y="-14" transform="scale(0.64)" /></g>
        <g className="floating-note float-left-2" style={{ animationDelay: '-3.5s', animationDuration: '3.4s' }}><use href="#delicate-sparkle" x="-8" y="-8" transform="scale(0.65)" /></g>
        <g className="floating-note float-left-3" style={{ animationDelay: '-3.8s', animationDuration: '4.6s' }}><use href="#delicate-sixteenth-note" x="-18" y="-16" transform="scale(0.72)" /></g>
        <g className="floating-note float-left-4" style={{ animationDelay: '-4.1s', animationDuration: '4.1s' }}><use href="#delicate-single-eighth" x="-12" y="-15" transform="scale(0.66)" /></g>
        <g className="floating-note float-left-5" style={{ animationDelay: '-4.4s', animationDuration: '4.3s' }}><use href="#delicate-beamed-eighth" x="-18" y="-16" transform="scale(0.75)" /></g>
        <g className="floating-note float-left-2" style={{ animationDelay: '-4.7s', animationDuration: '3.5s' }}><use href="#delicate-sparkle" x="-8" y="-8" transform="scale(0.7)" /></g>
      </g>

      {/* ── RIGHT SAXOPHONE NOTES STREAM (16 DELICATE ITEMS) ── */}
      <g id="right-floating-stream" transform="translate(1270, 545)">
        <g className="floating-note float-right-1" style={{ animationDelay: '-0.3s', animationDuration: '4.3s' }}><use href="#delicate-beamed-eighth" x="-18" y="-16" transform="scale(0.72)" /></g>
        <g className="floating-note float-right-2" style={{ animationDelay: '-0.6s', animationDuration: '4.0s' }}><use href="#delicate-single-eighth" x="-12" y="-15" transform="scale(0.65)" /></g>
        <g className="floating-note float-right-3" style={{ animationDelay: '-0.9s', animationDuration: '3.6s' }}><use href="#delicate-sparkle" x="-8" y="-8" transform="scale(0.7)" /></g>
        <g className="floating-note float-right-4" style={{ animationDelay: '-1.2s', animationDuration: '4.4s' }}><use href="#delicate-sixteenth-note" x="-18" y="-16" transform="scale(0.68)" /></g>
        <g className="floating-note float-right-5" style={{ animationDelay: '-1.5s', animationDuration: '3.9s' }}><use href="#delicate-quarter-note" x="-10" y="-14" transform="scale(0.62)" /></g>
        <g className="floating-note float-right-1" style={{ animationDelay: '-1.8s', animationDuration: '4.2s' }}><use href="#delicate-beamed-eighth" x="-18" y="-16" transform="scale(0.76)" /></g>
        <g className="floating-note float-right-2" style={{ animationDelay: '-2.1s', animationDuration: '4.1s' }}><use href="#delicate-clef-mini" x="-8" y="-14" transform="scale(0.7)" /></g>
        <g className="floating-note float-right-3" style={{ animationDelay: '-2.4s', animationDuration: '3.5s' }}><use href="#delicate-sparkle" x="-8" y="-8" transform="scale(0.8)" /></g>
        <g className="floating-note float-right-4" style={{ animationDelay: '-2.7s', animationDuration: '4.5s' }}><use href="#delicate-single-eighth" x="-12" y="-15" transform="scale(0.68)" /></g>
        <g className="floating-note float-right-5" style={{ animationDelay: '-3.0s', animationDuration: '4.3s' }}><use href="#delicate-beamed-eighth" x="-18" y="-16" transform="scale(0.7)" /></g>
        <g className="floating-note float-right-1" style={{ animationDelay: '-3.3s', animationDuration: '3.8s' }}><use href="#delicate-quarter-note" x="-10" y="-14" transform="scale(0.64)" /></g>
        <g className="floating-note float-right-2" style={{ animationDelay: '-3.6s', animationDuration: '3.4s' }}><use href="#delicate-sparkle" x="-8" y="-8" transform="scale(0.65)" /></g>
        <g className="floating-note float-right-3" style={{ animationDelay: '-3.9s', animationDuration: '4.6s' }}><use href="#delicate-sixteenth-note" x="-18" y="-16" transform="scale(0.72)" /></g>
        <g className="floating-note float-right-4" style={{ animationDelay: '-4.2s', animationDuration: '4.0s' }}><use href="#delicate-single-eighth" x="-12" y="-15" transform="scale(0.66)" /></g>
        <g className="floating-note float-right-5" style={{ animationDelay: '-4.5s', animationDuration: '4.4s' }}><use href="#delicate-beamed-eighth" x="-18" y="-16" transform="scale(0.75)" /></g>
        <g className="floating-note float-right-2" style={{ animationDelay: '-4.8s', animationDuration: '3.5s' }}><use href="#delicate-sparkle" x="-8" y="-8" transform="scale(0.7)" /></g>
      </g>
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   8. CENTRAL MUSIC DASHBOARD (3 INTERACTIVE PAGES, PROGRESS BAR & NAVIGATION)
   ───────────────────────────────────────────────────────────────────────────── */
/* TRACKS imported from FeaturedMusicVideosData */

function CentralMusicDashboard({
  currentTrackIdx: propTrackIdx,
  setCurrentTrackIdx: propSetTrackIdx,
  slideDirection: propSlideDirection,
  setSlideDirection: propSetSlideDirection,
  handleNext: propHandleNext,
  handlePrev: propHandlePrev,
} = {}) {
  const [internalTrackIdx, setInternalTrackIdx] = useState(0);
  const [internalSlideDirection, setInternalSlideDirection] = useState('next');

  const currentTrackIdx = propTrackIdx !== undefined ? propTrackIdx : internalTrackIdx;
  const setCurrentTrackIdx = propSetTrackIdx || setInternalTrackIdx;
  const slideDirection = propSlideDirection !== undefined ? propSlideDirection : internalSlideDirection;
  const setSlideDirection = propSetSlideDirection || setInternalSlideDirection;

  const track = TRACKS[currentTrackIdx];

  // Dynamic Page Progress: Page 1 -> 33.33%, Page 2 -> 66.66%, Page 3 -> 100%
  const pageProgressPercent = ((currentTrackIdx + 1) / TRACKS.length) * 100;

  const handleNext = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (propHandleNext) {
      propHandleNext(e);
    } else {
      setSlideDirection('next');
      setCurrentTrackIdx((prev) => (prev + 1) % TRACKS.length);
    }
  };

  const handlePrev = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (propHandlePrev) {
      propHandlePrev(e);
    } else {
      setSlideDirection('prev');
      setCurrentTrackIdx((prev) => (prev - 1 + TRACKS.length) % TRACKS.length);
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 select-none relative overflow-hidden font-sans">
      {/* ── TOP HEADER / STATUS BAR ── */}
      <div className="flex items-center justify-between z-10 border-b border-purple-500/20 pb-2.5">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-pink-600 shadow-[0_0_10px_#ff25d2]" />
          </span>
          <span className="text-xs font-bold tracking-widest text-[#2f0447] uppercase drop-shadow-sm">
            Interactive Music Suite
          </span>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-purple-900/80 border border-amber-400/40 text-amber-300 font-mono tracking-wider ml-2 shadow-sm">
            {track.genre}
          </span>
        </div>

        {/* Page Step Dots */}
        <div className="flex items-center gap-2">
          {[0, 1, 2].map((idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setSlideDirection(idx > currentTrackIdx ? 'next' : 'prev');
                setCurrentTrackIdx(idx);
              }}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentTrackIdx === idx
                  ? 'w-8 bg-gradient-to-r from-pink-500 to-amber-300 shadow-[0_0_8px_#ff26df]'
                  : 'w-2 bg-purple-900/50 hover:bg-purple-700'
              }`}
              title={`Jump to Page ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ── MAIN CENTERPIECE: ANIMATED PAGE CONTENT (WITH TRANSITIONS) ── */}
      <div
        key={currentTrackIdx}
        className={`flex items-center gap-7 my-auto z-10 ${
          slideDirection === 'next' ? 'page-anim-next' : 'page-anim-prev'
        }`}
      >
        {/* PAGE 1: VINYL RECORD VISUAL */}
        {currentTrackIdx === 0 && (
          <div className="relative flex-shrink-0 group">
            <div className="absolute -inset-2.5 rounded-full bg-gradient-to-tr from-pink-500 via-purple-600 to-amber-400 opacity-60 blur-md animate-pulse" />
            <div
              className="w-32 h-32 rounded-full relative shadow-2xl flex items-center justify-center border-2 border-amber-300/80 bg-[#1a012e] animate-spin"
              style={{ animationDuration: '6s' }}
            >
              <div className="absolute inset-1.5 rounded-full border border-purple-400/30" />
              <div className="absolute inset-3 rounded-full border border-purple-400/20" />
              <div className="absolute inset-5 rounded-full border border-purple-300/30" />
              <div className="absolute inset-7 rounded-full border border-purple-400/20" />
              <div className="absolute inset-9 rounded-full border border-purple-300/30" />
              <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,rgba(255,255,255,0.22)_60deg,transparent_120deg,rgba(255,255,255,0.22)_240deg,transparent_300deg)] pointer-events-none" />
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-400 to-amber-600 border border-amber-200 shadow-lg flex items-center justify-center">
                <div className="w-9 h-9 rounded-full bg-gradient-to-b from-purple-900 to-[#25013d] border border-amber-300/60 flex items-center justify-center">
                  <svg className="w-5 h-5 text-amber-300 drop-shadow" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                  </svg>
                </div>
              </div>
              <div className="absolute w-2.5 h-2.5 rounded-full bg-black border border-amber-200/80" />
            </div>
          </div>
        )}

        {/* PAGE 2: GOLDEN ACOUSTIC HORN CORE */}
        {currentTrackIdx === 1 && (
          <div className="relative flex-shrink-0 group">
            <div className="absolute -inset-2.5 rounded-full bg-gradient-to-tr from-yellow-400 via-amber-500 to-pink-500 opacity-70 blur-md animate-pulse" />
            <div className="w-32 h-32 rounded-full relative shadow-2xl flex items-center justify-center border-2 border-amber-200 bg-gradient-to-br from-[#2a043d] via-[#150024] to-[#3b0852]">
              <div className="absolute inset-2 rounded-full border-2 border-amber-400/40 animate-ping" style={{ animationDuration: '3s' }} />
              <div className="absolute inset-4 rounded-full border border-pink-400/30" />
              <div className="absolute inset-6 rounded-full border border-amber-300/40" />
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-200 to-amber-600 border-2 border-white shadow-xl flex items-center justify-center">
                <svg className="w-7 h-7 text-[#25013d] drop-shadow" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                </svg>
              </div>
            </div>
          </div>
        )}

        {/* PAGE 3: HOLOGRAPHIC NEON HARMONIC ORB */}
        {currentTrackIdx === 2 && (
          <div className="relative flex-shrink-0 group">
            <div className="absolute -inset-2.5 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-cyan-400 opacity-70 blur-md animate-pulse" />
            <div className="w-32 h-32 rounded-full relative shadow-2xl flex items-center justify-center border-2 border-pink-300 bg-gradient-to-tr from-[#1b002c] via-[#35024e] to-[#140022]">
              <div
                className="absolute inset-1.5 rounded-full border-2 border-t-pink-400 border-r-amber-300 border-b-transparent border-l-transparent animate-spin"
                style={{ animationDuration: '4s' }}
              />
              <div
                className="absolute inset-4 rounded-full border-2 border-b-cyan-300 border-l-purple-400 border-t-transparent border-r-transparent animate-spin"
                style={{ animationDuration: '5s', animationDirection: 'reverse' }}
              />
              <div className="w-13 h-13 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-200 to-amber-500 border border-white shadow-lg flex items-center justify-center">
                <span className="text-xl font-black text-[#25013d]">𝄞</span>
              </div>
            </div>
          </div>
        )}

        {/* TRACK METADATA */}
        <div className="flex-1 flex flex-col justify-center min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-extrabold tracking-widest uppercase text-pink-600 drop-shadow-[0_0_8px_rgba(255,38,223,0.4)]">
              {track.pageName}
            </span>
            <span className="text-purple-600 text-xs">•</span>
            <span className="text-xs text-purple-800 font-semibold tracking-wide truncate">
              {track.genre}
            </span>
          </div>

          <h2 className="text-3xl font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#2a013f] via-[#520974] to-[#2a013f] drop-shadow-sm truncate leading-tight">
            {track.title}
          </h2>

          <p className="text-sm text-purple-900 font-semibold tracking-wide mt-1 truncate">
            {track.movement}
          </p>

          <p className="text-xs text-amber-700 font-bold tracking-wider uppercase mt-1.5 truncate">
            {track.artist}
          </p>
        </div>
      </div>

      {/* ── INTERACTIVE PAGE PROGRESS BAR & CONTROLS ── */}
      <div className="flex flex-col gap-2.5 z-10 bg-purple-950/40 backdrop-blur-md rounded-2xl px-5 py-3.5 border border-purple-300/40 shadow-xl">
        {/* Dynamic Page Progression Tracker Bar */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-purple-100 font-bold w-14 text-right">
            Page {currentTrackIdx + 1}
          </span>

          <div
            className="flex-1 h-3 bg-purple-900/70 rounded-full overflow-hidden cursor-pointer relative group border border-purple-400/40"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              const ratio = clickX / rect.width;
              if (ratio < 0.35) {
                setSlideDirection('prev');
                setCurrentTrackIdx(0);
              } else if (ratio < 0.7) {
                setSlideDirection(currentTrackIdx > 1 ? 'prev' : 'next');
                setCurrentTrackIdx(1);
              } else {
                setSlideDirection('next');
                setCurrentTrackIdx(2);
              }
            }}
            title="Click along the progress bar to navigate between pages"
          >
            <div
              className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-amber-300 rounded-full transition-all duration-500 ease-out relative shadow-[0_0_12px_#ff26df]"
              style={{ width: `${pageProgressPercent}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_10px_#ffffff] scale-100 transition-all" />
            </div>
          </div>

          <span className="text-xs font-mono text-purple-200 font-bold w-14">
            3 Pages
          </span>
        </div>

        {/* Navigation Ribbon */}
        <div className="flex items-center justify-between pt-1">
          {/* PREVIOUS Button */}
          <button
            type="button"
            onClick={handlePrev}
            style={{ pointerEvents: 'auto', zIndex: 50 }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-900/90 to-purple-800/90 hover:from-purple-800 hover:to-purple-700 active:scale-95 text-white font-bold text-xs tracking-wider border border-purple-400/50 shadow-md hover:shadow-[0_0_14px_#ff26df] transition-all cursor-pointer"
            title="Previous Page (Slide Left)"
          >
            <svg className="w-4 h-4 fill-current text-pink-300 pointer-events-none" viewBox="0 0 24 24">
              <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
            </svg>
            <span className="pointer-events-none">PREVIOUS</span>
          </button>

          {/* WIDE 3D GOLDEN YELLOW BUTTON WITH PAGE DISPLAY (WITHOUT PAUSE BUTTON) */}
          <button
            type="button"
            onClick={handleNext}
            style={{ pointerEvents: 'auto', zIndex: 50 }}
            className="px-9 py-2.5 min-w-[210px] h-12 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-300 to-amber-500 text-[#200136] font-black text-xs tracking-wider uppercase shadow-[0_0_24px_rgba(255,190,0,0.9)] hover:shadow-[0_0_32px_rgba(255,190,0,1)] hover:scale-105 active:scale-95 transition-all border-2 border-white/90 flex items-center justify-center cursor-pointer"
            title="Advance to next page"
          >
            <span className="font-extrabold tracking-widest text-[14px] drop-shadow-sm text-[#200136] pointer-events-none">
              {track.pageName}
            </span>
          </button>

          {/* NEXT Button */}
          <button
            type="button"
            onClick={handleNext}
            style={{ pointerEvents: 'auto', zIndex: 50 }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-800/90 to-purple-900/90 hover:from-purple-700 hover:to-purple-800 active:scale-95 text-white font-bold text-xs tracking-wider border border-purple-400/50 shadow-md hover:shadow-[0_0_14px_#ff26df] transition-all cursor-pointer"
            title="Next Page (Slide Right)"
          >
            <span className="pointer-events-none">NEXT</span>
            <svg className="w-4 h-4 fill-current text-pink-300 pointer-events-none" viewBox="0 0 24 24">
              <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   9. MASTER COMPONENT: FeaturedMusicVideo (CONSOLIDATED & EXPORTED AS DEFAULT)
   ───────────────────────────────────────────────────────────────────────────── */


/* ─────────────────────────────────────────────────────────────────────────────
   8B. MOBILE-OPTIMIZED FEATURED MUSIC VIDEO SHOWCASE (< 768px BREAKPOINT)
   Preserves 100% of the royal purple & gold 3D saxophone frame aesthetic
   with legible fonts, comfortable touch targets, and high-performance animations.
   ───────────────────────────────────────────────────────────────────────────── */
function MobileFeaturedMusicVideoShowcase({
  currentTrackIdx,
  setCurrentTrackIdx,
  slideDirection,
  setSlideDirection,
  handleNext,
  handlePrev,
}) {
  const track = TRACKS[currentTrackIdx];
  const pageProgressPercent = ((currentTrackIdx + 1) / TRACKS.length) * 100;

  return (
    <div className="w-full max-w-[430px] mx-auto px-1 py-1 relative select-none font-sans">
      {/* Ambient Radial Glow Aura */}
      <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600/15 via-purple-600/20 to-amber-500/15 blur-2xl -z-10 rounded-3xl" />

      {/* ── TOP ORNATE CROWN WITH SAXOPHONES & GOLD PLAQUE ── */}
      <div className="relative w-full flex justify-center -mb-5 z-20 pointer-events-none">
        <svg
          viewBox="180 25 1240 215"
          className="w-full max-w-[390px] h-auto drop-shadow-[0_10px_20px_rgba(20,0,35,0.6)]"
          preserveAspectRatio="xMidYMid meet"
          role="presentation"
        >
          <FrameDefinitions />
          {/* Left Flanking Saxophone Motif */}
          <g transform="translate(190, -250) scale(0.68)" opacity="0.95">
            <SaxophoneLeft />
          </g>
          {/* Central Ornate Gold & Purple Plaque with ♫ */}
          <TopMusicPanel />
          {/* Right Flanking Saxophone Motif */}
          <g transform="translate(90, -250) scale(0.68)" opacity="0.95">
            <SaxophoneRight />
          </g>
          {/* Starburst Lens Flares */}
          <use href="#starGlint" transform="translate(530, 95) scale(0.85)" className="gold-glint" />
          <use href="#starGlint" transform="translate(1070, 95) scale(0.85)" className="gold-glint" />
        </svg>
      </div>

      {/* ── MAIN MOBILE GLASS CHASSIS (CARD BODY) ── */}
      <div className="relative w-full rounded-3xl bg-gradient-to-b from-[#28023f]/95 via-[#18002b]/95 to-[#240038]/95 border-2 border-purple-400/60 p-4 sm:p-5 shadow-[0_16px_45px_rgba(40,4,70,0.55),0_0_25px_rgba(239,53,237,0.22)] backdrop-blur-xl overflow-hidden z-10">
        {/* Subtle Neon Magenta Inner Rim */}
        <div className="absolute inset-0 rounded-3xl border border-pink-400/30 pointer-events-none" />
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-pink-500/15 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-amber-500/15 rounded-full blur-2xl pointer-events-none" />

        {/* ── 1. STATUS BAR / TELEMETRY HEADER ── */}
        <div className="flex items-center justify-between border-b border-purple-500/25 pb-3 mb-3.5 relative z-10">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-pink-600 shadow-[0_0_10px_#ff25d2]" />
            </span>
            <span className="text-[11px] font-black tracking-widest text-purple-200 uppercase drop-shadow-sm">
              Music Suite
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-900/90 border border-amber-400/50 text-amber-300 font-mono font-bold tracking-wider shadow-sm">
              {track.genre}
            </span>
          </div>

          {/* Step Dots */}
          <div className="flex items-center gap-1.5">
            {[0, 1, 2].map((idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setSlideDirection(idx > currentTrackIdx ? 'next' : 'prev');
                  setCurrentTrackIdx(idx);
                }}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentTrackIdx === idx
                    ? 'w-6 bg-gradient-to-r from-pink-500 to-amber-300 shadow-[0_0_8px_#ff26df]'
                    : 'w-2 bg-purple-800/60 hover:bg-purple-600'
                }`}
                title={`Go to Page ${idx + 1}`}
                aria-label={`Go to Page ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ── 2. ANIMATED TRACK SHOWCASE ── */}
        <div
          key={currentTrackIdx}
          className={`flex items-center gap-3.5 sm:gap-4 my-2 relative z-10 ${
            slideDirection === 'next' ? 'page-anim-next' : 'page-anim-prev'
          }`}
        >
          {/* Track Artwork / Visual */}
          {currentTrackIdx === 0 && (
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-pink-500 via-purple-600 to-amber-400 opacity-70 blur-sm animate-pulse" />
              <div
                className="w-20 h-20 sm:w-22 sm:h-22 rounded-full relative shadow-xl flex items-center justify-center border-2 border-amber-300/80 bg-[#160026] animate-spin"
                style={{ animationDuration: '6s' }}
              >
                <div className="absolute inset-1.5 rounded-full border border-purple-400/30" />
                <div className="absolute inset-3 rounded-full border border-purple-400/20" />
                <div className="absolute inset-4.5 rounded-full border border-purple-300/30" />
                <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,rgba(255,255,255,0.2)_60deg,transparent_120deg,rgba(255,255,255,0.2)_240deg,transparent_300deg)] pointer-events-none" />
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-400 to-amber-600 border border-amber-200 shadow flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-b from-purple-900 to-[#25013d] border border-amber-300/60 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-amber-300 drop-shadow" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute w-2 h-2 rounded-full bg-black border border-amber-200/80" />
              </div>
            </div>
          )}

          {currentTrackIdx === 1 && (
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-yellow-400 via-amber-500 to-pink-500 opacity-70 blur-sm animate-pulse" />
              <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full relative shadow-xl flex items-center justify-center border-2 border-amber-200 bg-gradient-to-br from-[#2a043d] via-[#150024] to-[#3b0852]">
                <div className="absolute inset-1.5 rounded-full border border-amber-400/40 animate-ping" style={{ animationDuration: '3s' }} />
                <div className="absolute inset-3 rounded-full border border-pink-400/30" />
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-200 to-amber-600 border-2 border-white shadow flex items-center justify-center">
                  <svg className="w-4.5 h-4.5 text-[#25013d] drop-shadow" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                  </svg>
                </div>
              </div>
            </div>
          )}

          {currentTrackIdx === 2 && (
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-cyan-400 opacity-70 blur-sm animate-pulse" />
              <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full relative shadow-xl flex items-center justify-center border-2 border-pink-300 bg-gradient-to-tr from-[#1b002c] via-[#35024e] to-[#140022]">
                <div
                  className="absolute inset-1 rounded-full border-2 border-t-pink-400 border-r-amber-300 border-b-transparent border-l-transparent animate-spin"
                  style={{ animationDuration: '4s' }}
                />
                <div
                  className="absolute inset-2.5 rounded-full border-2 border-b-cyan-300 border-l-purple-400 border-t-transparent border-r-transparent animate-spin"
                  style={{ animationDuration: '5s', animationDirection: 'reverse' }}
                />
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-200 to-amber-500 border border-white shadow flex items-center justify-center">
                  <span className="text-sm font-black text-[#25013d]">𝄞</span>
                </div>
              </div>
            </div>
          )}

          {/* Track Details */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="text-[10px] font-extrabold tracking-widest uppercase text-pink-400 drop-shadow-[0_0_8px_rgba(255,38,223,0.5)]">
                {track.pageName}
              </span>
            </div>

            <h3 className="text-base sm:text-lg font-black tracking-wide text-white leading-tight drop-shadow-sm truncate">
              {track.title}
            </h3>

            <p className="text-xs text-purple-200/90 font-medium tracking-wide mt-1 line-clamp-2 leading-relaxed">
              {track.movement}
            </p>

            <p className="text-[11px] text-amber-300 font-bold tracking-wider uppercase mt-1 truncate">
              {track.artist}
            </p>
          </div>
        </div>

        {/* ── 3. INTERACTIVE PROGRESS BAR ── */}
        <div className="mt-3.5 mb-3 pt-2 border-t border-purple-500/20 relative z-10">
          <div className="flex items-center gap-2.5">
            <span className="text-[11px] font-mono text-purple-200 font-bold w-12 text-right">
              Page {currentTrackIdx + 1}
            </span>

            <div
              className="flex-1 h-2.5 bg-purple-950/80 rounded-full overflow-hidden cursor-pointer relative border border-purple-400/40"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const ratio = clickX / rect.width;
                if (ratio < 0.35) {
                  setSlideDirection('prev');
                  setCurrentTrackIdx(0);
                } else if (ratio < 0.7) {
                  setSlideDirection(currentTrackIdx > 1 ? 'prev' : 'next');
                  setCurrentTrackIdx(1);
                } else {
                  setSlideDirection('next');
                  setCurrentTrackIdx(2);
                }
              }}
              title="Tap progress bar to switch pages"
            >
              <div
                className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-amber-300 rounded-full transition-all duration-500 ease-out relative shadow-[0_0_10px_#ff26df]"
                style={{ width: `${pageProgressPercent}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-[0_0_8px_#ffffff]" />
              </div>
            </div>

            <span className="text-[11px] font-mono text-purple-300 font-bold w-12">
              3 Pages
            </span>
          </div>
        </div>

        {/* ── 4. TOUCH-FRIENDLY CONTROLS RIBBON ── */}
        <div className="flex items-center justify-between gap-1.5 relative z-10">
          {/* PREVIOUS Button */}
          <button
            type="button"
            onClick={handlePrev}
            className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-purple-900/90 to-purple-800/90 active:scale-95 text-white font-bold text-xs tracking-wider border border-purple-400/50 shadow-md cursor-pointer transition-all"
            title="Previous Page"
          >
            <svg className="w-3.5 h-3.5 fill-current text-pink-300 pointer-events-none" viewBox="0 0 24 24">
              <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
            </svg>
            <span className="pointer-events-none">PREV</span>
          </button>

          {/* WIDE GOLDEN CENTER BUTTON */}
          <button
            type="button"
            onClick={handleNext}
            className="flex-1 py-2.5 px-2 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-300 to-amber-500 text-[#200136] font-black text-xs tracking-wider uppercase shadow-[0_0_16px_rgba(255,190,0,0.85)] border-2 border-white/90 active:scale-95 transition-all flex items-center justify-center cursor-pointer truncate"
            title="Advance to next page"
          >
            <span className="font-extrabold tracking-wider text-[12px] drop-shadow-sm text-[#200136] truncate pointer-events-none">
              {track.pageStep || track.pageName}
            </span>
          </button>

          {/* NEXT Button */}
          <button
            type="button"
            onClick={handleNext}
            className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-purple-800/90 to-purple-900/90 active:scale-95 text-white font-bold text-xs tracking-wider border border-purple-400/50 shadow-md cursor-pointer transition-all"
            title="Next Page"
          >
            <span className="pointer-events-none">NEXT</span>
            <svg className="w-3.5 h-3.5 fill-current text-pink-300 pointer-events-none" viewBox="0 0 24 24">
              <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
            </svg>
          </button>
        </div>
      </div>

      {/* ── 5. BOTTOM MEDALLION WITH 𝄞 ── */}
      <div className="relative w-full flex justify-center -mt-4 z-20 pointer-events-none">
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#9e2de8] via-[#5c0b94] to-[#130022] border-2 border-amber-300 flex items-center justify-center shadow-[0_0_18px_rgba(239,53,237,0.5)]">
          <span className="text-xl font-serif text-amber-300 drop-shadow-[0_0_6px_rgba(255,215,0,0.85)]">
            𝄞
          </span>
        </div>
      </div>
    </div>
  );
}

export function FeaturedMusicVideoShowcase({ className = '', style = {} }) {
  const [containerRef, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [currentTrackIdx, setCurrentTrackIdx] = useState(0);
  const [slideDirection, setSlideDirection] = useState('next');

  const handleNext = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setSlideDirection('next');
    setCurrentTrackIdx((prev) => (prev + 1) % TRACKS.length);
  };

  const handlePrev = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setSlideDirection('prev');
    setCurrentTrackIdx((prev) => (prev - 1 + TRACKS.length) % TRACKS.length);
  };

  return (
    <div
      ref={containerRef}
      className={`featured-music-video-wrapper w-full relative flex flex-col items-center justify-center ${inView ? 'is-in-view' : ''} ${className}`}
      style={style}
    >
      <style>{FEATURED_MUSIC_VIDEO_STYLES}</style>

      {/* ── DESKTOP & TABLET VIEW: Grand 16:9 Cinematic 3D Frame (≥ 768px) ── */}
      <div className="hidden md:flex w-full items-center justify-center">
        <svg
          className="music-frame"
          viewBox="0 0 1600 900"
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label="Premium 3D Musical Decorative Frame in Royal Purple and Gold with Saxophones and Music Notes"
          xmlns="http://www.w3.org/2000/svg"
        >
      {/* ── Reusable Definitions ── */}
      <FrameDefinitions />

      {/* ── 1. MAIN OUTER 3D HEXAGONAL FRAME BEVELS & BORDERS ── */}
      <g id="main-frame-chassis" filter="url(#frameShadowFilter)">
        {/* Layer A: Base Structural Hexagonal Bevel */}
        <path
          d="M 520 120 
             L 210 120 
             C 140 120, 80 178, 62 258 
             L 42 430 
             C 38 460, 48 530, 62 626 
             C 76 672, 112 710, 160 750 
             L 190 770 
             L 1410 770 
             L 1440 750 
             C 1488 710, 1524 672, 1538 626 
             C 1552 530, 1562 460, 1558 430 
             L 1538 258 
             C 1520 178, 1460 120, 1390 120 
             L 1080 120"
          fill="none"
          stroke="url(#frameBevelGrad)"
          strokeWidth="68"
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* Layer B: Glossy Purple Face Layer */}
        <path
          d="M 515 120 
             L 215 120 
             C 148 120, 90 176, 74 252 
             L 54 430 
             C 50 458, 60 526, 72 620 
             C 86 664, 120 702, 166 740 
             L 194 760 
             L 1406 760 
             L 1434 740 
             C 1480 702, 1514 664, 1528 620 
             C 1540 526, 1550 458, 1546 430 
             L 1526 252 
             C 1510 176, 1452 120, 1385 120 
             L 1085 120"
          fill="none"
          stroke="url(#purpleFaceGrad)"
          strokeWidth="48"
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* Layer C: Outer Polished Golden Trim */}
        <path
          d="M 510 88 
             L 210 88 
             C 126 88, 54 156, 34 250 
             L 14 430 
             C 8 464, 20 540, 36 644 
             C 52 696, 94 742, 148 786 
             L 180 810 
             L 1420 810 
             L 1452 786 
             C 1506 742, 1548 696, 1564 644 
             C 1580 540, 1592 464, 1586 430 
             L 1566 250 
             C 1546 156, 1474 88, 1390 88 
             L 1090 88"
          fill="none"
          stroke="url(#goldRibbonGrad)"
          strokeWidth="11"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {/* Specular White Line on Golden Trim */}
        <path
          d="M 510 84 
             L 210 84 
             C 124 84, 52 154, 32 248 
             L 12 430 
             C 6 464, 18 540, 34 642 
             C 50 694, 92 740, 146 784 
             L 180 808 
             L 1420 808 
             L 1454 784 
             C 1508 740, 1550 694, 1566 642 
             C 1582 540, 1594 464, 1588 430 
             L 1568 248 
             C 1548 154, 1476 84, 1390 84 
             L 1090 84"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.2"
          strokeLinejoin="round"
          strokeLinecap="round"
          opacity="0.9"
        />

        {/* Layer D: Continuous Inner Radiant Neon Magenta Rim */}
        <path
          d="M 500 174 
             L 228 174 
             C 172 174, 120 220, 104 284 
             L 86 430 
             C 82 458, 90 518, 102 602 
             C 114 642, 144 676, 186 712 
             L 210 730"
          fill="none"
          stroke="#ff26df"
          strokeWidth="8"
          strokeLinecap="round"
          filter="url(#neonGlowFilter)"
          className="frame-neon"
          opacity="0.95"
        />
        <path
          d="M 500 174 
             L 228 174 
             C 172 174, 120 220, 104 284 
             L 86 430 
             C 82 458, 90 518, 102 602 
             C 114 642, 144 676, 186 712 
             L 210 730"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.9"
        />

        {/* Right Continuous Neon Path */}
        <path
          d="M 1100 174 
             L 1372 174 
             C 1428 174, 1480 220, 1496 284 
             L 1514 430 
             C 1518 458, 1510 518, 1498 602 
             C 1486 642, 1456 676, 1414 712 
             L 1390 730"
          fill="none"
          stroke="#ff26df"
          strokeWidth="8"
          strokeLinecap="round"
          filter="url(#neonGlowFilter)"
          className="frame-neon"
          opacity="0.95"
        />
        <path
          d="M 1100 174 
             L 1372 174 
             C 1428 174, 1480 220, 1496 284 
             L 1514 430 
             C 1518 458, 1510 518, 1498 602 
             C 1486 642, 1456 676, 1414 712 
             L 1390 730"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.9"
        />

        {/* Shoulder Starburst Lens Flares */}
        <g className="gold-glint">
          <use href="#starGlint" transform="translate(305, 138) scale(0.9)" />
          <use href="#starGlint" transform="translate(1295, 138) scale(0.9)" />
        </g>
      </g>

      {/* ── 2. TOP MUSIC PANEL (PLAQUE) ── */}
      <TopMusicPanel />

      {/* ── 3. BOTTOM DECORATIVE PLATFORM & MEDALLION ── */}
      <BottomMusicPanel />

      {/* ── 4. LEFT DETAILED SAXOPHONE (ENTRANCE FROM LEFT ON RELOAD / SCROLL) ── */}
      <g className="sax-entrance-left">
        <SaxophoneLeft />
      </g>

      {/* ── 5. RIGHT DETAILED SAXOPHONE (ENTRANCE FROM RIGHT ON RELOAD / SCROLL) ── */}
      <g className="sax-entrance-right">
        <SaxophoneRight />
      </g>

      {/* ── 6. CENTRAL SCREEN INNER GLASS DISPLAY & INTERACTIVE DASHBOARD ── */}
      <g id="central-screen-display" style={{ pointerEvents: 'auto' }}>
        {/* Subtle Frosted Translucent Studio Screen Backing */}
        <rect
          x="360"
          y="200"
          width="880"
          height="465"
          rx="28"
          fill="#31024e"
          fillOpacity="0.14"
          stroke="url(#purpleFaceGrad)"
          strokeWidth="1.2"
          strokeOpacity="0.5"
          pointerEvents="none"
        />

        {/* Inner Screen Thin Neon Border Glow */}
        <rect
          x="364"
          y="204"
          width="872"
          height="457"
          rx="24"
          fill="none"
          stroke="#ff26df"
          strokeWidth="1.5"
          strokeOpacity="0.35"
          pointerEvents="none"
        />

        {/* Interactive Music Telemetry & Playback Dashboard */}
        <foreignObject x="360" y="200" width="880" height="465" style={{ pointerEvents: 'auto' }}>
          <CentralMusicDashboard
            currentTrackIdx={currentTrackIdx}
            setCurrentTrackIdx={setCurrentTrackIdx}
            slideDirection={slideDirection}
            setSlideDirection={setSlideDirection}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        </foreignObject>

        {/* Floating 3D Golden Music Notes Emitting Continuously from Saxophone Mouths */}
        <FloatingMusicNotes />
      </g>
    </svg>
      </div>

      {/* ── MOBILE VIEW: Touch-Friendly Responsive 3D Musical Frame & Suite (< 768px) ── */}
      <div className="flex md:hidden w-full items-center justify-center py-2">
        <MobileFeaturedMusicVideoShowcase
          currentTrackIdx={currentTrackIdx}
          setCurrentTrackIdx={setCurrentTrackIdx}
          slideDirection={slideDirection}
          setSlideDirection={setSlideDirection}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      </div>
    </div>
  );
}



/* =========================================================================
   14. FEATURED MUSIC VIDEOS SECTION COMPONENT
   ========================================================================= */
export const FeaturedMusicVideos = () => {
  return (
    <section 
      id="featured-music-videos"
      aria-label="Featured Music Videos" 
      className="relative w-full max-w-[1620px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 mt-8 sm:mt-12 lg:mt-16 select-none scroll-mt-24"
    >
      {/* Signature Section Header */}
      <SectionHeader 
        titlePrefix={featuredMusicVideosData.titlePrefix} 
        titleAccent={featuredMusicVideosData.titleAccent} 
        subtitle={featuredMusicVideosData.subtitle} 
      />

      {/* 3D Master Musical Frame with Saxophones & Interactive Music Suite */}
      <div className="relative w-full overflow-hidden flex items-center justify-center">
        <FeaturedMusicVideoShowcase />
      </div>
    </section>
  );
};

export default FeaturedMusicVideos;
