import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Container } from "../Container/Container.styled";
import {
  MindMapSliderItem,
  MindMapSliderLink,
  MindMapSubtitle,
  MindMapSvg,
  MindMapText,
  MindMapTitle,
} from "./MindMap.styled";
import Icons from "../../img/svg/icons.svg";
import { SwiperBtns } from "../SwiperBtns/SwiperBtns";

export const MindMap = () => {
  return (
    <Container>
      <MindMapTitle id="mind-map">Mind map</MindMapTitle>
      <Swiper spaceBetween={24} slidesPerView={1}>
        <SwiperSlide>
          <MindMapSliderItem>
            <MindMapText>
              All owners of APE NFTs and all future collections will receive a
              percentage of sales based on the number of NFTs they own
            </MindMapText>
            <MindMapSubtitle>Yape drop</MindMapSubtitle>
          </MindMapSliderItem>
        </SwiperSlide>
        <SwiperSlide>
          <MindMapSliderItem>
            <MindMapText>
              Launch of the 2nd YACHT Collection Releasing the first version of
              the Ape Slam Game
            </MindMapText>
            <MindMapSubtitle>New collection</MindMapSubtitle>
          </MindMapSliderItem>
        </SwiperSlide>
        <SwiperSlide>
          <MindMapSliderItem>
            <MindMapText>
              Launch your own token, the proceeds of which will go to a global
              fund to LAUNCH YACHT CLUB AND PROMOTE it
            </MindMapText>
            <MindMapSubtitle>Token</MindMapSubtitle>
          </MindMapSliderItem>
        </SwiperSlide>
        <SwiperSlide>
          <MindMapSliderItem style={{ backgroundColor: "#dc3b5a" }}>
            <MindMapSliderLink
              href="https://www.linkedin.com/pulse/how-start-nft-collection-walkthrough-guide-brands-creators/"
              target="_blank"
            >
              <MindMapSvg>
                <use href={`${Icons}#icon-arrow`} />
              </MindMapSvg>
              <MindMapSubtitle>Learn more in mind map</MindMapSubtitle>
            </MindMapSliderLink>
          </MindMapSliderItem>
        </SwiperSlide>
        <SwiperBtns />
      </Swiper>
    </Container>
  );
};
