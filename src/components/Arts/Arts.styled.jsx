import styled from "styled-components";
import "../../../public/fonts/Right Grotesk/stylesheet.css";
import "../../../public/fonts/BiroScript/stylesheet.css";

export const ArtsTitle = styled.h2`
  margin-bottom: 24px;

  font-family: "RightGrotesk", sans-serif;
  font-weight: 900;
  font-size: 44px;
  line-height: 91%;
  text-transform: uppercase;
  text-align: center;
  color: #fff;

  @media screen and (min-width: 768px) {
    font-size: 80px;
    line-height: 100%;
  }
`;

export const ArtsSliderImg = styled.img`
  border-radius: 12px;

  width: 100%;
  height: auto;
`;
