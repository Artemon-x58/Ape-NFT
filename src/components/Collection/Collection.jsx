import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Container } from "../Container/Container.styled";
import { CollectionSliderImg, CollectionTitle } from "./Collection.styled";
import Images1 from "../../img/slider/slider-1.jpg";
import Images2 from "../../img/slider/slider-2.jpg";
import Images3 from "../../img/slider/slider-3.jpg";
import Images4 from "../../img/slider/slider-4.jpg";
import Images5 from "../../img/slider/slider-5.jpg";
import Images6 from "../../img/slider/slider-6.jpg";
import Images7 from "../../img/slider/slider-7.jpg";
import Images8 from "../../img/slider/slider-8.jpg";
import Images9 from "../../img/slider/slider-9.jpg";
import Images10 from "../../img/slider/slider-10.jpg";
import Images11 from "../../img/slider/slider-11.jpg";
import Images12 from "../../img/slider/slider-12.jpg";
import Images13 from "../../img/slider/slider-13.jpg";
import Images14 from "../../img/slider/slider-14.jpg";
import { SwiperBtns } from "../SwiperBtns/SwiperBtns";

export const Collection = () => {
  return (
    <Container>
      <CollectionTitle>Collection</CollectionTitle>
      <Swiper spaceBetween={24} slidesPerView={1}>
        <SwiperSlide>
          <CollectionSliderImg src={Images1} alt="Ape" />
        </SwiperSlide>
        <SwiperSlide>
          <CollectionSliderImg src={Images2} alt="Ape" />
        </SwiperSlide>
        <SwiperSlide>
          <CollectionSliderImg src={Images3} alt="Ape" />
        </SwiperSlide>
        <SwiperSlide>
          <CollectionSliderImg src={Images4} alt="Ape" />
        </SwiperSlide>
        <SwiperSlide>
          <CollectionSliderImg src={Images5} alt="Ape" />
        </SwiperSlide>
        <SwiperSlide>
          <CollectionSliderImg src={Images6} alt="Ape" />
        </SwiperSlide>
        <SwiperSlide>
          <CollectionSliderImg src={Images7} alt="Ape" />
        </SwiperSlide>
        <SwiperSlide>
          <CollectionSliderImg src={Images8} alt="Ape" />
        </SwiperSlide>
        <SwiperSlide>
          <CollectionSliderImg src={Images9} alt="Ape" />
        </SwiperSlide>
        <SwiperSlide>
          <CollectionSliderImg src={Images10} alt="Ape" />
        </SwiperSlide>
        <SwiperSlide>
          <CollectionSliderImg src={Images11} alt="Ape" />
        </SwiperSlide>
        <SwiperSlide>
          <CollectionSliderImg src={Images12} alt="Ape" />
        </SwiperSlide>
        <SwiperSlide>
          <CollectionSliderImg src={Images13} alt="Ape" />
        </SwiperSlide>
        <SwiperSlide>
          <CollectionSliderImg src={Images14} alt="Ape" />
        </SwiperSlide>
        <SwiperBtns />
      </Swiper>
    </Container>
  );
};
