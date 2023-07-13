import { UserProps } from "../types/authContext";

export const types = { // Para que se usa????
    login: 'LOG_IN',
    logout: 'LOG_OUT'
}

export const REDUCER_ACTION_TYPE = {
    LOGIN : 'LOGIN', 
    LOGOUT : 'LOGOUT'
}

type reducerAction = {
    type: 'LOGIN' | 'LOGOUT';
    payload?: UserProps;
}

export const authReducer = (state:UserProps, action:reducerAction)=> {
    switch (action.type) {
        case `${REDUCER_ACTION_TYPE.LOGIN}`:
            return {
                ...state, 
                user:action.payload
            }
        case `${REDUCER_ACTION_TYPE.LOGOUT}`:
            return {
                id: '',
                name:''
            }
        default:
            return state;
    }

}


