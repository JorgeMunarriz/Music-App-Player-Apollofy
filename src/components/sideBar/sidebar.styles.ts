import styled from "styled-components";

export const SidebarStyles = styled.div`


 @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
  display: grid;
  background-color: rgba(0, 0, 0, 0.8);
  grid-area:  5 / 1 / 6 / 6;
  border: 1px solid rgba(66, 66, 66, 0.4);

  & img {
    height: 10vh;
  }
}

@media (min-device-width: 481px) and (max-device-width: 767px) {
  display: grid;
  background-color: rgba(0, 0, 0, 0.8);
  grid-area:  5 / 1 / 6 / 6;
  border: 1px solid rgba(66, 66, 66, 0.4);

  & img {
    height: 10vh;
  } 
}

@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
  display: grid;
  background-color: rgba(0, 0, 0, 0.8);
  grid-area: 1 / 1 / 5 / 2;
  width: 100%;
  height: 100%;
  border: 1px solid rgba(66, 66, 66, 0.4);
  
  & img {
    height: 10vh;
  }
}

@media only screen and (min-width : 1025px) {
  //Position in the parent grid
  grid-area: 1 / 1 / 5 / 2;
  //Own properties
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 1rem;
  width: 100%;
  height: 100%;
  background-color: rgba(25, 25, 25, 1);
  border: 1px solid rgba(66, 66, 66, 0.4);
  border-radius: 0.25rem;
  font-size: 2.5rem;
  
  & img {
    height: 15vh;
    object-fit: contain;
  }

  & .sidebar-sections {
    display:flex;
    flex-direction:column;
    justify-content: space-around;
    height: 100%;
  }
}
`;
