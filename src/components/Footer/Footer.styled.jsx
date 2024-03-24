import styled from "styled-components";
import "../../../public/fonts/MessinaSans/stylesheet.css";

export const FooterStyled = styled.footer`
  padding-top: 60px;
  padding-bottom: 24px;

  @media screen and (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 40px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 120px;
    padding-bottom: 42px;
  }
`;

export const FooterText = styled.p`
  font-family: "Messina Sans Mono", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 117%;
  text-transform: uppercase;
  text-align: center;
  color: #fff;

  @media screen and (min-width: 1280px) {
    width: 363px;
    margin-left: auto;
    margin-right: auto;

    font-size: 16px;
    line-height: 119%;
  }
`;
