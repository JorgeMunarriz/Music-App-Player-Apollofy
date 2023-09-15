

import { createContext, FC, useState, ReactNode, useContext } from 'react';
import { userPlaylistsCreatedGet, userPlaylistsLikedGet, userAlbumsGet, userTracksGet } from '../api/user.fetch';
import { useAuth0 } from "@auth0/auth0-react";

// Definir el tipo para el contexto
interface UserMusicContextType {
  playlistsCreated: any[] | null;
  playlistsLiked: any[] | null;
  albums: any[] | null;
  tracks: any[] | null;
  getPlaylistsCreated: (userEmail: string) => Promise<void>;
  getPlaylistsLiked: (userEmail: string) => Promise<void>;
  getAlbums: (userEmail: string) => Promise<void>;
  getTracks: (userEmail: string) => Promise<void>;
}

const UserMusicContext = createContext<UserMusicContextType | undefined>(undefined);


export const UserMusicProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { getAccessTokenSilently } = useAuth0();
  const [playlistsCreated, setPlaylistsCreated] = useState<any[] | null>(null);
  const [playlistsLiked, setPlaylistsLiked] = useState<any[] | null>(null);
  const [albums, setAlbums] = useState<any[] | null>(null);
  const [tracks, setTracks] = useState<any[] | null>(null);

  // Funciones para obtener datos
  const getPlaylistsCreated = async (userEmail: string) => {
    try {
      const response = await userPlaylistsCreatedGet(userEmail, getAccessTokenSilently);
      setPlaylistsCreated(response);
    } catch (error) {
      console.error('Error getting created playlists:', error);
      throw error;
    }
  };

  const getPlaylistsLiked = async (userEmail: string) => {
    // Implementa una función similar para obtener playlists liked
  };

  const getAlbums = async (userEmail: string) => {
    // Implementa una función similar para obtener álbumes
  };

  const getTracks = async (userEmail: string) => {
    // Implementa una función similar para obtener tracks
  };

  return (
    <UserMusicContext.Provider
      value={{
        playlistsCreated,
        playlistsLiked,
        albums,
        tracks,
        getPlaylistsCreated,
        getPlaylistsLiked,
        getAlbums,
        getTracks,
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
