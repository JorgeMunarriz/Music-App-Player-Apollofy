import { Link } from "react-router-dom";
import { HomeSectionContainerStyles } from "./homeSectionContainer.styles";
import {AiOutlineHome} from 'react-icons/ai';
import {BsMusicNoteList} from 'react-icons/bs'
import { VscLibrary } from "react-icons/vsc";
import { ImProfile } from "react-icons/im";


export const HomeSectionContainer = () => {
  return (
    <HomeSectionContainerStyles>
        <Link to="/home" ><AiOutlineHome/>Home</Link>
        <Link to="/player" ><BsMusicNoteList/>Player</Link>
        <Link to="/profile" > <ImProfile/>Profile</Link>
        <Link to="/playlists" > <VscLibrary/>Your Playlist</Link>
    </HomeSectionContainerStyles>
  );
};


