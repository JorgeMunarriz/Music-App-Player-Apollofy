import styled from "styled-components";

export const PlayerStyles = styled.div`
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    .playerstyles__div-whole {
      display: flex;
      .playerstyles__img {
        width: 25px;
      }
    }

    .playerstyles__info {
    }
    .playerstyles__div-player {
      width: 100px;
      display: flex;
      gap: 0.5rem;

      .playerstyles__div-buttons {
        size: 2rem;
        background: black;
        svg {
          size: 2rem;
          background: black;
        }
      }
    }
  }

  @media (min-device-width: 481px) and (max-device-width: 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    .playerstyles__div-whole {
      display: flex;
      .playerstyles__img {
        width: 25px;
      }
    }

    .playerstyles__info {
    }
    .playerstyles__div-player {
      width: 100px;
      display: flex;
      gap: 0.5rem;
      .playerstyles__div-buttons {
        font-size: 2rem;
      }
    }
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    .playerstyles__div-whole {
      display: flex;
      .playerstyles__img {
        width: 25px;
      }
    }

    .playerstyles__info {
    }
    .playerstyles__div-player {
      width: 100px;
      display: flex;
      gap: 0.5rem;
      .playerstyles__div-buttons {
        font-size: 2rem;
      }
    }
  }

  @media only screen and (min-width: 1025px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    .playerstyles__div-whole {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      .playerstyles__img {
        width: 50px;
      }
      .playerstyles__info {
        h4 {
          font-size: 3rem;
          color: rgba(255, 255, 255, 0.5);
        }
        p {
          font-size: 2rem;
        }
      }
    }

    .playerstyles__div-container {
      width: 50%;
      display: flex;
      .playerstyles__div-container-audio {
        width: 100%;
        border: 0 transparent;
      }
    }
  }
`;
