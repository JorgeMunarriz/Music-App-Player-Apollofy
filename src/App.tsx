
import './App.css'
import { AuthProvider } from './context/AuthContext'
import { Router } from './router/RouterPaths.routes'
import './styles/Grid.css'
import './styles/Reset.css'

function App() {
  

  return (
    <>
    <AuthProvider name={''} id={0}>
      <Router/>
      </AuthProvider>
    </>
  )
}

export default App
