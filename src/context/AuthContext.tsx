import { createContext, FC, useContext, useReducer } from "react";
import { UserProps } from "../types/authContext";
import { authReducer, REDUCER_ACTION_TYPE } from "./authReducer";


export const AuthContext = createContext<UserProps>({} as UserProps);


const init = () => {
    const user = JSON.parse(localStorage.getItem('user') as string) || "";
    return {
        id: undefined,
        name: undefined,
        isAuthenticated: false,
        ...user
    } as UserProps;
};

export const AuthProvider: FC = ({ children }) => {
    const [authState, dispatch] = useReducer(authReducer, {} as UserProps, init);

    const login = (name = '') => {
        const user = {
            id: 1,
            name
        };
        localStorage.setItem('user', JSON.stringify(user));
        dispatch({
            type: REDUCER_ACTION_TYPE.LOGIN,
            payload: user
        });
    };

    const logout = () => {
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ ...authState, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useDataUser = () => {
    const userData = useContext(AuthContext);
    if (!userData) {
        throw new Error('User data should be inside the provider');
    }
    return userData;
};