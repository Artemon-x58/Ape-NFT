import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Container } from "../Container/Container.styled";
import {
  MindMapItem,
  MindMapLink,
  MindMapSubtitle,
  MindMapSvg,
  MindMapText,
  MindMapTitle,
} from "./MindMap.styled";
import Icons from "../../img/svg/icons.svg";
import { SwiperBtns } from "../SwiperBtns/SwiperBtns";

export const MindMapSlider = () => {
  return (
    <Container>
      <MindMapTitle id="mind-map">Mind map</MindMapTitle>
      <Swiper spaceBetween={24} slidesPerView={1}>
        <SwiperSlide>
          <MindMapItem>
            <MindMapText>
              All owners of APE NFTs and all future collections will receive a
              percentage of sales based on the number of NFTs they own
            </MindMapText>
            <MindMapSubtitle>Yape drop</MindMapSubtitle>
          </MindMapItem>
        </SwiperSlide>
        <SwiperSlide>
          <MindMapItem>
            <MindMapText>
              Launch of the 2nd YACHT Collection Releasing the first version of
              the Ape Slam Game
            </MindMapText>
            <MindMapSubtitle>New collection</MindMapSubtitle>
          </MindMapItem>
        </SwiperSlide>
        <SwiperSlide>
          <MindMapItem>
            <MindMapText>
              Launch your own token, the proceeds of which will go to a global
              fund to LAUNCH YACHT CLUB AND PROMOTE it
            </MindMapText>
            <MindMapSubtitle>Token</MindMapSubtitle>
          </MindMapItem>
        </SwiperSlide>
        <SwiperSlide>
          <MindMapItem style={{ backgroundColor: "#dc3b5a" }}>
            <MindMapLink
              href="https://www.linkedin.com/in/artem-melnyk-x58/"
              target="_blank"
            >
              <MindMapSvg>
                <use href={`${Icons}#icon-arrow`} />
              </MindMapSvg>
              <MindMapSubtitle>
                Learn
                <br />
                more
                <br />
                in mind map
              </MindMapSubtitle>
            </MindMapLink>
          </MindMapItem>
        </SwiperSlide>
        <SwiperBtns />
      </Swiper>
    </Container>
  );
};
