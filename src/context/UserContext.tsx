import { createContext, FC, useContext, useState} from "react";
import { UserProps } from "../types/authContext";


export const UserContext = createContext<UserProps>({} as UserProps);


export const UserProvider: FC = ({ children }) => {

    const [userLogged, setUserLogged] = useState ()

    const handleUserLogged = (userId: any) => {

        setUserLogged (userId);

    }


return (
    <UserContext.Provider>
        {children}
    </UserContext.Provider>
)

}
