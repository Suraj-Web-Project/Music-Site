import headphonesStageImg from '../../../assets/06_Explore_Genres/parts/headphones_stage.png';
import equalizerWaveformImg from '../../../assets/06_Explore_Genres/parts/equalizer_waveform.png';
import notePurpleImg from '../../../assets/06_Explore_Genres/parts/note_purple.png';
import notePinkImg from '../../../assets/06_Explore_Genres/parts/note_pink.png';
import neonRingImg from '../../../assets/06_Explore_Genres/parts/neon_ring.png';
import glowOrbImg from '../../../assets/06_Explore_Genres/parts/glow_orb.png';
import badgePillImg from '../../../assets/06_Explore_Genres/parts/badge_pill.png';
import swooshUnderlineImg from '../../../assets/06_Explore_Genres/parts/swoosh_underline.png';
import btnViewAllImg from '../../../assets/06_Explore_Genres/parts/btn_view_all.png';

// Cleaned Pill Parts
import pillPopImg from '../../../assets/06_Explore_Genres/parts/pill_pop.png';
import pillRockImg from '../../../assets/06_Explore_Genres/parts/pill_rock.png';
import pillHiphopImg from '../../../assets/06_Explore_Genres/parts/pill_hiphop.png';
import pillClassicalImg from '../../../assets/06_Explore_Genres/parts/pill_classical.png';
import pillEdmImg from '../../../assets/06_Explore_Genres/parts/pill_edm.png';
import pillLofiImg from '../../../assets/06_Explore_Genres/parts/pill_lofi.png';
import pillJazzImg from '../../../assets/06_Explore_Genres/parts/pill_jazz.png';
import pillDevotionalImg from '../../../assets/06_Explore_Genres/parts/pill_devotional.png';

// Background Decorative Waves
import waveRibbonLeftImg from '../../../assets/06_Explore_Genres/parts/wave_ribbon_left.png';
import waveHillsCenterImg from '../../../assets/06_Explore_Genres/parts/wave_hills_center.png';
import cardBaseBgImg from '../../../assets/06_Explore_Genres/parts/card_base_bg.png';
import dottedGridImg from '../../../assets/06_Explore_Genres/parts/dotted_equalizer_grid.png';

export const genreAssets = {
  headphonesStageImg,
  equalizerWaveformImg,
  notePurpleImg,
  notePinkImg,
  neonRingImg,
  glowOrbImg,
  badgePillImg,
  swooshUnderlineImg,
  btnViewAllImg,
  waveRibbonLeftImg,
  waveHillsCenterImg,
  cardBaseBgImg,
  dottedGridImg,
};

export const genres = [
  { id: 'pop', name: 'Pop', img: pillPopImg },
  { id: 'rock', name: 'Rock', img: pillRockImg },
  { id: 'hip-hop', name: 'Hip-Hop', img: pillHiphopImg },
  { id: 'classical', name: 'Classical', img: pillClassicalImg },
  { id: 'edm', name: 'EDM', img: pillEdmImg },
  { id: 'lo-fi', name: 'Lo-Fi', img: pillLofiImg },
  { id: 'jazz', name: 'Jazz', img: pillJazzImg },
  { id: 'devotional', name: 'Devotional', img: pillDevotionalImg },
];

export const exploreMusicGenresData = {
  badge: 'GENRES',
  titlePrefix: 'Explore Music',
  titleAccent: 'Genres',
  subtitle: 'Find your rhythm through thousands of hand-crafted styles and genres.',
  genres,
  assets: genreAssets,
};

export default exploreMusicGenresData;
