import { useContext, useEffect} from 'react'
import { Footer, PlayerMainContainer, SideBar } from '../../components'
import { PlayerPageStyles } from './playerPage.styles'
import { DataMusicContext } from '../../context';
import { useParams } from 'react-router-dom';



export const PlayerPage = () => {
  const data = useContext(DataMusicContext);
  const tracks = data?.data?.tracks;

  const idParams = useParams();
  const currentId = parseInt(idParams?.id || "");

  useEffect(() => {
    const updateCurrentTrack = () => {
      tracks?.forEach(({ id, name, artist, url, thumbnail, genre, liked }) => {
        if (currentId === id && data.currentTrack?.id !== id) {
          data.handleCurrentTrack({ id, name, artist, url, thumbnail, genre, liked });
        }
      });
    };

    updateCurrentTrack();
  }, [currentId, tracks, data]);

  return (
    <PlayerPageStyles>
      <SideBar />
      <PlayerMainContainer />
      <Footer />
    </PlayerPageStyles>
  );
};

