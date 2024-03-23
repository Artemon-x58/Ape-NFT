import styled from "styled-components";
import "../../../public/fonts/BiroScript/stylesheet.css";

export const SwiperBtnsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 24px;
`;

export const SwiperBtnsStyled = styled.button`
  border: none;
  background-color: inherit;
  transition: color 250ms linear;

  font-family: "Biro Script Plus Bold US", sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  color: #fff;

  &:hover,
  &:focus {
    color: #dc3b5a;
  }
`;
