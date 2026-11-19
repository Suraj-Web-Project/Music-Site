import theWeekndArtistImg from '../../../assets/02_Popular_Artists/The_Weeknd.png';
import taylorSwiftArtistImg from '../../../assets/02_Popular_Artists/Taylor_Swift.png';
import billieEilishArtistImg from '../../../assets/02_Popular_Artists/Billie_Eilish.png';
import edSheeranArtistImg from '../../../assets/02_Popular_Artists/Ed_Sheeran.png';
import arianaGrandeArtistImg from '../../../assets/02_Popular_Artists/Ariana_Grande.png';
import brunoMarsArtistImg from '../../../assets/02_Popular_Artists/Bruno_Mars.png';
import drakeArtistImg from '../../../assets/02_Popular_Artists/Drake.png';
import dojaCatArtistImg from '../../../assets/02_Popular_Artists/Doja_Cat.png';

export const artistImages = {
  theWeeknd: theWeekndArtistImg,
  taylorSwift: taylorSwiftArtistImg,
  billieEilish: billieEilishArtistImg,
  edSheeran: edSheeranArtistImg,
  arianaGrande: arianaGrandeArtistImg,
  brunoMars: brunoMarsArtistImg,
  drake: drakeArtistImg,
  dojaCat: dojaCatArtistImg,
};

export const popularArtists = [
  { id: 'a1', name: 'The Weeknd', followers: '25M Followers', image: theWeekndArtistImg },
  { id: 'a2', name: 'Taylor Swift', followers: '32M Followers', image: taylorSwiftArtistImg },
  { id: 'a3', name: 'Billie Eilish', followers: '28M Followers', image: billieEilishArtistImg },
  { id: 'a4', name: 'Ed Sheeran', followers: '30M Followers', image: edSheeranArtistImg },
  { id: 'a5', name: 'Ariana Grande', followers: '27M Followers', image: arianaGrandeArtistImg },
  { id: 'a6', name: 'Bruno Mars', followers: '26M Followers', image: brunoMarsArtistImg },
  { id: 'a7', name: 'Drake', followers: '24M Followers', image: drakeArtistImg },
  { id: 'a8', name: 'Doja Cat', followers: '22M Followers', image: dojaCatArtistImg },
];

export const wheelGeometry = {
  CX: 811.0,
  CY: 443.0,
  R_IN: 149.0,
  R_HOLE: 77.0,
  R_BEVEL: 363.0,
  R_OUTER: 379.0,
};

