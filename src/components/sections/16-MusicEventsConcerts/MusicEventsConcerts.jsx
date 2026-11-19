/* ─────────────────────────────────────────────────────────────────────────────
   MusicEventsConcerts.jsx
   Concert Stage Illustration - 100% Vector SVG + CSS + Tailwind
   Accurately modeled to match professional concert stage rigging:
   - 3D Metallic chrome/steel square-box truss structure with cylindrical tubes
   - 3 Blinder light panels (Left, Center, Right - 12 warm amber bulbs each)
   - Dual speaker towers with audio waveform display & neon magenta halo subwoofers
   - Dual inner mini-speaker column stacks
   - 8 Angled moving head spotlights with volumetric atmospheric haze beams
   - Center LED video wall with live audio spectrum dot-matrix equalizer
   - Multi-tier stage platform with dual neon glow lips & 7 wedge monitors
   - High-gloss arena floor with multi-color specular light reflections
───────────────────────────────────────────────────────────────────────────── */

import React, { useState, useEffect } from 'react';
import { SectionHeader } from '../../common/SectionHeader';
import { musicEventsConcertsData } from './MusicEventsConcertsData';

/* ─────────────────────────────────────────────
   1. CSS Animations & Standalone Base Styles
───────────────────────────────────────────── */
const AnimationStyles = () => (
  <style>{`
    @keyframes stage-reload-blink {
      0% {
        opacity: 0;
      }
      10% {
        opacity: 0.85;
      }
      22% {
        opacity: 0.10;
      }
      38% {
        opacity: 0.98;
      }
      52% {
        opacity: 0.20;
      }
      70% {
        opacity: 1;
      }
      84% {
        opacity: 0.80;
      }
      100% {
        opacity: 1;
      }
    }

    .stage-reload-light {
      animation: stage-reload-blink 1.9s ease-in-out forwards;
    }

    @keyframes sub-halo-pulse {
      0%, 100% {
        opacity: 0.85;
        filter: drop-shadow(0 0 6px #ff00aa) drop-shadow(0 0 14px #e000ff);
      }
      50% {
        opacity: 1;
        filter: drop-shadow(0 0 12px #ff00cc) drop-shadow(0 0 28px #d000ff) drop-shadow(0 0 42px #aa00ff);
      }
    }

    @keyframes wave-screen-glow {
      0%, 100% { opacity: 0.88; filter: drop-shadow(0 0 4px #e040fb); }
      50%       { opacity: 1;    filter: drop-shadow(0 0 10px #ff00bb) drop-shadow(0 0 20px #d000ff); }
    }

    @keyframes blinder-heat-pulse {
      0%, 100% { opacity: 0.90; filter: drop-shadow(0 0 4px #ffaa00) brightness(1.0); }
      50%       { opacity: 1;    filter: drop-shadow(0 0 10px #ffbb00) drop-shadow(0 0 20px #ff7700) brightness(1.15); }
    }

    @keyframes blinder-on-off {
      0%, 18% {
        opacity: 0;
      }
      20%, 48% {
        opacity: 1;
      }
      50%, 68% {
        opacity: 0;
      }
      70%, 98% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }

    @keyframes golden-ray-pulse {
      0%, 100% { opacity: 0.22; }
      50%       { opacity: 0.35; }
    }

    @keyframes beam-haze-drift {
      0%, 100% { opacity: 0.22; }
      50%       { opacity: 0.35; }
    }

    @keyframes beam-haze-drift-alt {
      0%, 100% { opacity: 0.30; }
      50%       { opacity: 0.18; }
    }

    @keyframes stage-neon-pulse {
      0%, 100% { filter: drop-shadow(0 0 4px #ff00aa) drop-shadow(0 0 10px #e000ff); opacity: 0.92; }
      50%       { filter: drop-shadow(0 0 8px #ff00cc) drop-shadow(0 0 22px #e000ff) drop-shadow(0 0 35px #9900ff); opacity: 1; }
    }

    @keyframes woofer-sub-thump {
      0%, 100% { transform: scale(1); }
      16%       { transform: scale(1.07); }
      32%       { transform: scale(0.97); }
      48%       { transform: scale(1.03); }
    }

    @keyframes woofer-mid-thump {
      0%, 100% { transform: scale(1); }
      20%       { transform: scale(1.05); }
      40%       { transform: scale(0.98); }
      58%       { transform: scale(1.02); }
    }

    /* ── Continuous Cross-Screen Marquee Ticker ── */
    @keyframes marquee-scroll-loop {
      0% {
        transform: translateX(0px);
      }
      100% {
        transform: translateX(-240px);
      }
    }

    .blinder-strobe-lights {
      animation: blinder-on-off 1.12s linear infinite;
    }

    .marquee-track-left {
      animation: marquee-scroll-loop 5.5s linear infinite;
    }

    .marquee-track-right {
      animation: marquee-scroll-loop 5.5s linear infinite;
      animation-delay: -2.75s;
    }

    /* ── Mobile View: Hide tiny in-SVG screen text and show dedicated screen below ── */
    @media (max-width: 767px) {
      .svg-center-screen-content {
        display: none !important;
      }
    }

    @keyframes marquee-mobile {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-50%);
      }
    }

    @keyframes spotlight-mobile-blink {
      0%, 49% {
        opacity: 1;
        visibility: visible;
      }
      50%, 100% {
        opacity: 0;
        visibility: hidden;
      }
    }

    @media (max-width: 767px) {
      .theatrical-spotlight-lens,
      .theatrical-spotlight-beam {
        animation: spotlight-mobile-blink 0.6s steps(1, end) infinite !important;
      }
      .theatrical-spotlight-unlit {
        display: inline !important;
      }
    }

    @media (min-width: 768px) {
      .theatrical-spotlight-beam {
        opacity: 1 !important;
        display: inline !important;
      }
      .theatrical-spotlight-lens {
        opacity: 1 !important;
        display: inline !important;
        animation: stage-reload-blink 1.9s ease-in-out forwards;
      }
      .theatrical-spotlight-unlit {
        display: none !important;
      }
    }

    .concert-stage-wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      overflow-x: hidden;
    }

    .concert-stage-svg {
      max-width: 100%;
      width: 100%;
      height: auto;
      border-radius: 1rem;
      overflow: hidden;
      filter: drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15));
      user-select: none;
    }

    /* ── Mobile Concert LED Screen ── */
    .mobile-led-screen-wrapper {
      width: 100%;
      padding: 0.75rem 0.75rem 1.5rem 0.75rem;
      display: block;
      max-width: 480px;
      margin-left: auto;
      margin-right: auto;
      user-select: none;
      box-sizing: border-box;
    }

    @media (min-width: 768px) {
      .mobile-led-screen-wrapper {
        display: none !important;
      }
    }

    .mobile-led-card {
      position: relative;
      border-radius: 1rem;
      background-color: #040713;
      border: 2px solid #1E293B;
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2), 0 0 20px rgba(168, 85, 247, 0.25);
      overflow: hidden;
      padding: 1.25rem;
      text-align: center;
      box-sizing: border-box;
    }

    .mobile-led-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
      background-color: #080E1C;
      border: 1px solid rgba(56, 189, 248, 0.6);
      box-shadow: 0 0 10px rgba(56, 189, 248, 0.3);
    }

    .mobile-led-badge-dot {
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 9999px;
      background-color: #ef4444;
      animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }

    .mobile-led-badge-text {
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.2em;
      color: #e2e8f0;
      text-transform: uppercase;
      font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
    }

    .mobile-led-heading {
      font-size: 1.75rem;
      font-weight: 900;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-top: 0.625rem;
      margin-bottom: 0.25rem;
      color: transparent;
      background-clip: text;
      -webkit-background-clip: text;
      background-image: linear-gradient(to right, #38bdf8, #f472b6, #c084fc);
      filter: drop-shadow(0 0 14px rgba(244, 114, 182, 0.7));
      font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
    }

    .mobile-led-divider {
      width: 9rem;
      height: 2px;
      background: linear-gradient(to right, transparent, #ec4899, transparent);
      margin: 0.5rem auto;
      border-radius: 9999px;
    }

    .mobile-led-desc {
      color: #e2e8f0;
      font-size: 0.825rem;
      font-weight: 600;
      letter-spacing: 0.025em;
      line-height: 1.6;
      max-width: 320px;
      margin: 0 auto;
      font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
    }

    .mobile-led-subdesc {
      color: #94a3b8;
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.05em;
      margin-top: 0.25rem;
      font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
    }

    .mobile-led-marquee-container {
      width: 100%;
      margin-top: 0.75rem;
      padding-top: 0.625rem;
      border-top: 1px solid rgba(30, 41, 59, 0.8);
      overflow: hidden;
      position: relative;
    }

    .mobile-led-marquee-content {
      white-space: nowrap;
      display: flex;
      width: max-content;
      animation: marquee-mobile 10s linear infinite;
    }

    .mobile-led-marquee-item {
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 0.1em;
      color: transparent;
      background-clip: text;
      -webkit-background-clip: text;
      background-image: linear-gradient(to right, #22d3ee, #f472b6, #c084fc);
      padding-right: 1.5rem;
      font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
    }
  `}</style>
);

