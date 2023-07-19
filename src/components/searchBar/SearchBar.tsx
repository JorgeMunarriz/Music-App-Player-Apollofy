import {  Link, useNavigate,  useSearchParams } from "react-router-dom";

import { SearchBarContainer, SearchBarIcon, SearchBarLeft, SearchBarRight } from ".."
import {BsSearch} from 'react-icons/bs'
import {RxAvatar} from 'react-icons/rx'
import { UserFormState} from "../../types/authContext";
import { Button } from "..";




export const SearchBar = ({setSearchParams, searchParams , handleChangeParams, query}) => {

  const data:UserFormState = JSON.parse(localStorage.getItem('form') as keyof object) || '';
  const {name, isLogged} = data

 

  // const [searchParams, setSearchParams] = useSearchParams();
  // const query = searchParams.get('q') || '';



  // const handleChangeParams = ({target}:React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchParams({q:target.value});
  // }

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
      {
        isLogged ?
        <>
           <Button handleClick={handleLogout}>Logout</Button>
          <h4>{name}</h4>
          <Link to="/profile"><RxAvatar/></Link>
          
        </>
        :
        
          <>
          <Button handleClick={goToLogin}>Login</Button>
    
          </>
        

    }
    </SearchBarRight>
    </SearchBarContainer>
    )
}
