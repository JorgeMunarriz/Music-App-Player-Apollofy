import { createContext, FC, useState, ReactNode} from "react";
import { User } from "../types/data";

//TOFIX atención igual hay que borrar el fichero authContext.d.ts de la carpeta types

export const UserContext = createContext<{ userLogged: User | null; handleUserLogged: (userId: any) => void }>({ userLogged: null, handleUserLogged: () => {} });


export const UserProvider: FC<{children: ReactNode}> = ({ children }) => {

    const userHardCo = {
        "id": 2,
        "first_name": "Nicasio",
        "last_name": "Losnenos",
        "email": "music@assemblerschool.com",
        "username": "Assembler",
        "password": "mar23",
        "profilePicture": "https://robohash.org/suntvoluptasnisi.png?size=50x50&set=set1",
        "isLoggedin": true,
        "favTracks": [3, 5, 7],
        "favPlaylists": [2, 3, 4]
      }
    const [userLogged, setUserLogged] = useState <User | null> (userHardCo)

    const handleUserLogged = (modifiedUser: User) => {

        setUserLogged (modifiedUser);

    }


return (
    <UserContext.Provider value={{userLogged, handleUserLogged}}>
        {children}
    </UserContext.Provider>
)

}
