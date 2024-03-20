import styled from "styled-components";
import "../../../public/fonts/BiroScript/stylesheet.css";
import "../../../public/fonts/MessinaSans/stylesheet.css";
import "../../../public/fonts/Right Grotesk/stylesheet.css";

export const HeroWrapper = styled.div`
  border-radius: 12px;
  width: 100%;
  padding-top: 36px;
  padding-bottom: 19px;

  background-color: #dc3b5a;
`;

export const HeroTitle = styled.h1`
  font-family: "RightGrotesk", sans-serif;
  font-weight: 900;
  font-size: 44px;
  line-height: 100%;
  letter-spacing: 0.01em;
  color: #1e1e1e;
  text-align: center;
`;

export const HeroSubtitle = styled.p`
  font-family: "Biro Script Plus Bold US", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 169%;
  color: #1e1e1e;
  text-align: center;
`;

export const HeroImg = styled.img`
  margin-left: auto;
  margin-right: auto;
`;

export const HeroLink = styled.a`
  display: block;
  border-radius: 8px;
  padding: 10px 0 12px 0;
  text-align: center;
  margin-bottom: 12px;

  backdrop-filter: blur(12px);
  background: rgba(30, 30, 30, 0.1);

  font-family: "RightGrotesk", sans-serif;
  font-weight: 900;
  font-size: 16px;
  line-height: 119%;
  color: #1e1e1e;

  transition: color 0.25s linear;

  &:hover {
    color: #fff;
  }
`;

export const HeroText = styled.p`
  font-family: "Messina Sans Mono", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 117%;
  text-transform: uppercase;
  text-align: center;
  color: #1e1e1e;
`;
