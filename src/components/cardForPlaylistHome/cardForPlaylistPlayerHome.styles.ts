import styled from "styled-components";

export const CardForPlaylistPlayerHomeStyles = styled.div`
  .cardForPlaylistPlayer {
    display: grid;
    grid-template-columns: 0.5fr 1.5fr 0.3fr;
    grid-template-rows: 1fr;
    gap: 10px;
    box-shadow: 15px 7px 19px -3px rgba(0, 0, 0, 0.75);
    background-color: rgb(10, 10, 10);
    border-radius: 5vh;
    align-items: center;
    justify-content: space-around;
    transition: all 0.3s;
    width: 80%;
    color: whitesmoke;
    font-weight: bold;
    position: relative;

    &:hover {
      background-color: rgba(50, 50, 50, 0.4);
      cursor: pointer;
      .cardForPlaylistPlayer__description {
        display: flex;        
        visibility: visible;
      }
    }
    &__img {
      position: relative;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;
      &-img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &__name {
      color: #fff;
      font-size: 2vw;
    }

    &__description {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      z-index: 100;
      width: 120px;
      height: 100px;
      color: rgba(250, 250, 250, 0.75);
      top: -50%; 
      left: 100%; 
      transform: translate(-50%, 10px);
      visibility: hidden;
      background-color: rgba(50, 50, 50, 1);
      border-radius: 1rem;
      padding: 1rem;
      transition: all 1s ease-in-out;
    }

    &__follow-btn {
      border: 1px solid transparent;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      cursor:pointer;

      & svg {
        width:70%;
        height:70%;
      }
    }

    & .full-heart {
      color: #e85973;
    }
  }

  /* @media only screen and (min-width: 320px) and (max-width: 480px) {
    display: grid;
    grid-template-columns: 0.5fr 1.5fr 0.3fr;
    grid-template-rows: 1fr;
    grid-column-gap: 30px;
    box-shadow: 15px 7px 19px -3px rgba(0, 0, 0, 0.75);
    background-color: rgb(10, 10, 10);
    border-radius: 2rem;
    align-items: center;
    justify-content: space-around;
    transition: all 0.3s;
    width: 80%;
    padding: 5px;
    color: whitesmoke;
    font-weight: bold;
    &:hover {
      background-color: rgba(50, 50, 50, 0.4);
      cursor: pointer;
    }

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }

    & .card-container {
      display: flex;
      flex-direction: row;
      width: 70%;
      gap: 1rem;
    }

    & .playlist-description {
      display: none;
    }

    & .follow_btn {
      width: 20px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 23px;
      height: 23px;
    }

    & .full-heart {
      color: #e85973;
    }
  } */

  /* @media only screen and (min-width: 480px) and (max-width: 768px) {
    display: grid;
    grid-template-columns: 0.5fr 1.5fr 0.3fr;
    grid-template-rows: 1fr;
    grid-column-gap: 30px;
    box-shadow: 15px 7px 19px -3px rgba(0, 0, 0, 0.75);
    background-color: rgb(10, 10, 10);
    border-radius: 2rem;
    align-items: center;
    justify-content: space-between;
    transition: all 0.3s;
    width: 80%;
    padding: 5px;
    color: whitesmoke;
    font-weight: bold;
    &:hover {
      background-color: rgba(50, 50, 50, 0.4);
      cursor: pointer;
    }

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }

    & .card-container {
      display: flex;
      flex-direction: row;
      width: 70%;
      gap: 1rem;
    }

    & .playlist-description {
      display: none;
    }

    & .follow_btn {
      width: 20px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 23px;
      height: 23px;
    }

    & .full-heart {
      color: #e85973;
    }
  } */

  /* @media only screen and (min-width: 768px) and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 0.5fr repeat(2, 1fr) 0.3fr;
    grid-template-rows: 1fr;
    grid-column-gap: 30px;
    box-shadow: 15px 7px 19px -3px rgba(0, 0, 0, 0.75);
    background-color: rgb(10, 10, 10);
    border-radius: 2rem;
    align-items: center;
    justify-content: space-between;
    transition: all 0.3s;
    width: 80%;
    padding: 5px;
    color: whitesmoke;
    font-weight: bold;
    &:hover {
      background-color: rgba(50, 50, 50, 0.4);
      cursor: pointer;
    }

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }

    & .card-container {
      display: flex;
      flex-direction: row;
      width: 70%;
      gap: 1rem;
    }

    & .follow_btn {
      width: 20px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 23px;
      height: 23px;
    }

    & .full-heart {
      color: #e85973;
    }
  }

  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 0.5fr repeat(2, 1fr) 0.3fr;
    grid-template-rows: 1fr;
    grid-column-gap: 30px;
    box-shadow: 15px 7px 19px -3px rgba(0, 0, 0, 0.75);
    background-color: rgb(10, 10, 10);
    border-radius: 2rem;
    align-items: center;
    justify-content: space-between;
    transition: all 0.3s;
    width: 80%;
    padding: 5px;
    color: whitesmoke;
    font-weight: bold;
    &:hover {
      background-color: rgba(50, 50, 50, 0.4);
      cursor: pointer;
    }

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }

    & .card-container {
      display: flex;
      flex-direction: row;
      width: 70%;
      gap: 1rem;
    }

    & .follow_btn {
      width: 20px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 23px;
      height: 23px;
    }

    & .full-heart {
      color: #e85973;
    }
  } */
`;
