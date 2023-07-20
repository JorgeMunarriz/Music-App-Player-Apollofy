import styled from "styled-components";


export const TracksContainerStyles = styled.div`
display: flex;
flex-wrap: wrap;

height: 45%;
width: 100%;

justify-content: space-around;
align-items: center;

border: 1px solid rgba(66, 66, 66, 0.4);
border-radius: 0.25rem;

  .mySwiper {
    height: 185px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    .swiper-pagination-bullet {
      width: 10px;
      height: 10px;
      border-radius: 10px;
      transition: all 0.3s;
    }
    .swiper-pagination-bullet-active {
      background: #f8f7f9;
      width: 30px;
      height: 10px;
      border-radius: 0.5rem;
    }
    .swiper-button-prev,
    .swiper-button-next {
      /* color: red; */
      width: 30px;
      height: 5px;

    }
    .swiper-button-prev,
    .swiper-button-next:hover {
      color: #9d0b28;
      

    }
  }
`;
