import styled from "styled-components";

export const HeroWrapper = styled.div`
  border-radius: 12px;
  width: 100%;

  background-color: #dc3b5a;
`;

export const HeroTitle = styled.h1`
  font-weight: 900;
  font-size: 44px;
  line-height: 100%;
  letter-spacing: 0.01em;
  color: #1e1e1e;
`;

export const HeroSubtitle = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 169%;
  color: #1e1e1e;
`;

export const HeroImg = styled.img``;

export const HeroLink = styled.a`
  display: block;
  width: 100%;
  border-radius: 8px;
  padding: 10px 0 12px 0;
  text-align: center;
  margin-bottom: 12px;

  backdrop-filter: blur(12px);
  background: rgba(30, 30, 30, 0.1);

  font-weight: 900;
  font-size: 16px;
  line-height: 119%;
  color: #1e1e1e;
`;

export const HeroText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 117%;
  text-transform: uppercase;
  text-align: center;
  color: #1e1e1e;
`;
