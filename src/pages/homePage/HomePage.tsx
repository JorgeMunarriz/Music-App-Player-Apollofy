import {GetData} from "../../api/GetData"
import { Footer, HomeMainContainerStyles, SideBar } from "../../components"
import { HomePageStyles } from "./homePage.style"


export const HomePage = () => {
    GetData()
  return (
    <HomePageStyles>
        <SideBar/>
        <Footer/>
        <HomeMainContainerStyles/>
    </HomePageStyles>
  )
}
