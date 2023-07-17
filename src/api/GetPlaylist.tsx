
import { urlPlaylist } from '../context'


export const GetPlaylist = async () => {

    const response = await fetch(urlPlaylist);
    const data = await response.json();
    console.log(data)




  return  data
  
}
