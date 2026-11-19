import { SectionHeader } from '../../common/SectionHeader';
import { topPodcastsData } from './TopPodcastsData';
import React, { useState, useEffect } from 'react';
import { useInView } from '../../../hooks/useInView';

/**
 * MusicContentFrame2.jsx
 * 
 * Pixel-Perfect 1:1 Technical Recreation of the 3D Music-Themed Frame Design
 * Built entirely with React, Tailwind CSS, Custom CSS, and Inline SVG.
 * 
 * High-Precision Elements:
 * - 3D Candy-Gloss Treble Clef (𝄞):
 *   * Teardrop top loop with open inner aperture
 *   * Graceful crossover, sweeping outer belly, and inner G-loop curl
 *   * Vertical descending spine with terminal J-hook and spherical 3D glossy pearl bead
 *   * Multi-pass cylindrical 3D candy shading
 * - Left & Right Classical Tablas:
 *   * Exactly identical on both sides (symmetric layout)
 *   * Cream drumhead with top rim beads
 *   * Horizontal purple tension hoop with 7 vertical cream-gold bracket cleat clips
 *   * Thick 3D golden V-tension cords with lower anchor loop knots
 *   * Dual waist assembly: upper tension ring + lower chunky segmented golden-orange & purple bumper collar
 *   * Flared drum foot with purple-to-hot-magenta lighting and golden pinstripe inlay ring
 * - Top raised music badge with 3D beamed music note (♫), 6-bar symmetric equalizer waveforms,
 *   golden metallic double bezel, and twin starburst lens flare glints
 * - Bottom musical decoration: dual layered waves (deep violet base wave & glossy neon-pink
 *   swooping ribbon) with centered 3D candy-gloss Treble Clef (𝄞)
 * - 100% Fully Responsive across ALL devices: Mobile (320px+), Tablet, Laptop, Desktop, and 4K
 */

