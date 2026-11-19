/**
 * GuitarNavbarData.js
 * Centralized static configuration, navigation links, and particle systems
 * for the SoundWave Acoustic Guitar Navbar.
 */

export const navItems = [
  { id: 'home', label: 'Home', icon: 'House', href: '#hero' },
  { id: 'explore', label: 'Explore', icon: 'Music2', href: '#explore-music-genres' },
  { id: 'library', label: 'Library', icon: 'Library', href: '#featured-albums' },
  { id: 'favorites', label: 'Favorites', icon: 'Heart', href: '#made-for-you' },
  { id: 'radio', label: 'Radio', icon: 'Radio', href: '#new-releases' },
];

export const profileMenuItems = [
  { id: 'profile', label: 'My Profile', icon: 'User' },
  { id: 'settings', label: 'Settings', icon: 'Settings' },
  { id: 'signout', label: 'Sign Out', icon: 'LogOut' },
];

export const musicParticles = [
  { id: 1, char: '♪', anim: 'animate-particle-1', color: '#38bdf8', glow: '#38bdf8', delay: '-0.3s', dur: '3.4s', size: 14 },
  { id: 2, char: '♫', anim: 'animate-particle-2', color: '#ff4fd8', glow: '#ff4fd8', delay: '-1.1s', dur: '3.1s', size: 15 },
  { id: 3, char: '✦', anim: 'animate-particle-3', color: '#fbbf24', glow: '#fbbf24', delay: '-2.2s', dur: '3.8s', size: 12 },
  { id: 4, char: '♩', anim: 'animate-particle-4', color: '#c084fc', glow: '#c084fc', delay: '-1.6s', dur: '3.3s', size: 13 },
  { id: 5, char: '♬', anim: 'animate-particle-5', color: '#f43f5e', glow: '#f43f5e', delay: '-0.8s', dur: '3.6s', size: 15 },
  { id: 6, char: '•', anim: 'animate-particle-6', color: '#38bdf8', glow: '#38bdf8', delay: '-1.9s', dur: '3.5s', size: 12 },
  { id: 7, char: '♪', anim: 'animate-particle-7', color: '#fbbf24', glow: '#fbbf24', delay: '-0.5s', dur: '3.2s', size: 14 },
  { id: 8, char: '✦', anim: 'animate-particle-8', color: '#ff4fd8', glow: '#ff4fd8', delay: '-2.5s', dur: '3.7s', size: 11 },
  { id: 9, char: '♫', anim: 'animate-particle-9', color: '#67e8f9', glow: '#67e8f9', delay: '-1.7s', dur: '3.3s', size: 14 },
  { id: 10, char: '•', anim: 'animate-particle-10', color: '#c084fc', glow: '#c084fc', delay: '-0.9s', dur: '3.9s', size: 12 },
];

export const sectionBarRanges = {
  home: [0, 8],
  explore: [9, 17],
  library: [18, 26],
  favorites: [27, 36],
  radio: [37, 47],
};

