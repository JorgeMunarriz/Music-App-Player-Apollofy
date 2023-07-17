import { Link } from "react-router-dom";
import { HomeSectionContainerStyles } from "./homeSectionContainer.styles";
import {AiOutlineHome} from 'react-icons/ai';
import {BiSearchAlt2} from 'react-icons/bi'
import { VscLibrary } from "react-icons/vsc";


export const HomeSectionContainer = () => {
  return (
    <HomeSectionContainerStyles>
        <Link to="/home" ><AiOutlineHome/>Home</Link>
        <Link to="/repro" ><BiSearchAlt2/>Player</Link>
        <Link to="/" > <VscLibrary/>Your Library</Link>
    </HomeSectionContainerStyles>
  );
};


