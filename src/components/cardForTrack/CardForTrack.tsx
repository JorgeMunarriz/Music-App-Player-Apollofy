import { Link } from "react-router-dom";
import { Track } from "../../types/data";
import { CardForTrackStyles } from "..";


export const CardForTrack = ({ id, thumbnail, name, artist, visualizations }: Track) => {
 
  return (
    <CardForTrackStyles key={id}>
      <Link to={`/player/${id}`} className="cardForTrack">
        <div className="cardForTrack__header">
        <img className="cardForTrack__header_img" src={thumbnail} />

        </div>
        <div className="cardForTrack__body">
          <h3 className="cardForTrack__body_title-h3">{name}</h3>
          <h4 className="cardForTrack__body_title-h4">{artist}</h4>
          <h5 className="cardForTrack__body_title-h5">Reproductions: {visualizations}</h5>
        </div>
      </Link>
    </CardForTrackStyles>
  );
};
