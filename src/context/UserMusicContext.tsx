

import { createContext, FC, useState, ReactNode, useContext, useEffect } from 'react';
import { userPlaylistsCreatedGet, userPlaylistsLikedGet, userAlbumsGet, userTracksGet } from '../api/user.fetch';
import { useAuth0 } from "@auth0/auth0-react";

// Definir el tipo para el contexto
interface UserMusicContextType {
  playlistsCreated: PlaylistInterface[];
  playlistsLiked: PlaylistInterface[];
  albums: AlbumInterface[];
  tracks: TrackInterface[];
  handleUserPlaylistsCreated: (userEmail: string) => Promise<void>;
  handleUserPlaylistsLiked: (userEmail: string) => Promise<void>;
  handleUserAlbums: (userEmail: string) => Promise<void>;
  handleUserTracks: (userEmail: string) => Promise<void>;
}
interface PlaylistInterface {
  id: string,
  playlistName: string,
  playlistImage: string,
  playlistCreatedAt: string,
  playlistUpdatedAt: string,
  trackId: string[],
  playlistLikedById: string[],
  playlistCreatedById: string[],
  genreId: string[],
}
interface AlbumInterface {
  id: string,
  albumName: string,
  albumImage: string,
  albumCreatedAt: string,
  artistId: string[],
  genreId: string[],
  trackId: string[],
  albumLikedBy: string[],
  post: string[],
}
interface TrackInterface {
  id: string,
  trackName: string,
  trackUrl: string,
  trackImage: string,
  trackCreatedAt: string,
  playlistId: string[],
  trackLikedBy: string[],
  albumId: string[],
  artistId: string[],
  genreId: string[],
  //TOFIX: FALTA TRAER LOS POST...VER COMO SELECCIONARLOS DESDE EL BACK, ETC.
}

const UserMusicContext = createContext<UserMusicContextType | undefined>(undefined);

export const UserMusicProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { getAccessTokenSilently, isAuthenticated, user } = useAuth0();
  const [playlistsCreated, setPlaylistsCreated] = useState<PlaylistInterface[]>([]);
  const [playlistsLiked, setPlaylistsLiked] = useState<PlaylistInterface[]>([]);
  const [albums, setAlbums] = useState<AlbumInterface[]>([]);
  const [tracks, setTracks] = useState<TrackInterface[]>([]);
  const userEmail = user?.email || "";

  useEffect(() => {
    if (isAuthenticated && userEmail) {
      async function getAllMusicLauncher() {
        await handleUserPlaylistsCreated(userEmail);
        await handleUserPlaylistsLiked(userEmail);
        await handleUserAlbums(userEmail);
        await handleUserTracks(userEmail);
      }
      getAllMusicLauncher();
    }
  }, [isAuthenticated]);

  const handleUserPlaylistsCreated = async (userEmail: string) => {
    try {
      const response = await userPlaylistsCreatedGet(userEmail, getAccessTokenSilently);
      setPlaylistsCreated(response);
    } catch (error) {
      console.error('Error getting created playlists:', error);
      throw error;
    }
  };

  const handleUserPlaylistsLiked = async (userEmail: string) => {
    try {
      const response = await userPlaylistsLikedGet(userEmail, getAccessTokenSilently);
      setPlaylistsLiked(response);
    } catch (error) {
      console.error('Error getting liked playlists:', error);
      throw error;
    }
  };

  const handleUserAlbums = async (userEmail: string) => {
    try {
      const response = await userAlbumsGet(userEmail, getAccessTokenSilently);
      setAlbums(response);
    } catch (error) {
      console.error('Error getting albums:', error);
      throw error;
    }
  };

  const handleUserTracks = async (userEmail: string) => {
    try {
      const response = await userTracksGet(userEmail, getAccessTokenSilently);
      setTracks(response);
    } catch (error) {
      console.error('Error getting tracks:', error);
      throw error;
    }
  };

  return (
    <UserMusicContext.Provider
      value={{
        playlistsCreated,
        playlistsLiked,
        albums,
        tracks,
        handleUserPlaylistsCreated,
        handleUserPlaylistsLiked,
        handleUserAlbums,
        handleUserTracks,
      }}
    >
      {children}
    </UserMusicContext.Provider>
  );
};


export const useUserMusicContext = () => {
  const context = useContext(UserMusicContext);
  if (!context) {
    throw new Error('useUserMusicContext debe ser utilizado dentro de un UserMusicProvider');
  }
  return context;
};