/* ─────────────────────────────────────────────
   2. SVG Gradients, Filters & Definitions
───────────────────────────────────────────── */
const StageDefinitions = () => (
  <defs>
    {/* ── Sky & Atmosphere Gradients ── */}
    <linearGradient id="concertSkyGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#E4F4FF" />
      <stop offset="14%" stopColor="#C4E7FF" />
      <stop offset="32%" stopColor="#72BCF6" />
      <stop offset="55%" stopColor="#2C72CA" />
      <stop offset="78%" stopColor="#123678" />
      <stop offset="100%" stopColor="#08183E" />
    </linearGradient>

    <radialGradient id="skyCenterGlow" cx="50%" cy="38%" r="48%">
      <stop offset="0%" stopColor="#88C8FF" stopOpacity="0.45" />
      <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.15" />
      <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0" />
    </radialGradient>

    <radialGradient id="stageBackdropGlow" cx="50%" cy="52%" r="40%">
      <stop offset="0%" stopColor="#4338CA" stopOpacity="0.55" />
      <stop offset="60%" stopColor="#1E1B4B" stopOpacity="0.25" />
      <stop offset="100%" stopColor="#0F172A" stopOpacity="0" />
    </radialGradient>

    {/* ── 3D Chrome Metallic Truss Gradients ── */}
    <linearGradient id="chromeTubeH" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#4A5666" />
      <stop offset="18%" stopColor="#95A7BC" />
      <stop offset="38%" stopColor="#FFFFFF" />
      <stop offset="56%" stopColor="#D2DFEC" />
      <stop offset="78%" stopColor="#7B8D9F" />
      <stop offset="100%" stopColor="#3C4654" />
    </linearGradient>

    <linearGradient id="chromeTubeV" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stopColor="#4A5666" />
      <stop offset="18%" stopColor="#95A7BC" />
      <stop offset="38%" stopColor="#FFFFFF" />
      <stop offset="56%" stopColor="#D2DFEC" />
      <stop offset="78%" stopColor="#7B8D9F" />
      <stop offset="100%" stopColor="#3C4654" />
    </linearGradient>

    <linearGradient id="chromeTubeDiagL" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#4A5666" />
      <stop offset="30%" stopColor="#FFFFFF" />
      <stop offset="70%" stopColor="#8A9BB0" />
      <stop offset="100%" stopColor="#3A4654" />
    </linearGradient>

    <linearGradient id="chromeTubeDiagR" x1="1" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#4A5666" />
      <stop offset="30%" stopColor="#FFFFFF" />
      <stop offset="70%" stopColor="#8A9BB0" />
      <stop offset="100%" stopColor="#3A4654" />
    </linearGradient>

    <radialGradient id="jointPinGrad" cx="35%" cy="32%" r="55%">
      <stop offset="0%" stopColor="#FFFFFF" />
      <stop offset="50%" stopColor="#B2C2D4" />
      <stop offset="100%" stopColor="#4A5868" />
    </radialGradient>

    {/* ── Truss Light Sheen (Colored Specular Reflection) ── */}
    <linearGradient id="trussSheenPink" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#FF94E0" stopOpacity="0.6" />
      <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.8" />
      <stop offset="100%" stopColor="#8A2BE2" stopOpacity="0.4" />
    </linearGradient>

    <linearGradient id="trussSheenCyan" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#70F0FF" stopOpacity="0.6" />
      <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.8" />
      <stop offset="100%" stopColor="#0077B6" stopOpacity="0.4" />
    </linearGradient>

    {/* ── Blinder Fixture & Bulb Gradients ── */}
    <linearGradient id="blinderHousing" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#1C212B" />
      <stop offset="50%" stopColor="#0D1017" />
      <stop offset="100%" stopColor="#05070B" />
    </linearGradient>

    <radialGradient id="bulbAmberCore" cx="42%" cy="40%" r="55%">
      <stop offset="0%" stopColor="#FFFFFF" />
      <stop offset="25%" stopColor="#FFF3B0" />
      <stop offset="55%" stopColor="#FFB300" />
      <stop offset="85%" stopColor="#FF6F00" />
      <stop offset="100%" stopColor="#8F3200" />
    </radialGradient>

    <radialGradient id="bulbWarmAura" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#FFB703" stopOpacity="0.8" />
      <stop offset="50%" stopColor="#FB8500" stopOpacity="0.3" />
      <stop offset="100%" stopColor="#D9480F" stopOpacity="0" />
    </radialGradient>

    {/* ── Speaker Cabinet & Driver Gradients ── */}
    <linearGradient id="speakerCabGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stopColor="#0D111A" />
      <stop offset="20%" stopColor="#182030" />
      <stop offset="50%" stopColor="#1D2638" />
      <stop offset="80%" stopColor="#182030" />
      <stop offset="100%" stopColor="#0D111A" />
    </linearGradient>

    <linearGradient id="speakerBevel" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#475569" />
      <stop offset="50%" stopColor="#1E293B" />
      <stop offset="100%" stopColor="#0F172A" />
    </linearGradient>

    <radialGradient id="wooferRimGrad" cx="48%" cy="46%" r="52%">
      <stop offset="0%" stopColor="#3B4252" />
      <stop offset="70%" stopColor="#212631" />
      <stop offset="100%" stopColor="#0E1117" />
    </radialGradient>

    <radialGradient id="wooferConeGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#2B0E3D" />
      <stop offset="35%" stopColor="#1A0A26" />
      <stop offset="70%" stopColor="#100619" />
      <stop offset="100%" stopColor="#08020D" />
    </radialGradient>

    <radialGradient id="dustCapGrad" cx="38%" cy="35%" r="55%">
      <stop offset="0%" stopColor="#A855F7" stopOpacity="0.95" />
      <stop offset="45%" stopColor="#6B21A8" stopOpacity="1" />
      <stop offset="100%" stopColor="#2E1065" stopOpacity="1" />
    </radialGradient>

    <radialGradient id="dustCapSmall" cx="38%" cy="35%" r="55%">
      <stop offset="0%" stopColor="#C084FC" stopOpacity="0.9" />
      <stop offset="50%" stopColor="#7E22CE" stopOpacity="1" />
      <stop offset="100%" stopColor="#3B0764" stopOpacity="1" />
    </radialGradient>

    {/* ── Audio Waveform Display Gradients ── */}
    <linearGradient id="waveScreenBg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#0A0218" />
      <stop offset="100%" stopColor="#030008" />
    </linearGradient>

    <linearGradient id="waveGlowGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stopColor="#7C3AED" />
      <stop offset="30%" stopColor="#EC4899" />
      <stop offset="50%" stopColor="#FFFFFF" />
      <stop offset="70%" stopColor="#EC4899" />
      <stop offset="100%" stopColor="#7C3AED" />
    </linearGradient>

    {/* ── Spotlight Lenses & Beams ── */}
    <radialGradient id="lensCyan" cx="38%" cy="35%" r="55%">
      <stop offset="0%" stopColor="#FFFFFF" />
      <stop offset="30%" stopColor="#B3F5FF" />
      <stop offset="70%" stopColor="#00E5FF" />
      <stop offset="100%" stopColor="#007799" />
    </radialGradient>

    <radialGradient id="lensMagenta" cx="38%" cy="35%" r="55%">
      <stop offset="0%" stopColor="#FFFFFF" />
      <stop offset="30%" stopColor="#FFB3DE" />
      <stop offset="70%" stopColor="#FF0080" />
      <stop offset="100%" stopColor="#99004D" />
    </radialGradient>

    {/* ── Soft Volumetric Golden Ray Gradient ── */}
    <linearGradient id="goldenRayVolumetric" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#FFE082" stopOpacity="0.45" />
      <stop offset="25%" stopColor="#FFB300" stopOpacity="0.28" />
      <stop offset="70%" stopColor="#FF8F00" stopOpacity="0.14" />
      <stop offset="100%" stopColor="#FF6F00" stopOpacity="0.02" />
    </linearGradient>

    <radialGradient id="goldenLensShine" cx="38%" cy="35%" r="55%">
      <stop offset="0%" stopColor="#FFFFFF" />
      <stop offset="25%" stopColor="#FFF9C4" />
      <stop offset="55%" stopColor="#FFC107" />
      <stop offset="85%" stopColor="#FF8F00" />
      <stop offset="100%" stopColor="#BF360C" />
    </radialGradient>

    <linearGradient id="beamGradCyan" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#00F5FF" stopOpacity="0.50" />
      <stop offset="25%" stopColor="#00CCFF" stopOpacity="0.30" />
      <stop offset="75%" stopColor="#0088FF" stopOpacity="0.15" />
      <stop offset="100%" stopColor="#0044AA" stopOpacity="0.02" />
    </linearGradient>

    <linearGradient id="beamGradMagenta" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#FF00A0" stopOpacity="0.48" />
      <stop offset="25%" stopColor="#EC4899" stopOpacity="0.30" />
      <stop offset="75%" stopColor="#C026D3" stopOpacity="0.15" />
      <stop offset="100%" stopColor="#7E22CE" stopOpacity="0.02" />
    </linearGradient>

    {/* ── Stage Platform & Edge Lighting ── */}
    <linearGradient id="stageDeckSurface" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#252D3F" />
      <stop offset="40%" stopColor="#171C28" />
      <stop offset="100%" stopColor="#0F131D" />
    </linearGradient>

    <linearGradient id="stageFasciaGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#121722" />
      <stop offset="45%" stopColor="#090C12" />
      <stop offset="100%" stopColor="#040508" />
    </linearGradient>

    <linearGradient id="stageNeonLip" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stopColor="#FF0080" stopOpacity="0.8" />
      <stop offset="12%" stopColor="#FF00BB" stopOpacity="1" />
      <stop offset="50%" stopColor="#FF66D9" stopOpacity="1" />
      <stop offset="88%" stopColor="#FF00BB" stopOpacity="1" />
      <stop offset="100%" stopColor="#FF0080" stopOpacity="0.8" />
    </linearGradient>

    <linearGradient id="stageNeonBase" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stopColor="#8A2BE2" stopOpacity="0.8" />
      <stop offset="15%" stopColor="#D946EF" stopOpacity="1" />
      <stop offset="50%" stopColor="#FF00AA" stopOpacity="1" />
      <stop offset="85%" stopColor="#D946EF" stopOpacity="1" />
      <stop offset="100%" stopColor="#8A2BE2" stopOpacity="0.8" />
    </linearGradient>

    {/* ── Filters for Bloom, Glow & Soft Light ── */}
    <filter id="beamBlur" x="-20%" y="-10%" width="140%" height="120%">
      <feGaussianBlur stdDeviation="4.5" />
    </filter>

    <filter id="neonGlowPink" x="-50%" y="-100%" width="200%" height="300%">
      <feGaussianBlur stdDeviation="4" result="blur1" />
      <feGaussianBlur stdDeviation="8" result="blur2" />
      <feMerge>
        <feMergeNode in="blur2" />
        <feMergeNode in="blur1" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    {/* Compact Circular Sound Wave Glow Filters */}
    <filter id="compactWaveGlowPink" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="2.2" result="blur1" />
      <feGaussianBlur in="SourceGraphic" stdDeviation="4.5" result="blur2" />
      <feMerge>
        <feMergeNode in="blur2" />
        <feMergeNode in="blur1" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    <filter id="compactWaveGlowViolet" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="1.8" result="blur1" />
      <feGaussianBlur in="SourceGraphic" stdDeviation="3.6" result="blur2" />
      <feMerge>
        <feMergeNode in="blur2" />
        <feMergeNode in="blur1" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    <filter id="blinderGlow" x="-60%" y="-60%" width="220%" height="220%">
      <feGaussianBlur stdDeviation="3.5" result="glow" />
      <feMerge>
        <feMergeNode in="glow" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    {/* ── Center LED Screen Content Gradients & Glow ── */}
    <linearGradient id="ledHeadingGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stopColor="#38BDF8" />
      <stop offset="25%" stopColor="#FFFFFF" />
      <stop offset="50%" stopColor="#F472B6" />
      <stop offset="75%" stopColor="#E879F9" />
      <stop offset="100%" stopColor="#818CF8" />
    </linearGradient>

    <linearGradient id="ledLineGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stopColor="#38BDF8" stopOpacity="0" />
      <stop offset="20%" stopColor="#38BDF8" stopOpacity="0.8" />
      <stop offset="50%" stopColor="#F472B6" stopOpacity="1" />
      <stop offset="80%" stopColor="#818CF8" stopOpacity="0.8" />
      <stop offset="100%" stopColor="#818CF8" stopOpacity="0" />
    </linearGradient>

    <filter id="ledTextGlow" x="-20%" y="-30%" width="140%" height="160%">
      <feGaussianBlur stdDeviation="3" result="glow" />
      <feMerge>
        <feMergeNode in="glow" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    {/* ── Marquee Screen Text Gradient & Glow ── */}
    <linearGradient id="marqueeTextGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stopColor="#00F5FF" />
      <stop offset="30%" stopColor="#FFFFFF" />
      <stop offset="70%" stopColor="#FF00BB" />
      <stop offset="100%" stopColor="#C084FC" />
    </linearGradient>

    <filter id="marqueeGlow" x="-30%" y="-40%" width="160%" height="180%">
      <feGaussianBlur stdDeviation="2.2" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    {/* ── LED Screen Dot Matrix Pattern ── */}
    <pattern id="ledDotPattern" width="6" height="6" patternUnits="userSpaceOnUse">
      <circle cx="3" cy="3" r="0.9" fill="#1E293B" opacity="0.65" />
    </pattern>
  </defs>
);

