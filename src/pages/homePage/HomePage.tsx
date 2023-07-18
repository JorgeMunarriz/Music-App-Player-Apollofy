import {GetData} from "../../api/GetData"
import { Footer, HomeMainContainer, SideBar } from "../../components"
import { HomePageStyles } from "./homePage.styles"


export const HomePage = () => {

  return (
    <HomePageStyles>
        <SideBar/>
        <HomeMainContainer/>
        <Footer/>
    </HomePageStyles>
  )
}
