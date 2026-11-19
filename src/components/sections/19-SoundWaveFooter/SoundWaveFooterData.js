import avatar1 from '../../../assets/02_Popular_Artists/Bruno_Mars.png';
import avatar2 from '../../../assets/02_Popular_Artists/Taylor_Swift.png';
import avatar3 from '../../../assets/02_Popular_Artists/Ariana_Grande.png';
import avatar4 from '../../../assets/02_Popular_Artists/The_Weeknd.png';

export const communityAvatars = [avatar1, avatar2, avatar3, avatar4];

export const neonPalette = [
  '#FF7A59', // Sunset Orange
  '#EF35ED', // Neon Fuchsia / Pink
  '#8238FF', // Electric Violet
  '#38BDF8', // Sky Cyan
  '#F43F5E', // Rose Neon
  '#FBBF24', // Amber Star
  '#34D399', // Emerald Mint
  '#A855F7', // Bright Purple
];

export const productLinks = [
  { label: 'Explore Music', href: '#explore-music-genres' },
  { label: 'Radio', href: '#new-releases' },
  { label: 'Podcasts', href: '#top-podcasts' },
  { label: 'Live Events', href: '#music-events-concerts' },
  { label: 'Charts', href: '#top-music-charts' },
  { label: 'New Releases', href: '#new-releases' },
];

export const companyLinks = [
  { label: 'About Us', href: '#' },
  { label: 'Careers', href: '#', badge: 'Hiring' },
  { label: 'For Artists', href: '#' },
  { label: 'Press', href: '#' },
  { label: 'Investors', href: '#' },
  { label: 'Contact', href: '#' },
];

export const supportLinks = [
  { label: 'Help Center', href: '#' },
  { label: 'Community', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Cookie Settings', href: '#' },
  { label: 'Report a Problem', href: '#' },
];

export const socialLinks = [
  { name: 'Instagram', href: '#' },
  { name: 'X', href: '#' },
  { name: 'YouTube', href: '#' },
  { name: 'Spotify', href: '#', isSpotify: true },
  { name: 'Discord', href: '#' },
];

export const soundWaveFooterData = {
  brand: {
    word1: 'Sound',
    word2: 'Wave',
    tagline: 'Music Lives Here',
    description:
      'Discover, play, and share a world of music. SoundWave brings millions of songs, artists, and playlists together, so the music never stops moving you.',
  },
  community: {
    label: 'Joined by 50M+ music lovers worldwide',
    avatars: communityAvatars,
  },
  newsletter: {
    title: 'Stay in the Groove',
    subtitle: 'Weekly hand-curated tracks & VIP festival presales.',
    placeholder: 'Enter your email address...',
    buttonText: 'Subscribe',
    subscribedText: 'Subscribed!',
  },
  app: {
    title: 'Get the App',
    subtitle: 'Listen anytime, anywhere.',
    appStoreUrl: '#',
    googlePlayUrl: '#',
  },
  copyright: {
    year: '2026',
    owner: 'SoundWave. All rights reserved.',
    motto: 'Turn Up the Vibes. Always.',
  },
  productLinks,
  companyLinks,
  supportLinks,
  socialLinks,
  neonPalette,
};

export default soundWaveFooterData;