export const puzzlePieces = [
  {
    index: 0,
    color: '#8921cc',
    ax: 811.0,
    ay: 190.0,
    textAbove: false,
    d: 'M 753.98 305.34 A 149.0 149.0 0 0 1 868.02 305.34 L 899.21 230.04 A 9.5 9.5 0 0 0 907.42 225.27 A 21.0 21.0 0 1 1 920.20 194.42 A 9.5 9.5 0 0 0 917.77 185.24 L 948.96 109.94 A 360.5 360.5 0 0 0 673.04 109.94 L 704.23 185.24 A 9.5 9.5 0 0 1 712.45 190.01 A 21.0 21.0 0 1 0 725.22 220.86 A 9.5 9.5 0 0 1 722.79 230.04 L 753.98 305.34 Z',
  },
  {
    index: 1,
    color: '#f82c81',
    ax: 991.0,
    ay: 263.0,
    textAbove: false,
    d: 'M 868.02 305.34 A 149.0 149.0 0 0 1 948.66 385.98 L 1023.96 354.79 A 9.5 9.5 0 0 0 1033.14 357.22 A 21.0 21.0 0 1 1 1063.99 344.45 A 9.5 9.5 0 0 0 1068.76 336.23 L 1144.06 305.04 A 360.5 360.5 0 0 0 948.96 109.94 L 917.77 185.24 A 9.5 9.5 0 0 1 920.20 194.42 A 21.0 21.0 0 1 0 907.42 225.27 A 9.5 9.5 0 0 1 899.21 230.04 L 868.02 305.34 Z',
  },
  {
    index: 2,
    color: '#ff7604',
    ax: 1066.0,
    ay: 443.0,
    textAbove: false,
    d: 'M 948.66 385.98 A 149.0 149.0 0 0 1 948.66 500.02 L 1023.96 531.21 A 9.5 9.5 0 0 0 1028.73 539.42 A 21.0 21.0 0 1 1 1059.58 552.20 A 9.5 9.5 0 0 0 1068.76 549.77 L 1144.06 580.96 A 360.5 360.5 0 0 0 1144.06 305.04 L 1068.76 336.23 A 9.5 9.5 0 0 1 1063.99 344.45 A 21.0 21.0 0 1 0 1033.14 357.22 A 9.5 9.5 0 0 1 1023.96 354.79 L 948.66 385.98 Z',
  },
  {
    index: 3,
    color: '#fec804',
    ax: 991.0,
    ay: 623.0,
    textAbove: true,
    d: 'M 948.66 500.02 A 149.0 149.0 0 0 1 868.02 580.66 L 899.21 655.96 A 9.5 9.5 0 0 0 896.78 665.14 A 21.0 21.0 0 1 1 909.55 695.99 A 9.5 9.5 0 0 0 917.77 700.76 L 948.96 776.06 A 360.5 360.5 0 0 0 1144.06 580.96 L 1068.76 549.77 A 9.5 9.5 0 0 1 1059.58 552.20 A 21.0 21.0 0 1 0 1028.73 539.42 A 9.5 9.5 0 0 1 1023.96 531.21 L 948.66 500.02 Z',
  },
  {
    index: 4,
    color: '#48cb03',
    ax: 811.0,
    ay: 696.0,
    textAbove: true,
    d: 'M 868.02 580.66 A 149.0 149.0 0 0 1 753.98 580.66 L 722.79 655.96 A 9.5 9.5 0 0 0 714.58 660.73 A 21.0 21.0 0 1 1 701.80 691.58 A 9.5 9.5 0 0 0 704.23 700.76 L 673.04 776.06 A 360.5 360.5 0 0 0 948.96 776.06 L 917.77 700.76 A 9.5 9.5 0 0 1 909.55 695.99 A 21.0 21.0 0 1 0 896.78 665.14 A 9.5 9.5 0 0 1 899.21 655.96 L 868.02 580.66 Z',
  },
  {
    index: 5,
    color: '#03bead',
    ax: 631.0,
    ay: 623.0,
    textAbove: true,
    d: 'M 753.98 580.66 A 149.0 149.0 0 0 1 673.34 500.02 L 598.04 531.21 A 9.5 9.5 0 0 0 588.86 528.78 A 21.0 21.0 0 1 1 558.01 541.55 A 9.5 9.5 0 0 0 553.24 549.77 L 477.94 580.96 A 360.5 360.5 0 0 0 673.04 776.06 L 704.23 700.76 A 9.5 9.5 0 0 1 701.80 691.58 A 21.0 21.0 0 1 0 714.58 660.73 A 9.5 9.5 0 0 1 722.79 655.96 L 753.98 580.66 Z',
  },
  {
    index: 6,
    color: '#0087f7',
    ax: 556.0,
    ay: 443.0,
    textAbove: true,
    d: 'M 673.34 500.02 A 149.0 149.0 0 0 1 673.34 385.98 L 598.04 354.79 A 9.5 9.5 0 0 0 593.27 346.58 A 21.0 21.0 0 1 1 562.42 333.80 A 9.5 9.5 0 0 0 553.24 336.23 L 477.94 305.04 A 360.5 360.5 0 0 0 477.94 580.96 L 553.24 549.77 A 9.5 9.5 0 0 1 558.01 541.55 A 21.0 21.0 0 1 0 588.86 528.78 A 9.5 9.5 0 0 1 598.04 531.21 L 673.34 500.02 Z',
  },
  {
    index: 7,
    color: '#005de0',
    ax: 631.0,
    ay: 263.0,
    textAbove: false,
    d: 'M 673.34 385.98 A 149.0 149.0 0 0 1 753.98 305.34 L 722.79 230.04 A 9.5 9.5 0 0 0 725.22 220.86 A 21.0 21.0 0 1 1 712.45 190.01 A 9.5 9.5 0 0 0 704.23 185.24 L 673.04 109.94 A 360.5 360.5 0 0 0 477.94 305.04 L 553.24 336.23 A 9.5 9.5 0 0 1 562.42 333.80 A 21.0 21.0 0 1 0 593.27 346.58 A 9.5 9.5 0 0 1 598.04 354.79 L 673.34 385.98 Z',
  },
];

export const popularArtistsData = {
  titlePrefix: 'Popular',
  titleAccent: 'Artists',
  subtitle: "The world's most streamed voices, charted by weekly listener engagement.",
  artists: popularArtists,
  puzzlePieces,
  wheelGeometry,
};

export default popularArtistsData;