/* ─────────────────────────────────────────────
   3. BoxTrussSection (Horizontal / Vertical)
   Renders double cylindrical chords + X-braces
───────────────────────────────────────────── */
const HorizontalTruss = ({ x, y, width, height = 38, segments = 8, tint = 'none' }) => {
  const segW = width / segments;
  const tubeR = 4.5;
  const chordGrad = tint === 'pink' ? 'url(#trussSheenPink)' : tint === 'cyan' ? 'url(#trussSheenCyan)' : 'url(#chromeTubeH)';

  return (
    <g>
      {/* Structural X-Braces */}
      {Array.from({ length: segments }).map((_, i) => {
        const x1 = x + i * segW;
        const x2 = x1 + segW;
        return (
          <g key={i}>
            <line x1={x1} y1={y + 5} x2={x2} y2={y + height - 5} stroke="url(#chromeTubeDiagL)" strokeWidth="2.8" strokeLinecap="round" opacity="0.85" />
            <line x1={x1} y1={y + height - 5} x2={x2} y2={y + 5} stroke="url(#chromeTubeDiagR)" strokeWidth="2.8" strokeLinecap="round" opacity="0.85" />
            {/* Center joint node pin */}
            <circle cx={(x1 + x2) / 2} cy={y + height / 2} r="2.4" fill="url(#jointPinGrad)" stroke="#222A36" strokeWidth="0.6" />
            {/* Vertical intermediate divider strut */}
            {i > 0 && (
              <line x1={x1} y1={y + 4} x2={x1} y2={y + height - 4} stroke="url(#chromeTubeV)" strokeWidth="2.6" opacity="0.75" />
            )}
          </g>
        );
      })}

      {/* Top Main Chord (3D Round Tube) */}
      <rect x={x} y={y} width={width} height={tubeR * 2} rx={tubeR} fill={chordGrad} stroke="#2E3846" strokeWidth="0.8" />
      <rect x={x + 2} y={y + 1.2} width={width - 4} height="1.8" rx="0.9" fill="#FFFFFF" opacity="0.7" />

      {/* Bottom Main Chord (3D Round Tube) */}
      <rect x={x} y={y + height - tubeR * 2} width={width} height={tubeR * 2} rx={tubeR} fill={chordGrad} stroke="#2E3846" strokeWidth="0.8" />
      <rect x={x + 2} y={y + height - tubeR * 2 + 1.2} width={width - 4} height="1.8" rx="0.9" fill="#FFFFFF" opacity="0.65" />

      {/* Corner Coupler Blocks */}
      <rect x={x - 2} y={y - 1} width="6" height={height + 2} rx="2" fill="url(#jointPinGrad)" stroke="#1F2633" strokeWidth="0.8" />
      <rect x={x + width - 4} y={y - 1} width="6" height={height + 2} rx="2" fill="url(#jointPinGrad)" stroke="#1F2633" strokeWidth="0.8" />
    </g>
  );
};

