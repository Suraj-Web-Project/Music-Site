import React, { useState, useRef, useEffect } from 'react';
import { Heart, MoreVertical, Play, Pause } from 'lucide-react';
import { trendingNowData, trendingSongs as TRENDING_SONGS } from './TrendingNowData';
import { useInView } from '../../../hooks/useInView';

/* =========================================================================

   2. TRENDING NOW SECTION (3D CURVED CAROUSEL)

   ========================================================================= */

/**

 * TrendingNow: Premium 3D Curved Stage Carousel

 * Matching Image 1 (Target Design) & Fully Responsive Across All Devices:

 *  1. Header: Centered Heading with frequency equalizer graphic accent, subtitle,

 *     and responsive controls (View All + Previous/Next arrow buttons).

 *  2. Balanced 3D Stage Carousel: Symmetrical curved arc layout with Cruel Summer

 *     as the featured center hero, surrounded by gradually scaled & angled side cards.

 *     Left and right sides have equal margins, preventing cards from touching the screen edge.

 *  3. Center Hero Card: Elevated scale, radiant pink-purple neon border halo,

 *     interactive audio equalizer waveform strip, lower-chest centered play button (face clear).

 *  4. Stage Floor: Concentric glowing elliptical rings centered under the hero card.

 *  5. Background: Translucent ambient pink/purple harmonic soundwave ribbons.

 *  6. Pagination: Center pill dots with active elongated indicator.

 *  7. Cross-device Responsive:

 *     - Desktop (>= 1280px): All 6 cards visible, perfectly centered and balanced.

 *     - Laptop (1024px - 1279px): All 6 cards visible, proportionally scaled, generous margins.

 *     - Tablet (640px - 1023px): 5 cards in 3D arc, 100% symmetric.

 *     - Mobile (< 640px): 3D stage with glowing center card and peeking 3D side cards + swipe gestures.

 */

