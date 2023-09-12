import './App.css';
import {DataMusicProvider} from './context/DataMusicContext';
import {Router} from './router/RouterPaths.routes';
import './styles/font.css'
import { UserProvider } from './context';

function App() {
	
	return (
		<>
				<UserProvider>

					<Router />

				</UserProvider>

		</>
	);
}

export default App;