const VerticalTrussTower = ({ x, y, width = 64, height = 530, bays = 10, tint = 'none' }) => {
  const bayH = height / bays;
  const tubeR = 5;
  const chordGrad = tint === 'pink' ? 'url(#trussSheenPink)' : tint === 'cyan' ? 'url(#trussSheenCyan)' : 'url(#chromeTubeV)';

  return (
    <g>
      {/* Diagonal X-Braces */}
      {Array.from({ length: bays }).map((_, i) => {
        const y1 = y + i * bayH;
        const y2 = y1 + bayH;
        return (
          <g key={i}>
            <line x1={x + 5} y1={y1} x2={x + width - 5} y2={y2} stroke="url(#chromeTubeDiagL)" strokeWidth="3" strokeLinecap="round" opacity="0.85" />
            <line x1={x + width - 5} y1={y1} x2={x + 5} y2={y2} stroke="url(#chromeTubeDiagR)" strokeWidth="3" strokeLinecap="round" opacity="0.85" />
            {/* Center joint pin */}
            <circle cx={x + width / 2} cy={(y1 + y2) / 2} r="2.8" fill="url(#jointPinGrad)" stroke="#222A36" strokeWidth="0.8" />
            {/* Horizontal bay separator rungs */}
            {i > 0 && (
              <line x1={x + 4} y1={y1} x2={x + width - 4} y2={y1} stroke="url(#chromeTubeH)" strokeWidth="3" opacity="0.8" />
            )}
          </g>
        );
      })}

      {/* Left Main Vertical Chord */}
      <rect x={x} y={y} width={tubeR * 2} height={height} rx={tubeR} fill={chordGrad} stroke="#2E3846" strokeWidth="0.8" />
      <rect x={x + 1.2} y={y + 2} width="1.8" height={height - 4} rx="0.9" fill="#FFFFFF" opacity="0.75" />

      {/* Right Main Vertical Chord */}
      <rect x={x + width - tubeR * 2} y={y} width={tubeR * 2} height={height} rx={tubeR} fill={chordGrad} stroke="#2E3846" strokeWidth="0.8" />
      <rect x={x + width - tubeR * 2 + 1.2} y={y + 2} width="1.8" height={height - 4} rx="0.9" fill="#FFFFFF" opacity="0.7" />

      {/* Base & Top Coupler Plates */}
      <rect x={x - 2} y={y - 2} width={width + 4} height="6" rx="2" fill="url(#jointPinGrad)" stroke="#1F2633" strokeWidth="0.8" />
      <rect x={x - 2} y={y + height - 4} width={width + 4} height="6" rx="2" fill="url(#jointPinGrad)" stroke="#1F2633" strokeWidth="0.8" />
    </g>
  );
};

/* ─────────────────────────────────────────────
   4. BlinderPanel (2 Rows x 6 Bulbs = 12 Bulbs)
   Realistic concert audience blinder fixtures
───────────────────────────────────────────── */
const BlinderPanel = ({ x, y, width = 112, height = 44, phaseOffset = 0 }) => {
  const cols = 6;
  const rows = 2;
  const colSpacing = (width - 16) / cols;
  const rowSpacing = (height - 12) / rows;

  return (
    <g>
      {/* Fixture Chassis with metallic bevel */}
      <rect x={x - 2} y={y - 2} width={width + 4} height={height + 4} rx="5" fill="#334155" stroke="#475569" strokeWidth="1" />
      <rect x={x} y={y} width={width} height={height} rx="4" fill="url(#blinderHousing)" stroke="#0F172A" strokeWidth="1.2" />

      {/* Mounting brackets */}
      <rect x={x + 4} y={y - 5} width="6" height="5" rx="1" fill="#64748B" />
      <rect x={x + width - 10} y={y - 5} width="6" height="5" rx="1" fill="#64748B" />

      {/* Reflector cups & unlit bulb base (visible when light is OFF) */}
      {Array.from({ length: rows }).map((_, r) =>
        Array.from({ length: cols }).map((_, c) => {
          const bx = x + 8 + c * colSpacing + colSpacing / 2;
          const by = y + 6 + r * rowSpacing + rowSpacing / 2;
          return (
            <g key={`cup-${r}-${c}`}>
              <circle cx={bx} cy={by} r="7.5" fill="#0B0E14" stroke="#334155" strokeWidth="0.8" />
              {/* Unlit bulb filament / dark socket (clearly dark when light turns OFF) */}
              <circle cx={bx} cy={by} r="5" fill="#140D05" stroke="#261605" strokeWidth="0.8" />
              <circle cx={bx - 0.8} cy={by - 0.8} r="1.2" fill="#3A2208" opacity="0.6" />
            </g>
          );
        })
      )}

      {/* 12 Individual Halogen/LED Bulbs (Pure GPU-accelerated CSS strobe - NO React state re-renders) */}
      <g pointerEvents="none" className="blinder-strobe-lights" style={{ animationDelay: `${phaseOffset}ms` }}>
        {Array.from({ length: rows }).map((_, r) =>
          Array.from({ length: cols }).map((_, c) => {
            const bx = x + 8 + c * colSpacing + colSpacing / 2;
            const by = y + 6 + r * rowSpacing + rowSpacing / 2;
            const rId = `active-bulb-${r}-${c}`;
            return (
              <g key={rId}>
                {/* Outer warm halo aura */}
                <circle cx={bx} cy={by} r="11" fill="url(#bulbWarmAura)" opacity="0.88" />
                {/* Glowing bulb element */}
                <circle cx={bx} cy={by} r="6" fill="url(#bulbAmberCore)" filter="url(#blinderGlow)" />
                {/* Filament specular hotspot */}
                <circle cx={bx - 1.2} cy={by - 1.2} r="1.8" fill="#FFFFFF" opacity="0.95" />
              </g>
            );
          })
        )}
      </g>
    </g>
  );
};

