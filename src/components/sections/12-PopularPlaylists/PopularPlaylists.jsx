import React from 'react';
import { trophyData as defaultTrophyData, popularPlaylistsData } from './PopularPlaylistsData';
import { useInView } from '../../../hooks/useInView';

/**
 * Trophy Component
 * Exact 1:1 Vector Replica of the Holographic / Iridescent Chrome Trophy.
 * 
 * 100% Pure SVG & CSS — ZERO raster images or external image dependencies.
 * Clean, high-contrast Heading & Description overlay powered by TrophyData.js.
 */
export function TrophyShowcase({
  size = 'min(90vw, 90vh, 720px)',
  data = defaultTrophyData,
  className = '',
  style = {},
  ...props
}) {
  const sizeStyle = typeof size === 'number' ? `${size}px` : size;
  const content = { ...defaultTrophyData, ...data };
  const headingText = content.heading || '';
  const descriptionText = content.description || content.paragraph || '';
  const [trophyRef, inView] = useInView({ threshold: 0.1 });

  const handleLeftPath = "M 224 145 L 132 136 L 124 141 L 115 146 L 109 151 L 104 156 L 99 161 L 95 166 L 90 171 L 86 176 L 83 181 L 80 186 L 78 191 L 76 196 L 75 201 L 75 206 L 75 211 L 75 216 L 75 221 L 75 226 L 75 231 L 75 236 L 76 241 L 77 246 L 78 251 L 80 256 L 81 261 L 83 266 L 85 271 L 87 276 L 89 281 L 91 286 L 93 291 L 95 296 L 97 301 L 100 306 L 101 311 L 103 316 L 105 321 L 107 326 L 108 331 L 110 336 L 112 341 L 114 346 L 116 351 L 118 356 L 120 361 L 122 366 L 125 371 L 128 376 L 131 381 L 134 386 L 137 391 L 140 396 L 143 401 L 146 406 L 149 411 L 152 416 L 156 421 L 160 426 L 164 431 L 168 436 L 172 441 L 176 446 L 180 451 L 184 456 L 188 461 L 192 466 L 197 471 L 202 476 L 207 481 L 212 486 L 217 491 L 222 496 L 227 501 L 232 506 L 238 511 L 243 516 L 249 521 L 254 526 L 260 531 L 266 536 L 272 541 L 278 546 L 285 551 L 291 556 L 297 561 L 304 566 L 310 571 L 317 576 L 324 581 L 331 586 L 338 591 L 345 596 L 352 601 L 360 606 L 368 611 L 377 616 L 380 580 L 330 558 L 326 556 L 321 551 L 316 546 L 310 541 L 305 536 L 300 531 L 295 526 L 290 521 L 285 516 L 280 511 L 275 506 L 271 501 L 266 496 L 261 491 L 256 486 L 252 481 L 247 476 L 243 471 L 238 466 L 234 461 L 230 456 L 226 451 L 222 446 L 218 441 L 214 436 L 211 431 L 207 426 L 204 421 L 200 416 L 197 411 L 194 406 L 191 401 L 188 396 L 185 391 L 182 386 L 179 381 L 176 376 L 173 371 L 171 366 L 168 361 L 165 356 L 163 351 L 160 346 L 157 341 L 155 336 L 153 331 L 150 326 L 148 321 L 146 316 L 144 311 L 141 306 L 139 301 L 137 296 L 135 291 L 133 286 L 131 281 L 130 276 L 129 271 L 127 266 L 126 261 L 126 256 L 126 251 L 126 246 L 126 241 L 127 236 L 128 231 L 129 226 L 131 221 L 133 216 L 136 211 L 139 206 L 143 201 L 148 196 L 154 191 L 161 186 L 150 183 L 241 185 Z";

  const cupBodyPath = "M 241 136 L 241 360 C 241 480, 350 580, 452 615 L 572 615 C 674 580, 783 480, 783 360 L 783 136 Z";

  const stemPath = "M 452 615 L 572 615 L 572 830 L 452 830 Z";

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div
        ref={trophyRef}
        className={`trophy-load-wrapper ${inView ? 'is-in-view' : ''} ${className}`}
        style={{
          '--trophy-size': sizeStyle,
          ...style,
        }}
        role="region"
        aria-label={`${headingText || 'Trophy'} - Award Card`}
        {...props}
      >
        {/* 1. Trophy Vector SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024"
          className="trophy-svg-root"
          aria-hidden="true"
        >
        <defs>
          {/* Lighting & Bloom Filters */}
          <filter id="bloom-large" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="15" />
          </filter>
          <filter id="bloom-mid" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
          <filter id="bloom-small" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" />
          </filter>
          <filter id="bloom-sharp" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.2" />
          </filter>

          {/* Clip Path for Cup Body Interior */}
          <clipPath id="cup-clip">
            <path d={cupBodyPath} />
          </clipPath>

          {/* 1. Top Rim Collar Metallic Gradient */}
          <linearGradient id="collar-metal" x1="224" y1="0" x2="798" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0.0%" stopColor="#fdfffc" />
            <stop offset="6.6%" stopColor="#dfa6eb" />
            <stop offset="13.2%" stopColor="#e4b2f9" />
            <stop offset="19.9%" stopColor="#f2cafc" />
            <stop offset="26.5%" stopColor="#d99bfc" />
            <stop offset="33.1%" stopColor="#d57cf4" />
            <stop offset="39.7%" stopColor="#d571f5" />
            <stop offset="46.3%" stopColor="#da79fc" />
            <stop offset="53.0%" stopColor="#aa57dd" />
            <stop offset="59.6%" stopColor="#7f42c1" />
            <stop offset="66.2%" stopColor="#805ac7" />
            <stop offset="72.8%" stopColor="#9597ee" />
            <stop offset="79.4%" stopColor="#aaa2f5" />
            <stop offset="86.1%" stopColor="#ecc3fb" />
            <stop offset="92.7%" stopColor="#ff9df2" />
            <stop offset="99.3%" stopColor="#9143ba" />
            <stop offset="100.0%" stopColor="#8b3eb5" />
          </linearGradient>

          {/* Top Rim Specular Rim Line Gradient */}
          <linearGradient id="rim-top-spec" x1="224" y1="0" x2="798" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffb8e8" stopOpacity="0.4" />
            <stop offset="15%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#fad6fd" stopOpacity="0.6" />
            <stop offset="70%" stopColor="#8ba5f6" stopOpacity="0.7" />
            <stop offset="88%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#ff99ea" stopOpacity="0.4" />
          </linearGradient>

          {/* 2. Cup Body Metallic Gradient */}
          <linearGradient id="cup-metal" x1="241" y1="0" x2="783" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0.0%" stopColor="#fff1ff" />
            <stop offset="6.3%" stopColor="#c681ec" />
            <stop offset="12.5%" stopColor="#e3aff7" />
            <stop offset="18.8%" stopColor="#f8cdfb" />
            <stop offset="25.1%" stopColor="#dfa7fe" />
            <stop offset="31.4%" stopColor="#db89f8" />
            <stop offset="37.6%" stopColor="#d574f7" />
            <stop offset="43.9%" stopColor="#e280f9" />
            <stop offset="50.2%" stopColor="#bd65ed" />
            <stop offset="56.5%" stopColor="#8d41c5" />
            <stop offset="62.7%" stopColor="#7e42bc" />
            <stop offset="69.0%" stopColor="#9783e2" />
            <stop offset="75.3%" stopColor="#9d9ff4" />
            <stop offset="81.5%" stopColor="#bea5f8" />
            <stop offset="87.8%" stopColor="#f4d9fa" />
            <stop offset="94.1%" stopColor="#e27ef0" />
            <stop offset="100.0%" stopColor="#b838bd" />
          </linearGradient>

          {/* Cup Upper Specular Horizontal Highlight */}
          <linearGradient id="cup-upper-spec" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
            <stop offset="40%" stopColor="#ffffff" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          {/* Cup Center Iridescent Blooms */}
          <radialGradient id="cup-cloud-cyan" cx="46%" cy="54%" r="30%">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.65" />
            <stop offset="35%" stopColor="#93c5fd" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#c084fc" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="cup-cloud-lavender" cx="58%" cy="50%" r="34%">
            <stop offset="0%" stopColor="#e9d5ff" stopOpacity="0.65" />
            <stop offset="30%" stopColor="#d8b4fe" stopOpacity="0.45" />
            <stop offset="65%" stopColor="#c084fc" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="cup-cloud-silver" cx="49%" cy="45%" r="38%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
            <stop offset="25%" stopColor="#f5d0fe" stopOpacity="0.4" />
            <stop offset="60%" stopColor="#e879f9" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
          </radialGradient>

          {/* 3. Stem Metallic Gradient */}
          <linearGradient id="stem-metal" x1="452" y1="0" x2="572" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0.0%" stopColor="#fbf8ff" />
            <stop offset="6.7%" stopColor="#f8c6f7" />
            <stop offset="13.3%" stopColor="#dba9f2" />
            <stop offset="20.0%" stopColor="#f4c9ff" />
            <stop offset="26.7%" stopColor="#da9efe" />
            <stop offset="33.3%" stopColor="#d87af4" />
            <stop offset="40.0%" stopColor="#d873f7" />
            <stop offset="46.7%" stopColor="#d67bfa" />
            <stop offset="53.3%" stopColor="#9f4ed1" />
            <stop offset="60.0%" stopColor="#7e47c9" />
            <stop offset="66.7%" stopColor="#7b60d1" />
            <stop offset="73.3%" stopColor="#9899f3" />
            <stop offset="80.0%" stopColor="#cdb3fa" />
            <stop offset="86.7%" stopColor="#f9d5ff" />
            <stop offset="93.3%" stopColor="#dd5cda" />
            <stop offset="100.0%" stopColor="#fbfdfc" />
          </linearGradient>

          {/* 4. Upper Base Tier 1 Gradient */}
          <linearGradient id="tier1-metal" x1="342" y1="0" x2="682" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0.0%" stopColor="#fcfffb" />
            <stop offset="7.1%" stopColor="#dcb1e7" />
            <stop offset="14.1%" stopColor="#ebbafb" />
            <stop offset="21.2%" stopColor="#ebbeff" />
            <stop offset="28.2%" stopColor="#d48ffc" />
            <stop offset="35.3%" stopColor="#d271f6" />
            <stop offset="42.4%" stopColor="#da7bfd" />
            <stop offset="49.4%" stopColor="#c26ff3" />
            <stop offset="56.5%" stopColor="#8b44c6" />
            <stop offset="63.5%" stopColor="#7341bc" />
            <stop offset="70.6%" stopColor="#9293ef" />
            <stop offset="77.6%" stopColor="#a197f7" />
            <stop offset="84.7%" stopColor="#eeb6fd" />
            <stop offset="91.8%" stopColor="#ff98f4" />
            <stop offset="98.8%" stopColor="#eed4fb" />
            <stop offset="100.0%" stopColor="#a444c6" />
          </linearGradient>

          {/* 5. Lower Base Tier 2 Gradient */}
          <linearGradient id="tier2-metal" x1="288" y1="0" x2="736" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0.0%" stopColor="#f89fd7" />
            <stop offset="7.0%" stopColor="#d39eec" />
            <stop offset="13.0%" stopColor="#e1aff6" />
            <stop offset="18.0%" stopColor="#f5d0fc" />
            <stop offset="25.0%" stopColor="#ffffff" />
            <stop offset="35.0%" stopColor="#d689fb" />
            <stop offset="46.0%" stopColor="#db7df5" />
            <stop offset="52.0%" stopColor="#ae5ee5" />
            <stop offset="57.0%" stopColor="#8342c4" />
            <stop offset="63.0%" stopColor="#814fc2" />
            <stop offset="74.0%" stopColor="#918aea" />
            <stop offset="85.0%" stopColor="#edbbfa" />
            <stop offset="91.0%" stopColor="#fbc5f9" />
            <stop offset="96.0%" stopColor="#c147d0" />
            <stop offset="100.0%" stopColor="#9f44c5" />
          </linearGradient>

          {/* Shelf Bevel Highlight Gradient */}
          <linearGradient id="shelf-bevel" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#fce8fd" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#e298f8" stopOpacity="0.05" />
          </linearGradient>

          {/* Left Handle Base Gradient */}
          <linearGradient id="handle-l-base" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f09ff8" />
            <stop offset="25%" stopColor="#c971f4" />
            <stop offset="50%" stopColor="#b65fe8" />
            <stop offset="75%" stopColor="#a852e1" />
            <stop offset="100%" stopColor="#d482f0" />
          </linearGradient>

          {/* Right Handle Base Gradient */}
          <linearGradient id="handle-r-base" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f5bbf9" />
            <stop offset="25%" stopColor="#b962e4" />
            <stop offset="50%" stopColor="#a54bda" />
            <stop offset="75%" stopColor="#9240d0" />
            <stop offset="100%" stopColor="#db86f0" />
          </linearGradient>

          {/* Handle Outer Specular Stroke Gradient */}
          <linearGradient id="handle-spec-stroke" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
            <stop offset="20%" stopColor="#ffffff" stopOpacity="0.98" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="80%" stopColor="#fce2fc" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.6" />
          </linearGradient>

          {/* Handle Inner Sky-Blue Stroke Gradient */}
          <linearGradient id="handle-blue-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="35%" stopColor="#93c5fd" stopOpacity="0.85" />
            <stop offset="70%" stopColor="#60a5fa" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#c084fc" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        {/* 1. STEM PILLAR */}
        <path d={stemPath} fill="url(#stem-metal)" />
        <line x1="482" y1="615" x2="482" y2="830" stroke="#ffffff" strokeWidth="4.5" strokeOpacity="0.85" filter="url(#bloom-sharp)" />
        <line x1="482" y1="615" x2="482" y2="830" stroke="#fadedf" strokeWidth="9" strokeOpacity="0.45" filter="url(#bloom-small)" />
        <rect x="452" y="615" width="120" height="8" fill="#4c1d95" fillOpacity="0.35" filter="url(#bloom-sharp)" />
        <rect x="452" y="822" width="120" height="8" fill="#4c1d95" fillOpacity="0.4" filter="url(#bloom-sharp)" />

        {/* 2. LOWER BASE TIER 2 (FOOT) */}
        <rect x="288" y="880" width="448" height="62" rx="14" ry="14" fill="url(#tier2-metal)" />
        <rect x="292" y="880" width="440" height="8" rx="4" fill="url(#shelf-bevel)" />
        <line x1="395" y1="882" x2="405" y2="882" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
        <line x1="305" y1="941" x2="719" y2="941" stroke="#ffbbee" strokeWidth="1.8" strokeOpacity="0.6" />

        {/* 3. UPPER BASE TIER 1 */}
        <rect x="342" y="830" width="340" height="50" rx="8" ry="8" fill="url(#tier1-metal)" />
        <rect x="345" y="830" width="334" height="7" rx="3.5" fill="url(#shelf-bevel)" />
        <rect x="342" y="876" width="340" height="4" fill="#3b0764" fillOpacity="0.35" />

        {/* 4. CUP BODY */}
        <path d={cupBodyPath} fill="url(#cup-metal)" />

        {/* CUP CLIPPED SHADERS & REFLECTIONS */}
        <g clipPath="url(#cup-clip)">
          <ellipse cx="505" cy="460" rx="200" ry="145" fill="url(#cup-cloud-silver)" filter="url(#bloom-mid)" />
          <ellipse cx="485" cy="470" rx="135" ry="95" fill="url(#cup-cloud-cyan)" filter="url(#bloom-mid)" />
          <ellipse cx="545" cy="455" rx="145" ry="105" fill="url(#cup-cloud-lavender)" filter="url(#bloom-mid)" />
          <ellipse cx="380" cy="270" rx="140" ry="75" fill="#ffffff" fillOpacity="0.32" filter="url(#bloom-large)" />
          <ellipse cx="512" cy="180" rx="255" ry="30" fill="url(#cup-upper-spec)" />
          <line x1="358" y1="140" x2="358" y2="400" stroke="#ffffff" strokeWidth="3" strokeOpacity="0.45" filter="url(#bloom-small)" />
          <line x1="680" y1="140" x2="680" y2="420" stroke="#93c5fd" strokeWidth="4" strokeOpacity="0.35" filter="url(#bloom-small)" />
          <path d="M 430 600 C 470 618, 554 618, 594 600 L 580 615 L 444 615 Z" fill="#3b0764" fillOpacity="0.4" filter="url(#bloom-sharp)" />
        </g>

        {/* 5. HANDLES */}
        <path d={handleLeftPath} fill="url(#handle-l-base)" />
        <g transform="translate(1024, 0) scale(-1, 1)">
          <path d={handleLeftPath} fill="url(#handle-r-base)" />
        </g>

        {/* Lower Handle Weld Fillets */}
        <ellipse cx="355" cy="582" rx="26" ry="6" fill="#ffffff" fillOpacity="0.75" transform="rotate(15 355 582)" filter="url(#bloom-sharp)" />
        <ellipse cx="669" cy="582" rx="26" ry="6" fill="#ffffff" fillOpacity="0.75" transform="rotate(-15 669 582)" filter="url(#bloom-sharp)" />

        {/* 6. TOP RIM COLLAR */}
        <rect x="224" y="81" width="574" height="55" rx="12" ry="12" fill="url(#collar-metal)" />
        <rect x="227" y="82" width="568" height="7" rx="3.5" fill="url(#rim-top-spec)" />
        <line x1="245" y1="84" x2="777" y2="84" stroke="#ffffff" strokeWidth="2.2" strokeOpacity="0.9" />

        {/* Sparkle Twinkles */}
        <g className="trophy-twinkle-left">
          <circle cx="370" cy="84" r="3.5" fill="#ffffff" filter="url(#bloom-sharp)" />
          <line x1="370" y1="74" x2="370" y2="94" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.85" />
          <line x1="360" y1="84" x2="380" y2="84" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.85" />
        </g>
        <g className="trophy-twinkle-right">
          <circle cx="725" cy="84" r="3.5" fill="#ffffff" filter="url(#bloom-sharp)" />
          <line x1="725" y1="74" x2="725" y2="94" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.85" />
          <line x1="715" y1="84" x2="735" y2="84" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.85" />
        </g>

        <line x1="241" y1="136" x2="783" y2="136" stroke="#4a044e" strokeWidth="2.5" strokeOpacity="0.65" />

        {/* 7. LEFT HANDLE HIGHLIGHTS */}
        <path
          d="M 224 148 C 170 135, 110 148, 88 185 C 72 215, 72 250, 86 295 C 105 350, 145 435, 190 495 C 235 555, 290 600, 335 615"
          fill="none"
          stroke="url(#handle-spec-stroke)"
          strokeWidth="4.8"
          strokeLinecap="round"
          filter="url(#bloom-sharp)"
        />
        <path
          d="M 224 148 C 170 135, 110 148, 88 185 C 72 215, 72 250, 86 295 C 105 350, 145 435, 190 495 C 235 555, 290 600, 335 615"
          fill="none"
          stroke="#fbcfe8"
          strokeWidth="9"
          strokeLinecap="round"
          strokeOpacity="0.45"
          filter="url(#bloom-small)"
        />
        <path
          d="M 152 185 C 127 215, 127 245, 140 290 C 155 340, 195 415, 245 470 C 290 520, 325 545, 345 555"
          fill="none"
          stroke="url(#handle-blue-stroke)"
          strokeWidth="3.5"
          strokeLinecap="round"
          filter="url(#bloom-sharp)"
        />
        <ellipse cx="140" cy="205" rx="8" ry="18" fill="#ffffff" fillOpacity="0.75" transform="rotate(-30 140 205)" filter="url(#bloom-sharp)" />

        {/* 8. RIGHT HANDLE HIGHLIGHTS */}
        <g transform="translate(1024, 0) scale(-1, 1)">
          <path
            d="M 224 148 C 170 135, 110 148, 88 185 C 72 215, 72 250, 86 295 C 105 350, 145 435, 190 495 C 235 555, 290 600, 335 615"
            fill="none"
            stroke="url(#handle-spec-stroke)"
            strokeWidth="4.8"
            strokeLinecap="round"
            filter="url(#bloom-sharp)"
          />
          <path
            d="M 224 148 C 170 135, 110 148, 88 185 C 72 215, 72 250, 86 295 C 105 350, 145 435, 190 495 C 235 555, 290 600, 335 615"
            fill="none"
            stroke="#fbcfe8"
            strokeWidth="9"
            strokeLinecap="round"
            strokeOpacity="0.45"
            filter="url(#bloom-small)"
          />
          <path
            d="M 152 185 C 127 215, 127 245, 140 290 C 155 340, 195 415, 245 470 C 290 520, 325 545, 345 555"
            fill="none"
            stroke="#f472b6"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeOpacity="0.7"
            filter="url(#bloom-sharp)"
          />
          <ellipse cx="140" cy="205" rx="8" ry="18" fill="#ffffff" fillOpacity="0.8" transform="rotate(-30 140 205)" filter="url(#bloom-sharp)" />
        </g>
      </svg>

      {/* 2. Responsive Content Overlay (Heading + Description Only) */}
      <div className="trophy-content-overlay" aria-live="polite">
        {headingText && (
          <h1 className="trophy-heading">{headingText}</h1>
        )}

        {descriptionText && (
          <p className="trophy-description">{descriptionText}</p>
        )}
      </div>

      {/* 3. Holographic Specular Light Sweep Overlay on Reload */}
      <div className="trophy-sheen-sweep" aria-hidden="true" />

      {/* Embedded Self-Contained Styles with Container Queries */}
      <style>{`
        .trophy-load-wrapper * {
          box-sizing: border-box;
        }

        .trophy-load-wrapper {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: var(--trophy-size, 650px);
          height: var(--trophy-size, 650px);
          max-width: 100%;
          max-height: 100%;
          aspect-ratio: 1 / 1;
          user-select: none;
          overflow: hidden;
          container-type: inline-size;
          opacity: 0;
          transform: translateY(32px) scale(0.88);
          transition: opacity 0.3s ease;
        }

        /* Elegant spring scale & rise triggered on scroll into view */
        .trophy-load-wrapper.is-in-view {
          animation: trophy-enter-pop 1.1s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .trophy-svg-root {
          width: 100%;
          height: 100%;
          display: block;
        }

        /* Responsive Content Overlay on the Cup Body (High Contrast & Perfectly Legible) */
        .trophy-content-overlay {
          position: absolute;
          top: 13.8%;
          left: 50%;
          transform: translateX(-50%);
          width: 54%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          text-align: center;
          padding: 1.4cqw 2.2cqw 2.6cqw;
          box-sizing: border-box;
          z-index: 5;
          pointer-events: auto;

          /* Subtle ambient dark violet vignette behind text to ensure 100% crystal-clear visibility */
          background: radial-gradient(ellipse 72% 62% at 50% 46%, rgba(32, 2, 58, 0.46) 0%, rgba(25, 1, 46, 0.18) 60%, transparent 84%);
          border-radius: 28px;
        }

        /* High-Visibility Bold Heading */
        .trophy-heading {
          margin: 0 0 1.5cqw 0;
          font-size: clamp(19px, 5cqw, 38px);
          font-weight: 850;
          line-height: 1.15;
          letter-spacing: -0.025em;
          color: #ffffff;
          text-shadow: 0 2px 4px rgba(20, 0, 45, 0.95),
                       0 4px 16px rgba(35, 0, 75, 0.85),
                       0 1px 2px rgba(0, 0, 0, 0.8);
          max-width: 98%;
        }

        /* High-Visibility Clear Description Paragraph */
        .trophy-description {
          margin: 0;
          font-size: clamp(12.5px, 2.55cqw, 19px);
          font-weight: 500;
          line-height: 1.48;
          letter-spacing: 0.005em;
          color: rgba(255, 255, 255, 0.96);
          text-shadow: 0 1.5px 3px rgba(15, 0, 35, 0.95),
                       0 3px 12px rgba(30, 0, 65, 0.85);
          max-width: 92%;
          text-wrap: pretty;
        }

        /* Diagonal Holographic Sheen Sweep across Trophy */
        .trophy-sheen-sweep {
          position: absolute;
          inset: -25%;
          background: linear-gradient(
            110deg,
            transparent 32%,
            rgba(255, 255, 255, 0.15) 44%,
            rgba(255, 255, 255, 0.8) 50%,
            rgba(255, 255, 255, 0.15) 56%,
            transparent 68%
          );
          mix-blend-mode: color-dodge;
          pointer-events: none;
          z-index: 6;
          opacity: 0;
        }

        .trophy-load-wrapper.is-in-view .trophy-sheen-sweep {
          animation: sheen-diagonal-sweep 1.4s 0.25s cubic-bezier(0.2, 0.8, 0.25, 1) both;
        }

        /* Sparkle Twinkles on Top Rim Glints */
        .trophy-twinkle-left {
          transform-origin: 370px 84px;
          opacity: 0;
        }

        .trophy-twinkle-right {
          transform-origin: 725px 84px;
          opacity: 0;
        }

        .trophy-load-wrapper.is-in-view .trophy-twinkle-left {
          animation: glint-sparkle 0.9s 0.75s ease-out both;
        }

        .trophy-load-wrapper.is-in-view .trophy-twinkle-right {
          animation: glint-sparkle 0.9s 0.85s ease-out both;
        }

        /* 1. Trophy Entry Animation (Pop + Rise + Settle) */
        @keyframes trophy-enter-pop {
          0% {
            opacity: 0;
            transform: translateY(32px) scale(0.88);
          }
          65% {
            opacity: 1;
            transform: translateY(-5px) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateY(0px) scale(1);
          }
        }

        /* 2. Holographic Specular Sweep */
        @keyframes sheen-diagonal-sweep {
          0% {
            transform: translateX(-110%) rotate(10deg);
            opacity: 0;
          }
          35% {
            opacity: 1;
          }
          100% {
            transform: translateX(110%) rotate(10deg);
            opacity: 0;
          }
        }

        /* 3. Star Glint Sparkle Burst */
        @keyframes glint-sparkle {
          0% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          45% {
            opacity: 1;
            transform: scale(1.4) rotate(45deg);
          }
          100% {
            opacity: 0.85;
            transform: scale(1) rotate(90deg);
          }
        }

        @media (max-width: 767px) {
          .trophy-content-overlay {
            display: none !important;
          }
          .trophy-load-wrapper {
            width: min(84vw, 320px) !important;
            height: min(84vw, 320px) !important;
            margin-bottom: 0.25rem;
          }
        }

        @media (min-width: 768px) {
          .trophy-content-overlay {
            display: flex !important;
          }
        }
      `}</style>
      </div>

      {/* 4. Dedicated Mobile Content Card (Visible only on < 768px, Hidden on md+) */}
      <div className="md:hidden w-full max-w-[340px] px-4 py-3.5 mt-2 rounded-2xl bg-white/85 backdrop-blur-md border border-purple-200/80 shadow-[0_8px_25px_rgba(168,85,247,0.1)] text-center flex flex-col items-center animate-heading-load">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 text-purple-700 text-xs font-bold mb-2 shadow-2xs">
          <span>🏆</span>
          <span className="tracking-wider uppercase text-[11px] font-extrabold">{headingText || 'Popular Playlists'}</span>
        </div>
        <p className="text-xs text-slate-700 font-medium leading-relaxed px-1">
          {descriptionText}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-1.5 mt-2.5 pt-2 border-t border-purple-100/90 w-full text-[10px] text-purple-600 font-semibold">
          <span className="px-2 py-0.5 rounded-md bg-purple-50 border border-purple-100">✦ Unique Listeners</span>
          <span className="px-2 py-0.5 rounded-md bg-pink-50 border border-pink-100">✦ Stream Velocity</span>
          <span className="px-2 py-0.5 rounded-md bg-violet-50 border border-violet-100">✦ Global Trends</span>
        </div>
      </div>
    </div>
  );
}

