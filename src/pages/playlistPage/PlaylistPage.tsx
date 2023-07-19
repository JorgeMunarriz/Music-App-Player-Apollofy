
import { Footer,   SideBar } from '../../components'
import {PlaylistContainer} from '../../components/homeMainContainer/PlaylistContainer'
import { GlobalPageStyles } from '../../global'


export const PlaylistPage = () => {
  return (
    <GlobalPageStyles>
      <SideBar/>
        <PlaylistContainer/>
      <Footer/>
    </GlobalPageStyles>
  )
}
