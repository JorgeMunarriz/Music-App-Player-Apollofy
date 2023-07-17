import {GetData} from "../../api/GetData"
import { Footer, HomeMainContainer, SideBar } from "../../components"
import { HomePageStyles } from "./homePage.styles"


export const HomePage = () => {
  GetData();
  return (
    <HomePageStyles>
        <SideBar/>
        <HomeMainContainer/>
        <Footer/>
    </HomePageStyles>
  )
}
