import { Link } from "react-router-dom";
import { Track } from "../../types/data";
import { CardForTrackStyles } from "..";


export const CardForTrack = ({ id, thumbnail, name, artist}: Track) => {
 
  return (
    <CardForTrackStyles key={id}>
      <Link to={`/player/${id}`} className="card-container">
        <img src={thumbnail} alt={name}/>
        <div className="card-body">
          <h3 className="title-h3">{name}</h3>
          <h4>{artist}</h4>
        </div>
      </Link>
    </CardForTrackStyles>
  );
};
