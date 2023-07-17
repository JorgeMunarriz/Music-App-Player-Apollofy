// Importación de módulos y tipos necesarios
import { createContext, useContext, useEffect, useState } from 'react';
import { Props, Track, User } from '../types/data';

// Creación del contexto para las pistas de música
const MusicContext = createContext<Track[]>({} as Track[]);

// Componente proveedor del contexto de música
export const MusicProvider = ({ children }: Props) => {
  // Estado para almacenar los datos de la base de datos
  const [dbData, setDbData] = useState<Root[]>( );
  // Estado para almacenar las pistas de música
  const [tracks, setTracks] = useState<Track[]>([]);

  // Función para realizar la solicitud a la API y obtener los datos de las pistas
  const fetchApi = async () => {
    const response = await fetch("http://localhost:3000/");
    
    try {
      // Parsear la respuesta como JSON y almacenar los datos en la variable 'data'
      const data: Track[] = await response.json();
      // Actualizar el estado de 'tracks' con los datos obtenidos
      setTracks(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  // Efecto que se ejecuta al montar el componente
  useEffect(() => {
    // Llamar a la función fetchApi para obtener los datos
    const dataFetch = async (): Promise<void> => {
      // Realizar la solicitud a la API y obtener los datos de las pistas
      const dataTracks = await fetchApi();
      // Actualizar el estado de 'tracks' con los datos obtenidos
      setTracks(dataTracks);
    }
    // Llamar a la función dataFetch al montar el componente (solo una vez)
    dataFetch();
  }, []);

  // Renderizado del proveedor de contexto y sus componentes hijos
  return (
    <MusicContext.Provider value={{ tracks }}>
      {children}
    </MusicContext.Provider>
  )
}

// Hook personalizado para consumir los datos de las pistas
export const useDataTracks = () => {
  // Obtener los datos de las pistas desde el contexto de música
  const userDataTracks = useContext(MusicContext);
  console.log(userDataTracks);
  // Si no se encuentran los datos de las pistas en el contexto, lanzar un error
  if (!userDataTracks) {
    throw new Error('User data should be inside the provider');
  }
  // Devolver los datos de las pistas
  return userDataTracks;
};
