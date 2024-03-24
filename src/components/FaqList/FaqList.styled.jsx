import styled from "styled-components";
import "../../../public/fonts/Right Grotesk/stylesheet.css";

export const FaqTitle = styled.h2`
  margin-bottom: 24px;

  font-family: "RightGrotesk", sans-serif;
  font-weight: 900;
  font-size: 44px;
  line-height: 91%;
  text-transform: uppercase;
  text-align: center;
  color: #fff;

  @media screen and (min-width: 768px) {
    margin-bottom: 48px;

    font-size: 80px;
    line-height: 100%;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 80px;

    font-size: 160px;
  }
`;

export const FaqListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 1280px) {
    gap: 48px;
  }
`;
