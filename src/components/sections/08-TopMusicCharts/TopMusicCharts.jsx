import React from 'react';
import { SectionHeader } from '../../common/SectionHeader';
import { useInView } from '../../../hooks/useInView';
import { topMusicChartsData } from './TopMusicChartsData';

/* =========================================================================
   TAMBOURINE 3D SHOWCASE COMPONENT (INTERNAL)
   ========================================================================= */


export function TambourineShowcase({ data = topMusicChartsData.showcase }) {
  const [ref, inView] = useInView({ threshold: 0.15 });

  return (
    <div 
      ref={ref}
      className="design1-wrapper w-full rounded-2xl sm:rounded-3xl border border-purple-200/80 shadow-[0_12px_40px_rgba(168,85,247,0.12)] flex items-center justify-center overflow-hidden"
    >
      {/* 
        Scoped Keyframe Animations for Scroll Entrance & Ambient Floating
      */}
      <style>{`
        /* 1. Tambourine Entrance Animation on Scroll */
        @keyframes tambourineEnter {
          0% {
            opacity: 0;
            transform: scale(0.82) translateY(36px) rotate(-8deg);
            filter: blur(8px);
          }
          55% {
            opacity: 1;
            transform: scale(1.035) translateY(-6px) rotate(1.2deg);
            filter: blur(0px);
          }
          78% {
            transform: scale(0.985) translateY(2px) rotate(-0.5deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0) rotate(0deg);
            filter: blur(0px);
          }
        }

        /* 2. Gentle Ambient Floating after Entrance */
        @keyframes tambourineFloat {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-9px) rotate(0.85deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }

        /* 3. Sonic Pulse Rings expanding on Scroll */
        @keyframes sonicRing1 {
          0% {
            transform: translate(-50%, -50%) scale(0.65);
            opacity: 0;
          }
          25% {
            opacity: 0.5;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.35);
            opacity: 0;
          }
        }

        @keyframes sonicRing2 {
          0% {
            transform: translate(-50%, -50%) scale(0.65);
            opacity: 0;
          }
          35% {
            opacity: 0.35;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.55);
            opacity: 0;
          }
        }

        /* 4. Text Reveal: Heading */
        @keyframes headingReveal {
          0% {
            opacity: 0;
            transform: translateY(18px) scale(0.96);
            filter: blur(5px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0px);
          }
        }

        /* 5. Text Reveal: Description */
        @keyframes descReveal {
          0% {
            opacity: 0;
            transform: translateY(14px);
            filter: blur(4px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0px);
          }
        }

        /* Applied Classes */
        .animate-tambourine {
          animation: 
            tambourineEnter 1.25s cubic-bezier(0.22, 1, 0.36, 1) forwards,
            tambourineFloat 6s ease-in-out 1.25s infinite alternate;
          will-change: transform, opacity;
        }

        .animate-ring-1 {
          animation: sonicRing1 1.8s cubic-bezier(0.2, 0.8, 0.4, 1) 0.3s forwards;
        }

        .animate-ring-2 {
          animation: sonicRing2 2.2s cubic-bezier(0.2, 0.8, 0.4, 1) 0.55s forwards;
        }

        .animate-heading {
          animation: headingReveal 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.45s both;
          will-change: transform, opacity;
        }

        .animate-desc {
          animation: descReveal 0.95s cubic-bezier(0.16, 1, 0.3, 1) 0.68s both;
          will-change: transform, opacity;
        }

        .design1-wrapper * {
          box-sizing: border-box;
        }

        /* Fully Self-Contained Layout Styles for Design 1 (Clean Responsive Hugging) */
        .design1-wrapper {
          width: 100%;
          min-height: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px 4px;
          overflow: hidden;
          box-sizing: border-box;
          background: radial-gradient(ellipse at 50% 50%, #f6e6fe 0%, #ead9fd 55%, #dec7fb 100%);
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }

        @media (min-width: 640px) {
          .design1-wrapper {
            padding: 24px 16px;
          }
        }

        @media (min-width: 1024px) {
          .design1-wrapper {
            padding: 36px 28px;
          }
        }

        .design1-canvas {
          position: relative;
          width: 100%;
          max-width: 1024px;
          aspect-ratio: 1024 / 819;
          display: flex;
          align-items: center;
          justify-content: center;
          user-select: none;
          margin: 0 auto;
          transition: opacity 0.5s ease;
        }

        .design1-ring {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .design1-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          pointer-events: none;
          position: relative;
          z-index: 10;
        }

        .design1-content-box {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          pointer-events: auto;
          z-index: 20;
          left: 47.6%;
          top: 45.2%;
          width: 42cqw;
          max-height: 42cqw;
          transform: translate(-50%, -50%);
          padding: 1cqw 1.2cqw;
        }

        .design1-heading-title {
          font-weight: 800;
          letter-spacing: -0.025em;
          margin-bottom: 0.9cqw;
        }

        .design1-desc-text {
          font-weight: 500;
        }

        /* Mobile specific font and spacing optimization */
        @container (max-width: 520px) {
          .design1-content-box {
            width: 44cqw;
            max-height: 44cqw;
            padding: 0.6cqw;
          }
          .design1-heading-title {
            font-size: clamp(13px, 3.6cqw, 20px) !important;
            margin-bottom: 0.5cqw !important;
            line-height: 1.18 !important;
          }
          .design1-desc-text {
            font-size: clamp(9px, 2.1cqw, 12.5px) !important;
            line-height: 1.4 !important;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 6;
            overflow: hidden;
          }
        }
      `}</style>

      {/* 
        Container preserving the exact 1024:819 aspect ratio of Image 1.
        container-type: inline-size for perfect responsive font scaling across all screens.
      */}
      <div 
        className={`design1-canvas relative w-full max-w-[1024px] aspect-[1024/819] flex items-center justify-center select-none ${inView ? 'animate-tambourine' : 'opacity-0'}`}
        style={{ containerType: 'inline-size' }}
      >
        {/* Soft Sonic Pulse Waves radiating behind tambourine on scroll */}
        <div 
          className={`design1-ring absolute rounded-full pointer-events-none ${inView ? 'animate-ring-1' : 'opacity-0'}`}
          style={{
            left: '47.6%',
            top: '45.2%',
            width: '62cqw',
            height: '62cqw',
            border: '2px solid rgba(168, 85, 247, 0.28)',
            boxShadow: '0 0 35px rgba(192, 132, 252, 0.25)',
            zIndex: 1
          }}
        />
        <div 
          className={`design1-ring absolute rounded-full pointer-events-none ${inView ? 'animate-ring-2' : 'opacity-0'}`}
          style={{
            left: '47.6%',
            top: '45.2%',
            width: '74cqw',
            height: '74cqw',
            border: '1.5px solid rgba(216, 180, 254, 0.22)',
            boxShadow: '0 0 45px rgba(233, 213, 255, 0.2)',
            zIndex: 1
          }}
        />

        {/* 3D Tambourine Image Asset */}
        <img
          src={data?.image || topMusicChartsData.showcase.image}
          alt="3D Tambourine"
          className="design1-image w-full h-full object-contain pointer-events-none relative z-10"
          draggable={false}
          loading="eager"
        />

        {/* Content Container positioned inside the circular drumhead */}
        <div 
          className="design1-content-box absolute flex flex-col items-center justify-center text-center pointer-events-auto z-20"
        >
          {/* Heading */}
          <h1 
            className={`design1-heading-title font-extrabold tracking-tight ${inView ? 'animate-heading' : 'opacity-0'}`}
            style={{
              fontSize: 'clamp(17px, 2.9cqw, 32px)',
              lineHeight: '1.22',
              color: '#3f086e',
              textShadow: '0 1px 2px rgba(70, 8, 115, 0.18)',
              fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            }}
          >
            {(data?.title || topMusicChartsData.showcase.title)}
          </h1>

          {/* Description */}
          <p 
            className={`design1-desc-text font-medium ${inView ? 'animate-desc' : 'opacity-0'}`}
            style={{
              fontSize: 'clamp(11.5px, 1.6cqw, 17px)',
              lineHeight: '1.55',
              color: '#511b74',
              textShadow: '0 0.5px 1px rgba(255, 255, 255, 0.7)',
              fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            }}
          >
            {(data?.description || topMusicChartsData.showcase.description)}
          </p>
        </div>
      </div>
    </div>
  );
}


/* =========================================================================
   08. TOP MUSIC CHARTS SECTION COMPONENT
   ========================================================================= */
export const TopMusicCharts = () => {
  return (
    <section 
      id="top-music-charts"
      aria-label="Top Music Charts" 
      className="relative w-full max-w-[1620px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 mt-8 sm:mt-12 lg:mt-16 select-none scroll-mt-24"
    >
      {/* Signature Section Header */}
      <SectionHeader 
        titlePrefix={topMusicChartsData.titlePrefix} 
        titleAccent={topMusicChartsData.titleAccent} 
        subtitle={topMusicChartsData.subtitle} 
      />

      {/* Tambourine Music Art Showcase */}
      <div className="relative w-full">
        <TambourineShowcase data={topMusicChartsData.showcase} />
      </div>
    </section>
  );
};

export default TopMusicCharts;