import { SectionHeader } from '../../common/SectionHeader';

/* =========================================================================
   12. POPULAR PLAYLISTS SECTION COMPONENT
   ========================================================================= */
export const PopularPlaylists = () => {
  return (
    <section
      id="popular-playlists"
      aria-label="Popular Playlists"
      className="relative w-full max-w-[1620px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 mt-8 sm:mt-12 lg:mt-16 select-none scroll-mt-24"
    >
      {/* Signature Section Header */}
      <SectionHeader
        titlePrefix={popularPlaylistsData.titlePrefix}
        titleAccent={popularPlaylistsData.titleAccent}
        subtitle={popularPlaylistsData.subtitle}
      />

      {/* 3D Holographic Iridescent Trophy Showcase */}
      <div
        className="relative w-full rounded-2xl sm:rounded-3xl border border-purple-200/80 shadow-[0_12px_40px_rgba(168,85,247,0.12)] p-4 sm:p-6 md:p-10 flex flex-col items-center justify-center overflow-hidden"
        style={{
          background: 'radial-gradient(circle at 50% 35%, #ffffff 0%, #f4e9fd 45%, #e2cbfb 85%, #dcbeff 100%)'
        }}
      >
        <TrophyShowcase data={popularPlaylistsData.trophy} />
      </div>
    </section>
  );
};

export default PopularPlaylists;
