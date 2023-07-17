import styled from "styled-components";

export const SidebarStyles = styled.div`
  background-color: rgba(50, 50, 50, 0.6);
  border: 1px solid rgba(66, 66, 66, 0.4);
  border-radius: 0.25rem;

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    grid-area: 6 / 1 / 7 / 7;
    display: flex;
    flex-direction: row;
    

    border: 1px solid rgba(66, 66, 66, 0.4);
    .desktop-class {
      display: none;
      z-index: -1;
    }

    & img {
      height: 10vh;
    }
    .sidebar-sections {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      width: 100%;
      a {
        width: 33%;
      }
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    display: grid;
    
    grid-area: 6 / 1 / 7 / 7;
    border: 1px solid rgba(66, 66, 66, 0.4);
    .desktop-class {
      display: none;
      z-index: -1;
    }

    & img {
      height: 10vh;
    }
    .sidebar-sections {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      width: 100%;
      a {
        width: 33%;
      }
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    //To determinate the Position in the parent grid
    grid-area: 1 / 1 / 5 / 2;
    //Own properties
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 1rem;
    width: 100%;
    height: 100%;
    background-color: rgba(50, 50, 50, 1);
    border: 1px solid rgba(66, 66, 66, 0.4);
    border-radius: 0.25rem;
    font-size: 2.5rem;

    & img {
      height: 15vh;
      object-fit: contain;
    }
  }

  @media only screen and (min-width: 1025px) {
    //To determinate the Position in the parent grid
    grid-area: 1 / 1 / 5 / 2;
    //Own properties
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 1rem;
    width: 100%;
    height: 100%;

    font-size: 2.5rem;

    & img {
      height: 15vh;
      object-fit: contain;
    }

    & .sidebar-sections {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 100%;
    }
  }
`;
