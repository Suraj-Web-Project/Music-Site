import blindingLightsImg from '../../../assets/01_Trending_Now/Blinding_Lights.png';
import chillVibesImg from '../../../assets/05_Made_For_You/Chill_Vibes.png';
import dojaImg from '../../../assets/02_Popular_Artists/Doja_Cat.png';
import weekndImg from '../../../assets/02_Popular_Artists/The_Weeknd.png';
import taylorImg from '../../../assets/02_Popular_Artists/Taylor_Swift.png';
import billieImg from '../../../assets/02_Popular_Artists/Billie_Eilish.png';
import arianaImg from '../../../assets/02_Popular_Artists/Ariana_Grande.png';
import brunoImg from '../../../assets/02_Popular_Artists/Bruno_Mars.png';

export const heroImages = {
  blindingLights: blindingLightsImg,
  chillVibes: chillVibesImg,
  doja: dojaImg,
  weeknd: weekndImg,
  taylor: taylorImg,
  billie: billieImg,
  ariana: arianaImg,
  bruno: brunoImg,
};

export const trendingArtists = [
  { id: 1, name: 'The Weeknd', img: weekndImg, border: 'border-cyan-400/80 shadow-[0_0_8px_rgba(34,211,238,0.5)]' },
  { id: 2, name: 'Taylor Swift', img: taylorImg, border: 'border-amber-400/80 shadow-[0_0_8px_rgba(251,191,36,0.5)]' },
  { id: 3, name: 'Billie Eilish', img: billieImg, border: 'border-purple-400/80 shadow-[0_0_8px_rgba(192,132,252,0.5)]' },
  { id: 4, name: 'Ariana Grande', img: arianaImg, border: 'border-pink-400/80 shadow-[0_0_8px_rgba(244,63,94,0.5)]' },
  { id: 5, name: 'Bruno Mars', img: brunoImg, border: 'border-blue-400/80 shadow-[0_0_8px_rgba(59,130,246,0.5)]' },
];

export const heroStats = [
  { id: 1, target: 50, suffix: 'M+', label: 'Songs Available', duration: 1200 },
  { id: 2, target: 10, suffix: 'M+', label: 'Artists Worldwide', duration: 1400 },
  { id: 3, target: 190, suffix: '+', label: 'Countries Covered', duration: 1600 },
];

export const heroData = {
  archedTitle: {
    prefix: 'Your Music',
    accent: 'Your World',
    symbol: '✦',
  },
  description: {
    line1: 'Discover millions of songs, create your own playlists,',
    line2: 'explore new artists and let the music move you.',
  },
  cta: {
    label: 'Start Listening',
    targetSection: '#trending-now',
  },
  nowPlayingTrack: {
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    image: blindingLightsImg,
    duration: '3:20',
    initialSeconds: 134,
    totalSeconds: 200,
  },
  newArtist: {
    title: 'New Artist',
    subtitle: 'Discover Now',
    image: dojaImg,
    name: 'Doja Cat',
  },
  chillVibes: {
    title: 'Chill Vibes',
    subtitle: 'Playlist',
    image: chillVibesImg,
  },
  trendingArtists,
  stats: heroStats,
  images: heroImages,
};

export default heroData;
