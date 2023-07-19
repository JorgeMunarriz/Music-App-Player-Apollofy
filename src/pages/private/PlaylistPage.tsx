
import { Footer,   SideBar } from '../../components'
import {PlaylistContainer} from '../../components/homeMainContainer/PlaylistContainer'
import { GlobalPrivatePageStyles } from '../../global'


export const PlaylistPage = () => {
  return (
    <GlobalPrivatePageStyles>
      <SideBar/>
        <PlaylistContainer/>
      <Footer/>
    </GlobalPrivatePageStyles>
  )
}
