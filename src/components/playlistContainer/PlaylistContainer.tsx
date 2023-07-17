import { useContext, useEffect, useState } from 'react';


import { DataMusicContext } from '../../context';
import { CardForPlaylist, PlaylistContainerStyles } from '..';
import { GetPlaylist } from '../../api/GetPlaylist';

export const PlaylistContainer = () => {
    // const  {playlists}  = useContext(DataMusicContext);
    const [data, setData] = useState([])

    

    useEffect(() => {
      const GetPlaylistData =async () => {
        const data = await GetPlaylist()
        console.log(data)
        setData(data) 

      }
      GetPlaylistData()
      
    }, [])
    
   console.log(data)
  

  return (
    <PlaylistContainerStyles>

       
        {
    

          data && data.map(({id, thumbnail, name, description }) => (
            
            <CardForPlaylist thumbnail={thumbnail} name={name} key={id} description={description}  id={id} isFollowed={false} publicAccessible={true} primaryColor={''}/>)
            
          )
        }
      
    </PlaylistContainerStyles>
  )
}
