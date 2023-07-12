import { useDataUser } from "../context/AuthContext"


export const LandingPage = () => {
  const {user, login, logout} = useDataUser()
  console.log(user)
  const handleLogin = () => {
    login("pepe")
  }
  const handleLogout = () => {
    logout();
  }


  return (
    <>
    <div>LandingPage</div>
    
    <button onClick={handleLogin}>Log in</button>
    <button onClick={handleLogout}>Logout</button>
    </>
  )
}
