import { useContext, useState } from 'react'
import { Footer, PlayerMainContainer, SideBar } from '../../components'
import { PlayerPageStyles } from './playerPage.styles'
import { DataMusicContext } from '../../context';
import { useParams } from 'react-router-dom';
import { Track } from '../../types/data';


export const PlayerPage = () => {

  const data = useContext(DataMusicContext);
  const tracks = data?.data?.tracks;

  const idParams = useParams();
  const currentId = parseInt (idParams?.id || "");
  
  {tracks?.map ( ({id, name, artist, url, thumbnail, genre, liked }) => {
    if (currentId === id && data.currentTrack?.id !== id) {
      data.handleCurrentTrack ({id, name, artist, url, thumbnail, genre, liked })

    }

  }
  )}

  return (
    <PlayerPageStyles>
      <SideBar/>
      <PlayerMainContainer/>
      <Footer/>
    </PlayerPageStyles>
  )
}
