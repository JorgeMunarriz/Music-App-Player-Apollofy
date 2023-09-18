import { useContext, useEffect } from "react";
import { Footer, PlayerMainContainer, SideBar } from "../../components";
import { DataMusicContext, useUserMusicContext } from "../../context";
import { useParams } from "react-router-dom";
import { GlobalPrivatePageStyles } from "../../global";
import { useQueuePlayerContext } from "../../context/QueuePlayerContext";


const PlayerPage = () => {

  const idParams = useParams();
  const currentId = idParams?.id || "";

  const { tracks } = useUserMusicContext();
  const { currentTrack, handleCurrentTrack } = useQueuePlayerContext();


  // useEffect(() => {
  //   const trackToUpdate = tracks?.find(({ id }) => id === currentId);

  //   if (trackToUpdate && data.currentTrack?.id !== currentId) { //TOFIX aquí hacía llamada al current track y ahora lo habría que rehacer en un state de un nuevo context?

  //     data.handleCurrentTrack(trackToUpdate);
  //   }
  // }, [currentId, tracks]);

  return (
    // <GlobalPrivatePageStyles>

    <PlayerMainContainer />

    // </GlobalPrivatePageStyles>
  );
};

export default PlayerPage