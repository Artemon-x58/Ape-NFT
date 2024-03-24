import styled from "styled-components";
import "../../../public/fonts/BiroScript/stylesheet.css";
import "../../../public/fonts/MessinaSans/stylesheet.css";
import "../../../public/fonts/Right Grotesk/stylesheet.css";

export const FaqListItemStyled = styled.li`
  position: relative;

  padding: 8px 8px 8px 39px;
  border-radius: 12px;
  background-color: ${(props) => (props.$isOpen ? "#1e1e1e" : "unset")};
  cursor: pointer;

  @media screen and (min-width: 768px) {
    padding: 18px 16px 23px 237px;
  }

  @media screen and (min-width: 1280px) {
    padding: 24px 24px 24px 466px;
  }
`;

export const FaqListItemTitle = styled.h3`
  transition: color 250ms linear;
  position: relative;

  font-family: "RightGrotesk", sans-serif;
  font-weight: 900;
  font-size: 20px;
  line-height: 100%;
  text-transform: uppercase;
  color: ${(props) => (props.$isOpen ? "#dc3b5a" : "#fff")};

  &:hover {
    color: #dc3b5a;

    &::before {
      color: #fff;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 64px;
  }

  &::before {
    content: "${(props) => props.$number}";
    position: absolute;
    left: -30px;
    transition: color 250ms linear;

    font-family: "Biro Script Plus Bold US", sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 167%;
    color: ${(props) => (props.$isOpen ? "#fff" : "#dc3b5a")};

    @media screen and (min-width: 768px) {
      left: -53px;
      top: 2px;

      font-size: 16px;
      line-height: 169%;
    }

    @media screen and (min-width: 1280px) {
      left: -95px;
      top: 7px;

      font-size: 24px;
      line-height: 167%;
    }
  }
`;

export const FaqListItemText = styled.p`
  margin-top: 10px;

  font-family: "Messina Sans Mono", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 117%;
  text-transform: uppercase;
  color: #fff;

  @media screen and (min-width: 768px) {
    margin-top: 12px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 36px;

    font-size: 16px;
    line-height: 119%;
  }
`;

export const FaqImg = styled.img`
  display: none;
  border-radius: 16px;
  width: 148px;
  height: 183px;
  transform: rotate(-16deg);

  @media screen and (min-width: 768px) {
    position: absolute;
    top: -12px;
    left: 19px;

    display: ${(props) => (props.$isOpen ? "unset" : "none")};
  }

  @media screen and (min-width: 1280px) {
    width: 248px;
    height: 306px;
    top: -30px;
    left: 85px;
  }
`;
