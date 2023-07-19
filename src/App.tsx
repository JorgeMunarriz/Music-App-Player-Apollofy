import './App.css';
import {DataMusicProvider} from './context/DataMusicContext';
//import { MusicProvider, useDataTracks } from './context/MusicContext'
import {Router} from './router/RouterPaths.routes';
// import './styles/grid.css';
import './styles/reset.css';
import './styles/font.css'
import { UserProvider } from './context';

function App() {
	
	return (
		<>
			<DataMusicProvider>
				<UserProvider>

					<Router />

				</UserProvider>
			</DataMusicProvider>
		</>
	);
}

export default App;
