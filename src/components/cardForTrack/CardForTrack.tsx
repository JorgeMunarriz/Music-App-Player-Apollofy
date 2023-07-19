import { Link } from "react-router-dom";
import { Track } from "../../types/data";
import { CardForTrackStyles } from "..";
// import { addReproductions } from "../../api/addReproductions";


<<<<<<< HEAD
export const CardForTrack = ({ id, thumbnail, name, artist}: Track) => {
 
  return (
    <CardForTrackStyles key={id}>
      <Link to={`/player/${id}`} className="card-container">
        <img src={thumbnail} alt={name}/>
        <div className="card-body">
          <h3 className="title-h3">{name}</h3>
          <h4>{artist}</h4>
=======
export const CardForTrack = ({ id, thumbnail, name, artist, reproductions }: Track) => {
 
  return (
    <CardForTrackStyles key={id}>
      <Link to={`/player/${id}`} className="cardForTrack">
        <div className="cardForTrack__header">
        <img className="cardForTrack__header_img" src={thumbnail} />

        </div>
        <div className="cardForTrack__body">
          <h3 className="cardForTrack__body_title-h3">{name}</h3>
          <h4 className="cardForTrack__body_title-h4">{artist}</h4>
          <h5 className="cardForTrack__body_title-h5">Reproductions: {reproductions}</h5>
>>>>>>> 7e735f44b1f4419f181a26e6cfae63f63fc7c412
        </div>
      </Link>
    </CardForTrackStyles>
  );
};
