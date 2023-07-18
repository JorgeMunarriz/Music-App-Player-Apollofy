import React from 'react'
import { Footer,  PlayerMainContainer, SideBar } from '../../components'
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
