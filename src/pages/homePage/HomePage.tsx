import { Footer, HomeMainContainer, SideBar } from "../../components"
import { GlobalPageStyles } from "../../global"


export const HomePage = () => {
  
  return (
    <GlobalPageStyles>
        <SideBar/>
        <HomeMainContainer/>
        <Footer/>
    </GlobalPageStyles>
  )
}
