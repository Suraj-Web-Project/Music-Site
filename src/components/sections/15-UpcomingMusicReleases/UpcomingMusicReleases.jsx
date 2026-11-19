import { SectionHeader } from '../../common/SectionHeader';
import { upcomingMusicReleasesData } from './UpcomingMusicReleasesData';
import React, { useState, useEffect } from 'react';
import { useInView } from '../../../hooks/useInView';

/**
 * MusicContentFrame
 * Maximum 1:1 Visual Accuracy Recreation of the Reference Design
 * Built entirely with React, Tailwind CSS, Custom SVG, and CSS
 * 
 * Features:
 * - 100% vector-based custom SVG (No external raster images or third-party decorative icon libraries)
 * - Layered 3D glossy frame with organic curves and specular reflections
 * - Exact 1:1 replica of the premium over-ear headphones with 3D metallic shading & beamed music note
 * - Exact 1:1 replica of the classical 3D candy-gloss Treble Clef with realistic cylindrical bevels, inner crescent hook, terminal spherical bulb & continuous specular rim lighting
 * - Dual-layer sculpted bottom musical waves with specular starburst flare
 * - Bottom-right 6-column illuminated equalizer with subtle live waveform animation
 * - Spacious central editable React content zone with interactive badge, typography, and CTA
 * - Fully responsive with SVG viewBox scaling and Tailwind fluid typography
 */

