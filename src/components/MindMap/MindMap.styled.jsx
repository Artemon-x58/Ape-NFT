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

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;

    font-size: 80px;
    line-height: 100%;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 80px;

    font-size: 160px;
  }
`;

export const MindMapList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // Две колонки в строке
  grid-gap: 24px;

  @media screen and (min-width: 1280px) {
    grid-column-gap: 46px;
    grid-row-gap: 48px;
  }
`;

export const MindMapItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 12px;
  padding: 24px 12px;
  height: 194px;

  background: #1e1e1e;

  @media screen and (min-width: 768px) {
    padding-left: 24px;
    padding-right: 24px;
  }

  @media screen and (min-width: 1280px) {
    height: 480px;
  }
`;

export const MindMapLink = styled.a`
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

  @media screen and (min-width: 1280px) {
    font-size: 64px;
  }
`;

export const MindMapText = styled.p`
  font-family: "Messina Sans Mono", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 117%;
  text-transform: uppercase;
  color: #fff;

  @media screen and (min-width: 768px) {
    width: 128px;
    margin-left: auto;
  }

  @media screen and (min-width: 1280px) {
    width: 256px;

    font-size: 24px;
    line-height: 121%;
  }
`;

export const MindMapSvg = styled.svg`
  width: 24px;
  height: 24px;
  margin-left: auto;

  @media screen and (min-width: 768px) {
    width: 48px;
    height: 48px;
  }

  @media screen and (min-width: 1280px) {
    width: 64px;
    height: 64px;
  }
`;
