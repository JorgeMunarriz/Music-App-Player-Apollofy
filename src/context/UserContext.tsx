import {createContext, FC, useState, ReactNode, useContext} from 'react';
import {userPost, UserPut} from '../api/user.fetch'
import {User} from '@auth0/auth0-react'

// interface UserDates {
// 	id: String;
// 	userEmail: String;
// 	userName: String;
// 	userImage: String;
// 	userCreatedAt: String;
// 	userUpdatedAt: String;
// 	playlistLikedId: String[];
// 	playlistLiked: Playlist[];
// 	tracksId: String[];
// 	tracks: Track[];
// 	postId: String[];
// 	post: Post[];
// 	albumId: String[];
// 	album: Album[];
// 	playlistCreatedId: String[];
// 	playlistCreated: Playlist[];
// }

interface userData {
    id?: string | null
    userEmail: string;
	userName: string;
	userImage?: string;

}

interface UserContextType {
    userData: userData | null
    userUpdateData: Response | null
    userFetch: (user: User | undefined, getAccessTokenSilently: () => Promise<string>) => void;
    updatedUserData: (userUpdate: userData, userId:string,  getAccessTokenSilently: () => Promise<string>) => Promise<Response>
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: FC<{children: ReactNode}> = ({children}) => {
	const [userData, setUserData] = useState<userData | null>(null);
	const [userUpdateData, setUserUpdate] = useState<Response | null>(null);


	const userFetch = async (user: User |undefined, getAccessTokenSilently: () => Promise<string>) => {
        if (user) {
            const userResponse = await userPost(user, getAccessTokenSilently);
            console.log(userResponse)
            setUserData(userResponse.user)
        }
     }


     const updatedUserData = async ( userUpdate: userData, userId:string,  getAccessTokenSilently: () => Promise<string>) => {
        try {
            const userResponse = await UserPut(userUpdate, userId, getAccessTokenSilently);
            console.log(userResponse)
            setUserUpdate(userResponse);
            setUserData(userResponse.user)

        return(userResponse)
        } catch (error) {
            console.error('Error user update:', error);
            throw error;
          }
     }


	return( <UserContext.Provider value={{userData,userUpdateData, userFetch, updatedUserData}}>
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
