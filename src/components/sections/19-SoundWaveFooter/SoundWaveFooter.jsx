import React, { useState, useMemo } from 'react';
import {
  Mail,
  Sparkles,
  Heart,
  Music,
  Music2,
  Music3,
  Music4,
  Headphones,
  Disc,
  Disc3,
  AudioWaveform,
  AudioLines,
  Mic,
  Mic2,
  Radio,
  Volume2,
  Guitar,
  Piano,
  Sliders,
  ListMusic,
} from 'lucide-react';
import {
  soundWaveFooterData,
  communityAvatars,
  neonPalette as NEON_PALETTE,
  productLinks as defaultProductLinks,
  companyLinks as defaultCompanyLinks,
  supportLinks as defaultSupportLinks
} from './SoundWaveFooterData';

const [avatar1, avatar2, avatar3, avatar4] = communityAvatars;

/* =========================================================================
   1. SOCIAL MEDIA ICONS & BAR
   ========================================================================= */
export const InstagramIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const YoutubeIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export const XIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const SpotifyIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.563.387-.857.207-2.35-1.435-5.308-1.76-8.793-.963-.335.077-.67-.133-.746-.468-.077-.335.132-.67.467-.746 3.808-.87 7.076-.502 9.722 1.113.294.18.386.562.207.857zm1.225-2.724c-.226.367-.708.482-1.075.257-2.69-1.653-6.79-2.133-9.971-1.167-.413.125-.85-.106-.975-.519-.125-.413.106-.85.519-.975 3.633-1.103 8.147-.568 11.245 1.329.367.225.482.707.257 1.075zm.105-2.835C14.692 8.95 8.09 8.73 4.254 9.895c-.494.15-1.02-.132-1.17-.625-.15-.493.132-1.02.625-1.17 4.417-1.34 11.696-1.085 15.656 1.265.445.264.59.838.327 1.282-.264.444-.838.59-1.282.327z" />
  </svg>
);

export const DiscordIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

export const FooterSocials = () => {
  const socials = [
    { name: 'Instagram', icon: InstagramIcon, href: '#' },
    { name: 'X', icon: XIcon, href: '#' },
    { name: 'YouTube', icon: YoutubeIcon, href: '#' },
    { name: 'Spotify', icon: SpotifyIcon, href: '#', isSpotify: true },
    { name: 'Discord', icon: DiscordIcon, href: '#' },
  ];

  return (
    <div className="flex items-center gap-2 sm:gap-2.5 mt-3.5 sm:mt-4">
      {socials.map((s) => {
        const Icon = s.icon;
        return (
          <a
            key={s.name}
            href={s.href}
            aria-label={s.name}
            className={`
              w-9 h-9 sm:w-10 sm:h-10 rounded-2xl flex items-center justify-center
              bg-white/[0.05] border border-white/10 hover:border-purple-400/50 hover:bg-white/10
              shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_20px_rgba(239,53,237,0.3)]
              hover:-translate-y-0.5 active:scale-95 transition-all duration-200
              ${s.isSpotify ? 'text-[#1DB954] hover:text-[#1ED760]' : 'text-slate-300 hover:text-white'}
            `}
          >
            <Icon className="w-4 h-4 sm:w-[17px] sm:h-[17px]" />
          </a>
        );
      })}
    </div>
  );
};

/* =========================================================================
   2. APP STORE & GOOGLE PLAY DOWNLOAD BADGES
   ========================================================================= */
export const AppleLogo = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 170 170" fill="currentColor">
    <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.6-7.71-11.71-14.01-6.19-9.5-11.05-20.78-14.57-33.84-3.52-13.06-5.28-25.2-5.28-36.42 0-14.48 3.59-26.69 10.77-36.63 7.18-9.94 16.5-15.02 27.96-15.24 5.33 0 11.16 1.41 17.5 4.24 6.33 2.82 10.29 4.3 11.88 4.45 2.12-.32 6.46-1.9 13.03-4.73 6.57-2.83 12.18-4.14 16.84-3.92 12.63.65 22.84 5.37 30.64 14.16-10.99 6.64-16.38 15.79-16.17 27.44.22 9.15 3.79 16.89 10.72 23.23 6.93 6.33 15.11 9.92 24.54 10.77-1.95 6.1-4.29 12.08-7.01 17.93zM119.22 33.11c0-7.39 2.65-14.28 7.94-20.67 5.29-6.39 11.71-10.45 19.27-12.18.98 7.39-1.25 14.4-6.69 21.03-5.44 6.63-12.28 10.82-20.52 11.82z" />
  </svg>
);

export const GooglePlayLogo = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 512 512">
    <path fill="#4285F4" d="M30.4 12.9L262.1 244.6 30.4 476.3C24.4 466.8 21 454.6 21 441.4V47.8C21 34.6 24.4 22.4 30.4 12.9z" />
    <path fill="#FBBC04" d="M347.5 330l-85.4-85.4 85.4-85.4 48.7 27.8c13.9 7.9 22.6 22.7 22.6 38.6 0 15.9-8.7 30.7-22.6 38.6L347.5 330z" />
    <path fill="#34A853" d="M30.4 476.3l231.7-231.7 85.4 85.4-250.7 143.2c-20 11.4-44.5 9-66.4 3.1z" />
    <path fill="#EA4335" d="M262.1 244.6L30.4 12.9c21.9-5.9 46.4-8.3 66.4 3.1l250.7 143.2-85.4 85.4z" />
  </svg>
);

