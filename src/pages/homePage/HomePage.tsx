import {GetData} from "../../api/GetData"
import { ContainerMain, Footer, GridContainer, SideBar } from "../../components"


export const HomePage = () => {
    GetData()
  return (
    
    <GridContainer>
      <SideBar/>
      <Footer/>
      <ContainerMain/>
    </GridContainer>
  )
}
