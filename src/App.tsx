
import './App.css'
import { AuthProvider } from './context/AuthContext'
import { DataMusicProvider } from './context/DataMusicContext'
//import { MusicProvider, useDataTracks } from './context/MusicContext'
import { Router } from './router/RouterPaths.routes'
import './styles/Grid.css'
import './styles/Reset.css'


function App() {
//   const {tracks} = useDataTracks()
// console.log(tracks)

  return (
    <>
    <DataMusicProvider>    
    <AuthProvider name={''} id={0}>
      <Router/>
      </AuthProvider>      
      </DataMusicProvider>
    </>
  )
}

export default App
