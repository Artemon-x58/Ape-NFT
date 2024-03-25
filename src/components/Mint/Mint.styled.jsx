import styled from "styled-components";
import "../../../public/fonts/MessinaSans/stylesheet.css";
import "../../../public/fonts/Right Grotesk/stylesheet.css";

export const MintTitle = styled.h2``;

export const MintWrapperSvgText = styled.div`
  @media screen and (min-width: 768px) {
    width: 397px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1280px) {
    width: 581px;
  }
`;

export const MintSvg = styled.svg`
  display: block;
  width: 36px;
  height: 36px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const MintText = styled.p`
  margin-bottom: 16px;

  font-family: "Messina Sans Mono", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 119%;
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 40px;

    font-size: 24px;
    line-height: 121%;
  }
`;
