import styled from "styled-components";
import "../../../public/fonts/MessinaSans/stylesheet.css";
import "../../../public/fonts/Right Grotesk/stylesheet.css";

export const MindMapTitle = styled.h2`
  margin-bottom: 24px;

  font-family: "RightGrotesk", sans-serif;
  font-weight: 900;
  font-size: 44px;
  line-height: 91%;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
`;

export const MindMapSliderItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 12px;
  padding: 24px 12px;
  height: 194px;

  background: #1e1e1e;
`;

export const MindMapSliderLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const MindMapSubtitle = styled.h3`
  font-family: "RightGrotesk", sans-serif;
  font-weight: 900;
  font-size: 32px;
  line-height: 100%;
  text-transform: uppercase;
  color: #fff;
`;

export const MindMapText = styled.p`
  font-family: "Messina Sans Mono", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 117%;
  text-transform: uppercase;
  color: #fff;
`;

export const MindMapSvg = styled.svg`
  width: 24px;
  height: 24px;
  margin-left: auto;
`;
