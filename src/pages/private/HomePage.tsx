import { useEffect } from "react";
import { Footer, HomeMainContainer, SideBar } from "../../components"
import { GlobalPrivatePageStyles } from "../../global"
import { useAuth0 } from "@auth0/auth0-react";
import { useUserContext } from "../../context";



const HomePage = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  const {userFechture} = useUserContext()

  useEffect(() => {
    userFechture(user, getAccessTokenSilently);
  }, [user]);
  
  return (
    <GlobalPrivatePageStyles>
        <SideBar/>
        <HomeMainContainer/>
        <Footer/>
    </GlobalPrivatePageStyles>
  )
}

export default HomePage
