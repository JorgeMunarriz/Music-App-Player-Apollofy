import styled from "styled-components";

export const PlayerStyles = styled.div`
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
      padding-left: 1vh;
      .playerstyles__info-h4 {
        font-size: 2vh;
        color: rgba(255, 255, 255, 0.5);
      }
      .playerstyles__info-paragraph {
        font-size: 1vh;
        color: #fff;
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
  @media only screen and (min-width: 320px) and (max-width: 480px) {
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
        padding-left: 1vh;
        .playerstyles__info-h4 {
          font-size: 2vh;
          color: rgba(255, 255, 255, 0.5);
        }
        .playerstyles__info-paragraph {
          font-size: 1vh;
          color: #fff;
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

  @media (min-width: 481px) and (max-width: 767px) {
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
        padding-left: 1vh;
        .playerstyles__info-h4 {
          font-size: 2vh;
          color: rgba(255, 255, 255, 0.5);
        }
        .playerstyles__info-paragraph {
          font-size: 1vh;
          color: #fff;
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

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    .playerstyles__div-whole {
      display: flex;
      .playerstyles__img {
        width: 100px;
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
        padding-left: 5vh;
        .playerstyles__info-h4 {
          font-size: 5vh;
          color: rgba(255, 255, 255, 0.5);
        }
        .playerstyles__info-paragraph {
          font-size: 3vh;
          color: #fff;
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
