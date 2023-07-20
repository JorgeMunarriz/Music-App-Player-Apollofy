import {lazy, Suspense} from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import { CSSTransition, TransitionGroup } from "react-transition-group";
import { LandingPage, LoginPage,  RegisterPage,  StartingPage } from "../pages/index";
import "../App.css"; 
import RouteSkeletor from '../assets/skeleton/routeSkeletor.tsx';


const LazyHomePage = lazy(() => import("../pages/private/HomePage.tsx"))
const LazyProfilePage = lazy(() => import("../pages/private/ProfilePage.tsx"))
const LazyPLayerPage = lazy(() => import("../pages/private/PlayerPage.tsx"))
const LazyPlaylistPage = lazy(() => import("../pages/private/PlaylistPage.tsx"))


export const Router = () => {
  return (
    <BrowserRouter>
      {/* <AnimatedRoutes /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/starting" element={<StartingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<Suspense fallback={<RouteSkeletor />}><LazyHomePage/></Suspense>} />
        <Route path="/player" element={<Suspense fallback={<RouteSkeletor />}><LazyPLayerPage/></Suspense>}/>
        <Route path="/player/:id" element={<Suspense fallback={<RouteSkeletor />}><LazyPLayerPage/></Suspense>} />
        <Route path="/playlists" element={<Suspense fallback={<RouteSkeletor />}><LazyPlaylistPage/></Suspense>} />
        <Route path="/profile" element={<Suspense fallback={<RouteSkeletor />}><LazyProfilePage/></Suspense>}/>
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