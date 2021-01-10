import { combineReducers, createStore } from 'redux';

import { Song, SELECT_SONG, SelectSongAction } from '../actions';

export interface RootState {
  songs: Song[];
  selectedSong: Song | null;
}

export const initialState: RootState = {
  songs: [
    {
      title: 'A',
      duration: '1:23',
    },
    {
      title: 'ASDF',
      duration: '2:00',
    },
    {
      title: 'Bad',
      duration: '3:30',
    },
  ],
  selectedSong: null,
};

export const songsReducer = (state: RootState = initialState) => {
  state.songs = [...initialState.songs];
  return state.songs;
};

export const selectSongsReducer = (
  state: RootState = initialState,
  action: SelectSongAction
) => {
  switch (action.type) {
    case SELECT_SONG: {
      return action.payload;
    }

    default:
      return state.selectedSong;
  }
};

export const reducers = combineReducers({
  songs: songsReducer,
  selectedSong: selectSongsReducer,
});

export const store = createStore(reducers);