// ==========================================
// REUSABLE ULTRA-DETAILED 3D TABLA COMPONENT
// ==========================================
function TablaDrum({ cx, idPrefix = 'tabla_', mirrorLight = false, className = '' }) {
  // Lighting highlights:
  // For Left Drum: Highlight is on the right flank (towards center)
  // For Right Drum: Highlight is on the left flank (towards center)
  const lightRight = !mirrorLight;

  // Horizontal positions for the 7 cleat brackets along the top hoop (rx=86, ry=20 at cy=280)
  const clips = [
    { x: cx - 86, y: 280, scale: 0.85 },
    { x: cx - 60, y: 292, scale: 0.92 },
    { x: cx - 30, y: 298, scale: 0.98 },
    { x: cx,      y: 300, scale: 1.0 },
    { x: cx + 30, y: 298, scale: 0.98 },
    { x: cx + 60, y: 292, scale: 0.92 },
    { x: cx + 86, y: 280, scale: 0.85 },
  ];

  // Lower waist rope anchor points (rx=44, ry=11 at cy=398)
  const waistAnchors = [
    { x: cx - 42, y: 394 },
    { x: cx - 21, y: 398 },
    { x: cx,      y: 400 },
    { x: cx + 21, y: 398 },
    { x: cx + 42, y: 394 },
  ];

  return (
    <g id={`${idPrefix}group`} className={`transition-transform duration-500 hover:scale-[1.025] origin-bottom cursor-pointer ${className}`}>
      {/* 1. Floor Drop Shadow beneath the pedestal */}
      <ellipse
        cx={cx}
        cy="555"
        rx="108"
        ry="23"
        fill="#1e0036"
        opacity="0.6"
        filter={`url(#${idPrefix}softBlur)`}
      />
      <ellipse
        cx={cx}
        cy="552"
        rx="84"
        ry="15"
        fill="#100020"
        opacity="0.5"
        filter={`url(#${idPrefix}tightBlur)`}
      />

      {/* 2. Pedestal Dais (3D Cylindrical Stepped Stage) */}
      {/* Pedestal Bottom Rim Glow */}
      <path
        d={`M ${cx - 96} 536 A 96 22 0 0 0 ${cx + 96} 536`}
        fill="none"
        stroke={`url(#${idPrefix}pedestalGlow)`}
        strokeWidth="4.5"
        opacity="0.85"
      />

      {/* Pedestal Cylinder Body Wall */}
      <path
        d={`M ${cx - 95} 496 L ${cx - 95} 536 A 95 22 0 0 0 ${cx + 95} 536 L ${cx + 95} 496 Z`}
        fill={`url(#${idPrefix}pedestalWallGrad)`}
      />

      {/* Vertical Specular Sheen Stripe on Pedestal Wall */}
      <path
        d={
          lightRight
            ? `M ${cx + 8} 496 L ${cx + 8} 544 L ${cx + 38} 544 L ${cx + 38} 496 Z`
            : `M ${cx - 38} 496 L ${cx - 38} 544 L ${cx - 8} 544 L ${cx - 8} 496 Z`
        }
        fill={`url(#${idPrefix}pedestalSheenGrad)`}
        opacity="0.65"
      />

      {/* Pedestal Top Surface Ellipse */}
      <ellipse
        cx={cx}
        cy="496"
        rx="95"
        ry="22"
        fill={`url(#${idPrefix}pedestalTopGrad)`}
        stroke={`url(#${idPrefix}pedestalRimGrad)`}
        strokeWidth="3.5"
      />

      {/* Inset Inner Step / Disc on Pedestal */}
      <ellipse
        cx={cx}
        cy="494"
        rx="86"
        ry="18"
        fill={`url(#${idPrefix}pedestalInsetGrad)`}
        stroke="#ff60e8"
        strokeWidth="1.2"
        opacity="0.85"
      />

      {/* 3. Drum Bell / Flared Lower Foot */}
      {/* Lower Cone Shadow on Pedestal */}
      <ellipse
        cx={cx}
        cy="492"
        rx="74"
        ry="16"
        fill="#140024"
        opacity="0.8"
      />

      {/* Flared Trumpet Bell Body */}
      <path
        d={`M ${cx - 74} 490 
            C ${cx - 66} 454 ${cx - 48} 434 ${cx - 36} 424 
            L ${cx + 36} 424 
            C ${cx + 48} 434 ${cx + 66} 454 ${cx + 74} 490 
            A 74 16 0 0 1 ${cx - 74} 490 Z`}
        fill={`url(#${idPrefix}drumFootGrad)`}
      />

      {/* Drum Foot Specular Cylinder Highlight Sheen */}
      <path
        d={
          lightRight
            ? `M ${cx + 8} 424 
               C ${cx + 14} 445 ${cx + 20} 465 ${cx + 26} 490 
               L ${cx + 52} 490 
               C ${cx + 44} 465 ${cx + 34} 445 ${cx + 24} 424 Z`
            : `M ${cx - 24} 424 
               C ${cx - 34} 445 ${cx - 44} 465 ${cx - 52} 490 
               L ${cx - 26} 490 
               C ${cx - 20} 465 ${cx - 14} 445 ${cx - 8} 424 Z`
        }
        fill={`url(#${idPrefix}footSpecularGrad)`}
        opacity="0.85"
      />

      {/* Crisp Golden Inlay Pinstripe Ring encircling the lower foot */}
      <g id={`${idPrefix}footPinstripe`}>
        {/* Drop shadow for pinstripe */}
        <ellipse
          cx={cx}
          cy="473"
          rx="63"
          ry="13.5"
          fill="none"
          stroke="#180029"
          strokeWidth="3.5"
          opacity="0.5"
        />
        {/* Golden Pinstripe Body */}
        <ellipse
          cx={cx}
          cy="472"
          rx="63"
          ry="13.5"
          fill="none"
          stroke={`url(#${idPrefix}pinstripeGoldGrad)`}
          strokeWidth="2.8"
        />
        {/* Specular White Line on Golden Pinstripe */}
        <path
          d={`M ${cx - 58} 472 A 63 13.5 0 0 0 ${cx + 58} 472`}
          fill="none"
          stroke="#fffbe8"
          strokeWidth="1.2"
          opacity="0.95"
        />
      </g>

      {/* Drum Foot Rounded Bottom Rim Lip */}
      <path
        d={`M ${cx - 74} 490 A 74 16 0 0 0 ${cx + 74} 490`}
        fill="none"
        stroke="#ffaef7"
        strokeWidth="3"
        opacity="0.8"
      />

      {/* 4. Dual Waist Assembly */}
      {/* 4B. Lower Waist: Segmented Golden-Orange & Purple Chunky Bumper Collar */}
      {/* Base collar body */}
      <path
        d={`M ${cx - 44} 412 L ${cx - 44} 426 A 44 12 0 0 0 ${cx + 44} 426 L ${cx + 44} 412 A 44 12 0 0 1 ${cx - 44} 412 Z`}
        fill="#2a003f"
      />

      {/* 5 Alternating Segmented Beads across the front collar */}
      <g id={`${idPrefix}bumperSegments`}>
        {/* Segment 1 (Left Outer): Lavender-Purple */}
        <path
          d={`M ${cx - 44} 412 C ${cx - 42} 415 ${cx - 38} 421 ${cx - 36} 425 A 44 12 0 0 0 ${cx - 26} 427 L ${cx - 28} 414 A 44 12 0 0 1 ${cx - 44} 412 Z`}
          fill={`url(#${idPrefix}segmentPurpleGrad)`}
          stroke="#ffbdf8"
          strokeWidth="0.8"
        />
        {/* Segment 2 (Mid-Left): Rich Golden-Orange */}
        <path
          d={`M ${cx - 26} 414 L ${cx - 24} 427 A 44 12 0 0 0 ${cx - 8} 428 L ${cx - 9} 415 A 44 12 0 0 1 ${cx - 26} 414 Z`}
          fill={`url(#${idPrefix}segmentGoldGrad)`}
          stroke="#ffe99c"
          strokeWidth="0.9"
        />
        {/* Segment 3 (Center): Lavender-Purple */}
        <path
          d={`M ${cx - 7} 415 L ${cx - 6} 428 A 44 12 0 0 0 ${cx + 8} 428 L ${cx + 7} 415 A 44 12 0 0 1 ${cx - 7} 415 Z`}
          fill={`url(#${idPrefix}segmentPurpleGrad)`}
          stroke="#ffbdf8"
          strokeWidth="0.8"
        />
        {/* Segment 4 (Mid-Right): Rich Golden-Orange */}
        <path
          d={`M ${cx + 9} 415 L ${cx + 10} 428 A 44 12 0 0 0 ${cx + 26} 427 L ${cx + 24} 414 A 44 12 0 0 1 ${cx + 9} 415 Z`}
          fill={`url(#${idPrefix}segmentGoldGrad)`}
          stroke="#ffe99c"
          strokeWidth="0.9"
        />
        {/* Segment 5 (Right Outer): Lavender-Purple */}
        <path
          d={`M ${cx + 26} 414 L ${cx + 28} 427 A 44 12 0 0 0 ${cx + 44} 425 C ${cx + 42} 421 ${cx + 38} 415 ${cx + 36} 412 A 44 12 0 0 1 ${cx + 26} 414 Z`}
          fill={`url(#${idPrefix}segmentPurpleGrad)`}
          stroke="#ffbdf8"
          strokeWidth="0.8"
        />

        {/* Golden Separator Ribs between segments */}
        {[-26, -7, 9, 26].map((offset, i) => (
          <ellipse
            key={`rib_${i}`}
            cx={cx + offset}
            cy="420"
            rx="2.2"
            ry="7.5"
            fill={`url(#${idPrefix}segmentGoldGrad)`}
            stroke="#fff5ba"
            strokeWidth="0.8"
          />
        ))}

        {/* Specular White Highlight Ridge across Bumper Collar */}
        <path
          d={`M ${cx - 42} 415 A 44 12 0 0 0 ${cx + 42} 415`}
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity="0.8"
        />
      </g>

      {/* 4A. Upper Waist: Tension Anchor Ring with Rope Loops */}
      {/* Anchor Ring Body */}
      <path
        d={`M ${cx - 45} 392 L ${cx - 45} 404 A 45 11.5 0 0 0 ${cx + 45} 404 L ${cx + 45} 392 A 45 11.5 0 0 1 ${cx - 45} 392 Z`}
        fill={`url(#${idPrefix}anchorRingGrad)`}
        stroke="#3c1352"
        strokeWidth="1"
      />
      {/* Specular Ridge on Anchor Ring */}
      <path
        d={`M ${cx - 45} 393 A 45 11.5 0 0 0 ${cx + 45} 393`}
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.5"
        opacity="0.85"
      />

      {/* 5. Drum Cup (Upper Bowl with Realistic 3D Lighting) */}
      <path
        d={`M ${cx - 86} 286 
            C ${cx - 85} 326 ${cx - 64} 366 ${cx - 45} 392 
            L ${cx + 45} 392 
            C ${cx + 64} 366 ${cx + 85} 326 ${cx + 86} 286 
            A 86 24 0 0 1 ${cx - 86} 286 Z`}
        fill={`url(#${idPrefix}drumCupGrad)`}
      />

      {/* Drum Cup 3D Specular Highlight on curved flank */}
      <path
        d={
          lightRight
            ? `M ${cx + 16} 286 
               C ${cx + 20} 320 ${cx + 22} 360 ${cx + 16} 392 
               L ${cx + 56} 392 
               C ${cx + 62} 360 ${cx + 60} 320 ${cx + 52} 286 Z`
            : `M ${cx - 52} 286 
               C ${cx - 60} 320 ${cx - 62} 360 ${cx - 56} 392 
               L ${cx - 16} 392 
               C ${cx - 22} 360 ${cx - 20} 320 ${cx - 16} 286 Z`
        }
        fill={`url(#${idPrefix}cupSpecularGrad)`}
        opacity="0.65"
      />

      {/* 6. Realistic V-Pattern Golden Tension Ropes */}
      <g id={`${idPrefix}ropes`}>
        {/* Layer 1: Drop Shadow Lines Beneath Ropes */}
        <g stroke="#180029" strokeWidth="5.5" strokeLinecap="round" opacity="0.7">
          <line x1={clips[0].x + 3} y1={clips[0].y + 8} x2={waistAnchors[0].x} y2={waistAnchors[0].y} />
          <line x1={clips[6].x - 3} y1={clips[6].y + 8} x2={waistAnchors[4].x} y2={waistAnchors[4].y} />

          <line x1={clips[1].x} y1={clips[1].y + 8} x2={waistAnchors[0].x} y2={waistAnchors[0].y} />
          <line x1={clips[1].x} y1={clips[1].y + 8} x2={waistAnchors[1].x} y2={waistAnchors[1].y} />

          <line x1={clips[2].x} y1={clips[2].y + 8} x2={waistAnchors[1].x} y2={waistAnchors[1].y} />
          <line x1={clips[2].x} y1={clips[2].y + 8} x2={waistAnchors[2].x} y2={waistAnchors[2].y} />

          <line x1={clips[3].x} y1={clips[3].y + 8} x2={waistAnchors[2].x} y2={waistAnchors[2].y} />
          <line x1={clips[3].x} y1={clips[3].y + 8} x2={waistAnchors[3].x} y2={waistAnchors[3].y} />

          <line x1={clips[4].x} y1={clips[4].y + 8} x2={waistAnchors[3].x} y2={waistAnchors[3].y} />
          <line x1={clips[4].x} y1={clips[4].y + 8} x2={waistAnchors[4].x} y2={waistAnchors[4].y} />

          <line x1={clips[5].x} y1={clips[5].y + 8} x2={waistAnchors[4].x} y2={waistAnchors[4].y} />
        </g>

        {/* Layer 2: Main 3D Golden Cylindrical Rope Body */}
        <g stroke={`url(#${idPrefix}ropeGrad)`} strokeWidth="3.8" strokeLinecap="round">
          <line x1={clips[0].x + 3} y1={clips[0].y + 8} x2={waistAnchors[0].x} y2={waistAnchors[0].y} />
          <line x1={clips[6].x - 3} y1={clips[6].y + 8} x2={waistAnchors[4].x} y2={waistAnchors[4].y} />

          <line x1={clips[1].x} y1={clips[1].y + 8} x2={waistAnchors[0].x} y2={waistAnchors[0].y} />
          <line x1={clips[1].x} y1={clips[1].y + 8} x2={waistAnchors[1].x} y2={waistAnchors[1].y} />

          <line x1={clips[2].x} y1={clips[2].y + 8} x2={waistAnchors[1].x} y2={waistAnchors[1].y} />
          <line x1={clips[2].x} y1={clips[2].y + 8} x2={waistAnchors[2].x} y2={waistAnchors[2].y} />

          <line x1={clips[3].x} y1={clips[3].y + 8} x2={waistAnchors[2].x} y2={waistAnchors[2].y} />
          <line x1={clips[3].x} y1={clips[3].y + 8} x2={waistAnchors[3].x} y2={waistAnchors[3].y} />

          <line x1={clips[4].x} y1={clips[4].y + 8} x2={waistAnchors[3].x} y2={waistAnchors[3].y} />
          <line x1={clips[4].x} y1={clips[4].y + 8} x2={waistAnchors[4].x} y2={waistAnchors[4].y} />

          <line x1={clips[5].x} y1={clips[5].y + 8} x2={waistAnchors[4].x} y2={waistAnchors[4].y} />
        </g>

        {/* Layer 3: Specular White Highlight Ridge on Golden Ropes */}
        <g stroke="#fffde6" strokeWidth="1.2" strokeLinecap="round" opacity="0.95">
          <line x1={clips[0].x + 3} y1={clips[0].y + 8} x2={waistAnchors[0].x} y2={waistAnchors[0].y} />
          <line x1={clips[6].x - 3} y1={clips[6].y + 8} x2={waistAnchors[4].x} y2={waistAnchors[4].y} />

          <line x1={clips[1].x} y1={clips[1].y + 8} x2={waistAnchors[0].x} y2={waistAnchors[0].y} />
          <line x1={clips[1].x} y1={clips[1].y + 8} x2={waistAnchors[1].x} y2={waistAnchors[1].y} />

          <line x1={clips[2].x} y1={clips[2].y + 8} x2={waistAnchors[1].x} y2={waistAnchors[1].y} />
          <line x1={clips[2].x} y1={clips[2].y + 8} x2={waistAnchors[2].x} y2={waistAnchors[2].y} />

          <line x1={clips[3].x} y1={clips[3].y + 8} x2={waistAnchors[2].x} y2={waistAnchors[2].y} />
          <line x1={clips[3].x} y1={clips[3].y + 8} x2={waistAnchors[3].x} y2={waistAnchors[3].y} />

          <line x1={clips[4].x} y1={clips[4].y + 8} x2={waistAnchors[3].x} y2={waistAnchors[3].y} />
          <line x1={clips[4].x} y1={clips[4].y + 8} x2={waistAnchors[4].x} y2={waistAnchors[4].y} />

          <line x1={clips[5].x} y1={clips[5].y + 8} x2={waistAnchors[4].x} y2={waistAnchors[4].y} />
        </g>

        {/* Lower Rope Loop Knots wrapping around the anchor ring */}
        {waistAnchors.map((pt, i) => (
          <g key={`loop_knot_${i}`}>
            <ellipse
              cx={pt.x}
              cy={pt.y}
              rx="4.5"
              ry="4"
              fill={`url(#${idPrefix}ropeGrad)`}
              stroke="#6b3800"
              strokeWidth="0.8"
            />
            <ellipse
              cx={pt.x}
              cy={pt.y - 1}
              rx="2.5"
              ry="1.8"
              fill="#fffde0"
              opacity="0.9"
            />
          </g>
        ))}
      </g>

      {/* 7. Thick Tubular Purple Tension Hoop */}
      <g id={`${idPrefix}upperTensionHoop`}>
        <path
          d={`M ${cx - 92} 280 A 92 25 0 0 0 ${cx + 92} 280`}
          fill="none"
          stroke="#1b002c"
          strokeWidth="9"
          opacity="0.6"
        />
        <path
          d={`M ${cx - 92} 280 A 92 25 0 0 0 ${cx + 92} 280`}
          fill="none"
          stroke={`url(#${idPrefix}hoopTubularGrad)`}
          strokeWidth="7"
          strokeLinecap="round"
        />
        <path
          d={`M ${cx - 90} 279 A 90 24.5 0 0 0 ${cx + 90} 279`}
          fill="none"
          stroke={`url(#${idPrefix}hoopSpecularGrad)`}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </g>

      {/* 8. The 7 Vertical Cream-Gold Cleat Clips / Brackets */}
      <g id={`${idPrefix}cleatClips`}>
        {clips.map((clip, i) => (
          <g key={`cleat_${i}`} transform={`translate(${clip.x}, ${clip.y}) scale(${clip.scale})`}>
            <rect
              x="-6.5"
              y="-10"
              width="13"
              height="20"
              rx="5"
              fill="#180026"
              opacity="0.6"
            />
            <rect
              x="-6"
              y="-9.5"
              width="12"
              height="19"
              rx="4.8"
              fill={`url(#${idPrefix}cleatClipGrad)`}
              stroke="#5a3300"
              strokeWidth="0.8"
            />
            <rect
              x="-2"
              y="-4"
              width="4"
              height="10"
              rx="2"
              fill="#3a1b00"
              opacity="0.75"
            />
            <path
              d="M -4 -8 L 4 -8"
              stroke="#ffffff"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <circle
              cx="-2.5"
              cy="-6"
              r="1.2"
              fill="#ffffff"
            />
          </g>
        ))}
      </g>

      {/* 9. Drumhead Assembly (Ivory Membrane + Top Hoop Beads) */}
      <g id={`${idPrefix}drumheadAssembly`}>
        <path
          d={`M ${cx - 90} 258 A 90 34 0 0 0 ${cx + 90} 258 L ${cx + 91} 274 A 91 26 0 0 1 ${cx - 91} 274 Z`}
          fill={`url(#${idPrefix}drumCollarGrad)`}
        />

        <ellipse
          cx={cx}
          cy="254"
          rx="88"
          ry="34"
          fill={`url(#${idPrefix}drumHeadGrad)`}
          stroke="#42142e"
          strokeWidth="2"
        />

        <ellipse
          cx={cx}
          cy="254"
          rx="79"
          ry="30.5"
          fill="none"
          stroke="#d5bba8"
          strokeWidth="1.3"
          opacity="0.85"
        />

        <ellipse
          cx={cx}
          cy="254"
          rx="48"
          ry="18.5"
          fill="#faeae0"
          opacity="0.55"
        />

        <path
          d={`M ${cx - 86} 252 A 88 34 0 0 1 ${cx + 86} 252`}
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.8"
          opacity="0.95"
        />
        <path
          d={`M ${cx - 65} 240 A 88 34 0 0 1 ${cx + 65} 240`}
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.5"
          opacity="0.75"
        />

        {[-82, -62, -40, -18, 0, 18, 40, 62, 82].map((bx, i) => {
          const by = 265 + 24 * Math.sqrt(Math.max(0, 1 - Math.pow(bx / 89, 2)));
          return (
            <ellipse
              key={`collar_bead_${i}`}
              cx={cx + bx}
              cy={by}
              rx="4"
              ry="3"
              fill={i % 2 === 0 ? `url(#${idPrefix}cleatClipGrad)` : `url(#${idPrefix}segmentPurpleGrad)`}
              stroke="#551800"
              strokeWidth="0.6"
            />
          );
        })}
      </g>
    </g>
  );
}

