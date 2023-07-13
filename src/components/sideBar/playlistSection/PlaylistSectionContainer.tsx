import { Link } from "react-router-dom";
import { PlaylistSectionContainerStyles } from "./playlistSectionContainer.styles";


export const PlaylistSectionContainer = () => {
  return (
    <PlaylistSectionContainerStyles>
        <Link to="" ><i className="bi bi-house-door-fill"></i>Prueba play 1</Link>
        <Link to="" >Prueba play 2</Link>
        <Link to="" >Prueba play 3</Link>
    </PlaylistSectionContainerStyles>
  );
};
