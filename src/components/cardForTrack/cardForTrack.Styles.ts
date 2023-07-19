import styled from "styled-components";

export const CardForTrackStyles = styled.div`
  display: flex;
  box-shadow: 12px 13px 15px 6px rgba(0, 0, 0, 0.8), 29px 36px 15px -3px rgba(0, 0, 0, 0.1);
  background-color: rgba(50, 50, 50, 0.4);
  border-radius: 3rem;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  transition: all 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
  .cardForTrack {
    display: flex;
    position: relative;
    gap: 1rem;
    overflow-y: auto;
    min-height: 120px;
    &__header{
      position: relative;
      width: 10vw;
      height: 120px;
      border-radius: 3rem 3rem;
      overflow: hidden;
      &_img {
      position: absolute;
      width: 120px;
      height: 120px;
      object-fit: cover;
    }
    }
    
    &__body {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      overflow: hidden;
      padding: 1vh;
      &_title {
        color: #fff;
        &-h3 {
          font-size: 1.5vw;
          color: var(--color-text-pink);
        }
        &-h4 {
          font-size: 1vw;
          color: var(--color-text-gray);
        }
        &-h5 {
          font-size: 0.75vw;
          color: rgba(255, 255, 255, 0.7)
        }
      }
    }
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    .cardForTrack {
    display: flex;
    
    min-height: 120px;

    
    &__body {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      overflow: hidden;
      padding: 1vh;
      &_title {
        color: #fff;
        &.h3 {
          font-size: 1rem;
        }
        &.h4 {
          font-size: 0.75rem;
        }
        &.h5 {
          font-size: 0.5rem;
        }
      }
    }
  }
}

  
`;
