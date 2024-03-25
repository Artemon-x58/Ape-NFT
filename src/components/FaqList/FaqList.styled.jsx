import styled from "styled-components";

export const FaqTitle = styled.h2``;

export const FaqListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 1280px) {
    gap: 48px;
  }
`;
