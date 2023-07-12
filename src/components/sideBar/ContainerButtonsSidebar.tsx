import { Link } from "react-router-dom";
import { ContainerButtonsSidebarStyles } from "..";

export const ContainerButtonsSidebar = () => {
  return (
    <ContainerButtonsSidebarStyles>
      <ul>
        <li>
          <Link to="home" ><i className="bi bi-house-door-fill"></i>Home</Link>
        </li>
        <li>
        <Link to="repro" >Player</Link>
        </li>
        <li>
        <Link to="/" >Your Library</Link>
        </li>
      </ul>
    </ContainerButtonsSidebarStyles>
  );
};
