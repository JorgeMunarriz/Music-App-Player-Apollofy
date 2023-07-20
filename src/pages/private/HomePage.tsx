
import { Footer, HomeMainContainer, SideBar } from "../../components"
import { GlobalPrivatePageStyles } from "../../global"



const HomePage = () => {
  
  return (
    <GlobalPrivatePageStyles>
        <SideBar/>
        <HomeMainContainer/>
        <Footer/>
    </GlobalPrivatePageStyles>
  )
}

export default HomePage
