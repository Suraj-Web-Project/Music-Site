import React, { useState } from 'react';
import { SectionHeader } from '../../common/SectionHeader';
import { useInView } from '../../../hooks/useInView';
import { newReleasesData } from './NewReleasesData';

/* =========================================================================
   3D CLAYMORPHIC RADIO COMPONENT (INTERNAL)
   ========================================================================= */


export function RadioClaymorphic({ data = newReleasesData }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [radioRef, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <div ref={radioRef} className={`radio-viewport-container w-full rounded-2xl sm:rounded-3xl border border-purple-200/80 shadow-[0_12px_40px_rgba(168,85,247,0.12)] flex items-center justify-center overflow-hidden ${inView ? 'is-in-view' : ''}`}>
      {/* 100% Self-Contained Scoped Responsive Styling for 3D Claymorphic Radio */}
      <style>{`
        .radio-viewport-container * {
          box-sizing: border-box;
        }

        /* Root Viewport Container - Centers on all devices without overflow */
        .radio-viewport-container {
          width: 100%;
          min-height: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px 6px 10px;
          box-sizing: border-box;
          overflow: hidden;
          background: radial-gradient(ellipse at 50% 50%, #f6e6fe 0%, #ead9fd 55%, #dec7fb 100%);
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }

        @media (min-width: 640px) {
          .radio-viewport-container {
            padding: 10px 8px 12px;
          }
        }

        @media (min-width: 1024px) {
          .radio-viewport-container {
            padding: 14px 10px 14px;
          }
        }

        /* 
          --- 3D CLAYMORPHIC RADIO CANVAS CONTAINER ---
          Uses CSS Container Queries (inline-size) so all dimensions scale
          with millimeter mathematical precision based on container width (cqw).
        */
        .radio-canvas {
          container-type: inline-size;
          width: 100%;
          max-width: 100%;
          aspect-ratio: 1024 / 925;
          position: relative;
          user-select: none;
          background: transparent;
          border: none;
          outline: none;
          display: block;
          margin: 0 auto;
          box-sizing: border-box;
          opacity: 1;
          transform: translateY(0) scale(1);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        /* Inner Scaler to expand radio elements snugly without clipping edges or shadows */
        .radio-stage-scaler {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          transform-origin: 50% 48%;
          transform: scale(1.045);
          pointer-events: auto;
        }

        .radio-canvas.is-in-view {
          animation: radioEntrancePop 1.1s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        @keyframes radioEntrancePop {
          0% {
            opacity: 0;
            transform: translateY(32px) scale(0.9);
          }
          60% {
            opacity: 1;
            transform: translateY(-4px) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* Floor ambient drop shadow underneath radio */
        .floor-shadow {
          position: absolute;
          left: 6.8cqw;
          top: 78.1cqw;
          width: 86cqw;
          height: 9.5cqw;
          border-radius: 50%;
          background: radial-gradient(
            ellipse at 50% 50%,
            rgba(45, 15, 65, 0.35) 0%,
            rgba(30, 10, 50, 0.18) 48%,
            transparent 72%
          );
          filter: blur(clamp(8px, 1.8cqw, 18px));
          pointer-events: none;
          z-index: 2;
        }

        /* --- ANTENNA SYSTEM --- */
        /* 1. Antenna Rod (Cylindrical Shaft) */
        .antenna-rod {
          position: absolute;
          left: 24.85cqw;
          top: 29.9cqw;
          width: 55.36cqw;
          height: 6.2cqw;
          border-radius: 3.1cqw;
          transform-origin: 0% 50%;
          transform: rotate(-19.35deg);
          background: linear-gradient(
            to bottom,
            #d92bfe 0%,
            #b220fa 16%,
            #6b03cc 48%,
            #360274 78%,
            #1b035b 100%
          );
          box-shadow: 
            0 1.2cqw 2cqw rgba(50, 0, 80, 0.28),
            inset 0 0.32cqw 0.45cqw rgba(255, 255, 255, 0.7),
            inset 0 -0.35cqw 0.5cqw rgba(15, 0, 35, 0.7);
          z-index: 12;
        }

        /* 2. Antenna Base Sphere */
        .antenna-base-ball {
          position: absolute;
          left: 18.7cqw;
          top: 26.97cqw;
          width: 12.3cqw;
          height: 12.3cqw;
          border-radius: 50%;
          background: radial-gradient(
            circle at 38% 30%,
            #ffffff 0%,
            #faaaff 12%,
            #c924fc 30%,
            #6e01c8 58%,
            #31028e 82%,
            #180045 100%
          );
          box-shadow: 
            0 1.2cqw 2.2cqw rgba(25, 0, 50, 0.45),
            inset -0.3cqw -0.5cqw 1cqw rgba(15, 0, 35, 0.6),
            inset 0.2cqw 0.2cqw 0.5cqw rgba(255, 255, 255, 0.75);
          z-index: 15;
        }

        .antenna-base-ball::before {
          content: "";
          position: absolute;
          left: 24%;
          top: 18%;
          width: 32%;
          height: 32%;
          border-radius: 50%;
          background: radial-gradient(
            circle at 45% 45%,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 230, 255, 0.85) 25%,
            rgba(255, 180, 255, 0.3) 55%,
            transparent 85%
          );
          filter: blur(0.5px);
          pointer-events: none;
        }

        /* 3. Antenna Top Sphere */
        .antenna-top-ball {
          position: absolute;
          left: 70.7cqw;
          top: 6.5cqw;
          width: 15.04cqw;
          height: 15.04cqw;
          border-radius: 50%;
          background: radial-gradient(
            circle at 35% 32%,
            #ffffff 0%,
            #fdb9fe 14%,
            #d128fc 32%,
            #8506d8 60%,
            #4c03ac 82%,
            #22004d 100%
          );
          box-shadow: 
            0 2.4cqw 4.2cqw rgba(50, 0, 85, 0.36),
            0 0.8cqw 1.8cqw rgba(30, 0, 55, 0.25),
            inset -0.6cqw -0.8cqw 1.8cqw rgba(245, 50, 210, 0.7),
            inset 0.25cqw 0.35cqw 0.7cqw rgba(255, 255, 255, 0.9);
          z-index: 16;
        }

        .antenna-top-ball::before {
          content: "";
          position: absolute;
          left: 17%;
          top: 17%;
          width: 35%;
          height: 35%;
          border-radius: 50%;
          background: radial-gradient(
            circle at 45% 45%,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 245, 255, 0.95) 20%,
            rgba(255, 195, 255, 0.45) 50%,
            transparent 75%
          );
          filter: blur(0.5px);
          pointer-events: none;
        }

        /* --- ANTENNA SIGNAL EMITTER (WAVES & MUSIC NOTES) --- */
        .antenna-emitter {
          position: absolute;
          left: 78.22cqw;
          top: 14.02cqw;
          width: 0;
          height: 0;
          pointer-events: none;
          z-index: 17;
        }

        /* Pulsing Radio Signal Waves */
        .signal-wave {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 15cqw;
          height: 15cqw;
          border-radius: 50%;
          border: 0.22cqw solid rgba(255, 43, 218, 0.75);
          box-shadow: 
            0 0 1.2cqw rgba(255, 43, 218, 0.45),
            inset 0 0 0.8cqw rgba(219, 41, 251, 0.3);
          transform: translate(-50%, -50%) scale(0.65);
          opacity: 0;
          pointer-events: none;
          z-index: 13;
          animation: signalPulse 3.2s cubic-bezier(0.2, 0.6, 0.35, 1) infinite;
        }

        .wave-1 { animation-delay: 0s; }
        .wave-2 { animation-delay: 1.05s; }
        .wave-3 { animation-delay: 2.1s; }

        @keyframes signalPulse {
          0% {
            transform: translate(-50%, -50%) scale(0.65);
            opacity: 0.85;
            border-color: rgba(255, 43, 218, 0.85);
          }
          50% {
            opacity: 0.45;
            border-color: rgba(219, 41, 251, 0.6);
          }
          100% {
            transform: translate(-50%, -50%) scale(1.95);
            opacity: 0;
            border-color: rgba(147, 5, 250, 0);
          }
        }

        /* Floating 3D Musical Notes */
        .music-note {
          position: absolute;
          top: 50%;
          left: 50%;
          font-family: system-ui, -apple-system, sans-serif;
          font-size: clamp(12px, 2.3cqw, 30px);
          font-weight: 800;
          color: #ffffff;
          text-shadow: 
            0 0 0.5cqw rgba(255, 255, 255, 0.95),
            0 0 1.2cqw #ff1493,
            0 0 2cqw #9900ee,
            0 0.2cqw 0.4cqw rgba(20, 0, 45, 0.7);
          pointer-events: none;
          opacity: 0;
          z-index: 20;
          user-select: none;
        }

        .note-1 { animation: floatNote1 4.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite 0.2s; }
        .note-2 { animation: floatNote2 4.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite 1.3s; }
        .note-3 { animation: floatNote3 3.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite 2.3s; }
        .note-4 { animation: floatNote4 4.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite 3.1s; }
        .note-5 { animation: floatNote1 4.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite 3.7s; }
        .note-6 { animation: floatNote2 4.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite 2.0s; }

        @keyframes floatNote1 {
          0% {
            transform: translate(0, 0) scale(0.3) rotate(0deg);
            opacity: 0;
          }
          20% {
            opacity: 1;
            transform: translate(2cqw, -2.5cqw) scale(1) rotate(-15deg);
          }
          60% {
            opacity: 0.9;
            transform: translate(4.5cqw, -6.5cqw) scale(1.1) rotate(15deg);
          }
          100% {
            transform: translate(6.5cqw, -9.5cqw) scale(0.7) rotate(-25deg);
            opacity: 0;
          }
        }

        @keyframes floatNote2 {
          0% {
            transform: translate(0, 0) scale(0.3) rotate(0deg);
            opacity: 0;
          }
          20% {
            opacity: 1;
            transform: translate(-1cqw, -2.8cqw) scale(1.05) rotate(12deg);
          }
          60% {
            opacity: 0.9;
            transform: translate(0.4cqw, -6.5cqw) scale(1.15) rotate(-14deg);
          }
          100% {
            transform: translate(1.5cqw, -9.8cqw) scale(0.75) rotate(22deg);
            opacity: 0;
          }
        }

        @keyframes floatNote3 {
          0% {
            transform: translate(0, 0) scale(0.3) rotate(0deg);
            opacity: 0;
          }
          20% {
            opacity: 1;
            transform: translate(2.5cqw, -2.2cqw) scale(1) rotate(18deg);
          }
          60% {
            opacity: 0.85;
            transform: translate(5.5cqw, -5.8cqw) scale(1.05) rotate(-10deg);
          }
          100% {
            transform: translate(8cqw, -9cqw) scale(0.65) rotate(25deg);
            opacity: 0;
          }
        }

        @keyframes floatNote4 {
          0% {
            transform: translate(0, 0) scale(0.3) rotate(0deg);
            opacity: 0;
          }
          25% {
            opacity: 1;
            transform: translate(-2.2cqw, -2.5cqw) scale(1) rotate(-20deg);
          }
          65% {
            opacity: 0.85;
            transform: translate(-3.8cqw, -6cqw) scale(1) rotate(10deg);
          }
          100% {
            transform: translate(-5cqw, -9.5cqw) scale(0.6) rotate(-15deg);
            opacity: 0;
          }
        }

        /* Glowing Sonic Sparkles */
        .sparkle-particle {
          position: absolute;
          top: 50%;
          left: 50%;
          width: clamp(3px, 0.6cqw, 8px);
          height: clamp(3px, 0.6cqw, 8px);
          border-radius: 50%;
          background: #ffffff;
          box-shadow: 
            0 0 0.4cqw #ffffff,
            0 0 0.8cqw #ff44ff,
            0 0 1.4cqw #ba2cf5;
          pointer-events: none;
          opacity: 0;
          z-index: 19;
        }

        .sp-1 { animation: floatSparkle 2.8s ease-out infinite 0.5s; }
        .sp-2 { animation: floatSparkle 3.4s ease-out infinite 1.6s; }
        .sp-3 { animation: floatSparkle 2.6s ease-out infinite 2.5s; }

        @keyframes floatSparkle {
          0% {
            transform: translate(0, 0) scale(0);
            opacity: 0;
          }
          30% {
            opacity: 1;
            transform: translate(1.8cqw, -2.8cqw) scale(1.4);
          }
          80% {
            opacity: 0.65;
            transform: translate(3.8cqw, -7cqw) scale(0.8);
          }
          100% {
            transform: translate(5.5cqw, -9.5cqw) scale(0);
            opacity: 0;
          }
        }

        /* --- MAIN RADIO BODY --- */
        .radio-body-outer {
          position: absolute;
          left: 6.74cqw;
          top: 35.91cqw;
          width: 85.35cqw;
          height: 45.9cqw;
          border-radius: 10.74cqw;
          padding: 1.5cqw;
          box-sizing: border-box;
          
          /* Outer 3D Bezel / Rim */
          background: linear-gradient(
            135deg,
            #db29fb 0%,
            #9804fa 25%,
            #6a00cf 50%,
            #b200b5 75%,
            #fa1bd8 90%,
            #fc1db4 100%
          );
          
          /* Ground drop shadow + continuous perimeter specular ridge */
          box-shadow: 
            0 3.2cqw 5.5cqw -1cqw rgba(35, 10, 55, 0.32),
            0 1.5cqw 2.5cqw -0.5cqw rgba(20, 5, 35, 0.22),
            0 5.0cqw 7.5cqw -2cqw rgba(15, 0, 30, 0.15),
            inset 0 0.38cqw 0.4cqw rgba(255, 255, 255, 0.95),
            inset 0 0.78cqw 0.88cqw #fe6aff,
            inset -0.75cqw -0.75cqw 1.4cqw #fa1bd8,
            inset 0 -0.85cqw 1.2cqw #fb32fc,
            inset 0.65cqw 0 1.2cqw #f058ff;
          
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }

        /* Glowing tubular ridge overlay */
        .radio-body-outer::before {
          content: "";
          position: absolute;
          inset: 0.25cqw;
          border-radius: 10.5cqw;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.75) 0%,
            rgba(254, 106, 255, 0.55) 15%,
            rgba(147, 5, 250, 0) 38%,
            rgba(255, 43, 218, 0) 65%,
            rgba(255, 43, 218, 0.88) 90%,
            rgba(255, 255, 255, 0.78) 100%
          );
          pointer-events: none;
          z-index: 1;
        }

        /* Ambient glow removed to eliminate color leaking outside radio rim */
        .neon-glow-overlay {
          display: none !important;
        }

        /* Inner Recessed Face */
        .radio-body-inner {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 9.2cqw;
          overflow: hidden;
          box-sizing: border-box;
          
          background: 
            radial-gradient(
              ellipse at 95% 92%,
              #ff1eb8 0%,
              #ee0598 25%,
              #a800b8 55%,
              transparent 75%
            ),
            linear-gradient(
              135deg,
              #7b05e6 0%,
              #6803d3 30%,
              #5d02bf 55%,
              #9e02c8 75%,
              #d508bb 88%,
              #fc1db4 100%
            );

          box-shadow: 
            inset 0 1.25cqw 2.4cqw rgba(20, 0, 55, 0.75),
            inset 0.85cqw 0 1.8cqw rgba(20, 0, 55, 0.55),
            inset -1.1cqw -1.1cqw 2.6cqw rgba(255, 30, 160, 0.5),
            inset 0 -0.85cqw 1.8cqw rgba(45, 0, 75, 0.5);
            
          display: flex;
          align-items: center;
          z-index: 2;
        }

        /* --- CONTENT SECTION: HEADING & CONTENT --- */
        .content-area {
          position: absolute;
          left: 8.5cqw;
          top: 50%;
          transform: translateY(-50%);
          width: 44cqw;
          display: flex;
          flex-direction: column;
          justify-content: center;
          z-index: 5;
          user-select: text;
        }

        .content-heading {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: clamp(17px, 2.85cqw, 36px);
          font-weight: 800;
          line-height: 1.18;
          color: #ffffff;
          letter-spacing: -0.015em;
          margin: 0 0 clamp(6px, 1.2cqw, 16px) 0;
          text-shadow: 
            0 0.22cqw 0.45cqw rgba(15, 0, 40, 0.85),
            0 0.06cqw 0.12cqw rgba(255, 255, 255, 0.45);
        }

        .content-paragraph {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: clamp(12px, 1.48cqw, 18px);
          line-height: 1.55;
          font-weight: 500;
          color: #ffffff;
          letter-spacing: 0.012em;
          text-shadow: 
            0 0.16cqw 0.35cqw rgba(10, 0, 30, 0.9),
            0 0.05cqw 0.1cqw rgba(255, 255, 255, 0.25);
          margin: 0;
        }

        /* --- CIRCULAR 3D DIAL BUTTON --- */
        .dial-button {
          position: absolute;
          left: 55.5cqw;
          top: 50%;
          transform: translateY(-50%);
          width: 23.5cqw;
          height: 23.5cqw;
          border-radius: 50%;
          cursor: pointer;
          border: none;
          outline: none;
          -webkit-tap-highlight-color: transparent;
          
          background: radial-gradient(
            circle at 36% 30%,
            #ffffff 0%,
            #faeffd 30%,
            #f1d6fa 65%,
            #e8bff8 88%,
            #dcaef5 100%
          );
          
          box-shadow: 
            0 1.5cqw 2.4cqw rgba(20, 0, 48, 0.7),
            0 0.5cqw 0.9cqw rgba(10, 0, 30, 0.48),
            inset 0 0.4cqw 0.6cqw rgba(255, 255, 255, 0.98),
            inset 0.4cqw 0.4cqw 0.72cqw rgba(255, 255, 255, 0.85),
            inset -0.4cqw -0.6cqw 1.15cqw rgba(155, 115, 205, 0.5);
            
          transition: transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.22s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 6;
        }

        .dial-button:hover {
          transform: translateY(-50%) scale(1.03);
          box-shadow: 
            0 1.8cqw 3.0cqw rgba(20, 0, 48, 0.78),
            0 0.6cqw 1.2cqw rgba(10, 0, 30, 0.55),
            inset 0 0.4cqw 0.6cqw rgba(255, 255, 255, 1),
            inset 0.4cqw 0.4cqw 0.72cqw rgba(255, 255, 255, 0.9),
            inset -0.4cqw -0.6cqw 1.15cqw rgba(155, 115, 205, 0.5);
        }

        .dial-button:active {
          transform: translateY(-50%) scale(0.96);
          box-shadow: 
            0 0.8cqw 1.4cqw rgba(20, 0, 48, 0.6),
            0 0.3cqw 0.6cqw rgba(10, 0, 30, 0.4),
            inset 0 0.4cqw 0.6cqw rgba(255, 255, 255, 0.95),
            inset -0.4cqw -0.6cqw 1.15cqw rgba(155, 115, 205, 0.55);
        }

        /* Tactile Dial Center Indicator */
        .dial-center-dot {
          width: clamp(12px, 3.8cqw, 36px);
          height: clamp(12px, 3.8cqw, 36px);
          border-radius: 50%;
          background: radial-gradient(
            circle at 35% 35%,
            #ffffff 0%,
            #e4c6f5 40%,
            #b670e8 85%,
            #8a37c9 100%
          );
          box-shadow: 
            inset 0 1px 2px rgba(255, 255, 255, 0.9),
            inset 0 -1px 2px rgba(90, 20, 140, 0.5),
            0 2px 4px rgba(70, 0, 110, 0.3);
          transition: all 0.3s ease;
        }

        .dial-button.is-playing .dial-center-dot {
          background: radial-gradient(
            circle at 35% 35%,
            #ffffff 0%,
            #fca5f1 40%,
            #e600a0 85%,
            #9b0070 100%
          );
          box-shadow: 
            0 0 10px rgba(255, 0, 150, 0.75),
            inset 0 1px 2px rgba(255, 255, 255, 0.9);
          animation: dialPulse 2.4s ease-in-out infinite;
        }

        @keyframes dialPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.12); opacity: 0.9; }
        }

        /* 
          =======================================================
          MOBILE / COMPACT RESPONSIVE LAYOUT (Screens <= 680px)
          Adapts the 3D claymorphic radio into a portable, vertical
          retro radio form factor with 100% full text visibility!
          =======================================================
        */
        @media (max-width: 680px) {
          .radio-viewport-container {
            padding: 8px 6px 10px;
          }

          .radio-canvas {
            width: min(96vw, 480px);
            aspect-ratio: 380 / 550;
          }

          .radio-stage-scaler {
            transform: none;
          }

          /* Ambient Floor Shadow under the mobile radio */
          .floor-shadow {
            left: 7cqw;
            top: 133cqw;
            width: 86cqw;
            height: 9cqw;
            background: radial-gradient(
              ellipse at 50% 50%,
              rgba(45, 15, 65, 0.35) 0%,
              rgba(30, 10, 50, 0.18) 48%,
              transparent 72%
            );
          }

          /* Mobile Antenna Geometry */
          .antenna-base-ball {
            left: 19cqw;
            top: 28cqw;
            width: 12cqw;
            height: 12cqw;
          }

          .antenna-rod {
            left: 25cqw;
            top: 31cqw;
            width: 52cqw;
            height: 6cqw;
            border-radius: 3cqw;
            transform: rotate(-22deg);
          }

          .antenna-top-ball {
            left: 66cqw;
            top: 7.5cqw;
            width: 14.5cqw;
            height: 14.5cqw;
          }

          .antenna-emitter {
            left: 73.25cqw;
            top: 14.75cqw;
          }

          /* Mobile Outer Radio Body */
          .radio-body-outer {
            left: 6.5cqw;
            top: 37cqw;
            width: 87cqw;
            height: 98cqw;
            border-radius: 12cqw;
            padding: 1.8cqw;
            box-shadow: 
              0 3.2cqw 5.5cqw -1cqw rgba(35, 10, 55, 0.32),
              0 1.5cqw 2.5cqw -0.5cqw rgba(20, 5, 35, 0.22),
              0 5.0cqw 7.5cqw -2cqw rgba(15, 0, 30, 0.15),
              inset 0 0.38cqw 0.4cqw rgba(255, 255, 255, 0.95),
              inset 0 0.78cqw 0.88cqw #fe6aff,
              inset -0.75cqw -0.75cqw 1.4cqw #fa1bd8,
              inset 0 -0.85cqw 1.2cqw #fb32fc,
              inset 0.65cqw 0 1.2cqw #f058ff;
          }

          .radio-body-inner {
            border-radius: 10.5cqw;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            padding: 4.5cqw 5cqw;
            text-align: center;
          }

          /* Dial Button Positioned Centered in Top Section */
          .dial-button {
            position: relative;
            left: auto;
            top: auto;
            transform: none;
            width: 24cqw;
            height: 24cqw;
            margin-bottom: 0.5cqw;
            flex-shrink: 0;
          }

          .dial-button:hover {
            transform: scale(1.04);
          }

          .dial-button:active {
            transform: scale(0.96);
          }

          /* Content Area Centered in Middle/Lower Section */
          .content-area {
            position: relative;
            left: auto;
            top: auto;
            transform: none;
            width: 100%;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .content-heading {
            font-size: clamp(17px, 5.4cqw, 25px);
            margin: 0 0 1.6cqw 0;
            text-align: center;
          }

          .content-paragraph {
            font-size: clamp(11.5px, 3.3cqw, 14.5px);
            line-height: 1.48;
            text-align: center;
            max-width: 96%;
            margin: 0;
          }
        }

        /* 
          =======================================================
          MOBILE LANDSCAPE VIEWPORT OPTIMIZATION (Short Height)
          Prevents vertical cut-off when mobile devices are held
          horizontally (e.g. 844x390, 896x414, 915x412).
          =======================================================
        */
        @media (orientation: landscape) and (max-height: 540px) {
          .radio-viewport-container {
            padding: 8px 8px 8px;
          }

          .radio-canvas {
            width: min(96vw, calc((100dvh - 20px) * (1024 / 925)), 720px);
            aspect-ratio: 1024 / 925;
          }

          .content-heading {
            font-size: clamp(14px, 2.7cqw, 20px);
            margin-bottom: 0.8cqw;
          }

          .content-paragraph {
            font-size: clamp(10px, 1.4cqw, 13.5px);
            line-height: 1.45;
          }
        }
      `}</style>

      {/* 3D Claymorphic Radio Canvas */}
      <div className={`radio-canvas ${inView ? 'is-in-view' : ''}`} role="region" aria-label="3D Claymorphic Music Player - New Release">
        <div className="radio-stage-scaler">
          {/* Soft Ambient Floor Shadow */}
          <div className="floor-shadow" aria-hidden="true" />

          {/* --- ANTENNA SYSTEM --- */}
          {/* Antenna Angled Rod / Shaft */}
          <div className="antenna-rod" aria-hidden="true" />

          {/* Antenna Base Pivot Sphere */}
          <div className="antenna-base-ball" aria-hidden="true" />

          {/* Antenna Top Tip Sphere */}
          <div className="antenna-top-ball" aria-hidden="true" />

          {/* Antenna Signal Emitter: Radio Waves, Floating Music Notes & Sparkles */}
          {inView && isPlaying && (
            <div className="antenna-emitter" aria-hidden="true">
              {/* Pulsing Concentric Radio Signal Waves */}
              <div className="signal-wave wave-1" />
              <div className="signal-wave wave-2" />
              <div className="signal-wave wave-3" />

              {/* Floating 3D Musical Notes */}
              <span className="music-note note-1">♪</span>
              <span className="music-note note-2">♫</span>
              <span className="music-note note-3">♬</span>
              <span className="music-note note-4">♩</span>
              <span className="music-note note-5">♪</span>
              <span className="music-note note-6">♫</span>

              {/* Glowing Sonic Sparkle Particles */}
              <div className="sparkle-particle sp-1" />
              <div className="sparkle-particle sp-2" />
              <div className="sparkle-particle sp-3" />
            </div>
          )}

          {/* --- RADIO MAIN BODY --- */}
          {/* Outer 3D Beveled Shell with Ambient Neon Rim */}
          <div className="radio-body-outer">
            {/* Inner Recessed Face with Royal Violet to Hot Neon Pink Gradient */}
            <div className="radio-body-inner">
              {/* Content Area: Heading and Full Description Text */}
              <div className="content-area" role="region" aria-label="New Release Content">
                <h2 className="content-heading">{(data?.heading || data?.title || newReleasesData.heading)}</h2>
                <p className="content-paragraph">{(data?.content || newReleasesData.content)}</p>
              </div>

              {/* Circular 3D Dial Button with Interactive Play/Pause State */}
              <button
                type="button"
                className={`dial-button ${isPlaying ? 'is-playing' : 'is-paused'}`}
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label={isPlaying ? 'Pause music broadcast' : 'Start music broadcast'}
                aria-pressed={isPlaying}
                title={isPlaying ? 'Click to pause broadcast' : 'Click to start broadcast'}
              >
                <div className="dial-center-dot" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


/* =========================================================================
   07. NEW RELEASES SECTION COMPONENT
   ========================================================================= */
export const NewReleases = () => {
  return (
    <section 
      id="new-releases"
      aria-label="New Releases" 
      className="relative w-full max-w-[1620px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 mt-8 sm:mt-12 lg:mt-16 select-none scroll-mt-24"
    >
      {/* Signature Section Header */}
      <SectionHeader 
        titlePrefix={newReleasesData.titlePrefix} 
        titleAccent={newReleasesData.titleAccent} 
        subtitle={newReleasesData.subtitle} 
      />

      {/* 3D Claymorphic Radio Showcase */}
      <div className="relative w-full flex justify-center">
        <div className="w-full max-w-[1040px]">
          <RadioClaymorphic data={newReleasesData} />
        </div>
      </div>
    </section>
  );
};

export default NewReleases;
