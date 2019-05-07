import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Nevermind', duration: '4:05' },
    { title: 'Hells Bells', duration: '2:30' },
    { title: 'The Trooper', duration: '3:15' },
    { title: 'Holy Diver', duration: '1:45' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});