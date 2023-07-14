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
    <PlaylistSectionContainerStyles>
        <Link to="" ><i className="bi bi-house-door-fill"></i>Prueba play 1 {}</Link>
        <Link to="" >Prueba play 2</Link>
        <Link to="" >Prueba play 3</Link>
        <h2>Playlists:</h2>
      {playlists?.map((playlist) => (
        <div key={playlist.id}>
          <h3>{playlist.name}</h3>
          <p>{playlist.description}</p>
        </div>
      ))}
    </PlaylistSectionContainerStyles>
  );
};
