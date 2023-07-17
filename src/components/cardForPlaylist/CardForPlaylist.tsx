import { Link } from "react-router-dom";
import { Playlist } from "../../types/data";
import { CardForPlaylistStyles } from "..";

export const CardForPlaylist = ({ id, thumbnail, name }: Playlist) => {
 

  return (
    <CardForPlaylistStyles key={id}>
      <Link to="" className="card-container">
        <img src={thumbnail} />
        <div className="card-body">
          <h3>{name}</h3>
        </div>
      </Link>
    </CardForPlaylistStyles>
  );
};
