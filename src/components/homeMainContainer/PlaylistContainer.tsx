import {  
 SearchBar, TracksMainContainer } from '..'
import { PlaylistContainerStylesNew } from './playlistContainer.styles'

export const PlaylistContainer = () => {
  return (
    <PlaylistContainerStylesNew>
      <SearchBar/>
      <TracksMainContainer/>
    </PlaylistContainerStylesNew>

  )
}