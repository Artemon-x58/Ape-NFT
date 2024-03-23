import { useSwiper } from "swiper/react";
import { SwiperBtnsStyled, SwiperBtnsWrapper } from "./SwiperBtns.styled";

export const SwiperBtns = () => {
  const swiper = useSwiper();

  return (
    <SwiperBtnsWrapper>
      <SwiperBtnsStyled onClick={() => swiper.slidePrev()}>
        Prev
      </SwiperBtnsStyled>
      <SwiperBtnsStyled onClick={() => swiper.slideNext()}>
        Next
      </SwiperBtnsStyled>
    </SwiperBtnsWrapper>
  );
};
