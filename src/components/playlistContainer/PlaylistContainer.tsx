import { useContext } from 'react';


import { DataMusicContext } from '../../context';
import { CardForPlaylistStyles, PlaylistContainerStyles } from '..';

export const PlaylistContainer = () => {
    const  {playlists}  = useContext(DataMusicContext);
    
    console.log(playlists)

  return (
    <PlaylistContainerStyles>

        aquuoi
        {playlists && playlists?.map(({id, description, name, thumbnail}) => (
            <CardForPlaylistStyles key= {id} description= {description} thumbnail= {thumbnail} name= {name}/>)
        )}
    </PlaylistContainerStyles>
  )
}
