import {  AudioPlayerComponent, MainContainerStyles, PlayerContainer, SearchBar } from "../.."


export const PlayerMainContainer = () => {

  return (
    <MainContainerStyles>
      <SearchBar setSearchParams={undefined} searchParams={undefined} handleChangeParams={undefined} query={undefined}/>
      <PlayerContainer id={0} name={""} artist={""} url={""} thumbnail={""} genre={""} liked={false} visualizations={0}/>
     <AudioPlayerComponent/>
    </MainContainerStyles>

  )
}