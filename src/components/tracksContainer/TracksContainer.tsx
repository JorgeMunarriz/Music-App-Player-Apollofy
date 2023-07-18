import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Importa los estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Instala los módulos necesarios de Swiper
SwiperCore.use([Navigation, Pagination]);

import { useContext } from "react";
import { DataMusicContext } from "../../context";

import { TracksContainerStyles } from "./tracksContainer.Styles";
import { CardForTrack } from "..";

export const TracksContainer = () => {
  const data = useContext(DataMusicContext);
  if (data.data?.tracks !== null) {
    const tracks = data?.data?.tracks.sort((elemA,elemB) => elemB.reproductions - elemA.reproductions)
    
    return (
      <TracksContainerStyles>
      {tracks && (
        <Swiper
        navigation
        pagination
        slidesPerView={3}
        spaceBetween={10}
        // Agrega cualquier otra opción de configuración de Swiper que desees
        >
          {tracks.map(({ id, thumbnail, name, genre, artist, url, liked, reproductions }) => (
            <SwiperSlide key={id}>
              <CardForTrack
                thumbnail={thumbnail}
                name={name}
                genre={genre}
                id={id}
                artist={artist}
                url={url}
                liked={liked}
                reproductions={reproductions}
                />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </TracksContainerStyles>
  );
  }
};
