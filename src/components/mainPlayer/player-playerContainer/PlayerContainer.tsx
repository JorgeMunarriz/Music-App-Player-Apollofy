import styled from 'styled-components';
import { Track } from "../../../types/data";
import { useUserMusicContext } from "../../../context";

export const PlayerContainer = ({ id }: Track) => {

  const { tracks } = useUserMusicContext();


  return (
    <PlayerContainerStyles >
      <div className="playerContainer">
        {/* <img className="playerContainer__img-big" src={tracks?.} />
        <h3 className="playerContainer__h3">{tracks?.name}</h3>
        <span className="playerContainer__span">{tracks?.artist}</span> */}
      </div>
    </PlayerContainerStyles>
  );
};


export const PlayerContainerStyles = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 90%;
.playerContainer{
  display: flex;
  height: 90%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 2rem;
  &__img-big{
    width: 40vh;
    height: auto;
  }
  &__h3{
    color: #fff;
    font-size: 2rem;
  }
  &__span{
    color: rgba(255, 255, 255, 0.7);
  }
}
`;