/* ─────────────────────────────────────────────
   5. SpeakerTower (Left & Right)
   Top: Audio wave digital screen
   Bottom: Massive dual woofer cabinet with neon halo
───────────────────────────────────────────── */
const SpeakerTower = ({ x = 168 }) => {
  const w = 118;
  const topScreenY = 246;
  const topScreenH = 92;
  const mainCabY = 338;
  const mainCabH = 222;
  const cx = x + w / 2;
  const isRight = x > 500;
  const clipId = `topScreenClip-${x}`;

  const midWooferY = mainCabY + 56;
  const subWooferY = mainCabY + 148;

  return (
    <g>
      {/* Seamless Tower Backing Frame (prevents any background gap between screen and cabinet) */}
      <rect x={x - 2} y={topScreenY - 2} width={w + 4} height={topScreenH + mainCabH + 4} rx="6" fill="#070A10" stroke="#334155" strokeWidth="1" />

      {/* ── TOP UNIT: CONTINUOUS MARQUEE DISPLAY SCREEN ("CR MUSIC CONCERT") ── */}
      {/* Display frame */}
      <rect x={x - 2} y={topScreenY - 2} width={w + 4} height={topScreenH + 4} rx="5" fill="#1E293B" stroke="#475569" strokeWidth="1" />
      <rect x={x} y={topScreenY} width={w} height={topScreenH} rx="4" fill="url(#waveScreenBg)" stroke="#334155" strokeWidth="1.2" />

      {/* Screen Boundary ClipPath */}
      <defs>
        <clipPath id={clipId}>
          <rect x={x + 3} y={topScreenY + 3} width={w - 6} height={topScreenH - 6} rx="3" />
        </clipPath>
      </defs>

      {/* Neon border highlight (Reload Ignition) */}
      <g className="stage-reload-light">
        <rect
          x={x + 3}
          y={topScreenY + 3}
          width={w - 6}
          height={topScreenH - 6}
          rx="3"
          fill="none"
          stroke="#A855F7"
          strokeWidth="1.4"
          opacity="0.85"
          filter="url(#neonGlowPink)"
        />
        <rect
          x={x + 3}
          y={topScreenY + 3}
          width={w - 6}
          height={topScreenH - 6}
          rx="3"
          fill="none"
          stroke="#F0ABFC"
          strokeWidth="0.8"
          opacity="0.9"
        />
      </g>

      {/* Continuous Marquee Ticker: "CR MUSIC CONCERT" (Zero Break, Flows Left -> Right) */}
      <g clipPath={`url(#${clipId})`} style={{ userSelect: 'none' }}>
        <rect x={x + 4} y={topScreenY + 22} width={w - 8} height="42" rx="3" fill="#06020E" opacity="0.65" />
        <g className={isRight ? 'marquee-track-right' : 'marquee-track-left'}>
          <animateTransform
            attributeName="transform"
            type="translate"
            from="0 0"
            to="-240 0"
            dur="5.5s"
            begin={isRight ? "-2.75s" : "0s"}
            repeatCount="indefinite"
          />
          {[0, 240, 480, 720].map((offsetX, idx) => (
            <text
              key={idx}
              x={x + offsetX + 8}
              y={topScreenY + 49}
              fill="url(#marqueeTextGrad)"
              filter="url(#marqueeGlow)"
              fontSize="15.5"
              fontWeight="900"
              letterSpacing="2.4"
              fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
            >
              {"CR MUSIC CONCERT   ✦   "}
            </text>
          ))}
        </g>
      </g>

      {/* Bottom Mini Spectrum Wave */}
      <g style={{ animation: 'wave-screen-glow 2.4s ease-in-out infinite' }} opacity="0.85">
        {Array.from({ length: 15 }).map((_, i) => {
          const barX = x + 11 + i * 6.8;
          const distFromCenter = Math.abs(i - 7);
          const baseH = Math.max(3, Math.min(12, (8 - distFromCenter * 0.9) * 1.6 + Math.sin(i * 1.1) * 2.2));
          return (
            <line
              key={`bar-${i}`}
              x1={barX}
              y1={topScreenY + topScreenH - 10 - baseH}
              x2={barX}
              y2={topScreenY + topScreenH - 10}
              stroke="url(#waveGlowGrad)"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          );
        })}
      </g>

      {/* ── BOTTOM UNIT: MAIN SPEAKER CABINET (Stacked Flush at mainCabY = 338, 0px Gap) ── */}
      {/* Cabinet outer casing with realistic bevel & depth */}
      <rect x={x - 2} y={mainCabY - 2} width={w + 4} height={mainCabH + 4} rx="6" fill="#0A0D14" />
      <rect x={x} y={mainCabY} width={w} height={mainCabH} rx="5" fill="url(#speakerCabGrad)" stroke="url(#speakerBevel)" strokeWidth="2.2" />
      {/* Front baffle inset */}
      <rect x={x + 5} y={mainCabY + 5} width={w - 10} height={mainCabH - 10} rx="3" fill="#070A10" stroke="#1E2638" strokeWidth="1" />

      {/* Corner reinforcement brackets with hex screws */}
      {[[x + 4, mainCabY + 4], [x + w - 10, mainCabY + 4], [x + 4, mainCabY + mainCabH - 10], [x + w - 10, mainCabY + mainCabH - 10]].map(([bx, by], i) => (
        <g key={i}>
          <rect x={bx} y={by} width="6" height="6" rx="1" fill="#334155" stroke="#475569" strokeWidth="0.6" />
          <circle cx={bx + 3} cy={by + 3} r="1.2" fill="#E2E8F0" />
        </g>
      ))}

      {/* ── UPPER MID-WOOFER (Driver 1) ── */}
      <circle cx={cx} cy={midWooferY} r="36" fill="url(#wooferRimGrad)" stroke="#384355" strokeWidth="1.8" />
      {/* Driver mount screws */}
      {Array.from({ length: 8 }).map((_, i) => {
        const rad = (i * 45 * Math.PI) / 180;
        return <circle key={i} cx={cx + Math.cos(rad) * 32.5} cy={midWooferY + Math.sin(rad) * 32.5} r="1.6" fill="#94A3B8" stroke="#0F172A" strokeWidth="0.6" />;
      })}
      {/* Subtle purple accent line */}
      <circle cx={cx} cy={midWooferY} r="28" fill="none" stroke="#7C3AED" strokeWidth="1.2" opacity="0.6" />
      {/* Woofer cone with concentric ribbed texture */}
      <circle cx={cx} cy={midWooferY} r="26" fill="url(#wooferConeGrad)" />
      {[21, 16, 11].map((cr, idx) => (
        <circle key={idx} cx={cx} cy={midWooferY} r={cr} fill="none" stroke="#2D1145" strokeWidth="0.8" opacity="0.6" />
      ))}
      {/* Inverted center dust cap */}
      <g style={{ transformOrigin: `${cx}px ${midWooferY}px`, animation: 'woofer-mid-thump 1.1s ease-in-out infinite' }}>
        <circle cx={cx} cy={midWooferY} r="8.5" fill="url(#dustCapSmall)" stroke="#A855F7" strokeWidth="0.8" />
        <circle cx={cx - 2} cy={midWooferY - 2} r="2.2" fill="#FFFFFF" opacity="0.3" />
      </g>

      {/* ── LOWER MASSIVE SUBWOOFER WITH NEON HALO (Driver 2) ── */}
      <circle cx={cx} cy={subWooferY} r="48" fill="url(#wooferRimGrad)" stroke="#384355" strokeWidth="2.2" />
      {/* Mounting rim screws */}
      {Array.from({ length: 8 }).map((_, i) => {
        const rad = (i * 45 * Math.PI) / 180;
        return <circle key={i} cx={cx + Math.cos(rad) * 44} cy={subWooferY + Math.sin(rad) * 44} r="1.8" fill="#CBD5E1" stroke="#0F172A" strokeWidth="0.8" />;
      })}

      {/* GLOWING VIBRANT NEON MAGENTA/VIOLET HALO RING (Smooth Reload Ignition + Ambient Pulse) */}
      <g className="stage-reload-light">
        <g style={{ animation: 'sub-halo-pulse 2.2s ease-in-out infinite' }}>
          <circle cx={cx} cy={subWooferY} r="39" fill="none" stroke="#FF00AA" strokeWidth="3.2" filter="url(#neonGlowPink)" />
          <circle cx={cx} cy={subWooferY} r="39" fill="none" stroke="#FFAAE0" strokeWidth="1.2" opacity="0.9" />
        </g>
      </g>

      {/* Subwoofer cone depth */}
      <circle cx={cx} cy={subWooferY} r="35" fill="url(#wooferConeGrad)" />
      {[29, 23, 17, 12].map((cr, idx) => (
        <circle key={idx} cx={cx} cy={subWooferY} r={cr} fill="none" stroke="#3B1259" strokeWidth="1" opacity="0.65" />
      ))}
      {/* Center metallic dome */}
      <g style={{ transformOrigin: `${cx}px ${subWooferY}px`, animation: 'woofer-sub-thump 1.1s ease-in-out infinite' }}>
        <circle cx={cx} cy={subWooferY} r="11" fill="url(#dustCapGrad)" stroke="#FF00AA" strokeWidth="1" />
        <circle cx={cx - 3} cy={subWooferY - 3} r="3" fill="#FFFFFF" opacity="0.35" />
      </g>

      {/* ── BASS REFLEX PORT (BOTTOM VENT) ── */}
      <rect x={x + 22} y={mainCabY + mainCabH - 16} width={w - 44} height="7" rx="3.5" fill="#04060A" stroke="#1E293B" strokeWidth="0.8" />

      {/* ── COMPACT CIRCULAR SOUND WAVES (Subtle Acoustic Ripples, Not Too Big) ── */}
      {/* Lower Subwoofer Compact Waves (Expanding from r=38 to r=66) */}
      {[0, 0.7, 1.4].map((delay, idx) => (
        <g key={`sub-wave-${idx}`} pointerEvents="none">
          <circle cx={cx} cy={subWooferY} r="38" fill="none" stroke="#FF00AA" strokeWidth="2.8" opacity="0" filter="url(#compactWaveGlowPink)">
            <animate attributeName="r" values="38; 46; 54; 61; 66" keyTimes="0; 0.25; 0.55; 0.85; 1" dur="2.1s" begin={`${delay}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0; 0.90; 0.65; 0.22; 0" keyTimes="0; 0.05; 0.35; 0.75; 1" dur="2.1s" begin={`${delay}s`} repeatCount="indefinite" />
            <animate attributeName="stroke-width" values="2.8; 2.3; 1.7; 1.1; 0.5" keyTimes="0; 0.25; 0.55; 0.85; 1" dur="2.1s" begin={`${delay}s`} repeatCount="indefinite" />
          </circle>
          <circle cx={cx} cy={subWooferY} r="38" fill="none" stroke="#FFAAE0" strokeWidth="1.4" opacity="0">
            <animate attributeName="r" values="38; 46; 54; 61; 66" keyTimes="0; 0.25; 0.55; 0.85; 1" dur="2.1s" begin={`${delay}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0; 0.95; 0.75; 0.25; 0" keyTimes="0; 0.04; 0.35; 0.75; 1" dur="2.1s" begin={`${delay}s`} repeatCount="indefinite" />
            <animate attributeName="stroke-width" values="1.5; 1.2; 0.9; 0.5; 0.2" keyTimes="0; 0.25; 0.55; 0.85; 1" dur="2.1s" begin={`${delay}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}

      {/* Upper Mid-Woofer Compact Waves (Expanding from r=26 to r=46) */}
      {[0.35, 1.05, 1.75].map((delay, idx) => (
        <g key={`mid-wave-${idx}`} pointerEvents="none">
          <circle cx={cx} cy={midWooferY} r="26" fill="none" stroke="#A855F7" strokeWidth="2.2" opacity="0" filter="url(#compactWaveGlowViolet)">
            <animate attributeName="r" values="26; 32; 38; 43; 46" keyTimes="0; 0.25; 0.55; 0.85; 1" dur="2.1s" begin={`${delay}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0; 0.85; 0.60; 0.20; 0" keyTimes="0; 0.05; 0.35; 0.75; 1" dur="2.1s" begin={`${delay}s`} repeatCount="indefinite" />
            <animate attributeName="stroke-width" values="2.2; 1.8; 1.3; 0.8; 0.4" keyTimes="0; 0.25; 0.55; 0.85; 1" dur="2.1s" begin={`${delay}s`} repeatCount="indefinite" />
          </circle>
          <circle cx={cx} cy={midWooferY} r="26" fill="none" stroke="#E9D5FF" strokeWidth="1.2" opacity="0">
            <animate attributeName="r" values="26; 32; 38; 43; 46" keyTimes="0; 0.25; 0.55; 0.85; 1" dur="2.1s" begin={`${delay}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0; 0.90; 0.70; 0.22; 0" keyTimes="0; 0.04; 0.35; 0.75; 1" dur="2.1s" begin={`${delay}s`} repeatCount="indefinite" />
            <animate attributeName="stroke-width" values="1.2; 1.0; 0.7; 0.4; 0.2" keyTimes="0; 0.25; 0.55; 0.85; 1" dur="2.1s" begin={`${delay}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}
    </g>
  );
};

/* ─────────────────────────────────────────────
   6. MiniSpeakerStack (Inner Stage Sides)
   Dual-woofer vertical cabinet between main tower and LED screen
───────────────────────────────────────────── */
const MiniSpeakerStack = ({ x }) => {
  const w = 38;
  const h = 88;
  const y = 468;
  const cx = x + w / 2;
  const d1Y = y + 24;
  const d2Y = y + 64;

  return (
    <g>
      {/* Chassis */}
      <rect x={x - 1} y={y - 1} width={w + 2} height={h + 2} rx="4" fill="#0A0D14" />
      <rect x={x} y={y} width={w} height={h} rx="3" fill="#131926" stroke="#2A3448" strokeWidth="1.2" />
      <rect x={x + 3} y={y + 3} width={w - 6} height={h - 6} rx="2" fill="#080B12" />

      {/* Driver 1 */}
      <circle cx={cx} cy={d1Y} r="15" fill="url(#wooferRimGrad)" stroke="#384355" strokeWidth="1" />
      <circle cx={cx} cy={d1Y} r="11.5" fill="#180A26" stroke="#8B5CF6" strokeWidth="1" />
      <circle cx={cx} cy={d1Y} r="4.5" fill="url(#dustCapSmall)" />

      {/* Driver 2 */}
      <circle cx={cx} cy={d2Y} r="15" fill="url(#wooferRimGrad)" stroke="#384355" strokeWidth="1" />
      <circle cx={cx} cy={d2Y} r="11.5" fill="#180A26" stroke="#8B5CF6" strokeWidth="1" />
      <circle cx={cx} cy={d2Y} r="4.5" fill="url(#dustCapSmall)" />
    </g>
  );
};

/* ─────────────────────────────────────────────
   7. CenterLedWall (Stage Backdrop Video Screen)
   Large concert LED video display with Heading & Description
───────────────────────────────────────────── */
const CenterLedWall = ({
  heading = "SOUNDWAVE 2026",
  description = "Feel the pulse of live beats and electrifying concert lights.",
  subDescription = "The ultimate immersive audio-visual music experience."
}) => {
  const sx = 385;
  const sy = 245;
  const sw = 670;
  const sh = 315;
  const cx = sx + sw / 2;

  return (
    <g>
      {/* Outer Bezel Frame */}
      <rect x={sx - 3} y={sy - 3} width={sw + 6} height={sh + 6} rx="6" fill="#0D111D" stroke="#252D3D" strokeWidth="1.8" />
      {/* Deep Screen Backdrop */}
      <rect x={sx} y={sy} width={sw} height={sh} rx="4" fill="#040713" />

      {/* LED Dot Matrix Grid Pattern */}
      <rect x={sx} y={sy} width={sw} height={sh} rx="4" fill="url(#ledDotPattern)" />

      {/* Center Screen Atmospheric Stage Glow */}
      <ellipse cx={cx} cy={sy + 158} rx="260" ry="110" fill="url(#stageBackdropGlow)" opacity="0.75" />

      {/* ── SCREEN DISPLAY CONTENT: HEADING & DESCRIPTION ── */}
      <g className="svg-center-screen-content" style={{ textAnchor: 'middle', userSelect: 'none' }}>
        {/* Live Status Pill Tag */}
        <g>
          <rect x={cx - 86} y={sy + 82} width="172" height="24" rx="12" fill="#080E1C" stroke="#38BDF8" strokeWidth="1" opacity="0.85" />
          <circle cx={cx - 64} cy={sy + 94} r="3.5" fill="#EF4444">
            <animate attributeName="opacity" values="1; 0.25; 1" dur="1.2s" repeatCount="indefinite" />
          </circle>
          <text x={cx + 6} y={sy + 98} fill="#E2E8F0" fontSize="10.5" fontWeight="700" letterSpacing="2.5" fontFamily="'Plus Jakarta Sans', system-ui, sans-serif">
            LIVE CONCERT 2026
          </text>
        </g>

        {/* Main Heading */}
        <text
          x={cx}
          y={sy + 152}
          fill="url(#ledHeadingGrad)"
          filter="url(#ledTextGlow)"
          fontSize="36"
          fontWeight="900"
          letterSpacing="4"
          fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
        >
          {heading}
        </text>

        {/* Glowing Accent Neon Divider Line */}
        <line x1={cx - 120} y1={sy + 172} x2={cx + 120} y2={sy + 172} stroke="url(#ledLineGrad)" strokeWidth="1.8" strokeLinecap="round" />

        {/* Primary Description */}
        <text
          x={cx}
          y={sy + 200}
          fill="#E2E8F0"
          fontSize="14"
          fontWeight="600"
          letterSpacing="0.6"
          fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
        >
          {description}
        </text>

        {/* Secondary Sub-Description */}
        <text
          x={cx}
          y={sy + 224}
          fill="#94A3B8"
          fontSize="12.5"
          fontWeight="400"
          letterSpacing="1"
          fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
        >
          {subDescription}
        </text>
      </g>

      {/* Inner Screen Ambient Border Glow (Smooth Reload Ignition) */}
      <g className="stage-reload-light">
        <rect x={sx} y={sy} width={sw} height={sh} rx="4" fill="none" stroke="#60A5FA" strokeWidth="1" opacity="0.3" />
      </g>
    </g>
  );
};

/* ─────────────────────────────────────────────
   8. MovingHeadSpotlight & Volumetric Beams
   Rays emerge directly from INSIDE the lens!
───────────────────────────────────────────── */
const TheatricalSpotlightWithBeam = ({
  x,
  y = 218,
  angle = 0,
  colorGrad = 'lensCyan',
  lensColor = '#00E5FF',
  isGolden = false,
  beamGrad = 'beamGradCyan',
  beamBottomWidth = 65,
  beamLength = 360,
  animName = 'beam-haze-drift',
  animDur = '4s',
  delay = '0s',
}) => {
  const trussBottomY = 218;
  const lensY = y + 20;

  return (
    <g>
      {/* Rigid Mounting Clamp clamped directly to bottom chord of the steel truss rod */}
      <rect x={x - 4} y={trussBottomY - 7} width="8" height="9" rx="1.5" fill="#64748B" stroke="#334155" strokeWidth="0.8" />
      <circle cx={x} cy={trussBottomY - 2.5} r="1.5" fill="#CBD5E1" />

      {/* Moving Head Body & Beams rotating from clamp base */}
      <g transform={`rotate(${angle} ${x} ${y})`}>
        {/* Volumetric Light Ray emerging directly from INSIDE the lens face */}
        <g className="stage-reload-light theatrical-spotlight-beam">
          {isGolden ? (
            <g style={{ animation: `golden-ray-pulse 3.8s ease-in-out infinite`, animationDelay: delay }}>
              {/* Soft Volumetric Golden Haze Cone (starts at lens rim x-7.5 to x+7.5 at lensY) */}
              <polygon
                points={`${x - 7.5},${lensY} ${x + 7.5},${lensY} ${x + beamBottomWidth},${y + beamLength} ${x - beamBottomWidth},${y + beamLength}`}
                fill="url(#goldenRayVolumetric)"
                filter="url(#beamBlur)"
              />
              {/* Subtle natural warm lens glow */}
              <circle cx={x} cy={lensY} r="10" fill="url(#bulbWarmAura)" opacity="0.35" />
            </g>
          ) : (
            <g style={{ animation: `${animName} ${animDur} ease-in-out infinite`, animationDelay: delay }}>
              {/* Colored Volumetric Fog Beam (starts directly at lens rim) */}
              <polygon
                points={`${x - 7.5},${lensY} ${x + 7.5},${lensY} ${x + beamBottomWidth},${y + beamLength} ${x - beamBottomWidth},${y + beamLength}`}
                fill={`url(#${beamGrad})`}
                filter="url(#beamBlur)"
              />
            </g>
          )}
        </g>

        {/* Dual yoke arms connecting pivot to moving head */}
        <path d={`M ${x - 9} ${y} L ${x - 8} ${y + 7} L ${x + 8} ${y + 7} L ${x + 9} ${y} Z`} fill="#1E293B" stroke="#475569" strokeWidth="0.8" />

        {/* Cylindrical moving head body */}
        <rect x={x - 12} y={y + 5} width="24" height="15" rx="4" fill="#0F1F2A" stroke="#334155" strokeWidth="1" />

        {/* Front lens bezel (encircling the beam source) */}
        <circle cx={x} cy={lensY} r="9.5" fill="#0A0E17" stroke="#475569" strokeWidth="1" />

        {/* Unlit lens background base (visible when light blinks OFF on mobile) */}
        <circle className="theatrical-spotlight-unlit" cx={x} cy={lensY} r="7.5" fill="#131B26" stroke="#253243" strokeWidth="0.8" />

        {/* Glowing convex glass lens */}
        <g className="stage-reload-light theatrical-spotlight-lens">
          <circle
            cx={x}
            cy={lensY}
            r="7.5"
            fill={`url(#${colorGrad})`}
            style={{
              filter: isGolden
                ? 'drop-shadow(0 0 5px #FFB800)'
                : `drop-shadow(0 0 6px ${lensColor})`,
            }}
          />
          <circle cx={x - 2.5} cy={lensY - 2} r="2.2" fill="#FFFFFF" opacity="0.8" />
        </g>
      </g>
    </g>
  );
};

const TheatricalSpotlightsAndBeams = () => {
  const spotlights = [
    {
      id: 'spot-1',
      x: 340,
      y: 218,
      angle: -30,
      colorGrad: 'goldenLensShine',
      lensColor: '#FFB300',
      isGolden: true,
      beamGrad: 'goldenRayVolumetric',
      beamBottomWidth: 85,
      beamLength: 410,
      delay: '0s',
    },
    {
      id: 'spot-2',
      x: 425,
      y: 218,
      angle: 18,
      colorGrad: 'lensCyan',
      lensColor: '#00E5FF',
      isGolden: false,
      beamGrad: 'beamGradCyan',
      beamBottomWidth: 72,
      beamLength: 375,
      animName: 'beam-haze-drift-alt',
      animDur: '4s',
      delay: '0.4s',
    },
    {
      id: 'spot-3',
      x: 510,
      y: 218,
      angle: 9,
      colorGrad: 'lensMagenta',
      lensColor: '#FF0080',
      isGolden: false,
      beamGrad: 'beamGradMagenta',
      beamBottomWidth: 68,
      beamLength: 365,
      animName: 'beam-haze-drift',
      animDur: '3.8s',
      delay: '0.8s',
    },
    {
      id: 'spot-4',
      x: 595,
      y: 218,
      angle: -6,
      colorGrad: 'lensCyan',
      lensColor: '#00E5FF',
      isGolden: false,
      beamGrad: 'beamGradCyan',
      beamBottomWidth: 65,
      beamLength: 355,
      animName: 'beam-haze-drift-alt',
      animDur: '4.2s',
      delay: '0.2s',
    },
    {
      id: 'spot-5',
      x: 845,
      y: 218,
      angle: 6,
      colorGrad: 'lensCyan',
      lensColor: '#00E5FF',
      isGolden: false,
      beamGrad: 'beamGradCyan',
      beamBottomWidth: 65,
      beamLength: 355,
      animName: 'beam-haze-drift',
      animDur: '4.2s',
      delay: '0.3s',
    },
    {
      id: 'spot-6',
      x: 930,
      y: 218,
      angle: -9,
      colorGrad: 'lensMagenta',
      lensColor: '#FF0080',
      isGolden: false,
      beamGrad: 'beamGradMagenta',
      beamBottomWidth: 68,
      beamLength: 365,
      animName: 'beam-haze-drift-alt',
      animDur: '3.8s',
      delay: '0.9s',
    },
    {
      id: 'spot-7',
      x: 1015,
      y: 218,
      angle: -18,
      colorGrad: 'lensCyan',
      lensColor: '#00E5FF',
      isGolden: false,
      beamGrad: 'beamGradCyan',
      beamBottomWidth: 72,
      beamLength: 375,
      animName: 'beam-haze-drift',
      animDur: '4s',
      delay: '0.5s',
    },
    {
      id: 'spot-8',
      x: 1100,
      y: 218,
      angle: 30,
      colorGrad: 'goldenLensShine',
      lensColor: '#FFB300',
      isGolden: true,
      beamGrad: 'goldenRayVolumetric',
      beamBottomWidth: 85,
      beamLength: 410,
      delay: '0.2s',
    },
  ];

  return (
    <g>
      {spotlights.map((spot) => (
        <TheatricalSpotlightWithBeam key={spot.id} {...spot} />
      ))}
    </g>
  );
};

/* ─────────────────────────────────────────────
   9. StagePlatform & Monitor Wedges
   Elevated multi-layer stage deck, neon lips & 7 wedge monitors
───────────────────────────────────────────── */
const StagePlatform = () => {
  const px = 145;
  const pw = 1150;
  const topY = 560;
  const botY = 615;

  // 7 Stage Monitor Wedges across front edge
  const monitors = [385, 485, 585, 720, 855, 955, 1055];

  return (
    <g>
      {/* Top Deck Surface (Slight 3D Perspective Depth) */}
      <polygon points={`${px - 6},${topY} ${px + pw + 6},${topY} ${px + pw},${topY - 6} ${px},${topY - 6}`} fill="url(#stageDeckSurface)" />
      <line x1={px} y1={topY - 5} x2={px + pw} y2={topY - 5} stroke="#64748B" strokeWidth="0.8" opacity="0.4" />

      {/* Front Fascia Wall */}
      <rect x={px} y={topY} width={pw} height={botY - topY} fill="url(#stageFasciaGrad)" stroke="#1E293B" strokeWidth="1" />

      {/* Fascia Vertical Panel Divider Seams */}
      {Array.from({ length: 12 }).map((_, i) => (
        <line
          key={i}
          x1={px + (i + 1) * (pw / 13)}
          y1={topY}
          x2={px + (i + 1) * (pw / 13)}
          y2={botY}
          stroke="#1F2937"
          strokeWidth="1"
          opacity="0.7"
        />
      ))}

      {/* ── TOP NEON EDGE STRIP (Continuous Radiant Pink/Magenta Line with Reload Ignition) ── */}
      <g className="stage-reload-light">
        <rect
          x={px - 4}
          y={topY - 1.5}
          width={pw + 8}
          height="3"
          rx="1.5"
          fill="url(#stageNeonLip)"
          style={{ animation: 'stage-neon-pulse 2.6s ease-in-out infinite' }}
        />
        {/* High-intensity core filament */}
        <rect x={px} y={topY - 0.6} width={pw} height="1.2" rx="0.6" fill="#FFFFFF" opacity="0.95" />
      </g>

      {/* ── BOTTOM STAGE FLOOR NEON STRIP (Smooth Reload Ignition + Ambient Base Glow) ── */}
      <g className="stage-reload-light">
        <rect
          x={px - 8}
          y={botY - 1.5}
          width={pw + 16}
          height="3"
          rx="1.5"
          fill="url(#stageNeonBase)"
          style={{ animation: 'stage-neon-pulse 2.6s ease-in-out infinite', animationDelay: '0.4s' }}
        />
        <rect x={px - 4} y={botY - 0.6} width={pw + 8} height="1.2" rx="0.6" fill="#FFFFFF" opacity="0.85" />
      </g>

      {/* ── 7 STAGE MONITOR WEDGES (Front Lip) ── */}
      {monitors.map((mx, idx) => {
        const mw = 48;
        const mh = 18;
        return (
          <g key={idx}>
            {/* Contact drop shadow onto deck */}
            <ellipse cx={mx} cy={topY + 2} rx="26" ry="5" fill="#000000" opacity="0.6" />
            {/* Wedge main body */}
            <polygon
              points={`${mx - mw / 2},${topY + 3} ${mx + mw / 2},${topY + 3} ${mx + mw / 2 - 4},${topY - mh} ${mx - mw / 2 + 4},${topY - mh}`}
              fill="#111827"
              stroke="#374151"
              strokeWidth="0.8"
            />
            {/* Angled perforated speaker grille */}
            <polygon
              points={`${mx - mw / 2 + 3},${topY + 1} ${mx + mw / 2 - 3},${topY + 1} ${mx + mw / 2 - 6},${topY - mh + 3} ${mx - mw / 2 + 6},${topY - mh + 3}`}
              fill="#1F2937"
            />
            {/* Grille texture lines */}
            {[0, 1, 2].map((l) => (
              <line
                key={l}
                x1={mx - 14 + l * 14}
                y1={topY - mh + 4}
                x2={mx - 14 + l * 14}
                y2={topY}
                stroke="#374151"
                strokeWidth="0.8"
                opacity="0.8"
              />
            ))}
            {/* Top bevel highlight */}
            <line x1={mx - mw / 2 + 4} y1={topY - mh} x2={mx + mw / 2 - 4} y2={topY - mh} stroke="#6B7280" strokeWidth="0.8" />
          </g>
        );
      })}
    </g>
  );
};

/* ─────────────────────────────────────────────
   10. ConcertStageIllustration (Main Assembly)
───────────────────────────────────────────── */
export const ConcertStageIllustration = () => {
  return (
    <svg
      viewBox="50 60 1340 558"
      preserveAspectRatio="xMidYMid meet"
      aria-label="Professional Concert Stage Illustration"
      role="img"
      className="concert-stage-svg max-w-full w-full h-auto drop-shadow-2xl rounded-2xl overflow-hidden select-none"
    >
      {/* 1. Definitions (gradients, filters, patterns) */}
      <StageDefinitions />

      {/* 2. Studio Background */}
      <rect x="0" y="0" width="1440" height="620" fill="url(#concertSkyGrad)" />
      <ellipse cx="720" cy="380" rx="640" ry="360" fill="url(#skyCenterGlow)" />
      <ellipse cx="720" cy="420" rx="440" ry="240" fill="url(#stageBackdropGlow)" />

      {/* 4. Center LED Video Wall & Animated Equalizer */}
      <CenterLedWall />

      {/* 5. Dual Inner Mini-Speaker Column Stacks */}
      <MiniSpeakerStack x={342} />
      <MiniSpeakerStack x={1060} />

      {/* 6. Raised Stage Platform, Neon Lips & Wedge Monitors */}
      <StagePlatform />

      {/* 7. Dual Main Speaker Towers (Screens + Subwoofers with Neon Rings) */}
      <SpeakerTower x={168} />
      <SpeakerTower x={1154} />

      {/* ── 8. PROFESSIONAL 3D METALLIC CHROME TRUSS RIGGING ── */}
      {/* Outer Left Vertical Truss Bay */}
      <VerticalTrussTower x={54} y={72} width={68} height={543} bays={11} tint="cyan" />
      {/* Inner Left Vertical Column */}
      <VerticalTrussTower x={294} y={72} width={38} height={488} bays={11} tint="none" />

      {/* Outer Right Vertical Truss Bay */}
      <VerticalTrussTower x={1318} y={72} width={68} height={543} bays={11} tint="pink" />
      {/* Inner Right Vertical Column */}
      <VerticalTrussTower x={1108} y={72} width={38} height={488} bays={11} tint="none" />

      {/* Top Master Crossbeam Truss (Edge-to-Edge) */}
      <HorizontalTruss x={54} y={64} width={1332} height={42} segments={24} tint="none" />

      {/* Upper Crossbeam Truss (Between Left & Right Inner Columns) */}
      <HorizontalTruss x={294} y={178} width={852} height={40} segments={16} tint="none" />

      {/* Diagonal Roof Bracing Struts (Outer verticals down to upper roof) */}
      <line x1="122" y1="106" x2="294" y2="178" stroke="url(#chromeTubeDiagL)" strokeWidth="6" strokeLinecap="round" />
      <line x1="294" y1="106" x2="122" y2="178" stroke="url(#chromeTubeDiagR)" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
      <line x1="1318" y1="106" x2="1146" y2="178" stroke="url(#chromeTubeDiagR)" strokeWidth="6" strokeLinecap="round" />
      <line x1="1146" y1="106" x2="1318" y2="178" stroke="url(#chromeTubeDiagL)" strokeWidth="4" strokeLinecap="round" opacity="0.6" />

      {/* ── 9. MOVING HEAD SPOTLIGHTS & VOLUMETRIC LIGHT RAYS (Directly from inside lens!) ── */}
      <TheatricalSpotlightsAndBeams />

      {/* ── 11. THREE WARM AMBER BLINDER LIGHT FIXTURES ── */}
      {/* Left Blinder Panel (Centered above left speaker tower) */}
      <BlinderPanel x={171} y={120} width={112} height={42} phaseOffset={0} />

      {/* Center Blinder Panel (Centered on top of roof truss) */}
      <BlinderPanel x={664} y={132} width={112} height={42} phaseOffset={560} />

      {/* Right Blinder Panel (Centered above right speaker tower) */}
      <BlinderPanel x={1157} y={120} width={112} height={42} phaseOffset={0} />
    </svg>
  );
};

/* ─────────────────────────────────────────────
   11. Mobile Concert LED Screen
   Renders exclusively on mobile directly beneath the stage
   for crisp, readable, high-impact concert typography & marquee
───────────────────────────────────────────── */
const MobileLedScreen = () => {
  return (
    <div className="mobile-led-screen-wrapper w-full px-3 pt-3 pb-6 block md:hidden max-w-[480px] mx-auto select-none">
      <div className="mobile-led-card relative rounded-2xl bg-[#040713] border-2 border-[#1E293B] shadow-[0_12px_32px_rgba(0,0,0,0.2),0_0_20px_rgba(168,85,247,0.25)] overflow-hidden p-4 sm:p-5 text-center">
        {/* LED matrix dot texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: 'radial-gradient(#475569 1.2px, transparent 1.2px)',
            backgroundSize: '6px 6px',
          }}
        />

        {/* Ambient Stage Lighting Glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-60"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(67, 56, 202, 0.45), rgba(168, 85, 247, 0.15) 60%, transparent 80%)',
          }}
        />

        {/* Cyber Neon Border Inset */}
        <div className="absolute inset-0 rounded-2xl border border-pink-500/25 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
          {/* Live Tag */}
          <div className="mobile-led-badge inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#080E1C] border border-sky-400/60 shadow-[0_0_10px_rgba(56,189,248,0.3)]">
            <span className="mobile-led-badge-dot w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="mobile-led-badge-text text-[10px] font-bold tracking-[0.2em] text-slate-200 uppercase font-['Plus_Jakarta_Sans',sans-serif]">
              LIVE CONCERT 2026
            </span>
          </div>

          {/* Screen Heading */}
          <h2 className="mobile-led-heading text-2xl sm:text-3xl font-black tracking-wider uppercase mt-2.5 mb-1 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-pink-400 to-purple-400 drop-shadow-[0_0_14px_rgba(244,114,182,0.7)] font-['Plus_Jakarta_Sans',sans-serif]">
            SOUNDWAVE 2026
          </h2>

          {/* Glowing divider line */}
          <div className="mobile-led-divider w-36 h-[2px] bg-gradient-to-r from-transparent via-pink-500 to-transparent my-2 rounded-full" />

          {/* Description */}
          <p className="mobile-led-desc text-slate-200 text-xs sm:text-sm font-semibold tracking-wide leading-relaxed max-w-[320px]">
            Feel the pulse of live beats and electrifying concert lights.
          </p>
          <p className="mobile-led-subdesc text-slate-400 text-[11px] font-medium tracking-wider mt-1">
            The ultimate immersive audio-visual music experience.
          </p>

          {/* Seamless Marquee Ribbon */}
          <div className="mobile-led-marquee-container w-full mt-3 pt-2.5 border-t border-slate-800/80 overflow-hidden relative">
            <div
              className="mobile-led-marquee-content whitespace-nowrap flex w-max"
              style={{ animation: 'marquee-mobile 10s linear infinite' }}
            >
              <span className="mobile-led-marquee-item text-[11px] font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 pr-6">
                ✦ CR MUSIC CONCERT &nbsp;✦&nbsp; SOUNDWAVE 2026 &nbsp;✦&nbsp; LIVE ON STAGE &nbsp;✦&nbsp; CR MUSIC CONCERT &nbsp;✦&nbsp; SOUNDWAVE 2026 &nbsp;
              </span>
              <span className="mobile-led-marquee-item text-[11px] font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 pr-6">
                ✦ CR MUSIC CONCERT &nbsp;✦&nbsp; SOUNDWAVE 2026 &nbsp;✦&nbsp; LIVE ON STAGE &nbsp;✦&nbsp; CR MUSIC CONCERT &nbsp;✦&nbsp; SOUNDWAVE 2026 &nbsp;
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   12. Main Exported Component
───────────────────────────────────────────── */
export const MusicEventsConcerts = () => {
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    // Keyboard shortcut 'r' or 'R' to smoothly replay the stage ignition blink animation
    const handleKeyDown = (e) => {
      if ((e.key === 'r' || e.key === 'R') && !e.ctrlKey && !e.metaKey && !e.altKey) {
        const activeTag = document.activeElement?.tagName?.toLowerCase();
        if (activeTag === 'input' || activeTag === 'textarea' || document.activeElement?.isContentEditable) {
          return;
        }
        setReloadKey((prev) => prev + 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section
      id="music-events-concerts"
      aria-label="Music Events & Concerts"
      className="relative w-full max-w-[1620px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 mt-12 sm:mt-16 lg:mt-20 select-none scroll-mt-24"
    >
      <AnimationStyles />

      {/* Signature Section Header */}
      <SectionHeader 
        titlePrefix={musicEventsConcertsData.titlePrefix} 
        titleAccent={musicEventsConcertsData.titleAccent} 
        subtitle={musicEventsConcertsData.subtitle} 
      />

      {/* Concert Stage Showcase Card Container */}
      <div 
        key={reloadKey}
        className="concert-stage-wrapper w-full flex flex-col items-center justify-start overflow-hidden rounded-2xl sm:rounded-3xl border border-purple-200/60 shadow-[0_16px_50px_rgba(44,114,202,0.14)] bg-[#08183E]"
      >
        <div className="w-full flex items-center justify-center">
          <ConcertStageIllustration />
        </div>
        <MobileLedScreen />
      </div>
    </section>
  );
};

export default MusicEventsConcerts;
