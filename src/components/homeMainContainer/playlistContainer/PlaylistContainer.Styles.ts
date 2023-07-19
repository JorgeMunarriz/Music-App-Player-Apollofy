import styled from 'styled-components';


export const PlaylistContainerStyles = styled.div`
 display: flex;
 flex-wrap: wrap;
 /* overflow-y: auto; */
 justify-content: space-around;
 /* height: 100%; */
 width: 100%;
 border-bottom: 1px solid rgba(0, 0, 0, 0.8);
 gap: 1.5rem;
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
        color: #000;
    }
 }

 @media (height < 500px) {
  display:none;
 }
`;


