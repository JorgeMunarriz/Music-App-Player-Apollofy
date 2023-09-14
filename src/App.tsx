import './App.css';
import {Router} from './router/RouterPaths.routes';
import './styles/font.css'
import { UserProvider } from './context';
import { GenresProvider } from './context/GenresContext';
import { TrackProvider } from './context/TrackContext';

function App() {

	return (
		<>
			<UserProvider>
				<GenresProvider>
				<TrackProvider>
					<Router />
					</TrackProvider>
				</GenresProvider>
			</UserProvider>

		</>
	);
}

export default App;
