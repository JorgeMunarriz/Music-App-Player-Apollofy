import { Link } from "react-router-dom";
import { FavoritesSectionContainerStyles } from "./favoritesSectionContainer.styles";

export const FavoritesSectionContainer = () => {
  return (
    <FavoritesSectionContainerStyles>
        <Link to="" ><i className="bi bi-house-door-fill"></i>Prueba Link 1</Link>
        <Link to="" >Prueba Link 2</Link>
        <Link to="" >Prueba Link 3</Link>
    </FavoritesSectionContainerStyles>
  );
};