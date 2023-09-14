import './App.css';
import { Router } from './router/RouterPaths.routes';
import './styles/font.css'
import { UserProvider } from './context';
import { GenresProvider } from './context/GenresContext';
import { TrackProvider } from './context/TrackContext';

function App() {

	return (
		<>
			<UserProvider>
				<TrackProvider>
					<GenresProvider>

						<Router />

					</GenresProvider>
				</TrackProvider>
			</UserProvider>

		</>
	);
}

export default App;
