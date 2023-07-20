import styled from 'styled-components';


export const PlaylistContainerStyles = styled.div`
display: flex;
flex-wrap: wrap;

height: 45%;
width: 100%;

justify-content: space-around;
align-items: center;

border: 1px solid rgba(66, 66, 66, 0.4);
border-radius: 0.25rem;

.mySwiper{
  height: 120px;
  .swiper-wrapper{
      display: flex;
      align-items: center;
      margin: 0;
      padding: 1.5rem;
      .swiper-slide{
        margin: 0;
        padding: 0;
        margin-top: 0!important;
        margin-right: 0!important;
      }
  }      
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
  .swiper-button-prev, .swiper-button-next{
      width: 30px;
      height: 1px;

    }
    .swiper-button-prev:hover,
    .swiper-button-next:hover {
      color: #9d0b28;
      

    }
}
`


