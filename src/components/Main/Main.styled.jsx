import styled from "styled-components";

export const MainStyled = styled.main``;

export const SectionStyled = styled.section`
  padding-top: 60px;

  @media screen and (min-width: 768px) {
    padding-top: 80px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 120px;
  }
`;

export const SectionHero = styled(SectionStyled)`
  padding-left: 8px;
  padding-right: 8px;

  @media screen and (min-width: 768px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;
