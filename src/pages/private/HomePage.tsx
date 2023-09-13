
import { useEffect } from "react";
import {  HomeMainContainer } from "../../components"
import { useUserContext } from "../../context";
import { useAuth0 } from "@auth0/auth0-react";



const HomePage = () => {
  const {userfetchure} = useUserContext()
  const { user, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    userfetchure(user, getAccessTokenSilently);
    console.log(user)
  }, [user]);
  
  return (

    <HomeMainContainer />

    // <GlobalPrivatePageStyles>
    //   <SideBar />
    //   <Outlet />
    //   <Footer />
    // </GlobalPrivatePageStyles>
  )
}

export default HomePage
