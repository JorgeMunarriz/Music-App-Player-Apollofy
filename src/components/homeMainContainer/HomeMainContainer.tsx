import { HomeMainContainerStyles, PlaylistContainerHome, SearchBar, TracksContainer } from '..'



export const HomeMainContainer = () => {
  return (
    <HomeMainContainerStyles>
      <SearchBar/>
      <PlaylistContainerHome/>
      <TracksContainer/>
    </HomeMainContainerStyles>

  )
}