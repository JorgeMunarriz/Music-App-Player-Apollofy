import { useParams, useSearchParams } from "react-router-dom";

import { SearchBarContainer, SearchBarIcon, SearchBarLeft, SearchBarRight } from "./searchBar.styles"
import {BsSearch} from 'react-icons/bs'
import {RxAvatar} from 'react-icons/rx'


export const SearchBar = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const handleChangeParams = ({target}:React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({q:target.value});
  }


  return (
    <SearchBarContainer>

      <SearchBarLeft>
        <SearchBarIcon>
          <BsSearch/>
        </SearchBarIcon>
        <input type="search" name="search" placeholder="Search for Artists" value={query} onChange={handleChangeParams}/>
      </SearchBarLeft>

      <SearchBarRight>
        <RxAvatar/>
        <h4>Horacio</h4>
      </SearchBarRight>
    </SearchBarContainer>
  )
}
