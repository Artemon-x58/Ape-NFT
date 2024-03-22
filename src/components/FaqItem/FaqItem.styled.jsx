import styled from "styled-components";
import "../../../public/fonts/BiroScript/stylesheet.css";
import "../../../public/fonts/MessinaSans/stylesheet.css";
import "../../../public/fonts/Right Grotesk/stylesheet.css";

export const FaqListItemStyled = styled.li`
  padding: 8px 8px 8px 39px;
  border-radius: 12px;
  background-color: ${(props) => (props.$isOpen ? "#1e1e1e" : "none")};

  cursor: pointer;
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
  }
  &:hover {
    color: #dc3b5a;
    &::before {
      color: #fff;
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
`;