export const soundParticles = [
  // Section 1: Home / Low-Bass Frequency Bars (x: 430 - 540)
  { id: 'sp-1', symbol: '•', x: 445, y: 36, color: '#38bdf8', glow: 'rgba(56, 189, 248, 0.6)', size: 8, anim: 'animate-sound-particle-1', delay: '-0.4s', dur: '3.1s' },
  { id: 'sp-2', symbol: '♪', x: 472, y: 22, color: '#22d3ee', glow: 'rgba(34, 211, 238, 0.55)', size: 13, anim: 'animate-sound-particle-2', delay: '-1.8s', dur: '3.5s' },
  { id: 'sp-3', symbol: '✦', x: 502, y: 30, color: '#c084fc', glow: 'rgba(192, 132, 252, 0.55)', size: 11, anim: 'animate-sound-particle-3', delay: '-0.9s', dur: '2.9s' },
  { id: 'sp-4', symbol: '♫', x: 536, y: 16, color: '#ff4fd8', glow: 'rgba(255, 79, 216, 0.55)', size: 14, anim: 'animate-sound-particle-4', delay: '-2.6s', dur: '3.4s' },

  // Section 2: Explore / Low-Mids (x: 550 - 660)
  { id: 'sp-5', symbol: '•', x: 566, y: 32, color: '#fbbf24', glow: 'rgba(251, 191, 36, 0.6)', size: 8, anim: 'animate-sound-particle-1', delay: '-1.2s', dur: '3.2s' },
  { id: 'sp-6', symbol: '♬', x: 602, y: 12, color: '#38bdf8', glow: 'rgba(56, 189, 248, 0.6)', size: 13.5, anim: 'animate-sound-particle-2', delay: '-0.2s', dur: '3.6s' },
  { id: 'sp-7', symbol: '♩', x: 636, y: 26, color: '#f43f5e', glow: 'rgba(244, 63, 94, 0.55)', size: 12.5, anim: 'animate-sound-particle-3', delay: '-2.1s', dur: '3.0s' },

  // Section 3: Library / Mid frequencies (x: 670 - 780)
  { id: 'sp-8', symbol: '✨', x: 672, y: 20, color: '#fde047', glow: 'rgba(253, 224, 71, 0.6)', size: 12, anim: 'animate-sound-particle-4', delay: '-1.5s', dur: '3.3s' },
  { id: 'sp-9', symbol: '♫', x: 695, y: 14, color: '#a855f7', glow: 'rgba(168, 85, 247, 0.55)', size: 14, anim: 'animate-sound-particle-1', delay: '-3.1s', dur: '3.5s' },
  { id: 'sp-10', symbol: '♪', x: 738, y: 18, color: '#22d3ee', glow: 'rgba(34, 211, 238, 0.55)', size: 13, anim: 'animate-sound-particle-2', delay: '-0.7s', dur: '3.1s' },
  { id: 'sp-11', symbol: '•', x: 772, y: 34, color: '#ff4fd8', glow: 'rgba(255, 79, 216, 0.6)', size: 8, anim: 'animate-sound-particle-3', delay: '-2.9s', dur: '2.8s' },

  // Section 4: Favorites / High-Mids with Crowning Peak (x: 790 - 920)
  { id: 'sp-12', symbol: '✦', x: 812, y: 10, color: '#38bdf8', glow: 'rgba(56, 189, 248, 0.65)', size: 12, anim: 'animate-sound-particle-4', delay: '-1.1s', dur: '3.4s' },
  { id: 'sp-13', symbol: '♬', x: 842, y: 24, color: '#c084fc', glow: 'rgba(192, 132, 252, 0.55)', size: 13, anim: 'animate-sound-particle-1', delay: '-2.3s', dur: '3.3s' },
  { id: 'sp-14', symbol: '♫', x: 882, y: 15, color: '#f43f5e', glow: 'rgba(244, 63, 94, 0.55)', size: 13.5, anim: 'animate-sound-particle-2', delay: '-0.5s', dur: '3.6s' },
  { id: 'sp-15', symbol: '•', x: 918, y: 30, color: '#38bdf8', glow: 'rgba(56, 189, 248, 0.6)', size: 8, anim: 'animate-sound-particle-3', delay: '-1.9s', dur: '3.0s' },

  // Section 5: Radio / Treble Frequencies towards Nut (x: 930 - 1050)
  { id: 'sp-16', symbol: '♪', x: 948, y: 18, color: '#a855f7', glow: 'rgba(168, 85, 247, 0.55)', size: 12.5, anim: 'animate-sound-particle-4', delay: '-3.3s', dur: '3.5s' },
  { id: 'sp-17', symbol: '✧', x: 988, y: 32, color: '#fbbf24', glow: 'rgba(251, 191, 36, 0.6)', size: 11, anim: 'animate-sound-particle-1', delay: '-1.4s', dur: '3.2s' },
  { id: 'sp-18', symbol: '♩', x: 1028, y: 40, color: '#22d3ee', glow: 'rgba(34, 211, 238, 0.55)', size: 12, anim: 'animate-sound-particle-2', delay: '-2.7s', dur: '3.1s' },

  // Above Guitar Body Upper Bout & Waist
  { id: 'sp-19', symbol: '♪', x: 215, y: 14, color: '#38bdf8', glow: 'rgba(56, 189, 248, 0.55)', size: 13, anim: 'animate-sound-particle-3', delay: '-1.0s', dur: '3.4s' },
  { id: 'sp-20', symbol: '♫', x: 312, y: -6, color: '#ec4899', glow: 'rgba(236, 72, 153, 0.55)', size: 15, anim: 'animate-sound-particle-1', delay: '-2.4s', dur: '3.7s' },
  { id: 'sp-21', symbol: '♩', x: 416, y: 22, color: '#c084fc', glow: 'rgba(192, 132, 252, 0.55)', size: 13, anim: 'animate-sound-particle-2', delay: '-0.8s', dur: '3.2s' },
];

export const guitarBodyParticles = [
  { id: 'b1', char: '♪', anim: 'animate-body-particle-1', color: '#ff4fd8', glow: '#ff4fd8', top: '10%', left: '22%', delay: '-0.4s', dur: '3.5s', size: 14 },
  { id: 'b2', char: '✦', anim: 'animate-body-particle-2', color: '#fbbf24', glow: '#fbbf24', top: '14%', left: '32%', delay: '-1.8s', dur: '3.2s', size: 12 },
  { id: 'b3', char: '♫', anim: 'animate-body-particle-5', color: '#38bdf8', glow: '#38bdf8', top: '18%', left: '52%', delay: '-1.2s', dur: '3.6s', size: 13 },
  { id: 'b4', char: '♬', anim: 'animate-body-particle-3', color: '#c084fc', glow: '#c084fc', top: '82%', left: '24%', delay: '-0.9s', dur: '3.7s', size: 14 },
  { id: 'b5', char: '•', anim: 'animate-body-particle-4', color: '#38bdf8', glow: '#38bdf8', top: '86%', left: '38%', delay: '-2.4s', dur: '3.4s', size: 12 },
  { id: 'b6', char: '♩', anim: 'animate-body-particle-6', color: '#f43f5e', glow: '#f43f5e', top: '48%', left: '12%', delay: '-1.5s', dur: '3.3s', size: 13 },
  { id: 'b7', char: '✨', anim: 'animate-body-particle-2', color: '#fbbf24', glow: '#fbbf24', top: '8%', left: '18%', delay: '-2.8s', dur: '3.8s', size: 13 },
  { id: 'b8', char: '♪', anim: 'animate-body-particle-4', color: '#67e8f9', glow: '#67e8f9', top: '80%', left: '46%', delay: '-2.1s', dur: '3.5s', size: 14 },
];

export const guitarNavbarData = {
  brand: {
    name: 'SoundWave',
    word1: 'Sound',
    word2: 'Wave',
    tagline: 'MUSIC LIVES HERE',
  },
  searchPlaceholder: 'Search...',
  navItems,
  profileMenuItems,
  musicParticles,
  sectionBarRanges,
  soundParticles,
  guitarBodyParticles,
};

export default guitarNavbarData;
