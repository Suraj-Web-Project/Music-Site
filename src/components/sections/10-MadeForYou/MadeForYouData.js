import chillVibesImg from '../../../assets/05_Made_For_You/Chill_Vibes.png';
import workoutMixImg from '../../../assets/05_Made_For_You/Workout_Mix.png';
import focusBeatsImg from '../../../assets/05_Made_For_You/Focus_Beats.png';
import partyHitsImg from '../../../assets/05_Made_For_You/Party_Hits.png';
import sadSongsImg from '../../../assets/05_Made_For_You/Sad_Songs.png';
import romanticMixImg from '../../../assets/05_Made_For_You/Romantic_Mix.png';

export const playlistImages = {
  chillVibes: chillVibesImg,
  workoutMix: workoutMixImg,
  focusBeats: focusBeatsImg,
  partyHits: partyHitsImg,
  sadSongs: sadSongsImg,
  romanticMix: romanticMixImg,
};

export const madeForYouPlaylists = [
  { id: 'p1', title: 'Chill Vibes', subtitle: 'Relax and unwind', image: chillVibesImg },
  { id: 'p2', title: 'Workout Mix', subtitle: 'Keep going', image: workoutMixImg },
  { id: 'p3', title: 'Focus Beats', subtitle: 'Stay productive', image: focusBeatsImg },
  { id: 'p4', title: 'Party Hits', subtitle: 'Feel the energy', image: partyHitsImg },
  { id: 'p5', title: 'Sad Songs', subtitle: 'For the feels', image: sadSongsImg },
  { id: 'p6', title: 'Romantic Mix', subtitle: 'Love is in the air', image: romanticMixImg },
];

export const madeForYouData = {
  titlePrefix: 'Made for',
  titleAccent: 'You',
  subtitle: 'Personalized playlists based on your listening habits.',
  playlists: madeForYouPlaylists,
};

export default madeForYouData;
