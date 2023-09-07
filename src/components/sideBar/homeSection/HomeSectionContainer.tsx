import { Link } from "react-router-dom";
import { HomeSectionContainerStyles } from "./homeSectionContainer.styles";
import {AiOutlineHome} from 'react-icons/ai';
import {BsMusicNoteList} from 'react-icons/bs'
import { VscLibrary } from "react-icons/vsc";
import { ImProfile } from "react-icons/im";
import { HOME, PLAYER, PLAYLISTS, PROFILE } from "../../../config/routes/paths";


export const HomeSectionContainer = () => {
  return (
    <HomeSectionContainerStyles>
        <Link to={HOME} ><AiOutlineHome/>Home</Link>
        <Link to={PLAYER} ><BsMusicNoteList/>Player</Link>
        <Link to={PROFILE} > <ImProfile/>Profile</Link>
        <Link to={PLAYLISTS} > <VscLibrary/>Playlist</Link>
    </HomeSectionContainerStyles>
  );
};


