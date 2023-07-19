<<<<<<< HEAD
import { HomeMainContainerStyles, SearchBar} from "../.."
=======
import { AudioPlayerComponent, MainContainerStyles, PlayerContainer, SearchBar } from "../.."
>>>>>>> 7e735f44b1f4419f181a26e6cfae63f63fc7c412


export const PlayerMainContainer = () => {

  return (
<<<<<<< HEAD
    <HomeMainContainerStyles>
      <SearchBar/>
    </HomeMainContainerStyles>
=======
    <MainContainerStyles>
      <SearchBar setSearchParams={undefined} searchParams={undefined} handleChangeParams={undefined} query={undefined}/>
      <PlayerContainer id={0} name={""} artist={""} url={""} thumbnail={""} genre={""} liked={false} visualizations={0}/>
     <AudioPlayerComponent/>
    </MainContainerStyles>
>>>>>>> 7e735f44b1f4419f181a26e6cfae63f63fc7c412

  )
}