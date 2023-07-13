import React from 'react'
import { HomePageStyles } from '../homePage/homePage.style'
import { Footer, SideBar } from '../../components'

export const ProfilePage = () => {
  return (
    <HomePageStyles>
      <SideBar/>
      <Footer/>
      {/* <ContainerMain/> ------- TOFIX: Falta añadir el ProfileMainContainer */}
    </HomePageStyles>
  )
}
