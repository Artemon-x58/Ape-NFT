import styled from "styled-components";
import "../../../public/fonts/MessinaSans/stylesheet.css";

export const MindMapTitle = styled.h2``;

export const MindMapList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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
  font-size: 32px;
  line-height: 100%;

  @media screen and (min-width: 1280px) {
    font-size: 64px;
  }
`;

export const MindMapText = styled.p`
  font-family: "Messina Sans Mono", sans-serif;
  font-weight: 400;
  text-transform: uppercase;

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
