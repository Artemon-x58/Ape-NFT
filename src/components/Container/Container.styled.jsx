import styled from "styled-components";

export const Container = styled.div`
  max-width: 336px;
  padding: 0 72px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 592px;
    padding-left: 88px;
    padding-right: 88px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1008px;
    padding-left: 136px;
    padding-right: 136px;
  }
`;
