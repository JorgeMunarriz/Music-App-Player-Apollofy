import {lazy, Suspense} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
//import { CSSTransition, TransitionGroup } from "react-transition-group";
import {LandingPage, LoginPage, RegisterPage, StartingPage} from '../pages/index';
import '../App.css';
import RouteSkeletor from '../assets/skeleton/routeSkeletor.tsx';
import {HOME, LANDING, LOGIN, PLAYER, PLAYERID, PLAYLISTS, PROFILE, REGISTER, STARTING} from '../config/routes/paths.ts';
import {PrivateRoute, PublicRoute} from '../components/index.ts';
import { ProtectedRoutes } from '../utils/ProtectedRoutes.tsx';
import {useAuth0} from '@auth0/auth0-react'

const LazyHomePage = lazy(() => import('../pages/private/HomePage.tsx'));
const LazyProfilePage = lazy(() => import('../pages/private/ProfilePage.tsx'));
const LazyPLayerPage = lazy(() => import('../pages/private/PlayerPage.tsx'));
const LazyPlaylistPage = lazy(() => import('../pages/private/PlaylistPage.tsx'));

export const Router = () => {
	const {user} = useAuth0()
	return (
		<BrowserRouter>
			{/* <AnimatedRoutes /> */}
			<Routes>
				<Route path={LANDING} element={<PublicRoute />}>
					<Route index element={<LandingPage />} />
					<Route path={STARTING} element={<StartingPage />} />
					<Route path={LOGIN} element={<LoginPage />} />
					<Route path={REGISTER} element={<RegisterPage />} />
				</Route>

				<Route path={HOME} element={<ProtectedRoutes user={user}><PrivateRoute /></ProtectedRoutes>}>
					<Route
						index
						element={
							<Suspense fallback={<RouteSkeletor />}>
								<LazyHomePage />
							</Suspense>
						}
					/>
					<Route
						path={PLAYER}
						element={
							<Suspense fallback={<RouteSkeletor />}>
								<LazyPLayerPage />
							</Suspense>
						}
					/>
					<Route
						path={PLAYERID}
						element={
							<Suspense fallback={<RouteSkeletor />}>
								<LazyPLayerPage />
							</Suspense>
						}
					/>
					<Route
						path={PLAYLISTS}
						element={
							<Suspense fallback={<RouteSkeletor />}>
								<LazyPlaylistPage />
							</Suspense>
						}
					/>
					<Route
						path={PROFILE}
						element={
							<Suspense fallback={<RouteSkeletor />}>
								<LazyProfilePage />
							</Suspense>
						}
					/>
				</Route>
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
