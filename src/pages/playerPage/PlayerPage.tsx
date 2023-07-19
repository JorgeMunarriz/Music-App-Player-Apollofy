<<<<<<< HEAD
import { useContext, useEffect} from 'react'
import { Footer, PlayerMainContainer, SideBar } from '../../components'
import { PlayerPageStyles } from './playerPage.styles'
import { DataMusicContext } from '../../context';
import { useParams } from 'react-router-dom';


=======
import { useContext, useEffect } from "react";
import { PlayerMainContainer, SideBar } from "../../components";
import { PlayerPageStyles } from "./playerPage.styles";
import { DataMusicContext } from "../../context";
import { useParams } from "react-router-dom";
>>>>>>> 7e735f44b1f4419f181a26e6cfae63f63fc7c412

export const PlayerPage = () => {
  const data = useContext(DataMusicContext);
  const tracks = data?.data?.tracks;

  const idParams = useParams();
  const currentId = parseInt(idParams?.id || "");

  useEffect(() => {
<<<<<<< HEAD
    const updateCurrentTrack = () => {
      tracks?.forEach(({ id, name, artist, url, thumbnail, genre, liked }) => {
        if (currentId === id && data.currentTrack?.id !== id) {
          data.handleCurrentTrack({ id, name, artist, url, thumbnail, genre, liked });
        }
      });
    };

    updateCurrentTrack();
  }, [currentId, tracks, data]);
=======
    const trackToUpdate = tracks?.find(({ id }) => id === currentId);
    if (trackToUpdate && data.currentTrack?.id !== currentId) {
      data.handleCurrentTrack(trackToUpdate);
    }
  }, [currentId, data, tracks]);
>>>>>>> 7e735f44b1f4419f181a26e6cfae63f63fc7c412

  return (
    <PlayerPageStyles>
      <SideBar />
      <PlayerMainContainer />
<<<<<<< HEAD
      <Footer />
    </PlayerPageStyles>
  );
};

=======
    </PlayerPageStyles>
  );
};
>>>>>>> 7e735f44b1f4419f181a26e6cfae63f63fc7c412
