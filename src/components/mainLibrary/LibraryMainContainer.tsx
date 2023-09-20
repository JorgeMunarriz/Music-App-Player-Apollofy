import { LazyExoticComponent, ComponentType, lazy, useState } from "react";
import styled from "styled-components";
import { AlbumCreateForm, Modal, PlaylistCreateForm, SearchBar, TracksCreateForm } from "..";
import { useSearchParams } from "react-router-dom";
import { breakpoints } from "../../styles/breakpoints";
import { useUserMusicContext } from "../../context/UserMusicContext";
import TracksForLibrary from "./cards/TracksForLibrary";
import PlaylistForLibrary from "./cards/PlaylistForLibrary";
import AlbumForLibrary from "./cards/AlbumForLibrary";
import { HiPlus } from "react-icons/hi";
import { Boop } from "../../animations/boopAnimation";
import { useModal } from "../../hooks/useModal";

const LazyCards: LazyExoticComponent<ComponentType<any>> = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(import("../cards/CardForPlaylistPlayerHome"));
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

export const LibraryMainContainer = () => {
  const { playlistsCreated, playlistsLiked, albums, tracks } = useUserMusicContext();
  const { handleUserPlaylistsCreated, handleUserPlaylistsLiked, handleUserAlbums, handleUserTracks } = useUserMusicContext();
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenModal3, openModal3, closeModal3] = useModal(false);
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

      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <PlaylistCreateForm closeModal={closeModal1} />
      </Modal>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <AlbumCreateForm closeModal={closeModal2} />
      </Modal>
      <Modal isOpen={isOpenModal3} closeModal={closeModal3}>
        <TracksCreateForm closeModal={closeModal3} />
      </Modal>
      <PlaylistMainContainerStyles>
        <SearchBar setSearchParams={undefined} searchParams={undefined} handleChangeParams={undefined} query={undefined} />

        <section className="zone-selector">
          <span className={`selections ${zoneSelected === "playlists" ? "selection-active" : ""}`} onClick={() => handleChangeZoneSelected("playlists")}>
            Playlists
            <button onClick={openModal1} className="button-icon tooltip" type="button">
              <span className="tooltiptext">Add</span>
              <HiPlus />
            </button>
          </span>

          <span className={`selections ${zoneSelected === "myPlaylists" ? "selection-active" : ""}`} onClick={() => handleChangeZoneSelected("myPlaylists")}>
            My Playlists
          </span>
          <span className={`selections ${zoneSelected === "albums" ? "selection-active" : ""}`} onClick={() => handleChangeZoneSelected("albums")}>
            Albums
            <button onClick={openModal2} className="button-icon tooltip" type="button">
              <span className="tooltiptext">Add</span>
              <HiPlus />
            </button>
          </span>
          <span className={`selections ${zoneSelected === "tracks" ? "selection-active" : ""}`} onClick={() => handleChangeZoneSelected("tracks")}>
            Tracks
            <button onClick={openModal3} className="button-icon tooltip" type="button">
              <span className="tooltiptext">Add</span>
              <HiPlus />
            </button>
          </span>
        </section>
        <section className="zone-cards">
          {zoneSelected === "playlists" &&
            playlistsLiked &&
            playlistsLiked.map(({ id, playlistName, playlistImage, playlistCreatedById, trackId, genre, artist }) => (
              <PlaylistForLibrary key={id} id={id} playlistName={playlistName} playlistImage={playlistImage} playlistCreatedById={playlistCreatedById} trackId={trackId} genre={genre} artist={artist} />
            ))}

          {zoneSelected === "myPlaylists" &&
            playlistsCreated &&
            playlistsCreated.map(({ id, playlistName, playlistImage, playlistCreatedById, trackId, genre, artist }) => (
              <PlaylistForLibrary key={id} id={id} playlistName={playlistName} playlistImage={playlistImage} playlistCreatedById={playlistCreatedById} trackId={trackId} genre={genre} artist={artist}/>
            ))}

          {zoneSelected === "albums" &&
            albums &&
<<<<<<< HEAD
            albums.map(({ id, albumName, albumImage, albumCreatedAt, artist, trackId }) => (
              <AlbumForLibrary key={id} id={id} albumName={albumName} albumImage={albumImage} albumCreatedAt={albumCreatedAt} artist={artist} trackId={trackId} />
=======
            albums.map(({ id, albumName, albumImage, albumCreatedAt,artist, trackId, artistId }) => (
              <AlbumForLibrary key={id} id={id} albumName={albumName} albumImage={albumImage} albumCreatedAt={albumCreatedAt} artist={artist} trackId={trackId} artistId={artistId} />
>>>>>>> 72d0d2e06db647533b88140866419cf7ec92b6b2
            ))}

          {zoneSelected === "tracks" &&
            tracks &&
            tracks.map(({ id, trackName, trackUrl, trackImage, trackCreatedAt, artist }) => (
              <TracksForLibrary key={id} id={id} trackName={trackName} trackUrl={trackUrl} trackImage={trackImage} trackCreatedAt={trackCreatedAt} artist={artist} />
            ))}
        </section>

        {/* 
        {playlist &&
          playlist.map(({ id, isFollowed, name, description, thumbnail }) => (
            <Suspense key={id} fallback={<LoaderPlaylist />}>
              <LazyCards key={id} id={id} isFollowed={isFollowed} name={name} description={description} thumbnail={thumbnail} />
            </Suspense>
          ))} */}
      </LibraryMainContainerStyles>
    </>
  );
};

 const LibraryMainContainerStyles = styled.main`
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
  .button-icon {
    background-color: transparent;
    border: none;
    transition: all 0.2s linear;
    cursor: pointer;
  }
  & svg {
    font-size: clamp(0.8rem, 2.3rem, 3rem);
    color: var(--color-text-pink);
    &:hover {
      color: rgba(255, 255, 255, 1);
    }
  }
  .tooltip {
 position: relative;
 display: inline-block;
}

.tooltip .tooltiptext {
 visibility: hidden;
 width: 3em;
 background-color: rgba(0, 0, 0, 0.253);
 color: #fff;
 text-align: center;
 border-radius: 6px;
 font-size: 1.5rem;
 padding: 5px 0;
 position: absolute;
 z-index: 1;
 top: 25%;
 left: 110%;
}

.tooltip .tooltiptext::after {
 content: "";
 position: absolute;
 top: 50%;
 right: 100%;
 margin-top: -5px;
 border-width: 5px;
 border-style: solid;
 border-color: transparent rgba(0, 0, 0, 0.253) transparent transparent;
}

.tooltip:hover .tooltiptext {
 visibility: visible;
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
