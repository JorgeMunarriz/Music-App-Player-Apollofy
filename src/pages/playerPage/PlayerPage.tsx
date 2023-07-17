import React from 'react'
import { Footer, HomeMainContainer, PlayerMainContainer, SideBar } from '../../components'
import { PlayerPageStyles } from './playerPage.styles'

export const PlayerPage = () => {
  return (
    <PlayerPageStyles>
      <SideBar/>
     <PlayerMainContainer/>
      <Footer/>
      
    </PlayerPageStyles>
  )
}
