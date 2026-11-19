export const moodsList = [
  { id: 'happy', name: 'Happy', emoji: '😊', color: '#f59e0b', tag: 'Feel Good Anthems' },
  { id: 'chill', name: 'Chill', emoji: '☕', color: '#10b981', tag: 'Low-fi & Ambient' },
  { id: 'energetic', name: 'Energetic', emoji: '⚡', color: '#ef4444', tag: 'High-Tempo Workout' },
  { id: 'sad', name: 'Sad', emoji: '🌧️', color: '#6366f1', tag: 'Melancholy Strings' },
  { id: 'romantic', name: 'Romantic', emoji: '💖', color: '#ec4899', tag: 'Slow Dance Ballads' },
  { id: 'focus', name: 'Focus', emoji: '🎯', color: '#8b5cf6', tag: 'Deep Concentration' },
  { id: 'party', name: 'Party', emoji: '🎉', color: '#f97316', tag: 'Club & Dance Beats' },
  { id: 'sleepy', name: 'Sleepy', emoji: '🌙', color: '#06b6d4', tag: 'Dream Soundscapes' },
];

export const moodBasedPlaylistsData = {
  titlePrefix: 'Mood-Based',
  titleAccent: 'Playlists',
  subtitle: 'Soundtracks perfectly tuned to match how you feel right now',
  defaultMood: 'Happy',
  moods: moodsList,
};

export default moodBasedPlaylistsData;