export function MusicContentFrameShowcase({
  title = "Pure Sound in Every Dimension",
  description = "Immerse yourself in ultra-high fidelity audio engineered with spatial resonance, studio clarity, and deep acoustic precision.",
  className = '',
  style = {},
  children,
  ...props
}) {
  const [frameRef, inView] = useInView({ threshold: 0.08, triggerOnce: true });

  // Equalizer interactive state for gentle waveform movement
  const [eqHeights, setEqHeights] = useState([1, 2, 3, 3, 4, 3]);

  // Subtle living equalizer pulse animation
  useEffect(() => {
    const patterns = [
      [1, 2, 3, 3, 4, 3],
      [1, 3, 2, 4, 3, 2],
      [2, 2, 3, 2, 4, 3],
      [1, 2, 4, 3, 3, 2],
      [2, 3, 3, 4, 4, 3],
    ];
    let step = 0;
    const interval = setInterval(() => {
      step = (step + 1) % patterns.length;
      setEqHeights(patterns[step]);
    }, 1400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={frameRef}
      className={`w-full rounded-2xl sm:rounded-3xl border border-purple-200/80 shadow-[0_12px_40px_rgba(168,85,247,0.12)] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-gradient-to-b from-[#dfc0fb] via-[#d6adf7] to-[#c794f0] overflow-hidden selection:bg-fuchsia-300 selection:text-purple-950 font-sans ${inView ? 'is-in-view' : ''} ${className}`}
      style={style}
      {...props}
    >
      {/* Studio Acoustic Entrance & Continuous Living Animations */}
      <style>{`
        @keyframes hpFrameEnter {
          0% {
            opacity: 0;
            transform: scale(0.92) translateY(28px);
          }
          65% {
            opacity: 1;
            transform: scale(1.015) translateY(-3px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes hpHeadphoneEnter {
          0% {
            opacity: 0;
            transform: translate(85px, -65px) rotate(20deg) scale(0.82);
          }
          65% {
            opacity: 1;
            transform: translate(-6px, 4px) rotate(-3deg) scale(1.025);
          }
          85% {
            transform: translate(2px, -2px) rotate(1deg) scale(0.995);
          }
          100% {
            opacity: 1;
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
        }

        @keyframes hpHeadphoneBeat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          35% {
            transform: translateY(-5px) rotate(-1.2deg);
          }
          70% {
            transform: translateY(3px) rotate(0.8deg);
          }
        }

        @keyframes hpSoundRingScale {
          0% {
            transform: scale(0.6);
            opacity: 0.9;
          }
          100% {
            transform: scale(1.65);
            opacity: 0;
          }
        }

        @keyframes hpClefEnter {
          0% {
            opacity: 0;
            transform: translate(-75px, 25px) rotate(-9deg) scale(0.88);
          }
          65% {
            opacity: 1;
            transform: translate(5px, -3px) rotate(1.5deg) scale(1.02);
          }
          85% {
            transform: translate(-2px, 1px) rotate(-0.5deg) scale(0.995);
          }
          100% {
            opacity: 1;
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
        }

        @keyframes hpClefResonance {
          0%, 100% {
            transform: rotate(0deg) translateY(0);
          }
          50% {
            transform: rotate(0.6deg) translateY(-3px);
          }
        }

        @keyframes hpWaveSwell {
          0% {
            opacity: 0;
            transform: translateY(42px) scaleY(0.72);
          }
          70% {
            opacity: 1;
            transform: translateY(-4px) scaleY(1.025);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scaleY(1);
          }
        }

        @keyframes hpFlareBurst {
          0% {
            opacity: 0;
            transform: scale(0) rotate(-45deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.6) rotate(20deg);
          }
          70% {
            transform: scale(0.92) rotate(0deg);
          }
          100% {
            opacity: 0.9;
            transform: scale(1) rotate(0deg);
          }
        }

        @keyframes hpFlareShimmer {
          0%, 100% {
            opacity: 0.85;
            transform: scale(1) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.22) rotate(35deg);
          }
        }

        @keyframes eqColBounce {
          0% {
            opacity: 0;
            transform: translateY(32px) scaleY(0.2);
          }
          65% {
            opacity: 1;
            transform: translateY(-5px) scaleY(1.18);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scaleY(1);
          }
        }

        @keyframes hpNoteShine {
          0%, 100% {
            transform: scale(1);
            filter: drop-shadow(0 0 0 rgba(255,255,255,0));
          }
          50% {
            transform: scale(1.07);
            filter: drop-shadow(0 0 4px #ffa8f8);
          }
        }

        @keyframes hpHeadingEnter {
          0% {
            opacity: 0;
            transform: translateY(22px) scale(0.96);
            filter: blur(5px);
            letter-spacing: -0.04em;
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
            letter-spacing: -0.02em;
          }
        }

        @keyframes hpDescEnter {
          0% {
            opacity: 0;
            transform: translateY(16px);
            filter: blur(4px);
          }
          100% {
            opacity: 0.85;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        /* Base Quiescent State */
        .anim-hp-frame {
          opacity: 0;
          transform: scale(0.92) translateY(28px);
          transition: opacity 0.4s ease;
        }
        .anim-hp-headphone-enter,
        .anim-hp-clef-enter,
        .anim-hp-waves,
        .anim-hp-flare,
        .anim-eq-col-0,
        .anim-eq-col-1,
        .anim-eq-col-2,
        .anim-eq-col-3,
        .anim-eq-col-4,
        .anim-eq-col-5,
        .anim-hp-heading,
        .anim-hp-desc {
          opacity: 0;
        }

        /* Dynamically triggered when scrolled into view */
        .is-in-view .anim-hp-frame {
          animation: hpFrameEnter 1.05s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .is-in-view .anim-hp-headphone-enter {
          transform-box: fill-box;
          transform-origin: center center;
          animation: hpHeadphoneEnter 1.15s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both;
        }
        .anim-hp-headphone-beat {
          transform-box: fill-box;
          transform-origin: center center;
          animation: hpHeadphoneBeat 4.2s ease-in-out 1.35s infinite;
        }
        .is-in-view .anim-hp-clef-enter {
          transform-box: fill-box;
          transform-origin: bottom center;
          animation: hpClefEnter 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.22s both;
        }
        .anim-hp-clef-sway {
          transform-box: fill-box;
          transform-origin: bottom center;
          animation: hpClefResonance 4.8s ease-in-out 1.45s infinite;
        }
        .is-in-view .anim-hp-waves {
          transform-box: fill-box;
          transform-origin: bottom center;
          animation: hpWaveSwell 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.28s both;
        }
        .is-in-view .anim-hp-flare {
          transform-origin: 0px 0px;
          animation: hpFlareBurst 0.95s cubic-bezier(0.16, 1, 0.3, 1) 0.65s both, hpFlareShimmer 3.2s ease-in-out 1.6s infinite;
        }
        .anim-sound-ring-1 {
          transform-origin: 895px 218px;
          animation: hpSoundRingScale 3.2s cubic-bezier(0.2, 0.8, 0.4, 1) 0.9s infinite;
        }
        .anim-sound-ring-2 {
          transform-origin: 895px 218px;
          animation: hpSoundRingScale 3.2s cubic-bezier(0.2, 0.8, 0.4, 1) 1.95s infinite;
        }
        .anim-sound-ring-3 {
          transform-origin: 895px 218px;
          animation: hpSoundRingScale 3.2s cubic-bezier(0.2, 0.8, 0.4, 1) 3.0s infinite;
        }
        .anim-hp-note {
          transform-box: fill-box;
          transform-origin: center center;
          animation: hpNoteShine 3.2s ease-in-out 1.6s infinite;
        }
        .is-in-view .anim-eq-col-0 {
          transform-box: fill-box;
          transform-origin: bottom center;
          animation: eqColBounce 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.42s both;
        }
        .is-in-view .anim-eq-col-1 {
          transform-box: fill-box;
          transform-origin: bottom center;
          animation: eqColBounce 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.49s both;
        }
        .is-in-view .anim-eq-col-2 {
          transform-box: fill-box;
          transform-origin: bottom center;
          animation: eqColBounce 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.56s both;
        }
        .is-in-view .anim-eq-col-3 {
          transform-box: fill-box;
          transform-origin: bottom center;
          animation: eqColBounce 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.63s both;
        }
        .is-in-view .anim-eq-col-4 {
          transform-box: fill-box;
          transform-origin: bottom center;
          animation: eqColBounce 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.70s both;
        }
        .is-in-view .anim-eq-col-5 {
          transform-box: fill-box;
          transform-origin: bottom center;
          animation: eqColBounce 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.77s both;
        }
        .is-in-view .anim-hp-heading {
          animation: hpHeadingEnter 0.95s cubic-bezier(0.16, 1, 0.3, 1) 0.52s both;
        }
        .is-in-view .anim-hp-desc {
          animation: hpDescEnter 0.95s cubic-bezier(0.16, 1, 0.3, 1) 0.68s both;
        }
      `}</style>

      {/* Container maintaining original reference 1024:682 aspect ratio */}
      <div
        className="relative w-full max-w-[1100px] select-none anim-hp-frame"
        style={{ aspectRatio: '1024 / 682' }}
      >

        {/* Soft Ambient Floor Shadow beneath the entire frame */}
        <div
          className="absolute -bottom-4 sm:-bottom-8 md:-bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-10 sm:h-16 md:h-20 bg-[#35005e]/40 rounded-[100%] blur-xl sm:blur-2xl md:blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Master SVG Canvas containing all 1:1 decorative visual artwork */}
        <svg
          viewBox="0 0 1024 682"
          className="absolute inset-0 w-full h-full overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* ===================== GRADIENTS ===================== */}

            {/* Inner Content Area Radial Gradient */}
            <radialGradient id="innerCanvasGrad" cx="50%" cy="48%" r="60%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.99" />
              <stop offset="35%" stopColor="#fcf4ff" stopOpacity="0.97" />
              <stop offset="70%" stopColor="#f3ddfb" stopOpacity="0.94" />
              <stop offset="100%" stopColor="#e4bbf7" stopOpacity="0.9" />
            </radialGradient>

            {/* Outer Frame Main Body Gradient (Deep Royal Violet Depth) */}
            <linearGradient id="frameMainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8700d1" />
              <stop offset="12%" stopColor="#6200a3" />
              <stop offset="50%" stopColor="#4c0087" />
              <stop offset="85%" stopColor="#5d009e" />
              <stop offset="100%" stopColor="#350063" />
            </linearGradient>

            {/* Outer Frame Bevel Highlight (Glossy Specular Rim) */}
            <linearGradient id="frameBevelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffb8fb" stopOpacity="0.95" />
              <stop offset="25%" stopColor="#de68ff" stopOpacity="0.8" />
              <stop offset="55%" stopColor="#8100cf" stopOpacity="0.35" />
              <stop offset="85%" stopColor="#e85bf0" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#ffa6f6" stopOpacity="0.95" />
            </linearGradient>

            {/* Inner Lip Shadow (Soft Inset Depth) */}
            <linearGradient id="innerLipGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2c0052" stopOpacity="0.65" />
              <stop offset="30%" stopColor="#440078" stopOpacity="0.25" />
              <stop offset="85%" stopColor="#5e0099" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#20003b" stopOpacity="0.75" />
            </linearGradient>

            {/* ================= TREBLE CLEF EXACT 3D SHADERS ================= */}

            {/* Treble Clef 3D Metallic-Gloss Gradient (From bright candy pink to deep magenta/violet) */}
            <linearGradient id="clefMainGrad" x1="15%" y1="0%" x2="85%" y2="100%">
              <stop offset="0%" stopColor="#ff7ad8" />
              <stop offset="20%" stopColor="#ff3ebe" />
              <stop offset="45%" stopColor="#e81ab8" />
              <stop offset="70%" stopColor="#b300a8" />
              <stop offset="90%" stopColor="#7a008f" />
              <stop offset="100%" stopColor="#4a005c" />
            </linearGradient>

            {/* Treble Clef Specular Ridge Highlight Line */}
            <linearGradient id="clefSpecularGrad" x1="0%" y1="0%" x2="60%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.98" />
              <stop offset="30%" stopColor="#ffd4f6" stopOpacity="0.85" />
              <stop offset="65%" stopColor="#ff57d2" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
            </linearGradient>

            {/* Terminal Spherical Bulb Radial Specular */}
            <radialGradient id="bulbSphereGrad" cx="35%" cy="30%" r="68%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="22%" stopColor="#ff9ee8" />
              <stop offset="55%" stopColor="#e80aa7" />
              <stop offset="85%" stopColor="#8a0082" />
              <stop offset="100%" stopColor="#3d0042" />
            </radialGradient>

            {/* ================= HEADPHONE EXACT SHADERS ================= */}

            {/* Headband Outer Metallic Arc */}
            <linearGradient id="hbOuterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4f0087" />
              <stop offset="20%" stopColor="#7800c7" />
              <stop offset="50%" stopColor="#c70eb8" />
              <stop offset="80%" stopColor="#f72ec7" />
              <stop offset="100%" stopColor="#8c00b8" />
            </linearGradient>

            {/* Headband Under-Padding */}
            <linearGradient id="hbInnerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#18002e" />
              <stop offset="45%" stopColor="#2c004f" />
              <stop offset="80%" stopColor="#1a0033" />
              <stop offset="100%" stopColor="#100021" />
            </linearGradient>

            {/* Right Cup Outer Metallic Magenta Bezel Ring */}
            <radialGradient id="rcBezelRingGrad" cx="35%" cy="32%" r="68%">
              <stop offset="0%" stopColor="#ff78e5" />
              <stop offset="30%" stopColor="#ff28c4" />
              <stop offset="65%" stopColor="#c40096" />
              <stop offset="90%" stopColor="#6e0078" />
              <stop offset="100%" stopColor="#3d004a" />
            </radialGradient>

            {/* Right Cup Recessed Driver Disc Face (Deep Royal Violet) */}
            <radialGradient id="rcDriverDiscGrad" cx="45%" cy="40%" r="58%">
              <stop offset="0%" stopColor="#5c0094" />
              <stop offset="65%" stopColor="#380061" />
              <stop offset="100%" stopColor="#1d0036" />
            </radialGradient>

            {/* Cushion Behind Right Cup (Deep Purple Cushion Layer) */}
            <linearGradient id="rcCushionBackGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7a14b8" />
              <stop offset="35%" stopColor="#4e0085" />
              <stop offset="80%" stopColor="#240045" />
              <stop offset="100%" stopColor="#140026" />
            </linearGradient>

            {/* 3D Embossed Music Note Gradient */}
            <linearGradient id="noteBodyGrad" x1="15%" y1="0%" x2="85%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="30%" stopColor="#faf2ff" />
              <stop offset="70%" stopColor="#eed0fc" />
              <stop offset="100%" stopColor="#cca2f0" />
            </linearGradient>

            {/* Left Cup Shell (Glossy Magenta Backing Casing) */}
            <linearGradient id="lcShellGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff57d4" />
              <stop offset="45%" stopColor="#e00eb5" />
              <stop offset="100%" stopColor="#750085" />
            </linearGradient>

            {/* Left Cup Plush Torus Cushion */}
            <radialGradient id="lcCushionGrad" cx="30%" cy="25%" r="75%">
              <stop offset="0%" stopColor="#a338f0" />
              <stop offset="35%" stopColor="#7203b8" />
              <stop offset="75%" stopColor="#3d006b" />
              <stop offset="100%" stopColor="#18002e" />
            </radialGradient>

            {/* Bottom Musical Wave Primary Ribbon Gradient */}
            <linearGradient id="wavePrimaryGrad" x1="0%" y1="0%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#b600c4" />
              <stop offset="25%" stopColor="#ff22cd" />
              <stop offset="55%" stopColor="#e500ad" />
              <stop offset="85%" stopColor="#7a00b8" />
              <stop offset="100%" stopColor="#4b0085" />
            </linearGradient>

            {/* Bottom Musical Wave Secondary Under-Wave */}
            <linearGradient id="waveSecondaryGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3a006b" />
              <stop offset="40%" stopColor="#6600a6" />
              <stop offset="80%" stopColor="#9602c7" />
              <stop offset="100%" stopColor="#3a0061" />
            </linearGradient>

            {/* Equalizer Block Glowing Gradient */}
            <linearGradient id="eqBlockGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffd6fb" />
              <stop offset="40%" stopColor="#ff54d3" />
              <stop offset="85%" stopColor="#db10b6" />
              <stop offset="100%" stopColor="#990090" />
            </linearGradient>

            {/* Lens Flare Radial Gradient */}
            <radialGradient id="flareGlintGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="25%" stopColor="#ffd8fd" stopOpacity="0.95" />
              <stop offset="60%" stopColor="#ff3df1" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#b100e8" stopOpacity="0" />
            </radialGradient>

            {/* ===================== SVG FILTERS ===================== */}

            {/* Soft Ambient Inner Bevel Shadow */}
            <filter id="innerDropShadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#310057" floodOpacity="0.4" />
            </filter>

            {/* Treble Clef 3D Drop Shadow */}
            <filter id="clefShadow" x="-25%" y="-25%" width="150%" height="150%">
              <feDropShadow dx="6" dy="11" stdDeviation="9" floodColor="#22003b" floodOpacity="0.6" />
            </filter>

            {/* Headphone Floating Cast Shadow */}
            <filter id="hpShadow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="8" dy="14" stdDeviation="12" floodColor="#16002b" floodOpacity="0.65" />
            </filter>

            {/* 3D Music Note Emboss Drop Shadow */}
            <filter id="noteEmboss" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="2" dy="3" stdDeviation="2" floodColor="#120021" floodOpacity="0.8" />
            </filter>

            {/* Equalizer Block Glow Filter */}
            <filter id="blockGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="0" stdDeviation="3.2" floodColor="#ff45d4" floodOpacity="0.65" />
            </filter>

            {/* Specular Flare Glow */}
            <filter id="flareBloom" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="5.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* ========================================================= */}
          {/* 1. MAIN OUTER CHASSIS (Deep Glossy 3D Purple Border)      */}
          {/* ========================================================= */}

          {/* Outer Frame Back Shadow & Body Layer */}
          <path
            d="M 100 135 
               C 150 98, 230 88, 320 90 
               C 420 95, 520 96, 620 90 
               C 700 84, 760 76, 820 62 
               C 860 52, 900 68, 930 110 
               C 965 155, 955 250, 950 350 
               C 945 450, 960 530, 920 586 
               C 885 632, 800 632, 680 631 
               C 520 631, 360 632, 240 631 
               C 140 630, 75 590, 66 505 
               C 58 410, 62 310, 70 230 
               C 76 175, 86 148, 100 135 Z"
            fill="url(#frameMainGrad)"
            filter="drop-shadow(0 20px 32px rgba(42,0,70,0.52))"
          />

          {/* Outer Glossy Rim Stroke Layer (Top & Side Highlights) */}
          <path
            d="M 100 135 
               C 150 98, 230 88, 320 90 
               C 420 95, 520 96, 620 90 
               C 700 84, 760 76, 820 62 
               C 860 52, 900 68, 930 110 
               C 965 155, 955 250, 950 350 
               C 945 450, 960 530, 920 586 
               C 885 632, 800 632, 680 631 
               C 520 631, 360 632, 240 631 
               C 140 630, 75 590, 66 505 
               C 58 410, 62 310, 70 230 
               C 76 175, 86 148, 100 135 Z"
            fill="none"
            stroke="url(#frameBevelGrad)"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* Bright Specular Razor Edge along Upper Frame Ridge */}
          <path
            d="M 120 128 
               C 190 92, 280 86, 380 92 
               C 480 96, 580 92, 680 84 
               C 750 78, 810 65, 850 58"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeOpacity="0.85"
            filter="drop-shadow(0 0 3px #ffb8fb)"
          />

          {/* ========================================================= */}
          {/* 2. INNER CONTENT AREA (Light Lavender & Pale Pink Glow)    */}
          {/* ========================================================= */}
          <g filter="url(#innerDropShadow)">
            {/* Inner Content Area Body Path */}
            <path
              d="M 180 146 
                 C 250 118, 360 116, 480 120 
                 C 600 124, 710 116, 790 125 
                 C 850 132, 875 168, 878 228 
                 C 882 308, 882 400, 876 468 
                 C 870 512, 825 522, 775 525 
                 C 680 530, 580 528, 480 526 
                 C 370 524, 275 488, 200 448 
                 C 162 422, 142 368, 145 288 
                 C 148 218, 160 160, 180 146 Z"
              fill="url(#innerCanvasGrad)"
            />

            {/* Inner Frame Recessed Lip Border */}
            <path
              d="M 180 146 
                 C 250 118, 360 116, 480 120 
                 C 600 124, 710 116, 790 125 
                 C 850 132, 875 168, 878 228 
                 C 882 308, 882 400, 876 468 
                 C 870 512, 825 522, 775 525 
                 C 680 530, 580 528, 480 526 
                 C 370 524, 275 488, 200 448 
                 C 162 422, 142 368, 145 288 
                 C 148 218, 160 160, 180 146 Z"
              fill="none"
              stroke="url(#innerLipGrad)"
              strokeWidth="4"
            />
          </g>

          {/* ========================================================= */}
          {/* 3. BOTTOM SCULPTED MUSICAL WAVES & FLUID RIBBONS          */}
          {/* ========================================================= */}
          <g id="bottomWavesLayer" className="anim-hp-waves">
            {/* Secondary Under-Wave (Deep Royal Violet Swell) */}
            <path
              d="M 120 540 
                 C 175 520, 235 524, 305 558 
                 C 385 596, 475 608, 565 594 
                 C 645 580, 715 540, 775 534 
                 C 845 528, 895 558, 920 584 
                 C 885 628, 795 632, 680 631 
                 C 520 631, 360 632, 240 631 
                 C 145 630, 105 590, 120 540 Z"
              fill="url(#waveSecondaryGrad)"
            />

            {/* Bottom Groove Ridge Reflection */}
            <path
              d="M 175 625 
                 C 340 628, 520 626, 700 625 
                 C 780 624, 850 618, 888 598"
              fill="none"
              stroke="#ff8ef7"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeOpacity="0.8"
            />

            {/* Primary Wave Ribbon (Vibrant Glossy Magenta Wave Crest) */}
            <path
              d="M 125 508 
                 C 165 482, 230 478, 285 498 
                 C 350 522, 415 568, 495 582 
                 C 555 592, 625 582, 695 548 
                 C 735 528, 760 518, 785 520 
                 C 755 542, 705 572, 645 595 
                 C 565 622, 465 615, 395 585 
                 C 335 560, 275 532, 215 528 
                 C 165 524, 134 538, 125 508 Z"
              fill="url(#wavePrimaryGrad)"
              filter="drop-shadow(0 6px 12px rgba(45,0,70,0.5))"
            />

            {/* High-Gloss Specular Crest Line along Primary Ribbon */}
            <path
              d="M 135 502 
                 C 180 480, 240 480, 295 500 
                 C 360 524, 420 570, 505 584 
                 C 565 594, 635 582, 700 546"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeOpacity="0.9"
              filter="drop-shadow(0 0 3px #ffa6f9)"
            />
          </g>

          {/* Specular Starburst Lens Flare at the Wave Apex (x≈626, y≈584) */}
          <g transform="translate(626, 584)">
            <g className="anim-hp-flare" filter="url(#flareBloom)">
              {/* Flare Central Glow */}
              <circle cx="0" cy="0" r="16" fill="url(#flareGlintGrad)" />
              <circle cx="0" cy="0" r="5" fill="#ffffff" />

              {/* Horizontal Flare Streak */}
              <line x1="-55" y1="0" x2="55" y2="0" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.9" />
              <line x1="-80" y1="0" x2="80" y2="0" stroke="#ff99f5" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.7" />

              {/* Diagonal Star Rays */}
              <line x1="-18" y1="-7" x2="18" y2="7" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.8" />
              <line x1="-18" y1="7" x2="18" y2="-7" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.8" />
            </g>
          </g>

          {/* ========================================================= */}
          {/* 4. BOTTOM-RIGHT EQUALIZER BARS CONSOLE                     */}
          {/* ========================================================= */}
          <g className="transition-all duration-300 ease-in-out">
            {/* Equalizer Base Panel Bevel in Bottom-Right Corner */}
            <path
              d="M 685 532 
                 C 735 520, 785 518, 835 520 
                 C 865 522, 890 536, 905 558 
                 C 912 578, 888 604, 848 608 
                 C 788 612, 718 608, 678 582 
                 C 668 562, 672 542, 685 532 Z"
              fill="#2b004d"
              opacity="0.45"
            />

            {/* 6 Equalizer Columns matching reference proportions */}
            {[
              { colX: 722, maxRows: 1 },
              { colX: 750, maxRows: 2 },
              { colX: 778, maxRows: 3 },
              { colX: 806, maxRows: 3 },
              { colX: 834, maxRows: 4 },
              { colX: 862, maxRows: 3 },
            ].map((col, colIdx) => {
              const currentActive = eqHeights[colIdx] ?? col.maxRows;
              const barWidth = 20;
              const barHeight = 11.5;
              const rowSpacing = 17;
              const baseY = 582; // Bottom row y-coordinate

              return (
                <g key={`eq-col-${colIdx}`} className={`anim-eq-col-${colIdx}`}>
                  {Array.from({ length: 4 }).map((_, rowIdx) => {
                    const blockY = baseY - rowIdx * rowSpacing;
                    const isActive = rowIdx < currentActive && rowIdx < col.maxRows;
                    if (!isActive) return null;

                    return (
                      <g key={`bar-${colIdx}-${rowIdx}`} filter="url(#blockGlow)">
                        {/* Equalizer Bar Pill / Rounded Rect */}
                        <rect
                          x={col.colX}
                          y={blockY}
                          width={barWidth}
                          height={barHeight}
                          rx={3.5}
                          ry={3.5}
                          fill="url(#eqBlockGrad)"
                          stroke="#ffffff"
                          strokeWidth="0.8"
                          strokeOpacity="0.8"
                          className="transition-all duration-500"
                        />
                        {/* Glossy Top Edge Highlight on Each Bar */}
                        <line
                          x1={col.colX + 3}
                          y1={blockY + 2.5}
                          x2={col.colX + barWidth - 3}
                          y2={blockY + 2.5}
                          stroke="#ffffff"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeOpacity="0.9"
                        />
                      </g>
                    );
                  })}
                </g>
              );
            })}
          </g>

          {/* ========================================================= */}
          {/* 5. BOTTOM-LEFT 3D TREBLE CLEF (1:1 EXACT CLOSE-UP REPLICA) */}
          {/* ========================================================= */}
          <g id="trebleClefGroup" className="anim-hp-clef-enter">
            <g className="anim-hp-clef-sway" filter="url(#clefShadow)">
              {/* 1. Central Vertical Spine / Stem (Cylindrical 3D Rod) */}
              <path
                d="M 152 245 L 150 600"
                fill="none"
                stroke="url(#clefMainGrad)"
                strokeWidth="14"
                strokeLinecap="round"
              />
              {/* Stem Specular Highlight */}
              <path
                d="M 150.5 245 L 148.5 600"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeOpacity="0.85"
              />

              {/* 2. Bottom Terminal Hook (Loops around under bulb) */}
              <path
                d="M 150 595 
                   C 150 622, 138 632, 115 632 
                   C 90 632, 70 610, 72 580 
                   C 74 555, 92 546, 102 558"
                fill="none"
                stroke="url(#clefMainGrad)"
                strokeWidth="14"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Bottom Hook Specular Highlight */}
              <path
                d="M 148 595 
                   C 148 618, 136 628, 115 628 
                   C 92 628, 73 608, 75 580"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeOpacity="0.9"
              />

              {/* 3. Terminal Spherical Bulb (Glossy Ball at x=102, y=566) */}
              <circle cx="102" cy="566" r="16.5" fill="url(#bulbSphereGrad)" />
              {/* Bulb Bright Specular Glint */}
              <ellipse
                cx="98"
                cy="561"
                rx="5"
                ry="3.5"
                transform="rotate(-30, 98, 561)"
                fill="#ffffff"
                opacity="0.95"
              />
              <circle cx="96" cy="559" r="1.8" fill="#ffffff" />

              {/* 4. Top Teardrop Loop (Apex at (172, 234)) */}
              <path
                d="M 152 340 
                   L 152 260 
                   C 152 240, 162 234, 172 234 
                   C 184 234, 196 248, 196 278 
                   C 196 312, 180 348, 152 382"
                fill="none"
                stroke="url(#clefMainGrad)"
                strokeWidth="13.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Top Loop Specular Highlight */}
              <path
                d="M 150.5 335 
                   L 150.5 260 
                   C 150.5 242, 160 236, 172 236 
                   C 182 236, 193 248, 193 278 
                   C 193 310, 178 345, 150.5 380"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeOpacity="0.92"
              />

              {/* 5. G-Clef Outer Big Bow (Belly on the left & Right loop) */}
              <path
                d="M 152 382 
                   C 120 405, 75 430, 42 465 
                   C 18 502, 32 542, 75 565 
                   C 112 585, 160 578, 195 550 
                   C 218 530, 226 495, 218 460 
                   C 210 435, 185 424, 152 432"
                fill="none"
                stroke="url(#clefMainGrad)"
                strokeWidth="15"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Outer Belly Specular Highlight */}
              <path
                d="M 148 386 
                   C 118 408, 73 433, 40 467 
                   C 17 504, 30 540, 72 562 
                   C 108 581, 155 574, 190 546 
                   C 212 527, 220 493, 212 460 
                   C 205 437, 182 427, 152 434"
                fill="none"
                stroke="url(#clefSpecularGrad)"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* 6. G-Clef Inner Crescent Sickle Hook (Exact Tapered Hook) */}
              <path
                d="M 152 432 
                   C 134 438, 115 455, 108 480 
                   C 102 505, 110 522, 120 530 
                   C 126 534, 134 530, 134 522 
                   C 134 510, 125 498, 124 485 
                   C 122 465, 136 448, 156 440"
                fill="url(#clefMainGrad)"
              />
              {/* Crescent Highlight */}
              <path
                d="M 150 434 
                   C 132 440, 114 456, 107 480 
                   C 102 502, 108 518, 118 526"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeOpacity="0.9"
              />
            </g>
          </g>

          {/* Spatial Acoustic Audio Wave Rings radiating from Right Ear Cup */}
          <g id="acousticSoundRings" pointerEvents="none">
            <circle cx="895" cy="218" r="62" fill="none" stroke="#ff4adb" strokeWidth="2.2" opacity="0" className="anim-sound-ring-1" />
            <circle cx="895" cy="218" r="62" fill="none" stroke="#d92bff" strokeWidth="1.8" opacity="0" className="anim-sound-ring-2" />
            <circle cx="895" cy="218" r="62" fill="none" stroke="#ff80ec" strokeWidth="1.5" opacity="0" className="anim-sound-ring-3" />
          </g>

          {/* ========================================================= */}
          {/* 6. TOP-RIGHT PREMIUM OVER-EAR HEADPHONES (EXACT REPLICA)  */}
          {/* ========================================================= */}
          <g id="headphoneGroup" className="anim-hp-headphone-enter">
            <g className="anim-hp-headphone-beat transition-transform duration-700 hover:scale-[1.02]" filter="url(#hpShadow)">

              {/* Headband Under-Padding (Dark Violet Arc with Realistic Physical Thickness) */}
              <path
                d="M 755 125 
                 C 772 58, 830 22, 895 42 
                 C 922 52, 940 82, 948 120 
                 L 932 126 
                 C 925 92, 908 65, 885 54 
                 C 830 32, 775 68, 760 128 Z"
                fill="url(#hbInnerGrad)"
              />

              {/* Headband Metallic Outer Strap (Glossy Magenta & Royal Purple) */}
              <path
                d="M 746 122 
                 C 766 46, 825 8, 900 32 
                 C 930 42, 952 76, 960 120 
                 L 944 126 
                 C 936 85, 916 54, 890 44 
                 C 825 20, 768 56, 752 128 Z"
                fill="url(#hbOuterGrad)"
              />

              {/* Headband Razor-Thin Specular Rim Highlight along Top Ridge */}
              <path
                d="M 750 118 
                 C 770 44, 828 10, 900 34 
                 C 928 44, 948 76, 958 118"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeOpacity="0.9"
                filter="drop-shadow(0 0 3px #ffb5f9)"
              />

              {/* Right Telescoping Slider Collar */}
              <rect
                x="938"
                y="118"
                width="18"
                height="15"
                rx="3.5"
                transform="rotate(-18, 947, 125)"
                fill="#e615be"
                stroke="#ff9ef5"
                strokeWidth="1.2"
              />

              {/* Right Curved Fork Bracket (Wrapping down to Right Cup Pivot) */}
              <path
                d="M 945 132 
                 C 948 152, 936 172, 922 188 
                 C 916 194, 908 198, 903 200"
                fill="none"
                stroke="#e012b8"
                strokeWidth="12"
                strokeLinecap="round"
              />
              <path
                d="M 945 132 
                 C 948 152, 936 172, 922 188 
                 C 916 194, 908 198, 903 200"
                fill="none"
                stroke="#ffa4f0"
                strokeWidth="3"
                strokeLinecap="round"
                strokeOpacity="0.85"
              />

              {/* Left Cup Hinge Collar */}
              <rect
                x="748"
                y="112"
                width="16"
                height="14"
                rx="3.5"
                transform="rotate(20, 756, 119)"
                fill="#e615be"
                stroke="#ff9ef5"
                strokeWidth="1.2"
              />

              {/* Left Ear Cup (Tilted in 3/4 Perspective at (762, 184)) */}
              <g transform="translate(762, 184) rotate(18)">
                {/* Outer Shell Casing (Glossy Magenta Backing Disc) */}
                <ellipse cx="-16" cy="0" rx="30" ry="50" fill="url(#lcShellGrad)" stroke="#ff9ef5" strokeWidth="1.6" />
                <path
                  d="M -22 -40 C -32 -15, -32 15, -22 40"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeOpacity="0.85"
                />

                {/* Cushion Base Drop Shadow */}
                <ellipse cx="2" cy="0" rx="28" ry="46" fill="#18002e" />

                {/* Plush Torus Ear Cushion */}
                <ellipse cx="5" cy="0" rx="26" ry="44" fill="url(#lcCushionGrad)" stroke="#ff65dc" strokeWidth="1.6" />

                {/* Cushion Specular Reflection Arc */}
                <path
                  d="M -10 -36 C -18 -12, -18 12, -10 36"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeOpacity="0.8"
                />

                {/* Hollow Ear Cavity (Dark Donut Hole) */}
                <ellipse cx="12" cy="0" rx="13" ry="24" fill="#0e001c" stroke="#350058" strokeWidth="2" />
              </g>

              {/* Right Ear Cup (Facing Viewer at (895, 218), Tilted at -18 deg) */}
              <g transform="translate(895, 218) rotate(-18)">
                {/* Cushion Backing (Visible on Left & Bottom as Dark Purple Ring) */}
                <ellipse cx="-4" cy="5" rx="58" ry="62" fill="url(#rcCushionBackGrad)" />
                <path
                  d="M -50 -18 C -60 12, -48 50, -22 60"
                  fill="none"
                  stroke="#891fd4"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeOpacity="0.75"
                />

                {/* Outer Metallic Magenta Bezel Ring (Thick 3D Bevelled Ring) */}
                <circle cx="0" cy="0" r="56" fill="url(#rcBezelRingGrad)" stroke="#ffa6f2" strokeWidth="2" />

                {/* High-Gloss Specular Rim along Top/Left of Bezel Ring */}
                <path
                  d="M -42 -36 A 54 54 0 0 1 42 -36"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeOpacity="0.95"
                  filter="drop-shadow(0 0 3px #ffc5f9)"
                />

                {/* Stepped Inner Chamfer Rim */}
                <circle cx="0" cy="0" r="44" fill="none" stroke="#ff82e6" strokeWidth="2.2" />
                <circle cx="0" cy="0" r="42" fill="none" stroke="#8c0080" strokeWidth="1.2" />

                {/* Recessed Driver Disc Face (Deep Purple Circular Disc) */}
                <circle cx="0" cy="0" r="40" fill="url(#rcDriverDiscGrad)" />
                {/* Inner Cavity Inset Shadow */}
                <circle cx="0" cy="0" r="40" fill="none" stroke="#16002b" strokeWidth="2.5" opacity="0.65" />

                {/* Embossed 3D Beamed Musical Note (♫) */}
                <g className="anim-hp-note" filter="url(#noteEmboss)">
                  {/* Left Note Head (Plump Rounded Ellipse) */}
                  <ellipse cx="-16" cy="18" rx="9" ry="7.2" transform="rotate(-15, -16, 18)" fill="url(#noteBodyGrad)" stroke="#ffffff" strokeWidth="0.8" />

                  {/* Right Note Head (Plump Rounded Ellipse) */}
                  <ellipse cx="16" cy="14" rx="9" ry="7.2" transform="rotate(-15, 16, 14)" fill="url(#noteBodyGrad)" stroke="#ffffff" strokeWidth="0.8" />

                  {/* Left Vertical Stem (Thick Rounded Rod) */}
                  <rect x="-10" y="-14" width="4.8" height="32" rx="2.4" fill="url(#noteBodyGrad)" />

                  {/* Right Vertical Stem (Thick Rounded Rod) */}
                  <rect x="22" y="-18" width="4.8" height="32" rx="2.4" fill="url(#noteBodyGrad)" />

                  {/* Top Connecting Crossbar Beam */}
                  <polygon points="-12,-14 28,-18 28,-10 -12,-6" fill="url(#noteBodyGrad)" />

                  {/* Specular Highlights on the Musical Note */}
                  {/* Left Head Specular Dot */}
                  <circle cx="-18" cy="16" r="2.2" fill="#ffffff" />
                  {/* Right Head Specular Dot */}
                  <circle cx="14" cy="12" r="2.2" fill="#ffffff" />
                  {/* Top Beam Specular Edge */}
                  <line x1="-10" y1="-13" x2="26" y2="-17" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.95" />
                </g>
              </g>
            </g>
          </g>
        </svg>

        {/* ========================================================= */}
        {/* 7. EDITABLE REACT HTML CONTENT LAYER (Spacious Safe Zone) */}
        {/* ========================================================= */}
        <div
          className="absolute z-10 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8 pointer-events-auto"
          style={{
            top: '20%',
            left: '21%',
            width: '58%',
            height: '56%',
          }}
        >
          {children ? (
            children
          ) : (
            <>
              {/* Main Headline */}
              <h1
                className="font-extrabold text-[#2a004c] tracking-tight leading-tight sm:leading-snug mb-1.5 sm:mb-3 md:mb-4 max-w-[95%] select-text anim-hp-heading"
                style={{
                  fontSize: 'clamp(0.85rem, 2.7vw, 2.35rem)',
                }}
              >
                {title}
              </h1>

              {/* Descriptive Body Paragraph */}
              <p
                className="text-purple-950/85 font-medium leading-relaxed max-w-[94%] sm:max-w-[88%] select-text anim-hp-desc"
                style={{
                  fontSize: 'clamp(0.62rem, 1.35vw, 1.12rem)',
                  lineHeight: '1.55',
                }}
              >
                {description}
              </p>
            </>
          )}
        </div>

      </div>
    </div>
  );
}


/* =========================================================================
   15. UPCOMING MUSIC RELEASES SECTION COMPONENT
   ========================================================================= */
export const UpcomingMusicReleases = () => {
  const { showcase } = upcomingMusicReleasesData;

  return (
    <section 
      id="upcoming-music-releases"
      aria-label="Upcoming Music Releases" 
      className="relative w-full max-w-[1620px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 mt-8 sm:mt-12 lg:mt-16 select-none scroll-mt-24"
    >
      {/* Signature Section Header */}
      <SectionHeader 
        titlePrefix={upcomingMusicReleasesData.titlePrefix} 
        titleAccent={upcomingMusicReleasesData.titleAccent} 
        subtitle={upcomingMusicReleasesData.subtitle} 
      />

      {/* 3D Music-Themed Frame Showcase with Headphones & Treble Clef */}
      <div className="relative w-full">
        <MusicContentFrameShowcase 
          title={showcase.title}
          description={showcase.description}
        />
      </div>
    </section>
  );
};

export default UpcomingMusicReleases;
