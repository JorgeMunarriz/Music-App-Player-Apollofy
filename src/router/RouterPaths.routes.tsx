import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {HomePage, LandingPage, LoginPage, ProfilePage, RegisterPage, ReproPage, StartingPage} from '../pages/index';

export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/starting" element={<StartingPage />} />

				<Route path="/home" element={<HomePage />} />
				<Route path="/repro" element={<ReproPage />} />
				<Route path="/profile" element={<ProfilePage />} />
			</Routes>
		</BrowserRouter>
	);
};
