import styled from "styled-components";
import "../../../public/fonts/BiroScript/stylesheet.css";
import "../../../public/fonts/MessinaSans/stylesheet.css";
import "../../../public/fonts/Right Grotesk/stylesheet.css";
import HeroMobile from "../../img/mobile-hero.png";
import HeroTablet from "../../img/tablet-hero.png";
import HeroDesktop from "../../img/desktop-hero.png";

export const HeroWrapper = styled.div`
  border-radius: 12px;
  width: 100%;
  padding-top: 36px;
  padding-bottom: 19px;

  background-color: #dc3b5a;

  @media screen and (min-width: 768px) {
    padding-top: 124px;

    background-image: url(${HeroTablet});
    background-size: contain;
    background-position: right 55% top 25px;
    background-repeat: no-repeat;
  }
`;

export const HeroTitle = styled.h1`
  display: block;
  position: relative;
  font-family: "RightGrotesk", sans-serif;
  font-weight: 900;
  font-size: 44px;
  line-height: 100%;
  letter-spacing: 0.01em;
  color: #1e1e1e;
  text-align: center;
  &::before {
    content: "YACHT ";
  }
  &::after {
    content: "APES";
  }

  @media screen and (min-width: 768px) {
    font-size: 92px;

    &::before {
      position: absolute;
      left: 0;
      top: -105px;
    }
    &::after {
      position: absolute;
      right: 0;
      top: -105px;
    }
  }
`;

export const HeroSubtitleTop = styled.p`
  font-family: "Biro Script Plus Bold US", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 169%;
  color: #1e1e1e;
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 108px;

    font-size: 20px;
    text-align: unset;
  }
`;

export const HeroSubtitleBottom = styled(HeroSubtitleTop)`
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const HeroTextWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const HeroImg = styled.div`
  margin-left: auto;
  margin-right: auto;
  height: 284px;
  width: 100%;
  background-image: url(${HeroMobile});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    height: 0;
    background-image: none;
    display: none;
  }
`;

export const HeroWrapperLinkAndText = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    gap: 16px;
  }
`;

export const HeroLink = styled.a`
  display: block;
  border-radius: 8px;
  padding: 10px 0 12px 0;
  text-align: center;
  margin-bottom: 12px;

  backdrop-filter: blur(12px);
  background: rgba(30, 30, 30, 0.1);

  font-family: "RightGrotesk", sans-serif;
  font-weight: 900;
  font-size: 16px;
  line-height: 119%;
  color: #1e1e1e;

  transition: color 0.25s linear;

  &:hover {
    color: #fff;
  }

  @media screen and (min-width: 768px) {
    width: 190px;
  }
`;

export const HeroText = styled.p`
  font-family: "Messina Sans Mono", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 117%;
  text-transform: uppercase;
  text-align: center;
  color: #1e1e1e;

  @media screen and (min-width: 768px) {
    width: 190px;
    text-indent: 75px;
    text-align: justify;
  }
`;