export const TrendingNow = ({ onPlayTrack }) => {

  // Default active index = 2 (Cruel Summer, as in Target Image 1)

  const [activeIndex, setActiveIndex] = useState(2);

  const [playingId, setPlayingId] = useState(null);

  const [likes, setLikes] = useState({ t3: false, t4: false });

  const [isHovered, setIsHovered] = useState(false);

  const [windowWidth, setWindowWidth] = useState(

    typeof window !== 'undefined' ? window.innerWidth : 1440

  );



  const touchStartX = useRef(null);

  const touchStartY = useRef(null);



  const totalSongs = TRENDING_SONGS.length;



  // Track window resize for responsive 3D transforms

  useEffect(() => {

    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

  }, []);



  const handlePrev = () => {

    setActiveIndex((prev) => (prev - 1 + totalSongs) % totalSongs);

  };



  const handleNext = () => {

    setActiveIndex((prev) => (prev + 1) % totalSongs);

  };



  // Automatic Smooth Sliding Carousel (pauses on hover or touch)

  useEffect(() => {

    if (isHovered) return;



    const timer = setInterval(() => {

      setActiveIndex((prev) => (prev + 1) % totalSongs);

    }, 3800);



    return () => clearInterval(timer);

  }, [isHovered, totalSongs]);



  const toggleLike = (e, id) => {

    e.stopPropagation();

    setLikes((prev) => ({ ...prev, [id]: !prev[id] }));

  };



  const handlePlayToggle = (e, song) => {

    e.stopPropagation();

    if (playingId === song.id) {

      setPlayingId(null);

    } else {

      setPlayingId(song.id);

      onPlayTrack?.(song);

    }

  };



  // Touch Swipe Handlers for mobile & tablet

  const handleTouchStart = (e) => {

    setIsHovered(true);

    touchStartX.current = e.touches[0].clientX;

    touchStartY.current = e.touches[0].clientY;

  };



  const handleTouchEnd = (e) => {

    setIsHovered(false);

    if (touchStartX.current === null) return;

    const touchEndX = e.changedTouches[0].clientX;

    const touchEndY = e.changedTouches[0].clientY;

    const diffX = touchStartX.current - touchEndX;

    const diffY = touchStartY.current - touchEndY;



    // Trigger swipe if horizontal displacement is greater than vertical and exceeds threshold

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 35) {

      if (diffX > 0) {

        handleNext();

      } else {

        handlePrev();

      }

    }

    touchStartX.current = null;

    touchStartY.current = null;

  };



  // Circular slot calculation mapping each card into slots relative to active center

  const getCircularSlot = (index, currentActive, total = 6) => {

    let diff = (index - currentActive) % total;

    if (diff < -2) diff += total;

    if (diff > 3) diff -= total;

    return diff;

  };



  /**

   * Perfectly balanced responsive 3D slot configurations.

   * Eliminates the right-side edge clipping and left-side empty space.

   * Left and right side cards have equal distance from the center.

   */

  const getSlotStyle = (slot) => {

    // 1. MOBILE (< 640px): 3D stage with 1 center hero + 2 peeking side cards

    if (windowWidth < 640) {

      switch (slot) {

        case -1: // Left peeking card

          return {

            transform: 'translateX(-112px) translateY(12px) scale(0.80) rotateZ(-4deg) rotateY(12deg)',

            zIndex: 20,

            opacity: 0.85,

            filter: 'brightness(0.92)',

          };

        case 0: // Center Hero

          return {

            transform: 'translateX(0px) translateY(0px) scale(1.04)',

            zIndex: 35,

            opacity: 1,

            filter: 'brightness(1)',

          };

        case 1: // Right peeking card

          return {

            transform: 'translateX(112px) translateY(12px) scale(0.80) rotateZ(4deg) rotateY(-12deg)',

            zIndex: 20,

            opacity: 0.85,

            filter: 'brightness(0.92)',

          };

        default: // Remaining cards wait in background

          return {

            transform: `translateX(${slot > 0 ? 150 : -150}px) translateY(30px) scale(0.5)`,

            zIndex: 5,

            opacity: 0,

            pointerEvents: 'none',

          };

      }

    }



    // 2. TABLET (640px to 1023px): 5 cards in 3D arc, 100% symmetric

    if (windowWidth < 1024) {

      switch (slot) {

        case -2: // Far Left

          return {

            transform: 'translateX(-275px) translateY(26px) scale(0.68) rotateZ(-7deg) rotateY(15deg)',

            zIndex: 15,

            opacity: 0.85,

            filter: 'brightness(0.90)',

          };

        case -1: // Mid Left

          return {

            transform: 'translateX(-145px) translateY(12px) scale(0.82) rotateZ(-3.5deg) rotateY(8deg)',

            zIndex: 25,

            opacity: 0.98,

            filter: 'brightness(0.96)',

          };

        case 0: // Center Hero

          return {

            transform: 'translateX(0px) translateY(-2px) scale(1.06)',

            zIndex: 35,

            opacity: 1,

            filter: 'brightness(1)',

          };

        case 1: // Mid Right

          return {

            transform: 'translateX(145px) translateY(12px) scale(0.82) rotateZ(3.5deg) rotateY(-8deg)',

            zIndex: 25,

            opacity: 0.98,

            filter: 'brightness(0.96)',

          };

        case 2: // Far Right

          return {

            transform: 'translateX(275px) translateY(26px) scale(0.68) rotateZ(7deg) rotateY(-15deg)',

            zIndex: 15,

            opacity: 0.85,

            filter: 'brightness(0.90)',

          };

        default: // Slot 3 seamlessly transitions in background

          return {

            transform: 'translateX(0px) translateY(40px) scale(0.5)',

            zIndex: 5,

            opacity: 0,

            pointerEvents: 'none',

          };

      }

    }



    // 3. LAPTOP / SMALL DESKTOP (1024px to 1279px): All 6 cards, scaled & balanced

    if (windowWidth < 1280) {

      switch (slot) {

        case -2: // Far Left

          return {

            transform: 'translateX(-325px) translateY(28px) scale(0.72) rotateZ(-7deg) rotateY(15deg)',

            zIndex: 15,

            opacity: 0.94,

            filter: 'brightness(0.92)',

          };

        case -1: // Mid Left

          return {

            transform: 'translateX(-165px) translateY(14px) scale(0.84) rotateZ(-3.5deg) rotateY(8deg)',

            zIndex: 25,

            opacity: 0.98,

            filter: 'brightness(0.96)',

          };

        case 0: // Center Hero

          return {

            transform: 'translateX(0px) translateY(-3px) scale(1.08)',

            zIndex: 35,

            opacity: 1,

            filter: 'brightness(1)',

          };

        case 1: // Mid Right

          return {

            transform: 'translateX(145px) translateY(14px) scale(0.84) rotateZ(3.5deg) rotateY(-8deg)',

            zIndex: 25,

            opacity: 0.98,

            filter: 'brightness(0.96)',

          };

        case 2: // Right

          return {

            transform: 'translateX(250px) translateY(24px) scale(0.76) rotateZ(6deg) rotateY(-12deg)',

            zIndex: 20,

            opacity: 0.96,

            filter: 'brightness(0.94)',

          };

        case 3: // Far Right

          return {

            transform: 'translateX(342px) translateY(34px) scale(0.68) rotateZ(8deg) rotateY(-16deg)',

            zIndex: 15,

            opacity: 0.92,

            filter: 'brightness(0.90)',

          };

        default:

          return {

            transform: 'translateX(0px) translateY(40px) scale(0.5)',

            zIndex: 5,

            opacity: 0,

            pointerEvents: 'none',

          };

      }

    }



    // 4. LARGE DESKTOP (>= 1280px): All 6 cards, matching Image 1 with equal margins

    switch (slot) {

      case -2: // Far Left (Blinding Lights)

        return {

          transform: 'translateX(-395px) translateY(36px) scale(0.76) rotateZ(-7deg) rotateY(15deg)',

          zIndex: 15,

          opacity: 0.95,

          filter: 'brightness(0.92)',

        };

      case -1: // Mid Left (Calm Down)

        return {

          transform: 'translateX(-200px) translateY(18px) scale(0.88) rotateZ(-3.5deg) rotateY(8deg)',

          zIndex: 25,

          opacity: 0.98,

          filter: 'brightness(0.96)',

        };

      case 0: // Center Hero Active Card (Cruel Summer)

        return {

          transform: 'translateX(0px) translateY(-4px) scale(1.14)',

          zIndex: 35,

          opacity: 1,

          filter: 'brightness(1)',

        };

      case 1: // Mid Right (As It Was)

        return {

          transform: 'translateX(175px) translateY(18px) scale(0.88) rotateZ(3.5deg) rotateY(-8deg)',

          zIndex: 25,

          opacity: 0.98,

          filter: 'brightness(0.96)',

        };

      case 2: // Right (La Vie En Rose)

        return {

          transform: 'translateX(304px) translateY(30px) scale(0.79) rotateZ(6deg) rotateY(-12deg)',

          zIndex: 20,

          opacity: 0.96,

          filter: 'brightness(0.94)',

        };

      case 3: // Far Right (Heat Waves)

        return {

          transform: 'translateX(414px) translateY(42px) scale(0.72) rotateZ(8deg) rotateY(-16deg)',

          zIndex: 15,

          opacity: 0.92,

          filter: 'brightness(0.90)',

        };

      default:

        return {

          transform: 'translateX(0px) translateY(50px) scale(0.5)',

          zIndex: 5,

          opacity: 0,

          pointerEvents: 'none',

        };

    }

  };



  const [headerRef, headerInView] = useInView({ threshold: 0.12, triggerOnce: true });

  return (

    <section 

      id="trending-now" aria-label="Trending Now" 

      onMouseEnter={() => setIsHovered(true)}

      onMouseLeave={() => setIsHovered(false)}

      onTouchStart={handleTouchStart}

      onTouchEnd={handleTouchEnd}

      className="relative w-full max-w-[1620px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 mt-8 sm:mt-12 lg:mt-14 select-none overflow-hidden pb-10"

    >

      {/* ──────────────────────────────────────────────────────────

          1. BACKGROUND AMBIENT SOUNDWAVE RIBBONS

          Translucent lavender-pink waves drifting behind the cards

          ────────────────────────────────────────────────────────── */}

      <div className="absolute inset-0 pointer-events-none -z-20 overflow-hidden">

        <svg 

          viewBox="0 0 1440 600" 

          fill="none" 

          className="w-full h-full object-cover opacity-65 animate-bg-wave-drift"

          preserveAspectRatio="none"

        >

          <defs>

            <linearGradient id="trendingBgGrad1" x1="0%" y1="0%" x2="100%" y2="100%">

              <stop offset="0%" stopColor="#ec4899" stopOpacity="0.14" />

              <stop offset="50%" stopColor="#a855f7" stopOpacity="0.10" />

              <stop offset="100%" stopColor="#67e8f9" stopOpacity="0.05" />

            </linearGradient>

            <linearGradient id="trendingBgGrad2" x1="100%" y1="0%" x2="0%" y2="100%">

              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.12" />

              <stop offset="60%" stopColor="#f472b6" stopOpacity="0.08" />

              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />

            </linearGradient>

          </defs>

          <path 

            d="M -100,240 C 200,140 450,380 750,220 C 1050,60 1300,320 1550,200 L 1550,600 L -100,600 Z" 

            fill="url(#trendingBgGrad1)" 

          />

          <path 

            d="M -50,340 C 250,260 500,440 850,300 C 1200,160 1350,420 1600,280 L 1600,600 L -50,600 Z" 

            fill="url(#trendingBgGrad2)" 

          />

        </svg>

      </div>



      {/* ──────────────────────────────────────────────────────────

          2. SECTION HEADER (Centered Heading + Equalizer Graphic)

          - Centered Heading

          - Centered Subtitle

          - View All + Arrow Controls

          ────────────────────────────────────────────────────────── */}

      <div ref={headerRef} className="relative z-10 flex flex-col items-center justify-center text-center mb-6 sm:mb-8 select-none">

        {/* Centered Large Bold Heading with Equalizer Graphic */}

        <div className="flex items-center justify-center gap-3">

          <h2 className={`text-3xl sm:text-[38px] font-extrabold tracking-tight leading-tight transition-all duration-700 ${
            headerInView ? 'animate-heading-load opacity-100' : 'opacity-0 translate-y-6'
          }`}>

            <span className="text-[#101828]">{trendingNowData.titlePrefix} </span>

            <span className="bg-gradient-to-r from-[#7c3aed] to-[#ec4899] bg-clip-text text-transparent">{trendingNowData.titleAccent}</span>

          </h2>



          {/* Equalizer Frequency Accent Bars */}

          <div className="flex items-end gap-[3px] h-7 pb-1" aria-hidden="true">

            <span className="w-1 bg-gradient-to-t from-[#7c3aed] to-[#ec4899] rounded-full h-3 animate-pulse" />

            <span className="w-1 bg-gradient-to-t from-[#7c3aed] to-[#ec4899] rounded-full h-5" />

            <span className="w-1 bg-gradient-to-t from-[#7c3aed] to-[#ec4899] rounded-full h-7 animate-pulse" style={{ animationDelay: '0.2s' }} />

            <span className="w-1 bg-gradient-to-t from-[#7c3aed] to-[#ec4899] rounded-full h-4" />

            <span className="w-1 bg-gradient-to-t from-[#7c3aed] to-[#ec4899] rounded-full h-2.5 animate-pulse" style={{ animationDelay: '0.4s' }} />

          </div>

        </div>



        {/* Centered Subtitle */}

        <p className={`text-xs sm:text-[14px] font-normal text-slate-500 mt-1 max-w-xl mx-auto transition-all duration-700 delay-100 ${
          headerInView ? 'animate-subheading-load opacity-100' : 'opacity-0 translate-y-4'
        }`}>

          {trendingNowData.subtitle}

        </p>



      </div>



      {/* ──────────────────────────────────────────────────────────

          3. MAIN 3D CURVED STAGE CONTAINER

          Stage arrangement with perspective & floor concentric rings

          Unified across all devices: Desktop, Laptop, Tablet, Mobile

          ────────────────────────────────────────────────────────── */}

      <div className="relative w-full min-h-[420px] sm:min-h-[460px] lg:min-h-[500px] flex items-center justify-center mt-2 pt-2">

        {/* Luminous Concentric Floor Stage Rings */}

        <div 

          className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[600px] sm:w-[850px] md:w-[1050px] lg:w-[1250px] xl:w-[1350px] h-[140px] sm:h-[170px] lg:h-[190px] pointer-events-none -z-10 animate-floor-rings"

          aria-hidden="true"

        >

          {/* Inner Sharp Radiant Ring */}

          <div className="absolute inset-x-[18%] inset-y-[22%] rounded-[100%] border border-pink-400/55 shadow-[0_0_26px_rgba(236,72,153,0.50)]" />

          {/* Mid Stage Ring */}

          <div className="absolute inset-x-[6%] inset-y-[10%] rounded-[100%] border border-purple-400/38 shadow-[0_0_38px_rgba(168,85,247,0.32)]" />

          {/* Outer Soft Ring */}

          <div className="absolute inset-0 rounded-[100%] border border-purple-300/20" />

          {/* Floor Radial Luminous Glow */}

          <div className="absolute inset-x-[20%] inset-y-[24%] rounded-[100%] bg-gradient-to-r from-pink-500/22 via-purple-500/32 to-pink-500/22 blur-2xl" />

        </div>



        {/* 3D Perspective Stage Cards Frame */}

        <div 

          className="relative w-full h-[430px] sm:h-[450px] flex items-center justify-center"

          style={{ perspective: windowWidth < 640 ? '800px' : '1200px' }}

        >

          {TRENDING_SONGS.map((song, index) => {

            const slot = getCircularSlot(index, activeIndex, totalSongs);

            const isCenter = slot === 0;

            const isLiked = !!likes[song.id];

            const isPlaying = playingId === song.id;

            const slotStyle = getSlotStyle(slot);



            return (

              <div

                key={song.id}

                onClick={() => setActiveIndex(index)}

                style={{

                  ...slotStyle,

                  transformOrigin: 'center bottom',

                }}

                className={`

                  absolute rounded-2xl p-2.5 pb-3

                  bg-[#0C071E] select-none cursor-pointer

                  transition-all duration-600 cubic-bezier(0.25, 1, 0.5, 1)

                  hover:brightness-105

                  ${windowWidth < 640 

                    ? 'w-[195px] max-w-[80vw]' 

                    : windowWidth < 1024 

                      ? 'w-[200px]' 

                      : windowWidth < 1280 

                        ? 'w-[205px]' 

                        : 'w-[230px] xl:w-[240px]'

                  }

                  ${isCenter 

                    ? 'border-2 border-pink-500/90 animate-center-card-glow' 

                    : 'border border-purple-500/20 shadow-[0_14px_30px_rgba(0,0,0,0.45)]'

                  }

                `}

              >

                {/* Center Card Back Ambient Halo */}

                {isCenter && (

                  <div 

                    className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-pink-500/40 via-purple-500/35 to-pink-500/40 blur-xl pointer-events-none -z-10"

                    aria-hidden="true" 

                  />

                )}



                {/* Album Cover Thumbnail Area */}

                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-purple-950/60 isolate">

                  <img

                    src={song.image}

                    alt={`${song.title} by ${song.artist}`}

                    className="w-full h-full object-cover"

                    loading="eager"

                  />



                  {/* Top-Right Heart Icon (White Outline matching Image 1) */}

                  <button

                    type="button"

                    onClick={(e) => toggleLike(e, song.id)}

                    aria-label={`Save ${song.title} to favorites`}

                    className="absolute top-2.5 right-2.5 z-20 text-white/80 hover:text-white transition-colors drop-shadow-md cursor-pointer p-1"

                  >

                    <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isLiked ? 'fill-pink-500 text-pink-500' : 'stroke-[2]'}`} />

                  </button>



                  {/* Center Hero Card: Audio Frequency Equalizer Waveform Strip */}

                  {isCenter && (

                    <div className="absolute inset-x-2 bottom-2 z-20 flex items-end justify-between gap-[2px] h-6 px-1.5 py-1 bg-black/45 backdrop-blur-md rounded-lg border border-white/10 pointer-events-none">

                      {[40, 75, 55, 90, 65, 45, 85, 100, 70, 50, 80, 60, 95, 75, 45, 65, 85, 100, 60, 40].map((h, barIdx) => (

                        <span

                          key={barIdx}

                          className={`w-0.5 rounded-full ${

                            isPlaying

                              ? 'bg-gradient-to-t from-purple-400 to-pink-400 animate-pulse'

                              : 'bg-white/70'

                          }`}

                          style={{

                            height: `${isPlaying ? Math.max(25, (h + (barIdx % 5) * 10) % 100) : h * 0.7}%`,

                            animationDelay: `${barIdx * 0.08}s`,

                          }}

                        />

                      ))}

                    </div>

                  )}



                  {/* Center Play Button Overlay on Image */}

                  <div 

                    onClick={(e) => handlePlayToggle(e, song)}

                    className="absolute inset-0 z-20 flex items-center justify-center"

                    style={{

                      transform: isCenter ? 'translateY(10px)' : 'none',

                    }}

                  >

                    <button

                      type="button"

                      aria-label={isPlaying ? `Pause ${song.title}` : `Play ${song.title}`}

                      className={`

                        rounded-full bg-white text-[#7c3aed] flex items-center justify-center

                        shadow-[0_4px_18px_rgba(0,0,0,0.45)] cursor-pointer transition-transform duration-200

                        hover:scale-110 active:scale-95

                        ${isCenter 

                          ? 'w-11 h-11 sm:w-12 sm:h-12' 

                          : 'absolute bottom-2.5 right-2.5 w-7 h-7 sm:w-8 sm:h-8'

                        }

                      `}

                    >

                      {isPlaying ? (

                        <Pause className={`${isCenter ? 'w-5 h-5' : 'w-3.5 h-3.5'} fill-[#7c3aed]`} />

                      ) : (

                        <Play className={`${isCenter ? 'w-5 h-5 ml-0.5' : 'w-3.5 h-3.5 ml-0.5'} fill-[#7c3aed]`} />

                      )}

                    </button>

                  </div>

                </div>



                {/* Song Meta Information Footer */}

                <div className="mt-2 sm:mt-2.5 px-0.5 flex items-start justify-between gap-1.5">

                  <div className="min-w-0 flex-1">

                    <h3 className="font-bold text-[13px] sm:text-[14px] text-white truncate">{song.title}</h3>

                    <p className="text-[11px] sm:text-[12px] text-slate-400 truncate mt-0.5">{song.artist}</p>

                  </div>



                  {/* Context Action Icon */}

                  <div className="shrink-0 flex items-center gap-1">

                    {isCenter ? (

                      <button 

                        type="button"

                        aria-label="More options"

                        className="text-slate-400 hover:text-white transition-colors cursor-pointer p-0.5"

                      >

                        <MoreVertical className="w-3.5 h-3.5 sm:w-4 sm:h-4" />

                      </button>

                    ) : (

                      <button

                        type="button"

                        onClick={(e) => toggleLike(e, song.id)}

                        aria-label={`Like ${song.title}`}

                        className="text-slate-400 hover:text-pink-400 transition-colors cursor-pointer p-0.5"

                      >

                        <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-pink-400 text-pink-400' : ''}`} />

                      </button>

                    )}

                  </div>

                </div>

              </div>

            );

          })}

        </div>

      </div>



      {/* ──────────────────────────────────────────────────────────

          4. PAGINATION INDICATORS (Matching Image 1)

          Active elongated purple pill + inactive small dots

          ────────────────────────────────────────────────────────── */}

      <div className="flex items-center justify-center gap-2 mt-5 sm:mt-7 select-none" aria-label="Carousel pagination">

        {TRENDING_SONGS.map((song, i) => (

          <button

            key={song.id}

            type="button"

            onClick={() => setActiveIndex(i)}

            aria-label={`Go to ${song.title}`}

            className={`transition-all duration-300 rounded-full cursor-pointer ${

              i === activeIndex

                ? 'w-7 h-2 bg-gradient-to-r from-[#7c3aed] to-[#ec4899] shadow-[0_0_8px_rgba(236,72,153,0.6)]'

                : 'w-2 h-2 bg-purple-200 hover:bg-purple-300'

            }`}

          />

        ))}

      </div>

    </section>

  );


};

export default TrendingNow;

