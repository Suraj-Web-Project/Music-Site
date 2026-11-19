import React, { useState, useRef, useEffect, useId } from 'react';
import { useInView } from '../../hooks/useInView';

/**
 * MoodClapperboard - 100% Pure CSS / SVG Interactive Mood-Based Playlists Clapperboard
 * Features:
 * - 3D Clapperboard chassis with authentic animated snapping clapper stick (-13.5 deg <-> 0 deg shut)
 * - Animated top soundwave equalizer header + 3D Play button
 * - 8 Chunky 3D Claymorphic Mood Cards with tactile 3D extrusions and cushion bevels
 * - Interactive hover animations: 3D card lift (-8px, scale 1.035x), deep ambient glow shadows & icon micro-animations
 * - Snappy Movie Clapper Clap animation upon clicking any mood or the clapper stick
 * - Active state: Vibrant hot-pink neon glow & ring
 * - Zero external raster images (.png, .jpg)
 */
export const MoodClapperboard = ({
  selectedMood: externalMood,
  onSelectMood,
  className = 'w-full max-w-[960px] h-auto'
}) => {
  const uid = useId().replace(/:/g, '');
  const [internalMood, setInternalMood] = useState('Happy');
  const [stickAngle, setStickAngle] = useState(-13.5);
  const [shadowAngle, setShadowAngle] = useState(0);
  const animFrameRef = useRef(null);
  const currentMood = externalMood !== undefined ? externalMood : internalMood;
  const [boardRef, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  // Realistic synthesized wooden snap sound via Web Audio API (zero external assets)
  const playClapperSound = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      // Trigger exactly when the stick slaps shut (~130ms)
      setTimeout(() => {
        try {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(360, ctx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(70, ctx.currentTime + 0.045);
          gain.gain.setValueAtTime(0.35, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(ctx.currentTime);
          osc.stop(ctx.currentTime + 0.05);
        } catch (_) { }
      }, 130);
    } catch (_) { }
  };

  const clapTimersRef = useRef([]);

  const runSmoothClap = () => {
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    clapTimersRef.current.forEach(t => clearTimeout(t));
    clapTimersRef.current = [];

    const duration = 1100; // 1.1s total smooth clapper animation
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      let angle = -13.5;

      // 0.0 -> 0.28 (~300ms): Smooth swing down from -13.5deg to 0deg (shut)
      if (progress < 0.28) {
        const p = progress / 0.28;
        const ease = p * p * (3 - 2 * p);
        angle = -13.5 * (1 - ease);
      }
      // 0.28 -> 0.38 (~110ms): Subtle realistic recoil bounce (0deg -> -1.8deg -> 0deg)
      else if (progress < 0.38) {
        const p = (progress - 0.28) / 0.10;
        angle = -1.8 * Math.sin(p * Math.PI);
      }
      // 0.38 -> 0.52 (~150ms): Brief hold shut at 0deg
      else if (progress < 0.52) {
        angle = 0.0;
      }
      // 0.52 -> 1.0 (~530ms): Smooth spring open back to resting position (-13.5deg)
      else {
        const p = (progress - 0.52) / 0.48;
        const ease = Math.sin(p * Math.PI * 0.5);
        const overshoot = Math.sin(p * Math.PI) * -1.2;
        angle = -13.5 * ease + overshoot;
      }

      const shadow = (1.0 - (angle / -13.5)) * 10.5;

      setStickAngle(Number(angle.toFixed(2)));
      setShadowAngle(Number(shadow.toFixed(2)));

      if (progress < 1) {
        animFrameRef.current = requestAnimationFrame(animate);
      } else {
        setStickAngle(-13.5);
        setShadowAngle(0);
        animFrameRef.current = null;
      }
    };

    animFrameRef.current = requestAnimationFrame(animate);
  };

  // Smooth single clap animation when scrolled into view
  useEffect(() => {
    if (!inView) return;

    const startTimer = setTimeout(() => {
      runSmoothClap();
    }, 280);

    return () => {
      clearTimeout(startTimer);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [inView]);

  const triggerClap = () => {
    playClapperSound();
    runSmoothClap();
  };

  const handleMoodClick = (mood) => {
    setInternalMood(mood);
    if (onSelectMood) onSelectMood(mood);
    triggerClap();
  };

  return (
    <div ref={boardRef} className={`relative inline-block select-none overflow-visible ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        className="w-full h-auto drop-shadow-2xl overflow-visible"
      >
        <defs>
          {/* Master 3D Drop Shadows */}
          <filter id={`board-shadow-${uid}`} x="-20%" y="-15%" width="140%" height="150%">
            <feDropShadow dx="0" dy="36" stdDeviation="34" floodColor="#120024" floodOpacity="0.8" />
            <feDropShadow dx="0" dy="14" stdDeviation="18" floodColor="#e6007a" floodOpacity="0.3" />
          </filter>

          <filter id={`stick-shadow-${uid}`} x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="-2" dy="22" stdDeviation="18" floodColor="#0a0018" floodOpacity="0.85" />
            <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#3d026b" floodOpacity="0.5" />
          </filter>

          <filter id={`stick-cast-blur-${uid}`} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="16" />
          </filter>

          <filter id={`btn-shadow-${uid}`} x="-25%" y="-20%" width="150%" height="160%">
            <feDropShadow dx="0" dy="10" stdDeviation="9" floodColor="#160030" floodOpacity="0.45" />
            <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#000000" floodOpacity="0.25" />
          </filter>

          {/* Hover 3D Lift Shadow */}
          <filter id={`btn-hover-shadow-${uid}`} x="-35%" y="-30%" width="170%" height="180%">
            <feDropShadow dx="0" dy="22" stdDeviation="18" floodColor="#160030" floodOpacity="0.55" />
            <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#ff1493" floodOpacity="0.25" />
          </filter>

          {/* Active Selection Glow */}
          <filter id={`btn-active-glow-${uid}`} x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="0" stdDeviation="14" floodColor="#ff1493" floodOpacity="0.85" />
            <feDropShadow dx="0" dy="14" stdDeviation="14" floodColor="#160030" floodOpacity="0.5" />
          </filter>

          <filter id={`mini-play-shadow-${uid}`} x="-40%" y="-40%" width="180%" height="190%">
            <feDropShadow dx="1" dy="6" stdDeviation="5" floodColor="#180030" floodOpacity="0.55" />
          </filter>

          <filter id={`mini-play-hover-glow-${uid}`} x="-60%" y="-60%" width="220%" height="230%">
            <feDropShadow dx="0" dy="0" stdDeviation="9" floodColor="#ff1493" floodOpacity="0.8" />
            <feDropShadow dx="1" dy="7" stdDeviation="6" floodColor="#180030" floodOpacity="0.6" />
          </filter>

          <filter id={`specular-soft-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" />
          </filter>

          <filter id={`pink-glow-blur-${uid}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="34" />
          </filter>

          {/* Card CSS Hover & Micro-Animation Rules */}
          <style>{`
            .mood-card-group {
              cursor: pointer;
              -webkit-tap-highlight-color: transparent;
            }
            /* 3D Play Button In-Place Center-Scaling & Neon Hover Glow */
            .play-btn-wrapper {
              cursor: pointer;
              -webkit-tap-highlight-color: transparent;
            }
            .play-btn-scaler {
              transform-box: fill-box;
              transform-origin: center center;
              transition: transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.28s ease;
            }
            .play-btn-wrapper:hover .play-btn-scaler {
              transform: scale(1.15);
              filter: url(#mini-play-hover-glow-${uid});
            }
            .play-btn-wrapper:active .play-btn-scaler {
              transform: scale(0.92);
              transition-duration: 0.1s;
            }
            .mood-card-tile {
              transform-box: fill-box;
              transform-origin: center center;
              transition: transform 0.32s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.32s ease;
            }
            .mood-card-group:hover .mood-card-tile {
              transform: translateY(-8px) scale(1.035);
              filter: url(#btn-hover-shadow-${uid});
            }
            .mood-card-group:active .mood-card-tile {
              transform: translateY(-2px) scale(1.01);
            }
            .mood-icon-scale {
              transform-box: fill-box;
              transform-origin: center center;
              transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
            }
            .mood-card-group:hover .mood-icon-scale {
              transform: scale(1.08);
            }
            .mood-card-group:hover .mood-text {
              fill: #9333ea;
              transition: fill 0.25s ease;
            }
            @keyframes sunSpinSlow {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            .mood-card-group:hover .sun-rays-rot {
              animation: sunSpinSlow 12s linear infinite;
              transform-origin: 0px 0px;
            }
            @keyframes heartPulseAnim {
              0%, 100% { transform: scale(0.98); }
              50% { transform: scale(1.06); }
            }
            .mood-card-group:hover .heart-pulse-group {
              animation: heartPulseAnim 0.8s ease-in-out infinite;
              transform-origin: center;
            }
            @keyframes boltGlowAnim {
              0%, 100% { filter: brightness(1); }
              50% { filter: brightness(1.25) drop-shadow(0 0 6px #ffea00); }
            }
            .mood-card-group:hover .bolt-glow-group {
              animation: boltGlowAnim 0.75s ease-in-out infinite;
            }
            @keyframes rainDripAnim {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(3px); }
            }
            .mood-card-group:hover .raindrop-group {
              animation: rainDripAnim 0.65s ease-in-out infinite;
            }
            @keyframes dumbbellWiggleAnim {
              0%, 100% { transform: rotate(0deg); }
              25% { transform: rotate(-5deg); }
              75% { transform: rotate(5deg); }
            }
            .mood-card-group:hover .dumbbell-wiggle {
              animation: dumbbellWiggleAnim 0.7s ease-in-out infinite;
              transform-origin: 0px 0px;
            }
            @keyframes chillGlowAnim {
              0%, 100% { filter: brightness(1); }
              50% { filter: brightness(1.2) drop-shadow(0 0 6px #7dd3fc); }
            }
            .mood-card-group:hover .chill-glow-group {
              animation: chillGlowAnim 1.2s ease-in-out infinite;
            }
            @keyframes targetGlowAnim {
              0%, 100% { filter: brightness(1); }
              50% { filter: brightness(1.25) drop-shadow(0 0 6px #06b6d4); }
            }
            .mood-card-group:hover .target-glow-group {
              animation: targetGlowAnim 0.85s ease-in-out infinite;
            }
            @keyframes lotusGlowAnim {
              0%, 100% { filter: brightness(1); }
              50% { filter: brightness(1.22) drop-shadow(0 0 6px #f472b6); }
            }
            .mood-card-group:hover .lotus-glow-group {
              animation: lotusGlowAnim 1.1s ease-in-out infinite;
            }
          `}</style>

          {/* Clip Paths */}
          <clipPath id={`body-face-clip-${uid}`}>
            <rect x="36" y="324" width="952" height="644" rx="86" ry="86" />
          </clipPath>

          <clipPath id={`stick-capsule-clip-${uid}`}>
            <rect x="0" y="0" width="914" height="172" rx="86" ry="86" />
          </clipPath>

          {/* Gradients: Body */}
          <linearGradient id={`body-outer-bevel-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#802af0" />
            <stop offset="25%" stopColor="#550ecd" />
            <stop offset="55%" stopColor="#7a0aa8" />
            <stop offset="78%" stopColor="#c70fa5" />
            <stop offset="100%" stopColor="#ff269a" />
          </linearGradient>

          <linearGradient id={`body-bottom-lip-${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#34038c" />
            <stop offset="25%" stopColor="#46028a" />
            <stop offset="55%" stopColor="#6e0380" />
            <stop offset="76%" stopColor="#b80588" />
            <stop offset="90%" stopColor="#f00f92" />
            <stop offset="100%" stopColor="#ff2c9e" />
          </linearGradient>

          <linearGradient id={`body-face-grad-${uid}`} x1="0%" y1="20%" x2="100%" y2="80%">
            <stop offset="0%" stopColor="#6413f0" />
            <stop offset="20%" stopColor="#560fd8" />
            <stop offset="42%" stopColor="#750ab8" />
            <stop offset="65%" stopColor="#a80ca8" />
            <stop offset="80%" stopColor="#d9119f" />
            <stop offset="92%" stopColor="#fa1b94" />
            <stop offset="100%" stopColor="#ff2d9b" />
          </linearGradient>

          <linearGradient id={`body-vert-shading-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.22" />
            <stop offset="14%" stopColor="#ffffff" stopOpacity="0.06" />
            <stop offset="50%" stopColor="#000000" stopOpacity="0.0" />
            <stop offset="86%" stopColor="#000000" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.16" />
          </linearGradient>

          <radialGradient id={`pink-glow-rad-${uid}`} cx="88%" cy="75%" r="55%">
            <stop offset="0%" stopColor="#ff1a92" stopOpacity="0.85" />
            <stop offset="35%" stopColor="#ff2ca6" stopOpacity="0.6" />
            <stop offset="65%" stopColor="#e8139a" stopOpacity="0.3" />
            <stop offset="90%" stopColor="#b20db3" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#800bb8" stopOpacity="0" />
          </radialGradient>

          <linearGradient id={`body-top-rim-${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#731ff5" stopOpacity="0" />
            <stop offset="25%" stopColor="#9a52fc" stopOpacity="0.35" />
            <stop offset="45%" stopColor="#dfc6ff" stopOpacity="0.8" />
            <stop offset="68%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="86%" stopColor="#fca8eb" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ff4bb8" stopOpacity="0.85" />
          </linearGradient>

          <linearGradient id={`body-bot-rim-${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.3" />
            <stop offset="35%" stopColor="#a855f7" stopOpacity="0.5" />
            <stop offset="65%" stopColor="#ec4899" stopOpacity="0.85" />
            <stop offset="85%" stopColor="#ffa6df" stopOpacity="1" />
            <stop offset="100%" stopColor="#ff3da8" stopOpacity="0.95" />
          </linearGradient>

          {/* Gradients: Stick */}
          <linearGradient id={`stick-base-grad-${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#36038a" />
            <stop offset="18%" stopColor="#46059c" />
            <stop offset="45%" stopColor="#5b08b0" />
            <stop offset="70%" stopColor="#880aa6" />
            <stop offset="88%" stopColor="#ca109c" />
            <stop offset="100%" stopColor="#f61a9c" />
          </linearGradient>

          <linearGradient id={`stripe-grad-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="25%" stopColor="#f8f2fc" />
            <stop offset="65%" stopColor="#dfd2f6" />
            <stop offset="88%" stopColor="#c1abe7" />
            <stop offset="100%" stopColor="#a48cd8" />
          </linearGradient>

          <linearGradient id={`stick-cyl-lighting-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.38" />
            <stop offset="18%" stopColor="#ffffff" stopOpacity="0.12" />
            <stop offset="55%" stopColor="#000000" stopOpacity="0.0" />
            <stop offset="82%" stopColor="#000000" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.55" />
          </linearGradient>

          <radialGradient id={`stick-right-glow-${uid}`} cx="85%" cy="50%" r="55%">
            <stop offset="0%" stopColor="#ff28a6" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#ff1692" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#d10d9e" stopOpacity="0" />
          </radialGradient>

          {/* Mini Play Shape and Gradients (Centered at 0, 0 for in-place scale) */}
          <path id={`mini-play-shape-${uid}`} d="M -24 -25 C -24 -30 -18 -33 -14 -30 L 24 -6 C 28 -3 28 3 24 6 L -14 30 C -18 33 -24 30 -24 25 Z" />

          <linearGradient id={`mini-play-face-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="55%" stopColor="#faf5fe" />
            <stop offset="100%" stopColor="#eed8f8" />
          </linearGradient>

          <linearGradient id={`mini-play-side-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#dfb6f5" />
            <stop offset="100%" stopColor="#b47cd4" />
          </linearGradient>

          {/* Button Card 3D Base Gradients */}
          <linearGradient id={`btn-3d-extrusion-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ded5f2" />
            <stop offset="50%" stopColor="#c7b8e8" />
            <stop offset="100%" stopColor="#a996d2" />
          </linearGradient>

          <linearGradient id={`btn-card-bg-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="55%" stopColor="#fdfcff" />
            <stop offset="85%" stopColor="#f5effc" />
            <stop offset="100%" stopColor="#ebe1f7" />
          </linearGradient>

          <linearGradient id={`btn-top-sheen-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="20%" stopColor="#ffffff" stopOpacity="0.4" />
            <stop offset="55%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          {/* 3D Icon Gradients */}
          <radialGradient id={`sun-face-grad-${uid}`} cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#fff866" />
            <stop offset="40%" stopColor="#ffcc00" />
            <stop offset="85%" stopColor="#ff9900" />
            <stop offset="100%" stopColor="#f57c00" />
          </radialGradient>
          <linearGradient id={`sun-ray-grad-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffcc00" />
            <stop offset="100%" stopColor="#f57c00" />
          </linearGradient>

          <linearGradient id={`moon-grad-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="60%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
          <linearGradient id={`cloud-grad-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="35%" stopColor="#eff6ff" />
            <stop offset="75%" stopColor="#bfdbfe" />
            <stop offset="100%" stopColor="#93c5fd" />
          </linearGradient>

          <linearGradient id={`bolt-grad-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff852" />
            <stop offset="40%" stopColor="#ffcc00" />
            <stop offset="100%" stopColor="#f58e00" />
          </linearGradient>

          <radialGradient id={`heart-grad-1-${uid}`} cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#ff66b2" />
            <stop offset="40%" stopColor="#ff1a8c" />
            <stop offset="85%" stopColor="#d6006e" />
            <stop offset="100%" stopColor="#99004d" />
          </radialGradient>
          <radialGradient id={`heart-grad-2-${uid}`} cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#ff80bf" />
            <stop offset="60%" stopColor="#ff3399" />
            <stop offset="100%" stopColor="#b30059" />
          </radialGradient>

          <radialGradient id={`target-purple-${uid}`} cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#e879f9" />
            <stop offset="50%" stopColor="#c026d3" />
            <stop offset="100%" stopColor="#701a75" />
          </radialGradient>

          <linearGradient id={`raincloud-grad-${uid}`} x1="30%" y1="0%" x2="70%" y2="100%">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="50%" stopColor="#4f46e5" />
            <stop offset="100%" stopColor="#282299" />
          </linearGradient>
          <linearGradient id={`raindrop-grad-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#67e8f9" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#0e7490" />
          </linearGradient>

          <linearGradient id={`lotus-petal-1-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f472b6" />
            <stop offset="60%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#be185d" />
          </linearGradient>
          <linearGradient id={`lotus-petal-2-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fbcfe8" />
            <stop offset="65%" stopColor="#f472b6" />
            <stop offset="100%" stopColor="#db2777" />
          </linearGradient>

          <linearGradient id={`dumbbell-grad-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="45%" stopColor="#7c3aed" />
            <stop offset="85%" stopColor="#5b21b6" />
            <stop offset="100%" stopColor="#3c1075" />
          </linearGradient>
        </defs>

        {/* ============================================================== */}
        {/* 1. LOWER BODY                                                  */}
        {/* ============================================================== */}
        <g id="body-group" filter={`url(#board-shadow-${uid})`}>
          <rect x="24" y="320" width="976" height="640" rx="96" ry="96" fill={`url(#body-outer-bevel-${uid})`} />

          <path
            d="M 32 810 L 32 869 Q 32 960 130 960 L 894 960 Q 992 960 992 869 L 992 810"
            fill="none"
            stroke={`url(#body-bottom-lip-${uid})`}
            strokeWidth="15"
            strokeLinecap="round"
          />

          <g clipPath={`url(#body-face-clip-${uid})`}>
            <rect x="36" y="328" width="952" height="628" rx="84" ry="84" fill={`url(#body-face-grad-${uid})`} />
            <rect x="36" y="328" width="952" height="628" rx="84" ry="84" fill={`url(#body-vert-shading-${uid})`} />
            <rect x="36" y="328" width="952" height="628" rx="84" ry="84" fill={`url(#pink-glow-rad-${uid})`} />
          </g>

          <path
            d="M 130 328 L 890 328 Q 990 328 990 428"
            fill="none"
            stroke={`url(#body-top-rim-${uid})`}
            strokeWidth="7.5"
            strokeLinecap="round"
            opacity="0.95"
            filter={`url(#specular-soft-${uid})`}
          />

          {/* Continuous Smooth 3D Bottom Rim Highlight */}
          <path
            d="M 38 680 L 38 860 Q 38 954 130 954 L 890 954 Q 988 954 988 860 L 988 680"
            fill="none"
            stroke={`url(#body-bot-rim-${uid})`}
            strokeWidth="8.5"
            strokeLinecap="round"
            opacity="0.95"
            filter={`url(#specular-soft-${uid})`}
          />
        </g>

        {/* ============================================================== */}
        {/* 2. SHADOW CAST BY STICK ONTO LOWER BODY                        */}
        {/* ============================================================== */}
        <g
          id="stick-cast-shadow"
          transform={`translate(157.25, 271.61) rotate(${shadowAngle}) translate(-157.25, -271.61)`}
        >
          <path
            d="M 40 310 Q 280 270 540 215 L 540 245 Q 260 315 40 345 Z"
            fill="#080012"
            opacity={0.4 + (13.5 + stickAngle) * 0.02}
            filter={`url(#stick-cast-blur-${uid})`}
          />
          <ellipse cx="180" cy="335" rx="120" ry="22" fill="#090014" opacity="0.45" filter={`url(#stick-cast-blur-${uid})`} />
        </g>

        {/* ============================================================== */}
        {/* 3. TOP SOUNDWAVE + MINI PLAY BUTTON                            */}
        {/* ============================================================== */}
        <g id="top-audio-header">
          <line x1="195" y1="420" x2="280" y2="420" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />

          <line x1="286" y1="411" x2="286" y2="429" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" opacity="0.9">
            <animate attributeName="y1" values="411;416;407;411" dur="1.2s" repeatCount="indefinite" />
            <animate attributeName="y2" values="429;424;433;429" dur="1.2s" repeatCount="indefinite" />
          </line>
          <line x1="298" y1="405" x2="298" y2="435" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" opacity="0.9">
            <animate attributeName="y1" values="405;398;412;405" dur="0.9s" repeatCount="indefinite" />
            <animate attributeName="y2" values="435;442;428;435" dur="0.9s" repeatCount="indefinite" />
          </line>
          <line x1="310" y1="396" x2="310" y2="444" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" opacity="0.95">
            <animate attributeName="y1" values="396;408;390;396" dur="1.3s" repeatCount="indefinite" />
            <animate attributeName="y2" values="444;432;450;444" dur="1.3s" repeatCount="indefinite" />
          </line>
          <line x1="322" y1="388" x2="322" y2="452" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" opacity="1">
            <animate attributeName="y1" values="388;398;382;388" dur="1.05s" repeatCount="indefinite" />
            <animate attributeName="y2" values="452;442;458;452" dur="1.05s" repeatCount="indefinite" />
          </line>
          <line x1="334" y1="398" x2="334" y2="442" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" opacity="0.95">
            <animate attributeName="y1" values="398;390;408;398" dur="1.1s" repeatCount="indefinite" />
            <animate attributeName="y2" values="442;450;432;442" dur="1.1s" repeatCount="indefinite" />
          </line>
          <line x1="346" y1="393" x2="346" y2="447" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" opacity="0.95">
            <animate attributeName="y1" values="393;405;388;393" dur="0.85s" repeatCount="indefinite" />
            <animate attributeName="y2" values="447;435;452;447" dur="0.85s" repeatCount="indefinite" />
          </line>
          <line x1="358" y1="406" x2="358" y2="434" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" opacity="0.9">
            <animate attributeName="y1" values="406;412;400;406" dur="1.15s" repeatCount="indefinite" />
            <animate attributeName="y2" values="434;428;440;434" dur="1.15s" repeatCount="indefinite" />
          </line>
          <line x1="370" y1="412" x2="370" y2="428" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" opacity="0.85">
            <animate attributeName="y1" values="412;408;415;412" dur="1.25s" repeatCount="indefinite" />
            <animate attributeName="y2" values="428;432;425;428" dur="1.25s" repeatCount="indefinite" />
          </line>

          <line x1="376" y1="420" x2="452" y2="420" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />

          {/* Mini 3D Play Button */}
          <g
            id="mini-play-group"
            transform="translate(512, 420)"
            className="play-btn-wrapper"
            onClick={triggerClap}
          >
            {/* Stable invisible circular hit target so cursor never leaves during scaling */}
            <circle cx="0" cy="0" r="44" fill="transparent" />

            {/* Visual 3D geometry scaled centered around (0, 0) */}
            <g className="play-btn-scaler" filter={`url(#mini-play-shadow-${uid})`}>
              <use href={`#mini-play-shape-${uid}`} fill={`url(#mini-play-side-${uid})`} transform="translate(1, 6)" />
              <use href={`#mini-play-shape-${uid}`} fill={`url(#mini-play-face-${uid})`} />
              <path d="M -22 -22 C -24 -14 -24 24 -21 30 L -22 -22 Z" fill="#ffffff" opacity="0.75" />
            </g>
          </g>

          {/* Right Soundwave */}
          <line x1="574" y1="420" x2="660" y2="420" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />

          <line x1="666" y1="412" x2="666" y2="428" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" opacity="0.85">
            <animate attributeName="y1" values="412;408;415;412" dur="1.2s" repeatCount="indefinite" />
            <animate attributeName="y2" values="428;432;425;428" dur="1.2s" repeatCount="indefinite" />
          </line>
          <line x1="678" y1="406" x2="678" y2="434" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" opacity="0.9">
            <animate attributeName="y1" values="406;400;412;406" dur="0.95s" repeatCount="indefinite" />
            <animate attributeName="y2" values="434;440;428;434" dur="0.95s" repeatCount="indefinite" />
          </line>
          <line x1="690" y1="393" x2="690" y2="447" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" opacity="0.95">
            <animate attributeName="y1" values="393;387;404;393" dur="1.1s" repeatCount="indefinite" />
            <animate attributeName="y2" values="447;453;436;447" dur="1.1s" repeatCount="indefinite" />
          </line>
          <line x1="702" y1="398" x2="702" y2="442" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" opacity="0.95">
            <animate attributeName="y1" values="398;408;390;398" dur="1.3s" repeatCount="indefinite" />
            <animate attributeName="y2" values="442;432;450;442" dur="1.3s" repeatCount="indefinite" />
          </line>
          <line x1="714" y1="388" x2="714" y2="452" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" opacity="1">
            <animate attributeName="y1" values="388;398;382;388" dur="1.05s" repeatCount="indefinite" />
            <animate attributeName="y2" values="452;442;458;452" dur="1.05s" repeatCount="indefinite" />
          </line>
          <line x1="726" y1="396" x2="726" y2="444" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" opacity="0.95">
            <animate attributeName="y1" values="396;390;406;396" dur="0.88s" repeatCount="indefinite" />
            <animate attributeName="y2" values="444;450;434;444" dur="0.88s" repeatCount="indefinite" />
          </line>
          <line x1="738" y1="405" x2="738" y2="435" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" opacity="0.9">
            <animate attributeName="y1" values="405;412;398;405" dur="1.2s" repeatCount="indefinite" />
            <animate attributeName="y2" values="435;428;442;435" dur="1.2s" repeatCount="indefinite" />
          </line>
          <line x1="750" y1="411" x2="750" y2="429" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" opacity="0.85">
            <animate attributeName="y1" values="411;407;415;411" dur="1.15s" repeatCount="indefinite" />
            <animate attributeName="y2" values="429;433;425;429" dur="1.15s" repeatCount="indefinite" />
          </line>

          <line x1="756" y1="420" x2="840" y2="420" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
        </g>

        {/* ============================================================== */}
        {/* 4. 8 3D CLAY MOOD CARDS GRID WITH HOVER ANIMATION              */}
        {/* ============================================================== */}

        {/* 1. HAPPY */}
        <g
          id="card-happy"
          transform="translate(78, 490)"
          className="mood-card-group"
          onClick={() => handleMoodClick('Happy')}
        >
          <g
            className="mood-card-tile"
            filter={currentMood === 'Happy' ? `url(#btn-active-glow-${uid})` : `url(#btn-shadow-${uid})`}
          >
            {/* 3D Extrusion Depth Rim */}
            <rect width="212" height="194" rx="38" fill={`url(#btn-3d-extrusion-${uid})`} transform="translate(0, 6)" />

            {/* Front Card Cushion Face */}
            <rect
              width="212"
              height="194"
              rx="38"
              fill={`url(#btn-card-bg-${uid})`}
              stroke={currentMood === 'Happy' ? '#ff1493' : '#ffffff'}
              strokeWidth={currentMood === 'Happy' ? '3' : '2'}
            />
            {/* Top Specular Sheen */}
            <rect width="212" height="194" rx="38" fill={`url(#btn-top-sheen-${uid})`} />

            {/* Bottom Inner Bevel Shade */}
            <path d="M 28 190 Q 106 195 184 190 Q 170 182 106 182 Q 42 182 28 190 Z" fill="#d0c4ea" opacity="0.45" />

            {/* 3D Sun Icon */}
            <g className="mood-icon-wrapper" transform="translate(106, 74)">
              <g className="sun-rays-rot" transform="scale(1.4)">
                {/* 12 Sun Rays with Under-Shadow Bevel */}
                <g fill="#c2410c" opacity="0.38" transform="translate(0, 2)">
                  <path d="M 0 -36 L 5 -25 L -5 -25 Z" />
                  <path d="M 0 36 L 5 25 L -5 25 Z" />
                  <path d="M -36 0 L -25 5 L -25 -5 Z" />
                  <path d="M 36 0 L 25 5 L 25 -5 Z" />
                  <path d="M -25 -25 L -17 -25 L -25 -17 Z" />
                  <path d="M 25 -25 L 17 -25 L 25 -17 Z" />
                  <path d="M -25 25 L -17 25 L -25 17 Z" />
                  <path d="M 25 25 L 17 25 L 25 17 Z" />
                  <path d="M -12 -33 L -6 -23 L -16 -21 Z" />
                  <path d="M 12 -33 L 6 -23 L 16 -21 Z" />
                  <path d="M -12 33 L -6 23 L -16 21 Z" />
                  <path d="M 12 33 L 6 23 L 16 21 Z" />
                </g>
                <g fill={`url(#sun-ray-grad-${uid})`}>
                  <path d="M 0 -36 L 5 -25 L -5 -25 Z" />
                  <path d="M 0 36 L 5 25 L -5 25 Z" />
                  <path d="M -36 0 L -25 5 L -25 -5 Z" />
                  <path d="M 36 0 L 25 5 L 25 -5 Z" />
                  <path d="M -25 -25 L -17 -25 L -25 -17 Z" />
                  <path d="M 25 -25 L 17 -25 L 25 -17 Z" />
                  <path d="M -25 25 L -17 25 L -25 17 Z" />
                  <path d="M 25 25 L 17 25 L 25 17 Z" />
                  <path d="M -12 -33 L -6 -23 L -16 -21 Z" />
                  <path d="M 12 -33 L 6 -23 L 16 -21 Z" />
                  <path d="M -12 33 L -6 23 L -16 21 Z" />
                  <path d="M 12 33 L 6 23 L 16 21 Z" />
                </g>
              </g>

              {/* Plump 3D Sun Sphere */}
              <g transform="scale(1.4)">
                <circle cx="0" cy="2" r="25" fill="#ea580c" opacity="0.35" />
                <circle cx="0" cy="0" r="25" fill={`url(#sun-face-grad-${uid})`} />

                {/* Curved specular highlight bean */}
                <ellipse cx="-8" cy="-8" rx="10" ry="5.5" fill="#ffffff" opacity="0.8" transform="rotate(-30, -8, -8)" />

                {/* Rosy blush cheeks */}
                <ellipse cx="-15" cy="5" rx="3.5" ry="2.2" fill="#ff4d88" opacity="0.5" />
                <ellipse cx="15" cy="5" rx="3.5" ry="2.2" fill="#ff4d88" opacity="0.5" />

                {/* Glossy eyes */}
                <circle cx="-7.5" cy="-1.5" r="3.8" fill="#1e0847" />
                <circle cx="-6.2" cy="-2.8" r="1.4" fill="#ffffff" />

                <circle cx="7.5" cy="-1.5" r="3.8" fill="#1e0847" />
                <circle cx="8.8" cy="-2.8" r="1.4" fill="#ffffff" />

                {/* Smile with pink tongue */}
                <path d="M -7.5 7 Q 0 17 7.5 7 Z" fill="#1e0847" />
                <path d="M -4.5 11 Q 0 15 4.5 11 Z" fill="#ff3385" />
              </g>
            </g>

            <text
              x="106"
              y="164"
              textAnchor="middle"
              className="mood-text"
              fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
              fontWeight="900"
              fontSize="28"
              fill={currentMood === 'Happy' ? '#9333ea' : '#15033a'}
            >
              Happy
            </text>
          </g>
        </g>

        {/* 2. CHILL */}
        <g
          id="card-chill"
          transform="translate(300, 490)"
          className="mood-card-group"
          onClick={() => handleMoodClick('Chill')}
        >
          <g
            className="mood-card-tile"
            filter={currentMood === 'Chill' ? `url(#btn-active-glow-${uid})` : `url(#btn-shadow-${uid})`}
          >
            {/* 3D Extrusion Depth Rim */}
            <rect width="210" height="194" rx="38" fill={`url(#btn-3d-extrusion-${uid})`} transform="translate(0, 6)" />

            {/* Front Card Cushion Face */}
            <rect
              width="210"
              height="194"
              rx="38"
              fill={`url(#btn-card-bg-${uid})`}
              stroke={currentMood === 'Chill' ? '#ff1493' : '#ffffff'}
              strokeWidth={currentMood === 'Chill' ? '3' : '2'}
            />
            <rect width="210" height="194" rx="38" fill={`url(#btn-top-sheen-${uid})`} />
            <path d="M 28 190 Q 105 195 182 190 Q 168 182 105 182 Q 42 182 28 190 Z" fill="#d0c4ea" opacity="0.45" />

            {/* 3D Crescent Moon & Puffy Cloud Icon */}
            <g className="mood-icon-wrapper" transform="translate(105, 74)">
              <g className="chill-glow-group" transform="scale(1.42)">
                {/* Golden Sparkle Stars */}
                <path d="M 28 -22 Q 28 -15 35 -15 Q 28 -15 28 -8 Q 28 -15 21 -15 Q 28 -15 28 -22 Z" fill="#fbbf24" />
                <path d="M 28 -22 Q 28 -15 35 -15 Q 28 -15 28 -8 Z" fill="#f59e0b" opacity="0.4" />
                <circle cx="28" cy="-15" r="1.8" fill="#ffffff" opacity="0.85" />

                <path d="M 40 -4 Q 40 1 45 1 Q 40 1 40 6 Q 40 1 35 1 Q 40 1 40 -4 Z" fill="#f59e0b" />
                <path d="M -34 -12 Q -34 -7 -29 -7 Q -34 -7 -34 -2 Q -34 -7 -39 -7 Q -34 -7 -34 -12 Z" fill="#fbbf24" />

                {/* 3D Cyan Crescent Moon with Extrusion Depth */}
                <path
                  d="M 6 -32 C 22 -32 32 -20 32 -2 C 32 18 16 32 -2 32 C -11 32 -18 28 -22 23 C -6 20 6 8 6 -8 C 6 -22 -1 -30 6 -32 Z"
                  fill="#0369a1"
                  transform="translate(1, 4)"
                  opacity="0.6"
                />
                <path
                  d="M 6 -32 C 22 -32 32 -20 32 -2 C 32 18 16 32 -2 32 C -11 32 -18 28 -22 23 C -6 20 6 8 6 -8 C 6 -22 -1 -30 6 -32 Z"
                  fill={`url(#moon-grad-${uid})`}
                />
                <path
                  d="M 6 -28 C 16 -28 24 -18 24 -2 C 24 12 14 22 2 24 C 6 12 6 -6 6 -28 Z"
                  fill="#ffffff"
                  opacity="0.5"
                />

                {/* 3D Puffy Cloud Base with Depth Shadow */}
                <g transform="translate(0, 3.5)" fill="#7dd3fc" opacity="0.45">
                  <ellipse cx="-20" cy="18" rx="17" ry="14" />
                  <ellipse cx="6" cy="11" rx="21" ry="17" />
                  <ellipse cx="26" cy="16" rx="18" ry="14" />
                  <rect x="-24" y="13" width="54" height="15" rx="7.5" />
                </g>

                <ellipse cx="-20" cy="18" rx="17" ry="14" fill={`url(#cloud-grad-${uid})`} />
                <ellipse cx="6" cy="11" rx="21" ry="17" fill={`url(#cloud-grad-${uid})`} />
                <ellipse cx="26" cy="16" rx="18" ry="14" fill={`url(#cloud-grad-${uid})`} />
                <rect x="-24" y="13" width="54" height="15" rx="7.5" fill={`url(#cloud-grad-${uid})`} />

                {/* Specular gloss highlights on 3 lobes */}
                <ellipse cx="6" cy="5" rx="12" ry="5.5" fill="#ffffff" opacity="0.95" />
                <ellipse cx="-20" cy="12" rx="9" ry="4.5" fill="#ffffff" opacity="0.9" />
                <ellipse cx="25" cy="11" rx="9" ry="4.5" fill="#ffffff" opacity="0.9" />
              </g>
            </g>

            <text
              x="105"
              y="164"
              textAnchor="middle"
              className="mood-text"
              fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
              fontWeight="900"
              fontSize="28"
              fill={currentMood === 'Chill' ? '#9333ea' : '#15033a'}
            >
              Chill
            </text>
          </g>
        </g>

        {/* 3. ENERGETIC */}
        <g
          id="card-energetic"
          transform="translate(518, 490)"
          className="mood-card-group"
          onClick={() => handleMoodClick('Energetic')}
        >
          <g
            className="mood-card-tile"
            filter={currentMood === 'Energetic' ? `url(#btn-active-glow-${uid})` : `url(#btn-shadow-${uid})`}
          >
            {/* 3D Extrusion Depth Rim */}
            <rect width="210" height="194" rx="38" fill={`url(#btn-3d-extrusion-${uid})`} transform="translate(0, 6)" />

            <rect
              width="210"
              height="194"
              rx="38"
              fill={`url(#btn-card-bg-${uid})`}
              stroke={currentMood === 'Energetic' ? '#ff1493' : '#ffffff'}
              strokeWidth={currentMood === 'Energetic' ? '3' : '2'}
            />
            <rect width="210" height="194" rx="38" fill={`url(#btn-top-sheen-${uid})`} />
            <path d="M 28 190 Q 105 195 182 190 Q 168 182 105 182 Q 42 182 28 190 Z" fill="#d0c4ea" opacity="0.45" />

            {/* 3D Extruded Lightning Bolt Icon */}
            <g className="mood-icon-wrapper" transform="translate(105, 74)">
              <g className="bolt-glow-group" transform="scale(1.42)">
                {/* 4 Golden Energy Dash Capsules */}
                <path d="M 33 -14 L 44 -19" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round" />
                <path d="M 35 4 L 47 8" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round" />
                <path d="M 28 20 L 38 27" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round" />
                <path d="M -36 18 L -27 11" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round" />

                {/* 3D Extrusion Side (Deep Amber Edge) */}
                <path
                  d="M 9 -36 L -19 4 L -2 4 L -14 40 L 25 -7 L 7 -7 Z"
                  fill="#b45309"
                  transform="translate(4, 5)"
                />
                <path
                  d="M 9 -36 L -19 4 L -2 4 L -14 40 L 25 -7 L 7 -7 Z"
                  fill="#d97706"
                  transform="translate(2, 2.5)"
                />

                {/* Bolt Front Face */}
                <path d="M 9 -36 L -19 4 L -2 4 L -14 40 L 25 -7 L 7 -7 Z" fill={`url(#bolt-grad-${uid})`} />

                {/* 3D Specular Highlight Stripe */}
                <polygon points="9,-36 3,-36 -12,2 -2,2" fill="#ffffff" opacity="0.75" />
                <polygon points="-6,15 -14,40 1,-7 14,-7" fill="#ffffff" opacity="0.3" />
              </g>
            </g>

            <text
              x="105"
              y="164"
              textAnchor="middle"
              className="mood-text"
              fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
              fontWeight="900"
              fontSize="28"
              fill={currentMood === 'Energetic' ? '#9333ea' : '#15033a'}
            >
              Energetic
            </text>
          </g>
        </g>

        {/* 4. ROMANTIC */}
        <g
          id="card-romantic"
          transform="translate(736, 490)"
          className="mood-card-group"
          onClick={() => handleMoodClick('Romantic')}
        >
          <g
            className="mood-card-tile"
            filter={currentMood === 'Romantic' ? `url(#btn-active-glow-${uid})` : `url(#btn-shadow-${uid})`}
          >
            {/* 3D Extrusion Depth Rim */}
            <rect width="212" height="194" rx="38" fill={`url(#btn-3d-extrusion-${uid})`} transform="translate(0, 6)" />

            <rect
              width="212"
              height="194"
              rx="38"
              fill={`url(#btn-card-bg-${uid})`}
              stroke={currentMood === 'Romantic' ? '#ff1493' : '#ffffff'}
              strokeWidth={currentMood === 'Romantic' ? '3' : '2'}
            />
            <rect width="212" height="194" rx="38" fill={`url(#btn-top-sheen-${uid})`} />
            <path d="M 28 190 Q 106 195 184 190 Q 170 182 106 182 Q 42 182 28 190 Z" fill="#d0c4ea" opacity="0.45" />

            {/* 3 Plump 3D Clay Hearts */}
            <g className="mood-icon-wrapper" transform="translate(106, 74)">
              <g className="heart-pulse-group" transform="scale(1.42)">
                {/* Top-Right Heart (Medium) */}
                <g transform="translate(24, -16) scale(0.68)">
                  <path d="M 0 10 C -6 -12 -34 -12 -34 10 C -34 26 0 52 0 52 C 0 52 34 26 34 10 C 34 -12 6 -12 0 10 Z" fill="#881337" transform="translate(1, 4)" opacity="0.4" />
                  <path d="M 0 10 C -6 -12 -34 -12 -34 10 C -34 26 0 52 0 52 C 0 52 34 26 34 10 C 34 -12 6 -12 0 10 Z" fill={`url(#heart-grad-2-${uid})`} />
                  <ellipse cx="-12" cy="4" rx="7" ry="4.5" fill="#ffffff" opacity="0.75" transform="rotate(-30, -12, 4)" />
                </g>

                {/* Center Big Heart (Plump 3D) */}
                <g transform="translate(-10, 0) scale(0.98)">
                  <path d="M 0 10 C -6 -12 -34 -12 -34 10 C -34 26 0 52 0 52 C 0 52 34 26 34 10 C 34 -12 6 -12 0 10 Z" fill="#4c0519" transform="translate(2, 5)" opacity="0.4" />
                  <path d="M 0 10 C -6 -12 -34 -12 -34 10 C -34 26 0 52 0 52 C 0 52 34 26 34 10 C 34 -12 6 -12 0 10 Z" fill={`url(#heart-grad-1-${uid})`} />

                  {/* Specular gloss beans on both lobes */}
                  <ellipse cx="-13" cy="3" rx="9" ry="5.5" fill="#ffffff" opacity="0.8" transform="rotate(-32, -13, 3)" />
                  <ellipse cx="12" cy="5" rx="6" ry="3.5" fill="#ffffff" opacity="0.5" transform="rotate(25, 12, 5)" />

                  {/* Bottom rim specular bounce */}
                  <path d="M -8 38 C 0 46 8 38 8 38" stroke="#ffa6df" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.7" />
                </g>

                {/* Bottom-Right Heart (Cute Small) */}
                <g transform="translate(32, 12) scale(0.62)">
                  <path d="M 0 10 C -6 -12 -34 -12 -34 10 C -34 26 0 52 0 52 C 0 52 34 26 34 10 C 34 -12 6 -12 0 10 Z" fill="#881337" transform="translate(1, 3)" opacity="0.4" />
                  <path d="M 0 10 C -6 -12 -34 -12 -34 10 C -34 26 0 52 0 52 C 0 52 34 26 34 10 C 34 -12 6 -12 0 10 Z" fill={`url(#heart-grad-2-${uid})`} />
                  <ellipse cx="-10" cy="4" rx="5.5" ry="3.5" fill="#ffffff" opacity="0.75" transform="rotate(-30, -10, 4)" />
                </g>
              </g>
            </g>

            <text
              x="106"
              y="164"
              textAnchor="middle"
              className="mood-text"
              fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
              fontWeight="900"
              fontSize="28"
              fill={currentMood === 'Romantic' ? '#9333ea' : '#15033a'}
            >
              Romantic
            </text>
          </g>
        </g>

        {/* 5. FOCUS */}
        <g
          id="card-focus"
          transform="translate(78, 702)"
          className="mood-card-group"
          onClick={() => handleMoodClick('Focus')}
        >
          <g
            className="mood-card-tile"
            filter={currentMood === 'Focus' ? `url(#btn-active-glow-${uid})` : `url(#btn-shadow-${uid})`}
          >
            {/* 3D Extrusion Depth Rim */}
            <rect width="212" height="196" rx="38" fill={`url(#btn-3d-extrusion-${uid})`} transform="translate(0, 6)" />

            <rect
              width="212"
              height="196"
              rx="38"
              fill={`url(#btn-card-bg-${uid})`}
              stroke={currentMood === 'Focus' ? '#ff1493' : '#ffffff'}
              strokeWidth={currentMood === 'Focus' ? '3' : '2'}
            />
            <rect width="212" height="196" rx="38" fill={`url(#btn-top-sheen-${uid})`} />
            <path d="M 28 192 Q 106 197 184 192 Q 170 184 106 184 Q 42 184 28 192 Z" fill="#d0c4ea" opacity="0.45" />

            {/* 3D Target Disc + Cyan Arrow */}
            <g className="mood-icon-wrapper" transform="translate(106, 76)">
              <g className="target-glow-group" transform="scale(1.42)">
                {/* 3D Base Shadow & Extrusion */}
                <circle cx="0" cy="3.5" r="34" fill="#3b0764" opacity="0.45" />
                <circle cx="0" cy="0" r="34" fill="#581c87" />
                <circle cx="0" cy="0" r="31" fill={`url(#target-purple-${uid})`} />

                {/* White Ring */}
                <circle cx="0" cy="0" r="23" fill="#ffffff" />
                <circle cx="0" cy="1" r="21" fill="#e9d5ff" opacity="0.3" />

                {/* Inner Magenta Ring */}
                <circle cx="0" cy="0" r="16" fill="#c026d3" />
                <circle cx="0" cy="0" r="14" fill="#d946ef" />

                {/* Center Bullseye */}
                <circle cx="0" cy="0" r="9" fill="#ffffff" />
                <circle cx="0" cy="0" r="5" fill="#a21caf" />
                <circle cx="-1.5" cy="-1.5" r="1.5" fill="#ffffff" />

                {/* Specular Rim Glint */}
                <path d="M -24 -18 A 30 30 0 0 1 18 -24" stroke="#ffffff" strokeWidth="2.8" strokeLinecap="round" fill="none" opacity="0.75" />

                {/* 3D Cyan Arrow */}
                <g transform="translate(14, -14) rotate(45)">
                  <line x1="2" y1="26" x2="2" y2="-8" stroke="#000000" strokeWidth="4.5" strokeLinecap="round" opacity="0.3" />
                  <line x1="0" y1="24" x2="0" y2="-10" stroke="#0284c7" strokeWidth="4.5" strokeLinecap="round" />
                  <line x1="-1" y1="24" x2="-1" y2="-10" stroke="#7dd3fc" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
                  <polygon points="0,-8 -9,-20 0,-15 9,-20" fill="#38bdf8" />
                  <polygon points="0,-14 -11,-26 0,-21 11,-26" fill="#0284c7" />
                  <polygon points="0,-14 -8,-24 0,-20 0,-14" fill="#ffffff" opacity="0.6" />
                </g>
              </g>
            </g>

            <text
              x="106"
              y="164"
              textAnchor="middle"
              className="mood-text"
              fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
              fontWeight="900"
              fontSize="28"
              fill={currentMood === 'Focus' ? '#9333ea' : '#15033a'}
            >
              Focus
            </text>
          </g>
        </g>

        {/* 6. SAD */}
        <g
          id="card-sad"
          transform="translate(300, 702)"
          className="mood-card-group"
          onClick={() => handleMoodClick('Sad')}
        >
          <g
            className="mood-card-tile"
            filter={currentMood === 'Sad' ? `url(#btn-active-glow-${uid})` : `url(#btn-shadow-${uid})`}
          >
            {/* 3D Extrusion Depth Rim */}
            <rect width="210" height="196" rx="38" fill={`url(#btn-3d-extrusion-${uid})`} transform="translate(0, 6)" />

            <rect
              width="210"
              height="196"
              rx="38"
              fill={`url(#btn-card-bg-${uid})`}
              stroke={currentMood === 'Sad' ? '#ff1493' : '#ffffff'}
              strokeWidth={currentMood === 'Sad' ? '3' : '2'}
            />
            <rect width="210" height="196" rx="38" fill={`url(#btn-top-sheen-${uid})`} />
            <path d="M 28 192 Q 105 197 182 192 Q 168 184 105 184 Q 42 184 28 192 Z" fill="#d0c4ea" opacity="0.45" />

            {/* 3D Periwinkle Cloud & Droplets */}
            <g className="mood-icon-wrapper" transform="translate(105, 76)">
              <g transform="scale(1.42)">
                <g transform="translate(0, -8)">
                  <g transform="translate(0, 3)" fill="#1e1b4b" opacity="0.45">
                    <ellipse cx="-22" cy="5" rx="18" ry="14" />
                    <ellipse cx="3" cy="-4" rx="22" ry="18" />
                    <ellipse cx="24" cy="5" rx="16" ry="12" />
                    <rect x="-26" y="1" width="52" height="16" rx="8" />
                  </g>

                  <ellipse cx="-22" cy="5" rx="18" ry="14" fill={`url(#raincloud-grad-${uid})`} />
                  <ellipse cx="3" cy="-4" rx="22" ry="18" fill={`url(#raincloud-grad-${uid})`} />
                  <ellipse cx="24" cy="5" rx="16" ry="12" fill={`url(#raincloud-grad-${uid})`} />
                  <rect x="-26" y="1" width="52" height="16" rx="8" fill={`url(#raincloud-grad-${uid})`} />

                  <ellipse cx="2" cy="-9" rx="13" ry="5.5" fill="#ffffff" opacity="0.65" />
                  <ellipse cx="-20" cy="1" rx="8" ry="4" fill="#ffffff" opacity="0.55" />
                  <ellipse cx="22" cy="2" rx="7" ry="3.5" fill="#ffffff" opacity="0.5" />
                </g>

                {/* 3 3D Raindrops */}
                <g className="raindrop-group">
                  <g transform="translate(-20, 12)">
                    <path d="M 0 0 C 0 0 -7 10 -7 15 C -7 19 -4 22 0 22 C 4 22 7 19 7 15 C 7 10 0 0 0 0 Z" fill="#0284c7" transform="translate(0, 1.5)" opacity="0.4" />
                    <path d="M 0 0 C 0 0 -7 10 -7 15 C -7 19 -4 22 0 22 C 4 22 7 19 7 15 C 7 10 0 0 0 0 Z" fill={`url(#raindrop-grad-${uid})`} />
                    <ellipse cx="-2" cy="15" rx="1.8" ry="3" fill="#ffffff" opacity="0.85" />
                  </g>
                  <g transform="translate(0, 12)">
                    <path d="M 0 0 C 0 0 -7 10 -7 15 C -7 19 -4 22 0 22 C 4 22 7 19 7 15 C 7 10 0 0 0 0 Z" fill="#0284c7" transform="translate(0, 1.5)" opacity="0.4" />
                    <path d="M 0 0 C 0 0 -7 10 -7 15 C -7 19 -4 22 0 22 C 4 22 7 19 7 15 C 7 10 0 0 0 0 Z" fill={`url(#raindrop-grad-${uid})`} />
                    <ellipse cx="-2" cy="15" rx="1.8" ry="3" fill="#ffffff" opacity="0.85" />
                  </g>
                  <g transform="translate(20, 12)">
                    <path d="M 0 0 C 0 0 -7 10 -7 15 C -7 19 -4 22 0 22 C 4 22 7 19 7 15 C 7 10 0 0 0 0 Z" fill="#0284c7" transform="translate(0, 1.5)" opacity="0.4" />
                    <path d="M 0 0 C 0 0 -7 10 -7 15 C -7 19 -4 22 0 22 C 4 22 7 19 7 15 C 7 10 0 0 0 0 Z" fill={`url(#raindrop-grad-${uid})`} />
                    <ellipse cx="-2" cy="15" rx="1.8" ry="3" fill="#ffffff" opacity="0.85" />
                  </g>
                </g>
              </g>
            </g>

            <text
              x="105"
              y="164"
              textAnchor="middle"
              className="mood-text"
              fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
              fontWeight="900"
              fontSize="28"
              fill={currentMood === 'Sad' ? '#9333ea' : '#15033a'}
            >
              Sad
            </text>
          </g>
        </g>

        {/* 7. RELAX */}
        <g
          id="card-relax"
          transform="translate(518, 702)"
          className="mood-card-group"
          onClick={() => handleMoodClick('Relax')}
        >
          <g
            className="mood-card-tile"
            filter={currentMood === 'Relax' ? `url(#btn-active-glow-${uid})` : `url(#btn-shadow-${uid})`}
          >
            {/* 3D Extrusion Depth Rim */}
            <rect width="210" height="196" rx="38" fill={`url(#btn-3d-extrusion-${uid})`} transform="translate(0, 6)" />

            <rect
              width="210"
              height="196"
              rx="38"
              fill={`url(#btn-card-bg-${uid})`}
              stroke={currentMood === 'Relax' ? '#ff1493' : '#ffffff'}
              strokeWidth={currentMood === 'Relax' ? '3' : '2'}
            />
            <rect width="210" height="196" rx="38" fill={`url(#btn-top-sheen-${uid})`} />
            <path d="M 28 192 Q 105 197 182 192 Q 168 184 105 184 Q 42 184 28 192 Z" fill="#d0c4ea" opacity="0.45" />

            {/* 3D Blooming Lotus Flower */}
            <g className="mood-icon-wrapper" transform="translate(105, 78)">
              <g className="lotus-glow-group" transform="scale(1.42)">
                {/* Base Spreading Petals */}
                <path d="M 0 10 C -20 10 -40 5 -44 -3 C -46 -10 -32 -10 -20 2 C -10 8 0 10 0 10 Z" fill={`url(#lotus-petal-1-${uid})`} />
                <path d="M 0 10 C 20 10 40 5 44 -3 C 46 -10 32 -10 20 2 C 10 8 0 10 0 10 Z" fill={`url(#lotus-petal-1-${uid})`} />

                {/* Outer Diagonal Petals */}
                <path d="M 0 8 C -18 5 -35 -7 -32 -17 C -27 -22 -13 -10 0 8 Z" fill={`url(#lotus-petal-1-${uid})`} />
                <path d="M 0 8 C 18 5 35 -7 32 -17 C 27 -22 13 -10 0 8 Z" fill={`url(#lotus-petal-1-${uid})`} />

                {/* Middle Blooming Petals */}
                <path d="M 0 5 C -15 -8 -30 -24 -24 -28 C -17 -32 -7 -17 0 5 Z" fill={`url(#lotus-petal-2-${uid})`} />
                <path d="M 0 5 C 15 -8 30 -24 28 -28 C 21 -32 11 -17 0 5 Z" fill={`url(#lotus-petal-2-${uid})`} />

                {/* Tall Center Petal with Specular Spine */}
                <path d="M 0 10 C -15 3 -17 -26 0 -36 C 17 -26 15 3 0 10 Z" fill={`url(#lotus-petal-2-${uid})`} />
                <ellipse cx="0" cy="-15" rx="4" ry="12" fill="#ffffff" opacity="0.7" />
              </g>
            </g>

            <text
              x="105"
              y="164"
              textAnchor="middle"
              className="mood-text"
              fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
              fontWeight="900"
              fontSize="28"
              fill={currentMood === 'Relax' ? '#9333ea' : '#15033a'}
            >
              Relax
            </text>
          </g>
        </g>

        {/* 8. WORKOUT */}
        <g
          id="card-workout"
          transform="translate(736, 702)"
          className="mood-card-group"
          onClick={() => handleMoodClick('Workout')}
        >
          <g
            className="mood-card-tile"
            filter={currentMood === 'Workout' ? `url(#btn-active-glow-${uid})` : `url(#btn-shadow-${uid})`}
          >
            {/* 3D Extrusion Depth Rim */}
            <rect width="212" height="196" rx="38" fill={`url(#btn-3d-extrusion-${uid})`} transform="translate(0, 6)" />

            <rect
              width="212"
              height="196"
              rx="38"
              fill={`url(#btn-card-bg-${uid})`}
              stroke={currentMood === 'Workout' ? '#ff1493' : '#ffffff'}
              strokeWidth={currentMood === 'Workout' ? '3' : '2'}
            />
            <rect width="212" height="196" rx="38" fill={`url(#btn-top-sheen-${uid})`} />
            <path d="M 28 192 Q 106 197 184 192 Q 170 184 106 184 Q 42 184 28 192 Z" fill="#d0c4ea" opacity="0.45" />

            {/* 3D Purple Dumbbell Icon */}
            <g className="mood-icon-wrapper" transform="translate(106, 76)">
              <g className="dumbbell-wiggle" transform="scale(1.42)">
                {/* 3 Vibration / Sweat Marks */}
                <path d="M -14 -28 L -10 -21" stroke="#7c3aed" strokeWidth="4.5" strokeLinecap="round" />
                <path d="M 0 -31 L 0 -22" stroke="#7c3aed" strokeWidth="4.5" strokeLinecap="round" />
                <path d="M 14 -28 L 10 -21" stroke="#7c3aed" strokeWidth="4.5" strokeLinecap="round" />

                {/* Dumbbell Ambient Shadow */}
                <rect x="-26" y="-5" width="52" height="16" rx="8" fill="#1e1b4b" opacity="0.3" transform="translate(1, 4)" />

                {/* Center Handle Bar */}
                <rect x="-26" y="-7" width="52" height="14" rx="7" fill={`url(#dumbbell-grad-${uid})`} />
                <rect x="-16" y="-5.5" width="32" height="3" rx="1.5" fill="#ffffff" opacity="0.55" />

                {/* Left Weight Discs */}
                <ellipse cx="-24" cy="0" rx="12" ry="24" fill={`url(#dumbbell-grad-${uid})`} />
                <ellipse cx="-32" cy="0" rx="9" ry="19" fill="#581c87" />
                <ellipse cx="-38" cy="0" rx="7" ry="14" fill="#3b0764" />
                <circle cx="-38" cy="0" r="3.5" fill="#1e0847" />

                {/* Right Weight Discs */}
                <ellipse cx="24" cy="0" rx="12" ry="24" fill={`url(#dumbbell-grad-${uid})`} />
                <ellipse cx="32" cy="0" rx="9" ry="19" fill="#581c87" />
                <ellipse cx="38" cy="0" rx="7" ry="14" fill="#3b0764" />
                <circle cx="38" cy="0" r="3.5" fill="#1e0847" />

                {/* Specular gloss on discs */}
                <ellipse cx="-24" cy="-8" rx="5.5" ry="11" fill="#ffffff" opacity="0.5" />
                <ellipse cx="24" cy="-8" rx="5.5" ry="11" fill="#ffffff" opacity="0.5" />
              </g>
            </g>

            <text
              x="106"
              y="164"
              textAnchor="middle"
              className="mood-text"
              fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
              fontWeight="900"
              fontSize="28"
              fill={currentMood === 'Workout' ? '#9333ea' : '#15033a'}
            >
              Workout
            </text>
          </g>
        </g>

        {/* ============================================================== */}
        {/* 5. TOP CLAPPER STICK                                           */}
        {/* ============================================================== */}
        <g
          id="stick-group"
          className="cursor-pointer select-none"
          transform={`translate(157.25, 271.61) rotate(${stickAngle}) translate(-86, -86)`}
          onClick={triggerClap}
          filter={`url(#stick-shadow-${uid})`}
        >
          <g clipPath={`url(#stick-capsule-clip-${uid})`}>
            <rect x="0" y="0" width="914" height="172" fill={`url(#stick-base-grad-${uid})`} />

            <polygon points="140,-8 250,-8 385,180 275,180" fill={`url(#stripe-grad-${uid})`} />
            <polygon points="375,-8 485,-8 620,180 510,180" fill={`url(#stripe-grad-${uid})`} />
            <polygon points="610,-8 720,-8 855,180 745,180" fill={`url(#stripe-grad-${uid})`} />

            <rect x="758" y="0" width="156" height="172" fill={`url(#stick-right-glow-${uid})`} />
            <ellipse cx="86" cy="65" rx="55" ry="45" fill="#a75afc" opacity="0.35" filter={`url(#specular-soft-${uid})`} />

            <rect x="0" y="0" width="914" height="172" fill={`url(#stick-cyl-lighting-${uid})`} />
          </g>

          <path
            d="M 830 18 Q 904 45 904 86 Q 904 128 830 156"
            fill="none"
            stroke="#ff4bb8"
            strokeWidth="7"
            strokeLinecap="round"
            opacity="0.92"
            filter={`url(#specular-soft-${uid})`}
          />

          <path
            d="M 90 160 L 825 160"
            stroke="#120026"
            strokeWidth="6"
            strokeLinecap="round"
            opacity="0.55"
          />

          {/* 3D Hinge Screw / Inset Circle on Left */}
          <circle cx="86" cy="86" r="32" fill="#240242" opacity="0.5" />
          <circle cx="86" cy="86" r="30" fill={`url(#stick-base-grad-${uid})`} />
          <circle cx="86" cy="86" r="28" fill="#4c0a87" stroke="#9333ea" strokeWidth="2" />
          <circle cx="86" cy="84" r="14" fill="#ffffff" opacity="0.45" />
        </g>
      </svg>
    </div>
  );
};

export default MoodClapperboard;
