/* eslint-disable @typescript-eslint/no-misused-promises */
import { Link, useNavigate, useSearchParams } from "react-router-dom";

import { SearchBarContainer, SearchBarIcon, SearchBarLeft, SearchBarRight } from "..";
import { BsSearch } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import { UserFormState } from "../../types/authContext";
import { Button } from "..";
import { Boop } from "../../animations/boopAnimation";
import { useAuth0 } from "@auth0/auth0-react";
import { PROFILE } from "../../config/routes/paths";
import { useUserContext } from "../../context";

export const SearchBar = ({ setSearchParams, searchParams, handleChangeParams, query }) => {
  const { logout, user, isAuthenticated } = useAuth0();
  const { userData } = useUserContext();

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <SearchBarContainer>
      <SearchBarLeft>
        <SearchBarIcon>
          <BsSearch />
        </SearchBarIcon>
        <input type="search" name="search" placeholder="Search for Genre" value={query} onChange={handleChangeParams} />
      </SearchBarLeft>
      <SearchBarRight>
        {isAuthenticated ? (
          <>
            <Button handleClick={() => logout()}>Logout</Button>
            <h4>{userData?.userName ? userData?.userName : user?.given_name}</h4>
            <Boop rotation={20} timing={200}>
              <Link to={PROFILE}>
                <RxAvatar />
              </Link>
            </Boop>
          </>
        ) : (
          <>
            <Button handleClick={goToLogin}>Login</Button>
          </>
        )}
      </SearchBarRight>
    </SearchBarContainer>
  );
};
