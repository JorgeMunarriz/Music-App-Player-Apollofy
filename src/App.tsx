import './App.css';
import { Router } from './router/RouterPaths.routes';
import './styles/font.css'
import { UserProvider } from './context';
import { GenresProvider } from './context/GenresContext';
import { UserMusicProvider } from './context/UserMusicContext';
import { QueuePlayerProvider } from './context/QueuePlayerContext';

function App() {

	return (
		<>
			<UserProvider>
				<UserMusicProvider>
					<GenresProvider>
							<QueuePlayerProvider>
								<Router />
							</QueuePlayerProvider>						
					</GenresProvider>
				</UserMusicProvider>
			</UserProvider>

		</>
	);
}

export default App;
