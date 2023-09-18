import './App.css';
import { Router } from './router/RouterPaths.routes';
import './styles/font.css'
import { UserProvider } from './context';
import { GenresProvider } from './context/GenresContext';
import { TrackProvider } from './context/TrackContext';
import { UserMusicProvider } from './context/UserMusicContext';
import { QueuePlayerProvider } from './context/QueuePlayerContext';

function App() {

	return (
		<>
			<UserProvider>
				<UserMusicProvider>
					<GenresProvider>
						<TrackProvider>
							<QueuePlayerProvider>
								<Router />
							</QueuePlayerProvider>
						</TrackProvider>
					</GenresProvider>
				</UserMusicProvider>
			</UserProvider>

		</>
	);
}

export default App;
