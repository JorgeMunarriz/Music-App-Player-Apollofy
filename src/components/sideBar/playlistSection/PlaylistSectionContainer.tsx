import { Link } from "react-router-dom";
import { PlaylistSectionContainerStyles } from "./playlistSectionContainer.styles";
import { DataMusicContext } from "../../../context/";
import { useContext } from "react";


export const PlaylistSectionContainer = () => {
  const  data  = useContext(DataMusicContext);
  const playlists  = data?.playlists;
  const albums = data?.albums;
  console.log(playlists)
  console.log(albums)
  return (
    <PlaylistSectionContainerStyles className="desktop-class">
        <h2>Playlists:</h2>
      {/* {playlists?.map((playlist) => (
        <div key={playlist.id}>
          <h3>{playlist.name}</h3>
          <p>{playlist.description}</p>
        </div>
      ))} */}
    </PlaylistSectionContainerStyles>
  );
};
