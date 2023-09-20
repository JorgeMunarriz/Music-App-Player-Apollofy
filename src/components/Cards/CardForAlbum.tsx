import { Link } from 'react-router-dom';
import { ALBUM } from '../../config/routes/paths';
import styled from 'styled-components';
import { BsHeartFill, BsHeart } from 'react-icons/bs'
import { breakpoints } from '../../styles/breakpoints';
import { useUserContext } from '../../context';
import { useState } from 'react';

interface AlbumProps {
  id: string
  albumName: string
  albumUrl: string
  albumImage: string
}


const CardForAlbum = ({ id,
  albumName,
  albumUrl,
  albumImage, }: AlbumProps) => {

  const { userData, handleUserData } = useUserContext();
  const [isLiked, setIsLiked] = useState(userData?.albumId.includes(id));

  const handleLiked = (id: string) => {
    handleUserData(id, "album");
    setIsLiked(!isLiked)
  }

  return (
    <CardForAlbumStyles key={id}>
      <Link to={`${ALBUM}/${id}`} className="cardForAlbum">
        <div className="cardForAlbum__header">
          <img alt={albumUrl} className="cardForAlbum__header_img" src={albumImage} />
        </div>
        <div className="cardForAlbum__body">
          <h3 className="cardForAlbum__body_title-h3">{albumName}</h3>

          <h5 className="cardForAlbum__body_title-h5">Reproductions: {0}</h5>
        </div>
      </Link>

      <button className="addToLike cardForPlaylistPlayer__follow-btn follow_btn" onClick={() => handleLiked(id)} >
        {isLiked ? <BsHeartFill className="addToLike__fill-heart" /> : <BsHeart className='addToLike__out-heart' />}
      </button>

    </CardForAlbumStyles>
  );
};

const CardForAlbumStyles = styled.div`
  display: flex;
  box-shadow: 12px 13px 15px 6px rgba(0, 0, 0, 0.8), 29px 36px 15px -3px rgba(0, 0, 0, 0.1);
  background-color: rgba(50, 50, 50, 0.4);
  border-radius: 0rem 1rem 1rem 0rem;
  padding: 0.25rem;
  gap: 1rem;
  transition: all 0.3s;
  border: 1px solid rgba(66, 66, 66, 0.4);
  margin: 10px;
  &:hover {
    background-color: rgba(100, 100, 100, 0.4);
    cursor: pointer;
  }

  .cardForAlbum {
    display: flex;
    position: relative;
    gap: 1rem;
    overflow-y: auto;
    min-height: 120px;

    &__header{
      position: relative;
      width: 10vw;
      height: 120px;

      overflow: hidden;
      &_img {
      position: absolute;
      width: 120px;
      height: 169px;
      object-fit: cover;
      opacity: 0.8;
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
  .addToLike {
    display: flex;
    position: absolute;
    justify-content: space-between;
    top: 0.5rem;
    right: 0.5rem;
    z-index: 10;
    cursor: grabbing;
    &__fill-heart {
      font-size: 3rem;
      color: var(--color-text-gray);
      border: none;
      opacity: 0.9;
    }
    &__out-heart {
      font-size: 3rem;
      color: var(--color-text-gray);
      border: none;
      opacity: 0.9;
    }
  }
  @media (${breakpoints.min}px <= width <= ${breakpoints.tabletMax}px) {
   
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 97%;
    height: 79%;
    .cardForAlbum {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 300px;
      width: 100%;
      margin: 20px;
      /* padding: 20px; */
    }
    .cardForAlbum__header{
      width: 100%;
      height: 90%;
    }
    .cardForAlbum__header_img{
      width: 100%;
    height: 180px;
    align-items: center;
    object-fit: cover;
    }
        
   .cardForAlbum__body {
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          margin-top: 10px;
          &_title {
            color: #fff;
            &-h3 {
              font-size: 15px;
              color: var(--color-text-pink);
            }
            &-h4 {
              font-size: 20px;
              color: var(--color-text-gray);
            }
            &-h5 {
              font-size:10px;
              color: rgba(255, 255, 255, 0.7)
            }
          }
    }

   
  }

`;


export default CardForAlbum