
import { useEffect } from "react";
import { Footer, HomeMainContainer, SideBar } from "../../components"
import { useUserContext } from "../../context";
import { GlobalPrivatePageStyles } from "../../global"
import { useAuth0 } from "@auth0/auth0-react";



const HomePage = () => {
  const {userFechture} = useUserContext()
  const { user, getAccessTokenSilently, isAuthenticated } = useAuth0();

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
