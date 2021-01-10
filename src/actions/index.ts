export interface Song {
  title: string;
  duration: string;
}

export const SELECT_SONG = 'SELECT_SONG';

export interface SelectSongAction {
  type: typeof SELECT_SONG;
  payload: Song;
}

export const SelectSong = (song: Song): SelectSongAction => {
  return {
    type: SELECT_SONG,
    payload: song,
  };
};
