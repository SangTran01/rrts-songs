import React from 'react';
import { RootState } from './reducers';
import { connect } from 'react-redux';
import { Song, SelectSong, SelectSongAction } from './actions';
import { Dispatch } from 'redux';
import SongList from './components/SongList/SongList.component';
import SongDetail from './components/SongDetail/SongDetail.component';

interface ActionProps {
  songs: Song[];
  selectedSong: Song | null;
}

interface ActionDispatchProps {
  SelectSong: (song: Song) => void;
}

type CombinedProps = ActionProps & ActionDispatchProps;

const App: React.FC<CombinedProps> = (props) => {
  return (
    <div>
      <SongList songs={props.songs} selectSong={props.SelectSong} />
      <SongDetail selectedSong={props.selectedSong} />
    </div>
  );
};

const mapStateToProps = (state: RootState): ActionProps => {
  console.log(state);
  return {
    songs: state.songs,
    selectedSong: state.selectedSong,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): ActionDispatchProps => {
  return {
    SelectSong: (song: Song) => dispatch<SelectSongAction>(SelectSong(song)),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(App);
