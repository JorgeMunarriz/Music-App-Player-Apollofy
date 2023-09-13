import styled from "styled-components";

export const PlaylistMainContainerStyles = styled.main`
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  justify-content: center;
  background-color: red;
  height: 100%;
  width: 100%;
  background: linear-gradient(#340034, #000);
  border-radius: 0.25rem;

  .playlistMainContainer__section {
    height: 90%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding: 1.5rem 0;
    overflow-y: auto;

    border: 1px solid rgba(66, 66, 66, 0.4);
    border-radius: 0.25rem;
  }

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    grid-area: 1 / 1 / 5 / 7;
  }

  @media only screen and (min-width: 481px) and (max-width: 767px) {
    grid-area: 1 / 1 / 5 / 7;
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    grid-area: 1 / 2 / 5 / 7;
  }

  @media only screen and (min-width: 1025px) {
    grid-area: 1 / 2 / 5 / 7;
  }
`;
