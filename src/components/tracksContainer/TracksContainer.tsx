import { useContext } from "react";
import { DataMusicContext } from "../../context";
import { TracksContainerStyles } from "./tracksContainer.Styles";
import { CardForTrack } from "..";

export const TracksContainer = () => {
  const data = useContext(DataMusicContext);
  const tracks = data?.data?.tracks

  return (
    <TracksContainerStyles>
      {tracks &&
        tracks.map(({ id, thumbnail, name, genre, artist, url, liked }) => (
          <CardForTrack thumbnail={thumbnail} name={name} key={id} genre={genre} id={id} artist={artist} url={url} liked={liked} />
        ))}
    </TracksContainerStyles>
  );
};
