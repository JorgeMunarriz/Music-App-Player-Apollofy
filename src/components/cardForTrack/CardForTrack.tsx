import { Link } from "react-router-dom";
import { Track } from "../../types/data";
import { CardForTrackStyles } from "..";
import { addReproductions } from "../../api/addReproductions";


export const CardForTrack = ({ id, thumbnail, name, artist, genre, liked, url, reproductions }: Track) => {
 
  return (
    <CardForTrackStyles key={id}>
      <Link to={`/player/${id}`} className="card-container" onClick={() => addReproductions(id)}>
        <img src={thumbnail} />
        <div className="card-body">
          <h3 className="title-h3">{name}</h3>
          <h4>{artist}</h4>
          <h5>Reproductions: {reproductions}</h5>
        </div>
      </Link>
    </CardForTrackStyles>
  );
};
