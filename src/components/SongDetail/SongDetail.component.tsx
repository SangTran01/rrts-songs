import React from 'react';
import { Song } from '../../actions';

interface Props {
  selectedSong: Song | null;
}

const SongDetail: React.FC<Props> = ({ selectedSong }) => {
  if (selectedSong != null) {
    return (
      <div>
        <p>Selected Song</p>
        <p>{`Title ${selectedSong?.title}`}</p>
        <p>{`Duration ${selectedSong?.duration}`}</p>
      </div>
    );
  }
  return <div></div>;
};

export default SongDetail;
