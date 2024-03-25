import styled from "styled-components";

import { Container } from "../Container/Container.styled";

export const MobileMenuContainer = styled(Container)`
  height: 100%;
`;

export const MobileMenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  padding-top: 130px;
  padding-bottom: 24px;
  background-color: #181818;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${({ $isActive }) => ($isActive ? "0%" : "100%")});
  visibility: ${({ $isActive }) => ($isActive ? "visible" : "hidden")};

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  height: 75%;
  flex-direction: column;
  justify-content: space-between;
`;

export const MobileMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  z-index: 10;
`;

export const MobileMenuItem = styled.li``;

export const MobileMenuLink = styled.a`
  display: block;
  font-family: "Messina Sans Mono", sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 121%;
  color: #fff;
  text-align: center;

  transition: color 250ms linear;

  &:hover {
    color: #dc3b5a;
    text-decoration: underline;
  }
`;

export const MobileMenuText = styled.p`
  font-family: "Messina Sans Mono", sans-serif;
  font-weight: 400;
  text-align: center;
  color: #fff;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const MobileMenuLogo = styled.a`
  position: absolute;
  top: 70px;
`;

export const MobileMenuSvg = styled.svg`
  width: 48px;
  height: 32px;
  fill: #fff;
`;

export const MobileMenuListBtns = styled.ul`
  position: absolute;
  top: 70px;
  right: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
`;

export const MobileMenuItemBtns = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 48px;
  height: 48px;
  border-radius: 8px;

  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.1);
`;

export const MobileMenuBtn = styled.a`
  font-family: "Messina Sans Mono", sans-serif;
  font-weight: 600;
  line-height: 117%;
  color: #fff;
`;

export const MobileMenuBtnSvg = styled.svg`
  width: 16px;
  height: 16px;
  fill: #fff;
`;
