import { useSearchParams } from 'react-router-dom';
import { HomeMainContainerStyles, PlaylistContainerHome, SearchBar, TracksContainer } from '..'



export const HomeMainContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';



  const handleChangeParams = ({target}:React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({q:target.value});
  }
  return (
    <HomeMainContainerStyles>
      <SearchBar searchParams={searchParams} setSearchParams={setSearchParams} query={query} handleChangeParams={handleChangeParams}  />
      <PlaylistContainerHome/>
      <TracksContainer searchParams={searchParams} query={query}/>
    </HomeMainContainerStyles>

  )
}