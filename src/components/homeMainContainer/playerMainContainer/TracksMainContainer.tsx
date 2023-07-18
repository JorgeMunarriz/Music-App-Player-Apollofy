
import { useContext } from 'react';
import { DataMusicContext } from '../../../context';
import { PlaylistContainerStyles } from '../..';
import { CardForPlaylistPlayer } from '../../cardForPlaylistPlayer/CardForPlaylistPlayer';


export const TracksMainContainer = () => {
 const data = useContext(DataMusicContext);
 const playlist = data?.data?.playlists;

  return (
    <PlaylistContainerStyles  >
      {
        playlist && playlist.map(({id, isFollowed, name, description, thumbnail}) => (
          <CardForPlaylistPlayer id={id} isFollowed={isFollowed} name={name} description={description} thumbnail={thumbnail} />
        ))
      }
    </PlaylistContainerStyles>
  )
}
