import {GetData} from "../../api/GetData"
import { ContainerMain, Footer, GridContainer, SideBar } from "../../components"
import { HomePageStyles } from "./homePage.style"


export const HomePage = () => {
    GetData()
  return (
    <HomePageStyles>
        <SideBar/>
        <Footer/>
        <ContainerMain/>
    </HomePageStyles>
  )
}
