import {createContext, FC, useState, ReactNode, useContext} from 'react';
import {userPost} from '../api/user.req'
import { User } from '@auth0/auth0-react';

interface User {
	id: String;
	userEmail: String;
	userName: String;
	userImage: String;
	userCreatedAt: String;
	userUpdatedAt: String;
	playlistLikedId: String[];
	playlistLiked: Playlist[];
	tracksId: String[];
	tracks: Track[];
	postId: String[];
	post: Post[];
	albumId: String[];
	album: Album[];
	playlistCreatedId: String[];
	playlistCreated: Playlist[];
}

interface userData {
    userEmail: string;
	userName: string;
	userImage: string;

}

interface UserContextType {
    userData: UserData | null
    userFechture: (user: User | undefined, getAccessTokenSilently: () => Promise<string>)  => void;
}

// const url = import.meta.env.VITE_API_URL;
const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: FC<{children: ReactNode}> = ({children}) => {
	const [userData, setUserData] = useState<userData | null>(null);

	const userFechture = async (user: User |undefined, getAccessTokenSilently: () => Promise<string>) => {
        if (user) {
            const userResponse = await userPost(user, getAccessTokenSilently);
            setUserData(userResponse.user)
        }
     }

	return( <UserContext.Provider value={{userData, userFechture}}>
        {children}
        </UserContext.Provider>);
};

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
      throw new Error('useUserContext debe ser usado dentro de un UserProvider');
    }
    return context;
  };