export const FooterAppBadges = () => {
  return (
    <div className="flex flex-wrap items-center gap-2.5 mt-2.5">
      <a
        href="#app-store"
        className="
          flex items-center gap-2.5 px-3.5 py-2 rounded-xl
          bg-black/60 border border-white/15 hover:border-white/35
          shadow-[0_4px_16px_rgba(0,0,0,0.4)] hover:shadow-[0_6px_22px_rgba(239,53,237,0.2)]
          hover:-translate-y-0.5 active:scale-95 transition-all duration-200 cursor-pointer
        "
      >
        <AppleLogo className="w-6 h-6 text-white shrink-0 -mt-0.5" />
        <div className="flex flex-col text-left">
          <span className="text-[9px] uppercase tracking-wider text-slate-300 font-medium leading-none">
            Download on the
          </span>
          <span className="text-[13px] sm:text-[14px] font-bold text-white tracking-tight leading-tight mt-0.5">
            App Store
          </span>
        </div>
      </a>

      <a
        href="#google-play"
        className="
          flex items-center gap-2.5 px-3.5 py-2 rounded-xl
          bg-black/60 border border-white/15 hover:border-white/35
          shadow-[0_4px_16px_rgba(0,0,0,0.4)] hover:shadow-[0_6px_22px_rgba(120,53,255,0.25)]
          hover:-translate-y-0.5 active:scale-95 transition-all duration-200 cursor-pointer
        "
      >
        <GooglePlayLogo className="w-5 h-5 shrink-0" />
        <div className="flex flex-col text-left">
          <span className="text-[8.5px] uppercase tracking-wider text-slate-300 font-medium leading-none">
            GET IT ON
          </span>
          <span className="text-[13px] sm:text-[14px] font-bold text-white tracking-tight leading-tight mt-0.5">
            Google Play
          </span>
        </div>
      </a>
    </div>
  );
};

/* =========================================================================
   3. FALLING MUSIC RAIN ICONS ("Icon ki Barish")
   ========================================================================= */
export const NEON_RAIN_PALETTE = [
  { color: '#FF7A59', glow: '#FF7A59' }, // Sunset Orange / Coral
  { color: '#EF35ED', glow: '#EF35ED' }, // Neon Fuchsia / Pink
  { color: '#A855F7', glow: '#A855F7' }, // Electric Purple
  { color: '#38BDF8', glow: '#38BDF8' }, // Sky Cyan
  { color: '#F43F5E', glow: '#F43F5E' }, // Rose Neon
  { color: '#FBBF24', glow: '#FBBF24' }, // Amber / Gold Star
  { color: '#34D399', glow: '#34D399' }, // Emerald Mint
  { color: '#C084FC', glow: '#C084FC' }, // Bright Lilac
];

