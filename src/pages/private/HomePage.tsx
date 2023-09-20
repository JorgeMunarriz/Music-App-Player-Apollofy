
import { useEffect } from "react";
import { HomeMainContainer } from "../../components"
import { useUserContext } from "../../context";
import { useAuth0 } from "@auth0/auth0-react";



const HomePage = () => {
  // const { userData } = useUserContext()
  // const { user, getAccessTokenSilently} = useAuth0();

  return (

    <HomeMainContainer />

  )
}

export default HomePage
