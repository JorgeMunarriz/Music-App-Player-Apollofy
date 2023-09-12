
import { Outlet } from "react-router-dom"
import { Footer, HomeMainContainer, SideBar } from "../../components"
import { GlobalPrivatePageStyles } from "../../global"



const HomePage = () => {

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
