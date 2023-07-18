import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination]);

import { useContext } from "react";
import { DataMusicContext } from "../../context";

import { TracksContainerStyles } from "./tracksContainer.Styles";
import { CardForTrack } from "..";

export const TracksContainer = ({query}) => {
  const data = useContext(DataMusicContext);
  const tracks = data?.data?.tracks?.sort((elemA,elemB) => elemB.visualizations - elemA.visualizations)
  
  
  return (
    <TracksContainerStyles>
      {tracks && (
        <Swiper
          navigation
          pagination
          slidesPerView={3}
          spaceBetween={10}
        >
          { tracks && tracks.filter(({name}) => {
            if(!query) return true;
            if(query){
              const nameLowerCase = name.toLowerCase();
              return nameLowerCase.includes(query.toLowerCase())
            }
          })
          .map(({ id, thumbnail, name, genre, artist, url, liked, visualizations }) => (
            
              <SwiperSlide key={id}>
                <CardForTrack
                  thumbnail={thumbnail}
                  name={name}
                  genre={genre}
                  id={id}
                  artist={artist}
                  url={url}
                  liked={liked}
                  visualizations={visualizations}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
    </TracksContainerStyles>
  );
};
