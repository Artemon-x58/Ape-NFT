import styled from "styled-components";
import "../../../public/fonts/MessinaSans/stylesheet.css";

export const FooterStyled = styled.footer`
  padding-top: 60px;
  padding-bottom: 24px;

  @media screen and (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 40px;
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
`;
