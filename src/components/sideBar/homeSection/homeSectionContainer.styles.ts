import styled from "styled-components";

export const HomeSectionContainerStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  & a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    width: 100%;
    padding: 10px;
    color: rgba(255, 255, 255, 1);
    cursor: pointer;
    font-size: clamp(1rem, 1.8rem, 2rem);
  }
  & a:hover {
    border-radius: 6px;
    background: #282828;
    padding: 10px;
    color: rgba(255, 255, 255, 1);
  }

  & svg {
    font-size: clamp(1rem, 1.8rem, 2rem);
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    display: flex;
    flex-direction: row;
    & a {
      display: flex;
      flex-direction: row;
      & a {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        width: 100%;
        padding: 10px;
        color: rgba(255, 255, 255, 1);
        cursor: pointer;

      }
    }
  }

  @media (min-width: 480px) and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    & a {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 10px;
    color: rgba(255, 255, 255, 1);
    cursor: pointer;
    & a {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;
      width: 100%;
      padding: 10px;
      color: rgba(255, 255, 255, 1);
      cursor: pointer;
    }
    & a:hover {
      border-radius: 6px;
      background: #282828;
      padding: 10px;
      color: rgba(255, 255, 255, 1);
    }
  }

  @media only screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & a {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;
      width: 100%;
      padding: 10px;
      color: rgba(255, 255, 255, 1);
      cursor: pointer;
    }
    & a:hover {
      border-radius: 6px;
      background: #282828;
      padding: 10px;
      color: rgba(255, 255, 255, 1);
    }
  }
`;
