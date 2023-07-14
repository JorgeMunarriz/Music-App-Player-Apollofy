
import './App.css'
import { AuthProvider } from './context/AuthContext'
import { MusicProvider, useDataTracks } from './context/MusicContext'
import { Router } from './router/RouterPaths.routes'
import './styles/Grid.css'
import './styles/Reset.css'


function App() {
  const {tracks} = useDataTracks()
console.log(tracks)
  return (
    <>
    <MusicProvider>
    <AuthProvider name={''} id={0}>
      <Router/>
      </AuthProvider>
      </MusicProvider>
    </>
  )
}

export default App
