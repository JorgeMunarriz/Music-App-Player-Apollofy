import { Link } from "react-router-dom";
import styled from 'styled-components';
import { DataMusicContext } from "../../../context/";
import { useContext } from "react";
import { breakpoints } from "../../../styles/breakpoints";


export const PlaylistSectionContainer = () => {
  const data = useContext(DataMusicContext);
  const playlists = data?.playlists;
  const albums = data?.albums;
  return (
    <PlaylistSectionContainerStyles className="desktop-class">
      {/* <h2>Playlists:</h2> */}
      {/* {playlists?.map((playlist) => (
        <div key={playlist.id}>
          <h3>{playlist.name}</h3>
          <p>{playlist.description}</p>
        </div>
      ))} */}
    </PlaylistSectionContainerStyles>
  );
};


export const PlaylistSectionContainerStyles = styled.div`
    display: flex;
    flex-direction: column;
    /* font-size: 2rem; */

  & a {
    width: 100%;
    padding: 10px;
    color: rgba(255, 255, 255, 1);
    cursor: pointer;
}
& a:hover {
    border-radius: 6px;
    background: #282828;
    padding: 10px;
    color: rgba(255, 255, 255, 1);
}
`;