import React, { useState } from 'react';
import { SectionHeader } from '../../common/SectionHeader';
import { useInView } from '../../../hooks/useInView';
import { recentlyPlayedData } from './RecentlyPlayedData';

/* =========================================================================
   3D SKEUOMORPHIC PLAYLIST ICON SHOWCASE (INTERNAL)
   ========================================================================= */

/**
 * PlaylistIcon Component
 * A premium 3D music playlist card featuring custom typography,
 * skeuomorphic claymorphic styling, and an interactive 3D play/pause button.
 * 
 * 100% Self-Contained: All CSS animations, lighting shaders, container queries,
 * and responsive layouts are embedded directly within this file.
 */
export function PlaylistIconShowcase({
  title = 'Chill Melodies',
  description = 'Your daily soundtrack for deep focus, calm vibes, and melodic relaxation. Curated with handpicked ambient beats.',
  badge = 'Recently Played',
  meta = '32 Tracks • 1 hr 48 min',
  size = '100%',
  interactive = true,
  showGlow = true,
  playing: controlledPlaying,
  onTogglePlay,
  fullPage = true,
  className = '',
  style = {},
  ...props
}) {
  const [internalPlaying, setInternalPlaying] = useState(false);
  const isPlaying = controlledPlaying !== undefined ? controlledPlaying : internalPlaying;
  const [viewRef, inView] = useInView({ threshold: 0.1 });

  const handlePlayToggle = (e) => {
    e.stopPropagation();
    if (onTogglePlay) {
      onTogglePlay(!isPlaying);
    } else {
      setInternalPlaying((prev) => !prev);
    }
  };

  const sizeValue = typeof size === 'number' ? `${size}px` : size;

  const iconElement = (
    <div
      ref={fullPage ? undefined : viewRef}
      className={`playlist-icon-root ${className} ${!fullPage && inView ? 'is-in-view' : ''}`}
      style={{
        '--pi-size': sizeValue,
        ...style,
      }}
      role="region"
      aria-label={`${title} - 3D Music Playlist`}
      {...props}
    >
      {/* Soft Ambient Canvas Glow */}
      {showGlow && <div className="playlist-icon-canvas-glow" aria-hidden="true" />}

      {/* Realistic Ground Shadow */}
      {showGlow && <div className="playlist-icon-ground-shadow" aria-hidden="true" />}

      {/* Main Responsive 3D Container with Floating Animation */}
      <div className={`playlist-icon-component ${interactive ? 'interactive' : ''}`}>
        <div className="playlist-float-wrap">
          {/* Outer 3D Slab with Beveled Rim and Specular Highlights */}
          <div className="playlist-icon-outer">
            {/* Recessed Inner Purple Face */}
            <div className="playlist-icon-face">
              {/* Top-Left Ambient Gloss Sheen */}
              <div className="playlist-icon-sheen" aria-hidden="true" />

              {/* Content Area: Heading + Description + Meta */}
              <div className="playlist-content-box">
                <div className="playlist-content-main">
                  {badge && (
                    <div className="playlist-badge">
                      <span className="playlist-badge-dot" />
                      <span>{badge}</span>
                    </div>
                  )}
                  <h2 className="playlist-title">{title}</h2>
                  <p className="playlist-description">{description}</p>
                </div>

                {meta && (
                  <div className="playlist-meta-row">
                    <span className="playlist-meta-pill">{meta}</span>
                  </div>
                )}
              </div>

              {/* 3D Action Button (Play / Pause in Bottom-Right) */}
              <button
                type="button"
                className="play-btn-wrap"
                onClick={handlePlayToggle}
                title={isPlaying ? 'Pause' : 'Play'}
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <div className="pause-btn-shape">
                    <div className="pause-bar" />
                    <div className="pause-bar" />
                  </div>
                ) : (
                  <div className="play-btn-shape" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Embedded Complete Self-Contained Stylesheet */}
      <style>{`
        :root {
          /* Background Canvas Palette */
          --pi-bg-light: #fcf8ff;
          --pi-bg-mid: #f3e6fd;
          --pi-bg-lavender: #e1c7fb;
          --pi-bg-deep: #dcbcff;
          --pi-ambient-glow: rgba(185, 120, 255, 0.16);

          /* Outer Rim & Bevel Colors */
          --pi-rim-highlight: #ffffff;
          --pi-rim-magenta-bright: #f064ff;
          --pi-rim-magenta-mid: #d835ff;
          --pi-rim-purple-vibrant: #9e1ff5;
          --pi-rim-purple-deep: #6c00d8;
          --pi-rim-purple-dark: #4a00a2;
          --pi-rim-neon-fuchsia: #f50aff;

          /* Inner Face Colors */
          --pi-face-top: #8a15f0;
          --pi-face-mid-high: #6f0ddc;
          --pi-face-mid: #4d04be;
          --pi-face-mid-low: #3a0198;
          --pi-face-bottom: #2d0080;
          --pi-face-sheen-light: rgba(220, 105, 255, 0.48);

          /* White 3D Clay Elements */
          --pi-item-white-top: #ffffff;
          --pi-item-white-upper: #faf5fe;
          --pi-item-white-mid: #ede0f9;
          --pi-item-white-lavender: #d8bef3;

          /* 3D Shadows */
          --pi-shadow-contact: rgba(14, 0, 58, 0.85);
          --pi-shadow-mid: rgba(20, 1, 72, 0.65);
          --pi-shadow-ambient: rgba(30, 2, 88, 0.38);
        }

        .playlist-page-wrapper * {
          box-sizing: border-box;
        }

        /* Full Page Centered Layout Wrapper */
        .playlist-page-wrapper {
          min-height: auto;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px 8px;
          box-sizing: border-box;
          user-select: none;
          background: radial-gradient(circle at 50% 35%, #ffffff 0%, #f4e9fd 45%, #e2cbfb 85%, #dcbeff 100%);
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          overflow: hidden;
        }

        @media (min-width: 640px) {
          .playlist-page-wrapper {
            padding: 24px 16px;
          }
        }

        @media (min-width: 1024px) {
          .playlist-page-wrapper {
            padding: 36px 28px;
          }
        }

        .playlist-responsive-container {
          width: 100%;
          max-width: min(838px, calc((100dvh - 32px) * 1.218));
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
        }

        /* Base Component Wrapper */
        .playlist-icon-root {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: var(--pi-size, 100%);
          max-width: 100%;
          box-sizing: border-box;
        }

        /* Ambient Canvas Glow behind the icon */
        .playlist-icon-canvas-glow {
          position: absolute;
          width: 115%;
          height: 115%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: radial-gradient(
            ellipse at 50% 50%,
            var(--pi-ambient-glow) 0%,
            rgba(160, 70, 245, 0.05) 55%,
            transparent 75%
          );
          pointer-events: none;
          z-index: 0;
          opacity: 0;
        }

        .is-in-view .playlist-icon-canvas-glow {
          animation: glowEntrance 1.4s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        /* Ground shadow below the icon */
        .playlist-icon-ground-shadow {
          position: absolute;
          width: 90%;
          height: 15%;
          bottom: -4%;
          left: 5%;
          background: radial-gradient(
            ellipse at 50% 50%,
            rgba(140, 70, 230, 0.28) 0%,
            rgba(120, 40, 215, 0.15) 45%,
            rgba(100, 20, 190, 0.04) 70%,
            transparent 80%
          );
          filter: blur(22px);
          pointer-events: none;
          z-index: 0;
          opacity: 0;
        }

        .is-in-view .playlist-icon-ground-shadow {
          animation:
            groundShadowEntrance 1.1s cubic-bezier(0.16, 1, 0.3, 1) both,
            shadowBreathe 5s ease-in-out 1.2s infinite;
        }

        /* Main Container (Responsive via Container Queries) */
        .playlist-icon-component {
          position: relative;
          width: 100%;
          max-width: 100%;
          aspect-ratio: 838 / 688;
          container-type: inline-size;
          z-index: 1;
        }

        /* Floating animation wrapper */
        .playlist-float-wrap {
          width: 100%;
          height: 100%;
          opacity: 0;
          transform: scale(0.85) translateY(32px);
          transition: opacity 0.3s ease;
        }

        .is-in-view .playlist-float-wrap {
          animation:
            slabEntrance 1.1s cubic-bezier(0.16, 1, 0.3, 1) both,
            gentleFloat 5s ease-in-out 1.2s infinite;
        }

        /* Outer 3D Slab with Beveled Rim */
        .playlist-icon-outer {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 15.27cqi;
          padding: 4.3cqi;
          background: linear-gradient(
            135deg,
            var(--pi-rim-magenta-bright) 0%,
            var(--pi-rim-magenta-mid) 16%,
            var(--pi-rim-purple-vibrant) 40%,
            var(--pi-rim-purple-deep) 70%,
            var(--pi-rim-purple-dark) 100%
          );
          box-shadow:
            /* Specular rim top highlight */
            inset 0 0.36cqi 0.24cqi rgba(255, 255, 255, 0.95),
            inset 0 0.72cqi 0.96cqi rgba(255, 255, 255, 0.4),
            inset 0.24cqi 0 0.48cqi rgba(255, 255, 255, 0.25),
            /* Edge bevel shadows */
            inset 0 -1.67cqi 2.15cqi rgba(12, 0, 48, 0.7),
            inset -0.36cqi 0 0.96cqi rgba(18, 0, 55, 0.4),
            /* Diffuse floor shadows */
            0 4.5cqi 7.7cqi -1.4cqi rgba(110, 40, 205, 0.48),
            0 2.6cqi 4.2cqi -0.7cqi rgba(130, 50, 220, 0.35),
            0 8.9cqi 12.5cqi -2.4cqi rgba(80, 15, 180, 0.22),
            0 0 10.7cqi rgba(160, 60, 255, 0.2);
          transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        /* Neon Magenta Rim Glow in Bottom Right */
        .playlist-icon-outer::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 15.27cqi;
          background: radial-gradient(
            ellipse 55% 42% at 89% 93%,
            rgba(245, 10, 255, 0.95) 0%,
            rgba(215, 5, 250, 0.72) 28%,
            rgba(180, 0, 235, 0.25) 55%,
            transparent 72%
          );
          pointer-events: none;
          opacity: 0;
        }

        .is-in-view .playlist-icon-outer::before {
          animation: neonGlowEntrance 1.2s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        /* Top-Left Rim Gloss Specular Sheen */
        .playlist-icon-outer::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 15.27cqi;
          background: radial-gradient(
            ellipse 65% 35% at 20% 7%,
            rgba(255, 255, 255, 0.88) 0%,
            rgba(255, 220, 255, 0.4) 35%,
            transparent 65%
          );
          pointer-events: none;
          opacity: 0;
        }

        .is-in-view .playlist-icon-outer::after {
          animation: specularShimmer 1.3s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        /* Recessed Inner Face */
        .playlist-icon-face {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 11.45cqi;
          background: linear-gradient(
            142deg,
            var(--pi-face-top) 0%,
            var(--pi-face-mid-high) 18%,
            var(--pi-face-mid) 48%,
            var(--pi-face-mid-low) 75%,
            var(--pi-face-bottom) 100%
          );
          box-shadow:
            inset 0 1.43cqi 2.86cqi rgba(18, 0, 65, 0.55),
            inset 0 -1.43cqi 2.38cqi rgba(12, 0, 50, 0.5),
            inset 1.19cqi 0 2.15cqi rgba(22, 0, 70, 0.35),
            inset -1.19cqi 0 2.15cqi rgba(22, 0, 70, 0.35);
          overflow: hidden;
        }

        /* Face Ambient Sheen & Directional Light */
        .playlist-icon-sheen {
          position: absolute;
          inset: 0;
          border-radius: 11.45cqi;
          background:
            radial-gradient(
              ellipse 110% 75% at 14% 10%,
              var(--pi-face-sheen-light) 0%,
              rgba(150, 30, 240, 0.16) 42%,
              transparent 75%
            ),
            radial-gradient(
              ellipse 65% 45% at 88% 88%,
              rgba(195, 15, 255, 0.28) 0%,
              transparent 60%
            );
          pointer-events: none;
        }

        /* Content Area (Heading + Description + Metadata) */
        .playlist-content-box {
          position: absolute;
          inset: 0;
          padding: 6.5cqi 7.5cqi;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          z-index: 2;
          box-sizing: border-box;
          pointer-events: none;
        }

        .playlist-content-main {
          display: flex;
          flex-direction: column;
          gap: 1.8cqi;
          max-width: 64%;
        }

        /* 3D Pill Badge */
        .playlist-badge {
          display: inline-flex;
          align-items: center;
          gap: clamp(4px, 0.8cqi, 8px);
          align-self: flex-start;
          padding: clamp(3px, 0.5cqi, 6px) clamp(8px, 1.4cqi, 14px);
          border-radius: 9999px;
          font-size: clamp(9px, 1.4cqi, 13px);
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #ffffff;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.28) 0%,
            rgba(255, 255, 255, 0.12) 100%
          );
          border: 1px solid rgba(255, 255, 255, 0.45);
          box-shadow:
            inset 0 1px 1px rgba(255, 255, 255, 0.85),
            0 4px 10px rgba(14, 0, 58, 0.4);
          backdrop-filter: blur(10px);
          opacity: 0;
        }

        .is-in-view .playlist-badge {
          animation: contentFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both;
        }

        .playlist-badge-dot {
          width: clamp(5px, 0.8cqi, 7px);
          height: clamp(5px, 0.8cqi, 7px);
          border-radius: 50%;
          background: #ffffff;
          box-shadow: 0 0 6px rgba(255, 255, 255, 0.9);
        }

        /* 3D Sculpted Heading */
        .playlist-title {
          margin: 0;
          font-size: clamp(18px, 5.0cqi, 44px);
          font-weight: 800;
          line-height: 1.14;
          letter-spacing: -0.025em;
          background: linear-gradient(
            180deg,
            var(--pi-item-white-top) 0%,
            var(--pi-item-white-upper) 35%,
            #efe1fc 75%,
            var(--pi-item-white-lavender) 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter:
            drop-shadow(0 2px 3px var(--pi-shadow-contact))
            drop-shadow(0 8px 16px var(--pi-shadow-mid));
          opacity: 0;
        }

        .is-in-view .playlist-title {
          animation: contentFadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.42s both;
        }

        /* Smooth Soft Lavender Description */
        .playlist-description {
          margin: 0;
          font-size: clamp(10.5px, 2.25cqi, 17px);
          font-weight: 400;
          line-height: 1.45;
          color: rgba(247, 235, 255, 0.92);
          text-shadow:
            0 1px 2px rgba(14, 0, 58, 0.8),
            0 4px 10px rgba(20, 1, 72, 0.4);
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
          opacity: 0;
        }

        .is-in-view .playlist-description {
          animation: contentFadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.54s both;
        }

        /* Bottom Metadata Bar */
        .playlist-meta-row {
          display: flex;
          align-items: center;
          gap: 1.4cqi;
          font-size: clamp(9.5px, 1.75cqi, 14.5px);
          font-weight: 600;
          color: rgba(232, 204, 255, 0.9);
          text-shadow: 0 1px 3px rgba(14, 0, 58, 0.7);
          opacity: 0;
        }

        .is-in-view .playlist-meta-row {
          animation: contentFadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.65s both;
        }

        .playlist-meta-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.8cqi;
          padding: clamp(2px, 0.4cqi, 5px) clamp(8px, 1.2cqi, 12px);
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.25);
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.5);
          color: #ffffff;
        }

        /* 3D Action Button (Play / Pause in Bottom-Right) */
        .play-btn-wrap {
          position: absolute;
          right: 8.5cqi;
          bottom: 8.0cqi;
          width: 16.5cqi;
          height: 19.5cqi;
          border: none;
          background: transparent;
          padding: 0;
          margin: 0;
          outline: none;
          cursor: pointer;
          z-index: 5;
          pointer-events: auto;
          filter:
            drop-shadow(0 0.48cqi 0.72cqi var(--pi-shadow-contact))
            drop-shadow(0 1.43cqi 2.15cqi var(--pi-shadow-mid))
            drop-shadow(0 2.62cqi 3.34cqi var(--pi-shadow-ambient));
          transition: transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1);
          opacity: 0;
        }

        .is-in-view .play-btn-wrap {
          animation: playButtonPop 0.95s cubic-bezier(0.34, 1.4, 0.64, 1) 0.68s both;
        }

        .play-btn-wrap:hover {
          transform: scale(1.06);
        }

        .play-btn-wrap:active {
          transform: scale(0.95);
        }

        /* Play Button: Right-pointing Rounded Triangle */
        .play-btn-shape {
          width: 100%;
          height: 100%;
          background: linear-gradient(
            180deg,
            var(--pi-item-white-top) 0%,
            var(--pi-item-white-upper) 28%,
            #ebdafc 68%,
            var(--pi-item-white-lavender) 100%
          );
          clip-path: polygon(
            2% 84%,
            2% 16%,
            2.5% 12.5%,
            4% 9.5%,
            6.5% 7.2%,
            10% 5.8%,
            14% 5.5%,
            78% 39.5%,
            82.5% 42%,
            86.5% 45%,
            89% 47.5%,
            90% 50%,
            89% 52.5%,
            86.5% 55%,
            82.5% 58%,
            78% 60.5%,
            14% 94.5%,
            10% 94.2%,
            6.5% 92.8%,
            4% 90.5%,
            2.5% 87.5%
          );
          position: relative;
        }

        .play-btn-shape::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.98) 0%,
            rgba(255, 255, 255, 0.4) 40%,
            rgba(255, 255, 255, 0) 100%
          );
          pointer-events: none;
        }

        .play-btn-shape::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 45%;
          background: linear-gradient(
            315deg,
            rgba(185, 145, 235, 0.45) 0%,
            transparent 60%
          );
          pointer-events: none;
        }

        /* Pause Button: Two 3D Rounded Vertical Bars Centered */
        .pause-btn-shape {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 16%;
          box-sizing: border-box;
        }

        .pause-bar {
          width: 26%;
          height: 80%;
          border-radius: 9999px;
          background: linear-gradient(
            180deg,
            var(--pi-item-white-top) 0%,
            var(--pi-item-white-upper) 28%,
            #ebdafc 68%,
            var(--pi-item-white-lavender) 100%
          );
          box-shadow:
            inset 0 0.36cqi 0.36cqi rgba(255, 255, 255, 1.0),
            inset 0 0.12cqi 0.12cqi rgba(255, 255, 255, 1.0),
            inset 0 -0.36cqi 0.48cqi rgba(175, 135, 230, 0.55);
          position: relative;
        }

        .pause-bar::before {
          content: '';
          position: absolute;
          top: 3%;
          left: 10%;
          right: 10%;
          height: 35%;
          border-radius: 9999px;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.95) 0%,
            rgba(255, 255, 255, 0) 100%
          );
          pointer-events: none;
        }

        /* Interactive Hover on entire container */
        .playlist-icon-component.interactive .playlist-icon-outer {
          transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .playlist-icon-component.interactive:hover .playlist-icon-outer {
          transform: translateY(-4px) scale(1.008);
        }

        /* Animations */
        @keyframes slabEntrance {
          0% {
            opacity: 0;
            transform: perspective(1200px) rotateX(12deg) rotateY(-8deg) translateY(42px) scale(0.91);
          }
          65% {
            transform: perspective(1200px) rotateX(-2deg) rotateY(1.5deg) translateY(-4px) scale(1.012);
          }
          85% {
            transform: perspective(1200px) rotateX(0.8deg) rotateY(-0.5deg) translateY(1px) scale(0.998);
          }
          100% {
            opacity: 1;
            transform: perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1);
          }
        }

        @keyframes glowEntrance {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.75);
          }
          100% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }

        @keyframes groundShadowEntrance {
          0% {
            opacity: 0;
            transform: scale(0.65) translateY(-24px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes specularShimmer {
          0% {
            opacity: 0;
            filter: brightness(0.7);
          }
          60% {
            opacity: 1;
            filter: brightness(1.25);
          }
          100% {
            opacity: 1;
            filter: brightness(1);
          }
        }

        @keyframes neonGlowEntrance {
          0% {
            opacity: 0;
            filter: saturate(0.5);
          }
          70% {
            opacity: 1;
            filter: saturate(1.3);
          }
          100% {
            opacity: 1;
            filter: saturate(1);
          }
        }

        @keyframes contentFadeUp {
          0% {
            opacity: 0;
            transform: translateY(22px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes playButtonPop {
          0% {
            opacity: 0;
            transform: scale(0.45) translateY(18px);
          }
          65% {
            transform: scale(1.12) translateY(-2px);
          }
          85% {
            transform: scale(0.96) translateY(1px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes gentleFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes shadowBreathe {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(0.95);
            opacity: 0.82;
          }
        }
      `}</style>

      {/* Render Full Page Centered Wrapper or Standalone Icon */}
      {fullPage ? (
        <div 
          ref={viewRef}
          className={`playlist-page-wrapper w-full rounded-2xl sm:rounded-3xl border border-purple-200/80 shadow-[0_12px_40px_rgba(168,85,247,0.12)] ${inView ? 'is-in-view' : ''}`}
        >
          <div className="playlist-responsive-container">
            {iconElement}
          </div>
        </div>
      ) : (
        iconElement
      )}
    </>
  );
}


/* =========================================================================
   09. RECENTLY PLAYED SECTION COMPONENT
   ========================================================================= */
export const RecentlyPlayed = () => {
  const { playlist } = recentlyPlayedData;

  return (
    <section 
      id="recently-played"
      aria-label="Recently Played" 
      className="relative w-full max-w-[1620px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 mt-8 sm:mt-12 lg:mt-16 select-none scroll-mt-24"
    >
      {/* Signature Section Header */}
      <SectionHeader 
        titlePrefix={recentlyPlayedData.titlePrefix} 
        titleAccent={recentlyPlayedData.titleAccent} 
        subtitle={recentlyPlayedData.subtitle} 
      />

      {/* 3D Skeuomorphic Claymorphic Playlist Showcase */}
      <div className="relative w-full">
        <PlaylistIconShowcase 
          title={playlist.title}
          description={playlist.description}
          badge={playlist.badge}
          meta={playlist.meta}
          fullPage={true}
        />
      </div>
    </section>
  );
};

export default RecentlyPlayed;
