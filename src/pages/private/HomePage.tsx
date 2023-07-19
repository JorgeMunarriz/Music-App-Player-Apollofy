import { Footer, HomeMainContainer, SideBar } from "../../components"
import { GlobalPrivatePageStyles } from "../../global"



export const HomePage = () => {
  
  return (
    <GlobalPrivatePageStyles>
        <SideBar/>
        <HomeMainContainer/>
        <Footer/>
    </GlobalPrivatePageStyles>
  )
}
