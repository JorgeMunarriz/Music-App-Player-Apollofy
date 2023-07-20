import { AudioPlayerComponent, PlayerMainContainerStyles, PlayerContainer, SearchBar } from ".."


export const PlayerMainContainer = () => {

  return (
    <PlayerMainContainerStyles>
      <SearchBar setSearchParams={undefined} searchParams={undefined} handleChangeParams={undefined} query={undefined}/>
      <PlayerContainer id={0} name={""} artist={""} url={""} thumbnail={""} genre={""} liked={false} reproductions={0}/>
    </PlayerMainContainerStyles>

  )
}