
import { useEffect } from "react";
import { HomeMainContainer } from "../../components"
import { useUserContext } from "../../context";
import { useAuth0 } from "@auth0/auth0-react";



const HomePage = () => {
  const { userFetch, userData } = useUserContext()
  const { user, getAccessTokenSilently} = useAuth0();

  useEffect(() => {
   if(!userData){
     userFetch(user, getAccessTokenSilently);
   }
    
  }, [user]);

  return (

    <HomeMainContainer />
  )
}

export default HomePage
