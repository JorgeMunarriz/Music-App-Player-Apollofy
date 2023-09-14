import './App.css';
<<<<<<< HEAD
import { DataMusicProvider } from './context/DataMusicContext';
import { Router } from './router/RouterPaths.routes';
=======
import {Router} from './router/RouterPaths.routes';
>>>>>>> e0311724839702b2c8a73c9fd9330602e87258fd
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
