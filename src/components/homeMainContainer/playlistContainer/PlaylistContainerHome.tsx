import { useContext } from "react";
import { DataMusicContext } from "../../../context";
import { PlaylistContainerStyles } from "../..";

export const PlaylistContainerHome = () => {
  const data = useContext(DataMusicContext);
  const playlists = data?.data?.playlists;

  return (
    <PlaylistContainerStyles>
      {/* {playlists &&
        playlists.map(({ id, thumbnail, name, description }) => (
          <CardForX  thumbnail={thumbnail} name={name} key={id} description={description} id={id} isFollowed={false} publicAccessible={true} primaryColor={""} />
        ))} */}
    </PlaylistContainerStyles>
  );
};
