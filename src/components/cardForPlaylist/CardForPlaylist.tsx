import { Link } from "react-router-dom"
import { CardForPlaylistStyles } from "./cardForPlaylist.styles"
import { Playlist } from "../../types/data"

export const CardForPlaylist = ({id, description, name, thumbnail}: Playlist)=>{

    return(
        <CardForPlaylistStyles key={id}>
            Hola
            <Link to='' className="card-container">
                <img src={thumbnail} />
                <div className="card-body">
                    <h3>{name}</h3>
                    <h4>{description}</h4>
                </div>
            </Link>
        </CardForPlaylistStyles>)
    
}
