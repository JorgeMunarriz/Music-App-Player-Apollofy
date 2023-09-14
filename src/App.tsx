import './App.css';
import { DataMusicProvider } from './context/DataMusicContext';
import { Router } from './router/RouterPaths.routes';
import './styles/font.css'
import { UserProvider } from './context';
import { GenresProvider } from './context/GenresContext';

function App() {

	return (
		<>
			<UserProvider>
				<GenresProvider>

					<Router />

				</GenresProvider>
			</UserProvider>

		</>
	);
}

export default App;
