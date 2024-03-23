import styled, { keyframes } from "styled-components";
import "../../../public/fonts/Right Grotesk/stylesheet.css";
import "../../../public/fonts/MessinaSans/stylesheet.css";

const marqueeAnimation = keyframes`
  0% { transform: translateX(50%); }
  100% { transform: translateX(-100%); }
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
  text-align: right; /* Выравнивание текста по правому краю */
  color: #fff;
`;

export const AboutSvg = styled.svg`
  margin-bottom: 16px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 24px;
  height: 24px;
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
`;

export const AboutImg = styled.img``;

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
