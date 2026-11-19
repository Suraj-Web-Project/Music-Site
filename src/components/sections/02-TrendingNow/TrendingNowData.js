import blindingLightsImg from '../../../assets/01_Trending_Now/Blinding_Lights.png';
import calmDownImg from '../../../assets/01_Trending_Now/Calm_Down.png';
import cruelSummerImg from '../../../assets/01_Trending_Now/Cruel_Summer.png';
import asItWasImg from '../../../assets/01_Trending_Now/As_It_Was.png';
import laVieEnRoseImg from '../../../assets/01_Trending_Now/La_Vie_En_Rose.png';
import heatWavesImg from '../../../assets/01_Trending_Now/Heat_Waves.png';

export const trendingImages = {
  blindingLights: blindingLightsImg,
  calmDown: calmDownImg,
  cruelSummer: cruelSummerImg,
  asItWas: asItWasImg,
  laVieEnRose: laVieEnRoseImg,
  heatWaves: heatWavesImg,
};

export const trendingSongs = [
  { id: 't1', title: 'Blinding Lights', artist: 'The Weeknd', image: blindingLightsImg, duration: '3:20', plays: '3.8M' },
  { id: 't2', title: 'Calm Down', artist: 'Rema, Selena Gomez', image: calmDownImg, duration: '3:59', plays: '2.9M' },
  { id: 't3', title: 'Cruel Summer', artist: 'Taylor Swift', image: cruelSummerImg, duration: '2:58', plays: '4.2M' },
  { id: 't4', title: 'As It Was', artist: 'Harry Styles', image: asItWasImg, duration: '2:47', plays: '3.1M' },
  { id: 't5', title: 'La Vie En Rose', artist: 'Édith Piaf', image: laVieEnRoseImg, duration: '3:05', plays: '1.8M' },
  { id: 't6', title: 'Heat Waves', artist: 'Glass Animals', image: heatWavesImg, duration: '3:58', plays: '2.7M' },
];

export const trendingNowData = {
  titlePrefix: 'Trending',
  titleAccent: 'Now',
  subtitle: "Global top 50 hits updated every hour with live listener metrics.",
  tracks: trendingSongs,
};

export default trendingNowData;
