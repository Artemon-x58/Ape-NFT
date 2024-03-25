import styled from "styled-components";

export const SwiperBtnsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 24px;

  @media screen and (min-width: 1280px) {
    margin-top: 48px;
  }
`;

export const SwiperBtnsStyled = styled.button`
  border: none;
  background-color: inherit;
  transition: color 250ms linear;

  font-family: "Biro Script Plus Bold US", sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 125%;
  color: #fff;

  &:hover,
  &:focus {
    color: #dc3b5a;
  }
`;