export const MusicRainIcons = () => {
  const particles = useMemo(() => [
    { id: 1,  Icon: Music,         left: '2.5%', size: 17, duration: 8.5,  delay: -1.8, paletteIdx: 0, swayClass: 'animate-rain-sway-1', opacity: 0.40 },
    { id: 2,  Icon: Headphones,    left: '5.5%', size: 20, duration: 10.4, delay: -6.7, paletteIdx: 1, swayClass: 'animate-rain-sway-2', opacity: 0.38 },
    { id: 3,  Icon: Disc,          left: '9.0%', size: 18, duration: 7.8,  delay: -3.9, paletteIdx: 2, swayClass: 'animate-rain-sway-3', opacity: 0.42 },
    { id: 4,  Icon: Music2,        left: '12.5%',size: 16, duration: 11.8, delay: -9.2, paletteIdx: 3, swayClass: 'animate-rain-sway-1', opacity: 0.36 },
    { id: 5,  Icon: AudioWaveform, left: '16.0%',size: 19, duration: 9.3,  delay: -1.4, paletteIdx: 4, swayClass: 'animate-rain-sway-2', opacity: 0.40 },
    { id: 6,  Icon: Mic2,          left: '19.5%',size: 17, duration: 12.2, delay: -5.8, paletteIdx: 5, swayClass: 'animate-rain-sway-3', opacity: 0.35 },
    { id: 7,  Icon: Music4,        left: '23.0%',size: 18, duration: 8.2,  delay: -3.1, paletteIdx: 6, swayClass: 'animate-rain-sway-1', opacity: 0.42 },
    { id: 8,  Icon: Guitar,        left: '26.5%',size: 20, duration: 10.8, delay: -7.5, paletteIdx: 7, swayClass: 'animate-rain-sway-2', opacity: 0.38 },
    { id: 9,  Icon: Disc3,         left: '30.0%',size: 18, duration: 8.0,  delay: -4.7, paletteIdx: 0, swayClass: 'animate-rain-sway-3', opacity: 0.40 },
    { id: 10, Icon: Music3,        left: '33.5%',size: 16, duration: 11.2, delay: -2.5, paletteIdx: 1, swayClass: 'animate-rain-sway-1', opacity: 0.36 },
    { id: 11, Icon: Radio,         left: '37.0%',size: 19, duration: 9.8,  delay: -7.1, paletteIdx: 2, swayClass: 'animate-rain-sway-2', opacity: 0.38 },
    { id: 12, Icon: AudioLines,    left: '40.5%',size: 18, duration: 8.9,  delay: -3.6, paletteIdx: 3, swayClass: 'animate-rain-sway-3', opacity: 0.42 },
    { id: 13, Icon: Volume2,       left: '44.0%',size: 17, duration: 12.0, delay: -10.5, paletteIdx: 4, swayClass: 'animate-rain-sway-1', opacity: 0.35 },
    { id: 14, Icon: Piano,         left: '47.5%',size: 20, duration: 7.9,  delay: -0.9, paletteIdx: 5, swayClass: 'animate-rain-sway-2', opacity: 0.40 },
    { id: 15, Icon: Music,         left: '51.0%',size: 16, duration: 10.5, delay: -6.2, paletteIdx: 6, swayClass: 'animate-rain-sway-3', opacity: 0.38 },
    { id: 16, Icon: Headphones,    left: '54.5%',size: 20, duration: 9.4,  delay: -3.4, paletteIdx: 7, swayClass: 'animate-rain-sway-1', opacity: 0.40 },
    { id: 17, Icon: Sliders,       left: '58.0%',size: 18, duration: 11.6, delay: -8.3, paletteIdx: 0, swayClass: 'animate-rain-sway-2', opacity: 0.36 },
    { id: 18, Icon: Music2,        left: '61.5%',size: 19, duration: 8.4,  delay: -5.1, paletteIdx: 1, swayClass: 'animate-rain-sway-3', opacity: 0.42 },
    { id: 19, Icon: Disc,          left: '65.0%',size: 18, duration: 8.1,  delay: -2.2, paletteIdx: 2, swayClass: 'animate-rain-sway-1', opacity: 0.40 },
    { id: 20, Icon: Mic,           left: '68.5%',size: 17, duration: 12.6, delay: -9.5, paletteIdx: 3, swayClass: 'animate-rain-sway-2', opacity: 0.35 },
    { id: 21, Icon: Music4,        left: '72.0%',size: 19, duration: 9.9,  delay: -4.2, paletteIdx: 4, swayClass: 'animate-rain-sway-3', opacity: 0.40 },
    { id: 22, Icon: AudioWaveform, left: '75.5%',size: 18, duration: 8.2,  delay: -6.5, paletteIdx: 5, swayClass: 'animate-rain-sway-1', opacity: 0.38 },
    { id: 23, Icon: ListMusic,     left: '79.0%',size: 18, duration: 11.0, delay: -2.8, paletteIdx: 6, swayClass: 'animate-rain-sway-2', opacity: 0.36 },
    { id: 24, Icon: Music,         left: '82.5%',size: 16, duration: 7.7,  delay: -5.8, paletteIdx: 7, swayClass: 'animate-rain-sway-3', opacity: 0.42 },
    { id: 25, Icon: Guitar,        left: '86.0%',size: 20, duration: 11.1, delay: -9.9, paletteIdx: 2, swayClass: 'animate-rain-sway-1', opacity: 0.36 },
    { id: 26, Icon: Music3,        left: '89.5%',size: 17, duration: 9.5,  delay: -7.8, paletteIdx: 0, swayClass: 'animate-rain-sway-2', opacity: 0.38 },
    { id: 27, Icon: Headphones,    left: '93.0%',size: 20, duration: 8.7,  delay: -4.1, paletteIdx: 3, swayClass: 'animate-rain-sway-3', opacity: 0.40 },
    { id: 28, Icon: Music2,        left: '96.5%',size: 18, duration: 10.2, delay: -1.6, paletteIdx: 5, swayClass: 'animate-rain-sway-1', opacity: 0.42 },
    { id: 29, Icon: Disc3,         left: '14.0%',size: 19, duration: 9.1,  delay: -7.2, paletteIdx: 4, swayClass: 'animate-rain-sway-2', opacity: 0.38 },
    { id: 30, Icon: AudioLines,    left: '49.0%',size: 18, duration: 12.4, delay: -11.1,paletteIdx: 1, swayClass: 'animate-rain-sway-3', opacity: 0.36 },
    { id: 31, Icon: Mic2,          left: '70.0%',size: 17, duration: 8.9,  delay: -6.9, paletteIdx: 7, swayClass: 'animate-rain-sway-1', opacity: 0.40 },
    { id: 32, Icon: Piano,         left: '84.5%',size: 19, duration: 10.6, delay: -3.3, paletteIdx: 0, swayClass: 'animate-rain-sway-2', opacity: 0.38 },
  ], []);

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {particles.map((p) => {
        const { Icon, left, size, duration, delay, paletteIdx, swayClass, opacity } = p;
        const paletteItem = NEON_RAIN_PALETTE[paletteIdx % NEON_RAIN_PALETTE.length];
        const color = paletteItem.color;
        const glow = paletteItem.glow;

        return (
          <div
            key={p.id}
            className="absolute animate-music-rain-fall will-change-transform"
            style={{
              left,
              top: '-45px',
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          >
            <div
              className={swayClass}
              style={{
                color,
                opacity,
                filter: `drop-shadow(0 0 3px ${glow}) drop-shadow(0 0 6px ${glow})`,
              }}
            >
              <Icon size={size} strokeWidth={1.75} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

/* =========================================================================
   4. TOP FLOWING WAVE RIBBON SVG
   ========================================================================= */
export const FooterTopWaveSvg = ({ className = '' }) => {
  const rimPathD = `
    M 0 45
    C 110 15, 230 18, 330 60
    C 430 102, 590 125, 710 100
    C 750 92, 780 85, 800 85
    C 820 85, 850 92, 890 100
    C 1010 125, 1170 102, 1270 60
    C 1370 18, 1490 15, 1600 45
  `;

  return (
    <div className={`relative w-full overflow-hidden select-none pointer-events-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1600 155"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-[65px] sm:h-[75px] md:h-[84px] lg:h-[90px] block"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveMainGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7835FF" />
            <stop offset="14%" stopColor="#9333EA" />
            <stop offset="28%" stopColor="#D946EF" />
            <stop offset="42%" stopColor="#8B5CF6" />
            <stop offset="50%" stopColor="#5B21B6" />
            <stop offset="58%" stopColor="#8B5CF6" />
            <stop offset="70%" stopColor="#C026D3" />
            <stop offset="84%" stopColor="#EF35ED" />
            <stop offset="93%" stopColor="#FF7A59" />
            <stop offset="100%" stopColor="#FFAA5B" />
          </linearGradient>

          <linearGradient id="waveBackRibbonGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4A1D96" stopOpacity="0.8" />
            <stop offset="30%" stopColor="#8B5CF6" stopOpacity="0.35" />
            <stop offset="70%" stopColor="#D946EF" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#FF7A59" stopOpacity="0.75" />
          </linearGradient>

          <linearGradient id="waveRimGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF577B" />
            <stop offset="18%" stopColor="#FF3B9A" />
            <stop offset="35%" stopColor="#C084FC" />
            <stop offset="50%" stopColor="#EF35ED" />
            <stop offset="65%" stopColor="#C084FC" />
            <stop offset="82%" stopColor="#FF3B9A" />
            <stop offset="92%" stopColor="#FF7A59" />
            <stop offset="100%" stopColor="#FFAA5B" />
          </linearGradient>

          <linearGradient id="waveStreamLaserGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.1" />
            <stop offset="35%" stopColor="#C084FC" stopOpacity="0.85" />
            <stop offset="65%" stopColor="#EF35ED" stopOpacity="1" />
            <stop offset="85%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="95%" stopColor="#FDE047" stopOpacity="1" />
            <stop offset="100%" stopColor="#FFAA5B" stopOpacity="0.2" />
          </linearGradient>

          <linearGradient id="waveStreamGoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D946EF" stopOpacity="0.1" />
            <stop offset="40%" stopColor="#F43F5E" stopOpacity="0.85" />
            <stop offset="75%" stopColor="#FFAA5B" stopOpacity="1" />
            <stop offset="90%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="100%" stopColor="#FF7A59" stopOpacity="0.2" />
          </linearGradient>

          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="intenseGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="7" result="blur1" />
            <feGaussianBlur stdDeviation="2.5" result="blur2" />
            <feMerge>
              <feMergeNode in="blur1" />
              <feMergeNode in="blur2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d="
            M 0 65 
            C 130 25, 250 20, 360 65
            C 470 110, 630 115, 730 92
            C 765 84, 835 84, 870 92
            C 970 115, 1130 110, 1240 65
            C 1350 20, 1470 25, 1600 65
            L 1600 155
            L 0 155
            Z
          "
          fill="#0D071E"
        />

        <path
          d="
            M 0 90
            C 140 38, 280 42, 420 105
            C 520 150, 680 120, 800 95
            C 680 135, 500 145, 360 105
            C 220 68, 100 82, 0 120
            Z
          "
          fill="url(#waveBackRibbonGrad)"
          opacity="0.55"
          className="animate-wave-veil-left"
        />

        <path
          d="
            M 800 95
            C 920 120, 1080 150, 1180 105
            C 1320 42, 1460 38, 1600 90
            L 1600 120
            C 1500 82, 1380 68, 1240 105
            C 1100 145, 920 135, 800 95
            Z
          "
          fill="url(#waveBackRibbonGrad)"
          opacity="0.6"
          className="animate-wave-veil-right"
        />

        <path
          d="
            M 0 45
            C 110 15, 230 18, 330 60
            C 430 102, 590 125, 710 100
            C 750 92, 780 85, 800 85
            C 760 98, 700 118, 590 118
            C 440 118, 320 85, 220 50
            C 130 20, 50 35, 0 65
            Z
          "
          fill="url(#waveMainGrad)"
          filter="url(#softGlow)"
        />

        <path
          d="
            M 800 85
            C 820 85, 850 92, 890 100
            C 1010 125, 1170 102, 1270 60
            C 1370 18, 1490 15, 1600 45
            L 1600 65
            C 1550 35, 1470 20, 1380 50
            C 1280 85, 1160 118, 1010 118
            C 900 118, 840 98, 800 85
            Z
          "
          fill="url(#waveMainGrad)"
          filter="url(#softGlow)"
        />

        <path
          d={rimPathD}
          stroke="url(#waveRimGrad)"
          strokeWidth="2.8"
          strokeLinecap="round"
          fill="none"
          filter="url(#intenseGlow)"
        />

        <path
          d={rimPathD}
          stroke="#FFFFFF"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeOpacity="0.8"
          fill="none"
        />

        <path
          d={rimPathD}
          stroke="url(#waveStreamLaserGrad)"
          strokeWidth="3.6"
          strokeLinecap="round"
          fill="none"
          filter="url(#intenseGlow)"
          className="animate-wave-stream-1"
        />

        <path
          d={rimPathD}
          stroke="#FFFFFF"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
          className="animate-wave-stream-1"
        />

        <path
          d={rimPathD}
          stroke="url(#waveStreamGoldGrad)"
          strokeWidth="3.2"
          strokeLinecap="round"
          fill="none"
          filter="url(#softGlow)"
          className="animate-wave-stream-2"
        />

        <path
          d={rimPathD}
          stroke="#A5F3FC"
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
          filter="url(#intenseGlow)"
          className="animate-wave-stream-fast"
        />
      </svg>
    </div>
  );
};

/* =========================================================================
   5. CENTER VINYL RECORD & EQUALIZERS SVG
   ========================================================================= */
export const FooterVinylCenterSvg = ({ className = '' }) => {
  const leftBarHeights = [
    14, 20, 32, 42, 54, 70, 85, 96, 76, 60, 72, 86, 102, 85, 70, 58, 66, 78, 92, 74, 55, 42, 30, 22, 16, 10
  ];

  const rightBarHeights = [
    10, 16, 22, 30, 42, 55, 74, 92, 78, 66, 58, 70, 85, 102, 86, 72, 60, 76, 96, 85, 70, 54, 42, 32, 20, 14
  ];

  const getBarAnim = (index) => ({
    animationDuration: `${(0.9 + (index % 6) * 0.12 + Math.sin(index * 0.5) * 0.1).toFixed(2)}s`,
    animationDelay: `${(-((index * 0.18) % 1.6)).toFixed(2)}s`,
  });

  return (
    <div className={`relative w-full flex justify-center pointer-events-none select-none overflow-hidden ${className}`} aria-hidden="true">
      <svg
        viewBox="0 48 1000 192"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[340px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[520px] h-auto block"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="vinylRimGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7835FF" />
            <stop offset="30%" stopColor="#C084FC" />
            <stop offset="50%" stopColor="#EF35ED" />
            <stop offset="75%" stopColor="#FF7A59" />
            <stop offset="100%" stopColor="#FFAA5B" />
          </linearGradient>

          <linearGradient id="leftEqGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#312E81" />
            <stop offset="25%" stopColor="#4338CA" />
            <stop offset="55%" stopColor="#6366F1" />
            <stop offset="80%" stopColor="#A855F7" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>

          <linearGradient id="rightEqGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#701A75" />
            <stop offset="30%" stopColor="#A21CAF" />
            <stop offset="60%" stopColor="#EF35ED" />
            <stop offset="85%" stopColor="#FF7A59" />
            <stop offset="100%" stopColor="#FFAA5B" />
          </linearGradient>

          <radialGradient id="vinylBodyGrad" cx="500" cy="240" r="190" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0B0518" />
            <stop offset="35%" stopColor="#120824" />
            <stop offset="65%" stopColor="#0B0518" />
            <stop offset="85%" stopColor="#170C2E" />
            <stop offset="100%" stopColor="#080312" />
          </radialGradient>

          <radialGradient id="labelGrad" cx="500" cy="240" r="88" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#241248" />
            <stop offset="60%" stopColor="#140A28" />
            <stop offset="100%" stopColor="#0A0416" />
          </radialGradient>

          <filter id="vinylGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="intenseVinylGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="7" result="blur1" />
            <feGaussianBlur stdDeviation="2.5" result="blur2" />
            <feMerge>
              <feMergeNode in="blur1" />
              <feMergeNode in="blur2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id="eqFadeMask" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="10%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="90%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
          <mask id="hFadeMask">
            <rect x="0" y="0" width="1000" height="240" fill="url(#eqFadeMask)" />
          </mask>
        </defs>

        <g mask="url(#hFadeMask)">
          <path
            d="M 50 190 C 150 155, 260 210, 360 175 C 410 160, 460 175, 500 180"
            stroke="#6366F1"
            strokeWidth="2"
            strokeOpacity="0.45"
            fill="none"
          />
          <path
            d="M 50 200 C 160 168, 270 215, 370 185"
            stroke="#A855F7"
            strokeWidth="1.2"
            strokeOpacity="0.3"
            fill="none"
          />

          <path
            d="M 500 180 C 540 175, 590 160, 640 175 C 740 210, 850 155, 950 190"
            stroke="#EF35ED"
            strokeWidth="2"
            strokeOpacity="0.45"
            fill="none"
          />
          <path
            d="M 630 185 C 730 215, 840 168, 950 200"
            stroke="#FF7A59"
            strokeWidth="1.2"
            strokeOpacity="0.3"
            fill="none"
          />

          <g>
            {leftBarHeights.map((h, i) => {
              const x = 110 + i * 11;
              const y = 175 - h * 0.5;
              return (
                <rect
                  key={`left-eq-${i}`}
                  x={x}
                  y={y}
                  width="4"
                  height={h}
                  rx="2"
                  fill="url(#leftEqGrad)"
                  opacity={(i / 26) * 0.45 + 0.55}
                  filter="url(#vinylGlow)"
                  className="animate-equalizer-bar"
                  style={getBarAnim(i)}
                />
              );
            })}
          </g>

          <g>
            {rightBarHeights.map((h, i) => {
              const x = 605 + i * 11;
              const y = 175 - h * 0.5;
              return (
                <rect
                  key={`right-eq-${i}`}
                  x={x}
                  y={y}
                  width="4"
                  height={h}
                  rx="2"
                  fill="url(#rightEqGrad)"
                  opacity={((26 - i) / 26) * 0.45 + 0.55}
                  filter="url(#vinylGlow)"
                  className="animate-equalizer-bar"
                  style={getBarAnim(i + 13)}
                />
              );
            })}
          </g>

          <line
            x1="80"
            y1="175"
            x2="400"
            y2="175"
            stroke="#C084FC"
            strokeWidth="1.8"
            strokeOpacity="0.85"
            filter="url(#intenseVinylGlow)"
          />
          <line
            x1="600"
            y1="175"
            x2="920"
            y2="175"
            stroke="#FFAA5B"
            strokeWidth="1.8"
            strokeOpacity="0.85"
            filter="url(#intenseVinylGlow)"
          />
        </g>

        <g>
          <path
            d="M 315 240 A 185 185 0 0 1 685 240 Z"
            fill="none"
            stroke="url(#vinylRimGrad)"
            strokeWidth="14"
            opacity="0.35"
            filter="url(#intenseVinylGlow)"
          />

          <path
            d="M 318 240 A 182 182 0 0 1 682 240 Z"
            fill="url(#vinylBodyGrad)"
          />

          {[170, 158, 146, 134, 122, 110, 98, 86].map((r, i) => (
            <path
              key={`groove-${i}`}
              d={`M ${500 - r} 240 A ${r} ${r} 0 0 1 ${500 + r} 240`}
              stroke="#3D2264"
              strokeWidth="1.2"
              strokeOpacity={i % 2 === 0 ? "0.6" : "0.35"}
              fill="none"
            />
          ))}

          <path
            d="M 500 240 L 360 120 A 182 182 0 0 1 420 80 Z"
            fill="#FFFFFF"
            opacity="0.045"
          />
          <path
            d="M 500 240 L 580 80 A 182 182 0 0 1 640 120 Z"
            fill="#FFAA5B"
            opacity="0.07"
          />

          <path
            d="M 318 240 A 182 182 0 0 1 682 240"
            stroke="url(#vinylRimGrad)"
            strokeWidth="2.8"
            strokeLinecap="round"
            fill="none"
            filter="url(#intenseVinylGlow)"
          />
          <path
            d="M 318 240 A 182 182 0 0 1 682 240"
            stroke="#FFFFFF"
            strokeWidth="1"
            strokeLinecap="round"
            strokeOpacity="0.7"
            fill="none"
          />

          <circle
            cx="500"
            cy="240"
            r="82"
            stroke="#EF35ED"
            strokeWidth="1.8"
            strokeOpacity="0.8"
            fill="url(#labelGrad)"
            filter="url(#vinylGlow)"
          />
          <circle
            cx="500"
            cy="240"
            r="80"
            stroke="#7835FF"
            strokeWidth="1"
            fill="none"
          />

          <text
            x="500"
            y="188"
            textAnchor="middle"
            fill="#F472B6"
            fontFamily="'Dancing Script', 'Great Vibes', 'Brush Script MT', 'Caveat', cursive"
            fontSize="32"
            fontWeight="700"
            filter="url(#vinylGlow)"
          >
            Music
          </text>

          <text
            x="500"
            y="210"
            textAnchor="middle"
            fill="#E2E8F0"
            fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            fontSize="10.5"
            fontWeight="700"
            letterSpacing="3.5"
          >
            CONNECTS US
          </text>

          <path
            d="M 500 223 C 498.5 220.5, 495 220, 493.5 222 C 491.5 224, 492 227, 495 229.5 L 500 234 L 505 229.5 C 508 227, 508.5 224, 506.5 222 C 505 220, 501.5 220.5, 500 223 Z"
            fill="#EF35ED"
            opacity="0.9"
            filter="url(#vinylGlow)"
          />
        </g>
      </svg>
    </div>
  );
};

/* =========================================================================
   6. LOGO BADGE COMPONENT
   ========================================================================= */
export const SoundWaveFooterLogo = () => (
  <div className="relative w-12 h-12 sm:w-13 sm:h-13 rounded-full p-[2px] bg-gradient-to-tr from-[#7835FF] via-[#EF35ED] to-[#FF7A59] shadow-[0_0_22px_rgba(239,53,237,0.5)] shrink-0">
    <div className="w-full h-full rounded-full bg-[#0D071E] flex items-center justify-center">
      <div className="flex items-center gap-[3px] h-5" aria-hidden="true">
        <span className="w-[3px] h-2.5 bg-gradient-to-t from-[#7835FF] to-[#EF35ED] rounded-full animate-equalizer-bar" style={{ animationDuration: '0.85s', animationDelay: '-0.2s' }} />
        <span className="w-[3px] h-4 bg-gradient-to-t from-[#7835FF] to-[#EF35ED] rounded-full animate-equalizer-bar" style={{ animationDuration: '1.1s', animationDelay: '-0.6s' }} />
        <span className="w-[3px] h-5 bg-gradient-to-t from-[#EF35ED] to-[#FF7A59] rounded-full animate-equalizer-bar" style={{ animationDuration: '0.92s', animationDelay: '-0.1s' }} />
        <span className="w-[3px] h-3 bg-gradient-to-t from-[#7835FF] to-[#EF35ED] rounded-full animate-equalizer-bar" style={{ animationDuration: '1.25s', animationDelay: '-0.75s' }} />
        <span className="w-[3px] h-1.5 bg-gradient-to-t from-[#7835FF] to-[#EF35ED] rounded-full animate-equalizer-bar" style={{ animationDuration: '0.75s', animationDelay: '-0.35s' }} />
      </div>
    </div>
  </div>
);

/* =========================================================================
   7. MAIN COMPACT CONSOLIDATED FOOTER SECTION
   ========================================================================= */
export const FooterSection = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3500);
      setEmail('');
    }
  };

  const productLinks = soundWaveFooterData.productLinks || defaultProductLinks;
  const companyLinks = soundWaveFooterData.companyLinks || defaultCompanyLinks;
  const supportLinks = soundWaveFooterData.supportLinks || defaultSupportLinks;

  return (
    <footer id="soundwave-footer" aria-label="SoundWave Footer" className="relative w-full mt-10 sm:mt-14 lg:mt-16 mb-0 select-none overflow-hidden">
      {/* 1. TOP FLOWING WAVE RIBBON */}
      <div className="relative w-full overflow-visible">
        <FooterTopWaveSvg />
      </div>

      {/* 2. MAIN FOOTER BODY */}
      <div className="
        relative w-full -mt-1 sm:-mt-2
        bg-gradient-to-b from-[#0D071E] via-[#0E0822] to-[#080312]
        overflow-hidden
      ">
        {/* Dynamic Music Icon Rain Particle Atmosphere */}
        <MusicRainIcons />

        {/* Centered Content Container */}
        <div className="relative z-10 w-full max-w-[1620px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 pt-0.5 pb-0.5 sm:pt-1 sm:pb-1 lg:pt-1 lg:pb-1">

          {/* Multi-column Grid: Left Branding | Center Links | Right Newsletter */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 lg:gap-5 xl:gap-7 relative z-10 mt-3 sm:mt-4 lg:mt-5">

            {/* COLUMN 1: BRANDING & COMMUNITY */}
            <div className="md:col-span-1 lg:col-span-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <SoundWaveFooterLogo />
                  <div>
                    <div className="flex items-center tracking-tight leading-none text-2xl sm:text-[25px] font-extrabold">
                      <span className="text-white">Sound</span>
                      <span className="bg-gradient-to-r from-[#EF35ED] via-[#F43F5E] to-[#FF7A59] bg-clip-text text-transparent">
                        Wave
                      </span>
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-slate-400 uppercase tracking-widest font-semibold mt-0.5">
                      Music Lives Here
                    </p>
                  </div>
                </div>

                <p className="text-slate-400 text-xs sm:text-[12.5px] leading-relaxed mt-2 max-w-sm font-normal">
                  Discover, play, and share a world of music. SoundWave brings millions of songs, artists, and playlists together, so the music never stops moving you.
                </p>

                <FooterSocials />
              </div>

              {/* Community Capsule Card: "Join 10M+" */}
              <div className="
                mt-2.5 sm:mt-3 inline-flex items-center gap-3 p-2 sm:p-2.5 rounded-2xl
                bg-white/[0.04] border border-white/10 hover:border-purple-500/40
                shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition-all max-w-full sm:max-w-sm
              ">
                <div className="flex items-center -space-x-2 shrink-0 mr-1.5">
                  <img src={avatar1} alt="User 1" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-purple-500 object-cover" />
                  <img src={avatar2} alt="User 2" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-fuchsia-500 object-cover" />
                  <img src={avatar3} alt="User 3" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-pink-500 object-cover" />
                  <img src={avatar4} alt="User 4" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-orange-500 object-cover" />
                </div>
                <div className="min-w-0 pr-1">
                  <div className="text-xs sm:text-[13px] font-bold text-white tracking-tight leading-tight whitespace-nowrap">
                    Join <span className="text-[#EF35ED]">10M+</span>
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-400 truncate mt-0.5 font-medium whitespace-nowrap">
                    Music Lovers Worldwide
                  </div>
                </div>
              </div>
            </div>

            {/* COLUMN 2: LINK LISTS */}
            <div className="md:col-span-1 lg:col-span-4 grid grid-cols-3 gap-2.5 sm:gap-4 pt-0.5">
              <div>
                <h4 className="text-white font-bold text-xs sm:text-sm tracking-wider uppercase mb-1.5 sm:mb-2">
                  Product
                </h4>
                <ul className="space-y-1 sm:space-y-1.5">
                  {productLinks.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-slate-400 hover:text-white text-[11px] sm:text-xs md:text-[12.5px] transition-colors leading-tight block">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold text-xs sm:text-sm tracking-wider uppercase mb-1.5 sm:mb-2">
                  Company
                </h4>
                <ul className="space-y-1 sm:space-y-1.5">
                  {companyLinks.map((link) => (
                    <li key={link.label} className="flex items-center gap-1.5 flex-wrap">
                      <a href={link.href} className="text-slate-400 hover:text-white text-[11px] sm:text-xs md:text-[12.5px] transition-colors leading-tight block">
                        {link.label}
                      </a>
                      {link.badge && (
                        <span className="text-[8.5px] sm:text-[9px] font-bold text-white px-1.5 py-0.5 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 leading-none">
                          {link.badge}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold text-xs sm:text-sm tracking-wider uppercase mb-1.5 sm:mb-2">
                  Support
                </h4>
                <ul className="space-y-1 sm:space-y-1.5">
                  {supportLinks.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-slate-400 hover:text-white text-[11px] sm:text-xs md:text-[12.5px] transition-colors leading-tight block">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* COLUMN 3: NEWSLETTER & APP DOWNLOADS */}
            <div className="md:col-span-2 lg:col-span-4 flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-col justify-between gap-4 md:gap-6 lg:gap-0 pt-0.5">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-white font-bold text-base sm:text-[17px] tracking-tight">
                    Stay in the Loop
                  </h4>
                  <Sparkles className="w-4 h-4 text-fuchsia-400 fill-fuchsia-400 animate-pulse" />
                </div>
                <p className="text-slate-400 text-xs sm:text-[12.5px] leading-relaxed mt-0.5 max-w-sm">
                  Get the latest music updates, new releases and exclusive content, straight to your inbox.
                </p>

                <form onSubmit={handleSubscribe} className="mt-2 relative flex items-center rounded-full bg-white/[0.05] border border-white/10 p-1 pl-3.5 focus-within:border-fuchsia-500/70 focus-within:shadow-[0_0_16px_rgba(239,53,237,0.25)] transition-all max-w-md">
                  <Mail className="w-4 h-4 text-slate-400 shrink-0 mr-2" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="bg-transparent text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-hidden w-full min-w-0 pr-2"
                  />
                  <button
                    type="submit"
                    className="
                      px-3.5 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold text-white
                      bg-gradient-to-r from-[#D946EF] via-[#EF35ED] to-[#FF7A59]
                      shadow-[0_4px_16px_rgba(239,53,237,0.45)] hover:shadow-[0_6px_22px_rgba(239,53,237,0.6)]
                      hover:scale-[1.02] active:scale-95 transition-all duration-200 shrink-0 cursor-pointer
                    "
                  >
                    {subscribed ? 'Subscribed!' : 'Subscribe'}
                  </button>
                </form>
              </div>

              {/* Get the App */}
              <div className="mt-2 md:mt-0 lg:mt-2 pt-1.5 md:pt-0 lg:pt-1.5 border-t md:border-t-0 lg:border-t border-white/10">
                <h5 className="text-white font-bold text-xs sm:text-sm tracking-wide">
                  Get the App
                </h5>
                <p className="text-slate-400 text-[11.5px] sm:text-xs mt-0.5">
                  Listen anytime, anywhere.
                </p>
                <FooterAppBadges />
              </div>
            </div>
          </div>

          {/* 3. BOTTOM SIGNATURE: VINYL RECORD, EQUALIZERS & COPYRIGHT */}
          <div className="relative w-full mt-1 sm:mt-1.5">
            <FooterVinylCenterSvg className="w-full" />

            {/* 4. SUB-FOOTER BOTTOM COPYRIGHT & MOTTO BAR */}
            <div className="
              relative md:absolute md:bottom-2 lg:bottom-2 md:inset-x-0 z-20
              mt-1.5 md:mt-0 pb-1.5 md:pb-0 px-2 sm:px-4
              flex flex-col md:flex-row items-center justify-between gap-3
              text-center md:text-left
            ">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-slate-400 text-[11px] sm:text-xs">
                <span>© 2026 SoundWave. All rights reserved.</span>
                <span className="hidden sm:inline text-slate-600">|</span>
                <span className="inline-flex items-center gap-1.5 text-slate-300">
                  Made with <Heart className="w-3 h-3 text-red-500 fill-red-500 inline-block" /> by music lovers, for music lovers.
                </span>
              </div>

              <div className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold text-fuchsia-400">
                <div className="flex items-center gap-[2px] h-3" aria-hidden="true">
                  <span className="w-[2px] h-1.5 bg-fuchsia-400 rounded-full" />
                  <span className="w-[2px] h-3 bg-fuchsia-400 rounded-full" />
                  <span className="w-[2px] h-2 bg-fuchsia-400 rounded-full" />
                  <span className="w-[2px] h-1 bg-fuchsia-400 rounded-full" />
                </div>
                <span>Turn Up the Vibes. Always.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export const SoundWaveFooter = FooterSection;
export const Footer = FooterSection;
export default SoundWaveFooter;
