import styled from "styled-components";
import { ContainerButtonsSidebar } from "./ContainerButtonsSidebar";

export const SidebarStyles = styled.div`
  display: grid;
  background-color: rgba(0, 0, 0, 0.8);
  grid-area: 1 / 1 / 5 / 2;
  width: 100%;
  height: 100%;
  border: 1px solid rgba(66, 66, 66, 0.4);
  
  & img {
    height: 10vh;
  }
`;

export const ContainerButtonsSidebarStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  & ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    & li {
      width: 100%;
      height: 3rem;

      & a {
        display: flex;
        width: 100%;
        border-radius: 6px;
        background: #282828;
        padding: 10px;
        color: rgba(255, 255, 255, 1);
      }
    }
  }
`;