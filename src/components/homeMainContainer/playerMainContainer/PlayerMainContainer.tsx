import { HomeMainContainerStyles, PlayerContainer, SearchBar, TracksMainContainer } from "../.."


export const PlayerMainContainer = () => {

  return (
    <HomeMainContainerStyles>
      <SearchBar/>
      <PlayerContainer id={0} name={""} artist={""} url={""} thumbnail={""} genre={""} liked={false}/>
     
    </HomeMainContainerStyles>

  )
}