// ==========================================
// MASTER MUSIC CONTENT FRAME 2
// ==========================================
export function MusicContentFrame2Showcase({
  title = "Voices That Inspire & Move",
  description = "Immerse yourself in captivating storytelling, investigative documentaries, comedy shows, and expert discussions from leading voices worldwide.",
  subtitle = null,
  ctaText = null,
  onCtaClick = () => {},
  children,
  className = '',
  style = {},
}) {
  const [containerRef, inView] = useInView({ threshold: 0.08 });

  // Equalizer waveform heights matching the reference image profile:
  // [short (16), medium (25), tall (34), tallest (44), dip (14), medium-tall (26)]
  const [eqHeights, setEqHeights] = useState([16, 25, 34, 44, 14, 26]);

  // Subtle living equalizer pulse rhythm
  useEffect(() => {
    const patterns = [
      [16, 25, 34, 44, 14, 26],
      [18, 28, 30, 42, 18, 30],
      [14, 22, 38, 38, 16, 24],
      [18, 30, 36, 46, 14, 28],
      [16, 26, 32, 40, 20, 32],
    ];
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % patterns.length;
      setEqHeights(patterns[idx]);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', ...style }}
      className={`min-h-auto w-full flex items-center justify-center p-3 sm:p-6 md:p-8 lg:p-10 bg-gradient-to-b from-[#e3c4fd] via-[#edd4fc] to-[#dbb3fa] rounded-2xl sm:rounded-3xl border border-purple-200/80 shadow-[0_12px_40px_rgba(168,85,247,0.12)] overflow-hidden font-sans select-none ${inView ? 'is-in-view' : ''}`}
    >
      {/* Cinematic Studio Entrance Animations & Living Micro-Animations */}
      <style>{`
        @keyframes frameEntrance {
          0% {
            opacity: 0;
            transform: scale(0.92) translateY(24px);
          }
          70% {
            opacity: 1;
            transform: scale(1.01) translateY(-2px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes tablaLeftEntrance {
          0% {
            opacity: 0;
            transform: translate(-50px, 45px) scale(0.85);
          }
          65% {
            opacity: 1;
            transform: translate(6px, -4px) scale(1.025);
          }
          100% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
          }
        }

        @keyframes tablaRightEntrance {
          0% {
            opacity: 0;
            transform: translate(50px, 45px) scale(0.85);
          }
          65% {
            opacity: 1;
            transform: translate(-6px, -4px) scale(1.025);
          }
          100% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
          }
        }

        @keyframes badgeDrop {
          0% {
            opacity: 0;
            transform: translateY(-55px) scale(0.88);
          }
          65% {
            opacity: 1;
            transform: translateY(6px) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes notePop {
          0% {
            opacity: 0;
            transform: scale(0);
          }
          60% {
            opacity: 1;
            transform: scale(1.22);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes glintShimmer {
          0%, 100% {
            opacity: 0.85;
            transform: scale(1) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.25) rotate(45deg);
          }
        }

        @keyframes waveRise {
          0% {
            opacity: 0;
            transform: translateY(40px) scaleY(0.75);
          }
          70% {
            opacity: 1;
            transform: translateY(-3px) scaleY(1.02);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scaleY(1);
          }
        }

        @keyframes clefEntrance {
          0% {
            opacity: 0;
            transform: translateY(50px) scale(0.68);
          }
          65% {
            opacity: 1;
            transform: translateY(-8px) scale(1.1);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes clefIdleFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        @keyframes textHeadingReveal {
          0% {
            opacity: 0;
            transform: translateY(24px);
            filter: blur(4px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes textDescReveal {
          0% {
            opacity: 0;
            transform: translateY(18px);
            filter: blur(3px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        .anim-frame {
          opacity: 0;
          transform: scale(0.94) translateY(20px);
          transition: opacity 0.3s ease;
        }
        .is-in-view .anim-frame {
          animation: frameEntrance 0.95s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .anim-tabla-left {
          transform-box: fill-box;
          transform-origin: bottom center;
          opacity: 0;
        }
        .is-in-view .anim-tabla-left {
          animation: tablaLeftEntrance 1.05s cubic-bezier(0.16, 1, 0.3, 1) 0.16s both;
        }

        .anim-tabla-right {
          transform-box: fill-box;
          transform-origin: bottom center;
          opacity: 0;
        }
        .is-in-view .anim-tabla-right {
          animation: tablaRightEntrance 1.05s cubic-bezier(0.16, 1, 0.3, 1) 0.16s both;
        }

        .anim-badge {
          transform-box: fill-box;
          transform-origin: top center;
          opacity: 0;
        }
        .is-in-view .anim-badge {
          animation: badgeDrop 1s cubic-bezier(0.16, 1, 0.3, 1) 0.22s both;
        }

        .anim-note {
          transform-box: fill-box;
          transform-origin: center center;
          opacity: 0;
        }
        .is-in-view .anim-note {
          animation: notePop 0.85s cubic-bezier(0.34, 1.56, 0.64, 1) 0.48s both;
        }

        .anim-glint-left {
          transform-origin: 0px 0px;
          animation: glintShimmer 3.2s ease-in-out 0.8s infinite;
        }
        .anim-glint-right {
          transform-origin: 0px 0px;
          animation: glintShimmer 3.2s ease-in-out 1.2s infinite;
        }

        .anim-waves {
          transform-box: fill-box;
          transform-origin: bottom center;
          opacity: 0;
        }
        .is-in-view .anim-waves {
          animation: waveRise 0.95s cubic-bezier(0.16, 1, 0.3, 1) 0.26s both;
        }

        .anim-clef-enter {
          transform-box: fill-box;
          transform-origin: center center;
          opacity: 0;
        }
        .is-in-view .anim-clef-enter {
          animation: clefEntrance 1.05s cubic-bezier(0.16, 1, 0.3, 1) 0.42s both;
        }
        .anim-clef-idle {
          animation: clefIdleFloat 4s ease-in-out 1.47s infinite;
        }

        .anim-heading {
          opacity: 0;
        }
        .is-in-view .anim-heading {
          animation: textHeadingReveal 0.95s cubic-bezier(0.16, 1, 0.3, 1) 0.52s both;
        }

        .anim-desc {
          opacity: 0;
        }
        .is-in-view .anim-desc {
          animation: textDescReveal 0.95s cubic-bezier(0.16, 1, 0.3, 1) 0.68s both;
        }
      `}</style>

      {/* Outer 16:9 Frame Wrapper with Fluid Scaling */}
      <div
        className="relative w-full max-w-[1060px] select-none anim-frame"
        style={{ aspectRatio: '1024 / 576' }}
      >
        {/* Soft Ambient Ground Floor Shadow */}
        <div
          className="absolute -bottom-6 sm:-bottom-10 left-1/2 -translate-x-1/2 w-[92%] h-12 sm:h-20 bg-[#28004d]/40 rounded-[100%] blur-2xl sm:blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Master SVG Canvas */}
        <svg
          viewBox="0 0 1024 576"
          className="absolute inset-0 w-full h-full overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* ==================== FILTERS ==================== */}
            <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" />
            </filter>
            <filter id="tightShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3.5" />
            </filter>
            <filter id="elementShadow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="2.5" stdDeviation="2.5" floodColor="#21003b" floodOpacity="0.55" />
            </filter>
            <filter id="badgeGlowFilter" x="-40%" y="-40%" width="180%" height="180%">
              <feDropShadow dx="0" dy="0" stdDeviation="7" floodColor="#ff14c0" floodOpacity="0.85" />
              <feDropShadow dx="0" dy="4" stdDeviation="12" floodColor="#35005b" floodOpacity="0.6" />
            </filter>
            <filter id="clefDropShadow" x="-40%" y="-40%" width="180%" height="180%">
              <feDropShadow dx="1.5" dy="3.5" stdDeviation="3.5" floodColor="#240038" floodOpacity="0.55" />
            </filter>
            <filter id="starGlintGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* ==================== GRADIENTS: FRAME ==================== */}
            <linearGradient id="frameMainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8700d1" />
              <stop offset="15%" stopColor="#6400aa" />
              <stop offset="50%" stopColor="#4c0087" />
              <stop offset="85%" stopColor="#5d009e" />
              <stop offset="100%" stopColor="#32005e" />
            </linearGradient>

            <linearGradient id="frameSpecularGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="25%" stopColor="#ffaef5" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#d543e3" stopOpacity="0.4" />
              <stop offset="75%" stopColor="#ffaef5" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.95" />
            </linearGradient>

            <linearGradient id="sideRibbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c800d6" />
              <stop offset="30%" stopColor="#8900c2" />
              <stop offset="70%" stopColor="#550091" />
              <stop offset="100%" stopColor="#e800c2" />
            </linearGradient>

            <linearGradient id="bottomRailGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#b42be3" />
              <stop offset="25%" stopColor="#7a01c4" />
              <stop offset="65%" stopColor="#53008a" />
              <stop offset="90%" stopColor="#8900b8" />
              <stop offset="100%" stopColor="#db14b5" />
            </linearGradient>

            <radialGradient id="innerCanvasGrad" cx="50%" cy="48%" r="62%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.99" />
              <stop offset="40%" stopColor="#fdf6ff" stopOpacity="0.97" />
              <stop offset="75%" stopColor="#f3ddfc" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#e5c3f7" stopOpacity="0.92" />
            </radialGradient>

            <linearGradient id="innerLipGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2c0052" stopOpacity="0.55" />
              <stop offset="25%" stopColor="#440078" stopOpacity="0.2" />
              <stop offset="85%" stopColor="#5e0099" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#20003b" stopOpacity="0.65" />
            </linearGradient>

            {/* ==================== GRADIENTS: TOP BADGE ==================== */}
            <radialGradient id="badgeBodyGrad" cx="50%" cy="50%" r="65%">
              <stop offset="0%" stopColor="#6c00aa" />
              <stop offset="55%" stopColor="#4c0082" />
              <stop offset="100%" stopColor="#29004d" />
            </radialGradient>

            <linearGradient id="badgeGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff5a6" />
              <stop offset="20%" stopColor="#ffb92d" />
              <stop offset="45%" stopColor="#e58300" />
              <stop offset="65%" stopColor="#ffc742" />
              <stop offset="85%" stopColor="#ff9a00" />
              <stop offset="100%" stopColor="#fff299" />
            </linearGradient>

            <radialGradient id="starGlintGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="25%" stopColor="#fff2a8" stopOpacity="0.95" />
              <stop offset="60%" stopColor="#ff9600" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#ff40bb" stopOpacity="0.8" />
            </radialGradient>

            <linearGradient id="eqBarGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="45%" stopColor="#fedaff" />
              <stop offset="100%" stopColor="#f391f7" />
            </linearGradient>

            <linearGradient id="noteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="40%" stopColor="#fff6fa" />
              <stop offset="100%" stopColor="#f0c2ea" />
            </linearGradient>

            {/* ==================== GRADIENTS: BOTTOM WAVES ==================== */}
            <linearGradient id="waveBackGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#7800c2" />
              <stop offset="40%" stopColor="#550094" />
              <stop offset="100%" stopColor="#2b0052" />
            </linearGradient>

            <linearGradient id="waveFrontGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff28cb" />
              <stop offset="25%" stopColor="#df009f" />
              <stop offset="50%" stopColor="#fa32d4" />
              <stop offset="75%" stopColor="#df009f" />
              <stop offset="100%" stopColor="#ff28cb" />
            </linearGradient>

            <linearGradient id="waveRidgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="20%" stopColor="#ffb0f4" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="80%" stopColor="#ffb0f4" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.95" />
            </linearGradient>

            {/* ==================== GRADIENTS: 3D CANDY-GLOSS TREBLE CLEF ==================== */}
            {/* Candy-Tube 3D Body Gradient matching close-up photo */}
            <linearGradient id="candyClefBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff9eed" />
              <stop offset="30%" stopColor="#ff28c5" />
              <stop offset="70%" stopColor="#d50090" />
              <stop offset="100%" stopColor="#8c005f" />
            </linearGradient>

            {/* Soft-Pink Cylindrical Bevel Spine */}
            <linearGradient id="candyClefBevelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="45%" stopColor="#ffccf6" />
              <stop offset="100%" stopColor="#ff7fe5" />
            </linearGradient>

            {/* Terminal Spherical Pearl/Bead Radial Gradient */}
            <radialGradient id="candyClefBeadGrad" cx="35%" cy="30%" r="65%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="30%" stopColor="#ffaef7" />
              <stop offset="70%" stopColor="#df049a" />
              <stop offset="100%" stopColor="#660045" />
            </radialGradient>

            {/* ==================== GRADIENTS: TABLAS (SHARED & ISOLATED) ==================== */}
            {[
              { pfx: 'left_', mirror: false },
              { pfx: 'right_', mirror: true },
            ].map(({ pfx, mirror }) => (
              <React.Fragment key={pfx}>
                <filter id={`${pfx}softBlur`} x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="7" />
                </filter>
                <filter id={`${pfx}tightBlur`} x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3.5" />
                </filter>
                <filter id={`${pfx}elementShadow`} x="-30%" y="-30%" width="160%" height="160%">
                  <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#21003b" floodOpacity="0.5" />
                </filter>

                {/* Pedestal Wall Gradient with vertical metallic sheen */}
                <linearGradient id={`${pfx}pedestalWallGrad`} x1={mirror ? '100%' : '0%'} y1="0%" x2={mirror ? '0%' : '100%'} y2="0%">
                  <stop offset="0%" stopColor="#3c0061" />
                  <stop offset="20%" stopColor="#7a008c" />
                  <stop offset="50%" stopColor="#c50ea5" />
                  <stop offset="68%" stopColor="#f339cf" />
                  <stop offset="85%" stopColor="#890089" />
                  <stop offset="100%" stopColor="#430066" />
                </linearGradient>

                <linearGradient id={`${pfx}pedestalSheenGrad`} x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#ffa6f4" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.2" />
                </linearGradient>

                <radialGradient id={`${pfx}pedestalTopGrad`} cx={mirror ? '40%' : '60%'} cy="40%" r="55%">
                  <stop offset="0%" stopColor="#ff86f0" />
                  <stop offset="60%" stopColor="#c50ca5" />
                  <stop offset="100%" stopColor="#750075" />
                </radialGradient>

                <linearGradient id={`${pfx}pedestalRimGrad`} x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="60%" stopColor="#ff57e5" />
                  <stop offset="100%" stopColor="#a3008d" />
                </linearGradient>

                <radialGradient id={`${pfx}pedestalInsetGrad`} cx="50%" cy="45%" r="50%">
                  <stop offset="0%" stopColor="#99008f" />
                  <stop offset="70%" stopColor="#550066" />
                  <stop offset="100%" stopColor="#360047" />
                </radialGradient>

                <linearGradient id={`${pfx}pedestalGlow`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8700a8" stopOpacity="0" />
                  <stop offset="50%" stopColor="#ff38d9" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#8700a8" stopOpacity="0" />
                </linearGradient>

                {/* Drum Foot Flared Trumpet Bell Gradient (Left vs Right mirrored) */}
                <linearGradient id={`${pfx}drumFootGrad`} x1={mirror ? '100%' : '0%'} y1="0%" x2={mirror ? '0%' : '100%'} y2="0%">
                  <stop offset="0%" stopColor="#24003d" />
                  <stop offset="25%" stopColor="#4f006b" />
                  <stop offset="52%" stopColor="#a3048f" />
                  <stop offset="75%" stopColor="#f52ecf" />
                  <stop offset="90%" stopColor="#aa038e" />
                  <stop offset="100%" stopColor="#3d005c" />
                </linearGradient>

                <linearGradient id={`${pfx}footSpecularGrad`} x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                  <stop offset="50%" stopColor="#ffaef3" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.25" />
                </linearGradient>

                {/* Golden Pinstripe Inlay Gradient */}
                <linearGradient id={`${pfx}pinstripeGoldGrad`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#a35d00" />
                  <stop offset="25%" stopColor="#f5b827" />
                  <stop offset="50%" stopColor="#fff3a6" />
                  <stop offset="75%" stopColor="#f5b827" />
                  <stop offset="100%" stopColor="#a35d00" />
                </linearGradient>

                {/* Bumper Collar Segments: Golden-Orange */}
                <linearGradient id={`${pfx}segmentGoldGrad`} x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#fff099" />
                  <stop offset="30%" stopColor="#ffaa1c" />
                  <stop offset="75%" stopColor="#d96600" />
                  <stop offset="100%" stopColor="#873500" />
                </linearGradient>

                {/* Bumper Collar Segments: Lavender-Purple */}
                <linearGradient id={`${pfx}segmentPurpleGrad`} x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffd8ff" />
                  <stop offset="35%" stopColor="#c574e6" />
                  <stop offset="75%" stopColor="#7a26a8" />
                  <stop offset="100%" stopColor="#440b61" />
                </linearGradient>

                {/* Upper Waist Tension Anchor Ring Gradient */}
                <linearGradient id={`${pfx}anchorRingGrad`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#551a70" />
                  <stop offset="30%" stopColor="#aa62d1" />
                  <stop offset="50%" stopColor="#e8c2ff" />
                  <stop offset="70%" stopColor="#aa62d1" />
                  <stop offset="100%" stopColor="#551a70" />
                </linearGradient>

                {/* Drum Upper Cup Gradient (Left vs Right mirrored) */}
                <linearGradient id={`${pfx}drumCupGrad`} x1={mirror ? '100%' : '0%'} y1="0%" x2={mirror ? '0%' : '100%'} y2="0%">
                  <stop offset="0%" stopColor="#18002b" />
                  <stop offset="20%" stopColor="#32004d" />
                  <stop offset="48%" stopColor="#5a0073" />
                  <stop offset="72%" stopColor="#bd0383" />
                  <stop offset="88%" stopColor="#f7259c" />
                  <stop offset="100%" stopColor="#800057" />
                </linearGradient>

                <linearGradient id={`${pfx}cupSpecularGrad`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
                  <stop offset="50%" stopColor="#ff9eed" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>

                {/* 3D Tubular Tension Hoop Gradient */}
                <linearGradient id={`${pfx}hoopTubularGrad`} x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#380059" />
                  <stop offset="35%" stopColor="#7302b0" />
                  <stop offset="70%" stopColor="#b60edd" />
                  <stop offset="100%" stopColor="#430066" />
                </linearGradient>

                <linearGradient id={`${pfx}hoopSpecularGrad`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ffaaf6" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#ffffff" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#ffaaf6" stopOpacity="0.4" />
                </linearGradient>

                {/* 7 Vertical Cleat Bracket Clips: Cream-Gold Metallic */}
                <linearGradient id={`${pfx}cleatClipGrad`} x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="25%" stopColor="#fff8e3" />
                  <stop offset="55%" stopColor="#eed09f" />
                  <stop offset="85%" stopColor="#c59858" />
                  <stop offset="100%" stopColor="#8c6020" />
                </linearGradient>

                {/* Tension Golden Rope Cord Gradient */}
                <linearGradient id={`${pfx}ropeGrad`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fffde0" />
                  <stop offset="30%" stopColor="#ffb924" />
                  <stop offset="75%" stopColor="#d97800" />
                  <stop offset="100%" stopColor="#8a4400" />
                </linearGradient>

                {/* Drumhead Collar Gradient */}
                <linearGradient id={`${pfx}drumCollarGrad`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#29003f" />
                  <stop offset="30%" stopColor="#550078" />
                  <stop offset="70%" stopColor="#890299" />
                  <stop offset="100%" stopColor="#29003f" />
                </linearGradient>

                {/* Cream-White Drumhead Radial Gradient */}
                <radialGradient id={`${pfx}drumHeadGrad`} cx="50%" cy="38%" r="56%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="40%" stopColor="#fff7f0" />
                  <stop offset="80%" stopColor="#fcf0e3" />
                  <stop offset="100%" stopColor="#ebd2be" />
                </radialGradient>
              </React.Fragment>
            ))}
          </defs>

          {/* ========================================================= */}
          {/* 1. SCULPTED OUTER 3D FRAME                                */}
          {/* ========================================================= */}

          {/* Base Frame Body */}
          <path
            d={`
              M 160 62 
              C 90 68 45 105 32 165 
              C 26 230 32 320 28 420 
              C 24 470 16 510 18 532 
              C 20 546 36 550 68 550 
              L 160 550 
              L 864 550 
              L 956 550 
              C 988 550 1004 546 1006 532 
              C 1008 510 1000 470 996 420 
              C 992 320 998 230 992 165 
              C 979 105 934 68 864 62 
              Z
            `}
            fill="url(#frameMainGrad)"
          />

          {/* Frame Outer Corner Ribbon Flares (Wing Curls on bottom sides) */}
          {/* Left Wing Ribbon Curl */}
          <path
            d="M 22 470 C 14 505 15 534 32 546 C 44 554 62 552 75 544 C 54 540 40 530 36 505 C 33 480 30 460 22 470 Z"
            fill="url(#sideRibbonGrad)"
          />
          <path
            d="M 22 475 C 16 505 18 530 32 544"
            fill="none"
            stroke="#ff9ef5"
            strokeWidth="3.2"
            opacity="0.9"
          />

          {/* Right Wing Ribbon Curl (Mirrored) */}
          <path
            d="M 1002 470 C 1010 505 1009 534 992 546 C 980 554 962 552 949 544 C 970 540 984 530 988 505 C 991 480 994 460 1002 470 Z"
            fill="url(#sideRibbonGrad)"
          />
          <path
            d="M 1002 475 C 1008 505 1006 530 992 544"
            fill="none"
            stroke="#ff9ef5"
            strokeWidth="3.2"
            opacity="0.9"
          />

          {/* Upper Frame Glossy Arch Specular Rim Highlight */}
          <path
            d={`
              M 48 150 
              C 62 98 106 68 180 64 
              L 844 64 
              C 918 68 962 98 976 150
            `}
            fill="none"
            stroke="url(#frameSpecularGrad)"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d={`
              M 65 130 
              C 85 85 125 66 185 64 
              L 839 64 
              C 899 66 939 85 959 130
            `}
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.95"
          />

          {/* ========================================================= */}
          {/* 2. INNER CENTRAL CANVAS PANEL                             */}
          {/* ========================================================= */}
          {/* Large Spacious Center Panel with smooth rounded corners */}
          <rect
            x="165"
            y="88"
            width="694"
            height="438"
            rx="44"
            ry="44"
            fill="url(#innerCanvasGrad)"
          />

          {/* Inner Lip Shadow Border */}
          <rect
            x="165"
            y="88"
            width="694"
            height="438"
            rx="44"
            ry="44"
            fill="none"
            stroke="url(#innerLipGrad)"
            strokeWidth="6"
          />

          {/* ========================================================= */}
          {/* 3. SOLID BOTTOM HORIZONTAL RAIL                           */}
          {/* ========================================================= */}
          <path
            d="M 170 520 L 854 520 A 12 12 0 0 1 854 544 L 170 544 A 12 12 0 0 1 170 520 Z"
            fill="url(#bottomRailGrad)"
          />
          {/* Bottom Rail Specular Highlight Lines */}
          <line
            x1="180"
            y1="521"
            x2="844"
            y2="521"
            stroke="#ffffff"
            strokeWidth="2.2"
            strokeLinecap="round"
            opacity="0.95"
          />
          <line
            x1="180"
            y1="543"
            x2="844"
            y2="543"
            stroke="#ff54e6"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.8"
          />

          {/* ========================================================= */}
          {/* 4. BOTTOM MUSICAL WAVES & CANDY-GLOSS TREBLE CLEF         */}
          {/* ========================================================= */}
          <g id="bottomWavesLayer" className="anim-waves">
            {/* Layer A: Deep Royal Purple Base Wave */}
            <path
              d={`
                M 175 522 
                C 255 500 345 476 430 460 
                C 470 452 512 450 512 450 
                C 512 450 554 452 594 460 
                C 679 476 769 500 849 522 
                L 849 538 
                L 175 538 
                Z
              `}
              fill="url(#waveBackGrad)"
            />
            {/* Specular line on purple wave */}
            <path
              d={`
                M 185 520 
                C 260 498 348 475 430 460 
                C 470 452 512 450 512 450 
                C 512 450 554 452 594 460 
                C 676 475 764 498 839 520
              `}
              fill="none"
              stroke="#b352f2"
              strokeWidth="2"
              opacity="0.8"
            />

            {/* Layer B: Vibrant Neon-Pink Dynamic 3D Ribbon */}
            <path
              d={`
                M 175 496 
                C 230 522 280 522 345 442 
                C 395 382 450 496 512 494 
                C 574 496 629 382 679 442 
                C 744 522 794 522 849 496 
                C 810 528 750 534 684 458 
                C 639 408 584 514 512 510 
                C 440 514 385 408 340 458 
                C 274 534 214 528 175 496 
                Z
              `}
              fill="url(#waveFrontGrad)"
              filter="url(#elementShadow)"
            />

            {/* Specular White-Pink Highlight along Top Ridge of Wave Ribbon */}
            <path
              d={`
                M 180 498 
                C 232 522 282 520 345 442 
                C 395 382 450 496 512 494 
                C 574 496 629 382 679 442 
                C 742 520 792 522 844 498
              `}
              fill="none"
              stroke="url(#waveRidgeGrad)"
              strokeWidth="3.4"
              strokeLinecap="round"
            />
          </g>

          {/* Layer C: 1:1 Pixel-Perfect 3D Candy-Gloss Treble Clef (𝄞) */}
          <g className="anim-clef-enter">
            <g id="trebleClefCenter" className="anim-clef-idle" filter="url(#clefDropShadow)">
              {/* Pass 1: Base Dark Fuchsia Shadow/Contour Outline */}
              <g stroke="#730048" strokeLinecap="round" strokeLinejoin="round" fill="none">
                {/* Vertical Spine */}
                <path
                  d="M 512 418 L 512 506 C 512 515 504 519 498 514 C 494 510 494 506 496 502"
                  strokeWidth="7.8"
                />
                {/* Teardrop Top Loop & G-Clef Swirl Body */}
                <path
                  d="
                    M 512 454 
                    C 503 436 504 420 514 412 
                    C 523 412 530 422 529 436 
                    C 528 448 518 454 512 454 
                    C 496 454 484 466 484 482 
                    C 484 498 498 506 512 494 
                    C 524 484 534 476 534 466 
                    C 534 456 520 454 512 462 
                    C 504 470 506 480 512 480
                  "
                  strokeWidth="7.8"
                />
              </g>

              {/* Pass 2: Main 3D Candy-Pink Tubular Body */}
              <g stroke="url(#candyClefBodyGrad)" strokeLinecap="round" strokeLinejoin="round" fill="none">
                {/* Vertical Spine */}
                <path
                  d="M 512 418 L 512 506 C 512 515 504 519 498 514 C 494 510 494 506 496 502"
                  strokeWidth="5.8"
                />
                {/* Teardrop Top Loop & G-Clef Swirl Body */}
                <path
                  d="
                    M 512 454 
                    C 503 436 504 420 514 412 
                    C 523 412 530 422 529 436 
                    C 528 448 518 454 512 454 
                    C 496 454 484 466 484 482 
                    C 484 498 498 506 512 494 
                    C 524 484 534 476 534 466 
                    C 534 456 520 454 512 462 
                    C 504 470 506 480 512 480
                  "
                  strokeWidth="5.8"
                />
              </g>

              {/* Pass 3: Soft-Pink Cylindrical Bevel Spine */}
              <g stroke="url(#candyClefBevelGrad)" strokeLinecap="round" strokeLinejoin="round" fill="none">
                <path
                  d="M 512 420 L 512 504"
                  strokeWidth="2.4"
                  opacity="0.9"
                />
                <path
                  d="
                    M 512 452 
                    C 504 436 505 422 514 414 
                    C 521 414 527 423 527 435 
                    C 526 445 518 452 512 452 
                    C 498 452 487 464 487 480 
                    C 487 494 499 502 512 492 
                    C 522 483 531 475 531 467 
                    C 531 458 519 456 513 464 
                    C 507 471 508 478 512 478
                  "
                  strokeWidth="2.4"
                  opacity="0.85"
                />
              </g>

              {/* Pass 4: Specular Pure White Highlight Reflections */}
              <g stroke="#ffffff" strokeLinecap="round" fill="none">
                {/* Outer-left curve of top loop */}
                <path
                  d="M 507 438 C 506 426 511 415 514 413"
                  strokeWidth="1.5"
                  opacity="0.95"
                />
                {/* Outer curve of big lower belly */}
                <path
                  d="M 485 470 C 484 480 486 492 496 500"
                  strokeWidth="1.6"
                  opacity="0.95"
                />
                {/* Top crest of inner G-spiral */}
                <path
                  d="M 522 468 C 529 462 526 456 516 458"
                  strokeWidth="1.5"
                  opacity="0.9"
                />
                {/* Spine specular ridge */}
                <line
                  x1="512"
                  y1="432"
                  x2="512"
                  y2="495"
                  strokeWidth="1.2"
                  opacity="0.8"
                />
              </g>

              {/* Pass 5: 3D Glossy Terminal Spherical Pearl/Bead */}
              <circle
                cx="496"
                cy="511"
                r="5.6"
                fill="url(#candyClefBeadGrad)"
                stroke="#680045"
                strokeWidth="0.8"
              />
              {/* Pure white specular gleam on the bead */}
              <ellipse
                cx="494.5"
                cy="509"
                rx="2.2"
                ry="1.6"
                fill="#ffffff"
                opacity="0.95"
              />
            </g>
          </g>

          {/* ========================================================= */}
          {/* 5. TOP MUSIC BADGE WITH 3D NOTE & WAVEFORM EQUALIZER      */}
          {/* ========================================================= */}
          <g id="topMusicBadge" className="anim-badge" filter="url(#badgeGlowFilter)">
            {/* Outer Golden Border Rim */}
            <path
              d={`
                M 380 14 
                C 430 12 512 11 594 12 
                C 628 12 645 13 656 16 
                C 672 20 684 30 694 42 
                C 704 54 728 58 732 75 
                C 734 88 724 100 706 106 
                C 690 108 676 107 650 106 
                L 374 106 
                C 348 107 334 108 318 106 
                C 300 100 290 88 292 75 
                C 296 58 320 54 330 42 
                C 340 30 352 20 368 16 
                Z
              `}
              fill="url(#badgeBodyGrad)"
              stroke="url(#badgeGoldGrad)"
              strokeWidth="7"
              strokeLinejoin="round"
            />

            {/* Inner Golden Specular Rim Line */}
            <path
              d={`
                M 380 17 
                C 430 15 512 14 594 15 
                C 626 15 643 16 653 19 
                C 668 23 679 32 688 44 
                C 698 56 720 60 724 75 
                C 726 85 718 95 702 101 
                C 688 103 674 102 648 102 
                L 376 102 
                C 350 102 336 103 322 101 
                C 306 95 298 85 300 75 
                C 304 60 326 56 336 44 
                C 345 32 356 23 371 19 
                Z
              `}
              fill="none"
              stroke="#fffbe3"
              strokeWidth="1.5"
              strokeLinejoin="round"
              opacity="0.85"
            />

            {/* A. Equalizer Audio Waveform Bars (Left Side) */}
            <g id="eqLeft">
              {[
                { x: 390, h: eqHeights[0] },
                { x: 401, h: eqHeights[1] },
                { x: 412, h: eqHeights[2] },
                { x: 424, h: eqHeights[3] },
                { x: 434, h: eqHeights[4] },
                { x: 444, h: eqHeights[5] },
              ].map((bar, i) => (
                <rect
                  key={`eq_left_${i}`}
                  x={bar.x - 2.75}
                  y={62 - bar.h / 2}
                  width="5.5"
                  height={bar.h}
                  rx="2.75"
                  ry="2.75"
                  fill="url(#eqBarGrad)"
                  filter="url(#tightShadow)"
                  className="transition-all duration-700 ease-in-out"
                />
              ))}
            </g>

            {/* B. Center 3D Beamed Music Note (♫) */}
            <g id="centerMusicNote" className="anim-note" filter="url(#elementShadow)">
              <ellipse cx="482" cy="80" rx="9.5" ry="7" transform="rotate(-20 482 80)" fill="#18002d" opacity="0.6" />
              <ellipse cx="520" cy="74" rx="9.5" ry="7" transform="rotate(-20 520 74)" fill="#18002d" opacity="0.6" />

              <ellipse
                cx="482"
                cy="78"
                rx="9.5"
                ry="7"
                transform="rotate(-20 482 78)"
                fill="url(#noteGrad)"
                stroke="#ffffff"
                strokeWidth="1.2"
              />
              <ellipse
                cx="520"
                cy="72"
                rx="9.5"
                ry="7"
                transform="rotate(-20 520 72)"
                fill="url(#noteGrad)"
                stroke="#ffffff"
                strokeWidth="1.2"
              />

              <line
                x1="489"
                y1="78"
                x2="489"
                y2="44"
                stroke="url(#noteGrad)"
                strokeWidth="5.5"
                strokeLinecap="round"
              />
              <line
                x1="527"
                y1="72"
                x2="527"
                y2="36"
                stroke="url(#noteGrad)"
                strokeWidth="5.5"
                strokeLinecap="round"
              />

              <polygon
                points="486,47 530,39 530,30 486,38"
                fill="url(#noteGrad)"
                stroke="#ffffff"
                strokeWidth="1"
              />

              <ellipse cx="480" cy="76" rx="4" ry="2.5" transform="rotate(-20 480 76)" fill="#ffffff" />
              <ellipse cx="518" cy="70" rx="4" ry="2.5" transform="rotate(-20 518 70)" fill="#ffffff" />
              <line x1="488" y1="76" x2="488" y2="44" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.9" />
              <line x1="526" y1="70" x2="526" y2="36" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.9" />
              <line x1="487" y1="36" x2="529" y2="28" stroke="#ffffff" strokeWidth="1.5" opacity="0.95" />
            </g>

            {/* C. Equalizer Audio Waveform Bars (Right Side - Mirrored) */}
            <g id="eqRight">
              {[
                { x: 580, h: eqHeights[5] },
                { x: 590, h: eqHeights[4] },
                { x: 600, h: eqHeights[3] },
                { x: 612, h: eqHeights[2] },
                { x: 623, h: eqHeights[1] },
                { x: 634, h: eqHeights[0] },
              ].map((bar, i) => (
                <rect
                  key={`eq_right_${i}`}
                  x={bar.x - 2.75}
                  y={62 - bar.h / 2}
                  width="5.5"
                  height={bar.h}
                  rx="2.75"
                  ry="2.75"
                  fill="url(#eqBarGrad)"
                  filter="url(#tightShadow)"
                  className="transition-all duration-700 ease-in-out"
                />
              ))}
            </g>

            {/* D. Twin Starburst Lens Flares on Badge Golden Corners */}
            <g transform="translate(330, 105)">
              <g id="leftGlint" className="anim-glint-left" filter="url(#starGlintGlow)">
                <circle r="16" fill="url(#starGlintGrad)" />
                <ellipse rx="36" ry="2" fill="#ffffff" opacity="0.95" />
                <ellipse rx="2" ry="36" fill="#ffffff" opacity="0.95" />
                <circle r="4.5" fill="#ffffff" />
                <ellipse rx="18" ry="1.5" transform="rotate(45)" fill="#ffffff" opacity="0.8" />
                <ellipse rx="18" ry="1.5" transform="rotate(-45)" fill="#ffffff" opacity="0.8" />
              </g>
            </g>

            <g transform="translate(694, 105)">
              <g id="rightGlint" className="anim-glint-right" filter="url(#starGlintGlow)">
                <circle r="16" fill="url(#starGlintGrad)" />
                <ellipse rx="36" ry="2" fill="#ffffff" opacity="0.95" />
                <ellipse rx="2" ry="36" fill="#ffffff" opacity="0.95" />
                <circle r="4.5" fill="#ffffff" />
                <ellipse rx="18" ry="1.5" transform="rotate(45)" fill="#ffffff" opacity="0.8" />
                <ellipse rx="18" ry="1.5" transform="rotate(-45)" fill="#ffffff" opacity="0.8" />
              </g>
            </g>
          </g>

          {/* ========================================================= */}
          {/* 6. LEFT TABLA & RIGHT TABLA (REUSABLE 3D COMPONENTS)     */}
          {/* ========================================================= */}
          {/* Left Tabla: Identical 1:1 match to close-up image */}
          <TablaDrum cx={125} idPrefix="left_" mirrorLight={false} className="anim-tabla-left" />

          {/* Right Tabla: Exact same design, mirrored for visual balance */}
          <TablaDrum cx={899} idPrefix="right_" mirrorLight={true} className="anim-tabla-right" />
        </svg>

        {/* ========================================================= */}
        {/* 7. PERFECTLY ALIGNED RESPONSIVE HEADING & CONTENT ZONE    */}
        {/* ========================================================= */}
        <div
          className="absolute inset-x-[18%] sm:inset-x-[20%] top-[21%] sm:top-[20%] bottom-[23%] sm:bottom-[20%] z-20 flex flex-col items-center justify-center text-center px-2 sm:px-6 md:px-8 py-1 sm:py-2 overflow-hidden pointer-events-auto"
        >
          {children ? (
            children
          ) : (
            <div className="flex flex-col items-center justify-center w-full max-w-xl space-y-1 sm:space-y-3 md:space-y-4 lg:space-y-5 my-auto">
              {/* Bold Section Heading */}
              <h1 className="text-sm xs:text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-[2.75rem] font-extrabold tracking-tight leading-[1.15] text-transparent bg-clip-text bg-gradient-to-r from-[#22003d] via-[#5b0099] to-[#22003d] drop-shadow-[0_1px_2px_rgba(40,0,70,0.12)] px-1 sm:px-2 anim-heading">
                {title}
              </h1>

              {/* High-Contrast Description Content */}
              <p className="text-[9.5px] xs:text-[11px] sm:text-xs md:text-sm lg:text-base xl:text-lg text-purple-950/85 font-medium leading-snug sm:leading-relaxed max-w-[260px] xs:max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl px-1 sm:px-2 anim-desc">
                {description}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


/* =========================================================================
   13. TOP PODCASTS SECTION COMPONENT
   ========================================================================= */
export const TopPodcasts = () => {
  const { showcase } = topPodcastsData;

  return (
    <section 
      id="top-podcasts"
      aria-label="Top Podcasts" 
      className="relative w-full max-w-[1620px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 mt-8 sm:mt-12 lg:mt-16 select-none scroll-mt-24"
    >
      {/* Signature Section Header */}
      <SectionHeader 
        titlePrefix={topPodcastsData.titlePrefix} 
        titleAccent={topPodcastsData.titleAccent} 
        subtitle={topPodcastsData.subtitle} 
      />

      {/* 3D Music-Themed Frame Showcase with Tabla & Treble Clef */}
      <div className="relative w-full">
        <MusicContentFrame2Showcase 
          title={showcase.title}
          description={showcase.description}
        />
      </div>
    </section>
  );
};

export default TopPodcasts;
