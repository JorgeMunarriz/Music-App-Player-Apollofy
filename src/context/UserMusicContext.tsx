

import { createContext, FC, useState, ReactNode, useContext, useEffect } from 'react';
import { userPlaylistsCreatedGet, userPlaylistsLikedGet,
   userAlbumsGet, userTracksGet,createTrack } from '../api/user.fetch';
import { useAuth0 } from "@auth0/auth0-react";

// Definir el tipo para el contexto
interface UserMusicContextType {
  playlistsCreated: PlaylistInterface[];
  playlistsLiked: PlaylistInterface[];
  albums: albumInterface[];
  tracks: trackInterface[] | null;
  tracksCreated: CreateTrackType[]
  handleUserPlaylistsCreated: (userEmail: string) => Promise<void>;
  handleUserPlaylistsLiked: (userEmail: string) => Promise<void>;
  handleUserAlbums: (userEmail: string) => Promise<void>;
  handleUserTracks: (userEmail: string) => Promise<void>;
  createUserTracks: (userId: string, trackData: FormData, getAccessTokenSilently: () => Promise<string>)=> Promise<void>;
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

interface albumInterface {
  id: string,
  albumName: string,
  albumImage: string,
  albumCreatedAt: string,
  albumUpdatedAt: string,
  trackId: string[],
  albumLikedById: string[],
  albumCreatedById: string[],
  genreId: string[],
  artist: string[],
  artistId: string[],
  
}

interface trackInterface {
  id: string,
  trackName: string,
  trackImage: string,
  trackCreatedAt: string,
  trackUpdatedAt: string,
  trackId: string[],
  trackLikedById: string[],
  trackCreatedById: string[],
  genreId: string[],
  artist: string[],
  artistId: string[],
  trackUrl: string
  
}

interface CreateTrackType {
  trackName: string,
  trackUrl: string,
  trackImage: string,
  trackCreatedAt: string,
  genreId: string[],
  artistId: string[],
  albumId: string[],
}



const UserMusicContext = createContext<UserMusicContextType | undefined>(undefined);

export const UserMusicProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { getAccessTokenSilently, isAuthenticated, user } = useAuth0();
  const [playlistsCreated, setPlaylistsCreated] = useState<PlaylistInterface[]>([]);
  const [playlistsLiked, setPlaylistsLiked] = useState<PlaylistInterface[]>([]);
  const [albums, setAlbums] = useState< albumInterface[] >([]);
  const [tracks, setTracks] = useState< trackInterface[] >([]);
  const [tracksCreated , setTracksCreated] = useState< CreateTrackType[] >([]);
  const userEmail = user?.email || "";

  console.log(playlistsCreated)
  console.log(playlistsLiked)
  console.log(albums)
  console.log(tracks)

  useEffect(() => {
    if (isAuthenticated && userEmail) {
      async function getAllMusicLauncher() {
        await handleUserPlaylistsCreated(userEmail);
        await handleUserPlaylistsLiked(userEmail);
        await handleUserAlbums();
        await handleUserTracks();
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

  const handleUserAlbums = async () => {
    try {
      const response = await userAlbumsGet( getAccessTokenSilently);
      setAlbums(response);
    } catch (error) {
      console.error('Error getting albums:', error);
      throw error;
    }
  };

  const handleUserTracks = async () => {
    try {
      const response = await userTracksGet(getAccessTokenSilently);
      setTracks(response);
    } catch (error) {
      console.error('Error getting tracks:', error);
      throw error;
    }
  };
  const createUserTracks = async (userId: string, trackData: FormData, getAccessTokenSilently: () => Promise<string>) => {
    try {
      const response = await createTrack(userId,trackData,getAccessTokenSilently);
      setTracksCreated(response);
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
        tracksCreated,
        handleUserPlaylistsCreated,
        handleUserPlaylistsLiked,
        handleUserAlbums,
        handleUserTracks,
        createUserTracks
      }}
    >
      {children}
    </UserMusicContext.Provider>
  );
};


export const useUserMusicContext = ():UserMusicContextType => {
  const context = useContext(UserMusicContext);
  if (!context) {
    throw new Error('useUserMusicContext debe ser utilizado dentro de un UserMusicProvider');
  }
  return context;
};
