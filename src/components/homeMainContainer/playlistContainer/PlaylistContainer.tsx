import { useContext } from "react";
import { DataMusicContext } from "../../../context";
import { CardForPlaylist, PlaylistContainerStyles } from "../..";

export const PlaylistContainer = () => {
  const data = useContext(DataMusicContext);
  const playlists = data?.playlists;

  return (
    <PlaylistContainerStyles>
      {playlists &&
        playlists.map(({ id, thumbnail, name, description }) => (
          <CardForPlaylist thumbnail={thumbnail} name={name} key={id} description={description} id={id} isFollowed={false} publicAccessible={true} primaryColor={""} />
        ))}
    </PlaylistContainerStyles>
  );
};
