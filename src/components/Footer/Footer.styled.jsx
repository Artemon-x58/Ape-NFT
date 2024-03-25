import styled from "styled-components";

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
  text-align: center;

  @media screen and (min-width: 1280px) {
    width: 363px;
    margin-left: auto;
    margin-right: auto;

    font-size: 16px;
    line-height: 119%;
  }
`;
