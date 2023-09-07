import { Navigate, Outlet } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { LOGIN } from '../../config/routes/paths';


export const PrivateRoute = () => {
    const {isLoading, isAuthenticated, user} = useAuth0();
    console.log(isAuthenticated)
    console.log(user)
    if (isLoading) {
        return <div>Loading ...</div>;
      }
    return (
        <>
        {isAuthenticated ? (
        <div>
            <Outlet />
        </div>
        ) : (
            <Navigate to={LOGIN} />
        )}
        </>
    )

}