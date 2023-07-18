
import { useContext } from 'react';
import { DataMusicContext } from '../../context';

import { CardForPlaylistPlayer } from '../cardForPlaylistPlayer/CardForPlaylistPlayer';
import { CardForPlaylistPlayerStyles } from '../cardForPlaylistPlayer/cardForPlaylistPlayer.styles';


export const PlayListMainContainer = () => {
 const data = useContext(DataMusicContext);
 const playlist = data?.playlists;
  
  return (
    <CardForPlaylistPlayerStyles  >

      {
        playlist && playlist.map(({id, isFollowed, name, description, thumbnail}) => (
          <CardForPlaylistPlayer id={id} isFollowed={isFollowed} name={name} description={description} thumbnail={thumbnail} />
        ))
      }

    
    </CardForPlaylistPlayerStyles>
  )
}
