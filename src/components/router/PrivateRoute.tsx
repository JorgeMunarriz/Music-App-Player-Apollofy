import { Navigate, Outlet } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { LOGIN } from '../../config/routes/paths';


export const PrivateRoute = () => {
<<<<<<< HEAD
    const { isLoading, isAuthenticated, user } = useAuth0();
    console.log(isAuthenticated)
    console.log(user)
    if (isLoading) {
=======
    const {  isAuthenticated, user } = useAuth0();
    console.log(isAuthenticated)
    console.log(user)
    if (!isAuthenticated) {
>>>>>>> d0e96c02f8a51fd65b3180028950938d79a5e68b
        return <div>Loading ...</div>;
    }
    return (
        <>
            {user ? (
                <div>
                    <Outlet />
                </div>
            ) : (
                <Navigate to={LOGIN} />
            )}
        </>
    )

}