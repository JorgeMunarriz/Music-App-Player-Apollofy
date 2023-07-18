import { useContext, useEffect } from "react";
import { PlayerMainContainer, SideBar } from "../../components";
import { PlayerPageStyles } from "./playerPage.styles";
import { DataMusicContext } from "../../context";
import { useParams } from "react-router-dom";

export const PlayerPage = () => {
  const data = useContext(DataMusicContext);
  const tracks = data?.data?.tracks;

  const idParams = useParams();
  const currentId = parseInt(idParams?.id || "");

  useEffect(() => {
    const trackToUpdate = tracks?.find(({ id }) => id === currentId);
    if (trackToUpdate && data.currentTrack?.id !== currentId) {
      data.handleCurrentTrack(trackToUpdate);
    }
  }, [currentId, data, tracks]);

  return (
    <PlayerPageStyles>
      <SideBar />
      <PlayerMainContainer />
    </PlayerPageStyles>
  );
};
