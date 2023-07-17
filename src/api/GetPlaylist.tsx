
import { urlPlaylist } from '../context'


export const GetPlaylist = async () => {

    const response = await fetch(urlPlaylist ,
      {
         "Access-Control-Allow-Origin" : "http://localhost:3000/" 
      });
    const data = await response.json();
    console.log(data)




  return  data
  
}
