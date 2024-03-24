import styled, { keyframes } from "styled-components";
import "../../../public/fonts/Right Grotesk/stylesheet.css";
import "../../../public/fonts/MessinaSans/stylesheet.css";
import AboutMobileImg from "../../img/about-mobile.png";
import AboutTabletImg from "../../img/about-tablet.png";
import AboutDesktopImg from "../../img/about-desktop.png";

const marqueeAnimation = keyframes`
  0% { transform: translateX(50%); }
  100% { transform: translateX(-100%); }
`;

export const AboutMainWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 36px;
    column-gap: 48px;
    row-gap: 68px;

    background-image: url(${AboutTabletImg});
    background-position: top 120px left 280px;
    background-size: 313px 427px;
    background-repeat: no-repeat;
  }
`;

export const AboutTitle = styled.h2`
  margin-bottom: 16px;

  font-family: "RightGrotesk", sans-serif;
  font-weight: 900;
  font-size: 40px;
  line-height: 100%;
  text-transform: uppercase;
  text-align: left;
  color: #fff;

  @media screen and (min-width: 768px) {
    width: 269px;
    margin-bottom: 0;
    font-size: 60px;
    text-align: unset;

    .about-title-mobile {
      display: none;
    }
  }
`;

export const AboutTitleSpan = styled.span`
  color: #dc3b5a;
  text-align: left;
`;

export const AboutSubtitle = styled.p`
  margin-bottom: 36px;

  font-family: "Messina Sans Mono", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 119%;
  text-transform: uppercase;
  text-align: right;
  color: #fff;

  .about-subtitle-tablet {
    display: none;
  }

  @media screen and (min-width: 768px) {
    width: 275px;
    margin-bottom: 0;

    .about-subtitle-tablet {
      display: unset;
    }

    .about-subtitle-mobile {
      display: none;
    }
  }
`;

export const AboutWarapperSvgText = styled.div`
  @media screen and (min-width: 768px) {
    width: 269px;
  }
`;

export const AboutSvg = styled.svg`
  margin-bottom: 16px;

  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const AboutText = styled.p`
  margin-bottom: 40px;

  font-family: "Messina Sans Mono", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 117%;
  text-transform: uppercase;
  text-align: center;
  color: #fff;

  @media screen and (min-width: 768px) {
    width: 269px;
    margin-bottom: 0;

    font-size: 16px;
  }
`;

export const AboutImg = styled.div`
  width: 100%;
  height: 292px;

  background-image: url(${AboutMobileImg});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const AboutWrapperLine = styled.div`
  height: 52px;
  white-space: nowrap;
  display: flex;
  align-items: center;

  background-color: #dc3b5a;
`;

export const MarqueeWrapper = styled.div`
  overflow: hidden;
`;

export const MarqueeText = styled.div`
  white-space: nowrap;
  animation: ${marqueeAnimation} 15s linear infinite;
  display: inline-block;
`;

export const AboutSvgLine = styled.svg`
  width: 36px;
  height: 36px;
  margin-left: 24px;
  margin-right: 24px;
  vertical-align: top;
`;

export const AboutLinespan = styled.span`
  font-family: "RightGrotesk", sans-serif;
  font-weight: 900;
  font-size: 36px;
  line-height: 100%;
  text-transform: uppercase;
  color: #fff;
`;
