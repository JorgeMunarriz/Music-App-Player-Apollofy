import styled from "styled-components";
import { useContext } from "react";
import { DataMusicContext } from "../../context";
import { AudioPlayerComponent } from "..";
import { breakpoints } from '../../styles/breakpoints.ts'


export const Player = () => {

  const data = useContext(DataMusicContext);
  const track = data?.currentTrack;

  return (
    <PlayerStyles>
      {track ?
        <>
          <div className="playerstyles__div-whole">
            <img className="playerstyles__img" src={track?.thumbnail} alt={track?.name} />
            <div className="playerstyles__info">
              <h4 className="playerstyles__info-h4">{track?.name}</h4>
              <p className="playerstyles__info-paragraph">{track?.artist}</p>
            </div>
          </div>
          <div className="playerstyles__div-container">
            <div className="playerstyles__div-container-audio">
              <AudioPlayerComponent />
            </div>
          </div>
        </>
        :
        <div className="playerstyles__div-container-solo">
          <div className="playerstyles__div-container-audio">
            <AudioPlayerComponent />
          </div>
        </div>
      }
    </PlayerStyles>
  );
};


const PlayerStyles = styled.div`

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
      width: 5rem;
    }
    .playerstyles__info {
      padding-left: 1vh;
      .playerstyles__info-h4 {
        font-size:clamp(1rem, 2.1rem, 2.8rem);
        color: rgba(255, 255, 255, 0.5);
      }
      .playerstyles__info-paragraph {
        font-size: clamp(.8rem, 1.7rem, 3rem);
        color: var(--color-text-pink);
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
  .playerstyles__div-container-solo {
    width: 90%;
    display: flex;
    .playerstyles__div-container-audio {
      width: 100%;
      border: 0 transparent;
    }
  }


  @media (${breakpoints.min} <= width <= ${breakpoints.mobileMax}px) {

    .playerstyles__div-whole {
      display: flex;
      align-items: center;
      justify-content: center;
      width: min-content;
      .playerstyles__img {
        width: 6rem;
      }
    }

    .playerstyles__div-container {
      min-width: 60%;
      display: flex;
      .playerstyles__div-container-audio {
        width: 100%;
        border: 0 transparent;
      }
    }
  }


  @media (${breakpoints.mobileMax} < width <= ${breakpoints.tabletMax}px) {

    .playerstyles__div-whole {
      display: flex;
      align-items: center;
      justify-content: center;
      .playerstyles__img {
        width: 9rem;
      }
    }

  }


  @media (${breakpoints.tabletMax} < width <= ${breakpoints.laptopsMax}px)  {

    .playerstyles__div-whole {
      display: flex;
      .playerstyles__img {
        width: 50px;
      }
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


  @media (${breakpoints.laptopsMax} < width <= ${breakpoints.desktopMax}px) {


    .playerstyles__div-whole {
      display: flex;
      flex-shrink:0;
  		justify-content: space-evenly;
      .playerstyles__img {
        width: 9rem;
      }
    }

    .playerstyles__div-container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 70%;
      .playerstyles__div-container-audio {
        width: 100%;
        border: 0 transparent;
      }
    }
  }


  @media (width > ${breakpoints.desktopMax}) {

    .playerstyles__div-whole {
      display: flex;
      flex-shrink:0;
  		justify-content: space-evenly;
      .playerstyles__img {
        width: 9rem;
      }
    }

    .playerstyles__div-container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 70%;
      .playerstyles__div-container-audio {
        width: 100%;
        border: 0 transparent;
      }
    }
  }
`;
