
import { Footer,  SideBar } from '../../components'
import { PlaylistMainContainer } from '../../components/homeMainContainer/playerMainContainer/PlaylistMainContainer'
import { PlayerPageStyles } from './playerPage.styles'


export const PlaylistPage = () => {
  return (
    <PlayerPageStyles>
      <SideBar/>
     <PlaylistMainContainer/>
      <Footer/>
      
    </PlayerPageStyles>
  )
}
