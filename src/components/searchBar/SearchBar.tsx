import {  useNavigate,  useSearchParams } from "react-router-dom";

import { SearchBarContainer, SearchBarIcon, SearchBarLeft, SearchBarRight } from "./searchBar.styles"
import {BsSearch} from 'react-icons/bs'
import {RxAvatar} from 'react-icons/rx'
import { UserFormState} from "../../types/authContext";



export const SearchBar = () => {

  const data:UserFormState = JSON.parse(localStorage.getItem('form') as keyof object) || '';
  const {name, isLogged} = data



  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';



  const handleChangeParams = ({target}:React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({q:target.value});
  }

  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('form')
    navigate('/login')
  }

  const goToLogin = () => {
    navigate('/login')
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
      {
        isLogged ?
        <>
           (<button onClick={handleLogout}>Logout</button>
        
          <h4>{name}</h4>)
          
        </>
        :
        (
          <>
          (<button onClick={goToLogin}>Login</button>
    
          </>
        )

    }
    </SearchBarRight>
    </SearchBarContainer>
    )
}
