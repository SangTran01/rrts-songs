import React from 'react';
import { Song } from '../../actions';

interface Props {
  songs: Song[];
  selectSong: (song: Song) => void;
}

const SongList: React.FC<Props> = ({ songs, selectSong }) => {
  return (
    <div>
      {songs.map((song, idx) => {
        return (
          <div key={idx}>
            <p>{song.title}</p>
            <p>{song.duration}</p>
            <button onClick={() => selectSong(song)}>Click Me</button>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default SongList;
