import midnightsImg from '../../../assets/04_Featured_Albums/Midnights.png';
import starboyImg from '../../../assets/04_Featured_Albums/Starboy.png';
import harrysHouseImg from '../../../assets/04_Featured_Albums/Harrys_House.png';
import sosImg from '../../../assets/04_Featured_Albums/SOS.png';
import utopiaImg from '../../../assets/04_Featured_Albums/UTOPIA.png';
import gutsImg from '../../../assets/04_Featured_Albums/GUTS.png';

export const albumImages = {
  midnights: midnightsImg,
  starboy: starboyImg,
  harrysHouse: harrysHouseImg,
  sos: sosImg,
  utopia: utopiaImg,
  guts: gutsImg,
};

export const featuredAlbums = [
  { id: 'al1', title: 'Midnights', artist: 'Taylor Swift', details: 'Album • 13 songs', image: midnightsImg },
  { id: 'al2', title: 'Starboy', artist: 'The Weeknd', details: 'Album • 18 songs', image: starboyImg },
  { id: 'al3', title: "Harry's House", artist: 'Harry Styles', details: 'Album • 13 songs', image: harrysHouseImg },
  { id: 'al4', title: 'SOS', artist: 'SZA', details: 'Album • 23 songs', image: sosImg },
  { id: 'al5', title: 'UTOPIA', artist: 'Travis Scott', details: 'Album • 19 songs', image: utopiaImg },
  { id: 'al6', title: 'GUTS', artist: 'Olivia Rodrigo', details: 'Album • 12 songs', image: gutsImg },
];

export const featuredAlbumsData = {
  titlePrefix: 'Featured',
  titleAccent: 'Albums',
  subtitle: 'Dive into the latest albums from your favorite artists.',
  albums: featuredAlbums,
};

export default featuredAlbumsData;
