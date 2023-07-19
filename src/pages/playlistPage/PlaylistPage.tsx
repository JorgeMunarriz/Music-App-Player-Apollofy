
import { Footer,   SideBar } from '../../components'
import {PlaylistContainer} from '../../components/homeMainContainer/PlaylistContainer'
import { PlayerPageStyles } from './playerPage.styles'


export const PlaylistPage = () => {
  return (
    <PlayerPageStyles>
      <SideBar/>
        <PlaylistContainer/>
      <Footer/>
    </PlayerPageStyles>
  )
}
