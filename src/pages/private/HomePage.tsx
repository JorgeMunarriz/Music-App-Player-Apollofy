
import { useEffect } from "react";
import { HomeMainContainer } from "../../components"
import { useUserContext } from "../../context";
import { useAuth0 } from "@auth0/auth0-react";



const HomePage = () => {
  const { userFetch } = useUserContext()
  const { user, getAccessTokenSilently} = useAuth0();

  console.log(user)

  useEffect(() => {
    userFetch(user, getAccessTokenSilently);
  }, [user]);

  return (

    <HomeMainContainer />
  )
}

export default HomePage
