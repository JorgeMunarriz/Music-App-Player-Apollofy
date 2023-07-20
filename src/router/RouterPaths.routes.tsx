import { BrowserRouter, Route, Routes } from "react-router-dom";
//import { CSSTransition, TransitionGroup } from "react-transition-group";
import { HomePage, LandingPage, LoginPage, ProfilePage, RegisterPage, PlayerPage, StartingPage } from "../pages/index";
import "../App.css";
import { PlaylistPage } from "../pages/private/PlaylistPage";


export const Router = () => {
  return (
    <BrowserRouter>
      {/* <AnimatedRoutes /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/starting" element={<StartingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="player" element={<PlayerPage />} />
        <Route path="player/:id" element={<PlayerPage />} />
        <Route path="playlists" element={<PlaylistPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
};




// const AnimatedRoutes = () => {
//   const location = useLocation();

//   return (
//     <TransitionGroup>
//       <CSSTransition key={location.key} timeout={500} classNames="page">
//         <Routes location={location}>
//           <Route path="/" element={<LandingPage />} />
//           <Route path="/starting" element={<StartingPage />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/register" element={<RegisterPage />} />
//         </Routes>
//       </CSSTransition>
//     </TransitionGroup>
//   );
// };