import { Link } from "react-router-dom"
import { CardForPlaylistStyles } from "./cardForPlaylist.styles"
import { Playlist } from "../../types/data"
import logo from '../../assets/img/logo-homepage.png'

export const CardForPlaylist = ({id, thumbnail, name, description}: Playlist) =>{
    console.log(thumbnail)
    
        
    
    return(
        <CardForPlaylistStyles key={id}  >
          
                <img src={thumbnail} />
            <Link to='' className="card-container">
                <div className="card-body">
                    <h3>{name}</h3>
                </div>
            </Link>
        </CardForPlaylistStyles>)
    
}
