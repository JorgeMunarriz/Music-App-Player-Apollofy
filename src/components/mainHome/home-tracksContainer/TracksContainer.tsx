import { lazy, Suspense, LazyExoticComponent, ComponentType } from "react";
import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination]);

import styled from "styled-components";

import HomeSkeleton from "../../../assets/skeleton/homeSkeleton";
import { useUserMusicContext } from "../../../context";

const LazyCarPTrackHome: LazyExoticComponent<ComponentType<any>> = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(import("../../cards/CardForTrack"));
    }, 2000);
  });
});

interface CardProps {
  id: string;
  trackName: string;
  trackUrl: string;
  trackImage: string;
}

type ProprQuery = {
  query: string;
};
export const TracksContainer = ({ query }: ProprQuery) => {
  const { tracks } = useUserMusicContext();

  return (
    <TracksContainerStyles>
      <h2 className="tracksTitle">Songs</h2>
      {tracks && (
        <Swiper navigation pagination slidesPerView={3} spaceBetween={10} className="mySwiper">
          {tracks &&
            tracks
              .filter(({ trackName }: any) => {
                if (!query) return true;
                if (query) {
                  const nameLowerCase = trackName.toLowerCase();
                  return nameLowerCase.includes(query.toLowerCase());
                }
              })
              .map(({ id, trackName, trackUrl, trackImage }: CardProps) => (
                <SwiperSlide key={id}>
                  <Suspense key={id} fallback={<HomeSkeleton />}>
                    <LazyCarPTrackHome id={id} trackImage={trackImage} trackName={trackName} trackUrl={trackUrl} />
                  </Suspense>
                </SwiperSlide>
              ))}
        </Swiper>
      )}
    </TracksContainerStyles>
  );
};

const TracksContainerStyles = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100vh;

  .tracksTitle {
    font-size: 35px;
    color: white;
    align-items: flex-start;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    margin-left: 1.5rem;
    opacity: 0.9;
  }
  .mySwiper {
    height: 70%;
    width: 100%;
    .swiper-wrapper {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin: 10px;
      padding: 1.5rem;
      .swiper-slide {
        margin: 0;
        padding: 0;
        margin-top: 5 !important;
        margin-right: 0 !important;
      }
    }
    .swiper-pagination-bullet {
      width: 20px;
      height: 10px;
      border-radius: 10px;
      transition: all 0.3s;
      background-color: black;
      left: 0;
      /* width: 100%; */
      top: 200px;
    }
    .swiper-pagination-bullet-active {
      background: #f8f7f9;
      width: 30px;
      height: 10px;
    }
    .swiper-button-prev,
    .swiper-button-next {
      width: 30px;
      height: 10px;
    }
    .swiper-button-prev:hover,
    .swiper-button-next:hover {
      color: #9d0b28;
    }
    .swiper-pagination {
    }
  }
`;
