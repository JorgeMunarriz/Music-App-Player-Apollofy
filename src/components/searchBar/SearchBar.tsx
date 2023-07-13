import { SearchBarContainer, SearchBarIcon, SearchBarLeft, SearchBarRight } from "./searchBar.styles"
import {BsSearch} from 'react-icons/bs'
import {RxAvatar} from 'react-icons/rx'


export const SearchBar = () => {
  return (
    <SearchBarContainer>

      <SearchBarLeft>
        <SearchBarIcon>
          <BsSearch/>
        </SearchBarIcon>
        <input type="search" name="search" placeholder="Search for Artists"/>
      </SearchBarLeft>

      <SearchBarRight>
        <RxAvatar/>
        <h4>Horacio</h4>
      </SearchBarRight>
    </SearchBarContainer>
  )
}
