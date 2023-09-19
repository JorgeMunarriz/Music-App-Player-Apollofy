import { Suspense, LazyExoticComponent, ComponentType, lazy, useState } from "react";
import styled from "styled-components";
import { SearchBar } from "..";
import LoaderPlaylist from "../../assets/skeleton/skeleton";
import { useSearchParams } from "react-router-dom";
import { breakpoints } from "../../styles/breakpoints";
import { useUserMusicContext } from "../../context/UserMusicContext";
import TracksForLibrary from "./cards/TracksForLibrary";
import PlaylistForLibrary from "./cards/PlaylistForLibrary";
import AlbumForLibrary from "./cards/AlbumForLibrary";

const LazyCards: LazyExoticComponent<ComponentType<any>> = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(import("../cards/CardForPlaylistPlayer"));
    }, 1500);
  });
});

// interface TrackProps {
//   id: string;
//   trackName: string;
//   trackUrl: string;
//   trackImage: string;
//   trackCreatedAt: string;
//   playlistId: string[];
//   trackLikedBy: string[];
//   albumId: string[];
//   artistId: string[];
//   genreId: string[]
// }

//TOFIX: ya renderiza. Queda ver que contenido vamos a meter... si hace falta modificar el back para traer artistas, etc...
//quedan las props preparadas como copia y pega del context. Igual hay que traerse mas info desde el back para los context. Ej: En playlist se muestra el nombre y el userId
//sería mejor traerse del back el userName para mostrar quien ha creado la playlist, etc.

export const PlaylistMainContainer = () => {
  const { playlistsCreated, playlistsLiked, albums, tracks } = useUserMusicContext();
  const { handleUserPlaylistsCreated, handleUserPlaylistsLiked, handleUserAlbums, handleUserTracks } = useUserMusicContext();


  const [zoneSelected, setZoneSelected] = useState("playlists");

  const handleChangeZoneSelected = (selection: string) => {
    setZoneSelected(selection);
  };

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const handleChangeParams = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({ q: target.value });
  };

  return (
    <>
      <PlaylistMainContainerStyles>
        <SearchBar setSearchParams={undefined} searchParams={undefined} handleChangeParams={undefined} query={undefined} />

        <section className="zone-selector">
          <span className={`selections ${zoneSelected === "playlists" ? "selection-active" : ""}`} onClick={() => handleChangeZoneSelected("playlists")}>
            Playlists
          </span>
          <span className={`selections ${zoneSelected === "myPlaylists" ? "selection-active" : ""}`} onClick={() => handleChangeZoneSelected("myPlaylists")}>
            My Playlists
          </span>
          <span className={`selections ${zoneSelected === "albums" ? "selection-active" : ""}`} onClick={() => handleChangeZoneSelected("albums")}>
            Albums
          </span>
          <span className={`selections ${zoneSelected === "tracks" ? "selection-active" : ""}`} onClick={() => handleChangeZoneSelected("tracks")}>
            Tracks
          </span>
        </section>
        <section className="zone-cards">
          {zoneSelected === "playlists" &&
            playlistsLiked &&
            playlistsLiked.map(({ id, playlistName, playlistImage, playlistCreatedById, trackId, genre }) => (
              <PlaylistForLibrary key={id} id={id} playlistName={playlistName} playlistImage={playlistImage} playlistCreatedById={playlistCreatedById} trackId={trackId} genre={genre} />
            ))}

          {zoneSelected === "myPlaylists" &&
            playlistsCreated &&
            playlistsCreated.map(({ id, playlistName, playlistImage, playlistCreatedById, trackId, genre }) => (
              <PlaylistForLibrary key={id} id={id} playlistName={playlistName} playlistImage={playlistImage} playlistCreatedById={playlistCreatedById} trackId={trackId} genre={genre} />
            ))}

          {zoneSelected === "albums" &&
            albums &&
            albums.map(({ id, albumName, albumImage, albumCreatedAt, artistId, trackId }) => (
              <AlbumForLibrary key={id} id={id} albumName={albumName} albumImage={albumImage} albumCreatedAt={albumCreatedAt} artistId={artistId} trackId={trackId} />
            ))}

          {zoneSelected === "tracks" &&
            tracks &&
            tracks.map(({ id, trackName, trackUrl, trackImage, trackCreatedAt }) => (
              <TracksForLibrary key={id} id={id} trackName={trackName} trackUrl={trackUrl} trackImage={trackImage} trackCreatedAt={trackCreatedAt} />
            ))}
        </section>

        {/* 
        {playlist &&
          playlist.map(({ id, isFollowed, name, description, thumbnail }) => (
            <Suspense key={id} fallback={<LoaderPlaylist />}>
              <LazyCards key={id} id={id} isFollowed={isFollowed} name={name} description={description} thumbnail={thumbnail} />
            </Suspense>
          ))} */}
      </PlaylistMainContainerStyles>
    </>
  );
};

export const PlaylistMainContainerStyles = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
  width: 100%;

  background: linear-gradient(#340034, #000);
  border-radius: 0.25rem;

  .zone-selector {
    display: flex;
    width: 100%;
    justify-content: space-around;
    padding-top: 0.5vh;
    color: white;
  }
  .selections {
    cursor: pointer;
  }
  .selection-active {
    color: var(--color-text-pink);
  }
  .zone-cards {
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-y: auto;
    padding: 2rem;
    gap: 1rem;
  }

  @media (${breakpoints.min}px <= width <= ${breakpoints.mobileMax}px) {
    grid-area: 1 / 1 / 5 / 7;

    .zone-selector {
      font-size: 3vw;
    }
  }

  @media (${breakpoints.mobileMax}px < width <= ${breakpoints.tabletMax}px) {
    grid-area: 1 / 1 / 5 / 7;

    .zone-selector {
      font-size: 3vw;
    }
  }

  @media (${breakpoints.tabletMax}px < width <= ${breakpoints.laptopsMax}px) {
    grid-area: 1 / 2 / 5 / 7;

    .zone-selector {
      font-size: 2vw;
    }
  }

  @media (${breakpoints.laptopsMax}px < width <= ${breakpoints.desktopMax}px) {
    grid-area: 1 / 2 / 5 / 7;

    .zone-selector {
      font-size: 2vw;
    }
  }

  @media (width > ${breakpoints.desktopMax}px) {
    grid-area: 1 / 2 / 5 / 7;

    .zone-selector {
      font-size: 2vw;
    }
  }
`;
