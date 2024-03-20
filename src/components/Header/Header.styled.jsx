import styled from "styled-components";
import "../../../public/fonts/MessinaSans/stylesheet.css";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  padding-top: 54px;

  position: absolute;
  top: 16px;
  left: 16px;
  right: 16px; /* Задаем правый отступ */

  /* Распределение элементов по краям родительского контейнера */
`;

export const Logo = styled.a``;

export const LogoSvg = styled.svg`
  width: 48px;
  height: 32px;
  fill: #1e1e1e;
`;

export const LogoUse = styled.use``;

export const Menu = styled.button`
  border: none;
  background: transparent;

  font-family: "Messina Sans Mono", sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 117%;
  color: #1e1e1e;

  transition: color 250ms linear;

  &:hover,
  &:focus {
    color: #f0f0f0;
  }
`;

export const SocialList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SocialListWrapperItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  /* padding: 10px; */
  width: 48px;
  height: 48px;

  backdrop-filter: blur(12px);
  background: rgba(30, 30, 30, 0.1);
`;

export const SocialListItem = styled.li``;

export const SocialListLink = styled.a``;

export const SocialSvg = styled.svg`
  width: 16px;
  height: 16px;
  padding: 10px;

  fill: #1e1e1e;

  transition: fill 250ms linear;

  &:hover,
  &:focus {
    fill: #f0f0f0;
  }
`;

export const SocialUse = styled.use``;
