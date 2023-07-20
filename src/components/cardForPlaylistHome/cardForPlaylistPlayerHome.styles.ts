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
    height: 76px;
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
      width: 76px;
      height: 76px;
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
      color: #340034;
    }
  }
`;
